module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/messages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/Messages/DetailMessages/DetailMessages.styles.ts":
/*!*************************************************************************!*\
  !*** ./src/components/Messages/DetailMessages/DetailMessages.styles.ts ***!
  \*************************************************************************/
/*! exports provided: MainWrapper, TableHeader, TableBody, BottomBorder, Messages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainWrapper", function() { return MainWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableHeader", function() { return TableHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableBody", function() { return TableBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomBorder", function() { return BottomBorder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Messages", function() { return Messages; });
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled */ "@emotion/styled");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_0__);

const MainWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default.a.div`
    display: inline-table;
    width: 100%;
    table {
        width: inherit;
    }

`;
const TableHeader = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default.a.div`
    background-color: #333;
    box-shadow: 0 0 10px #181818;
    height: fit-content;
    display: flex;
    justify-content: center;
    margin: auto auto;
    border-radius: .25em;
    h1 {
        font-size: 2em;
    }
`;
const TableBody = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default.a.div`
    width: 100%;
    height: 3em;
    margin: .5em auto .5em auto;
    p {
        line-height: 220%;
        margin-left: 2em;
        width: inherit;
    }
    :first-child {
        margin-top: 1em;
    }
`;
const BottomBorder = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default.a.div`
    border-bottom: .05em solid #444;
    margin: 0 auto;
    width: 65%;

    :last-child {
        
    }
`;
const Messages = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default.a.div`
    margin-top: 1em;
`;

/***/ }),

/***/ "./src/components/Messages/DetailMessages/DetailMessages.tsx":
/*!*******************************************************************!*\
  !*** ./src/components/Messages/DetailMessages/DetailMessages.tsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DetailMessages_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DetailMessages.styles */ "./src/components/Messages/DetailMessages/DetailMessages.styles.ts");

var _jsxFileName = "C:\\Users\\vsamsonov\\Desktop\\SocialWeb\\src\\components\\Messages\\DetailMessages\\DetailMessages.tsx";



const DetailMessages = () => {
  const {
    0: messages
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(['Привет, как твои дела?', 'Да вроде неплохо, а твои?', 'Да вот делаю бэк', 'Сочувствую']);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_DetailMessages_styles__WEBPACK_IMPORTED_MODULE_2__["MainWrapper"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_DetailMessages_styles__WEBPACK_IMPORTED_MODULE_2__["TableHeader"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          children: "\u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440 \u0418\u0432\u0430\u043D\u043E\u0432"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_DetailMessages_styles__WEBPACK_IMPORTED_MODULE_2__["Messages"], {
        children: messages.map(message => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_DetailMessages_styles__WEBPACK_IMPORTED_MODULE_2__["TableBody"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: message
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_DetailMessages_styles__WEBPACK_IMPORTED_MODULE_2__["BottomBorder"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 21
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (DetailMessages);

/***/ }),

/***/ "./src/components/Messages/Messages.styles.ts":
/*!****************************************************!*\
  !*** ./src/components/Messages/Messages.styles.ts ***!
  \****************************************************/
/*! exports provided: MessageList, MessageItem, MessageAuthorImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageList", function() { return MessageList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageItem", function() { return MessageItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageAuthorImage", function() { return MessageAuthorImage; });
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled */ "@emotion/styled");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_0__);

const MessageList = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default.a.div`
    overflow-y: scroll;
    overflow-x: hidden;
    padding: 0;
    height: 30em;
    ::-webkit-scrollbar {
        width: .5em;
    }
    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px #222;
    }
    ::-webkit-scrollbar-thumb {
        background-color: #333;
        border-radius: .5em;
        :hover {
            background-color: #444;
        }
    }
`;
const MessageItem = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default.a.div`
    display: grid;
    grid-gap: .2em;
    width: 100%;
    height: 4em;
    box-shadow: 0 0 10px #111;
    margin-bottom: .75em;
    padding: .5em;
    grid-template-rows: 1.5em 1fr;
    grid-template-columns: 2em 1fr;
    cursor: pointer;
    border-radius: .5em;
    transition: .3s;
    h5 {
        grid-row: 1;
        grid-column: 2;
        margin-left: 1.5em;
        font-size: 1.1em;
    }
    p{
        font-size: .95em;
        grid-row: 2;
        grid-column: 2;
        margin-left: 2em;
    }
    :hover {
        background-color: #444;
        transition: 0.3s;
    }
    :last-child {
        margin: 0;
    }
`;
const MessageAuthorImage = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default.a.img`
    width: 3em;
    border-radius: 50%;
    grid-row: 1/3;
    grid-column: 1;
    border: 1px solid white;
    margin: 0 .25em .25em 0;
`;

/***/ }),

/***/ "./src/components/Messages/Messages.tsx":
/*!**********************************************!*\
  !*** ./src/components/Messages/Messages.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DetailMessages_DetailMessages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DetailMessages/DetailMessages */ "./src/components/Messages/DetailMessages/DetailMessages.tsx");
/* harmony import */ var _Messages_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Messages.styles */ "./src/components/Messages/Messages.styles.ts");

