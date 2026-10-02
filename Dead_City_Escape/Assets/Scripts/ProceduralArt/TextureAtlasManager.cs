// ---------------------------------------------------------------------------
// Dead City Escape - Texture Atlas Manager
// Manages texture atlases for efficient mobile rendering with ASTC compression
// ---------------------------------------------------------------------------
using System.Collections.Generic;
using UnityEngine;
using DeadCityEscape.Logic;

namespace DeadCityEscape.ProceduralArt
{
    /// <summary>
    /// Building style categories for texture atlasing.
    /// </summary>
    public enum BuildingStyle
    {
        Residential,
        Commercial,
        Industrial,
        Derelict
    }

    /// <summary>
    /// Manages texture atlases for buildings, ground, and roads.
    /// Creates 2048×2048 ASTC atlases per BuildingStyle (4 atlases)
    /// and 1024×1024 atlas for ground and road textures.
    /// </summary>
    public class TextureAtlasManager : MonoBehaviour
    {
        private static TextureAtlasManager _instance;
        public static TextureAtlasManager Instance => _instance;

        [Header("Atlas Configuration")]
        [SerializeField] private int buildingAtlasSize = 2048;
        [SerializeField] private int groundRoadAtlasSize = 1024;
        [SerializeField] private int textureResolution = 256;

        // Atlas textures
        private Dictionary<BuildingStyle, Texture2D> _buildingAtlases;
        private Texture2D _groundRoadAtlas;

        // UV mapping data
        private Dictionary<BuildingStyle, Rect[]> _buildingUVRects;
        private Rect[] _groundRoadUVRects;

        private bool _initialized = false;

        private void Awake()
        {
            if (_instance != null && _instance != this)
            {
                Destroy(gameObject);
                return;
            }
            _instance = this;
        }

        /// <summary>
        /// Initialize all texture atlases.
        /// </summary>
        public void Initialize(int seed)
        {
            if (_initialized) return;

            Debug.Log("TextureAtlasManager: Initializing texture atlases...");

            _buildingAtlases = new Dictionary<BuildingStyle, Texture2D>();
            _buildingUVRects = new Dictionary<BuildingStyle, Rect[]>();

            // Create building atlases (one per style)
            foreach (BuildingStyle style in System.Enum.GetValues(typeof(BuildingStyle)))
            {
                CreateBuildingAtlas(style, seed);
            }

            // Create ground and road atlas
            CreateGroundRoadAtlas(seed);

            _initialized = true;
            Debug.Log("TextureAtlasManager: Initialization complete.");
        }

        /// <summary>
        /// Create a texture atlas for a specific building style.
        /// </summary>
        private void CreateBuildingAtlas(BuildingStyle style, int seed)
        {
            // Create 2048×2048 atlas with 8×8 grid of 256×256 textures
            int tilesPerRow = buildingAtlasSize / textureResolution;
            int totalTiles = tilesPerRow * tilesPerRow;

            Texture2D atlas = new Texture2D(buildingAtlasSize, buildingAtlasSize, TextureFormat.RGBA32, true);
            Rect[] uvRects = new Rect[totalTiles];

            var rng = new SeededRNG(seed + (int)style * 1000);

            for (int y = 0; y < tilesPerRow; y++)
            {
                for (int x = 0; x < tilesPerRow; x++)
                {
                    int tileIndex = y * tilesPerRow + x;
                    int tileSeed = rng.NextInt(0, 1000000);

                    // Generate building texture for this tile
                    Texture2D tileTexture = ProceduralTexture.GenerateBuildingTexture(textureResolution, tileSeed);

                    // Copy pixels to atlas
                    Color[] pixels = tileTexture.GetPixels();
                    atlas.SetPixels(x * textureResolution, y * textureResolution, textureResolution, textureResolution, pixels);

                    // Store UV rect (normalized coordinates)
                    float u = (float)x / tilesPerRow;
                    float v = (float)y / tilesPerRow;
                    float uvSize = 1f / tilesPerRow;
                    uvRects[tileIndex] = new Rect(u, v, uvSize, uvSize);

                    Destroy(tileTexture);
                }
            }

            atlas.Apply(true);
            atlas.wrapMode = TextureWrapMode.Clamp;
            atlas.filterMode = FilterMode.Bilinear;

            // Apply ASTC compression on mobile
            if (Application.isMobilePlatform)
            {
                atlas.Compress(true);
            }

            _buildingAtlases[style] = atlas;
            _buildingUVRects[style] = uvRects;

            Debug.Log($"TextureAtlasManager: Created {style} building atlas with {totalTiles} tiles.");
        }

