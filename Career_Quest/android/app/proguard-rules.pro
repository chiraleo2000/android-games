# Add project specific ProGuard rules here.
# You can control the set of applied configuration files using the
# proguardFiles setting in build.gradle.
#
# For more details, see
#   http://developer.android.com/guide/developing/tools/proguard.html

# Preserve line number information for debugging stack traces
-keepattributes SourceFile,LineNumberTable
-renamesourcefileattribute SourceFile

# ═══════════════════════════════════════════════════
# Capacitor Rules
# ═══════════════════════════════════════════════════

# Keep Capacitor core classes
-keep class com.getcapacitor.** { *; }
-keepclassmembers class com.getcapacitor.** { *; }
-dontwarn com.getcapacitor.**

# Keep Capacitor plugins
-keep class com.getcapacitor.plugin.** { *; }
-keepclassmembers class com.getcapacitor.plugin.** { *; }

# Keep JavaScript interface methods
-keepclassmembers class * {
    @android.webkit.JavascriptInterface <methods>;
}

# ═══════════════════════════════════════════════════
# Cordova Rules
# ═══════════════════════════════════════════════════

# Keep Cordova classes
-keep class org.apache.cordova.** { *; }
-keepclassmembers class org.apache.cordova.** { *; }
-dontwarn org.apache.cordova.**

# Keep Cordova plugins
-keep class org.apache.cordova.*.** { *; }

# ═══════════════════════════════════════════════════
# WebView Rules
# ═══════════════════════════════════════════════════

# Keep WebView JavaScript interface
-keepclassmembers class * extends android.webkit.WebView {
    public *;
}

# Keep WebView client and chrome client
-keep class android.webkit.WebViewClient { *; }
-keep class android.webkit.WebChromeClient { *; }

# Keep WebView settings
-keepclassmembers class android.webkit.WebSettings {
    public *;
}

# ═══════════════════════════════════════════════════
# AndroidX and Support Library Rules
# ═══════════════════════════════════════════════════

-keep class androidx.** { *; }
-keep interface androidx.** { *; }
-dontwarn androidx.**

# ═══════════════════════════════════════════════════
# General Android Rules
# ═══════════════════════════════════════════════════

# Keep native methods
-keepclasseswithmembernames class * {
    native <methods>;
}

# Keep custom views
-keepclasseswithmembers class * {
    public <init>(android.content.Context, android.util.AttributeSet);
}

-keepclasseswithmembers class * {
    public <init>(android.content.Context, android.util.AttributeSet, int);
}

# Keep enums
-keepclassmembers enum * {
    public static **[] values();
    public static ** valueOf(java.lang.String);
}

# Keep Parcelable implementations
-keep class * implements android.os.Parcelable {
    public static final android.os.Parcelable$Creator *;
}

# Keep Serializable classes
-keepclassmembers class * implements java.io.Serializable {
    static final long serialVersionUID;
    private static final java.io.ObjectStreamField[] serialPersistentFields;
    private void writeObject(java.io.ObjectOutputStream);
    private void readObject(java.io.ObjectInputStream);
    java.lang.Object writeReplace();
    java.lang.Object readResolve();
}

# ═══════════════════════════════════════════════════
# Optimization Rules
# ═══════════════════════════════════════════════════

# Remove logging in release builds
-assumenosideeffects class android.util.Log {
    public static *** d(...);
    public static *** v(...);
    public static *** i(...);
}