var _jsxFileName = "C:\\Users\\vsamsonov\\Desktop\\SocialWeb\\src\\components\\Messages\\Messages.tsx";




const Messages = () => {
  const createMessage = (authorName, text, id) => {
    return {
      Author: authorName,
      Avatar: 'https://meragor.com/files/styles//ava_800_800_wm/funny-standoff-_meragor-com_349.jpg',
      Message: text,
      id: id
    };
  };

  const {
    0: messages,
    1: setMessage
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([createMessage('Александр Иванов', "Привет, как твои дела?", 0), createMessage('Кто-то', "Олололо", 1)]);
  const {
    0: active,
    1: setActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  if (active) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_DetailMessages_DetailMessages__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 16
    }, undefined);
  } else {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Messages_styles__WEBPACK_IMPORTED_MODULE_3__["MessageList"], {
      children: messages.map(message => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Messages_styles__WEBPACK_IMPORTED_MODULE_3__["MessageItem"], {
        onClick: () => setActive(!active),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Messages_styles__WEBPACK_IMPORTED_MODULE_3__["MessageAuthorImage"], {
          src: message.Avatar
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 25
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
          children: message.Author
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 25
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: message.Message
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 25
        }, undefined)]
      }, message.id, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 21
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, undefined);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Messages);

/***/ }),

/***/ "./src/pages/messages/index.tsx":
/*!**************************************!*\
  !*** ./src/pages/messages/index.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Messages_Messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Messages/Messages */ "./src/components/Messages/Messages.tsx");

var _jsxFileName = "C:\\Users\\vsamsonov\\Desktop\\SocialWeb\\src\\pages\\messages\\index.tsx";


const messages = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Messages_Messages__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (messages);

/***/ }),

