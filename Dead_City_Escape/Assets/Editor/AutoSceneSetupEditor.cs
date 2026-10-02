// ---------------------------------------------------------------------------
// Dead City Escape - Auto Scene Setup Editor Utility
// Runs once on editor startup and ensures Bootstrap objects exist in scenes.
// ---------------------------------------------------------------------------
using UnityEditor;
using UnityEditor.SceneManagement;
using UnityEngine;
using UnityEngine.SceneManagement;
using DeadCityEscape.Core;

/// <summary>
/// Automatically adds a <see cref="GameBootstrapper"/> to the Game scene if one is missing.
/// Runs when Unity editor loads and when the active scene changes.
/// </summary>
[InitializeOnLoad]
public static class AutoSceneSetupEditor
{
    static AutoSceneSetupEditor()
    {
        EditorApplication.delayCall += OnEditorReady;
        EditorSceneManager.sceneOpened += (scene, mode) => EnsureBootstrapperInGameScene(scene);
    }

    private static void OnEditorReady()
    {
        // Check all currently loaded scenes.
        for (int i = 0; i < SceneManager.sceneCount; i++)
            EnsureBootstrapperInGameScene(SceneManager.GetSceneAt(i));
    }

    private static void EnsureBootstrapperInGameScene(Scene scene)
    {
        if (!scene.IsValid() || !scene.isLoaded) return;
        if (scene.name != "Game") return;

        // Check if a GameBootstrapper already exists.
        foreach (var root in scene.GetRootGameObjects())
        {
            if (root.GetComponent<GameBootstrapper>() != null)
                return; // Already present.
        }

        // Add Bootstrap GameObject to the Game scene.
        var go = new GameObject("[Bootstrap]");
        SceneManager.MoveGameObjectToScene(go, scene);
        go.AddComponent<GameBootstrapper>();

        // Mark scene dirty so the change is saved.
        EditorSceneManager.MarkSceneDirty(scene);
        Debug.Log("[AutoSceneSetup] Added GameBootstrapper to Game scene. Save the scene to persist.");
    }
}
