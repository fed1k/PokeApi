/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! pokemonLogo.jpg */ "./src/pokemonLogo.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  font-family: Poppins, serif;\n}\n\n.nav-list-container {\n  display: flex;\n  justify-content: center;\n}\n\n.hamburger-menu {\n  display: none;\n}\n\n.nav-list {\n  list-style: none;\n  padding: 5px 20px;\n  font-size: 18px;\n}\n\nnav {\n  display: flex;\n  justify-content: center;\n  padding: 25px 0;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: 130px;\n  background-repeat: no-repeat;\n  background-position-x: 10%;\n  background-color: #f6f6f6;\n}\n\n.card {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.main {\n  display: grid;\n  grid-template-columns: 20% 20% 20%;\n  grid-gap: 30px;\n  justify-content: center;\n}\n\ni {\n  float: right;\n  color: #fe0000;\n}\n\n.likeCounts {\n  align-self: flex-end;\n}\n\ni:hover {\n  cursor: pointer;\n}\n\n.home-button {\n  background-color: #fff;\n  border: 3px solid black;\n  padding: 4px 0;\n  font-size: 16px;\n}\n\n.home-button:hover {\n  cursor: pointer;\n  color: white;\n  background-color: #1e1e1e;\n}\n\nfooter {\n  padding: 25px 20px;\n  border-top: 3px solid black;\n  margin-top: 30px;\n}\n\n#sidebarList-items {\n  display: none;\n}\n\n@media (max-width: 760px) {\n  .main {\n    grid-template-columns: 40% 40%;\n  }\n\n  .nav-list {\n    display: none;\n  }\n\n  .hamburger-items1,\n.hamburger-items2,\n.hamburger-items3 {\n    width: 35px;\n    height: 5px;\n    background-color: black;\n    margin-top: 5px;\n  }\n\n  .hamburger-menu {\n    display: inline-block;\n  }\n\n  nav {\n    justify-content: flex-start;\n    padding-left: 8%;\n    height: 60px;\n    background-position-x: 90%;\n    background-position-y: center;\n    background-size: 100px;\n  }\n\n  .sidebar {\n    transform: translateX(-150%);\n    height: 100vh;\n    width: 100vw;\n    list-style: none;\n    background-color: rgba(32, 32, 35, 0.65);\n    color: white;\n    top: 0;\n    left: 0;\n  }\n\n  .sidebar-active {\n    display: flex;\n    position: fixed;\n    transform: translateX(0%);\n    transition: all ease-out 0.1s;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n  }\n\n  #sidebarList-items {\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    padding-top: 20px;\n    gap: 15px;\n    height: 100vh;\n    width: 40%;\n    background-color: rgb(32, 32, 35);\n    z-index: 3;\n  }\n\n  .unvisible {\n    opacity: 0.3;\n  }\n\n  .empty {\n    width: 60%;\n  }\n}\n.popUp {\n  background: rgba(170, 180, 170, 0.4);\n  backdrop-filter: blur(1px);\n  position: fixed;\n  top: 0;\n  left: 0;\n  box-sizing: border-box;\n  width: 100vw;\n  height: 100vh;\n  display: none;\n  justify-content: center;\n  align-items: center;\n}\n\n.showFlex {\n  display: flex;\n}\n\n.popBox {\n  border: solid #000 1px;\n  background: #fff;\n  width: 400px;\n  min-height: 580px;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n}\n.popBox h2,\n.popBox h3 {\n  margin: 2px 0 0;\n  text-align: center;\n}\n\n.pokeLoad {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.pokeImg {\n  width: 100px;\n}\n.pokeImg img {\n  width: 100%;\n}\n\n.description {\n  padding: 0;\n  list-style: none;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-gap: 15px;\n}\n\n.descEl {\n  display: flex;\n  flex-direction: column;\n}\n\n.attName {\n  font-weight: bold;\n}\n\n.rsvList {\n  padding: 0;\n  max-height: 90px;\n  max-width: 100%;\n  list-style: none;\n  overflow-y: auto;\n}\n.rsvList li {\n  border-bottom: solid #eee 1px;\n}\n\n.reserve {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.reserve .input {\n  box-sizing: border-box;\n  padding: 5px;\n  margin-bottom: 8px;\n  width: 200px;\n  margin-right: auto;\n}\n\n.rsvBtn {\n  width: 100px;\n  font-size: 18px;\n  font-weight: bold;\n  background: none;\n}\n\n.close {\n  position: relative;\n  margin-left: auto;\n}\n.close :hover {\n  cursor: pointer;\n}\n\n.gg-close {\n  margin-left: auto;\n  display: block;\n  width: 30px;\n  height: 30px;\n}\n\n.gg-close::after,\n.gg-close::before {\n  content: \"\";\n  display: block;\n  box-sizing: border-box;\n  position: absolute;\n  width: 30px;\n  height: 3px;\n  background: currentColor;\n  transform: rotate(45deg);\n  border-radius: 5px;\n  top: 13px;\n}\n\n.gg-close::after {\n  transform: rotate(-45deg);\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAAA;EACE,SAAA;EACA,UAAA;EACA,2BAAA;AACF;;AAEA;EACE,aAAA;EACA,uBAAA;AACF;;AAEA;EACE,aAAA;AACF;;AAEA;EACE,gBAAA;EACA,iBAAA;EACA,eAAA;AACF;;AAEA;EACE,aAAA;EACA,uBAAA;EACA,eAAA;EACA,yDAAA;EACA,sBAAA;EACA,4BAAA;EACA,0BAAA;EACA,yBAAA;AACF;;AAEA;EACE,aAAA;EACA,sBAAA;EACA,SAAA;AACF;;AAEA;EACE,aAAA;EACA,kCAAA;EACA,cAAA;EACA,uBAAA;AACF;;AAEA;EACE,YAAA;EACA,cAAA;AACF;;AAEA;EACE,oBAAA;AACF;;AAEA;EACE,eAAA;AACF;;AAEA;EACE,sBAAA;EACA,uBAAA;EACA,cAAA;EACA,eAAA;AACF;;AAEA;EACE,eAAA;EACA,YAAA;EACA,yBAAA;AACF;;AAEA;EACE,kBAAA;EACA,2BAAA;EACA,gBAAA;AACF;;AAEA;EACE,aAAA;AACF;;AAEA;EACE;IACE,8BAAA;EACF;;EAEA;IACE,aAAA;EACF;;EAEA;;;IAGE,WAAA;IACA,WAAA;IACA,uBAAA;IACA,eAAA;EACF;;EAEA;IACE,qBAAA;EACF;;EAEA;IACE,2BAAA;IACA,gBAAA;IACA,YAAA;IACA,0BAAA;IACA,6BAAA;IACA,sBAAA;EACF;;EAEA;IACE,4BAAA;IACA,aAAA;IACA,YAAA;IACA,gBAAA;IACA,wCAAA;IACA,YAAA;IACA,MAAA;IACA,OAAA;EACF;;EAEA;IACE,aAAA;IACA,eAAA;IACA,yBAAA;IACA,6BAAA;IACA,MAAA;IACA,OAAA;IACA,QAAA;IACA,SAAA;EACF;;EAEA;IACE,kBAAA;IACA,aAAA;IACA,sBAAA;IACA,iBAAA;IACA,SAAA;IACA,aAAA;IACA,UAAA;IACA,iCAAA;IACA,UAAA;EACF;;EAEA;IACE,YAAA;EACF;;EAEA;IACE,UAAA;EACF;AACF;AAEA;EACE,oCAAA;EACA,0BAAA;EACA,eAAA;EACA,MAAA;EACA,OAAA;EACA,sBAAA;EACA,YAAA;EACA,aAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AAAF;;AAGA;EACE,aAAA;AAAF;;AAGA;EACE,sBAAA;EACA,gBAAA;EACA,YAAA;EACA,iBAAA;EACA,aAAA;EACA,aAAA;EACA,sBAAA;EACA,8BAAA;EACA,mBAAA;AAAF;AAEE;;EAEE,eAAA;EACA,kBAAA;AAAJ;;AAIA;EACE,WAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;AADF;;AAIA;EACE,YAAA;AADF;AAGE;EACE,WAAA;AADJ;;AAKA;EACE,UAAA;EACA,gBAAA;EACA,aAAA;EACA,sCAAA;EACA,cAAA;AAFF;;AAKA;EACE,aAAA;EACA,sBAAA;AAFF;;AAKA;EACE,iBAAA;AAFF;;AAKA;EACE,UAAA;EACA,gBAAA;EACA,eAAA;EACA,gBAAA;EACA,gBAAA;AAFF;AAIE;EACE,6BAAA;AAFJ;;AAMA;EACE,WAAA;EACA,aAAA;EACA,sBAAA;AAHF;AAKE;EACE,sBAAA;EACA,YAAA;EACA,kBAAA;EACA,YAAA;EACA,kBAAA;AAHJ;;AAOA;EACE,YAAA;EACA,eAAA;EACA,iBAAA;EACA,gBAAA;AAJF;;AAOA;EACE,kBAAA;EACA,iBAAA;AAJF;AAME;EACE,eAAA;AAJJ;;AAQA;EACE,iBAAA;EACA,cAAA;EACA,WAAA;EACA,YAAA;AALF;;AAQA;;EAEE,WAAA;EACA,cAAA;EACA,sBAAA;EACA,kBAAA;EACA,WAAA;EACA,WAAA;EACA,wBAAA;EACA,wBAAA;EACA,kBAAA;EACA,SAAA;AALF;;AAQA;EACE,yBAAA;AALF","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  font-family: Poppins, serif;\n}\n\n.nav-list-container {\n  display: flex;\n  justify-content: center;\n}\n\n.hamburger-menu {\n  display: none;\n}\n\n.nav-list {\n  list-style: none;\n  padding: 5px 20px;\n  font-size: 18px;\n}\n\nnav {\n  display: flex;\n  justify-content: center;\n  padding: 25px 0;\n  background-image: url(pokemonLogo.jpg);\n  background-size: 130px;\n  background-repeat: no-repeat;\n  background-position-x: 10%;\n  background-color: #f6f6f6;\n}\n\n.card {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.main {\n  display: grid;\n  grid-template-columns: 20% 20% 20%;\n  grid-gap: 30px;\n  justify-content: center;\n}\n\ni {\n  float: right;\n  color: #fe0000;\n}\n\n.likeCounts {\n  align-self: flex-end;\n}\n\ni:hover {\n  cursor: pointer;\n}\n\n.home-button {\n  background-color: #fff;\n  border: 3px solid black;\n  padding: 4px 0;\n  font-size: 16px;\n}\n\n.home-button:hover {\n  cursor: pointer;\n  color: white;\n  background-color: #1e1e1e;\n}\n\nfooter {\n  padding: 25px 20px;\n  border-top: 3px solid black;\n  margin-top: 30px;\n}\n\n#sidebarList-items {\n  display: none;\n}\n\n@media (max-width: 760px) {\n  .main {\n    grid-template-columns: 40% 40%;\n  }\n\n  .nav-list {\n    display: none;\n  }\n\n  .hamburger-items1,\n  .hamburger-items2,\n  .hamburger-items3 {\n    width: 35px;\n    height: 5px;\n    background-color: black;\n    margin-top: 5px;\n  }\n\n  .hamburger-menu {\n    display: inline-block;\n  }\n\n  nav {\n    justify-content: flex-start;\n    padding-left: 8%;\n    height: 60px;\n    background-position-x: 90%;\n    background-position-y: center;\n    background-size: 100px;\n  }\n\n  .sidebar {\n    transform: translateX(-150%);\n    height: 100vh;\n    width: 100vw;\n    list-style: none;\n    background-color: rgba(32, 32, 35, 65%);\n    color: white;\n    top: 0;\n    left: 0;\n  }\n\n  .sidebar-active {\n    display: flex;\n    position: fixed;\n    transform: translateX(0%);\n    transition: all ease-out 0.1s;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n  }\n\n  #sidebarList-items {\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    padding-top: 20px;\n    gap: 15px;\n    height: 100vh;\n    width: 40%;\n    background-color: rgba(32, 32, 35);\n    z-index: 3;\n  }\n\n  .unvisible {\n    opacity: 0.3;\n  }\n\n  .empty {\n    width: 60%;\n  }\n}\n\n.popUp {\n  background: rgba(170, 180, 170, 0.4);\n  backdrop-filter: blur(1px);\n  position: fixed;\n  top: 0;\n  left: 0;\n  box-sizing: border-box;\n  width: 100vw;\n  height: 100vh;\n  display: none;\n  justify-content: center;\n  align-items: center;\n}\n\n.showFlex {\n  display: flex;\n}\n\n.popBox {\n  border: solid #000 1px;\n  background: #fff;\n  width: 400px;\n  min-height: 580px;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n\n  h2,\n  h3 {\n    margin: 2px 0 0;\n    text-align: center;\n  }\n}\n\n.pokeLoad {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.pokeImg {\n  width: 100px;\n\n  img {\n    width: 100%;\n  }\n}\n\n.description {\n  padding: 0;\n  list-style: none;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-gap: 15px;\n}\n\n.descEl {\n  display: flex;\n  flex-direction: column;\n}\n\n.attName {\n  font-weight: bold;\n}\n\n.rsvList {\n  padding: 0;\n  max-height: 90px;\n  max-width: 100%;\n  list-style: none;\n  overflow-y: auto;\n\n  li {\n    border-bottom: solid #eee 1px;\n  }\n}\n\n.reserve {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n\n  .input {\n    box-sizing: border-box;\n    padding: 5px;\n    margin-bottom: 8px;\n    width: 200px;\n    margin-right: auto;\n  }\n}\n\n.rsvBtn {\n  width: 100px;\n  font-size: 18px;\n  font-weight: bold;\n  background: none;\n}\n\n.close {\n  position: relative;\n  margin-left: auto;\n\n  :hover {\n    cursor: pointer;\n  }\n}\n\n.gg-close {\n  margin-left: auto;\n  display: block;\n  width: 30px;\n  height: 30px;\n}\n\n.gg-close::after,\n.gg-close::before {\n  content: \"\";\n  display: block;\n  box-sizing: border-box;\n  position: absolute;\n  width: 30px;\n  height: 3px;\n  background: currentColor;\n  transform: rotate(45deg);\n  border-radius: 5px;\n  top: 13px;\n}\n\n.gg-close::after {\n  transform: rotate(-45deg);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/APIcall.js":
/*!********************************!*\
  !*** ./src/modules/APIcall.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getInfo": () => (/* binding */ getInfo),