/***/ "@emotion/styled":
/*!**********************************!*\
  !*** external "@emotion/styled" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@emotion/styled");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWVzc2FnZXMvRGV0YWlsTWVzc2FnZXMvRGV0YWlsTWVzc2FnZXMuc3R5bGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01lc3NhZ2VzL0RldGFpbE1lc3NhZ2VzL0RldGFpbE1lc3NhZ2VzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NZXNzYWdlcy9NZXNzYWdlcy5zdHlsZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWVzc2FnZXMvTWVzc2FnZXMudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9tZXNzYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGVtb3Rpb24vc3R5bGVkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJNYWluV3JhcHBlciIsInN0eWxlZCIsImRpdiIsIlRhYmxlSGVhZGVyIiwiVGFibGVCb2R5IiwiQm90dG9tQm9yZGVyIiwiTWVzc2FnZXMiLCJEZXRhaWxNZXNzYWdlcyIsIm1lc3NhZ2VzIiwidXNlU3RhdGUiLCJtYXAiLCJtZXNzYWdlIiwiTWVzc2FnZUxpc3QiLCJNZXNzYWdlSXRlbSIsIk1lc3NhZ2VBdXRob3JJbWFnZSIsImltZyIsImNyZWF0ZU1lc3NhZ2UiLCJhdXRob3JOYW1lIiwidGV4dCIsImlkIiwiQXV0aG9yIiwiQXZhdGFyIiwiTWVzc2FnZSIsInNldE1lc3NhZ2UiLCJhY3RpdmUiLCJzZXRBY3RpdmUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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QUFDLG1FQUFEO0FBQW9CLGFBQUcsRUFBRWIsT0FBTyxDQUFDVTtBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZKLGVBR0k7QUFBQSxvQkFBS1YsT0FBTyxDQUFDUztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSEosZUFJSTtBQUFBLG9CQUFJVCxPQUFPLENBQUNXO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKSjtBQUFBLFNBQWtCWCxPQUFPLENBQUNRLEVBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREg7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKO0FBWUg7QUFDSixDQW5DRDs7QUFxQ2ViLHVFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pDQTs7QUFFQSxNQUFNRSxRQUFRLEdBQUcsTUFBTTtBQUNuQixzQkFDSTtBQUFBLDJCQUNJLHFFQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFLSCxDQU5EOztBQVFlQSx1RUFBZixFOzs7Ozs7Ozs7OztBQ1ZBLDRDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL21lc3NhZ2VzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcGFnZXMvbWVzc2FnZXMvaW5kZXgudHN4XCIpO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTWFpbldyYXBwZXIgPSBzdHlsZWQuZGl2IGBcclxuICAgIGRpc3BsYXk6IGlubGluZS10YWJsZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGFibGUge1xyXG4gICAgICAgIHdpZHRoOiBpbmhlcml0O1xyXG4gICAgfVxyXG5cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IFRhYmxlSGVhZGVyID0gc3R5bGVkLmRpdmBcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAjMTgxODE4O1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogYXV0byBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjI1ZW07XHJcbiAgICBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBUYWJsZUJvZHkgPSBzdHlsZWQuZGl2IGBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAzZW07XHJcbiAgICBtYXJnaW46IC41ZW0gYXV0byAuNWVtIGF1dG87XHJcbiAgICBwIHtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjIwJTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMmVtO1xyXG4gICAgICAgIHdpZHRoOiBpbmhlcml0O1xyXG4gICAgfVxyXG4gICAgOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxZW07XHJcbiAgICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBCb3R0b21Cb3JkZXIgPSBzdHlsZWQuZGl2IGBcclxuICAgIGJvcmRlci1ib3R0b206IC4wNWVtIHNvbGlkICM0NDQ7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHdpZHRoOiA2NSU7XHJcblxyXG4gICAgOmxhc3QtY2hpbGQge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgTWVzc2FnZXMgPSBzdHlsZWQuZGl2IGBcclxuICAgIG1hcmdpbi10b3A6IDFlbTtcclxuYCIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgTWFpbldyYXBwZXIsIFRhYmxlSGVhZGVyLCBUYWJsZUJvZHksIEJvdHRvbUJvcmRlciwgTWVzc2FnZXMgfSBmcm9tIFwiLi9EZXRhaWxNZXNzYWdlcy5zdHlsZXNcIlxyXG5cclxuY29uc3QgRGV0YWlsTWVzc2FnZXMgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW21lc3NhZ2VzXSA9IHVzZVN0YXRlKFtcclxuICAgICAgICAn0J/RgNC40LLQtdGCLCDQutCw0Log0YLQstC+0Lgg0LTQtdC70LA/JyxcclxuICAgICAgICAn0JTQsCDQstGA0L7QtNC1INC90LXQv9C70L7RhdC+LCDQsCDRgtCy0L7QuD8nLFxyXG4gICAgICAgICfQlNCwINCy0L7RgiDQtNC10LvQsNGOINCx0Y3QuicsXHJcbiAgICAgICAgJ9Ch0L7Rh9GD0LLRgdGC0LLRg9GOJ1xyXG4gICAgXSlcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPE1haW5XcmFwcGVyPlxyXG4gICAgICAgICAgICA8dGFibGU+XHJcbiAgICAgICAgICAgICAgICA8VGFibGVIZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxPtCQ0LvQtdC60YHQsNC90LTRgCDQmNCy0LDQvdC+0LI8L2gxPlxyXG4gICAgICAgICAgICAgICAgPC9UYWJsZUhlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxNZXNzYWdlcz5cclxuICAgICAgICAgICAgICAgIHttZXNzYWdlcy5tYXAoKG1lc3NhZ2UpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8VGFibGVCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57bWVzc2FnZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3R0b21Cb3JkZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQm9keT5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9NZXNzYWdlcz5cclxuICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICA8L01haW5XcmFwcGVyPlxyXG4gICAgKSAgICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGV0YWlsTWVzc2FnZXMiLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBNZXNzYWdlTGlzdCA9IHN0eWxlZC5kaXZgXHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgaGVpZ2h0OiAzMGVtO1xyXG4gICAgOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgICAgd2lkdGg6IC41ZW07XHJcbiAgICB9XHJcbiAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4ICMyMjI7XHJcbiAgICB9XHJcbiAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IC41ZW07XHJcbiAgICAgICAgOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBNZXNzYWdlSXRlbSA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC1nYXA6IC4yZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNGVtO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggIzExMTtcclxuICAgIG1hcmdpbi1ib3R0b206IC43NWVtO1xyXG4gICAgcGFkZGluZzogLjVlbTtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMS41ZW0gMWZyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZW0gMWZyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjVlbTtcclxuICAgIHRyYW5zaXRpb246IC4zcztcclxuICAgIGg1IHtcclxuICAgICAgICBncmlkLXJvdzogMTtcclxuICAgICAgICBncmlkLWNvbHVtbjogMjtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMS41ZW07XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjFlbTtcclxuICAgIH1cclxuICAgIHB7XHJcbiAgICAgICAgZm9udC1zaXplOiAuOTVlbTtcclxuICAgICAgICBncmlkLXJvdzogMjtcclxuICAgICAgICBncmlkLWNvbHVtbjogMjtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMmVtO1xyXG4gICAgfVxyXG4gICAgOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0O1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICB9XHJcbiAgICA6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgTWVzc2FnZUF1dGhvckltYWdlID0gc3R5bGVkLmltZ2BcclxuICAgIHdpZHRoOiAzZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBncmlkLXJvdzogMS8zO1xyXG4gICAgZ3JpZC1jb2x1bW46IDE7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgIG1hcmdpbjogMCAuMjVlbSAuMjVlbSAwO1xyXG5gIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgRGV0YWlsTWVzc2FnZXMgZnJvbSBcIi4vRGV0YWlsTWVzc2FnZXMvRGV0YWlsTWVzc2FnZXNcIlxyXG5pbXBvcnQgeyBNZXNzYWdlQXV0aG9ySW1hZ2UsIE1lc3NhZ2VJdGVtLCBNZXNzYWdlTGlzdCB9IGZyb20gXCIuL01lc3NhZ2VzLnN0eWxlc1wiXHJcblxyXG5jb25zdCBNZXNzYWdlcyA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBjcmVhdGVNZXNzYWdlID0gKGF1dGhvck5hbWU6IHN0cmluZywgdGV4dDogc3RyaW5nLCBpZDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgQXV0aG9yOiBhdXRob3JOYW1lLFxyXG4gICAgICAgICAgICBBdmF0YXI6ICdodHRwczovL21lcmFnb3IuY29tL2ZpbGVzL3N0eWxlcy8vYXZhXzgwMF84MDBfd20vZnVubnktc3RhbmRvZmYtX21lcmFnb3ItY29tXzM0OS5qcGcnLFxyXG4gICAgICAgICAgICBNZXNzYWdlOiB0ZXh0LFxyXG4gICAgICAgICAgICBpZDogaWRcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgW21lc3NhZ2VzLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKFtcclxuICAgICAgICBjcmVhdGVNZXNzYWdlKCfQkNC70LXQutGB0LDQvdC00YAg0JjQstCw0L3QvtCyJywgXCLQn9GA0LjQstC10YIsINC60LDQuiDRgtCy0L7QuCDQtNC10LvQsD9cIiwgMCksXHJcbiAgICAgICAgY3JlYXRlTWVzc2FnZSgn0JrRgtC+LdGC0L4nLCBcItCe0LvQvtC70L7Qu9C+XCIsIDEpXHJcbiAgICBdKVxyXG5cclxuICAgIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICBpZiAoYWN0aXZlKSB7XHJcbiAgICAgICAgcmV0dXJuIDxEZXRhaWxNZXNzYWdlcyAvPlxyXG4gICAgfSBcclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxNZXNzYWdlTGlzdCA+XHJcbiAgICAgICAgICAgICAgICB7bWVzc2FnZXMubWFwKChtZXNzYWdlKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPE1lc3NhZ2VJdGVtIGtleT17bWVzc2FnZS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlKCFhY3RpdmUpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lc3NhZ2VBdXRob3JJbWFnZSBzcmM9e21lc3NhZ2UuQXZhdGFyfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNT57bWVzc2FnZS5BdXRob3J9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e21lc3NhZ2UuTWVzc2FnZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9NZXNzYWdlSXRlbT5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L01lc3NhZ2VMaXN0PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVzc2FnZXMiLCJpbXBvcnQgTWVzc2FnZXMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTWVzc2FnZXMvTWVzc2FnZXNcIlxyXG5cclxuY29uc3QgbWVzc2FnZXMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxNZXNzYWdlcyAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZXNzYWdlcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBlbW90aW9uL3N0eWxlZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==