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

/***/ "./src/Objects/PlaceForLevel.js":
/*!**************************************!*\
  !*** ./src/Objects/PlaceForLevel.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst spritePlaceForLevel = PIXI.Sprite.from(\"./img/placeForLevel.png\");\r\nspritePlaceForLevel.anchor.set(0.5);\r\nspritePlaceForLevel.scale.set(1);\r\nspritePlaceForLevel.x = 80;\r\nspritePlaceForLevel.y = 640;\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (spritePlaceForLevel);\r\n\n\n//# sourceURL=webpack://pixi/./src/Objects/PlaceForLevel.js?");

/***/ }),

/***/ "./src/Objects/arrowLeft.js":
/*!**********************************!*\
  !*** ./src/Objects/arrowLeft.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst spriteArrowLeft = PIXI.Sprite.from(\"./img/arrowLeft.png\");\r\nspriteArrowLeft.anchor.set(0.5);\r\nspriteArrowLeft.scale.set(1);\r\nspriteArrowLeft.x = 20;\r\nspriteArrowLeft.y = 635;\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (spriteArrowLeft);\r\n\n\n//# sourceURL=webpack://pixi/./src/Objects/arrowLeft.js?");

/***/ }),

/***/ "./src/Objects/arrowRight.js":
/*!***********************************!*\
  !*** ./src/Objects/arrowRight.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst spriteArrowRight = PIXI.Sprite.from(\"./img/arrowRight.png\");\r\nspriteArrowRight.anchor.set(0.5);\r\nspriteArrowRight.scale.set(1);\r\nspriteArrowRight.x = 390;\r\nspriteArrowRight.y = 635;\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (spriteArrowRight);\r\n\n\n//# sourceURL=webpack://pixi/./src/Objects/arrowRight.js?");

/***/ }),

/***/ "./src/Objects/backgroundNavBar.js":
/*!*****************************************!*\
  !*** ./src/Objects/backgroundNavBar.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ \"./src/constants.js\");\n\r\n\r\nconst spriteBackgroundNavBar = PIXI.Sprite.from(\"./img/backgroundNavBar.png\");\r\nspriteBackgroundNavBar.anchor.set(0.5);\r\nspriteBackgroundNavBar.scale.set(1.25);\r\nspriteBackgroundNavBar.x = _constants__WEBPACK_IMPORTED_MODULE_0__.WIDTH / 2;\r\nspriteBackgroundNavBar.y = _constants__WEBPACK_IMPORTED_MODULE_0__.HEIGHT / 1.07;\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (spriteBackgroundNavBar);\r\n\n\n//# sourceURL=webpack://pixi/./src/Objects/backgroundNavBar.js?");

/***/ }),

/***/ "./src/Objects/candies.js":
/*!********************************!*\
  !*** ./src/Objects/candies.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CandyAnim\": () => (/* binding */ CandyAnim),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"spriteCandies\": () => (/* binding */ spriteCandies)\n/* harmony export */ });\nconst spriteCandy1 = PIXI.Sprite.from(\"./img/candy1.png\");\r\nconst spriteCandy2 = PIXI.Sprite.from(\"./img/candy2.png\");\r\nconst spriteCandy3 = PIXI.Sprite.from(\"./img/candy3.png\");\r\nspriteCandy1.anchor.set(0.5);\r\nspriteCandy1.x = 200;\r\nspriteCandy1.y = 150;\r\nspriteCandy1.animationSpeed = 2 / 10;\r\n\r\nspriteCandy2.anchor.set(0.5);\r\nspriteCandy2.x = 200;\r\nspriteCandy2.y = 150;\r\nspriteCandy2.animationSpeed = 2 / 10;\r\n\r\nspriteCandy3.anchor.set(0.5);\r\nspriteCandy3.x = 200;\r\nspriteCandy3.y = 150;\r\nspriteCandy3.animationSpeed = 2 / 10;\r\n\r\nlet x = spriteCandy1.x;\r\nlet y = spriteCandy1.y;\r\nlet x1 = spriteCandy2.x;\r\nlet y1 = spriteCandy2.y;\r\nlet x2 = spriteCandy3.x;\r\nlet y2 = spriteCandy3.y;\r\n\r\nfunction animateCandyDown() {\r\n\tx = 200;\r\n\ty += 1;\r\n\tx1 = 200;\r\n\ty1 += 1;\r\n\tx2 = 200;\r\n\ty2 += 1;\r\n\tspriteCandy1.x = x;\r\n\tspriteCandy1.y = y;\r\n\r\n\tspriteCandy2.x = x;\r\n\tspriteCandy2.y = y;\r\n\r\n\tspriteCandy3.x = x;\r\n\tspriteCandy3.y = y;\r\n\r\n\tif (\r\n\t\tspriteCandy1.x == 290 &&\r\n\t\tspriteCandy1.y >= 400 &&\r\n\t\tspriteCandy2.x == 290 &&\r\n\t\tspriteCandy2.y >= 400 &&\r\n\t\tspriteCandy3.x == 290 &&\r\n\t\tspriteCandy3.y >= 400\r\n\t) {\r\n\t\treturn;\r\n\t}\r\n\trequestAnimationFrame(animateCandyDown);\r\n}\r\n\r\nconst spriteCandies = [spriteCandy1, spriteCandy2, spriteCandy3];\r\n\r\nconst CandyAnim = (stage, { onAnimationEnd, onAnimationNext }) => {\r\n\tstage.addChild(...spriteCandies);\r\n\tanimateCandyDown();\r\n\tsetTimeout(() => {\r\n\t\tstage.removeChild(...spriteCandies);\r\n\t\tonAnimationNext();\r\n\t\tsetTimeout(() => {\r\n\t\t\tonAnimationEnd();\r\n\t\t}, 2000);\r\n\t}, 4000);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ spriteCandies, CandyAnim });\r\n\n\n//# sourceURL=webpack://pixi/./src/Objects/candies.js?");

