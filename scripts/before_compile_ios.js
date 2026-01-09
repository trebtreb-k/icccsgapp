const fs = require('fs');
const path = require('path');

function updateDeploymentTarget(filePath, newVersion) {
  try {
    console.log(`Updating "IPHONEOS_DEPLOYMENT_TARGET" in "${filePath}" to ${newVersion}`);

    // Read the file content
    let fileContent = fs.readFileSync(filePath, 'utf8');

    // Regular expression to match any IPHONEOS_DEPLOYMENT_TARGET version
    const regex = /IPHONEOS_DEPLOYMENT_TARGET = \d+\.\d+/g;

    // Replace the old deployment target version with the new version
    let updatedContent = fileContent.replace(regex, `IPHONEOS_DEPLOYMENT_TARGET = ${newVersion}`);

    // Write the updated content back to the file
    fs.writeFileSync(filePath, updatedContent, 'utf8');
  } catch (error) {
    // console.error(`Error updating ${filePath}:`, error);
  }
}

function fixIOSFirebaseInfo(projectDir) {
  const filePath = path.join(projectDir, 'App/App-Info.plist');
  try {
    // Read the file content
    let fileContent = fs.readFileSync(filePath, 'utf8');

    // Check if FirebaseAppDelegateProxyEnabled already exists
    if (!fileContent.includes('FirebaseAppDelegateProxyEnabled')) {
      // Add FirebaseAppDelegateProxyEnabled before the closing </dict>
      let updatedContent = fileContent.replace(
        '</dict>\n</plist>',
        '\t<key>FirebaseAppDelegateProxyEnabled</key>\n\t<string>YES</string>\n</dict>\n</plist>'
      );
      // Write the updated content back to the file
      fs.writeFileSync(filePath, updatedContent, 'utf8');
      console.log('FirebaseAppDelegateProxyEnabled added to App-Info.plist');
    }
  } catch (error) {
    console.error(`Error updating ${filePath}:`, error);
  }
}

function fixAppDelegateAvailability(projectDir) {
  const filePath = path.join(projectDir, 'App/AppDelegate.swift');
  try {
    // Read the file content
    let fileContent = fs.readFileSync(filePath, 'utf8');

    // Check if @available is already added
    if (!fileContent.includes('@available(iOS 13.0, *)')) {
      // Add @available annotation before the function
      let updatedContent = fileContent.replace(
        'extension AppDelegate {\n    open override func application(',
        'extension AppDelegate {\n    @available(iOS 13.0, *)\n    open override func application('
      );
      // Write the updated content back to the file
      fs.writeFileSync(filePath, updatedContent, 'utf8');
      console.log('@available(iOS 13.0, *) added to AppDelegate.swift');
    }
  } catch (error) {
    console.error(`Error updating ${filePath}:`, error);
  }
}

function fixInAppBrowserFoundation(projectDir) {
  const filePath = path.join(projectDir, 'App/Plugins/cordova-plugin-inappbrowser/CDVInAppBrowserOptions.h');
  try {
    // Read the file content
    let fileContent = fs.readFileSync(filePath, 'utf8');

    // Check if Foundation import is already added
    if (!fileContent.includes('#import <Foundation/Foundation.h>')) {
      // Add Foundation import after the license header
      let updatedContent = fileContent.replace(
        ' */\n\n\n@interface CDVInAppBrowserOptions',
        ' */\n\n#import <Foundation/Foundation.h>\n\n@interface CDVInAppBrowserOptions'
      );
      // Write the updated content back to the file
      fs.writeFileSync(filePath, updatedContent, 'utf8');
      console.log('Foundation import added to CDVInAppBrowserOptions.h');
    }
  } catch (error) {
    console.error(`Error updating ${filePath}:`, error);
  }
}

function fixFileTransferImport(projectDir) {
  const filePath = path.join(projectDir, 'App/Plugins/cordova-plugin-file-transfer/CDVFileTransfer.m');
  try {
    // Read the file content
    let fileContent = fs.readFileSync(filePath, 'utf8');

    let updated = false;

    // Check if CDVFile import is already added
    if (!fileContent.includes('#import "../cordova-plugin-file/CDVFile.h"')) {
      // Add CDVFile import after CDVLocalFilesystem import
      fileContent = fileContent.replace(
        '#import "CDVLocalFilesystem.h"',
        '#import "CDVLocalFilesystem.h"\n#import "../cordova-plugin-file/CDVFile.h"'
      );
      updated = true;
      console.log('CDVFile import added to CDVFileTransfer.m');
    }

    // Fix filesystemForURL cast
    if (fileContent.includes('[[self.commandDelegate getCommandInstance:@"File"] filesystemForURL:sourceURL]')) {
      fileContent = fileContent.replace(
        '        fs = [[self.commandDelegate getCommandInstance:@"File"] filesystemForURL:sourceURL];',
        '        CDVFile* filePlugin = (CDVFile*)[self.commandDelegate getCommandInstance:@"File"];\n        fs = [filePlugin filesystemForURL:sourceURL];'
      );
      updated = true;
      console.log('Fixed filesystemForURL cast in CDVFileTransfer.m');
    }

    // Fix fileSystemURLforLocalPath cast
    if (fileContent.includes('[[self.commandDelegate getCommandInstance:@"File"] fileSystemURLforLocalPath:target]')) {
      fileContent = fileContent.replace(
        '        targetURL = [[self.commandDelegate getCommandInstance:@"File"] fileSystemURLforLocalPath:target].url;',
        '        CDVFile* filePlugin = (CDVFile*)[self.commandDelegate getCommandInstance:@"File"];\n        targetURL = [filePlugin fileSystemURLforLocalPath:target].url;'
      );
      updated = true;
      console.log('Fixed fileSystemURLforLocalPath cast in CDVFileTransfer.m');
    }

    // Write the updated content back to the file if changes were made
    if (updated) {
      fs.writeFileSync(filePath, fileContent, 'utf8');
    }
  } catch (error) {
    console.error(`Error updating ${filePath}:`, error);
  }
}

