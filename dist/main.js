(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- \r\n  Main wrapper\r\n  Flex column\r\n-->\r\n\r\n<div id=\"outer\" [ngClass]=\"{ blur: aboutModal }\">\r\n  <!-- \r\n    Page header \r\n      - Nav, links, branding, etc\r\n  -->\r\n  <header id=\"main\">\r\n    <!-- Branding / Logo -->\r\n    <div id=\"branding\">\r\n      <i\r\n        class=\"far\"\r\n        id=\"sidebarToggle\"\r\n        (click)=\"expandSidebar = !expandSidebar\"\r\n        [ngClass]=\"{ 'fa-bars': !expandSidebar, 'fa-times': expandSidebar }\"\r\n      ></i>\r\n      <!-- USGS Logo -->\r\n      <a href=\"https://usgs.gov\" alt=\"USGS Home Page\" title=\"USGS Home Page\" target=\"_blank\" id=\"usgsLogo\">\r\n        <img src=\"https://www.usgs.gov/sites/all/themes/usgs_palladium/logo.png\" />\r\n      </a>\r\n      <a href=\"https://www.dec.ny.gov/\" alt=\"New York State Department of Environmental Conservation Home Page\" title=\"NY DEC Home Page\" target=\"_blank\" id=\"nydecLogo\">\r\n        <img src=\"./assets/nydec.png\" />\r\n      </a>\r\n      <!-- Title -->\r\n      <div id=\"title\">\r\n        <span class=\"abbr\">L</span>\r\n        <span class=\"expanded\">ong</span>\r\n        <span class=\"abbr\">I</span>\r\n        <span class=\"expanded\">sland</span>\r\n        <span class=\"abbr\">Q</span>\r\n        <span class=\"expanded\">uality of</span>\r\n        <span class=\"abbr\">W</span>\r\n        <span class=\"expanded\">ater</span>\r\n        <span class=\"abbr\">I</span>\r\n        <span class=\"expanded\">ntegrated</span>\r\n        <span class=\"abbr\">D</span>\r\n        <span class=\"expanded\">ata</span>\r\n        <span class=\"abbr\">S</span>\r\n        <span class=\"expanded\">ystem</span>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Links on right -->\r\n    <nav id=\"headerLinks\">\r\n      <a (click)=\"aboutModal = true\">About</a>\r\n    </nav>\r\n  </header>\r\n\r\n  <!-- \r\n    Main body wrapper \r\n    Main body wrapper \r\n    Main body wrapper \r\n  -->\r\n  <div id=\"body\">\r\n    <app-loading-screen></app-loading-screen>\r\n    <!-- \r\n      Sidebar\r\n      Sidebar\r\n     -->\r\n     <app-sidebar></app-sidebar>\r\n    \r\n    \r\n    \r\n\r\n    <!-- \r\n      Content \r\n      Content \r\n      Content \r\n    -->\r\n    <main>\r\n      <!-- Map -->\r\n        <!-- <div id=\"map\"></div> -->\r\n        <app-map></app-map>\r\n        \r\n        <app-dataview></app-dataview>\r\n        \r\n\r\n    </main>\r\n    <!-- End Main Content -->\r\n  </div>\r\n  <!-- End Main Body Wrapper-->\r\n</div>\r\n\r\n\r\n<!-- \r\n  ================================================================\r\n  Toast\r\n  Toast\r\n  Toast - 1,001 z-index base\r\n  ================================================================\r\n -->\r\n<div id=\"toast\" class=\"blue\" [ngClass]=\"{ visible: showToast }\">\r\n  <i class=\"far fa-surprise\" id=\"toastIcon\"></i>\r\n  <div id=\"toastText\">\r\n    <div id=\"toastTitle\">Oops!</div>\r\n    <div id=\"toastBody\"> Something went wrong - try again later.</div>\r\n  </div>\r\n</div>\r\n\r\n<!-- $scope.showToast = false;\r\n\r\n$scope.toast = function(class, icon, title, body){\r\n  $scope.toastClass = class;\r\n  $scope.toastIcon = icon;\r\n  $scope.toastTitle = title;\r\n  $scope.toastBody = body;\r\n  $scope.showToast = true;\r\n\r\n  $timeout( function(){\r\n    $scope.showToast = false;\r\n  }, 3500 );\r\n\r\n}\r\n\r\n\r\n$scope.toast(\"red\", \"fa-exclamation\", \"Toast Title\", \"Toast Body\"); -->\r\n\r\n\r\n<!-- <div id=\"toast\" class=\"{{toastClass}}\" [ngClass]=\"{ visible: showToast }\">\r\n  <i class=\"far {{toastIcon}}\" id=\"toastIcon\"></i>\r\n  <div id=\"toastText\">\r\n    <div id=\"toastTitle\">{{toastTitle}}!</div>\r\n    <div id=\"toastBody\"> {{toastBody}}.</div>\r\n  </div>\r\n</div> -->\r\n\r\n<!-- \r\n  ================================================================\r\n  Modals\r\n  Modals\r\n  Modals - 1,0000 z-index base\r\n  ================================================================\r\n -->\r\n<!-- About Modal -->\r\n<div class=\"modal-wrapper\" *ngIf=\"aboutModal\" (click)=\"aboutModal = false\">\r\n  <div class=\"modal\" id=\"aboutModal\" (click)=\"$event.stopPropagation()\">\r\n    <div class=\"modal-header\">\r\n      <div class=\"title\">About</div>\r\n      <div class=\"modal-close\" (click)=\"aboutModal = false\">&times;</div>\r\n    </div>\r\n\r\n    <div class=\"modal-content\">\r\n      \r\n\r\n      <tabs>\r\n        <tab [tabTitle]=\"'About LIQWIDS'\">\r\n            <br/>\r\n            <h6>What is LIQWIDS?</h6>\r\n\r\n            <p>\r\n                There are more than 60 organizations and agencies collecting water-quality data on Long Island. As a result, those interested \r\n                in analyzing data may be unaware of what data exist and how those data can be obtained without a Freedom of \r\n                Information Law request. This web tool is intended to provide a unified view of the water-quality data available, in support of \r\n                ongoing efforts such as LINAP, LICAP, and other State and local environmental and human health initiatives. This product was developed by USGS \r\n                in partnership with New York State Department of Environmental Conservation\r\n              </p>\r\n        </tab>\r\n        <tab [tabTitle]=\"'Contributing Organizations'\">\r\n            <br/>\r\n            <h6>Water Quality Portal</h6>\r\n            <p style=\"margin-bottom: 0;\">Summary of Data Submission</p>\r\n            <app-summary></app-summary>\r\n            <!-- <div id=\"dashboardTable\">\r\n                <div class=\"row header\">\r\n                    <div>Date</div>\r\n                    <div>Site</div>\r\n                    <div>State</div>\r\n                    <div>Color</div>\r\n                    <div>Distance</div>\r\n                    <div>Size</div>\r\n                    <div>Status</div>\r\n                    <div>Amount</div>\r\n                    <div>Notes</div>\r\n                </div>\r\n            \r\n                <div class=\"row\">\r\n                    <div>10/11/18</div>\r\n                    <div>12512</div>\r\n                    <div>NY</div>\r\n                    <div>Red</div>\r\n                    <div>10mi</div>\r\n                    <div>8</div>\r\n                    <div>Off</div>\r\n                    <div>9</div>\r\n                    <div></div>\r\n                </div>\r\n            </div> -->\r\n        </tab>\r\n        <tab [tabTitle]=\"'Disclaimers'\">\r\n                <br/>\r\n                <h6>USGS Data Disclaimer:</h6>\r\n    \r\n                <p>\r\n                    Unless otherwise stated, all data, metadata and related materials are considered to satisfy the quality standards relative \r\n                    to the purpose for which the data were collected. Although these data and associated metadata have been reviewed for accuracy \r\n                    and completeness and approved for release by the U.S. Geological Survey (USGS), no warranty expressed or implied is made \r\n                    regarding the display or utility of the data for other purposes, nor on all computer systems, nor shall the act of distribution \r\n                    constitute any such warranty.\r\n                </p>\r\n                <h6>USGS Software Disclaimer:</h6>\r\n                <p>\r\n                    This software has been approved for release by the U.S. Geological Survey (USGS). Although the software has been subjected to \r\n                    rigorous review, the USGS reserves the right to update the software as needed pursuant to further analysis and review. \r\n                    No warranty, expressed or implied, is made by the USGS or the U.S. Government as to the functionality of the software and \r\n                    related material nor shall the fact of release constitute any such warranty. Furthermore, the software is released on condition \r\n                    that neither the USGS nor the U.S. Government shall be held liable for any damages resulting from its authorized or unauthorized use.\r\n                </p>\r\n                <h6>USGS Product Names Disclaimer:</h6>\r\n                <p>\r\n                    Any use of trade, firm, or product names is for descriptive purposes only and does not imply endorsement by the U.S. Government.\r\n                </p>\r\n            </tab>\r\n        </tabs>\r\n      \r\n      \r\n    </div>\r\n\r\n    <div class=\"modal-actions right\">\r\n      <button (click)=\"aboutModal = false\">Close</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Open+Sans:400,600,700|Poppins:300,400,600,700\");\n.ng-select.ng-select-opened>.ng-select-container{background:#fff;border-color:#b3b3b3 #ccc #d9d9d9}\n.ng-select.ng-select-opened>.ng-select-container:hover{box-shadow:none}\n.ng-select.ng-select-opened>.ng-select-container .ng-arrow{top:-2px;border-color:transparent transparent #999;border-width:0 5px 5px}\n.ng-select.ng-select-opened>.ng-select-container .ng-arrow:hover{border-color:transparent transparent #333}\n.ng-select.ng-select-opened.ng-select-bottom>.ng-select-container{border-bottom-right-radius:0;border-bottom-left-radius:0}\n.ng-select.ng-select-opened.ng-select-top>.ng-select-container{border-top-right-radius:0;border-top-left-radius:0}\n.ng-select.ng-select-focused:not(.ng-select-opened)>.ng-select-container{border-color:#007eff;box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 0 3px rgba(0,126,255,0.1)}\n.ng-select.ng-select-disabled>.ng-select-container{background-color:#f9f9f9}\n.ng-select .ng-has-value .ng-placeholder{display:none}\n.ng-select .ng-select-container{background-color:#fff;border-radius:4px;border:1px solid #ccc;min-height:36px;align-items:center}\n.ng-select .ng-select-container:hover{box-shadow:0 1px 0 rgba(0,0,0,0.06)}\n.ng-select .ng-select-container .ng-value-container{align-items:center;padding-left:10px}\n[dir=\"rtl\"] .ng-select .ng-select-container .ng-value-container{padding-right:10px;padding-left:0}\n.ng-select .ng-select-container .ng-value-container .ng-placeholder{color:#999}\n.ng-select.ng-select-single .ng-select-container{height:36px}\n.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{top:5px;left:0;padding-left:10px;padding-right:50px}\n[dir=\"rtl\"] .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{padding-right:10px;padding-left:50px}\n.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value{background-color:#f9f9f9;border:1px solid #e6e6e6}\n.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value .ng-value-label{padding:0 5px}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container{padding-top:5px;padding-left:7px}\n[dir=\"rtl\"] .ng-select.ng-select-multiple .ng-select-container .ng-value-container{padding-right:7px;padding-left:0}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{font-size:0.9em;margin-bottom:5px;background-color:#ebf5ff;border-radius:2px;margin-right:5px}\n[dir=\"rtl\"] .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{margin-right:0;margin-left:5px}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled{background-color:#f9f9f9}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-label{padding-left:5px}\n[dir=\"rtl\"] .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-label{padding-left:0;padding-right:5px}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-label{display:inline-block;padding:1px 5px}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon{display:inline-block;padding:1px 5px}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon:hover{background-color:#d1e8ff}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.left{border-right:1px solid #b8dbff}\n[dir=\"rtl\"] .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.left{border-left:1px solid #b8dbff;border-right:none}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.right{border-left:1px solid #b8dbff}\n[dir=\"rtl\"] .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.right{border-left:0;border-right:1px solid #b8dbff}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{padding:0 0 3px 3px}\n[dir=\"rtl\"] .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{padding:0 3px 3px 0}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{top:5px;padding-bottom:5px;padding-left:3px}\n[dir=\"rtl\"] .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{padding-right:3px;padding-left:0}\n.ng-select .ng-clear-wrapper{color:#999}\n.ng-select .ng-clear-wrapper:hover .ng-clear{color:#D0021B}\n.ng-select .ng-spinner-zone{padding:5px 5px 0 0}\n[dir=\"rtl\"] .ng-select .ng-spinner-zone{padding:5px 0 0 5px}\n.ng-select .ng-arrow-wrapper{width:25px;padding-right:5px}\n[dir=\"rtl\"] .ng-select .ng-arrow-wrapper{padding-left:5px;padding-right:0}\n.ng-select .ng-arrow-wrapper:hover .ng-arrow{border-top-color:#666}\n.ng-select .ng-arrow-wrapper .ng-arrow{border-color:#999 transparent transparent;border-style:solid;border-width:5px 5px 2.5px}\n.ng-dropdown-panel{background-color:#fff;border:1px solid #ccc;box-shadow:0 1px 0 rgba(0,0,0,0.06);left:0}\n.ng-dropdown-panel.ng-select-bottom{top:100%;border-bottom-right-radius:4px;border-bottom-left-radius:4px;border-top-color:#e6e6e6;margin-top:-1px}\n.ng-dropdown-panel.ng-select-bottom .ng-dropdown-panel-items .ng-option:last-child{border-bottom-right-radius:4px;border-bottom-left-radius:4px}\n.ng-dropdown-panel.ng-select-top{bottom:100%;border-top-right-radius:4px;border-top-left-radius:4px;border-bottom-color:#e6e6e6;margin-bottom:-1px}\n.ng-dropdown-panel.ng-select-top .ng-dropdown-panel-items .ng-option:first-child{border-top-right-radius:4px;border-top-left-radius:4px}\n.ng-dropdown-panel .ng-dropdown-header{border-bottom:1px solid #ccc;padding:5px 7px}\n.ng-dropdown-panel .ng-dropdown-footer{border-top:1px solid #ccc;padding:5px 7px}\n.ng-dropdown-panel .ng-dropdown-panel-items{margin-bottom:1px}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding:8px 10px;font-weight:500;color:rgba(0,0,0,0.54);cursor:pointer}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-disabled{cursor:default}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-marked{background-color:#f5faff}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-selected,.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-selected.ng-option-marked{background-color:#ebf5ff;font-weight:600}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option{background-color:#fff;color:rgba(0,0,0,0.87);padding:8px 10px}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected,.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected.ng-option-marked{color:#333;background-color:#ebf5ff}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected .ng-option-label,.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected.ng-option-marked .ng-option-label{font-weight:600}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-marked{background-color:#f5faff;color:#333}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-disabled{color:#ccc}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-child{padding-left:22px}\n[dir=\"rtl\"] .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-child{padding-right:22px;padding-left:0}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .ng-tag-label{font-size:80%;font-weight:400;padding-right:5px}\n[dir=\"rtl\"] .ng-dropdown-panel .ng-dropdown-panel-items .ng-option .ng-tag-label{padding-left:5px;padding-right:0}\n[dir=\"rtl\"] .ng-dropdown-panel{direction:rtl;text-align:right}\n.m-t-5 {\n  margin-top: 5px !important; }\n.p-t-5 {\n  padding-top: 5px !important; }\n.m-b-5 {\n  margin-bottom: 5px !important; }\n.p-b-5 {\n  padding-bottom: 5px !important; }\n.m-l-5 {\n  margin-left: 5px !important; }\n.p-l-5 {\n  padding-left: 5px !important; }\n.m-r-5 {\n  margin-right: 5px !important; }\n.p-r-5 {\n  padding-right: 5px !important; }\n.m-t-10 {\n  margin-top: 10px !important; }\n.p-t-10 {\n  padding-top: 10px !important; }\n.m-b-10 {\n  margin-bottom: 10px !important; }\n.p-b-10 {\n  padding-bottom: 10px !important; }\n.m-l-10 {\n  margin-left: 10px !important; }\n.p-l-10 {\n  padding-left: 10px !important; }\n.m-r-10 {\n  margin-right: 10px !important; }\n.p-r-10 {\n  padding-right: 10px !important; }\n.m-t-15 {\n  margin-top: 15px !important; }\n.p-t-15 {\n  padding-top: 15px !important; }\n.m-b-15 {\n  margin-bottom: 15px !important; }\n.p-b-15 {\n  padding-bottom: 15px !important; }\n.m-l-15 {\n  margin-left: 15px !important; }\n.p-l-15 {\n  padding-left: 15px !important; }\n.m-r-15 {\n  margin-right: 15px !important; }\n.p-r-15 {\n  padding-right: 15px !important; }\n.m-t-20 {\n  margin-top: 20px !important; }\n.p-t-20 {\n  padding-top: 20px !important; }\n.m-b-20 {\n  margin-bottom: 20px !important; }\n.p-b-20 {\n  padding-bottom: 20px !important; }\n.m-l-20 {\n  margin-left: 20px !important; }\n.p-l-20 {\n  padding-left: 20px !important; }\n.m-r-20 {\n  margin-right: 20px !important; }\n.p-r-20 {\n  padding-right: 20px !important; }\n.m-t-25 {\n  margin-top: 25px !important; }\n.p-t-25 {\n  padding-top: 25px !important; }\n.m-b-25 {\n  margin-bottom: 25px !important; }\n.p-b-25 {\n  padding-bottom: 25px !important; }\n.m-l-25 {\n  margin-left: 25px !important; }\n.p-l-25 {\n  padding-left: 25px !important; }\n.m-r-25 {\n  margin-right: 25px !important; }\n.p-r-25 {\n  padding-right: 25px !important; }\n.m-t-30 {\n  margin-top: 30px !important; }\n.p-t-30 {\n  padding-top: 30px !important; }\n.m-b-30 {\n  margin-bottom: 30px !important; }\n.p-b-30 {\n  padding-bottom: 30px !important; }\n.m-l-30 {\n  margin-left: 30px !important; }\n.p-l-30 {\n  padding-left: 30px !important; }\n.m-r-30 {\n  margin-right: 30px !important; }\n.p-r-30 {\n  padding-right: 30px !important; }\n.m-t-35 {\n  margin-top: 35px !important; }\n.p-t-35 {\n  padding-top: 35px !important; }\n.m-b-35 {\n  margin-bottom: 35px !important; }\n.p-b-35 {\n  padding-bottom: 35px !important; }\n.m-l-35 {\n  margin-left: 35px !important; }\n.p-l-35 {\n  padding-left: 35px !important; }\n.m-r-35 {\n  margin-right: 35px !important; }\n.p-r-35 {\n  padding-right: 35px !important; }\n.m-t-40 {\n  margin-top: 40px !important; }\n.p-t-40 {\n  padding-top: 40px !important; }\n.m-b-40 {\n  margin-bottom: 40px !important; }\n.p-b-40 {\n  padding-bottom: 40px !important; }\n.m-l-40 {\n  margin-left: 40px !important; }\n.p-l-40 {\n  padding-left: 40px !important; }\n.m-r-40 {\n  margin-right: 40px !important; }\n.p-r-40 {\n  padding-right: 40px !important; }\n.m-t-45 {\n  margin-top: 45px !important; }\n.p-t-45 {\n  padding-top: 45px !important; }\n.m-b-45 {\n  margin-bottom: 45px !important; }\n.p-b-45 {\n  padding-bottom: 45px !important; }\n.m-l-45 {\n  margin-left: 45px !important; }\n.p-l-45 {\n  padding-left: 45px !important; }\n.m-r-45 {\n  margin-right: 45px !important; }\n.p-r-45 {\n  padding-right: 45px !important; }\n.m-t-50 {\n  margin-top: 50px !important; }\n.p-t-50 {\n  padding-top: 50px !important; }\n.m-b-50 {\n  margin-bottom: 50px !important; }\n.p-b-50 {\n  padding-bottom: 50px !important; }\n.m-l-50 {\n  margin-left: 50px !important; }\n.p-l-50 {\n  padding-left: 50px !important; }\n.m-r-50 {\n  margin-right: 50px !important; }\n.p-r-50 {\n  padding-right: 50px !important; }\n.m-t-75 {\n  margin-top: 75px !important; }\n.p-t-75 {\n  padding-top: 75px !important; }\n.m-b-75 {\n  margin-bottom: 75px !important; }\n.p-b-75 {\n  padding-bottom: 75px !important; }\n.m-l-75 {\n  margin-left: 75px !important; }\n.p-l-75 {\n  padding-left: 75px !important; }\n.m-r-75 {\n  margin-right: 75px !important; }\n.p-r-75 {\n  padding-right: 75px !important; }\n.m-t-100 {\n  margin-top: 100px !important; }\n.p-t-100 {\n  padding-top: 100px !important; }\n.m-b-100 {\n  margin-bottom: 100px !important; }\n.p-b-100 {\n  padding-bottom: 100px !important; }\n.m-l-100 {\n  margin-left: 100px !important; }\n.p-l-100 {\n  padding-left: 100px !important; }\n.m-r-100 {\n  margin-right: 100px !important; }\n.p-r-100 {\n  padding-right: 100px !important; }\n#outer {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  width: 100vw;\n  overflow: hidden;\n  transition: 0.15s; }\n#outer header#main {\n    display: flex;\n    height: 54px;\n    min-height: 54px;\n    width: 100%;\n    background-color: #101010; }\n#outer #body {\n    display: flex;\n    flex-grow: 3;\n    height: 100%; }\n#outer #body #sidebar {\n      display: block;\n      width: 280px;\n      background-color: #fff;\n      box-sizing: border-box;\n      overflow: auto;\n      transition: all 0.15s ease, width 0s 0.15s;\n      height: 100%;\n      overflow: auto;\n      position: relative;\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between; }\n@media only screen and (max-width: 1200px) {\n        #outer #body #sidebar {\n          position: fixed;\n          top: 54px;\n          padding-bottom: 69px;\n          left: -280px;\n          height: 100vh;\n          border-right: 1px solid rgba(16, 16, 16, 0.2);\n          z-index: 5000; } }\n@media only screen and (max-width: 550px) {\n        #outer #body #sidebar {\n          top: auto;\n          bottom: -60vh;\n          padding-bottom: 15px;\n          left: 0;\n          height: 60vh;\n          border-right: none;\n          border-top-left-radius: 16px;\n          border-top-right-radius: 16px; } }\n#outer #body #sidebar.expanded {\n        left: 0px;\n        transition: all 0.15s ease, width 0s; }\n@media only screen and (max-width: 550px) {\n          #outer #body #sidebar.expanded {\n            bottom: 0;\n            width: 100%;\n            border-top: 1px solid rgba(16, 16, 16, 0.2); } }\n#outer #body #sidebar .sidebar-scroll {\n        display: block;\n        overflow: auto;\n        flex-grow: 3;\n        box-sizing: border-box;\n        padding-bottom: 25px; }\n#outer #body main {\n      display: block;\n      flex-grow: 3;\n      overflow: auto; }\n#sidebarLightbox {\n  display: block;\n  position: fixed;\n  top: 54px;\n  left: 0;\n  z-index: 4999;\n  background-color: rgba(16, 16, 16, 0.4);\n  height: 0px;\n  width: 100vw;\n  opacity: 0;\n  transition: height 0s 0.2s, opacity 0.2s; }\n#sidebarLightbox.visible {\n    opacity: 1;\n    height: 100vh;\n    transition: height 0s, opacity 0.2s; }\np {\n  display: block;\n  padding: 0 0 8px 0;\n  font-size: 14px;\n  line-height: 28px;\n  font-family: \"Open Sans\", sans-serif;\n  color: rgba(16, 16, 16, 0.9);\n  font-weight: 500; }\n@media only screen and (max-width: 460px) {\n    p {\n      font-size: 13px;\n      line-height: 22px; } }\nh1, h2, h3, h4 {\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 700;\n  margin: 0 auto;\n  display: block;\n  width: 100%; }\nh5, h6 {\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 700;\n  margin: 0 auto;\n  display: block;\n  width: 100%; }\nh1 {\n  font-size: 32px; }\nh2 {\n  font-size: 26px; }\nh3 {\n  font-size: 22px; }\nh4 {\n  font-size: 18px; }\nh5 {\n  font-size: 18px; }\nh6 {\n  font-size: 16px; }\nlabel {\n  font-size: 12px;\n  display: block;\n  font-weight: 500;\n  color: rgba(16, 16, 16, 0.5);\n  margin: 2px 0 2px 0; }\n#modalLightbox {\n  display: block;\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  top: 0;\n  left: 0; }\n.blur {\n  -webkit-filter: blur(6px);\n          filter: blur(6px);\n  transition: 0s; }\n.modal-wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  top: 0;\n  left: 0;\n  box-sizing: border-box;\n  padding: 0 6%;\n  background-color: rgba(16, 16, 16, 0.6);\n  z-index: 10000; }\n@media only screen and (max-width: 460px) {\n    .modal-wrapper {\n      justify-content: flex-end;\n      padding: 0; } }\n.modal-wrapper .modal {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    min-width: 400px;\n    max-width: 680px;\n    border-radius: 16px;\n    background-color: #fff;\n    min-height: 240px;\n    max-height: 90vh;\n    margin: 0 auto; }\n@media only screen and (max-width: 460px) {\n      .modal-wrapper .modal {\n        width: 100%;\n        min-width: none;\n        max-width: none;\n        max-height: 85vh;\n        border-bottom-left-radius: 0;\n        border-bottom-right-radius: 0; } }\n.modal-wrapper .modal .modal-header {\n      display: flex;\n      justify-content: space-between;\n      boxs-sizing: border-box;\n      padding: 15px 20px;\n      font-family: \"Poppins\", sans-serif;\n      font-size: 26px;\n      font-weight: 700;\n      letter-spacing: -0.4px; }\n@media only screen and (max-width: 460px) {\n        .modal-wrapper .modal .modal-header {\n          padding: 15px 20px 5px 20px; } }\n.modal-wrapper .modal .modal-header .modal-close {\n        font-weight: 500;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        font-size: 42px;\n        line-height: 0;\n        transition: 0.2s;\n        color: rgba(16, 16, 16, 0.3); }\n.modal-wrapper .modal .modal-header .modal-close:hover {\n          cursor: pointer;\n          transition: 0.2s;\n          color: #F23D47; }\n.modal-wrapper .modal .modal-header .modal-close:active {\n          opacity: 0.5; }\n.modal-wrapper .modal .modal-content {\n      box-sizing: border-box;\n      padding: 0 0;\n      margin-bottom: 10px;\n      flex-grow: 3;\n      max-height: 45vh;\n      overflow: auto; }\n.modal-wrapper .modal .modal-content.nopadding {\n        padding: 0; }\n.modal-wrapper .modal .modal-content p:last-child {\n        padding-bottom: 0; }\n@media only screen and (max-width: 460px) {\n        .modal-wrapper .modal .modal-content {\n          max-height: 50vh; } }\n.modal-wrapper .modal .modal-actions {\n      display: flex;\n      justify-content: space-between;\n      box-sizing: border-box;\n      padding: 15px 17px; }\n@media only screen and (max-width: 460px) {\n        .modal-wrapper .modal .modal-actions {\n          padding: 0; } }\n.modal-wrapper .modal .modal-actions.left {\n        justify-content: flex-start; }\n.modal-wrapper .modal .modal-actions.right {\n        justify-content: flex-end; }\n.modal-wrapper .modal .modal-actions button {\n        margin: 0 3px; }\n@media only screen and (max-width: 460px) {\n          .modal-wrapper .modal .modal-actions button {\n            margin: 0 0 0 0;\n            flex-grow: 3;\n            border-radius: 0;\n            padding: 12px 10px; } }\n.modal-wrapper .modal.big {\n      max-width: 880px; }\n.modal-wrapper .modal.tiny {\n      max-width: 380px;\n      min-width: 340px;\n      min-height: 200px; }\n@media only screen and (max-width: 460px) {\n        .modal-wrapper .modal.tiny {\n          max-width: none; }\n          .modal-wrapper .modal.tiny .modal-content {\n            margin-bottom: 20px; } }\n#toast {\n  z-index: 1,001;\n  display: flex;\n  justify-content: center;\n  position: fixed;\n  width: 300px;\n  left: 50%;\n  bottom: -200px;\n  margin-left: -150px;\n  box-sizing: border-box;\n  padding: 12px 8px 12px 12px;\n  border-radius: 8px;\n  transition: bottom .3s ease-in-out,opacity 0s 0.3s ease-in-out;\n  opacity: 0;\n  box-shadow: 0 5px 25px -5px rgba(30, 16, 84, 0.3);\n  background-color: #101010; }\n#toast #toastIcon {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    font-size: 32px;\n    margin-right: 12px;\n    width: 55px;\n    text-align: center;\n    color: white; }\n#toast #toastText {\n    flex-grow: 3;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    color: white; }\n#toast #toastText #toastTitle {\n      font-size: 14px;\n      font-weight: 600;\n      line-height: 14px;\n      padding-bottom: 4px;\n      letter-spacing: 0.25px; }\n#toast #toastText #toastBody {\n      font-size: 12.5px;\n      font-weight: 500;\n      line-height: 14px;\n      letter-spacing: 0.25px; }\n#toast.red {\n    background-color: #F23D47; }\n#toast.blue {\n    background-color: #3E3BFB; }\n#toast.black {\n    background-color: #101010; }\n#toast.white {\n    background-color: #fff; }\n#toast.white #toastIcon,\n    #toast.white #toastText {\n      color: #101010; }\n#toast.visible {\n    bottom: 25px;\n    opacity: 1;\n    transition: bottom .3s ease-in-out,opacity .3s ease-in-out; }\n@media only screen and (max-width: 460px) {\n      #toast.visible {\n        bottom: 0px; } }\n@media only screen and (max-width: 460px) {\n    #toast {\n      width: 100%;\n      margin-left: 0;\n      left: 0;\n      bottom: -200px;\n      padding: 18px 14px 18px 18px;\n      border-bottom-left-radius: 0;\n      border-bottom-right-radius: 0;\n      box-shadow: 0 5px 25px 5px rgba(30, 16, 84, 0.2); } }\n#aboutModal .modal-content {\n  width: 620px;\n  overflow: hidden;\n  display: flex; }\n#aboutModal .modal-content tabs {\n    display: flex;\n    flex-direction: column; }\n#aboutModal .modal-content tab {\n    flex-grow: 3;\n    overflow: auto; }\nbutton {\n  border: none;\n  box-sizing: border-box;\n  padding: 6px 16px;\n  font-family: \"Poppins\", sans-serif;\n  background-color: #3E3BFB;\n  color: #fff;\n  letter-spacing: 0.15px;\n  font-weight: 600;\n  font-size: 14px;\n  border-radius: 4px; }\nbutton:hover {\n    cursor: pointer;\n    text-decoration: underline;\n    background-color: #2522fa; }\nbutton:focus {\n    text-decoration: underline; }\nbutton:active {\n    background-color: #3E3BFB; }\nbutton.red {\n    background-color: #F23D47; }\nbutton.red:hover {\n      background-color: #f02530; }\nbutton.red:active {\n      background-color: #F23D47; }\n#sidebar ng-select {\n  margin-bottom: 14px; }\n#sidebar ng-select > div {\n    border: none !important; }\n#sidebar ng-select > div > div.single > div.toggle {\n      color: white !important;\n      background: none; }\n#sidebar ng-select > div > div.single > div.toggle:hover {\n        background-color: #4389a9; }\n#sidebar ng-select > div > div.single > div.placeholder {\n      color: white;\n      font-size: 35px;\n      font-family: MontserratRegular; }\n#sidebar ng-select > div > div.single > div.clear:hover {\n      background-color: #4389a9; }\n#sidebar ng-select .ng-select-container {\n    border-radius: 0;\n    border-bottom: 1px solid rgba(16, 16, 16, 0.2) !important;\n    box-shadow: none !important;\n    background-color: transparent;\n    transition: 0.15s; }\n#sidebar ng-select .ng-select-container:hover {\n      border-bottom: 1px solid rgba(16, 16, 16, 0.75) !important;\n      transition: 0.15s; }\n#sidebar ng-select .ng-value-container {\n    padding-left: 0;\n    padding-top: 0;\n    min-height: 0; }\n#sidebar ng-select .ng-value-container .ng-placeholder {\n      font-size: 13px;\n      font-weight: 500;\n      letter-spacing: -0.1px;\n      top: 11px;\n      padding-left: 0px;\n      padding-bottom: 0px;\n      color: rgba(16, 16, 16, 0.6); }\n#sidebar ng-select .ng-value-container .ng-input {\n      padding: 0 0 4px 0; }\n#sidebar ng-select .ng-value-container .ng-value {\n      margin: 2px 4px;\n      background-color: rgba(62, 59, 251, 0.15);\n      font-size: 12.5px;\n      font-family: \"Open Sans\", sans-serif;\n      font-weight: 600;\n      color: rgba(16, 16, 16, 0.9);\n      display: flex; }\n#sidebar ng-select .ng-value-container .ng-value .ng-value-icon {\n        color: #101010;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        transition: 0.15s;\n        border-right: 1px solid rgba(62, 59, 251, 0.5); }\n#sidebar ng-select .ng-value-container .ng-value .ng-value-icon:hover {\n          color: #F23D47;\n          background-color: rgba(62, 59, 251, 0.15);\n          transition: 0.15s; }\n#sidebar ng-select .ng-value-container .ng-value .ng-value-label {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        padding: 0 3px 0.5px 3px;\n        letter-spacing: -0.2px; }\n#sidebar ng-select .ng-arrow-wrapper {\n    padding: 0; }\n#sidebar select-dropdown {\n  display: none; }\nheader#main #branding {\n  display: flex;\n  height: 100%;\n  box-sizing: border-box;\n  padding: 0 0 0 15px; }\n@media only screen and (max-width: 1200px) {\n    header#main #branding {\n      padding: 0 0 0 40px; } }\nheader#main #branding #nydecLogo,\n  header#main #branding #usgsLogo {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    margin-right: 8px; }\nheader#main #branding #nydecLogo img,\n    header#main #branding #usgsLogo img {\n      display: block;\n      height: 38px;\n      width: auto; }\nheader#main #branding #nydecLogo {\n    -webkit-filter: invert(100%);\n            filter: invert(100%);\n    margin-right: 10px; }\nheader#main #branding #nydecLogo img {\n      height: 50px; }\nheader#main #headerLinks {\n  display: flex;\n  flex-grow: 3;\n  justify-content: flex-end;\n  box-sizing: border-box;\n  padding: 0 10px 0 0; }\nheader#main #headerLinks a {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    box-sizing: border-box;\n    padding: 0 10px;\n    margin: 12px 0;\n    color: #101010;\n    font-family: \"Open Sans\", sans-serif;\n    font-weight: 600;\n    font-size: 13px;\n    box-sizing: border-box;\n    padding-bottom: 2px;\n    transition: 0.15s;\n    background-color: #fff;\n    border-radius: 4px;\n    margin-left: 10px; }\nheader#main #headerLinks a:hover {\n      text-decoration: underline;\n      cursor: pointer; }\nheader#main #headerLinks a:focus {\n      text-decoration: underline; }\nheader#main #headerLinks a:active {\n      text-decoration: none;\n      opacity: 0.75;\n      transition: 0.15s; }\nheader#main #branding #title {\n  color: white;\n  display: flex;\n  flex-wrap: wrap; }\nheader#main #branding #title .abbr,\n  header#main #branding #title .expanded {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    font-family: \"Poppins\", sans-serif;\n    font-weight: 600; }\nheader#main #branding #title .abbr {\n    font-size: 22px;\n    letter-spacing: 0.3px; }\nheader#main #branding #title .expanded {\n    display: none;\n    font-weight: 300;\n    padding-right: 5px;\n    font-size: 14px; }\nheader#main #branding #title:hover {\n    cursor: default; }\nheader#main #branding #title:hover .expanded {\n      display: flex; }\n#mapWrapper {\n  display: block;\n  width: 100%;\n  position: relative; }\n#mapWrapper #map {\n    display: block;\n    width: 100%;\n    height: 400px;\n    background-color: rgba(16, 16, 16, 0.2);\n    border-bottom-left-radius: 16px;\n    transition: 0.175s ease; }\n#mapWrapper #collapseMap {\n    display: block;\n    text-align: right;\n    padding: 10px;\n    font-size: 14px;\n    font-weight: 600; }\n#mapWrapper #toggleMap {\n    transition: 0.15s;\n    background-color: transparent;\n    text-align: right;\n    box-sizing: border-box;\n    padding: 8px; }\n#mapWrapper #toggleMap div {\n      display: flex;\n      justify-content: center;\n      opacity: 0.75;\n      transition: 0.15s; }\n#mapWrapper #toggleMap div i, #mapWrapper #toggleMap div b {\n        display: flex;\n        flex-direction: column;\n        justify-content: center; }\n#mapWrapper #toggleMap div i {\n        margin-right: 5px;\n        font-size: 16px; }\n#mapWrapper #toggleMap div b {\n        font-size: 13px;\n        font-weight: 600;\n        font-family: \"Open Sans\", sans-serif; }\n#mapWrapper #toggleMap:hover {\n      transition: 0.15s;\n      cursor: pointer; }\n#mapWrapper #toggleMap:hover div {\n        opacity: 1;\n        transition: 0.15s; }\n#mapWrapper.collapsed #map {\n    height: 110px;\n    transition: 0.175s ease; }\n#mapWrapper.collapsed #map .leaflet-control-container,\n    #mapWrapper.collapsed #map .leaflet-control {\n      display: none; }\n#mapWrapper.collapsed #toggleMap {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    flex-direction: column;\n    justify-content: center;\n    text-align: center;\n    color: white;\n    background-color: rgba(16, 16, 16, 0.65);\n    z-index: 401;\n    display: flex;\n    transition: 0.15s; }\n#mapWrapper.collapsed #toggleMap:hover {\n      background-color: rgba(16, 16, 16, 0.475); }\n.info {\n  padding: 6px 8px;\n  font: 14px/16px Arial, Helvetica, sans-serif;\n  background: white;\n  background: rgba(255, 255, 255, 0.8);\n  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);\n  border-radius: 5px; }\n.legend {\n  text-align: left;\n  line-height: 18px;\n  color: #555; }\n.legend .site {\n    border-radius: 50%;\n    opacity: .5;\n    width: 8px;\n    height: 8px;\n    margin-top: 5px; }\n.legend .facility {\n    background: #555e7b; }\n.legend .atmosphere {\n    background: #b7d968; }\n.legend .lake {\n    background: #b576ad; }\n.legend .stream {\n    background: #4376d3; }\n.legend .well {\n    background: #e04644; }\n.legend .land {\n    background: #1f777f; }\n.legend .estuary {\n    background: #d608a9; }\n.legend .wetland {\n    background: #3cb44b; }\n.legend .ocean {\n    background: #c64c41; }\n.legend i {\n  width: 18px;\n  height: 18px;\n  float: left;\n  margin-right: 8px; }\n/*TEMPORARY STYLING UNTIL WE GET THE LIQWIDS DASHBOARD INSERTED HERE*/\n#dashboardTable {\n  display: flex;\n  flex-direction: column;\n  border: 1px solid rgba(16, 16, 16, 0.2);\n  box-sizing: border-box;\n  padding: 15px;\n  border-radius: 10px;\n  margin-bottom: 45px; }\n#dashboardTable .row {\n    display: flex;\n    width: 100%; }\n#dashboardTable .row:nth-child(even) {\n      background-color: rgba(10, 10, 50, 0.08); }\n#dashboardTable .row div {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      text-align: center;\n      font-size: 12px;\n      line-height: 13px;\n      color: #101010;\n      height: 40px;\n      width: 10%;\n      flex-grow: 3;\n      box-sizing: border-box;\n      padding: 0 10px;\n      text-align: left; }\n#dashboardTable .row div:nth-child(1) {\n        font-weight: bolder; }\n#dashboardTable .row.header div {\n      font-weight: bolder; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYzpcXE5ZQmFja3VwXFxHaXRIdWJcXExJUVdJRFMvc3JjXFxhcHBcXHZhcmlhYmxlcy5zY3NzIiwibm9kZV9tb2R1bGVzL0BuZy1zZWxlY3Qvbmctc2VsZWN0L3RoZW1lcy9kZWZhdWx0LnRoZW1lLmNzcyIsInNyYy9hcHAvYzpcXE5ZQmFja3VwXFxHaXRIdWJcXExJUVdJRFMvc3JjXFxhcHBcXHN0eWxlc1xcaGVscGVycy5zY3NzIiwic3JjL2FwcC9jOlxcTllCYWNrdXBcXEdpdEh1YlxcTElRV0lEUy9zcmNcXGFwcFxcc3R5bGVzXFxzdHJ1Y3R1cmUuc2NzcyIsInNyYy9hcHAvYzpcXE5ZQmFja3VwXFxHaXRIdWJcXExJUVdJRFMvc3JjXFxhcHBcXHN0eWxlc1xcdGV4dC5zY3NzIiwic3JjL2FwcC9jOlxcTllCYWNrdXBcXEdpdEh1YlxcTElRV0lEUy9zcmNcXGFwcFxcc3R5bGVzXFxtb2RhbHMuc2NzcyIsInNyYy9hcHAvYzpcXE5ZQmFja3VwXFxHaXRIdWJcXExJUVdJRFMvc3JjXFxhcHBcXHN0eWxlc1xcaW5wdXRzLnNjc3MiLCJzcmMvYXBwL2M6XFxOWUJhY2t1cFxcR2l0SHViXFxMSVFXSURTL3NyY1xcYXBwXFxzdHlsZXNcXGhlYWRlci5zY3NzIiwic3JjL2FwcC9jOlxcTllCYWNrdXBcXEdpdEh1YlxcTElRV0lEUy9zcmNcXGFwcFxcc3R5bGVzXFxjdXN0b21cXGdlbmVyYWwuc2NzcyIsInNyYy9hcHAvYzpcXE5ZQmFja3VwXFxHaXRIdWJcXExJUVdJRFMvc3JjXFxhcHBcXHN0eWxlc1xcY3VzdG9tXFxtYXAuc2NzcyIsInNyYy9hcHAvYzpcXE5ZQmFja3VwXFxHaXRIdWJcXExJUVdJRFMvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxvR0FBWTtBQ0RaLGlEQUFpRCxlQUFlLENBQUMsaUNBQWlDO0FBQUMsdURBQXVELGVBQWU7QUFBQywyREFBMkQsUUFBUSxDQUFDLHlD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Q0UsNEJBQWtELEVBQUE7QUFMcEQ7RUFDRSw4QkFBZ0QsRUFBQTtBQUdsRDtFQUNFLCtCQUFrRCxFQUFBO0FBTHBEO0VBQ0UsNEJBQWdELEVBQUE7QUFHbEQ7RUFDRSw2QkFBa0QsRUFBQTtBQUxwRDtFQUNFLDZCQUFnRCxFQUFBO0FBR2xEO0VBQ0UsOEJBQWtELEVBQUE7QUFMcEQ7RUFDRSwyQkFBZ0QsRUFBQTtBQUdsRDtFQUNFLDRCQUFrRCxFQUFBO0FBTHBEO0VBQ0UsOEJBQWdELEVBQUE7QUFHbEQ7RUFDRSwrQkFBa0QsRUFBQTtBQUxwRDtFQUNFLDRCQUFnRCxFQUFBO0FBR2xEO0VBQ0UsNkJBQWtELEVBQUE7QUFMcEQ7RUFDRSw2QkFBZ0QsRUFBQTtBQUdsRDtFQUNFLDhCQUFrRCxFQUFBO0FBTHBEO0VBQ0UsMkJBQWdELEVBQUE7QUFHbEQ7RUFDRSw0QkFBa0QsRUFBQTtBQUxwRDtFQUNFLDhCQUFnRCxFQUFBO0FBR2xEO0VBQ0UsK0JBQWtELEVBQUE7QUFMcEQ7RUFDRSw0QkFBZ0QsRUFBQTtBQUdsRDtFQUNFLDZCQUFrRCxFQUFBO0FBTHBEO0VBQ0UsNkJBQWdELEVBQUE7QUFHbEQ7RUFDRSw4QkFBa0QsRUFBQTtBQUxwRDtFQUNFLDJCQUFnRCxFQUFBO0FBR2xEO0VBQ0UsNEJBQWtELEVBQUE7QUFMcEQ7RUFDRSw4QkFBZ0QsRUFBQTtBQUdsRDtFQUNFLCtCQUFrRCxFQUFBO0FBTHBEO0VBQ0UsNEJBQWdELEVBQUE7QUFHbEQ7RUFDRSw2QkFBa0QsRUFBQTtBQUxwRDtFQUNFLDZCQUFnRCxFQUFBO0FBR2xEO0VBQ0UsOEJBQWtELEVBQUE7QUFMcEQ7RUFDRSwyQkFBZ0QsRUFBQTtBQUdsRDtFQUNFLDRCQUFrRCxFQUFBO0FBTHBEO0VBQ0UsOEJBQWdELEVBQUE7QUFHbEQ7RUFDRSwrQkFBa0QsRUFBQTtBQUxwRDtFQUNFLDRCQUFnRCxFQUFBO0FBR2xEO0VBQ0UsNkJBQWtELEVBQUE7QUFMcEQ7RUFDRSw2QkFBZ0QsRUFBQTtBQUdsRDtFQUNFLDhCQUFrRCxFQUFBO0FBTHBEO0VBQ0Us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QUFrQjtJQUNsQixXQUFXO0lBQ1gsVUFBVTtJQUNWLFdBQVc7SUFDWCxlQUFlLEVBQUE7QUFUdkI7SUFZUSxtQkFBZ0MsRUFBQTtBQVp4QztJQWVRLG1CQUFrQyxFQUFBO0FBZjFDO0lBa0JRLG1CQUFrQyxFQUFBO0FBbEIxQztJQXFCUSxtQkFBaUMsRUFBQTtBQXJCekM7SUF3QlEsbUJBQWdDLEVBQUE7QUF4QnhDO0lBMkJRLG1CQUFpQyxFQUFBO0FBM0J6QztJQThCUSxtQkFBZ0MsRUFBQTtBQTlCeEM7SUFpQ1EsbUJBQWdDLEVBQUE7QUFqQ3hDO0lBb0NRLG1CQUFnQyxFQUFBO0FBR3hDO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gsaUJBQWlCLEVBQUE7QUFFckIscUVBQUE7QUFDQTtFQUNJLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUNBQXVDO0VBQ3ZDLHNCQUFzQjtFQUN0QixhQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLG1CQUFtQixFQUFBO0FBUHZCO0lBVVEsYUFBYTtJQUNiLFdBQVcsRUFBQTtBQVhuQjtNQWNZLHdDQUFxQyxFQUFBO0FBZGpEO01Ba0JZLGFBQWE7TUFDYixzQkFBc0I7TUFDdEIsdUJBQXVCO01BQ3ZCLGtCQUFrQjtNQUNsQixlQUFlO01BQ2YsaUJBQWlCO01BQ2pCLGNWbkdHO01Vb0dILFlBQVk7TUFDWixVQUFVO01BQ1YsWUFBWTtNQUNaLHNCQUFzQjtNQUN0QixlQUFlO01BQ2YsZ0JBQWdCLEVBQUE7QUE5QjVCO1FBaUNnQixtQkFBbUIsRUFBQTtBQWpDbkM7TUF3Q2dCLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRm9udHNcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnM6NDAwLDYwMCw3MDB8UG9wcGluczozMDAsNDAwLDYwMCw3MDAnKTtcclxuXHJcblxyXG4vLyBWYXJpYWJsZXNcclxuJGJsYWNrOiAjMTAxMDEwO1xyXG4kd2hpdGU6ICNmZmY7XHJcbiRiZzogI0Y5RkFGRTtcclxuJHJlZDogI0YyM0Q0NztcclxuJGJsdWU6ICMzRTNCRkI7XHJcbiRwcmltYXJ5OiAkYmx1ZTtcclxuJGdyZXk6ICNGOEY3Rjg7XHJcbiR0ZXh0OiBmYWRlLW91dCgkYmxhY2ssIDAuMSk7XHJcbiRzdWJ0bGU6IGZhZGUtb3V0KCRibGFjaywgMC41KTtcclxuXHJcbiRib3JkZXJDb2xvcjogZmFkZS1vdXQoJGJsYWNrLCAwLjg1KTtcclxuJGJvcmRlclJhZGl1czogNHB4O1xyXG4kYm9yZGVyUmFkaXVzTTogOHB4O1xyXG4kYm9yZGVyUmFkaXVzTDogMTZweDtcclxuXHJcbi8vIEZvbnRzXHJcbiRwb3BwaW5zOiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiRzYW5zOiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuXHJcblxyXG4kdHJhbnNpdGlvbjogMC4xNXM7XHJcbiRib3JkZXJSYWRpdXM6IDRweDtcclxuXHJcbi8vIEhlaWdodHMgYW5kIG1lYXN1cmVtZW50c1xyXG4kdG9wQmFySGVpZ2h0OiA1NHB4O1xyXG5cclxuXHJcbi8vIFJlc3BvbnNpdmVuZXNzXHJcbiRmdWxsTW9iaWxlOiA0NjBweDsiLCIubmctc2VsZWN0Lm5nLXNlbGVjdC1vcGVuZWQ+Lm5nLXNlbGVjdC1jb250YWluZXJ7YmFja2dyb3VuZDojZmZmO2JvcmRlci1jb2xvcjojYjNiM2IzICNjY2MgI2Q5ZDlkOX0ubmctc2VsZWN0Lm5nLXNlbGVjdC1vcGVuZWQ+Lm5nLXNlbGVjdC1jb250YWluZXI6aG92ZXJ7Ym94LXNoYWRvdzpub25lfS5uZy1zZWxlY3Qubmctc2VsZWN0LW9wZW5lZD4ubmctc2VsZWN0LWNvbnRhaW5lciAubmctYXJyb3d7dG9wOi0ycHg7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICM5OTk7Ym9yZGVyLXdpZHRoOjAgNXB4IDVweH0ubmctc2VsZWN0Lm5nLXNlbGVjdC1vcGVuZWQ+Lm5nLXNlbGVjdC1jb250YWluZXIgLm5nLWFycm93OmhvdmVye2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjMzMzfS5uZy1zZWxlY3Qubmctc2VsZWN0LW9wZW5lZC5uZy1zZWxlY3QtYm90dG9tPi5uZy1zZWxlY3QtY29udGFpbmVye2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjA7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czowfS5uZy1zZWxlY3Qubmctc2VsZWN0LW9wZW5lZC5uZy1zZWxlY3QtdG9wPi5uZy1zZWxlY3QtY29udGFpbmVye2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjA7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czowfS5uZy1zZWxlY3Qubmctc2VsZWN0LWZvY3VzZWQ6bm90KC5uZy1zZWxlY3Qtb3BlbmVkKT4ubmctc2VsZWN0LWNvbnRhaW5lcntib3JkZXItY29sb3I6IzAwN2VmZjtib3gtc2hhZG93Omluc2V0IDAgMXB4IDFweCByZ2JhKDAsMCwwLDAuMDc1KSwwIDAgMCAzcHggcmdiYSgwLDEyNiwyNTUsMC4xKX0ubmctc2VsZWN0Lm5nLXNlbGVjdC1kaXNhYmxlZD4ubmctc2VsZWN0LWNvbnRhaW5lcntiYWNrZ3JvdW5kLWNvbG9yOiNmOWY5Zjl9Lm5nLXNlbGVjdCAubmctaGFzLXZhbHVlIC5uZy1wbGFjZWhvbGRlcntkaXNwbGF5Om5vbmV9Lm5nLXNlbGVjdCAubmctc2VsZWN0LWNvbnRhaW5lcntiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Ym9yZGVyLXJhZGl1czo0cHg7Ym9yZGVyOjFweCBzb2xpZCAjY2NjO21pbi1oZWlnaHQ6MzZweDthbGlnbi1pdGVtczpjZW50ZXJ9Lm5nLXNlbGVjdCAubmctc2VsZWN0LWNvbnRhaW5lcjpob3Zlcntib3gtc2hhZG93OjAgMXB4IDAgcmdiYSgwLDAsMCwwLjA2KX0ubmctc2VsZWN0IC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXJ7YWxpZ24taXRlbXM6Y2VudGVyO3BhZGRpbmctbGVmdDoxMHB4fVtkaXI9XCJydGxcIl0gLm5nLXNlbGVjdCAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVye3BhZGRpbmctcmlnaHQ6MTBweDtwYWRkaW5nLWxlZnQ6MH0ubmctc2VsZWN0IC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXBsYWNlaG9sZGVye2NvbG9yOiM5OTl9Lm5nLXNlbGVjdC5uZy1zZWxlY3Qtc2luZ2xlIC5uZy1zZWxlY3QtY29udGFpbmVye2hlaWdodDozNnB4fS5uZy1zZWxlY3Qubmctc2VsZWN0LXNpbmdsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy1pbnB1dHt0b3A6NXB4O2xlZnQ6MDtwYWRkaW5nLWxlZnQ6MTBweDtwYWRkaW5nLXJpZ2h0OjUwcHh9W2Rpcj1cInJ0bFwiXSAubmctc2VsZWN0Lm5nLXNlbGVjdC1zaW5nbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctaW5wdXR7cGFkZGluZy1yaWdodDoxMHB4O3BhZGRpbmctbGVmdDo1MHB4fS5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlLm5nLXNlbGVjdC1kaXNhYmxlZD4ubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy12YWx1ZXtiYWNrZ3JvdW5kLWNvbG9yOiNmOWY5Zjk7Ym9yZGVyOjFweCBzb2xpZCAjZTZlNmU2fS5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlLm5nLXNlbGVjdC1kaXNhYmxlZD4ubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy12YWx1ZSAubmctdmFsdWUtbGFiZWx7cGFkZGluZzowIDVweH0ubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVye3BhZGRpbmctdG9wOjVweDtwYWRkaW5nLWxlZnQ6N3B4fVtkaXI9XCJydGxcIl0gLm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lcntwYWRkaW5nLXJpZ2h0OjdweDtwYWRkaW5nLWxlZnQ6MH0ubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy12YWx1ZXtmb250LXNpemU6MC45ZW07bWFyZ2luLWJvdHRvbTo1cHg7YmFja2dyb3VuZC1jb2xvcjojZWJmNWZmO2JvcmRlci1yYWRpdXM6MnB4O21hcmdpbi1yaWdodDo1cHh9W2Rpcj1cInJ0bFwiXSAubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy12YWx1ZXttYXJnaW4tcmlnaHQ6MDttYXJnaW4tbGVmdDo1cHh9Lm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctdmFsdWUubmctdmFsdWUtZGlzYWJsZWR7YmFja2dyb3VuZC1jb2xvcjojZjlmOWY5fS5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXZhbHVlLm5nLXZhbHVlLWRpc2FibGVkIC5uZy12YWx1ZS1sYWJlbHtwYWRkaW5nLWxlZnQ6NXB4fVtkaXI9XCJydGxcIl0gLm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctdmFsdWUubmctdmFsdWUtZGlzYWJsZWQgLm5nLXZhbHVlLWxhYmVse3BhZGRpbmctbGVmdDowO3BhZGRpbmctcmlnaHQ6NXB4fS5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXZhbHVlIC5uZy12YWx1ZS1sYWJlbHtkaXNwbGF5OmlubGluZS1ibG9jaztwYWRkaW5nOjFweCA1cHh9Lm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctdmFsdWUgLm5nLXZhbHVlLWljb257ZGlzcGxheTppbmxpbmUtYmxvY2s7cGFkZGluZzoxcHggNXB4fS5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXZhbHVlIC5uZy12YWx1ZS1pY29uOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2QxZThmZn0ubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy12YWx1ZSAubmctdmFsdWUtaWNvbi5sZWZ0e2JvcmRlci1yaWdodDoxcHggc29saWQgI2I4ZGJmZn1bZGlyPVwicnRsXCJdIC5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXZhbHVlIC5uZy12YWx1ZS1pY29uLmxlZnR7Ym9yZGVyLWxlZnQ6MXB4IHNvbGlkICNiOGRiZmY7Ym9yZGVyLXJpZ2h0Om5vbmV9Lm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctdmFsdWUgLm5nLXZhbHVlLWljb24ucmlnaHR7Ym9yZGVyLWxlZnQ6MXB4IHNvbGlkICNiOGRiZmZ9W2Rpcj1cInJ0bFwiXSAubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy12YWx1ZSAubmctdmFsdWUtaWNvbi5yaWdodHtib3JkZXItbGVmdDowO2JvcmRlci1yaWdodDoxcHggc29saWQgI2I4ZGJmZn0ubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy1pbnB1dHtwYWRkaW5nOjAgMCAzcHggM3B4fVtkaXI9XCJydGxcIl0gLm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctaW5wdXR7cGFkZGluZzowIDNweCAzcHggMH0ubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy1wbGFjZWhvbGRlcnt0b3A6NXB4O3BhZGRpbmctYm90dG9tOjVweDtwYWRkaW5nLWxlZnQ6M3B4fVtkaXI9XCJydGxcIl0gLm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctcGxhY2Vob2xkZXJ7cGFkZGluZy1yaWdodDozcHg7cGFkZGluZy1sZWZ0OjB9Lm5nLXNlbGVjdCAubmctY2xlYXItd3JhcHBlcntjb2xvcjojOTk5fS5uZy1zZWxlY3QgLm5nLWNsZWFyLXdyYXBwZXI6aG92ZXIgLm5nLWNsZWFye2NvbG9yOiNEMDAyMUJ9Lm5nLXNlbGVjdCAubmctc3Bpbm5lci16b25le3BhZGRpbmc6NXB4IDVweCAwIDB9W2Rpcj1cInJ0bFwiXSAubmctc2VsZWN0IC5uZy1zcGlubmVyLXpvbmV7cGFkZGluZzo1cHggMCAwIDVweH0ubmctc2VsZWN0IC5uZy1hcnJvdy13cmFwcGVye3dpZHRoOjI1cHg7cGFkZGluZy1yaWdodDo1cHh9W2Rpcj1cInJ0bFwiXSAubmctc2VsZWN0IC5uZy1hcnJvdy13cmFwcGVye3BhZGRpbmctbGVmdDo1cHg7cGFkZGluZy1yaWdodDowfS5uZy1zZWxlY3QgLm5nLWFycm93LXdyYXBwZXI6aG92ZXIgLm5nLWFycm93e2JvcmRlci10b3AtY29sb3I6IzY2Nn0ubmctc2VsZWN0IC5uZy1hcnJvdy13cmFwcGVyIC5uZy1hcnJvd3tib3JkZXItY29sb3I6Izk5OSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLXdpZHRoOjVweCA1cHggMi41cHh9Lm5nLWRyb3Bkb3duLXBhbmVse2JhY2tncm91bmQtY29sb3I6I2ZmZjtib3JkZXI6MXB4IHNvbGlkICNjY2M7Ym94LXNoYWRvdzowIDFweCAwIHJnYmEoMCwwLDAsMC4wNik7bGVmdDowfS5uZy1kcm9wZG93bi1wYW5lbC5uZy1zZWxlY3QtYm90dG9te3RvcDoxMDAlO2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjRweDtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjRweDtib3JkZXItdG9wLWNvbG9yOiNlNmU2ZTY7bWFyZ2luLXRvcDotMXB4fS5uZy1kcm9wZG93bi1wYW5lbC5uZy1zZWxlY3QtYm90dG9tIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0aW9uOmxhc3QtY2hpbGR7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6NHB4O2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6NHB4fS5uZy1kcm9wZG93bi1wYW5lbC5uZy1zZWxlY3QtdG9we2JvdHRvbToxMDAlO2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjRweDtib3JkZXItdG9wLWxlZnQtcmFkaXVzOjRweDtib3JkZXItYm90dG9tLWNvbG9yOiNlNmU2ZTY7bWFyZ2luLWJvdHRvbTotMXB4fS5uZy1kcm9wZG93bi1wYW5lbC5uZy1zZWxlY3QtdG9wIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0aW9uOmZpcnN0LWNoaWxke2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjRweDtib3JkZXItdG9wLWxlZnQtcmFkaXVzOjRweH0ubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLWhlYWRlcntib3JkZXItYm90dG9tOjFweCBzb2xpZCAjY2NjO3BhZGRpbmc6NXB4IDdweH0ubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLWZvb3Rlcntib3JkZXItdG9wOjFweCBzb2xpZCAjY2NjO3BhZGRpbmc6NXB4IDdweH0ubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1ze21hcmdpbi1ib3R0b206MXB4fS5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGdyb3Vwe3VzZXItc2VsZWN0Om5vbmU7cGFkZGluZzo4cHggMTBweDtmb250LXdlaWdodDo1MDA7Y29sb3I6cmdiYSgwLDAsMCwwLjU0KTtjdXJzb3I6cG9pbnRlcn0ubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRncm91cC5uZy1vcHRpb24tZGlzYWJsZWR7Y3Vyc29yOmRlZmF1bHR9Lm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0Z3JvdXAubmctb3B0aW9uLW1hcmtlZHtiYWNrZ3JvdW5kLWNvbG9yOiNmNWZhZmZ9Lm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0Z3JvdXAubmctb3B0aW9uLXNlbGVjdGVkLC5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGdyb3VwLm5nLW9wdGlvbi1zZWxlY3RlZC5uZy1vcHRpb24tbWFya2Vke2JhY2tncm91bmQtY29sb3I6I2ViZjVmZjtmb250LXdlaWdodDo2MDB9Lm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0aW9ue2JhY2tncm91bmQtY29sb3I6I2ZmZjtjb2xvcjpyZ2JhKDAsMCwwLDAuODcpO3BhZGRpbmc6OHB4IDEwcHh9Lm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0aW9uLm5nLW9wdGlvbi1zZWxlY3RlZCwubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRpb24ubmctb3B0aW9uLXNlbGVjdGVkLm5nLW9wdGlvbi1tYXJrZWR7Y29sb3I6IzMzMztiYWNrZ3JvdW5kLWNvbG9yOiNlYmY1ZmZ9Lm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0aW9uLm5nLW9wdGlvbi1zZWxlY3RlZCAubmctb3B0aW9uLWxhYmVsLC5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGlvbi5uZy1vcHRpb24tc2VsZWN0ZWQubmctb3B0aW9uLW1hcmtlZCAubmctb3B0aW9uLWxhYmVse2ZvbnQtd2VpZ2h0OjYwMH0ubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRpb24ubmctb3B0aW9uLW1hcmtlZHtiYWNrZ3JvdW5kLWNvbG9yOiNmNWZhZmY7Y29sb3I6IzMzM30ubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRpb24ubmctb3B0aW9uLWRpc2FibGVke2NvbG9yOiNjY2N9Lm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0aW9uLm5nLW9wdGlvbi1jaGlsZHtwYWRkaW5nLWxlZnQ6MjJweH1bZGlyPVwicnRsXCJdIC5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGlvbi5uZy1vcHRpb24tY2hpbGR7cGFkZGluZy1yaWdodDoyMnB4O3BhZGRpbmctbGVmdDowfS5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGlvbiAubmctdGFnLWxhYmVse2ZvbnQtc2l6ZTo4MCU7Zm9udC13ZWlnaHQ6NDAwO3BhZGRpbmctcmlnaHQ6NXB4fVtkaXI9XCJydGxcIl0gLm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0aW9uIC5uZy10YWctbGFiZWx7cGFkZGluZy1sZWZ0OjVweDtwYWRkaW5nLXJpZ2h0OjB9W2Rpcj1cInJ0bFwiXSAubmctZHJvcGRvd24tcGFuZWx7ZGlyZWN0aW9uOnJ0bDt0ZXh0LWFsaWduOnJpZ2h0fVxuIiwiXHJcbi8vIFBhZGRpbmcgYW5kIG1hcmdpbiBoZWxwZXJzXHJcbi8vIFVzZSBjbGFzc2VzIC5tLXQtNSBmb3IgbWFyZ2luLXRvcDogNXB4IFxyXG4vLyBDaGFuZ2VzIHNpZGUvbnVtYmVyIGFzIG5lZWRlZFxyXG5cclxuJHNwYWNlYW1vdW50czogKDUsIDEwLCAxNSwgMjAsIDI1LCAzMCwgMzUsIDQwLCA0NSwgNTAsIDc1LCAxMDApOyBcclxuJHNpZGVzOiAodG9wLCBib3R0b20sIGxlZnQsIHJpZ2h0KTtcclxuXHJcbkBlYWNoICRzcGFjZSBpbiAkc3BhY2VhbW91bnRzIHtcclxuICBAZWFjaCAkc2lkZSBpbiAkc2lkZXMge1xyXG4gICAgLm0tI3tzdHItc2xpY2UoJHNpZGUsIDAsIDEpfS0jeyRzcGFjZX0ge1xyXG4gICAgICBtYXJnaW4tI3skc2lkZX06ICN7JHNwYWNlfXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAucC0je3N0ci1zbGljZSgkc2lkZSwgMCwgMSl9LSN7JHNwYWNlfSB7XHJcbiAgICAgIHBhZGRpbmctI3skc2lkZX06ICN7JHNwYWNlfXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59IiwiLy8gU3RydWN0dXJlLnNjc3NcclxuLy8gU2NhZmZvbGRpbmcgYW5kIGZsZXggc3R5bGVzIGZvciBiYXNpYyBzdHJ1Y3R1cmUgb2YgcGFnZVxyXG4vLyBJbmNsdWRpbmcgU2lkZWJhclxyXG5cclxuI291dGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRyYW5zaXRpb246IDAuMTVzO1xyXG5cclxuICAgIGhlYWRlciNtYWlue1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgaGVpZ2h0OiAkdG9wQmFySGVpZ2h0O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6ICR0b3BCYXJIZWlnaHQ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJsYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEJvZHkgd3JhcHBlclxyXG4gICAgLy8gIEluY2x1ZGVzIHNpZGViYXIgYW5kIG1haW4gY29udGVudFxyXG4gICAgI2JvZHl7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWdyb3c6IDM7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuXHJcbiAgICAgICAgLy8gNTAwMCBaLWluZGV4XHJcbiAgICAgICAgI3NpZGViYXJ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB3aWR0aDogMjgwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlLCB3aWR0aCAwcyAwLjE1cztcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAkdG9wQmFySGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDY5cHg7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAtMjgwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgZmFkZS1vdXQoJGJsYWNrLCAwLjgpO1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDogNTAwMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gRnVsbCBNb2JpbGUgLSBtZW51IG9uIGJvdHRvbVxyXG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1MHB4KSB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IGF1dG87XHJcbiAgICAgICAgICAgICAgICBib3R0b206IC02MHZoO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2MHZoO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogJGJvcmRlclJhZGl1c0w7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogJGJvcmRlclJhZGl1c0w7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYuZXhwYW5kZWR7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZSwgd2lkdGggMHM7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gRnVsbCBNb2JpbGVcclxuICAgICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTUwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGZhZGUtb3V0KCRibGFjaywgMC44KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gU2Nyb2xsIGNvbnRlbnQgd2l0aGluIHNpZGViYXJcclxuICAgICAgICAgICAgLnNpZGViYXItc2Nyb2xse1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICAgICAgICAgIGZsZXgtZ3JvdzogMztcclxuICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gXHJcblxyXG4gICAgICAgIG1haW57XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBmbGV4LWdyb3c6IDM7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8vIFNpZGViYXIgTGlnaHRib3hcclxuLy8gU2lkZWJhciBMaWdodGJveFxyXG4vLyBTaWRlYmFyIExpZ2h0Ym94XHJcbi8vIFNpZGViYXIgTGlnaHRib3hcclxuI3NpZGViYXJMaWdodGJveHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAkdG9wQmFySGVpZ2h0O1xyXG4gICAgbGVmdDogMDtcclxuICAgIHotaW5kZXg6IDQ5OTk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBmYWRlLW91dCgkYmxhY2ssIDAuNik7XHJcbiAgICBoZWlnaHQ6IDBweDtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMHMgMC4ycywgb3BhY2l0eSAwLjJzO1xyXG5cclxuICAgICYudmlzaWJsZXtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogaGVpZ2h0IDBzLCBvcGFjaXR5IDAuMnM7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIi8vIFBhcmFncmFwaHNcclxucHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzogMCAwIDhweCAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgICBmb250LWZhbWlseTogJHNhbnM7XHJcbiAgICBjb2xvcjogJHRleHQ7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJGZ1bGxNb2JpbGUpIHtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5oMSxoMixoMyxoNHtcclxuICAgIGZvbnQtZmFtaWx5OiAkcG9wcGlucztcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuaDUsaDZ7XHJcbiAgICBmb250LWZhbWlseTogJHNhbnM7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5oMXtcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxufVxyXG5oMntcclxuICAgIGZvbnQtc2l6ZTogMjZweDtcclxufVxyXG5oM3tcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxufVxyXG5oNHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5oNXtcclxuICAgIGZvbnQtc2l6ZTogMThweFxyXG59XHJcbmg2e1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG5cclxubGFiZWx7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogJHN1YnRsZTtcclxuICAgIG1hcmdpbjogMnB4IDAgMnB4IDA7XHJcbn0iLCIvLyBMaWdodGJveCAtIGRhcmsgYmFja2dyb3VuZFxyXG4vLyBDbGljayB0byBjbG9zZSBtb2RhbFxyXG5cclxuI21vZGFsTGlnaHRib3h7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG59XHJcblxyXG4vLyBBZGQgY2xhc3MgYmx1ciB0byBhbnkgZWxlbWVudCB5b3Ugd2FudCBibHVycmVkXHJcbi8vIEJlc3QgdXNlOiBhZGQgdG8gb3V0ZXIgYm9keSB3cmFwcGVyIHdoZW4gbW9kYWwgaXMgdmlzaWJsZVxyXG4uYmx1cntcclxuICAgIGZpbHRlcjogYmx1cig2cHgpO1xyXG4gICAgdHJhbnNpdGlvbjogMHM7XHJcbn1cclxuXHJcblxyXG4vLyBNb2RhbCBTdHJ1Y3R1cmVcclxuLy8gTW9kYWwgU3RydWN0dXJlXHJcbi5tb2RhbC13cmFwcGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6IDAgNiU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBmYWRlLW91dCgkYmxhY2ssIDAuNCk7XHJcbiAgICB6LWluZGV4OiAxMDAwMDtcclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRmdWxsTW9iaWxlKSB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5tb2RhbHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIG1pbi13aWR0aDogNDAwcHg7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA2ODBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyUmFkaXVzTDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgbWluLWhlaWdodDogMjQwcHg7XHJcbiAgICAgICAgbWF4LWhlaWdodDogOTB2aDtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuXHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkZnVsbE1vYmlsZSkge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiBub25lO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IG5vbmU7XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDg1dmg7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuXHJcbiAgICAgICAgLy8gTW9kYWwgaGVhZGVyIC0gdGl0bGUgYW5kIGNsb3NlIGJ1dHRvblxyXG4gICAgICAgIC5tb2RhbC1oZWFkZXJ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgYm94cy1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHggMjBweDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRwb3BwaW5zO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRmdWxsTW9iaWxlKSB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDIwcHggNXB4IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC50aXRsZXtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLm1vZGFsLWNsb3Nle1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDQycHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMDtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMnM7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogZmFkZS1vdXQoJGJsYWNrLCAwLjcpO1xyXG5cclxuICAgICAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMnM7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRyZWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmOmFjdGl2ZXtcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIE1vZGFsIGNvbnRlbnRcclxuICAgICAgICAubW9kYWwtY29udGVudHtcclxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAwO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICBmbGV4LWdyb3c6IDM7XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDQ1dmg7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG5cclxuICAgICAgICAgICAgJi5ub3BhZGRpbmd7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgJjpsYXN0LWNoaWxke1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRmdWxsTW9iaWxlKSB7XHJcbiAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA1MHZoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIE1vZGFsIEFjdGlvbnMvYnV0dG9uc1xyXG4gICAgICAgIC5tb2RhbC1hY3Rpb25ze1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHggMTdweDtcclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJGZ1bGxNb2JpbGUpIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5sZWZ0e1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYucmlnaHR7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBidXR0b257XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgM3B4O1xyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJGZ1bGxNb2JpbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMCAwIDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1ncm93OiAzO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTJweCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLy8gQSBsaXR0bGUgYmlnZ2VyIG1vZGFsIChvbiBsYXJnZSBzY3JlZW5zKVxyXG4gICAgICAgIC8vIEEgbGl0dGxlIGJpZ2dlciBtb2RhbCAob24gbGFyZ2Ugc2NyZWVucylcclxuICAgICAgICAmLmJpZ3tcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA4ODBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEEgdGlueSBtb2RhbCAtIGZvciBjb25maXJtYXRpb25zXHJcbiAgICAgICAgLy8gQSB0aW55IG1vZGFsIC0gZm9yIGNvbmZpcm1hdGlvbnNcclxuICAgICAgICAmLnRpbnl7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMzgwcHg7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogMzQwcHg7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkZnVsbE1vYmlsZSkge1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiBub25lO1xyXG5cclxuICAgICAgICAgICAgICAgIC5tb2RhbC1jb250ZW50e1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gVG9hc3RcclxuLy8gVG9hc3RcclxuLy8gVG9hc3RcclxuI3RvYXN0e1xyXG4gICAgei1pbmRleDogMSwwMDE7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBib3R0b206IC0yMDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTUwcHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZzogMTJweCA4cHggMTJweCAxMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogJGJvcmRlclJhZGl1c007XHJcbiAgICB0cmFuc2l0aW9uOiBib3R0b20gLjNzIGVhc2UtaW4tb3V0LG9wYWNpdHkgMHMgMC4zcyBlYXNlLWluLW91dDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBib3gtc2hhZG93OiAwIDVweCAyNXB4IC01cHggcmdiYSgzMCwxNiw4NCwuMyk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmxhY2s7XHJcblxyXG4gICAgI3RvYXN0SWNvbntcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTJweDtcclxuICAgICAgICB3aWR0aDogNTVweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG5cclxuICAgICN0b2FzdFRleHR7XHJcbiAgICAgICAgZmxleC1ncm93OiAzO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcblxyXG4gICAgICAgICN0b2FzdFRpdGxle1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4yNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAjdG9hc3RCb2R5e1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEyLjVweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjI1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEFsdCBUb2FzdCBDb2xvcnNcclxuICAgICYucmVke1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRyZWQ7XHJcbiAgICB9XHJcbiAgICAmLmJsdWV7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XHJcbiAgICB9XHJcbiAgICAmLmJsYWNre1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibGFjaztcclxuICAgIH1cclxuICAgICYud2hpdGV7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xyXG5cclxuICAgICAgICAjdG9hc3RJY29uLFxyXG4gICAgICAgICN0b2FzdFRleHR7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkYmxhY2s7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFdoZW4gdmlzaWJsZVxyXG4gICAgJi52aXNpYmxle1xyXG4gICAgICAgIGJvdHRvbTogMjVweDtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGJvdHRvbSAuM3MgZWFzZS1pbi1vdXQsb3BhY2l0eSAuM3MgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJGZ1bGxNb2JpbGUpIHtcclxuICAgICAgICAgICAgYm90dG9tOiAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIE1vYmlsZSB0b2FzdCAtIGZ1bGwgd2lkdGhcclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJGZ1bGxNb2JpbGUpIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIGJvdHRvbTogLTIwMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDE4cHggMTRweCAxOHB4IDE4cHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcclxuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDVweCAyNXB4IDVweCByZ2JhKDMwLDE2LDg0LC4yKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG4vLyBBYm91dCBNb2RhbFxyXG4jYWJvdXRNb2RhbHtcclxuXHJcbiAgICAubW9kYWwtY29udGVudHtcclxuICAgICAgICB3aWR0aDogNjIwcHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgICAgICB0YWJze1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGFie1xyXG4gICAgICAgICAgICBmbGV4LWdyb3c6IDM7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vIEJ1dHRvbnNcclxuLy8gQnV0dG9uc1xyXG4vLyBCdXR0b25zXHJcbmJ1dHRvbntcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nOiA2cHggMTZweDtcclxuICAgIGZvbnQtZmFtaWx5OiAkcG9wcGlucztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5O1xyXG4gICAgY29sb3I6ICR3aGl0ZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjE1cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogJGJvcmRlclJhZGl1cztcclxuXHJcbiAgICAmOmhvdmVye1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJHByaW1hcnksIDUlKTtcclxuICAgIH1cclxuXHJcbiAgICAmOmZvY3Vze1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgfVxyXG5cclxuICAgICY6YWN0aXZle1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBDb2xvcnNcclxuICAgIC8vIFJlZFxyXG4gICAgJi5yZWR7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHJlZDtcclxuICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJHJlZCwgNSUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOmFjdGl2ZXtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHJlZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gU2lkZWJhciBNdWx0aSBTZWxlY3RcclxuLy8gU2lkZWJhciBNdWx0aSBTZWxlY3RcclxuLy8gU2lkZWJhciBNdWx0aSBTZWxlY3RcclxuI3NpZGViYXIgbmctc2VsZWN0IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE0cHg7XHJcblxyXG4gICAgPmRpdiB7XHJcbiAgICAgICAgPmRpdi5zaW5nbGUge1xyXG4gICAgICAgICAgICA+ZGl2LnRvZ2dsZSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDM4OWE5O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID5kaXYucGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXRSZWd1bGFyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID5kaXYuY2xlYXIge1xyXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQzODlhOTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAubmctc2VsZWN0LWNvbnRhaW5lcntcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBmYWRlLW91dCgkYmxhY2ssIDAuOCkgIWltcG9ydGFudDtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogJHRyYW5zaXRpb247XHJcblxyXG4gICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBmYWRlLW91dCgkYmxhY2ssIDAuMjUpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAubmctdmFsdWUtY29udGFpbmVye1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgICAgICBtaW4taGVpZ2h0OiAwO1xyXG5cclxuICAgICAgICAvLyBUZXh0IFBsYWNlaG9sZGVyXHJcbiAgICAgICAgLm5nLXBsYWNlaG9sZGVye1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4xcHg7XHJcbiAgICAgICAgICAgIHRvcDogMTFweDtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiBmYWRlLW91dCgkYmxhY2ssIDAuNCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBUZXh0IElucHV0XHJcbiAgICAgICAgLm5nLWlucHV0e1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDAgNHB4IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBWYWx1ZSAvIHRhZyBib3hlc1xyXG4gICAgICAgIC5uZy12YWx1ZXtcclxuICAgICAgICAgICAgbWFyZ2luOiAycHggNHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBmYWRlLW91dCgkcHJpbWFyeSwgMC44NSk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTIuNXB4O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJHNhbnM7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkdGV4dDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAgICAgICAgIC5uZy12YWx1ZS1pY29ue1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRibGFjaztcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGZhZGUtb3V0KCRwcmltYXJ5LCAwLjUpO1xyXG5cclxuICAgICAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRyZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZmFkZS1vdXQoJHByaW1hcnksIDAuODUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubmctdmFsdWUtbGFiZWx7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAzcHggMC41cHggM3B4O1xyXG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBEcm9wZG93biBhcnJvd1xyXG4gICAgLm5nLWFycm93LXdyYXBwZXJ7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuXHJcbiAgICBcclxufVxyXG4jc2lkZWJhciBzZWxlY3QtZHJvcGRvd24ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufSIsImhlYWRlciNtYWlue1xyXG5cclxuICAgIC8vIEJyYW5kaW5nXHJcbiAgICAjYnJhbmRpbmd7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICBwYWRkaW5nOiAwIDAgMCAxNXB4O1xyXG5cclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDAgMCA0MHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI255ZGVjTG9nbyxcclxuICAgICAgICAjdXNnc0xvZ297XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuXHJcbiAgICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzOHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICNueWRlY0xvZ297XHJcbiAgICAgICAgICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcblxyXG4gICAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTGlua3Mgb24gcmlnaHRcclxuICAgICNoZWFkZXJMaW5rc3tcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZ3JvdzogMztcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgcGFkZGluZzogMCAxMHB4IDAgMDtcclxuXHJcbiAgICAgICAgYXtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAxMnB4IDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkYmxhY2s7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkc2FucztcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG5cclxuICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6Zm9jdXN7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOmFjdGl2ZXtcclxuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNzU7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vIEJyYW5kaW5nXHJcbi8vIEJyYW5kaW5nXHJcbi8vIEJyYW5kaW5nXHJcblxyXG5oZWFkZXIjbWFpbntcclxuICAgICNicmFuZGluZ3tcclxuXHJcbiAgICAgICAgLy8gQ29sbGFwc2libGUgVGl0bGVcclxuICAgICAgICAjdGl0bGV7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxuICAgICAgICAgICAgLmFiYnIsXHJcbiAgICAgICAgICAgIC5leHBhbmRlZHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJHBvcHBpbnM7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuYWJicntcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjNweDtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmV4cGFuZGVke1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcblxyXG4gICAgICAgICAgICAgICAgLmV4cGFuZGVke1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vLyBDb2xsYXBzaWJsZSBzZWN0aW9ucyAtIE1hcCAmIERhdGFcclxuLy8gQ29sbGFwc2libGUgc2VjdGlvbnMgLSBNYXAgJiBEYXRhXHJcbi8vIENvbGxhcHNpYmxlIHNlY3Rpb25zIC0gTWFwICYgRGF0YVxyXG5cclxuLmNvbGxhcHNpYmxle1xyXG5cclxuICAgIFxyXG59IiwiLy8gTWFwIGFuZCBsZWdlbmQgdHdlYWtzXHJcblxyXG4jbWFwV3JhcHBlcntcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgI21hcHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGZhZGUtb3V0KCRibGFjaywgMC44KTtcclxuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkYm9yZGVyUmFkaXVzTDtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjE3NXMgZWFzZTtcclxuICAgIH1cclxuXHJcbiAgICAjY29sbGFwc2VNYXB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxuXHJcbiAgICAjdG9nZ2xlTWFwe1xyXG4gICAgICAgIHRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0OyAgICAgXHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICBwYWRkaW5nOiA4cHg7ICAgXHJcblxyXG4gICAgICAgIGRpdntcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNzU7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xyXG5cclxuICAgICAgICAgICAgaSxie1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaXtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJ7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRzYW5zO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICAgZGl2e1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIE1hcCBjb2xsYXBzZWQvbWluaW1pemVkXHJcbiAgICAvLyBNYXAgY29sbGFwc2VkL21pbmltaXplZFxyXG4gICAgJi5jb2xsYXBzZWR7XHJcblxyXG4gICAgICAgICNtYXB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTEwcHg7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMTc1cyBlYXNlO1xyXG5cclxuICAgICAgICAgICAgLmxlYWZsZXQtY29udHJvbC1jb250YWluZXIsXHJcbiAgICAgICAgICAgIC5sZWFmbGV0LWNvbnRyb2x7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjdG9nZ2xlTWFwe1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBmYWRlLW91dCgkYmxhY2ssIDAuMzUpO1xyXG4gICAgICAgICAgICB6LWluZGV4OiA0MDE7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xyXG5cclxuICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGZhZGUtb3V0KCRibGFjaywgMC41MjUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG4iLCIvLyBNYWluIFNDU1MgZmlsZS5cclxuLy8gRG8gbm90IGFkZCBhbnl0aGluZyBkaXJlY3RseSB0byB0aGlzIGZpbGUuXHJcbi8vIEZpbmQgdGhlIGFwcHJvcHJpYXRlIGZpbGUgd2l0aGluIHRoZSAvc3R5bGVzIGZvbGRlclxyXG5cclxuQGltcG9ydCAndmFyaWFibGVzLnNjc3MnO1xyXG5cclxuQGltcG9ydCBcIn5Abmctc2VsZWN0L25nLXNlbGVjdC90aGVtZXMvZGVmYXVsdC50aGVtZS5jc3NcIjtcclxuXHJcblxyXG5cclxuLy8gU0FTUyBoZWxwZXJzL21peGluc1xyXG5AaW1wb3J0ICcvc3R5bGVzL2hlbHBlcnMuc2Nzcyc7XHJcblxyXG4vLyBVbml2ZXJzYWwgSW1wb3J0c1xyXG5AaW1wb3J0ICcvc3R5bGVzL3N0cnVjdHVyZS5zY3NzJztcclxuQGltcG9ydCAnL3N0eWxlcy90ZXh0LnNjc3MnO1xyXG5AaW1wb3J0ICcvc3R5bGVzL21vZGFscy5zY3NzJztcclxuQGltcG9ydCAnL3N0eWxlcy9pbnB1dHMuc2Nzcyc7XHJcblxyXG5AaW1wb3J0ICcvc3R5bGVzL2hlYWRlci5zY3NzJztcclxuXHJcbkBpbXBvcnQgJy9zdHlsZXMvY3VzdG9tL2dlbmVyYWwuc2Nzcyc7XHJcbkBpbXBvcnQgJy9zdHlsZXMvY3VzdG9tL21hcC5zY3NzJztcclxuXHJcblxyXG4vLyBTcGVjaWZpYyBpbXBvcnRzXHJcbi5pbmZvIHsgXHJcbiAgICBwYWRkaW5nOiA2cHggOHB4OyBcclxuICAgIGZvbnQ6IDE0cHgvMTZweCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmOyBcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlOyBcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC44KTsgXHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTVweCByZ2JhKDAsMCwwLDAuMik7IFxyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4OyBcclxufSBcclxuLmxlZ2VuZCB7IFxyXG4gICAgdGV4dC1hbGlnbjogbGVmdDsgXHJcbiAgICBsaW5lLWhlaWdodDogMThweDsgXHJcbiAgICBjb2xvcjogIzU1NTsgXHJcbiAgICAuc2l0ZSB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIG9wYWNpdHk6IC41O1xyXG4gICAgICAgIHdpZHRoOiA4cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA4cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgfVxyXG4gICAgLmZhY2lsaXR5IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDg1LCA5NCwgMTIzLCAxKTsgLy9iZWI1NTZcclxuICAgIH1cclxuICAgIC5hdG1vc3BoZXJlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDE4MywgMjE3LCAxMDQsIDEpOyAvL2JhOTk0N1xyXG4gICAgfVxyXG4gICAgLmxha2Uge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMTgxLCAxMTgsIDE3MywgMSk7IC8vYjY3OTM5XHJcbiAgICB9XHJcbiAgICAuc3RyZWFtIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDY3LCAxMTgsIDIxMSwgMSk7IC8vYjI1NjJiXHJcbiAgICB9XHJcbiAgICAud2VsbCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyMjQsIDcwLCA2OCwgMSk7IC8vMjI0LCA3MCwgNjgsIDFcclxuICAgIH1cclxuICAgIC5sYW5kIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDMxLCAxMTksIDEyNywgMSk7IC8vQUUyNzZkXHJcbiAgICB9XHJcbiAgICAuZXN0dWFyeSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyMTQsIDgsIDE2OSwgMSk7IC8vOUIzMEFmXHJcbiAgICB9XHJcbiAgICAud2V0bGFuZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSg2MCwgMTgwLCA3NSwgMSk7IC8vIzUyMzlhZlxyXG4gICAgfVxyXG4gICAgLm9jZWFuIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDE5OCwgNzYsIDY1LCAxKTsgLy80MjcyYjBcclxuICAgIH1cclxufVxyXG4ubGVnZW5kIGkgeyBcclxuICAgIHdpZHRoOiAxOHB4OyBcclxuICAgIGhlaWdodDogMThweDsgXHJcbiAgICBmbG9hdDogbGVmdDsgXHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDt9XHJcblxyXG4vKlRFTVBPUkFSWSBTVFlMSU5HIFVOVElMIFdFIEdFVCBUSEUgTElRV0lEUyBEQVNIQk9BUkQgSU5TRVJURUQgSEVSRSovXHJcbiNkYXNoYm9hcmRUYWJsZXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZmFkZS1vdXQoJGJsYWNrLCAwLjgpO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6ICAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDQ1cHg7XHJcblxyXG4gICAgLnJvd3tcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAmOm50aC1jaGlsZChldmVuKXtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMCwxMCw1MCwwLjA4KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRpdntcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTNweDtcclxuICAgICAgICAgICAgY29sb3I6ICRibGFjaztcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAlO1xyXG4gICAgICAgICAgICBmbGV4LWdyb3c6IDM7XHJcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuXHJcbiAgICAgICAgICAgICY6bnRoLWNoaWxkKDEpe1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5oZWFkZXJ7XHJcblxyXG4gICAgICAgICAgICBkaXZ7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IFxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'LIQWIDS';
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _mainview_mainview_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mainview/mainview.module */ "./src/app/mainview/mainview.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _mainview_mainview_module__WEBPACK_IMPORTED_MODULE_7__["MainviewModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/mainview/dataview/dataview.component.html":
/*!***********************************************************!*\
  !*** ./src/app/mainview/dataview/dataview.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"dataView\" [ngClass]=\"{'data-blur': dataLoading == true }\">\r\n\r\n    <app-dataloader-div id=\"dataLoader\"></app-dataloader-div>\r\n\r\n\r\n    <div class=\"site-meta\">\r\n        <h1>Data</h1>\r\n        <h3 *ngIf=\"showSiteData == true && noData == false\">{{selectedSites.join(\", \")}}</h3>\r\n    </div>\r\n\r\n    <div [class.hidden]=\"showSiteData == true\" class=\"chart-wrapper\">\r\n        <div class=\"chart\" id=\"typeChart\"></div>\r\n        <div class=\"chart\" id=\"orgChart\"></div>\r\n    </div>\r\n\r\n    <div [class.hidden]=\"showSiteData == false || noData == true\">\r\n\r\n        <div [class.hidden]=\"selectedSites.length > 1\" class=\"chart-wrapper\">\r\n            <div class=\"chart\" id=\"siteChart2\"></div>\r\n            <div class=\"chart\" [class.hidden]=\"unitCodes.length == 1\" id=\"siteChart\"></div>\r\n        </div>\r\n\r\n        <div [class.hidden]=\"selectedSites.length == 1\" class=\"chart-wrapper\">\r\n            <div class=\"chart\" id=\"multSiteChart\"></div>\r\n        </div>\r\n        <div style=\"text-align: center;\"><i class=\"fa fa-mouse-pointer\"></i>Drag a box around points on the graph to\r\n            zoom in</div>\r\n\r\n        <button (click)=\"downloadFile()\"><i class=\"fa fa-file-download\"></i>Download Results CSV</button>\r\n        <button (click)=\"makeModalChart()\"><i class=\"fa fa-book-open\"></i>Report</button>\r\n        <table id=\"dataTable\">\r\n            <thead>\r\n                <tr class=\"row header\">\r\n                    <th *ngIf=\"selectedSites.length > 1\">Site Name</th>\r\n                    <th>Activity Start Date</th>\r\n                    <th>Depth</th>\r\n                    <th>Value</th>\r\n                    <th>Hydrologic Event</th>\r\n                    <th>Aquifer</th>\r\n                    <th>Provider</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let sample of resultJson\" class=\"row\">\r\n                    <td *ngIf=\"selectedSites.length > 1\">{{sample.MonitoringLocationIdentifier}}</td>\r\n                    <td>{{sample.ActivityStartDate}}</td>\r\n                    <td>{{sample['ActivityBottomDepthHeightMeasure/MeasureValue']}}\r\n                        {{sample['ActivityBottomDepthHeightMeasure/MeasureUnitCode']}}</td>\r\n                    <td>{{sample.ResultMeasureValue}} {{sample['ResultMeasure/MeasureUnitCode']}}</td>\r\n                    <td>{{sample.HydrologicEvent}}</td>\r\n                    <td>{{sample.SampleAquifer}}</td>\r\n                    <td>{{sample.ProviderName}}</td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n\r\n    </div>\r\n    <div *ngIf=\"noData == true\" id=\"noData\">\r\n        <h2>No data was returned</h2>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"modal-wrapper\" *ngIf=\"showModal\" (click)=\"showModal = false\">\r\n    <div class=\"modal\" id=\"reportModal\" (click)=\"$event.stopPropagation()\">\r\n        <div class=\"modal-header hidden-print\">\r\n            <div class=\"title\">Report</div>\r\n            <div class=\"modal-close\" (click)=\"showModal = false\">&times;</div>\r\n        </div>\r\n        <div class=\"modal-content\" id=\"printArea\">\r\n            <h4>{{selectedSites.join(\", \")}}</h4>\r\n            <div class=\"chart\" id=\"modalChart\"></div>\r\n            <div id=\"modalChart2\" [class]=\"unitCodes.length == 1 || selectedSites.length > 1 ? 'hidden hidden-print': 'chart'\"></div>\r\n            <div id=\"modalTable\"></div>\r\n            <div class=\"modal-actions hidden-print\">\r\n                <button (click)=\"printReport()\"><i class=\"fa fa-print\"></i>Print</button>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/mainview/dataview/dataview.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/mainview/dataview/dataview.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Open+Sans:400,600,700|Poppins:300,400,600,700\");\n#noData {\n  color: #F23D47;\n  font-size: 14px;\n  display: block; }\n#dataView {\n  display: block;\n  box-sizing: border-box;\n  position: relative;\n  width: 100%;\n  max-width: 100%;\n  margin: 0; }\n#dataView.data-blur *:not(#dataLoader) {\n    -webkit-filter: blur(3px);\n            filter: blur(3px); }\n#dataView .site-meta {\n    display: block;\n    box-sizing: border-box;\n    padding: 15px 25px; }\n#dataView .site-meta h1 {\n      font-size: 26px;\n      font-weight: 600; }\n#dataView .site-meta h3 {\n      font-size: 18px;\n      font-weight: 500; }\n.chart-wrapper {\n  display: flex;\n  justify-content: space-between;\n  box-sizing: border-box;\n  padding: 20px 25px 10px 25px; }\n.chart-wrapper .chart {\n    display: block;\n    margin: 0 auto;\n    width: 50%; }\n#siteChart,\n#siteChart2,\n#modalChart,\n#modalChart2,\n#multSiteChart {\n  display: block;\n  width: 48%;\n  height: 320px; }\n#dataTable {\n  display: flex;\n  flex-direction: column;\n  border: 1px solid rgba(16, 16, 16, 0.2);\n  box-sizing: border-box;\n  padding: 15px;\n  border-radius: 10px;\n  margin-bottom: 10px; }\n#dataTable tr {\n    display: flex;\n    width: 100%; }\n#dataTable tr:nth-child(even) {\n      background-color: rgba(10, 10, 50, 0.08); }\n#dataTable tr td, #dataTable tr th {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      text-align: center;\n      font-size: 12px;\n      line-height: 13px;\n      color: #101010;\n      height: 40px;\n      width: 10%;\n      flex-grow: 3;\n      box-sizing: border-box;\n      padding: 0 10px;\n      text-align: left; }\n#dataTable tr td:nth-child(1), #dataTable tr th:nth-child(1) {\n        font-weight: bolder; }\n#dataTable tr.header div {\n      font-weight: bolder; }\n.hidden {\n  display: none !important; }\nbutton {\n  margin: 45px 5px 5px 0px; }\ni {\n  padding: 5px; }\n#reportModal {\n  min-width: 60% !important;\n  min-height: 80%;\n  max-height: -webkit-max-content;\n  max-height: -moz-max-content;\n  max-height: max-content; }\n#reportModal .modal-content {\n    max-height: -webkit-max-content;\n    max-height: -moz-max-content;\n    max-height: max-content; }\n#reportModal h4 {\n    margin: 10px 20px; }\n#reportModal .chart {\n    margin-left: auto;\n    margin-right: auto; }\n.modal-wrapper .modal .modal-content {\n  overflow-x: hidden;\n  overflow-y: auto; }\n#modalTable {\n  margin: 5px;\n  margin-bottom: 0px; }\n@media print {\n  body * {\n    visibility: hidden;\n    -webkit-print-color-adjust: exact !important; }\n  .hidden-print {\n    display: none !important; }\n  .modal, .modal-wrapper {\n    /**Remove scrollbar for printing.**/\n    overflow: visible !important;\n    /**Needs to be relative for printing in IE11**/\n    position: absolute;\n    left: 0;\n    top: 0;\n    margin: 0;\n    padding-right: 20px;\n    min-height: 550px;\n    visibility: visible; }\n  .modal-dialog, .modal-content {\n    width: 100%;\n    padding: 0;\n    margin: 20px;\n    visibility: visible !important;\n    /**Remove scrollbar for printing.**/\n    overflow: visible !important; }\n  .modal-footer {\n    border-top: 0; }\n  .leaflet-control-container {\n    display: none !important; }\n  .chart {\n    overflow: unset;\n    width: 100% !important; }\n  #modalTable {\n    page-break-inside: auto;\n    width: 120%;\n    border: none; }\n    #modalTable tr, #modalTable td, #modalTable th {\n      page-break-inside: avoid !important;\n      page-break-after: auto; }\n    #modalTable th {\n      font-weight: bold; }\n  .identifier {\n    padding-bottom: 2em; } }\n@media print and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  /* IE10+ CSS styles go here */\n  .modal {\n    /**Needs to be relative for printing in IE11**/\n    position: relative; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbnZpZXcvZGF0YXZpZXcvYzpcXE5ZQmFja3VwXFxHaXRIdWJcXExJUVdJRFMvc3JjXFxhcHBcXHZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9tYWludmlldy9kYXRhdmlldy9jOlxcTllCYWNrdXBcXEdpdEh1YlxcTElRV0lEUy9zcmNcXGFwcFxcbWFpbnZpZXdcXGRhdGF2aWV3XFxkYXRhdmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxvR0FBWTtBQ0NaO0VBQ0ksY0RLUztFQ0pULGVBQWU7RUFDZixjQUFjLEVBQUE7QUFHbEI7RUFDSSxjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZUFBZTtFQUNmLFNBQVMsRUFBQTtBQU5iO0lBWVkseUJBQWlCO1lBQWpCLGlCQUFpQixFQUFBO0FBWjdCO0lBbUJRLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsa0JBQWtCLEVBQUE7QUFyQjFCO01Bd0JZLGVBQWU7TUFDZixnQkFBZ0IsRUFBQTtBQXpCNUI7TUE2QlksZUFBZTtNQUNmLGdCQUFnQixFQUFBO0FBSzVCO0VBQ0ksYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixzQkFBc0I7RUFDdEIsNEJBQTRCLEVBQUE7QUFKaEM7SUFPUSxjQUFjO0lBQ2QsY0FBYztJQUNkLFVBQVUsRUFBQTtBQUdsQjs7Ozs7RUFLSSxjQUFjO0VBQ2QsVUFBVTtFQUNWLGFBQWEsRUFBQTtBQUdqQjtFQUNJLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUNBQXVDO0VBQ3ZDLHNCQUFzQjtFQUN0QixhQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLG1CQUFtQixFQUFBO0FBUHZCO0lBVVEsYUFBYTtJQUNiLFdBQVcsRUFBQTtBQVhuQjtNQWNZLHdDQUFxQyxFQUFBO0FBZGpEO01Ba0JZLGFBQWE7TUFDYixzQkFBc0I7TUFDdEIsdUJBQXVCO01BQ3ZCLGtCQUFrQjtNQUNsQixlQUFlO01BQ2YsaUJBQWlCO01BQ2pCLGNEcEZHO01DcUZILFlBQVk7TUFDWixVQUFVO01BQ1YsWUFBWTtNQUNaLHNCQUFzQjtNQUN0QixlQUFlO01BQ2YsZ0JBQWdCLEVBQUE7QUE5QjVCO1FBaUNnQixtQkFBbUIsRUFBQTtBQWpDbkM7TUF3Q2dCLG1CQUFtQixFQUFBO0FBTW5DO0VBQ0ksd0JBQXdCLEVBQUE7QUFHNUI7RUFDSSx3QkFBd0IsRUFBQTtBQUc1QjtFQUNJLFlBQVksRUFBQTtBQUdoQjtFQUNJLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsK0JBQXVCO0VBQXZCLDRCQUF1QjtFQUF2Qix1QkFBdUIsRUFBQTtBQUgzQjtJQUtRLCtCQUF1QjtJQUF2Qiw0QkFBdUI7SUFBdkIsdUJBQXVCLEVBQUE7QUFML0I7SUFRUSxpQkFBaUIsRUFBQTtBQVJ6QjtJQVdRLGlCQUFpQjtJQUNqQixrQkFBa0IsRUFBQTtBQUkxQjtFQUNJLGtCQUFrQjtFQUNsQixnQkFBZ0IsRUFBQTtBQUdwQjtFQUNJLFdBQVc7RUFDWCxrQkFBa0IsRUFBQTtBQUd0QjtFQUNJO0lBQ0ksa0JBQWtCO0lBQ2xCLDRDQUE0QyxFQUFBO0VBRWhEO0lBQ0ksd0JBQXdCLEVBQUE7RUFFNUI7SUFDSSxtQ0FBQTtJQUNBLDRCQUE0QjtJQUM1Qiw4Q0FBQTtJQUNBLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsTUFBTTtJQUNOLFNBQVM7SUFDVCxtQkFBa0I7SUFDbEIsaUJBQWdCO0lBQ2hCLG1CQUFtQixFQUFBO0VBRXZCO0lBQ0ksV0FBVztJQUNYLFVBQVU7SUFDVixZQUFXO0lBQ1gsOEJBQThCO0lBQzlCLG1DQUFBO0lBQ0EsNEJBQTRCLEVBQUE7RUFFaEM7SUFDSSxhQUFZLEVBQUE7RUFFaEI7SUFDSSx3QkFBdUIsRUFBQTtFQUczQjtJQUNJLGVBQWU7SUFDZixzQkFBc0IsRUFBQTtFQUcxQjtJQUNJLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsWUFBWSxFQUFBO0lBSGhCO01BS1EsbUNBQW1DO01BQ25DLHNCQUFzQixFQUFBO0lBTjlCO01BU1EsaUJBQWlCLEVBQUE7RUFJekI7SUFDSSxtQkFBbUIsRUFBQSxFQUN0QjtBQUdMO0VBQ0ksNkJBQUE7RUFDQTtJQUNJLDhDQUFBO0lBQ0Esa0JBQWtCLEVBQUEsRUFDckIiLCJmaWxlIjoic3JjL2FwcC9tYWludmlldy9kYXRhdmlldy9kYXRhdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEZvbnRzXHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zOjQwMCw2MDAsNzAwfFBvcHBpbnM6MzAwLDQwMCw2MDAsNzAwJyk7XHJcblxyXG5cclxuLy8gVmFyaWFibGVzXHJcbiRibGFjazogIzEwMTAxMDtcclxuJHdoaXRlOiAjZmZmO1xyXG4kYmc6ICNGOUZBRkU7XHJcbiRyZWQ6ICNGMjNENDc7XHJcbiRibHVlOiAjM0UzQkZCO1xyXG4kcHJpbWFyeTogJGJsdWU7XHJcbiRncmV5OiAjRjhGN0Y4O1xyXG4kdGV4dDogZmFkZS1vdXQoJGJsYWNrLCAwLjEpO1xyXG4kc3VidGxlOiBmYWRlLW91dCgkYmxhY2ssIDAuNSk7XHJcblxyXG4kYm9yZGVyQ29sb3I6IGZhZGUtb3V0KCRibGFjaywgMC44NSk7XHJcbiRib3JkZXJSYWRpdXM6IDRweDtcclxuJGJvcmRlclJhZGl1c006IDhweDtcclxuJGJvcmRlclJhZGl1c0w6IDE2cHg7XHJcblxyXG4vLyBGb250c1xyXG4kcG9wcGluczogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4kc2FuczogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcblxyXG5cclxuJHRyYW5zaXRpb246IDAuMTVzO1xyXG4kYm9yZGVyUmFkaXVzOiA0cHg7XHJcblxyXG4vLyBIZWlnaHRzIGFuZCBtZWFzdXJlbWVudHNcclxuJHRvcEJhckhlaWdodDogNTRweDtcclxuXHJcblxyXG4vLyBSZXNwb25zaXZlbmVzc1xyXG4kZnVsbE1vYmlsZTogNDYwcHg7IiwiQGltcG9ydCAnLi4vLi4vdmFyaWFibGVzLnNjc3MnO1xyXG5cclxuI25vRGF0YXtcclxuICAgIGNvbG9yOiAkcmVkO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbiNkYXRhVmlld3tcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG5cclxuICAgICYuZGF0YS1ibHVye1xyXG5cclxuICAgICAgICAvLyBCbHVyIGV2ZXJ5dGhpbmcgZXhjZXB0IHRoZSBsb2FkZXJcclxuICAgICAgICAqOm5vdCgjZGF0YUxvYWRlcil7XHJcbiAgICAgICAgICAgIGZpbHRlcjogYmx1cigzcHgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBTaXRlIG1ldGFcclxuICAgIC8vIE5hbWUsIGlkLCBldGNcclxuICAgIC5zaXRlLW1ldGF7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4IDI1cHg7XHJcblxyXG4gICAgICAgIGgxe1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoM3tcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmNoYXJ0LXdyYXBwZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6IDIwcHggMjVweCAxMHB4IDI1cHg7XHJcblxyXG4gICAgLmNoYXJ0e1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICB9XHJcbn1cclxuI3NpdGVDaGFydCxcclxuI3NpdGVDaGFydDIsXHJcbiNtb2RhbENoYXJ0LFxyXG4jbW9kYWxDaGFydDIsXHJcbiNtdWx0U2l0ZUNoYXJ0e1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogNDglO1xyXG4gICAgaGVpZ2h0OiAzMjBweDtcclxufVxyXG5cclxuI2RhdGFUYWJsZXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZmFkZS1vdXQoJGJsYWNrLCAwLjgpO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6ICAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblxyXG4gICAgdHJ7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgJjpudGgtY2hpbGQoZXZlbil7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTAsMTAsNTAsMC4wOCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0ZCx0aHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTNweDtcclxuICAgICAgICAgICAgY29sb3I6ICRibGFjaztcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAlO1xyXG4gICAgICAgICAgICBmbGV4LWdyb3c6IDM7XHJcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuXHJcbiAgICAgICAgICAgICY6bnRoLWNoaWxkKDEpe1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5oZWFkZXJ7XHJcblxyXG4gICAgICAgICAgICBkaXZ7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IFxyXG5cclxuLmhpZGRlbntcclxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuYnV0dG9ue1xyXG4gICAgbWFyZ2luOiA0NXB4IDVweCA1cHggMHB4O1xyXG59XHJcblxyXG5pe1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4jcmVwb3J0TW9kYWx7XHJcbiAgICBtaW4td2lkdGg6IDYwJSAhaW1wb3J0YW50O1xyXG4gICAgbWluLWhlaWdodDogODAlO1xyXG4gICAgbWF4LWhlaWdodDogbWF4LWNvbnRlbnQ7XHJcbiAgICAubW9kYWwtY29udGVudHtcclxuICAgICAgICBtYXgtaGVpZ2h0OiBtYXgtY29udGVudDtcclxuICAgIH1cclxuICAgIGg0e1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAyMHB4O1xyXG4gICAgfVxyXG4gICAgLmNoYXJ0e1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIH1cclxufVxyXG5cclxuLm1vZGFsLXdyYXBwZXIgLm1vZGFsIC5tb2RhbC1jb250ZW50e1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuI21vZGFsVGFibGUge1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSBwcmludHtcclxuICAgIGJvZHkgKiB7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgIC13ZWJraXQtcHJpbnQtY29sb3ItYWRqdXN0OiBleGFjdCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmhpZGRlbi1wcmludCB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLm1vZGFsLCAubW9kYWwtd3JhcHBlcntcclxuICAgICAgICAvKipSZW1vdmUgc2Nyb2xsYmFyIGZvciBwcmludGluZy4qKi9cclxuICAgICAgICBvdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIC8qKk5lZWRzIHRvIGJlIHJlbGF0aXZlIGZvciBwcmludGluZyBpbiBJRTExKiovXHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OjIwcHg7XHJcbiAgICAgICAgbWluLWhlaWdodDo1NTBweDtcclxuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgfVxyXG4gICAgLm1vZGFsLWRpYWxvZywgLm1vZGFsLWNvbnRlbnQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgbWFyZ2luOjIwcHg7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIC8qKlJlbW92ZSBzY3JvbGxiYXIgZm9yIHByaW50aW5nLioqL1xyXG4gICAgICAgIG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAubW9kYWwtZm9vdGVyIHtcclxuICAgICAgICBib3JkZXItdG9wOjA7XHJcbiAgICB9XHJcbiAgICAubGVhZmxldC1jb250cm9sLWNvbnRhaW5lcntcclxuICAgICAgICBkaXNwbGF5OiBub25lIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAuY2hhcnQge1xyXG4gICAgICAgIG92ZXJmbG93OiB1bnNldDtcclxuICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgICNtb2RhbFRhYmxle1xyXG4gICAgICAgIHBhZ2UtYnJlYWstaW5zaWRlOiBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiAxMjAlO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICB0ciwgdGQsIHRoe1xyXG4gICAgICAgICAgICBwYWdlLWJyZWFrLWluc2lkZTogYXZvaWQgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgcGFnZS1icmVhay1hZnRlcjogYXV0bztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGh7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuaWRlbnRpZmllciB7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDJlbTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHByaW50IGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IG5vbmUpLCAoLW1zLWhpZ2gtY29udHJhc3Q6IGFjdGl2ZSkge1xyXG4gICAgLyogSUUxMCsgQ1NTIHN0eWxlcyBnbyBoZXJlICovXHJcbiAgICAubW9kYWwge1xyXG4gICAgICAgIC8qKk5lZWRzIHRvIGJlIHJlbGF0aXZlIGZvciBwcmludGluZyBpbiBJRTExKiovXHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/mainview/dataview/dataview.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/mainview/dataview/dataview.component.ts ***!
  \*********************************************************/