/***/ }),

/***/ "./src/Objects/candy.js":
/*!******************************!*\
  !*** ./src/Objects/candy.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ \"./src/constants.js\");\n\r\n\r\nconst spriteCandy = PIXI.Sprite.from(\"./img/candy.png\");\r\nspriteCandy.anchor.set(0.5);\r\nspriteCandy.x = _constants__WEBPACK_IMPORTED_MODULE_0__.WIDTH / 1.4;\r\nspriteCandy.y = _constants__WEBPACK_IMPORTED_MODULE_0__.HEIGHT / 1.7;\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (spriteCandy);\r\n\n\n//# sourceURL=webpack://pixi/./src/Objects/candy.js?");

/***/ }),

/***/ "./src/Objects/candyCount.js":
/*!***********************************!*\
  !*** ./src/Objects/candyCount.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst spriteCandyCount = PIXI.Sprite.from(\"./img/candyCount.png\");\r\nspriteCandyCount.anchor.set(0.5);\r\nspriteCandyCount.scale.set(1);\r\nspriteCandyCount.x = 340;\r\nspriteCandyCount.y = 20;\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (spriteCandyCount);\r\n\n\n//# sourceURL=webpack://pixi/./src/Objects/candyCount.js?");

/***/ }),

/***/ "./src/Objects/candyNumber.js":
/*!************************************!*\
  !*** ./src/Objects/candyNumber.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst spriteCandyNumber = PIXI.Sprite.from(\"./img/count0.png\");\r\nspriteCandyNumber.anchor.set(0.5);\r\nspriteCandyNumber.scale.set(1);\r\nspriteCandyNumber.x = 375;\r\nspriteCandyNumber.y = 20;\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (spriteCandyNumber);\r\n\n\n//# sourceURL=webpack://pixi/./src/Objects/candyNumber.js?");

/***/ }),

/***/ "./src/Objects/cat.js":
/*!****************************!*\
  !*** ./src/Objects/cat.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst spriteCat = PIXI.Sprite.from(\"./img/cat.1.png\");\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (spriteCat);\r\n\n\n//# sourceURL=webpack://pixi/./src/Objects/cat.js?");

/***/ }),

