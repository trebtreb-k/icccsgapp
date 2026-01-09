import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'th.co.icc.salestools',
  appName: 'ICCCSG APP',
  webDir: 'www',
  cordova: {
    preferences: {
      ScrollEnabled: 'false',
      BackupWebStorage: 'none',
      SplashMaintainAspectRatio: 'true',
      FadeSplashScreenDuration: '300',
      SplashShowOnlyFirstTime: 'false',
      SplashScreen: 'screen',
      AutoHideSplashScreen: 'false',
      SplashScreenDelay: '0',
      SplashScreenBackgroundColor: '#fc979d',
      WKWebViewOnly: 'true',
      InspectableWebview: 'true',
      GOOGLE_MAPS_ANDROID_API_KEY: 'AIzaSyBM3SMkAo3C6Vq4ccP8ufrNMPkQ1O4ssp0',
      GOOGLE_MAPS_IOS_API_KEY: 'AIzaSyBM3SMkAo3C6Vq4ccP8ufrNMPkQ1O4ssp0',
      SwiftVersion: '5.0'
    }
  }
};

export default config;