/*! exports provided: DataviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataviewComponent", function() { return DataviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_shared_services_map_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/map.service */ "./src/app/shared/services/map.service.ts");
/* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DataviewComponent = /** @class */ (function () {
    function DataviewComponent(_mapService, _http, _loaderService) {
        this._mapService = _mapService;
        this._http = _http;
        this._loaderService = _loaderService;
        this.characteristics = ['Nitrate'];
        this.showSiteData = false;
        this.selectedSites = [];
        this.noData = false;
        this.dataLoading = false;
        this.unitCodes = [];
        this.uniqueData = [];
        this.showModal = false;
    }
    DataviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._mapService.SelectedSite.subscribe(function (Response) {
            _this.selectedSites = [Response.name];
            _this.getResultData();
        });
        this._mapService.MultSelect.subscribe(function (Response) {
            if (_this.selectedSites.indexOf(Response.name) === -1) {
                _this.selectedSites.push(Response.name);
            }
            _this.getResultData();
        });
        this._mapService.SelectedChar.subscribe(function (Response) {
            _this.noData = false;
            if (typeof Response === 'string') {
                _this.characteristics = [Response];
            }
            else {
                _this.characteristics = Response;
            }
            if (_this.characteristics.indexOf('Nitrogen') > -1) {
                _this.characteristics.push('Nitrogen, mixed forms (NH3), (NH4), organic, (NO2) and (NO3)');
            }
        });
        this._mapService.SiteChange.subscribe(function (geojson) {
            _this.geojson = geojson;
            _this.selectedSites = [];
            _this.geoJSONsiteCount = geojson.features.length;
            _this.showSiteData = false;
            _this.noData = false;
            _this.siteFilterData = _this._mapService.filterOptions;
            _this.createStatChart(_this.typeChart, 'Site Type Stats', 'searchType');
            _this.createStatChart(_this.orgChart, 'Site Organization Stats', 'orgName');
        });
        this._siteChartOptions = {
            credits: {
                enabled: false
            },
            chart: {
                type: 'scatter',
                zoomType: 'xy'
            },
            xAxis: {
                title: {
                    text: 'Activity Start Date'
                },
                startOnTick: true,
                endOnTick: true,
                showLastLabel: true,
                labels: {
                    formatter: function () {
                        var date = new Date(this.value);
                        return date.getFullYear();
                    }
                },
                type: 'datetime'
            },
            yAxis: {
                title: {
                    text: null
                }
            },
            legend: {
                floating: false,
                borderWidth: 1,
                margin: 5
            },
            plotOptions: {
                scatter: {
                    marker: {
                        radius: 5,
                        states: {
                            hover: {
                                enabled: true,
                                lineColor: 'rgb(100,100,100)'
                            }
                        }
                    },
                    tooltip: {
                        headerFormat: '<b>{point.x:%Y-%m-%d}<b><br>',
                        pointFormat: '{point.name}',
                        shared: true
                    }
                }
            },
            responsive: {
                rules: [{
                        condition: {
                            maxWidth: 500
                        },
                        chartOptions: {
                            legend: {},
                            yAxis: {
                                labels: {},
                                title: {
                                    text: null
                                }
                            },
                            subtitle: {
                                text: null
                            },
                            credits: {
                                enabled: false
                            }
                        }
                    }]
            }
        };
        this.siteChart = new highcharts__WEBPACK_IMPORTED_MODULE_1__["Chart"]('siteChart', this._siteChartOptions);
        this.siteChart2 = new highcharts__WEBPACK_IMPORTED_MODULE_1__["Chart"]('siteChart2', this._siteChartOptions);
        this.multSiteChart = new highcharts__WEBPACK_IMPORTED_MODULE_1__["Chart"]('multSiteChart', this._siteChartOptions);
        this.siteChart.setTitle({ text: 'Result Measure Value by Depth' });
        this.siteChart2.setTitle({ text: 'Result Measure Value by Measurement Type' });
        this.multSiteChart.setTitle({ text: 'Result Measure Value by Site' });
        this._typeChartOptions = {
            credits: {
                enabled: false
            },
            chart: {
                type: 'pie'
            },
            tooltip: {
                pointFormat: '{point.name}: {point.percentage:.1f}'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                    }
                }
            },
            responsive: {
                rules: [{
                        condition: {
                            maxWidth: 500
                        },
                        chartOptions: {
                            legend: {},
                            yAxis: {
                                labels: {},
                                title: {
                                    text: null
                                }
                            },
                            subtitle: {
                                text: null
                            },
                            credits: {
                                enabled: false
                            }
                        }
                    }]
            }
        };
        this.typeChart = new highcharts__WEBPACK_IMPORTED_MODULE_1__["Chart"]('typeChart', this._typeChartOptions);
        this.orgChart = new highcharts__WEBPACK_IMPORTED_MODULE_1__["Chart"]('orgChart', this._typeChartOptions);
        this.typeChart.setTitle({ text: 'Sites By Type' });
        this.orgChart.setTitle({ text: 'Sites By Organization' });
    }; // End NgOnInit
    DataviewComponent.prototype.getResultData = function () {
        var _this = this;
        this._loaderService.showDataLoad();
        this.dataLoading = true;
        var resultUrl = 'https://www.waterqualitydata.us/data/Result/search?mimeType=csv&countrycode=US';
        for (var _i = 0, _a = this.selectedSites; _i < _a.length; _i++) {
            var site = _a[_i];
            resultUrl += '&siteid=' + site;
        }
        for (var _b = 0, _c = this.characteristics; _b < _c.length; _b++) {
            var char = _c[_b];
            resultUrl += '&characteristicName=' + char;
        }
        this._http.get(resultUrl)
            .subscribe(function (csv) {
            _this.resultCsv = csv;
            _this.resultCsv = _this.resultCsv._body;
            _this.resultJson = _this.csvJSON(_this.resultCsv);
            _this.resultJson = JSON.parse(_this.resultJson);
            _this.showSiteData = true;
            _this.noData = false;
            _this.uniqueData = [];
            if (_this.resultJson.length > 0 && _this.selectedSites.length === 1) {
                _this.createSiteChart('ResultMeasure/MeasureUnitCode', _this.siteChart2);
                _this.createSiteChart('ActivityBottomDepthHeightMeasure/MeasureValue', _this.siteChart);
            }
            else if (_this.resultJson.length > 0 && _this.selectedSites.length > 1) {
                _this.createMultSiteChart(_this.multSiteChart);
            }
            else {
                _this.noData = true;
            }
            _this._loaderService.hideDataLoad();
            _this.dataLoading = false;
            // if duplicates, jitter the points, need to find a way of removing duplicates...
            if (_this.uniqueData.length < _this.resultJson.length) {
                _this.siteChart.options.plotOptions.scatter.jitter = { x: 0, y: 0.05 };
                _this.siteChart2.options.plotOptions.scatter.jitter = { x: 0, y: 0.05 };
            }
        });
    };
    DataviewComponent.prototype.csvJSON = function (csv) {
        var lines = csv.split('\n');
        var result = [];
        var headers = lines[0].split(',');
        for (var i = 1; i < lines.length; i++) {
            var obj = {};
            var currentline = lines[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
            for (var j = 0; j < headers.length; j++) {
                obj[headers[j]] = currentline[j].replace(/['"]+/g, '');
            }
            result.push(obj);
        }
        return JSON.stringify(result);
    };
    DataviewComponent.prototype.createSiteChart = function (char, chart) {
        while (chart.series.length > 0) {
            chart.series[0].remove(true);
        }
        var array = [];
        for (var i = 0; i < this.resultJson.length; i++) { // creating separate series based on properties
            var value = this.resultJson[i][char];
            if (value !== '' && array.indexOf(value) === -1) {
                array.push(value);
            }
            else if (value === '' && array.indexOf('N/A') === -1) {
                array.push('N/A');
            }
        }
        if (char === 'ActivityBottomDepthHeightMeasure/MeasureValue') {
            this.unitCodes = array;
        }
        for (var item = 0; item < array.length; item++) {
            var data = new Array();
            for (var _i = 0, _a = this.resultJson; _i < _a.length; _i++) {
                var result = _a[_i];
                var val = void 0;
                var currentValue = result[char];
                if (currentValue === array[item] || (currentValue === '' && array[item] === 'N/A')) {
                    if (/\d/.test(result.ResultMeasureValue)) {
                        val = Number(result.ResultMeasureValue);
                    }
                    else {
                        val = 0;
                    }
                    var date = result.ActivityStartDate.split('-');
                    date = Date.UTC(date[0], Number(date[1]) - 1, date[2]);
                    data.push({ x: date, y: val, name: val + ' ' + result['ResultMeasure/MeasureUnitCode'] });
                    if (JSON.stringify(this.uniqueData).indexOf(JSON.stringify([date, val])) === -1) {
                        this.uniqueData.push([date, val]);
                    }
                }
            }
            if (chart === this.siteChart) {
                chart.addSeries({ name: 'Depth: ' + array[item], data: data });
            }
            else {
                chart.addSeries({ name: array[item], data: data });
            }
        }
    };
    DataviewComponent.prototype.makeModalChart = function () {
        this.showModal = true;
        var self = this;
        setTimeout(function () {
            if (self.selectedSites.length === 1) {
                self.modalChart2 = new highcharts__WEBPACK_IMPORTED_MODULE_1__["Chart"]('modalChart2', self._siteChartOptions);
                self.modalChart2.setTitle({ text: 'Result Measure Value by Depth' });
                self.createSiteChart('ActivityBottomDepthHeightMeasure/MeasureValue', self.modalChart2);
                self.modalChart = new highcharts__WEBPACK_IMPORTED_MODULE_1__["Chart"]('modalChart', self._siteChartOptions);
                self.modalChart.setTitle({ text: 'Result Measure Value by Measurement Type' });
                self.createSiteChart('ResultMeasure/MeasureUnitCode', self.modalChart);
            }
            else {
                self.modalChart = new highcharts__WEBPACK_IMPORTED_MODULE_1__["Chart"]('modalChart', self._siteChartOptions);
                self.modalChart.setTitle({ text: 'Result Measure Value' });
                self.createMultSiteChart(self.modalChart);
                document.getElementById('modalChart2').innerHTML = '';
            }
            var table = document.getElementById('dataTable').cloneNode(true);
            var modalTable = document.getElementById('modalTable');
            modalTable.appendChild(table);
        }, 100);
    };
    DataviewComponent.prototype.createMultSiteChart = function (chart) {
        var _this = this;
        while (chart.series && chart.series.length > 0) {
            chart.series[0].remove(true);
        }
        this.selectedSites.forEach(function (site) {
            var val;
            var data = new Array();
            for (var _i = 0, _a = _this.resultJson; _i < _a.length; _i++) {
                var result = _a[_i];
                if (result.MonitoringLocationIdentifier === site) {
                    if (/\d/.test(result.ResultMeasureValue)) {
                        val = Number(result.ResultMeasureValue);
                    }
                    else {
                        val = 0;
                    }
                    var date = result.ActivityStartDate.split('-');
                    date = Date.UTC(date[0], Number(date[1]) - 1, date[2]);
                    if (result['ResultMeasure/MeasureUnitCode'] === 'ug/l') {
                        data.push({ x: date, y: val / 1000, name: val + ' ' + result['ResultMeasure/MeasureUnitCode'] });
                    }
                    else if (result['ResultMeasure/MeasureUnitCode'] === 'umol') {
                        data.push({ x: date, y: val / 4.31, name: val + ' ' + result['ResultMeasure/MeasureUnitCode'] });
                    }
                    else {
                        data.push({ x: date, y: val, name: val + ' ' + result['ResultMeasure/MeasureUnitCode'] });
                    }
                    if (JSON.stringify(_this.uniqueData).indexOf(JSON.stringify([date, val])) === -1) {
                        _this.uniqueData.push([date, val]);
                    }
                }
            }
            chart.addSeries({ name: site, data: data });
        });
    };
    DataviewComponent.prototype.createStatChart = function (chart, name, property) {
        var _this = this;
        while (chart.series.length > 0) {
            chart.series[0].remove(true);
        }
        var propData = [];
        this.siteFilterData[property].forEach(function (prop) {
            var count = _this.geojson.features.filter(function (feat) {
                return feat.properties[property] === prop;
            }).length;
            if (count > 0) {
                var perc = count / _this.geoJSONsiteCount * 100;
                propData.push({ name: prop, y: perc, sliced: true, selected: true });
            }
        });
        chart.addSeries({ name: name, colorByPoint: true, data: propData });
    };
    DataviewComponent.prototype.downloadFile = function () {
        var filename = 'result.csv';
        if (this.selectedSites.length === 1) {
            filename = this.selectedSites[0] + '.csv';
        }
        var blob = new Blob([this.resultCsv], { type: 'text/csv;charset=utf-8;' });
        if (navigator.msSaveBlob) { // IE 10+
            navigator.msSaveBlob(blob, filename);
        }
        else {
            var link = document.createElement('a');
            var url = URL.createObjectURL(blob);
            if (link.download !== undefined) { // feature detection
                // Browsers that support HTML5 download attribute
                link.setAttribute('href', url);
                link.setAttribute('download', filename);
                link.style.visibility = 'hidden';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
            else {
                window.open(url);
            }
        }
    };
    DataviewComponent.prototype.printReport = function () {
        window.print();
    };
    DataviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dataview',
            template: __webpack_require__(/*! ./dataview.component.html */ "./src/app/mainview/dataview/dataview.component.html"),
            styles: [__webpack_require__(/*! ./dataview.component.scss */ "./src/app/mainview/dataview/dataview.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_map_service__WEBPACK_IMPORTED_MODULE_2__["MapService"], _angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"], _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"]])
    ], DataviewComponent);
    return DataviewComponent;
}()); // END class



/***/ }),

