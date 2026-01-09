import '@angular/compiler';

import { AppModule } from './app/app.module';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

if (environment.production) {
  enableProdMode();
}

const bootstrap = () => {
  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error('[Bootstrap] Error:', err));
};

// Function to start the app
const startApp = () => {
  if (typeof (window as any).cordova !== 'undefined') {
    document.addEventListener(
      'deviceready',
      () => {
        bootstrap();
      },
      false
    );
  } else {
  }
};

// Wait for DOM to be ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', startApp);
} else {
  startApp();
}
