webpackJsonp([4],{

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoverSheetPageModule", function() { return CoverSheetPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cover_sheet__ = __webpack_require__(447);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CoverSheetPageModule = /** @class */ (function () {
    function CoverSheetPageModule() {
    }
    CoverSheetPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cover_sheet__["a" /* CoverSheetPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cover_sheet__["a" /* CoverSheetPage */]),
            ],
        })
    ], CoverSheetPageModule);
    return CoverSheetPageModule;
}());

//# sourceMappingURL=cover-sheet.module.js.map

/***/ }),

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoverSheetPage; });
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


var CoverSheetPage = /** @class */ (function () {
    function CoverSheetPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cs = {};
    }
    CoverSheetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cover-sheet',template:/*ion-inline-start:"C:\Users\JMcConnell\Desktop\Database\CAS Submittal Database\src\pages\cover-sheet\cover-sheet.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Cover Sheet</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-card>\n          <ion-card-header class="random">\n            PROJECT NAME\n          </ion-card-header>\n          <ion-card-content>\n            <ion-input type="text" [(ngModel)]="cs.project_name"></ion-input>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col>\n        <ion-card>\n          <ion-card-header class="random">\n            ARCHITECT\n          </ion-card-header>\n          <ion-card-content>\n            <ion-input type="text" [(ngModel)]="cs.architect"></ion-input>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-card>\n          <ion-card-header class="random">\n            CONSTRUCTION MANAGER\n          </ion-card-header>\n          <ion-card-content>\n            <ion-input type="text" [(ngModel)]="cs.construction_manager"></ion-input>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col>\n        <ion-card>\n          <ion-card-header class="random">\n            STRUCTURAL ENGINEER\n          </ion-card-header>\n          <ion-card-content>\n            <ion-input type="text" [(ngModel)]="cs.structural_engineer"></ion-input>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-card>\n          <ion-card-header class="random">\n            SUBCONTRACTOR : Component Assembly Systems, Inc\n          </ion-card-header>\n          <ion-card-content>\n              <ion-list>\n                  <ion-item>\n                    <ion-label>PM Name</ion-label>\n                    <ion-input type="text" [(ngModel)]="cs.subcontractor_pmName"></ion-input>\n                `</ion-item>\n                <ion-item>\n                    <ion-label>Address</ion-label>\n                    <ion-input type="text" [(ngModel)]="cs.subcontractor_address"></ion-input>\n                `</ion-item>\n                <ion-item>\n                    <ion-label>Office</ion-label>\n                    <ion-input type="text" [(ngModel)]="cs.subcontractor_office"></ion-input>\n                `</ion-item>\n                <ion-item>\n                    <ion-label>Cell</ion-label>\n                    <ion-input type="text" [(ngModel)]="cs.subcontractor_cell"></ion-input>\n                `</ion-item>\n                <ion-item>\n                    <ion-label>Fax</ion-label>\n                    <ion-input type="text" [(ngModel)]="cs.subcontractor_fax"></ion-input>\n                `</ion-item>\n                </ion-list>\n              </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col>\n        <ion-card>\n          <ion-card-header class="random">\n            SUPPLIER\n          </ion-card-header>\n          <ion-card-content>\n            <ion-list>\n            <ion-item>\n              <ion-label>PM Name</ion-label>\n              <ion-input type="text" [(ngModel)]="cs.supplier_pmName"></ion-input>\n          `</ion-item>\n          <ion-item>\n              <ion-label>Address</ion-label>\n              <ion-input type="text" [(ngModel)]="cs.supplier_address"></ion-input>\n          `</ion-item>\n          <ion-item>\n              <ion-label>Phone</ion-label>\n              <ion-input type="text" [(ngModel)]="cs.supplier_phone"></ion-input>\n          `</ion-item>\n          <ion-item>\n              <ion-label>Fax</ion-label>\n              <ion-input type="text" [(ngModel)]="cs.supplier_fax"></ion-input>\n          `</ion-item>\n          </ion-list>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-card>\n          <ion-list>\n              <ion-item>\n                <ion-label>Submittal Date</ion-label>\n                <ion-input type="text" [(ngModel)]="cs.submittal_date"></ion-input>\n            `</ion-item>\n            <ion-item>\n                <ion-label>Submittal No.</ion-label>\n                <ion-input type="text" [(ngModel)]="cs.submittal_no"></ion-input>\n            `</ion-item>\n            <ion-item>\n                <ion-label>Specification Section</ion-label>\n                <ion-input type="text" [(ngModel)]="cs.specification_section"></ion-input>\n            `</ion-item>\n            <ion-item>\n                <ion-label>Submittal Description</ion-label>\n                <ion-input type="text" [(ngModel)]="cs.submittal_description"></ion-input>\n            `</ion-item>\n            <ion-item>\n                <ion-label>Manufacturer</ion-label>\n                <ion-input type="text" [(ngModel)]="cs.manufacturer"></ion-input>\n            `</ion-item>\n            <ion-item>\n                <ion-label>Section Title</ion-label>\n                <ion-input type="text" [(ngModel)]="cs.section_title"></ion-input>\n            `</ion-item>\n            </ion-list>\n        </ion-card>\n      </ion-col>\n      <ion-col>\n        <ion-card>\n          <ion-card-header class="random">\n            Architect Review\n          </ion-card-header>\n          <ion-card-content>\n            <ion-textarea [(ngModel)]="cs.architect_review" row="15" col="30"></ion-textarea>\n          </ion-card-content>\n        </ion-card>\n        <ion-card>\n            <ion-card-header class="random">\n              Remarks / Deviations from Specification\n            </ion-card-header>\n            <ion-card-content>\n              <ion-textarea [(ngModel)]="cs.remarks" row="15" col="5"></ion-textarea>\n            </ion-card-content>\n          </ion-card> \n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-card>\n          <ion-card-header class="random">\n            Subcontractor Review\n          </ion-card-header>\n          <ion-card-content>\n            <p>\n            We hereby state that we have reviews, inspected, and checked\n            the information submitted and vouch for its accuracy and compilance \n            with the contract documents and surrounding conditions\n            </p>\n            <ion-item>\n              <p>Contractor:     CAS</p>\n            </ion-item>\n            <ion-item>\n                <ion-label>Project Manager</ion-label>\n                <ion-input type="text" [(ngModel)]="cs.project_manager"></ion-input>\n              </ion-item>\n              <ion-item>\n                  <ion-label>Date</ion-label>\n                  <ion-input type="text" [(ngModel)]="cs.date"></ion-input>\n                </ion-item>\n          </ion-card-content>\n        </ion-card>\n\n      </ion-col>\n      <ion-col>\n          <ion-card>\n            <ion-card-header class="random">\n              Contractor Review\n            </ion-card-header>\n            <ion-card-content>\n              <ion-textarea [(ngModel)]="cs.contractor_review" row="15" col="40"></ion-textarea>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n        <ion-col>\n            <ion-card>\n              <ion-card-header class="random">\n                Engineer Review\n              </ion-card-header>\n              <ion-card-content>\n                <ion-textarea [(ngModel)]="cs.engineer_review" row="15" col="40"></ion-textarea>\n              </ion-card-content>\n            </ion-card>\n          </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\JMcConnell\Desktop\Database\CAS Submittal Database\src\pages\cover-sheet\cover-sheet.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], CoverSheetPage);
    return CoverSheetPage;
}());

//# sourceMappingURL=cover-sheet.js.map

/***/ })

});
//# sourceMappingURL=4.js.map