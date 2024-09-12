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

const projectDir = path.join(__dirname, '../platforms/android');

fixAndroidPhotoViewer(projectDir);
fixAndroidBarcodeScanner(projectDir);
fixAndroidPermission(projectDir);