/***/ "./src/app/mainview/mainview.module.ts":
/*!*********************************************!*\
  !*** ./src/app/mainview/mainview.module.ts ***!
  \*********************************************/
/*! exports provided: MainviewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainviewModule", function() { return MainviewModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map/map.component */ "./src/app/mainview/map/map.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/mainview/sidebar/sidebar.component.ts");
/* harmony import */ var _dataview_dataview_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dataview/dataview.component */ "./src/app/mainview/dataview/dataview.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var MainviewModule = /** @class */ (function () {
    function MainviewModule() {
    }
    MainviewModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_map_map_component__WEBPACK_IMPORTED_MODULE_2__["MapComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"], _dataview_dataview_component__WEBPACK_IMPORTED_MODULE_4__["DataviewComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"]],
            exports: [_map_map_component__WEBPACK_IMPORTED_MODULE_2__["MapComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"], _dataview_dataview_component__WEBPACK_IMPORTED_MODULE_4__["DataviewComponent"]]
        })
    ], MainviewModule);
    return MainviewModule;
}());



/***/ }),

/***/ "./src/app/mainview/map/map.component.html":
/*!*************************************************!*\
  !*** ./src/app/mainview/map/map.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"collapsible-header\">\r\n\r\n</div>\r\n<div id=\"mapWrapper\" [ngClass]=\"{ 'collapsed': collapsedMap }\">\r\n    <div id=\"map\"></div>\r\n    <!-- Collapse Map -->\r\n    <!-- <div id=\"collapseMap\" (click)=\"collapsedMap = true\">\r\n        <div>\r\n            <i class=\"far fa-collapse\"></i>\r\n            <b>Collapse Map</b>\r\n        </div>\r\n    </div> -->\r\n    <!-- Expand Map -->\r\n    <div id=\"toggleMap\" (click)=\"collapsedMap = !collapsedMap\">\r\n        <div>\r\n            <i class=\"far\" [ngClass]=\"{ 'fa-expand': collapsedMap, 'fa-minus-square': !collapsedMap }\"></i>\r\n            <b *ngIf=\"collapsedMap\">Expand Map</b>\r\n            <b *ngIf=\"!collapsedMap\">Collapse Map</b>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/mainview/map/map.component.scss":
/*!*************************************************!*\
  !*** ./src/app/mainview/map/map.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW52aWV3L21hcC9tYXAuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/mainview/map/map.component.ts":
/*!***********************************************!*\
  !*** ./src/app/mainview/map/map.component.ts ***!
  \***********************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_map_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/map.service */ "./src/app/shared/services/map.service.ts");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MapComponent = /** @class */ (function () {
    // public WQP: any;
    function MapComponent(_mapService) {
        this._mapService = _mapService;
    }
    MapComponent.prototype.ngOnInit = function () {
        var _this = this;
        // init map
        this._mapService.map = leaflet__WEBPACK_IMPORTED_MODULE_2__["map"]('map', {
            center: leaflet__WEBPACK_IMPORTED_MODULE_2__["latLng"](40.9, -73.0),
            zoom: 9,
            minZoom: 4,
            maxZoom: 19,
            renderer: leaflet__WEBPACK_IMPORTED_MODULE_2__["canvas"]()
        });
        // baseMaps
        this._mapService.map.addLayer(this._mapService.baseMaps[this._mapService.chosenBaseLayer]);
        // add empty feature group
        this._mapService.sitesLayer = leaflet__WEBPACK_IMPORTED_MODULE_2__["featureGroup"]().addTo(this._mapService.map);
        this._mapService.nwisLayer = leaflet__WEBPACK_IMPORTED_MODULE_2__["featureGroup"]().addTo(this._mapService.map);
        // add legend
        this._mapService.legend = new leaflet__WEBPACK_IMPORTED_MODULE_2__["Control"]({ position: 'bottomright' });
        this._mapService.legend.onAdd = function (map) {
            var div = leaflet__WEBPACK_IMPORTED_MODULE_2__["DomUtil"].create('div', 'info legend');
            var item = '<i class="site facility"></i>Facility<br>' +
                '<i class="site atmosphere"></i>Atmosphere<br>' +
                '<i class="site lake"></i>Lake, Reservoir, Impoundment<br>' +
                '<i class="site stream"></i>Stream<br>' +
                '<i class="site well"></i>Well<br>' +
                '<i class="site land"></i>Land<br>' +
                '<i class="site estuary"></i>Estuary<br>' +
                '<i class="site wetland"></i>Wetland<br>' +
                '<i class="site ocean"></i>Ocean';
            div.innerHTML = item;
            return div;
        };
        this._mapService.legend.addTo(this._mapService.map);
        /// NOT FINISHED
        this._mapService.map.on('load moveend zoomend', function (e) {
            // console.log('here',e)
            var bbox = _this._mapService.map
                .getBounds()
                .getSouthWest()
                .lng.toFixed(7) +
                ',' +
                _this._mapService.map
                    .getBounds()
                    .getSouthWest()
                    .lat.toFixed(7) +
                ',' +
                _this._mapService.map
                    .getBounds()
                    .getNorthEast()
                    .lng.toFixed(7) +
                ',' +
                _this._mapService.map
                    .getBounds()
                    .getNorthEast()
                    .lat.toFixed(7);
            // this._mapService.queryNWISrtGages(bbox).subscribe(results => console.log('results',results));
            if (e.target._zoom >= 15) {
                if (_this._mapService.markerClusters) {
                    _this._mapService.markerClusters.enableClustering();
                }
            }
            else {
                if (_this._mapService.markerClusters) {
                    _this._mapService.markerClusters.disableClustering();
                }
            }
        });
    };
    MapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(/*! ./map.component.html */ "./src/app/mainview/map/map.component.html"),
            styles: [__webpack_require__(/*! ./map.component.scss */ "./src/app/mainview/map/map.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_map_service__WEBPACK_IMPORTED_MODULE_1__["MapService"]])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/app/mainview/sidebar/sidebar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/mainview/sidebar/sidebar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<i\r\n  class=\"far\"\r\n  id=\"sidebarToggle\"\r\n  (click)=\"expandSidebar = !expandSidebar\"\r\n  [ngClass]=\"{ 'fa-bars': !expandSidebar, 'fa-times': expandSidebar }\"\r\n  ></i>\r\n\r\n<div id=\"sidebar\" [ngClass]=\"{ 'expanded': expandSidebar }\">\r\n\r\n\r\n  <!--  Sidebar Parameter Filters  -->\r\n  <div id=\"siteCount\"><b>{{geoJSONsiteCount}}</b> sites showing</div>\r\n\r\n\r\n  <!-- Scrolling sidebar content -->\r\n  <div class=\"sidebar-scroll\">\r\n\r\n\r\n    <!--  Sidebar Basemaps  -->\r\n    <div class=\"sidebar-header\" (click)=\"showBasemaps = !showBasemaps\" [ngClass]=\"{ expanded: showBasemaps }\">\r\n      <i class=\"fal fa-map\"></i>\r\n      <b><span>Basemaps</span></b>\r\n    </div>\r\n\r\n    <!-- Basemaps content -->\r\n    <div class=\"sidebar-content\" [ngClass]=\"{ expanded: showBasemaps }\">\r\n      <div id=\"sidebarBasemaps\">\r\n        <div\r\n          class=\"basemap\"\r\n          id=\"basemap1\"\r\n          (click)=\"toggleLayer('OpenStreetMap')\"\r\n          [ngClass]=\"{ active: chosenBaseLayer == 'OpenStreetMap' }\"\r\n        >\r\n          Streets\r\n        </div>\r\n        <div\r\n          class=\"basemap\"\r\n          id=\"basemap2\"\r\n          (click)=\"toggleLayer('Topo')\"\r\n          [ngClass]=\"{ active: chosenBaseLayer == 'Topo' }\"\r\n        >\r\n          Topographic\r\n        </div>\r\n        <div\r\n          class=\"basemap\"\r\n          id=\"basemap3\"\r\n          (click)=\"toggleLayer('CartoDB')\"\r\n          [ngClass]=\"{ active: chosenBaseLayer == 'CartoDB' }\"\r\n        >\r\n          CartoDB\r\n        </div>\r\n        <div\r\n          class=\"basemap\"\r\n          id=\"basemap4\"\r\n          (click)=\"toggleLayer('Terrain')\"\r\n          [ngClass]=\"{ active: chosenBaseLayer == 'Terrain' }\"\r\n        >\r\n          Terrain\r\n        </div>\r\n        <div\r\n          class=\"basemap\"\r\n          id=\"basemap5\"\r\n          (click)=\"toggleLayer('Satellite')\"\r\n          [ngClass]=\"{ active: chosenBaseLayer == 'Satellite' }\"\r\n        >\r\n          Satellite\r\n        </div>\r\n        <div\r\n          class=\"basemap\"\r\n          id=\"basemap5\"\r\n          (click)=\"toggleLayer('Gray')\"\r\n          [ngClass]=\"{ active: chosenBaseLayer == 'Gray' }\"\r\n        >\r\n          Gray\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"sidebar-header\" (click)=\"showParameterFilters = !showParameterFilters\" [ngClass]=\"{ expanded: showParameterFilters }\">\r\n      <i class=\"fal fa-filter\"></i>\r\n      <b><span>Parameter Filters</span></b>\r\n    </div>\r\n\r\n    <!-- Filters Parameter Content -->\r\n    <div class=\"sidebar-content\" [ngClass]=\"{ expanded: showParameterFilters }\">\r\n\r\n      <form *ngIf=\"parameterFilterData\" [formGroup]=\"parameterDropDownGroup\" id=\"sidebarParameterFilters\">\r\n\r\n        <!-- characteristic -->\r\n        <label for=\"characteristic\" class=\"multiselect-label\">Characteristic</label>\r\n        <ng-select \r\n          formControlName=\"characteristic\"\r\n          [items]=\"parameterFilterData.characteristics\"\r\n          [multiple]=\"true\"\r\n          bindLabel=\"name\"\r\n          placeholder=\"Select\">\r\n        </ng-select>\r\n\r\n      </form>\r\n\r\n    </div>\r\n\r\n    <!--  Sidebar Site Filters  -->\r\n\r\n    <div class=\"sidebar-header\" (click)=\"showSiteFilters = !showSiteFilters\" [ngClass]=\"{ expanded: showSiteFilters }\">\r\n      <i class=\"fal fa-sliders-v\"></i>\r\n      <b><span>Site Filters</span></b>\r\n    </div>\r\n    <!-- Filters Site Content -->\r\n      \r\n    <div class=\"sidebar-content\" [ngClass]=\"{ expanded: showSiteFilters }\">\r\n      <form *ngIf=\"siteFilterData\" [formGroup]=\"siteDropDownGroup\" id=\"sidebarSiteFilters\">\r\n\r\n        <!-- Huc8 -->\r\n        <label for=\"huc8\" class=\"multiselect-label\">Huc8</label>\r\n        <ng-select \r\n        formControlName=\"huc8\"\r\n          [items]=\"siteFilterData.huc8\"\r\n          [multiple]=\"true\"\r\n          bindLabel=\"name\"\r\n          placeholder=\"Select\">\r\n        </ng-select>\r\n\r\n        <!-- Org ID -->\r\n        <label for=\"orgId\" class=\"multiselect-label\">Organization Id</label>\r\n\r\n        <ng-select \r\n          formControlName=\"orgId\"\r\n          [items]=\"siteFilterData.orgId\"\r\n          [multiple]=\"true\"\r\n          bindLabel=\"name\"\r\n          placeholder=\"Select\">\r\n        </ng-select>\r\n\r\n        <!-- Org Name -->\r\n        <label for=\"orgName\" class=\"multiselect-label\">Organization Name</label>\r\n\r\n        <ng-select \r\n          formControlName=\"orgName\"\r\n          [items]=\"siteFilterData.orgName\"\r\n          [multiple]=\"true\"\r\n          bindLabel=\"name\"\r\n          placeholder=\"Select\">\r\n        </ng-select>\r\n\r\n        <!-- Data Provider -->\r\n        <label for=\"provider\" class=\"multiselect-label\">Data Provider</label>\r\n        <ng-select \r\n          formControlName=\"provider\"\r\n          [items]=\"siteFilterData.provider\"\r\n          [multiple]=\"true\"\r\n          bindLabel=\"name\"\r\n          placeholder=\"Select\">\r\n        </ng-select>\r\n\r\n        <!-- Data Provider -->\r\n        <label for=\"searchType\" class=\"multiselect-label\">Keyword</label>\r\n        <ng-select \r\n        formControlName=\"searchType\"\r\n          [items]=\"siteFilterData.searchType\"\r\n          [multiple]=\"true\"\r\n          bindLabel=\"name\"\r\n          placeholder=\"Select\">\r\n        </ng-select>\r\n\r\n        <label for=\"type\" class=\"multiselect-label\">Site Type</label>\r\n        <ng-select \r\n          formControlName=\"type\"\r\n          [items]=\"siteFilterData.type\"\r\n          [multiple]=\"true\"\r\n          bindLabel=\"name\"\r\n          placeholder=\"Select\">\r\n        </ng-select>\r\n\r\n      </form>\r\n\r\n      <button class=\"clearForm\" title=\"Clear All Selections\" (click)=\"clearForm()\">Clear Selections</button>\r\n\r\n    </div> <!-- End Sidebar Scroll -->\r\n  </div>\r\n\r\n\r\n</div>\r\n<!-- End Sidebar -->\r\n\r\n<!-- Sidebar lightbox for mobile -->\r\n<div id=\"sidebarLightbox\" [ngClass]=\"{ visible: expandSidebar }\" (click)=\"expandSidebar = false\"></div>"

/***/ }),

/***/ "./src/app/mainview/sidebar/sidebar.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/mainview/sidebar/sidebar.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Open+Sans:400,600,700|Poppins:300,400,600,700\");\n#sidebarToggle {\n  color: white;\n  display: none;\n  flex-direction: column;\n  justify-content: center;\n  transition: 0.2s;\n  font-size: 20px;\n  width: 24px;\n  text-align: center;\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  height: 54px;\n  width: 54px; }\n#sidebarToggle:hover, #sidebarToggle:active {\n    cursor: pointer;\n    opacity: 0.6;\n    transition: 0.2s; }\n@media only screen and (max-width: 1200px) {\n    #sidebarToggle {\n      display: flex; } }\n#sidebar .sidebar-header {\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 500;\n  font-size: 18px;\n  color: #101010;\n  letter-spacing: -0.3px;\n  display: flex;\n  box-sizing: border-box;\n  padding: 10px 15px; }\n#sidebar .sidebar-header i {\n    width: 30px;\n    height: 30px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center; }\n#sidebar .sidebar-header b {\n    display: flex;\n    justify-content: space-between;\n    flex-grow: 3; }\n#sidebar .sidebar-header b:after {\n      content: '\\f067';\n      font-family: 'Font Awesome 5 Pro';\n      right: 15px;\n      color: rgba(16, 16, 16, 0.2);\n      font-size: 16px;\n      display: flex;\n      flex-direction: column;\n      justify-content: center; }\n#sidebar .sidebar-header b span {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      flex-grow: 3; }\n#sidebar .sidebar-header.expanded b:after {\n    content: '\\f068'; }\n#sidebar .sidebar-header:hover {\n    cursor: pointer; }\n#sidebar .sidebar-header:hover b span {\n      text-decoration: underline; }\n#sidebar .sidebar-header:hover b:after {\n      color: #101010; }\n#sidebar .sidebar-content {\n  display: block;\n  box-sizing: border-box;\n  overflow: visible;\n  padding: 0 15px 0 45px;\n  display: none; }\n#sidebar .sidebar-content.expanded {\n    display: block; }\n#sidebar #sidebarBasemaps .basemap {\n  display: block;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 13px;\n  font-weight: 500;\n  box-sizing: border-box;\n  letter-spacing: -0.2px;\n  padding: 3px 0;\n  color: #101010; }\n#sidebar #sidebarBasemaps .basemap:hover {\n    cursor: pointer;\n    text-decoration: underline; }\n#sidebar #sidebarBasemaps .basemap.active {\n    color: #3E3BFB; }\n#sidebar #sidebarBasemaps .basemap.active:hover {\n      text-decoration: none; }\n#siteCount {\n  display: block;\n  text-align: center;\n  background-color: #3E3BFB;\n  box-sizing: border-box;\n  padding: 10px;\n  color: #fff;\n  font-size: 12px;\n  font-weight: 500;\n  margin: 0 auto;\n  font-family: \"Poppins\", sans-serif;\n  letter-spacing: -0.4px;\n  width: 280px;\n  z-index: 50; }\n#siteCount b {\n    font-weight: 600;\n    letter-spacing: -0.2px; }\n.clearForm {\n  margin-top: 15px; }\n#sidebar .multiselect-label {\n  position: relative;\n  top: 5px;\n  color: #101010; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbnZpZXcvc2lkZWJhci9jOlxcTllCYWNrdXBcXEdpdEh1YlxcTElRV0lEUy9zcmNcXGFwcFxcdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL21haW52aWV3L3NpZGViYXIvYzpcXE5ZQmFja3VwXFxHaXRIdWJcXExJUVdJRFMvc3JjXFxhcHBcXG1haW52aWV3XFxzaWRlYmFyXFxzaWRlYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLG9HQUFZO0FDR1o7RUFDSSxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixRQUFRO0VBQ1IsU0FBUztFQUNULFlBQVk7RUFDWixXQUFXLEVBQUE7QUFiZjtJQWlCUSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGdCQUFnQixFQUFBO0FBR3BCO0lBdEJKO01BdUJRLGFBQWEsRUFBQSxFQUVwQjtBQUdEO0VBSVEsa0NEZnVCO0VDZ0J2QixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGNEbENPO0VDbUNQLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQixFQUFBO0FBWDFCO0lBY1ksV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QixFQUFBO0FBbEJuQztJQXNCWSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLFlBQVksRUFBQTtBQXhCeEI7TUEyQmdCLGdCQUFnQjtNQUNoQixpQ0FBaUM7TUFDakMsV0FBVztNQUNYLDRCQUE0QjtNQUM1QixlQUFlO01BQ2YsYUFBYTtNQUNiLHNCQUFzQjtNQUN0Qix1QkFBdUIsRUFBQTtBQWxDdkM7TUFzQ2dCLGFBQWE7TUFDYixzQkFBc0I7TUFDdEIsdUJBQXVCO01BQ3ZCLFlBQVksRUFBQTtBQXpDNUI7SUFnRGdCLGdCQUFnQixFQUFBO0FBaERoQztJQXFEWSxlQUFlLEVBQUE7QUFyRDNCO01BeURvQiwwQkFBMEIsRUFBQTtBQXpEOUM7TUE2RG9CLGNEeEZMLEVBQUE7QUMyQmY7RUF1RVEsY0FBYztFQUNkLHNCQUFzQjtFQUd0QixpQkFBaUI7RUFDakIsc0JBQXNCO0VBR3RCLGFBQWEsRUFBQTtBQS9FckI7SUFxRlksY0FBYyxFQUFBO0FBckYxQjtFQWdHWSxjQUFjO0VBQ2Qsb0NEM0drQjtFQzRHbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxjRGxJRyxFQUFBO0FDMkJmO0lBMEdnQixlQUFlO0lBQ2YsMEJBQTBCLEVBQUE7QUEzRzFDO0lBK0dnQixjRHRJRixFQUFBO0FDdUJkO01Ba0hvQixxQkFBcUIsRUFBQTtBQWN6QztFQUNJLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIseUJEMUpVO0VDMkpWLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsV0RoS1E7RUNpS1IsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsa0NEckoyQjtFQ3NKM0Isc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixXQUFXLEVBQUE7QUFiZjtJQWdCUSxnQkFBZ0I7SUFDaEIsc0JBQXNCLEVBQUE7QUFLOUI7RUFDSSxnQkFBZ0IsRUFBQTtBQU9wQjtFQUNJLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsY0Q1TFcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21haW52aWV3L3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEZvbnRzXHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zOjQwMCw2MDAsNzAwfFBvcHBpbnM6MzAwLDQwMCw2MDAsNzAwJyk7XHJcblxyXG5cclxuLy8gVmFyaWFibGVzXHJcbiRibGFjazogIzEwMTAxMDtcclxuJHdoaXRlOiAjZmZmO1xyXG4kYmc6ICNGOUZBRkU7XHJcbiRyZWQ6ICNGMjNENDc7XHJcbiRibHVlOiAjM0UzQkZCO1xyXG4kcHJpbWFyeTogJGJsdWU7XHJcbiRncmV5OiAjRjhGN0Y4O1xyXG4kdGV4dDogZmFkZS1vdXQoJGJsYWNrLCAwLjEpO1xyXG4kc3VidGxlOiBmYWRlLW91dCgkYmxhY2ssIDAuNSk7XHJcblxyXG4kYm9yZGVyQ29sb3I6IGZhZGUtb3V0KCRibGFjaywgMC44NSk7XHJcbiRib3JkZXJSYWRpdXM6IDRweDtcclxuJGJvcmRlclJhZGl1c006IDhweDtcclxuJGJvcmRlclJhZGl1c0w6IDE2cHg7XHJcblxyXG4vLyBGb250c1xyXG4kcG9wcGluczogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4kc2FuczogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcblxyXG5cclxuJHRyYW5zaXRpb246IDAuMTVzO1xyXG4kYm9yZGVyUmFkaXVzOiA0cHg7XHJcblxyXG4vLyBIZWlnaHRzIGFuZCBtZWFzdXJlbWVudHNcclxuJHRvcEJhckhlaWdodDogNTRweDtcclxuXHJcblxyXG4vLyBSZXNwb25zaXZlbmVzc1xyXG4kZnVsbE1vYmlsZTogNDYwcHg7IiwiQGltcG9ydCAnLi4vLi4vdmFyaWFibGVzLnNjc3MnO1xyXG5cclxuLy8gTW9iaWxlIG1lbnUgdG9nZ2xlXHJcbi8vIE91dHNpZGUgc2lkZWJhclxyXG4jc2lkZWJhclRvZ2dsZXtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgd2lkdGg6IDI0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIGhlaWdodDogNTRweDtcclxuICAgIHdpZHRoOiA1NHB4O1xyXG5cclxuICAgICY6aG92ZXIsXHJcbiAgICAmOmFjdGl2ZXtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgb3BhY2l0eTogMC42O1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuMnM7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBTaWRlYmFyXHJcbiNzaWRlYmFye1xyXG4gICAgXHJcblxyXG4gICAgLnNpZGViYXItaGVhZGVye1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkcG9wcGlucztcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBjb2xvcjogJGJsYWNrO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4zcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuXHJcbiAgICAgICAgaXtcclxuICAgICAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBie1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMztcclxuXHJcbiAgICAgICAgICAgICY6YWZ0ZXJ7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnXFxmMDY3JztcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnRm9udCBBd2Vzb21lIDUgUHJvJztcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IGZhZGUtb3V0KCRibGFjaywgMC44KTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgZmxleC1ncm93OiAzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLmV4cGFuZGVke1xyXG5cclxuICAgICAgICAgICAgYjphZnRlcntcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdcXGYwNjgnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICAgICBie1xyXG4gICAgICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAmOmFmdGVye1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkYmxhY2s7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIENvbnRlbnQgQmxvY2tzXHJcbiAgICAvLyBFeHBhbmQgd2l0aCBjbGFzcyAuZXhwYW5kZWRcclxuICAgIC5zaWRlYmFyLWNvbnRlbnR7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAvLyBtYXgtaGVpZ2h0OiAwcHg7XHJcbiAgICAgICAgLy8gdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjE1cyAwLjE1cywgdHJhbnNmb3JtIDAuMTVzIDBzIGVhc2U7ICAgICAgICBcclxuICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICAgICAgICBwYWRkaW5nOiAwIDE1cHggMCA0NXB4O1xyXG4gICAgICAgIC8vIHRyYW5zZm9ybTogc2NhbGVZKDApO1xyXG4gICAgICAgIC8vIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG5cclxuICAgICAgICAmLmV4cGFuZGVke1xyXG4gICAgICAgICAgICAvLyB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMTVzIDBzLCB0cmFuc2Zvcm0gMC4xNXMgMC4xNXMgZWFzZTsgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBtYXgtaGVpZ2h0OiA3MDBweDtcclxuICAgICAgICAgICAgLy8gb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAvLyB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2lkZWJhciBCYXNlbWFwc1xyXG4gICAgLy8gU2lkZWJhciBCYXNlbWFwc1xyXG4gICAgLy8gU2lkZWJhciBCYXNlbWFwc1xyXG4gICAgI3NpZGViYXJCYXNlbWFwc3tcclxuXHJcbiAgICAgICAgLmJhc2VtYXB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJHNhbnM7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjJweDtcclxuICAgICAgICAgICAgcGFkZGluZzogM3B4IDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkYmxhY2s7XHJcblxyXG4gICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYuYWN0aXZle1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5O1xyXG5cclxuICAgICAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuLy8gQ3VzdG9tIFNpZGViYXIgRWxlbWVudHNcclxuLy8gQ3VzdG9tIFNpZGViYXIgRWxlbWVudHNcclxuLy8gQ3VzdG9tIFNpZGViYXIgRWxlbWVudHNcclxuI3NpdGVDb3VudHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBmb250LWZhbWlseTogJHBvcHBpbnM7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xyXG4gICAgd2lkdGg6IDI4MHB4O1xyXG4gICAgei1pbmRleDogNTA7XHJcblxyXG4gICAgYntcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4ycHg7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4uY2xlYXJGb3Jte1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG5cclxuXHJcbi8vIE11bHRpc2VsZWN0IExhYmVsc1xyXG4vLyBNdWx0aXNlbGVjdCBMYWJlbHNcclxuLy8gTXVsdGlzZWxlY3QgTGFiZWxzXHJcbiNzaWRlYmFyIC5tdWx0aXNlbGVjdC1sYWJlbHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogNXB4O1xyXG4gICAgY29sb3I6ICRibGFjaztcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/mainview/sidebar/sidebar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/mainview/sidebar/sidebar.component.ts ***!
  \*******************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_map_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/map.service */ "./src/app/shared/services/map.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(_mapService, formBuilder) {
        this._mapService = _mapService;
        this.formBuilder = formBuilder;
        this.showBasemaps = false;
        this.showSiteFilters = true;
        this.showParameterFilters = true;
        this.expandSidebar = false;
        this.cities = [];
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cities = [
            { id: 1, name: 'Vilnius' },
            { id: 2, name: 'Kaunas' },
            { id: 3, name: 'Pavilnys', disabled: true },
            { id: 4, name: 'Pabradė' },
            { id: 5, name: 'Klaipėda' }
        ];
        // for now we can keep this a static list but ultimately could pull from here in a service
        // https://www.waterqualitydata.us/Codes/Characteristicname?mimeType=xml
        this.parameterFilterData = {
            characteristics: ['Nitrate', 'Nitrogen']
        };
        this.defaultParameterFilter = 'Nitrate';
        this.parameterDropDownGroup = this.formBuilder.group({
            characteristic: [this.defaultParameterFilter]
            // characteristic: [[]]
        });
        this.parameterDropDownGroup.get('characteristic').setValue([this.defaultParameterFilter]);
        this.siteDropDownGroup = this.formBuilder.group({
            huc8: [[]],
            location: [[]],
            name: [[]],
            orgId: [[]],
            orgName: [[]],
            provider: [[]],
            searchType: [[]],
            type: [[]]
        });
        // this is the main data request
        this._mapService.getData().subscribe(function (response) {
            console.log(response);
            _this.siteFilterData = response;
            _this._mapService.addToSitesLayer(_this._mapService.geoJson);
            _this.geoJSONsiteCount = _this._mapService.geoJson.totalFeatures;
        });
        // set up filter listeners
        this.onChanges();
    };
    SidebarComponent.prototype.onItemSelect = function (item) {
        console.log(item);
    };
    SidebarComponent.prototype.onSelectAll = function (items) {
        console.log(items);
    };
    SidebarComponent.prototype.onChanges = function () {
        var _this = this;
        // requery on wfs data on any parameter filter dropdown change
        this.parameterDropDownGroup.valueChanges.subscribe(function (selections) {
            _this._mapService._characteristicFilterSubject.next(selections.characteristic);
            _this.reQuery();
        });
        // on site dropdown change just re-filter geojson
        this.siteDropDownGroup.valueChanges.subscribe(function (selections) {
            _this.filterGeoJSON(selections);
        });
    };
    SidebarComponent.prototype.reQuery = function () {
        var _this = this;
        // pull values from form
        var characteristic = this.parameterDropDownGroup.get('characteristic').value.join('|');
        // update URL params
        this._mapService.URLparams.SEARCHPARAMS =
            this._mapService.URLparams.SEARCHPARAMS.split('characteristicName:')[0] + 'characteristicName:' + characteristic;
        // issue new request with updated URL params
        this._mapService.getData().subscribe(function (response) {
            // repopulate site filter dropdowns
            _this.siteFilterData = response;
            // clearForm function clears layer and readds geojson
            _this.clearForm();
        });
    };
    SidebarComponent.prototype.filterGeoJSON = function (selections) {
        var filterJson;
        // console.log("dropdown changed: ", selections);
        this._mapService.sitesLayer.clearLayers();
        // make copy of geojson
        filterJson = JSON.parse(JSON.stringify(this._mapService.geoJson));
        filterJson.totalFeatures = 0;
        filterJson.features = [];
        // main loop over all features
        this._mapService.geoJson.features.forEach(function (feature) {
            // assume we have a match for this feature until proven otherwise
            var match = true;
            // need to check if the site matches all the selected values
            for (var selection in selections) {
                // make sure this selection has a value
                if (selections[selection].length > 0) {
                    // check if this feature DOESN'T MATCH the selection
                    if (selections[selection].indexOf(feature.properties[selection]) === -1) {
                        // doesnt meet this selection so set flag to false
                        match = false;
                    }
                }
            }
            // if we still have a match, its a keeper
            if (match) {
                filterJson.features.push(feature);
            }
        });
        filterJson.totalFeatures = filterJson.features.length;
        this.geoJSONsiteCount = filterJson.totalFeatures;
        // console.log('new json length',filterJson.totalFeatures);
        this._mapService.addToSitesLayer(filterJson);
    };
    SidebarComponent.prototype.clearForm = function () {
        var _this = this;
        // reset values to empty arrays if set
        Object.keys(this.siteDropDownGroup.controls).forEach(function (key) {
            if (_this.siteDropDownGroup.get(key).value.length > 0) {
                _this.siteDropDownGroup.get(key).setValue([]);
            }
        });
        this._mapService.sitesLayer.clearLayers();
        // set filtergeoJson back to original
        this._mapService.filterJson = this._mapService.geoJson;
        this.geoJSONsiteCount = this._mapService.geoJson.totalFeatures;
        this._mapService.addToSitesLayer(this._mapService.filterJson);
    };
    // called from basemap button click
    SidebarComponent.prototype.toggleLayer = function (newVal) {
        this._mapService.chosenBaseLayer = newVal;
        this._mapService.map.removeLayer(this._mapService.baseMaps['OpenStreetMap']);
        this._mapService.map.removeLayer(this._mapService.baseMaps['Topo']);
        this._mapService.map.removeLayer(this._mapService.baseMaps['Terrain']);
        this._mapService.map.removeLayer(this._mapService.baseMaps['Satellite']);
        this._mapService.map.removeLayer(this._mapService.baseMaps['Gray']);
        this._mapService.map.addLayer(this._mapService.baseMaps[newVal]);
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/mainview/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/mainview/sidebar/sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_map_service__WEBPACK_IMPORTED_MODULE_2__["MapService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/loader/dataloader.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/loader/dataloader.component.ts ***!
  \******************************************************************/
/*! exports provided: DataLoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataLoaderComponent", function() { return DataLoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/loader.service */ "./src/app/shared/services/loader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataLoaderComponent = /** @class */ (function () {
    function DataLoaderComponent(_loaderService) {
        this._loaderService = _loaderService;
        this.show = false;
    }
    DataLoaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        // subscription to update the class on the div to show/hide the div
        this.subscription = this._loaderService.dataloaderState.subscribe(function (state) {
            _this.show = state;
        });
    };
    DataLoaderComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    DataLoaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dataloader-div',
            template: "\n        <div [class.dataloader-hidden]=\"!show\">\n            <div class=\"data-loader\" id=\"data-loader\"></div>\n        </div>\n    ",
            styles: [__webpack_require__(/*! ./loader.component.scss */ "./src/app/shared/components/loader/loader.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_loader_service__WEBPACK_IMPORTED_MODULE_1__["LoaderService"]])
    ], DataLoaderComponent);
    return DataLoaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/loader/loader.component.html":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/loader/loader.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [class.loader-hidden]=\"!show\">\r\n    <div class=\"page-loader\" id=\"page-loader\"></div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shared/components/loader/loader.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/loader/loader.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loader-hidden {\n  visibility: hidden; }\n\n.sideloader-hidden {\n  visibility: hidden; }\n\n.loader-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  z-index: 500000; }\n\n.page-loader {\n  position: fixed !important;\n  width: 100%;\n  height: 100%;\n  opacity: 1;\n  z-index: 5000;\n  background-color: rgba(0, 0, 30, 0.6);\n  background-image: url(\"https://wim.usgs.gov/website-assets/branding/usgsanimated.svg\");\n  display: block !important;\n  background-repeat: no-repeat;\n  background-size: 120px auto;\n  background-position: center center; }\n\n.page-loader:after {\n    content: 'Loading...';\n    position: fixed;\n    top: 64%;\n    font-size: 22px;\n    color: white;\n    width: 100%;\n    text-align: center;\n    z-index: 5001; }\n\n.side-loader {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 5000;\n  /*margin-left: -20px;\r\n    margin-top: -20px;*/\n  opacity: 1;\n  background-color: rgba(0, 0, 30, 0.6);\n  background-image: url(https://wim.usgs.gov/website-assets/branding/usgsanimated.svg);\n  background-repeat: no-repeat;\n  background-size: 120px auto;\n  background-position: center 50px;\n  min-height: 715px; }\n\n.side-loader:after {\n    display: block;\n    content: 'Loading...';\n    width: 100%;\n    text-align: center;\n    font-size: 18px;\n    color: white;\n    box-sizing: border-box;\n    padding-top: 20px;\n    font-weight: 400; }\n\n#dataLoader {\n  width: 100%;\n  height: 100%;\n  display: block;\n  top: 0;\n  left: 0;\n  position: absolute;\n  z-index: 1; }\n\n.dataloader-hidden {\n  visibility: hidden; }\n\n.data-loader {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 5000;\n  /*margin-left: -20px;\r\n    margin-top: -20px;*/\n  opacity: 1;\n  background-color: rgba(0, 0, 30, 0.8);\n  background-image: url(https://wim.usgs.gov/website-assets/branding/usgsanimated.svg);\n  background-repeat: no-repeat;\n  background-size: 120px auto;\n  background-position: center 50px;\n  min-height: 715px; }\n\n.data-loader:after {\n    display: block;\n    content: 'Loading...';\n    width: 100%;\n    text-align: center;\n    font-size: 18px;\n    color: white;\n    box-sizing: border-box;\n    padding-top: 20px;\n    font-weight: 400; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbG9hZGVyL2M6XFxOWUJhY2t1cFxcR2l0SHViXFxMSVFXSURTL3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXGxvYWRlclxcbG9hZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksa0JBQWtCO0VBQ2xCLFdBQVU7RUFDVixZQUFZO0VBQ1osTUFBSztFQUNMLE9BQU87RUFDUCxlQUFlLEVBQUE7O0FBRW5CO0VBQ0ksMEJBQXlCO0VBQ3pCLFdBQVU7RUFDVixZQUFZO0VBQ1osVUFBVTtFQUNWLGFBQWE7RUFDYixxQ0FBa0M7RUFDbEMsc0ZBQXFGO0VBQ3JGLHlCQUF5QjtFQUN6Qiw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLGtDQUFrQyxFQUFBOztBQVh0QztJQWNRLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsUUFBUTtJQUNSLGVBQWU7SUFDZixZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQixhQUFhLEVBQUE7O0FBS3JCO0VBQ0ksa0JBQWtCO0VBQ2xCLFdBQVU7RUFDVixZQUFZO0VBQ1osYUFBYTtFQUNiO3VCQ0htQjtFREtuQixVQUFVO0VBQ1YscUNBQWtDO0VBQ2xDLG9GQUFvRjtFQUNwRiw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLGdDQUFnQztFQUNoQyxpQkFBaUIsRUFBQTs7QUFickI7SUFnQlEsY0FBYztJQUNkLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixnQkFBZ0IsRUFBQTs7QUFTeEI7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7RUFDZCxNQUFNO0VBQ04sT0FBTztFQUNQLGtCQUFrQjtFQUNsQixVQUFVLEVBQUE7O0FBRWQ7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxrQkFBa0I7RUFDbEIsV0FBVTtFQUNWLFlBQVk7RUFDWixhQUFhO0VBQ2I7dUJDWm1CO0VEY25CLFVBQVU7RUFDVixxQ0FBa0M7RUFDbEMsb0ZBQW9GO0VBQ3BGLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0IsZ0NBQWdDO0VBQ2hDLGlCQUFpQixFQUFBOztBQWJyQjtJQWdCUSxjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbG9hZGVyL2xvYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2FkZXItaGlkZGVuIHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG4uc2lkZWxvYWRlci1oaWRkZW4ge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcbi5sb2FkZXItb3ZlcmxheSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdG9wOjA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgei1pbmRleDogNTAwMDAwO1xyXG59XHJcbi5wYWdlLWxvYWRlciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB6LWluZGV4OiA1MDAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMzAsMC42KTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL3dpbS51c2dzLmdvdi93ZWJzaXRlLWFzc2V0cy9icmFuZGluZy91c2dzYW5pbWF0ZWQuc3ZnJyk7XHJcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTIwcHggYXV0bztcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcblxyXG4gICAgJjphZnRlcntcclxuICAgICAgICBjb250ZW50OiAnTG9hZGluZy4uLic7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHRvcDogNjQlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHotaW5kZXg6IDUwMDE7XHJcbiAgICAgIH1cclxufVxyXG5cclxuXHJcbi5zaWRlLWxvYWRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgei1pbmRleDogNTAwMDtcclxuICAgIC8qbWFyZ2luLWxlZnQ6IC0yMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTIwcHg7Ki9cclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwzMCwwLjYpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vd2ltLnVzZ3MuZ292L3dlYnNpdGUtYXNzZXRzL2JyYW5kaW5nL3VzZ3NhbmltYXRlZC5zdmcpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTIwcHggYXV0bztcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciA1MHB4O1xyXG4gICAgbWluLWhlaWdodDogNzE1cHg7XHJcblxyXG4gICAgJjphZnRlcntcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBjb250ZW50OiAnTG9hZGluZy4uLic7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLy8gRGF0YSBMb2FkZXJcclxuLy8gRGF0YSBMb2FkZXJcclxuLy8gRGF0YSBMb2FkZXJcclxuXHJcbiNkYXRhTG9hZGVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG59XHJcbi5kYXRhbG9hZGVyLWhpZGRlbiB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcbi5kYXRhLWxvYWRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgei1pbmRleDogNTAwMDtcclxuICAgIC8qbWFyZ2luLWxlZnQ6IC0yMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTIwcHg7Ki9cclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwzMCwwLjgpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vd2ltLnVzZ3MuZ292L3dlYnNpdGUtYXNzZXRzL2JyYW5kaW5nL3VzZ3NhbmltYXRlZC5zdmcpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTIwcHggYXV0bztcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciA1MHB4O1xyXG4gICAgbWluLWhlaWdodDogNzE1cHg7XHJcbiAgICBcclxuICAgICY6YWZ0ZXJ7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgY29udGVudDogJ0xvYWRpbmcuLi4nO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIH1cclxufSIsIi5sb2FkZXItaGlkZGVuIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuOyB9XG5cbi5zaWRlbG9hZGVyLWhpZGRlbiB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjsgfVxuXG4ubG9hZGVyLW92ZXJsYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogNTAwMDAwOyB9XG5cbi5wYWdlLWxvYWRlciB7XG4gIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvcGFjaXR5OiAxO1xuICB6LWluZGV4OiA1MDAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDMwLCAwLjYpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL3dpbS51c2dzLmdvdi93ZWJzaXRlLWFzc2V0cy9icmFuZGluZy91c2dzYW5pbWF0ZWQuc3ZnXCIpO1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEyMHB4IGF1dG87XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7IH1cbiAgLnBhZ2UtbG9hZGVyOmFmdGVyIHtcbiAgICBjb250ZW50OiAnTG9hZGluZy4uLic7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogNjQlO1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHotaW5kZXg6IDUwMDE7IH1cblxuLnNpZGUtbG9hZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiA1MDAwO1xuICAvKm1hcmdpbi1sZWZ0OiAtMjBweDtcclxuICAgIG1hcmdpbi10b3A6IC0yMHB4OyovXG4gIG9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMzAsIDAuNik7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL3dpbS51c2dzLmdvdi93ZWJzaXRlLWFzc2V0cy9icmFuZGluZy91c2dzYW5pbWF0ZWQuc3ZnKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMjBweCBhdXRvO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgNTBweDtcbiAgbWluLWhlaWdodDogNzE1cHg7IH1cbiAgLnNpZGUtbG9hZGVyOmFmdGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjb250ZW50OiAnTG9hZGluZy4uLic7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBmb250LXdlaWdodDogNDAwOyB9XG5cbiNkYXRhTG9hZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxOyB9XG5cbi5kYXRhbG9hZGVyLWhpZGRlbiB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjsgfVxuXG4uZGF0YS1sb2FkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IDUwMDA7XG4gIC8qbWFyZ2luLWxlZnQ6IC0yMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTIwcHg7Ki9cbiAgb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAzMCwgMC44KTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vd2ltLnVzZ3MuZ292L3dlYnNpdGUtYXNzZXRzL2JyYW5kaW5nL3VzZ3NhbmltYXRlZC5zdmcpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEyMHB4IGF1dG87XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciA1MHB4O1xuICBtaW4taGVpZ2h0OiA3MTVweDsgfVxuICAuZGF0YS1sb2FkZXI6YWZ0ZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbnRlbnQ6ICdMb2FkaW5nLi4uJztcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared/components/loader/loader.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/loader/loader.component.ts ***!
  \**************************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/loader.service */ "./src/app/shared/services/loader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoaderComponent = /** @class */ (function () {
    function LoaderComponent(_loaderService) {
        this._loaderService = _loaderService;
        this.show = true; // start
    }
    LoaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this._loaderService.loaderState.subscribe(function (state) {
            _this.show = state;
        });
    };
    LoaderComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    LoaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loading-screen',
            template: __webpack_require__(/*! ./loader.component.html */ "./src/app/shared/components/loader/loader.component.html"),
            styles: [__webpack_require__(/*! ./loader.component.scss */ "./src/app/shared/components/loader/loader.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_loader_service__WEBPACK_IMPORTED_MODULE_1__["LoaderService"]])
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/summary/summary.component.html":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/summary/summary.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field class=\"filter\">\r\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n</mat-form-field>\r\n<div class=\"example-container mat-elevation-z8\">\r\n    <mat-table #summariesTable=\"matSort\" [dataSource]=\"dataSource\" matSort>\r\n        <!--org_name-->\r\n        <ng-container matColumnDef=\"org_name\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Organization Name</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let sum\">{{sum.org_name}}</mat-cell>\r\n        </ng-container>\r\n\r\n        <!--last_submit-->\r\n        <ng-container matColumnDef=\"last_submit\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Last Data Submission Date</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let sum\">{{sum.last_submit | date: 'MM-dd-yyyy'}}</mat-cell>\r\n        </ng-container>\r\n\r\n        <!--num_samples-->\r\n        <ng-container matColumnDef=\"num_samples\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Total Samples Submitted</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let sum\">{{sum.num_samples}}</mat-cell>\r\n        </ng-container>\r\n\r\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n        <mat-row *matRowDef=\"let sum; columns: displayedColumns\"></mat-row>\r\n    </mat-table>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shared/components/summary/summary.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/summary/summary.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3N1bW1hcnkvc3VtbWFyeS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/shared/components/summary/summary.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/summary/summary.component.ts ***!
  \****************************************************************/
/*! exports provided: SummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryComponent", function() { return SummaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_summaries_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/summaries.service */ "./src/app/shared/services/summaries.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SummaryComponent = /** @class */ (function () {
    function SummaryComponent(_summariesService) {
        this._summariesService = _summariesService;
        this.displayedColumns = ['org_name', 'last_submit', 'num_samples'];
    }
    SummaryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._summariesService.readSumFile();
        this._summariesService.SummaryData.subscribe(function (sum_data) {
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](sum_data);
            _this.dataSource.sort = _this.sort;
            _this.dataSource.sortingDataAccessor = function (item, property) {
                switch (property) {
                    case 'last_submit':
                        return new Date(item.last_submit);
                    default:
                        return item[property];
                }
            };
        });
    };
    SummaryComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], SummaryComponent.prototype, "sort", void 0);
    SummaryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-summary',
            template: __webpack_require__(/*! ./summary.component.html */ "./src/app/shared/components/summary/summary.component.html"),
            styles: [__webpack_require__(/*! ./summary.component.scss */ "./src/app/shared/components/summary/summary.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_summaries_service__WEBPACK_IMPORTED_MODULE_1__["SummariesService"]])
    ], SummaryComponent);
    return SummaryComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/tab/tab.component.html":
