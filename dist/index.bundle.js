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

  // Apendding elements
  popUp.querySelector('section').appendChild(loadCont);
  loadCont.appendChild(pokeImage);
  loadCont.appendChild(pokeInfo);
  loadCont.appendChild(pokeReserv);
  body.appendChild(popUp);
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
/* harmony import */ var _rsvFormVal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rsvFormVal.js */ "./src/modules/rsvFormVal.js");
/* harmony import */ var _APIcall_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./APIcall.js */ "./src/modules/APIcall.js");




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

      (0,_APIcall_js__WEBPACK_IMPORTED_MODULE_2__.getInfo)(poke.name, infoType).then((items) => {
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

      // Form
      const rsvForm = document.createElement('form');
      rsvForm.classList = 'rsvDiv reserve';

      const formTitle = document.createElement('h3');
      rsvForm.appendChild(formTitle);

      const formName = document.createElement('input');
      formName.setAttribute('class', 'input');
      formName.setAttribute('id', 'name');
      formName.setAttribute('type', 'text');
      formName.setAttribute('name', 'name');
      formName.setAttribute('required', '');
      formName.setAttribute('placeholder', 'Your Name');
      rsvForm.appendChild(formName);

      const formMessage = document.createElement('textarea');
      formMessage.setAttribute('class', 'input');
      formMessage.setAttribute('id', 'message');
      formMessage.setAttribute('name', 'message');
      formMessage.setAttribute('maxlength', '250');
      formMessage.setAttribute('required', '');
      formMessage.setAttribute('placeholder', 'Your Insights');

      const formDateStart = document.createElement('input');
      formDateStart.setAttribute('class', 'input');
      formDateStart.setAttribute('id', 'startDate');
      formDateStart.setAttribute('type', 'text');
      formDateStart.setAttribute('name', 'dateStart');
      formDateStart.setAttribute('required', '');
      formDateStart.setAttribute('placeholder', 'Start date (mm/dd/yyyy)');

      const formDateEnd = document.createElement('input');
      formDateEnd.setAttribute('class', 'input');
      formDateEnd.setAttribute('id', 'endDate');
      formDateEnd.setAttribute('type', 'text');
      formDateEnd.setAttribute('name', 'dateStart');
      formDateEnd.setAttribute('required', '');
      formDateEnd.setAttribute('placeholder', 'Start date (mm/dd/yyyy)');

      const formSubmit = document.createElement('input');
      formSubmit.setAttribute('class', 'rsvBtn');
      formSubmit.setAttribute('id', 'rsvBtn');
      formSubmit.setAttribute('type', 'submit');

      const date = new Date();

      if (type === 'Comment') {
        formTitle.innerHTML = 'Add a Comment';
        rsvForm.appendChild(formMessage);
        formSubmit.setAttribute('name', 'Comment');
        formSubmit.setAttribute('value', 'Comment');
      } else if (type === 'Reservation') {
        formTitle.innerHTML = 'Add a Reservation';
        rsvForm.appendChild(formDateStart);
        rsvForm.appendChild(formDateEnd);
        formSubmit.setAttribute('name', 'Reservation');
        formSubmit.setAttribute('value', 'Reserve');
      }
      rsvForm.appendChild(formSubmit);

      if (type === 'Reservation') {
        (0,_rsvFormVal_js__WEBPACK_IMPORTED_MODULE_1__["default"])(rsvForm, rsvForm.querySelector(':last-child').name);
      }

      rsvForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (type === 'Comment') {
          rsvList.innerHTML += `<li>${date.toISOString().split('T')[0]} ${formName.value}: ${formMessage.value}</li>`;
          (0,_APIcall_js__WEBPACK_IMPORTED_MODULE_2__.postComment)(poke.name, formName.value, formMessage.value);
        } else {
          rsvList.innerHTML += `<li>${formDateStart.value} - ${formDateEnd.value} by ${formName.value}</li>`;
          (0,_APIcall_js__WEBPACK_IMPORTED_MODULE_2__.postReservation)(poke.name, formName.value, formDateStart.value, formDateEnd.value);
        }

        ReservTitle.querySelector('.rsvCount').innerHTML = rsvList.getElementsByTagName('li').length;
        rsvForm.reset();
      });

      if (type === 'Comment') {
        loadCont[0].appendChild(pokeImage);
        loadCont[0].appendChild(pokeInfo);
        loadCont[0].appendChild(pokeReserv);
        loadCont[0].appendChild(rsvForm);
      } else if (type === 'Reservation') {
        loadCont[1].appendChild(pokeImage);
        loadCont[1].appendChild(pokeInfo);
        loadCont[1].appendChild(pokeReserv);
        loadCont[1].appendChild(rsvForm);
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxPQUFPLFVBQVUsVUFBVSxXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLEtBQUssV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLE1BQU0sVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLE1BQU0sS0FBSyxV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Q0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7Ozs7Ozs7Ozs7O0FDckJzQjtBQUNxQztBQUNSO0FBQ0w7O0FBRTlDLG1FQUFXO0FBQ1gsbUVBQVc7O0FBRVg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsUUFBUTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsNEJBQTRCO0FBQzlDLFdBQVcscUJBQXFCO0FBQ2hDLG9DQUFvQyxFQUFFO0FBQ3RDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixxQkFBcUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHFCQUFxQjtBQUM1QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGdFQUFTO0FBQ2pCLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0EsUUFBUSxnRUFBUztBQUNqQixPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiw4REFBUztBQUNuQztBQUNBO0FBQ0E7QUFDQSx3Q0FBd0Msa0JBQWtCO0FBQzFELFFBQVEsNkRBQVE7QUFDaEIsT0FBTztBQUNQLHNDQUFzQyxNQUFNO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rYW5iYW5ib2FyZC8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovL2thbmJhbmJvYXJkLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9rYW5iYW5ib2FyZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8va2FuYmFuYm9hcmQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9rYW5iYW5ib2FyZC8uL3NyYy9zdHlsZS5zY3NzPzc1YmEiLCJ3ZWJwYWNrOi8va2FuYmFuYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8va2FuYmFuYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2thbmJhbmJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2thbmJhbmJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2thbmJhbmJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8va2FuYmFuYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9rYW5iYW5ib2FyZC8uL3NyYy9tb2R1bGVzL0FQSWNhbGwuanMiLCJ3ZWJwYWNrOi8va2FuYmFuYm9hcmQvLi9zcmMvbW9kdWxlcy9jcmVhdGVQb3B1cC5qcyIsIndlYnBhY2s6Ly9rYW5iYW5ib2FyZC8uL3NyYy9tb2R1bGVzL2Rlc2NyaXB0LmpzIiwid2VicGFjazovL2thbmJhbmJvYXJkLy4vc3JjL21vZHVsZXMvbG9hZFBva2UuanMiLCJ3ZWJwYWNrOi8va2FuYmFuYm9hcmQvLi9zcmMvbW9kdWxlcy9wb2tlQXBpLmpzIiwid2VicGFjazovL2thbmJhbmJvYXJkLy4vc3JjL21vZHVsZXMvcnN2Rm9ybVZhbC5qcyIsIndlYnBhY2s6Ly9rYW5iYW5ib2FyZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9rYW5iYW5ib2FyZC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9rYW5iYW5ib2FyZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8va2FuYmFuYm9hcmQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9rYW5iYW5ib2FyZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2thbmJhbmJvYXJkL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8va2FuYmFuYm9hcmQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8va2FuYmFuYm9hcmQvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8va2FuYmFuYm9hcmQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcInBva2Vtb25Mb2dvLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zLCBzZXJpZjtcXG59XFxuXFxuLm5hdi1saXN0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5oYW1idXJnZXItbWVudSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubmF2LWxpc3Qge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDVweCAyMHB4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG5uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMjVweCAwO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTMwcHg7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiAxMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xcbn1cXG5cXG4uY2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLm1haW4ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAlIDIwJSAyMCU7XFxuICBncmlkLWdhcDogMzBweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5pIHtcXG4gIGZsb2F0OiByaWdodDtcXG4gIGNvbG9yOiAjZmUwMDAwO1xcbn1cXG5cXG4ubGlrZUNvdW50cyB7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG59XFxuXFxuaTpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5ob21lLWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxuICBwYWRkaW5nOiA0cHggMDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuLmhvbWUtYnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxZTFlMWU7XFxufVxcblxcbmZvb3RlciB7XFxuICBwYWRkaW5nOiAyNXB4IDIwcHg7XFxuICBib3JkZXItdG9wOiAzcHggc29saWQgYmxhY2s7XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbn1cXG5cXG4jc2lkZWJhckxpc3QtaXRlbXMge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2MHB4KSB7XFxuICAubWFpbiB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDAlIDQwJTtcXG4gIH1cXG5cXG4gIC5uYXYtbGlzdCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAuaGFtYnVyZ2VyLWl0ZW1zMSxcXG4uaGFtYnVyZ2VyLWl0ZW1zMixcXG4uaGFtYnVyZ2VyLWl0ZW1zMyB7XFxuICAgIHdpZHRoOiAzNXB4O1xcbiAgICBoZWlnaHQ6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG4gIH1cXG5cXG4gIC5oYW1idXJnZXItbWVudSB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIH1cXG5cXG4gIG5hdiB7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgcGFkZGluZy1sZWZ0OiA4JTtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDkwJTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwcHg7XFxuICB9XFxuXFxuICAuc2lkZWJhciB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTUwJSk7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMiwgMzIsIDM1LCAwLjY1KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICB9XFxuXFxuICAuc2lkZWJhci1hY3RpdmUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XFxuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLW91dCAwLjFzO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICB9XFxuXFxuICAjc2lkZWJhckxpc3QtaXRlbXMge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiA0MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzMiwgMzIsIDM1KTtcXG4gICAgei1pbmRleDogMztcXG4gIH1cXG5cXG4gIC51bnZpc2libGUge1xcbiAgICBvcGFjaXR5OiAwLjM7XFxuICB9XFxuXFxuICAuZW1wdHkge1xcbiAgICB3aWR0aDogNjAlO1xcbiAgfVxcbn1cXG4ucG9wVXAge1xcbiAgYmFja2dyb3VuZDogcmdiYSgxNzAsIDE4MCwgMTcwLCAwLjQpO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDFweCk7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBub25lO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc2hvd0ZsZXgge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnBvcEJveCB7XFxuICBib3JkZXI6IHNvbGlkICMwMDAgMXB4O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIG1pbi1oZWlnaHQ6IDU4MHB4O1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnBvcEJveCBoMixcXG4ucG9wQm94IGgzIHtcXG4gIG1hcmdpbjogMnB4IDAgMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnBva2VMb2FkIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucG9rZUltZyB7XFxuICB3aWR0aDogMTAwcHg7XFxufVxcbi5wb2tlSW1nIGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmRlc2NyaXB0aW9uIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xcbiAgZ3JpZC1nYXA6IDE1cHg7XFxufVxcblxcbi5kZXNjRWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5hdHROYW1lIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ucnN2TGlzdCB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWF4LWhlaWdodDogOTBweDtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG4ucnN2TGlzdCBsaSB7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAjZWVlIDFweDtcXG59XFxuXFxuLnJlc2VydmUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLnJlc2VydmUgLmlucHV0IHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBtYXJnaW4tYm90dG9tOiA4cHg7XFxuICB3aWR0aDogMjAwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcblxcbi5yc3ZCdG4ge1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbn1cXG5cXG4uY2xvc2Uge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcbi5jbG9zZSA6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZ2ctY2xvc2Uge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG4uZ2ctY2xvc2U6OmFmdGVyLFxcbi5nZy1jbG9zZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDNweDtcXG4gIGJhY2tncm91bmQ6IGN1cnJlbnRDb2xvcjtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHRvcDogMTNweDtcXG59XFxuXFxuLmdnLWNsb3NlOjphZnRlciB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0EsMkJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSx5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QUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUFMRjs7QUFRQTtFQUNFLHlCQUFBO0FBTEZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnMsIHNlcmlmO1xcbn1cXG5cXG4ubmF2LWxpc3QtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmhhbWJ1cmdlci1tZW51IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5uYXYtbGlzdCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogNXB4IDIwcHg7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbm5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAyNXB4IDA7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwocG9rZW1vbkxvZ28uanBnKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTMwcHg7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiAxMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xcbn1cXG5cXG4uY2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLm1haW4ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAlIDIwJSAyMCU7XFxuICBncmlkLWdhcDogMzBweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5pIHtcXG4gIGZsb2F0OiByaWdodDtcXG4gIGNvbG9yOiAjZmUwMDAwO1xcbn1cXG5cXG4ubGlrZUNvdW50cyB7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG59XFxuXFxuaTpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5ob21lLWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxuICBwYWRkaW5nOiA0cHggMDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuLmhvbWUtYnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxZTFlMWU7XFxufVxcblxcbmZvb3RlciB7XFxuICBwYWRkaW5nOiAyNXB4IDIwcHg7XFxuICBib3JkZXItdG9wOiAzcHggc29saWQgYmxhY2s7XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbn1cXG5cXG4jc2lkZWJhckxpc3QtaXRlbXMge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2MHB4KSB7XFxuICAubWFpbiB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDAlIDQwJTtcXG4gIH1cXG5cXG4gIC5uYXYtbGlzdCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAuaGFtYnVyZ2VyLWl0ZW1zMSxcXG4gIC5oYW1idXJnZXItaXRlbXMyLFxcbiAgLmhhbWJ1cmdlci1pdGVtczMge1xcbiAgICB3aWR0aDogMzVweDtcXG4gICAgaGVpZ2h0OiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICB9XFxuXFxuICAuaGFtYnVyZ2VyLW1lbnUge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB9XFxuXFxuICBuYXYge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIHBhZGRpbmctbGVmdDogOCU7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiA5MCU7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMHB4O1xcbiAgfVxcblxcbiAgLnNpZGViYXIge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTE1MCUpO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzIsIDMyLCAzNSwgNjUlKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICB9XFxuXFxuICAuc2lkZWJhci1hY3RpdmUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XFxuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLW91dCAwLjFzO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICB9XFxuXFxuICAjc2lkZWJhckxpc3QtaXRlbXMge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiA0MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzIsIDMyLCAzNSk7XFxuICAgIHotaW5kZXg6IDM7XFxuICB9XFxuXFxuICAudW52aXNpYmxlIHtcXG4gICAgb3BhY2l0eTogMC4zO1xcbiAgfVxcblxcbiAgLmVtcHR5IHtcXG4gICAgd2lkdGg6IDYwJTtcXG4gIH1cXG59XFxuXFxuLnBvcFVwIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMTcwLCAxODAsIDE3MCwgMC40KTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxcHgpO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNob3dGbGV4IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5wb3BCb3gge1xcbiAgYm9yZGVyOiBzb2xpZCAjMDAwIDFweDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICB3aWR0aDogNDAwcHg7XFxuICBtaW4taGVpZ2h0OiA1ODBweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBoMixcXG4gIGgzIHtcXG4gICAgbWFyZ2luOiAycHggMCAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxufVxcblxcbi5wb2tlTG9hZCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnBva2VJbWcge1xcbiAgd2lkdGg6IDEwMHB4O1xcblxcbiAgaW1nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxufVxcblxcbi5kZXNjcmlwdGlvbiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjtcXG4gIGdyaWQtZ2FwOiAxNXB4O1xcbn1cXG5cXG4uZGVzY0VsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uYXR0TmFtZSB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnJzdkxpc3Qge1xcbiAgcGFkZGluZzogMDtcXG4gIG1heC1oZWlnaHQ6IDkwcHg7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG5cXG4gIGxpIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgI2VlZSAxcHg7XFxuICB9XFxufVxcblxcbi5yZXNlcnZlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICAuaW5wdXQge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICB9XFxufVxcblxcbi5yc3ZCdG4ge1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbn1cXG5cXG4uY2xvc2Uge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuXFxuICA6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxufVxcblxcbi5nZy1jbG9zZSB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxufVxcblxcbi5nZy1jbG9zZTo6YWZ0ZXIsXFxuLmdnLWNsb3NlOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogM3B4O1xcbiAgYmFja2dyb3VuZDogY3VycmVudENvbG9yO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgdG9wOiAxM3B4O1xcbn1cXG5cXG4uZ2ctY2xvc2U6OmFmdGVyIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgYmFzZVVSTCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9SaXpraUkxcTliRHlEVUlveXU4bSc7XG5jb25zdCBsaWtlcyA9ICcvbGlrZXMnO1xuY29uc3QgY29tbWVudHMgPSAnL2NvbW1lbnRzJztcbmNvbnN0IHJlc2VydmF0aW9ucyA9ICcvcmVzZXJ2YXRpb25zJztcblxuY29uc3QgaXRlbXNVbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyc3ZMaXN0Jyk7XG5jb25zdCByc3ZDb3VudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyc3ZDb3VudCcpO1xuXG4vLyBDUkVBVEUgTElcbmNvbnN0IGNyZWF0ZUxpID0gKHR5cGUsIGl0ZW1zKSA9PiB7XG4gIGl0ZW1zVWwuaW5uZXJIVE1MID0gJyc7XG4gIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBsZXQgaXRlbUNvbnRhaW5lciA9ICcnO1xuICAgIGlmICh0eXBlID09PSAnL2NvbW1lbnRzJykge1xuICAgICAgaXRlbUNvbnRhaW5lciA9IGA8bGk+JHtpdGVtLmNyZWF0aW9uX2RhdGV9ICR7aXRlbS51c2VybmFtZX06ICR7aXRlbS5jb21tZW50fTwvbGk+YDtcbiAgICB9IGVsc2Uge1xuICAgICAgaXRlbUNvbnRhaW5lciA9IGA8bGk+JHtpdGVtLmRhdGVfc3RhcnR9IC0gJHtpdGVtLmRhdGVfZW5kfSBieSAke2l0ZW0udXNlcm5hbWV9PC9saT5gO1xuICAgIH1cbiAgICBpdGVtc1VsLmlubmVySFRNTCArPSBpdGVtQ29udGFpbmVyO1xuICB9KTtcbn07XG5cbi8vIEdFVFxuY29uc3QgZ2V0TGlrZXMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoKChiYXNlVVJMICsgbGlrZXMpKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3VsdC50ZXh0KCk7XG4gIHJldHVybiBKU09OLnBhcnNlKGRhdGEpO1xufTtcblxuY29uc3QgZ2V0SW5mbyA9IGFzeW5jIChpZCwgdHlwZSkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2Jhc2VVUkx9JHt0eXBlfT9pdGVtX2lkPSR7aWR9YCk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gIGNvbnN0IHJlc3VsdCA9IEpTT04ucGFyc2UoZGF0YSk7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vLyBQT1NUXG5jb25zdCBwb3N0TGlrZSA9IGFzeW5jIChpZCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKChiYXNlVVJMICsgbGlrZXMpLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIGl0ZW1faWQ6IGlkLFxuICAgIH0pLFxuICB9KTtcblxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICByZXR1cm4gZGF0YTtcbn07XG5cbmNvbnN0IHBvc3RDb21tZW50ID0gYXN5bmMgKGlkLCBteVVzZXJuYW1lLCBteUNvbW1lbnQpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgoYmFzZVVSTCArIGNvbW1lbnRzKSwge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBpdGVtX2lkOiBpZCxcbiAgICAgIHVzZXJuYW1lOiBteVVzZXJuYW1lLFxuICAgICAgY29tbWVudDogbXlDb21tZW50LFxuICAgIH0pLFxuICB9KTtcblxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICByZXR1cm4gZGF0YTtcbn07XG5cbmNvbnN0IHBvc3RSZXNlcnZhdGlvbiA9IGFzeW5jIChpZCwgbXlVc2VybmFtZSwgc3RhcnREYXRlLCBlbmREYXRlKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goKGJhc2VVUkwgKyByZXNlcnZhdGlvbnMpLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIGl0ZW1faWQ6IGlkLFxuICAgICAgdXNlcm5hbWU6IG15VXNlcm5hbWUsXG4gICAgICBkYXRlX3N0YXJ0OiBzdGFydERhdGUsXG4gICAgICBkYXRlX2VuZDogZW5kRGF0ZSxcbiAgICB9KSxcbiAgfSk7XG5cbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgcmV0dXJuIGRhdGE7XG59O1xuXG4vLyBMT0FEIERBVEFcbmNvbnN0IGxvYWREYXRhID0gKGlkLCB0eXBlKSA9PiB7XG4gIGdldEluZm8oaWQsIHR5cGUpLnRoZW4oKGl0ZW1zKSA9PiB7XG4gICAgcnN2Q291bnQuaW5uZXJIVE1MID0gaXRlbXMubGVuZ3RoO1xuICAgIGNyZWF0ZUxpKHR5cGUsIGl0ZW1zKTtcbiAgfSk7XG59O1xuXG5jb25zdCBsb2FkTGlrZXMgPSBhc3luYyAoaWQpID0+IHtcbiAgY29uc3QgdG90YWxMaWtlcyA9IGF3YWl0IGdldExpa2VzKCk7XG4gIGNvbnN0IGl0ZW1MaWtlcyA9IHRvdGFsTGlrZXMuZmluZCgoeCkgPT4geC5pdGVtX2lkID09PSBpZCk7XG4gIHJldHVybiBpdGVtTGlrZXMgIT09IHVuZGVmaW5lZCA/IGl0ZW1MaWtlcy5saWtlcyA6IDA7XG59O1xuXG5leHBvcnQge1xuICBnZXRMaWtlcywgZ2V0SW5mbywgcG9zdExpa2UsIHBvc3RDb21tZW50LCBwb3N0UmVzZXJ2YXRpb24sIGxvYWREYXRhLCBsb2FkTGlrZXMsXG59OyIsImNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYm9keScpO1xuXG5jb25zdCBjcmVhdGVQb3B1cCA9ICh0eXBlKSA9PiB7XG4gIGNvbnN0IHBvcFVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgcG9wVXAuY2xhc3NMaXN0ID0gJ3BvcFVwJztcbiAgcG9wVXAuaW5uZXJIVE1MID0gYDxzZWN0aW9uIGNsYXNzPVwicG9wQm94XCI+XG4gICAgPGRpdiBjbGFzcz1cImNsb3NlXCI+XG4gICAgICA8aSBjbGFzcz1cImdnLWNsb3NlXCI+PC9pPlxuICAgIDwvZGl2PlxuICA8L3NlY3Rpb24+YDtcblxuICAvLyBIaWRlIGNhcmRcbiAgY29uc3QgY2xvc2UgPSBwb3BVcC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UnKTtcbiAgY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgcG9wVXAuY2xhc3NMaXN0ID0gJ3BvcFVwJztcbiAgfSk7XG5cbiAgLy8gTG9hZCBDb250YWluZXJcbiAgY29uc3QgbG9hZENvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbG9hZENvbnQuY2xhc3NMaXN0ID0gJ3Bva2VMb2FkJztcblxuICAvLyBJbWFnZVxuICBjb25zdCBwb2tlSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcG9rZUltYWdlLmNsYXNzTGlzdCA9ICdyc3ZEaXYgcG9rZUltZyc7XG4gIHBva2VJbWFnZS5pbm5lckhUTUwgPSAnPGgzPkxvYWRpbmcuLi48L2gzPic7XG5cbiAgLy8gRGVzY3JpcHRcbiAgY29uc3QgcG9rZUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcG9rZUluZm8uY2xhc3NMaXN0ID0gJ3JzdkRpdiBpbmZvJztcbiAgcG9rZUluZm8uaW5uZXJIVE1MID0gYDxoMiBjbGFzcz1cInBva2VOYW1lXCI+V2hvIGlzIHRoYXQgcG9rZW1vbj88L2gyPlxuICA8dWwgY2xhc3M9XCJkZXNjcmlwdGlvblwiPkxvYWRpbmcuLi48L3VsPmA7XG5cbiAgLy8gUmVzZXJ2YXRpb25zXG4gIGNvbnN0IHBva2VSZXNlcnYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcG9rZVJlc2Vydi5jbGFzc0xpc3QgPSAncnN2RGl2IHJlc2VydmF0aW9uJztcbiAgcG9rZVJlc2Vydi5pbm5lckhUTUwgPSBgPGgzPiR7dHlwZX1zIDxzcGFuIGNsYXNzPVwicnN2Q291bnRcIj4oKTwvc3Bhbj48L2gzPlxuICAgIDx1bCBjbGFzcz1cInJzdkxpc3RcIj5Mb2FkaW5nLi4uPC91bD5gO1xuXG4gIC8vIEFwZW5kZGluZyBlbGVtZW50c1xuICBwb3BVcC5xdWVyeVNlbGVjdG9yKCdzZWN0aW9uJykuYXBwZW5kQ2hpbGQobG9hZENvbnQpO1xuICBsb2FkQ29udC5hcHBlbmRDaGlsZChwb2tlSW1hZ2UpO1xuICBsb2FkQ29udC5hcHBlbmRDaGlsZChwb2tlSW5mbyk7XG4gIGxvYWRDb250LmFwcGVuZENoaWxkKHBva2VSZXNlcnYpO1xuICBib2R5LmFwcGVuZENoaWxkKHBvcFVwKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVBvcHVwO1xuIiwiaW1wb3J0IGdldFBva2UgZnJvbSAnLi9wb2tlQXBpLmpzJztcblxuLy8gVGhpcyBmdW5jdGlvbiBmaWx0ZXIgdGhlIEFwaSBpbmZvcm1hdGlvblxuY29uc3QgZ2V0UG9rZURlc2MgPSBhc3luYyAocG9rZUlkKSA9PiB7XG4gIGNvbnN0IHBva2UgPSBhd2FpdCBnZXRQb2tlKHBva2VJZCk7XG4gIGNvbnN0IHBva2Vtb24gPSBhd2FpdCB7XG4gICAgaW1hZ2U6IHBva2Uuc3ByaXRlcy5mcm9udF9kZWZhdWx0LFxuICAgIG5hbWU6IHBva2UubmFtZSxcbiAgICB0eXBlOiBwb2tlLnR5cGVzWzBdLnR5cGUubmFtZSxcbiAgICBhYmlsaXRpZXM6IHBva2UuYWJpbGl0aWVzWzBdLmFiaWxpdHkubmFtZSxcbiAgICBoZWlnaHQ6IGAke3Bva2UuaGVpZ2h0IC8gMTB9IG1gLFxuICAgIHdlaWdodDogYCR7cG9rZS53ZWlnaHQgLyAxMH0ga2dgLFxuICB9O1xuICByZXR1cm4gcG9rZW1vbjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldFBva2VEZXNjO1xuIiwiaW1wb3J0IGdldFBva2VEZXNjIGZyb20gJy4vZGVzY3JpcHQuanMnO1xuaW1wb3J0IHJzdlN1Ym1pdCBmcm9tICcuL3JzdkZvcm1WYWwuanMnO1xuaW1wb3J0IHsgZ2V0SW5mbywgcG9zdENvbW1lbnQsIHBvc3RSZXNlcnZhdGlvbiB9IGZyb20gJy4vQVBJY2FsbC5qcyc7XG5cbmNvbnN0IGxvYWRQb3B1cCA9IChwb2tlSWQsIHR5cGUpID0+IHtcbiAgZ2V0UG9rZURlc2MocG9rZUlkKVxuICAgIC50aGVuKChwb2tlKSA9PiB7XG4gICAgICBjb25zdCBsb2FkQ29udCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wb2tlTG9hZCcpO1xuICAgICAgbG9hZENvbnRbMF0uaW5uZXJIVE1MID0gJyc7XG4gICAgICBsb2FkQ29udFsxXS5pbm5lckhUTUwgPSAnJztcblxuICAgICAgLy8gSW1hZ2VcbiAgICAgIGNvbnN0IHBva2VJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgcG9rZUltYWdlLmNsYXNzTGlzdCA9ICdyc3ZEaXYgcG9rZUltZyc7XG4gICAgICBwb2tlSW1hZ2UuaW5uZXJIVE1MID0gYDxpbWcgc3JjPSR7cG9rZS5pbWFnZX0gYWx0PVwicGlrYWNodVwiPmA7XG5cbiAgICAgIC8vIERlc2NyaXB0XG4gICAgICBjb25zdCBwb2tlSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgcG9rZUluZm8uY2xhc3NMaXN0ID0gJ3JzdkRpdiBpbmZvJztcbiAgICAgIHBva2VJbmZvLmlubmVySFRNTCA9IGBcbiAgICAgIDxoMiBjbGFzcz1cInBva2VOYW1lXCI+JHtwb2tlLm5hbWV9PC9oMj5cbiAgICAgIDx1bCBjbGFzcz1cImRlc2NyaXB0aW9uXCI+XG4gICAgICAgIDxsaSBjbGFzcz1cImRlc2NFbFwiPjxzcGFuIGNsYXNzPVwiYXR0TmFtZVwiPlR5cGU8L3NwYW4+PHNwYW4gY2xhc3M9XCJhdHRWYWx1ZVwiPiR7cG9rZS50eXBlfTwvc3Bhbj48L2xpPlxuICAgICAgICA8bGkgY2xhc3M9XCJkZXNjRWxcIj48c3BhbiBjbGFzcz1cImF0dE5hbWVcIj5BYmlsaXRpZXM8L3NwYW4+PHNwYW4gY2xhc3M9XCJhdHRWYWx1ZVwiPiR7cG9rZS5hYmlsaXRpZXN9PC9zcGFuPjwvbGk+XG4gICAgICAgIDxsaSBjbGFzcz1cImRlc2NFbFwiPjxzcGFuIGNsYXNzPVwiYXR0TmFtZVwiPkhlaWdodDwvc3Bhbj48c3BhbiBjbGFzcz1cImF0dFZhbHVlXCI+JHtwb2tlLmhlaWdodH08L3NwYW4+PC9saT5cbiAgICAgICAgPGxpIGNsYXNzPVwiZGVzY0VsXCI+PHNwYW4gY2xhc3M9XCJhdHROYW1lXCI+V2VpZ2h0PC9zcGFuPjxzcGFuIGNsYXNzPVwiYXR0VmFsdWVcIj4ke3Bva2Uud2VpZ2h0fTwvc3Bhbj48L2xpPlxuICAgICAgPC91bD5cbiAgICAgIGA7XG5cbiAgICAgIC8vIFJlc2VydmF0aW9uc1xuICAgICAgY29uc3QgcG9rZVJlc2VydiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgcG9rZVJlc2Vydi5jbGFzc0xpc3QgPSAncnN2RGl2IHJlc2VydmF0aW9uJztcbiAgICAgIGNvbnN0IFJlc2VydlRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcblxuICAgICAgY29uc3QgcnN2TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICByc3ZMaXN0LmNsYXNzTmFtZSA9ICdyc3ZMaXN0JztcblxuICAgICAgY29uc3QgaW5mb1R5cGUgPSB0eXBlID09PSAnQ29tbWVudCcgPyAnL2NvbW1lbnRzJyA6ICcvcmVzZXJ2YXRpb25zJztcblxuICAgICAgZ2V0SW5mbyhwb2tlLm5hbWUsIGluZm9UeXBlKS50aGVuKChpdGVtcykgPT4ge1xuICAgICAgICBjb25zdCBpdGVtc0NvdW50ID0gaXRlbXMubGVuZ3RoICE9PSB1bmRlZmluZWQgPyBpdGVtcy5sZW5ndGggOiAwO1xuICAgICAgICBSZXNlcnZUaXRsZS5pbm5lckhUTUwgPSBgJHt0eXBlfXMgKDxzcGFuIGNsYXNzPVwicnN2Q291bnRcIj4ke2l0ZW1zQ291bnR9PC9zcGFuPilgO1xuICAgICAgICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgbGV0IGl0ZW1Db250YWluZXIgPSAnJztcbiAgICAgICAgICBpZiAoaW5mb1R5cGUgPT09ICcvY29tbWVudHMnKSB7XG4gICAgICAgICAgICBpdGVtQ29udGFpbmVyID0gYDxsaT4ke2l0ZW0uY3JlYXRpb25fZGF0ZX0gJHtpdGVtLnVzZXJuYW1lfTogJHtpdGVtLmNvbW1lbnR9PC9saT5gO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpdGVtQ29udGFpbmVyID0gYDxsaT4ke2l0ZW0uZGF0ZV9zdGFydH0gLSAke2l0ZW0uZGF0ZV9lbmR9IGJ5ICR7aXRlbS51c2VybmFtZX08L2xpPmA7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJzdkxpc3QuaW5uZXJIVE1MICs9IGl0ZW1Db250YWluZXI7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIHBva2VSZXNlcnYuYXBwZW5kQ2hpbGQoUmVzZXJ2VGl0bGUpO1xuICAgICAgcG9rZVJlc2Vydi5hcHBlbmRDaGlsZChyc3ZMaXN0KTtcblxuICAgICAgLy8gRm9ybVxuICAgICAgY29uc3QgcnN2Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgIHJzdkZvcm0uY2xhc3NMaXN0ID0gJ3JzdkRpdiByZXNlcnZlJztcblxuICAgICAgY29uc3QgZm9ybVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgIHJzdkZvcm0uYXBwZW5kQ2hpbGQoZm9ybVRpdGxlKTtcblxuICAgICAgY29uc3QgZm9ybU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgZm9ybU5hbWUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdpbnB1dCcpO1xuICAgICAgZm9ybU5hbWUuc2V0QXR0cmlidXRlKCdpZCcsICduYW1lJyk7XG4gICAgICBmb3JtTmFtZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgICAgZm9ybU5hbWUuc2V0QXR0cmlidXRlKCduYW1lJywgJ25hbWUnKTtcbiAgICAgIGZvcm1OYW1lLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJyk7XG4gICAgICBmb3JtTmFtZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1lvdXIgTmFtZScpO1xuICAgICAgcnN2Rm9ybS5hcHBlbmRDaGlsZChmb3JtTmFtZSk7XG5cbiAgICAgIGNvbnN0IGZvcm1NZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICAgIGZvcm1NZXNzYWdlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaW5wdXQnKTtcbiAgICAgIGZvcm1NZXNzYWdlLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVzc2FnZScpO1xuICAgICAgZm9ybU1lc3NhZ2Uuc2V0QXR0cmlidXRlKCduYW1lJywgJ21lc3NhZ2UnKTtcbiAgICAgIGZvcm1NZXNzYWdlLnNldEF0dHJpYnV0ZSgnbWF4bGVuZ3RoJywgJzI1MCcpO1xuICAgICAgZm9ybU1lc3NhZ2Uuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcbiAgICAgIGZvcm1NZXNzYWdlLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnWW91ciBJbnNpZ2h0cycpO1xuXG4gICAgICBjb25zdCBmb3JtRGF0ZVN0YXJ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgIGZvcm1EYXRlU3RhcnQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdpbnB1dCcpO1xuICAgICAgZm9ybURhdGVTdGFydC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3N0YXJ0RGF0ZScpO1xuICAgICAgZm9ybURhdGVTdGFydC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgICAgZm9ybURhdGVTdGFydC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZGF0ZVN0YXJ0Jyk7XG4gICAgICBmb3JtRGF0ZVN0YXJ0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJyk7XG4gICAgICBmb3JtRGF0ZVN0YXJ0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnU3RhcnQgZGF0ZSAobW0vZGQveXl5eSknKTtcblxuICAgICAgY29uc3QgZm9ybURhdGVFbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgZm9ybURhdGVFbmQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdpbnB1dCcpO1xuICAgICAgZm9ybURhdGVFbmQuc2V0QXR0cmlidXRlKCdpZCcsICdlbmREYXRlJyk7XG4gICAgICBmb3JtRGF0ZUVuZC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgICAgZm9ybURhdGVFbmQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2RhdGVTdGFydCcpO1xuICAgICAgZm9ybURhdGVFbmQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcbiAgICAgIGZvcm1EYXRlRW5kLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnU3RhcnQgZGF0ZSAobW0vZGQveXl5eSknKTtcblxuICAgICAgY29uc3QgZm9ybVN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICBmb3JtU3VibWl0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncnN2QnRuJyk7XG4gICAgICBmb3JtU3VibWl0LnNldEF0dHJpYnV0ZSgnaWQnLCAncnN2QnRuJyk7XG4gICAgICBmb3JtU3VibWl0LnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcblxuICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG5cbiAgICAgIGlmICh0eXBlID09PSAnQ29tbWVudCcpIHtcbiAgICAgICAgZm9ybVRpdGxlLmlubmVySFRNTCA9ICdBZGQgYSBDb21tZW50JztcbiAgICAgICAgcnN2Rm9ybS5hcHBlbmRDaGlsZChmb3JtTWVzc2FnZSk7XG4gICAgICAgIGZvcm1TdWJtaXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ0NvbW1lbnQnKTtcbiAgICAgICAgZm9ybVN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ0NvbW1lbnQnKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ1Jlc2VydmF0aW9uJykge1xuICAgICAgICBmb3JtVGl0bGUuaW5uZXJIVE1MID0gJ0FkZCBhIFJlc2VydmF0aW9uJztcbiAgICAgICAgcnN2Rm9ybS5hcHBlbmRDaGlsZChmb3JtRGF0ZVN0YXJ0KTtcbiAgICAgICAgcnN2Rm9ybS5hcHBlbmRDaGlsZChmb3JtRGF0ZUVuZCk7XG4gICAgICAgIGZvcm1TdWJtaXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ1Jlc2VydmF0aW9uJyk7XG4gICAgICAgIGZvcm1TdWJtaXQuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdSZXNlcnZlJyk7XG4gICAgICB9XG4gICAgICByc3ZGb3JtLmFwcGVuZENoaWxkKGZvcm1TdWJtaXQpO1xuXG4gICAgICBpZiAodHlwZSA9PT0gJ1Jlc2VydmF0aW9uJykge1xuICAgICAgICByc3ZTdWJtaXQocnN2Rm9ybSwgcnN2Rm9ybS5xdWVyeVNlbGVjdG9yKCc6bGFzdC1jaGlsZCcpLm5hbWUpO1xuICAgICAgfVxuXG4gICAgICByc3ZGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKHR5cGUgPT09ICdDb21tZW50Jykge1xuICAgICAgICAgIHJzdkxpc3QuaW5uZXJIVE1MICs9IGA8bGk+JHtkYXRlLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXX0gJHtmb3JtTmFtZS52YWx1ZX06ICR7Zm9ybU1lc3NhZ2UudmFsdWV9PC9saT5gO1xuICAgICAgICAgIHBvc3RDb21tZW50KHBva2UubmFtZSwgZm9ybU5hbWUudmFsdWUsIGZvcm1NZXNzYWdlLnZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByc3ZMaXN0LmlubmVySFRNTCArPSBgPGxpPiR7Zm9ybURhdGVTdGFydC52YWx1ZX0gLSAke2Zvcm1EYXRlRW5kLnZhbHVlfSBieSAke2Zvcm1OYW1lLnZhbHVlfTwvbGk+YDtcbiAgICAgICAgICBwb3N0UmVzZXJ2YXRpb24ocG9rZS5uYW1lLCBmb3JtTmFtZS52YWx1ZSwgZm9ybURhdGVTdGFydC52YWx1ZSwgZm9ybURhdGVFbmQudmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgUmVzZXJ2VGl0bGUucXVlcnlTZWxlY3RvcignLnJzdkNvdW50JykuaW5uZXJIVE1MID0gcnN2TGlzdC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbGknKS5sZW5ndGg7XG4gICAgICAgIHJzdkZvcm0ucmVzZXQoKTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAodHlwZSA9PT0gJ0NvbW1lbnQnKSB7XG4gICAgICAgIGxvYWRDb250WzBdLmFwcGVuZENoaWxkKHBva2VJbWFnZSk7XG4gICAgICAgIGxvYWRDb250WzBdLmFwcGVuZENoaWxkKHBva2VJbmZvKTtcbiAgICAgICAgbG9hZENvbnRbMF0uYXBwZW5kQ2hpbGQocG9rZVJlc2Vydik7XG4gICAgICAgIGxvYWRDb250WzBdLmFwcGVuZENoaWxkKHJzdkZvcm0pO1xuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnUmVzZXJ2YXRpb24nKSB7XG4gICAgICAgIGxvYWRDb250WzFdLmFwcGVuZENoaWxkKHBva2VJbWFnZSk7XG4gICAgICAgIGxvYWRDb250WzFdLmFwcGVuZENoaWxkKHBva2VJbmZvKTtcbiAgICAgICAgbG9hZENvbnRbMV0uYXBwZW5kQ2hpbGQocG9rZVJlc2Vydik7XG4gICAgICAgIGxvYWRDb250WzFdLmFwcGVuZENoaWxkKHJzdkZvcm0pO1xuICAgICAgfVxuICAgIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9hZFBvcHVwO1xuIiwiLy8gJ2h0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZW1vbi8nIEJBU0UgVVJMXG4vLyBrTHVMREQ0Sm5LZmROU2dWNjIyayBJTlZPTFZFTUVOVCBLRVlcblxuY29uc3QgZ2V0UG9rZSA9IGFzeW5jIChwb2tlSWQpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBwb2tlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZW1vbi8ke3Bva2VJZH0vYCk7XG4gICAgY29uc3QgbG9hZGVkID0gYXdhaXQgcG9rZS5qc29uKCk7XG4gICAgcmV0dXJuIGxvYWRlZDtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBlO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRQb2tlO1xuIiwiY29uc3QgZGF0ZUVycm9yID0gKGVsZW1lbnQsIGJveCkgPT4ge1xuICBjb25zdCBkYXRlTXNnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc21hbGwnKTtcbiAgZGF0ZU1zZy5pbm5lclRleHQgPSAnKG1tL2RkL3l5eXkpIE9ubHkgZGF0ZXMgZnJvbSB0b2RheSBhbmQgYmV5b25kJztcbiAgZGF0ZU1zZy5zdHlsZS5jc3NUZXh0ID0gJ2NvbG9yOiAjQ0MwMDAwOyc7XG4gIGVsZW1lbnQuaW5zZXJ0QmVmb3JlKGRhdGVNc2csIGVsZW1lbnQuY2hpbGRyZW5bYm94XSk7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGVsZW1lbnQucmVtb3ZlQ2hpbGQoZGF0ZU1zZyk7XG4gIH0sIDMyMDApO1xufTtcblxuY29uc3QgY2hlY2tEYXRlID0gKGRhdGVJbiwgZWxlbWVudCwgYm94KSA9PiB7XG4gIGNvbnN0IHJlID0gL15cXGR7MSwyfVxcL1xcZHsxLDJ9XFwvXFxkezR9JC87XG4gIGlmICghZGF0ZUluLm1hdGNoKHJlKSkge1xuICAgIGRhdGVFcnJvcihlbGVtZW50LCBib3gpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGRhdGUgPSBkYXRlSW4uc3BsaXQoJy8nKTtcbiAgICBjb25zdCB0b2RheSA9IFtuZXcgRGF0ZSgpLmdldE1vbnRoKCkgKyAxLCBuZXcgRGF0ZSgpLmdldERhdGUoKSwgbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpXTtcbiAgICBpZiAoTnVtYmVyKGRhdGVbMl0pIDwgdG9kYXlbMl0pIHtcbiAgICAgIGRhdGVFcnJvcihlbGVtZW50LCBib3gpO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBOdW1iZXIoZGF0ZVsyXSkgPT09IHRvZGF5WzJdXG4gICAgICAmJiAoTnVtYmVyKGRhdGVbMF0pIDwgdG9kYXlbMF0gfHwgTnVtYmVyKGRhdGVbMF0pID4gMTIpKSB7XG4gICAgICBkYXRlRXJyb3IoZWxlbWVudCwgYm94KTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgTnVtYmVyKGRhdGVbMl0pID09PSB0b2RheVsyXVxuICAgICAgJiYgTnVtYmVyKGRhdGVbMF0pID09PSB0b2RheVswXVxuICAgICAgJiYgKE51bWJlcihkYXRlWzFdKSA8IHRvZGF5WzFdIHx8IE51bWJlcihkYXRlWzFdKSA+IDMxKSkge1xuICAgICAgZGF0ZUVycm9yKGVsZW1lbnQsIGJveCk7XG4gICAgfSBlbHNlIGlmIChOdW1iZXIoZGF0ZVswXSkgPiAxMiB8fCBOdW1iZXIoZGF0ZVsxXSkgPiAzMSkge1xuICAgICAgZGF0ZUVycm9yKGVsZW1lbnQsIGJveCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5jb25zdCByc3ZTdWJtaXQgPSAoZWxlbWVudCwgdHlwZSkgPT4ge1xuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHJzdklucHV0cyA9IGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnKicpO1xuXG4gICAgaWYgKHR5cGUgPT09ICdSZXNlcnZhdGlvbicpIHtcbiAgICAgIGlmIChjaGVja0RhdGUocnN2SW5wdXRzWzJdLnZhbHVlLCBlbGVtZW50LCAyKSAmJiBjaGVja0RhdGUocnN2SW5wdXRzWzNdLnZhbHVlLCBlbGVtZW50LCAzKSkge1xuICAgICAgICBjb25zb2xlLmxvZygnZ29vZCcpOyAvLyBSZXBsYWNlIHdpdGggUmVzZXJ2YXRpb24gQVBJIGNvZGVcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdDb21tZW50Jykge1xuICAgICAgY29uc29sZS5sb2coJ2dvb2QnKTsgLy8gUmVwbGFjZSB3aXRoIENvbW1lbnQgQVBJIGNvZGVcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcnN2U3VibWl0O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuaW1wb3J0IHsgbG9hZExpa2VzLCBwb3N0TGlrZSB9IGZyb20gJy4vbW9kdWxlcy9BUEljYWxsLmpzJztcbmltcG9ydCBjcmVhdGVQb3B1cCBmcm9tICcuL21vZHVsZXMvY3JlYXRlUG9wdXAuanMnO1xuaW1wb3J0IGxvYWRQb3B1cCBmcm9tICcuL21vZHVsZXMvbG9hZFBva2UuanMnO1xuXG5jcmVhdGVQb3B1cCgnQ29tbWVudCcpO1xuY3JlYXRlUG9wdXAoJ1Jlc2VydmF0aW9uJyk7XG5cbmNvbnN0IGdldERhdGEgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZW1vbi8nKTtcbiAgY29uc3QganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTg7IGkgKz0gMSkge1xuICAgIGNvbnN0IGdldEltYWdlID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgcmVzcG9uc2UxID0gYXdhaXQgZmV0Y2goanNvbi5yZXN1bHRzW2ldLnVybCk7XG4gICAgICBjb25zdCBqc29uMiA9IGF3YWl0IHJlc3BvbnNlMS5qc29uKCk7XG4gICAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjYXJkLmNsYXNzTmFtZSA9ICdjYXJkJztcbiAgICAgIGNhcmQuaW5uZXJIVE1MID0gYFxuICAgICAgPGltZyBzcmM9XCIke2pzb24yLnNwcml0ZXMuZnJvbnRfZGVmYXVsdH1cIj48L2ltZz5cbiAgICAgIDxwPiR7anNvbi5yZXN1bHRzW2ldLm5hbWV9PGkgY2xhc3M9XCJmYXIgZmEtaGVhcnRcIj48L2k+PC9wPlxuICAgICAgPHAgY2xhc3M9XCJsaWtlQ291bnRzXCI+bGlrZXMgJHswfTwvcD5cbiAgYDtcblxuICAgICAgLy8gQnV0dG9ucyBmb3IgY29tbWVudCBhbmQgcmVzZXJ2YXRpb25cbiAgICAgIGNvbnN0IGNtbnRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIGNtbnRCdG4uY2xhc3NMaXN0ID0gJ2hvbWUtYnV0dG9uIGNvbW1lbnQtYnV0dG9ucyc7XG4gICAgICBjbW50QnRuLm5hbWUgPSBgJHtqc29uLnJlc3VsdHNbaV0ubmFtZX1gO1xuICAgICAgY21udEJ0bi5pbm5lclRleHQgPSAnQ29tbWVudHMnO1xuICAgICAgY29uc3QgcnN2QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICByc3ZCdG4uY2xhc3NMaXN0ID0gJ2hvbWUtYnV0dG9uIHJlc2VydmF0aW9uLWJ1dHRvbnMnO1xuICAgICAgcnN2QnRuLm5hbWUgPSBgJHtqc29uLnJlc3VsdHNbaV0ubmFtZX1gO1xuICAgICAgcnN2QnRuLmlubmVyVGV4dCA9ICdSZXNlcnZhdGlvbnMnO1xuICAgICAgY2FyZC5hcHBlbmRDaGlsZChjbW50QnRuKTtcbiAgICAgIGNhcmQuYXBwZW5kQ2hpbGQocnN2QnRuKTtcblxuICAgICAgLy8gTGlzdGVuZXJzXG4gICAgICBjbW50QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBwb3BCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG9wVXAnKTtcbiAgICAgICAgcG9wQm94WzBdLmNsYXNzTGlzdC5hZGQoJ3Nob3dGbGV4Jyk7XG4gICAgICAgIGxvYWRQb3B1cChjbW50QnRuLm5hbWUsICdDb21tZW50Jyk7XG4gICAgICB9KTtcblxuICAgICAgcnN2QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBwb3BCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG9wVXAnKTtcbiAgICAgICAgcG9wQm94WzFdLmNsYXNzTGlzdC5hZGQoJ3Nob3dGbGV4Jyk7XG4gICAgICAgIGxvYWRQb3B1cChyc3ZCdG4ubmFtZSwgJ1Jlc2VydmF0aW9uJyk7XG4gICAgICB9KTtcblxuICAgICAgbWFpbi5hcHBlbmRDaGlsZChjYXJkKTtcbiAgICAgIGNvbnN0IGhlYXJ0SWNvbiA9IGNhcmQucXVlcnlTZWxlY3RvcignLmZhcicpO1xuICAgICAgY29uc3QgbGlrZXNDb3VudCA9IGNhcmQucXVlcnlTZWxlY3RvcignLmxpa2VDb3VudHMnKTtcbiAgICAgIGNvbnN0IGxpa2VzID0gYXdhaXQgbG9hZExpa2VzKGpzb24ucmVzdWx0c1tpXS5uYW1lKTtcbiAgICAgIGxldCBleHRyYUxpa2UgPSAwO1xuICAgICAgaGVhcnRJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgICAgICBleHRyYUxpa2UgKz0gMTtcbiAgICAgICAgbGlrZXNDb3VudC5pbm5lckhUTUwgPSBgbGlrZXMgJHtsaWtlcyArIGV4dHJhTGlrZX1gO1xuICAgICAgICBwb3N0TGlrZShqc29uLnJlc3VsdHNbaV0ubmFtZSk7XG4gICAgICB9KTtcbiAgICAgIGxpa2VzQ291bnQuaW5uZXJIVE1MID0gYGxpa2VzICR7bGlrZXN9YDtcbiAgICB9O1xuICAgIGdldEltYWdlKCk7XG4gIH1cbn07XG5nZXREYXRhKCk7XG5cbi8vXG5jb25zdCBoYW1idXJnZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGFtYnVyZ2VyLW1lbnUnKTtcblxuY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnVsLmlubmVySFRNTCA9IGBcbiAgPHVsIGlkPVwic2lkZWJhckxpc3QtaXRlbXNcIj5cbiAgICA8bGk+U3BhY2VzaGlwczwvbGk+XG4gICAgPGxpIGNsYXNzPVwidW52aXNpYmxlXCI+UGxhbmV0czwvbGk+XG4gICAgPGxpIGNsYXNzPVwidW52aXNpYmxlXCI+UmFjZXM8L2xpPlxuICA8L3VsPlxuICA8ZGl2IGNsYXNzPVwiZW1wdHlcIj48L2Rpdj5cbmA7XG51bC5jbGFzc05hbWUgPSAnc2lkZWJhcic7XG5jb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCduYXYnKTtcbm5hdi5hcHBlbmRDaGlsZCh1bCk7XG5cbmNvbnN0IGZpcnN0TWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWJ0bicpO1xuaGFtYnVyZ2VyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICB1bC5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyLWFjdGl2ZScpO1xufSk7XG5cbmNvbnN0IGVtcHR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVtcHR5Jyk7XG5lbXB0eS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgdWwuY2xhc3NMaXN0LnJlbW92ZSgnc2lkZWJhci1hY3RpdmUnKTtcbiAgZmlyc3RNZW51QnRuLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=