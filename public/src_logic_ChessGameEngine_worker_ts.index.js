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

/***/ "./src/constants/chess-weights.ts":
/*!****************************************!*\
  !*** ./src/constants/chess-weights.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PIECE_SQUARE_TABLES\": () => (/* binding */ PIECE_SQUARE_TABLES),\n/* harmony export */   \"PIECE_WEIGHTS\": () => (/* binding */ PIECE_WEIGHTS)\n/* harmony export */ });\n// values taken from https://github.com/thomasahle/sunfish/blob/master/sunfish.py\nconst PIECE_WEIGHTS = {\n    p: 100,\n    n: 280,\n    b: 320,\n    r: 479,\n    q: 929,\n    k: 9000,\n    k_endGame: 9000,\n};\n// white perspective, reverse for black perspective\nconst PIECE_SQUARE_TABLES = {\n    p: [\n        [100, 100, 100, 100, 105, 100, 100, 100],\n        [78, 83, 86, 73, 102, 82, 85, 90],\n        [7, 29, 21, 44, 40, 31, 44, 7],\n        [-17, 16, -2, 15, 14, 0, 15, -13],\n        [-26, 3, 10, 9, 6, 1, 0, -23],\n        [-22, 9, 5, -11, -10, -2, 3, -19],\n        [-31, 8, -7, -37, -36, -14, 3, -31],\n        [0, 0, 0, 0, 0, 0, 0, 0],\n    ],\n    n: [\n        [-66, -53, -75, -75, -10, -55, -58, -70],\n        [-3, -6, 100, -36, 4, 62, -4, -14],\n        [10, 67, 1, 74, 73, 27, 62, -2],\n        [24, 24, 45, 37, 33, 41, 25, 17],\n        [-1, 5, 31, 21, 22, 35, 2, 0],\n        [-18, 10, 13, 22, 18, 15, 11, -14],\n        [-23, -15, 2, 0, 2, 0, -23, -20],\n        [-74, -23, -26, -24, -19, -35, -22, -69],\n    ],\n    b: [\n        [-59, -78, -82, -76, -23, -107, -37, -50],\n        [-11, 20, 35, -42, -39, 31, 2, -22],\n        [-9, 39, -32, 41, 52, -10, 28, -14],\n        [25, 17, 20, 34, 26, 25, 15, 10],\n        [13, 10, 17, 23, 17, 16, 0, 7],\n        [14, 25, 24, 15, 8, 25, 20, 15],\n        [19, 20, 11, 6, 7, 6, 20, 16],\n        [-7, 2, -15, -12, -14, -15, -10, -10],\n    ],\n    r: [\n        [35, 29, 33, 4, 37, 33, 56, 50],\n        [55, 29, 56, 67, 55, 62, 34, 60],\n        [19, 35, 28, 33, 45, 27, 25, 15],\n        [0, 5, 16, 13, 18, -4, -9, -6],\n        [-28, -35, -16, -21, -13, -29, -46, -30],\n        [-42, -28, -42, -25, -25, -35, -26, -46],\n        [-53, -38, -31, -26, -29, -43, -44, -53],\n        [-30, -24, -18, 5, -2, -18, -31, -32],\n    ],\n    q: [\n        [6, 1, -8, -104, 69, 24, 88, 26],\n        [14, 32, 60, -10, 20, 76, 57, 24],\n        [-2, 43, 32, 60, 72, 63, 43, 2],\n        [1, -16, 22, 17, 25, 20, -13, -6],\n        [-14, -15, -2, -5, -1, -10, -20, -22],\n        [-30, -6, -13, -11, -16, -11, -16, -27],\n        [-36, -18, 0, -19, -15, -15, -21, -38],\n        [-39, -30, -31, -13, -31, -36, -34, -42],\n    ],\n    k: [\n        [4, 54, 47, -99, -99, 60, 83, -62],\n        [-32, 10, 55, 56, 56, 55, 10, 3],\n        [-62, 12, -57, 44, -67, 28, 37, -31],\n        [-55, 50, 11, -4, -19, 13, 0, -49],\n        [-55, -43, -52, -28, -51, -47, -8, -50],\n        [-47, -42, -43, -79, -64, -32, -29, -32],\n        [-4, 3, -14, -50, -57, -18, 13, 4],\n        [17, 30, -3, -14, 6, -1, 40, 18],\n    ],\n    k_endGame: [\n        [-50, -40, -30, -20, -20, -30, -40, -50],\n        [-30, -20, -10, 0, 0, -10, -20, -30],\n        [-30, -10, 20, 30, 30, 20, -10, -30],\n        [-30, -10, 30, 40, 40, 30, -10, -30],\n        [-30, -10, 30, 40, 40, 30, -10, -30],\n        [-30, -10, 20, 30, 30, 20, -10, -30],\n        [-30, -30, 0, 0, 0, 0, -30, -30],\n        [-50, -30, -30, -30, -30, -30, -30, -50],\n    ],\n};\n\n\n//# sourceURL=webpack://chess-3d/./src/constants/chess-weights.ts?");

