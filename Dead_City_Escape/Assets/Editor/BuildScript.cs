using UnityEditor;
using UnityEditor.Build.Reporting;
using UnityEngine;
using System;
using System.Collections.Generic;
using System.IO;
using System.Reflection;
using DeadCityEscape.Logic;

/// <summary>
/// Build automation script for Dead City Escape Android builds.
/// Provides methods to build Android App Bundle (AAB) with proper configuration.
/// </summary>
public static class BuildScript
{
    private const string BuildPath = "build/Android/DeadCityEscape.aab";
    
    /// <summary>
    /// Builds the Android App Bundle with all required scenes and settings.
    /// Can be called from Unity Editor menu or command line.
    /// </summary>
    [MenuItem("Build/Build Android AAB")]
    [MenuItem("Dead City Escape/Build Android AAB")]
    public static void BuildAndroid()
    {
        if (!PrepareAndroidRelease(out KeystoreSettings previousKeystore))
            return;

        try
        {
            BuildAndroidBundle();
        }
        finally
        {
            RestoreKeystore(previousKeystore);
        }
    }

    static void BuildAndroidBundle()
    {
        // Ensure build directory exists
        string buildDir = Path.GetDirectoryName(BuildPath);
        if (!Directory.Exists(buildDir))
        {
            Directory.CreateDirectory(buildDir);
        }

        // Define scenes to include in build
        string[] scenes = new string[]
        {
            "Assets/Scenes/MainMenu.unity",
            "Assets/Scenes/LoadingScreen.unity",
            "Assets/Scenes/Game.unity"
        };

        // Verify all scenes exist
        foreach (string scene in scenes)
        {
            if (!File.Exists(scene))
            {
                Debug.LogError($"Scene not found: {scene}");
                return;
            }
        }

        // Configure build options
        BuildPlayerOptions buildPlayerOptions = new BuildPlayerOptions
        {
            scenes = scenes,
            locationPathName = BuildPath,
            target = BuildTarget.Android,
            options = BuildOptions.None
        };

        // Set Android-specific build settings
        EditorUserBuildSettings.buildAppBundle = true;
        EditorUserBuildSettings.androidBuildSystem = AndroidBuildSystem.Gradle;
        EditorUserBuildSettings.androidCreateSymbols = AndroidCreateSymbols.Public;

        Debug.Log("Starting Android AAB build...");
        Debug.Log($"Output path: {Path.GetFullPath(BuildPath)}");
        Debug.Log($"Scenes: {string.Join(", ", scenes)}");

        // Execute build
        BuildReport report = BuildPipeline.BuildPlayer(buildPlayerOptions);
        BuildSummary summary = report.summary;

        if (summary.result == BuildResult.Succeeded)
        {
            Debug.Log($"Build succeeded! Size: {summary.totalSize / (1024 * 1024)} MB");
            Debug.Log($"Build time: {summary.totalTime}");
            Debug.Log($"Output: {Path.GetFullPath(BuildPath)}");
        }
        else if (summary.result == BuildResult.Failed)
        {
            Debug.LogError("Build failed!");
        }
        else if (summary.result == BuildResult.Cancelled)
        {
            Debug.LogWarning("Build cancelled.");
        }
    }

    /// <summary>
    /// Builds Android APK instead of AAB (for testing purposes).
    /// </summary>
    [MenuItem("Build/Build Android APK (Test)")]
    public static void BuildAndroidAPK()
    {
        string apkPath = "build/Android/DeadCityEscape.apk";
        
        // Ensure build directory exists
        string buildDir = Path.GetDirectoryName(apkPath);
        if (!Directory.Exists(buildDir))
        {
            Directory.CreateDirectory(buildDir);
        }

        // Define scenes
        string[] scenes = new string[]
        {
            "Assets/Scenes/MainMenu.unity",
            "Assets/Scenes/LoadingScreen.unity",
            "Assets/Scenes/Game.unity"
        };

        // Configure build options
        BuildPlayerOptions buildPlayerOptions = new BuildPlayerOptions
        {
            scenes = scenes,
            locationPathName = apkPath,
            target = BuildTarget.Android,
            options = BuildOptions.None
        };

        // Set Android-specific build settings for APK
        EditorUserBuildSettings.buildAppBundle = false;
        EditorUserBuildSettings.androidBuildSystem = AndroidBuildSystem.Gradle;

        Debug.Log("Starting Android APK build...");
        
        // Execute build
        BuildReport report = BuildPipeline.BuildPlayer(buildPlayerOptions);
        BuildSummary summary = report.summary;

        if (summary.result == BuildResult.Succeeded)
        {
            Debug.Log($"APK build succeeded! Size: {summary.totalSize / (1024 * 1024)} MB");
            Debug.Log($"Output: {Path.GetFullPath(apkPath)}");
        }
        else
        {
            Debug.LogError("APK build failed!");
        }
    }

