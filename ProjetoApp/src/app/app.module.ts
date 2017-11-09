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
import { CategoriaProvider } from '../providers/categoria';
import { HttpModule } from "@angular/http";
import { AutorProvider } from '../providers/autor';
import { LivroAutorProvider } from '../providers/livro-autor';
import {SignupPage} from "../pages/signup/signup";
import {SigninPage} from "../pages/signin/signin";
import {LogoutPage} from "../pages/logout/logout";
import { LoginProvider } from '../providers/login';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LivroListPage,
    LivroAddPage,
    LivroDetailsPage,
    SignupPage,
    SigninPage,
    LogoutPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LivroListPage,
    LivroAddPage,
    LivroDetailsPage,
    SignupPage,
    SigninPage,
    LogoutPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LivroProvider,
    Camera,
    CategoriaProvider,
    AutorProvider,
    LivroAutorProvider,
    LoginProvider
  ]
})
export class AppModule {}
