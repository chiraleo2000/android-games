using UnityEngine;
using System.IO;
using System.Collections.Generic;

namespace InventorsWorkshop.Core
{
    /// <summary>
    /// Handles saving and loading game data
    /// </summary>
    public class SaveManager : MonoBehaviour
    {
        private string saveFilePath;
        private const string SAVE_FILE_NAME = "savegame.json";

        private void Awake()
        {
            saveFilePath = Path.Combine(Application.persistentDataPath, SAVE_FILE_NAME);
            Debug.Log($"Save file path: {saveFilePath}");
        }

        #region Save/Load
        public void SaveGame(SaveData data)
        {
            try
            {
                string json = JsonUtility.ToJson(data, true);
                File.WriteAllText(saveFilePath, json);
                Debug.Log("Game saved successfully");
            }
            catch (System.Exception e)
            {
                Debug.LogError($"Failed to save game: {e.Message}");
            }
        }

        public SaveData LoadGame()
        {
            try
            {
                if (File.Exists(saveFilePath))
                {
                    string json = File.ReadAllText(saveFilePath);
                    SaveData data = JsonUtility.FromJson<SaveData>(json);
                    Debug.Log("Game loaded successfully");
                    return data;
                }
                else
                {
                    Debug.Log("No save file found, creating new save data");
                    return new SaveData();
                }
            }
            catch (System.Exception e)
            {
                Debug.LogError($"Failed to load game: {e.Message}");
                return new SaveData();
            }
        }

        public bool SaveExists()
        {
            return File.Exists(saveFilePath);
        }

        public void DeleteSave()
        {
            try
            {
                if (File.Exists(saveFilePath))
                {
                    File.Delete(saveFilePath);
                    Debug.Log("Save file deleted");
                }
            }
            catch (System.Exception e)
            {
                Debug.LogError($"Failed to delete save: {e.Message}");
            }
        }
        #endregion

        #region Workspace Management
        public void SaveWorkspace(WorkspaceData workspace)
        {
            SaveData data = LoadGame();
            
            // Check if workspace already exists
            int index = data.workspaces.FindIndex(w => w.id == workspace.id);
            if (index >= 0)
            {
                data.workspaces[index] = workspace;
            }
            else
            {
                data.workspaces.Add(workspace);
            }

            SaveGame(data);
        }

        public WorkspaceData LoadWorkspace(string workspaceId)
        {
            SaveData data = LoadGame();
            return data.workspaces.Find(w => w.id == workspaceId);
        }

        public List<WorkspaceData> GetAllWorkspaces()
        {
            SaveData data = LoadGame();
            return data.workspaces;
        }

        public void DeleteWorkspace(string workspaceId)
        {
            SaveData data = LoadGame();
            data.workspaces.RemoveAll(w => w.id == workspaceId);
            SaveGame(data);
        }
        #endregion
    }

    [System.Serializable]
    public class SaveData
    {
        public List<WorkspaceData> workspaces = new List<WorkspaceData>();
        public ProgressData progress = new ProgressData();
        public string lastPlayedWorkspace = "";
        public long lastSaveTime;

        public SaveData()
        {
            lastSaveTime = System.DateTime.Now.Ticks;
        }
    }

    [System.Serializable]
    public class ProgressData
    {
        public int totalComponentsPlaced = 0;
        public int totalSimulationsRun = 0;
        public int workspacesCreated = 0;
        public List<string> completedTutorials = new List<string>();
        public List<string> unlockedComponents = new List<string>();
    }
}
