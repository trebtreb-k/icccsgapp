const fs = require('fs');
const path = require('path');

function updateDeploymentTarget(filePath, newVersion) {
  try {
    // Read the file content
    let fileContent = fs.readFileSync(filePath, 'utf8');

    // Regular expression to match any IPHONEOS_DEPLOYMENT_TARGET version
    const regex = /IPHONEOS_DEPLOYMENT_TARGET = \d+\.\d+/g;

    // Replace the old deployment target version with the new version
    let updatedContent = fileContent.replace(regex, `IPHONEOS_DEPLOYMENT_TARGET = ${newVersion}`);

    // Write the updated content back to the file
    fs.writeFileSync(filePath, updatedContent, 'utf8');

    console.log(`Updated ${filePath} successfully.`);
  } catch (error) {
    console.error(`Error updating ${filePath}:`, error);
  }
}

function fixIosFirebase(projectDir) {
  const filePath = path.join(projectDir, 'cordova-plugin-fcm-with-dependecy-updated/plugin.xml');
  try {
    // Read the file content
    let fileContent = fs.readFileSync(filePath, 'utf8');

    // Replace the old deployment target version with the new version
    let updatedContent = fileContent.replace(`<config-file target="*-Info.plist" parent="FirebaseAppDelegateProxyEnabled">
			<false/>
		</config-file>`, '');

    // Write the updated content back to the file
    fs.writeFileSync(filePath, updatedContent, 'utf8');

    console.log(`Updated ${filePath} successfully.`);
  } catch (error) {
    console.error(`Error updating ${filePath}:`, error);
  }
}

function fixIosFirebase2(projectDir) {
  const filePath = path.join(projectDir, 'ICCCSG APP/ICCCSG APP-Info.plist');
  try {
    // Read the file content
    let fileContent = fs.readFileSync(filePath, 'utf8');

    // Replace the old deployment target version with the new version
    let updatedContent = fileContent.replace(`<key>FirebaseAppDelegateProxyEnabled</key>
	<false/>`, '');

    // Write the updated content back to the file
    fs.writeFileSync(filePath, updatedContent, 'utf8');

    console.log(`Updated ${filePath} successfully.`);
  } catch (error) {
    console.error(`Error updating ${filePath}:`, error);
  }
  
}

const projectDir = path.join(__dirname, '../platforms/ios');
const filesToUpdate = [
  'Pods/Pods.xcodeproj/project.pbxproj',
  'ICCCSG APP.xcodeproj/project.pbxproj',
  'CordovaLib/CordovaLib.xcodeproj/project.pbxproj'
];
const newVersion = '12.0';
filesToUpdate.forEach(file => {
  const filePath = path.join(projectDir, file);
  updateDeploymentTarget(filePath, newVersion);
});

fixIosFirebase(path.join(__dirname, '../plugins'));
fixIosFirebase2(path.join(__dirname, '../platforms/ios'));