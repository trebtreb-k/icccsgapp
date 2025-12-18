#!/bin/bash

echo "🚀 Building Android App Bundle (AAB) for Google Play Store"
echo "============================================================"
echo ""

# Check if keystore exists
if [ ! -f "icccsg-release.keystore" ]; then
    echo "❌ Error: icccsg-release.keystore not found!"
    echo ""
    echo "Please create a keystore first:"
    echo "keytool -genkey -v -keystore icccsg-release.keystore \\"
    echo "  -alias icccsg-app \\"
    echo "  -keyalg RSA \\"
    echo "  -keysize 2048 \\"
    echo "  -validity 10000"
    exit 1
fi

# Check if build.json has passwords filled
if grep -q '""' build.json; then
    echo "⚠️  Warning: build.json contains empty passwords!"
    echo ""
    read -p "Enter keystore password: " -s STORE_PASS
    echo ""
    read -p "Enter key password: " -s KEY_PASS
    echo ""

    # Update build.json temporarily (for this build only)
    cat > build.json.tmp << EOF
{
  "android": {
    "release": {
      "keystore": "icccsg-release.keystore",
      "storePassword": "${STORE_PASS}",
      "alias": "icccsg-app",
      "password": "${KEY_PASS}",
      "keystoreType": ""
    }
  }
}
EOF
    BUILD_CONFIG="build.json.tmp"
else
    BUILD_CONFIG="build.json"
fi

# Switch to Node v16
echo "📦 Switching to Node.js v16..."
source ~/.nvm/nvm.sh
nvm use 16

# Build AAB
echo ""
echo "🔨 Building Release AAB (Android App Bundle)..."
npx cordova build android --release --buildConfig=${BUILD_CONFIG}

# Clean up temporary file
if [ -f "build.json.tmp" ]; then
    rm build.json.tmp
fi

# Check if build succeeded
if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Build successful!"
    echo ""
    echo "📦 AAB file location:"
    echo "   platforms/android/app/build/outputs/bundle/release/app-release.aab"
    echo ""
    echo "📋 Next steps:"
    echo "   1. Go to https://play.google.com/console"
    echo "   2. Create or select your app"
    echo "   3. Go to 'Release' > 'Production'"
    echo "   4. Click 'Create new release'"
    echo "   5. Upload the AAB file"
    echo ""
else
    echo ""
    echo "❌ Build failed! Please check the error messages above."
    exit 1
fi
