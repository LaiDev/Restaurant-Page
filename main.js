/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _initalload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initalload */ \"./src/initalload.js\");\n\n\n(0,_initalload__WEBPACK_IMPORTED_MODULE_0__.initalLoad)();\n\n\n//# sourceURL=webpack://resturantpage/./src/index.js?");

/***/ }),

/***/ "./src/initalload.js":
/*!***************************!*\
  !*** ./src/initalload.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initalLoad\": () => (/* binding */ initalLoad)\n/* harmony export */ });\nlet content = document.querySelector(\"#content\");\n\nfunction initalLoad() {\n\n    //Creates all the content on the main page when the site is first loaded\n    \n  const navBar = document.createElement(\"nav\");\n  content.append(navBar);\n  const leftNav = document.createElement(\"div\");\n  navBar.append(leftNav);\n  \n  const logo = document.createElement(\"a\");\n  logo.href = \"#\";\n  logo.innerHTML = \"Lai`Cafe\";\n  leftNav.append(logo);\n  const rightNav = document.createElement(\"div\");\n  rightNav.classList.add(\"rightNav\")\n  navBar.append(rightNav);\n  const menuBtn = document.createElement(\"a\");\n  menuBtn.innerText = \"Menu\";\n  menuBtn.href = \"#\"\n  rightNav.append(menuBtn);\n  const reviewsBtn = document.createElement(\"a\");\n  reviewsBtn.href = \"#\";\n  reviewsBtn.innerText = \"Reviews\";\n  rightNav.append(reviewsBtn);\n  const storyBtn = document.createElement(\"a\");\n  storyBtn.href = \"#\";\n  storyBtn.innerText = \"Our Story\";\n  rightNav.append(storyBtn);\n\n  const wrapper = document.createElement(\"div\");\n  wrapper.classList.add(\"wrapper\");\n  content.append(wrapper);\n\n  const title = document.createElement(\"h1\");\n  title.classList.add(\"title\")\n  title.innerText = \"Lai`Cafe\";\n  wrapper.append(title);\n\n  const description = document.createElement(\"h2\");\n  description.innerHTML = `Coffee & Sweets`;\n  wrapper.append(description);\n\n  const seeMenuBtn = document.createElement(\"button\");\n  seeMenuBtn.classList.add(\"menuBtn\")\n  seeMenuBtn.innerHTML = \"Our Menu\";\n  wrapper.append(seeMenuBtn);\n}\n\n\n//# sourceURL=webpack://resturantpage/./src/initalload.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;