/*!**********************************************************!*\
  !*** ./src/app/shared/components/tab/tab.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"!active\" class=\"pane\">\r\n    <ng-content></ng-content>\r\n</div>"

/***/ }),

/***/ "./src/app/shared/components/tab/tab.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/shared/components/tab/tab.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pane {\n  box-sizing: border-box;\n  padding: 0 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdGFiL2M6XFxOWUJhY2t1cFxcR2l0SHViXFxMSVFXSURTL3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXHRhYlxcdGFiLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3RhYi90YWIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFuZXtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHBhZGRpbmc6IDAgMjBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/shared/components/tab/tab.component.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/components/tab/tab.component.ts ***!
  \********************************************************/
/*! exports provided: TabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabComponent", function() { return TabComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TabComponent = /** @class */ (function () {
    function TabComponent() {
        this.active = false;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('tabTitle'),
        __metadata("design:type", String)
    ], TabComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TabComponent.prototype, "active", void 0);
    TabComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'tab',
            template: __webpack_require__(/*! ./tab.component.html */ "./src/app/shared/components/tab/tab.component.html"),
            styles: [__webpack_require__(/*! ./tab.component.scss */ "./src/app/shared/components/tab/tab.component.scss")]
        })
    ], TabComponent);
    return TabComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/tabs/tabs.component.html":
