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

    // Replace the old deployment target version with the new version
    let updatedContent = fileContent.replace(
      `<key>FirebaseAppDelegateProxyEnabled</key>
	<false/>`,
      ''
    );

    // Write the updated content back to the file
    fs.writeFileSync(filePath, updatedContent, 'utf8');
  } catch (error) {
    // console.error(`Error updating ${filePath}:`, error);
  }
}

function copyGoogleServiceInfo() {
  const sourcePath = path.join(__dirname, '../GoogleService-Info.plist');
  const destPath = path.join(__dirname, '../platforms/ios/App/Resources/Resources/GoogleService-Info.plist');

  try {
    // Ensure destination directory exists
    const destDir = path.dirname(destPath);
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }

    // Copy the file
    fs.copyFileSync(sourcePath, destPath);
    console.log('GoogleService-Info.plist copied successfully');
  } catch (error) {
    console.error('Error copying GoogleService-Info.plist:', error);
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
copyGoogleServiceInfo();
