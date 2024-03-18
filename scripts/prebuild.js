module.exports = function (ctx) {
  // Use console.log(ctx); to print the context to the console when running 'ionic build/serve'

  var projectDir = ctx.project.dir;

  fixCordovaFCMDuplication(projectDir);
  fixCordovaFileTransferIOS(projectDir);
  fixPodGoogleUtilitiesIOS(projectDir);
};

function fixCordovaFCMDuplication(projectDir) {
  var fs = require('fs');

  var filePath = projectDir + '/plugins/cordova-plugin-fcm-with-dependecy-updated/scripts/configuration.js';

  var fileContent = fs.readFileSync(filePath, 'utf8');

  fileContent = fileContent.replace("IOS_DIR + '/' + APP_NAME + '/Resources/Resources/GoogleService-Info.plist',", '');

  fileContent = fileContent.replace(
    "IOS_DIR + '/' + APP_NAME + '/Resources/GoogleService-Info.plist',",
    "IOS_DIR + '/' + APP_NAME + '/Resources/GoogleService-Info.plist'"
  );

  console.log('Fixed cordova-plugin-fcm-with-dependecy-updated for duplication of "GoogleService-Info.plist"');

  fileContent = fileContent.replace("ANDROID_DIR + '/google-services.json',", '');

  console.log('Fixed cordova-plugin-fcm-with-dependecy-updated for duplication of "google-services.json"');

  fs.writeFileSync(filePath, fileContent, 'utf8');
}

function fixCordovaFileTransferIOS(projectDir) {
  var fs = require('fs');

  var filePath = projectDir + '/plugins/cordova-plugin-file-transfer/src/ios/CDVFileTransfer.m';

  var fileContent = fs.readFileSync(filePath, 'utf8');

  fileContent = fileContent.replace(
    /NSString\* userAgent = \[self\.commandDelegate userAgent\];[\s\n]*if \(userAgent\) \{[\s\n]*\[req setValue:userAgent forHTTPHeaderField:@"User-Agent"\];[\s\n]*\}/g,
    ''
  );

  fs.writeFileSync(filePath, fileContent, 'utf8');

  var filePathIOS = projectDir + '/platforms/ios/ICCCSG APP/Plugins/cordova-plugin-file-transfer/CDVFileTransfer.m';

  var fileContentIOS = fs.readFileSync(filePathIOS, 'utf8');

  fileContentIOS = fileContentIOS.replace(
    /NSString\* userAgent = \[self\.commandDelegate userAgent\];[\s\n]*if \(userAgent\) \{[\s\n]*\[req setValue:userAgent forHTTPHeaderField:@"User-Agent"\];[\s\n]*\}/g,
    ''
  );
  fileContentIOS = fileContentIOS.replace('[req setValue:userAgent forHTTPHeaderField:@"User-Agent"];', '');

  fs.writeFileSync(filePathIOS, fileContentIOS, 'utf8');

  console.log('Fixed cordova-plugin-file-transfer iOS');
}

function fixPodGoogleUtilitiesIOS(projectDir) {
  var fs = require('fs');

  var filePath = projectDir + '/platforms/ios/Podfile';

  var fileContent = fs.readFileSync(filePath, 'utf8');

  fileContent = fileContent.replace("pod 'Firebase/Messaging', '~> 7.4.0'", "pod 'Firebase/Messaging'\n\tpod 'GoogleUtilities'");

  fs.writeFileSync(filePath, fileContent, 'utf8');

  console.log('Fixed GoogleUtilities Pod');
}