/*!************************************************************!*\
  !*** ./src/app/shared/components/tabs/tabs.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"tab-ul\">\r\n    <li *ngFor=\"let tab of tabs\" (click)=\"selectTab(tab)\" [class.active]=\"tab.active\">\r\n      <a href=\"#\">{{tab.title}}</a>\r\n    </li>\r\n  </ul>\r\n  <ng-content></ng-content>\r\n"

/***/ }),

/***/ "./src/app/shared/components/tabs/tabs.component.scss":
/*!************************************************************!*\
  !*** ./src/app/shared/components/tabs/tabs.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Open+Sans:400,600,700|Poppins:300,400,600,700\");\n.tab-close {\n  color: gray;\n  text-align: right;\n  cursor: pointer; }\n.tab-ul {\n  list-style: none;\n  width: 100%;\n  padding: 0 20px 10px 20px;\n  box-sizing: border-box;\n  margin: 0;\n  display: flex;\n  min-height: -webkit-fit-content;\n  min-height: -moz-fit-content;\n  min-height: fit-content; }\n.tab-ul li {\n    margin: 0 10px 0 0; }\n.tab-ul li a {\n      transition: 0.15s;\n      font-size: 14px;\n      box-sizing: border-box;\n      padding: 6px 0;\n      font-family: \"Open Sans\", sans-serif;\n      font-weight: 600;\n      letter-spacing: -0.3px;\n      text-decoration: none;\n      color: rgba(16, 16, 16, 0.5);\n      transition: 0.15s; }\n.tab-ul li a:hover {\n        text-decoration: underline;\n        color: #101010;\n        transition: 0.15s; }\n.tab-ul li.active a {\n      color: #3E3BFB;\n      transition: 0.15s;\n      text-decoration: underline; }\n.tab-ul li.active a:hover {\n        color: #3E3BFB; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdGFicy9jOlxcTllCYWNrdXBcXEdpdEh1YlxcTElRV0lEUy9zcmNcXGFwcFxcdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3RhYnMvYzpcXE5ZQmFja3VwXFxHaXRIdWJcXExJUVdJRFMvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcdGFic1xcdGFicy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxvR0FBWTtBQ0NaO0VBQ0ksV0FBVztFQUNYLGlCQUFpQjtFQUNqQixlQUFlLEVBQUE7QUFHakI7RUFDTSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsU0FBUztFQUNULGFBQWE7RUFDYiwrQkFBdUI7RUFBdkIsNEJBQXVCO0VBQXZCLHVCQUF1QixFQUFBO0FBUDdCO0lBV1Usa0JBQWtCLEVBQUE7QUFYNUI7TUFjYyxpQkRHRTtNQ0ZGLGVBQWU7TUFDZixzQkFBc0I7TUFDdEIsY0FBYztNQUNkLG9DREpjO01DS2QsZ0JBQWdCO01BQ2hCLHNCQUFzQjtNQUN0QixxQkFBcUI7TUFDckIsNEJBQTRCO01BQzVCLGlCRE5FLEVBQUE7QUNqQmhCO1FBMEJrQiwwQkFBMEI7UUFDMUIsY0Q5Qkw7UUMrQkssaUJEWEYsRUFBQTtBQ2pCaEI7TUFtQ2tCLGNEbENOO01DbUNNLGlCRG5CRjtNQ29CRSwwQkFBMEIsRUFBQTtBQXJDNUM7UUF3Q3NCLGNEdkNWLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy90YWJzL3RhYnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBGb250c1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2Fuczo0MDAsNjAwLDcwMHxQb3BwaW5zOjMwMCw0MDAsNjAwLDcwMCcpO1xyXG5cclxuXHJcbi8vIFZhcmlhYmxlc1xyXG4kYmxhY2s6ICMxMDEwMTA7XHJcbiR3aGl0ZTogI2ZmZjtcclxuJGJnOiAjRjlGQUZFO1xyXG4kcmVkOiAjRjIzRDQ3O1xyXG4kYmx1ZTogIzNFM0JGQjtcclxuJHByaW1hcnk6ICRibHVlO1xyXG4kZ3JleTogI0Y4RjdGODtcclxuJHRleHQ6IGZhZGUtb3V0KCRibGFjaywgMC4xKTtcclxuJHN1YnRsZTogZmFkZS1vdXQoJGJsYWNrLCAwLjUpO1xyXG5cclxuJGJvcmRlckNvbG9yOiBmYWRlLW91dCgkYmxhY2ssIDAuODUpO1xyXG4kYm9yZGVyUmFkaXVzOiA0cHg7XHJcbiRib3JkZXJSYWRpdXNNOiA4cHg7XHJcbiRib3JkZXJSYWRpdXNMOiAxNnB4O1xyXG5cclxuLy8gRm9udHNcclxuJHBvcHBpbnM6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuJHNhbnM6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG5cclxuXHJcbiR0cmFuc2l0aW9uOiAwLjE1cztcclxuJGJvcmRlclJhZGl1czogNHB4O1xyXG5cclxuLy8gSGVpZ2h0cyBhbmQgbWVhc3VyZW1lbnRzXHJcbiR0b3BCYXJIZWlnaHQ6IDU0cHg7XHJcblxyXG5cclxuLy8gUmVzcG9uc2l2ZW5lc3NcclxuJGZ1bGxNb2JpbGU6IDQ2MHB4OyIsIkBpbXBvcnQgJy4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzJztcclxuXHJcbi50YWItY2xvc2Uge1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gIC50YWItdWwge1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZzogMCAyMHB4IDEwcHggMjBweDtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IGZpdC1jb250ZW50O1xyXG5cclxuXHJcbiAgICAgICAgbGl7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAxMHB4IDAgMDtcclxuXHJcbiAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA2cHggMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkc2FucztcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuM3B4O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IGZhZGUtb3V0KCRibGFjaywgMC41KTtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xyXG5cclxuICAgICAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRibGFjaztcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJi5hY3RpdmV7XHJcblxyXG4gICAgICAgICAgICAgICAgYXtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGJsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogJHRyYW5zaXRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkYmx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared/components/tabs/tabs.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/components/tabs/tabs.component.ts ***!
  \**********************************************************/
