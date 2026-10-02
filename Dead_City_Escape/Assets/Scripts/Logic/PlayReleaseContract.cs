// ---------------------------------------------------------------------------
// Dead City Escape - Play release contract (pure C#, no Unity types)
// Version, privacy link, local-data wipe, signing keys, and listing limits.
// ---------------------------------------------------------------------------
#nullable disable
using System;
using System.Collections.Generic;
using System.IO;
using System.Text.RegularExpressions;

namespace DeadCityEscape.Logic
{
    /// <summary>
    /// Single source for the Android release identity and the in-app privacy link.
    /// </summary>
    public static class PlayReleaseInfo
    {
        public const int VersionCode = 1;
        public const string VersionName = "1.0.0";
        public const string AndroidApplicationId = "com.studio.deadcityescape";
        public const int AndroidTargetSdk = 36;
        public const string RequiredUnityVersion = "6000.3.11f1";

        /// <summary>
        /// The only privacy-policy URL the game may open.
        /// </summary>
        public const string PrivacyPolicyUrl = "https://example.com/dead-city-escape/privacy";
    }

    /// <summary>
    /// Progress that may be written after a wipe. A fresh snapshot is not a restored run.
    /// </summary>
    public sealed class RunSaveSnapshot
    {
        public int PlayerLevel = 1;
        public int PlayerXP = 0;
        public int TotalRunsCompleted = 0;
        public bool RunInProgress = false;
        public int ActiveRunSeed = 0;
        public string UnlockedSkillIds = "";

        public bool HasRestorableRun => IsRestorable(RunInProgress, ActiveRunSeed);

        public static bool IsRestorable(bool runInProgress, int activeRunSeed)
        {
            return runInProgress && activeRunSeed != 0;
        }

        public static RunSaveSnapshot Fresh()
        {
            return new RunSaveSnapshot();
        }
    }

    /// <summary>
    /// Deletes on-device files. Does not delete the root folder itself.
    /// </summary>
    public static class LocalDataWipe
    {
        public const bool RequiresConfirmation = true;

        public static void DeleteContents(string root)
        {
            if (string.IsNullOrEmpty(root) || !Directory.Exists(root))
                return;

            foreach (var file in Directory.GetFiles(root))
                File.Delete(file);

            foreach (var dir in Directory.GetDirectories(root))
                Directory.Delete(dir, true);
        }
    }

    public static class ReleaseSigning
    {
        public static readonly string[] RequiredProperties =
        {
            "RELEASE_STORE_FILE",
            "RELEASE_STORE_PASSWORD",
            "RELEASE_KEY_ALIAS",
            "RELEASE_KEY_PASSWORD"
        };

        public static List<string> Missing(IDictionary<string, string> values)
        {
            var missing = new List<string>();
            foreach (var key in RequiredProperties)
            {
                string value = null;
                if (values == null || !values.TryGetValue(key, out value) || !IsUsable(value))
                    missing.Add(key);
            }
            return missing;
        }

        public static string FormatMissing(ICollection<string> missing)
        {
            if (missing == null || missing.Count == 0)
                return "Release signing is incomplete. Missing: " + string.Join(", ", RequiredProperties);
            return "Release signing is incomplete. Missing: " + string.Join(", ", missing);
        }

        public static Dictionary<string, string> ParseProperties(string text)
        {
            var dict = new Dictionary<string, string>(StringComparer.Ordinal);
            if (string.IsNullOrEmpty(text))
                return dict;

            var lines = text.Split(new[] { '\r', '\n' }, StringSplitOptions.RemoveEmptyEntries);
            foreach (var raw in lines)
            {
                var line = raw.Trim();
                if (line.Length == 0 || line[0] == '#')
                    continue;
                var idx = line.IndexOf('=');
                if (idx <= 0)
                    continue;
                var key = line.Substring(0, idx).Trim();
                var value = line.Substring(idx + 1).Trim();
                dict[key] = value;
            }
            return dict;
        }

        static bool IsUsable(string value)
        {
            if (string.IsNullOrWhiteSpace(value))
                return false;
            return !string.Equals(value.Trim(), "CHANGEME", StringComparison.Ordinal);
        }
    }

    public static class StoreListingRules
    {
        public const int ShortDescriptionMaxLength = 80;
        public const int FullDescriptionMaxLength = 4000;

        public static bool IsValidShort(string text)
        {
            if (string.IsNullOrWhiteSpace(text))
                return false;
            return text.Trim().Length <= ShortDescriptionMaxLength;
        }

        public static bool IsValidFull(string text)
        {
            if (string.IsNullOrWhiteSpace(text))
                return false;
            return text.Trim().Length <= FullDescriptionMaxLength;
        }
    }

    /// <summary>
    /// Strips emails and home-directory user names before a log is stored on device.
    /// </summary>
    public static class LogRedactor
    {
        static readonly Regex Email = new Regex(
            @"[A-Z0-9._%+\-]+@[A-Z0-9.\-]+\.[A-Z]{2,}",
            RegexOptions.IgnoreCase | RegexOptions.Compiled);

        static readonly Regex WinUser = new Regex(
            @"([A-Za-z]:\\Users\\)[^\\]+",
            RegexOptions.Compiled);

        static readonly Regex UnixUser = new Regex(
            @"(/Users/)[^/\s]+",
            RegexOptions.Compiled);

        public static string Redact(string text)
        {
            if (string.IsNullOrEmpty(text))
                return string.Empty;
            text = Email.Replace(text, "[redacted-email]");
            text = WinUser.Replace(text, "$1[redacted]");
            text = UnixUser.Replace(text, "$1[redacted]");
            return text;
        }
    }
}
