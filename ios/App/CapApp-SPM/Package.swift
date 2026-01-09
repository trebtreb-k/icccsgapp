// swift-tools-version: 5.9
import PackageDescription

// DO NOT MODIFY THIS FILE - managed by Capacitor CLI commands
let package = Package(
    name: "CapApp-SPM",
    platforms: [.iOS(.v15)],
    products: [
        .library(
            name: "CapApp-SPM",
            targets: ["CapApp-SPM"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", exact: "8.0.0"),
        .package(name: "CapacitorApp", path: "../../../node_modules/@capacitor/app"),
        .package(name: "CapacitorCamera", path: "../../../node_modules/@capacitor/camera"),
        .package(name: "CapacitorDevice", path: "../../../node_modules/@capacitor/device"),
        .package(name: "CapacitorFilesystem", path: "../../../node_modules/@capacitor/filesystem"),
        .package(name: "CapacitorGeolocation", path: "../../../node_modules/@capacitor/geolocation"),
        .package(name: "CapacitorKeyboard", path: "../../../node_modules/@capacitor/keyboard"),
        .package(name: "CapacitorSplashScreen", path: "../../../node_modules/@capacitor/splash-screen"),
        .package(name: "CapacitorStatusBar", path: "../../../node_modules/@capacitor/status-bar"),
        .package(name: "CordovaPluginDevice", path: "../../capacitor-cordova-ios-plugins/sources/CordovaPluginDevice"),
        .package(name: "CordovaPluginFingerprintAio", path: "../../capacitor-cordova-ios-plugins/sources/CordovaPluginFingerprintAio"),
        .package(name: "CordovaPluginCamera", path: "../../capacitor-cordova-ios-plugins/sources/CordovaPluginCamera"),
        .package(name: "CordovaPluginCrop", path: "../../capacitor-cordova-ios-plugins/sources/CordovaPluginCrop"),
        .package(name: "CordovaPluginEmailComposer", path: "../../capacitor-cordova-ios-plugins/sources/CordovaPluginEmailComposer"),
        .package(name: "CordovaPluginFile", path: "../../capacitor-cordova-ios-plugins/sources/CordovaPluginFile"),
        .package(name: "CordovaPluginGeolocation", path: "../../capacitor-cordova-ios-plugins/sources/CordovaPluginGeolocation"),
        .package(name: "CordovaPluginNativegeocoder", path: "../../capacitor-cordova-ios-plugins/sources/CordovaPluginNativegeocoder"),
        .package(name: "CordovaPluginRequestLocationAccuracy", path: "../../capacitor-cordova-ios-plugins/sources/CordovaPluginRequestLocationAccuracy")
    ],
    targets: [
        .target(
            name: "CapApp-SPM",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm"),
                .product(name: "CapacitorApp", package: "CapacitorApp"),
                .product(name: "CapacitorCamera", package: "CapacitorCamera"),
                .product(name: "CapacitorDevice", package: "CapacitorDevice"),
                .product(name: "CapacitorFilesystem", package: "CapacitorFilesystem"),
                .product(name: "CapacitorGeolocation", package: "CapacitorGeolocation"),
                .product(name: "CapacitorKeyboard", package: "CapacitorKeyboard"),
                .product(name: "CapacitorSplashScreen", package: "CapacitorSplashScreen"),
                .product(name: "CapacitorStatusBar", package: "CapacitorStatusBar"),
                .product(name: "CordovaPluginDevice", package: "CordovaPluginDevice"),
                .product(name: "CordovaPluginFingerprintAio", package: "CordovaPluginFingerprintAio"),
                .product(name: "CordovaPluginCamera", package: "CordovaPluginCamera"),
                .product(name: "CordovaPluginCrop", package: "CordovaPluginCrop"),
                .product(name: "CordovaPluginEmailComposer", package: "CordovaPluginEmailComposer"),
                .product(name: "CordovaPluginFile", package: "CordovaPluginFile"),
                .product(name: "CordovaPluginGeolocation", package: "CordovaPluginGeolocation"),
                .product(name: "CordovaPluginNativegeocoder", package: "CordovaPluginNativegeocoder"),
                .product(name: "CordovaPluginRequestLocationAccuracy", package: "CordovaPluginRequestLocationAccuracy")
            ]
        )
    ]
)
