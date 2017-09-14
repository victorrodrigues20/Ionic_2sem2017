webpackJsonp([2],{

/***/ 108:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/livro-add/livro-add.module": [
		266,
		1
	],
	"../pages/livro-details/livro-details.module": [
		267,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 149;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"D:\GitHub\Ionic_2sem2017\ProjetoApp\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Ionic Menu Starter</h3>\n\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n  </p>\n\n  <button ion-button secondary menuToggle>Toggle Menu</button>\n</ion-content>\n'/*ion-inline-end:"D:\GitHub\Ionic_2sem2017\ProjetoApp\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_livro__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListPage = ListPage_1 = (function () {
    function ListPage(navCtrl, navParams, livroProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.livroProvider = livroProvider;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        this.items2 = livroProvider.getLivros();
        console.log(this.items2);
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    return ListPage;
}());
ListPage = ListPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-list',template:/*ion-inline-start:"D:\GitHub\Ionic_2sem2017\ProjetoApp\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-left></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-right>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\GitHub\Ionic_2sem2017\ProjetoApp\src\pages\list\list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_livro__["a" /* LivroProvider */]])
], ListPage);

var ListPage_1;
//# sourceMappingURL=list.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LivroListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_livro__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__livro_add_livro_add__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__livro_details_livro_details__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LivroListPage = (function () {
    function LivroListPage(navCtrl, navParams, livroProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.livroProvider = livroProvider;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        this.visibilidade = false;
    }
    LivroListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__livro_details_livro_details__["a" /* LivroDetailsPage */], {
            item: item
        });
    };
    LivroListPage.prototype.voltarPagina = function () {
        this.navCtrl.pop();
    };
    LivroListPage.prototype.novoItem = function (event, item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__livro_add_livro_add__["a" /* LivroAddPage */], {});
    };
    LivroListPage.prototype.abrirPesquisa = function (event) {
        this.visibilidade = true;
    };
    LivroListPage.prototype.pesquisar = function (event) {
        var _this = this;
        this.itemsFilter = this.items.filter(function (i) {
            if (i.titulo.indexOf(_this.pesquisa) >= 0) {
                return true;
            }
            return false;
        });
    };
    LivroListPage.prototype.cancelarPesquisa = function () {
        this.visibilidade = false;
        this.pesquisa = "";
        this.pesquisar(null);
    };
    LivroListPage.prototype.ionViewDidLoad = function () {
        console.log("1 - ionViewDidLoad");
    };
    LivroListPage.prototype.ionViewWillEnter = function () {
        console.log("2 - ionViewWillEnter");
        this.items = this.livroProvider.getLivros();
        this.itemsFilter = this.items;
    };
    LivroListPage.prototype.ionViewDidEnter = function () {
        //this.items = this.livroProvider.getLivros();
        console.log("3 - ionViewDidEnter");
    };
    LivroListPage.prototype.ionViewWillLeave = function () {
        console.log("4 - ionViewWillLeave");
    };
    LivroListPage.prototype.ionViewDidLeave = function () {
        console.log("5 - ionViewDidLeave");
    };
    LivroListPage.prototype.ionViewWillUnload = function () {
        console.log("6 - ionViewWillUnload");
    };
    LivroListPage.prototype.ionViewCanEnter = function () {
        console.log("7 - ionViewCanEnter");
    };
    LivroListPage.prototype.ionViewCanLeave = function () {
        console.log("8 - ionViewCanLeave");
    };
    return LivroListPage;
}());
LivroListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-livro-list',template:/*ion-inline-start:"D:\GitHub\Ionic_2sem2017\ProjetoApp\src\pages\livro-list\livro-list.html"*/'<ion-header>\n  <ion-navbar color="primary" *ngIf="!visibilidade">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Listagem Livros</ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="abrirPesquisa($event)">\n        <ion-icon name="search"></ion-icon>\n      </button>\n      <button ion-button icon-only (click)="novoItem($event)">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n  <ion-navbar color="primary" *ngIf="visibilidade">\n    <ion-searchbar [(ngModel)]="pesquisa"\n                   [showCancelButton]="shouldShowCancel"\n                   (ionInput)="pesquisar($event)"\n                   (ionClear)="cancelarPesquisa()">\n    </ion-searchbar>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n    <ion-item>\n      <button ion-item *ngFor="let item of itemsFilter" (click)="itemTapped($event, item)">\n        <ion-thumbnail item-start>\n          <img src="{{item.img}}">\n        </ion-thumbnail>\n        <h2>{{item.titulo}}</h2>\n        <p>{{item.ano}}</p>\n        <button ion-button clear item-end>Ver</button>\n      </button>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\GitHub\Ionic_2sem2017\ProjetoApp\src\pages\livro-list\livro-list.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_livro__["a" /* LivroProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_livro__["a" /* LivroProvider */]) === "function" && _c || Object])
], LivroListPage);

