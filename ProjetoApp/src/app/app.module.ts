import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {LivroListPage} from "../pages/livro-list/livro-list";
import { LivroProvider } from "../providers/livro";
import { LivroAddPage } from "../pages/livro-add/livro-add";
import { LivroDetailsPage } from "../pages/livro-details/livro-details";
import {Camera} from "@ionic-native/camera";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LivroListPage,
    LivroAddPage,
    LivroDetailsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LivroListPage,
    LivroAddPage,
    LivroDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LivroProvider,
    Camera
  ]
})
export class AppModule {}