/* harmony export */   "getLikes": () => (/* binding */ getLikes),
/* harmony export */   "loadData": () => (/* binding */ loadData),
/* harmony export */   "loadLikes": () => (/* binding */ loadLikes),
/* harmony export */   "postComment": () => (/* binding */ postComment),
/* harmony export */   "postLike": () => (/* binding */ postLike),
/* harmony export */   "postReservation": () => (/* binding */ postReservation)
/* harmony export */ });
const baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/RizkiI1q9bDyDUIoyu8m';
const likes = '/likes';
const comments = '/comments';
const reservations = '/reservations';

const itemsUl = document.getElementById('rsvList');
const rsvCount = document.getElementById('rsvCount');

// CREATE LI
const createLi = (type, items) => {
  itemsUl.innerHTML = '';
  items.forEach((item) => {
    let itemContainer = '';
    if (type === '/comments') {
      itemContainer = `<li>${item.creation_date} ${item.username}: ${item.comment}</li>`;
    } else {
      itemContainer = `<li>${item.date_start} - ${item.date_end} by ${item.username}</li>`;
    }
    itemsUl.innerHTML += itemContainer;
  });
};

// GET
const getLikes = async () => {
  const result = await fetch((baseURL + likes));
  const data = await result.text();
  return JSON.parse(data);
};

const getInfo = async (id, type) => {
  const response = await fetch(`${baseURL}${type}?item_id=${id}`);
  const data = await response.text();
  const result = JSON.parse(data);
  return result;
};

// POST
const postLike = async (id) => {
  const response = await fetch((baseURL + likes), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
    }),
  });

  const data = await response.text();
  return data;
};

const postComment = async (id, myUsername, myComment) => {
  const response = await fetch((baseURL + comments), {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
      username: myUsername,
      comment: myComment,
    }),
  });

  const data = await response.text();
  return data;
};

const postReservation = async (id, myUsername, startDate, endDate) => {
  const response = await fetch((baseURL + reservations), {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
      username: myUsername,
      date_start: startDate,
      date_end: endDate,
    }),
  });

  const data = await response.text();
  return data;
};

// LOAD DATA
const loadData = (id, type) => {
  getInfo(id, type).then((items) => {
    rsvCount.innerHTML = items.length;
    createLi(type, items);
  });
};

const loadLikes = async (id) => {
  const totalLikes = await getLikes();
  const itemLikes = totalLikes.find((x) => x.item_id === id);
  return itemLikes !== undefined ? itemLikes.likes : 0;
};



/***/ }),

/***/ "./src/modules/createPopup.js":
/*!************************************!*\
  !*** ./src/modules/createPopup.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _rsvFormVal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rsvFormVal.js */ "./src/modules/rsvFormVal.js");


const body = document.querySelector('#body');

const createPopup = (type) => {
  const popUp = document.createElement('div');

  popUp.classList = 'popUp';
  popUp.innerHTML = `<section class="popBox">
    <div class="close">
      <i class="gg-close"></i>
    </div>
  </section>`;

  // Hide card
  const close = popUp.querySelector('.close');
  close.addEventListener('click', () => {
    popUp.classList = 'popUp';
  });

  // Load Container
  const loadCont = document.createElement('div');
  loadCont.classList = 'pokeLoad';

  // Image
  const pokeImage = document.createElement('div');
  pokeImage.classList = 'rsvDiv pokeImg';
  pokeImage.innerHTML = '<h3>Loading...</h3>';

  // Descript
  const pokeInfo = document.createElement('div');
  pokeInfo.classList = 'rsvDiv info';
  pokeInfo.innerHTML = `<h2 class="pokeName">Who is that pokemon?</h2>
  <ul class="description">Loading...</ul>`;

  // Reservations
  const pokeReserv = document.createElement('div');
  pokeReserv.classList = 'rsvDiv reservation';
  pokeReserv.innerHTML = `<h3>${type}s <span class="rsvCount">()</span></h3>
    <ul class="rsvList">Loading...</ul>`;

  const rsvForm = document.createElement('form');

  // Form comment
  if (type === 'Comment') {
    rsvForm.classList = 'rsvDiv reserve';
    rsvForm.innerHTML = `<h3>Add a ${type}</h3>
    <input class="input" type="text" name="name" value="" required placeholder="Your Name">
    <textarea class="input" name="Message" maxlength="250" required placeholder="Your Insights"></textarea>
    <input class="rsvBtn" type="submit" name="Comment" value="Comment">`;
  }

  // Form reservation
  if (type === 'Reservation') {
    rsvForm.classList = 'rsvDiv reserve';
    rsvForm.innerHTML = `<h3>Add a ${type}</h3>
    <input class="input" type="text" name="name" value="" required placeholder="Your Name">
    <input class="input" type="text" name="dateStart" value="" required placeholder="Start date (mm/dd/yyyy)">
    <input class="input" type="text" name="dateEnd" value="" required placeholder="End date (mm/dd/yyyy)">
    <input class="rsvBtn" type="submit" name="Reservation" value="Reserve">`;
  }

  // Apendding elements
  popUp.querySelector('section').appendChild(loadCont);
  popUp.querySelector('section').appendChild(rsvForm);
  loadCont.appendChild(pokeImage);
  loadCont.appendChild(pokeInfo);
  loadCont.appendChild(pokeReserv);
  body.appendChild(popUp);

  // Form validation listener
  (0,_rsvFormVal_js__WEBPACK_IMPORTED_MODULE_0__["default"])(rsvForm, rsvForm.querySelector(':last-child').name);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createPopup);


