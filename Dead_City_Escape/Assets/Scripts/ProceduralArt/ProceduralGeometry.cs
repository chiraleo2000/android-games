// ---------------------------------------------------------------------------
// Dead City Escape - Procedural Geometry (kkrieger-style)
// Generates all 3D meshes from code at runtime.
// Low-poly Doom-style geometry with LOD support.
// ---------------------------------------------------------------------------
using System;
using System.Collections.Generic;
using System.Security.Cryptography;
using System.Text;
using UnityEngine;
using DeadCityEscape.Logic;

namespace DeadCityEscape.ProceduralArt
{
    /// <summary>
    /// Building footprint data for procedural generation.
    /// </summary>
    [Serializable]
    public struct BuildingFootprint
    {
        public float X, Z;          // world-space origin (zone-local)
        public float Width, Depth;  // metres
        public int FloorCount;      // 1–6
        public int RecipeSeed;      // deterministic seed for generation

        public BuildingFootprint(float x, float z, float width, float depth, int floorCount, int recipeSeed)
        {
            X = x;
            Z = z;
            Width = width;
            Depth = depth;
            FloorCount = floorCount;
            RecipeSeed = recipeSeed;
        }
    }

    /// <summary>
    /// Road segment data for procedural generation.
    /// </summary>
    [Serializable]
    public struct RoadSegment
    {
        public float StartX, StartZ;
        public float EndX, EndZ;
        public float Width;
        public int RecipeSeed;

        public RoadSegment(float startX, float startZ, float endX, float endZ, float width, int recipeSeed)
        {
            StartX = startX;
            StartZ = startZ;
            EndX = endX;
            EndZ = endZ;
            Width = width;
            RecipeSeed = recipeSeed;
        }
    }

    /// <summary>
    /// Generates procedural meshes from code recipes.
    /// No external 3D models needed -- all geometry from primitives and math.
    /// </summary>
    public static class ProceduralGeometry
    {
        private static Mesh _fallbackMesh;

        /// <summary>
        /// Generate a building mesh from a footprint, using cache if available.
        /// </summary>
        public static Mesh GenerateBuilding(BuildingFootprint footprint)
        {
            // Compute cache key
            string recipeHash = ComputeBuildingHash(footprint);
            int deviceTier = QualitySettings.GetQualityLevel();
            string cacheKey = $"{Application.version}:{recipeHash}:{deviceTier}";

            // Try to get from cache
            if (RecipeCache.TryGet(cacheKey, out byte[] cachedData))
            {
                try
                {
                    Mesh mesh = DeserializeMesh(cachedData);
                    if (mesh != null) return mesh;
                }
                catch (Exception e)
                {
                    Debug.LogError($"ProceduralGeometry: Failed to load cached building mesh: {e.Message}");
                }
            }

            // Generate mesh
            try
            {
                Mesh mesh = GenerateBuildingMesh(footprint);
                if (mesh != null)
                {
                    // Cache the generated mesh
                    byte[] meshData = SerializeMesh(mesh);
                    RecipeCache.Store(cacheKey, meshData);
                }
                return mesh;
            }
            catch (Exception e)
            {
                Debug.LogError($"ProceduralGeometry: Building generation failed: {e.Message}");
                return GetFallbackMesh();
            }
        }

        /// <summary>
        /// Generate a road mesh from a segment, using cache if available.
        /// </summary>
        public static Mesh GenerateRoad(RoadSegment segment)
        {
            // Compute cache key
            string recipeHash = ComputeRoadHash(segment);
            int deviceTier = QualitySettings.GetQualityLevel();
            string cacheKey = $"{Application.version}:{recipeHash}:{deviceTier}";

            // Try to get from cache
            if (RecipeCache.TryGet(cacheKey, out byte[] cachedData))
            {
                try
                {
                    Mesh mesh = DeserializeMesh(cachedData);
                    if (mesh != null) return mesh;
                }
                catch (Exception e)
                {
                    Debug.LogError($"ProceduralGeometry: Failed to load cached road mesh: {e.Message}");
                }
            }

            // Generate mesh
            try
            {
                Mesh mesh = GenerateRoadMesh(segment);
                if (mesh != null)
                {
                    // Cache the generated mesh
                    byte[] meshData = SerializeMesh(mesh);
                    RecipeCache.Store(cacheKey, meshData);
                }
                return mesh;
            }
            catch (Exception e)
            {
                Debug.LogError($"ProceduralGeometry: Road generation failed: {e.Message}");
                return GetFallbackMesh();
            }
        }

