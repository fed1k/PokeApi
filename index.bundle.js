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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/pokemonLogo.jpg */ "./src/assets/pokemonLogo.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  font-family: Poppins, serif;\n}\n\n.nav-list-container {\n  display: flex;\n  justify-content: center;\n}\n\n.hamburger-menu {\n  display: none;\n}\n\n.nav-list {\n  list-style: none;\n  padding: 5px 20px;\n  font-size: 18px;\n}\n\nnav {\n  display: flex;\n  justify-content: center;\n  padding: 25px 0;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: 130px;\n  background-repeat: no-repeat;\n  background-position-x: 10%;\n  background-color: #f6f6f6;\n}\n\n.card {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.main {\n  display: grid;\n  grid-template-columns: 20% 20% 20%;\n  grid-gap: 30px;\n  justify-content: center;\n}\n\ni {\n  float: right;\n  color: #fe0000;\n}\n\n.likeCounts {\n  align-self: flex-end;\n}\n\ni:hover {\n  cursor: pointer;\n}\n\n.home-button {\n  background-color: #fff;\n  border: 3px solid black;\n  padding: 4px 0;\n  font-size: 16px;\n}\n\n.home-button:hover {\n  cursor: pointer;\n  color: white;\n  background-color: #1e1e1e;\n}\n\nfooter {\n  padding: 25px 20px;\n  border-top: 3px solid black;\n  margin-top: 30px;\n}\n\n#sidebarList-items {\n  display: none;\n}\n\n@media (max-width: 760px) {\n  .main {\n    grid-template-columns: 40% 40%;\n  }\n\n  .nav-list {\n    display: none;\n  }\n\n  .hamburger-items1,\n.hamburger-items2,\n.hamburger-items3 {\n    width: 35px;\n    height: 5px;\n    background-color: black;\n    margin-top: 5px;\n  }\n\n  .hamburger-menu {\n    display: inline-block;\n  }\n\n  nav {\n    justify-content: flex-start;\n    padding-left: 8%;\n    height: 60px;\n    background-position-x: 90%;\n    background-position-y: center;\n    background-size: 100px;\n  }\n\n  .sidebar {\n    transform: translateX(-150%);\n    height: 100vh;\n    width: 100vw;\n    list-style: none;\n    background-color: rgba(32, 32, 35, 0.65);\n    color: white;\n    top: 0;\n    left: 0;\n  }\n\n  .sidebar-active {\n    display: flex;\n    position: fixed;\n    transform: translateX(0%);\n    transition: all ease-out 0.1s;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    z-index: 2;\n  }\n\n  #sidebarList-items {\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    padding-top: 20px;\n    gap: 15px;\n    height: 100vh;\n    width: 40%;\n    background-color: rgb(32, 32, 35);\n    z-index: 3;\n  }\n\n  .unvisible {\n    opacity: 0.3;\n  }\n\n  .empty {\n    width: 60%;\n  }\n}\n.popUp {\n  background: rgba(170, 180, 170, 0.4);\n  backdrop-filter: blur(3px);\n  position: fixed;\n  top: 0;\n  left: 0;\n  box-sizing: border-box;\n  width: 100vw;\n  height: 100vh;\n  display: none;\n  justify-content: center;\n  align-items: center;\n}\n\n.showFlex {\n  display: flex;\n}\n\n.popBox {\n  border: solid #000 1px;\n  background: #fff;\n  width: 400px;\n  min-height: 580px;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n}\n.popBox h2,\n.popBox h3 {\n  margin: 2px 0 0;\n  text-align: center;\n}\n\n.pokeLoad {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.pokeImgMain {\n  width: 200px;\n  margin: auto;\n}\n\n.pokeImg {\n  display: flex;\n}\n.pokeImg img {\n  width: 200px;\n  margin: auto;\n}\n\n.description {\n  padding: 0;\n  list-style: none;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-gap: 15px;\n}\n\n.descEl {\n  display: flex;\n  flex-direction: column;\n}\n\n.attName {\n  font-weight: bold;\n}\n\n.rsvList {\n  padding: 0;\n  max-height: 90px;\n  max-width: 100%;\n  list-style: none;\n  overflow-y: auto;\n}\n.rsvList li {\n  border-bottom: solid #eee 1px;\n}\n\n.reserve {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.reserve .input {\n  box-sizing: border-box;\n  padding: 5px;\n  margin-bottom: 8px;\n  width: 200px;\n  margin-right: auto;\n}\n\n.rsvBtn {\n  width: 100px;\n  font-size: 18px;\n  font-weight: bold;\n  background: none;\n}\n\n.close {\n  position: relative;\n  margin-left: auto;\n}\n.close :hover {\n  cursor: pointer;\n}\n\n.gg-close {\n  margin-left: auto;\n  display: block;\n  width: 30px;\n  height: 30px;\n}\n\n.gg-close::after,\n.gg-close::before {\n  content: \"\";\n  display: block;\n  box-sizing: border-box;\n  position: absolute;\n  width: 30px;\n  height: 3px;\n  background: currentColor;\n  transform: rotate(45deg);\n  border-radius: 5px;\n  top: 13px;\n}\n\n.gg-close::after {\n  transform: rotate(-45deg);\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAAA;EACE,SAAA;EACA,UAAA;EACA,2BAAA;AACF;;AAEA;EACE,aAAA;EACA,uBAAA;AACF;;AAEA;EACE,aAAA;AACF;;AAEA;EACE,gBAAA;EACA,iBAAA;EACA,eAAA;AACF;;AAEA;EACE,aAAA;EACA,uBAAA;EACA,eAAA;EACA,yDAAA;EACA,sBAAA;EACA,4BAAA;EACA,0BAAA;EACA,yBAAA;AACF;;AAEA;EACE,aAAA;EACA,sBAAA;EACA,SAAA;AACF;;AAEA;EACE,aAAA;EACA,kCAAA;EACA,cAAA;EACA,uBAAA;AACF;;AAEA;EACE,YAAA;EACA,cAAA;AACF;;AAEA;EACE,oBAAA;AACF;;AAEA;EACE,eAAA;AACF;;AAEA;EACE,sBAAA;EACA,uBAAA;EACA,cAAA;EACA,eAAA;AACF;;AAEA;EACE,eAAA;EACA,YAAA;EACA,yBAAA;AACF;;AAEA;EACE,kBAAA;EACA,2BAAA;EACA,gBAAA;AACF;;AAEA;EACE,aAAA;AACF;;AAEA;EACE;IACE,8BAAA;EACF;;EAEA;IACE,aAAA;EACF;;EAEA;;;IAGE,WAAA;IACA,WAAA;IACA,uBAAA;IACA,eAAA;EACF;;EAEA;IACE,qBAAA;EACF;;EAEA;IACE,2BAAA;IACA,gBAAA;IACA,YAAA;IACA,0BAAA;IACA,6BAAA;IACA,sBAAA;EACF;;EAEA;IACE,4BAAA;IACA,aAAA;IACA,YAAA;IACA,gBAAA;IACA,wCAAA;IACA,YAAA;IACA,MAAA;IACA,OAAA;EACF;;EAEA;IACE,aAAA;IACA,eAAA;IACA,yBAAA;IACA,6BAAA;IACA,MAAA;IACA,OAAA;IACA,QAAA;IACA,SAAA;IACA,UAAA;EACF;;EAEA;IACE,kBAAA;IACA,aAAA;IACA,sBAAA;IACA,iBAAA;IACA,SAAA;IACA,aAAA;IACA,UAAA;IACA,iCAAA;IACA,UAAA;EACF;;EAEA;IACE,YAAA;EACF;;EAEA;IACE,UAAA;EACF;AACF;AAEA;EACE,oCAAA;EACA,0BAAA;EACA,eAAA;EACA,MAAA;EACA,OAAA;EACA,sBAAA;EACA,YAAA;EACA,aAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AAAF;;AAGA;EACE,aAAA;AAAF;;AAGA;EACE,sBAAA;EACA,gBAAA;EACA,YAAA;EACA,iBAAA;EACA,aAAA;EACA,aAAA;EACA,sBAAA;EACA,8BAAA;EACA,mBAAA;AAAF;AAEE;;EAEE,eAAA;EACA,kBAAA;AAAJ;;AAIA;EACE,WAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;AADF;;AAIA;EACE,YAAA;EACA,YAAA;AADF;;AAIA;EACE,aAAA;AADF;AAGE;EACE,YAAA;EACA,YAAA;AADJ;;AAKA;EACE,UAAA;EACA,gBAAA;EACA,aAAA;EACA,sCAAA;EACA,cAAA;AAFF;;AAKA;EACE,aAAA;EACA,sBAAA;AAFF;;AAKA;EACE,iBAAA;AAFF;;AAKA;EACE,UAAA;EACA,gBAAA;EACA,eAAA;EACA,gBAAA;EACA,gBAAA;AAFF;AAIE;EACE,6BAAA;AAFJ;;AAMA;EACE,WAAA;EACA,aAAA;EACA,sBAAA;AAHF;AAKE;EACE,sBAAA;EACA,YAAA;EACA,kBAAA;EACA,YAAA;EACA,kBAAA;AAHJ;;AAOA;EACE,YAAA;EACA,eAAA;EACA,iBAAA;EACA,gBAAA;AAJF;;AAOA;EACE,kBAAA;EACA,iBAAA;AAJF;AAME;EACE,eAAA;AAJJ;;AAQA;EACE,iBAAA;EACA,cAAA;EACA,WAAA;EACA,YAAA;AALF;;AAQA;;EAEE,WAAA;EACA,cAAA;EACA,sBAAA;EACA,kBAAA;EACA,WAAA;EACA,WAAA;EACA,wBAAA;EACA,wBAAA;EACA,kBAAA;EACA,SAAA;AALF;;AAQA;EACE,yBAAA;AALF","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  font-family: Poppins, serif;\n}\n\n.nav-list-container {\n  display: flex;\n  justify-content: center;\n}\n\n.hamburger-menu {\n  display: none;\n}\n\n.nav-list {\n  list-style: none;\n  padding: 5px 20px;\n  font-size: 18px;\n}\n\nnav {\n  display: flex;\n  justify-content: center;\n  padding: 25px 0;\n  background-image: url(./assets/pokemonLogo.jpg);\n  background-size: 130px;\n  background-repeat: no-repeat;\n  background-position-x: 10%;\n  background-color: #f6f6f6;\n}\n\n.card {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.main {\n  display: grid;\n  grid-template-columns: 20% 20% 20%;\n  grid-gap: 30px;\n  justify-content: center;\n}\n\ni {\n  float: right;\n  color: #fe0000;\n}\n\n.likeCounts {\n  align-self: flex-end;\n}\n\ni:hover {\n  cursor: pointer;\n}\n\n.home-button {\n  background-color: #fff;\n  border: 3px solid black;\n  padding: 4px 0;\n  font-size: 16px;\n}\n\n.home-button:hover {\n  cursor: pointer;\n  color: white;\n  background-color: #1e1e1e;\n}\n\nfooter {\n  padding: 25px 20px;\n  border-top: 3px solid black;\n  margin-top: 30px;\n}\n\n#sidebarList-items {\n  display: none;\n}\n\n@media (max-width: 760px) {\n  .main {\n    grid-template-columns: 40% 40%;\n  }\n\n  .nav-list {\n    display: none;\n  }\n\n  .hamburger-items1,\n  .hamburger-items2,\n  .hamburger-items3 {\n    width: 35px;\n    height: 5px;\n    background-color: black;\n    margin-top: 5px;\n  }\n\n  .hamburger-menu {\n    display: inline-block;\n  }\n\n  nav {\n    justify-content: flex-start;\n    padding-left: 8%;\n    height: 60px;\n    background-position-x: 90%;\n    background-position-y: center;\n    background-size: 100px;\n  }\n\n  .sidebar {\n    transform: translateX(-150%);\n    height: 100vh;\n    width: 100vw;\n    list-style: none;\n    background-color: rgba(32, 32, 35, 65%);\n    color: white;\n    top: 0;\n    left: 0;\n  }\n\n  .sidebar-active {\n    display: flex;\n    position: fixed;\n    transform: translateX(0%);\n    transition: all ease-out 0.1s;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    z-index: 2;\n  }\n\n  #sidebarList-items {\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    padding-top: 20px;\n    gap: 15px;\n    height: 100vh;\n    width: 40%;\n    background-color: rgba(32, 32, 35);\n    z-index: 3;\n  }\n\n  .unvisible {\n    opacity: 0.3;\n  }\n\n  .empty {\n    width: 60%;\n  }\n}\n\n.popUp {\n  background: rgba(170, 180, 170, 0.4);\n  backdrop-filter: blur(3px);\n  position: fixed;\n  top: 0;\n  left: 0;\n  box-sizing: border-box;\n  width: 100vw;\n  height: 100vh;\n  display: none;\n  justify-content: center;\n  align-items: center;\n}\n\n.showFlex {\n  display: flex;\n}\n\n.popBox {\n  border: solid #000 1px;\n  background: #fff;\n  width: 400px;\n  min-height: 580px;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n\n  h2,\n  h3 {\n    margin: 2px 0 0;\n    text-align: center;\n  }\n}\n\n.pokeLoad {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.pokeImgMain {\n  width: 200px;\n  margin: auto;\n}\n\n.pokeImg {\n  display: flex;\n\n  img {\n    width: 200px;\n    margin: auto;\n  }\n}\n\n.description {\n  padding: 0;\n  list-style: none;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-gap: 15px;\n}\n\n.descEl {\n  display: flex;\n  flex-direction: column;\n}\n\n.attName {\n  font-weight: bold;\n}\n\n.rsvList {\n  padding: 0;\n  max-height: 90px;\n  max-width: 100%;\n  list-style: none;\n  overflow-y: auto;\n\n  li {\n    border-bottom: solid #eee 1px;\n  }\n}\n\n.reserve {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n\n  .input {\n    box-sizing: border-box;\n    padding: 5px;\n    margin-bottom: 8px;\n    width: 200px;\n    margin-right: auto;\n  }\n}\n\n.rsvBtn {\n  width: 100px;\n  font-size: 18px;\n  font-weight: bold;\n  background: none;\n}\n\n.close {\n  position: relative;\n  margin-left: auto;\n\n  :hover {\n    cursor: pointer;\n  }\n}\n\n.gg-close {\n  margin-left: auto;\n  display: block;\n  width: 30px;\n  height: 30px;\n}\n\n.gg-close::after,\n.gg-close::before {\n  content: \"\";\n  display: block;\n  box-sizing: border-box;\n  position: absolute;\n  width: 30px;\n  height: 3px;\n  background: currentColor;\n  transform: rotate(45deg);\n  border-radius: 5px;\n  top: 13px;\n}\n\n.gg-close::after {\n  transform: rotate(-45deg);\n}\n"],"sourceRoot":""}]);
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
  popUp.addEventListener('click', (e) => {
    if (e.target.classList.contains('popUp')) {
      popUp.classList = 'popUp';
    }
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

      rsvForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const rsvInputs = rsvForm.querySelectorAll('*');

        if (type === 'Comment') {
          rsvList.innerHTML += `<li>${date.toISOString().split('T')[0]} ${formName.value}: ${formMessage.value}</li>`;
          (0,_APIcall_js__WEBPACK_IMPORTED_MODULE_2__.postComment)(poke.name, formName.value, formMessage.value);
          rsvForm.reset();
        } else if (
          (0,_rsvFormVal_js__WEBPACK_IMPORTED_MODULE_1__["default"])(rsvInputs[2].value, rsvForm, 2)
          && (0,_rsvFormVal_js__WEBPACK_IMPORTED_MODULE_1__["default"])(rsvInputs[3].value, rsvForm, 3)) {
          rsvList.innerHTML += `<li>${formDateStart.value} - ${formDateEnd.value} by ${formName.value}</li>`;
          (0,_APIcall_js__WEBPACK_IMPORTED_MODULE_2__.postReservation)(poke.name, formName.value, formDateStart.value, formDateEnd.value);
          rsvForm.reset();
        }

        ReservTitle.querySelector('.rsvCount').innerHTML = rsvList.getElementsByTagName('li').length;
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkDate);


/***/ }),

