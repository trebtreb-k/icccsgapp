const fs = require('fs');
const path = require('path');
const exec = require('child_process').exec;

function installCustomFCMPlugins() {
  exec(
    'ionic cordova plugin add cordova-plugin-fcm-with-dependecy-updated@https://github.com/marutifh/cordova-plugin-fcm-with-dependecy-updated.git',
    function (error, stdout, stderr) {
      exec(
        'ionic cordova plugin add cordova-plugin-fcm-with-dependecy-updated@https://github.com/marutifh/cordova-plugin-fcm-with-dependecy-updated.git',
        function (error, stdout, stderr) {
          return true;
        }
      );
      return true;
    }
  );
}

function checkFCMPluginsAndroid(projectDir) {
  const pluginPath = projectDir + '/platforms/android/cordova-plugin-fcm-with-dependecy-updated';

  fs.access(pluginPath, fs.constants.F_OK, (err) => {
    if (err) {
      console.log(`Adding "cordova-plugin-fcm-with-dependecy-updated" from "https://github.com/marutifh/cordova-plugin-fcm-with-dependecy-updated.git" for android`);
      installCustomFCMPlugins();
    } else {
      console.log(`${pluginPath} exists`);
    }
  });

}

function checkFCMPluginsIOS(projectDir) {
  const pluginPath = projectDir + '/platforms/ios/ICCCSG APP/Plugins/cordova-plugin-fcm-with-dependecy-updated';

  fs.access(pluginPath, fs.constants.F_OK, (err) => {
    if (err) {
      console.log(`Adding "cordova-plugin-fcm-with-dependecy-updated" from "https://github.com/marutifh/cordova-plugin-fcm-with-dependecy-updated.git" for ios`);
      installCustomFCMPlugins();
    } else {
      console.log(`${pluginPath} exists`);
    }
  });

}


const projectDir = path.join(__dirname, '..');
checkFCMPluginsAndroid(projectDir);
checkFCMPluginsIOS(projectDir);