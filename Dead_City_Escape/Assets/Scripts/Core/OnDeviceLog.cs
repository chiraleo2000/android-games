// ---------------------------------------------------------------------------
// Dead City Escape - On-device diagnostic log
// Stores crash text locally after redacting emails and user-profile paths.
// ---------------------------------------------------------------------------
using System;
using System.IO;
using DeadCityEscape.Logic;
using UnityEngine;

namespace DeadCityEscape.Core
{
    public static class OnDeviceLog
    {
        const int MaxBytes = 64 * 1024;
        const int MaxWrites = 30;
        static int _writes;

        public static void AppendException(string condition, string stackTrace)
        {
            if (_writes >= MaxWrites)
                return;
            _writes++;

            try
            {
                var dir = Path.Combine(Application.persistentDataPath, "logs");
                Directory.CreateDirectory(dir);
                var path = Path.Combine(dir, "game.log");
                if (File.Exists(path) && new FileInfo(path).Length > MaxBytes)
                    return;

                var raw = (condition ?? string.Empty) + "\n" + (stackTrace ?? string.Empty);
                raw = ReplacePath(raw, Application.persistentDataPath, "[app-storage]");
                raw = ReplacePath(raw, Application.temporaryCachePath, "[temp]");
                raw = ReplacePath(raw, Application.dataPath, "[project]");
                var line = DateTime.UtcNow.ToString("o") + "\n" + LogRedactor.Redact(raw) + "\n";
                File.AppendAllText(path, line);
            }
            catch (Exception)
            {
                // A failed log write must not raise another exception.
            }
        }

        static string ReplacePath(string text, string path, string token)
        {
            if (string.IsNullOrEmpty(text) || string.IsNullOrEmpty(path))
                return text ?? string.Empty;
            return text.Replace(path, token);
        }
    }
}
