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

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Open+Sans:400,600,700|Poppins:300,400,600,700\");\n.m-t-5 {\n  margin-top: 5px !important; }\n.p-t-5 {\n  padding-top: 5px !important; }\n.m-b-5 {\n  margin-bottom: 5px !important; }\n.p-b-5 {\n  padding-bottom: 5px !important; }\n.m-l-5 {\n  margin-left: 5px !important; }\n.p-l-5 {\n  padding-left: 5px !important; }\n.m-r-5 {\n  margin-right: 5px !important; }\n.p-r-5 {\n  padding-right: 5px !important; }\n.m-t-10 {\n  margin-top: 10px !important; }\n.p-t-10 {\n  padding-top: 10px !important; }\n.m-b-10 {\n  margin-bottom: 10px !important; }\n.p-b-10 {\n  padding-bottom: 10px !important; }\n.m-l-10 {\n  margin-left: 10px !important; }\n.p-l-10 {\n  padding-left: 10px !important; }\n.m-r-10 {\n  margin-right: 10px !important; }\n.p-r-10 {\n  padding-right: 10px !important; }\n.m-t-15 {\n  margin-top: 15px !important; }\n.p-t-15 {\n  padding-top: 15px !important; }\n.m-b-15 {\n  margin-bottom: 15px !important; }\n.p-b-15 {\n  padding-bottom: 15px !important; }\n.m-l-15 {\n  margin-left: 15px !important; }\n.p-l-15 {\n  padding-left: 15px !important; }\n.m-r-15 {\n  margin-right: 15px !important; }\n.p-r-15 {\n  padding-right: 15px !important; }\n.m-t-20 {\n  margin-top: 20px !important; }\n.p-t-20 {\n  padding-top: 20px !important; }\n.m-b-20 {\n  margin-bottom: 20px !important; }\n.p-b-20 {\n  padding-bottom: 20px !important; }\n.m-l-20 {\n  margin-left: 20px !important; }\n.p-l-20 {\n  padding-left: 20px !important; }\n.m-r-20 {\n  margin-right: 20px !important; }\n.p-r-20 {\n  padding-right: 20px !important; }\n.m-t-25 {\n  margin-top: 25px !important; }\n.p-t-25 {\n  padding-top: 25px !important; }\n.m-b-25 {\n  margin-bottom: 25px !important; }\n.p-b-25 {\n  padding-bottom: 25px !important; }\n.m-l-25 {\n  margin-left: 25px !important; }\n.p-l-25 {\n  padding-left: 25px !important; }\n.m-r-25 {\n  margin-right: 25px !important; }\n.p-r-25 {\n  padding-right: 25px !important; }\n.m-t-30 {\n  margin-top: 30px !important; }\n.p-t-30 {\n  padding-top: 30px !important; }\n.m-b-30 {\n  margin-bottom: 30px !important; }\n.p-b-30 {\n  padding-bottom: 30px !important; }\n.m-l-30 {\n  margin-left: 30px !important; }\n.p-l-30 {\n  padding-left: 30px !important; }\n.m-r-30 {\n  margin-right: 30px !important; }\n.p-r-30 {\n  padding-right: 30px !important; }\n.m-t-35 {\n  margin-top: 35px !important; }\n.p-t-35 {\n  padding-top: 35px !important; }\n.m-b-35 {\n  margin-bottom: 35px !important; }\n.p-b-35 {\n  padding-bottom: 35px !important; }\n.m-l-35 {\n  margin-left: 35px !important; }\n.p-l-35 {\n  padding-left: 35px !important; }\n.m-r-35 {\n  margin-right: 35px !important; }\n.p-r-35 {\n  padding-right: 35px !important; }\n.m-t-40 {\n  margin-top: 40px !important; }\n.p-t-40 {\n  padding-top: 40px !important; }\n.m-b-40 {\n  margin-bottom: 40px !important; }\n.p-b-40 {\n  padding-bottom: 40px !important; }\n.m-l-40 {\n  margin-left: 40px !important; }\n.p-l-40 {\n  padding-left: 40px !important; }\n.m-r-40 {\n  margin-right: 40px !important; }\n.p-r-40 {\n  padding-right: 40px !important; }\n.m-t-45 {\n  margin-top: 45px !important; }\n.p-t-45 {\n  padding-top: 45px !important; }\n.m-b-45 {\n  margin-bottom: 45px !important; }\n.p-b-45 {\n  padding-bottom: 45px !important; }\n.m-l-45 {\n  margin-left: 45px !important; }\n.p-l-45 {\n  padding-left: 45px !important; }\n.m-r-45 {\n  margin-right: 45px !important; }\n.p-r-45 {\n  padding-right: 45px !important; }\n.m-t-50 {\n  margin-top: 50px !important; }\n.p-t-50 {\n  padding-top: 50px !important; }\n.m-b-50 {\n  margin-bottom: 50px !important; }\n.p-b-50 {\n  padding-bottom: 50px !important; }\n.m-l-50 {\n  margin-left: 50px !important; }\n.p-l-50 {\n  padding-left: 50px !important; }\n.m-r-50 {\n  margin-right: 50px !important; }\n.p-r-50 {\n  padding-right: 50px !important; }\n.m-t-75 {\n  margin-top: 75px !important; }\n.p-t-75 {\n  padding-top: 75px !important; }\n.m-b-75 {\n  margin-bottom: 75px !important; }\n.p-b-75 {\n  padding-bottom: 75px !important; }\n.m-l-75 {\n  margin-left: 75px !important; }\n.p-l-75 {\n  padding-left: 75px !important; }\n.m-r-75 {\n  margin-right: 75px !important; }\n.p-r-75 {\n  padding-right: 75px !important; }\n.m-t-100 {\n  margin-top: 100px !important; }\n.p-t-100 {\n  padding-top: 100px !important; }\n.m-b-100 {\n  margin-bottom: 100px !important; }\n.p-b-100 {\n  padding-bottom: 100px !important; }\n.m-l-100 {\n  margin-left: 100px !important; }\n.p-l-100 {\n  padding-left: 100px !important; }\n.m-r-100 {\n  margin-right: 100px !important; }\n.p-r-100 {\n  padding-right: 100px !important; }\n#outer {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  width: 100vw;\n  overflow: hidden;\n  transition: 0.15s; }\n#outer header#main {\n    display: flex;\n    height: 54px;\n    min-height: 54px;\n    width: 100%;\n    background-color: #101010; }\n#outer #body {\n    display: flex;\n    flex-grow: 3;\n    height: 100%; }\n#outer #body #sidebar {\n      display: block;\n      width: 280px;\n      background-color: #fff;\n      box-sizing: border-box;\n      padding: 15px;\n      overflow: auto;\n      transition: all 0.15s ease, width 0s 0.15s; }\n@media only screen and (max-width: 1200px) {\n        #outer #body #sidebar {\n          position: fixed;\n          top: 54px;\n          padding-bottom: 69px;\n          left: -280px;\n          height: 100vh;\n          border-right: 1px solid rgba(16, 16, 16, 0.2);\n          z-index: 5000; } }\n@media only screen and (max-width: 550px) {\n        #outer #body #sidebar {\n          top: auto;\n          bottom: -60vh;\n          padding-bottom: 15px;\n          left: 0;\n          height: 60vh;\n          border-right: none;\n          border-top-left-radius: 16px;\n          border-top-right-radius: 16px; } }\n#outer #body #sidebar.expanded {\n        left: 0px;\n        transition: all 0.15s ease, width 0s; }\n@media only screen and (max-width: 550px) {\n          #outer #body #sidebar.expanded {\n            bottom: 0;\n            width: 100%;\n            border-top: 1px solid rgba(16, 16, 16, 0.2); } }\n#outer #body main {\n      display: block;\n      flex-grow: 3;\n      overflow: auto; }\n#sidebarLightbox {\n  display: block;\n  position: fixed;\n  top: 54px;\n  left: 0;\n  z-index: 4999;\n  background-color: rgba(16, 16, 16, 0.4);\n  height: 0px;\n  width: 100vw;\n  opacity: 0;\n  transition: height 0s 0.2s, opacity 0.2s; }\n#sidebarLightbox.visible {\n    opacity: 1;\n    height: 100vh;\n    transition: height 0s, opacity 0.2s; }\np {\n  display: block;\n  padding: 0 0 8px 0;\n  font-size: 14px;\n  line-height: 28px;\n  font-family: \"Open Sans\", sans-serif;\n  color: rgba(16, 16, 16, 0.9);\n  font-weight: 500; }\n@media only screen and (max-width: 460px) {\n    p {\n      font-size: 13px;\n      line-height: 22px; } }\nh1, h2, h3, h4 {\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 700;\n  margin: 0 auto;\n  display: block;\n  width: 100%; }\nh5, h6 {\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 700;\n  margin: 0 auto;\n  display: block;\n  width: 100%; }\nh1 {\n  font-size: 32px; }\nh2 {\n  font-size: 26px; }\nh3 {\n  font-size: 22px; }\nh4 {\n  font-size: 18px; }\nh5 {\n  font-size: 18px; }\nh6 {\n  font-size: 16px; }\nlabel {\n  font-size: 12px;\n  display: block;\n  font-weight: 500;\n  color: rgba(16, 16, 16, 0.5);\n  margin: 2px 0 2px 0; }\n#modalLightbox {\n  display: block;\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  top: 0;\n  left: 0; }\n.blur {\n  -webkit-filter: blur(6px);\n          filter: blur(6px);\n  transition: 0s; }\n.modal-wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  top: 0;\n  left: 0;\n  box-sizing: border-box;\n  padding: 0 6%;\n  background-color: rgba(16, 16, 16, 0.6);\n  z-index: 10000; }\n@media only screen and (max-width: 460px) {\n    .modal-wrapper {\n      justify-content: flex-end;\n      padding: 0; } }\n.modal-wrapper .modal {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    min-width: 400px;\n    max-width: 680px;\n    border-radius: 16px;\n    background-color: #fff;\n    min-height: 240px;\n    max-height: 90vh;\n    margin: 0 auto; }\n@media only screen and (max-width: 460px) {\n      .modal-wrapper .modal {\n        width: 100%;\n        min-width: none;\n        max-width: none;\n        max-height: 85vh;\n        border-bottom-left-radius: 0;\n        border-bottom-right-radius: 0; } }\n.modal-wrapper .modal .modal-header {\n      display: flex;\n      justify-content: space-between;\n      boxs-sizing: border-box;\n      padding: 15px 20px;\n      font-family: \"Poppins\", sans-serif;\n      font-size: 26px;\n      font-weight: 700;\n      letter-spacing: -0.4px; }\n@media only screen and (max-width: 460px) {\n        .modal-wrapper .modal .modal-header {\n          padding: 15px 20px 5px 20px; } }\n.modal-wrapper .modal .modal-header .modal-close {\n        font-weight: 500;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        font-size: 42px;\n        line-height: 0;\n        transition: 0.2s;\n        color: rgba(16, 16, 16, 0.3); }\n.modal-wrapper .modal .modal-header .modal-close:hover {\n          cursor: pointer;\n          transition: 0.2s;\n          color: #F23D47; }\n.modal-wrapper .modal .modal-header .modal-close:active {\n          opacity: 0.5; }\n.modal-wrapper .modal .modal-content {\n      box-sizing: border-box;\n      padding: 0 20px;\n      margin-bottom: 10px;\n      flex-grow: 3;\n      max-height: 45vh;\n      overflow: auto; }\n.modal-wrapper .modal .modal-content.nopadding {\n        padding: 0; }\n.modal-wrapper .modal .modal-content p:last-child {\n        padding-bottom: 0; }\n@media only screen and (max-width: 460px) {\n        .modal-wrapper .modal .modal-content {\n          max-height: 50vh; } }\n.modal-wrapper .modal .modal-actions {\n      display: flex;\n      justify-content: space-between;\n      box-sizing: border-box;\n      padding: 15px 17px; }\n@media only screen and (max-width: 460px) {\n        .modal-wrapper .modal .modal-actions {\n          padding: 0; } }\n.modal-wrapper .modal .modal-actions.left {\n        justify-content: flex-start; }\n.modal-wrapper .modal .modal-actions.right {\n        justify-content: flex-end; }\n.modal-wrapper .modal .modal-actions button {\n        margin: 0 3px; }\n@media only screen and (max-width: 460px) {\n          .modal-wrapper .modal .modal-actions button {\n            margin: 0 0 0 0;\n            flex-grow: 3;\n            border-radius: 0;\n            padding: 12px 10px; } }\n.modal-wrapper .modal.big {\n      max-width: 880px; }\n.modal-wrapper .modal.tiny {\n      max-width: 380px;\n      min-width: 340px;\n      min-height: 200px; }\n@media only screen and (max-width: 460px) {\n        .modal-wrapper .modal.tiny {\n          max-width: none; }\n          .modal-wrapper .modal.tiny .modal-content {\n            margin-bottom: 20px; } }\n#toast {\n  z-index: 1,001;\n  display: flex;\n  justify-content: center;\n  position: fixed;\n  width: 300px;\n  left: 50%;\n  bottom: -200px;\n  margin-left: -150px;\n  box-sizing: border-box;\n  padding: 12px 8px 12px 12px;\n  border-radius: 8px;\n  transition: bottom .3s ease-in-out,opacity 0s 0.3s ease-in-out;\n  opacity: 0;\n  box-shadow: 0 5px 25px -5px rgba(30, 16, 84, 0.3);\n  background-color: #101010; }\n#toast #toastIcon {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    font-size: 32px;\n    margin-right: 12px;\n    width: 55px;\n    text-align: center;\n    color: white; }\n#toast #toastText {\n    flex-grow: 3;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    color: white; }\n#toast #toastText #toastTitle {\n      font-size: 14px;\n      font-weight: 600;\n      line-height: 14px;\n      padding-bottom: 4px;\n      letter-spacing: 0.25px; }\n#toast #toastText #toastBody {\n      font-size: 12.5px;\n      font-weight: 500;\n      line-height: 14px;\n      letter-spacing: 0.25px; }\n#toast.red {\n    background-color: #F23D47; }\n#toast.blue {\n    background-color: #3E3BFB; }\n#toast.black {\n    background-color: #101010; }\n#toast.white {\n    background-color: #fff; }\n#toast.white #toastIcon,\n    #toast.white #toastText {\n      color: #101010; }\n#toast.visible {\n    bottom: 25px;\n    opacity: 1;\n    transition: bottom .3s ease-in-out,opacity .3s ease-in-out; }\n@media only screen and (max-width: 460px) {\n      #toast.visible {\n        bottom: 0px; } }\n@media only screen and (max-width: 460px) {\n    #toast {\n      width: 100%;\n      margin-left: 0;\n      left: 0;\n      bottom: -200px;\n      padding: 18px 14px 18px 18px;\n      border-bottom-left-radius: 0;\n      border-bottom-right-radius: 0;\n      box-shadow: 0 5px 25px 5px rgba(30, 16, 84, 0.2); } }\n#aboutModal .modal-content {\n  width: 620px;\n  overflow: hidden;\n  display: flex; }\n#aboutModal .modal-content tabs {\n    display: flex;\n    flex-direction: column; }\n#aboutModal .modal-content tab {\n    flex-grow: 3;\n    overflow: auto; }\n#aboutModal .modal-content .pane {\n    padding: 0; }\nbutton {\n  border: none;\n  box-sizing: border-box;\n  padding: 6px 16px;\n  font-family: \"Poppins\", sans-serif;\n  background-color: #3E3BFB;\n  color: #fff;\n  letter-spacing: 0.15px;\n  font-weight: 600;\n  font-size: 14px;\n  border-radius: 4px; }\nbutton:hover {\n    cursor: pointer;\n    text-decoration: underline;\n    background-color: #2522fa; }\nbutton:focus {\n    text-decoration: underline; }\nbutton:active {\n    background-color: #3E3BFB; }\nbutton.red {\n    background-color: #F23D47; }\nbutton.red:hover {\n      background-color: #f02530; }\nbutton.red:active {\n      background-color: #F23D47; }\n.search-select {\n  display: block;\n  position: relative; }\n.search-select input {\n    width: 100%;\n    border: 1px solid rgba(16, 16, 16, 0.15);\n    border-radius: 4px;\n    box-sizing: border-box;\n    padding: 6px 12px;\n    font-size: 15px;\n    font-family: \"Open Sans\", sans-serif;\n    font-weight: 500;\n    color: #101010; }\n.search-select .search-select-results {\n    display: none;\n    background-color: #101010;\n    box-sizing: border-box;\n    padding: 10px 0;\n    border-bottom-left-radius: 10px;\n    border-bottom-right-radius: 10px;\n    max-height: 180px;\n    overflow: auto; }\n.search-select .search-select-results div {\n      color: #fff;\n      font-size: 15px;\n      line-height: 15px;\n      box-sizing: border-box;\n      padding: 4px 15px; }\n.search-select .search-select-results div:hover {\n        text-decoration: underline;\n        cursor: pointer; }\n.search-select input:focus ~ .search-select-results {\n    display: block; }\n.styled-select {\n  border: 1px solid #ccc;\n  width: 99%;\n  border-radius: 3px;\n  overflow: hidden;\n  background: #fafafa url(\"data:image/png;base64,R0lGODlhDwAUAIABAAAAAP///yH5BAEAAAEALAAAAAAPABQAAAIXjI+py+0Po5wH2HsXzmw//lHiSJZmUAAAOw==\") no-repeat 95% 48%; }\n.styled-select select {\n    padding: 5px 8px;\n    width: 130%;\n    border: none;\n    box-shadow: none;\n    background: transparent;\n    background-image: none;\n    -webkit-appearance: none; }\n.styled-select select:focus {\n      outline: none; }\nselect {\n  display: block;\n  width: 100%; }\n.sidebar-content select {\n  border-radius: 4px;\n  box-sizing: border-box;\n  border: 1px solid rgba(16, 16, 16, 0.1);\n  margin-bottom: 10px; }\n.sidebar-content select option {\n    font-size: 12px;\n    box-sizing: border-box;\n    padding: 3px 8px;\n    font-family: \"Open Sans\", sans-serif;\n    font-weight: 500; }\n.filter-select {\n  position: relative; }\n.filter-select select {\n    max-height: 26px;\n    transition: 0.15s; }\n.filter-select select:before {\n      content: 'Select';\n      font-family: \"Open Sans\", sans-serif;\n      font-size: 11px;\n      text-align: left;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      position: absolute;\n      top: 5%;\n      left: 1.5%;\n      height: 90%;\n      width: 70%;\n      font-weight: 500;\n      box-sizing: border-box;\n      padding-left: 10px;\n      box-sizing: border-box;\n      transition: 0.15s;\n      background-color: white;\n      z-index: 1; }\n.filter-select select:after {\n      content: '\\f0d7';\n      font-family: 'Font Awesome 5 Pro';\n      font-size: 16px;\n      text-align: right;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      position: absolute;\n      background-color: white;\n      top: 5%;\n      left: 1.5%;\n      height: 90%;\n      width: 93%;\n      font-weight: 900;\n      box-sizing: border-box;\n      padding-right: 10px;\n      box-sizing: border-box;\n      font-weight: 600;\n      transition: 0.15s;\n      padding-bottom: 1px; }\n.filter-select select:hover {\n      cursor: pointer;\n      background-color: rgba(16, 16, 16, 0.05); }\n.filter-select select:hover:after {\n        color: #3E3BFB;\n        transition: 0.15s; }\n.filter-select select:focus {\n      transition: 0.15s;\n      max-height: 120px;\n      background-color: white; }\n.filter-select select:focus:hover {\n        background-color: white; }\n.filter-select select:focus:after, .filter-select select:focus:before {\n        display: none; }\nheader#main #branding {\n  display: flex;\n  height: 100%;\n  box-sizing: border-box;\n  padding: 0 0 0 15px; }\n@media only screen and (max-width: 1200px) {\n    header#main #branding {\n      padding: 0 0 0 40px; } }\nheader#main #branding #nydecLogo,\n  header#main #branding #usgsLogo {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    margin-right: 8px; }\nheader#main #branding #nydecLogo img,\n    header#main #branding #usgsLogo img {\n      display: block;\n      height: 38px;\n      width: auto; }\nheader#main #branding #nydecLogo {\n    -webkit-filter: invert(100%);\n            filter: invert(100%);\n    margin-right: 10px; }\nheader#main #branding #nydecLogo img {\n      height: 50px; }\nheader#main #headerLinks {\n  display: flex;\n  flex-grow: 3;\n  justify-content: flex-end;\n  box-sizing: border-box;\n  padding: 0 10px 0 0; }\nheader#main #headerLinks a {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    box-sizing: border-box;\n    padding: 0 10px;\n    margin: 12px 0;\n    color: #101010;\n    font-family: \"Open Sans\", sans-serif;\n    font-weight: 600;\n    font-size: 13px;\n    box-sizing: border-box;\n    padding-bottom: 2px;\n    transition: 0.15s;\n    background-color: #fff;\n    border-radius: 4px;\n    margin-left: 10px; }\nheader#main #headerLinks a:hover {\n      text-decoration: underline;\n      cursor: pointer; }\nheader#main #headerLinks a:focus {\n      text-decoration: underline; }\nheader#main #headerLinks a:active {\n      text-decoration: none;\n      opacity: 0.75;\n      transition: 0.15s; }\nheader#main #branding #title {\n  color: white;\n  display: flex;\n  flex-wrap: wrap; }\nheader#main #branding #title .abbr,\n  header#main #branding #title .expanded {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    font-family: \"Poppins\", sans-serif;\n    font-weight: 600; }\nheader#main #branding #title .abbr {\n    font-size: 22px;\n    letter-spacing: 0.3px; }\nheader#main #branding #title .expanded {\n    display: none;\n    font-weight: 300;\n    padding-right: 5px;\n    font-size: 14px; }\nheader#main #branding #title:hover {\n    cursor: default; }\nheader#main #branding #title:hover .expanded {\n      display: flex; }\n#mapWrapper {\n  display: block;\n  width: 100%;\n  position: relative; }\n#mapWrapper #map {\n    display: block;\n    width: 100%;\n    height: 400px;\n    background-color: rgba(16, 16, 16, 0.2);\n    border-bottom-left-radius: 16px;\n    transition: 0.175s ease; }\n#mapWrapper #collapseMap {\n    display: block;\n    text-align: right;\n    padding: 10px;\n    font-size: 14px;\n    font-weight: 600; }\n#mapWrapper #toggleMap {\n    transition: 0.15s;\n    background-color: transparent;\n    text-align: right;\n    box-sizing: border-box;\n    padding: 8px; }\n#mapWrapper #toggleMap div {\n      display: flex;\n      justify-content: center;\n      opacity: 0.75;\n      transition: 0.15s; }\n#mapWrapper #toggleMap div i, #mapWrapper #toggleMap div b {\n        display: flex;\n        flex-direction: column;\n        justify-content: center; }\n#mapWrapper #toggleMap div i {\n        margin-right: 5px;\n        font-size: 16px; }\n#mapWrapper #toggleMap div b {\n        font-size: 13px;\n        font-weight: 600;\n        font-family: \"Open Sans\", sans-serif; }\n#mapWrapper #toggleMap:hover {\n      transition: 0.15s;\n      cursor: pointer; }\n#mapWrapper #toggleMap:hover div {\n        opacity: 1;\n        transition: 0.15s; }\n#mapWrapper.collapsed #map {\n    height: 110px;\n    transition: 0.175s ease; }\n#mapWrapper.collapsed #map .leaflet-control-container,\n    #mapWrapper.collapsed #map .leaflet-control {\n      display: none; }\n#mapWrapper.collapsed #toggleMap {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    flex-direction: column;\n    justify-content: center;\n    text-align: center;\n    color: white;\n    background-color: rgba(16, 16, 16, 0.65);\n    z-index: 401;\n    display: flex;\n    transition: 0.15s; }\n#mapWrapper.collapsed #toggleMap:hover {\n      background-color: rgba(16, 16, 16, 0.475); }\n/*TEMPORARY STYLING UNTIL WE GET THE LIQWIDS DASHBOARD INSERTED HERE*/\n#dashboardTable {\n  display: flex;\n  flex-direction: column;\n  border: 1px solid rgba(16, 16, 16, 0.2);\n  box-sizing: border-box;\n  padding: 15px;\n  border-radius: 10px;\n  margin-bottom: 45px; }\n#dashboardTable .row {\n    display: flex;\n    width: 100%; }\n#dashboardTable .row:nth-child(even) {\n      background-color: rgba(10, 10, 50, 0.08); }\n#dashboardTable .row div {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      text-align: center;\n      font-size: 12px;\n      line-height: 13px;\n      color: #101010;\n      height: 40px;\n      width: 10%;\n      flex-grow: 3;\n      box-sizing: border-box;\n      padding: 0 10px;\n      text-align: left; }\n#dashboardTable .row div:nth-child(1) {\n        font-weight: bolder; }\n#dashboardTable .row.header div {\n      font-weight: bolder; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxramFjb2JzZW5cXERvY3VtZW50c1xcd2ltX3Byb2plY3RzXFxMSVFXSURTL3NyY1xcYXBwXFx2YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvQzpcXFVzZXJzXFxramFjb2JzZW5cXERvY3VtZW50c1xcd2ltX3Byb2plY3RzXFxMSVFXSURTL3NyY1xcYXBwXFxzdHlsZXNcXGhlbHBlcnMuc2NzcyIsInNyYy9hcHAvQzpcXFVzZXJzXFxramFjb2JzZW5cXERvY3VtZW50c1xcd2ltX3Byb2plY3RzXFxMSVFXSURTL3NyY1xcYXBwXFxzdHlsZXNcXHN0cnVjdHVyZS5zY3NzIiwic3JjL2FwcC9DOlxcVXNlcnNcXGtqYWNvYnNlblxcRG9jdW1lbnRzXFx3aW1fcHJvamVjdHNcXExJUVdJRFMvc3JjXFxhcHBcXHN0eWxlc1xcdGV4dC5zY3NzIiwic3JjL2FwcC9DOlxcVXNlcnNcXGtqYWNvYnNlblxcRG9jdW1lbnRzXFx3aW1fcHJvamVjdHNcXExJUVdJRFMvc3JjXFxhcHBcXHN0eWxlc1xcbW9kYWxzLnNjc3MiLCJzcmMvYXBwL0M6XFxVc2Vyc1xca2phY29ic2VuXFxEb2N1bWVudHNcXHdpbV9wcm9qZWN0c1xcTElRV0lEUy9zcmNcXGFwcFxcc3R5bGVzXFxpbnB1dHMuc2NzcyIsInNyYy9hcHAvQzpcXFVzZXJzXFxramFjb2JzZW5cXERvY3VtZW50c1xcd2ltX3Byb2plY3RzXFxMSVFXSURTL3NyY1xcYXBwXFxzdHlsZXNcXGhlYWRlci5zY3NzIiwic3JjL2FwcC9DOlxcVXNlcnNcXGtqYWNvYnNlblxcRG9jdW1lbnRzXFx3aW1fcHJvamVjdHNcXExJUVdJRFMvc3JjXFxhcHBcXHN0eWxlc1xcY3VzdG9tXFxnZW5lcmFsLnNjc3MiLCJzcmMvYXBwL0M6XFxVc2Vyc1xca2phY29ic2VuXFxEb2N1bWVudHNcXHdpbV9wcm9qZWN0c1xcTElRV0lEUy9zcmNcXGFwcFxcc3R5bGVzXFxjdXN0b21cXG1hcC5zY3NzIiwic3JjL2FwcC9DOlxcVXNlcnNcXGtqYWNvYnNlblxcRG9jdW1lbnRzXFx3aW1fcHJvamVjdHNcXExJUVdJRFMvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxvR0FBWTtBQ1NSO0VBQ0UsMEJBQWdELEVBQUE7QUFHbEQ7RUFDRSwyQkFBa0QsRUFBQTtBQUxwRDtFQUNFLDZCQUFnRCxFQUFBO0FBR2xEO0VBQ0UsOEJBQWtELEVBQUE7QUFMcEQ7RUFDRSwyQkFBZ0QsRUFBQTtBQUdsRDtFQUNFLDRCQUFrRCxFQUFBO0FBTHBEO0VBQ0UsNEJBQWdELEVBQUE7QUFHbEQ7RUFDRSw2QkFBa0QsRUFBQTtBQUxwRDtFQUNFLDJCQUFnRCxFQUFBO0FBR2xEO0VBQ0UsNEJBQWtELEVBQUE7QUFMcEQ7RUFDRSw4QkFBZ0QsRUFBQTtBQUdsRDtFQUNFLCtCQUFrRCxFQUFBO0FBTHBEO0VBQ0UsNEJBQWdELEVBQUE7QUFHbEQ7RUFDRSw2QkFBa0QsRUFBQTtBQUxwRDtFQUNFLDZCQUFnRCxFQUFBO0FBR2xEO0VBQ0UsOEJBQWtELEVBQUE7QUFMcEQ7RUFDRSwyQkFBZ0QsRUFBQTtBQUdsRDtFQUNFLDRCQUFrRCxFQUFBO0FBTHBEO0VBQ0UsOEJBQWdELEVBQUE7QUFHbEQ7RUFDRSwrQkFBa0QsRUFBQTtBQUxwRDtFQUNFLDRCQUFnRCxFQUFBO0FBR2xEO0VBQ0UsNkJBQWtELEVBQUE7QUFMcEQ7RUFDRSw2QkFBZ0QsRUFBQTtBQUdsRDtFQUNFLDhCQUFrRCxFQUFBO0FBTHBEO0VBQ0UsMkJBQWdELEVBQUE7QUFHbEQ7RUFDRSw0QkFBa0QsRUFBQTtBQUxwRDtFQUNFLDhCQUFnRCxFQUFBO0FBR2xEO0VBQ0UsK0JBQWtELEVBQUE7QUFMcEQ7RUFDRSw0QkFBZ0QsRUFBQTtBQUdsRDtFQUNFLDZCQUFrRCxFQUFBO0FBTHBEO0VBQ0UsNkJBQWdELEVBQUE7QUFHbEQ7RUFDRSw4QkFBa0QsRUFBQTtBQUxwRDtFQUNFLDJCQUFnRCxFQUFBO0FBR2xEO0VBQ0UsNEJBQWtELEVBQUE7QUFMcEQ7RUFDRSw4QkFBZ0QsRUFBQTtBQUdsRDtFQUNFLCtCQUFrRCxFQUFBO0FBTHBEO0VBQ0UsNEJBQWdELEVBQUE7QUFHbEQ7RUFDRSw2QkFBa0QsRUFBQTtBQUxwRDtFQUNFLDZCQUFnRCxFQUFBO0FBR2xEO0VBQ0UsOEJBQWtELEVBQUE7QUFMcEQ7RUFDRSwyQkFBZ0QsRUFBQTtBQUdsRDtFQUNFLDRCQUFrRCxFQUFBO0FBTHBEO0VBQ0UsOEJBQWdELEVBQUE7QUFHbEQ7RUFDRSwrQkFBa0QsRUFBQTtBQUxwRDtFQUNFLDRCQUFnRCxFQUFBO0FBR2xEO0VBQ0UsNkJBQWtELEVBQUE7QUFMcEQ7RUFDRSw2QkFBZ0QsRUFBQTtBQUdsRDtFQUNFLDhCQUFrRCxFQUFBO0FBTHBEO0VBQ0UsMkJBQWdELEVBQUE7QUFHbEQ7RUFDRSw0QkFBa0QsRUFBQTtBQUxwRDtFQUNFLDhCQUFnRCxFQUFBO0FBR2xEO0VBQ0UsK0JBQWtELEVBQUE7QUFMcEQ7RUFDRSw0QkFBZ0QsRUFBQTtBQUdsRDtFQUNFLDZCQUFrRCxFQUFBO0FBTHBEO0VBQ0UsNkJBQWdELEVBQUE7QUFHbEQ7RUFDRSw4QkFBa0QsRUFBQTtBQUxwRDtFQUNFLDJCQUFnRCxFQUFBO0FBR2xEO0VBQ0UsNEJBQWtELEVBQUE7QUFMcEQ7RUFDRSw4QkFBZ0QsRUFBQTtBQUdsRDtFQUNFLCtCQUFrRCxFQUFBO0FBTHBEO0VBQ0UsNEJBQWdELEVBQUE7QUFHbEQ7RUFDRSw2QkFBa0QsRUFBQTtBQUxwRDtFQUNFLDZCQUFnRCxFQUFBO0FBR2xEO0VBQ0UsOEJBQWtELEVBQUE7QUFMcEQ7RUFDRSwyQkFBZ0QsRUFBQTtBQUdsRDtFQUNFLDRCQUFrRCxFQUFBO0FBTHBEO0VBQ0UsOEJBQWdELEVBQUE7QUFHbEQ7RUFDRSwrQkFBa0QsRUFBQTtBQUxwRDtFQUNFLDRCQUFnRCxFQUFBO0FBR2xEO0VBQ0UsNkJBQWtELEVBQUE7QUFMcEQ7RUFDRSw2QkFBZ0QsRUFBQTtBQUdsRDtFQUNFLDhCQUFrRCxFQUFBO0FBTHBEO0VBQ0UsMkJBQWdELEVBQUE7QUFH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QkFBaUI7UUFDakIsZUFBZSxFQUFBO0FBM0MvQjtRQThDZ0IsZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixvQ1I3QmMsRUFBQTtBUW5COUI7TUFxRFksaUJSL0JNO01RZ0NOLGVBQWUsRUFBQTtBQXREM0I7UUF5RGdCLFVBQVU7UUFDVixpQlJwQ0UsRUFBQTtBUXRCbEI7SUFvRVksYUFBYTtJQUNiLHVCQUF1QixFQUFBO0FBckVuQzs7TUF5RWdCLGFBQWEsRUFBQTtBQXpFN0I7SUE4RVksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsWUFBWTtJQUNaLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osd0NBQXdDO0lBQ3hDLFlBQVk7SUFDWixhQUFhO0lBQ2IsaUJScEVNLEVBQUE7QVF0QmxCO01BNkZnQix5Q0FBeUMsRUFBQTtBQ3ZFekQscUVBQUE7QUFDQTtFQUNJLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUNBQXVDO0VBQ3ZDLHNCQUFzQjtFQUN0QixhQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLG1CQUFtQixFQUFBO0FBUHZCO0lBVVEsYUFBYTtJQUNiLFdBQVcsRUFBQTtBQVhuQjtNQWNZLHdDQUFxQyxFQUFBO0FBZGpEO01Ba0JZLGFBQWE7TUFDYixzQkFBc0I7TUFDdEIsdUJBQXVCO01BQ3ZCLGtCQUFrQjtNQUNsQixlQUFlO01BQ2YsaUJBQWlCO01BQ2pCLGNUNUNHO01TNkNILFlBQVk7TUFDWixVQUFVO01BQ1YsWUFBWTtNQUNaLHNCQUFzQjtNQUN0QixlQUFlO01BQ2YsZ0JBQWdCLEVBQUE7QUE5QjVCO1FBaUNnQixtQkFBbUIsRUFBQTtBQWpDbkM7TUF3Q2dCLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRm9udHNcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnM6NDAwLDYwMCw3MDB8UG9wcGluczozMDAsNDAwLDYwMCw3MDAnKTtcclxuXHJcblxyXG4vLyBWYXJpYWJsZXNcclxuJGJsYWNrOiAjMTAxMDEwO1xyXG4kd2hpdGU6ICNmZmY7XHJcbiRiZzogI0Y5RkFGRTtcclxuJHJlZDogI0YyM0Q0NztcclxuJGJsdWU6ICMzRTNCRkI7XHJcbiRwcmltYXJ5OiAkYmx1ZTtcclxuJHRleHQ6IGZhZGUtb3V0KCRibGFjaywgMC4xKTtcclxuJHN1YnRsZTogZmFkZS1vdXQoJGJsYWNrLCAwLjUpO1xyXG5cclxuJGJvcmRlckNvbG9yOiBmYWRlLW91dCgkYmxhY2ssIDAuODUpO1xyXG4kYm9yZGVyUmFkaXVzOiA0cHg7XHJcbiRib3JkZXJSYWRpdXNNOiA4cHg7XHJcbiRib3JkZXJSYWRpdXNMOiAxNnB4O1xyXG5cclxuLy8gRm9udHNcclxuJHBvcHBpbnM6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuJHNhbnM6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG5cclxuXHJcbiR0cmFuc2l0aW9uOiAwLjE1cztcclxuJGJvcmRlclJhZGl1czogNHB4O1xyXG5cclxuLy8gSGVpZ2h0cyBhbmQgbWVhc3VyZW1lbnRzXHJcbiR0b3BCYXJIZWlnaHQ6IDU0cHg7XHJcblxyXG5cclxuLy8gUmVzcG9uc2l2ZW5lc3NcclxuJGZ1bGxNb2JpbGU6IDQ2MHB4OyIsIlxyXG4vLyBQYWRkaW5nIGFuZCBtYXJnaW4gaGVscGVyc1xyXG4vLyBVc2UgY2xhc3NlcyAubS10LTUgZm9yIG1hcmdpbi10b3A6IDVweCBcclxuLy8gQ2hhbmdlcyBzaWRlL251bWJlciBhcyBuZWVkZWRcclxuXHJcbiRzcGFjZWFtb3VudHM6ICg1LCAxMCwgMTUsIDIwLCAyNSwgMzAsIDM1LCA0MCwgNDUsIDUwLCA3NSwgMTAwKTsgXHJcbiRzaWRlczogKHRvcCwgYm90dG9tLCBsZWZ0LCByaWdodCk7XHJcblxyXG5AZWFjaCAkc3BhY2UgaW4gJHNwYWNlYW1vdW50cyB7XHJcbiAgQGVhY2ggJHNpZGUgaW4gJHNpZGVzIHtcclxuICAgIC5tLSN7c3RyLXNsaWNlKCRzaWRlLCAwLCAxKX0tI3skc3BhY2V9IHtcclxuICAgICAgbWFyZ2luLSN7JHNpZGV9OiAjeyRzcGFjZX1weCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLnAtI3tzdHItc2xpY2UoJHNpZGUsIDAsIDEpfS0jeyRzcGFjZX0ge1xyXG4gICAgICBwYWRkaW5nLSN7JHNpZGV9OiAjeyRzcGFjZX1weCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxufSIsIi8vIFN0cnVjdHVyZS5zY3NzXHJcbi8vIFNjYWZmb2xkaW5nIGFuZCBmbGV4IHN0eWxlcyBmb3IgYmFzaWMgc3RydWN0dXJlIG9mIHBhZ2VcclxuLy8gSW5jbHVkaW5nIFNpZGViYXJcclxuXHJcbiNvdXRlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0cmFuc2l0aW9uOiAwLjE1cztcclxuXHJcbiAgICBoZWFkZXIjbWFpbntcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGhlaWdodDogJHRvcEJhckhlaWdodDtcclxuICAgICAgICBtaW4taGVpZ2h0OiAkdG9wQmFySGVpZ2h0O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibGFjaztcclxuICAgIH1cclxuXHJcbiAgICAvLyBCb2R5IHdyYXBwZXJcclxuICAgIC8vICBJbmNsdWRlcyBzaWRlYmFyIGFuZCBtYWluIGNvbnRlbnRcclxuICAgICNib2R5e1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1ncm93OiAzO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuXHJcblxyXG4gICAgICAgIC8vIDUwMDAgWi1pbmRleFxyXG4gICAgICAgICNzaWRlYmFye1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgd2lkdGg6IDI4MHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZSwgd2lkdGggMHMgMC4xNXM7XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAkdG9wQmFySGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDY5cHg7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAtMjgwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgZmFkZS1vdXQoJGJsYWNrLCAwLjgpO1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDogNTAwMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gRnVsbCBNb2JpbGUgLSBtZW51IG9uIGJvdHRvbVxyXG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1MHB4KSB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IGF1dG87XHJcbiAgICAgICAgICAgICAgICBib3R0b206IC02MHZoO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2MHZoO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogJGJvcmRlclJhZGl1c0w7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogJGJvcmRlclJhZGl1c0w7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYuZXhwYW5kZWR7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZSwgd2lkdGggMHM7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gRnVsbCBNb2JpbGVcclxuICAgICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTUwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGZhZGUtb3V0KCRibGFjaywgMC44KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gXHJcblxyXG4gICAgICAgIG1haW57XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBmbGV4LWdyb3c6IDM7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8vIFNpZGViYXIgTGlnaHRib3hcclxuLy8gU2lkZWJhciBMaWdodGJveFxyXG4vLyBTaWRlYmFyIExpZ2h0Ym94XHJcbi8vIFNpZGViYXIgTGlnaHRib3hcclxuI3NpZGViYXJMaWdodGJveHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAkdG9wQmFySGVpZ2h0O1xyXG4gICAgbGVmdDogMDtcclxuICAgIHotaW5kZXg6IDQ5OTk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBmYWRlLW91dCgkYmxhY2ssIDAuNik7XHJcbiAgICBoZWlnaHQ6IDBweDtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMHMgMC4ycywgb3BhY2l0eSAwLjJzO1xyXG5cclxuICAgICYudmlzaWJsZXtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogaGVpZ2h0IDBzLCBvcGFjaXR5IDAuMnM7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIi8vIFBhcmFncmFwaHNcclxucHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzogMCAwIDhweCAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgICBmb250LWZhbWlseTogJHNhbnM7XHJcbiAgICBjb2xvcjogJHRleHQ7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJGZ1bGxNb2JpbGUpIHtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5oMSxoMixoMyxoNHtcclxuICAgIGZvbnQtZmFtaWx5OiAkcG9wcGlucztcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuaDUsaDZ7XHJcbiAgICBmb250LWZhbWlseTogJHNhbnM7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5oMXtcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxufVxyXG5oMntcclxuICAgIGZvbnQtc2l6ZTogMjZweDtcclxufVxyXG5oM3tcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxufVxyXG5oNHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5oNXtcclxuICAgIGZvbnQtc2l6ZTogMThweFxyXG59XHJcbmg2e1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG5cclxubGFiZWx7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogJHN1YnRsZTtcclxuICAgIG1hcmdpbjogMnB4IDAgMnB4IDA7XHJcbn0iLCIvLyBMaWdodGJveCAtIGRhcmsgYmFja2dyb3VuZFxyXG4vLyBDbGljayB0byBjbG9zZSBtb2RhbFxyXG5cclxuI21vZGFsTGlnaHRib3h7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG59XHJcblxyXG4vLyBBZGQgY2xhc3MgYmx1ciB0byBhbnkgZWxlbWVudCB5b3Ugd2FudCBibHVycmVkXHJcbi8vIEJlc3QgdXNlOiBhZGQgdG8gb3V0ZXIgYm9keSB3cmFwcGVyIHdoZW4gbW9kYWwgaXMgdmlzaWJsZVxyXG4uYmx1cntcclxuICAgIGZpbHRlcjogYmx1cig2cHgpO1xyXG4gICAgdHJhbnNpdGlvbjogMHM7XHJcbn1cclxuXHJcblxyXG4vLyBNb2RhbCBTdHJ1Y3R1cmVcclxuLy8gTW9kYWwgU3RydWN0dXJlXHJcbi5tb2RhbC13cmFwcGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6IDAgNiU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBmYWRlLW91dCgkYmxhY2ssIDAuNCk7XHJcbiAgICB6LWluZGV4OiAxMDAwMDtcclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRmdWxsTW9iaWxlKSB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5tb2RhbHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIG1pbi13aWR0aDogNDAwcHg7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA2ODBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyUmFkaXVzTDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgbWluLWhlaWdodDogMjQwcHg7XHJcbiAgICAgICAgbWF4LWhlaWdodDogOTB2aDtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuXHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkZnVsbE1vYmlsZSkge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiBub25lO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IG5vbmU7XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDg1dmg7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuXHJcbiAgICAgICAgLy8gTW9kYWwgaGVhZGVyIC0gdGl0bGUgYW5kIGNsb3NlIGJ1dHRvblxyXG4gICAgICAgIC5tb2RhbC1oZWFkZXJ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgYm94cy1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHggMjBweDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRwb3BwaW5zO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRmdWxsTW9iaWxlKSB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDIwcHggNXB4IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC50aXRsZXtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLm1vZGFsLWNsb3Nle1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDQycHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMDtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMnM7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogZmFkZS1vdXQoJGJsYWNrLCAwLjcpO1xyXG5cclxuICAgICAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMnM7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRyZWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmOmFjdGl2ZXtcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIE1vZGFsIGNvbnRlbnRcclxuICAgICAgICAubW9kYWwtY29udGVudHtcclxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICBmbGV4LWdyb3c6IDM7XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDQ1dmg7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG5cclxuICAgICAgICAgICAgJi5ub3BhZGRpbmd7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgJjpsYXN0LWNoaWxke1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRmdWxsTW9iaWxlKSB7XHJcbiAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA1MHZoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIE1vZGFsIEFjdGlvbnMvYnV0dG9uc1xyXG4gICAgICAgIC5tb2RhbC1hY3Rpb25ze1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHggMTdweDtcclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJGZ1bGxNb2JpbGUpIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5sZWZ0e1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYucmlnaHR7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBidXR0b257XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgM3B4O1xyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJGZ1bGxNb2JpbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMCAwIDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1ncm93OiAzO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTJweCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLy8gQSBsaXR0bGUgYmlnZ2VyIG1vZGFsIChvbiBsYXJnZSBzY3JlZW5zKVxyXG4gICAgICAgIC8vIEEgbGl0dGxlIGJpZ2dlciBtb2RhbCAob24gbGFyZ2Ugc2NyZWVucylcclxuICAgICAgICAmLmJpZ3tcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA4ODBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEEgdGlueSBtb2RhbCAtIGZvciBjb25maXJtYXRpb25zXHJcbiAgICAgICAgLy8gQSB0aW55IG1vZGFsIC0gZm9yIGNvbmZpcm1hdGlvbnNcclxuICAgICAgICAmLnRpbnl7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMzgwcHg7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogMzQwcHg7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkZnVsbE1vYmlsZSkge1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiBub25lO1xyXG5cclxuICAgICAgICAgICAgICAgIC5tb2RhbC1jb250ZW50e1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gVG9hc3RcclxuLy8gVG9hc3RcclxuLy8gVG9hc3RcclxuI3RvYXN0e1xyXG4gICAgei1pbmRleDogMSwwMDE7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBib3R0b206IC0yMDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTUwcHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZzogMTJweCA4cHggMTJweCAxMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogJGJvcmRlclJhZGl1c007XHJcbiAgICB0cmFuc2l0aW9uOiBib3R0b20gLjNzIGVhc2UtaW4tb3V0LG9wYWNpdHkgMHMgMC4zcyBlYXNlLWluLW91dDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBib3gtc2hhZG93OiAwIDVweCAyNXB4IC01cHggcmdiYSgzMCwxNiw4NCwuMyk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmxhY2s7XHJcblxyXG4gICAgI3RvYXN0SWNvbntcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTJweDtcclxuICAgICAgICB3aWR0aDogNTVweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG5cclxuICAgICN0b2FzdFRleHR7XHJcbiAgICAgICAgZmxleC1ncm93OiAzO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcblxyXG4gICAgICAgICN0b2FzdFRpdGxle1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4yNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAjdG9hc3RCb2R5e1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEyLjVweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjI1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEFsdCBUb2FzdCBDb2xvcnNcclxuICAgICYucmVke1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRyZWQ7XHJcbiAgICB9XHJcbiAgICAmLmJsdWV7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XHJcbiAgICB9XHJcbiAgICAmLmJsYWNre1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibGFjaztcclxuICAgIH1cclxuICAgICYud2hpdGV7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xyXG5cclxuICAgICAgICAjdG9hc3RJY29uLFxyXG4gICAgICAgICN0b2FzdFRleHR7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkYmxhY2s7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFdoZW4gdmlzaWJsZVxyXG4gICAgJi52aXNpYmxle1xyXG4gICAgICAgIGJvdHRvbTogMjVweDtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGJvdHRvbSAuM3MgZWFzZS1pbi1vdXQsb3BhY2l0eSAuM3MgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJGZ1bGxNb2JpbGUpIHtcclxuICAgICAgICAgICAgYm90dG9tOiAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIE1vYmlsZSB0b2FzdCAtIGZ1bGwgd2lkdGhcclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJGZ1bGxNb2JpbGUpIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIGJvdHRvbTogLTIwMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDE4cHggMTRweCAxOHB4IDE4cHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcclxuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDVweCAyNXB4IDVweCByZ2JhKDMwLDE2LDg0LC4yKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG4vLyBBYm91dCBNb2RhbFxyXG4jYWJvdXRNb2RhbHtcclxuXHJcbiAgICAubW9kYWwtY29udGVudHtcclxuICAgICAgICB3aWR0aDogNjIwcHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgICAgICB0YWJze1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGFie1xyXG4gICAgICAgICAgICBmbGV4LWdyb3c6IDM7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnBhbmV7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy8gQnV0dG9uc1xyXG4vLyBCdXR0b25zXHJcbi8vIEJ1dHRvbnNcclxuYnV0dG9ue1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6IDZweCAxNnB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICRwb3BwaW5zO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnk7XHJcbiAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyUmFkaXVzO1xyXG5cclxuICAgICY6aG92ZXJ7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkcHJpbWFyeSwgNSUpO1xyXG4gICAgfVxyXG5cclxuICAgICY6Zm9jdXN7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICB9XHJcblxyXG4gICAgJjphY3RpdmV7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIENvbG9yc1xyXG4gICAgLy8gUmVkXHJcbiAgICAmLnJlZHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmVkO1xyXG4gICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkcmVkLCA1JSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6YWN0aXZle1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmVkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8vIFNlYXJjaCBTZWxlY3RvclxyXG4vLyBTZWFyY2ggU2VsZWN0b3JcclxuLy8gU2VhcmNoIFNlbGVjdG9yXHJcbi5zZWFyY2gtc2VsZWN0e1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgaW5wdXR7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGJvcmRlckNvbG9yO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXJSYWRpdXM7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICBwYWRkaW5nOiA2cHggMTJweDtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRzYW5zO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgY29sb3I6ICRibGFjaztcclxuICAgIH1cclxuXHJcbiAgICAuc2VhcmNoLXNlbGVjdC1yZXN1bHRze1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJsYWNrO1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMTgwcHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcblxyXG4gICAgICAgIGRpdntcclxuICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTVweDtcclxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgcGFkZGluZzogNHB4IDE1cHg7XHJcblxyXG4gICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbnB1dDpmb2N1cyB+IC5zZWFyY2gtc2VsZWN0LXJlc3VsdHN7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vLyBTZWxlY3QgRHJvcGRvd25cclxuLy8gU2VsZWN0IERyb3Bkb3duXHJcbi8vIFNlbGVjdCBEcm9wZG93blxyXG4uc3R5bGVkLXNlbGVjdHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICB3aWR0aDogOTklO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQ6ICNmYWZhZmEgdXJsKFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LFIwbEdPRGxoRHdBVUFJQUJBQUFBQVAvLy95SDVCQUVBQUFFQUxBQUFBQUFQQUJRQUFBSVhqSStweSswUG81d0gySHNYem13Ly9sSGlTSlptVUFBQU93PT1cIikgbm8tcmVwZWF0IDk1JSA0OCU7XHJcblxyXG4gICAgc2VsZWN0e1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCA4cHg7XHJcbiAgICAgICAgd2lkdGg6IDEzMCU7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcblxyXG4gICAgICAgICY6Zm9jdXN7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLy8gUmVndWxhciBTZWxlY3RzXHJcbnNlbGVjdHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gVGVtcCBNdWx0aSBTZWxlY3RcclxuLy8gVGVtcCBNdWx0aSBTZWxlY3RcclxuLy8gVGVtcCBNdWx0aSBTZWxlY3RcclxuLnNpZGViYXItY29udGVudCBzZWxlY3R7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZmFkZS1vdXQoJGJsYWNrLCAwLjkpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHJcbiAgICBvcHRpb257XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgcGFkZGluZzogM3B4IDhweDtcclxuICAgICAgICBmb250LWZhbWlseTogJHNhbnM7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxufVxyXG4uZmlsdGVyLXNlbGVjdHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICBzZWxlY3R7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMjZweDtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjE1cztcclxuXHJcbiAgICAgICAgJjpiZWZvcmV7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdTZWxlY3QnO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJHNhbnM7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiA1JTtcclxuICAgICAgICAgICAgbGVmdDogMS41JTtcclxuICAgICAgICAgICAgaGVpZ2h0OiA5MCU7XHJcbiAgICAgICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogJHRyYW5zaXRpb247XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOmFmdGVye1xyXG4gICAgICAgICAgICBjb250ZW50OiAnXFxmMGQ3JztcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdGb250IEF3ZXNvbWUgNSBQcm8nO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgdG9wOiA1JTtcclxuICAgICAgICAgICAgbGVmdDogMS41JTtcclxuICAgICAgICAgICAgaGVpZ2h0OiA5MCU7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5MyU7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBmYWRlLW91dCgkYmxhY2ssIDAuOTUpO1xyXG5cclxuICAgICAgICAgICAgJjphZnRlcntcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkYmx1ZTtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOmZvY3Vze1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjE1cztcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogMTIwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cclxuICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmOmFmdGVyLFxyXG4gICAgICAgICAgICAmOmJlZm9yZXtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaGVhZGVyI21haW57XHJcblxyXG4gICAgLy8gQnJhbmRpbmdcclxuICAgICNicmFuZGluZ3tcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMCAwIDE1cHg7XHJcblxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMCAwIDQwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjbnlkZWNMb2dvLFxyXG4gICAgICAgICN1c2dzTG9nb3tcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG5cclxuICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDM4cHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI255ZGVjTG9nb3tcclxuICAgICAgICAgICAgZmlsdGVyOiBpbnZlcnQoMTAwJSk7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuXHJcbiAgICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBMaW5rcyBvbiByaWdodFxyXG4gICAgI2hlYWRlckxpbmtze1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1ncm93OiAzO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICBwYWRkaW5nOiAwIDEwcHggMCAwO1xyXG5cclxuICAgICAgICBhe1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDEycHggMDtcclxuICAgICAgICAgICAgY29sb3I6ICRibGFjaztcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRzYW5zO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAycHg7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcblxyXG4gICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjpmb2N1c3tcclxuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6YWN0aXZle1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC43NTtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy8gQnJhbmRpbmdcclxuLy8gQnJhbmRpbmdcclxuLy8gQnJhbmRpbmdcclxuXHJcbmhlYWRlciNtYWlue1xyXG4gICAgI2JyYW5kaW5ne1xyXG5cclxuICAgICAgICAvLyBDb2xsYXBzaWJsZSBUaXRsZVxyXG4gICAgICAgICN0aXRsZXtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gICAgICAgICAgICAuYWJicixcclxuICAgICAgICAgICAgLmV4cGFuZGVke1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkcG9wcGlucztcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5hYmJye1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZXhwYW5kZWR7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDtcclxuXHJcbiAgICAgICAgICAgICAgICAuZXhwYW5kZWR7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8vIENvbGxhcHNpYmxlIHNlY3Rpb25zIC0gTWFwICYgRGF0YVxyXG4vLyBDb2xsYXBzaWJsZSBzZWN0aW9ucyAtIE1hcCAmIERhdGFcclxuLy8gQ29sbGFwc2libGUgc2VjdGlvbnMgLSBNYXAgJiBEYXRhXHJcblxyXG4uY29sbGFwc2libGV7XHJcblxyXG4gICAgXHJcbn0iLCIvLyBNYXAgYW5kIGxlZ2VuZCB0d2Vha3NcclxuXHJcbiNtYXBXcmFwcGVye1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAjbWFwe1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZmFkZS1vdXQoJGJsYWNrLCAwLjgpO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRib3JkZXJSYWRpdXNMO1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuMTc1cyBlYXNlO1xyXG4gICAgfVxyXG5cclxuICAgICNjb2xsYXBzZU1hcHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG5cclxuICAgICN0b2dnbGVNYXB7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogJHRyYW5zaXRpb247XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7ICAgICBcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIHBhZGRpbmc6IDhweDsgICBcclxuXHJcbiAgICAgICAgZGl2e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgb3BhY2l0eTogMC43NTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogJHRyYW5zaXRpb247XHJcblxyXG4gICAgICAgICAgICBpLGJ7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpe1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYntcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJHNhbnM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICAgICBkaXZ7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogJHRyYW5zaXRpb247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWFwIGNvbGxhcHNlZC9taW5pbWl6ZWRcclxuICAgIC8vIE1hcCBjb2xsYXBzZWQvbWluaW1pemVkXHJcbiAgICAmLmNvbGxhcHNlZHtcclxuXHJcbiAgICAgICAgI21hcHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMTBweDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4xNzVzIGVhc2U7XHJcblxyXG4gICAgICAgICAgICAubGVhZmxldC1jb250cm9sLWNvbnRhaW5lcixcclxuICAgICAgICAgICAgLmxlYWZsZXQtY29udHJvbHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICN0b2dnbGVNYXB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGZhZGUtb3V0KCRibGFjaywgMC4zNSk7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDQwMTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogJHRyYW5zaXRpb247XHJcblxyXG4gICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZmFkZS1vdXQoJGJsYWNrLCAwLjUyNSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59XHJcbiIsIi8vIE1haW4gU0NTUyBmaWxlLlxyXG4vLyBEbyBub3QgYWRkIGFueXRoaW5nIGRpcmVjdGx5IHRvIHRoaXMgZmlsZS5cclxuLy8gRmluZCB0aGUgYXBwcm9wcmlhdGUgZmlsZSB3aXRoaW4gdGhlIC9zdHlsZXMgZm9sZGVyXHJcblxyXG5AaW1wb3J0ICd2YXJpYWJsZXMuc2Nzcyc7XHJcblxyXG4vLyBTQVNTIGhlbHBlcnMvbWl4aW5zXHJcbkBpbXBvcnQgJy9zdHlsZXMvaGVscGVycy5zY3NzJztcclxuXHJcbi8vIFVuaXZlcnNhbCBJbXBvcnRzXHJcbkBpbXBvcnQgJy9zdHlsZXMvc3RydWN0dXJlLnNjc3MnO1xyXG5AaW1wb3J0ICcvc3R5bGVzL3RleHQuc2Nzcyc7XHJcbkBpbXBvcnQgJy9zdHlsZXMvbW9kYWxzLnNjc3MnO1xyXG5AaW1wb3J0ICcvc3R5bGVzL2lucHV0cy5zY3NzJztcclxuXHJcbkBpbXBvcnQgJy9zdHlsZXMvaGVhZGVyLnNjc3MnO1xyXG5cclxuQGltcG9ydCAnL3N0eWxlcy9jdXN0b20vZ2VuZXJhbC5zY3NzJztcclxuQGltcG9ydCAnL3N0eWxlcy9jdXN0b20vbWFwLnNjc3MnO1xyXG5cclxuXHJcbi8vIFNwZWNpZmljIGltcG9ydHNcclxuXHJcblxyXG4vKlRFTVBPUkFSWSBTVFlMSU5HIFVOVElMIFdFIEdFVCBUSEUgTElRV0lEUyBEQVNIQk9BUkQgSU5TRVJURUQgSEVSRSovXHJcbiNkYXNoYm9hcmRUYWJsZXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZmFkZS1vdXQoJGJsYWNrLCAwLjgpO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6ICAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDQ1cHg7XHJcblxyXG4gICAgLnJvd3tcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAmOm50aC1jaGlsZChldmVuKXtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMCwxMCw1MCwwLjA4KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRpdntcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTNweDtcclxuICAgICAgICAgICAgY29sb3I6ICRibGFjaztcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAlO1xyXG4gICAgICAgICAgICBmbGV4LWdyb3c6IDM7XHJcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuXHJcbiAgICAgICAgICAgICY6bnRoLWNoaWxkKDEpe1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5oZWFkZXJ7XHJcblxyXG4gICAgICAgICAgICBkaXZ7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IFxyXG4iXX0= */"

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

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Open+Sans:400,600,700|Poppins:300,400,600,700\");\n#noData {\n  color: #F23D47;\n  font-size: 14px;\n  display: block; }\n#dataView {\n  display: block;\n  box-sizing: border-box;\n  padding: 15px; }\n#chartWrapper {\n  display: flex;\n  justify-content: center;\n  box-sizing: border-box;\n  padding: 20px 0 45px 0; }\n#chart1,\n#chart2 {\n  display: block;\n  width: 48%;\n  height: 320px; }\n#dataTable {\n  display: flex;\n  flex-direction: column;\n  border: 1px solid rgba(16, 16, 16, 0.2);\n  box-sizing: border-box;\n  padding: 15px;\n  border-radius: 10px;\n  margin-bottom: 45px; }\n#dataTable .row {\n    display: flex;\n    width: 100%; }\n#dataTable .row:nth-child(even) {\n      background-color: rgba(10, 10, 50, 0.08); }\n#dataTable .row td, #dataTable .row th {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      text-align: center;\n      font-size: 12px;\n      line-height: 13px;\n      color: #101010;\n      height: 40px;\n      width: 10%;\n      flex-grow: 3;\n      box-sizing: border-box;\n      padding: 0 10px;\n      text-align: left; }\n#dataTable .row td:nth-child(1), #dataTable .row th:nth-child(1) {\n        font-weight: bolder; }\n#dataTable .row.header div {\n      font-weight: bolder; }\n.hidden {\n  display: none !important; }\nbutton {\n  margin-bottom: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbnZpZXcvZGF0YXZpZXcvQzpcXFVzZXJzXFxramFjb2JzZW5cXERvY3VtZW50c1xcd2ltX3Byb2plY3RzXFxMSVFXSURTL3NyY1xcYXBwXFx2YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvbWFpbnZpZXcvZGF0YXZpZXcvQzpcXFVzZXJzXFxramFjb2JzZW5cXERvY3VtZW50c1xcd2ltX3Byb2plY3RzXFxMSVFXSURTL3NyY1xcYXBwXFxtYWludmlld1xcZGF0YXZpZXdcXGRhdGF2aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLG9HQUFZO0FDQ1o7RUFDSSxjREtTO0VDSlQsZUFBZTtFQUNmLGNBQWMsRUFBQTtBQUdsQjtFQUNJLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsYUFBYSxFQUFBO0FBTWpCO0VBQ0ksYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsc0JBQXNCLEVBQUE7QUFFMUI7O0VBRUksY0FBYztFQUNkLFVBQVU7RUFDVixhQUFhLEVBQUE7QUFHakI7RUFDSSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVDQUF1QztFQUN2QyxzQkFBc0I7RUFDdEIsYUFBYztFQUNkLG1CQUFtQjtFQUNuQixtQkFBbUIsRUFBQTtBQVB2QjtJQVVRLGFBQWE7SUFDYixXQUFXLEVBQUE7QUFYbkI7TUFjWSx3Q0FBcUMsRUFBQTtBQWRqRDtNQWtCWSxhQUFhO01BQ2Isc0JBQXNCO01BQ3RCLHVCQUF1QjtNQUN2QixrQkFBa0I7TUFDbEIsZUFBZTtNQUNmLGlCQUFpQjtNQUNqQixjRGpERztNQ2tESCxZQUFZO01BQ1osVUFBVTtNQUNWLFlBQVk7TUFDWixzQkFBc0I7TUFDdEIsZUFBZTtNQUNmLGdCQUFnQixFQUFBO0FBOUI1QjtRQWlDZ0IsbUJBQW1CLEVBQUE7QUFqQ25DO01Bd0NnQixtQkFBbUIsRUFBQTtBQU1uQztFQUNJLHdCQUF3QixFQUFBO0FBRzVCO0VBQ0ksa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYWludmlldy9kYXRhdmlldy9kYXRhdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEZvbnRzXHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zOjQwMCw2MDAsNzAwfFBvcHBpbnM6MzAwLDQwMCw2MDAsNzAwJyk7XHJcblxyXG5cclxuLy8gVmFyaWFibGVzXHJcbiRibGFjazogIzEwMTAxMDtcclxuJHdoaXRlOiAjZmZmO1xyXG4kYmc6ICNGOUZBRkU7XHJcbiRyZWQ6ICNGMjNENDc7XHJcbiRibHVlOiAjM0UzQkZCO1xyXG4kcHJpbWFyeTogJGJsdWU7XHJcbiR0ZXh0OiBmYWRlLW91dCgkYmxhY2ssIDAuMSk7XHJcbiRzdWJ0bGU6IGZhZGUtb3V0KCRibGFjaywgMC41KTtcclxuXHJcbiRib3JkZXJDb2xvcjogZmFkZS1vdXQoJGJsYWNrLCAwLjg1KTtcclxuJGJvcmRlclJhZGl1czogNHB4O1xyXG4kYm9yZGVyUmFkaXVzTTogOHB4O1xyXG4kYm9yZGVyUmFkaXVzTDogMTZweDtcclxuXHJcbi8vIEZvbnRzXHJcbiRwb3BwaW5zOiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiRzYW5zOiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuXHJcblxyXG4kdHJhbnNpdGlvbjogMC4xNXM7XHJcbiRib3JkZXJSYWRpdXM6IDRweDtcclxuXHJcbi8vIEhlaWdodHMgYW5kIG1lYXN1cmVtZW50c1xyXG4kdG9wQmFySGVpZ2h0OiA1NHB4O1xyXG5cclxuXHJcbi8vIFJlc3BvbnNpdmVuZXNzXHJcbiRmdWxsTW9iaWxlOiA0NjBweDsiLCJAaW1wb3J0ICcuLi8uLi92YXJpYWJsZXMuc2Nzcyc7XHJcblxyXG4jbm9EYXRhe1xyXG4gICAgY29sb3I6ICRyZWQ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuI2RhdGFWaWV3e1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuI2NoYXJ0V3JhcHBlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDAgNDVweCAwO1xyXG59XHJcbiNjaGFydDEsXHJcbiNjaGFydDJ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiA0OCU7XHJcbiAgICBoZWlnaHQ6IDMyMHB4O1xyXG59XHJcblxyXG4jZGF0YVRhYmxle1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBmYWRlLW91dCgkYmxhY2ssIDAuOCk7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZzogIDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDVweDtcclxuXHJcbiAgICAucm93e1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgICY6bnRoLWNoaWxkKGV2ZW4pe1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwLDEwLDUwLDAuMDgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGQsdGh7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEzcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkYmxhY2s7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwJTtcclxuICAgICAgICAgICAgZmxleC1ncm93OiAzO1xyXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcblxyXG4gICAgICAgICAgICAmOm50aC1jaGlsZCgxKXtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYuaGVhZGVye1xyXG5cclxuICAgICAgICAgICAgZGl2e1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSBcclxuXHJcbi5oaWRkZW57XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmJ1dHRvbntcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxufSJdfQ== */"

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
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]],
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

