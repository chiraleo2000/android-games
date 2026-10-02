// ---------------------------------------------------------------------------
// Dead City Escape - Game Scene Bootstrapper
// Creates all required runtime objects for the Game scene.
// Attach to a "Bootstrap" GameObject in the Game scene.
// ---------------------------------------------------------------------------
using UnityEngine;
using UnityEngine.EventSystems;
using DeadCityEscape.Audio;
using DeadCityEscape.Player;

namespace DeadCityEscape.Core
{
    /// <summary>
    /// Bootstraps the Game scene: instantiates singletons, the player, UI, and starts a run.
    /// Self-contained so the scene only needs this one component to run.
    /// </summary>
    public class GameBootstrapper : MonoBehaviour
    {
        [Header("Optional overrides — leave null to use code defaults")]
        [SerializeField] private GameObject _playerPrefab;
        [SerializeField] private Vector3 _playerSpawnPosition = new Vector3(0f, 1f, 0f);
        [SerializeField] private int _rngSeed = -1; // -1 = random each run

        private void Awake()
        {
            // Disable the default Main Camera; the PlayerController creates its own.
            var mainCam = Camera.main;
            if (mainCam != null && mainCam.gameObject.name == "Main Camera")
                mainCam.gameObject.SetActive(false);
        }

        private void Start()
        {
            EnsureEventSystem();
            EnsureGround();
            var player = EnsurePlayer();
            _ = GameManager.Instance;   // triggers Singleton auto-create
            _ = AudioManager.Instance;
            _ = QualityManager.Instance;

            GameManager.Instance.StartNewRun(_rngSeed == -1
                ? Random.Range(int.MinValue, int.MaxValue)
                : _rngSeed);

            Debug.Log("[GameBootstrapper] Game scene is ready. Press Escape to pause.");
        }

        // -----------------------------------------------------------------
        // Scene setup helpers
        // -----------------------------------------------------------------

        private static void EnsureEventSystem()
        {
            if (FindFirstObjectByType<EventSystem>() != null) return;
            var es = new GameObject("EventSystem");
            es.AddComponent<EventSystem>();
            es.AddComponent<StandaloneInputModule>();
        }

        private static void EnsureGround()
        {
            // Skip if ground already exists (tagged or named).
            if (GameObject.FindWithTag("Ground") != null) return;
            if (GameObject.Find("Ground") != null) return;

            var ground = GameObject.CreatePrimitive(PrimitiveType.Plane);
            ground.name = "Ground";
            ground.tag = "Ground";
            ground.transform.localScale = new Vector3(20f, 1f, 20f); // 200x200 m

            // Apply a simple dark material so the ground looks like city pavement.
            var mat = new Material(Shader.Find("Universal Render Pipeline/Lit"));
            if (mat.shader == null)
                mat = new Material(Shader.Find("Standard"));
            mat.color = new Color(0.15f, 0.15f, 0.15f);
            ground.GetComponent<Renderer>().material = mat;
        }

        private GameObject EnsurePlayer()
        {
            // Avoid creating a second player if one already exists.
            var existing = FindFirstObjectByType<PlayerController>();
            if (existing != null) return existing.gameObject;

            GameObject player;
            if (_playerPrefab != null)
            {
                player = Instantiate(_playerPrefab, _playerSpawnPosition, Quaternion.identity);
            }
            else
            {
                // Build a minimal player programmatically.
                player = new GameObject("Player");
                player.tag = "Player";
                player.transform.position = _playerSpawnPosition;

                // CharacterController drives movement — must be added before PlayerController.
                var cc = player.AddComponent<CharacterController>();
                cc.height = 1.8f;
                cc.radius = 0.35f;
                cc.center = new Vector3(0f, 0.9f, 0f);
                cc.slopeLimit = 45f;
                cc.stepOffset = 0.3f;

                player.AddComponent<PlayerController>();
                player.AddComponent<PlayerHealth>();
                player.AddComponent<PlayerInventory>();
            }

            return player;
        }
    }
}
