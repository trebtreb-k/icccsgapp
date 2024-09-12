const fs = require('fs');
const exec = require('child_process').exec;

function fixCordovaFileTransferIOS(projectDir) {
  try {
    console.log(`Fixing "cordova-plugin-file-transfer" for ios`);

    const filePath = projectDir + '/plugins/cordova-plugin-file-transfer/src/ios/CDVFileTransfer.m';

    const fileContent = fs.readFileSync(filePath, 'utf8').replace(
      /NSString\* userAgent = \[self\.commandDelegate userAgent\];[\s\n]*if \(userAgent\) \{[\s\n]*\[req setValue:userAgent forHTTPHeaderField:@"User-Agent"\];[\s\n]*\}/g,
      ''
    );

    fs.writeFileSync(filePath, fileContent, 'utf8');

    const filePathIOS = projectDir + '/platforms/ios/ICCCSG APP/Plugins/cordova-plugin-file-transfer/CDVFileTransfer.m';

    const fileContentIOS = fs.readFileSync(filePathIOS, 'utf8')
      .replace(
        /NSString\* userAgent = \[self\.commandDelegate userAgent\];[\s\n]*if \(userAgent\) \{[\s\n]*\[req setValue:userAgent forHTTPHeaderField:@"User-Agent"\];[\s\n]*\}/g,
        ''
      ).replace(
        '[req setValue:userAgent forHTTPHeaderField:@"User-Agent"];',
        ''
      );

    fs.writeFileSync(filePathIOS, fileContentIOS, 'utf8');

  } catch (e) {

  }
}

function fixPodGoogleUtilitiesIOS(projectDir) {
  try {
    console.log(`Fixing "GoogleUtilities" for ios`);

    const filePath = projectDir + '/platforms/ios/Podfile';

    const fileContent = fs.readFileSync(filePath, 'utf8');

    let newFileContent = fileContent.replace(
      "pod 'Firebase/Messaging', '~> 7.4.0'\nend",
      "pod 'Firebase/Messaging', '~> 7.4.0'\n\tpod 'GoogleUtilities', '7.12.0'\nend"
    );

    if (fileContent !== newFileContent) {
      fs.writeFileSync(filePath, newFileContent, 'utf8');
      exec('rm -rf Pods', { cwd: 'platforms/ios/' }, function (error, stdout, stderr) {
        if (error) {
          console.error(error);
        }
        exec('rm Podfile.lock', { cwd: 'platforms/ios/' }, function (error, stdout, stderr) {
          if (error) {
            console.error(error);
          }
          exec('pod install', { cwd: 'platforms/ios/' }, function (error, stdout, stderr) {
            if (error) {
              console.error(error);
            }
          });
        });
      });
    }
  } catch (e) {

  }
}

function fixAndroidCompatFingerPrint(projectDir) {
  try {
    console.log('Fixing "cordova-plugin-fingerprint-aio" for android');

    const filePath = projectDir + '/platforms/android/cordova-plugin-fingerprint-aio/salestools-build.gradle';

    const fileContent = fs.readFileSync(filePath, 'utf8');

    let newFileContent = fileContent.replace(
      "dependencies {\n    implementation \"androidx.biometric:biometric",
      "dependencies {\n    implementation \"androidx.appcompat:appcompat:1.2.0\"\n    implementation \"androidx.biometric:biometric"
    );

    if (fileContent !== newFileContent) {
      fs.writeFileSync(filePath, newFileContent, 'utf8');
    }

  } catch (e) {

  }
}

function fixAndroidDefaultSDKVersion(projectDir) {
  try {
    console.log('Fixing default version of target SDK, compile SDK and build tools for android');

    const filePath = projectDir + '/platforms/android/build.gradle';

    const fileContent = fs.readFileSync(filePath, 'utf8');

    let newFileContent = fileContent.replace("defaultBuildToolsVersion=\"29.0.2\"", "defaultBuildToolsVersion=\"30.0.3\"");
    newFileContent = newFileContent.replace("defaultTargetSdkVersion=29", "defaultTargetSdkVersion=30");
    newFileContent = newFileContent.replace("defaultCompileSdkVersion=29", "defaultCompileSdkVersion=30");

    if (fileContent !== newFileContent) {
      fs.writeFileSync(filePath, newFileContent, 'utf8');
    }
  } catch (e) {

  }
}

const projectDir = path.join(__dirname, '..');
fixCordovaFileTransferIOS(projectDir);
fixPodGoogleUtilitiesIOS(projectDir);
fixAndroidCompatFingerPrint(projectDir);
fixAndroidDefaultSDKVersion(projectDir);