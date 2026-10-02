// ---------------------------------------------------------------------------
// Dead City Escape - Play release contract tests
// ---------------------------------------------------------------------------
using System;
using System.Collections.Generic;
using System.IO;
using System.Text.RegularExpressions;
using DeadCityEscape.Logic;
using NUnit.Framework;

namespace DeadCityEscape.Tests
{
    [TestFixture]
    public class PlayReleaseContractTests
    {
        static string ProjectRoot()
        {
            var dir = new DirectoryInfo(AppContext.BaseDirectory);
            while (dir != null)
            {
                var marker = Path.Combine(dir.FullName, "ProjectSettings", "ProjectVersion.txt");
                if (File.Exists(marker))
                    return dir.FullName;
                dir = dir.Parent;
            }
            throw new DirectoryNotFoundException("Dead City Escape project root was not found.");
        }

        [Test]
        public void FreshSnapshot_IsNotARestorableRun()
        {
            var fresh = RunSaveSnapshot.Fresh();
            Assert.That(fresh.PlayerLevel, Is.EqualTo(1));
            Assert.That(fresh.PlayerXP, Is.EqualTo(0));
            Assert.That(fresh.TotalRunsCompleted, Is.EqualTo(0));
            Assert.That(fresh.HasRestorableRun, Is.False);
            Assert.That(LocalDataWipe.RequiresConfirmation, Is.True);
        }

        [Test]
        public void Wipe_RemovesLocalFiles_AndDropsTheOldRun()
        {
            var root = Path.Combine(Path.GetTempPath(), "dce-wipe-" + Guid.NewGuid().ToString("N"));
            Directory.CreateDirectory(root);
            try
            {
                File.WriteAllText(Path.Combine(root, "dce_save.json"),
                    "{\"PlayerLevel\": 9, \"RunInProgress\": true, \"ActiveRunSeed\": 42}");
                var cache = Path.Combine(root, "recipe_cache");
                Directory.CreateDirectory(cache);
                File.WriteAllText(Path.Combine(cache, "manifest.json"), "{}");
                var logs = Path.Combine(root, "logs");
            Directory.CreateDirectory(logs);
            File.WriteAllText(Path.Combine(logs, "game.log"), "x");

                var old = new RunSaveSnapshot
                {
                    PlayerLevel = 9,
                    RunInProgress = true,
                    ActiveRunSeed = 42,
                    TotalRunsCompleted = 4
                };
                Assert.That(old.HasRestorableRun, Is.True);
                Assert.That(RunSaveSnapshot.IsRestorable(true, 42), Is.True);
                Assert.That(RunSaveSnapshot.IsRestorable(false, 42), Is.False);

                LocalDataWipe.DeleteContents(root);

                Assert.That(File.Exists(Path.Combine(root, "dce_save.json")), Is.False);
                Assert.That(Directory.Exists(cache), Is.False);
                Assert.That(Directory.GetFileSystemEntries(root), Is.Empty);

                var fresh = RunSaveSnapshot.Fresh();
                Assert.That(fresh.HasRestorableRun, Is.False);
                Assert.That(fresh.PlayerLevel, Is.Not.EqualTo(old.PlayerLevel));
            }
            finally
            {
                if (Directory.Exists(root))
                    Directory.Delete(root, true);
            }
        }

        [Test]
        public void MissingSigningProperties_AreNamed()
        {
            var missing = ReleaseSigning.Missing(new Dictionary<string, string>());
            Assert.That(missing, Is.EquivalentTo(ReleaseSigning.RequiredProperties));
            var message = ReleaseSigning.FormatMissing(missing);
            foreach (var key in ReleaseSigning.RequiredProperties)
                Assert.That(message, Does.Contain(key));
        }

