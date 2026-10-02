using UnityEngine;
using System.Collections.Generic;

namespace InventorsWorkshop.Core
{
    [System.Serializable]
    public class WorkspaceData
    {
        public string id;
        public string name;
        public string description;
        public long createdTime;
        public long lastModifiedTime;
        
        public Vector2 cameraPosition;
        public float cameraZoom = 1f;
        
        public List<ComponentSaveData> components = new List<ComponentSaveData>();
        public List<ConnectionSaveData> connections = new List<ConnectionSaveData>();

        public WorkspaceData()
        {
            id = System.Guid.NewGuid().ToString();
            name = "New Workspace";
            description = "";
            createdTime = System.DateTime.Now.Ticks;
            lastModifiedTime = createdTime;
        }

        public WorkspaceData(string workspaceName)
        {
            id = System.Guid.NewGuid().ToString();
            name = workspaceName;
            description = "";
            createdTime = System.DateTime.Now.Ticks;
            lastModifiedTime = createdTime;
        }
    }

    [System.Serializable]
    public class ComponentSaveData
    {
        public string componentId;
        public string componentType; // Gear, Motor, Block, etc.
        public Vector2 position;
        public float rotation;
        public Vector2 scale = Vector2.one;
        
        // Component-specific properties
        public Dictionary<string, string> properties = new Dictionary<string, string>();
    }

    [System.Serializable]
    public class ConnectionSaveData
    {
        public string connectionId;
        public string componentA;
        public string componentB;
        public string connectionType; // Gear, Belt, Weld, etc.
        public Vector2 anchorA;
        public Vector2 anchorB;
    }
}