var _a, _b, _c;
//# sourceMappingURL=livro-list.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LivroDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__livro_add_livro_add__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_livro__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the LivroDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LivroDetailsPage = (function () {
    function LivroDetailsPage(navCtrl, navParams, alertCtrl, livroProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.livroProvider = livroProvider;
        this.livro = navParams.get('item');
    }
    LivroDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LivroDetailsPage');
    };
    LivroDetailsPage.prototype.editarItem = function (event) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__livro_add_livro_add__["a" /* LivroAddPage */], {
            item: this.livro
        });
    };
    LivroDetailsPage.prototype.removerItem = function (event) {
        var _this = this;
        var confirmar = this.alertCtrl.create({
            title: 'Confirmação',
            message: 'Deseja excluir esse registro?',
            buttons: [
                {
                    text: 'Cancelar',
                    handler: function () {
                        //console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Excluir',
                    handler: function () {
                        _this.livroProvider.removerLivro(_this.livro);
                        _this.navCtrl.pop();
                    }
                }
            ]
        });
        confirmar.present();
    };
    return LivroDetailsPage;
}());
LivroDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-livro-details',template:/*ion-inline-start:"D:\GitHub\Ionic_2sem2017\ProjetoApp\src\pages\livro-details\livro-details.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{livro.titulo}}</ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="editarItem($event)">\n        <ion-icon name="build"></ion-icon>\n      </button>\n      <button ion-button icon-only (click)="removerItem($event)">\n        <ion-icon name="trash"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-card>\n\n    <img src="{{livro.img}}">\n\n    <ion-item>\n      <ion-icon name="book" item-start large></ion-icon>\n      <h2>{{livro.titulo}}</h2>\n      <p>Ano: {{livro.ano}}</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="buffer" item-left large ></ion-icon>\n      <h2></h2>\n      <p>Qtde:</p>\n    </ion-item>\n\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"D:\GitHub\Ionic_2sem2017\ProjetoApp\src\pages\livro-details\livro-details.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_livro__["a" /* LivroProvider */]])
], LivroDetailsPage);