        /// <summary>
        /// Generate a building mesh from footprint parameters.
        /// </summary>
        private static Mesh GenerateBuildingMesh(BuildingFootprint footprint)
        {
            var mesh = new Mesh();
            var vertices = new List<Vector3>();
            var triangles = new List<int>();
            var uvs = new List<Vector2>();
            var rng = new SeededRNG(footprint.RecipeSeed);

            float height = footprint.FloorCount * 3f; // 3m per floor
            float halfWidth = footprint.Width * 0.5f;
            float halfDepth = footprint.Depth * 0.5f;

            // Base position
            Vector3 origin = new Vector3(footprint.X, 0, footprint.Z);

            // Generate building body (extruded rectangle)
            int baseIdx = vertices.Count;

            // Bottom vertices
            vertices.Add(origin + new Vector3(-halfWidth, 0, -halfDepth));
            vertices.Add(origin + new Vector3(halfWidth, 0, -halfDepth));
            vertices.Add(origin + new Vector3(halfWidth, 0, halfDepth));
            vertices.Add(origin + new Vector3(-halfWidth, 0, halfDepth));

            // Top vertices
            vertices.Add(origin + new Vector3(-halfWidth, height, -halfDepth));
            vertices.Add(origin + new Vector3(halfWidth, height, -halfDepth));
            vertices.Add(origin + new Vector3(halfWidth, height, halfDepth));
            vertices.Add(origin + new Vector3(-halfWidth, height, halfDepth));

            // UVs for tiling
            for (int i = 0; i < 8; i++)
            {
                uvs.Add(new Vector2(i % 2, i / 4));
            }

            // Front face
            triangles.AddRange(new[] { baseIdx + 0, baseIdx + 4, baseIdx + 1 });
            triangles.AddRange(new[] { baseIdx + 1, baseIdx + 4, baseIdx + 5 });

            // Right face
            triangles.AddRange(new[] { baseIdx + 1, baseIdx + 5, baseIdx + 2 });
            triangles.AddRange(new[] { baseIdx + 2, baseIdx + 5, baseIdx + 6 });

            // Back face
            triangles.AddRange(new[] { baseIdx + 2, baseIdx + 6, baseIdx + 3 });
            triangles.AddRange(new[] { baseIdx + 3, baseIdx + 6, baseIdx + 7 });

            // Left face
            triangles.AddRange(new[] { baseIdx + 3, baseIdx + 7, baseIdx + 0 });
            triangles.AddRange(new[] { baseIdx + 0, baseIdx + 7, baseIdx + 4 });

            // Top face
            triangles.AddRange(new[] { baseIdx + 4, baseIdx + 7, baseIdx + 5 });
            triangles.AddRange(new[] { baseIdx + 5, baseIdx + 7, baseIdx + 6 });

            // Add window cutouts (simple indentations)
            for (int floor = 0; floor < footprint.FloorCount; floor++)
            {
                float floorY = (floor + 0.5f) * 3f;
                int windowCount = rng.NextInt(2, 5);
                
                for (int w = 0; w < windowCount; w++)
                {
                    float windowX = rng.NextFloat() * footprint.Width - halfWidth;
                    // Add small window detail (just visual, not actual cutout for performance)
                }
            }

            mesh.SetVertices(vertices);
            mesh.SetTriangles(triangles, 0);
            mesh.SetUVs(0, uvs);
            mesh.RecalculateNormals();
            mesh.RecalculateBounds();
            return mesh;
        }