module.exports = "<i\r\n  class=\"far\"\r\n  id=\"sidebarToggle\"\r\n  (click)=\"expandSidebar = !expandSidebar\"\r\n  [ngClass]=\"{ 'fa-bars': !expandSidebar, 'fa-times': expandSidebar }\"\r\n  ></i>\r\n\r\n<div id=\"sidebar\" [ngClass]=\"{ 'expanded': expandSidebar }\">\r\n\r\n  <!--  Sidebar Basemaps  -->\r\n  <div class=\"sidebar-header\" (click)=\"showBasemaps = !showBasemaps\" [ngClass]=\"{ expanded: showBasemaps }\">\r\n    <i class=\"far fa-map\"></i>\r\n    <b>Basemaps</b>\r\n  </div>\r\n\r\n  <!-- Basemaps content -->\r\n  <div class=\"sidebar-content\" [ngClass]=\"{ expanded: showBasemaps }\">\r\n    <div id=\"sidebarBasemaps\">\r\n      <div\r\n        class=\"basemap\"\r\n        id=\"basemap1\"\r\n        (click)=\"toggleLayer('OpenStreetMap')\"\r\n        [ngClass]=\"{ active: chosenBaseLayer == 'OpenStreetMap' }\"\r\n      >\r\n        Streets\r\n      </div>\r\n      <div\r\n        class=\"basemap\"\r\n        id=\"basemap2\"\r\n        (click)=\"toggleLayer('Topo')\"\r\n        [ngClass]=\"{ active: chosenBaseLayer == 'Topo' }\"\r\n      >\r\n        Topographic\r\n      </div>\r\n      <div\r\n        class=\"basemap\"\r\n        id=\"basemap3\"\r\n        (click)=\"toggleLayer('CartoDB')\"\r\n        [ngClass]=\"{ active: chosenBaseLayer == 'CartoDB' }\"\r\n      >\r\n        CartoDB\r\n      </div>\r\n      <div\r\n        class=\"basemap\"\r\n        id=\"basemap4\"\r\n        (click)=\"toggleLayer('Terrain')\"\r\n        [ngClass]=\"{ active: chosenBaseLayer == 'Terrain' }\"\r\n      >\r\n        Terrain\r\n      </div>\r\n      <div\r\n        class=\"basemap\"\r\n        id=\"basemap5\"\r\n        (click)=\"toggleLayer('Satellite')\"\r\n        [ngClass]=\"{ active: chosenBaseLayer == 'Satellite' }\"\r\n      >\r\n        Satellite\r\n      </div>\r\n      <div\r\n        class=\"basemap\"\r\n        id=\"basemap5\"\r\n        (click)=\"toggleLayer('Gray')\"\r\n        [ngClass]=\"{ active: chosenBaseLayer == 'Gray' }\"\r\n      >\r\n        Gray\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!--  Sidebar Parameter Filters  -->\r\n\r\n  <div id=\"siteCount\"><b>{{geoJSONsiteCount}}</b> sites showing</div>\r\n\r\n  <div class=\"sidebar-header\" (click)=\"showParameterFilters = !showParameterFilters\" [ngClass]=\"{ expanded: showParameterFilters }\">\r\n    <i class=\"far fa-filter\"></i>\r\n    <b>Parameter Filters</b>\r\n  </div>\r\n\r\n\r\n  <!-- Filters Parameter Content -->\r\n  <div class=\"sidebar-content\" [ngClass]=\"{ expanded: showParameterFilters }\">\r\n\r\n    <form *ngIf=\"siteFilterData\" [formGroup]=\"parameterDropDownGroup\" id=\"sidebarParameterFilters\">\r\n\r\n      <!-- characteristic -->\r\n      <label for=\"characteristic\">Characteristic</label>\r\n      <div class=\"filter-select\">\r\n          <select class=\"form-control\" formControlName=\"characteristic\" multiple>\r\n            <option *ngFor=\"let characteristic of parameterFilterData.characteristics\" [value]=\"characteristic\">{{characteristic}}</option>\r\n          </select>\r\n      </div>\r\n      \r\n    </form>\r\n\r\n    <!-- <button class=\"clearForm\" title=\"reQuery\" (click)=\"reQuery()\">Re-Query </button> -->\r\n  </div>\r\n\r\n  <!--  Sidebar Site Filters  -->\r\n\r\n  <div class=\"sidebar-header\" (click)=\"showSiteFilters = !showSiteFilters\" [ngClass]=\"{ expanded: showSiteFilters }\">\r\n    <i class=\"far fa-filter\"></i>\r\n    <b>Site Filters</b>\r\n  </div>\r\n  <!-- Filters Site Content -->\r\n    \r\n  <div class=\"sidebar-content\" [ngClass]=\"{ expanded: showSiteFilters }\">\r\n    <form *ngIf=\"siteFilterData\" [formGroup]=\"siteDropDownGroup\" id=\"sidebarSiteFilters\">\r\n\r\n      <!-- Huc8 -->\r\n      <label for=\"huc8\">Huc8</label>\r\n      <div class=\"filter-select\">\r\n          <select class=\"form-control\" formControlName=\"huc8\" multiple>\r\n              <option *ngFor=\"let huc of siteFilterData.huc8\" [value]=\"huc\">{{huc}}</option>\r\n          </select>\r\n      </div>\r\n        \r\n\r\n      <!-- <label for=\"location\">Location Name</label>\r\n        <select class=\"form-control\" formControlName=\"location\">\r\n            <option *ngFor=\"let locName of siteFilterData.locName\" [value]=\"locName\">{{locName}}</option>\r\n        </select>\r\n        <br> -->\r\n        <!-- <label for=\"name\">Site Name</label>\r\n        <select class=\"form-control\" formControlName=\"name\">\r\n            <option *ngFor=\"let name of siteFilterData.name\" [value]=\"name\">{{name}}</option>\r\n        </select>\r\n        <br> -->\r\n\r\n      <!-- Org IF -->\r\n      <label for=\"orgId\">Organization Id</label>\r\n      <div class=\"filter-select\">\r\n          <select class=\"form-control\" formControlName=\"orgId\" multiple>\r\n              <option *ngFor=\"let orgId of siteFilterData.orgId\" [value]=\"orgId\">{{orgId}}</option>\r\n          </select>\r\n      </div>\r\n\r\n      <!-- Org Name -->\r\n      <label for=\"orgName\">Organization Name</label>\r\n      <div class=\"filter-select\">\r\n          <select class=\"form-control\" formControlName=\"orgName\" multiple>\r\n              <option *ngFor=\"let orgName of siteFilterData.orgName\" [value]=\"orgName\">{{orgName}}</option>\r\n          </select>\r\n      </div>\r\n\r\n      <!-- Data Provider -->\r\n      <label for=\"provider\">Data Provider</label>\r\n      <div class=\"filter-select\">\r\n          <select class=\"form-control\" formControlName=\"provider\" multiple>\r\n              <option *ngFor=\"let provider of siteFilterData.provider\" [value]=\"provider\">{{provider}}</option>\r\n          </select>\r\n      </div>\r\n\r\n      <label for=\"searchType\">Keyword</label>\r\n      <div class=\"filter-select\">\r\n          <select class=\"form-control\" formControlName=\"searchType\" multiple>\r\n              <option *ngFor=\"let sType of siteFilterData.searchType\" [value]=\"sType\">{{sType}}</option>\r\n          </select>\r\n      </div>\r\n\r\n      <label for=\"type\">Site Type</label>\r\n      <div class=\"filter-select\">\r\n          <select class=\"form-control\" formControlName=\"type\" multiple>\r\n              <option *ngFor=\"let type of siteFilterData.type\" [value]=\"type\">{{type}}</option>\r\n          </select>\r\n      </div>\r\n\r\n\r\n    </form>\r\n\r\n    <button class=\"clearForm\" title=\"Clear All Selections\" (click)=\"clearForm()\">Clear Selections</button>\r\n  </div>\r\n  \r\n\r\n\r\n</div>\r\n<!-- End Sidebar -->\r\n\r\n<!-- Sidebar lightbox for mobile -->\r\n<div id=\"sidebarLightbox\" [ngClass]=\"{ visible: expandSidebar }\" (click)=\"expandSidebar = false\"></div>"

