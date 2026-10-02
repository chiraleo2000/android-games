// ---------------------------------------------------------------------------
// Dead City Escape - Procedural Texture Generator (kkrieger-style)
// Generates all textures from code parameters at runtime.
// No external texture assets needed -- everything from recipes.
// ---------------------------------------------------------------------------
using System;
using System.Security.Cryptography;
using System.Text;
using UnityEngine;
using DeadCityEscape.Logic;

namespace DeadCityEscape.ProceduralArt
{
    /// <summary>
    /// Type of procedural texture to generate.
    /// </summary>
    public enum TextureType
    {
        Ground,
        BuildingWall,
        Road,
        NeonSign
    }

    /// <summary>
    /// Recipe for generating a procedural texture.
    /// </summary>
    [Serializable]
    public struct TextureRecipe
    {
        public int seed;
        public TextureType type;
        public int resolution;
        public Color[] palette;  // Optional color palette for variation

        public TextureRecipe(int seed, TextureType type, int resolution = 256, Color[] palette = null)
        {
            this.seed = seed;
            this.type = type;
            this.resolution = resolution;
            this.palette = palette ?? new Color[0];
        }
    }

    /// <summary>
    /// Generates textures procedurally from parameter recipes.
    /// Inspired by kkrieger's approach of zero external assets.
    /// All textures are created from noise, gradients, and math.
    /// </summary>
    public static class ProceduralTexture
    {
        private static Texture2D _fallbackTexture;

        /// <summary>
        /// Generate a texture from a recipe, using cache if available.
        /// </summary>
        public static Texture2D Generate(TextureRecipe recipe)
        {
            // Compute cache key
            string recipeHash = ComputeRecipeHash(recipe);
            int deviceTier = QualitySettings.GetQualityLevel();
            string cacheKey = $"{Application.version}:{recipeHash}:{deviceTier}";

            // Try to get from cache
            if (RecipeCache.TryGet(cacheKey, out byte[] cachedData))
            {
                try
                {
                    Texture2D tex = new Texture2D(2, 2);
                    if (tex.LoadImage(cachedData))
                    {
                        return tex;
                    }
                }
                catch (Exception e)
                {
                    Debug.LogError($"ProceduralTexture: Failed to load cached texture: {e.Message}");
                }
            }

            // Generate texture
            Texture2D generated = null;
            try
            {
                generated = recipe.type switch
                {
                    TextureType.Ground => GenerateGroundTexture(recipe.resolution, recipe.seed),
                    TextureType.BuildingWall => GenerateBuildingTexture(recipe.resolution, recipe.seed),
                    TextureType.Road => GenerateRoadTexture(recipe.resolution, recipe.seed),
                    TextureType.NeonSign => GenerateNeonSignTexture(recipe.resolution, 
                        recipe.palette.Length > 0 ? recipe.palette[0] : new Color(0, 1, 0.8f), recipe.seed),
                    _ => GetFallbackTexture()
                };

                if (generated != null)
                {
                    // Cache the generated texture
                    byte[] pngData = generated.EncodeToPNG();
                    RecipeCache.Store(cacheKey, pngData);
                }

                return generated;
            }
            catch (Exception e)
            {
                Debug.LogError($"ProceduralTexture: Generation failed for {recipe.type}: {e.Message}");
                return GetFallbackTexture();
            }
        }

        /// <summary>
        /// Get a fallback solid-color texture for when generation fails.
        /// </summary>
        private static Texture2D GetFallbackTexture()
        {
            if (_fallbackTexture == null)
            {
                _fallbackTexture = new Texture2D(2, 2, TextureFormat.RGB24, false);
                Color[] pixels = new Color[4];
                for (int i = 0; i < 4; i++)
                {
                    pixels[i] = new Color(0.5f, 0.5f, 0.5f);
                }
                _fallbackTexture.SetPixels(pixels);
                _fallbackTexture.Apply();
            }
            return _fallbackTexture;
        }

        /// <summary>
        /// Compute a hash of the recipe for cache key generation.
        /// </summary>
        private static string ComputeRecipeHash(TextureRecipe recipe)
        {
            using (var sha256 = SHA256.Create())
            {
                StringBuilder sb = new StringBuilder();
                sb.Append(recipe.seed);
                sb.Append(recipe.type);
                sb.Append(recipe.resolution);
                foreach (var color in recipe.palette)
                {
                    sb.Append(color.r);
                    sb.Append(color.g);
                    sb.Append(color.b);
                    sb.Append(color.a);
                }

                byte[] hashBytes = sha256.ComputeHash(Encoding.UTF8.GetBytes(sb.ToString()));
                return BitConverter.ToString(hashBytes).Replace("-", "").ToLowerInvariant();
            }
        }
        /// <summary>
        /// Generates a concrete/asphalt ground texture.
        /// </summary>
        public static Texture2D GenerateGroundTexture(int size = 256, int seed = 0)
        {
            var rng = new SeededRNG(seed);
            var tex = new Texture2D(size, size, TextureFormat.RGB24, true);
            Color[] pixels = new Color[size * size];

            for (int y = 0; y < size; y++)
            {
                for (int x = 0; x < size; x++)
                {
                    float nx = (float)x / size;
                    float ny = (float)y / size;

                    // Multi-octave noise for ground variation
                    float n = rng.Noise2D(nx * 4, ny * 4) * 0.5f +
                              rng.Noise2D(nx * 8, ny * 8) * 0.25f +
                              rng.Noise2D(nx * 16, ny * 16) * 0.125f;

                    // Dark gray asphalt base
                    float brightness = 0.15f + n * 0.12f;

                    // Occasional cracks (dark lines)
                    float crack = rng.Noise2D(nx * 32, ny * 32);
                    if (crack > 0.85f) brightness *= 0.5f;

                    pixels[y * size + x] = new Color(brightness, brightness,
                        brightness * 0.95f);
                }
            }

            tex.SetPixels(pixels);
            tex.Apply(true);
            tex.wrapMode = TextureWrapMode.Repeat;
            tex.filterMode = FilterMode.Bilinear;
            return tex;
        }