        /// <summary>
        /// Generate a road mesh from segment parameters.
        /// </summary>
        private static Mesh GenerateRoadMesh(RoadSegment segment)
        {
            var mesh = new Mesh();
            var vertices = new List<Vector3>();
            var triangles = new List<int>();
            var uvs = new List<Vector2>();

            Vector3 start = new Vector3(segment.StartX, 0, segment.StartZ);
            Vector3 end = new Vector3(segment.EndX, 0, segment.EndZ);
            Vector3 direction = (end - start).normalized;
            Vector3 perpendicular = new Vector3(-direction.z, 0, direction.x);
            float halfWidth = segment.Width * 0.5f;

            // Create quad strip along the road
            int baseIdx = vertices.Count;

            vertices.Add(start - perpendicular * halfWidth);
            vertices.Add(start + perpendicular * halfWidth);
            vertices.Add(end - perpendicular * halfWidth);
            vertices.Add(end + perpendicular * halfWidth);

            // UVs for tiling
            float length = Vector3.Distance(start, end);
            uvs.Add(new Vector2(0, 0));
            uvs.Add(new Vector2(1, 0));
            uvs.Add(new Vector2(0, length / segment.Width));
            uvs.Add(new Vector2(1, length / segment.Width));

            // Two triangles for the quad
            triangles.AddRange(new[] { baseIdx + 0, baseIdx + 2, baseIdx + 1 });
            triangles.AddRange(new[] { baseIdx + 1, baseIdx + 2, baseIdx + 3 });

            mesh.SetVertices(vertices);
            mesh.SetTriangles(triangles, 0);
            mesh.SetUVs(0, uvs);
            mesh.RecalculateNormals();
            mesh.RecalculateBounds();
            return mesh;
        }

        /// <summary>
        /// Get a fallback unit cube mesh for when generation fails.
        /// </summary>
        private static Mesh GetFallbackMesh()
        {
            if (_fallbackMesh == null)
            {
                _fallbackMesh = new Mesh();
                var vertices = new List<Vector3>();
                var triangles = new List<int>();
                AddBox(vertices, triangles, Vector3.zero, Vector3.one * 0.5f);
                _fallbackMesh.SetVertices(vertices);
                _fallbackMesh.SetTriangles(triangles, 0);
                _fallbackMesh.RecalculateNormals();
            }
            return _fallbackMesh;
        }

        /// <summary>
        /// Serialize a mesh to byte array for caching.
        /// </summary>
        private static byte[] SerializeMesh(Mesh mesh)
        {
            // Simple serialization: vertex count, vertices, triangle count, triangles
            var vertices = mesh.vertices;
            var triangles = mesh.triangles;
            var uvs = mesh.uv;

            using (var ms = new System.IO.MemoryStream())
            using (var writer = new System.IO.BinaryWriter(ms))
            {
                writer.Write(vertices.Length);
                foreach (var v in vertices)
                {
                    writer.Write(v.x);
                    writer.Write(v.y);
                    writer.Write(v.z);
                }

                writer.Write(triangles.Length);
                foreach (var t in triangles)
                {
                    writer.Write(t);
                }

                writer.Write(uvs.Length);
                foreach (var uv in uvs)
                {
                    writer.Write(uv.x);
                    writer.Write(uv.y);
                }

                return ms.ToArray();
            }
        }

