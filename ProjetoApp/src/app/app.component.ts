import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';

import { HomePage } from '../pages/home/home';
import {LoginProvider} from "../providers/login";
import {LivroListPage} from "../pages/livro-list/livro-list";
import {SigninPage} from "../pages/signin/signin";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  signinPage : any = SigninPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
              public loginProvider: LoginProvider) {

    firebase.initializeApp({
      apiKey: "AIzaSyBImvMwI_jNmIrwi44CT5S57vcXh60qrXQ",
      authDomain: "bibliotecaapp-ad55b.firebaseapp.com"
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.getMenuLogado();
        this.nav.setRoot(this.rootPage);
      }
      else {
        this.getMenuAnonimo();
        this.nav.setRoot(this.signinPage);
      }
    });

    this.initializeApp();


  }

  getMenuLogado() {
    this.pages = [
      { title: 'Home', component: HomePage },
      //{ title: 'List', component: ListPage },
      { title: 'Livros', component: LivroListPage },
      { title: 'Sair', component: null },
    ];
  }

  getMenuAnonimo() {
    this.pages = [
      { title: 'Home', component: HomePage },
      //{ title: 'List', component: ListPage },
      //{ title: 'Livros', component: LivroListPage },
      { title: 'SignIn', component: SigninPage },
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if (page.title == "Sair") {
      this.loginProvider.logout();
      return;
    }

    this.nav.setRoot(page.component);
  }
}