/***/ }),

/***/ "./src/app/mainview/sidebar/sidebar.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/mainview/sidebar/sidebar.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Open+Sans:400,600,700|Poppins:300,400,600,700\");\n#sidebarToggle {\n  color: white;\n  display: none;\n  flex-direction: column;\n  justify-content: center;\n  transition: 0.2s;\n  font-size: 20px;\n  width: 24px;\n  text-align: center;\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  height: 54px;\n  width: 54px; }\n#sidebarToggle:hover, #sidebarToggle:active {\n    cursor: pointer;\n    opacity: 0.6;\n    transition: 0.2s; }\n@media only screen and (max-width: 1200px) {\n    #sidebarToggle {\n      display: flex; } }\n#sidebar {\n  height: 100%;\n  overflow: auto; }\n#sidebar .sidebar-header {\n    font-family: \"Poppins\", sans-serif;\n    font-weight: 600;\n    font-size: 18px;\n    color: #101010;\n    letter-spacing: -0.3px;\n    display: flex; }\n#sidebar .sidebar-header i {\n      width: 40px;\n      height: 30px;\n      display: flex;\n      flex-direction: column;\n      justify-content: center; }\n#sidebar .sidebar-header b {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      flex-grow: 3;\n      position: relative; }\n#sidebar .sidebar-header b:after {\n        content: '\\f067';\n        font-family: 'Font Awesome 5 Pro';\n        position: absolute;\n        right: 0;\n        color: rgba(16, 16, 16, 0.2);\n        font-size: 16px; }\n#sidebar .sidebar-header.expanded b:after {\n      content: '\\f068'; }\n#sidebar .sidebar-header:hover {\n      cursor: pointer; }\n#sidebar .sidebar-header:hover b {\n        text-decoration: underline; }\n#sidebar .sidebar-header:hover b:after {\n          color: #101010; }\n#sidebar .sidebar-content {\n    display: block;\n    box-sizing: border-box;\n    padding-left: 40px;\n    height: 0px;\n    overflow: hidden;\n    margin-bottom: 15px; }\n#sidebar .sidebar-content.expanded {\n      height: auto; }\n#sidebar #sidebarBasemaps .basemap {\n    display: block;\n    font-family: \"Open Sans\", sans-serif;\n    font-size: 13px;\n    font-weight: 500;\n    box-sizing: border-box;\n    letter-spacing: -0.2px;\n    padding: 3px 0;\n    color: #101010; }\n#sidebar #sidebarBasemaps .basemap:hover {\n      cursor: pointer;\n      text-decoration: underline; }\n#sidebar #sidebarBasemaps .basemap.active {\n      color: #3E3BFB; }\n#sidebar #sidebarBasemaps .basemap.active:hover {\n        text-decoration: none; }\n#siteCount {\n  display: block;\n  text-align: center;\n  background-color: rgba(16, 16, 16, 0.15);\n  box-sizing: border-box;\n  border-radius: 4px;\n  padding: 10px;\n  color: #101010;\n  font-size: 12px;\n  font-weight: 500;\n  margin: 0 auto;\n  font-family: \"Poppins\", sans-serif;\n  letter-spacing: -0.4px;\n  margin-bottom: 8px;\n  margin-top: 15px; }\n#siteCount b {\n    font-weight: 600;\n    letter-spacing: -0.2px; }\n#sidebarFilters {\n  margin-bottom: 15px; }\n#sidebarFilters label {\n    margin-top: 6px; }\n.clearForm {\n  margin-top: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbnZpZXcvc2lkZWJhci9DOlxcVXNlcnNcXGtqYWNvYnNlblxcRG9jdW1lbnRzXFx3aW1fcHJvamVjdHNcXExJUVdJRFMvc3JjXFxhcHBcXHZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9tYWludmlldy9zaWRlYmFyL0M6XFxVc2Vyc1xca2phY29ic2VuXFxEb2N1bWVudHNcXHdpbV9wcm9qZWN0c1xcTElRV0lEUy9zcmNcXGFwcFxcbWFpbnZpZXdcXHNpZGViYXJcXHNpZGViYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0Esb0dBQVk7QUNHWjtFQUNJLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFFBQVE7RUFDUixTQUFTO0VBQ1QsWUFBWTtFQUNaLFdBQVcsRUFBQTtBQWJmO0lBaUJRLGVBQWU7SUFDZixZQUFZO0lBQ1osZ0JBQWdCLEVBQUE7QUFHcEI7SUF0Qko7TUF1QlEsYUFBYSxFQUFBLEVBRXBCO0FBR0Q7RUFDSSxZQUFZO0VBQ1osY0FBYyxFQUFBO0FBRmxCO0lBS1Esa0NEakJ1QjtJQ2tCdkIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixjRG5DTztJQ29DUCxzQkFBc0I7SUFDdEIsYUFBYSxFQUFBO0FBVnJCO01BYVksV0FBVztNQUNYLFlBQVk7TUFDWixhQUFhO01BQ2Isc0JBQXNCO01BQ3RCLHVCQUF1QixFQUFBO0FBakJuQztNQXFCWSxhQUFhO01BQ2Isc0JBQXNCO01BQ3RCLHVCQUF1QjtNQUN2QixZQUFZO01BQ1osa0JBQWtCLEVBQUE7QUF6QjlCO1FBNEJnQixnQkFBZ0I7UUFDaEIsaUNBQWlDO1FBQ2pDLGtCQUFrQjtRQUNsQixRQUFRO1FBQ1IsNEJBQTRCO1FBQzVCLGVBQWUsRUFBQTtBQWpDL0I7TUF3Q2dCLGdCQUFnQixFQUFBO0FBeENoQztNQTZDWSxlQUFlLEVBQUE7QUE3QzNCO1FBZ0RnQiwwQkFBMEIsRUFBQTtBQWhEMUM7VUFtRG9CLGNEOUVMLEVBQUE7QUMyQmY7SUE2RFEsY0FBYztJQUNkLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixtQkFBbUIsRUFBQTtBQWxFM0I7TUFxRVksWUFBWSxFQUFBO0FBckV4QjtJQStFWSxjQUFjO0lBQ2Qsb0NEM0ZrQjtJQzRGbEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZCxjRGpIRyxFQUFBO0FDMkJmO01BeUZnQixlQUFlO01BQ2YsMEJBQTBCLEVBQUE7QUExRjFDO01BOEZnQixjRHJIRixFQUFBO0FDdUJkO1FBaUdvQixxQkFBcUIsRUFBQTtBQWN6QztFQUNJLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsd0NBQXdDO0VBQ3hDLHNCQUFzQjtFQUN0QixrQkQzSGM7RUM0SGQsYUFBYTtFQUNiLGNEakpXO0VDa0pYLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGtDRHRJMkI7RUN1STNCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUE7QUFkcEI7SUFpQlEsZ0JBQWdCO0lBQ2hCLHNCQUFzQixFQUFBO0FBUTlCO0VBQ0ksbUJBQW1CLEVBQUE7QUFEdkI7SUFJUSxlQUFlLEVBQUE7QUFNdkI7RUFDSSxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21haW52aWV3L3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEZvbnRzXHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zOjQwMCw2MDAsNzAwfFBvcHBpbnM6MzAwLDQwMCw2MDAsNzAwJyk7XHJcblxyXG5cclxuLy8gVmFyaWFibGVzXHJcbiRibGFjazogIzEwMTAxMDtcclxuJHdoaXRlOiAjZmZmO1xyXG4kYmc6ICNGOUZBRkU7XHJcbiRyZWQ6ICNGMjNENDc7XHJcbiRibHVlOiAjM0UzQkZCO1xyXG4kcHJpbWFyeTogJGJsdWU7XHJcbiR0ZXh0OiBmYWRlLW91dCgkYmxhY2ssIDAuMSk7XHJcbiRzdWJ0bGU6IGZhZGUtb3V0KCRibGFjaywgMC41KTtcclxuXHJcbiRib3JkZXJDb2xvcjogZmFkZS1vdXQoJGJsYWNrLCAwLjg1KTtcclxuJGJvcmRlclJhZGl1czogNHB4O1xyXG4kYm9yZGVyUmFkaXVzTTogOHB4O1xyXG4kYm9yZGVyUmFkaXVzTDogMTZweDtcclxuXHJcbi8vIEZvbnRzXHJcbiRwb3BwaW5zOiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiRzYW5zOiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuXHJcblxyXG4kdHJhbnNpdGlvbjogMC4xNXM7XHJcbiRib3JkZXJSYWRpdXM6IDRweDtcclxuXHJcbi8vIEhlaWdodHMgYW5kIG1lYXN1cmVtZW50c1xyXG4kdG9wQmFySGVpZ2h0OiA1NHB4O1xyXG5cclxuXHJcbi8vIFJlc3BvbnNpdmVuZXNzXHJcbiRmdWxsTW9iaWxlOiA0NjBweDsiLCJAaW1wb3J0ICcuLi8uLi92YXJpYWJsZXMuc2Nzcyc7XHJcblxyXG4vLyBNb2JpbGUgbWVudSB0b2dnbGVcclxuLy8gT3V0c2lkZSBzaWRlYmFyXHJcbiNzaWRlYmFyVG9nZ2xle1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRyYW5zaXRpb246IDAuMnM7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB3aWR0aDogMjRweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgaGVpZ2h0OiA1NHB4O1xyXG4gICAgd2lkdGg6IDU0cHg7XHJcblxyXG4gICAgJjpob3ZlcixcclxuICAgICY6YWN0aXZle1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC4ycztcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIFNpZGViYXJcclxuI3NpZGViYXJ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuXHJcbiAgICAuc2lkZWJhci1oZWFkZXJ7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRwb3BwaW5zO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGNvbG9yOiAkYmxhY2s7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjNweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgICAgICBpe1xyXG4gICAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBmbGV4LWdyb3c6IDM7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgICAgICY6YWZ0ZXJ7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnXFxmMDY3JztcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnRm9udCBBd2Vzb21lIDUgUHJvJztcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IGZhZGUtb3V0KCRibGFjaywgMC44KTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5leHBhbmRlZHtcclxuXHJcbiAgICAgICAgICAgIGI6YWZ0ZXJ7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnXFxmMDY4JztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICAgYntcclxuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG5cclxuICAgICAgICAgICAgICAgICY6YWZ0ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRibGFjaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gQ29udGVudCBCbG9ja3NcclxuICAgIC8vIEV4cGFuZCB3aXRoIGNsYXNzIC5leHBhbmRlZFxyXG4gICAgLnNpZGViYXItY29udGVudHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNDBweDtcclxuICAgICAgICBoZWlnaHQ6IDBweDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcblxyXG4gICAgICAgICYuZXhwYW5kZWR7XHJcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2lkZWJhciBCYXNlbWFwc1xyXG4gICAgLy8gU2lkZWJhciBCYXNlbWFwc1xyXG4gICAgLy8gU2lkZWJhciBCYXNlbWFwc1xyXG4gICAgI3NpZGViYXJCYXNlbWFwc3tcclxuXHJcbiAgICAgICAgLmJhc2VtYXB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJHNhbnM7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjJweDtcclxuICAgICAgICAgICAgcGFkZGluZzogM3B4IDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkYmxhY2s7XHJcblxyXG4gICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYuYWN0aXZle1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5O1xyXG5cclxuICAgICAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuLy8gQ3VzdG9tIFNpZGViYXIgRWxlbWVudHNcclxuLy8gQ3VzdG9tIFNpZGViYXIgRWxlbWVudHNcclxuLy8gQ3VzdG9tIFNpZGViYXIgRWxlbWVudHNcclxuI3NpdGVDb3VudHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZmFkZS1vdXQoJGJsYWNrLCAwLjg1KTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyUmFkaXVzO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGNvbG9yOiAkYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBmb250LWZhbWlseTogJHBvcHBpbnM7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuXHJcbiAgICBie1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjJweDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8vIFNpZGViYXIgRmlsdGVyc1xyXG4vLyBTaWRlYmFyIEZpbHRlcnNcclxuLy8gU2lkZWJhciBGaWx0ZXJzXHJcbiNzaWRlYmFyRmlsdGVyc3tcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBcclxuICAgIGxhYmVse1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDZweDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4uY2xlYXJGb3Jte1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxufSJdfQ== */"

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
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        //for now we can keep this a static list but ultimately could pull from here in a service
        // https://www.waterqualitydata.us/Codes/Characteristicname?mimeType=xml
        this.parameterFilterData = {
            characteristics: ["Nitrate", "Nitrogen"]
        };
        this.defaultParameterFilter = 'Nitrate';
        this.parameterDropDownGroup = this.formBuilder.group({
            characteristic: [this.defaultParameterFilter]
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
            _this.siteFilterData = response;
            _this._mapService.addToSitesLayer(_this._mapService.geoJson);
            _this.geoJSONsiteCount = _this._mapService.geoJson.totalFeatures;
        });
        //set up filter listeners
        this.onChanges();
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