        /// <summary>
        /// Deserialize a mesh from byte array.
        /// </summary>
        private static Mesh DeserializeMesh(byte[] data)
        {
            using (var ms = new System.IO.MemoryStream(data))
            using (var reader = new System.IO.BinaryReader(ms))
            {
                int vertexCount = reader.ReadInt32();
                var vertices = new Vector3[vertexCount];
                for (int i = 0; i < vertexCount; i++)
                {
                    vertices[i] = new Vector3(
                        reader.ReadSingle(),
                        reader.ReadSingle(),
                        reader.ReadSingle());
                }

                int triangleCount = reader.ReadInt32();
                var triangles = new int[triangleCount];
                for (int i = 0; i < triangleCount; i++)
                {
                    triangles[i] = reader.ReadInt32();
                }

                int uvCount = reader.ReadInt32();
                var uvs = new Vector2[uvCount];
                for (int i = 0; i < uvCount; i++)
                {
                    uvs[i] = new Vector2(
                        reader.ReadSingle(),
                        reader.ReadSingle());
                }

                var mesh = new Mesh();
                mesh.vertices = vertices;
                mesh.triangles = triangles;
                mesh.uv = uvs;
                mesh.RecalculateNormals();
                mesh.RecalculateBounds();
                return mesh;
            }
        }

        /// <summary>
        /// Compute hash for building footprint.
        /// </summary>
        private static string ComputeBuildingHash(BuildingFootprint footprint)
        {
            using (var sha256 = SHA256.Create())
            {
                string input = $"{footprint.X}:{footprint.Z}:{footprint.Width}:{footprint.Depth}:{footprint.FloorCount}:{footprint.RecipeSeed}";
                byte[] hashBytes = sha256.ComputeHash(Encoding.UTF8.GetBytes(input));
                return BitConverter.ToString(hashBytes).Replace("-", "").ToLowerInvariant();
            }
        }

        /// <summary>
        /// Compute hash for road segment.
        /// </summary>
        private static string ComputeRoadHash(RoadSegment segment)
        {
            using (var sha256 = SHA256.Create())
            {
                string input = $"{segment.StartX}:{segment.StartZ}:{segment.EndX}:{segment.EndZ}:{segment.Width}:{segment.RecipeSeed}";
                byte[] hashBytes = sha256.ComputeHash(Encoding.UTF8.GetBytes(input));
                return BitConverter.ToString(hashBytes).Replace("-", "").ToLowerInvariant();
            }
        }
        /// <summary>
        /// Generates a low-poly humanoid zombie mesh (placeholder).
        /// Simple capsule-based bipedal form.
        /// </summary>
        public static Mesh GenerateZombieMesh()
        {
            var mesh = new Mesh();
            var vertices = new List<Vector3>();
            var triangles = new List<int>();

            // Torso (tapered box)
            AddBox(vertices, triangles,
                new Vector3(0, 0.9f, 0),
                new Vector3(0.4f, 0.6f, 0.25f));

            // Head (sphere-like)
            AddSphere(vertices, triangles,
                new Vector3(0, 1.55f, 0), 0.15f, 6);

            // Left arm
            AddBox(vertices, triangles,
                new Vector3(-0.5f, 0.9f, 0),
                new Vector3(0.08f, 0.5f, 0.08f));

            // Right arm
            AddBox(vertices, triangles,
                new Vector3(0.5f, 0.9f, 0),
                new Vector3(0.08f, 0.5f, 0.08f));

            // Left leg
            AddBox(vertices, triangles,
                new Vector3(-0.15f, 0.25f, 0),
                new Vector3(0.1f, 0.5f, 0.1f));

            // Right leg
            AddBox(vertices, triangles,
                new Vector3(0.15f, 0.25f, 0),
                new Vector3(0.1f, 0.5f, 0.1f));

            mesh.SetVertices(vertices);
            mesh.SetTriangles(triangles, 0);
            mesh.RecalculateNormals();
            mesh.RecalculateBounds();
            return mesh;
        }

        /// <summary>
        /// Generates a weapon mesh (baseball bat shape).
        /// </summary>
        public static Mesh GenerateBatMesh()
        {
            var mesh = new Mesh();
            var vertices = new List<Vector3>();
            var triangles = new List<int>();

            // Handle (thin cylinder)
            AddCylinder(vertices, triangles,
                new Vector3(0, 0, 0),
                new Vector3(0, 0.6f, 0),
                0.02f, 6);

            // Barrel (thicker cylinder)
            AddCylinder(vertices, triangles,
                new Vector3(0, 0.6f, 0),
                new Vector3(0, 0.95f, 0),
                0.04f, 6);

            mesh.SetVertices(vertices);
            mesh.SetTriangles(triangles, 0);
            mesh.RecalculateNormals();
            mesh.RecalculateBounds();
            return mesh;
        }