        [Test]
        public void ExampleKeystore_UsesPlaceholders_NotRealPasswords()
        {
            var text = File.ReadAllText(Path.Combine(ProjectRoot(), "keystore.properties.example"));
            Assert.That(text, Does.Contain("CHANGEME"));
            Assert.That(text, Does.Not.Contain("BEGIN "));
            var missing = ReleaseSigning.Missing(ReleaseSigning.ParseProperties(text));
            Assert.That(missing, Does.Contain("RELEASE_STORE_PASSWORD"));
            Assert.That(missing, Does.Contain("RELEASE_KEY_PASSWORD"));
        }

        [Test]
        public void LogRedactor_RemovesEmail_AndUserProfile()
        {
            var raw = "failed C:\\Users\\chira\\Documents\\save.json mail a@b.co /Users/chira/Library";
            var redacted = LogRedactor.Redact(raw);
            Assert.That(redacted, Does.Not.Contain("chira"));
            Assert.That(redacted, Does.Not.Contain("a@b.co"));
            Assert.That(redacted, Does.Contain("[redacted-email]"));
            Assert.That(redacted, Does.Contain("[redacted]"));
        }

        [Test]
        public void ProjectSettings_MatchPlayIdentity()
        {
            var yaml = File.ReadAllText(Path.Combine(ProjectRoot(), "ProjectSettings", "ProjectSettings.asset"));
            Assert.That(yaml, Does.Contain("Android: " + PlayReleaseInfo.AndroidApplicationId));
            Assert.That(yaml, Does.Contain("overrideDefaultApplicationIdentifier: 1"));
            Assert.That(yaml, Does.Contain("AndroidTargetSdkVersion: " + PlayReleaseInfo.AndroidTargetSdk));
            Assert.That(yaml, Does.Contain("AndroidTargetArchitectures: 2"));
            Assert.That(yaml, Does.Contain("bundleVersion: " + PlayReleaseInfo.VersionName));
            Assert.That(yaml, Does.Contain("AndroidBundleVersionCode: " + PlayReleaseInfo.VersionCode));
            Assert.That(Regex.IsMatch(yaml, @"scriptingBackend:\s*\r?\n\s*Android:\s*1"), Is.True);
            Assert.That(Regex.IsMatch(yaml, @"AndroidMinSdkVersion:\s*(\d+)"), Is.True);
            var min = int.Parse(Regex.Match(yaml, @"AndroidMinSdkVersion:\s*(\d+)").Groups[1].Value);
            Assert.That(min, Is.GreaterThanOrEqualTo(22));
            Assert.That(yaml, Does.Contain("ForceInternetPermission: 0"));
            Assert.That(Regex.IsMatch(yaml, @"(?m)^  androidKeystorePass: \S"), Is.False);
        }

