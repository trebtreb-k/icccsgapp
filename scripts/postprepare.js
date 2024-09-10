const fs = require('fs');
const path = require('path');


function fixAndroidPermission(projectDir) {
  const filePath = path.join(projectDir, 'cordova-plugin-camera/plugin.xml');
  try {
    // Read the file content
    let fileContent = fs.readFileSync(filePath, 'utf8');

    // Replace the old deployment target version with the new version
    let updatedContent = fileContent.replace(`<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" android:maxSdkVersion="32" />`, '<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />').replace(`<uses-permission android:maxSdkVersion="32" android:name="android.permission.WRITE_EXTERNAL_STORAGE" />`, '');

    // Write the updated content back to the file
    fs.writeFileSync(filePath, updatedContent, 'utf8');

    console.log(`Updated ${filePath} successfully.`);
  } catch (error) {
    console.error(`Error updating ${filePath}:`, error);
  }
}

fixAndroidPermission(path.join(__dirname, '../plugins'));