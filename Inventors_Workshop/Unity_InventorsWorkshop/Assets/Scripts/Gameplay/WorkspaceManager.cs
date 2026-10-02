using UnityEngine;
using System.Collections.Generic;
using InventorsWorkshop.Components;

namespace InventorsWorkshop.Gameplay
{
    /// <summary>
    /// Manages the workspace - component placement, connections, simulation
    /// </summary>
    public class WorkspaceManager : MonoBehaviour
    {
        [Header("Workspace Settings")]
        [SerializeField] private Vector2 workspaceSize = new Vector2(20f, 15f);
        [SerializeField] private LayerMask componentLayer;

        [Header("Component Management")]
        [SerializeField] private List<BaseComponent> placedComponents = new List<BaseComponent>();
        [SerializeField] private BaseComponent selectedComponent;

        [Header("Prefabs")]
        [SerializeField] private GameObject gearPrefab;
        [SerializeField] private GameObject motorPrefab;
        [SerializeField] private GameObject blockPrefab;

        // Managers
        private Core.GameManager gameManager;
        private Core.SaveManager saveManager;

        // Properties
        public int ComponentCount => placedComponents.Count;
        public BaseComponent SelectedComponent => selectedComponent;

        private void Start()
        {
            gameManager = Core.GameManager.Instance;
            saveManager = gameManager.SaveManager;
        }

        /// <summary>
        /// Place a component in the workspace
        /// </summary>
        public BaseComponent PlaceComponent(string componentType, Vector2 position)
        {
            GameObject prefab = GetComponentPrefab(componentType);
            if (prefab == null)
            {
                Debug.LogError($"Component prefab not found: {componentType}");
                return null;
            }

            // Instantiate component
            GameObject obj = Instantiate(prefab, position, Quaternion.identity);
            BaseComponent component = obj.GetComponent<BaseComponent>();

            if (component != null)
            {
                component.Place(position);
                placedComponents.Add(component);
                Debug.Log($"Placed {componentType} at {position}");
                return component;
            }

            return null;
        }

        /// <summary>
        /// Remove a component from the workspace
        /// </summary>
        public void RemoveComponent(BaseComponent component)
        {
            if (component != null && placedComponents.Contains(component))
            {
                placedComponents.Remove(component);
                component.DestroyComponent();
                Debug.Log($"Removed component {component.ComponentName}");
            }
        }

        /// <summary>
        /// Select a component
        /// </summary>
        public void SelectComponent(BaseComponent component)
        {
            // Deselect previous
            if (selectedComponent != null)
            {
                selectedComponent.Deselect();
            }

            // Select new
            selectedComponent = component;
            if (selectedComponent != null)
            {
                selectedComponent.Select();
            }
        }

        /// <summary>
        /// Deselect current component
        /// </summary>
        public void DeselectComponent()
        {
            if (selectedComponent != null)
            {
                selectedComponent.Deselect();
                selectedComponent = null;
            }
        }

        /// <summary>
        /// Clear all components from workspace
        /// </summary>
        public void ClearWorkspace()
        {
            foreach (var component in placedComponents)
            {
                if (component != null)
                {
                    Destroy(component.gameObject);
                }
            }

            placedComponents.Clear();
            selectedComponent = null;
            Debug.Log("Workspace cleared");
        }

        /// <summary>
        /// Save current workspace
        /// </summary>
        public void SaveWorkspace(string workspaceName)
        {
            Core.WorkspaceData data = new Core.WorkspaceData(workspaceName);

            // Save all components
            foreach (var component in placedComponents)
            {
                if (component != null)
                {
                    data.components.Add(component.GetSaveData());
                }
            }

            // Save camera position
            Camera mainCam = Camera.main;
            if (mainCam != null)
            {
                data.cameraPosition = mainCam.transform.position;
                data.cameraZoom = mainCam.orthographicSize;
            }

            saveManager.SaveWorkspace(data);
            Debug.Log($"Workspace '{workspaceName}' saved with {data.components.Count} components");
        }

        /// <summary>
        /// Load a workspace
        /// </summary>
        public void LoadWorkspace(string workspaceId)
        {
            Core.WorkspaceData data = saveManager.LoadWorkspace(workspaceId);
            if (data == null)
            {
                Debug.LogError($"Workspace not found: {workspaceId}");
                return;
            }

            // Clear current workspace
            ClearWorkspace();

            // Load components
            foreach (var componentData in data.components)
            {
                BaseComponent component = PlaceComponent(componentData.componentType, componentData.position);
                if (component != null)
                {
                    component.LoadSaveData(componentData);
                }
            }

            // Restore camera
            Camera mainCam = Camera.main;
            if (mainCam != null)
            {
                mainCam.transform.position = new Vector3(data.cameraPosition.x, data.cameraPosition.y, mainCam.transform.position.z);
                mainCam.orthographicSize = data.cameraZoom;
            }

            Debug.Log($"Workspace '{data.name}' loaded with {data.components.Count} components");
        }

        /// <summary>
        /// Get component at position
        /// </summary>
        public BaseComponent GetComponentAtPosition(Vector2 position)
        {
            RaycastHit2D hit = Physics2D.Raycast(position, Vector2.zero, 0f, componentLayer);
            if (hit.collider != null)
            {
                return hit.collider.GetComponent<BaseComponent>();
            }
            return null;
        }

        /// <summary>
        /// Check if position is within workspace bounds
        /// </summary>
        public bool IsWithinBounds(Vector2 position)
        {
            return Mathf.Abs(position.x) <= workspaceSize.x / 2f &&
                   Mathf.Abs(position.y) <= workspaceSize.y / 2f;
        }

        private GameObject GetComponentPrefab(string componentType)
        {
            switch (componentType.ToLower())
            {
                case "gear":
                    return gearPrefab;
                case "motor":
                    return motorPrefab;
                case "block":
                    return blockPrefab;
                default:
                    return null;
            }
        }

        private void OnDrawGizmos()
        {
            // Draw workspace bounds
            Gizmos.color = Color.cyan;
            Gizmos.DrawWireCube(Vector3.zero, new Vector3(workspaceSize.x, workspaceSize.y, 0));
        }
    }
}
