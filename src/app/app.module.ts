import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http'; 
import { Camera } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { Calendar } from '@ionic-native/calendar/ngx'; 
import { NavController ,NavParams } from '@ionic/angular';
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';
import { ScrollToBottomDirective } from './scroll-to-bottom.directive'; 
import { PopoverComponent } from './pages/popover/popover.component';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Clipboard } from '@ionic-native/clipboard/ngx';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown'; 
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InternationalPhoneNumberModule } from 'ngx-international-phone-number';
import { PropertyRequestComponent } from './pages/property-request/property-request.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { Firebase } from '@ionic-native/firebase/ngx';
import { FcmService } from './services/fcm-service.service';
import { QuestionnaireComponent } from './pages/questionnaire/questionnaire.component';
import {AccordionModule} from "ngx-accordion";
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { Base64 } from '@ionic-native/base64/ngx';
import { DatePipe } from '@angular/common';
import { IonicStorageModule } from '@ionic/storage';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Network } from '@ionic-native/network/ngx';
import {ErrorInterceptor} from './helpers/error.interceptor';
import { Facebook } from '@ionic-native/facebook/ngx';

const config: SocketIoConfig = { url: 'https://chatapis.colivingapp.com', options: {} }; 
 
@NgModule({
  declarations: [
      AppComponent,
      ScrollToBottomDirective, PopoverComponent,
      PropertyRequestComponent,
      QuestionnaireComponent
  ],
  entryComponents: [
       PopoverComponent,PropertyRequestComponent,QuestionnaireComponent
  ],
   imports: [
        ReactiveFormsModule,
        GooglePlaceModule,BrowserModule,ReactiveFormsModule, 
        IonicModule.forRoot(), AppRoutingModule,
        HttpClientModule,
        SocketIoModule.forRoot(config), 
        NgMultiSelectDropDownModule.forRoot(),
        BrowserAnimationsModule,
        IonicStorageModule.forRoot(),
        InternationalPhoneNumberModule, 
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule, AccordionModule ,
    ],
  providers: [
    StatusBar,
    Firebase,
    SplashScreen, 
       { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Camera,
    File,
    WebView,
    FilePath,
    Calendar,
    SocialSharing,
    Clipboard,
    FcmService,
    FileOpener,
    GooglePlus,
    Base64,
    DatePipe,AngularFireAuth,Network,Facebook
  ],
  bootstrap: [AppComponent],  
})
export class AppModule {}
