using UnityEditor;
using UnityEngine;
using System;
using System.IO;
using System.Linq;

/// <summary>
/// Unity Editor build script for command-line builds
/// Called by PowerShell automation scripts
/// </summary>
public class BuildScript
{
    // Build settings
    private static string companyName = "YourCompany";
    private static string productName = "InventorsWorkshop";
    private static string bundleIdentifier = "com.yourcompany.inventorsworkshop";

    /// <summary>
    /// Build Android APK or AAB
    /// Called from command line: -executeMethod BuildScript.BuildAndroid
    /// </summary>
    public static void BuildAndroid()
    {
        Debug.Log("========================================");
        Debug.Log("Starting Android Build");
        Debug.Log("========================================");

        try
        {
            // Get command line arguments
            string buildPath = GetArg("-buildPath");
            string buildType = GetArg("-buildType", "Release");
            string version = GetArg("-version", "1.0.0");

            // Configure player settings
            ConfigurePlayerSettings(version);
            ConfigureAndroidSettings(buildType);

            // Get scenes
            string[] scenes = GetScenePaths();
            if (scenes.Length == 0)
            {
                Debug.LogError("No scenes found in Build Settings!");
                EditorApplication.Exit(1);
                return;
            }

            Debug.Log($"Building {scenes.Length} scenes:");
            foreach (string scene in scenes)
            {
                Debug.Log($"  - {scene}");
            }

            // Build options
            BuildPlayerOptions buildOptions = new BuildPlayerOptions
            {
                scenes = scenes,
                locationPathName = buildPath,
                target = BuildTarget.Android,
                options = buildType == "Debug" ? BuildOptions.Development : BuildOptions.None
            };

            // Perform build
            Debug.Log($"Output: {buildPath}");
            Debug.Log($"Build Type: {buildType}");
            Debug.Log("Building...");

            BuildReport report = BuildPipeline.BuildPlayer(buildOptions);
            BuildSummary summary = report.summary;

            if (summary.result == BuildResult.Succeeded)
            {
                Debug.Log("========================================");
                Debug.Log("BUILD SUCCESSFUL!");
                Debug.Log($"Size: {summary.totalSize / (1024 * 1024)} MB");
                Debug.Log($"Time: {summary.totalTime.TotalMinutes:F2} minutes");
                Debug.Log("========================================");
                EditorApplication.Exit(0);
            }
            else
            {
                Debug.LogError("========================================");
                Debug.LogError($"BUILD FAILED: {summary.result}");
                Debug.LogError("========================================");
                EditorApplication.Exit(1);
            }
        }
        catch (Exception e)
        {
            Debug.LogError($"Build exception: {e.Message}");
            Debug.LogError(e.StackTrace);
            EditorApplication.Exit(1);
        }
    }

    /// <summary>
    /// Build iOS Xcode project
    /// Called from command line: -executeMethod BuildScript.BuildiOS
    /// </summary>
    public static void BuildiOS()
    {
        Debug.Log("========================================");
        Debug.Log("Starting iOS Build");
        Debug.Log("========================================");

        try
        {
            // Get command line arguments
            string buildPath = GetArg("-buildPath");
            string version = GetArg("-version", "1.0.0");

            // Configure player settings
            ConfigurePlayerSettings(version);
            ConfigureiOSSettings();

            // Get scenes
            string[] scenes = GetScenePaths();
            if (scenes.Length == 0)
            {
                Debug.LogError("No scenes found in Build Settings!");
                EditorApplication.Exit(1);
                return;
            }

            Debug.Log($"Building {scenes.Length} scenes:");
            foreach (string scene in scenes)
            {
                Debug.Log($"  - {scene}");
            }

            // Build options
            BuildPlayerOptions buildOptions = new BuildPlayerOptions
            {
                scenes = scenes,
                locationPathName = buildPath,
                target = BuildTarget.iOS,
                options = BuildOptions.None
            };

            // Perform build
            Debug.Log($"Output: {buildPath}");
            Debug.Log("Building Xcode project...");

            BuildReport report = BuildPipeline.BuildPlayer(buildOptions);
            BuildSummary summary = report.summary;

            if (summary.result == BuildResult.Succeeded)
            {
                Debug.Log("========================================");
                Debug.Log("XCODE PROJECT GENERATED SUCCESSFULLY!");
                Debug.Log($"Time: {summary.totalTime.TotalMinutes:F2} minutes");
                Debug.Log("========================================");
                EditorApplication.Exit(0);
            }
            else
            {
                Debug.LogError("========================================");
                Debug.LogError($"BUILD FAILED: {summary.result}");
                Debug.LogError("========================================");
                EditorApplication.Exit(1);
            }
        }
        catch (Exception e)
        {
            Debug.LogError($"Build exception: {e.Message}");
            Debug.LogError(e.StackTrace);
            EditorApplication.Exit(1);
        }
    }