    /// <summary>
    /// Builds a WebGL version for browser/webapp testing.
    /// Accessible via Build menu in Unity Editor.
    /// </summary>
    [MenuItem("Build/Build WebGL")]
    public static void BuildWebGL()
    {
        string webglPath = "build/WebGL/DeadCityEscape";

        // Ensure build directory exists
        string buildDir = Path.GetDirectoryName(webglPath);
        if (!Directory.Exists(buildDir))
        {
            Directory.CreateDirectory(buildDir);
        }

        // Define scenes
        string[] scenes = new string[]
        {
            "Assets/Scenes/MainMenu.unity",
            "Assets/Scenes/LoadingScreen.unity",
            "Assets/Scenes/Game.unity"
        };

        // Verify scenes exist
        foreach (string scene in scenes)
        {
            if (!File.Exists(scene))
            {
                Debug.LogError($"Scene not found: {scene}");
                return;
            }
        }

        // Configure build options
        BuildPlayerOptions buildPlayerOptions = new BuildPlayerOptions
        {
            scenes = scenes,
            locationPathName = webglPath,
            target = BuildTarget.WebGL,
            options = BuildOptions.None
        };

        // WebGL-specific settings
        PlayerSettings.WebGL.compressionFormat = WebGLCompressionFormat.Brotli;
        PlayerSettings.WebGL.memorySize = 512;
        PlayerSettings.WebGL.linkerTarget = WebGLLinkerTarget.Wasm;
        PlayerSettings.WebGL.dataCaching = true;
        PlayerSettings.WebGL.template = "APPLICATION:Default";

        Debug.Log("Starting WebGL build...");
        Debug.Log($"Output path: {Path.GetFullPath(webglPath)}");

        // Execute build
        BuildReport report = BuildPipeline.BuildPlayer(buildPlayerOptions);
        BuildSummary summary = report.summary;

        if (summary.result == BuildResult.Succeeded)
        {
            Debug.Log($"WebGL build succeeded! Size: {summary.totalSize / (1024 * 1024)} MB");
            Debug.Log($"Output: {Path.GetFullPath(webglPath)}");
            Debug.Log("To test locally, run: python -m http.server 8080");
            Debug.Log("Then open: http://localhost:8080");
        }
        else if (summary.result == BuildResult.Failed)
        {
            Debug.LogError("WebGL build failed!");
        }
    }

    /// <summary>
    /// Builds a development WebGL build with debugging enabled.
    /// </summary>
    [MenuItem("Build/Build WebGL (Development)")]
    public static void BuildWebGLDevelopment()
    {
        string webglPath = "build/WebGL_Dev/DeadCityEscape";

        string buildDir = Path.GetDirectoryName(webglPath);
        if (!Directory.Exists(buildDir))
        {
            Directory.CreateDirectory(buildDir);
        }

        string[] scenes = new string[]
        {
            "Assets/Scenes/MainMenu.unity",
            "Assets/Scenes/LoadingScreen.unity",
            "Assets/Scenes/Game.unity"
        };

        BuildPlayerOptions buildPlayerOptions = new BuildPlayerOptions
        {
            scenes = scenes,
            locationPathName = webglPath,
            target = BuildTarget.WebGL,
            options = BuildOptions.Development | BuildOptions.ConnectWithProfiler
        };

        PlayerSettings.WebGL.compressionFormat = WebGLCompressionFormat.Disabled;
        PlayerSettings.WebGL.memorySize = 512;

        Debug.Log("Starting WebGL Development build...");

        BuildReport report = BuildPipeline.BuildPlayer(buildPlayerOptions);
        BuildSummary summary = report.summary;

        if (summary.result == BuildResult.Succeeded)
        {
            Debug.Log($"WebGL Dev build succeeded! Output: {Path.GetFullPath(webglPath)}");
        }
        else
        {
            Debug.LogError("WebGL Dev build failed!");
        }
    }

    struct KeystoreSettings
    {
        public bool UseCustom;
        public string Name;
        public string Pass;
        public string Alias;
        public string AliasPass;
    }