//# sourceMappingURL=livro-details.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(216);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_livro_list_livro_list__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_livro__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_livro_add_livro_add__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_livro_details_livro_details__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_livro_list_livro_list__["a" /* LivroListPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_livro_add_livro_add__["a" /* LivroAddPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_livro_details_livro_details__["a" /* LivroDetailsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/livro-add/livro-add.module#LivroAddPageModule', name: 'LivroAddPage', segment: 'livro-add', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/livro-details/livro-details.module#LivroDetailsPageModule', name: 'LivroDetailsPage', segment: 'livro-details', priority: 'low', defaultHistory: [] }
                ]
            }),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_livro_list_livro_list__["a" /* LivroListPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_livro_add_livro_add__["a" /* LivroAddPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_livro_details_livro_details__["a" /* LivroDetailsPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_9__providers_livro__["a" /* LivroProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_livro_list_livro_list__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] },
            { title: 'Livros', component: __WEBPACK_IMPORTED_MODULE_6__pages_livro_list_livro_list__["a" /* LivroListPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\GitHub\Ionic_2sem2017\ProjetoApp\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"D:\GitHub\Ionic_2sem2017\ProjetoApp\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LivroProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LivroProvider = (function () {
    function LivroProvider() {
        this.livros = [];
        if (this.livros.length == 0)
            this.popularLivros();
    }
    LivroProvider.prototype.popularLivros = function () {
        console.log("passei PopularLivros");
        this.livros.push({ id: 1, titulo: "Livro 1", ano: 2017, img: "assets/capas/livro1.jpg" });
        this.livros.push({ id: 2, titulo: "Livro 2", ano: 2016, img: "assets/capas/livro2.jpg" });
        this.livros.push({ id: 3, titulo: "Livro 3", ano: 2015, img: "assets/capas/livro3.jpg" });
        this.livros.push({ id: 4, titulo: "Livro 4", ano: 2016, img: "assets/capas/livro4.jpg" });
        this.livros.push({ id: 5, titulo: "Livro 5", ano: 2016, img: "assets/capas/livro5.jpg" });
        this.livros.push({ id: 6, titulo: "Livro 6", ano: 2013, img: "assets/capas/livro6.jpg" });
        this.livros.push({ id: 7, titulo: "Livro 7", ano: 2010, img: "assets/capas/livro7.jpg" });
        this.livros.push({ id: 8, titulo: "Livro 8", ano: 2017, img: "assets/capas/livro8.jpg" });
        this.livros.push({ id: 9, titulo: "Livro 9", ano: 2012, img: "assets/capas/livro9.jpg" });
        this.livros.push({ id: 10, titulo: "Livro 10", ano: 2015, img: "assets/capas/livro10.jpg" });
    };
    LivroProvider.prototype.getInstancia = function () {
        return {
            id: this.getNextID(),
            titulo: "",
            ano: null,
            img: ""
        };
    };
    LivroProvider.prototype.getLivros = function () {
        return this.livros;
    };
    LivroProvider.prototype.adicionarLivro = function (livro) {
        console.log(livro);
        this.livros.push(livro);
    };
    LivroProvider.prototype.removerLivro = function (livro) {
        var position = this.livros.findIndex(function (l) {
            return l.id == livro.id;
        });
        this.livros.splice(position, 1);
    };
    LivroProvider.prototype.getNextID = function () {
        var nextId = 0;
        if (this.livros.length > 0) {
            nextId = Math.max.apply(Math, this.livros.map(function (o) { return o.id; }));
        }
        return ++nextId;
    };
    LivroProvider.prototype.alterarLivro = function (livro) {
        console.log(this.livros);
        var position = this.livros.findIndex(function (l) {
            return l.id == livro.id;
        });
        console.log(position);
        this.livros[position].titulo = livro.titulo;
        this.livros[position].ano = livro.ano;
        this.livros[position].img = livro.img;
    };
    return LivroProvider;
}());
LivroProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], LivroProvider);

//# sourceMappingURL=livro.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LivroAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_livro__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the LivroAddPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LivroAddPage = (function () {
    function LivroAddPage(navCtrl, navParams, livroProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.livroProvider = livroProvider;
        this.livro = navParams.get("item");
        if (this.livro == null) {
            this.modoEdicao = false;
            this.livro = this.livroProvider.getInstancia();
        }
        else
            this.modoEdicao = true;
    }
    LivroAddPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LivroAddPage');
    };
    LivroAddPage.prototype.salvar = function (evento) {
        console.log(this.livro);
        if (!this.modoEdicao)
            this.livroProvider.adicionarLivro(this.livro);
        else
            this.livroProvider.alterarLivro(this.livro);
        this.navCtrl.pop();
    };
    LivroAddPage.prototype.cancelar = function () {
        this.navCtrl.pop();
    };
    return LivroAddPage;
}());
LivroAddPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-livro-add',template:/*ion-inline-start:"D:\GitHub\Ionic_2sem2017\ProjetoApp\src\pages\livro-add\livro-add.html"*/'<!--\n  Generated template for the LivroAddPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Cadastro Livros</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item>\n      <ion-label floating>Título</ion-label>\n      <ion-input type="text" [(ngModel)]="livro.titulo"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Ano</ion-label>\n      <ion-input type="number" [(ngModel)]="livro.ano"></ion-input>\n    </ion-item>\n\n  </ion-list>\n\n  <ion-buttons>\n    <button ion-button color="secondary" (click)="salvar($event)">Salvar</button>\n    <button ion-button color="light" (click)="cancelar()">Cancelar</button>\n  </ion-buttons>\n\n</ion-content>\n'/*ion-inline-end:"D:\GitHub\Ionic_2sem2017\ProjetoApp\src\pages\livro-add\livro-add.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_livro__["a" /* LivroProvider */]])
], LivroAddPage);

//# sourceMappingURL=livro-add.js.map

/***/ })

},[197]);
//# sourceMappingURL=main.js.map