/***/ "./src/Objects/characterCat.js":
/*!*************************************!*\
  !*** ./src/Objects/characterCat.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ \"./src/constants.js\");\n\r\n\r\nlet characterCat = null;\r\n\r\nPIXI.Assets.load([\r\n\t\"./assets/spritesheet.json\",\r\n\t\"./assets/spritesheet.png\",\r\n]).then(() => {\r\n\tconst animations = PIXI.Assets.cache.get(\"./assets/spritesheet.json\").data\r\n\t\t.animations;\r\n\tconst catEats = [\r\n\t\t\"img/eatCat.1.png\",\r\n\t\t\"img/eatCat.2.png\",\r\n\t\t\"img/eatCat.3.png\",\r\n\t\t\"img/eatCat.4.png\",\r\n\t\t\"img/eatCat.5.png\",\r\n\t\t\"img/eatCat.6.png\",\r\n\t\t\"img/eatCat.7.png\",\r\n\t\t\"img/eatCat.8.png\",\r\n\t\t\"img/eatCat.9.png\",\r\n\t\t\"img/eatCat.10.png\",\r\n\t\t\"img/eatCat.11.png\",\r\n\t\t\"img/eatCat.12.png\",\r\n\t];\r\n\tcharacterCat = PIXI.AnimatedSprite.fromFrames(catEats);\r\n\r\n\t// configure + start animation:\r\n\tcharacterCat.animationSpeed = 1 / 10; // 6 fps\r\n\tcharacterCat.x = _constants__WEBPACK_IMPORTED_MODULE_0__.WIDTH / 2;\r\n\tcharacterCat.y = _constants__WEBPACK_IMPORTED_MODULE_0__.HEIGHT / 1.4;\r\n\tcharacterCat.anchor.set(0.5);\r\n\tcharacterCat.play();\r\n});\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (characterCat);\r\n\n\n//# sourceURL=webpack://pixi/./src/Objects/characterCat.js?");

/***/ }),

/***/ "./src/Objects/cursor.js":
/*!*******************************!*\
  !*** ./src/Objects/cursor.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ \"./src/constants.js\");\n\r\n\r\nconst spriteCursor = PIXI.Sprite.from(\"./img/cursor.png\");\r\nspriteCursor.anchor.set(0.5);\r\nspriteCursor.x = _constants__WEBPACK_IMPORTED_MODULE_0__.WIDTH / 1.6;\r\nspriteCursor.y = _constants__WEBPACK_IMPORTED_MODULE_0__.HEIGHT / 2.5;\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (spriteCursor);\r\n\n\n//# sourceURL=webpack://pixi/./src/Objects/cursor.js?");

/***/ }),

/***/ "./src/Objects/gap.js":
/*!****************************!*\
  !*** ./src/Objects/gap.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"onSpriteGapAnimation\": () => (/* binding */ onSpriteGapAnimation)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ \"./src/constants.js\");\n\r\n\r\nconst spriteGap = PIXI.Sprite.from(\"./img/gap.png\");\r\nspriteGap.anchor.set(0.5);\r\nspriteGap.x = _constants__WEBPACK_IMPORTED_MODULE_0__.WIDTH / 2;\r\nspriteGap.y = _constants__WEBPACK_IMPORTED_MODULE_0__.HEIGHT / 4;\r\n\r\nconst onSpriteGapAnimation = (stage) => {\r\n\tstage.addChild(spriteGap);\r\n\tsetTimeout(() => {\r\n\t\tstage.removeChild(spriteGap);\r\n\t}, 200);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ spriteGap, onSpriteGapAnimation });\r\n\n\n//# sourceURL=webpack://pixi/./src/Objects/gap.js?");

/***/ }),

/***/ "./src/Objects/insideStatusBar.js":
/*!****************************************!*\
  !*** ./src/Objects/insideStatusBar.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"onPointerOver\": () => (/* binding */ onPointerOver),\n/* harmony export */   \"spriteInsideStatusBar\": () => (/* binding */ spriteInsideStatusBar)\n/* harmony export */ });\n/* harmony import */ var _rope__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rope */ \"./src/Objects/rope.js\");\n/* harmony import */ var _gap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gap */ \"./src/Objects/gap.js\");\n/* harmony import */ var _candies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./candies */ \"./src/Objects/candies.js\");\n/* harmony import */ var _partGreenStar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./partGreenStar */ \"./src/Objects/partGreenStar.js\");\n\r\n\r\n\r\n\r\nconst spriteInsideStatusBar = PIXI.Sprite.from(\r\n\t\"./img/insideStatusBar.png\",\r\n);\r\nspriteInsideStatusBar.scale.set(1);\r\nspriteInsideStatusBar.interactive = true;\r\nspriteInsideStatusBar.x = 142;\r\nspriteInsideStatusBar.y = 343;\r\n\r\nconst onPointerOver = (stage) => {\r\n\tstage.addChild(_gap__WEBPACK_IMPORTED_MODULE_1__[\"default\"].spriteGap);\r\n\tsetTimeout(() => {\r\n\t\tstage.removeChild(_gap__WEBPACK_IMPORTED_MODULE_1__[\"default\"].spriteGap);\r\n\t}, 100);\r\n\tspriteInsideStatusBar.scale.x -= 0.2;\r\n\tif (spriteInsideStatusBar.scale.x < 0) {\r\n\t\tstage.removeChild(spriteInsideStatusBar);\r\n\t\t(0,_partGreenStar__WEBPACK_IMPORTED_MODULE_3__.onSplitStar)(stage);\r\n\t\t(0,_candies__WEBPACK_IMPORTED_MODULE_2__.CandyAnim)(stage, onAnimationEnd);\r\n\t\tstage.removeChild(_rope__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\n\t}\r\n};\r\n\n\n//# sourceURL=webpack://pixi/./src/Objects/insideStatusBar.js?");

