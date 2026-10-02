// ---------------------------------------------------------------------------
// Dead City Escape - Unity PlayMode Tests
// Tests MonoBehaviour-dependent systems within Unity's runtime.
// These run in Play mode with coroutine support.
// ---------------------------------------------------------------------------
using System.Collections;
using NUnit.Framework;
using UnityEngine;
using UnityEngine.TestTools;

namespace DeadCityEscape.Tests.PlayMode
{
    /// <summary>
    /// PlayMode tests for MonoBehaviour-based game systems.
    /// These validate runtime behavior that requires the Unity engine running.
    /// </summary>
    public class GameSystemsPlayModeTests
    {
        // ---- GameObject / Component basics ----

        [UnityTest]
        public IEnumerator GameObjectCreation_Works()
        {
            var go = new GameObject("TestObj");
            yield return null;
            Assert.IsNotNull(go);
            Assert.AreEqual("TestObj", go.name);
            Object.Destroy(go);
        }

        [UnityTest]
        public IEnumerator CharacterController_CanBeAdded()
        {
            var go = new GameObject("Player");
            var cc = go.AddComponent<CharacterController>();
            yield return null;
            Assert.IsNotNull(cc);
            Assert.IsTrue(cc.enabled);
            Object.Destroy(go);
        }

        // ---- Time ----

        [UnityTest]
        public IEnumerator TimeScale_Pause_StopsFixedTime()
        {
            float before = Time.fixedTime;
            Time.timeScale = 0f;
            yield return new WaitForSecondsRealtime(0.1f);
            float after = Time.fixedTime;
            Time.timeScale = 1f;

            // fixedTime should not advance when paused
            Assert.AreEqual(before, after, 0.01f);
        }

        [UnityTest]
        public IEnumerator TimeScale_Resume_AdvancesTime()
        {
            Time.timeScale = 1f;
            float before = Time.time;
            yield return new WaitForSeconds(0.1f);
            float after = Time.time;

            Assert.Greater(after, before);
        }

        // ---- Physics / Layers ----

        [UnityTest]
        public IEnumerator Raycast_HitsCollider()
        {
            var go = new GameObject("Wall");
            var col = go.AddComponent<BoxCollider>();
            go.transform.position = Vector3.forward * 5f;
            yield return new WaitForFixedUpdate();

            bool hit = Physics.Raycast(Vector3.zero, Vector3.forward, out RaycastHit info, 10f);
            Assert.IsTrue(hit);
            Assert.AreEqual("Wall", info.collider.gameObject.name);
            Object.Destroy(go);
        }

        [UnityTest]
        public IEnumerator SphereCast_DetectsNearbyObject()
        {
            var go = new GameObject("Target");
            go.AddComponent<SphereCollider>();
            go.transform.position = Vector3.forward * 2f;
            yield return new WaitForFixedUpdate();

            bool hit = Physics.SphereCast(Vector3.zero, 0.5f, Vector3.forward, out RaycastHit info, 5f);
            Assert.IsTrue(hit);
            Object.Destroy(go);
        }

        // ---- Camera ----

        [UnityTest]
        public IEnumerator Camera_FieldOfView_Adjustable()
        {
            var cam = new GameObject("Cam").AddComponent<Camera>();
            cam.fieldOfView = 60f;
            yield return null;
            Assert.AreEqual(60f, cam.fieldOfView, 0.1f);

            cam.fieldOfView = 75f;
            yield return null;
            Assert.AreEqual(75f, cam.fieldOfView, 0.1f);
            Object.Destroy(cam.gameObject);
        }

        // ---- AudioSource ----

        [UnityTest]
        public IEnumerator AudioSource_SetVolume_Applies()
        {
            var go = new GameObject("Audio");
            var source = go.AddComponent<AudioSource>();
            source.volume = 0.5f;
            yield return null;
            Assert.AreEqual(0.5f, source.volume, 0.01f);
            Object.Destroy(go);
        }

        // ---- Object Pooling Pattern ----

