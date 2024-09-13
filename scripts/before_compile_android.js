const fs = require('fs');
const path = require('path');

function fixAndroidPhotoViewer(projectDir) {
  const filePath = path.join(projectDir, 'com-sarriaroman-photoviewer/salestools-photoviewer.gradle');
  try {
    console.log(`Fixing "com-sarriaroman-photoviewer", use com.github.chrisbanes.photoview:library:1.2.4 instead`);

    // Read the file content
    let fileContent = fs.readFileSync(filePath, 'utf8');

    // Replace the old deployment target version with the new version
    let updatedContent = fileContent.replace(
      `com.commit451:PhotoView:1.2.4`, 
      'com.github.chrisbanes.photoview:library:1.2.4'
    );

    // Write the updated content back to the file
    fs.writeFileSync(filePath, updatedContent, 'utf8');
  } catch (error) {
    // console.error(`Error updating ${filePath}:`, error);
  }
  
}

function fixAndroidBarcodeScanner(projectDir) {
  const filePath = path.join(projectDir, 'phonegap-plugin-barcodescanner/salestools-barcodescanner.gradle');
  try {
    console.log(`Fixing "phonegap-plugin-barcodescanner", use implementation() instead of compile()`);

    // Read the file content
    let fileContent = fs.readFileSync(filePath, 'utf8');

    // Replace the old deployment target version with the new version
    let updatedContent = fileContent.replace(
      `compile(name:'barcodescanner-release-2.1.5', ext:'aar')`,
       `implementation(name:'barcodescanner-release-2.1.5', ext:'aar')`
      );

    // Write the updated content back to the file
    fs.writeFileSync(filePath, updatedContent, 'utf8');
  } catch (error) {
    // console.error(`Error updating ${filePath}:`, error);
  }
  
}

function fixAndroidPermission(projectDir) {
  const filePath = path.join(projectDir, 'app/src/main/AndroidManifest.xml');
  try {
    console.log(`Fixing duplicated android permission "WRITE_EXTERNAL_STORAGE"`);

    // Read the file content
    let fileContent = fs.readFileSync(filePath, 'utf8');

    let findExists = fileContent.indexOf(
      `<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />`
    ) >= 0;

    let updatedContent = fileContent;

    if (findExists) {
      // Replace the old deployment target version with the new version
      updatedContent = fileContent.replace(
        `<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" android:maxSdkVersion="32" />`, 
        ''
      ).replace(
        `<uses-permission android:maxSdkVersion="32" android:name="android.permission.WRITE_EXTERNAL_STORAGE" />`, 
        ''
      );
    }

    // Write the updated content back to the file
    fs.writeFileSync(filePath, updatedContent, 'utf8');
  } catch (error) {
    // console.error(`Error updating ${filePath}:`, error);
  }
}

function fixAndroidCDVThemes(projectDir) {
  const filePath = path.join(projectDir, 'app/src/main/res/values/themes.xml');
  try {
    console.log(`Fixing SplashScreen CDV for android`);

    // Read the file content
    let fileContent = fs.readFileSync(filePath, 'utf8');

    // Replace the old deployment target version with the new version
    updatedContent = fileContent.replace(
      `<item name="windowSplashScreenAnimatedIcon">@drawable/ic_cdv_splashscreen</item>`, 
      '<item name="windowSplashScreenAnimatedIcon">@color/cdv_splashscreen_background</item>'
    );

    // Write the updated content back to the file
    fs.writeFileSync(filePath, updatedContent, 'utf8');
  } catch (error) {
    // console.error(`Error updating ${filePath}:`, error);
  }
}

function fixAndroidPostNotificationPermission(projectDir) {

  // Path to AndroidManifest.xml
  const filePath = path.join(projectDir, 'app/src/main/AndroidManifest.xml');

  // Read the file
  fs.readFile(filePath, 'utf8', function (err, data) {
    if (err) {
      throw new Error('Unable to read AndroidManifest.xml: ' + err);
    }

    // Add permission if not present
    if (data.indexOf('android.permission.POST_NOTIFICATIONS') === -1) {
      var result = data.replace(
        /<manifest[\s\S]*?>/,
        '$&\n    <uses-permission android:name="android.permission.POST_NOTIFICATIONS" />'
      );

      // Write the modified manifest back
      fs.writeFile(filePath, result, 'utf8', function (err) {
        if (err) {
          throw new Error('Unable to write into AndroidManifest.xml: ' + err);
        }
        console.log('POST_NOTIFICATIONS permission added to AndroidManifest.xml');
      });
    }
  });
};

function fixAndroidCompatFingerPrint(projectDir) {
  var fs = require('fs');
  try {
    console.log('Fixing "cordova-plugin-fingerprint-aio" for android');

    var filePath = projectDir + '/platforms/android/cordova-plugin-fingerprint-aio/salestools-build.gradle';

    var fileContent = fs.readFileSync(filePath, 'utf8');

    newFileContent = fileContent.replace(
      "dependencies {\n    implementation \"androidx.biometric:biometric",
      "dependencies {\n    implementation \"androidx.appcompat:appcompat:1.2.0\"\n    implementation \"androidx.biometric:biometric"
    );

    if (fileContent !== newFileContent) {
      fs.writeFileSync(filePath, newFileContent, 'utf8');
    }

  } catch (e) {

  }
}

const projectDir = path.join(__dirname, '../platforms/android');

fixAndroidPhotoViewer(projectDir);
fixAndroidBarcodeScanner(projectDir);
fixAndroidPermission(projectDir);
fixAndroidCDVThemes(projectDir);
fixAndroidPostNotificationPermission(projectDir);
fixAndroidCompatFingerPrint(projectDir);