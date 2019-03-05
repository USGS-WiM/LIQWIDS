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

module.exports = "<!-- \r\n  Main wrapper\r\n  Flex column\r\n-->\r\n\r\n<div id=\"outer\" [ngClass]=\"{ blur: aboutModal }\">\r\n  <!-- \r\n    Page header \r\n      - Nav, links, branding, etc\r\n  -->\r\n  <header id=\"main\">\r\n    <!-- Branding / Logo -->\r\n    <div id=\"branding\">\r\n      <i\r\n        class=\"far\"\r\n        id=\"sidebarToggle\"\r\n        (click)=\"expandSidebar = !expandSidebar\"\r\n        [ngClass]=\"{ 'fa-bars': !expandSidebar, 'fa-times': expandSidebar }\"\r\n      ></i>\r\n      <!-- USGS Logo -->\r\n      <a href=\"https://usgs.gov\" alt=\"USGS Home Page\" title=\"USGS Home Page\" target=\"_blank\" id=\"usgsLogo\">\r\n        <img src=\"https://www.usgs.gov/sites/all/themes/usgs_palladium/logo.png\" />\r\n      </a>\r\n      <a href=\"https://www.dec.ny.gov/\" alt=\"New York State Department of Environmental Conservation Home Page\" title=\"NY DEC Home Page\" target=\"_blank\" id=\"nydecLogo\">\r\n        <img src=\"./assets/nydec.png\" />\r\n      </a>\r\n      <!-- Title -->\r\n      <div id=\"title\">\r\n        <span class=\"abbr\">L</span>\r\n        <span class=\"expanded\">ong</span>\r\n        <span class=\"abbr\">I</span>\r\n        <span class=\"expanded\">sland</span>\r\n        <span class=\"abbr\">Q</span>\r\n        <span class=\"expanded\">uality of</span>\r\n        <span class=\"abbr\">W</span>\r\n        <span class=\"expanded\">ater</span>\r\n        <span class=\"abbr\">I</span>\r\n        <span class=\"expanded\">ntegrated</span>\r\n        <span class=\"abbr\">D</span>\r\n        <span class=\"expanded\">ata</span>\r\n        <span class=\"abbr\">S</span>\r\n        <span class=\"expanded\">ystem</span>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Links on right -->\r\n    <nav id=\"headerLinks\">\r\n      <a (click)=\"aboutModal = true\">About</a>\r\n    </nav>\r\n  </header>\r\n\r\n  <!-- \r\n    Main body wrapper \r\n    Main body wrapper \r\n    Main body wrapper \r\n  -->\r\n  <div id=\"body\">\r\n    <loading-screen></loading-screen>\r\n    <!-- \r\n      Sidebar\r\n      Sidebar\r\n     -->\r\n     <app-sidebar></app-sidebar>\r\n    \r\n    \r\n    \r\n\r\n    <!-- \r\n      Content \r\n      Content \r\n      Content \r\n    -->\r\n    <main>\r\n      <!-- Map -->\r\n        <!-- <div id=\"map\"></div> -->\r\n        <app-map></app-map>\r\n        \r\n        <app-dataview></app-dataview>\r\n        \r\n\r\n    </main>\r\n    <!-- End Main Content -->\r\n  </div>\r\n  <!-- End Main Body Wrapper-->\r\n</div>\r\n\r\n\r\n<!-- \r\n  ================================================================\r\n  Toast\r\n  Toast\r\n  Toast - 1,001 z-index base\r\n  ================================================================\r\n -->\r\n<div id=\"toast\" class=\"blue\" [ngClass]=\"{ visible: showToast }\">\r\n  <i class=\"far fa-surprise\" id=\"toastIcon\"></i>\r\n  <div id=\"toastText\">\r\n    <div id=\"toastTitle\">Oops!</div>\r\n    <div id=\"toastBody\"> Something went wrong - try again later.</div>\r\n  </div>\r\n</div>\r\n\r\n<!-- $scope.showToast = false;\r\n\r\n$scope.toast = function(class, icon, title, body){\r\n  $scope.toastClass = class;\r\n  $scope.toastIcon = icon;\r\n  $scope.toastTitle = title;\r\n  $scope.toastBody = body;\r\n  $scope.showToast = true;\r\n\r\n  $timeout( function(){\r\n    $scope.showToast = false;\r\n  }, 3500 );\r\n\r\n}\r\n\r\n\r\n$scope.toast(\"red\", \"fa-exclamation\", \"Toast Title\", \"Toast Body\"); -->\r\n\r\n\r\n<!-- <div id=\"toast\" class=\"{{toastClass}}\" [ngClass]=\"{ visible: showToast }\">\r\n  <i class=\"far {{toastIcon}}\" id=\"toastIcon\"></i>\r\n  <div id=\"toastText\">\r\n    <div id=\"toastTitle\">{{toastTitle}}!</div>\r\n    <div id=\"toastBody\"> {{toastBody}}.</div>\r\n  </div>\r\n</div> -->\r\n\r\n<!-- \r\n  ================================================================\r\n  Modals\r\n  Modals\r\n  Modals - 1,0000 z-index base\r\n  ================================================================\r\n -->\r\n<!-- About Modal -->\r\n<div class=\"modal-wrapper\" *ngIf=\"aboutModal\" (click)=\"aboutModal = false\">\r\n  <div class=\"modal\" id=\"aboutModal\" (click)=\"$event.stopPropagation()\">\r\n    <div class=\"modal-header\">\r\n      <div class=\"title\">About</div>\r\n      <div class=\"modal-close\" (click)=\"aboutModal = false\">&times;</div>\r\n    </div>\r\n\r\n    <div class=\"modal-content\">\r\n      \r\n\r\n      <tabs>\r\n        <tab [tabTitle]=\"'About LIQWIDS'\">\r\n            <br/>\r\n            <h6>What is LIQWIDS?</h6>\r\n\r\n            <p>\r\n                There are more than 60 organizations and agencies collecting water-quality data on Long Island. As a result, those interested \r\n                in analyzing data may be unaware of what data exist and how those data can be obtained without a Freedom of \r\n                Information Law request. This web tool is intended to provide a unified view of the water-quality data available, in support of \r\n                ongoing efforts such as LINAP, LICAP, and other State and local environmental and human health initiatives. This product was developed by USGS \r\n                in partnership with New York State Department of Environmental Conservation\r\n              </p>\r\n        </tab>\r\n        <tab [tabTitle]=\"'Contributing Organizations'\">\r\n            <br/>\r\n            <h6>Water Quality Portal</h6>\r\n            <p style=\"margin-bottom: 0;\">Summary of Data Submission</p>\r\n            <app-summary></app-summary>\r\n            <!-- <div id=\"dashboardTable\">\r\n                <div class=\"row header\">\r\n                    <div>Date</div>\r\n                    <div>Site</div>\r\n                    <div>State</div>\r\n                    <div>Color</div>\r\n                    <div>Distance</div>\r\n                    <div>Size</div>\r\n                    <div>Status</div>\r\n                    <div>Amount</div>\r\n                    <div>Notes</div>\r\n                </div>\r\n            \r\n                <div class=\"row\">\r\n                    <div>10/11/18</div>\r\n                    <div>12512</div>\r\n                    <div>NY</div>\r\n                    <div>Red</div>\r\n                    <div>10mi</div>\r\n                    <div>8</div>\r\n                    <div>Off</div>\r\n                    <div>9</div>\r\n                    <div></div>\r\n                </div>\r\n            </div> -->\r\n        </tab>\r\n        <tab [tabTitle]=\"'Disclaimers'\">\r\n                <br/>\r\n                <h6>USGS Data Disclaimer:</h6>\r\n    \r\n                <p>\r\n                    Unless otherwise stated, all data, metadata and related materials are considered to satisfy the quality standards relative \r\n                    to the purpose for which the data were collected. Although these data and associated metadata have been reviewed for accuracy \r\n                    and completeness and approved for release by the U.S. Geological Survey (USGS), no warranty expressed or implied is made \r\n                    regarding the display or utility of the data for other purposes, nor on all computer systems, nor shall the act of distribution \r\n                    constitute any such warranty.\r\n                </p>\r\n                <h6>USGS Software Disclaimer:</h6>\r\n                <p>\r\n                    This software has been approved for release by the U.S. Geological Survey (USGS). Although the software has been subjected to \r\n                    rigorous review, the USGS reserves the right to update the software as needed pursuant to further analysis and review. \r\n                    No warranty, expressed or implied, is made by the USGS or the U.S. Government as to the functionality of the software and \r\n                    related material nor shall the fact of release constitute any such warranty. Furthermore, the software is released on condition \r\n                    that neither the USGS nor the U.S. Government shall be held liable for any damages resulting from its authorized or unauthorized use.\r\n                </p>\r\n                <h6>USGS Product Names Disclaimer:</h6>\r\n                <p>\r\n                    Any use of trade, firm, or product names is for descriptive purposes only and does not imply endorsement by the U.S. Government.\r\n                </p>\r\n            </tab>\r\n    </tabs>\r\n      \r\n      \r\n    </div>\r\n\r\n    <div class=\"modal-actions right\">\r\n      <button (click)=\"aboutModal = false\">Close</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Open+Sans:400,600,700|Poppins:300,400,600,700\");\n.ng-select.ng-select-opened>.ng-select-container{background:#fff;border-color:#b3b3b3 #ccc #d9d9d9}\n.ng-select.ng-select-opened>.ng-select-container:hover{box-shadow:none}\n.ng-select.ng-select-opened>.ng-select-container .ng-arrow{top:-2px;border-color:transparent transparent #999;border-width:0 5px 5px}\n.ng-select.ng-select-opened>.ng-select-container .ng-arrow:hover{border-color:transparent transparent #333}\n.ng-select.ng-select-opened.ng-select-bottom>.ng-select-container{border-bottom-right-radius:0;border-bottom-left-radius:0}\n.ng-select.ng-select-opened.ng-select-top>.ng-select-container{border-top-right-radius:0;border-top-left-radius:0}\n.ng-select.ng-select-focused:not(.ng-select-opened)>.ng-select-container{border-color:#007eff;box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 0 3px rgba(0,126,255,0.1)}\n.ng-select.ng-select-disabled>.ng-select-container{background-color:#f9f9f9}\n.ng-select .ng-has-value .ng-placeholder{display:none}\n.ng-select .ng-select-container{background-color:#fff;border-radius:4px;border:1px solid #ccc;min-height:36px;align-items:center}\n.ng-select .ng-select-container:hover{box-shadow:0 1px 0 rgba(0,0,0,0.06)}\n.ng-select .ng-select-container .ng-value-container{align-items:center;padding-left:10px}\n[dir=\"rtl\"] .ng-select .ng-select-container .ng-value-container{padding-right:10px;padding-left:0}\n.ng-select .ng-select-container .ng-value-container .ng-placeholder{color:#999}\n.ng-select.ng-select-single .ng-select-container{height:36px}\n.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{top:5px;left:0;padding-left:10px;padding-right:50px}\n[dir=\"rtl\"] .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{padding-right:10px;padding-left:50px}\n.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value{background-color:#f9f9f9;border:1px solid #e6e6e6}\n.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value .ng-value-label{padding:0 5px}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container{padding-top:5px;padding-left:7px}\n[dir=\"rtl\"] .ng-select.ng-select-multiple .ng-select-container .ng-value-container{padding-right:7px;padding-left:0}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{font-size:0.9em;margin-bottom:5px;background-color:#ebf5ff;border-radius:2px;margin-right:5px}\n[dir=\"rtl\"] .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{margin-right:0;margin-left:5px}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled{background-color:#f9f9f9}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-label{padding-left:5px}\n[dir=\"rtl\"] .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-label{padding-left:0;padding-right:5px}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-label{display:inline-block;padding:1px 5px}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon{display:inline-block;padding:1px 5px}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon:hover{background-color:#d1e8ff}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.left{border-right:1px solid #b8dbff}\n[dir=\"rtl\"] .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.left{border-left:1px solid #b8dbff;border-right:none}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.right{border-left:1px solid #b8dbff}\n[dir=\"rtl\"] .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.right{border-left:0;border-right:1px solid #b8dbff}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{padding:0 0 3px 3px}\n[dir=\"rtl\"] .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{padding:0 3px 3px 0}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{top:5px;padding-bottom:5px;padding-left:3px}\n[dir=\"rtl\"] .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{padding-right:3px;padding-left:0}\n.ng-select .ng-clear-wrapper{color:#999}\n.ng-select .ng-clear-wrapper:hover .ng-clear{color:#D0021B}\n.ng-select .ng-spinner-zone{padding:5px 5px 0 0}\n[dir=\"rtl\"] .ng-select .ng-spinner-zone{padding:5px 0 0 5px}\n.ng-select .ng-arrow-wrapper{width:25px;padding-right:5px}\n[dir=\"rtl\"] .ng-select .ng-arrow-wrapper{padding-left:5px;padding-right:0}\n.ng-select .ng-arrow-wrapper:hover .ng-arrow{border-top-color:#666}\n.ng-select .ng-arrow-wrapper .ng-arrow{border-color:#999 transparent transparent;border-style:solid;border-width:5px 5px 2.5px}\n.ng-dropdown-panel{background-color:#fff;border:1px solid #ccc;box-shadow:0 1px 0 rgba(0,0,0,0.06);left:0}\n.ng-dropdown-panel.ng-select-bottom{top:100%;border-bottom-right-radius:4px;border-bottom-left-radius:4px;border-top-color:#e6e6e6;margin-top:-1px}\n.ng-dropdown-panel.ng-select-bottom .ng-dropdown-panel-items .ng-option:last-child{border-bottom-right-radius:4px;border-bottom-left-radius:4px}\n.ng-dropdown-panel.ng-select-top{bottom:100%;border-top-right-radius:4px;border-top-left-radius:4px;border-bottom-color:#e6e6e6;margin-bottom:-1px}\n.ng-dropdown-panel.ng-select-top .ng-dropdown-panel-items .ng-option:first-child{border-top-right-radius:4px;border-top-left-radius:4px}\n.ng-dropdown-panel .ng-dropdown-header{border-bottom:1px solid #ccc;padding:5px 7px}\n.ng-dropdown-panel .ng-dropdown-footer{border-top:1px solid #ccc;padding:5px 7px}\n.ng-dropdown-panel .ng-dropdown-panel-items{margin-bottom:1px}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding:8px 10px;font-weight:500;color:rgba(0,0,0,0.54);cursor:pointer}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-disabled{cursor:default}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-marked{background-color:#f5faff}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-selected,.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-selected.ng-option-marked{background-color:#ebf5ff;font-weight:600}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option{background-color:#fff;color:rgba(0,0,0,0.87);padding:8px 10px}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected,.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected.ng-option-marked{color:#333;background-color:#ebf5ff}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected .ng-option-label,.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected.ng-option-marked .ng-option-label{font-weight:600}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-marked{background-color:#f5faff;color:#333}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-disabled{color:#ccc}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-child{padding-left:22px}\n[dir=\"rtl\"] .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-child{padding-right:22px;padding-left:0}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .ng-tag-label{font-size:80%;font-weight:400;padding-right:5px}\n[dir=\"rtl\"] .ng-dropdown-panel .ng-dropdown-panel-items .ng-option .ng-tag-label{padding-left:5px;padding-right:0}\n[dir=\"rtl\"] .ng-dropdown-panel{direction:rtl;text-align:right}\n.m-t-5 {\n  margin-top: 5px !important; }\n.p-t-5 {\n  padding-top: 5px !important; }\n.m-b-5 {\n  margin-bottom: 5px !important; }\n.p-b-5 {\n  padding-bottom: 5px !important; }\n.m-l-5 {\n  margin-left: 5px !important; }\n.p-l-5 {\n  padding-left: 5px !important; }\n.m-r-5 {\n  margin-right: 5px !important; }\n.p-r-5 {\n  padding-right: 5px !important; }\n.m-t-10 {\n  margin-top: 10px !important; }\n.p-t-10 {\n  padding-top: 10px !important; }\n.m-b-10 {\n  margin-bottom: 10px !important; }\n.p-b-10 {\n  padding-bottom: 10px !important; }\n.m-l-10 {\n  margin-left: 10px !important; }\n.p-l-10 {\n  padding-left: 10px !important; }\n.m-r-10 {\n  margin-right: 10px !important; }\n.p-r-10 {\n  padding-right: 10px !important; }\n.m-t-15 {\n  margin-top: 15px !important; }\n.p-t-15 {\n  padding-top: 15px !important; }\n.m-b-15 {\n  margin-bottom: 15px !important; }\n.p-b-15 {\n  padding-bottom: 15px !important; }\n.m-l-15 {\n  margin-left: 15px !important; }\n.p-l-15 {\n  padding-left: 15px !important; }\n.m-r-15 {\n  margin-right: 15px !important; }\n.p-r-15 {\n  padding-right: 15px !important; }\n.m-t-20 {\n  margin-top: 20px !important; }\n.p-t-20 {\n  padding-top: 20px !important; }\n.m-b-20 {\n  margin-bottom: 20px !important; }\n.p-b-20 {\n  padding-bottom: 20px !important; }\n.m-l-20 {\n  margin-left: 20px !important; }\n.p-l-20 {\n  padding-left: 20px !important; }\n.m-r-20 {\n  margin-right: 20px !important; }\n.p-r-20 {\n  padding-right: 20px !important; }\n.m-t-25 {\n  margin-top: 25px !important; }\n.p-t-25 {\n  padding-top: 25px !important; }\n.m-b-25 {\n  margin-bottom: 25px !important; }\n.p-b-25 {\n  padding-bottom: 25px !important; }\n.m-l-25 {\n  margin-left: 25px !important; }\n.p-l-25 {\n  padding-left: 25px !important; }\n.m-r-25 {\n  margin-right: 25px !important; }\n.p-r-25 {\n  padding-right: 25px !important; }\n.m-t-30 {\n  margin-top: 30px !important; }\n.p-t-30 {\n  padding-top: 30px !important; }\n.m-b-30 {\n  margin-bottom: 30px !important; }\n.p-b-30 {\n  padding-bottom: 30px !important; }\n.m-l-30 {\n  margin-left: 30px !important; }\n.p-l-30 {\n  padding-left: 30px !important; }\n.m-r-30 {\n  margin-right: 30px !important; }\n.p-r-30 {\n  padding-right: 30px !important; }\n.m-t-35 {\n  margin-top: 35px !important; }\n.p-t-35 {\n  padding-top: 35px !important; }\n.m-b-35 {\n  margin-bottom: 35px !important; }\n.p-b-35 {\n  padding-bottom: 35px !important; }\n.m-l-35 {\n  margin-left: 35px !important; }\n.p-l-35 {\n  padding-left: 35px !important; }\n.m-r-35 {\n  margin-right: 35px !important; }\n.p-r-35 {\n  padding-right: 35px !important; }\n.m-t-40 {\n  margin-top: 40px !important; }\n.p-t-40 {\n  padding-top: 40px !important; }\n.m-b-40 {\n  margin-bottom: 40px !important; }\n.p-b-40 {\n  padding-bottom: 40px !important; }\n.m-l-40 {\n  margin-left: 40px !important; }\n.p-l-40 {\n  padding-left: 40px !important; }\n.m-r-40 {\n  margin-right: 40px !important; }\n.p-r-40 {\n  padding-right: 40px !important; }\n.m-t-45 {\n  margin-top: 45px !important; }\n.p-t-45 {\n  padding-top: 45px !important; }\n.m-b-45 {\n  margin-bottom: 45px !important; }\n.p-b-45 {\n  padding-bottom: 45px !important; }\n.m-l-45 {\n  margin-left: 45px !important; }\n.p-l-45 {\n  padding-left: 45px !important; }\n.m-r-45 {\n  margin-right: 45px !important; }\n.p-r-45 {\n  padding-right: 45px !important; }\n.m-t-50 {\n  margin-top: 50px !important; }\n.p-t-50 {\n  padding-top: 50px !important; }\n.m-b-50 {\n  margin-bottom: 50px !important; }\n.p-b-50 {\n  padding-bottom: 50px !important; }\n.m-l-50 {\n  margin-left: 50px !important; }\n.p-l-50 {\n  padding-left: 50px !important; }\n.m-r-50 {\n  margin-right: 50px !important; }\n.p-r-50 {\n  padding-right: 50px !important; }\n.m-t-75 {\n  margin-top: 75px !important; }\n.p-t-75 {\n  padding-top: 75px !important; }\n.m-b-75 {\n  margin-bottom: 75px !important; }\n.p-b-75 {\n  padding-bottom: 75px !important; }\n.m-l-75 {\n  margin-left: 75px !important; }\n.p-l-75 {\n  padding-left: 75px !important; }\n.m-r-75 {\n  margin-right: 75px !important; }\n.p-r-75 {\n  padding-right: 75px !important; }\n.m-t-100 {\n  margin-top: 100px !important; }\n.p-t-100 {\n  padding-top: 100px !important; }\n.m-b-100 {\n  margin-bottom: 100px !important; }\n.p-b-100 {\n  padding-bottom: 100px !important; }\n.m-l-100 {\n  margin-left: 100px !important; }\n.p-l-100 {\n  padding-left: 100px !important; }\n.m-r-100 {\n  margin-right: 100px !important; }\n.p-r-100 {\n  padding-right: 100px !important; }\n#outer {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  width: 100vw;\n  overflow: hidden;\n  transition: 0.15s; }\n#outer header#main {\n    display: flex;\n    height: 54px;\n    min-height: 54px;\n    width: 100%;\n    background-color: #101010; }\n#outer #body {\n    display: flex;\n    flex-grow: 3;\n    height: 100%; }\n#outer #body #sidebar {\n      display: block;\n      width: 280px;\n      background-color: #fff;\n      box-sizing: border-box;\n      padding: 15px;\n      overflow: auto;\n      transition: all 0.15s ease, width 0s 0.15s; }\n@media only screen and (max-width: 1200px) {\n        #outer #body #sidebar {\n          position: fixed;\n          top: 54px;\n          padding-bottom: 69px;\n          left: -280px;\n          height: 100vh;\n          border-right: 1px solid rgba(16, 16, 16, 0.2);\n          z-index: 5000; } }\n@media only screen and (max-width: 550px) {\n        #outer #body #sidebar {\n          top: auto;\n          bottom: -60vh;\n          padding-bottom: 15px;\n          left: 0;\n          height: 60vh;\n          border-right: none;\n          border-top-left-radius: 16px;\n          border-top-right-radius: 16px; } }\n#outer #body #sidebar.expanded {\n        left: 0px;\n        transition: all 0.15s ease, width 0s; }\n@media only screen and (max-width: 550px) {\n          #outer #body #sidebar.expanded {\n            bottom: 0;\n            width: 100%;\n            border-top: 1px solid rgba(16, 16, 16, 0.2); } }\n#outer #body main {\n      display: block;\n      flex-grow: 3;\n      overflow: auto; }\n#sidebarLightbox {\n  display: block;\n  position: fixed;\n  top: 54px;\n  left: 0;\n  z-index: 4999;\n  background-color: rgba(16, 16, 16, 0.4);\n  height: 0px;\n  width: 100vw;\n  opacity: 0;\n  transition: height 0s 0.2s, opacity 0.2s; }\n#sidebarLightbox.visible {\n    opacity: 1;\n    height: 100vh;\n    transition: height 0s, opacity 0.2s; }\np {\n  display: block;\n  padding: 0 0 8px 0;\n  font-size: 14px;\n  line-height: 28px;\n  font-family: \"Open Sans\", sans-serif;\n  color: rgba(16, 16, 16, 0.9);\n  font-weight: 500; }\n@media only screen and (max-width: 460px) {\n    p {\n      font-size: 13px;\n      line-height: 22px; } }\nh1, h2, h3, h4 {\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 700;\n  margin: 0 auto;\n  display: block;\n  width: 100%; }\nh5, h6 {\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 700;\n  margin: 0 auto;\n  display: block;\n  width: 100%; }\nh1 {\n  font-size: 32px; }\nh2 {\n  font-size: 26px; }\nh3 {\n  font-size: 22px; }\nh4 {\n  font-size: 18px; }\nh5 {\n  font-size: 18px; }\nh6 {\n  font-size: 16px; }\nlabel {\n  font-size: 12px;\n  display: block;\n  font-weight: 500;\n  color: rgba(16, 16, 16, 0.5);\n  margin: 2px 0 2px 0; }\n#modalLightbox {\n  display: block;\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  top: 0;\n  left: 0; }\n.blur {\n  -webkit-filter: blur(6px);\n          filter: blur(6px);\n  transition: 0s; }\n.modal-wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  top: 0;\n  left: 0;\n  box-sizing: border-box;\n  padding: 0 6%;\n  background-color: rgba(16, 16, 16, 0.6);\n  z-index: 10000; }\n@media only screen and (max-width: 460px) {\n    .modal-wrapper {\n      justify-content: flex-end;\n      padding: 0; } }\n.modal-wrapper .modal {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    min-width: 400px;\n    max-width: 680px;\n    border-radius: 16px;\n    background-color: #fff;\n    min-height: 240px;\n    max-height: 90vh;\n    margin: 0 auto; }\n@media only screen and (max-width: 460px) {\n      .modal-wrapper .modal {\n        width: 100%;\n        min-width: none;\n        max-width: none;\n        max-height: 85vh;\n        border-bottom-left-radius: 0;\n        border-bottom-right-radius: 0; } }\n.modal-wrapper .modal .modal-header {\n      display: flex;\n      justify-content: space-between;\n      boxs-sizing: border-box;\n      padding: 15px 20px;\n      font-family: \"Poppins\", sans-serif;\n      font-size: 26px;\n      font-weight: 700;\n      letter-spacing: -0.4px; }\n@media only screen and (max-width: 460px) {\n        .modal-wrapper .modal .modal-header {\n          padding: 15px 20px 5px 20px; } }\n.modal-wrapper .modal .modal-header .modal-close {\n        font-weight: 500;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        font-size: 42px;\n        line-height: 0;\n        transition: 0.2s;\n        color: rgba(16, 16, 16, 0.3); }\n.modal-wrapper .modal .modal-header .modal-close:hover {\n          cursor: pointer;\n          transition: 0.2s;\n          color: #F23D47; }\n.modal-wrapper .modal .modal-header .modal-close:active {\n          opacity: 0.5; }\n.modal-wrapper .modal .modal-content {\n      box-sizing: border-box;\n      padding: 0 20px;\n      margin-bottom: 10px;\n      flex-grow: 3;\n      max-height: 45vh;\n      overflow: auto; }\n.modal-wrapper .modal .modal-content.nopadding {\n        padding: 0; }\n.modal-wrapper .modal .modal-content p:last-child {\n        padding-bottom: 0; }\n@media only screen and (max-width: 460px) {\n        .modal-wrapper .modal .modal-content {\n          max-height: 50vh; } }\n.modal-wrapper .modal .modal-actions {\n      display: flex;\n      justify-content: space-between;\n      box-sizing: border-box;\n      padding: 15px 17px; }\n@media only screen and (max-width: 460px) {\n        .modal-wrapper .modal .modal-actions {\n          padding: 0; } }\n.modal-wrapper .modal .modal-actions.left {\n        justify-content: flex-start; }\n.modal-wrapper .modal .modal-actions.right {\n        justify-content: flex-end; }\n.modal-wrapper .modal .modal-actions button {\n        margin: 0 3px; }\n@media only screen and (max-width: 460px) {\n          .modal-wrapper .modal .modal-actions button {\n            margin: 0 0 0 0;\n            flex-grow: 3;\n            border-radius: 0;\n            padding: 12px 10px; } }\n.modal-wrapper .modal.big {\n      max-width: 880px; }\n.modal-wrapper .modal.tiny {\n      max-width: 380px;\n      min-width: 340px;\n      min-height: 200px; }\n@media only screen and (max-width: 460px) {\n        .modal-wrapper .modal.tiny {\n          max-width: none; }\n          .modal-wrapper .modal.tiny .modal-content {\n            margin-bottom: 20px; } }\n#toast {\n  z-index: 1,001;\n  display: flex;\n  justify-content: center;\n  position: fixed;\n  width: 300px;\n  left: 50%;\n  bottom: -200px;\n  margin-left: -150px;\n  box-sizing: border-box;\n  padding: 12px 8px 12px 12px;\n  border-radius: 8px;\n  transition: bottom .3s ease-in-out,opacity 0s 0.3s ease-in-out;\n  opacity: 0;\n  box-shadow: 0 5px 25px -5px rgba(30, 16, 84, 0.3);\n  background-color: #101010; }\n#toast #toastIcon {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    font-size: 32px;\n    margin-right: 12px;\n    width: 55px;\n    text-align: center;\n    color: white; }\n#toast #toastText {\n    flex-grow: 3;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    color: white; }\n#toast #toastText #toastTitle {\n      font-size: 14px;\n      font-weight: 600;\n      line-height: 14px;\n      padding-bottom: 4px;\n      letter-spacing: 0.25px; }\n#toast #toastText #toastBody {\n      font-size: 12.5px;\n      font-weight: 500;\n      line-height: 14px;\n      letter-spacing: 0.25px; }\n#toast.red {\n    background-color: #F23D47; }\n#toast.blue {\n    background-color: #3E3BFB; }\n#toast.black {\n    background-color: #101010; }\n#toast.white {\n    background-color: #fff; }\n#toast.white #toastIcon,\n    #toast.white #toastText {\n      color: #101010; }\n#toast.visible {\n    bottom: 25px;\n    opacity: 1;\n    transition: bottom .3s ease-in-out,opacity .3s ease-in-out; }\n@media only screen and (max-width: 460px) {\n      #toast.visible {\n        bottom: 0px; } }\n@media only screen and (max-width: 460px) {\n    #toast {\n      width: 100%;\n      margin-left: 0;\n      left: 0;\n      bottom: -200px;\n      padding: 18px 14px 18px 18px;\n      border-bottom-left-radius: 0;\n      border-bottom-right-radius: 0;\n      box-shadow: 0 5px 25px 5px rgba(30, 16, 84, 0.2); } }\n#aboutModal .modal-content {\n  width: 620px;\n  overflow: hidden;\n  display: flex; }\n#aboutModal .modal-content tabs {\n    display: flex;\n    flex-direction: column; }\n#aboutModal .modal-content tab {\n    flex-grow: 3;\n    overflow: auto; }\n#aboutModal .modal-content .pane {\n    padding: 0; }\nbutton {\n  border: none;\n  box-sizing: border-box;\n  padding: 6px 16px;\n  font-family: \"Poppins\", sans-serif;\n  background-color: #3E3BFB;\n  color: #fff;\n  letter-spacing: 0.15px;\n  font-weight: 600;\n  font-size: 14px;\n  border-radius: 4px; }\nbutton:hover {\n    cursor: pointer;\n    text-decoration: underline;\n    background-color: #2522fa; }\nbutton:focus {\n    text-decoration: underline; }\nbutton:active {\n    background-color: #3E3BFB; }\nbutton.red {\n    background-color: #F23D47; }\nbutton.red:hover {\n      background-color: #f02530; }\nbutton.red:active {\n      background-color: #F23D47; }\n.search-select {\n  display: block;\n  position: relative; }\n.search-select input {\n    width: 100%;\n    border: 1px solid rgba(16, 16, 16, 0.15);\n    border-radius: 4px;\n    box-sizing: border-box;\n    padding: 6px 12px;\n    font-size: 15px;\n    font-family: \"Open Sans\", sans-serif;\n    font-weight: 500;\n    color: #101010; }\n.search-select .search-select-results {\n    display: none;\n    background-color: #101010;\n    box-sizing: border-box;\n    padding: 10px 0;\n    border-bottom-left-radius: 10px;\n    border-bottom-right-radius: 10px;\n    max-height: 180px;\n    overflow: auto; }\n.search-select .search-select-results div {\n      color: #fff;\n      font-size: 15px;\n      line-height: 15px;\n      box-sizing: border-box;\n      padding: 4px 15px; }\n.search-select .search-select-results div:hover {\n        text-decoration: underline;\n        cursor: pointer; }\n.search-select input:focus ~ .search-select-results {\n    display: block; }\n.styled-select {\n  border: 1px solid #ccc;\n  width: 99%;\n  border-radius: 3px;\n  overflow: hidden;\n  background: #fafafa url(\"data:image/png;base64,R0lGODlhDwAUAIABAAAAAP///yH5BAEAAAEALAAAAAAPABQAAAIXjI+py+0Po5wH2HsXzmw//lHiSJZmUAAAOw==\") no-repeat 95% 48%; }\n.styled-select select {\n    padding: 5px 8px;\n    width: 130%;\n    border: none;\n    box-shadow: none;\n    background: transparent;\n    background-image: none;\n    -webkit-appearance: none; }\n.styled-select select:focus {\n      outline: none; }\nselect {\n  display: block;\n  width: 100%; }\n.sidebar-content select {\n  border-radius: 4px;\n  box-sizing: border-box;\n  border: 1px solid rgba(16, 16, 16, 0.1);\n  margin-bottom: 10px; }\n.sidebar-content select option {\n    font-size: 12px;\n    box-sizing: border-box;\n    padding: 3px 8px;\n    font-family: \"Open Sans\", sans-serif;\n    font-weight: 500; }\n.filter-select {\n  position: relative; }\n.filter-select select {\n    max-height: 26px;\n    transition: 0.15s; }\n.filter-select select:before {\n      content: 'Select';\n      font-family: \"Open Sans\", sans-serif;\n      font-size: 11px;\n      text-align: left;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      position: absolute;\n      top: 5%;\n      left: 1.5%;\n      height: 90%;\n      width: 70%;\n      font-weight: 500;\n      box-sizing: border-box;\n      padding-left: 10px;\n      box-sizing: border-box;\n      transition: 0.15s;\n      background-color: white;\n      z-index: 1; }\n.filter-select select:after {\n      content: '\\f0d7';\n      font-family: 'Font Awesome 5 Pro';\n      font-size: 16px;\n      text-align: right;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      position: absolute;\n      background-color: white;\n      top: 5%;\n      left: 1.5%;\n      height: 90%;\n      width: 93%;\n      font-weight: 900;\n      box-sizing: border-box;\n      padding-right: 10px;\n      box-sizing: border-box;\n      font-weight: 600;\n      transition: 0.15s;\n      padding-bottom: 1px; }\n.filter-select select:hover {\n      cursor: pointer;\n      background-color: rgba(16, 16, 16, 0.05); }\n.filter-select select:hover:after {\n        color: #3E3BFB;\n        transition: 0.15s; }\n.filter-select select:focus {\n      transition: 0.15s;\n      max-height: 120px;\n      background-color: white; }\n.filter-select select:focus:hover {\n        background-color: white; }\n.filter-select select:focus:after, .filter-select select:focus:before {\n        display: none; }\nheader#main #branding {\n  display: flex;\n  height: 100%;\n  box-sizing: border-box;\n  padding: 0 0 0 15px; }\n@media only screen and (max-width: 1200px) {\n    header#main #branding {\n      padding: 0 0 0 40px; } }\nheader#main #branding #nydecLogo,\n  header#main #branding #usgsLogo {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    margin-right: 8px; }\nheader#main #branding #nydecLogo img,\n    header#main #branding #usgsLogo img {\n      display: block;\n      height: 38px;\n      width: auto; }\nheader#main #branding #nydecLogo {\n    -webkit-filter: invert(100%);\n            filter: invert(100%);\n    margin-right: 10px; }\nheader#main #branding #nydecLogo img {\n      height: 50px; }\nheader#main #headerLinks {\n  display: flex;\n  flex-grow: 3;\n  justify-content: flex-end;\n  box-sizing: border-box;\n  padding: 0 10px 0 0; }\nheader#main #headerLinks a {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    box-sizing: border-box;\n    padding: 0 10px;\n    margin: 12px 0;\n    color: #101010;\n    font-family: \"Open Sans\", sans-serif;\n    font-weight: 600;\n    font-size: 13px;\n    box-sizing: border-box;\n    padding-bottom: 2px;\n    transition: 0.15s;\n    background-color: #fff;\n    border-radius: 4px;\n    margin-left: 10px; }\nheader#main #headerLinks a:hover {\n      text-decoration: underline;\n      cursor: pointer; }\nheader#main #headerLinks a:focus {\n      text-decoration: underline; }\nheader#main #headerLinks a:active {\n      text-decoration: none;\n      opacity: 0.75;\n      transition: 0.15s; }\nheader#main #branding #title {\n  color: white;\n  display: flex;\n  flex-wrap: wrap; }\nheader#main #branding #title .abbr,\n  header#main #branding #title .expanded {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    font-family: \"Poppins\", sans-serif;\n    font-weight: 600; }\nheader#main #branding #title .abbr {\n    font-size: 22px;\n    letter-spacing: 0.3px; }\nheader#main #branding #title .expanded {\n    display: none;\n    font-weight: 300;\n    padding-right: 5px;\n    font-size: 14px; }\nheader#main #branding #title:hover {\n    cursor: default; }\nheader#main #branding #title:hover .expanded {\n      display: flex; }\n#mapWrapper {\n  display: block;\n  width: 100%;\n  position: relative; }\n#mapWrapper #map {\n    display: block;\n    width: 100%;\n    height: 400px;\n    background-color: rgba(16, 16, 16, 0.2);\n    border-bottom-left-radius: 16px;\n    transition: 0.175s ease; }\n#mapWrapper #collapseMap {\n    display: block;\n    text-align: right;\n    padding: 10px;\n    font-size: 14px;\n    font-weight: 600; }\n#mapWrapper #toggleMap {\n    transition: 0.15s;\n    background-color: transparent;\n    text-align: right;\n    box-sizing: border-box;\n    padding: 8px; }\n#mapWrapper #toggleMap div {\n      display: flex;\n      justify-content: center;\n      opacity: 0.75;\n      transition: 0.15s; }\n#mapWrapper #toggleMap div i, #mapWrapper #toggleMap div b {\n        display: flex;\n        flex-direction: column;\n        justify-content: center; }\n#mapWrapper #toggleMap div i {\n        margin-right: 5px;\n        font-size: 16px; }\n#mapWrapper #toggleMap div b {\n        font-size: 13px;\n        font-weight: 600;\n        font-family: \"Open Sans\", sans-serif; }\n#mapWrapper #toggleMap:hover {\n      transition: 0.15s;\n      cursor: pointer; }\n#mapWrapper #toggleMap:hover div {\n        opacity: 1;\n        transition: 0.15s; }\n#mapWrapper.collapsed #map {\n    height: 110px;\n    transition: 0.175s ease; }\n#mapWrapper.collapsed #map .leaflet-control-container,\n    #mapWrapper.collapsed #map .leaflet-control {\n      display: none; }\n#mapWrapper.collapsed #toggleMap {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    flex-direction: column;\n    justify-content: center;\n    text-align: center;\n    color: white;\n    background-color: rgba(16, 16, 16, 0.65);\n    z-index: 401;\n    display: flex;\n    transition: 0.15s; }\n#mapWrapper.collapsed #toggleMap:hover {\n      background-color: rgba(16, 16, 16, 0.475); }\n/*TEMPORARY STYLING UNTIL WE GET THE LIQWIDS DASHBOARD INSERTED HERE*/\n#dashboardTable {\n  display: flex;\n  flex-direction: column;\n  border: 1px solid rgba(16, 16, 16, 0.2);\n  box-sizing: border-box;\n  padding: 15px;\n  border-radius: 10px;\n  margin-bottom: 45px; }\n#dashboardTable .row {\n    display: flex;\n    width: 100%; }\n#dashboardTable .row:nth-child(even) {\n      background-color: rgba(10, 10, 50, 0.08); }\n#dashboardTable .row div {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      text-align: center;\n      font-size: 12px;\n      line-height: 13px;\n      color: #101010;\n      height: 40px;\n      width: 10%;\n      flex-grow: 3;\n      box-sizing: border-box;\n      padding: 0 10px;\n      text-align: left; }\n#dashboardTable .row div:nth-child(1) {\n        font-weight: bolder; }\n#dashboardTable .row.header div {\n      font-weight: bolder; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYzpcXE5ZQmFja3VwXFxHaXRIdWJcXExJUVdJRFMvc3JjXFxhcHBcXHZhcmlhYmxlcy5zY3NzIiwibm9kZV9tb2R1bGVzL0BuZy1zZWxlY3Qvbmctc2VsZWN0L3RoZW1lcy9kZWZhdWx0LnRoZW1lLmNzcyIsInNyYy9hcHAvYzpcXE5ZQmFja3VwXFxHaXRIdWJcXExJUVdJRFMvc3JjXFxhcHBcXHN0eWxlc1xcaGVscGVycy5zY3NzIiwic3JjL2FwcC9jOlxcTllCYWNrdXBcXEdpdEh1YlxcTElRV0lEUy9zcmNcXGFwcFxcc3R5bGVzXFxzdHJ1Y3R1cmUuc2NzcyIsInNyYy9hcHAvYzpcXE5ZQmFja3VwXFxHaXRIdWJcXExJUVdJRFMvc3JjXFxhcHBcXHN0eWxlc1xcdGV4dC5zY3NzIiwic3JjL2FwcC9jOlxcTllCYWNrdXBcXEdpdEh1YlxcTElRV0lEUy9zcmNcXGFwcFxcc3R5bGVzXFxtb2RhbHMuc2NzcyIsInNyYy9hcHAvYzpcXE5ZQmFja3VwXFxHaXRIdWJcXExJUVdJRFMvc3JjXFxhcHBcXHN0eWxlc1xcaW5wdXRzLnNjc3MiLCJzcmMvYXBwL2M6XFxOWUJhY2t1cFxcR2l0SHViXFxMSVFXSURTL3NyY1xcYXBwXFxzdHlsZXNcXGhlYWRlci5zY3NzIiwic3JjL2FwcC9jOlxcTllCYWNrdXBcXEdpdEh1YlxcTElRV0lEUy9zcmNcXGFwcFxcc3R5bGVzXFxjdXN0b21cXGdlbmVyYWwuc2NzcyIsInNyYy9hcHAvYzpcXE5ZQmFja3VwXFxHaXRIdWJcXExJUVdJRFMvc3JjXFxhcHBcXHN0eWxlc1xcY3VzdG9tXFxtYXAuc2NzcyIsInNyYy9hcHAvYzpcXE5ZQmFja3VwXFxHaXRIdWJcXExJUVdJRFMvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxvR0FBWTtBQ0RaLGlEQUFpRCxlQUFlLENBQUMsaUNBQWlDO0FBQUMsdURBQXVELGVBQWU7QUFBQywyREFBMkQsUUFBUSxDQUFDLHlD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Q0UsNEJBQWtELEVBQUE7QUFMcEQ7RUFDRSw4QkFBZ0QsRUFBQTtBQUdsRDtFQUNFLCtCQUFrRCxFQUFBO0FBTHBEO0VBQ0UsNEJBQWdELEVBQUE7QUFHbEQ7RUFDRSw2QkFBa0QsRUFBQTtBQUxwRDtFQUNFLDZCQUFnRCxFQUFBO0FBR2xEO0VBQ0UsOEJBQWtELEVBQUE7QUFMcEQ7RUFDRSwyQkFBZ0QsRUFBQTtBQUdsRDtFQUNFLDRCQUFrRCxFQUFBO0FBTHBEO0VBQ0UsOEJBQWdELEVBQUE7QUFHbEQ7RUFDRSwrQkFBa0QsRUFBQTtBQUxwRDtFQUNFLDRCQUFnRCxFQUFBO0FBR2xEO0VBQ0UsNkJBQWtELEVBQUE7QUFMcEQ7RUFDRSw2QkFBZ0QsRUFBQTtBQUdsRDtFQUNFLDhCQUFrRCxFQUFBO0FBTHBEO0VBQ0UsMkJBQWdELEVBQUE7QUFHbEQ7RUFDRSw0QkFBa0QsRUFBQTtBQUxwRDtFQUNFLDhCQUFnRCxFQUFBO0FBR2xEO0VBQ0UsK0JBQWtELEVBQUE7QUFMcEQ7RUFDRSw0QkFBZ0QsRUFBQTtBQUdsRDtFQUNFLDZCQUFrRCxFQUFBO0FBTHBEO0VBQ0UsNkJBQWdELEVBQUE7QUFHbEQ7RUFDRSw4QkFBa0QsRUFBQTtBQUxwRDtFQUNFLDJCQUFnRCxFQUFBO0FBR2xEO0VBQ0UsNEJBQWtELEVBQUE7QUFMcEQ7RUFDRSw4QkFBZ0QsRUFBQTtBQUdsRDtFQUNFLCtCQUFrRCxFQUFBO0FBTHBEO0VBQ0UsNEJBQWdELEVBQUE7QUFHbEQ7RUFDRSw2QkFBa0QsRUFBQTtBQUxwRDtFQUNFLDZCQUFnRCxFQUFBO0FBR2xEO0VBQ0UsOEJBQWtELEVBQUE7QUFMcEQ7RUFDRSwyQkFBZ0QsRUFBQTtBQUdsRDtFQUNFLDRCQUFrRCxFQUFBO0FBTHBEO0VBQ0UsOEJBQWdELEVBQUE7QUFHbEQ7RUFDRSwrQkFBa0QsRUFBQTtBQUxwRDtFQUNFLDRCQUFnRCxFQUFBO0FBR2xEO0VBQ0UsNkJBQWtELEVBQUE7QUFMcEQ7RUFDRSw2QkFBZ0QsRUFBQTtBQUdsRDtFQUNFLDhCQUFrRCxFQUFBO0FBTHBEO0VBQ0Us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QUF0Q3ZDO1FBMENnQixpQkFBaUI7UUFDakIsZUFBZSxFQUFBO0FBM0MvQjtRQThDZ0IsZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixvQ1Q3QmMsRUFBQTtBU25COUI7TUFxRFksaUJUL0JNO01TZ0NOLGVBQWUsRUFBQTtBQXREM0I7UUF5RGdCLFVBQVU7UUFDVixpQlRwQ0UsRUFBQTtBU3RCbEI7SUFvRVksYUFBYTtJQUNiLHVCQUF1QixFQUFBO0FBckVuQzs7TUF5RWdCLGFBQWEsRUFBQTtBQXpFN0I7SUE4RVksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsWUFBWTtJQUNaLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osd0NBQXdDO0lBQ3hDLFlBQVk7SUFDWixhQUFhO0lBQ2IsaUJUcEVNLEVBQUE7QVN0QmxCO01BNkZnQix5Q0FBeUMsRUFBQTtBQ2xFekQscUVBQUE7QUFDQTtFQUNJLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUNBQXVDO0VBQ3ZDLHNCQUFzQjtFQUN0QixhQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLG1CQUFtQixFQUFBO0FBUHZCO0lBVVEsYUFBYTtJQUNiLFdBQVcsRUFBQTtBQVhuQjtNQWNZLHdDQUFxQyxFQUFBO0FBZGpEO01Ba0JZLGFBQWE7TUFDYixzQkFBc0I7TUFDdEIsdUJBQXVCO01BQ3ZCLGtCQUFrQjtNQUNsQixlQUFlO01BQ2YsaUJBQWlCO01BQ2pCLGNWakRHO01Va0RILFlBQVk7TUFDWixVQUFVO01BQ1YsWUFBWTtNQUNaLHNCQUFzQjtNQUN0QixlQUFlO01BQ2YsZ0JBQWdCLEVBQUE7QUE5QjVCO1FBaUNnQixtQkFBbUIsRUFBQTtBQWpDbkM7TUF3Q2dCLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRm9udHNcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnM6NDAwLDYwMCw3MDB8UG9wcGluczozMDAsNDAwLDYwMCw3MDAnKTtcclxuXHJcblxyXG4vLyBWYXJpYWJsZXNcclxuJGJsYWNrOiAjMTAxMDEwO1xyXG4kd2hpdGU6ICNmZmY7XHJcbiRiZzogI0Y5RkFGRTtcclxuJHJlZDogI0YyM0Q0NztcclxuJGJsdWU6ICMzRTNCRkI7XHJcbiRwcmltYXJ5OiAkYmx1ZTtcclxuJHRleHQ6IGZhZGUtb3V0KCRibGFjaywgMC4xKTtcclxuJHN1YnRsZTogZmFkZS1vdXQoJGJsYWNrLCAwLjUpO1xyXG5cclxuJGJvcmRlckNvbG9yOiBmYWRlLW91dCgkYmxhY2ssIDAuODUpO1xyXG4kYm9yZGVyUmFkaXVzOiA0cHg7XHJcbiRib3JkZXJSYWRpdXNNOiA4cHg7XHJcbiRib3JkZXJSYWRpdXNMOiAxNnB4O1xyXG5cclxuLy8gRm9udHNcclxuJHBvcHBpbnM6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuJHNhbnM6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG5cclxuXHJcbiR0cmFuc2l0aW9uOiAwLjE1cztcclxuJGJvcmRlclJhZGl1czogNHB4O1xyXG5cclxuLy8gSGVpZ2h0cyBhbmQgbWVhc3VyZW1lbnRzXHJcbiR0b3BCYXJIZWlnaHQ6IDU0cHg7XHJcblxyXG5cclxuLy8gUmVzcG9uc2l2ZW5lc3NcclxuJGZ1bGxNb2JpbGU6IDQ2MHB4OyIsIi5uZy1zZWxlY3Qubmctc2VsZWN0LW9wZW5lZD4ubmctc2VsZWN0LWNvbnRhaW5lcntiYWNrZ3JvdW5kOiNmZmY7Ym9yZGVyLWNvbG9yOiNiM2IzYjMgI2NjYyAjZDlkOWQ5fS5uZy1zZWxlY3Qubmctc2VsZWN0LW9wZW5lZD4ubmctc2VsZWN0LWNvbnRhaW5lcjpob3Zlcntib3gtc2hhZG93Om5vbmV9Lm5nLXNlbGVjdC5uZy1zZWxlY3Qtb3BlbmVkPi5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy1hcnJvd3t0b3A6LTJweDtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgIzk5OTtib3JkZXItd2lkdGg6MCA1cHggNXB4fS5uZy1zZWxlY3Qubmctc2VsZWN0LW9wZW5lZD4ubmctc2VsZWN0LWNvbnRhaW5lciAubmctYXJyb3c6aG92ZXJ7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICMzMzN9Lm5nLXNlbGVjdC5uZy1zZWxlY3Qtb3BlbmVkLm5nLXNlbGVjdC1ib3R0b20+Lm5nLXNlbGVjdC1jb250YWluZXJ7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6MDtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjB9Lm5nLXNlbGVjdC5uZy1zZWxlY3Qtb3BlbmVkLm5nLXNlbGVjdC10b3A+Lm5nLXNlbGVjdC1jb250YWluZXJ7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MDtib3JkZXItdG9wLWxlZnQtcmFkaXVzOjB9Lm5nLXNlbGVjdC5uZy1zZWxlY3QtZm9jdXNlZDpub3QoLm5nLXNlbGVjdC1vcGVuZWQpPi5uZy1zZWxlY3QtY29udGFpbmVye2JvcmRlci1jb2xvcjojMDA3ZWZmO2JveC1zaGFkb3c6aW5zZXQgMCAxcHggMXB4IHJnYmEoMCwwLDAsMC4wNzUpLDAgMCAwIDNweCByZ2JhKDAsMTI2LDI1NSwwLjEpfS5uZy1zZWxlY3Qubmctc2VsZWN0LWRpc2FibGVkPi5uZy1zZWxlY3QtY29udGFpbmVye2JhY2tncm91bmQtY29sb3I6I2Y5ZjlmOX0ubmctc2VsZWN0IC5uZy1oYXMtdmFsdWUgLm5nLXBsYWNlaG9sZGVye2Rpc3BsYXk6bm9uZX0ubmctc2VsZWN0IC5uZy1zZWxlY3QtY29udGFpbmVye2JhY2tncm91bmQtY29sb3I6I2ZmZjtib3JkZXItcmFkaXVzOjRweDtib3JkZXI6MXB4IHNvbGlkICNjY2M7bWluLWhlaWdodDozNnB4O2FsaWduLWl0ZW1zOmNlbnRlcn0ubmctc2VsZWN0IC5uZy1zZWxlY3QtY29udGFpbmVyOmhvdmVye2JveC1zaGFkb3c6MCAxcHggMCByZ2JhKDAsMCwwLDAuMDYpfS5uZy1zZWxlY3QgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lcnthbGlnbi1pdGVtczpjZW50ZXI7cGFkZGluZy1sZWZ0OjEwcHh9W2Rpcj1cInJ0bFwiXSAubmctc2VsZWN0IC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXJ7cGFkZGluZy1yaWdodDoxMHB4O3BhZGRpbmctbGVmdDowfS5uZy1zZWxlY3QgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctcGxhY2Vob2xkZXJ7Y29sb3I6Izk5OX0ubmctc2VsZWN0Lm5nLXNlbGVjdC1zaW5nbGUgLm5nLXNlbGVjdC1jb250YWluZXJ7aGVpZ2h0OjM2cHh9Lm5nLXNlbGVjdC5uZy1zZWxlY3Qtc2luZ2xlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLWlucHV0e3RvcDo1cHg7bGVmdDowO3BhZGRpbmctbGVmdDoxMHB4O3BhZGRpbmctcmlnaHQ6NTBweH1bZGlyPVwicnRsXCJdIC5uZy1zZWxlY3Qubmctc2VsZWN0LXNpbmdsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy1pbnB1dHtwYWRkaW5nLXJpZ2h0OjEwcHg7cGFkZGluZy1sZWZ0OjUwcHh9Lm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUubmctc2VsZWN0LWRpc2FibGVkPi5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXZhbHVle2JhY2tncm91bmQtY29sb3I6I2Y5ZjlmOTtib3JkZXI6MXB4IHNvbGlkICNlNmU2ZTZ9Lm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUubmctc2VsZWN0LWRpc2FibGVkPi5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXZhbHVlIC5uZy12YWx1ZS1sYWJlbHtwYWRkaW5nOjAgNXB4fS5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXJ7cGFkZGluZy10b3A6NXB4O3BhZGRpbmctbGVmdDo3cHh9W2Rpcj1cInJ0bFwiXSAubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVye3BhZGRpbmctcmlnaHQ6N3B4O3BhZGRpbmctbGVmdDowfS5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXZhbHVle2ZvbnQtc2l6ZTowLjllbTttYXJnaW4tYm90dG9tOjVweDtiYWNrZ3JvdW5kLWNvbG9yOiNlYmY1ZmY7Ym9yZGVyLXJhZGl1czoycHg7bWFyZ2luLXJpZ2h0OjVweH1bZGlyPVwicnRsXCJdIC5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXZhbHVle21hcmdpbi1yaWdodDowO21hcmdpbi1sZWZ0OjVweH0ubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy12YWx1ZS5uZy12YWx1ZS1kaXNhYmxlZHtiYWNrZ3JvdW5kLWNvbG9yOiNmOWY5Zjl9Lm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctdmFsdWUubmctdmFsdWUtZGlzYWJsZWQgLm5nLXZhbHVlLWxhYmVse3BhZGRpbmctbGVmdDo1cHh9W2Rpcj1cInJ0bFwiXSAubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy12YWx1ZS5uZy12YWx1ZS1kaXNhYmxlZCAubmctdmFsdWUtbGFiZWx7cGFkZGluZy1sZWZ0OjA7cGFkZGluZy1yaWdodDo1cHh9Lm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctdmFsdWUgLm5nLXZhbHVlLWxhYmVse2Rpc3BsYXk6aW5saW5lLWJsb2NrO3BhZGRpbmc6MXB4IDVweH0ubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy12YWx1ZSAubmctdmFsdWUtaWNvbntkaXNwbGF5OmlubGluZS1ibG9jaztwYWRkaW5nOjFweCA1cHh9Lm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctdmFsdWUgLm5nLXZhbHVlLWljb246aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZDFlOGZmfS5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXZhbHVlIC5uZy12YWx1ZS1pY29uLmxlZnR7Ym9yZGVyLXJpZ2h0OjFweCBzb2xpZCAjYjhkYmZmfVtkaXI9XCJydGxcIl0gLm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctdmFsdWUgLm5nLXZhbHVlLWljb24ubGVmdHtib3JkZXItbGVmdDoxcHggc29saWQgI2I4ZGJmZjtib3JkZXItcmlnaHQ6bm9uZX0ubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy12YWx1ZSAubmctdmFsdWUtaWNvbi5yaWdodHtib3JkZXItbGVmdDoxcHggc29saWQgI2I4ZGJmZn1bZGlyPVwicnRsXCJdIC5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXZhbHVlIC5uZy12YWx1ZS1pY29uLnJpZ2h0e2JvcmRlci1sZWZ0OjA7Ym9yZGVyLXJpZ2h0OjFweCBzb2xpZCAjYjhkYmZmfS5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLWlucHV0e3BhZGRpbmc6MCAwIDNweCAzcHh9W2Rpcj1cInJ0bFwiXSAubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy1pbnB1dHtwYWRkaW5nOjAgM3B4IDNweCAwfS5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXBsYWNlaG9sZGVye3RvcDo1cHg7cGFkZGluZy1ib3R0b206NXB4O3BhZGRpbmctbGVmdDozcHh9W2Rpcj1cInJ0bFwiXSAubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy1wbGFjZWhvbGRlcntwYWRkaW5nLXJpZ2h0OjNweDtwYWRkaW5nLWxlZnQ6MH0ubmctc2VsZWN0IC5uZy1jbGVhci13cmFwcGVye2NvbG9yOiM5OTl9Lm5nLXNlbGVjdCAubmctY2xlYXItd3JhcHBlcjpob3ZlciAubmctY2xlYXJ7Y29sb3I6I0QwMDIxQn0ubmctc2VsZWN0IC5uZy1zcGlubmVyLXpvbmV7cGFkZGluZzo1cHggNXB4IDAgMH1bZGlyPVwicnRsXCJdIC5uZy1zZWxlY3QgLm5nLXNwaW5uZXItem9uZXtwYWRkaW5nOjVweCAwIDAgNXB4fS5uZy1zZWxlY3QgLm5nLWFycm93LXdyYXBwZXJ7d2lkdGg6MjVweDtwYWRkaW5nLXJpZ2h0OjVweH1bZGlyPVwicnRsXCJdIC5uZy1zZWxlY3QgLm5nLWFycm93LXdyYXBwZXJ7cGFkZGluZy1sZWZ0OjVweDtwYWRkaW5nLXJpZ2h0OjB9Lm5nLXNlbGVjdCAubmctYXJyb3ctd3JhcHBlcjpob3ZlciAubmctYXJyb3d7Ym9yZGVyLXRvcC1jb2xvcjojNjY2fS5uZy1zZWxlY3QgLm5nLWFycm93LXdyYXBwZXIgLm5nLWFycm93e2JvcmRlci1jb2xvcjojOTk5IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItd2lkdGg6NXB4IDVweCAyLjVweH0ubmctZHJvcGRvd24tcGFuZWx7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JvcmRlcjoxcHggc29saWQgI2NjYztib3gtc2hhZG93OjAgMXB4IDAgcmdiYSgwLDAsMCwwLjA2KTtsZWZ0OjB9Lm5nLWRyb3Bkb3duLXBhbmVsLm5nLXNlbGVjdC1ib3R0b217dG9wOjEwMCU7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6NHB4O2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6NHB4O2JvcmRlci10b3AtY29sb3I6I2U2ZTZlNjttYXJnaW4tdG9wOi0xcHh9Lm5nLWRyb3Bkb3duLXBhbmVsLm5nLXNlbGVjdC1ib3R0b20gLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRpb246bGFzdC1jaGlsZHtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czo0cHg7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czo0cHh9Lm5nLWRyb3Bkb3duLXBhbmVsLm5nLXNlbGVjdC10b3B7Ym90dG9tOjEwMCU7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6NHB4O2JvcmRlci10b3AtbGVmdC1yYWRpdXM6NHB4O2JvcmRlci1ib3R0b20tY29sb3I6I2U2ZTZlNjttYXJnaW4tYm90dG9tOi0xcHh9Lm5nLWRyb3Bkb3duLXBhbmVsLm5nLXNlbGVjdC10b3AgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRpb246Zmlyc3QtY2hpbGR7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6NHB4O2JvcmRlci10b3AtbGVmdC1yYWRpdXM6NHB4fS5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24taGVhZGVye2JvcmRlci1ib3R0b206MXB4IHNvbGlkICNjY2M7cGFkZGluZzo1cHggN3B4fS5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tZm9vdGVye2JvcmRlci10b3A6MXB4IHNvbGlkICNjY2M7cGFkZGluZzo1cHggN3B4fS5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXN7bWFyZ2luLWJvdHRvbToxcHh9Lm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0Z3JvdXB7dXNlci1zZWxlY3Q6bm9uZTtwYWRkaW5nOjhweCAxMHB4O2ZvbnQtd2VpZ2h0OjUwMDtjb2xvcjpyZ2JhKDAsMCwwLDAuNTQpO2N1cnNvcjpwb2ludGVyfS5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGdyb3VwLm5nLW9wdGlvbi1kaXNhYmxlZHtjdXJzb3I6ZGVmYXVsdH0ubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRncm91cC5uZy1vcHRpb24tbWFya2Vke2JhY2tncm91bmQtY29sb3I6I2Y1ZmFmZn0ubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRncm91cC5uZy1vcHRpb24tc2VsZWN0ZWQsLm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0Z3JvdXAubmctb3B0aW9uLXNlbGVjdGVkLm5nLW9wdGlvbi1tYXJrZWR7YmFja2dyb3VuZC1jb2xvcjojZWJmNWZmO2ZvbnQtd2VpZ2h0OjYwMH0ubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRpb257YmFja2dyb3VuZC1jb2xvcjojZmZmO2NvbG9yOnJnYmEoMCwwLDAsMC44Nyk7cGFkZGluZzo4cHggMTBweH0ubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRpb24ubmctb3B0aW9uLXNlbGVjdGVkLC5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGlvbi5uZy1vcHRpb24tc2VsZWN0ZWQubmctb3B0aW9uLW1hcmtlZHtjb2xvcjojMzMzO2JhY2tncm91bmQtY29sb3I6I2ViZjVmZn0ubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRpb24ubmctb3B0aW9uLXNlbGVjdGVkIC5uZy1vcHRpb24tbGFiZWwsLm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0aW9uLm5nLW9wdGlvbi1zZWxlY3RlZC5uZy1vcHRpb24tbWFya2VkIC5uZy1vcHRpb24tbGFiZWx7Zm9udC13ZWlnaHQ6NjAwfS5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGlvbi5uZy1vcHRpb24tbWFya2Vke2JhY2tncm91bmQtY29sb3I6I2Y1ZmFmZjtjb2xvcjojMzMzfS5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGlvbi5uZy1vcHRpb24tZGlzYWJsZWR7Y29sb3I6I2NjY30ubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRpb24ubmctb3B0aW9uLWNoaWxke3BhZGRpbmctbGVmdDoyMnB4fVtkaXI9XCJydGxcIl0gLm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0aW9uLm5nLW9wdGlvbi1jaGlsZHtwYWRkaW5nLXJpZ2h0OjIycHg7cGFkZGluZy1sZWZ0OjB9Lm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0aW9uIC5uZy10YWctbGFiZWx7Zm9udC1zaXplOjgwJTtmb250LXdlaWdodDo0MDA7cGFkZGluZy1yaWdodDo1cHh9W2Rpcj1cInJ0bFwiXSAubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRpb24gLm5nLXRhZy1sYWJlbHtwYWRkaW5nLWxlZnQ6NXB4O3BhZGRpbmctcmlnaHQ6MH1bZGlyPVwicnRsXCJdIC5uZy1kcm9wZG93bi1wYW5lbHtkaXJlY3Rpb246cnRsO3RleHQtYWxpZ246cmlnaHR9XG4iLCJcclxuLy8gUGFkZGluZyBhbmQgbWFyZ2luIGhlbHBlcnNcclxuLy8gVXNlIGNsYXNzZXMgLm0tdC01IGZvciBtYXJnaW4tdG9wOiA1cHggXHJcbi8vIENoYW5nZXMgc2lkZS9udW1iZXIgYXMgbmVlZGVkXHJcblxyXG4kc3BhY2VhbW91bnRzOiAoNSwgMTAsIDE1LCAyMCwgMjUsIDMwLCAzNSwgNDAsIDQ1LCA1MCwgNzUsIDEwMCk7IFxyXG4kc2lkZXM6ICh0b3AsIGJvdHRvbSwgbGVmdCwgcmlnaHQpO1xyXG5cclxuQGVhY2ggJHNwYWNlIGluICRzcGFjZWFtb3VudHMge1xyXG4gIEBlYWNoICRzaWRlIGluICRzaWRlcyB7XHJcbiAgICAubS0je3N0ci1zbGljZSgkc2lkZSwgMCwgMSl9LSN7JHNwYWNlfSB7XHJcbiAgICAgIG1hcmdpbi0jeyRzaWRlfTogI3skc3BhY2V9cHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICBcclxuICAgIC5wLSN7c3RyLXNsaWNlKCRzaWRlLCAwLCAxKX0tI3skc3BhY2V9IHtcclxuICAgICAgcGFkZGluZy0jeyRzaWRlfTogI3skc3BhY2V9cHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbn0iLCIvLyBTdHJ1Y3R1cmUuc2Nzc1xyXG4vLyBTY2FmZm9sZGluZyBhbmQgZmxleCBzdHlsZXMgZm9yIGJhc2ljIHN0cnVjdHVyZSBvZiBwYWdlXHJcbi8vIEluY2x1ZGluZyBTaWRlYmFyXHJcblxyXG4jb3V0ZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdHJhbnNpdGlvbjogMC4xNXM7XHJcblxyXG4gICAgaGVhZGVyI21haW57XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBoZWlnaHQ6ICR0b3BCYXJIZWlnaHQ7XHJcbiAgICAgICAgbWluLWhlaWdodDogJHRvcEJhckhlaWdodDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmxhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQm9keSB3cmFwcGVyXHJcbiAgICAvLyAgSW5jbHVkZXMgc2lkZWJhciBhbmQgbWFpbiBjb250ZW50XHJcbiAgICAjYm9keXtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZ3JvdzogMztcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG5cclxuICAgICAgICAvLyA1MDAwIFotaW5kZXhcclxuICAgICAgICAjc2lkZWJhcntcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyODBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2UsIHdpZHRoIDBzIDAuMTVzO1xyXG5cclxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICAgIHRvcDogJHRvcEJhckhlaWdodDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA2OXB4O1xyXG4gICAgICAgICAgICAgICAgbGVmdDogLTI4MHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGZhZGUtb3V0KCRibGFjaywgMC44KTtcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6IDUwMDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIEZ1bGwgTW9iaWxlIC0gbWVudSBvbiBib3R0b21cclxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NTBweCkge1xyXG4gICAgICAgICAgICAgICAgdG9wOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOiAtNjB2aDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNjB2aDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6ICRib3JkZXJSYWRpdXNMO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICRib3JkZXJSYWRpdXNMO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmLmV4cGFuZGVke1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMHB4O1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2UsIHdpZHRoIDBzO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIEZ1bGwgTW9iaWxlXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1MHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBmYWRlLW91dCgkYmxhY2ssIDAuOCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IFxyXG5cclxuICAgICAgICBtYWlue1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgZmxleC1ncm93OiAzO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vLyBTaWRlYmFyIExpZ2h0Ym94XHJcbi8vIFNpZGViYXIgTGlnaHRib3hcclxuLy8gU2lkZWJhciBMaWdodGJveFxyXG4vLyBTaWRlYmFyIExpZ2h0Ym94XHJcbiNzaWRlYmFyTGlnaHRib3h7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogJHRvcEJhckhlaWdodDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB6LWluZGV4OiA0OTk5O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZmFkZS1vdXQoJGJsYWNrLCAwLjYpO1xyXG4gICAgaGVpZ2h0OiAwcHg7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNpdGlvbjogaGVpZ2h0IDBzIDAuMnMsIG9wYWNpdHkgMC4ycztcclxuXHJcbiAgICAmLnZpc2libGV7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGhlaWdodCAwcywgb3BhY2l0eSAwLjJzO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCIvLyBQYXJhZ3JhcGhzXHJcbnB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmc6IDAgMCA4cHggMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICRzYW5zO1xyXG4gICAgY29sb3I6ICR0ZXh0O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRmdWxsTW9iaWxlKSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuaDEsaDIsaDMsaDR7XHJcbiAgICBmb250LWZhbWlseTogJHBvcHBpbnM7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbmg1LGg2e1xyXG4gICAgZm9udC1mYW1pbHk6ICRzYW5zO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuaDF7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbn1cclxuaDJ7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbn1cclxuaDN7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbn1cclxuaDR7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuaDV7XHJcbiAgICBmb250LXNpemU6IDE4cHhcclxufVxyXG5oNntcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuXHJcbmxhYmVse1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICRzdWJ0bGU7XHJcbiAgICBtYXJnaW46IDJweCAwIDJweCAwO1xyXG59IiwiLy8gTGlnaHRib3ggLSBkYXJrIGJhY2tncm91bmRcclxuLy8gQ2xpY2sgdG8gY2xvc2UgbW9kYWxcclxuXHJcbiNtb2RhbExpZ2h0Ym94e1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxufVxyXG5cclxuLy8gQWRkIGNsYXNzIGJsdXIgdG8gYW55IGVsZW1lbnQgeW91IHdhbnQgYmx1cnJlZFxyXG4vLyBCZXN0IHVzZTogYWRkIHRvIG91dGVyIGJvZHkgd3JhcHBlciB3aGVuIG1vZGFsIGlzIHZpc2libGVcclxuLmJsdXJ7XHJcbiAgICBmaWx0ZXI6IGJsdXIoNnB4KTtcclxuICAgIHRyYW5zaXRpb246IDBzO1xyXG59XHJcblxyXG5cclxuLy8gTW9kYWwgU3RydWN0dXJlXHJcbi8vIE1vZGFsIFN0cnVjdHVyZVxyXG4ubW9kYWwtd3JhcHBlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nOiAwIDYlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZmFkZS1vdXQoJGJsYWNrLCAwLjQpO1xyXG4gICAgei1pbmRleDogMTAwMDA7XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkZnVsbE1vYmlsZSkge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuXHJcbiAgICAubW9kYWx7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBtaW4td2lkdGg6IDQwMHB4O1xyXG4gICAgICAgIG1heC13aWR0aDogNjgwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogJGJvcmRlclJhZGl1c0w7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDI0MHB4O1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDkwdmg7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcblxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJGZ1bGxNb2JpbGUpIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogbm9uZTtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiBub25lO1xyXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiA4NXZoO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIC8vIE1vZGFsIGhlYWRlciAtIHRpdGxlIGFuZCBjbG9zZSBidXR0b25cclxuICAgICAgICAubW9kYWwtaGVhZGVye1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIGJveHMtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkcG9wcGlucztcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xyXG5cclxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkZnVsbE1vYmlsZSkge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTVweCAyMHB4IDVweCAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAudGl0bGV7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5tb2RhbC1jbG9zZXtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA0MnB4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IGZhZGUtb3V0KCRibGFjaywgMC43KTtcclxuXHJcbiAgICAgICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkcmVkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJjphY3RpdmV7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBNb2RhbCBjb250ZW50XHJcbiAgICAgICAgLm1vZGFsLWNvbnRlbnR7XHJcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgZmxleC1ncm93OiAzO1xyXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiA0NXZoO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuXHJcbiAgICAgICAgICAgICYubm9wYWRkaW5ne1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICAgICY6bGFzdC1jaGlsZHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkZnVsbE1vYmlsZSkge1xyXG4gICAgICAgICAgICAgICAgbWF4LWhlaWdodDogNTB2aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBNb2RhbCBBY3Rpb25zL2J1dHRvbnNcclxuICAgICAgICAubW9kYWwtYWN0aW9uc3tcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDE3cHg7XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRmdWxsTW9iaWxlKSB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYubGVmdHtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLnJpZ2h0e1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYnV0dG9ue1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDNweDtcclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRmdWxsTW9iaWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgMCAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZ3JvdzogMztcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEycHggMTBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC8vIEEgbGl0dGxlIGJpZ2dlciBtb2RhbCAob24gbGFyZ2Ugc2NyZWVucylcclxuICAgICAgICAvLyBBIGxpdHRsZSBiaWdnZXIgbW9kYWwgKG9uIGxhcmdlIHNjcmVlbnMpXHJcbiAgICAgICAgJi5iaWd7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogODgwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBBIHRpbnkgbW9kYWwgLSBmb3IgY29uZmlybWF0aW9uc1xyXG4gICAgICAgIC8vIEEgdGlueSBtb2RhbCAtIGZvciBjb25maXJtYXRpb25zXHJcbiAgICAgICAgJi50aW55e1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDM4MHB4O1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDM0MHB4O1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJGZ1bGxNb2JpbGUpIHtcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogbm9uZTtcclxuXHJcbiAgICAgICAgICAgICAgICAubW9kYWwtY29udGVudHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vIFRvYXN0XHJcbi8vIFRvYXN0XHJcbi8vIFRvYXN0XHJcbiN0b2FzdHtcclxuICAgIHotaW5kZXg6IDEsMDAxO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgYm90dG9tOiAtMjAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTE1MHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6IDEycHggOHB4IDEycHggMTJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXJSYWRpdXNNO1xyXG4gICAgdHJhbnNpdGlvbjogYm90dG9tIC4zcyBlYXNlLWluLW91dCxvcGFjaXR5IDBzIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggMjVweCAtNXB4IHJnYmEoMzAsMTYsODQsLjMpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJsYWNrO1xyXG5cclxuICAgICN0b2FzdEljb257XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbiAgICAgICAgd2lkdGg6IDU1cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuXHJcbiAgICAjdG9hc3RUZXh0e1xyXG4gICAgICAgIGZsZXgtZ3JvdzogMztcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAgICAgICAjdG9hc3RUaXRsZXtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTRweDtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDRweDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMjVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgI3RvYXN0Qm9keXtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMi41cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4yNXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBBbHQgVG9hc3QgQ29sb3JzXHJcbiAgICAmLnJlZHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmVkO1xyXG4gICAgfVxyXG4gICAgJi5ibHVle1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlO1xyXG4gICAgfVxyXG4gICAgJi5ibGFja3tcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmxhY2s7XHJcbiAgICB9XHJcbiAgICAmLndoaXRle1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcclxuXHJcbiAgICAgICAgI3RvYXN0SWNvbixcclxuICAgICAgICAjdG9hc3RUZXh0e1xyXG4gICAgICAgICAgICBjb2xvcjogJGJsYWNrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBXaGVuIHZpc2libGVcclxuICAgICYudmlzaWJsZXtcclxuICAgICAgICBib3R0b206IDI1cHg7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBib3R0b20gLjNzIGVhc2UtaW4tb3V0LG9wYWNpdHkgLjNzIGVhc2UtaW4tb3V0O1xyXG5cclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRmdWxsTW9iaWxlKSB7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBNb2JpbGUgdG9hc3QgLSBmdWxsIHdpZHRoXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRmdWxsTW9iaWxlKSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBib3R0b206IC0yMDBweDtcclxuICAgICAgICBwYWRkaW5nOiAxOHB4IDE0cHggMThweCAxOHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCA1cHggMjVweCA1cHggcmdiYSgzMCwxNiw4NCwuMik7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuLy8gQWJvdXQgTW9kYWxcclxuI2Fib3V0TW9kYWx7XHJcblxyXG4gICAgLm1vZGFsLWNvbnRlbnR7XHJcbiAgICAgICAgd2lkdGg6IDYyMHB4O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAgICAgdGFic3tcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRhYntcclxuICAgICAgICAgICAgZmxleC1ncm93OiAzO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5wYW5le1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vIEJ1dHRvbnNcclxuLy8gQnV0dG9uc1xyXG4vLyBCdXR0b25zXHJcbmJ1dHRvbntcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nOiA2cHggMTZweDtcclxuICAgIGZvbnQtZmFtaWx5OiAkcG9wcGlucztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5O1xyXG4gICAgY29sb3I6ICR3aGl0ZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjE1cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogJGJvcmRlclJhZGl1cztcclxuXHJcbiAgICAmOmhvdmVye1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJHByaW1hcnksIDUlKTtcclxuICAgIH1cclxuXHJcbiAgICAmOmZvY3Vze1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgfVxyXG5cclxuICAgICY6YWN0aXZle1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBDb2xvcnNcclxuICAgIC8vIFJlZFxyXG4gICAgJi5yZWR7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHJlZDtcclxuICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJHJlZCwgNSUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOmFjdGl2ZXtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHJlZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vLyBTZWFyY2ggU2VsZWN0b3JcclxuLy8gU2VhcmNoIFNlbGVjdG9yXHJcbi8vIFNlYXJjaCBTZWxlY3RvclxyXG4uc2VhcmNoLXNlbGVjdHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIGlucHV0e1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRib3JkZXJDb2xvcjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyUmFkaXVzO1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgcGFkZGluZzogNnB4IDEycHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkc2FucztcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGNvbG9yOiAkYmxhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgLnNlYXJjaC1zZWxlY3QtcmVzdWx0c3tcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibGFjaztcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDE4MHB4O1xyXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG5cclxuICAgICAgICBkaXZ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDRweCAxNXB4O1xyXG5cclxuICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW5wdXQ6Zm9jdXMgfiAuc2VhcmNoLXNlbGVjdC1yZXN1bHRze1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLy8gU2VsZWN0IERyb3Bkb3duXHJcbi8vIFNlbGVjdCBEcm9wZG93blxyXG4vLyBTZWxlY3QgRHJvcGRvd25cclxuLnN0eWxlZC1zZWxlY3R7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgd2lkdGg6IDk5JTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhIHVybChcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxSMGxHT0RsaER3QVVBSUFCQUFBQUFQLy8veUg1QkFFQUFBRUFMQUFBQUFBUEFCUUFBQUlYakkrcHkrMFBvNXdIMkhzWHptdy8vbEhpU0pabVVBQUFPdz09XCIpIG5vLXJlcGVhdCA5NSUgNDglO1xyXG5cclxuICAgIHNlbGVjdHtcclxuICAgICAgICBwYWRkaW5nOiA1cHggOHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMzAlO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbiAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG5cclxuICAgICAgICAmOmZvY3Vze1xyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8vIFJlZ3VsYXIgU2VsZWN0c1xyXG5zZWxlY3R7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIFRlbXAgTXVsdGkgU2VsZWN0XHJcbi8vIFRlbXAgTXVsdGkgU2VsZWN0XHJcbi8vIFRlbXAgTXVsdGkgU2VsZWN0XHJcbi5zaWRlYmFyLWNvbnRlbnQgc2VsZWN0e1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGZhZGUtb3V0KCRibGFjaywgMC45KTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblxyXG4gICAgb3B0aW9ue1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIHBhZGRpbmc6IDNweCA4cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRzYW5zO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcbn1cclxuLmZpbHRlci1zZWxlY3R7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgc2VsZWN0e1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDI2cHg7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC4xNXM7XHJcblxyXG4gICAgICAgICY6YmVmb3Jle1xyXG4gICAgICAgICAgICBjb250ZW50OiAnU2VsZWN0JztcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRzYW5zO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogNSU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDEuNSU7XHJcbiAgICAgICAgICAgIGhlaWdodDogOTAlO1xyXG4gICAgICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjphZnRlcntcclxuICAgICAgICAgICAgY29udGVudDogJ1xcZjBkNyc7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnRm9udCBBd2Vzb21lIDUgUHJvJztcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIHRvcDogNSU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDEuNSU7XHJcbiAgICAgICAgICAgIGhlaWdodDogOTAlO1xyXG4gICAgICAgICAgICB3aWR0aDogOTMlO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDFweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZmFkZS1vdXQoJGJsYWNrLCAwLjk1KTtcclxuXHJcbiAgICAgICAgICAgICY6YWZ0ZXJ7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJGJsdWU7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjpmb2N1c3tcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4xNXM7XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEyMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJjphZnRlcixcclxuICAgICAgICAgICAgJjpiZWZvcmV7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImhlYWRlciNtYWlue1xyXG5cclxuICAgIC8vIEJyYW5kaW5nXHJcbiAgICAjYnJhbmRpbmd7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICBwYWRkaW5nOiAwIDAgMCAxNXB4O1xyXG5cclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDAgMCA0MHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI255ZGVjTG9nbyxcclxuICAgICAgICAjdXNnc0xvZ297XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuXHJcbiAgICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzOHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICNueWRlY0xvZ297XHJcbiAgICAgICAgICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcblxyXG4gICAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTGlua3Mgb24gcmlnaHRcclxuICAgICNoZWFkZXJMaW5rc3tcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZ3JvdzogMztcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgcGFkZGluZzogMCAxMHB4IDAgMDtcclxuXHJcbiAgICAgICAgYXtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAxMnB4IDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkYmxhY2s7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkc2FucztcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG5cclxuICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6Zm9jdXN7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOmFjdGl2ZXtcclxuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNzU7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vIEJyYW5kaW5nXHJcbi8vIEJyYW5kaW5nXHJcbi8vIEJyYW5kaW5nXHJcblxyXG5oZWFkZXIjbWFpbntcclxuICAgICNicmFuZGluZ3tcclxuXHJcbiAgICAgICAgLy8gQ29sbGFwc2libGUgVGl0bGVcclxuICAgICAgICAjdGl0bGV7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxuICAgICAgICAgICAgLmFiYnIsXHJcbiAgICAgICAgICAgIC5leHBhbmRlZHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJHBvcHBpbnM7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuYWJicntcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjNweDtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmV4cGFuZGVke1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcblxyXG4gICAgICAgICAgICAgICAgLmV4cGFuZGVke1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vLyBDb2xsYXBzaWJsZSBzZWN0aW9ucyAtIE1hcCAmIERhdGFcclxuLy8gQ29sbGFwc2libGUgc2VjdGlvbnMgLSBNYXAgJiBEYXRhXHJcbi8vIENvbGxhcHNpYmxlIHNlY3Rpb25zIC0gTWFwICYgRGF0YVxyXG5cclxuLmNvbGxhcHNpYmxle1xyXG5cclxuICAgIFxyXG59IiwiLy8gTWFwIGFuZCBsZWdlbmQgdHdlYWtzXHJcblxyXG4jbWFwV3JhcHBlcntcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgI21hcHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGZhZGUtb3V0KCRibGFjaywgMC44KTtcclxuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkYm9yZGVyUmFkaXVzTDtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjE3NXMgZWFzZTtcclxuICAgIH1cclxuXHJcbiAgICAjY29sbGFwc2VNYXB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxuXHJcbiAgICAjdG9nZ2xlTWFwe1xyXG4gICAgICAgIHRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0OyAgICAgXHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICBwYWRkaW5nOiA4cHg7ICAgXHJcblxyXG4gICAgICAgIGRpdntcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNzU7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xyXG5cclxuICAgICAgICAgICAgaSxie1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaXtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJ7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRzYW5zO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICAgZGl2e1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIE1hcCBjb2xsYXBzZWQvbWluaW1pemVkXHJcbiAgICAvLyBNYXAgY29sbGFwc2VkL21pbmltaXplZFxyXG4gICAgJi5jb2xsYXBzZWR7XHJcblxyXG4gICAgICAgICNtYXB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTEwcHg7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMTc1cyBlYXNlO1xyXG5cclxuICAgICAgICAgICAgLmxlYWZsZXQtY29udHJvbC1jb250YWluZXIsXHJcbiAgICAgICAgICAgIC5sZWFmbGV0LWNvbnRyb2x7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjdG9nZ2xlTWFwe1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBmYWRlLW91dCgkYmxhY2ssIDAuMzUpO1xyXG4gICAgICAgICAgICB6LWluZGV4OiA0MDE7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xyXG5cclxuICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGZhZGUtb3V0KCRibGFjaywgMC41MjUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG4iLCIvLyBNYWluIFNDU1MgZmlsZS5cclxuLy8gRG8gbm90IGFkZCBhbnl0aGluZyBkaXJlY3RseSB0byB0aGlzIGZpbGUuXHJcbi8vIEZpbmQgdGhlIGFwcHJvcHJpYXRlIGZpbGUgd2l0aGluIHRoZSAvc3R5bGVzIGZvbGRlclxyXG5cclxuQGltcG9ydCAndmFyaWFibGVzLnNjc3MnO1xyXG5cclxuQGltcG9ydCBcIn5Abmctc2VsZWN0L25nLXNlbGVjdC90aGVtZXMvZGVmYXVsdC50aGVtZS5jc3NcIjtcclxuXHJcblxyXG5cclxuLy8gU0FTUyBoZWxwZXJzL21peGluc1xyXG5AaW1wb3J0ICcvc3R5bGVzL2hlbHBlcnMuc2Nzcyc7XHJcblxyXG4vLyBVbml2ZXJzYWwgSW1wb3J0c1xyXG5AaW1wb3J0ICcvc3R5bGVzL3N0cnVjdHVyZS5zY3NzJztcclxuQGltcG9ydCAnL3N0eWxlcy90ZXh0LnNjc3MnO1xyXG5AaW1wb3J0ICcvc3R5bGVzL21vZGFscy5zY3NzJztcclxuQGltcG9ydCAnL3N0eWxlcy9pbnB1dHMuc2Nzcyc7XHJcblxyXG5AaW1wb3J0ICcvc3R5bGVzL2hlYWRlci5zY3NzJztcclxuXHJcbkBpbXBvcnQgJy9zdHlsZXMvY3VzdG9tL2dlbmVyYWwuc2Nzcyc7XHJcbkBpbXBvcnQgJy9zdHlsZXMvY3VzdG9tL21hcC5zY3NzJztcclxuXHJcblxyXG5cclxuLy8gU3BlY2lmaWMgaW1wb3J0c1xyXG5cclxuXHJcbi8qVEVNUE9SQVJZIFNUWUxJTkcgVU5USUwgV0UgR0VUIFRIRSBMSVFXSURTIERBU0hCT0FSRCBJTlNFUlRFRCBIRVJFKi9cclxuI2Rhc2hib2FyZFRhYmxle1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBmYWRlLW91dCgkYmxhY2ssIDAuOCk7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZzogIDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDVweDtcclxuXHJcbiAgICAucm93e1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgICY6bnRoLWNoaWxkKGV2ZW4pe1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwLDEwLDUwLDAuMDgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGl2e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxM3B4O1xyXG4gICAgICAgICAgICBjb2xvcjogJGJsYWNrO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMCU7XHJcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMztcclxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cclxuICAgICAgICAgICAgJjpudGgtY2hpbGQoMSl7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLmhlYWRlcntcclxuXHJcbiAgICAgICAgICAgIGRpdntcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0gXHJcbiJdfQ== */"

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
    AppComponent.prototype.ngOnInit = function () {
    };
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
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]
            ],
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