        [UnityTest]
        public IEnumerator ObjectPool_InstantiateAndDeactivate()
        {
            var prefab = new GameObject("Prefab");
            prefab.SetActive(false);

            var pool = new System.Collections.Generic.Queue<GameObject>();
            for (int i = 0; i < 5; i++)
            {
                var instance = Object.Instantiate(prefab);
                instance.SetActive(false);
                pool.Enqueue(instance);
            }

            yield return null;
            Assert.AreEqual(5, pool.Count);

            // "Spawn" one
            var spawned = pool.Dequeue();
            spawned.SetActive(true);
            yield return null;
            Assert.IsTrue(spawned.activeSelf);
            Assert.AreEqual(4, pool.Count);

            // "Return" it
            spawned.SetActive(false);
            pool.Enqueue(spawned);
            Assert.AreEqual(5, pool.Count);

            // Cleanup
            while (pool.Count > 0)
                Object.Destroy(pool.Dequeue());
            Object.Destroy(prefab);
        }

        // ---- NavMesh availability ----

        [UnityTest]
        public IEnumerator NavMesh_SamplePosition_ReturnsFalseWithoutBakedMesh()
        {
            yield return null;
            bool found = UnityEngine.AI.NavMesh.SamplePosition(
                Vector3.zero, out _, 10f, UnityEngine.AI.NavMesh.AllAreas);
            // Without a baked NavMesh, this should return false
            Assert.IsFalse(found);
        }

        // ---- Transform Hierarchy ----

        [UnityTest]
        public IEnumerator Transform_ParentChild_Hierarchy()
        {
            var parent = new GameObject("Parent");
            var child = new GameObject("Child");
            child.transform.SetParent(parent.transform);
            yield return null;

            Assert.AreEqual(parent.transform, child.transform.parent);
            Assert.AreEqual(1, parent.transform.childCount);
            Object.Destroy(parent);
        }

        // ---- Coroutine execution ----

        [UnityTest]
        public IEnumerator Coroutine_WaitForEndOfFrame_Completes()
        {
            bool completed = false;
            var go = new GameObject("CoroutineHost");
            var mb = go.AddComponent<CoroutineTestHelper>();
            mb.StartCoroutine(SetFlagAfterFrame(() => completed = true));
            yield return null;
            yield return null;
            Assert.IsTrue(completed);
            Object.Destroy(go);
        }

        private static IEnumerator SetFlagAfterFrame(System.Action onComplete)
        {
            yield return new WaitForEndOfFrame();
            onComplete?.Invoke();
        }

        // ---- Material / Shader ----

        [UnityTest]
        public IEnumerator Material_GPUInstancing_CanBeEnabled()
        {
            var mat = new Material(Shader.Find("Universal Render Pipeline/Lit"));
            if (mat != null && mat.shader != null)
            {
                mat.enableInstancing = true;
                yield return null;
                Assert.IsTrue(mat.enableInstancing);
                Object.Destroy(mat);
            }
            else
            {
                // URP shader not available in test context — skip gracefully
                Assert.Pass("URP Lit shader not available in test runner context");
                yield return null;
            }
        }

        // ---- Procedural Mesh ----

        [UnityTest]
        public IEnumerator ProceduralMesh_CanBeCreated()
        {
            var mesh = new Mesh();
            mesh.vertices = new[]
            {
                new Vector3(0, 0, 0),
                new Vector3(1, 0, 0),
                new Vector3(0, 1, 0)
            };
            mesh.triangles = new[] { 0, 1, 2 };
            mesh.RecalculateNormals();

            yield return null;
            Assert.AreEqual(3, mesh.vertexCount);
            Assert.AreEqual(3, mesh.triangles.Length);
            Object.Destroy(mesh);
        }

        // ---- Texture Generation ----

        [UnityTest]
        public IEnumerator ProceduralTexture_CanBeGenerated()
        {
            var tex = new Texture2D(64, 64, TextureFormat.RGBA32, false);
            var pixels = new Color32[64 * 64];
            for (int i = 0; i < pixels.Length; i++)
                pixels[i] = new Color32(128, 64, 32, 255);
            tex.SetPixels32(pixels);
            tex.Apply();

            yield return null;
            Assert.AreEqual(64, tex.width);
            Assert.AreEqual(64, tex.height);
            Object.Destroy(tex);
        }
    }

    /// <summary>
    /// Minimal MonoBehaviour helper for hosting coroutines in tests.
    /// </summary>
    public class CoroutineTestHelper : MonoBehaviour { }
}