/***/ }),

/***/ "./src/logic/ChessAi/ChessAi.ts":
/*!**************************************!*\
  !*** ./src/logic/ChessAi/ChessAi.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ChessAi\": () => (/* binding */ ChessAi)\n/* harmony export */ });\n/* harmony import */ var chess_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chess.js */ \"./node_modules/chess.js/chess.js\");\n/* harmony import */ var constants_chess_weights__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! constants/chess-weights */ \"./src/constants/chess-weights.ts\");\n/* harmony import */ var lodash_clonedeep__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash.clonedeep */ \"./node_modules/lodash.clonedeep/index.js\");\n/* harmony import */ var lodash_clonedeep__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_clonedeep__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var utils_chess__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/chess */ \"./src/utils/chess.ts\");\n\n\n\n\n// based on https://dev.to/zeyu2001/build-a-simple-chess-ai-in-javascript-18eg\nclass ChessAi {\n    constructor() {\n        this.prevSum = 0;\n        this.chessGame = new chess_js__WEBPACK_IMPORTED_MODULE_0__.Chess();\n    }\n    blackStartInit() {\n        this.aiSquareTables = this.reverseSquareTablesForBlack();\n        this.opponentSquareTables = lodash_clonedeep__WEBPACK_IMPORTED_MODULE_1___default()(constants_chess_weights__WEBPACK_IMPORTED_MODULE_2__.PIECE_SQUARE_TABLES);\n    }\n    whiteStartInit() {\n        this.aiSquareTables = lodash_clonedeep__WEBPACK_IMPORTED_MODULE_1___default()(constants_chess_weights__WEBPACK_IMPORTED_MODULE_2__.PIECE_SQUARE_TABLES);\n        this.opponentSquareTables = this.reverseSquareTablesForBlack();\n    }\n    reverseSquareTablesForBlack() {\n        const cloned = lodash_clonedeep__WEBPACK_IMPORTED_MODULE_1___default()(constants_chess_weights__WEBPACK_IMPORTED_MODULE_2__.PIECE_SQUARE_TABLES);\n        for (const value of Object.values(cloned)) {\n            value.reverse();\n        }\n        return cloned;\n    }\n    minimax(depth, sum, isMaximizingPlayer, alpha, beta) {\n        let maxVal = -Infinity;\n        let bestMove;\n        let minVal = +Infinity;\n        let currentMove;\n        const moves = this.chessGame.moves();\n        if (depth === 0 || moves.length === 0) {\n            return [null, sum];\n        }\n        for (const moveNotation of moves) {\n            currentMove = this.chessGame.move(moveNotation);\n            const newSum = this.evaluateBoard(currentMove, sum);\n            const [_, childValue] = this.minimax(depth - 1, newSum, !isMaximizingPlayer, alpha, beta);\n            this.chessGame.undo();\n            if (isMaximizingPlayer) {\n                if (childValue > maxVal) {\n                    maxVal = childValue;\n                    bestMove = currentMove;\n                }\n                alpha = Math.max(alpha, childValue);\n                if (beta <= alpha) {\n                    break;\n                }\n            }\n            else {\n                if (childValue < minVal) {\n                    minVal = childValue;\n                    bestMove = currentMove;\n                }\n                beta = Math.min(childValue, beta);\n                if (beta <= alpha) {\n                    break;\n                }\n            }\n        }\n        if (isMaximizingPlayer) {\n            return [bestMove, maxVal];\n        }\n        return [bestMove, minVal];\n    }\n    evaluateBoard(move, prevSum) {\n        let newSum = prevSum;\n        const { row: fromRow, column: fromColumn } = (0,utils_chess__WEBPACK_IMPORTED_MODULE_3__.getMatrixPosition)(move.from);\n        const { row: toRow, column: toColumn } = (0,utils_chess__WEBPACK_IMPORTED_MODULE_3__.getMatrixPosition)(move.to);\n        const { captured, color: moveColor, flags } = move;\n        let movedPiece = move.piece;\n        if (this.isEndGameKing(prevSum, movedPiece)) {\n            movedPiece = \"k_endGame\";\n        }\n        if (captured) {\n            if (this.isAiColor(moveColor)) {\n                newSum +=\n                    constants_chess_weights__WEBPACK_IMPORTED_MODULE_2__.PIECE_WEIGHTS[captured] +\n                        this.getOpponentValueFromSquareTable(captured, {\n                            row: toRow,\n                            column: toColumn,\n                        });\n            }\n            else {\n                newSum -=\n                    constants_chess_weights__WEBPACK_IMPORTED_MODULE_2__.PIECE_WEIGHTS[captured] +\n                        this.getAiValueFromSquareTable(captured, {\n                            row: toRow,\n                            column: toColumn,\n                        });\n            }\n        }\n        if ((0,utils_chess__WEBPACK_IMPORTED_MODULE_3__.isPromotionFlag)(flags)) {\n            const promoted = \"q\"; // for simplicity always promote to queen\n            if (this.isAiColor(moveColor)) {\n                newSum -=\n                    constants_chess_weights__WEBPACK_IMPORTED_MODULE_2__.PIECE_WEIGHTS[movedPiece] +\n                        this.getAiValueFromSquareTable(movedPiece, {\n                            row: fromRow,\n                            column: fromColumn,\n                        });\n                newSum +=\n                    constants_chess_weights__WEBPACK_IMPORTED_MODULE_2__.PIECE_WEIGHTS[promoted] +\n                        this.getAiValueFromSquareTable(promoted, {\n                            row: fromRow,\n                            column: fromColumn,\n                        });\n            }\n            else {\n                newSum +=\n                    constants_chess_weights__WEBPACK_IMPORTED_MODULE_2__.PIECE_WEIGHTS[movedPiece] +\n                        this.getAiValueFromSquareTable(movedPiece, {\n                            row: fromRow,\n                            column: fromColumn,\n                        });\n                newSum -=\n                    constants_chess_weights__WEBPACK_IMPORTED_MODULE_2__.PIECE_WEIGHTS[promoted] +\n                        this.getAiValueFromSquareTable(movedPiece, {\n                            row: toRow,\n                            column: toColumn,\n                        });\n            }\n        }\n        else {\n            if (this.isAiColor(moveColor)) {\n                newSum -= this.getAiValueFromSquareTable(movedPiece, {\n                    row: fromRow,\n                    column: fromColumn,\n                });\n                newSum += this.getAiValueFromSquareTable(movedPiece, {\n                    row: toRow,\n                    column: toColumn,\n                });\n            }\n            else {\n                newSum += this.getAiValueFromSquareTable(movedPiece, {\n                    row: fromRow,\n                    column: fromColumn,\n                });\n                newSum -= this.getAiValueFromSquareTable(movedPiece, {\n                    row: toRow,\n                    column: toColumn,\n                });\n            }\n        }\n        return newSum;\n    }\n    isAiColor(color) {\n        return color === this.color;\n    }\n    isEndGameKing(prevSum, movedPiece) {\n        return prevSum < -1500 && movedPiece === \"k\";\n    }\n    getOpponentValueFromSquareTable(piece, chessPosition) {\n        const { row, column } = chessPosition;\n        return this.opponentSquareTables[piece][row][column];\n    }\n    getAiValueFromSquareTable(piece, chessPosition) {\n        const { row, column } = chessPosition;\n        return this.aiSquareTables[piece][row][column];\n    }\n    isWhite() {\n        return this.color === \"w\";\n    }\n    isBlack() {\n        return this.color === \"b\";\n    }\n    init(color, fen) {\n        this.color = color;\n        this.chessGame.load(fen);\n        if (this.isBlack()) {\n            this.blackStartInit();\n            return;\n        }\n        this.whiteStartInit();\n    }\n    updateBoardWithPlayerMove(move) {\n        this.chessGame.move(move);\n        this.prevSum = this.evaluateBoard(move, this.prevSum);\n    }\n    updateChessEngineWithPromotion(payload) {\n        const { move, chessNotationPos, pieceType, color } = payload;\n        if (move) {\n            this.chessGame.move(move);\n        }\n        this.chessGame.remove(chessNotationPos);\n        this.chessGame.put({ type: pieceType, color }, chessNotationPos);\n        // related to bug https://github.com/jhlywa/chess.js/issues/250\n        this.chessGame.load(this.chessGame.fen());\n    }\n    calcAiMove() {\n        const [move, sum] = this.minimax(3, this.prevSum, true, -Infinity, +Infinity);\n        this.prevSum = sum;\n        this.chessGame.move(move);\n        return move;\n    }\n}\n\n\n//# sourceURL=webpack://chess-3d/./src/logic/ChessAi/ChessAi.ts?");