    /// <summary>
    /// Configure common player settings
    /// </summary>
    private static void ConfigurePlayerSettings(string version)
    {
        Debug.Log("Configuring player settings...");

        PlayerSettings.companyName = companyName;
        PlayerSettings.productName = productName;
        PlayerSettings.bundleVersion = version;

        // Parse version for bundle version code
        string[] versionParts = version.Split('.');
        if (versionParts.Length >= 3)
        {
            int major = int.Parse(versionParts[0]);
            int minor = int.Parse(versionParts[1]);
            int patch = int.Parse(versionParts[2]);
            int bundleVersionCode = (major * 10000) + (minor * 100) + patch;
            PlayerSettings.Android.bundleVersionCode = bundleVersionCode;
            PlayerSettings.iOS.buildNumber = bundleVersionCode.ToString();
        }

        Debug.Log($"Company: {companyName}");
        Debug.Log($"Product: {productName}");
        Debug.Log($"Version: {version}");
    }

    /// <summary>
    /// Configure Android-specific settings
    /// </summary>
    private static void ConfigureAndroidSettings(string buildType)
    {
        Debug.Log("Configuring Android settings...");

        PlayerSettings.SetApplicationIdentifier(BuildTargetGroup.Android, bundleIdentifier);
        
        // Set build type
        if (buildType == "Release")
        {
            EditorUserBuildSettings.buildAppBundle = true; // AAB for release
            PlayerSettings.Android.useCustomKeystore = true;
            Debug.Log("Build format: AAB (Android App Bundle)");
        }
        else
        {
            EditorUserBuildSettings.buildAppBundle = false; // APK for debug
            Debug.Log("Build format: APK");
        }

        // Android settings
        PlayerSettings.Android.minSdkVersion = AndroidSdkVersions.AndroidApiLevel22; // Android 5.1
        PlayerSettings.Android.targetSdkVersion = AndroidSdkVersions.AndroidApiLevel33; // Android 13

        // Graphics
        PlayerSettings.SetGraphicsAPIs(BuildTarget.Android, new UnityEngine.Rendering.GraphicsDeviceType[] {
            UnityEngine.Rendering.GraphicsDeviceType.OpenGLES3,
            UnityEngine.Rendering.GraphicsDeviceType.Vulkan
        });

        // Scripting backend
        PlayerSettings.SetScriptingBackend(BuildTargetGroup.Android, ScriptingImplementation.IL2CPP);
        PlayerSettings.Android.targetArchitectures = AndroidArchitecture.ARM64 | AndroidArchitecture.ARMv7;

        Debug.Log($"Min SDK: Android 5.1 (API 22)");
        Debug.Log($"Target SDK: Android 13 (API 33)");
        Debug.Log($"Scripting: IL2CPP");
        Debug.Log($"Architectures: ARM64 + ARMv7");
    }

    /// <summary>
    /// Configure iOS-specific settings
    /// </summary>
    private static void ConfigureiOSSettings()
    {
        Debug.Log("Configuring iOS settings...");

        PlayerSettings.SetApplicationIdentifier(BuildTargetGroup.iOS, bundleIdentifier);
        
        // iOS settings
        PlayerSettings.iOS.targetOSVersionString = "12.0";
        PlayerSettings.iOS.sdkVersion = iOSSdkVersion.DeviceSDK;

        // Scripting backend
        PlayerSettings.SetScriptingBackend(BuildTargetGroup.iOS, ScriptingImplementation.IL2CPP);

        Debug.Log($"Min iOS: 12.0");
        Debug.Log($"SDK: Device SDK");
        Debug.Log($"Scripting: IL2CPP");
    }

    /// <summary>
    /// Get scenes from Build Settings
    /// </summary>
    private static string[] GetScenePaths()
    {
        return EditorBuildSettings.scenes
            .Where(scene => scene.enabled)
            .Select(scene => scene.path)
            .ToArray();
    }

    /// <summary>
    /// Get command line argument
    /// </summary>
    private static string GetArg(string name, string defaultValue = "")
    {
        string[] args = Environment.GetCommandLineArgs();
        for (int i = 0; i < args.Length; i++)
        {
            if (args[i] == name && i + 1 < args.Length)
            {
                return args[i + 1];
            }
        }
        return defaultValue;
    }
}