/***/ }),

/***/ "./src/modules/descript.js":
/*!*********************************!*\
  !*** ./src/modules/descript.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pokeApi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pokeApi.js */ "./src/modules/pokeApi.js");


// This function filter the Api information
const getPokeDesc = async (pokeId) => {
  const poke = await (0,_pokeApi_js__WEBPACK_IMPORTED_MODULE_0__["default"])(pokeId);
  const pokemon = await {
    image: poke.sprites.front_default,
    name: poke.name,
    type: poke.types[0].type.name,
    abilities: poke.abilities[0].ability.name,
    height: `${poke.height / 10} m`,
    weight: `${poke.weight / 10} kg`,
  };
  return pokemon;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getPokeDesc);


/***/ }),

/***/ "./src/modules/loadPoke.js":
/*!*********************************!*\
  !*** ./src/modules/loadPoke.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _descript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./descript.js */ "./src/modules/descript.js");
/* harmony import */ var _APIcall_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./APIcall.js */ "./src/modules/APIcall.js");



const loadPopup = (pokeId, type) => {
  (0,_descript_js__WEBPACK_IMPORTED_MODULE_0__["default"])(pokeId)
    .then((poke) => {
      const loadCont = document.querySelectorAll('.pokeLoad');
      loadCont[0].innerHTML = '';
      loadCont[1].innerHTML = '';

      // Image
      const pokeImage = document.createElement('div');
      pokeImage.classList = 'rsvDiv pokeImg';
      pokeImage.innerHTML = `<img src=${poke.image} alt="pikachu">`;

      // Descript
      const pokeInfo = document.createElement('div');
      pokeInfo.classList = 'rsvDiv info';
      pokeInfo.innerHTML = `
      <h2 class="pokeName">${poke.name}</h2>
      <ul class="description">
        <li class="descEl"><span class="attName">Type</span><span class="attValue">${poke.type}</span></li>
        <li class="descEl"><span class="attName">Abilities</span><span class="attValue">${poke.abilities}</span></li>
        <li class="descEl"><span class="attName">Height</span><span class="attValue">${poke.height}</span></li>
        <li class="descEl"><span class="attName">Weight</span><span class="attValue">${poke.weight}</span></li>
      </ul>
      `;

      // Reservations
      const pokeReserv = document.createElement('div');
      pokeReserv.classList = 'rsvDiv reservation';
      const ReservTitle = document.createElement('h3');

      const rsvList = document.createElement('ul');
      rsvList.className = 'rsvList';

      const infoType = type === 'Comment' ? '/comments' : '/reservations';

      (0,_APIcall_js__WEBPACK_IMPORTED_MODULE_1__.getInfo)(poke.name, infoType).then((items) => {
        const itemsCount = items.length !== undefined ? items.length : 0;
        ReservTitle.innerHTML = `${type}s (<span class="rsvCount">${itemsCount}</span>)`;
        items.forEach((item) => {
          let itemContainer = '';
          if (infoType === '/comments') {
            itemContainer = `<li>${item.creation_date} ${item.username}: ${item.comment}</li>`;
          } else {
            itemContainer = `<li>${item.date_start} - ${item.date_end} by ${item.username}</li>`;
          }
          rsvList.innerHTML += itemContainer;
        });
      });

      pokeReserv.appendChild(ReservTitle);
      pokeReserv.appendChild(rsvList);

      if (type === 'Comment') {
        loadCont[0].appendChild(pokeImage);
        loadCont[0].appendChild(pokeInfo);
        loadCont[0].appendChild(pokeReserv);
      } else if (type === 'Reservation') {
        loadCont[1].appendChild(pokeImage);
        loadCont[1].appendChild(pokeInfo);
        loadCont[1].appendChild(pokeReserv);
      }

      const rsvCount = pokeReserv.querySelector('rsvCount');
      rsvCount.innerHTML = 5;
    });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPopup);


/***/ }),

/***/ "./src/modules/pokeApi.js":
/*!********************************!*\
  !*** ./src/modules/pokeApi.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// 'https://pokeapi.co/api/v2/pokemon/' BASE URL
// kLuLDD4JnKfdNSgV622k INVOLVEMENT KEY

const getPoke = async (pokeId) => {
  try {
    const poke = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}/`);
    const loaded = await poke.json();
    return loaded;
  } catch (e) {
    return e;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getPoke);


/***/ }),

/***/ "./src/modules/rsvFormVal.js":
/*!***********************************!*\
  !*** ./src/modules/rsvFormVal.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const dateError = (element, box) => {
  const dateMsg = document.createElement('small');
  dateMsg.innerText = '(mm/dd/yyyy) Only dates from today and beyond';
  dateMsg.style.cssText = 'color: #CC0000;';
  element.insertBefore(dateMsg, element.children[box]);
  setTimeout(() => {
    element.removeChild(dateMsg);
  }, 3200);
};

const checkDate = (dateIn, element, box) => {
  const re = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
  if (!dateIn.match(re)) {
    dateError(element, box);
  } else {
    const date = dateIn.split('/');
    const today = [new Date().getMonth() + 1, new Date().getDate(), new Date().getFullYear()];
    if (Number(date[2]) < today[2]) {
      dateError(element, box);
    } else if (
      Number(date[2]) === today[2]
      && (Number(date[0]) < today[0] || Number(date[0]) > 12)) {
      dateError(element, box);
    } else if (
      Number(date[2]) === today[2]
      && Number(date[0]) === today[0]
      && (Number(date[1]) < today[1] || Number(date[1]) > 31)) {
      dateError(element, box);
    } else if (Number(date[0]) > 12 || Number(date[1]) > 31) {
      dateError(element, box);
    } else {
      return true;
    }
  }
  return false;
};

const rsvSubmit = (element, type) => {
  element.addEventListener('submit', (e) => {
    e.preventDefault();
    const rsvInputs = element.querySelectorAll('*');

    if (type === 'Reservation') {
      if (checkDate(rsvInputs[2].value, element, 2) && checkDate(rsvInputs[3].value, element, 3)) {
        console.log('good'); // Replace with Reservation API code
      }
    } else if (type === 'Comment') {
      console.log('good'); // Replace with Comment API code
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rsvSubmit);


/***/ }),

/***/ "./src/pokemonLogo.jpg":
/*!*****************************!*\
  !*** ./src/pokemonLogo.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d8fd098138f594ed08a4.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _modules_APIcall_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/APIcall.js */ "./src/modules/APIcall.js");
/* harmony import */ var _modules_createPopup_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/createPopup.js */ "./src/modules/createPopup.js");
/* harmony import */ var _modules_loadPoke_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/loadPoke.js */ "./src/modules/loadPoke.js");





(0,_modules_createPopup_js__WEBPACK_IMPORTED_MODULE_2__["default"])('Comment');
(0,_modules_createPopup_js__WEBPACK_IMPORTED_MODULE_2__["default"])('Reservation');