/***/ }),

/***/ "./src/logic/ChessGameEngine/worker.ts":
/*!*********************************************!*\
  !*** ./src/logic/ChessGameEngine/worker.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var logic_ChessAi_ChessAi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! logic/ChessAi/ChessAi */ \"./src/logic/ChessAi/ChessAi.ts\");\n\nconst chessAiManager = new logic_ChessAi_ChessAi__WEBPACK_IMPORTED_MODULE_0__.ChessAi();\naddEventListener(\"message\", (e) => {\n    const type = e.data.type;\n    switch (type) {\n        case \"init\":\n            chessAiManager.init(e.data.color, e.data.fen);\n            if (chessAiManager.isBlack()) {\n                return;\n            }\n            postMessage({\n                type: \"aiMovePerformed\",\n                aiMove: chessAiManager.calcAiMove(),\n            });\n            break;\n        case \"aiMove\":\n            chessAiManager.updateBoardWithPlayerMove(e.data.playerMove);\n            postMessage({\n                type: \"aiMovePerformed\",\n                aiMove: chessAiManager.calcAiMove(),\n            });\n            break;\n        case \"promote\":\n            chessAiManager.updateChessEngineWithPromotion(e.data);\n            break;\n        default:\n            return;\n    }\n});\n\n\n//# sourceURL=webpack://chess-3d/./src/logic/ChessGameEngine/worker.ts?");

