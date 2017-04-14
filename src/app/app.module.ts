import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {Webservice} from '../providers/webservice';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MusicsPage} from '../pages/musics-page/musics-page';
import { BandasPage} from '../pages/bandas-page/bandas-page';
import { AlbumsPage } from '../pages/albums-page/albums-page';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MusicsPage, 
    BandasPage,
    AlbumsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MusicsPage,
    BandasPage,
    AlbumsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Webservice,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