/***/ "./src/assets/pokemonLogo.jpg":
/*!************************************!*\
  !*** ./src/assets/pokemonLogo.jpg ***!
  \************************************/
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
      // if (i !== 0 && i !== 1 && i !== 2) {
      card.setAttribute('data-aos', 'fade-right');
      // }
      card.className = 'card';
      card.innerHTML = `
      <img class="pokeImgMain" src="${json2.sprites.front_default}"></img>
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
      heartIcon.addEventListener('mousedown', () => {
        heartIcon.style.transform = 'scale(.7)';
        heartIcon.classList.add('fas');
      });
      heartIcon.addEventListener('mouseup', () => {
        heartIcon.style.transform = 'scale(1)';
        heartIcon.classList.remove('fas');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sT0FBTyxVQUFVLFVBQVUsV0FBVyxVQUFVLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLEtBQUssV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLE1BQU0sVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxL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dXJjZXMiOlsid2VicGFjazovL2thbmJhbmJvYXJkLy4vc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8va2FuYmFuYm9hcmQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2thbmJhbmJvYXJkLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9rYW5iYW5ib2FyZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2thbmJhbmJvYXJkLy4vc3JjL3N0eWxlLnNjc3M/NzViYSIsIndlYnBhY2s6Ly9rYW5iYW5ib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9rYW5iYW5ib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8va2FuYmFuYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8va2FuYmFuYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8va2FuYmFuYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9rYW5iYW5ib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2thbmJhbmJvYXJkLy4vc3JjL21vZHVsZXMvQVBJY2FsbC5qcyIsIndlYnBhY2s6Ly9rYW5iYW5ib2FyZC8uL3NyYy9tb2R1bGVzL2NyZWF0ZVBvcHVwLmpzIiwid2VicGFjazovL2thbmJhbmJvYXJkLy4vc3JjL21vZHVsZXMvZGVzY3JpcHQuanMiLCJ3ZWJwYWNrOi8va2FuYmFuYm9hcmQvLi9zcmMvbW9kdWxlcy9sb2FkUG9rZS5qcyIsIndlYnBhY2s6Ly9rYW5iYW5ib2FyZC8uL3NyYy9tb2R1bGVzL3Bva2VBcGkuanMiLCJ3ZWJwYWNrOi8va2FuYmFuYm9hcmQvLi9zcmMvbW9kdWxlcy9yc3ZGb3JtVmFsLmpzIiwid2VicGFjazovL2thbmJhbmJvYXJkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2thbmJhbmJvYXJkL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2thbmJhbmJvYXJkL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9rYW5iYW5ib2FyZC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2thbmJhbmJvYXJkL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8va2FuYmFuYm9hcmQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9rYW5iYW5ib2FyZC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9rYW5iYW5ib2FyZC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9rYW5iYW5ib2FyZC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvcG9rZW1vbkxvZ28uanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnMsIHNlcmlmO1xcbn1cXG5cXG4ubmF2LWxpc3QtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmhhbWJ1cmdlci1tZW51IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5uYXYtbGlzdCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogNXB4IDIwcHg7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbm5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAyNXB4IDA7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMzBweDtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDEwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XFxufVxcblxcbi5jYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ubWFpbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMCUgMjAlIDIwJTtcXG4gIGdyaWQtZ2FwOiAzMHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbmkge1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgY29sb3I6ICNmZTAwMDA7XFxufVxcblxcbi5saWtlQ291bnRzIHtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbn1cXG5cXG5pOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmhvbWUtYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcXG4gIHBhZGRpbmc6IDRweCAwO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4uaG9tZS1idXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFlMWUxZTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIHBhZGRpbmc6IDI1cHggMjBweDtcXG4gIGJvcmRlci10b3A6IDNweCBzb2xpZCBibGFjaztcXG4gIG1hcmdpbi10b3A6IDMwcHg7XFxufVxcblxcbiNzaWRlYmFyTGlzdC1pdGVtcyB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNzYwcHgpIHtcXG4gIC5tYWluIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MCUgNDAlO1xcbiAgfVxcblxcbiAgLm5hdi1saXN0IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIC5oYW1idXJnZXItaXRlbXMxLFxcbi5oYW1idXJnZXItaXRlbXMyLFxcbi5oYW1idXJnZXItaXRlbXMzIHtcXG4gICAgd2lkdGg6IDM1cHg7XFxuICAgIGhlaWdodDogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgfVxcblxcbiAgLmhhbWJ1cmdlci1tZW51IHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgfVxcblxcbiAgbmF2IHtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDglO1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogOTAlO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDBweDtcXG4gIH1cXG5cXG4gIC5zaWRlYmFyIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xNTAlKTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMyLCAzMiwgMzUsIDAuNjUpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gIH1cXG5cXG4gIC5zaWRlYmFyLWFjdGl2ZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2Utb3V0IDAuMXM7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgei1pbmRleDogMjtcXG4gIH1cXG5cXG4gICNzaWRlYmFyTGlzdC1pdGVtcyB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XFxuICAgIGdhcDogMTVweDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDQwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMyLCAzMiwgMzUpO1xcbiAgICB6LWluZGV4OiAzO1xcbiAgfVxcblxcbiAgLnVudmlzaWJsZSB7XFxuICAgIG9wYWNpdHk6IDAuMztcXG4gIH1cXG5cXG4gIC5lbXB0eSB7XFxuICAgIHdpZHRoOiA2MCU7XFxuICB9XFxufVxcbi5wb3BVcCB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDE3MCwgMTgwLCAxNzAsIDAuNCk7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zaG93RmxleCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ucG9wQm94IHtcXG4gIGJvcmRlcjogc29saWQgIzAwMCAxcHg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgbWluLWhlaWdodDogNTgwcHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ucG9wQm94IGgyLFxcbi5wb3BCb3ggaDMge1xcbiAgbWFyZ2luOiAycHggMCAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucG9rZUxvYWQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wb2tlSW1nTWFpbiB7XFxuICB3aWR0aDogMjAwcHg7XFxuICBtYXJnaW46IGF1dG87XFxufVxcblxcbi5wb2tlSW1nIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5wb2tlSW1nIGltZyB7XFxuICB3aWR0aDogMjAwcHg7XFxuICBtYXJnaW46IGF1dG87XFxufVxcblxcbi5kZXNjcmlwdGlvbiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjtcXG4gIGdyaWQtZ2FwOiAxNXB4O1xcbn1cXG5cXG4uZGVzY0VsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uYXR0TmFtZSB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnJzdkxpc3Qge1xcbiAgcGFkZGluZzogMDtcXG4gIG1heC1oZWlnaHQ6IDkwcHg7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuLnJzdkxpc3QgbGkge1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgI2VlZSAxcHg7XFxufVxcblxcbi5yZXNlcnZlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5yZXNlcnZlIC5pbnB1dCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG5cXG4ucnN2QnRuIHtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG59XFxuXFxuLmNsb3NlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG4uY2xvc2UgOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmdnLWNsb3NlIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMzBweDtcXG59XFxuXFxuLmdnLWNsb3NlOjphZnRlcixcXG4uZ2ctY2xvc2U6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiAzcHg7XFxuICBiYWNrZ3JvdW5kOiBjdXJyZW50Q29sb3I7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB0b3A6IDEzcHg7XFxufVxcblxcbi5nZy1jbG9zZTo6YWZ0ZXIge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4v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LGFBQUE7RUFDQSxzQkFBQTtBQUhGO0FBS0U7RUFDRSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUhKOztBQU9BO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBSkY7O0FBT0E7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0FBSkY7QUFNRTtFQUNFLGVBQUE7QUFKSjs7QUFRQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBTEY7O0FBUUE7O0VBRUUsV0FBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FBTEY7O0FBUUE7RUFDRSx5QkFBQTtBQUxGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zLCBzZXJpZjtcXG59XFxuXFxuLm5hdi1saXN0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5oYW1idXJnZXItbWVudSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubmF2LWxpc3Qge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDVweCAyMHB4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG5uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMjVweCAwO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vYXNzZXRzL3Bva2Vtb25Mb2dvLmpwZyk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEzMHB4O1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb24teDogMTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcXG59XFxuXFxuLmNhcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5tYWluIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwJSAyMCUgMjAlO1xcbiAgZ3JpZC1nYXA6IDMwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuaSB7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBjb2xvcjogI2ZlMDAwMDtcXG59XFxuXFxuLmxpa2VDb3VudHMge1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxufVxcblxcbmk6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaG9tZS1idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xcbiAgcGFkZGluZzogNHB4IDA7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbi5ob21lLWJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUxZTFlO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgcGFkZGluZzogMjVweCAyMHB4O1xcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkIGJsYWNrO1xcbiAgbWFyZ2luLXRvcDogMzBweDtcXG59XFxuXFxuI3NpZGViYXJMaXN0LWl0ZW1zIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjBweCkge1xcbiAgLm1haW4ge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQwJSA0MCU7XFxuICB9XFxuXFxuICAubmF2LWxpc3Qge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLmhhbWJ1cmdlci1pdGVtczEsXFxuICAuaGFtYnVyZ2VyLWl0ZW1zMixcXG4gIC5oYW1idXJnZXItaXRlbXMzIHtcXG4gICAgd2lkdGg6IDM1cHg7XFxuICAgIGhlaWdodDogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgfVxcblxcbiAgLmhhbWJ1cmdlci1tZW51IHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgfVxcblxcbiAgbmF2IHtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDglO1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogOTAlO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDBweDtcXG4gIH1cXG5cXG4gIC5zaWRlYmFyIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xNTAlKTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMyLCAzMiwgMzUsIDY1JSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgfVxcblxcbiAgLnNpZGViYXItYWN0aXZlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1vdXQgMC4xcztcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgfVxcblxcbiAgI3NpZGViYXJMaXN0LWl0ZW1zIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogNDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMyLCAzMiwgMzUpO1xcbiAgICB6LWluZGV4OiAzO1xcbiAgfVxcblxcbiAgLnVudmlzaWJsZSB7XFxuICAgIG9wYWNpdHk6IDAuMztcXG4gIH1cXG5cXG4gIC5lbXB0eSB7XFxuICAgIHdpZHRoOiA2MCU7XFxuICB9XFxufVxcblxcbi5wb3BVcCB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDE3MCwgMTgwLCAxNzAsIDAuNCk7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zaG93RmxleCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ucG9wQm94IHtcXG4gIGJvcmRlcjogc29saWQgIzAwMCAxcHg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgbWluLWhlaWdodDogNTgwcHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgaDIsXFxuICBoMyB7XFxuICAgIG1hcmdpbjogMnB4IDAgMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcbn1cXG5cXG4ucG9rZUxvYWQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wb2tlSW1nTWFpbiB7XFxuICB3aWR0aDogMjAwcHg7XFxuICBtYXJnaW46IGF1dG87XFxufVxcblxcbi5wb2tlSW1nIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuXFxuICBpbWcge1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gIH1cXG59XFxuXFxuLmRlc2NyaXB0aW9uIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xcbiAgZ3JpZC1nYXA6IDE1cHg7XFxufVxcblxcbi5kZXNjRWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5hdHROYW1lIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ucnN2TGlzdCB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWF4LWhlaWdodDogOTBweDtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcblxcbiAgbGkge1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAjZWVlIDFweDtcXG4gIH1cXG59XFxuXFxuLnJlc2VydmUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gIC5pbnB1dCB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIH1cXG59XFxuXFxuLnJzdkJ0biB7XFxuICB3aWR0aDogMTAwcHg7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxufVxcblxcbi5jbG9zZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG5cXG4gIDpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG59XFxuXFxuLmdnLWNsb3NlIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMzBweDtcXG59XFxuXFxuLmdnLWNsb3NlOjphZnRlcixcXG4uZ2ctY2xvc2U6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiAzcHg7XFxuICBiYWNrZ3JvdW5kOiBjdXJyZW50Q29sb3I7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB0b3A6IDEzcHg7XFxufVxcblxcbi5nZy1jbG9zZTo6YWZ0ZXIge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBiYXNlVVJMID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL1JpemtpSTFxOWJEeURVSW95dThtJztcbmNvbnN0IGxpa2VzID0gJy9saWtlcyc7XG5jb25zdCBjb21tZW50cyA9ICcvY29tbWVudHMnO1xuY29uc3QgcmVzZXJ2YXRpb25zID0gJy9yZXNlcnZhdGlvbnMnO1xuXG5jb25zdCBpdGVtc1VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jzdkxpc3QnKTtcbmNvbnN0IHJzdkNvdW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JzdkNvdW50Jyk7XG5cbi8vIENSRUFURSBMSVxuY29uc3QgY3JlYXRlTGkgPSAodHlwZSwgaXRlbXMpID0+IHtcbiAgaXRlbXNVbC5pbm5lckhUTUwgPSAnJztcbiAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGxldCBpdGVtQ29udGFpbmVyID0gJyc7XG4gICAgaWYgKHR5cGUgPT09ICcvY29tbWVudHMnKSB7XG4gICAgICBpdGVtQ29udGFpbmVyID0gYDxsaT4ke2l0ZW0uY3JlYXRpb25fZGF0ZX0gJHtpdGVtLnVzZXJuYW1lfTogJHtpdGVtLmNvbW1lbnR9PC9saT5gO1xuICAgIH0gZWxzZSB7XG4gICAgICBpdGVtQ29udGFpbmVyID0gYDxsaT4ke2l0ZW0uZGF0ZV9zdGFydH0gLSAke2l0ZW0uZGF0ZV9lbmR9IGJ5ICR7aXRlbS51c2VybmFtZX08L2xpPmA7XG4gICAgfVxuICAgIGl0ZW1zVWwuaW5uZXJIVE1MICs9IGl0ZW1Db250YWluZXI7XG4gIH0pO1xufTtcblxuLy8gR0VUXG5jb25zdCBnZXRMaWtlcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2goKGJhc2VVUkwgKyBsaWtlcykpO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzdWx0LnRleHQoKTtcbiAgcmV0dXJuIEpTT04ucGFyc2UoZGF0YSk7XG59O1xuXG5jb25zdCBnZXRJbmZvID0gYXN5bmMgKGlkLCB0eXBlKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVSTH0ke3R5cGV9P2l0ZW1faWQ9JHtpZH1gKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgY29uc3QgcmVzdWx0ID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8vIFBPU1RcbmNvbnN0IHBvc3RMaWtlID0gYXN5bmMgKGlkKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goKGJhc2VVUkwgKyBsaWtlcyksIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgaXRlbV9pZDogaWQsXG4gICAgfSksXG4gIH0pO1xuXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gIHJldHVybiBkYXRhO1xufTtcblxuY29uc3QgcG9zdENvbW1lbnQgPSBhc3luYyAoaWQsIG15VXNlcm5hbWUsIG15Q29tbWVudCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKChiYXNlVVJMICsgY29tbWVudHMpLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIGl0ZW1faWQ6IGlkLFxuICAgICAgdXNlcm5hbWU6IG15VXNlcm5hbWUsXG4gICAgICBjb21tZW50OiBteUNvbW1lbnQsXG4gICAgfSksXG4gIH0pO1xuXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gIHJldHVybiBkYXRhO1xufTtcblxuY29uc3QgcG9zdFJlc2VydmF0aW9uID0gYXN5bmMgKGlkLCBteVVzZXJuYW1lLCBzdGFydERhdGUsIGVuZERhdGUpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgoYmFzZVVSTCArIHJlc2VydmF0aW9ucyksIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgaXRlbV9pZDogaWQsXG4gICAgICB1c2VybmFtZTogbXlVc2VybmFtZSxcbiAgICAgIGRhdGVfc3RhcnQ6IHN0YXJ0RGF0ZSxcbiAgICAgIGRhdGVfZW5kOiBlbmREYXRlLFxuICAgIH0pLFxuICB9KTtcblxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICByZXR1cm4gZGF0YTtcbn07XG5cbi8vIExPQUQgREFUQVxuY29uc3QgbG9hZERhdGEgPSAoaWQsIHR5cGUpID0+IHtcbiAgZ2V0SW5mbyhpZCwgdHlwZSkudGhlbigoaXRlbXMpID0+IHtcbiAgICByc3ZDb3VudC5pbm5lckhUTUwgPSBpdGVtcy5sZW5ndGg7XG4gICAgY3JlYXRlTGkodHlwZSwgaXRlbXMpO1xuICB9KTtcbn07XG5cbmNvbnN0IGxvYWRMaWtlcyA9IGFzeW5jIChpZCkgPT4ge1xuICBjb25zdCB0b3RhbExpa2VzID0gYXdhaXQgZ2V0TGlrZXMoKTtcbiAgY29uc3QgaXRlbUxpa2VzID0gdG90YWxMaWtlcy5maW5kKCh4KSA9PiB4Lml0ZW1faWQgPT09IGlkKTtcbiAgcmV0dXJuIGl0ZW1MaWtlcyAhPT0gdW5kZWZpbmVkID8gaXRlbUxpa2VzLmxpa2VzIDogMDtcbn07XG5cbmV4cG9ydCB7XG4gIGdldExpa2VzLCBnZXRJbmZvLCBwb3N0TGlrZSwgcG9zdENvbW1lbnQsIHBvc3RSZXNlcnZhdGlvbiwgbG9hZERhdGEsIGxvYWRMaWtlcyxcbn07IiwiY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNib2R5Jyk7XG5cbmNvbnN0IGNyZWF0ZVBvcHVwID0gKHR5cGUpID0+IHtcbiAgY29uc3QgcG9wVXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBwb3BVcC5jbGFzc0xpc3QgPSAncG9wVXAnO1xuICBwb3BVcC5pbm5lckhUTUwgPSBgPHNlY3Rpb24gY2xhc3M9XCJwb3BCb3hcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY2xvc2VcIj5cbiAgICAgIDxpIGNsYXNzPVwiZ2ctY2xvc2VcIj48L2k+XG4gICAgPC9kaXY+XG4gIDwvc2VjdGlvbj5gO1xuXG4gIC8vIEhpZGUgY2FyZFxuICBjb25zdCBjbG9zZSA9IHBvcFVwLnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZScpO1xuICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBwb3BVcC5jbGFzc0xpc3QgPSAncG9wVXAnO1xuICB9KTtcbiAgcG9wVXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3BvcFVwJykpIHtcbiAgICAgIHBvcFVwLmNsYXNzTGlzdCA9ICdwb3BVcCc7XG4gICAgfVxuICB9KTtcblxuICAvLyBMb2FkIENvbnRhaW5lclxuICBjb25zdCBsb2FkQ29udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsb2FkQ29udC5jbGFzc0xpc3QgPSAncG9rZUxvYWQnO1xuXG4gIC8vIEltYWdlXG4gIGNvbnN0IHBva2VJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwb2tlSW1hZ2UuY2xhc3NMaXN0ID0gJ3JzdkRpdiBwb2tlSW1nJztcbiAgcG9rZUltYWdlLmlubmVySFRNTCA9ICc8aDM+TG9hZGluZy4uLjwvaDM+JztcblxuICAvLyBEZXNjcmlwdFxuICBjb25zdCBwb2tlSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwb2tlSW5mby5jbGFzc0xpc3QgPSAncnN2RGl2IGluZm8nO1xuICBwb2tlSW5mby5pbm5lckhUTUwgPSBgPGgyIGNsYXNzPVwicG9rZU5hbWVcIj5XaG8gaXMgdGhhdCBwb2tlbW9uPzwvaDI+XG4gIDx1bCBjbGFzcz1cImRlc2NyaXB0aW9uXCI+TG9hZGluZy4uLjwvdWw+YDtcblxuICAvLyBSZXNlcnZhdGlvbnNcbiAgY29uc3QgcG9rZVJlc2VydiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwb2tlUmVzZXJ2LmNsYXNzTGlzdCA9ICdyc3ZEaXYgcmVzZXJ2YXRpb24nO1xuICBwb2tlUmVzZXJ2LmlubmVySFRNTCA9IGA8aDM+JHt0eXBlfXMgPHNwYW4gY2xhc3M9XCJyc3ZDb3VudFwiPigpPC9zcGFuPjwvaDM+XG4gICAgPHVsIGNsYXNzPVwicnN2TGlzdFwiPkxvYWRpbmcuLi48L3VsPmA7XG5cbiAgLy8gQXBlbmRkaW5nIGVsZW1lbnRzXG4gIHBvcFVwLnF1ZXJ5U2VsZWN0b3IoJ3NlY3Rpb24nKS5hcHBlbmRDaGlsZChsb2FkQ29udCk7XG4gIGxvYWRDb250LmFwcGVuZENoaWxkKHBva2VJbWFnZSk7XG4gIGxvYWRDb250LmFwcGVuZENoaWxkKHBva2VJbmZvKTtcbiAgbG9hZENvbnQuYXBwZW5kQ2hpbGQocG9rZVJlc2Vydik7XG4gIGJvZHkuYXBwZW5kQ2hpbGQocG9wVXApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUG9wdXA7XG4iLCJpbXBvcnQgZ2V0UG9rZSBmcm9tICcuL3Bva2VBcGkuanMnO1xuXG4vLyBUaGlzIGZ1bmN0aW9uIGZpbHRlciB0aGUgQXBpIGluZm9ybWF0aW9uXG5jb25zdCBnZXRQb2tlRGVzYyA9IGFzeW5jIChwb2tlSWQpID0+IHtcbiAgY29uc3QgcG9rZSA9IGF3YWl0IGdldFBva2UocG9rZUlkKTtcbiAgY29uc3QgcG9rZW1vbiA9IGF3YWl0IHtcbiAgICBpbWFnZTogcG9rZS5zcHJpdGVzLmZyb250X2RlZmF1bHQsXG4gICAgbmFtZTogcG9rZS5uYW1lLFxuICAgIHR5cGU6IHBva2UudHlwZXNbMF0udHlwZS5uYW1lLFxuICAgIGFiaWxpdGllczogcG9rZS5hYmlsaXRpZXNbMF0uYWJpbGl0eS5uYW1lLFxuICAgIGhlaWdodDogYCR7cG9rZS5oZWlnaHQgLyAxMH0gbWAsXG4gICAgd2VpZ2h0OiBgJHtwb2tlLndlaWdodCAvIDEwfSBrZ2AsXG4gIH07XG4gIHJldHVybiBwb2tlbW9uO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0UG9rZURlc2M7XG4iLCJpbXBvcnQgZ2V0UG9rZURlc2MgZnJvbSAnLi9kZXNjcmlwdC5qcyc7XG5pbXBvcnQgY2hlY2tEYXRlIGZyb20gJy4vcnN2Rm9ybVZhbC5qcyc7XG5pbXBvcnQgeyBnZXRJbmZvLCBwb3N0Q29tbWVudCwgcG9zdFJlc2VydmF0aW9uIH0gZnJvbSAnLi9BUEljYWxsLmpzJztcblxuY29uc3QgbG9hZFBvcHVwID0gKHBva2VJZCwgdHlwZSkgPT4ge1xuICBnZXRQb2tlRGVzYyhwb2tlSWQpXG4gICAgLnRoZW4oKHBva2UpID0+IHtcbiAgICAgIGNvbnN0IGxvYWRDb250ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBva2VMb2FkJyk7XG4gICAgICBsb2FkQ29udFswXS5pbm5lckhUTUwgPSAnJztcbiAgICAgIGxvYWRDb250WzFdLmlubmVySFRNTCA9ICcnO1xuXG4gICAgICAvLyBJbWFnZVxuICAgICAgY29uc3QgcG9rZUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBwb2tlSW1hZ2UuY2xhc3NMaXN0ID0gJ3JzdkRpdiBwb2tlSW1nJztcbiAgICAgIHBva2VJbWFnZS5pbm5lckhUTUwgPSBgPGltZyBzcmM9JHtwb2tlLmltYWdlfSBhbHQ9XCJwaWthY2h1XCI+YDtcblxuICAgICAgLy8gRGVzY3JpcHRcbiAgICAgIGNvbnN0IHBva2VJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBwb2tlSW5mby5jbGFzc0xpc3QgPSAncnN2RGl2IGluZm8nO1xuICAgICAgcG9rZUluZm8uaW5uZXJIVE1MID0gYFxuICAgICAgPGgyIGNsYXNzPVwicG9rZU5hbWVcIj4ke3Bva2UubmFtZX08L2gyPlxuICAgICAgPHVsIGNsYXNzPVwiZGVzY3JpcHRpb25cIj5cbiAgICAgICAgPGxpIGNsYXNzPVwiZGVzY0VsXCI+PHNwYW4gY2xhc3M9XCJhdHROYW1lXCI+VHlwZTwvc3Bhbj48c3BhbiBjbGFzcz1cImF0dFZhbHVlXCI+JHtwb2tlLnR5cGV9PC9zcGFuPjwvbGk+XG4gICAgICAgIDxsaSBjbGFzcz1cImRlc2NFbFwiPjxzcGFuIGNsYXNzPVwiYXR0TmFtZVwiPkFiaWxpdGllczwvc3Bhbj48c3BhbiBjbGFzcz1cImF0dFZhbHVlXCI+JHtwb2tlLmFiaWxpdGllc308L3NwYW4+PC9saT5cbiAgICAgICAgPGxpIGNsYXNzPVwiZGVzY0VsXCI+PHNwYW4gY2xhc3M9XCJhdHROYW1lXCI+SGVpZ2h0PC9zcGFuPjxzcGFuIGNsYXNzPVwiYXR0VmFsdWVcIj4ke3Bva2UuaGVpZ2h0fTwvc3Bhbj48L2xpPlxuICAgICAgICA8bGkgY2xhc3M9XCJkZXNjRWxcIj48c3BhbiBjbGFzcz1cImF0dE5hbWVcIj5XZWlnaHQ8L3NwYW4+PHNwYW4gY2xhc3M9XCJhdHRWYWx1ZVwiPiR7cG9rZS53ZWlnaHR9PC9zcGFuPjwvbGk+XG4gICAgICA8L3VsPlxuICAgICAgYDtcblxuICAgICAgLy8gUmVzZXJ2YXRpb25zXG4gICAgICBjb25zdCBwb2tlUmVzZXJ2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBwb2tlUmVzZXJ2LmNsYXNzTGlzdCA9ICdyc3ZEaXYgcmVzZXJ2YXRpb24nO1xuICAgICAgY29uc3QgUmVzZXJ2VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuXG4gICAgICBjb25zdCByc3ZMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgIHJzdkxpc3QuY2xhc3NOYW1lID0gJ3Jzdkxpc3QnO1xuXG4gICAgICBjb25zdCBpbmZvVHlwZSA9IHR5cGUgPT09ICdDb21tZW50JyA/ICcvY29tbWVudHMnIDogJy9yZXNlcnZhdGlvbnMnO1xuXG4gICAgICBnZXRJbmZvKHBva2UubmFtZSwgaW5mb1R5cGUpLnRoZW4oKGl0ZW1zKSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW1zQ291bnQgPSBpdGVtcy5sZW5ndGggIT09IHVuZGVmaW5lZCA/IGl0ZW1zLmxlbmd0aCA6IDA7XG4gICAgICAgIFJlc2VydlRpdGxlLmlubmVySFRNTCA9IGAke3R5cGV9cyAoPHNwYW4gY2xhc3M9XCJyc3ZDb3VudFwiPiR7aXRlbXNDb3VudH08L3NwYW4+KWA7XG4gICAgICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICBsZXQgaXRlbUNvbnRhaW5lciA9ICcnO1xuICAgICAgICAgIGlmIChpbmZvVHlwZSA9PT0gJy9jb21tZW50cycpIHtcbiAgICAgICAgICAgIGl0ZW1Db250YWluZXIgPSBgPGxpPiR7aXRlbS5jcmVhdGlvbl9kYXRlfSAke2l0ZW0udXNlcm5hbWV9OiAke2l0ZW0uY29tbWVudH08L2xpPmA7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGl0ZW1Db250YWluZXIgPSBgPGxpPiR7aXRlbS5kYXRlX3N0YXJ0fSAtICR7aXRlbS5kYXRlX2VuZH0gYnkgJHtpdGVtLnVzZXJuYW1lfTwvbGk+YDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcnN2TGlzdC5pbm5lckhUTUwgKz0gaXRlbUNvbnRhaW5lcjtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgcG9rZVJlc2Vydi5hcHBlbmRDaGlsZChSZXNlcnZUaXRsZSk7XG4gICAgICBwb2tlUmVzZXJ2LmFwcGVuZENoaWxkKHJzdkxpc3QpO1xuXG4gICAgICAvLyBGb3JtXG4gICAgICBjb25zdCByc3ZGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgICAgcnN2Rm9ybS5jbGFzc0xpc3QgPSAncnN2RGl2IHJlc2VydmUnO1xuXG4gICAgICBjb25zdCBmb3JtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgcnN2Rm9ybS5hcHBlbmRDaGlsZChmb3JtVGl0bGUpO1xuXG4gICAgICBjb25zdCBmb3JtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICBmb3JtTmFtZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2lucHV0Jyk7XG4gICAgICBmb3JtTmFtZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25hbWUnKTtcbiAgICAgIGZvcm1OYW1lLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgICBmb3JtTmFtZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnbmFtZScpO1xuICAgICAgZm9ybU5hbWUuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcbiAgICAgIGZvcm1OYW1lLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnWW91ciBOYW1lJyk7XG4gICAgICByc3ZGb3JtLmFwcGVuZENoaWxkKGZvcm1OYW1lKTtcblxuICAgICAgY29uc3QgZm9ybU1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgICAgZm9ybU1lc3NhZ2Uuc2V0QXR0cmlidXRlKCdjbGFzcycsICdpbnB1dCcpO1xuICAgICAgZm9ybU1lc3NhZ2Uuc2V0QXR0cmlidXRlKCdpZCcsICdtZXNzYWdlJyk7XG4gICAgICBmb3JtTWVzc2FnZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnbWVzc2FnZScpO1xuICAgICAgZm9ybU1lc3NhZ2Uuc2V0QXR0cmlidXRlKCdtYXhsZW5ndGgnLCAnMjUwJyk7XG4gICAgICBmb3JtTWVzc2FnZS5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpO1xuICAgICAgZm9ybU1lc3NhZ2Uuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdZb3VyIEluc2lnaHRzJyk7XG5cbiAgICAgIGNvbnN0IGZvcm1EYXRlU3RhcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgZm9ybURhdGVTdGFydC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2lucHV0Jyk7XG4gICAgICBmb3JtRGF0ZVN0YXJ0LnNldEF0dHJpYnV0ZSgnaWQnLCAnc3RhcnREYXRlJyk7XG4gICAgICBmb3JtRGF0ZVN0YXJ0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgICBmb3JtRGF0ZVN0YXJ0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdkYXRlU3RhcnQnKTtcbiAgICAgIGZvcm1EYXRlU3RhcnQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcbiAgICAgIGZvcm1EYXRlU3RhcnQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdTdGFydCBkYXRlIChtbS9kZC95eXl5KScpO1xuXG4gICAgICBjb25zdCBmb3JtRGF0ZUVuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICBmb3JtRGF0ZUVuZC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2lucHV0Jyk7XG4gICAgICBmb3JtRGF0ZUVuZC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2VuZERhdGUnKTtcbiAgICAgIGZvcm1EYXRlRW5kLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgICBmb3JtRGF0ZUVuZC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZGF0ZVN0YXJ0Jyk7XG4gICAgICBmb3JtRGF0ZUVuZC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpO1xuICAgICAgZm9ybURhdGVFbmQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdTdGFydCBkYXRlIChtbS9kZC95eXl5KScpO1xuXG4gICAgICBjb25zdCBmb3JtU3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgIGZvcm1TdWJtaXQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdyc3ZCdG4nKTtcbiAgICAgIGZvcm1TdWJtaXQuc2V0QXR0cmlidXRlKCdpZCcsICdyc3ZCdG4nKTtcbiAgICAgIGZvcm1TdWJtaXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuXG4gICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcblxuICAgICAgaWYgKHR5cGUgPT09ICdDb21tZW50Jykge1xuICAgICAgICBmb3JtVGl0bGUuaW5uZXJIVE1MID0gJ0FkZCBhIENvbW1lbnQnO1xuICAgICAgICByc3ZGb3JtLmFwcGVuZENoaWxkKGZvcm1NZXNzYWdlKTtcbiAgICAgICAgZm9ybVN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnQ29tbWVudCcpO1xuICAgICAgICBmb3JtU3VibWl0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnQ29tbWVudCcpO1xuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnUmVzZXJ2YXRpb24nKSB7XG4gICAgICAgIGZvcm1UaXRsZS5pbm5lckhUTUwgPSAnQWRkIGEgUmVzZXJ2YXRpb24nO1xuICAgICAgICByc3ZGb3JtLmFwcGVuZENoaWxkKGZvcm1EYXRlU3RhcnQpO1xuICAgICAgICByc3ZGb3JtLmFwcGVuZENoaWxkKGZvcm1EYXRlRW5kKTtcbiAgICAgICAgZm9ybVN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnUmVzZXJ2YXRpb24nKTtcbiAgICAgICAgZm9ybVN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ1Jlc2VydmUnKTtcbiAgICAgIH1cbiAgICAgIHJzdkZvcm0uYXBwZW5kQ2hpbGQoZm9ybVN1Ym1pdCk7XG5cbiAgICAgIHJzdkZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0IHJzdklucHV0cyA9IHJzdkZvcm0ucXVlcnlTZWxlY3RvckFsbCgnKicpO1xuXG4gICAgICAgIGlmICh0eXBlID09PSAnQ29tbWVudCcpIHtcbiAgICAgICAgICByc3ZMaXN0LmlubmVySFRNTCArPSBgPGxpPiR7ZGF0ZS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF19ICR7Zm9ybU5hbWUudmFsdWV9OiAke2Zvcm1NZXNzYWdlLnZhbHVlfTwvbGk+YDtcbiAgICAgICAgICBwb3N0Q29tbWVudChwb2tlLm5hbWUsIGZvcm1OYW1lLnZhbHVlLCBmb3JtTWVzc2FnZS52YWx1ZSk7XG4gICAgICAgICAgcnN2Rm9ybS5yZXNldCgpO1xuICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgIGNoZWNrRGF0ZShyc3ZJbnB1dHNbMl0udmFsdWUsIHJzdkZvcm0sIDIpXG4gICAgICAgICAgJiYgY2hlY2tEYXRlKHJzdklucHV0c1szXS52YWx1ZSwgcnN2Rm9ybSwgMykpIHtcbiAgICAgICAgICByc3ZMaXN0LmlubmVySFRNTCArPSBgPGxpPiR7Zm9ybURhdGVTdGFydC52YWx1ZX0gLSAke2Zvcm1EYXRlRW5kLnZhbHVlfSBieSAke2Zvcm1OYW1lLnZhbHVlfTwvbGk+YDtcbiAgICAgICAgICBwb3N0UmVzZXJ2YXRpb24ocG9rZS5uYW1lLCBmb3JtTmFtZS52YWx1ZSwgZm9ybURhdGVTdGFydC52YWx1ZSwgZm9ybURhdGVFbmQudmFsdWUpO1xuICAgICAgICAgIHJzdkZvcm0ucmVzZXQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIFJlc2VydlRpdGxlLnF1ZXJ5U2VsZWN0b3IoJy5yc3ZDb3VudCcpLmlubmVySFRNTCA9IHJzdkxpc3QuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2xpJykubGVuZ3RoO1xuICAgICAgfSk7XG5cbiAgICAgIGlmICh0eXBlID09PSAnQ29tbWVudCcpIHtcbiAgICAgICAgbG9hZENvbnRbMF0uYXBwZW5kQ2hpbGQocG9rZUltYWdlKTtcbiAgICAgICAgbG9hZENvbnRbMF0uYXBwZW5kQ2hpbGQocG9rZUluZm8pO1xuICAgICAgICBsb2FkQ29udFswXS5hcHBlbmRDaGlsZChwb2tlUmVzZXJ2KTtcbiAgICAgICAgbG9hZENvbnRbMF0uYXBwZW5kQ2hpbGQocnN2Rm9ybSk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdSZXNlcnZhdGlvbicpIHtcbiAgICAgICAgbG9hZENvbnRbMV0uYXBwZW5kQ2hpbGQocG9rZUltYWdlKTtcbiAgICAgICAgbG9hZENvbnRbMV0uYXBwZW5kQ2hpbGQocG9rZUluZm8pO1xuICAgICAgICBsb2FkQ29udFsxXS5hcHBlbmRDaGlsZChwb2tlUmVzZXJ2KTtcbiAgICAgICAgbG9hZENvbnRbMV0uYXBwZW5kQ2hpbGQocnN2Rm9ybSk7XG4gICAgICB9XG4gICAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2FkUG9wdXA7XG4iLCJjb25zdCBnZXRQb2tlID0gYXN5bmMgKHBva2VJZCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHBva2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlbW9uLyR7cG9rZUlkfS9gKTtcbiAgICBjb25zdCBsb2FkZWQgPSBhd2FpdCBwb2tlLmpzb24oKTtcbiAgICByZXR1cm4gbG9hZGVkO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGU7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldFBva2U7XG4iLCJjb25zdCBkYXRlRXJyb3IgPSAoZWxlbWVudCwgYm94KSA9PiB7XG4gIGNvbnN0IGRhdGVNc2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzbWFsbCcpO1xuICBkYXRlTXNnLmlubmVyVGV4dCA9ICcobW0vZGQveXl5eSkgT25seSBkYXRlcyBmcm9tIHRvZGF5IGFuZCBiZXlvbmQnO1xuICBkYXRlTXNnLnN0eWxlLmNzc1RleHQgPSAnY29sb3I6ICNDQzAwMDA7JztcbiAgZWxlbWVudC5pbnNlcnRCZWZvcmUoZGF0ZU1zZywgZWxlbWVudC5jaGlsZHJlbltib3hdKTtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgZWxlbWVudC5yZW1vdmVDaGlsZChkYXRlTXNnKTtcbiAgfSwgMzIwMCk7XG59O1xuXG5jb25zdCBjaGVja0RhdGUgPSAoZGF0ZUluLCBlbGVtZW50LCBib3gpID0+IHtcbiAgY29uc3QgcmUgPSAvXlxcZHsxLDJ9XFwvXFxkezEsMn1cXC9cXGR7NH0kLztcbiAgaWYgKCFkYXRlSW4ubWF0Y2gocmUpKSB7XG4gICAgZGF0ZUVycm9yKGVsZW1lbnQsIGJveCk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgZGF0ZSA9IGRhdGVJbi5zcGxpdCgnLycpO1xuICAgIGNvbnN0IHRvZGF5ID0gW25ldyBEYXRlKCkuZ2V0TW9udGgoKSArIDEsIG5ldyBEYXRlKCkuZ2V0RGF0ZSgpLCBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCldO1xuICAgIGlmIChOdW1iZXIoZGF0ZVsyXSkgPCB0b2RheVsyXSkge1xuICAgICAgZGF0ZUVycm9yKGVsZW1lbnQsIGJveCk7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIE51bWJlcihkYXRlWzJdKSA9PT0gdG9kYXlbMl1cbiAgICAgICYmIChOdW1iZXIoZGF0ZVswXSkgPCB0b2RheVswXSB8fCBOdW1iZXIoZGF0ZVswXSkgPiAxMikpIHtcbiAgICAgIGRhdGVFcnJvcihlbGVtZW50LCBib3gpO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBOdW1iZXIoZGF0ZVsyXSkgPT09IHRvZGF5WzJdXG4gICAgICAmJiBOdW1iZXIoZGF0ZVswXSkgPT09IHRvZGF5WzBdXG4gICAgICAmJiAoTnVtYmVyKGRhdGVbMV0pIDwgdG9kYXlbMV0gfHwgTnVtYmVyKGRhdGVbMV0pID4gMzEpKSB7XG4gICAgICBkYXRlRXJyb3IoZWxlbWVudCwgYm94KTtcbiAgICB9IGVsc2UgaWYgKE51bWJlcihkYXRlWzBdKSA+IDEyIHx8IE51bWJlcihkYXRlWzFdKSA+IDMxKSB7XG4gICAgICBkYXRlRXJyb3IoZWxlbWVudCwgYm94KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNoZWNrRGF0ZTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCAnLi9zdHlsZS5zY3NzJztcbmltcG9ydCB7IGxvYWRMaWtlcywgcG9zdExpa2UgfSBmcm9tICcuL21vZHVsZXMvQVBJY2FsbC5qcyc7XG5pbXBvcnQgY3JlYXRlUG9wdXAgZnJvbSAnLi9tb2R1bGVzL2NyZWF0ZVBvcHVwLmpzJztcbmltcG9ydCBsb2FkUG9wdXAgZnJvbSAnLi9tb2R1bGVzL2xvYWRQb2tlLmpzJztcblxuY3JlYXRlUG9wdXAoJ0NvbW1lbnQnKTtcbmNyZWF0ZVBvcHVwKCdSZXNlcnZhdGlvbicpO1xuXG5jb25zdCBnZXREYXRhID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb24vJyk7XG4gIGNvbnN0IGpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDE4OyBpICs9IDEpIHtcbiAgICBjb25zdCBnZXRJbWFnZSA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlMSA9IGF3YWl0IGZldGNoKGpzb24ucmVzdWx0c1tpXS51cmwpO1xuICAgICAgY29uc3QganNvbjIgPSBhd2FpdCByZXNwb25zZTEuanNvbigpO1xuICAgICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgLy8gaWYgKGkgIT09IDAgJiYgaSAhPT0gMSAmJiBpICE9PSAyKSB7XG4gICAgICBjYXJkLnNldEF0dHJpYnV0ZSgnZGF0YS1hb3MnLCAnZmFkZS1yaWdodCcpO1xuICAgICAgLy8gfVxuICAgICAgY2FyZC5jbGFzc05hbWUgPSAnY2FyZCc7XG4gICAgICBjYXJkLmlubmVySFRNTCA9IGBcbiAgICAgIDxpbWcgY2xhc3M9XCJwb2tlSW1nTWFpblwiIHNyYz1cIiR7anNvbjIuc3ByaXRlcy5mcm9udF9kZWZhdWx0fVwiPjwvaW1nPlxuICAgICAgPHA+JHtqc29uLnJlc3VsdHNbaV0ubmFtZX08aSBjbGFzcz1cImZhciBmYS1oZWFydFwiPjwvaT48L3A+XG4gICAgICA8cCBjbGFzcz1cImxpa2VDb3VudHNcIj5saWtlcyAkezB9PC9wPlxuICBgO1xuXG4gICAgICAvLyBCdXR0b25zIGZvciBjb21tZW50IGFuZCByZXNlcnZhdGlvblxuICAgICAgY29uc3QgY21udEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgY21udEJ0bi5jbGFzc0xpc3QgPSAnaG9tZS1idXR0b24gY29tbWVudC1idXR0b25zJztcbiAgICAgIGNtbnRCdG4ubmFtZSA9IGAke2pzb24ucmVzdWx0c1tpXS5uYW1lfWA7XG4gICAgICBjbW50QnRuLmlubmVyVGV4dCA9ICdDb21tZW50cyc7XG4gICAgICBjb25zdCByc3ZCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIHJzdkJ0bi5jbGFzc0xpc3QgPSAnaG9tZS1idXR0b24gcmVzZXJ2YXRpb24tYnV0dG9ucyc7XG4gICAgICByc3ZCdG4ubmFtZSA9IGAke2pzb24ucmVzdWx0c1tpXS5uYW1lfWA7XG4gICAgICByc3ZCdG4uaW5uZXJUZXh0ID0gJ1Jlc2VydmF0aW9ucyc7XG4gICAgICBjYXJkLmFwcGVuZENoaWxkKGNtbnRCdG4pO1xuICAgICAgY2FyZC5hcHBlbmRDaGlsZChyc3ZCdG4pO1xuXG4gICAgICAvLyBMaXN0ZW5lcnNcbiAgICAgIGNtbnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHBvcEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wb3BVcCcpO1xuICAgICAgICBwb3BCb3hbMF0uY2xhc3NMaXN0LmFkZCgnc2hvd0ZsZXgnKTtcbiAgICAgICAgbG9hZFBvcHVwKGNtbnRCdG4ubmFtZSwgJ0NvbW1lbnQnKTtcbiAgICAgIH0pO1xuXG4gICAgICByc3ZCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHBvcEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wb3BVcCcpO1xuICAgICAgICBwb3BCb3hbMV0uY2xhc3NMaXN0LmFkZCgnc2hvd0ZsZXgnKTtcbiAgICAgICAgbG9hZFBvcHVwKHJzdkJ0bi5uYW1lLCAnUmVzZXJ2YXRpb24nKTtcbiAgICAgIH0pO1xuXG4gICAgICBtYWluLmFwcGVuZENoaWxkKGNhcmQpO1xuICAgICAgY29uc3QgaGVhcnRJY29uID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcuZmFyJyk7XG4gICAgICBjb25zdCBsaWtlc0NvdW50ID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcubGlrZUNvdW50cycpO1xuICAgICAgY29uc3QgbGlrZXMgPSBhd2FpdCBsb2FkTGlrZXMoanNvbi5yZXN1bHRzW2ldLm5hbWUpO1xuICAgICAgbGV0IGV4dHJhTGlrZSA9IDA7XG4gICAgICBoZWFydEljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XG4gICAgICAgIGV4dHJhTGlrZSArPSAxO1xuICAgICAgICBsaWtlc0NvdW50LmlubmVySFRNTCA9IGBsaWtlcyAke2xpa2VzICsgZXh0cmFMaWtlfWA7XG4gICAgICAgIHBvc3RMaWtlKGpzb24ucmVzdWx0c1tpXS5uYW1lKTtcbiAgICAgIH0pO1xuICAgICAgaGVhcnRJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsICgpID0+IHtcbiAgICAgICAgaGVhcnRJY29uLnN0eWxlLnRyYW5zZm9ybSA9ICdzY2FsZSguNyknO1xuICAgICAgICBoZWFydEljb24uY2xhc3NMaXN0LmFkZCgnZmFzJyk7XG4gICAgICB9KTtcbiAgICAgIGhlYXJ0SWNvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKCkgPT4ge1xuICAgICAgICBoZWFydEljb24uc3R5bGUudHJhbnNmb3JtID0gJ3NjYWxlKDEpJztcbiAgICAgICAgaGVhcnRJY29uLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhcycpO1xuICAgICAgfSk7XG4gICAgICBsaWtlc0NvdW50LmlubmVySFRNTCA9IGBsaWtlcyAke2xpa2VzfWA7XG4gICAgfTtcbiAgICBnZXRJbWFnZSgpO1xuICB9XG59O1xuZ2V0RGF0YSgpO1xuXG4vL1xuY29uc3QgaGFtYnVyZ2VyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhhbWJ1cmdlci1tZW51Jyk7XG5cbmNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG51bC5pbm5lckhUTUwgPSBgXG4gIDx1bCBpZD1cInNpZGViYXJMaXN0LWl0ZW1zXCI+XG4gICAgPGxpPlNwYWNlc2hpcHM8L2xpPlxuICAgIDxsaSBjbGFzcz1cInVudmlzaWJsZVwiPlBsYW5ldHM8L2xpPlxuICAgIDxsaSBjbGFzcz1cInVudmlzaWJsZVwiPlJhY2VzPC9saT5cbiAgPC91bD5cbiAgPGRpdiBjbGFzcz1cImVtcHR5XCI+PC9kaXY+XG5gO1xudWwuY2xhc3NOYW1lID0gJ3NpZGViYXInO1xuY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbmF2Jyk7XG5uYXYuYXBwZW5kQ2hpbGQodWwpO1xuXG5jb25zdCBmaXJzdE1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1idG4nKTtcbmhhbWJ1cmdlckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgdWwuY2xhc3NMaXN0LmFkZCgnc2lkZWJhci1hY3RpdmUnKTtcbn0pO1xuXG5jb25zdCBlbXB0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbXB0eScpO1xuZW1wdHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIHVsLmNsYXNzTGlzdC5yZW1vdmUoJ3NpZGViYXItYWN0aXZlJyk7XG4gIGZpcnN0TWVudUJ0bi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9