/***/ }),

/***/ "./src/Objects/level1.js":
/*!*******************************!*\
  !*** ./src/Objects/level1.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst spriteLevel1 = PIXI.Sprite.from(\"./img/level1.png\");\r\nspriteLevel1.anchor.set(0.5);\r\nspriteLevel1.scale.set(1);\r\nspriteLevel1.x = 80;\r\nspriteLevel1.y = 640;\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (spriteLevel1);\r\n\n\n//# sourceURL=webpack://pixi/./src/Objects/level1.js?");

/***/ }),

/***/ "./src/Objects/navBar.js":
/*!*******************************!*\
  !*** ./src/Objects/navBar.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ \"./src/constants.js\");\n\r\n\r\nconst spriteNavBar = PIXI.Sprite.from(\"./img/navbar.png\");\r\nspriteNavBar.anchor.set(0.5);\r\nspriteNavBar.scale.set(1.3);\r\nspriteNavBar.x = _constants__WEBPACK_IMPORTED_MODULE_0__.WIDTH / 2;\r\nspriteNavBar.y = _constants__WEBPACK_IMPORTED_MODULE_0__.HEIGHT / 1.07;\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (spriteNavBar);\r\n\n\n//# sourceURL=webpack://pixi/./src/Objects/navBar.js?");

/***/ }),

/***/ "./src/Objects/partGreenStar.js":
/*!**************************************!*\
  !*** ./src/Objects/partGreenStar.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"onSplitStar\": () => (/* binding */ onSplitStar)\n/* harmony export */ });\nconst spriteLeftSideGreen = PIXI.Sprite.from(\"./img/leftSideGreen.png\");\r\nconst spriteRightSideGreen = PIXI.Sprite.from(\"./img/rightSideGreen.png\");\r\nspriteLeftSideGreen.anchor.set(0.5);\r\nspriteRightSideGreen.anchor.set(0.5);\r\nspriteLeftSideGreen.x = 150;\r\nspriteLeftSideGreen.y = 150;\r\nspriteRightSideGreen.x = 300;\r\nspriteRightSideGreen.y = 150;\r\nspriteLeftSideGreen.rotation += 0.3;\r\nspriteRightSideGreen.rotation -= 0.5;\r\n\r\nconst onSplitStar = (stage, onAnimationEnd) => {\r\n\tlet x = spriteLeftSideGreen.x;\r\n\tlet y = spriteLeftSideGreen.y;\r\n\tlet x1 = spriteRightSideGreen.x;\r\n\tlet y1 = spriteRightSideGreen.y;\r\n\r\n\tfunction animateGreenStar() {\r\n\t\tx -= 1;\r\n\t\ty -= 1;\r\n\t\tx1 += 1;\r\n\t\ty1 -= 1;\r\n\t\tspriteRightSideGreen.x = x1;\r\n\t\tspriteRightSideGreen.y = y1;\r\n\r\n\t\tspriteLeftSideGreen.x = x;\r\n\t\tspriteLeftSideGreen.y = y;\r\n\r\n\t\tif (\r\n\t\t\tspriteRightSideGreen.x >= 200 &&\r\n\t\t\tspriteRightSideGreen.y <= 145 &&\r\n\t\t\tspriteLeftSideGreen.x <= 200 &&\r\n\t\t\tspriteLeftSideGreen.y <= 145\r\n\t\t) {\r\n\t\t\tonAnimationEnd(spriteLeftSideGreen, spriteRightSideGreen);\r\n\r\n\t\t\treturn;\r\n\t\t}\r\n\t\trequestAnimationFrame(animateGreenStar);\r\n\t}\r\n\r\n\tstage.addChild(spriteLeftSideGreen, spriteRightSideGreen);\r\n\r\n\tanimateGreenStar();\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ spriteRightSideGreen, spriteLeftSideGreen, onSplitStar });\r\n\n\n//# sourceURL=webpack://pixi/./src/Objects/partGreenStar.js?");

