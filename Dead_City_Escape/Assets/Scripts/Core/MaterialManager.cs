// ---------------------------------------------------------------------------
// Dead City Escape - Material Manager
// Manages materials with GPU instancing and static batching support
// ---------------------------------------------------------------------------
using UnityEngine;
using DeadCityEscape.ProceduralArt;

namespace DeadCityEscape.Core
{
    /// <summary>
    /// Manages materials for buildings, roads, and other procedural geometry.
    /// Enables GPU instancing for efficient mobile rendering.
    /// </summary>
    public class MaterialManager : MonoBehaviour
    {
        private static MaterialManager _instance;
        public static MaterialManager Instance => _instance;

        [Header("Shader References")]
        [SerializeField] private Shader urpLitShader;
        [SerializeField] private Shader urpUnlitShader;

        // Material caches
        private Material _buildingMaterial;
        private Material _roadMaterial;
        private Material _groundMaterial;

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
        /// Initialize materials with GPU instancing enabled.
        /// </summary>
        public void Initialize()
        {
            if (_initialized) return;

            Debug.Log("MaterialManager: Initializing materials with GPU instancing...");

            // Find shaders if not assigned
            if (urpLitShader == null)
            {
                urpLitShader = Shader.Find("Universal Render Pipeline/Lit");
            }
            if (urpUnlitShader == null)
            {
                urpUnlitShader = Shader.Find("Universal Render Pipeline/Unlit");
            }

            // Create materials
            CreateBuildingMaterial();
            CreateRoadMaterial();
            CreateGroundMaterial();

            _initialized = true;
            Debug.Log("MaterialManager: Initialization complete.");
        }

        /// <summary>
        /// Create building material with GPU instancing.
        /// </summary>
        private void CreateBuildingMaterial()
        {
            _buildingMaterial = new Material(urpLitShader);
            _buildingMaterial.name = "BuildingMaterial_Instanced";
            
            // Enable GPU instancing
            _buildingMaterial.enableInstancing = true;
            
            // Set default properties
            _buildingMaterial.SetFloat("_Smoothness", 0.2f);
            _buildingMaterial.SetFloat("_Metallic", 0.0f);
            
            Debug.Log("MaterialManager: Created building material with GPU instancing.");
        }

        /// <summary>
        /// Create road material with GPU instancing.
        /// </summary>
        private void CreateRoadMaterial()
        {
            _roadMaterial = new Material(urpLitShader);
            _roadMaterial.name = "RoadMaterial_Instanced";
            
            // Enable GPU instancing
            _roadMaterial.enableInstancing = true;
            
            // Set default properties
            _roadMaterial.SetFloat("_Smoothness", 0.1f);
            _roadMaterial.SetFloat("_Metallic", 0.0f);
            
            Debug.Log("MaterialManager: Created road material with GPU instancing.");
        }

        /// <summary>
        /// Create ground material with GPU instancing.
        /// </summary>
        private void CreateGroundMaterial()
        {
            _groundMaterial = new Material(urpLitShader);
            _groundMaterial.name = "GroundMaterial_Instanced";
            
            // Enable GPU instancing
            _groundMaterial.enableInstancing = true;
            
            // Set default properties
            _groundMaterial.SetFloat("_Smoothness", 0.15f);
            _groundMaterial.SetFloat("_Metallic", 0.0f);
            
            Debug.Log("MaterialManager: Created ground material with GPU instancing.");
        }

        /// <summary>
        /// Get building material.
        /// </summary>
        public Material GetBuildingMaterial()
        {
            if (!_initialized)
            {
                Debug.LogError("MaterialManager: Not initialized!");
                return null;
            }
            return _buildingMaterial;
        }

        /// <summary>
        /// Get road material.
        /// </summary>
        public Material GetRoadMaterial()
        {
            if (!_initialized)
            {
                Debug.LogError("MaterialManager: Not initialized!");
                return null;
            }
            return _roadMaterial;
        }

        /// <summary>
        /// Get ground material.
        /// </summary>
        public Material GetGroundMaterial()
        {
            if (!_initialized)
            {
                Debug.LogError("MaterialManager: Not initialized!");
                return null;
            }
            return _groundMaterial;
        }

        /// <summary>
        /// Apply static batching to a collection of GameObjects.
        /// Useful for road quads within a zone.
        /// </summary>
        public void ApplyStaticBatching(GameObject[] objects)
        {
            if (objects == null || objects.Length == 0) return;

            // Mark objects as static for batching
            foreach (var obj in objects)
            {
                if (obj != null)
                {
                    obj.isStatic = true;
                }
            }

            // Combine meshes for static batching
            StaticBatchingUtility.Combine(objects, objects[0].transform.parent.gameObject);
            
            Debug.Log($"MaterialManager: Applied static batching to {objects.Length} objects.");
        }

        /// <summary>
        /// Create a material instance with a specific texture.
        /// </summary>
        public Material CreateInstancedMaterial(Material baseMaterial, Texture2D texture)
        {
            if (baseMaterial == null) return null;

            Material instance = new Material(baseMaterial);
            instance.enableInstancing = true;
            
            if (texture != null)
            {
                instance.mainTexture = texture;
            }
            
            return instance;
        }
    }
}
