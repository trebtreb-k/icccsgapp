import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AlertCheckInoutComponent } from './pages/check-inout/alert-check-inout/alert-check-inout.component';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ApproversListComponent } from './pages/workflow/approvers-list/approvers-list.component';
// import { QRScanner } from '@ionic-native/qr-scanner/ngx';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { BrowserModule } from '@angular/platform-browser';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { ChartModule } from 'angular2-chartjs';
import { CreatePlanMenuPopoverComponent } from './pages/csg-plan/create-plan-menu-popover/create-plan-menu-popover.component';
import { Crop } from '@ionic-native/crop/ngx';
import { CsgPlanModalComponent } from './pages/csg-plan/csg-plan-modal/csg-plan-modal.component';
import { CsgPlanPopoverComponent } from './pages/csg-plan/csg-plan-popover/csg-plan-popover.component';
import { CustomerTransactionDetailComponent } from './pages/customer/customer-transaction-detail/customer-transaction-detail.component';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { FCM } from 'cordova-plugin-fcm-with-dependecy-updated-12/ionic/ngx';
// import { FCM } from 'cordova-plugin-fcm-with-dependecy-updated/ionic/ngx';
// import { FCM } from '@ionic-native/fcm/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { GuestCreatePlanMenuPopoverComponent } from './pages/guest-plan/guest-create-plan-menu-popover/guest-create-plan-menu-popover.component';
import { GuestPlanPopoverComponent } from './pages/guest-plan/guest-plan-popover/guest-plan-popover.component';
import { HttpClientModule } from '@angular/common/http';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { IonicRatingModule } from 'ionic4-rating';
import { IonicStorageModule, Storage } from '@ionic/storage-angular';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
import { LottieModule } from 'ngx-lottie';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { NgModule } from '@angular/core';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { RouteReuseStrategy } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Uid } from '@ionic-native/uid/ngx';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import player from 'lottie-web';

const playerFactory = () => player;

@NgModule({
  declarations: [
    AppComponent,
    CreatePlanMenuPopoverComponent,
    CsgPlanModalComponent,
    CsgPlanPopoverComponent,
    ApproversListComponent,
    AlertCheckInoutComponent,
    CustomerTransactionDetailComponent,
    GuestCreatePlanMenuPopoverComponent,
    GuestPlanPopoverComponent,
  ],
  entryComponents: [
    CreatePlanMenuPopoverComponent,
    CsgPlanModalComponent,
    CsgPlanPopoverComponent,
    ApproversListComponent,
    AlertCheckInoutComponent,
    CustomerTransactionDetailComponent,
    GuestCreatePlanMenuPopoverComponent,
    GuestPlanPopoverComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ChartModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot({
      name: 'ICC_CSG_STORAGE',
    }),
    LottieModule.forRoot({ player: playerFactory }),
    IonicRatingModule,
    NgxQRCodeModule,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Geolocation,
    LocationAccuracy,
    NativeGeocoder,
    PhotoViewer,
    Camera,
    Crop,
    FileTransfer,
    File,
    FileOpener,
    FCM,
    WebView,
    // QRScanner,
    // {
    //   provide: RouteReuseStrategy,
    //   useClass: IonicRouteStrategy,
    // },
    BarcodeScanner,
    EmailComposer,
    CallNumber,
    InAppBrowser,
    UniqueDeviceID,
    Uid,
    AndroidPermissions,
    FingerprintAIO,
    StatusBar,
    DocumentViewer,
    Storage
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