module.exports = "<div id=\"dataView\">\r\n    <dataloader-div></dataloader-div>\r\n    <h1>Data</h1>\r\n    <h3 *ngIf=\"showSiteData == true && noData == false\">Site name: {{selectedSite}}</h3>\r\n\r\n    <div [class.hidden]=\"showSiteData == true\" id=\"chartWrapper\">\r\n        <div id=\"typeChart\"></div>\r\n        <div id=\"orgChart\"></div>\r\n    </div>\r\n    <div [class.hidden]=\"showSiteData == false || noData == true\" id=\"chartWrapper\">\r\n        <div [class.hidden]=\"unitCodes.length == 1\"id=\"siteChart2\"></div>\r\n        <div id=\"siteChart\"></div>\r\n    </div>\r\n    <div [class.hidden]=\"showSiteData == false || noData == true\">\r\n        <button (click)=\"downloadFile()\">Download Results File</button>\r\n        <table id=\"dataTable\">\r\n            <thead>\r\n                <tr class=\"row header\">\r\n                    <th>Activity Start Date</th>\r\n                    <th>Depth</th>\r\n                    <th>Value</th>\r\n                    <th>Hydrologic Event</th>\r\n                    <th>Collection Method</th>\r\n                    <th>Aquifer</th>\r\n                    <th>Provider</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let sample of resultJson\" class=\"row\">\r\n                    <td>{{sample.ActivityStartDate}}</td>\r\n                    <td>{{sample['ActivityBottomDepthHeightMeasure/MeasureValue']}}\r\n                        {{sample['ActivityBottomDepthHeightMeasure/MeasureUnitCode']}}</td>\r\n                    <td>{{sample.ResultMeasureValue}} {{sample['ResultMeasure/MeasureUnitCode']}}</td>\r\n                    <td>{{sample.HydrologicEvent}}</td>\r\n                    <td>{{sample['SampleCollectionMethod/MethodIdentifier']}}</td>\r\n                    <td>{{sample.SampleAquifer}}</td>\r\n                    <td>{{sample.ProviderName}}</td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n\r\n    </div>\r\n    <div *ngIf=\"noData == true\" id=\"noData\">\r\n        <h2>No data was returned</h2>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/mainview/dataview/dataview.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/mainview/dataview/dataview.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Open+Sans:400,600,700|Poppins:300,400,600,700\");\n#noData {\n  color: #F23D47;\n  font-size: 14px;\n  display: block; }\n#dataView {\n  display: block;\n  box-sizing: border-box;\n  padding: 15px; }\n#chartWrapper {\n  display: flex;\n  justify-content: center;\n  box-sizing: border-box;\n  padding: 20px 0 45px 0; }\n#chart1,\n#chart2 {\n  display: block;\n  width: 48%;\n  height: 320px; }\n#dataTable {\n  display: flex;\n  flex-direction: column;\n  border: 1px solid rgba(16, 16, 16, 0.2);\n  box-sizing: border-box;\n  padding: 15px;\n  border-radius: 10px;\n  margin-bottom: 45px; }\n#dataTable .row {\n    display: flex;\n    width: 100%; }\n#dataTable .row:nth-child(even) {\n      background-color: rgba(10, 10, 50, 0.08); }\n#dataTable .row td, #dataTable .row th {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      text-align: center;\n      font-size: 12px;\n      line-height: 13px;\n      color: #101010;\n      height: 40px;\n      width: 10%;\n      flex-grow: 3;\n      box-sizing: border-box;\n      padding: 0 10px;\n      text-align: left; }\n#dataTable .row td:nth-child(1), #dataTable .row th:nth-child(1) {\n        font-weight: bolder; }\n#dataTable .row.header div {\n      font-weight: bolder; }\n.hidden {\n  display: none !important; }\nbutton {\n  margin-bottom: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbnZpZXcvZGF0YXZpZXcvYzpcXE5ZQmFja3VwXFxHaXRIdWJcXExJUVdJRFMvc3JjXFxhcHBcXHZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9tYWludmlldy9kYXRhdmlldy9jOlxcTllCYWNrdXBcXEdpdEh1YlxcTElRV0lEUy9zcmNcXGFwcFxcbWFpbnZpZXdcXGRhdGF2aWV3XFxkYXRhdmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxvR0FBWTtBQ0NaO0VBQ0ksY0RLUztFQ0pULGVBQWU7RUFDZixjQUFjLEVBQUE7QUFHbEI7RUFDSSxjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLGFBQWEsRUFBQTtBQU1qQjtFQUNJLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLHNCQUFzQixFQUFBO0FBRTFCOztFQUVJLGNBQWM7RUFDZCxVQUFVO0VBQ1YsYUFBYSxFQUFBO0FBR2pCO0VBQ0ksYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1Q0FBdUM7RUFDdkMsc0JBQXNCO0VBQ3RCLGFBQWM7RUFDZCxtQkFBbUI7RUFDbkIsbUJBQW1CLEVBQUE7QUFQdkI7SUFVUSxhQUFhO0lBQ2IsV0FBVyxFQUFBO0FBWG5CO01BY1ksd0NBQXFDLEVBQUE7QUFkakQ7TUFrQlksYUFBYTtNQUNiLHNCQUFzQjtNQUN0Qix1QkFBdUI7TUFDdkIsa0JBQWtCO01BQ2xCLGVBQWU7TUFDZixpQkFBaUI7TUFDakIsY0RqREc7TUNrREgsWUFBWTtNQUNaLFVBQVU7TUFDVixZQUFZO01BQ1osc0JBQXNCO01BQ3RCLGVBQWU7TUFDZixnQkFBZ0IsRUFBQTtBQTlCNUI7UUFpQ2dCLG1CQUFtQixFQUFBO0FBakNuQztNQXdDZ0IsbUJBQW1CLEVBQUE7QUFNbkM7RUFDSSx3QkFBd0IsRUFBQTtBQUc1QjtFQUNJLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWFpbnZpZXcvZGF0YXZpZXcvZGF0YXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBGb250c1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2Fuczo0MDAsNjAwLDcwMHxQb3BwaW5zOjMwMCw0MDAsNjAwLDcwMCcpO1xyXG5cclxuXHJcbi8vIFZhcmlhYmxlc1xyXG4kYmxhY2s6ICMxMDEwMTA7XHJcbiR3aGl0ZTogI2ZmZjtcclxuJGJnOiAjRjlGQUZFO1xyXG4kcmVkOiAjRjIzRDQ3O1xyXG4kYmx1ZTogIzNFM0JGQjtcclxuJHByaW1hcnk6ICRibHVlO1xyXG4kdGV4dDogZmFkZS1vdXQoJGJsYWNrLCAwLjEpO1xyXG4kc3VidGxlOiBmYWRlLW91dCgkYmxhY2ssIDAuNSk7XHJcblxyXG4kYm9yZGVyQ29sb3I6IGZhZGUtb3V0KCRibGFjaywgMC44NSk7XHJcbiRib3JkZXJSYWRpdXM6IDRweDtcclxuJGJvcmRlclJhZGl1c006IDhweDtcclxuJGJvcmRlclJhZGl1c0w6IDE2cHg7XHJcblxyXG4vLyBGb250c1xyXG4kcG9wcGluczogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4kc2FuczogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcblxyXG5cclxuJHRyYW5zaXRpb246IDAuMTVzO1xyXG4kYm9yZGVyUmFkaXVzOiA0cHg7XHJcblxyXG4vLyBIZWlnaHRzIGFuZCBtZWFzdXJlbWVudHNcclxuJHRvcEJhckhlaWdodDogNTRweDtcclxuXHJcblxyXG4vLyBSZXNwb25zaXZlbmVzc1xyXG4kZnVsbE1vYmlsZTogNDYwcHg7IiwiQGltcG9ydCAnLi4vLi4vdmFyaWFibGVzLnNjc3MnO1xyXG5cclxuI25vRGF0YXtcclxuICAgIGNvbG9yOiAkcmVkO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbiNkYXRhVmlld3tcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiNjaGFydFdyYXBwZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZzogMjBweCAwIDQ1cHggMDtcclxufVxyXG4jY2hhcnQxLFxyXG4jY2hhcnQye1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogNDglO1xyXG4gICAgaGVpZ2h0OiAzMjBweDtcclxufVxyXG5cclxuI2RhdGFUYWJsZXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZmFkZS1vdXQoJGJsYWNrLCAwLjgpO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6ICAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDQ1cHg7XHJcblxyXG4gICAgLnJvd3tcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAmOm50aC1jaGlsZChldmVuKXtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMCwxMCw1MCwwLjA4KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRkLHRoe1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxM3B4O1xyXG4gICAgICAgICAgICBjb2xvcjogJGJsYWNrO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMCU7XHJcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMztcclxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cclxuICAgICAgICAgICAgJjpudGgtY2hpbGQoMSl7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLmhlYWRlcntcclxuXHJcbiAgICAgICAgICAgIGRpdntcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0gXHJcblxyXG4uaGlkZGVue1xyXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5idXR0b257XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn0iXX0= */"

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
        this.characteristic = 'Nitrate';
        this.showSiteData = false;
        this.selectedSite = '';
        this.noData = false;
        this.unitCodes = [];
    }
    DataviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._mapService.SelectedSite.subscribe(function (Response) {
            _this.getResultData(Response.name);
        });
        this._mapService.SelectedChar.subscribe(function (Response) {
            _this.noData = false;
            if (Response === 'Nitrogen') {
                _this.characteristic = 'Nitrogen&characteristicName=Nitrogen, mixed forms (NH3), (NH4), organic, (NO2) and (NO3)';
            }
            else {
                _this.characteristic = Response;
            }
        });
        this._mapService.SiteChange.subscribe(function (geojson) {
            _this.geojson = geojson;
            _this.geoJSONsiteCount = geojson.features.length;
            _this.showSiteData = false;
            _this.noData = false;
            _this.getStatData();
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
                layout: 'vertical',
                align: 'left',
                verticalAlign: 'top',
                floating: true,
                borderWidth: 1
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
                        pointFormat: '{point.name}'
                    }
                }
            }
        };
        this.siteChart = new highcharts__WEBPACK_IMPORTED_MODULE_1__["Chart"]('siteChart', this._siteChartOptions);
        this.siteChart2 = new highcharts__WEBPACK_IMPORTED_MODULE_1__["Chart"]('siteChart2', this._siteChartOptions);
        this.siteChart.setTitle({ text: 'Result Measure Value by Depth' });
        this.siteChart2.setTitle({ text: 'Result Measure Value by Measurement Type' });
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
            }
        };
        this.typeChart = new highcharts__WEBPACK_IMPORTED_MODULE_1__["Chart"]('typeChart', this._typeChartOptions);
        this.orgChart = new highcharts__WEBPACK_IMPORTED_MODULE_1__["Chart"]('orgChart', this._typeChartOptions);
        this.typeChart.setTitle({ text: 'Sites By Type' });
        this.orgChart.setTitle({ text: 'Sites By Organization' });
    }; // End NgOnInit
    DataviewComponent.prototype.getResultData = function (site) {
        var _this = this;
        this._loaderService.showDataLoad();
        var resultUrl = 'https://www.waterqualitydata.us/data/Result/search?mimeType=csv&countrycode=US';
        resultUrl += '&siteid=' + site + '&characteristicName=' + this.characteristic;
        this._http.get(resultUrl)
            .subscribe(function (csv) {
            _this.resultCsv = csv;
            _this.resultCsv = _this.resultCsv._body;
            _this.resultJson = _this.csvJSON(_this.resultCsv);
            _this.resultJson = JSON.parse(_this.resultJson);
            _this.showSiteData = true;
            _this.noData = false;
            if (_this.resultJson.length > 0) {
                _this.createSiteCharts(site);
            }
            else {
                _this._loaderService.hideDataLoad();
                _this.noData = true;
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
    DataviewComponent.prototype.createSiteCharts = function (site) {
        while (this.siteChart.series.length > 0) {
            this.siteChart.series[0].remove(true);
        }
        while (this.siteChart2.series.length > 0) {
            this.siteChart2.series[0].remove(true);
        }
        this.selectedSite = site;
        var depthValues = [];
        this.unitCodes = [];
        for (var i = 0; i < this.resultJson.length; i++) { // creating separate series based on properties
            var currentSite = this.resultJson[i];
            // creating an array of unique depths, each will form own series
            var value = currentSite['ActivityBottomDepthHeightMeasure/MeasureValue'];
            if (value !== '' && depthValues.indexOf(value) === -1) {
                depthValues.push(value);
            }
            else if (value === '' && depthValues.indexOf('N/A') === -1) {
                depthValues.push('N/A');
            }
            // creating new series for each characteristic (nitrogen v. nitrate)
            var unit = currentSite['ResultMeasure/MeasureUnitCode'];
            if (unit !== '' && this.unitCodes.indexOf(unit) === -1) {
                this.unitCodes.push(unit);
            }
            else if (unit === '' && this.unitCodes.indexOf('N/A') === -1) {
                this.unitCodes.push('N/A');
            }
        }
        // add series for each characteristic unit label
        for (var unit = 0; unit < this.unitCodes.length; unit++) {
            var data = new Array();
            for (var i = 0; i < this.resultJson.length; i++) {
                var currentSite = this.resultJson[i];
                var currentValue = currentSite['ResultMeasure/MeasureUnitCode'];
                if (currentValue === this.unitCodes[unit] || (currentValue === '' && this.unitCodes[unit] === 'N/A')) {
                    var resultVal = void 0;
                    if (/\d/.test(currentSite.ResultMeasureValue)) {
                        resultVal = Number(currentSite.ResultMeasureValue);
                    }
                    else {
                        resultVal = 0;
                    }
                    var date = currentSite.ActivityStartDate.split('-');
                    date = Date.UTC(date[0], Number(date[1]) - 1, date[2]);
                    data.push({ x: date, y: resultVal, name: resultVal + ' ' + this.unitCodes[unit] });
                }
            }
            this.siteChart2.addSeries({ name: this.unitCodes[unit], data: data });
        }
        // add series for each unique depth
        for (var depth = 0; depth < depthValues.length; depth++) {
            var data = new Array();
            for (var i = 0; i < this.resultJson.length; i++) {
                var currentSite = this.resultJson[i];
                var currentValue = currentSite['ActivityBottomDepthHeightMeasure/MeasureValue'];
                if (currentValue === depthValues[depth] || (currentValue === '' && depthValues[depth] === 'N/A')) {
                    var resultVal = void 0;
                    if (/\d/.test(currentSite.ResultMeasureValue)) {
                        resultVal = Number(currentSite.ResultMeasureValue);
                    }
                    else {
                        resultVal = 0;
                    }
                    var date = currentSite.ActivityStartDate.split('-');
                    date = Date.UTC(date[0], Number(date[1]) - 1, date[2]);
                    data.push({ x: date, y: resultVal, name: resultVal + ' ' + currentSite['ResultMeasure/MeasureUnitCode'] });
                }
            }
            this.siteChart.addSeries({ name: 'Depth: ' + depthValues[depth], data: data });
        }
        this._loaderService.hideDataLoad();
    };
    DataviewComponent.prototype.getStatData = function () {
        var _this = this;
        while (this.typeChart.series.length > 0) {
            this.typeChart.series[0].remove(true);
        }
        while (this.orgChart.series.length > 0) {
            this.orgChart.series[0].remove(true);
        }
        this.siteFilterData = this._mapService.filterOptions;
        // site type chart
        var typeData = [];
        this.siteFilterData.searchType.forEach(function (searchType) {
            var count = _this.geojson.features.filter(function (feat) {
                return feat.properties.searchType === searchType;
            }).length;
            if (count > 0) {
                var perc = count / _this.geoJSONsiteCount * 100;
                typeData.push({ name: searchType, y: perc, sliced: true, selected: true });
            }
        });
        this.typeChart.addSeries({ name: 'Site Type Stats', colorByPoint: true, data: typeData });
        // org name chart
        var orgData = [];
        this.siteFilterData.orgName.forEach(function (orgName) {
            var count = _this.geojson.features.filter(function (feat) {
                return feat.properties.orgName === orgName;
            }).length;
            if (count > 0) {
                var perc = count / _this.geoJSONsiteCount * 100;
                orgData.push({ name: orgName, y: perc, sliced: true, selected: true });
            }
        });
        this.orgChart.addSeries({ name: 'Site Organization Stats', colorByPoint: true, data: orgData });
    };
    DataviewComponent.prototype.downloadFile = function () {
        var filename = this.selectedSite + '.csv';
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
    //public WQP: any;
    function MapComponent(_mapService) {
        this._mapService = _mapService;
    }
    MapComponent.prototype.ngOnInit = function () {
        var _this = this;
        //init map
        this._mapService.map = leaflet__WEBPACK_IMPORTED_MODULE_2__["map"]("map", {
            center: leaflet__WEBPACK_IMPORTED_MODULE_2__["latLng"](40.9, -73.0),
            zoom: 9,
            minZoom: 4,
            maxZoom: 19,
            renderer: leaflet__WEBPACK_IMPORTED_MODULE_2__["canvas"]()
        });
        //baseMaps
        this._mapService.map.addLayer(this._mapService.baseMaps[this._mapService.chosenBaseLayer]);
        //add empty feature group
        this._mapService.sitesLayer = leaflet__WEBPACK_IMPORTED_MODULE_2__["featureGroup"]().addTo(this._mapService.map);
        this._mapService.nwisLayer = leaflet__WEBPACK_IMPORTED_MODULE_2__["featureGroup"]().addTo(this._mapService.map);
        ///NOT FINISHED
        this._mapService.map.on('load moveend zoomend', function (e) {
            //console.log('here',e)
            var bbox = _this._mapService.map.getBounds().getSouthWest().lng.toFixed(7) + ',' + _this._mapService.map.getBounds().getSouthWest().lat.toFixed(7) + ',' + _this._mapService.map.getBounds().getNorthEast().lng.toFixed(7) + ',' + _this._mapService.map.getBounds().getNorthEast().lat.toFixed(7);
            //this._mapService.queryNWISrtGages(bbox).subscribe(results => console.log('results',results));
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

module.exports = "<i\r\n  class=\"far\"\r\n  id=\"sidebarToggle\"\r\n  (click)=\"expandSidebar = !expandSidebar\"\r\n  [ngClass]=\"{ 'fa-bars': !expandSidebar, 'fa-times': expandSidebar }\"\r\n  ></i>\r\n\r\n<div id=\"sidebar\" [ngClass]=\"{ 'expanded': expandSidebar }\">\r\n\r\n  <!--  Sidebar Basemaps  -->\r\n  <div class=\"sidebar-header\" (click)=\"showBasemaps = !showBasemaps\" [ngClass]=\"{ expanded: showBasemaps }\">\r\n    <i class=\"far fa-map\"></i>\r\n    <b>Basemaps</b>\r\n  </div>\r\n\r\n  <!-- Basemaps content -->\r\n  <div class=\"sidebar-content\" [ngClass]=\"{ expanded: showBasemaps }\">\r\n    <div id=\"sidebarBasemaps\">\r\n      <div\r\n        class=\"basemap\"\r\n        id=\"basemap1\"\r\n        (click)=\"toggleLayer('OpenStreetMap')\"\r\n        [ngClass]=\"{ active: chosenBaseLayer == 'OpenStreetMap' }\"\r\n      >\r\n        Streets\r\n      </div>\r\n      <div\r\n        class=\"basemap\"\r\n        id=\"basemap2\"\r\n        (click)=\"toggleLayer('Topo')\"\r\n        [ngClass]=\"{ active: chosenBaseLayer == 'Topo' }\"\r\n      >\r\n        Topographic\r\n      </div>\r\n      <div\r\n        class=\"basemap\"\r\n        id=\"basemap3\"\r\n        (click)=\"toggleLayer('CartoDB')\"\r\n        [ngClass]=\"{ active: chosenBaseLayer == 'CartoDB' }\"\r\n      >\r\n        CartoDB\r\n      </div>\r\n      <div\r\n        class=\"basemap\"\r\n        id=\"basemap4\"\r\n        (click)=\"toggleLayer('Terrain')\"\r\n        [ngClass]=\"{ active: chosenBaseLayer == 'Terrain' }\"\r\n      >\r\n        Terrain\r\n      </div>\r\n      <div\r\n        class=\"basemap\"\r\n        id=\"basemap5\"\r\n        (click)=\"toggleLayer('Satellite')\"\r\n        [ngClass]=\"{ active: chosenBaseLayer == 'Satellite' }\"\r\n      >\r\n        Satellite\r\n      </div>\r\n      <div\r\n        class=\"basemap\"\r\n        id=\"basemap5\"\r\n        (click)=\"toggleLayer('Gray')\"\r\n        [ngClass]=\"{ active: chosenBaseLayer == 'Gray' }\"\r\n      >\r\n        Gray\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!--  Sidebar Parameter Filters  -->\r\n  <div id=\"siteCount\"><b>{{geoJSONsiteCount}}</b> sites showing</div>\r\n\r\n  <div class=\"sidebar-header\" (click)=\"showParameterFilters = !showParameterFilters\" [ngClass]=\"{ expanded: showParameterFilters }\">\r\n    <i class=\"far fa-filter\"></i>\r\n    <b>Parameter Filters</b>\r\n  </div>\r\n\r\n  <!-- Filters Parameter Content -->\r\n  <div class=\"sidebar-content\" [ngClass]=\"{ expanded: showParameterFilters }\">\r\n\r\n    <form *ngIf=\"parameterFilterData\" [formGroup]=\"parameterDropDownGroup\" id=\"sidebarParameterFilters\">\r\n\r\n      <!-- characteristic -->\r\n      <label for=\"characteristic\">Characteristic</label>\r\n      <ng-select \r\n        formControlName=\"characteristic\"\r\n        [items]=\"parameterFilterData.characteristics\"\r\n        [multiple]=\"true\"\r\n        bindLabel=\"name\"\r\n        placeholder=\"Select\">\r\n      </ng-select>\r\n\r\n      <br><br>\r\n    </form>\r\n\r\n  </div>\r\n\r\n  <!--  Sidebar Site Filters  -->\r\n\r\n  <div class=\"sidebar-header\" (click)=\"showSiteFilters = !showSiteFilters\" [ngClass]=\"{ expanded: showSiteFilters }\">\r\n    <i class=\"far fa-filter\"></i>\r\n    <b>Site Filters</b>\r\n  </div>\r\n  <!-- Filters Site Content -->\r\n    \r\n  <div class=\"sidebar-content\" [ngClass]=\"{ expanded: showSiteFilters }\">\r\n    <form *ngIf=\"siteFilterData\" [formGroup]=\"siteDropDownGroup\" id=\"sidebarSiteFilters\">\r\n\r\n      <!-- Huc8 -->\r\n      <label for=\"huc8\">Huc8</label>\r\n      <ng-select \r\n      formControlName=\"huc8\"\r\n        [items]=\"siteFilterData.huc8\"\r\n        [multiple]=\"true\"\r\n        bindLabel=\"name\"\r\n        placeholder=\"Select\">\r\n      </ng-select>\r\n\r\n      <!-- Org ID -->\r\n      <label for=\"orgId\">Organization Id</label>\r\n\r\n      <ng-select \r\n        formControlName=\"orgId\"\r\n        [items]=\"siteFilterData.orgId\"\r\n        [multiple]=\"true\"\r\n        bindLabel=\"name\"\r\n        placeholder=\"Select\">\r\n      </ng-select>\r\n\r\n      <!-- Org Name -->\r\n      <label for=\"orgName\">Organization Name</label>\r\n\r\n      <ng-select \r\n        formControlName=\"orgName\"\r\n        [items]=\"siteFilterData.orgName\"\r\n        [multiple]=\"true\"\r\n        bindLabel=\"name\"\r\n        placeholder=\"Select\">\r\n      </ng-select>\r\n\r\n      <!-- Data Provider -->\r\n      <label for=\"provider\">Data Provider</label>\r\n      <ng-select \r\n        formControlName=\"provider\"\r\n        [items]=\"siteFilterData.provider\"\r\n        [multiple]=\"true\"\r\n        bindLabel=\"name\"\r\n        placeholder=\"Select\">\r\n      </ng-select>\r\n\r\n      <!-- Data Provider -->\r\n      <label for=\"searchType\">Keyword</label>\r\n      <ng-select \r\n      formControlName=\"searchType\"\r\n        [items]=\"siteFilterData.searchType\"\r\n        [multiple]=\"true\"\r\n        bindLabel=\"name\"\r\n        placeholder=\"Select\">\r\n      </ng-select>\r\n\r\n      <label for=\"type\">Site Type</label>\r\n      <ng-select \r\n        formControlName=\"type\"\r\n        [items]=\"siteFilterData.type\"\r\n        [multiple]=\"true\"\r\n        bindLabel=\"name\"\r\n        placeholder=\"Select\">\r\n      </ng-select>\r\n\r\n    </form>\r\n\r\n    <button class=\"clearForm\" title=\"Clear All Selections\" (click)=\"clearForm()\">Clear Selections</button>\r\n  </div>\r\n  \r\n\r\n\r\n</div>\r\n<!-- End Sidebar -->\r\n\r\n<!-- Sidebar lightbox for mobile -->\r\n<div id=\"sidebarLightbox\" [ngClass]=\"{ visible: expandSidebar }\" (click)=\"expandSidebar = false\"></div>"

/***/ }),

/***/ "./src/app/mainview/sidebar/sidebar.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/mainview/sidebar/sidebar.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Open+Sans:400,600,700|Poppins:300,400,600,700\");\n#sidebarToggle {\n  color: white;\n  display: none;\n  flex-direction: column;\n  justify-content: center;\n  transition: 0.2s;\n  font-size: 20px;\n  width: 24px;\n  text-align: center;\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  height: 54px;\n  width: 54px; }\n#sidebarToggle:hover, #sidebarToggle:active {\n    cursor: pointer;\n    opacity: 0.6;\n    transition: 0.2s; }\n@media only screen and (max-width: 1200px) {\n    #sidebarToggle {\n      display: flex; } }\n#sidebar {\n  height: 100%;\n  overflow: auto; }\n#sidebar .sidebar-header {\n    font-family: \"Poppins\", sans-serif;\n    font-weight: 600;\n    font-size: 18px;\n    color: #101010;\n    letter-spacing: -0.3px;\n    display: flex; }\n#sidebar .sidebar-header i {\n      width: 40px;\n      height: 30px;\n      display: flex;\n      flex-direction: column;\n      justify-content: center; }\n#sidebar .sidebar-header b {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      flex-grow: 3;\n      position: relative; }\n#sidebar .sidebar-header b:after {\n        content: '\\f067';\n        font-family: 'Font Awesome 5 Pro';\n        position: absolute;\n        right: 0;\n        color: rgba(16, 16, 16, 0.2);\n        font-size: 16px; }\n#sidebar .sidebar-header.expanded b:after {\n      content: '\\f068'; }\n#sidebar .sidebar-header:hover {\n      cursor: pointer; }\n#sidebar .sidebar-header:hover b {\n        text-decoration: underline; }\n#sidebar .sidebar-header:hover b:after {\n          color: #101010; }\n#sidebar .sidebar-content {\n    display: block;\n    box-sizing: border-box;\n    padding-left: 40px;\n    height: 0px;\n    overflow: hidden;\n    margin-bottom: 15px; }\n#sidebar .sidebar-content.expanded {\n      height: auto; }\n#sidebar #sidebarBasemaps .basemap {\n    display: block;\n    font-family: \"Open Sans\", sans-serif;\n    font-size: 13px;\n    font-weight: 500;\n    box-sizing: border-box;\n    letter-spacing: -0.2px;\n    padding: 3px 0;\n    color: #101010; }\n#sidebar #sidebarBasemaps .basemap:hover {\n      cursor: pointer;\n      text-decoration: underline; }\n#sidebar #sidebarBasemaps .basemap.active {\n      color: #3E3BFB; }\n#sidebar #sidebarBasemaps .basemap.active:hover {\n        text-decoration: none; }\n#siteCount {\n  display: block;\n  text-align: center;\n  background-color: rgba(16, 16, 16, 0.15);\n  box-sizing: border-box;\n  border-radius: 4px;\n  padding: 10px;\n  color: #101010;\n  font-size: 12px;\n  font-weight: 500;\n  margin: 0 auto;\n  font-family: \"Poppins\", sans-serif;\n  letter-spacing: -0.4px;\n  margin-bottom: 8px;\n  margin-top: 15px; }\n#siteCount b {\n    font-weight: 600;\n    letter-spacing: -0.2px; }\n#sidebarFilters {\n  margin-bottom: 15px; }\n#sidebarFilters label {\n    margin-top: 6px; }\n.clearForm {\n  margin-top: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbnZpZXcvc2lkZWJhci9jOlxcTllCYWNrdXBcXEdpdEh1YlxcTElRV0lEUy9zcmNcXGFwcFxcdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL21haW52aWV3L3NpZGViYXIvYzpcXE5ZQmFja3VwXFxHaXRIdWJcXExJUVdJRFMvc3JjXFxhcHBcXG1haW52aWV3XFxzaWRlYmFyXFxzaWRlYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLG9HQUFZO0FDR1o7RUFDSSxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixRQUFRO0VBQ1IsU0FBUztFQUNULFlBQVk7RUFDWixXQUFXLEVBQUE7QUFiZjtJQWlCUSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGdCQUFnQixFQUFBO0FBR3BCO0lBdEJKO01BdUJRLGFBQWEsRUFBQSxFQUVwQjtBQUdEO0VBQ0ksWUFBWTtFQUNaLGNBQWMsRUFBQTtBQUZsQjtJQUtRLGtDRGpCdUI7SUNrQnZCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsY0RuQ087SUNvQ1Asc0JBQXNCO0lBQ3RCLGFBQWEsRUFBQTtBQVZyQjtNQWFZLFdBQVc7TUFDWCxZQUFZO01BQ1osYUFBYTtNQUNiLHNCQUFzQjtNQUN0Qix1QkFBdUIsRUFBQTtBQWpCbkM7TUFxQlksYUFBYTtNQUNiLHNCQUFzQjtNQUN0Qix1QkFBdUI7TUFDdkIsWUFBWTtNQUNaLGtCQUFrQixFQUFBO0FBekI5QjtRQTRCZ0IsZ0JBQWdCO1FBQ2hCLGlDQUFpQztRQUNqQyxrQkFBa0I7UUFDbEIsUUFBUTtRQUNSLDRCQUE0QjtRQUM1QixlQUFlLEVBQUE7QUFqQy9CO01Bd0NnQixnQkFBZ0IsRUFBQTtBQXhDaEM7TUE2Q1ksZUFBZSxFQUFBO0FBN0MzQjtRQWdEZ0IsMEJBQTBCLEVBQUE7QUFoRDFDO1VBbURvQixjRDlFTCxFQUFBO0FDMkJmO0lBNkRRLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsbUJBQW1CLEVBQUE7QUFsRTNCO01BcUVZLFlBQVksRUFBQTtBQXJFeEI7SUErRVksY0FBYztJQUNkLG9DRDNGa0I7SUM0RmxCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2QsY0RqSEcsRUFBQTtBQzJCZjtNQXlGZ0IsZUFBZTtNQUNmLDBCQUEwQixFQUFBO0FBMUYxQztNQThGZ0IsY0RySEYsRUFBQTtBQ3VCZDtRQWlHb0IscUJBQXFCLEVBQUE7QUFjekM7RUFDSSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHdDQUF3QztFQUN4QyxzQkFBc0I7RUFDdEIsa0JEM0hjO0VDNEhkLGFBQWE7RUFDYixjRGpKVztFQ2tKWCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxrQ0R0STJCO0VDdUkzQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBO0FBZHBCO0lBaUJRLGdCQUFnQjtJQUNoQixzQkFBc0IsRUFBQTtBQVE5QjtFQUNJLG1CQUFtQixFQUFBO0FBRHZCO0lBSVEsZUFBZSxFQUFBO0FBTXZCO0VBQ0ksZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYWludmlldy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBGb250c1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2Fuczo0MDAsNjAwLDcwMHxQb3BwaW5zOjMwMCw0MDAsNjAwLDcwMCcpO1xyXG5cclxuXHJcbi8vIFZhcmlhYmxlc1xyXG4kYmxhY2s6ICMxMDEwMTA7XHJcbiR3aGl0ZTogI2ZmZjtcclxuJGJnOiAjRjlGQUZFO1xyXG4kcmVkOiAjRjIzRDQ3O1xyXG4kYmx1ZTogIzNFM0JGQjtcclxuJHByaW1hcnk6ICRibHVlO1xyXG4kdGV4dDogZmFkZS1vdXQoJGJsYWNrLCAwLjEpO1xyXG4kc3VidGxlOiBmYWRlLW91dCgkYmxhY2ssIDAuNSk7XHJcblxyXG4kYm9yZGVyQ29sb3I6IGZhZGUtb3V0KCRibGFjaywgMC44NSk7XHJcbiRib3JkZXJSYWRpdXM6IDRweDtcclxuJGJvcmRlclJhZGl1c006IDhweDtcclxuJGJvcmRlclJhZGl1c0w6IDE2cHg7XHJcblxyXG4vLyBGb250c1xyXG4kcG9wcGluczogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4kc2FuczogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcblxyXG5cclxuJHRyYW5zaXRpb246IDAuMTVzO1xyXG4kYm9yZGVyUmFkaXVzOiA0cHg7XHJcblxyXG4vLyBIZWlnaHRzIGFuZCBtZWFzdXJlbWVudHNcclxuJHRvcEJhckhlaWdodDogNTRweDtcclxuXHJcblxyXG4vLyBSZXNwb25zaXZlbmVzc1xyXG4kZnVsbE1vYmlsZTogNDYwcHg7IiwiQGltcG9ydCAnLi4vLi4vdmFyaWFibGVzLnNjc3MnO1xyXG5cclxuLy8gTW9iaWxlIG1lbnUgdG9nZ2xlXHJcbi8vIE91dHNpZGUgc2lkZWJhclxyXG4jc2lkZWJhclRvZ2dsZXtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgd2lkdGg6IDI0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIGhlaWdodDogNTRweDtcclxuICAgIHdpZHRoOiA1NHB4O1xyXG5cclxuICAgICY6aG92ZXIsXHJcbiAgICAmOmFjdGl2ZXtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgb3BhY2l0eTogMC42O1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuMnM7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBTaWRlYmFyXHJcbiNzaWRlYmFye1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcblxyXG4gICAgLnNpZGViYXItaGVhZGVye1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkcG9wcGlucztcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBjb2xvcjogJGJsYWNrO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4zcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAgICAgaXtcclxuICAgICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBie1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgZmxleC1ncm93OiAzO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgICAgICAmOmFmdGVye1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogJ1xcZjA2Nyc7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0ZvbnQgQXdlc29tZSA1IFBybyc7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBmYWRlLW91dCgkYmxhY2ssIDAuOCk7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYuZXhwYW5kZWR7XHJcblxyXG4gICAgICAgICAgICBiOmFmdGVye1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogJ1xcZjA2OCc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgICAgIGJ7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuXHJcbiAgICAgICAgICAgICAgICAmOmFmdGVye1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkYmxhY2s7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIENvbnRlbnQgQmxvY2tzXHJcbiAgICAvLyBFeHBhbmQgd2l0aCBjbGFzcyAuZXhwYW5kZWRcclxuICAgIC5zaWRlYmFyLWNvbnRlbnR7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAwcHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG5cclxuICAgICAgICAmLmV4cGFuZGVke1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFNpZGViYXIgQmFzZW1hcHNcclxuICAgIC8vIFNpZGViYXIgQmFzZW1hcHNcclxuICAgIC8vIFNpZGViYXIgQmFzZW1hcHNcclxuICAgICNzaWRlYmFyQmFzZW1hcHN7XHJcblxyXG4gICAgICAgIC5iYXNlbWFwe1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRzYW5zO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4ycHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDNweCAwO1xyXG4gICAgICAgICAgICBjb2xvcjogJGJsYWNrO1xyXG5cclxuICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmLmFjdGl2ZXtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeTtcclxuXHJcbiAgICAgICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8vIEN1c3RvbSBTaWRlYmFyIEVsZW1lbnRzXHJcbi8vIEN1c3RvbSBTaWRlYmFyIEVsZW1lbnRzXHJcbi8vIEN1c3RvbSBTaWRlYmFyIEVsZW1lbnRzXHJcbiNzaXRlQ291bnR7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGZhZGUtb3V0KCRibGFjaywgMC44NSk7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogJGJvcmRlclJhZGl1cztcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBjb2xvcjogJGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgZm9udC1mYW1pbHk6ICRwb3BwaW5zO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcblxyXG4gICAgYntcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4ycHg7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vLyBTaWRlYmFyIEZpbHRlcnNcclxuLy8gU2lkZWJhciBGaWx0ZXJzXHJcbi8vIFNpZGViYXIgRmlsdGVyc1xyXG4jc2lkZWJhckZpbHRlcnN7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgXHJcbiAgICBsYWJlbHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuLmNsZWFyRm9ybXtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbn0iXX0= */"

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
        this.cities = [];
        this.showBasemaps = false;
        this.showSiteFilters = true;
        this.showParameterFilters = true;
        this.expandSidebar = false;
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
        //for now we can keep this a static list but ultimately could pull from here in a service
        // https://www.waterqualitydata.us/Codes/Characteristicname?mimeType=xml
        this.parameterFilterData = {
            characteristics: ["Nitrate", "Nitrogen"]
        };
        this.defaultParameterFilter = 'Nitrate';
        this.parameterDropDownGroup = this.formBuilder.group({
            characteristic: [this.defaultParameterFilter]
            //characteristic: [[]]
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
        //this is the main data request
        this._mapService.getData().subscribe(function (response) {
            console.log(response);
            _this.siteFilterData = response;
            _this._mapService.addToSitesLayer(_this._mapService.geoJson);
            _this.geoJSONsiteCount = _this._mapService.geoJson.totalFeatures;
        });
        //set up filter listeners
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
        //requery on wfs data on any parameter filter dropdown change
        this.parameterDropDownGroup.valueChanges.subscribe(function (selections) {
            _this._mapService._characteristicFilterSubject.next(selections.characteristic);
            _this.reQuery();
        });
        //on site dropdown change just re-filter geojson
        this.siteDropDownGroup.valueChanges.subscribe(function (selections) {
            _this.filterGeoJSON(selections);
        });
    };
    SidebarComponent.prototype.reQuery = function () {
        var _this = this;
        //pull values from form
        var characteristic = this.parameterDropDownGroup.get('characteristic').value.join('|');
        //update URL params
        this._mapService.URLparams.SEARCHPARAMS = this._mapService.URLparams.SEARCHPARAMS.split('characteristicName:')[0] + 'characteristicName:' + characteristic;
        //issue new request with updated URL params
        this._mapService.getData().subscribe(function (response) {
            //repopulate site filter dropdowns
            _this.siteFilterData = response;
            //clearForm function clears layer and readds geojson
            _this.clearForm();
        });
    };
    SidebarComponent.prototype.filterGeoJSON = function (selections) {
        var filterJson;
        //console.log("dropdown changed: ", selections);
        this._mapService.sitesLayer.clearLayers();
        //make copy of geojson
        filterJson = JSON.parse(JSON.stringify(this._mapService.geoJson));
        filterJson.totalFeatures = 0;
        filterJson.features = [];
        //main loop over all features
        this._mapService.geoJson.features.forEach(function (feature) {
            //assume we have a match for this feature until proven otherwise
            var match = true;
            //need to check if the site matches all the selected values
            for (var selection in selections) {
                //make sure this selection has a value
                if (selections[selection].length > 0) {
                    //check if this feature DOESN'T MATCH the selection
                    if (selections[selection].indexOf(feature.properties[selection]) === -1) {
                        //doesnt meet this selection so set flag to false
                        match = false;
                    }
                }
            }
            //if we still have a match, its a keeper
            if (match)
                filterJson.features.push(feature);
        });
        filterJson.totalFeatures = filterJson.features.length;
        this.geoJSONsiteCount = filterJson.totalFeatures;
        //console.log('new json length',filterJson.totalFeatures);
        this._mapService.addToSitesLayer(filterJson);
    };
    SidebarComponent.prototype.clearForm = function () {
        var _this = this;
        //reset values to empty arrays if set
        Object.keys(this.siteDropDownGroup.controls).forEach(function (key) {
            if (_this.siteDropDownGroup.get(key).value.length > 0)
                _this.siteDropDownGroup.get(key).setValue([]);
        });
        this._mapService.sitesLayer.clearLayers();
        //set filtergeoJson back to original
        this._mapService.filterJson = this._mapService.geoJson;
        this.geoJSONsiteCount = this._mapService.geoJson.totalFeatures;
        this._mapService.addToSitesLayer(this._mapService.filterJson);
    };
    //called from basemap button click
    SidebarComponent.prototype.toggleLayer = function (newVal) {
        this._mapService.chosenBaseLayer = newVal;
        this._mapService.map.removeLayer(this._mapService.baseMaps["OpenStreetMap"]);
        this._mapService.map.removeLayer(this._mapService.baseMaps["Topo"]);
        this._mapService.map.removeLayer(this._mapService.baseMaps["Terrain"]);
        this._mapService.map.removeLayer(this._mapService.baseMaps["Satellite"]);
        this._mapService.map.removeLayer(this._mapService.baseMaps["Gray"]);
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
            selector: 'dataloader-div',
            template: "<div [class.dataloader-hidden]=\"!show\">\n                  <div class=\"data-loader\" id=\"data-loader\"></div>\n                </div>",
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

module.exports = ".loader-hidden {\n  visibility: hidden; }\n\n.sideloader-hidden {\n  visibility: hidden; }\n\n.loader-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  z-index: 500000; }\n\n.page-loader {\n  position: fixed !important;\n  width: 100%;\n  height: 100%;\n  opacity: 1;\n  z-index: 5000;\n  background-color: rgba(0, 0, 30, 0.6);\n  background-image: url(\"https://wim.usgs.gov/website-assets/branding/usgsanimated.svg\");\n  display: block !important;\n  background-repeat: no-repeat;\n  background-size: 120px auto;\n  background-position: center center; }\n\n.page-loader:after {\n    content: 'Loading...';\n    position: fixed;\n    top: 64%;\n    font-size: 22px;\n    color: white;\n    width: 100%;\n    text-align: center;\n    z-index: 5001; }\n\n.side-loader {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 5000;\n  /*margin-left: -20px;\r\n    margin-top: -20px;*/\n  opacity: 1;\n  background-color: rgba(0, 0, 30, 0.6);\n  background-image: url(https://wim.usgs.gov/website-assets/branding/usgsanimated.svg);\n  background-repeat: no-repeat;\n  background-size: 120px auto;\n  background-position: center 50px;\n  min-height: 715px; }\n\n.side-loader:after {\n    display: block;\n    content: 'Loading...';\n    width: 100%;\n    text-align: center;\n    font-size: 18px;\n    color: white;\n    box-sizing: border-box;\n    padding-top: 20px;\n    font-weight: 400; }\n\n.dataloader-hidden {\n  visibility: hidden; }\n\n.data-loader {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 5000;\n  /*margin-left: -20px;\r\n    margin-top: -20px;*/\n  opacity: 1;\n  background-color: rgba(0, 0, 30, 0.6);\n  background-image: url(https://wim.usgs.gov/website-assets/branding/usgsanimated.svg);\n  background-repeat: no-repeat;\n  background-size: 120px auto;\n  background-position: center 50px;\n  min-height: 715px; }\n\n.data-loader:after {\n    display: block;\n    content: 'Loading...';\n    width: 100%;\n    text-align: center;\n    font-size: 18px;\n    color: white;\n    box-sizing: border-box;\n    padding-top: 20px;\n    font-weight: 400; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbG9hZGVyL2M6XFxOWUJhY2t1cFxcR2l0SHViXFxMSVFXSURTL3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXGxvYWRlclxcbG9hZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksa0JBQWtCO0VBQ2xCLFdBQVU7RUFDVixZQUFZO0VBQ1osTUFBSztFQUNMLE9BQU87RUFDUCxlQUFlLEVBQUE7O0FBRW5CO0VBQ0ksMEJBQXlCO0VBQ3pCLFdBQVU7RUFDVixZQUFZO0VBQ1osVUFBVTtFQUNWLGFBQWE7RUFDYixxQ0FBa0M7RUFDbEMsc0ZBQXFGO0VBQ3JGLHlCQUF5QjtFQUN6Qiw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLGtDQUFrQyxFQUFBOztBQVh0QztJQWNRLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsUUFBUTtJQUNSLGVBQWU7SUFDZixZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQixhQUFhLEVBQUE7O0FBS3JCO0VBQ0ksa0JBQWtCO0VBQ2xCLFdBQVU7RUFDVixZQUFZO0VBQ1osYUFBYTtFQUNiO3VCQ0htQjtFREtuQixVQUFVO0VBQ1YscUNBQWtDO0VBQ2xDLG9GQUFvRjtFQUNwRiw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLGdDQUFnQztFQUNoQyxpQkFBaUIsRUFBQTs7QUFickI7SUFnQlEsY0FBYztJQUNkLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixnQkFBZ0IsRUFBQTs7QUFJeEI7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxrQkFBa0I7RUFDbEIsV0FBVTtFQUNWLFlBQVk7RUFDWixhQUFhO0VBQ2I7dUJDUG1CO0VEU25CLFVBQVU7RUFDVixxQ0FBa0M7RUFDbEMsb0ZBQW9GO0VBQ3BGLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0IsZ0NBQWdDO0VBQ2hDLGlCQUFpQixFQUFBOztBQWJyQjtJQWdCUSxjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbG9hZGVyL2xvYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2FkZXItaGlkZGVuIHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG4uc2lkZWxvYWRlci1oaWRkZW4ge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcbi5sb2FkZXItb3ZlcmxheSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdG9wOjA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgei1pbmRleDogNTAwMDAwO1xyXG59XHJcbi5wYWdlLWxvYWRlciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB6LWluZGV4OiA1MDAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMzAsMC42KTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL3dpbS51c2dzLmdvdi93ZWJzaXRlLWFzc2V0cy9icmFuZGluZy91c2dzYW5pbWF0ZWQuc3ZnJyk7XHJcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTIwcHggYXV0bztcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcblxyXG4gICAgJjphZnRlcntcclxuICAgICAgICBjb250ZW50OiAnTG9hZGluZy4uLic7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHRvcDogNjQlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHotaW5kZXg6IDUwMDE7XHJcbiAgICAgIH1cclxufVxyXG5cclxuXHJcbi5zaWRlLWxvYWRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgei1pbmRleDogNTAwMDtcclxuICAgIC8qbWFyZ2luLWxlZnQ6IC0yMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTIwcHg7Ki9cclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwzMCwwLjYpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vd2ltLnVzZ3MuZ292L3dlYnNpdGUtYXNzZXRzL2JyYW5kaW5nL3VzZ3NhbmltYXRlZC5zdmcpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTIwcHggYXV0bztcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciA1MHB4O1xyXG4gICAgbWluLWhlaWdodDogNzE1cHg7XHJcblxyXG4gICAgJjphZnRlcntcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBjb250ZW50OiAnTG9hZGluZy4uLic7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZGF0YWxvYWRlci1oaWRkZW4ge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcblxyXG4uZGF0YS1sb2FkZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHotaW5kZXg6IDUwMDA7XHJcbiAgICAvKm1hcmdpbi1sZWZ0OiAtMjBweDtcclxuICAgIG1hcmdpbi10b3A6IC0yMHB4OyovXHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMzAsMC42KTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL3dpbS51c2dzLmdvdi93ZWJzaXRlLWFzc2V0cy9icmFuZGluZy91c2dzYW5pbWF0ZWQuc3ZnKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEyMHB4IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgNTBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDcxNXB4O1xyXG4gICAgXHJcbiAgICAmOmFmdGVye1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGNvbnRlbnQ6ICdMb2FkaW5nLi4uJztcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB9XHJcbn0iLCIubG9hZGVyLWhpZGRlbiB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjsgfVxuXG4uc2lkZWxvYWRlci1oaWRkZW4ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47IH1cblxuLmxvYWRlci1vdmVybGF5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDUwMDAwMDsgfVxuXG4ucGFnZS1sb2FkZXIge1xuICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3BhY2l0eTogMTtcbiAgei1pbmRleDogNTAwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAzMCwgMC42KTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly93aW0udXNncy5nb3Yvd2Vic2l0ZS1hc3NldHMvYnJhbmRpbmcvdXNnc2FuaW1hdGVkLnN2Z1wiKTtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMjBweCBhdXRvO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyOyB9XG4gIC5wYWdlLWxvYWRlcjphZnRlciB7XG4gICAgY29udGVudDogJ0xvYWRpbmcuLi4nO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDY0JTtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB6LWluZGV4OiA1MDAxOyB9XG5cbi5zaWRlLWxvYWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgei1pbmRleDogNTAwMDtcbiAgLyptYXJnaW4tbGVmdDogLTIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMjBweDsqL1xuICBvcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDMwLCAwLjYpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly93aW0udXNncy5nb3Yvd2Vic2l0ZS1hc3NldHMvYnJhbmRpbmcvdXNnc2FuaW1hdGVkLnN2Zyk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMTIwcHggYXV0bztcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIDUwcHg7XG4gIG1pbi1oZWlnaHQ6IDcxNXB4OyB9XG4gIC5zaWRlLWxvYWRlcjphZnRlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29udGVudDogJ0xvYWRpbmcuLi4nO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDsgfVxuXG4uZGF0YWxvYWRlci1oaWRkZW4ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47IH1cblxuLmRhdGEtbG9hZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiA1MDAwO1xuICAvKm1hcmdpbi1sZWZ0OiAtMjBweDtcclxuICAgIG1hcmdpbi10b3A6IC0yMHB4OyovXG4gIG9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMzAsIDAuNik7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL3dpbS51c2dzLmdvdi93ZWJzaXRlLWFzc2V0cy9icmFuZGluZy91c2dzYW5pbWF0ZWQuc3ZnKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMjBweCBhdXRvO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgNTBweDtcbiAgbWluLWhlaWdodDogNzE1cHg7IH1cbiAgLmRhdGEtbG9hZGVyOmFmdGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjb250ZW50OiAnTG9hZGluZy4uLic7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBmb250LXdlaWdodDogNDAwOyB9XG4iXX0= */"

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
        this.show = true; //start
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
            selector: 'loading-screen',
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
                    case 'last_submit': return new Date(item.last_submit);
                    default: return item[property];
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

module.exports = ".pane {\n  padding: 1em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdGFiL2M6XFxOWUJhY2t1cFxcR2l0SHViXFxMSVFXSURTL3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXHRhYlxcdGFiLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdGFiL3RhYi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYW5le1xyXG4gICAgcGFkZGluZzogMWVtO1xyXG4gIH0iXX0= */"

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

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Open+Sans:400,600,700|Poppins:300,400,600,700\");\n.tab-close {\n  color: gray;\n  text-align: right;\n  cursor: pointer; }\n.tab-ul {\n  list-style: none;\n  width: 100%;\n  padding: 0 0 10px 0;\n  box-sizing: border-box;\n  margin: 0;\n  display: flex;\n  min-height: -webkit-fit-content;\n  min-height: -moz-fit-content;\n  min-height: fit-content; }\n.tab-ul li {\n    margin: 0 10px 0 0; }\n.tab-ul li a {\n      transition: 0.15s;\n      font-size: 12px;\n      box-sizing: border-box;\n      padding: 6px 0;\n      font-family: \"Open Sans\", sans-serif;\n      font-weight: 600;\n      letter-spacing: -0.2px;\n      text-decoration: none;\n      color: rgba(16, 16, 16, 0.5);\n      transition: 0.15s; }\n.tab-ul li a:hover {\n        text-decoration: underline;\n        color: #101010;\n        transition: 0.15s; }\n.tab-ul li.active a {\n      color: #3E3BFB;\n      transition: 0.15s;\n      text-decoration: underline; }\n.tab-ul li.active a:hover {\n        color: #3E3BFB; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdGFicy9jOlxcTllCYWNrdXBcXEdpdEh1YlxcTElRV0lEUy9zcmNcXGFwcFxcdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3RhYnMvYzpcXE5ZQmFja3VwXFxHaXRIdWJcXExJUVdJRFMvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcdGFic1xcdGFicy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxvR0FBWTtBQ0NaO0VBQ0ksV0FBVztFQUNYLGlCQUFpQjtFQUNqQixlQUFlLEVBQUE7QUFHakI7RUFDTSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsU0FBUztFQUNULGFBQWE7RUFDYiwrQkFBdUI7RUFBdkIsNEJBQXVCO0VBQXZCLHVCQUF1QixFQUFBO0FBUDdCO0lBV1Usa0JBQWtCLEVBQUE7QUFYNUI7TUFjYyxpQkRFRTtNQ0RGLGVBQWU7TUFDZixzQkFBc0I7TUFDdEIsY0FBYztNQUNkLG9DRExjO01DTWQsZ0JBQWdCO01BQ2hCLHNCQUFzQjtNQUN0QixxQkFBcUI7TUFDckIsNEJBQTRCO01BQzVCLGlCRFBFLEVBQUE7QUNoQmhCO1FBMEJrQiwwQkFBMEI7UUFDMUIsY0Q5Qkw7UUMrQkssaUJEWkYsRUFBQTtBQ2hCaEI7TUFtQ2tCLGNEbENOO01DbUNNLGlCRHBCRjtNQ3FCRSwwQkFBMEIsRUFBQTtBQXJDNUM7UUF3Q3NCLGNEdkNWLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy90YWJzL3RhYnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBGb250c1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2Fuczo0MDAsNjAwLDcwMHxQb3BwaW5zOjMwMCw0MDAsNjAwLDcwMCcpO1xyXG5cclxuXHJcbi8vIFZhcmlhYmxlc1xyXG4kYmxhY2s6ICMxMDEwMTA7XHJcbiR3aGl0ZTogI2ZmZjtcclxuJGJnOiAjRjlGQUZFO1xyXG4kcmVkOiAjRjIzRDQ3O1xyXG4kYmx1ZTogIzNFM0JGQjtcclxuJHByaW1hcnk6ICRibHVlO1xyXG4kdGV4dDogZmFkZS1vdXQoJGJsYWNrLCAwLjEpO1xyXG4kc3VidGxlOiBmYWRlLW91dCgkYmxhY2ssIDAuNSk7XHJcblxyXG4kYm9yZGVyQ29sb3I6IGZhZGUtb3V0KCRibGFjaywgMC44NSk7XHJcbiRib3JkZXJSYWRpdXM6IDRweDtcclxuJGJvcmRlclJhZGl1c006IDhweDtcclxuJGJvcmRlclJhZGl1c0w6IDE2cHg7XHJcblxyXG4vLyBGb250c1xyXG4kcG9wcGluczogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4kc2FuczogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcblxyXG5cclxuJHRyYW5zaXRpb246IDAuMTVzO1xyXG4kYm9yZGVyUmFkaXVzOiA0cHg7XHJcblxyXG4vLyBIZWlnaHRzIGFuZCBtZWFzdXJlbWVudHNcclxuJHRvcEJhckhlaWdodDogNTRweDtcclxuXHJcblxyXG4vLyBSZXNwb25zaXZlbmVzc1xyXG4kZnVsbE1vYmlsZTogNDYwcHg7IiwiQGltcG9ydCAnLi4vLi4vLi4vdmFyaWFibGVzLnNjc3MnO1xyXG5cclxuLnRhYi1jbG9zZSB7XHJcbiAgICBjb2xvcjogZ3JheTtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgLnRhYi11bCB7XHJcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nOiAwIDAgMTBweCAwO1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgbWluLWhlaWdodDogZml0LWNvbnRlbnQ7XHJcblxyXG5cclxuICAgICAgICBsaXtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDEwcHggMCAwO1xyXG5cclxuICAgICAgICAgICAgYXtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDZweCAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRzYW5zO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4ycHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogZmFkZS1vdXQoJGJsYWNrLCAwLjUpO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogJHRyYW5zaXRpb247XHJcblxyXG4gICAgICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmLmFjdGl2ZXtcclxuXHJcbiAgICAgICAgICAgICAgICBhe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkYmx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRibHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICB9XHJcblxyXG5cclxuIl19 */"

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
        //set initial tab
        if (activeTabs.length === 0) {
            this.selectTab(this.tabs.first);
        }
        //set initial tab to other than first
        /* if (activeTabs.length === 0){
            this.selectTab(this.tabs.filter((tab) => tab.title == "test2"));
  
          } */
    };
    TabsComponent.prototype.selectTab = function (tab) {
        this.tabs.toArray().forEach(function (tab) { return tab.active = false; });
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
        this._characteristicFilterSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('Nitrate');
        this._siteStatsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._siteChangeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.chosenBaseLayer = "Topo";
        this.baseMaps = {
            OpenStreetMap: leaflet__WEBPACK_IMPORTED_MODULE_5__["tileLayer"]('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 20,
                zIndex: 1,
                attribution: 'Imagery from <a href="https://giscience.uni-hd.de/">GIScience Research Group @ University of Heidelberg</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }),
            Topo: leaflet__WEBPACK_IMPORTED_MODULE_5__["tileLayer"]("https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}", {
                zIndex: 1,
                attribution: "Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community"
            }),
            CartoDB: leaflet__WEBPACK_IMPORTED_MODULE_5__["tileLayer"]("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png", {
                zIndex: 1,
                attribution: "&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> &copy; <a href='https://cartodb.com/attributions'>CartoDB</a>"
            }),
            Satellite: leaflet__WEBPACK_IMPORTED_MODULE_5__["tileLayer"]('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
                zIndex: 1,
                attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community' //,
                //maxZoom: 10
            }),
            Terrain: leaflet__WEBPACK_IMPORTED_MODULE_5__["tileLayer"]('https://server.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer/tile/{z}/{y}/{x}', {
                zIndex: 1,
                attribution: 'Tiles &copy; Esri &mdash; Source: USGS, Esri, TANA, DeLorme, and NPS',
                maxZoom: 13
            }),
            Gray: leaflet__WEBPACK_IMPORTED_MODULE_5__["tileLayer"]('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
                zIndex: 1,
                attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
                maxZoom: 16
            })
        };
        //if typeScript complains about searchParams, add it to the class in the leaflet@types definition
        this.mainLayers = {
            WQP: leaflet__WEBPACK_IMPORTED_MODULE_5__["tileLayer"].wms('https://www.waterqualitydata.us/ogcservices/ows?', {
                layers: "wqp_sites",
                format: "image/png",
                transparent: true,
                zIndex: 2,
            }),
            NWIS: leaflet__WEBPACK_IMPORTED_MODULE_5__["tileLayer"].wms("https://www.waterqualitydata.us/ogcservices/ows?", {
                layers: "qw_portal_map:nwis_sites",
                format: "image/png",
                transparent: true,
                zIndex: 2
                //searchParams: "countycode:US:36:059|US:36:103"
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
        get: function () { return this._siteChangeSubject.asObservable(); },
        enumerable: true,
        configurable: true
    });
    MapService.prototype.getData = function () {
        var _this = this;
        this._loaderService.showFullPageLoad();
        return this._http.get(this.geoJsonURL, { params: this.URLparams })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            _this.geoJson = response;
            _this.filterJson = _this.geoJson; // set filtered object to all on init.
            //get unique values for filterOptions
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
            //client side
            console.error("An error occurred:", err.error.message);
        }
        else {
            //server error message
            console.error("Server returned code ${err.status, body ${err.error}");
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])("HTTPClient error.");
    };
    MapService.prototype.addToSitesLayer = function (geoJson) {
        var self = this;
        var geojsonMarkerOptions = {
            radius: 5,
            fillColor: '#9b0004',
            weight: 0,
            opacity: 1,
            fillOpacity: 0.5
        };
        var layer = leaflet__WEBPACK_IMPORTED_MODULE_5__["geoJSON"](geoJson, {
            pointToLayer: function (feature, latLng) {
                return leaflet__WEBPACK_IMPORTED_MODULE_5__["circleMarker"](latLng, geojsonMarkerOptions);
            },
            onEachFeature: function (feature, layer) {
                layer.bindPopup("<b>Site Name: </b>" + feature.properties.name + "<br/><b>Location Name: </b>" + feature.properties.locName + "<br/><b>Organization Name: </b>" + feature.properties.orgName + "<br/><b>Result Count: </b>" + feature.properties.resultCnt);
                layer.on('click', function (e) {
                    console.log(e);
                    var event = e;
                    self._selectedSiteSubject.next(event.target.feature.properties);
                });
            }
        }).addTo(this.sitesLayer);
        //zoom
        this.map.fitBounds(this.sitesLayer.getBounds(), { padding: [20, 20] });
        this._siteChangeSubject.next(geoJson);
    };
    //use extent to get NWIS rt gages based on bounding box, display on map
    MapService.prototype.queryNWISrtGages = function (bbox) {
        var NWISmarkers = {};
        //NWIS query options from http://waterservices.usgs.gov/rest/IV-Test-Tool.html
        var parameterCodeList = '00065,62619,62620,63160,72214';
        var siteTypeList = 'OC,OC-CO,ES,LK,ST,ST-CA,ST-DCH,ST-TS';
        var siteStatus = 'active';
        var url = 'https://waterservices.usgs.gov/nwis/site/?format=mapper&bBox=' + bbox + '&parameterCd=' + parameterCodeList + '&siteType=' + siteTypeList + '&siteStatus=' + siteStatus;
        console.log('here', url);
        return this._http.get(url, { responseType: 'text' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
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
        this._http.get('./assets/org_summary.json')
            .subscribe(function (data) {
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
        this._http.get(orgUrl)
            .subscribe(function (data) {
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
            '&countycode=US%3A36%3A059&countycode=US%3A36%3A103&organization=' + this.orgList[i].OrganizationIdentifier +
            '&statecode=US%3A36&dataProfile=periodOfRecord';
        this._http.get(sumUrl)
            .subscribe(function (data) {
            _this.csvSumFile = data;
            _this.sumList = JSON.parse(_this.csvJSON(_this.csvSumFile._body));
            if (_this.sumList.length > 1) {
                var sortedData = _this.sumList.sort(function (a, b) {
                    return (new Date(b.LastResultSubmittedDate) > new Date(a.LastResultSubmittedDate)) ? 1 : -1;
                });
                var last_submit_date = sortedData[1].LastResultSubmittedDate;
                var num_samples = _this.sumList.length;
                _this.sum_output.push({ org_name: _this.orgList[i].OrganizationFormalName, last_submit: last_submit_date,
                    num_samples: num_samples });
            }
            else if (_this.sumList.length === 1) {
                _this.sum_output.push({ org_name: _this.orgList[0].OrganizationFormalName, last_submit: _this.sumList[0].LastResultSubmittedDate,
                    num_samples: 1 });
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










//Temporarily use NG Material






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