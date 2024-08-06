module.exports = function (ctx) {
  // Use console.log(ctx); to print the context to the console when running 'ionic build/serve'

  var projectDir = ctx.project.dir;
  fixCordovaFileTransferIOS(projectDir);
  fixPodGoogleUtilitiesIOS(projectDir);
  fixAndroidCompatFingerPrint(projectDir);
  fixAndroidDefaultSDKVersion(projectDir);

};

function fixCordovaFileTransferIOS(projectDir) {
  var fs = require('fs');
  try {

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
  } catch (e) {

  }
}

function fixPodGoogleUtilitiesIOS(projectDir) {
  var fs = require('fs');
  var cp = require('child_process');
  try {

    var filePath = projectDir + '/platforms/ios/Podfile';

    var fileContent = fs.readFileSync(filePath, 'utf8');

    newFileContent = fileContent.replace("pod 'Firebase/Messaging', '~> 7.4.0'\nend", "pod 'Firebase/Messaging', '~> 7.4.0'\n\tpod 'GoogleUtilities', '7.12.0'\nend");

    if (fileContent !== newFileContent) {
      fs.writeFileSync(filePath, newFileContent, 'utf8');
      cp.exec('rm Podfile.lock', { cwd: 'platforms/ios/' }, function (error, stdout, stderr) {
        console.error(error);
        console.log(stdout);
        console.error(stderr);
      });
      cp.exec('pod install', { cwd: 'platforms/ios/' }, function (error, stdout, stderr) {
        console.error(error);
        console.log(stdout);
        console.error(stderr);
      });
    }

    console.log('Fixed GoogleUtilities Pod');
  } catch (e) {

  }
}

function fixAndroidCompatFingerPrint(projectDir) {
  var fs = require('fs');
  try {

    var filePath = projectDir + '/platforms/android/cordova-plugin-fingerprint-aio/salestools-build.gradle';

    var fileContent = fs.readFileSync(filePath, 'utf8');

    newFileContent = fileContent.replace("dependencies {\n    implementation \"androidx.biometric:biometric", "dependencies {\n    implementation \"androidx.appcompat:appcompat:1.2.0\"\n    implementation \"androidx.biometric:biometric");

    if (fileContent !== newFileContent) {
      fs.writeFileSync(filePath, newFileContent, 'utf8');
    }

    console.log('Fixed Android Finger Print');
  } catch (e) {

  }
}

function fixAndroidDefaultSDKVersion(projectDir) {
  var fs = require('fs');
  try {

    var filePath = projectDir + '/platforms/android/build.gradle';

    var fileContent = fs.readFileSync(filePath, 'utf8');

    newFileContent = fileContent.replace("defaultBuildToolsVersion=\"29.0.2\"", "defaultBuildToolsVersion=\"30.0.3\"");
    newFileContent = newFileContent.replace("defaultTargetSdkVersion=29", "defaultTargetSdkVersion=30");
    newFileContent = newFileContent.replace("defaultCompileSdkVersion=29", "defaultCompileSdkVersion=30");

    if (fileContent !== newFileContent) {
      fs.writeFileSync(filePath, newFileContent, 'utf8');
    }

    console.log('Fixed Default Android SDK Version');
  } catch (e) {

  }
}