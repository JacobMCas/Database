webpackJsonp([0],{

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePageModule", function() { return UpdatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__update__ = __webpack_require__(451);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UpdatePageModule = /** @class */ (function () {
    function UpdatePageModule() {
    }
    UpdatePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__update__["a" /* UpdatePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__update__["a" /* UpdatePage */]),
            ],
        })
    ], UpdatePageModule);
    return UpdatePageModule;
}());

//# sourceMappingURL=update.module.js.map

/***/ }),

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(76);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UpdatePage = /** @class */ (function () {
    function UpdatePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.product = {};
    }
    UpdatePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UpdatePage');
    };
    UpdatePage.prototype.delete = function (id) {
    };
    UpdatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-update',template:/*ion-inline-start:"C:\Users\JMcConnell\Desktop\Database\CAS Submittal Database\src\pages\update\update.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Update Database</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h1>Add Item</h1>\n  <ion-col>\n    <ion-card>\n      <ion-card-header>\n        Category\n      </ion-card-header>\n      <ion-card-content>\n        <ion-input type="text" [(ngModel)]="product.category"></ion-input>\n      </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n          Manufacturer\n        </ion-card-header>\n        <ion-card-content>\n          <ion-input type="text" [(ngModel)]="product.manufacturer"></ion-input>\n        </ion-card-content>\n      </ion-card>\n      <ion-card>\n          <ion-card-header>\n            Product\n          </ion-card-header>\n          <ion-card-content>\n            <ion-input type="text" [(ngModel)]="product.product"></ion-input>\n          </ion-card-content>\n        </ion-card>\n        <ion-card>\n          <ion-card-header>\n            Specifications\n          </ion-card-header>\n          <ion-card-content>\n              <ion-item>\n                  <ion-badge class="spec-badge" color="amber">{{product.spec}}</ion-badge>\n              </ion-item>\n                <ion-item>\n                    <ion-range min="0" step="1" snaps="true" max="10"  [(ngModel)]="product.spec" color="amber">\n                      <ion-label range-left>0</ion-label>\n                      <ion-label range-right>10</ion-label>\n                    </ion-range>\n                  </ion-item>\n          </ion-card-content>\n        </ion-card>\n        <ion-card>\n          <ion-card-header>\n            Find PDF\n          </ion-card-header>\n          <ion-card-content>\n            <button ion-button block (click)="loadPDf()" color="light">Load PDF</button>\n          </ion-card-content>\n        </ion-card>\n  </ion-col>\n\n  <ion-col>\n    <h1>Delete Item</h1>\n    <ion-searchbar [formControl]="searchControl" autocomplete=\'on\' type=\'search\' [(ngModel)]="searchTerm" (input)="search()" [showCancelButton]=\'shouldShowCancel\' animated=\'true\' (ion-input)=\'onInput\' ></ion-searchbar>\n    <ion-item-sliding *ngFor=\'let item of products;let id = index;\'>\n        <ion-item>\n           <ion-avatar item-start>\n             <img src=\'http://via.placeholder.com/350x2150\'>\n           </ion-avatar>\n         <h1>{{item.Product}}</h1>\n             <p>Category: {{item.Category}}</p>\n        </ion-item>\n           <ion-item-options side=\'right\'>\n              <button ion-button color=\'light\' (click)=\'Delete(id)\'>\n                <ion-icon name=\'trash\'></ion-icon>\n               Delete\n               </button>\n            </ion-item-options>\n          </ion-item-sliding>\n  </ion-col>\n</ion-content>\n'/*ion-inline-end:"C:\Users\JMcConnell\Desktop\Database\CAS Submittal Database\src\pages\update\update.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], UpdatePage);
    return UpdatePage;
}());

//# sourceMappingURL=update.js.map

/***/ })

});
//# sourceMappingURL=0.js.map