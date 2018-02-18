webpackJsonp([3],{

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPageModule", function() { return DetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detail__ = __webpack_require__(448);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DetailPageModule = /** @class */ (function () {
    function DetailPageModule() {
    }
    DetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__detail__["a" /* DetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__detail__["a" /* DetailPage */]),
            ],
        })
    ], DetailPageModule);
    return DetailPageModule;
}());

//# sourceMappingURL=detail.module.js.map

/***/ }),

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_database_database__ = __webpack_require__(133);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetailPage = /** @class */ (function () {
    function DetailPage(database, view, navCtrl, navParams) {
        this.database = database;
        this.view = view;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.product = {
            Category: this.navParams.get('Category'),
            Data: this.navParams.get('Data'),
            Manufacturer: this.navParams.get('Manufacturer'),
            Product: this.navParams.get('Product'),
            Spec: this.navParams.get('Spec')
        };
    }
    DetailPage.prototype.ionViewWillLoad = function () {
        // this.pdf = this.database.getPdf(this.product.Product);
    };
    DetailPage.prototype.close = function () {
        this.view.dismiss();
    };
    DetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detail',template:/*ion-inline-start:"C:\Users\JMcConnell\Desktop\Database\CAS Submittal Database\src\pages\detail\detail.html"*/'\n<ion-header>\n\n  <ion-navbar color="amber">\n    <ion-title>\n      {{product.Product}}\n    <button ion-button style="float:right;" clear color="dark" icon-only (click)="close()">\n      <ion-icon name="close-circle"></ion-icon>\n    </button>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n  <div class="title">\n    <h3> {{product.Manufacturer}} </h3>\n  </div>  \n<ion-content  padding>\n     \n   <div class="productImage">\n     <img [src]=\'pdf\'\n    </div>\n   \n    <div class="contactInfo">\n        <h3> {{product.Product}} </h3>\n        <p class="subHead">\n           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec est non est consequat suscipit sit amet vitae mauris.\n          Duis tempor lectus sit amet ultrices viverra. Fusce sem dolor, pretium vitae enim tristique, tincidunt auctor ex.\n        </p>\n      </div>\n  \n        <ion-grid>\n          <ion-row>\n            <ion-col>\n              <ion-card>\n                <ion-card-header style="background-color:darkorange;color:whitesmoke">\n                  Spec\n                </ion-card-header>\n                <ion-card-content>\n                  <br>\n                 <p style="font-size:3em;text-align:center;"> {{product.Spec}} </p>\n                </ion-card-content>\n              </ion-card>\n            </ion-col>\n            <ion-col>\n              <ion-card>\n                <ion-card-header style="background-color:darkred;color:whitesmoke">\n                  Category\n                </ion-card-header>\n                <ion-card-content>\n                  <br>\n                  <h2>{{product.Category}}</h2>\n                </ion-card-content>\n              </ion-card>\n            </ion-col>\n            <ion-col>\n              <ion-card>\n                <ion-card-header style="background-color:darkgreen;color:whitesmoke">\n                  Manufacturer\n                </ion-card-header>\n                <ion-card-content>\n                  <br>\n                  <h2>{{product.Manufacturer}}</h2>\n                </ion-card-content>\n              </ion-card>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\JMcConnell\Desktop\Database\CAS Submittal Database\src\pages\detail\detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_database_database__["a" /* DatabaseProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], DetailPage);
    return DetailPage;
}());

//# sourceMappingURL=detail.js.map

/***/ })

});
//# sourceMappingURL=3.js.map