/***/ }),

/***/ "./src/maps/ChessFieldColumns.ts":
/*!***************************************!*\
  !*** ./src/maps/ChessFieldColumns.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ChessFieldColumns\": () => (/* binding */ ChessFieldColumns)\n/* harmony export */ });\nconst ChessFieldColumns = {\n    a: 7,\n    b: 6,\n    c: 5,\n    d: 4,\n    e: 3,\n    f: 2,\n    g: 1,\n    h: 0,\n};\n\n\n//# sourceURL=webpack://chess-3d/./src/maps/ChessFieldColumns.ts?");

/***/ }),

/***/ "./src/maps/ChessFieldLetters.ts":
/*!***************************************!*\
  !*** ./src/maps/ChessFieldLetters.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ChessFieldLetters\": () => (/* binding */ ChessFieldLetters)\n/* harmony export */ });\nconst ChessFieldLetters = {\n    7: \"a\",\n    6: \"b\",\n    5: \"c\",\n    4: \"d\",\n    3: \"e\",\n    2: \"f\",\n    1: \"g\",\n    0: \"h\",\n};\n\n\n//# sourceURL=webpack://chess-3d/./src/maps/ChessFieldLetters.ts?");

/***/ }),

/***/ "./src/utils/chess.ts":
/*!****************************!*\
  !*** ./src/utils/chess.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getChessNotation\": () => (/* binding */ getChessNotation),\n/* harmony export */   \"getMatrixPosition\": () => (/* binding */ getMatrixPosition),\n/* harmony export */   \"getOppositeColor\": () => (/* binding */ getOppositeColor),\n/* harmony export */   \"isPiece\": () => (/* binding */ isPiece),\n/* harmony export */   \"isPromotionFlag\": () => (/* binding */ isPromotionFlag),\n/* harmony export */   \"isPromotionResult\": () => (/* binding */ isPromotionResult)\n/* harmony export */ });\n/* harmony import */ var maps_ChessFieldLetters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! maps/ChessFieldLetters */ \"./src/maps/ChessFieldLetters.ts\");\n/* harmony import */ var maps_ChessFieldColumns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! maps/ChessFieldColumns */ \"./src/maps/ChessFieldColumns.ts\");\n\n\nfunction isPiece(object) {\n    return !!object.chessPosition;\n}\nfunction isPromotionResult(result) {\n    return (typeof result === \"object\" && !!result.promotedPiece);\n}\nfunction getChessNotation(chessPosition) {\n    const { row, column } = chessPosition;\n    return `${maps_ChessFieldLetters__WEBPACK_IMPORTED_MODULE_0__.ChessFieldLetters[column]}${row + 1}`;\n}\nfunction getMatrixPosition(chessNotation) {\n    if (chessNotation.length > 2) {\n        console.error(\"Chess notation cannot be longer than 2\");\n        return;\n    }\n    const letter = chessNotation[0];\n    const row = parseInt(chessNotation[1], 10) - 1;\n    const column = maps_ChessFieldColumns__WEBPACK_IMPORTED_MODULE_1__.ChessFieldColumns[letter];\n    return { row, column };\n}\nfunction isPromotionFlag(flags) {\n    return flags.includes(\"p\");\n}\nfunction getOppositeColor(color) {\n    let newColor = \"b\";\n    if (color === \"b\") {\n        newColor = \"w\";\n    }\n    return newColor;\n}\n\n\n//# sourceURL=webpack://chess-3d/./src/utils/chess.ts?");

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
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	__webpack_require__.x = () => {
/******/ 		// Load entry module and return exports
/******/ 		// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_lodash_clonedeep_index_js-node_modules_chess_js_chess_js"], () => (__webpack_require__("./src/logic/ChessGameEngine/worker.ts")))
/******/ 		__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 		return __webpack_exports__;
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".index.js";
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
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
/******/ 	/* webpack/runtime/importScripts chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "already loaded"
/******/ 		var installedChunks = {
/******/ 			"src_logic_ChessGameEngine_worker_ts": 1
/******/ 		};
/******/ 		
/******/ 		// importScripts chunk loading
/******/ 		var installChunk = (data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			while(chunkIds.length)
/******/ 				installedChunks[chunkIds.pop()] = 1;
/******/ 			parentChunkLoadingFunction(data);
/******/ 		};
/******/ 		__webpack_require__.f.i = (chunkId, promises) => {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					importScripts(__webpack_require__.p + __webpack_require__.u(chunkId));
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkchess_3d"] = self["webpackChunkchess_3d"] || [];
/******/ 		var parentChunkLoadingFunction = chunkLoadingGlobal.push.bind(chunkLoadingGlobal);
/******/ 		chunkLoadingGlobal.push = installChunk;
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/startup chunk dependencies */
/******/ 	(() => {
/******/ 		var next = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			return __webpack_require__.e("vendors-node_modules_lodash_clonedeep_index_js-node_modules_chess_js_chess_js").then(next);
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	
/******/ })()
;