/***/ }),

/***/ "./src/Objects/pulseCandy.js":
/*!***********************************!*\
  !*** ./src/Objects/pulseCandy.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _candy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./candy */ \"./src/Objects/candy.js\");\n\r\n\r\nconst pulseAnimationCandy = new PIXI.AnimatedSprite([\r\n\tPIXI.Texture.from(\"./img/candy_pulse.png\"),\r\n]);\r\n\r\n// Set the animation properties\r\npulseAnimationCandy.animationSpeed = 0.01;\r\npulseAnimationCandy.anchor.set(0.5);\r\npulseAnimationCandy.x = _candy__WEBPACK_IMPORTED_MODULE_0__[\"default\"].x;\r\npulseAnimationCandy.y = _candy__WEBPACK_IMPORTED_MODULE_0__[\"default\"].y;\r\n\r\n// Start the animation\r\npulseAnimationCandy.play();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pulseAnimationCandy);\r\n\n\n//# sourceURL=webpack://pixi/./src/Objects/pulseCandy.js?");

/***/ }),

/***/ "./src/Objects/pulseCharacterCat.js":
/*!******************************************!*\
  !*** ./src/Objects/pulseCharacterCat.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ \"./src/constants.js\");\n\r\n\r\nfunction pulseCharacterCat(stage) {\r\n\tPIXI.Assets.load([\"./spritesheetCat.json\", \"./spritesheet.png\"]).then(() => {\r\n\t\tconst animations = PIXI.Assets.cache.get(\"./spritesheetCat.json\").data\r\n\t\t\t.animations;\r\n\t\tconst capguyFrames = [\"img/cat.1.png\", \"img/cat.2.png\"];\r\n\t\tconst character = PIXI.AnimatedSprite.fromFrames(capguyFrames);\r\n\r\n\t\t// configure + start animation:\r\n\t\tcharacter.animationSpeed = 1 / 10; // 6 fps\r\n\t\tcharacter.x = _constants__WEBPACK_IMPORTED_MODULE_0__.WIDTH / 2;\r\n\t\tcharacter.y = _constants__WEBPACK_IMPORTED_MODULE_0__.HEIGHT / 1.4;\r\n\t\tcharacter.anchor.set(0.5);\r\n\t\tcharacter.play();\r\n\t\tstage.addChild(character);\r\n\t});\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pulseCharacterCat);\r\n\n\n//# sourceURL=webpack://pixi/./src/Objects/pulseCharacterCat.js?");

/***/ }),

/***/ "./src/Objects/pulseCursor.js":
/*!************************************!*\
  !*** ./src/Objects/pulseCursor.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _cursor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cursor */ \"./src/Objects/cursor.js\");\n\r\n\r\nconst pulseAnimation = new PIXI.AnimatedSprite([\r\n\tPIXI.Texture.from(\"./img/cursor_pulse.png\"),\r\n]);\r\n\r\n// Set the animation properties\r\npulseAnimation.animationSpeed = 0.01;\r\npulseAnimation.anchor.set(0.5);\r\npulseAnimation.x = _cursor__WEBPACK_IMPORTED_MODULE_0__[\"default\"].x;\r\npulseAnimation.y = _cursor__WEBPACK_IMPORTED_MODULE_0__[\"default\"].y;\r\n\r\n// Start the animation\r\npulseAnimation.play();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pulseAnimation);\r\n\n\n//# sourceURL=webpack://pixi/./src/Objects/pulseCursor.js?");

/***/ }),

/***/ "./src/Objects/rope.js":
/*!*****************************!*\
  !*** ./src/Objects/rope.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst spriteRope = PIXI.Sprite.from(\"./img/rope.png\");\r\nspriteRope.anchor.set(0.5);\r\nspriteRope.x = 205;\r\nspriteRope.y = 20;\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (spriteRope);\r\n\n\n//# sourceURL=webpack://pixi/./src/Objects/rope.js?");

/***/ }),