        [Test]
        public void LegalDocs_AndListing_AreComplete()
        {
            var root = ProjectRoot();
            foreach (var name in new[] { "PRIVACY_POLICY.md", "TERMS_OF_SERVICE.md", "RELEASE_URLS.md" })
            {
                var body = File.ReadAllText(Path.Combine(root, name));
                var lower = body.ToLowerInvariant();
                Assert.That(body, Does.Contain("[LEGAL_NAME]"));
                Assert.That(body, Does.Contain("[SUPPORT_EMAIL]"));
                Assert.That(body, Does.Contain("[EFFECTIVE_DATE]"));
                Assert.That(lower, Does.Contain("violent"));
                Assert.That(lower, Does.Contain("account"));
                Assert.That(lower, Does.Contain("families"));
                Assert.That(lower, Does.Contain("device"));
                Assert.That(lower, Does.Contain("not sent off the device"));
            }

            var urls = File.ReadAllText(Path.Combine(root, "RELEASE_URLS.md"));
            Assert.That(urls, Does.Contain(PlayReleaseInfo.PrivacyPolicyUrl));

            var overlay = File.ReadAllText(Path.Combine(root, "Assets", "Scripts", "UI", "PlayComplianceOverlay.cs"));
            Assert.That(overlay, Does.Contain("PlayReleaseInfo.PrivacyPolicyUrl"));
            Assert.That(overlay, Does.Not.Contain("http"));
            Assert.That(overlay, Does.Contain("Delete all local data"));
            Assert.That(overlay, Does.Contain("Cancel"));
            Assert.That(overlay, Does.Contain("no restored run"));
            Assert.That(overlay, Does.Contain("Continue"));

            var build = File.ReadAllText(Path.Combine(root, "Assets", "Editor", "BuildScript.cs"));
            Assert.That(build, Does.Contain("Build Android AAB"));
            Assert.That(build, Does.Contain("use16KbPageSize"));
            Assert.That(build, Does.Contain("ReleaseSigning.FormatMissing"));

            var gitignore = File.ReadAllText(Path.Combine(root, ".gitignore"));
            Assert.That(gitignore, Does.Contain("keystore.properties"));
            Assert.That(gitignore, Does.Contain("*.jks"));

            var gradle = File.ReadAllText(Path.Combine(root, "Assets", "Plugins", "Android", "mainTemplate.gradle"));
            Assert.That(gradle, Does.Contain("abiFilters 'arm64-v8a'"));
            Assert.That(gradle, Does.Not.Contain("abiFilters 'arm64-v8a', 'x86_64'"));
            Assert.That(gradle, Does.Contain("exclude 'lib/x86_64/**'"));
            Assert.That(gradle, Does.Contain("useLegacyPackaging false"));
            Assert.That(gradle.IndexOf("RECORD_AUDIO", StringComparison.OrdinalIgnoreCase), Is.LessThan(0));
        }

        [Test]
        public void StoreListing_Files_HaveRequiredSizes()
        {
            var root = ProjectRoot();
            var store = Path.Combine(root, "store");
            var shortText = File.ReadAllText(Path.Combine(store, "short_description.txt"));
            var fullText = File.ReadAllText(Path.Combine(store, "full_description.txt"));
            Assert.That(StoreListingRules.IsValidShort(shortText), Is.True, "Short length " + shortText.Trim().Length);
            Assert.That(StoreListingRules.IsValidFull(fullText), Is.True);
            Assert.That(shortText.Trim().Length, Is.LessThanOrEqualTo(80));
            Assert.That(fullText.Trim().Length, Is.LessThanOrEqualTo(4000));

            var rating = File.ReadAllText(Path.Combine(store, "content_rating_answers.md"));
            Assert.That(rating, Does.Contain("Violence"));
            Assert.That(rating, Does.Contain("Yes"));
            Assert.That(rating, Does.Contain("Families"));

            AssertPng(Path.Combine(store, "icon_512.png"), 512, 512);
            AssertPng(Path.Combine(store, "feature_graphic_1024x500.png"), 1024, 500);

            var shots = Directory.GetFiles(store, "screenshot_*.png");
            Assert.That(shots.Length, Is.GreaterThanOrEqualTo(2));
            foreach (var shot in shots)
            {
                var size = PngSize(shot);
                Assert.That(size.height, Is.GreaterThan(size.width), shot);
            }

            var checklist = File.ReadAllText(Path.Combine(root, "DEVICE_CHECKLIST.md"));
            Assert.That(checklist, Does.Contain("Delete"));
            Assert.That(checklist.ToLowerInvariant(), Does.Contain("relaunch"));
        }

        static void AssertPng(string path, int width, int height)
        {
            var size = PngSize(path);
            Assert.That(size.width, Is.EqualTo(width), path);
            Assert.That(size.height, Is.EqualTo(height), path);
        }

        static (int width, int height) PngSize(string path)
        {
            var bytes = File.ReadAllBytes(path);
            Assert.That(bytes.Length, Is.GreaterThan(24));
            Assert.That(bytes[0], Is.EqualTo(137));
            int width = (bytes[16] << 24) | (bytes[17] << 16) | (bytes[18] << 8) | bytes[19];
            int height = (bytes[20] << 24) | (bytes[21] << 16) | (bytes[22] << 8) | bytes[23];
            return (width, height);
        }
    }
}