function fixFCMPluginFirebaseConfig(projectDir) {
  const filePath = path.join(projectDir, 'App/Plugins/cordova-plugin-fcm-with-dependecy-updated/AppDelegate+FCMPlugin.m');
  try {
    // Read the file content
    let fileContent = fs.readFileSync(filePath, 'utf8');

    // Check if Firebase configure is already moved to the beginning
    if (!fileContent.includes('// Configure Firebase IMMEDIATELY before anything else')) {
      // Move Firebase configuration to the top of customDidFinishLaunchingWithOptions
      fileContent = fileContent.replace(
        /- \(BOOL\)application:\(UIApplication \*\)application customDidFinishLaunchingWithOptions:\(NSDictionary \*\)launchOptions \{\s+\[self application:application customDidFinishLaunchingWithOptions:launchOptions\];\s+NSLog\(@"DidFinishLaunchingWithOptions"\);/,
        `- (BOOL)application:(UIApplication *)application customDidFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    [self application:application customDidFinishLaunchingWithOptions:launchOptions];

    NSLog(@"DidFinishLaunchingWithOptions");

    // Configure Firebase IMMEDIATELY before anything else
    if([FIRApp defaultApp] == nil) {
        [FIRApp configure];
        NSLog(@"Firebase configured successfully");
    }`
      );

      fs.writeFileSync(filePath, fileContent, 'utf8');
      console.log('Firebase configuration moved to beginning of AppDelegate+FCMPlugin.m');
    }
  } catch (error) {
    console.error(`Error updating ${filePath}:`, error);
  }
}

function fixWKWebViewIonicScheme(projectDir) {
  const filePath = path.join(projectDir, 'App/Plugins/cordova-plugin-ionic-webview/CDVWKWebViewEngine.m');
  try {
    // Read the file content
    let fileContent = fs.readFileSync(filePath, 'utf8');

    let updated = false;

    // 1. Check if ionic:// scheme support is already added
    if (!fileContent.includes('allow ionic:// scheme for ionic-webview plugin')) {
      // Add ionic:// scheme support to defaultResourcePolicyForURL
      fileContent = fileContent.replace(
        /- \(BOOL\)defaultResourcePolicyForURL:\(NSURL\*\)url\s*\{\s*\/\/ all file:\/\/ urls are allowed\s*if \(\[url isFileURL\]\) \{\s*return YES;\s*\}\s*return NO;\s*\}/,
        `- (BOOL)defaultResourcePolicyForURL:(NSURL*)url
{
    // all file:// urls are allowed
    if ([url isFileURL]) {
        return YES;
    }

    // allow ionic:// scheme for ionic-webview plugin
    if ([[url scheme] isEqualToString:@"ionic"]) {
        return YES;
    }

    return NO;
}`
      );
      updated = true;
      console.log('Added ionic:// scheme support to CDVWKWebViewEngine.m');
    }

    // 2. Web Inspector is set on WKWebView instance, not configuration (see step 3 below)
    // Removed this step as it causes NSUnknownKeyException

    // 3. Enable Web Inspector on WKWebView instance
    if (!fileContent.includes('Enable Web Inspector for all iOS versions')) {
      fileContent = fileContent.replace(
        /wkWebView\.navigationDelegate = self;\s*NSLog\(@"\[WKWebView INIT\] Set navigationDelegate to self"\);\s*self\.engineWebView = wkWebView;/,
        `wkWebView.navigationDelegate = self;
    NSLog(@"[WKWebView INIT] Set navigationDelegate to self");

    // Enable Web Inspector for all iOS versions
    if (@available(iOS 16.4, *)) {
        wkWebView.inspectable = YES;
        NSLog(@"[WKWebView INIT] Web Inspector enabled on WKWebView instance");
    } else {
        // For older iOS versions, try to enable via KVC
        @try {
            [wkWebView setValue:@YES forKey:@"inspectable"];
            NSLog(@"[WKWebView INIT] Web Inspector enabled via KVC (iOS < 16.4)");
        } @catch (NSException *exception) {
            NSLog(@"[WKWebView INIT] Could not enable Web Inspector via KVC: %@", exception.reason);
        }
    }

    self.engineWebView = wkWebView;`
      );
      updated = true;
      console.log('Added Web Inspector instance enablement to CDVWKWebViewEngine.m');
    }

    // 4. Add process termination logging
    if (!fileContent.includes('WEB CONTENT PROCESS TERMINATED!')) {
      fileContent = fileContent.replace(
        /- \(void\)webViewWebContentProcessDidTerminate:\(WKWebView \*\)webView\s*\{\s*\[webView reload\];\s*\}/,
        `- (void)webViewWebContentProcessDidTerminate:(WKWebView *)webView
{
    NSLog(@"[WKWebView CRITICAL] ========================================");
    NSLog(@"[WKWebView CRITICAL] WEB CONTENT PROCESS TERMINATED!");
    NSLog(@"[WKWebView CRITICAL] This means the WKWebView crashed or was killed by iOS");
    NSLog(@"[WKWebView CRITICAL] URL at time of crash: %@", webView.URL);
    NSLog(@"[WKWebView CRITICAL] Reloading...");
    NSLog(@"[WKWebView CRITICAL] ========================================");
    [webView reload];
}`
      );
      updated = true;
      console.log('Added process termination logging to CDVWKWebViewEngine.m');
    }

    if (updated) {
      fs.writeFileSync(filePath, fileContent, 'utf8');
    }
  } catch (error) {
    console.error(`Error updating ${filePath}:`, error);
  }
}

function copyGoogleServiceInfo() {
  const sourcePath = path.join(__dirname, '../GoogleService-Info.plist');

  // Copy to multiple locations to ensure Firebase can find it
  const destPaths = [
    path.join(__dirname, '../platforms/ios/App/Resources/Resources/GoogleService-Info.plist'),
    path.join(__dirname, '../platforms/ios/App/GoogleService-Info.plist'),
    path.join(__dirname, '../platforms/ios/ICCCSG APP/Resources/GoogleService-Info.plist')
  ];

  let successCount = 0;
  destPaths.forEach(destPath => {
    try {
      // Ensure destination directory exists
      const destDir = path.dirname(destPath);
      if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir, { recursive: true });
      }

      // Copy the file
      fs.copyFileSync(sourcePath, destPath);
      successCount++;
    } catch (error) {
      console.error(`Error copying GoogleService-Info.plist to ${destPath}:`, error.message);
    }
  });

  if (successCount > 0) {
    console.log(`GoogleService-Info.plist copied to ${successCount} location(s)`);
  } else {
    console.error('Failed to copy GoogleService-Info.plist to any location');
  }
}