    /// <summary>
    /// Applies the Play identity, ARM64, target SDK 36, and 16 KB page size when that API exists.
    /// Release signing is read from keystore.properties and never from a committed password.
    /// </summary>
    static bool PrepareAndroidRelease(out KeystoreSettings previousKeystore)
    {
        previousKeystore = CaptureKeystore();

        if (Application.unityVersion != PlayReleaseInfo.RequiredUnityVersion)
        {
            FailRelease("This Android AAB menu requires Unity " + PlayReleaseInfo.RequiredUnityVersion +
                ". This editor is " + Application.unityVersion + ".");
            return false;
        }

        PlayerSettings.SetApplicationIdentifier(NamedBuildTarget.Android, PlayReleaseInfo.AndroidApplicationId);
        PlayerSettings.bundleVersion = PlayReleaseInfo.VersionName;
        PlayerSettings.Android.bundleVersionCode = PlayReleaseInfo.VersionCode;
        PlayerSettings.Android.targetSdkVersion = (AndroidSdkVersions)PlayReleaseInfo.AndroidTargetSdk;
        PlayerSettings.Android.targetArchitectures = AndroidArchitecture.ARM64;
        PlayerSettings.SetScriptingBackend(NamedBuildTarget.Android, ScriptingImplementation.IL2CPP);
        int minSdk = (int)PlayerSettings.Android.minSdkVersion;
        if (minSdk != 0 && minSdk < 22)
            PlayerSettings.Android.minSdkVersion = (AndroidSdkVersions)25;

        TryEnable16KbPageSize();

        string root = Path.GetFullPath(Path.Combine(Application.dataPath, ".."));
        string propsPath = Path.Combine(root, "keystore.properties");
        if (!File.Exists(propsPath))
        {
            FailRelease(ReleaseSigning.FormatMissing(ReleaseSigning.RequiredProperties));
            return false;
        }

        Dictionary<string, string> values = ReleaseSigning.ParseProperties(File.ReadAllText(propsPath));
        List<string> missing = ReleaseSigning.Missing(values);
        if (missing.Count > 0)
        {
            FailRelease(ReleaseSigning.FormatMissing(missing));
            return false;
        }

        string storeFile = values["RELEASE_STORE_FILE"];
        if (!Path.IsPathRooted(storeFile))
            storeFile = Path.GetFullPath(Path.Combine(root, storeFile));
        if (!File.Exists(storeFile))
        {
            FailRelease(ReleaseSigning.FormatMissing(new[] { "RELEASE_STORE_FILE" }));
            return false;
        }

        PlayerSettings.Android.useCustomKeystore = true;
        PlayerSettings.Android.keystoreName = storeFile;
        PlayerSettings.Android.keystorePass = values["RELEASE_STORE_PASSWORD"];
        PlayerSettings.Android.keyaliasName = values["RELEASE_KEY_ALIAS"];
        PlayerSettings.Android.keyaliasPass = values["RELEASE_KEY_PASSWORD"];
        return true;
    }

    static void TryEnable16KbPageSize()
    {
        const BindingFlags flags = BindingFlags.Public | BindingFlags.Static;
        Type android = typeof(PlayerSettings).GetNestedType("Android");
        if (android == null)
        {
            Debug.Log("16 KB page size API was not found. Native libraries still set useLegacyPackaging false in mainTemplate.gradle.");
            return;
        }

        string[] names = { "use16KbPageSize", "enable16KbPageSize" };
        foreach (string name in names)
        {
            PropertyInfo prop = android.GetProperty(name, flags);
            if (prop != null && prop.PropertyType == typeof(bool) && prop.CanWrite)
            {
                prop.SetValue(null, true);
                Debug.Log("Enabled 16 KB page size via PlayerSettings.Android." + name);
                return;
            }
        }

        Debug.Log("16 KB page size API was not found on this editor. Native libraries still set useLegacyPackaging false in mainTemplate.gradle.");
    }

    static KeystoreSettings CaptureKeystore()
    {
        return new KeystoreSettings
        {
            UseCustom = PlayerSettings.Android.useCustomKeystore,
            Name = PlayerSettings.Android.keystoreName,
            Pass = PlayerSettings.Android.keystorePass,
            Alias = PlayerSettings.Android.keyaliasName,
            AliasPass = PlayerSettings.Android.keyaliasPass
        };
    }

    static void RestoreKeystore(KeystoreSettings previous)
    {
        PlayerSettings.Android.useCustomKeystore = previous.UseCustom;
        PlayerSettings.Android.keystoreName = previous.Name;
        PlayerSettings.Android.keystorePass = previous.Pass;
        PlayerSettings.Android.keyaliasName = previous.Alias;
        PlayerSettings.Android.keyaliasPass = previous.AliasPass;
    }

    static void FailRelease(string message)
    {
        Debug.LogError(message);
        if (Application.isBatchMode)
            EditorApplication.Exit(1);
    }
}