module.exports = ".loader-hidden {\n  visibility: hidden; }\n\n.sideloader-hidden {\n  visibility: hidden; }\n\n.loader-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  z-index: 500000; }\n\n.page-loader {\n  position: fixed !important;\n  width: 100%;\n  height: 100%;\n  opacity: 1;\n  z-index: 5000;\n  background-color: rgba(0, 0, 30, 0.6);\n  background-image: url(\"https://wim.usgs.gov/website-assets/branding/usgsanimated.svg\");\n  display: block !important;\n  background-repeat: no-repeat;\n  background-size: 120px auto;\n  background-position: center center; }\n\n.page-loader:after {\n    content: 'Loading...';\n    position: fixed;\n    top: 64%;\n    font-size: 22px;\n    color: white;\n    width: 100%;\n    text-align: center;\n    z-index: 5001; }\n\n.side-loader {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 5000;\n  /*margin-left: -20px;\r\n    margin-top: -20px;*/\n  opacity: 1;\n  background-color: rgba(0, 0, 30, 0.6);\n  background-image: url(https://wim.usgs.gov/website-assets/branding/usgsanimated.svg);\n  background-repeat: no-repeat;\n  background-size: 120px auto;\n  background-position: center 50px;\n  min-height: 715px; }\n\n.side-loader:after {\n    display: block;\n    content: 'Loading...';\n    width: 100%;\n    text-align: center;\n    font-size: 18px;\n    color: white;\n    box-sizing: border-box;\n    padding-top: 20px;\n    font-weight: 400; }\n\n.dataloader-hidden {\n  visibility: hidden; }\n\n.data-loader {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 5000;\n  /*margin-left: -20px;\r\n    margin-top: -20px;*/\n  opacity: 1;\n  background-color: rgba(0, 0, 30, 0.6);\n  background-image: url(https://wim.usgs.gov/website-assets/branding/usgsanimated.svg);\n  background-repeat: no-repeat;\n  background-size: 120px auto;\n  background-position: center 50px;\n  min-height: 715px; }\n\n.data-loader:after {\n    display: block;\n    content: 'Loading...';\n    width: 100%;\n    text-align: center;\n    font-size: 18px;\n    color: white;\n    box-sizing: border-box;\n    padding-top: 20px;\n    font-weight: 400; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbG9hZGVyL0M6XFxVc2Vyc1xca2phY29ic2VuXFxEb2N1bWVudHNcXHdpbV9wcm9qZWN0c1xcTElRV0lEUy9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxsb2FkZXJcXGxvYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbG9hZGVyL2xvYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLGtCQUFrQjtFQUNsQixXQUFVO0VBQ1YsWUFBWTtFQUNaLE1BQUs7RUFDTCxPQUFPO0VBQ1AsZUFBZSxFQUFBOztBQUVuQjtFQUNJLDBCQUF5QjtFQUN6QixXQUFVO0VBQ1YsWUFBWTtFQUNaLFVBQVU7RUFDVixhQUFhO0VBQ2IscUNBQWtDO0VBQ2xDLHNGQUFxRjtFQUNyRix5QkFBeUI7RUFDekIsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQixrQ0FBa0MsRUFBQTs7QUFYdEM7SUFjUSxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLFFBQVE7SUFDUixlQUFlO0lBQ2YsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsYUFBYSxFQUFBOztBQUtyQjtFQUNJLGtCQUFrQjtFQUNsQixXQUFVO0VBQ1YsWUFBWTtFQUNaLGFBQWE7RUFDYjt1QkNIbUI7RURLbkIsVUFBVTtFQUNWLHFDQUFrQztFQUNsQyxvRkFBb0Y7RUFDcEYsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQixnQ0FBZ0M7RUFDaEMsaUJBQWlCLEVBQUE7O0FBYnJCO0lBZ0JRLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsZ0JBQWdCLEVBQUE7O0FBSXhCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksa0JBQWtCO0VBQ2xCLFdBQVU7RUFDVixZQUFZO0VBQ1osYUFBYTtFQUNiO3VCQ1BtQjtFRFNuQixVQUFVO0VBQ1YscUNBQWtDO0VBQ2xDLG9GQUFvRjtFQUNwRiw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLGdDQUFnQztFQUNoQyxpQkFBaUIsRUFBQTs7QUFickI7SUFnQlEsY0FBYztJQUNkLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2xvYWRlci9sb2FkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGVyLWhpZGRlbiB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuLnNpZGVsb2FkZXItaGlkZGVuIHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG4ubG9hZGVyLW92ZXJsYXkge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRvcDowO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHotaW5kZXg6IDUwMDAwMDtcclxufVxyXG4ucGFnZS1sb2FkZXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkIWltcG9ydGFudDtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgei1pbmRleDogNTAwMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDMwLDAuNik7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aW0udXNncy5nb3Yvd2Vic2l0ZS1hc3NldHMvYnJhbmRpbmcvdXNnc2FuaW1hdGVkLnN2ZycpO1xyXG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEyMHB4IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG5cclxuICAgICY6YWZ0ZXJ7XHJcbiAgICAgICAgY29udGVudDogJ0xvYWRpbmcuLi4nO1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB0b3A6IDY0JTtcclxuICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB6LWluZGV4OiA1MDAxO1xyXG4gICAgICB9XHJcbn1cclxuXHJcblxyXG4uc2lkZS1sb2FkZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHotaW5kZXg6IDUwMDA7XHJcbiAgICAvKm1hcmdpbi1sZWZ0OiAtMjBweDtcclxuICAgIG1hcmdpbi10b3A6IC0yMHB4OyovXHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMzAsMC42KTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL3dpbS51c2dzLmdvdi93ZWJzaXRlLWFzc2V0cy9icmFuZGluZy91c2dzYW5pbWF0ZWQuc3ZnKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEyMHB4IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgNTBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDcxNXB4O1xyXG5cclxuICAgICY6YWZ0ZXJ7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgY29udGVudDogJ0xvYWRpbmcuLi4nO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIH1cclxufVxyXG5cclxuLmRhdGFsb2FkZXItaGlkZGVuIHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG5cclxuLmRhdGEtbG9hZGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB6LWluZGV4OiA1MDAwO1xyXG4gICAgLyptYXJnaW4tbGVmdDogLTIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMjBweDsqL1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDMwLDAuNik7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly93aW0udXNncy5nb3Yvd2Vic2l0ZS1hc3NldHMvYnJhbmRpbmcvdXNnc2FuaW1hdGVkLnN2Zyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMjBweCBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIDUwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiA3MTVweDtcclxuICAgIFxyXG4gICAgJjphZnRlcntcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBjb250ZW50OiAnTG9hZGluZy4uLic7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgfVxyXG59IiwiLmxvYWRlci1oaWRkZW4ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47IH1cblxuLnNpZGVsb2FkZXItaGlkZGVuIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuOyB9XG5cbi5sb2FkZXItb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiA1MDAwMDA7IH1cblxuLnBhZ2UtbG9hZGVyIHtcbiAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9wYWNpdHk6IDE7XG4gIHotaW5kZXg6IDUwMDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMzAsIDAuNik7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vd2ltLnVzZ3MuZ292L3dlYnNpdGUtYXNzZXRzL2JyYW5kaW5nL3VzZ3NhbmltYXRlZC5zdmdcIik7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMTIwcHggYXV0bztcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjsgfVxuICAucGFnZS1sb2FkZXI6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICdMb2FkaW5nLi4uJztcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiA2NCU7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgei1pbmRleDogNTAwMTsgfVxuXG4uc2lkZS1sb2FkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IDUwMDA7XG4gIC8qbWFyZ2luLWxlZnQ6IC0yMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTIwcHg7Ki9cbiAgb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAzMCwgMC42KTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vd2ltLnVzZ3MuZ292L3dlYnNpdGUtYXNzZXRzL2JyYW5kaW5nL3VzZ3NhbmltYXRlZC5zdmcpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEyMHB4IGF1dG87XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciA1MHB4O1xuICBtaW4taGVpZ2h0OiA3MTVweDsgfVxuICAuc2lkZS1sb2FkZXI6YWZ0ZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbnRlbnQ6ICdMb2FkaW5nLi4uJztcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7IH1cblxuLmRhdGFsb2FkZXItaGlkZGVuIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuOyB9XG5cbi5kYXRhLWxvYWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgei1pbmRleDogNTAwMDtcbiAgLyptYXJnaW4tbGVmdDogLTIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMjBweDsqL1xuICBvcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDMwLCAwLjYpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly93aW0udXNncy5nb3Yvd2Vic2l0ZS1hc3NldHMvYnJhbmRpbmcvdXNnc2FuaW1hdGVkLnN2Zyk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMTIwcHggYXV0bztcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIDUwcHg7XG4gIG1pbi1oZWlnaHQ6IDcxNXB4OyB9XG4gIC5kYXRhLWxvYWRlcjphZnRlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29udGVudDogJ0xvYWRpbmcuLi4nO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDsgfVxuIl19 */"

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