/*! exports provided: TabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsComponent", function() { return TabsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tab_tab_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tab/tab.component */ "./src/app/shared/components/tab/tab.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TabsComponent = /** @class */ (function () {
    function TabsComponent() {
    }
    TabsComponent.prototype.ngAfterContentInit = function () {
        var activeTabs = this.tabs.filter(function (tab) { return tab.active; });
        // set initial tab
        if (activeTabs.length === 0) {
            this.selectTab(this.tabs.first);
        }
        // set initial tab to other than first
        /* if (activeTabs.length === 0){
          this.selectTab(this.tabs.filter((tab) => tab.title == "test2"));

        } */
    };
    TabsComponent.prototype.selectTab = function (tab) {
        this.tabs.toArray().forEach(function (_tab) { return (_tab.active = false); });
        tab.active = true;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"])(_tab_tab_component__WEBPACK_IMPORTED_MODULE_1__["TabComponent"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], TabsComponent.prototype, "tabs", void 0);
    TabsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'tabs',
            template: __webpack_require__(/*! ./tabs.component.html */ "./src/app/shared/components/tabs/tabs.component.html"),
            styles: [__webpack_require__(/*! ./tabs.component.scss */ "./src/app/shared/components/tabs/tabs.component.scss")]
        })
    ], TabsComponent);
    return TabsComponent;
}());