        /// <summary>
        /// Create a combined atlas for ground and road textures.
        /// </summary>
        private void CreateGroundRoadAtlas(int seed)
        {
            // Create 1024×1024 atlas with 4×4 grid of 256×256 textures
            int tilesPerRow = groundRoadAtlasSize / textureResolution;
            int totalTiles = tilesPerRow * tilesPerRow;

            Texture2D atlas = new Texture2D(groundRoadAtlasSize, groundRoadAtlasSize, TextureFormat.RGBA32, true);
            Rect[] uvRects = new Rect[totalTiles];

            var rng = new SeededRNG(seed + 10000);

            for (int y = 0; y < tilesPerRow; y++)
            {
                for (int x = 0; x < tilesPerRow; x++)
                {
                    int tileIndex = y * tilesPerRow + x;
                    int tileSeed = rng.NextInt(0, 1000000);

                    // Alternate between ground and road textures
                    Texture2D tileTexture = (tileIndex % 2 == 0)
                        ? ProceduralTexture.GenerateGroundTexture(textureResolution, tileSeed)
                        : ProceduralTexture.GenerateRoadTexture(textureResolution, tileSeed);

                    // Copy pixels to atlas
                    Color[] pixels = tileTexture.GetPixels();
                    atlas.SetPixels(x * textureResolution, y * textureResolution, textureResolution, textureResolution, pixels);

                    // Store UV rect
                    float u = (float)x / tilesPerRow;
                    float v = (float)y / tilesPerRow;
                    float uvSize = 1f / tilesPerRow;
                    uvRects[tileIndex] = new Rect(u, v, uvSize, uvSize);

                    Destroy(tileTexture);
                }
            }

            atlas.Apply(true);
            atlas.wrapMode = TextureWrapMode.Clamp;
            atlas.filterMode = FilterMode.Bilinear;

            // Apply ASTC compression on mobile
            if (Application.isMobilePlatform)
            {
                atlas.Compress(true);
            }

            _groundRoadAtlas = atlas;
            _groundRoadUVRects = uvRects;

            Debug.Log($"TextureAtlasManager: Created ground/road atlas with {totalTiles} tiles.");
        }

        /// <summary>
        /// Get the atlas texture for a building style.
        /// </summary>
        public Texture2D GetBuildingAtlas(BuildingStyle style)
        {
            if (!_initialized)
            {
                Debug.LogError("TextureAtlasManager: Not initialized!");
                return null;
            }

            return _buildingAtlases.TryGetValue(style, out var atlas) ? atlas : null;
        }

        /// <summary>
        /// Get the ground/road atlas texture.
        /// </summary>
        public Texture2D GetGroundRoadAtlas()
        {
            if (!_initialized)
            {
                Debug.LogError("TextureAtlasManager: Not initialized!");
                return null;
            }

            return _groundRoadAtlas;
        }

        /// <summary>
        /// Get UV rect for a building texture tile.
        /// </summary>
        public Rect GetBuildingUVRect(BuildingStyle style, int tileIndex)
        {
            if (!_initialized || !_buildingUVRects.TryGetValue(style, out var rects))
            {
                return new Rect(0, 0, 1, 1);
            }

            tileIndex = Mathf.Clamp(tileIndex, 0, rects.Length - 1);
            return rects[tileIndex];
        }

        /// <summary>
        /// Get UV rect for a ground/road texture tile.
        /// </summary>
        public Rect GetGroundRoadUVRect(int tileIndex)
        {
            if (!_initialized || _groundRoadUVRects == null)
            {
                return new Rect(0, 0, 1, 1);
            }

            tileIndex = Mathf.Clamp(tileIndex, 0, _groundRoadUVRects.Length - 1);
            return _groundRoadUVRects[tileIndex];
        }

        /// <summary>
        /// Remap UVs to use atlas coordinates.
        /// </summary>
        public void RemapUVs(Mesh mesh, Rect uvRect)
        {
            Vector2[] uvs = mesh.uv;
            for (int i = 0; i < uvs.Length; i++)
            {
                uvs[i] = new Vector2(
                    uvRect.x + uvs[i].x * uvRect.width,
                    uvRect.y + uvs[i].y * uvRect.height
                );
            }
            mesh.uv = uvs;
        }
    }
}
