#!/usr/bin/env node

/**
 * Fix jcenter() deprecation in plugins
 * This script runs after platform add/prepare
 */

const fs = require('fs');
const path = require('path');

function fixJcenterInFile(filePath, pluginName) {
    if (!fs.existsSync(filePath)) {
        console.log(`ℹ️  ${pluginName} gradle file not found, skipping...`);
        return;
    }

    console.log(`Fixing jcenter() in ${pluginName} gradle file...`);
    let content = fs.readFileSync(filePath, 'utf8');

    if (!content.includes('jcenter()')) {
        console.log(`✅ ${pluginName}: jcenter() already fixed or not found`);
        return;
    }

    // Simply remove all jcenter() lines
    // The repositories blocks already have mavenCentral() and google() will be kept
    const lines = content.split('\n');
    const fixedLines = lines.filter(line => !line.trim().match(/^jcenter\(\s*\)$/));

    content = fixedLines.join('\n');

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ ${pluginName}: Removed jcenter()`);
}

module.exports = function(context) {
    const platformRoot = path.join(context.opts.projectRoot, 'platforms/android');

    // List of plugins to fix
    const pluginsToFix = [
        {
            name: 'photoviewer',
            path: 'com-sarriaroman-photoviewer/salestools-photoviewer.gradle'
        },
        {
            name: 'barcodescanner',
            path: 'phonegap-plugin-barcodescanner/salestools-barcodescanner.gradle'
        },
        {
            name: 'FCMPlugin',
            path: 'cordova-plugin-fcm-with-dependecy-updated/salestools-FCMPlugin.gradle'
        }
    ];

    pluginsToFix.forEach(plugin => {
        const gradlePath = path.join(platformRoot, plugin.path);
        fixJcenterInFile(gradlePath, plugin.name);
    });
};