        /// <summary>
        /// Generates a building wall texture with neon-dystopian style.
        /// </summary>
        public static Texture2D GenerateBuildingTexture(int size = 256, int seed = 0)
        {
            var rng = new SeededRNG(seed);
            var tex = new Texture2D(size, size, TextureFormat.RGB24, true);
            Color[] pixels = new Color[size * size];

            for (int y = 0; y < size; y++)
            {
                for (int x = 0; x < size; x++)
                {
                    float nx = (float)x / size;
                    float ny = (float)y / size;

                    // Brick/panel pattern
                    int brickX = (int)(nx * 8) % 2;
                    int brickY = (int)(ny * 16) % 2;
                    float brickEdge = 0f;

                    float fracX = (nx * 8) % 1f;
                    float fracY = (ny * 16) % 1f;
                    if (fracX < 0.03f || fracX > 0.97f) brickEdge = 1f;
                    if (fracY < 0.06f || fracY > 0.94f) brickEdge = 1f;

                    // Base concrete color with variation
                    float noise = rng.Noise2D(nx * 12, ny * 12) * 0.1f;
                    float base_r = 0.25f + noise;
                    float base_g = 0.23f + noise;
                    float base_b = 0.28f + noise;

                    // Mortar lines (darker)
                    if (brickEdge > 0)
                    {
                        base_r *= 0.5f;
                        base_g *= 0.5f;
                        base_b *= 0.5f;
                    }

                    // Grunge overlay
                    float grunge = rng.Noise2D(nx * 24, ny * 24);
                    if (grunge > 0.8f)
                    {
                        base_r *= 0.7f;
                        base_g *= 0.7f;
                        base_b *= 0.7f;
                    }

                    // Window pattern
                    bool isWindow = (brickX == 0 && brickY == 0) &&
                        fracX > 0.2f && fracX < 0.8f &&
                        fracY > 0.2f && fracY < 0.8f;

                    if (isWindow)
                    {
                        base_r = 0.05f;
                        base_g = 0.05f;
                        base_b = 0.08f;
                    }

                    pixels[y * size + x] = new Color(
                        Mathf.Clamp01(base_r),
                        Mathf.Clamp01(base_g),
                        Mathf.Clamp01(base_b));
                }
            }

            tex.SetPixels(pixels);
            tex.Apply(true);
            tex.wrapMode = TextureWrapMode.Repeat;
            return tex;
        }

        /// <summary>
        /// Generates a road/asphalt texture with lane markings.
        /// </summary>
        public static Texture2D GenerateRoadTexture(int size = 256, int seed = 0)
        {
            var rng = new SeededRNG(seed);
            var tex = new Texture2D(size, size, TextureFormat.RGB24, true);
            Color[] pixels = new Color[size * size];

            for (int y = 0; y < size; y++)
            {
                for (int x = 0; x < size; x++)
                {
                    float nx = (float)x / size;
                    float ny = (float)y / size;

                    float noise = rng.Noise2D(nx * 8, ny * 8) * 0.05f;
                    float r = 0.12f + noise;
                    float g = 0.12f + noise;
                    float b = 0.13f + noise;

                    // Center lane marking (dashed yellow)
                    float center = Mathf.Abs(nx - 0.5f);
                    if (center < 0.02f)
                    {
                        bool dashOn = ((int)(ny * 8)) % 2 == 0;
                        if (dashOn)
                        {
                            r = 0.8f;
                            g = 0.7f;
                            b = 0.1f;
                        }
                    }

                    // Edge lines (white)
                    if (nx < 0.05f || nx > 0.95f)
                    {
                        r = 0.6f;
                        g = 0.6f;
                        b = 0.6f;
                    }

                    pixels[y * size + x] = new Color(r, g, b);
                }
            }

            tex.SetPixels(pixels);
            tex.Apply(true);
            tex.wrapMode = TextureWrapMode.Repeat;
            return tex;
        }

        /// <summary>
        /// Generates a neon sign texture with glowing text effect.
        /// </summary>
        public static Texture2D GenerateNeonSignTexture(int size = 128,
            Color glowColor = default, int seed = 0)
        {
            if (glowColor == default) glowColor = new Color(0, 1, 0.8f);

            var tex = new Texture2D(size, size, TextureFormat.RGBA32, false);
            Color[] pixels = new Color[size * size];

            for (int y = 0; y < size; y++)
            {
                for (int x = 0; x < size; x++)
                {
                    float nx = (float)x / size;
                    float ny = (float)y / size;

                    // Create a simple neon bar pattern
                    float distFromCenter = Mathf.Abs(ny - 0.5f);
                    float glow = Mathf.Max(0, 1f - distFromCenter * 4f);
                    glow = glow * glow;

                    // Horizontal bars
                    float bar1 = Mathf.Max(0, 1f - Mathf.Abs(ny - 0.3f) * 8f);
                    float bar2 = Mathf.Max(0, 1f - Mathf.Abs(ny - 0.7f) * 8f);
                    glow = Mathf.Max(glow, Mathf.Max(bar1, bar2));

                    pixels[y * size + x] = new Color(
                        glowColor.r * glow,
                        glowColor.g * glow,
                        glowColor.b * glow,
                        glow);
                }
            }

            tex.SetPixels(pixels);
            tex.Apply(false);
            return tex;
        }
    }
}