module.exports = ".pane {\n  padding: 1em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdGFiL0M6XFxVc2Vyc1xca2phY29ic2VuXFxEb2N1bWVudHNcXHdpbV9wcm9qZWN0c1xcTElRV0lEUy9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFx0YWJcXHRhYi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3RhYi90YWIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFuZXtcclxuICAgIHBhZGRpbmc6IDFlbTtcclxuICB9Il19 */"

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

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Open+Sans:400,600,700|Poppins:300,400,600,700\");\n.tab-close {\n  color: gray;\n  text-align: right;\n  cursor: pointer; }\n.tab-ul {\n  list-style: none;\n  width: 100%;\n  padding: 0 0 10px 0;\n  box-sizing: border-box;\n  margin: 0;\n  display: flex;\n  min-height: -webkit-fit-content;\n  min-height: -moz-fit-content;\n  min-height: fit-content; }\n.tab-ul li {\n    margin: 0 10px 0 0; }\n.tab-ul li a {\n      transition: 0.15s;\n      font-size: 12px;\n      box-sizing: border-box;\n      padding: 6px 0;\n      font-family: \"Open Sans\", sans-serif;\n      font-weight: 600;\n      letter-spacing: -0.2px;\n      text-decoration: none;\n      color: rgba(16, 16, 16, 0.5);\n      transition: 0.15s; }\n.tab-ul li a:hover {\n        text-decoration: underline;\n        color: #101010;\n        transition: 0.15s; }\n.tab-ul li.active a {\n      color: #3E3BFB;\n      transition: 0.15s;\n      text-decoration: underline; }\n.tab-ul li.active a:hover {\n        color: #3E3BFB; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdGFicy9DOlxcVXNlcnNcXGtqYWNvYnNlblxcRG9jdW1lbnRzXFx3aW1fcHJvamVjdHNcXExJUVdJRFMvc3JjXFxhcHBcXHZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy90YWJzL0M6XFxVc2Vyc1xca2phY29ic2VuXFxEb2N1bWVudHNcXHdpbV9wcm9qZWN0c1xcTElRV0lEUy9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFx0YWJzXFx0YWJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLG9HQUFZO0FDQ1o7RUFDSSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGVBQWUsRUFBQTtBQUdqQjtFQUNNLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsYUFBYTtFQUNiLCtCQUF1QjtFQUF2Qiw0QkFBdUI7RUFBdkIsdUJBQXVCLEVBQUE7QUFQN0I7SUFXVSxrQkFBa0IsRUFBQTtBQVg1QjtNQWNjLGlCREVFO01DREYsZUFBZTtNQUNmLHNCQUFzQjtNQUN0QixjQUFjO01BQ2Qsb0NETGM7TUNNZCxnQkFBZ0I7TUFDaEIsc0JBQXNCO01BQ3RCLHFCQUFxQjtNQUNyQiw0QkFBNEI7TUFDNUIsaUJEUEUsRUFBQTtBQ2hCaEI7UUEwQmtCLDBCQUEwQjtRQUMxQixjRDlCTDtRQytCSyxpQkRaRixFQUFBO0FDaEJoQjtNQW1Da0IsY0RsQ047TUNtQ00saUJEcEJGO01DcUJFLDBCQUEwQixFQUFBO0FBckM1QztRQXdDc0IsY0R2Q1YsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3RhYnMvdGFicy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEZvbnRzXHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zOjQwMCw2MDAsNzAwfFBvcHBpbnM6MzAwLDQwMCw2MDAsNzAwJyk7XHJcblxyXG5cclxuLy8gVmFyaWFibGVzXHJcbiRibGFjazogIzEwMTAxMDtcclxuJHdoaXRlOiAjZmZmO1xyXG4kYmc6ICNGOUZBRkU7XHJcbiRyZWQ6ICNGMjNENDc7XHJcbiRibHVlOiAjM0UzQkZCO1xyXG4kcHJpbWFyeTogJGJsdWU7XHJcbiR0ZXh0OiBmYWRlLW91dCgkYmxhY2ssIDAuMSk7XHJcbiRzdWJ0bGU6IGZhZGUtb3V0KCRibGFjaywgMC41KTtcclxuXHJcbiRib3JkZXJDb2xvcjogZmFkZS1vdXQoJGJsYWNrLCAwLjg1KTtcclxuJGJvcmRlclJhZGl1czogNHB4O1xyXG4kYm9yZGVyUmFkaXVzTTogOHB4O1xyXG4kYm9yZGVyUmFkaXVzTDogMTZweDtcclxuXHJcbi8vIEZvbnRzXHJcbiRwb3BwaW5zOiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiRzYW5zOiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuXHJcblxyXG4kdHJhbnNpdGlvbjogMC4xNXM7XHJcbiRib3JkZXJSYWRpdXM6IDRweDtcclxuXHJcbi8vIEhlaWdodHMgYW5kIG1lYXN1cmVtZW50c1xyXG4kdG9wQmFySGVpZ2h0OiA1NHB4O1xyXG5cclxuXHJcbi8vIFJlc3BvbnNpdmVuZXNzXHJcbiRmdWxsTW9iaWxlOiA0NjBweDsiLCJAaW1wb3J0ICcuLi8uLi8uLi92YXJpYWJsZXMuc2Nzcyc7XHJcblxyXG4udGFiLWNsb3NlIHtcclxuICAgIGNvbG9yOiBncmF5O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICAudGFiLXVsIHtcclxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMCAxMHB4IDA7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBtaW4taGVpZ2h0OiBmaXQtY29udGVudDtcclxuXHJcblxyXG4gICAgICAgIGxpe1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgMTBweCAwIDA7XHJcblxyXG4gICAgICAgICAgICBhe1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogJHRyYW5zaXRpb247XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNnB4IDA7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJHNhbnM7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjJweDtcclxuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBmYWRlLW91dCgkYmxhY2ssIDAuNSk7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcclxuXHJcbiAgICAgICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogJHRyYW5zaXRpb247XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYuYWN0aXZle1xyXG5cclxuICAgICAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRibHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGJsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gIH1cclxuXHJcblxyXG4iXX0= */"

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

module.exports = __webpack_require__(/*! C:\Users\kjacobsen\Documents\wim_projects\LIQWIDS\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map