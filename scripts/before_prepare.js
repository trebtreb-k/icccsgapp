const fs = require('fs');
const path = require('path');


function preventFCMPlugins(projectDir) {
  const filePath = path.join(projectDir, 'package.json');
  try {
    console.log(`Preventing malfunction of installing "cordova-plugin-fcm-with-dependecy-updated"`);

    // Read the file content
    let fileContent = fs.readFileSync(filePath, 'utf8');

    // Replace the old deployment target version with the new version
    let updatedContent = fileContent
      .replace(`,
      "cordova-plugin-fcm-with-dependecy-updated": {},`, '')
      .replace(`,
      "cordova-plugin-fcm-with-dependecy-updated": {}`, '')
      .replace(`"cordova-plugin-fcm-with-dependecy-updated": {},`, '')
      .replace(`"cordova-plugin-fcm-with-dependecy-updated": {}`, '');

    // Write the updated content back to the file
    fs.writeFileSync(filePath, updatedContent, 'utf8');
  } catch (error) {
    // console.error(`Error updating ${filePath}:`, error);
  }
}

preventFCMPlugins(path.join(__dirname, '..'));