        /// <summary>
        /// Generates a pistol mesh.
        /// </summary>
        public static Mesh GeneratePistolMesh()
        {
            var mesh = new Mesh();
            var vertices = new List<Vector3>();
            var triangles = new List<int>();

            // Barrel
            AddBox(vertices, triangles,
                new Vector3(0, 0.05f, 0.1f),
                new Vector3(0.02f, 0.03f, 0.12f));

            // Slide
            AddBox(vertices, triangles,
                new Vector3(0, 0.08f, 0.05f),
                new Vector3(0.025f, 0.02f, 0.1f));

            // Grip
            AddBox(vertices, triangles,
                new Vector3(0, -0.03f, -0.02f),
                new Vector3(0.02f, 0.06f, 0.03f));

            // Trigger guard
            AddBox(vertices, triangles,
                new Vector3(0, 0, 0.02f),
                new Vector3(0.01f, 0.01f, 0.04f));

            mesh.SetVertices(vertices);
            mesh.SetTriangles(triangles, 0);
            mesh.RecalculateNormals();
            mesh.RecalculateBounds();
            return mesh;
        }

        /// <summary>
        /// Generates a pickup item mesh (small box/cylinder).
        /// </summary>
        public static Mesh GeneratePickupMesh(float size = 0.3f)
        {
            var mesh = new Mesh();
            var vertices = new List<Vector3>();
            var triangles = new List<int>();

            AddBox(vertices, triangles, Vector3.zero,
                new Vector3(size * 0.5f, size * 0.3f, size * 0.5f));

            mesh.SetVertices(vertices);
            mesh.SetTriangles(triangles, 0);
            mesh.RecalculateNormals();
            mesh.RecalculateBounds();
            return mesh;
        }

        /// <summary>
        /// Generates a gas canister mesh (cylinder with cap).
        /// </summary>
        public static Mesh GenerateCanisterMesh()
        {
            var mesh = new Mesh();
            var vertices = new List<Vector3>();
            var triangles = new List<int>();

            // Body
            AddCylinder(vertices, triangles,
                new Vector3(0, 0, 0),
                new Vector3(0, 0.6f, 0),
                0.15f, 8);

            // Top cap (smaller)
            AddCylinder(vertices, triangles,
                new Vector3(0, 0.6f, 0),
                new Vector3(0, 0.7f, 0),
                0.05f, 8);

            mesh.SetVertices(vertices);
            mesh.SetTriangles(triangles, 0);
            mesh.RecalculateNormals();
            mesh.RecalculateBounds();
            return mesh;
        }

        // -- Primitive Helpers --

        private static void AddBox(List<Vector3> verts, List<int> tris,
            Vector3 center, Vector3 halfExtents)
        {
            int baseIdx = verts.Count;
            float x = halfExtents.x, y = halfExtents.y, z = halfExtents.z;

            // 8 corners
            verts.Add(center + new Vector3(-x, -y, -z));
            verts.Add(center + new Vector3( x, -y, -z));
            verts.Add(center + new Vector3( x,  y, -z));
            verts.Add(center + new Vector3(-x,  y, -z));
            verts.Add(center + new Vector3(-x, -y,  z));
            verts.Add(center + new Vector3( x, -y,  z));
            verts.Add(center + new Vector3( x,  y,  z));
            verts.Add(center + new Vector3(-x,  y,  z));

            // 6 faces (12 triangles)
            int[] faces = {
                0,2,1, 0,3,2, // front
                5,6,4, 6,7,4, // back
                4,3,0, 4,7,3, // left
                1,2,5, 2,6,5, // right
                3,7,6, 3,6,2, // top
                0,1,5, 0,5,4  // bottom
            };

            for (int i = 0; i < faces.Length; i++)
                tris.Add(baseIdx + faces[i]);
        }