/***/ }),

/***/ "./src/app/shared/services/loader.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/loader.service.ts ***!
  \***************************************************/
/*! exports provided: LoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderService", function() { return LoaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoaderService = /** @class */ (function () {
    function LoaderService() {
        this._loaderSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.loaderState = this._loaderSubject.asObservable();
        this._dataloaderSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.dataloaderState = this._dataloaderSubject.asObservable();
    }
    LoaderService.prototype.showFullPageLoad = function () {
        this._loaderSubject.next(true);
    };
    LoaderService.prototype.hideFullPageLoad = function () {
        this._loaderSubject.next(false);
    };
    LoaderService.prototype.showDataLoad = function () {
        this._dataloaderSubject.next(true);
    };
    LoaderService.prototype.hideDataLoad = function () {
        this._dataloaderSubject.next(false);
    };
    LoaderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], LoaderService);
    return LoaderService;
}());



/***/ }),

/***/ "./src/app/shared/services/map.service.ts":
/*!************************************************!*\
  !*** ./src/app/shared/services/map.service.ts ***!
  \************************************************/
/*! exports provided: MapService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapService", function() { return MapService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var leaflet_markercluster__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! leaflet.markercluster */ "./node_modules/leaflet.markercluster/dist/leaflet.markercluster-src.js");
/* harmony import */ var leaflet_markercluster__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(leaflet_markercluster__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var leaflet_markercluster_freezable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! leaflet.markercluster.freezable */ "./node_modules/leaflet.markercluster.freezable/dist/leaflet.markercluster.freezable.js");
/* harmony import */ var leaflet_markercluster_freezable__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(leaflet_markercluster_freezable__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MapService = /** @class */ (function () {
    function MapService(_http, _loaderService) {
        this._http = _http;
        this._loaderService = _loaderService;
        this.highlightMarkers = [];
        this.geoJsonURL = 'https://www.waterqualitydata.us/ogcservices/wfs/';
        this.URLparams = {
            request: 'GetFeature',
            service: 'wfs',
            version: '2.0.0',
            typeNames: 'wqp_sites',
            SEARCHPARAMS: 'countrycode:US;statecode:US:36;countycode:US:36:059|US:36:103;characteristicName:Nitrate',
            outputFormat: 'application/json'
        };
        this._selectedSiteSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._selectMultSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._characteristicFilterSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('Nitrate');
        this._siteStatsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._siteChangeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.chosenBaseLayer = 'Topo';
        this.baseMaps = {
            // {s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png
            OpenStreetMap: L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 20,
                zIndex: 1,
                attribution: 'Imagery from <a href="https://giscience.uni-hd.de/">GIScience Research Group @ University of Heidelberg</a>' +
                    '&mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }),
            Topo: L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
                zIndex: 1,
                attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL,' +
                    'Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
            }),
            CartoDB: L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
                zIndex: 1,
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; ' +
                    '<a href="https://cartodb.com/attributions">CartoDB</a>'
            }),
            Satellite: L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
                zIndex: 1,
                attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, ' +
                    'and the GIS User Community'
                // maxZoom: 10
            }),
            Terrain: L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer/tile/{z}/{y}/{x}', {
                zIndex: 1,
                attribution: 'Tiles &copy; Esri &mdash; Source: USGS, Esri, TANA, DeLorme, and NPS',
                maxZoom: 13
            }),
            Gray: L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
                zIndex: 1,
                attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
                maxZoom: 16
            })
        };
        // if typeScript complains about searchParams, add it to the class in the leaflet@types definition
        this.mainLayers = {
            WQP: L.tileLayer.wms('https://www.waterqualitydata.us/ogcservices/ows?', {
                layers: 'wqp_sites',
                format: 'image/png',
                transparent: true,
                zIndex: 2
                // searchParams: "characteristicname?text=nitrogen;countycode:US:36:059|US:36:103|US:36:081|US:36:047"
            }),
            NWIS: L.tileLayer.wms('https://www.waterqualitydata.us/ogcservices/ows?', {
                layers: 'qw_portal_map:nwis_sites',
                format: 'image/png',
                transparent: true,
                zIndex: 2
                // searchParams: "countycode:US:36:059|US:36:103"
            })
        };
    }
    Object.defineProperty(MapService.prototype, "SelectedSite", {
        get: function () {
            return this._selectedSiteSubject.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MapService.prototype, "MultSelect", {
        get: function () {
            return this._selectMultSubject.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MapService.prototype, "SelectedChar", {
        get: function () {
            return this._characteristicFilterSubject.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MapService.prototype, "SiteStats", {
        get: function () {
            return this._siteStatsSubject.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MapService.prototype, "SiteChange", {
        get: function () {
            return this._siteChangeSubject.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    MapService.prototype.getData = function () {
        var _this = this;
        this._loaderService.showFullPageLoad();
        return this._http.get(this.geoJsonURL, { params: this.URLparams }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            _this.geoJson = response;
            _this.filterJson = _this.geoJson; // set filtered object to all on init.
            // get unique values for filterOptions
            _this.filterOptions = {};
            _this.geoJson.features.forEach(function (feature) {
                for (var property in feature.properties) {
                    if (!_this.filterOptions.hasOwnProperty(property)) {
                        _this.filterOptions[property] = [];
                    }
                    if (_this.filterOptions[property].indexOf(feature.properties[property]) === -1 && property !== 'bbox') {
                        _this.filterOptions[property].push(feature.properties[property]);
                    }
                }
            });
            _this._loaderService.hideFullPageLoad();
            return _this.filterOptions;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    MapService.prototype.handleError = function (err) {
        this._loaderService.hideFullPageLoad();
        if (err.error instanceof ErrorEvent) {
            // client side
            console.error('An error occurred:', err.error.message);
        }
        else {
            // server error message
            console.error('Server returned code ${err.status, body ${err.error}');
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('HTTPClient error.');
    };
    MapService.prototype.addToSitesLayer = function (geoJson) {
        var _this = this;
        var self = this;
        if (this.markerClusters) {
            this.markerClusters.remove();
        }
        if (this.selectedSiteLayer) {
            this.highlightMarkers.forEach(function (marker) { return _this.selectedSiteLayer.remove(marker); });
        }
        this.highlightMarkers = [];
        var layer = L.geoJSON(geoJson, {
            pointToLayer: function (feature, latLng) {
                var marker = self.setMarker(feature);
                return L.circleMarker(latLng, marker);
            },
            onEachFeature: function (feature, lay) {
                lay.bindPopup('<b>Site Name: </b>' +
                    feature.properties.name +
                    '<br/><b>Location Name: </b>' +
                    feature.properties.locName +
                    '<br/><b>Organization Name: </b>' +
                    feature.properties.orgName +
                    '<br/><b>Result Count: </b>' +
                    feature.properties.resultCnt);
                lay.on('click', function (e) {
                    var _this = this;
                    // check for overlapping sites
                    var locSites = 0;
                    self.geoJson.features.forEach(function (ft) {
                        var coord = ft.geometry.coordinates;
                        var featCoord = _this._latlng;
                        if (coord[0].toFixed(3) === featCoord.lng.toFixed(3) && coord[1].toFixed(3) === featCoord.lat.toFixed(3)) {
                            locSites++;
                        }
                    });
                    if (locSites > 1 && e.target._map._zoom < 15) {
                        e.target
                            .getPopup()
                            .setContent('<b>Site Name: </b>' +
                            feature.properties.name +
                            '<br/><b>Location Name: </b>' +
                            feature.properties.locName +
                            '<br/><b>Organization Name: </b>' +
                            feature.properties.orgName +
                            '<br/><b>Result Count: </b>' +
                            feature.properties.resultCnt +
                            '<br><b style="color: red;">WARNING: overlapping sites here. Zoom in to access individual sites</b>');
                    }
                    // if site is already selected, just open the popup
                    var run = true;
                    if (self.selectedSiteLayer) {
                        self.selectedSiteLayer.eachLayer(function (site) {
                            if (site._latlng === _this._latlng) {
                                run = false;
                            }
                        });
                    }
                    if (run === true) {
                        // control key used to select multiple sites
                        if (e.originalEvent.ctrlKey === false) {
                            if (self.selectedSiteLayer) {
                                self.highlightMarkers.forEach(function (marker) { return self.selectedSiteLayer.remove(marker); });
                            }
                            self.highlightMarkers = [];
                            self.highlightSelectedSite(e);
                            self._selectedSiteSubject.next(e.target.feature.properties);
                        }
                        else {
                            self.highlightSelectedSite(e);
                            self._selectMultSubject.next(e.target.feature.properties);
                        }
                    }
                    else {
                        this.openPopup();
                    }
                });
            }
        }).addTo(this.sitesLayer);
        this.markerClusters = L.markerClusterGroup({
            showCoverageOnHover: false,
            maxClusterRadius: 0.05,
            spiderfyDistanceMultiplier: 2
        });
        this.markerClusters.addLayer(this.sitesLayer);
        this.map.addLayer(this.markerClusters);
        this.markerClusters.disableClustering();
        // zoom
        this.map.fitBounds(this.sitesLayer.getBounds(), { padding: [20, 20] });
        this._siteChangeSubject.next(geoJson);
    };
    MapService.prototype.highlightSelectedSite = function (site) {
        var _this = this;
        var highlightOptions = {
            radius: 4,
            weight: 12,
            opacity: 0.45,
            fill: true,
            color: 'orange',
            fillColor: '#9b0004',
            fillOpacity: 0.5
        };
        this.highlightMarkers.push(L.circleMarker(site.latlng, highlightOptions));
        this.selectedSiteLayer = L.featureGroup([]);
        this.highlightMarkers.forEach(function (marker) { return marker.addTo(_this.selectedSiteLayer); });
        this.selectedSiteLayer.addTo(this.map);
        this.selectedSiteLayer.bringToBack();
    };
    MapService.prototype.setMarker = function (feature) {
        var fillColor = '';
        switch (feature.properties.searchType) {
            case 'Facility':
                fillColor = '#555E7B';
                break;
            case 'Atmosphere':
                fillColor = '#B7D968';
                break;
            case 'Lake, Reservoir, Impoundment':
                fillColor = '#B576AD';
                break;
            case 'Stream':
                fillColor = '#4376D3';
                break;
            case 'Well':
                fillColor = '#E04644';
                break;
            case 'Land':
                fillColor = '#1F777F';
                break;
            case 'Estuary':
                fillColor = '#D608A9';
                break;
            case 'Wetland':
                fillColor = '#3cb44b';
                break;
            case 'Ocean':
                fillColor = '#C64C41';
                break;
        }
        return {
            radius: 4,
            fillColor: fillColor,
            weight: 0,
            opacity: 1,
            fillOpacity: 0.5
        };
    };
    // use extent to get NWIS rt gages based on bounding box, display on map
    MapService.prototype.queryNWISrtGages = function (bbox) {
        var NWISmarkers = {};
        // NWIS query options from http://waterservices.usgs.gov/rest/IV-Test-Tool.html
        var parameterCodeList = '00065,62619,62620,63160,72214';
        var siteTypeList = 'OC,OC-CO,ES,LK,ST,ST-CA,ST-DCH,ST-TS';
        var siteStatus = 'active';
        var url = 'https://waterservices.usgs.gov/nwis/site/?format=mapper&bBox=' +
            bbox +
            '&parameterCd=' +
            parameterCodeList +
            '&siteType=' +
            siteTypeList +
            '&siteStatus=' +
            siteStatus;
        console.log('here', url);
        return this._http.get(url, { responseType: 'text' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response;
        }));
        // $.ajax({
        //     url: url,
        //     dataType: "xml",
        //     success: function(xml){
        //         $(xml).find('site').each(function(){
        //             var siteID = $(this).attr('sno');
        //             var siteName = $(this).attr('sna');
        //             var lat = $(this).attr('lat');
        //             var lng = $(this).attr('lng');
        //             NWISmarkers[siteID] = L.marker([lat, lng], {icon: nwisMarkerIcon});
        //             NWISmarkers[siteID].data = {siteName:siteName,siteCode:siteID};
        //             NWISmarkers[siteID].data.parameters = {};
        //             //add point to featureGroup
        //             USGSrtGages.addLayer(NWISmarkers[siteID]);
        //             $( "#nwisLoadingAlert" ).fadeOut(2000);
        //         });
        //     },
        //     error : function(xml) {
        //         $( "#nwisLoadingAlert" ).fadeOut(2000);
        //     }
        // });
    };
    MapService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"]])
    ], MapService);
    return MapService;
}());



/***/ }),

/***/ "./src/app/shared/services/summaries.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/services/summaries.service.ts ***!
  \******************************************************/
/*! exports provided: SummariesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummariesService", function() { return SummariesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SummariesService = /** @class */ (function () {
    function SummariesService(_http) {
        this._http = _http;
        this._summaryDataSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    Object.defineProperty(SummariesService.prototype, "SummaryData", {
        get: function () {
            return this._summaryDataSubject.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    SummariesService.prototype.readSumFile = function () {
        var _this = this;
        this.sum_output = [];
        this._http.get('./assets/org_summary.json').subscribe(function (data) {
            _this.jsonFile = data;
            _this.jsonFile = JSON.parse(_this.jsonFile._body);
            for (var i = 0; i < _this.jsonFile.length; i++) {
                _this.sum_output.push(_this.jsonFile[i]);
            }
            _this._summaryDataSubject.next(_this.sum_output);
        });
    };
    // get list of organizations
    SummariesService.prototype.getOrgData = function () {
        var _this = this;
        var orgUrl = 'https://www.waterqualitydata.us/data/Organization/search?mimeType=csv&zip=no&countrycode=US' +
            '&countycode=US%3A36%3A059&countycode=US%3A36%3A103&statecode=US%3A36';
        this._http.get(orgUrl).subscribe(function (data) {
            _this.csvOrgFile = data;
            _this.jsonOrgFile = _this.csvJSON(_this.csvOrgFile._body);
            _this.orgList = JSON.parse(_this.jsonOrgFile);
            _this.sum_output = [];
            for (var i = 0; i < _this.orgList.length; i++) {
                _this.getSummaryData(i);
            }
        });
    };
    // get summary data for each org
    SummariesService.prototype.getSummaryData = function (i) {
        var _this = this;
        var sumUrl = 'https://www.waterqualitydata.us/data/summary/monitoringlocation/search?mimeType=csv&zip=no' +
            '&countycode=US%3A36%3A059&countycode=US%3A36%3A103&organization=' +
            this.orgList[i].OrganizationIdentifier +
            '&statecode=US%3A36&dataProfile=periodOfRecord';
        this._http.get(sumUrl).subscribe(function (data) {
            _this.csvSumFile = data;
            _this.sumList = JSON.parse(_this.csvJSON(_this.csvSumFile._body));
            if (_this.sumList.length > 1) {
                var sortedData = _this.sumList.sort(function (a, b) {
                    return new Date(b.LastResultSubmittedDate) > new Date(a.LastResultSubmittedDate) ? 1 : -1;
                });
                var last_submit_date = sortedData[1].LastResultSubmittedDate;
                var num_samples = _this.sumList.length;
                _this.sum_output.push({
                    org_name: _this.orgList[i].OrganizationFormalName,
                    last_submit: last_submit_date,
                    num_samples: num_samples
                });
            }
            else if (_this.sumList.length === 1) {
                _this.sum_output.push({
                    org_name: _this.orgList[0].OrganizationFormalName,
                    last_submit: _this.sumList[0].LastResultSubmittedDate,
                    num_samples: 1
                });
            }
            console.log(_this.sum_output);
            _this._summaryDataSubject.next(_this.sum_output);
        });
    };
    SummariesService.prototype.csvJSON = function (csv) {
        var lines = csv.split('\n');
        var result = [];
        var headers = lines[0].split(',');
        for (var i = 1; i < lines.length; i++) {
            var obj = {};
            var currentline = lines[i].split(',');
            for (var j = 0; j < headers.length; j++) {
                obj[headers[j]] = currentline[j];
            }
            result.push(obj);
        }
        return JSON.stringify(result);
    };
    SummariesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], SummariesService);
    return SummariesService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/tabs/tabs.component */ "./src/app/shared/components/tabs/tabs.component.ts");
/* harmony import */ var _components_tab_tab_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/tab/tab.component */ "./src/app/shared/components/tab/tab.component.ts");
/* harmony import */ var _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/loader/loader.component */ "./src/app/shared/components/loader/loader.component.ts");
/* harmony import */ var _services_map_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/map.service */ "./src/app/shared/services/map.service.ts");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var _components_summary_summary_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/summary/summary.component */ "./src/app/shared/components/summary/summary.component.ts");
/* harmony import */ var _services_summaries_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/summaries.service */ "./src/app/shared/services/summaries.service.ts");
/* harmony import */ var _components_loader_dataloader_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/loader/dataloader.component */ "./src/app/shared/components/loader/dataloader.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










// Temporarily use NG Material






var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_2__["TabsComponent"], _components_tab_tab_component__WEBPACK_IMPORTED_MODULE_3__["TabComponent"], _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_4__["LoaderComponent"], _components_summary_summary_component__WEBPACK_IMPORTED_MODULE_7__["SummaryComponent"], _components_loader_dataloader_component__WEBPACK_IMPORTED_MODULE_9__["DataLoaderComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSortModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"]],
            exports: [_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_2__["TabsComponent"], _components_tab_tab_component__WEBPACK_IMPORTED_MODULE_3__["TabComponent"], _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_4__["LoaderComponent"], _components_summary_summary_component__WEBPACK_IMPORTED_MODULE_7__["SummaryComponent"], _components_loader_dataloader_component__WEBPACK_IMPORTED_MODULE_9__["DataLoaderComponent"]],
            providers: [_services_map_service__WEBPACK_IMPORTED_MODULE_5__["MapService"], _services_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"], _services_summaries_service__WEBPACK_IMPORTED_MODULE_8__["SummariesService"]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    hmr: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/hmr.ts":
/*!********************!*\
  !*** ./src/hmr.ts ***!
  \********************/
/*! exports provided: hmrBootstrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hmrBootstrap", function() { return hmrBootstrap; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angularclass_hmr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angularclass/hmr */ "./node_modules/@angularclass/hmr/dist/index.js");
/* harmony import */ var _angularclass_hmr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angularclass_hmr__WEBPACK_IMPORTED_MODULE_1__);


var hmrBootstrap = function (module, bootstrap) {
    var ngModule;
    module.hot.accept();
    bootstrap().then(function (mod) { return ngModule = mod; });
    module.hot.dispose(function () {
        var appRef = ngModule.injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]);
        var elements = appRef.components.map(function (c) { return c.location.nativeElement; });
        var makeVisible = Object(_angularclass_hmr__WEBPACK_IMPORTED_MODULE_1__["createNewHosts"])(elements);
        ngModule.destroy();
        makeVisible();
    });
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _hmr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hmr */ "./src/hmr.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
var bootstrap = function () { return Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]); };
if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].hmr) {
    if (false) {}
    else {
        console.error('HMR is not enabled for webpack-dev-server!');
        console.log('Are you using the --hmr flag for ng serve?');
    }
}
else {
    bootstrap().catch(function (err) { return console.log(err); });
}


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! c:\NYBackup\GitHub\LIQWIDS\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map