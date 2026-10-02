// ---------------------------------------------------------------------------
// Dead City Escape - Editor check for the Play release contract
// ---------------------------------------------------------------------------
using System;
using System.IO;
using System.Text.RegularExpressions;
using DeadCityEscape.Logic;
using UnityEditor;
using UnityEngine;

public static class PlayReleaseValidator
{
    [MenuItem("Dead City Escape/Validate Play Release")]
    public static void ValidateFromMenu()
    {
        if (Validate())
            Debug.Log("Play release validation passed.");
    }

    public static void ValidateBatch()
    {
        if (!Validate() && Application.isBatchMode)
            EditorApplication.Exit(1);
    }

    public static bool Validate()
    {
        bool ok = true;
        string root = Path.GetFullPath(Path.Combine(Application.dataPath, ".."));

        string id = PlayerSettings.GetApplicationIdentifier(NamedBuildTarget.Android);
        if (id != PlayReleaseInfo.AndroidApplicationId)
        {
            Debug.LogError("Android application id is " + id + ", expected " + PlayReleaseInfo.AndroidApplicationId);
            ok = false;
        }

        if ((int)PlayerSettings.Android.targetSdkVersion != PlayReleaseInfo.AndroidTargetSdk)
        {
            Debug.LogError("Android target SDK is " + (int)PlayerSettings.Android.targetSdkVersion +
                ", expected " + PlayReleaseInfo.AndroidTargetSdk);
            ok = false;
        }

        if (PlayerSettings.Android.targetArchitectures != AndroidArchitecture.ARM64)
        {
            Debug.LogError("Android architectures must be ARM64 only.");
            ok = false;
        }

        if (PlayerSettings.GetScriptingBackend(NamedBuildTarget.Android) != ScriptingImplementation.IL2CPP)
        {
            Debug.LogError("Android scripting backend must be IL2CPP.");
            ok = false;
        }

        if (PlayerSettings.bundleVersion != PlayReleaseInfo.VersionName ||
            PlayerSettings.Android.bundleVersionCode != PlayReleaseInfo.VersionCode)
        {
            Debug.LogError("Version must match PlayReleaseInfo constants.");
            ok = false;
        }

        ok &= RequireFile(root, "PRIVACY_POLICY.md");
        ok &= RequireFile(root, "TERMS_OF_SERVICE.md");
        ok &= RequireFile(root, "RELEASE_URLS.md");
        ok &= RequireFile(root, "DEVICE_CHECKLIST.md");
        ok &= RequireFile(root, "keystore.properties.example");
        ok &= RequireFile(root, "store/icon_512.png");
        ok &= RequireFile(root, "store/feature_graphic_1024x500.png");
        ok &= RequireFile(root, "store/screenshot_01_menu.png");
        ok &= RequireFile(root, "store/screenshot_02_city.png");
        ok &= RequireFile(root, "store/short_description.txt");
        ok &= RequireFile(root, "store/full_description.txt");
        ok &= RequireFile(root, "store/content_rating_answers.md");

        string shortText = ReadTrimmed(root, "store/short_description.txt");
        if (!StoreListingRules.IsValidShort(shortText))
        {
            Debug.LogError("Short description is missing or longer than 80 characters.");
            ok = false;
        }

        string fullText = ReadTrimmed(root, "store/full_description.txt");
        if (!StoreListingRules.IsValidFull(fullText))
        {
            Debug.LogError("Full description is missing or longer than 4000 characters.");
            ok = false;
        }

        foreach (string doc in new[] { "PRIVACY_POLICY.md", "TERMS_OF_SERVICE.md", "RELEASE_URLS.md" })
        {
            string body = ReadTrimmed(root, doc).ToLowerInvariant();
            if (!body.Contains("[legal_name]") || !body.Contains("[support_email]") || !body.Contains("[effective_date]"))
            {
                Debug.LogError(doc + " is missing a legal placeholder.");
                ok = false;
            }
            if (!body.Contains("violent") || !body.Contains("account") || !body.Contains("families") || !body.Contains("device"))
            {
                Debug.LogError(doc + " must state violence, no account, not a Families app, and on-device data.");
                ok = false;
            }
        }

        string urls = ReadTrimmed(root, "RELEASE_URLS.md");
        if (!urls.Contains(PlayReleaseInfo.PrivacyPolicyUrl))
        {
            Debug.LogError("RELEASE_URLS.md must contain PlayReleaseInfo.PrivacyPolicyUrl.");
            ok = false;
        }

        ok &= PngSize(Path.Combine(root, "store/icon_512.png"), 512, 512);
        ok &= PngSize(Path.Combine(root, "store/feature_graphic_1024x500.png"), 1024, 500);

        string gradle = ReadTrimmed(root, "Assets/Plugins/Android/mainTemplate.gradle");
        if (gradle.IndexOf("RECORD_AUDIO", StringComparison.OrdinalIgnoreCase) >= 0)
        {
            Debug.LogError("Android gradle template requests RECORD_AUDIO.");
            ok = false;
        }

        string settings = ReadTrimmed(root, "ProjectSettings/ProjectSettings.asset");
        if (Regex.IsMatch(settings, @"(?m)^  androidKeystorePass: \S") ||
            Regex.IsMatch(settings, @"(?m)^  AndroidKeystorePass: \S"))
        {
            Debug.LogError("ProjectSettings.asset contains a keystore password.");
            ok = false;
        }

        if (!ok && Application.isBatchMode)
            EditorApplication.Exit(1);
        return ok;
    }

    static bool RequireFile(string root, string relative)
    {
        if (File.Exists(Path.Combine(root, relative)))
            return true;
        Debug.LogError("Missing " + relative);
        return false;
    }

    static string ReadTrimmed(string root, string relative)
    {
        string path = Path.Combine(root, relative);
        if (!File.Exists(path))
            return string.Empty;
        return File.ReadAllText(path).Trim();
    }

    static bool PngSize(string path, int width, int height)
    {
        if (!File.Exists(path))
            return false;
        byte[] bytes = File.ReadAllBytes(path);
        if (bytes.Length < 24 || bytes[0] != 137)
        {
            Debug.LogError(path + " is not a PNG.");
            return false;
        }
        int w = (bytes[16] << 24) | (bytes[17] << 16) | (bytes[18] << 8) | bytes[19];
        int h = (bytes[20] << 24) | (bytes[21] << 16) | (bytes[22] << 8) | bytes[23];
        if (w == width && h == height)
            return true;
        Debug.LogError(path + " is " + w + "x" + h + ", expected " + width + "x" + height);
        return false;
    }
}