        private static void AddSphere(List<Vector3> verts, List<int> tris,
            Vector3 center, float radius, int segments)
        {
            int baseIdx = verts.Count;

            // Top vertex
            verts.Add(center + Vector3.up * radius);

            // Ring vertices
            for (int lat = 1; lat < segments; lat++)
            {
                float theta = Mathf.PI * lat / segments;
                float y = Mathf.Cos(theta) * radius;
                float r = Mathf.Sin(theta) * radius;

                for (int lon = 0; lon < segments; lon++)
                {
                    float phi = 2 * Mathf.PI * lon / segments;
                    float x = r * Mathf.Cos(phi);
                    float z = r * Mathf.Sin(phi);
                    verts.Add(center + new Vector3(x, y, z));
                }
            }

            // Bottom vertex
            verts.Add(center + Vector3.down * radius);

            // Top cap triangles
            for (int i = 0; i < segments; i++)
            {
                tris.Add(baseIdx);
                tris.Add(baseIdx + 1 + i);
                tris.Add(baseIdx + 1 + (i + 1) % segments);
            }

            // Middle rows
            for (int lat = 0; lat < segments - 2; lat++)
            {
                for (int lon = 0; lon < segments; lon++)
                {
                    int cur = baseIdx + 1 + lat * segments + lon;
                    int next = baseIdx + 1 + lat * segments + (lon + 1) % segments;
                    int curBelow = cur + segments;
                    int nextBelow = next + segments;

                    tris.Add(cur);
                    tris.Add(curBelow);
                    tris.Add(next);

                    tris.Add(next);
                    tris.Add(curBelow);
                    tris.Add(nextBelow);
                }
            }

            // Bottom cap
            int bottomIdx = verts.Count - 1;
            int lastRingStart = baseIdx + 1 + (segments - 2) * segments;
            for (int i = 0; i < segments; i++)
            {
                tris.Add(bottomIdx);
                tris.Add(lastRingStart + (i + 1) % segments);
                tris.Add(lastRingStart + i);
            }
        }

        private static void AddCylinder(List<Vector3> verts, List<int> tris,
            Vector3 bottom, Vector3 top, float radius, int segments)
        {
            int baseIdx = verts.Count;

            // Bottom ring
            for (int i = 0; i < segments; i++)
            {
                float angle = 2f * Mathf.PI * i / segments;
                float x = Mathf.Cos(angle) * radius;
                float z = Mathf.Sin(angle) * radius;
                verts.Add(bottom + new Vector3(x, 0, z));
            }

            // Top ring
            Vector3 offset = top - bottom;
            for (int i = 0; i < segments; i++)
            {
                float angle = 2f * Mathf.PI * i / segments;
                float x = Mathf.Cos(angle) * radius;
                float z = Mathf.Sin(angle) * radius;
                verts.Add(bottom + offset + new Vector3(x, 0, z));
            }

            // Center points for caps
            verts.Add(bottom);
            verts.Add(top);

            int bottomCenter = verts.Count - 2;
            int topCenter = verts.Count - 1;

            // Side faces
            for (int i = 0; i < segments; i++)
            {
                int bl = baseIdx + i;
                int br = baseIdx + (i + 1) % segments;
                int tl = baseIdx + segments + i;
                int tr = baseIdx + segments + (i + 1) % segments;

                tris.Add(bl); tris.Add(tl); tris.Add(br);
                tris.Add(br); tris.Add(tl); tris.Add(tr);
            }

            // Bottom cap
            for (int i = 0; i < segments; i++)
            {
                tris.Add(bottomCenter);
                tris.Add(baseIdx + (i + 1) % segments);
                tris.Add(baseIdx + i);
            }

            // Top cap
            for (int i = 0; i < segments; i++)
            {
                tris.Add(topCenter);
                tris.Add(baseIdx + segments + i);
                tris.Add(baseIdx + segments + (i + 1) % segments);
            }
        }
    }
}