const projectDir = path.join(__dirname, '../platforms/ios');
const filesToUpdate = [
  'Pods/Pods.xcodeproj/project.pbxproj',
  'App.xcodeproj/project.pbxproj',
  'CordovaLib/CordovaLib.xcodeproj/project.pbxproj'
];
const newVersion = '13.0';
filesToUpdate.forEach(file => {
  const filePath = path.join(projectDir, file);
  updateDeploymentTarget(filePath, newVersion);
});

fixIOSFirebaseInfo(path.join(__dirname, '../platforms/ios'));
fixAppDelegateAvailability(path.join(__dirname, '../platforms/ios'));
fixInAppBrowserFoundation(path.join(__dirname, '../platforms/ios'));
fixFileTransferImport(path.join(__dirname, '../platforms/ios'));
fixFCMPluginFirebaseConfig(path.join(__dirname, '../platforms/ios'));

// Apply all WKWebView and IONAssetHandler fixes BEFORE fixWKWebViewIonicScheme
const wkWebViewPath = path.join(__dirname, '../platforms/ios/App/Plugins/cordova-plugin-ionic-webview');
if (fs.existsSync(path.join(wkWebViewPath, 'CDVWKWebViewEngine.m'))) {
  // Copy our pre-fixed versions with all debug logging and fixes
  const fixedWKWebView = path.join(__dirname, 'ios-fixes/CDVWKWebViewEngine.m');
  const fixedIONAssetHandler = path.join(__dirname, 'ios-fixes/IONAssetHandler.m');

  if (fs.existsSync(fixedWKWebView)) {
    fs.copyFileSync(fixedWKWebView, path.join(wkWebViewPath, 'CDVWKWebViewEngine.m'));
    console.log('✅ Copied fixed CDVWKWebViewEngine.m with all iOS 18 fixes');
  }

  if (fs.existsSync(fixedIONAssetHandler)) {
    fs.copyFileSync(fixedIONAssetHandler, path.join(wkWebViewPath, 'IONAssetHandler.m'));
    console.log('✅ Copied fixed IONAssetHandler.m with async response');
  }
}

// fixWKWebViewIonicScheme(path.join(__dirname, '../platforms/ios')); // Disabled - we use full file copy instead

copyGoogleServiceInfo();