const getData = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
  const json = await response.json();
  const main = document.querySelector('.main');
  for (let i = 0; i < 18; i += 1) {
    const getImage = async () => {
      const response1 = await fetch(json.results[i].url);
      const json2 = await response1.json();
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
      <img src="${json2.sprites.front_default}"></img>
      <p>${json.results[i].name}<i class="far fa-heart"></i></p>
      <p class="likeCounts">likes ${0}</p>
  `;

      // Buttons for comment and reservation
      const cmntBtn = document.createElement('button');
      cmntBtn.classList = 'home-button comment-buttons';
      cmntBtn.name = `${json.results[i].name}`;
      cmntBtn.innerText = 'Comments';
      const rsvBtn = document.createElement('button');
      rsvBtn.classList = 'home-button reservation-buttons';
      rsvBtn.name = `${json.results[i].name}`;
      rsvBtn.innerText = 'Reservations';
      card.appendChild(cmntBtn);
      card.appendChild(rsvBtn);

      // Listeners
      cmntBtn.addEventListener('click', () => {
        const popBox = document.querySelectorAll('.popUp');
        popBox[0].classList.add('showFlex');
        (0,_modules_loadPoke_js__WEBPACK_IMPORTED_MODULE_3__["default"])(cmntBtn.name, 'Comment');
      });

      rsvBtn.addEventListener('click', () => {
        const popBox = document.querySelectorAll('.popUp');
        popBox[1].classList.add('showFlex');
        (0,_modules_loadPoke_js__WEBPACK_IMPORTED_MODULE_3__["default"])(rsvBtn.name, 'Reservation');
      });

      main.appendChild(card);
      const heartIcon = card.querySelector('.far');
      const likesCount = card.querySelector('.likeCounts');
      const likes = await (0,_modules_APIcall_js__WEBPACK_IMPORTED_MODULE_1__.loadLikes)(json.results[i].name);
      let extraLike = 0;
      heartIcon.addEventListener('click', async () => {
        extraLike += 1;
        likesCount.innerHTML = `likes ${likes + extraLike}`;
        (0,_modules_APIcall_js__WEBPACK_IMPORTED_MODULE_1__.postLike)(json.results[i].name);
      });
      likesCount.innerHTML = `likes ${likes}`;
    };
    getImage();
  }
};
getData();

//
const hamburgerBtn = document.querySelector('.hamburger-menu');

const ul = document.createElement('div');
ul.innerHTML = `
  <ul id="sidebarList-items">
    <li>Spaceships</li>
    <li class="unvisible">Planets</li>
    <li class="unvisible">Races</li>
  </ul>
  <div class="empty"></div>
`;
ul.className = 'sidebar';
const nav = document.querySelector('nav');
nav.appendChild(ul);

const firstMenuBtn = document.querySelector('.menu-btn');
hamburgerBtn.addEventListener('click', () => {
  ul.classList.add('sidebar-active');
});

const empty = document.querySelector('.empty');
empty.addEventListener('click', () => {
  ul.classList.remove('sidebar-active');
  firstMenuBtn.style.display = 'block';
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxPQUFPLFVBQVUsVUFBVSxXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLEtBQUssV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLE1BQU0sVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLE1BQU0sS0FBSyxV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RTtBQUN0Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IscUJBQXFCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixxQkFBcUI7QUFDNUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxnRUFBUztBQUNqQixPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBLFFBQVEsZ0VBQVM7QUFDakIsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsOERBQVM7QUFDbkM7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLGtCQUFrQjtBQUMxRCxRQUFRLDZEQUFRO0FBQ2hCLE9BQU87QUFDUCxzQ0FBc0MsTUFBTTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va2FuYmFuYm9hcmQvLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9rYW5iYW5ib2FyZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8va2FuYmFuYm9hcmQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2thbmJhbmJvYXJkLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8va2FuYmFuYm9hcmQvLi9zcmMvc3R5bGUuc2Nzcz83NWJhIiwid2VicGFjazovL2thbmJhbmJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2thbmJhbmJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9rYW5iYW5ib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9rYW5iYW5ib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9rYW5iYW5ib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2thbmJhbmJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8va2FuYmFuYm9hcmQvLi9zcmMvbW9kdWxlcy9BUEljYWxsLmpzIiwid2VicGFjazovL2thbmJhbmJvYXJkLy4vc3JjL21vZHVsZXMvY3JlYXRlUG9wdXAuanMiLCJ3ZWJwYWNrOi8va2FuYmFuYm9hcmQvLi9zcmMvbW9kdWxlcy9kZXNjcmlwdC5qcyIsIndlYnBhY2s6Ly9rYW5iYW5ib2FyZC8uL3NyYy9tb2R1bGVzL2xvYWRQb2tlLmpzIiwid2VicGFjazovL2thbmJhbmJvYXJkLy4vc3JjL21vZHVsZXMvcG9rZUFwaS5qcyIsIndlYnBhY2s6Ly9rYW5iYW5ib2FyZC8uL3NyYy9tb2R1bGVzL3JzdkZvcm1WYWwuanMiLCJ3ZWJwYWNrOi8va2FuYmFuYm9hcmQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8va2FuYmFuYm9hcmQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8va2FuYmFuYm9hcmQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2thbmJhbmJvYXJkL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8va2FuYmFuYm9hcmQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9rYW5iYW5ib2FyZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2thbmJhbmJvYXJkL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2thbmJhbmJvYXJkL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2thbmJhbmJvYXJkLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJwb2tlbW9uTG9nby5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LWZhbWlseTogUG9wcGlucywgc2VyaWY7XFxufVxcblxcbi5uYXYtbGlzdC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uaGFtYnVyZ2VyLW1lbnUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm5hdi1saXN0IHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiA1cHggMjBweDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxubmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDI1cHggMDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEzMHB4O1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb24teDogMTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcXG59XFxuXFxuLmNhcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5tYWluIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwJSAyMCUgMjAlO1xcbiAgZ3JpZC1nYXA6IDMwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuaSB7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBjb2xvcjogI2ZlMDAwMDtcXG59XFxuXFxuLmxpa2VDb3VudHMge1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxufVxcblxcbmk6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaG9tZS1idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xcbiAgcGFkZGluZzogNHB4IDA7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbi5ob21lLWJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUxZTFlO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgcGFkZGluZzogMjVweCAyMHB4O1xcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkIGJsYWNrO1xcbiAgbWFyZ2luLXRvcDogMzBweDtcXG59XFxuXFxuI3NpZGViYXJMaXN0LWl0ZW1zIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjBweCkge1xcbiAgLm1haW4ge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQwJSA0MCU7XFxuICB9XFxuXFxuICAubmF2LWxpc3Qge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLmhhbWJ1cmdlci1pdGVtczEsXFxuLmhhbWJ1cmdlci1pdGVtczIsXFxuLmhhbWJ1cmdlci1pdGVtczMge1xcbiAgICB3aWR0aDogMzVweDtcXG4gICAgaGVpZ2h0OiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICB9XFxuXFxuICAuaGFtYnVyZ2VyLW1lbnUge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB9XFxuXFxuICBuYXYge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIHBhZGRpbmctbGVmdDogOCU7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiA5MCU7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMHB4O1xcbiAgfVxcblxcbiAgLnNpZGViYXIge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTE1MCUpO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzIsIDMyLCAzNSwgMC42NSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgfVxcblxcbiAgLnNpZGViYXItYWN0aXZlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1vdXQgMC4xcztcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgfVxcblxcbiAgI3NpZGViYXJMaXN0LWl0ZW1zIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogNDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzIsIDMyLCAzNSk7XFxuICAgIHotaW5kZXg6IDM7XFxuICB9XFxuXFxuICAudW52aXNpYmxlIHtcXG4gICAgb3BhY2l0eTogMC4zO1xcbiAgfVxcblxcbiAgLmVtcHR5IHtcXG4gICAgd2lkdGg6IDYwJTtcXG4gIH1cXG59XFxuLnBvcFVwIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMTcwLCAxODAsIDE3MCwgMC40KTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxcHgpO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNob3dGbGV4IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5wb3BCb3gge1xcbiAgYm9yZGVyOiBzb2xpZCAjMDAwIDFweDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICB3aWR0aDogNDAwcHg7XFxuICBtaW4taGVpZ2h0OiA1ODBweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5wb3BCb3ggaDIsXFxuLnBvcEJveCBoMyB7XFxuICBtYXJnaW46IDJweCAwIDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5wb2tlTG9hZCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnBva2VJbWcge1xcbiAgd2lkdGg6IDEwMHB4O1xcbn1cXG4ucG9rZUltZyBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5kZXNjcmlwdGlvbiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjtcXG4gIGdyaWQtZ2FwOiAxNXB4O1xcbn1cXG5cXG4uZGVzY0VsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uYXR0TmFtZSB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnJzdkxpc3Qge1xcbiAgcGFkZGluZzogMDtcXG4gIG1heC1oZWlnaHQ6IDkwcHg7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuLnJzdkxpc3QgbGkge1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgI2VlZSAxcHg7XFxufVxcblxcbi5yZXNlcnZlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5yZXNlcnZlIC5pbnB1dCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG5cXG4ucnN2QnRuIHtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG59XFxuXFxuLmNsb3NlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG4uY2xvc2UgOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmdnLWNsb3NlIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMzBweDtcXG59XFxuXFxuLmdnLWNsb3NlOjphZnRlcixcXG4uZ2ctY2xvc2U6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiAzcHg7XFxuICBiYWNrZ3JvdW5kOiBjdXJyZW50Q29sb3I7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB0b3A6IDEzcHg7XFxufVxcblxcbi5nZy1jbG9zZTo6YWZ0ZXIge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EseURBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLGtDQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0Usb0JBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7QUFDRjs7QUFFQTtFQUNFLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLDhCQUFBO0VBQ0Y7O0VBRUE7SUFDRSxhQUFBO0VBQ0Y7O0VBRUE7OztJQUdFLFdBQUE7SUFDQSxXQUFBO0lBQ0EsdUJBQUE7SUFDQSxlQUFBO0VBQ0Y7O0VBRUE7SUFDRSxxQkFBQTtFQUNGOztFQUVBO0lBQ0UsMkJBQUE7SUFDQSxnQkFBQTtJQUNBLFlBQUE7SUFDQSwwQkFBQTtJQUNBLDZCQUFBO0lBQ0Esc0JBQUE7RUFDRjs7RUFFQTtJQUNFLDRCQUFBO0lBQ0EsYUFBQTtJQUNBLFlBQUE7SUFDQSxnQkFBQTtJQUNBLHdDQUFBO0lBQ0EsWUFBQTtJQUNBLE1BQUE7SUFDQSxPQUFBO0VBQ0Y7O0VBRUE7SUFDRSxhQUFBO0lBQ0EsZUFBQTtJQUNBLHlCQUFBO0lBQ0EsNkJBQUE7SUFDQSxNQUFBO0lBQ0EsT0FBQTtJQUNBLFFBQUE7SUFDQSxTQUFBO0VBQ0Y7O0VBRUE7SUFDRSxrQkFBQTtJQUNBLGFBQUE7SUFDQSxzQkFBQTtJQUNBLGlCQUFBO0lBQ0EsU0FBQTtJQUNBLGFBQUE7SUFDQSxVQUFBO0lBQ0EsaUNBQUE7SUFDQSxVQUFBO0VBQ0Y7O0VBRUE7SUFDRSxZQUFBO0VBQ0Y7O0VBRUE7SUFDRSxVQUFBO0VBQ0Y7QUFDRjtBQUVBO0VBQ0Usb0NBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtBQUFGOztBQUdBO0VBQ0Usc0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBQUY7QUFFRTs7RUFFRSxlQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFJQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQURGOztBQUlBO0VBQ0UsWUFBQTtBQURGO0FBR0U7RUFDRSxXQUFBO0FBREo7O0FBS0E7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0NBQUE7RUFDQSxjQUFBO0FBRkY7O0FBS0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFGRjs7QUFLQTtFQUNFLGlCQUFBO0FBRkY7O0FBS0E7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUZGO0FBSUU7RUFDRSw2QkFBQTtBQUZKOztBQU1BO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUhGO0FBS0U7RUFDRSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUhKOztBQU9BO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBSkY7O0FBT0E7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0FBSkY7QUFNRTtFQUNFLGVBQUE7QUFKSjs7QUFRQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBTEY7O0FBUUE7O0VBRUUsV0FBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FBTEY7O0FBUUE7RUFDRSx5QkFBQTtBQUxGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zLCBzZXJpZjtcXG59XFxuXFxuLm5hdi1saXN0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5oYW1idXJnZXItbWVudSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubmF2LWxpc3Qge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDVweCAyMHB4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG5uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMjVweCAwO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKHBva2Vtb25Mb2dvLmpwZyk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEzMHB4O1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb24teDogMTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcXG59XFxuXFxuLmNhcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5tYWluIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwJSAyMCUgMjAlO1xcbiAgZ3JpZC1nYXA6IDMwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuaSB7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBjb2xvcjogI2ZlMDAwMDtcXG59XFxuXFxuLmxpa2VDb3VudHMge1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxufVxcblxcbmk6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaG9tZS1idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xcbiAgcGFkZGluZzogNHB4IDA7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbi5ob21lLWJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUxZTFlO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgcGFkZGluZzogMjVweCAyMHB4O1xcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkIGJsYWNrO1xcbiAgbWFyZ2luLXRvcDogMzBweDtcXG59XFxuXFxuI3NpZGViYXJMaXN0LWl0ZW1zIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjBweCkge1xcbiAgLm1haW4ge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQwJSA0MCU7XFxuICB9XFxuXFxuICAubmF2LWxpc3Qge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLmhhbWJ1cmdlci1pdGVtczEsXFxuICAuaGFtYnVyZ2VyLWl0ZW1zMixcXG4gIC5oYW1idXJnZXItaXRlbXMzIHtcXG4gICAgd2lkdGg6IDM1cHg7XFxuICAgIGhlaWdodDogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgfVxcblxcbiAgLmhhbWJ1cmdlci1tZW51IHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgfVxcblxcbiAgbmF2IHtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDglO1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogOTAlO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDBweDtcXG4gIH1cXG5cXG4gIC5zaWRlYmFyIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xNTAlKTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMyLCAzMiwgMzUsIDY1JSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgfVxcblxcbiAgLnNpZGViYXItYWN0aXZlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1vdXQgMC4xcztcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgfVxcblxcbiAgI3NpZGViYXJMaXN0LWl0ZW1zIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogNDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMyLCAzMiwgMzUpO1xcbiAgICB6LWluZGV4OiAzO1xcbiAgfVxcblxcbiAgLnVudmlzaWJsZSB7XFxuICAgIG9wYWNpdHk6IDAuMztcXG4gIH1cXG5cXG4gIC5lbXB0eSB7XFxuICAgIHdpZHRoOiA2MCU7XFxuICB9XFxufVxcblxcbi5wb3BVcCB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDE3MCwgMTgwLCAxNzAsIDAuNCk7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMXB4KTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zaG93RmxleCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ucG9wQm94IHtcXG4gIGJvcmRlcjogc29saWQgIzAwMCAxcHg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgbWluLWhlaWdodDogNTgwcHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgaDIsXFxuICBoMyB7XFxuICAgIG1hcmdpbjogMnB4IDAgMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcbn1cXG5cXG4ucG9rZUxvYWQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wb2tlSW1nIHtcXG4gIHdpZHRoOiAxMDBweDtcXG5cXG4gIGltZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXG5cXG4uZGVzY3JpcHRpb24ge1xcbiAgcGFkZGluZzogMDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XFxuICBncmlkLWdhcDogMTVweDtcXG59XFxuXFxuLmRlc2NFbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmF0dE5hbWUge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5yc3ZMaXN0IHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXgtaGVpZ2h0OiA5MHB4O1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuXFxuICBsaSB7XFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkICNlZWUgMXB4O1xcbiAgfVxcbn1cXG5cXG4ucmVzZXJ2ZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgLmlucHV0IHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgfVxcbn1cXG5cXG4ucnN2QnRuIHtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG59XFxuXFxuLmNsb3NlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcblxcbiAgOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcbn1cXG5cXG4uZ2ctY2xvc2Uge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG4uZ2ctY2xvc2U6OmFmdGVyLFxcbi5nZy1jbG9zZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDNweDtcXG4gIGJhY2tncm91bmQ6IGN1cnJlbnRDb2xvcjtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHRvcDogMTNweDtcXG59XFxuXFxuLmdnLWNsb3NlOjphZnRlciB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGJhc2VVUkwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvUml6a2lJMXE5YkR5RFVJb3l1OG0nO1xuY29uc3QgbGlrZXMgPSAnL2xpa2VzJztcbmNvbnN0IGNvbW1lbnRzID0gJy9jb21tZW50cyc7XG5jb25zdCByZXNlcnZhdGlvbnMgPSAnL3Jlc2VydmF0aW9ucyc7XG5cbmNvbnN0IGl0ZW1zVWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncnN2TGlzdCcpO1xuY29uc3QgcnN2Q291bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncnN2Q291bnQnKTtcblxuLy8gQ1JFQVRFIExJXG5jb25zdCBjcmVhdGVMaSA9ICh0eXBlLCBpdGVtcykgPT4ge1xuICBpdGVtc1VsLmlubmVySFRNTCA9ICcnO1xuICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgbGV0IGl0ZW1Db250YWluZXIgPSAnJztcbiAgICBpZiAodHlwZSA9PT0gJy9jb21tZW50cycpIHtcbiAgICAgIGl0ZW1Db250YWluZXIgPSBgPGxpPiR7aXRlbS5jcmVhdGlvbl9kYXRlfSAke2l0ZW0udXNlcm5hbWV9OiAke2l0ZW0uY29tbWVudH08L2xpPmA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGl0ZW1Db250YWluZXIgPSBgPGxpPiR7aXRlbS5kYXRlX3N0YXJ0fSAtICR7aXRlbS5kYXRlX2VuZH0gYnkgJHtpdGVtLnVzZXJuYW1lfTwvbGk+YDtcbiAgICB9XG4gICAgaXRlbXNVbC5pbm5lckhUTUwgKz0gaXRlbUNvbnRhaW5lcjtcbiAgfSk7XG59O1xuXG4vLyBHRVRcbmNvbnN0IGdldExpa2VzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaCgoYmFzZVVSTCArIGxpa2VzKSk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXN1bHQudGV4dCgpO1xuICByZXR1cm4gSlNPTi5wYXJzZShkYXRhKTtcbn07XG5cbmNvbnN0IGdldEluZm8gPSBhc3luYyAoaWQsIHR5cGUpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtiYXNlVVJMfSR7dHlwZX0/aXRlbV9pZD0ke2lkfWApO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICBjb25zdCByZXN1bHQgPSBKU09OLnBhcnNlKGRhdGEpO1xuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLy8gUE9TVFxuY29uc3QgcG9zdExpa2UgPSBhc3luYyAoaWQpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgoYmFzZVVSTCArIGxpa2VzKSwge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBpdGVtX2lkOiBpZCxcbiAgICB9KSxcbiAgfSk7XG5cbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgcmV0dXJuIGRhdGE7XG59O1xuXG5jb25zdCBwb3N0Q29tbWVudCA9IGFzeW5jIChpZCwgbXlVc2VybmFtZSwgbXlDb21tZW50KSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goKGJhc2VVUkwgKyBjb21tZW50cyksIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgaXRlbV9pZDogaWQsXG4gICAgICB1c2VybmFtZTogbXlVc2VybmFtZSxcbiAgICAgIGNvbW1lbnQ6IG15Q29tbWVudCxcbiAgICB9KSxcbiAgfSk7XG5cbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgcmV0dXJuIGRhdGE7XG59O1xuXG5jb25zdCBwb3N0UmVzZXJ2YXRpb24gPSBhc3luYyAoaWQsIG15VXNlcm5hbWUsIHN0YXJ0RGF0ZSwgZW5kRGF0ZSkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKChiYXNlVVJMICsgcmVzZXJ2YXRpb25zKSwge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBpdGVtX2lkOiBpZCxcbiAgICAgIHVzZXJuYW1lOiBteVVzZXJuYW1lLFxuICAgICAgZGF0ZV9zdGFydDogc3RhcnREYXRlLFxuICAgICAgZGF0ZV9lbmQ6IGVuZERhdGUsXG4gICAgfSksXG4gIH0pO1xuXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gIHJldHVybiBkYXRhO1xufTtcblxuLy8gTE9BRCBEQVRBXG5jb25zdCBsb2FkRGF0YSA9IChpZCwgdHlwZSkgPT4ge1xuICBnZXRJbmZvKGlkLCB0eXBlKS50aGVuKChpdGVtcykgPT4ge1xuICAgIHJzdkNvdW50LmlubmVySFRNTCA9IGl0ZW1zLmxlbmd0aDtcbiAgICBjcmVhdGVMaSh0eXBlLCBpdGVtcyk7XG4gIH0pO1xufTtcblxuY29uc3QgbG9hZExpa2VzID0gYXN5bmMgKGlkKSA9PiB7XG4gIGNvbnN0IHRvdGFsTGlrZXMgPSBhd2FpdCBnZXRMaWtlcygpO1xuICBjb25zdCBpdGVtTGlrZXMgPSB0b3RhbExpa2VzLmZpbmQoKHgpID0+IHguaXRlbV9pZCA9PT0gaWQpO1xuICByZXR1cm4gaXRlbUxpa2VzICE9PSB1bmRlZmluZWQgPyBpdGVtTGlrZXMubGlrZXMgOiAwO1xufTtcblxuZXhwb3J0IHtcbiAgZ2V0TGlrZXMsIGdldEluZm8sIHBvc3RMaWtlLCBwb3N0Q29tbWVudCwgcG9zdFJlc2VydmF0aW9uLCBsb2FkRGF0YSwgbG9hZExpa2VzLFxufTsiLCJpbXBvcnQgcnN2U3VibWl0IGZyb20gJy4vcnN2Rm9ybVZhbC5qcyc7XG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYm9keScpO1xuXG5jb25zdCBjcmVhdGVQb3B1cCA9ICh0eXBlKSA9PiB7XG4gIGNvbnN0IHBvcFVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgcG9wVXAuY2xhc3NMaXN0ID0gJ3BvcFVwJztcbiAgcG9wVXAuaW5uZXJIVE1MID0gYDxzZWN0aW9uIGNsYXNzPVwicG9wQm94XCI+XG4gICAgPGRpdiBjbGFzcz1cImNsb3NlXCI+XG4gICAgICA8aSBjbGFzcz1cImdnLWNsb3NlXCI+PC9pPlxuICAgIDwvZGl2PlxuICA8L3NlY3Rpb24+YDtcblxuICAvLyBIaWRlIGNhcmRcbiAgY29uc3QgY2xvc2UgPSBwb3BVcC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UnKTtcbiAgY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgcG9wVXAuY2xhc3NMaXN0ID0gJ3BvcFVwJztcbiAgfSk7XG5cbiAgLy8gTG9hZCBDb250YWluZXJcbiAgY29uc3QgbG9hZENvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbG9hZENvbnQuY2xhc3NMaXN0ID0gJ3Bva2VMb2FkJztcblxuICAvLyBJbWFnZVxuICBjb25zdCBwb2tlSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcG9rZUltYWdlLmNsYXNzTGlzdCA9ICdyc3ZEaXYgcG9rZUltZyc7XG4gIHBva2VJbWFnZS5pbm5lckhUTUwgPSAnPGgzPkxvYWRpbmcuLi48L2gzPic7XG5cbiAgLy8gRGVzY3JpcHRcbiAgY29uc3QgcG9rZUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcG9rZUluZm8uY2xhc3NMaXN0ID0gJ3JzdkRpdiBpbmZvJztcbiAgcG9rZUluZm8uaW5uZXJIVE1MID0gYDxoMiBjbGFzcz1cInBva2VOYW1lXCI+V2hvIGlzIHRoYXQgcG9rZW1vbj88L2gyPlxuICA8dWwgY2xhc3M9XCJkZXNjcmlwdGlvblwiPkxvYWRpbmcuLi48L3VsPmA7XG5cbiAgLy8gUmVzZXJ2YXRpb25zXG4gIGNvbnN0IHBva2VSZXNlcnYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcG9rZVJlc2Vydi5jbGFzc0xpc3QgPSAncnN2RGl2IHJlc2VydmF0aW9uJztcbiAgcG9rZVJlc2Vydi5pbm5lckhUTUwgPSBgPGgzPiR7dHlwZX1zIDxzcGFuIGNsYXNzPVwicnN2Q291bnRcIj4oKTwvc3Bhbj48L2gzPlxuICAgIDx1bCBjbGFzcz1cInJzdkxpc3RcIj5Mb2FkaW5nLi4uPC91bD5gO1xuXG4gIGNvbnN0IHJzdkZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG5cbiAgLy8gRm9ybSBjb21tZW50XG4gIGlmICh0eXBlID09PSAnQ29tbWVudCcpIHtcbiAgICByc3ZGb3JtLmNsYXNzTGlzdCA9ICdyc3ZEaXYgcmVzZXJ2ZSc7XG4gICAgcnN2Rm9ybS5pbm5lckhUTUwgPSBgPGgzPkFkZCBhICR7dHlwZX08L2gzPlxuICAgIDxpbnB1dCBjbGFzcz1cImlucHV0XCIgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIHZhbHVlPVwiXCIgcmVxdWlyZWQgcGxhY2Vob2xkZXI9XCJZb3VyIE5hbWVcIj5cbiAgICA8dGV4dGFyZWEgY2xhc3M9XCJpbnB1dFwiIG5hbWU9XCJNZXNzYWdlXCIgbWF4bGVuZ3RoPVwiMjUwXCIgcmVxdWlyZWQgcGxhY2Vob2xkZXI9XCJZb3VyIEluc2lnaHRzXCI+PC90ZXh0YXJlYT5cbiAgICA8aW5wdXQgY2xhc3M9XCJyc3ZCdG5cIiB0eXBlPVwic3VibWl0XCIgbmFtZT1cIkNvbW1lbnRcIiB2YWx1ZT1cIkNvbW1lbnRcIj5gO1xuICB9XG5cbiAgLy8gRm9ybSByZXNlcnZhdGlvblxuICBpZiAodHlwZSA9PT0gJ1Jlc2VydmF0aW9uJykge1xuICAgIHJzdkZvcm0uY2xhc3NMaXN0ID0gJ3JzdkRpdiByZXNlcnZlJztcbiAgICByc3ZGb3JtLmlubmVySFRNTCA9IGA8aDM+QWRkIGEgJHt0eXBlfTwvaDM+XG4gICAgPGlucHV0IGNsYXNzPVwiaW5wdXRcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgdmFsdWU9XCJcIiByZXF1aXJlZCBwbGFjZWhvbGRlcj1cIllvdXIgTmFtZVwiPlxuICAgIDxpbnB1dCBjbGFzcz1cImlucHV0XCIgdHlwZT1cInRleHRcIiBuYW1lPVwiZGF0ZVN0YXJ0XCIgdmFsdWU9XCJcIiByZXF1aXJlZCBwbGFjZWhvbGRlcj1cIlN0YXJ0IGRhdGUgKG1tL2RkL3l5eXkpXCI+XG4gICAgPGlucHV0IGNsYXNzPVwiaW5wdXRcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJkYXRlRW5kXCIgdmFsdWU9XCJcIiByZXF1aXJlZCBwbGFjZWhvbGRlcj1cIkVuZCBkYXRlIChtbS9kZC95eXl5KVwiPlxuICAgIDxpbnB1dCBjbGFzcz1cInJzdkJ0blwiIHR5cGU9XCJzdWJtaXRcIiBuYW1lPVwiUmVzZXJ2YXRpb25cIiB2YWx1ZT1cIlJlc2VydmVcIj5gO1xuICB9XG5cbiAgLy8gQXBlbmRkaW5nIGVsZW1lbnRzXG4gIHBvcFVwLnF1ZXJ5U2VsZWN0b3IoJ3NlY3Rpb24nKS5hcHBlbmRDaGlsZChsb2FkQ29udCk7XG4gIHBvcFVwLnF1ZXJ5U2VsZWN0b3IoJ3NlY3Rpb24nKS5hcHBlbmRDaGlsZChyc3ZGb3JtKTtcbiAgbG9hZENvbnQuYXBwZW5kQ2hpbGQocG9rZUltYWdlKTtcbiAgbG9hZENvbnQuYXBwZW5kQ2hpbGQocG9rZUluZm8pO1xuICBsb2FkQ29udC5hcHBlbmRDaGlsZChwb2tlUmVzZXJ2KTtcbiAgYm9keS5hcHBlbmRDaGlsZChwb3BVcCk7XG5cbiAgLy8gRm9ybSB2YWxpZGF0aW9uIGxpc3RlbmVyXG4gIHJzdlN1Ym1pdChyc3ZGb3JtLCByc3ZGb3JtLnF1ZXJ5U2VsZWN0b3IoJzpsYXN0LWNoaWxkJykubmFtZSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVQb3B1cDtcbiIsImltcG9ydCBnZXRQb2tlIGZyb20gJy4vcG9rZUFwaS5qcyc7XG5cbi8vIFRoaXMgZnVuY3Rpb24gZmlsdGVyIHRoZSBBcGkgaW5mb3JtYXRpb25cbmNvbnN0IGdldFBva2VEZXNjID0gYXN5bmMgKHBva2VJZCkgPT4ge1xuICBjb25zdCBwb2tlID0gYXdhaXQgZ2V0UG9rZShwb2tlSWQpO1xuICBjb25zdCBwb2tlbW9uID0gYXdhaXQge1xuICAgIGltYWdlOiBwb2tlLnNwcml0ZXMuZnJvbnRfZGVmYXVsdCxcbiAgICBuYW1lOiBwb2tlLm5hbWUsXG4gICAgdHlwZTogcG9rZS50eXBlc1swXS50eXBlLm5hbWUsXG4gICAgYWJpbGl0aWVzOiBwb2tlLmFiaWxpdGllc1swXS5hYmlsaXR5Lm5hbWUsXG4gICAgaGVpZ2h0OiBgJHtwb2tlLmhlaWdodCAvIDEwfSBtYCxcbiAgICB3ZWlnaHQ6IGAke3Bva2Uud2VpZ2h0IC8gMTB9IGtnYCxcbiAgfTtcbiAgcmV0dXJuIHBva2Vtb247XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRQb2tlRGVzYztcbiIsImltcG9ydCBnZXRQb2tlRGVzYyBmcm9tICcuL2Rlc2NyaXB0LmpzJztcbmltcG9ydCB7IGdldEluZm8gfSBmcm9tICcuL0FQSWNhbGwuanMnO1xuXG5jb25zdCBsb2FkUG9wdXAgPSAocG9rZUlkLCB0eXBlKSA9PiB7XG4gIGdldFBva2VEZXNjKHBva2VJZClcbiAgICAudGhlbigocG9rZSkgPT4ge1xuICAgICAgY29uc3QgbG9hZENvbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG9rZUxvYWQnKTtcbiAgICAgIGxvYWRDb250WzBdLmlubmVySFRNTCA9ICcnO1xuICAgICAgbG9hZENvbnRbMV0uaW5uZXJIVE1MID0gJyc7XG5cbiAgICAgIC8vIEltYWdlXG4gICAgICBjb25zdCBwb2tlSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHBva2VJbWFnZS5jbGFzc0xpc3QgPSAncnN2RGl2IHBva2VJbWcnO1xuICAgICAgcG9rZUltYWdlLmlubmVySFRNTCA9IGA8aW1nIHNyYz0ke3Bva2UuaW1hZ2V9IGFsdD1cInBpa2FjaHVcIj5gO1xuXG4gICAgICAvLyBEZXNjcmlwdFxuICAgICAgY29uc3QgcG9rZUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHBva2VJbmZvLmNsYXNzTGlzdCA9ICdyc3ZEaXYgaW5mbyc7XG4gICAgICBwb2tlSW5mby5pbm5lckhUTUwgPSBgXG4gICAgICA8aDIgY2xhc3M9XCJwb2tlTmFtZVwiPiR7cG9rZS5uYW1lfTwvaDI+XG4gICAgICA8dWwgY2xhc3M9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICA8bGkgY2xhc3M9XCJkZXNjRWxcIj48c3BhbiBjbGFzcz1cImF0dE5hbWVcIj5UeXBlPC9zcGFuPjxzcGFuIGNsYXNzPVwiYXR0VmFsdWVcIj4ke3Bva2UudHlwZX08L3NwYW4+PC9saT5cbiAgICAgICAgPGxpIGNsYXNzPVwiZGVzY0VsXCI+PHNwYW4gY2xhc3M9XCJhdHROYW1lXCI+QWJpbGl0aWVzPC9zcGFuPjxzcGFuIGNsYXNzPVwiYXR0VmFsdWVcIj4ke3Bva2UuYWJpbGl0aWVzfTwvc3Bhbj48L2xpPlxuICAgICAgICA8bGkgY2xhc3M9XCJkZXNjRWxcIj48c3BhbiBjbGFzcz1cImF0dE5hbWVcIj5IZWlnaHQ8L3NwYW4+PHNwYW4gY2xhc3M9XCJhdHRWYWx1ZVwiPiR7cG9rZS5oZWlnaHR9PC9zcGFuPjwvbGk+XG4gICAgICAgIDxsaSBjbGFzcz1cImRlc2NFbFwiPjxzcGFuIGNsYXNzPVwiYXR0TmFtZVwiPldlaWdodDwvc3Bhbj48c3BhbiBjbGFzcz1cImF0dFZhbHVlXCI+JHtwb2tlLndlaWdodH08L3NwYW4+PC9saT5cbiAgICAgIDwvdWw+XG4gICAgICBgO1xuXG4gICAgICAvLyBSZXNlcnZhdGlvbnNcbiAgICAgIGNvbnN0IHBva2VSZXNlcnYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHBva2VSZXNlcnYuY2xhc3NMaXN0ID0gJ3JzdkRpdiByZXNlcnZhdGlvbic7XG4gICAgICBjb25zdCBSZXNlcnZUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG5cbiAgICAgIGNvbnN0IHJzdkxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgcnN2TGlzdC5jbGFzc05hbWUgPSAncnN2TGlzdCc7XG5cbiAgICAgIGNvbnN0IGluZm9UeXBlID0gdHlwZSA9PT0gJ0NvbW1lbnQnID8gJy9jb21tZW50cycgOiAnL3Jlc2VydmF0aW9ucyc7XG5cbiAgICAgIGdldEluZm8ocG9rZS5uYW1lLCBpbmZvVHlwZSkudGhlbigoaXRlbXMpID0+IHtcbiAgICAgICAgY29uc3QgaXRlbXNDb3VudCA9IGl0ZW1zLmxlbmd0aCAhPT0gdW5kZWZpbmVkID8gaXRlbXMubGVuZ3RoIDogMDtcbiAgICAgICAgUmVzZXJ2VGl0bGUuaW5uZXJIVE1MID0gYCR7dHlwZX1zICg8c3BhbiBjbGFzcz1cInJzdkNvdW50XCI+JHtpdGVtc0NvdW50fTwvc3Bhbj4pYDtcbiAgICAgICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgIGxldCBpdGVtQ29udGFpbmVyID0gJyc7XG4gICAgICAgICAgaWYgKGluZm9UeXBlID09PSAnL2NvbW1lbnRzJykge1xuICAgICAgICAgICAgaXRlbUNvbnRhaW5lciA9IGA8bGk+JHtpdGVtLmNyZWF0aW9uX2RhdGV9ICR7aXRlbS51c2VybmFtZX06ICR7aXRlbS5jb21tZW50fTwvbGk+YDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaXRlbUNvbnRhaW5lciA9IGA8bGk+JHtpdGVtLmRhdGVfc3RhcnR9IC0gJHtpdGVtLmRhdGVfZW5kfSBieSAke2l0ZW0udXNlcm5hbWV9PC9saT5gO1xuICAgICAgICAgIH1cbiAgICAgICAgICByc3ZMaXN0LmlubmVySFRNTCArPSBpdGVtQ29udGFpbmVyO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICBwb2tlUmVzZXJ2LmFwcGVuZENoaWxkKFJlc2VydlRpdGxlKTtcbiAgICAgIHBva2VSZXNlcnYuYXBwZW5kQ2hpbGQocnN2TGlzdCk7XG5cbiAgICAgIGlmICh0eXBlID09PSAnQ29tbWVudCcpIHtcbiAgICAgICAgbG9hZENvbnRbMF0uYXBwZW5kQ2hpbGQocG9rZUltYWdlKTtcbiAgICAgICAgbG9hZENvbnRbMF0uYXBwZW5kQ2hpbGQocG9rZUluZm8pO1xuICAgICAgICBsb2FkQ29udFswXS5hcHBlbmRDaGlsZChwb2tlUmVzZXJ2KTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ1Jlc2VydmF0aW9uJykge1xuICAgICAgICBsb2FkQ29udFsxXS5hcHBlbmRDaGlsZChwb2tlSW1hZ2UpO1xuICAgICAgICBsb2FkQ29udFsxXS5hcHBlbmRDaGlsZChwb2tlSW5mbyk7XG4gICAgICAgIGxvYWRDb250WzFdLmFwcGVuZENoaWxkKHBva2VSZXNlcnYpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCByc3ZDb3VudCA9IHBva2VSZXNlcnYucXVlcnlTZWxlY3RvcigncnN2Q291bnQnKTtcbiAgICAgIHJzdkNvdW50LmlubmVySFRNTCA9IDU7XG4gICAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2FkUG9wdXA7XG4iLCIvLyAnaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlbW9uLycgQkFTRSBVUkxcbi8vIGtMdUxERDRKbktmZE5TZ1Y2MjJrIElOVk9MVkVNRU5UIEtFWVxuXG5jb25zdCBnZXRQb2tlID0gYXN5bmMgKHBva2VJZCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHBva2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlbW9uLyR7cG9rZUlkfS9gKTtcbiAgICBjb25zdCBsb2FkZWQgPSBhd2FpdCBwb2tlLmpzb24oKTtcbiAgICByZXR1cm4gbG9hZGVkO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGU7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldFBva2U7XG4iLCJjb25zdCBkYXRlRXJyb3IgPSAoZWxlbWVudCwgYm94KSA9PiB7XG4gIGNvbnN0IGRhdGVNc2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzbWFsbCcpO1xuICBkYXRlTXNnLmlubmVyVGV4dCA9ICcobW0vZGQveXl5eSkgT25seSBkYXRlcyBmcm9tIHRvZGF5IGFuZCBiZXlvbmQnO1xuICBkYXRlTXNnLnN0eWxlLmNzc1RleHQgPSAnY29sb3I6ICNDQzAwMDA7JztcbiAgZWxlbWVudC5pbnNlcnRCZWZvcmUoZGF0ZU1zZywgZWxlbWVudC5jaGlsZHJlbltib3hdKTtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgZWxlbWVudC5yZW1vdmVDaGlsZChkYXRlTXNnKTtcbiAgfSwgMzIwMCk7XG59O1xuXG5jb25zdCBjaGVja0RhdGUgPSAoZGF0ZUluLCBlbGVtZW50LCBib3gpID0+IHtcbiAgY29uc3QgcmUgPSAvXlxcZHsxLDJ9XFwvXFxkezEsMn1cXC9cXGR7NH0kLztcbiAgaWYgKCFkYXRlSW4ubWF0Y2gocmUpKSB7XG4gICAgZGF0ZUVycm9yKGVsZW1lbnQsIGJveCk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgZGF0ZSA9IGRhdGVJbi5zcGxpdCgnLycpO1xuICAgIGNvbnN0IHRvZGF5ID0gW25ldyBEYXRlKCkuZ2V0TW9udGgoKSArIDEsIG5ldyBEYXRlKCkuZ2V0RGF0ZSgpLCBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCldO1xuICAgIGlmIChOdW1iZXIoZGF0ZVsyXSkgPCB0b2RheVsyXSkge1xuICAgICAgZGF0ZUVycm9yKGVsZW1lbnQsIGJveCk7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIE51bWJlcihkYXRlWzJdKSA9PT0gdG9kYXlbMl1cbiAgICAgICYmIChOdW1iZXIoZGF0ZVswXSkgPCB0b2RheVswXSB8fCBOdW1iZXIoZGF0ZVswXSkgPiAxMikpIHtcbiAgICAgIGRhdGVFcnJvcihlbGVtZW50LCBib3gpO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBOdW1iZXIoZGF0ZVsyXSkgPT09IHRvZGF5WzJdXG4gICAgICAmJiBOdW1iZXIoZGF0ZVswXSkgPT09IHRvZGF5WzBdXG4gICAgICAmJiAoTnVtYmVyKGRhdGVbMV0pIDwgdG9kYXlbMV0gfHwgTnVtYmVyKGRhdGVbMV0pID4gMzEpKSB7XG4gICAgICBkYXRlRXJyb3IoZWxlbWVudCwgYm94KTtcbiAgICB9IGVsc2UgaWYgKE51bWJlcihkYXRlWzBdKSA+IDEyIHx8IE51bWJlcihkYXRlWzFdKSA+IDMxKSB7XG4gICAgICBkYXRlRXJyb3IoZWxlbWVudCwgYm94KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmNvbnN0IHJzdlN1Ym1pdCA9IChlbGVtZW50LCB0eXBlKSA9PiB7XG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgcnN2SW5wdXRzID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcqJyk7XG5cbiAgICBpZiAodHlwZSA9PT0gJ1Jlc2VydmF0aW9uJykge1xuICAgICAgaWYgKGNoZWNrRGF0ZShyc3ZJbnB1dHNbMl0udmFsdWUsIGVsZW1lbnQsIDIpICYmIGNoZWNrRGF0ZShyc3ZJbnB1dHNbM10udmFsdWUsIGVsZW1lbnQsIDMpKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdnb29kJyk7IC8vIFJlcGxhY2Ugd2l0aCBSZXNlcnZhdGlvbiBBUEkgY29kZVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ0NvbW1lbnQnKSB7XG4gICAgICBjb25zb2xlLmxvZygnZ29vZCcpOyAvLyBSZXBsYWNlIHdpdGggQ29tbWVudCBBUEkgY29kZVxuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByc3ZTdWJtaXQ7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5pbXBvcnQgeyBsb2FkTGlrZXMsIHBvc3RMaWtlIH0gZnJvbSAnLi9tb2R1bGVzL0FQSWNhbGwuanMnO1xuaW1wb3J0IGNyZWF0ZVBvcHVwIGZyb20gJy4vbW9kdWxlcy9jcmVhdGVQb3B1cC5qcyc7XG5pbXBvcnQgbG9hZFBvcHVwIGZyb20gJy4vbW9kdWxlcy9sb2FkUG9rZS5qcyc7XG5cbmNyZWF0ZVBvcHVwKCdDb21tZW50Jyk7XG5jcmVhdGVQb3B1cCgnUmVzZXJ2YXRpb24nKTtcblxuY29uc3QgZ2V0RGF0YSA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlbW9uLycpO1xuICBjb25zdCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxODsgaSArPSAxKSB7XG4gICAgY29uc3QgZ2V0SW1hZ2UgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCByZXNwb25zZTEgPSBhd2FpdCBmZXRjaChqc29uLnJlc3VsdHNbaV0udXJsKTtcbiAgICAgIGNvbnN0IGpzb24yID0gYXdhaXQgcmVzcG9uc2UxLmpzb24oKTtcbiAgICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNhcmQuY2xhc3NOYW1lID0gJ2NhcmQnO1xuICAgICAgY2FyZC5pbm5lckhUTUwgPSBgXG4gICAgICA8aW1nIHNyYz1cIiR7anNvbjIuc3ByaXRlcy5mcm9udF9kZWZhdWx0fVwiPjwvaW1nPlxuICAgICAgPHA+JHtqc29uLnJlc3VsdHNbaV0ubmFtZX08aSBjbGFzcz1cImZhciBmYS1oZWFydFwiPjwvaT48L3A+XG4gICAgICA8cCBjbGFzcz1cImxpa2VDb3VudHNcIj5saWtlcyAkezB9PC9wPlxuICBgO1xuXG4gICAgICAvLyBCdXR0b25zIGZvciBjb21tZW50IGFuZCByZXNlcnZhdGlvblxuICAgICAgY29uc3QgY21udEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgY21udEJ0bi5jbGFzc0xpc3QgPSAnaG9tZS1idXR0b24gY29tbWVudC1idXR0b25zJztcbiAgICAgIGNtbnRCdG4ubmFtZSA9IGAke2pzb24ucmVzdWx0c1tpXS5uYW1lfWA7XG4gICAgICBjbW50QnRuLmlubmVyVGV4dCA9ICdDb21tZW50cyc7XG4gICAgICBjb25zdCByc3ZCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIHJzdkJ0bi5jbGFzc0xpc3QgPSAnaG9tZS1idXR0b24gcmVzZXJ2YXRpb24tYnV0dG9ucyc7XG4gICAgICByc3ZCdG4ubmFtZSA9IGAke2pzb24ucmVzdWx0c1tpXS5uYW1lfWA7XG4gICAgICByc3ZCdG4uaW5uZXJUZXh0ID0gJ1Jlc2VydmF0aW9ucyc7XG4gICAgICBjYXJkLmFwcGVuZENoaWxkKGNtbnRCdG4pO1xuICAgICAgY2FyZC5hcHBlbmRDaGlsZChyc3ZCdG4pO1xuXG4gICAgICAvLyBMaXN0ZW5lcnNcbiAgICAgIGNtbnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHBvcEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wb3BVcCcpO1xuICAgICAgICBwb3BCb3hbMF0uY2xhc3NMaXN0LmFkZCgnc2hvd0ZsZXgnKTtcbiAgICAgICAgbG9hZFBvcHVwKGNtbnRCdG4ubmFtZSwgJ0NvbW1lbnQnKTtcbiAgICAgIH0pO1xuXG4gICAgICByc3ZCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHBvcEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wb3BVcCcpO1xuICAgICAgICBwb3BCb3hbMV0uY2xhc3NMaXN0LmFkZCgnc2hvd0ZsZXgnKTtcbiAgICAgICAgbG9hZFBvcHVwKHJzdkJ0bi5uYW1lLCAnUmVzZXJ2YXRpb24nKTtcbiAgICAgIH0pO1xuXG4gICAgICBtYWluLmFwcGVuZENoaWxkKGNhcmQpO1xuICAgICAgY29uc3QgaGVhcnRJY29uID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcuZmFyJyk7XG4gICAgICBjb25zdCBsaWtlc0NvdW50ID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcubGlrZUNvdW50cycpO1xuICAgICAgY29uc3QgbGlrZXMgPSBhd2FpdCBsb2FkTGlrZXMoanNvbi5yZXN1bHRzW2ldLm5hbWUpO1xuICAgICAgbGV0IGV4dHJhTGlrZSA9IDA7XG4gICAgICBoZWFydEljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XG4gICAgICAgIGV4dHJhTGlrZSArPSAxO1xuICAgICAgICBsaWtlc0NvdW50LmlubmVySFRNTCA9IGBsaWtlcyAke2xpa2VzICsgZXh0cmFMaWtlfWA7XG4gICAgICAgIHBvc3RMaWtlKGpzb24ucmVzdWx0c1tpXS5uYW1lKTtcbiAgICAgIH0pO1xuICAgICAgbGlrZXNDb3VudC5pbm5lckhUTUwgPSBgbGlrZXMgJHtsaWtlc31gO1xuICAgIH07XG4gICAgZ2V0SW1hZ2UoKTtcbiAgfVxufTtcbmdldERhdGEoKTtcblxuLy9cbmNvbnN0IGhhbWJ1cmdlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oYW1idXJnZXItbWVudScpO1xuXG5jb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xudWwuaW5uZXJIVE1MID0gYFxuICA8dWwgaWQ9XCJzaWRlYmFyTGlzdC1pdGVtc1wiPlxuICAgIDxsaT5TcGFjZXNoaXBzPC9saT5cbiAgICA8bGkgY2xhc3M9XCJ1bnZpc2libGVcIj5QbGFuZXRzPC9saT5cbiAgICA8bGkgY2xhc3M9XCJ1bnZpc2libGVcIj5SYWNlczwvbGk+XG4gIDwvdWw+XG4gIDxkaXYgY2xhc3M9XCJlbXB0eVwiPjwvZGl2PlxuYDtcbnVsLmNsYXNzTmFtZSA9ICdzaWRlYmFyJztcbmNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ25hdicpO1xubmF2LmFwcGVuZENoaWxkKHVsKTtcblxuY29uc3QgZmlyc3RNZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtYnRuJyk7XG5oYW1idXJnZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIHVsLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXItYWN0aXZlJyk7XG59KTtcblxuY29uc3QgZW1wdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW1wdHknKTtcbmVtcHR5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICB1bC5jbGFzc0xpc3QucmVtb3ZlKCdzaWRlYmFyLWFjdGl2ZScpO1xuICBmaXJzdE1lbnVCdG4uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==