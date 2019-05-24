/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/parts/calc.js":
/*!******************************!*\
  !*** ./src/js/parts/calc.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function calc() {

}

module.exports = calc;

/***/ }),

/***/ "./src/js/parts/click-img.js":
/*!***********************************!*\
  !*** ./src/js/parts/click-img.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function clickImg() {

}

module.exports = clickImg;

/***/ }),

/***/ "./src/js/parts/form.js":
/*!******************************!*\
  !*** ./src/js/parts/form.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function form() {

}

module.exports = form;

/***/ }),

/***/ "./src/js/parts/modal-call.js":
/*!************************************!*\
  !*** ./src/js/parts/modal-call.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function modalCall() {

}

module.exports = modalCall;

/***/ }),

/***/ "./src/js/parts/modal-form.js":
/*!************************************!*\
  !*** ./src/js/parts/modal-form.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function modalForm() {

}

module.exports = modalForm;

/***/ }),

/***/ "./src/js/parts/modal-popup.js":
/*!*************************************!*\
  !*** ./src/js/parts/modal-popup.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function modalPopup() {

}

module.exports = modalPopup;

/***/ }),

/***/ "./src/js/parts/modal-visit.js":
/*!*************************************!*\
  !*** ./src/js/parts/modal-visit.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function modalVisit() {

    let delayPopup = 60000;

    function show() {
        let popup = document.querySelector('.popup'),
            close = document.querySelector('.popup_close');
            
        popup.style.display = 'block';
        document.body.style.overflow = 'hidden';

        // При клике на крестик форма становится невидимой
        close.addEventListener('click', () => {
            popup.style.display = 'none';             
            document.body.style.overflow = '';
        });

        // При клике на подложку форма становится невидимой
        popup.addEventListener('click', (event) => {
            let target = event.target,
                content = document.querySelector('.popup_content');
                
            if (!content.contains(target)) popup.style.display = 'none';

        });
    }
    
    setTimeout(show, delayPopup);
}

module.exports = modalVisit;

/***/ }),

/***/ "./src/js/parts/tabs-facing.js":
/*!*************************************!*\
  !*** ./src/js/parts/tabs-facing.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function tabsFasing() {

}

module.exports = tabsFasing;

/***/ }),

/***/ "./src/js/parts/tabs-window.js":
/*!*************************************!*\
  !*** ./src/js/parts/tabs-window.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function tabsWindow() {

}

module.exports = tabsWindow;

/***/ }),

/***/ "./src/js/parts/timer.js":
/*!*******************************!*\
  !*** ./src/js/parts/timer.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function timer () {

}

module.exports = timer;

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.addEventListener('DOMContentLoaded', function() {
    
    "use strict";
    let modalVisit = __webpack_require__(/*! ./parts/modal-visit.js */ "./src/js/parts/modal-visit.js"),
        modalPopup = __webpack_require__(/*! ./parts/modal-popup.js */ "./src/js/parts/modal-popup.js"),
        modalCall = __webpack_require__(/*! ./parts/modal-call.js */ "./src/js/parts/modal-call.js"),
        calc = __webpack_require__(/*! ./parts/calc.js */ "./src/js/parts/calc.js"),
        tabsWindow = __webpack_require__(/*! ./parts/tabs-window.js */ "./src/js/parts/tabs-window.js"),
        modalForm = __webpack_require__(/*! ./parts/modal-form.js */ "./src/js/parts/modal-form.js"),
        tabsFasing = __webpack_require__(/*! ./parts/tabs-facing.js */ "./src/js/parts/tabs-facing.js"),
        form = __webpack_require__(/*! ./parts/form.js */ "./src/js/parts/form.js"),
        timer = __webpack_require__(/*! ./parts/timer.js */ "./src/js/parts/timer.js"),
        clickImg = __webpack_require__(/*! ./parts/click-img.js */ "./src/js/parts/click-img.js");

    modalVisit();
    modalPopup();
    modalCall();
    calc(); 
    tabsWindow();
    modalForm();
    tabsFasing();
    form();
    timer();
    clickImg();
});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map