/***/ "./src/Objects/sprite.js":
/*!*******************************!*\
  !*** ./src/Objects/sprite.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ \"./src/constants.js\");\n\r\n\r\nconst sprite = PIXI.Sprite.from(\"./img/GreenStar.png\");\r\nsprite.anchor.set(0.5);\r\nsprite.x = _constants__WEBPACK_IMPORTED_MODULE_0__.WIDTH / 2;\r\nsprite.y = _constants__WEBPACK_IMPORTED_MODULE_0__.HEIGHT / 4;\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sprite);\r\n\n\n//# sourceURL=webpack://pixi/./src/Objects/sprite.js?");

/***/ }),

/***/ "./src/Objects/statusBar.js":
/*!**********************************!*\
  !*** ./src/Objects/statusBar.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ \"./src/constants.js\");\n\r\n\r\nconst spriteStatusBar = PIXI.Sprite.from(\"./img/statusBar.png\");\r\nspriteStatusBar.anchor.set(0.5);\r\nspriteStatusBar.x = _constants__WEBPACK_IMPORTED_MODULE_0__.WIDTH / 2;\r\nspriteStatusBar.y = _constants__WEBPACK_IMPORTED_MODULE_0__.HEIGHT / 1.95;\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (spriteStatusBar);\r\n\n\n//# sourceURL=webpack://pixi/./src/Objects/statusBar.js?");

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HEIGHT\": () => (/* binding */ HEIGHT),\n/* harmony export */   \"WIDTH\": () => (/* binding */ WIDTH)\n/* harmony export */ });\nconst WIDTH = 410;\r\nconst HEIGHT = 680;\r\n\n\n//# sourceURL=webpack://pixi/./src/constants.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _initApp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initApp */ \"./src/initApp.js\");\n/* harmony import */ var _Objects_arrowLeft__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Objects/arrowLeft */ \"./src/Objects/arrowLeft.js\");\n/* harmony import */ var _Objects_arrowRight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Objects/arrowRight */ \"./src/Objects/arrowRight.js\");\n/* harmony import */ var _Objects_backgroundNavBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Objects/backgroundNavBar */ \"./src/Objects/backgroundNavBar.js\");\n/* harmony import */ var _Objects_candies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Objects/candies */ \"./src/Objects/candies.js\");\n/* harmony import */ var _Objects_candy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Objects/candy */ \"./src/Objects/candy.js\");\n/* harmony import */ var _Objects_cat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Objects/cat */ \"./src/Objects/cat.js\");\n/* harmony import */ var _Objects_characterCat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Objects/characterCat */ \"./src/Objects/characterCat.js\");\n/* harmony import */ var _Objects_cursor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Objects/cursor */ \"./src/Objects/cursor.js\");\n/* harmony import */ var _Objects_gap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Objects/gap */ \"./src/Objects/gap.js\");\n/* harmony import */ var _Objects_insideStatusBar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Objects/insideStatusBar */ \"./src/Objects/insideStatusBar.js\");\n/* harmony import */ var _Objects_level1__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Objects/level1 */ \"./src/Objects/level1.js\");\n/* harmony import */ var _Objects_navBar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Objects/navBar */ \"./src/Objects/navBar.js\");\n/* harmony import */ var _Objects_partGreenStar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Objects/partGreenStar */ \"./src/Objects/partGreenStar.js\");\n/* harmony import */ var _Objects_PlaceForLevel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Objects/PlaceForLevel */ \"./src/Objects/PlaceForLevel.js\");\n/* harmony import */ var _Objects_pulseCandy__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Objects/pulseCandy */ \"./src/Objects/pulseCandy.js\");\n/* harmony import */ var _Objects_pulseCharacterCat__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Objects/pulseCharacterCat */ \"./src/Objects/pulseCharacterCat.js\");\n/* harmony import */ var _Objects_pulseCursor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Objects/pulseCursor */ \"./src/Objects/pulseCursor.js\");\n/* harmony import */ var _Objects_rope__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Objects/rope */ \"./src/Objects/rope.js\");\n/* harmony import */ var _Objects_sprite__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Objects/sprite */ \"./src/Objects/sprite.js\");\n/* harmony import */ var _Objects_statusBar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Objects/statusBar */ \"./src/Objects/statusBar.js\");\n/* harmony import */ var _Objects_candyCount__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Objects/candyCount */ \"./src/Objects/candyCount.js\");\n/* harmony import */ var _Objects_candyNumber__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Objects/candyNumber */ \"./src/Objects/candyNumber.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// Add the sprite to the PIXI stage\r\n_initApp__WEBPACK_IMPORTED_MODULE_0__[\"default\"].stage.addChild(\r\n\t_Objects_rope__WEBPACK_IMPORTED_MODULE_18__[\"default\"],\r\n\t_Objects_sprite__WEBPACK_IMPORTED_MODULE_19__[\"default\"],\r\n\t_Objects_cursor__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\r\n\t_Objects_candy__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\r\n\t_Objects_statusBar__WEBPACK_IMPORTED_MODULE_20__[\"default\"],\r\n\t_Objects_insideStatusBar__WEBPACK_IMPORTED_MODULE_10__.spriteInsideStatusBar,\r\n\t_Objects_backgroundNavBar__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\r\n\t_Objects_navBar__WEBPACK_IMPORTED_MODULE_12__[\"default\"],\r\n\t_Objects_arrowRight__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\r\n\t_Objects_arrowLeft__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\r\n\t_Objects_PlaceForLevel__WEBPACK_IMPORTED_MODULE_14__[\"default\"],\r\n\t_Objects_level1__WEBPACK_IMPORTED_MODULE_11__[\"default\"],\r\n\t_Objects_candyCount__WEBPACK_IMPORTED_MODULE_21__[\"default\"],\r\n\t_Objects_candyNumber__WEBPACK_IMPORTED_MODULE_22__[\"default\"],\r\n);\r\n\r\n// sprite.x = 0;\r\n// sprite.y = 0;\r\n\r\n// // create the animation\r\n// const destination = { x: 200, y: 350 }; // the destination point\r\n// const duration = 1000; // the duration of the animation in milliseconds\r\n\r\n// // create a tween to animate the sprite\r\n// const tween = PIXI.tweenManager.createTween(sprite);\r\n\r\n// // set the destination position of the sprite\r\n// tween.to(destination, duration);\r\n\r\n// // start the animation\r\n// tween.start();\r\n\r\n_Objects_sprite__WEBPACK_IMPORTED_MODULE_19__[\"default\"].interactive = true;\r\n\r\n// if (cheker === true) {\r\n// } else if (cheker === false) {\r\n// \tsprite.on(\"click\", handleClick);\r\n// }\r\n\r\n// sprite.on(\"click\", handleClick);\r\n(0,_Objects_pulseCharacterCat__WEBPACK_IMPORTED_MODULE_16__[\"default\"])(_initApp__WEBPACK_IMPORTED_MODULE_0__[\"default\"].stage);\r\nlet clicks = 0;\r\nfunction handleClick() {\r\n\t(0,_Objects_gap__WEBPACK_IMPORTED_MODULE_9__.onSpriteGapAnimation)(_initApp__WEBPACK_IMPORTED_MODULE_0__[\"default\"].stage);\r\n\tclicks++;\r\n\t_Objects_insideStatusBar__WEBPACK_IMPORTED_MODULE_10__.spriteInsideStatusBar.scale.x -= 0.2;\r\n\r\n\tif (clicks === 5) {\r\n\t\t// remove sprite\r\n\t\t_initApp__WEBPACK_IMPORTED_MODULE_0__[\"default\"].stage.removeChild(_Objects_sprite__WEBPACK_IMPORTED_MODULE_19__[\"default\"]);\r\n\t\t_initApp__WEBPACK_IMPORTED_MODULE_0__[\"default\"].stage.removeChild(_Objects_rope__WEBPACK_IMPORTED_MODULE_18__[\"default\"]);\r\n\t\t(0,_Objects_partGreenStar__WEBPACK_IMPORTED_MODULE_13__.onSplitStar)(_initApp__WEBPACK_IMPORTED_MODULE_0__[\"default\"].stage, (spriteLeftSideGreen, spriteRightSideGreen) => {\r\n\t\t\t_initApp__WEBPACK_IMPORTED_MODULE_0__[\"default\"].stage.removeChild(spriteLeftSideGreen, spriteRightSideGreen);\r\n\t\t});\r\n\r\n\t\t(0,_Objects_candies__WEBPACK_IMPORTED_MODULE_4__.CandyAnim)(_initApp__WEBPACK_IMPORTED_MODULE_0__[\"default\"].stage, {\r\n\t\t\tonAnimationNext: () => {\r\n\t\t\t\t_initApp__WEBPACK_IMPORTED_MODULE_0__[\"default\"].stage.addChild(_Objects_characterCat__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\r\n\t\t\t},\r\n\t\t\tonAnimationEnd: () => {\r\n\t\t\t\t_initApp__WEBPACK_IMPORTED_MODULE_0__[\"default\"].stage.removeChild(_Objects_characterCat__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\r\n\t\t\t},\r\n\t\t});\r\n\t}\r\n}\r\n_Objects_sprite__WEBPACK_IMPORTED_MODULE_19__[\"default\"].on(\"pointerover\", handleClick);\r\n_Objects_sprite__WEBPACK_IMPORTED_MODULE_19__[\"default\"].on(\"click\", handleClick);\r\n\r\n// Create the pulse animation\r\nconst pulse = gsap\r\n\t.timeline()\r\n\t.to(_Objects_sprite__WEBPACK_IMPORTED_MODULE_19__[\"default\"].scale, { x: 1.2, y: 1.2, duration: 0.2, ease: \"power2.out\" })\r\n\t.to(_Objects_sprite__WEBPACK_IMPORTED_MODULE_19__[\"default\"].scale, { x: 1, y: 1, duration: 0.2, ease: \"power2.in\" });\r\n\r\n// Add an event listener to the sprite\r\n_Objects_sprite__WEBPACK_IMPORTED_MODULE_19__[\"default\"].interactive = true;\r\n_Objects_sprite__WEBPACK_IMPORTED_MODULE_19__[\"default\"].on(\"click\", () => {\r\n\t// Start the pulse animation\r\n\tpulse.restart();\r\n});\r\n\r\n// Add the animated sprite to the stage\r\n_initApp__WEBPACK_IMPORTED_MODULE_0__[\"default\"].stage.addChild(_Objects_pulseCursor__WEBPACK_IMPORTED_MODULE_17__[\"default\"]);\r\n\r\n// Use the PIXI.Ticker to update the pulse animation\r\n_initApp__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ticker.add((delta) => {\r\n\t// Scale the sprite based on the sine wave of the elapsed time\r\n\t_Objects_cursor__WEBPACK_IMPORTED_MODULE_8__[\"default\"].scale.set(1 + Math.sin(performance.now() * 0.01) * 0.1);\r\n});\r\n\r\n// animation candy pulse\r\n\r\n// Add the animated sprite to the stage\r\n_initApp__WEBPACK_IMPORTED_MODULE_0__[\"default\"].stage.addChild(_Objects_pulseCandy__WEBPACK_IMPORTED_MODULE_15__[\"default\"]);\r\n\r\n// Use the PIXI.Ticker to update the pulse animation\r\n_initApp__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ticker.add((delta) => {\r\n\t// Scale the sprite based on the sine wave of the elapsed time\r\n\t_Objects_candy__WEBPACK_IMPORTED_MODULE_5__[\"default\"].scale.set(1 + Math.sin(performance.now() * 0.01) * 0.1);\r\n});\r\n\r\n// Start the PIXI app\r\n_initApp__WEBPACK_IMPORTED_MODULE_0__[\"default\"].start();\r\n\n\n//# sourceURL=webpack://pixi/./src/index.js?");

/***/ }),

/***/ "./src/initApp.js":
/*!************************!*\
  !*** ./src/initApp.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ \"./src/constants.js\");\n\r\n\r\n// Create a PIXI application\r\nconst app = new PIXI.Application({\r\n\twidth: _constants_js__WEBPACK_IMPORTED_MODULE_0__.WIDTH,\r\n\theight: _constants_js__WEBPACK_IMPORTED_MODULE_0__.HEIGHT,\r\n\tbackgroundColor: 0x1099bb,\r\n});\r\n\r\napp.renderer.view.style.position = \"absolute\";\r\napp.renderer.view.style.left = `${_constants_js__WEBPACK_IMPORTED_MODULE_0__.WIDTH / 2 - app.renderer.view.width / 2}px`;\r\napp.renderer.view.style.top = `${_constants_js__WEBPACK_IMPORTED_MODULE_0__.HEIGHT / 2 - app.renderer.view.height / 2}px`;\r\n// Add the PIXI canvas to the HTML document\r\ndocument.body.appendChild(app.view);\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app);\r\n\n\n//# sourceURL=webpack://pixi/./src/initApp.js?");

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