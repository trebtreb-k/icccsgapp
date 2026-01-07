const fs = require('fs');
const path = require('path');

// Fix cordova-plugin-file-transfer compatibility with cordova-ios 8.x
module.exports = function(context) {
    const platformRoot = path.join(context.opts.projectRoot, 'platforms/ios');
    const fileTransferPath = path.join(platformRoot, 'App/Plugins/cordova-plugin-file-transfer/CDVFileTransfer.m');

    if (!fs.existsSync(fileTransferPath)) {
        console.log('CDVFileTransfer.m not found, skipping fix');
        return;
    }

    console.log('Fixing cordova-plugin-file-transfer for iOS 8.x compatibility...');

    let content = fs.readFileSync(fileTransferPath, 'utf8');

    // Replace filesystemForURL: with filesystemURLforLocalPath:
    content = content.replace(
        /\[self\.commandDelegate filesystemForURL:localFile\]/g,
        '[self.commandDelegate filesystemURLforLocalPath:[localFile path]]'
    );

    // Replace fileSystemURLforLocalPath: usage
    content = content.replace(
        /\[self\.commandDelegate fileSystemURLforLocalPath:\[result path\]\]/g,
        'result'
    );

    fs.writeFileSync(fileTransferPath, content, 'utf8');
    console.log('cordova-plugin-file-transfer fixed successfully');
};
