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
    height: 20em;
    padding: .5em .75em .5em .5em;
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
/* harmony import */ var _Messages_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Messages.styles */ "./src/components/Messages/Messages.styles.ts");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);


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
    0: messages
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([createMessage('Александр Иванов', "Привет, как твои дела?", 0), createMessage('Кто-то', "Олололо", 1), createMessage('Кто-то', "Олололо", 2), createMessage('Кто-то', "Олололо", 3), createMessage('Кто-то', "Олололо", 4)]);
  const {
    0: active,
    1: setActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const renderMessage = () => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
          children: "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Messages_styles__WEBPACK_IMPORTED_MODULE_2__["MessageList"], {
        children: messages.map(message => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Messages_styles__WEBPACK_IMPORTED_MODULE_2__["MessageItem"], {
          onClick: () => setActive(!active),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Messages_styles__WEBPACK_IMPORTED_MODULE_2__["MessageAuthorImage"], {
            src: message.Avatar
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 29
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
            children: message.Author
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 29
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: message.Message
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 29
          }, undefined)]
        }, message.id, true, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 25
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }, undefined)]
    }, void 0, true);
  };

  return renderMessage();
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

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWVzc2FnZXMvTWVzc2FnZXMuc3R5bGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01lc3NhZ2VzL01lc3NhZ2VzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvbWVzc2FnZXMvaW5kZXgudHN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcIkBlbW90aW9uL3N0eWxlZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiTWVzc2FnZUxpc3QiLCJzdHlsZWQiLCJkaXYiLCJNZXNzYWdlSXRlbSIsIk1lc3NhZ2VBdXRob3JJbWFnZSIsImltZyIsIk1lc3NhZ2VzIiwiY3JlYXRlTWVzc2FnZSIsImF1dGhvck5hbWUiLCJ0ZXh0IiwiaWQiLCJBdXRob3IiLCJBdmF0YXIiLCJNZXNzYWdlIiwibWVzc2FnZXMiLCJ1c2VTdGF0ZSIsImFjdGl2ZSIsInNldEFjdGl2ZSIsInJlbmRlck1lc3NhZ2UiLCJtYXAiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVB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QUFPLENBQUNWLEVBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREg7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpKO0FBQUEsb0JBREo7QUFpQkgsR0FsQkQ7O0FBb0JBLFNBQU9RLGFBQWEsRUFBcEI7QUFDSCxDQTFDRDs7QUE0Q2VaLHVFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pEQTs7QUFFQSxNQUFNUSxRQUFRLEdBQUcsTUFBTTtBQUNuQixzQkFDSTtBQUFBLDJCQUNJLHFFQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFLSCxDQU5EOztBQVFlQSx1RUFBZixFOzs7Ozs7Ozs7OztBQ1ZBLDRDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL21lc3NhZ2VzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcGFnZXMvbWVzc2FnZXMvaW5kZXgudHN4XCIpO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTWVzc2FnZUxpc3QgPSBzdHlsZWQuZGl2YFxyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGhlaWdodDogMjBlbTtcclxuICAgIHBhZGRpbmc6IC41ZW0gLjc1ZW0gLjVlbSAuNWVtO1xyXG4gICAgOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgICAgd2lkdGg6IC41ZW07XHJcbiAgICB9XHJcbiAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4ICMyMjI7XHJcbiAgICB9XHJcbiAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IC41ZW07XHJcbiAgICAgICAgOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBNZXNzYWdlSXRlbSA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC1nYXA6IC4yZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNGVtO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggIzExMTtcclxuICAgIG1hcmdpbi1ib3R0b206IC43NWVtO1xyXG4gICAgcGFkZGluZzogLjVlbTtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMS41ZW0gMWZyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZW0gMWZyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjVlbTtcclxuICAgIHRyYW5zaXRpb246IC4zcztcclxuICAgIGg1IHtcclxuICAgICAgICBncmlkLXJvdzogMTtcclxuICAgICAgICBncmlkLWNvbHVtbjogMjtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMS41ZW07XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjFlbTtcclxuICAgIH1cclxuICAgIHB7XHJcbiAgICAgICAgZm9udC1zaXplOiAuOTVlbTtcclxuICAgICAgICBncmlkLXJvdzogMjtcclxuICAgICAgICBncmlkLWNvbHVtbjogMjtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMmVtO1xyXG4gICAgfVxyXG4gICAgOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0O1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICB9XHJcbiAgICA6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgTWVzc2FnZUF1dGhvckltYWdlID0gc3R5bGVkLmltZ2BcclxuICAgIHdpZHRoOiAzZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBncmlkLXJvdzogMS8zO1xyXG4gICAgZ3JpZC1jb2x1bW46IDE7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgIG1hcmdpbjogMCAuMjVlbSAuMjVlbSAwO1xyXG5gIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgRGV0YWlsTWVzc2FnZXMgZnJvbSBcIi4vRGV0YWlsTWVzc2FnZXMvRGV0YWlsTWVzc2FnZXNcIlxyXG5pbXBvcnQgeyBNZXNzYWdlQXV0aG9ySW1hZ2UsIE1lc3NhZ2VJdGVtLCBNZXNzYWdlTGlzdCB9IGZyb20gXCIuL01lc3NhZ2VzLnN0eWxlc1wiXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuXHJcbmNvbnN0IE1lc3NhZ2VzID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGNyZWF0ZU1lc3NhZ2UgPSAoYXV0aG9yTmFtZTogc3RyaW5nLCB0ZXh0OiBzdHJpbmcsIGlkOiBudW1iZXIpID0+IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBBdXRob3I6IGF1dGhvck5hbWUsXHJcbiAgICAgICAgICAgIEF2YXRhcjogJ2h0dHBzOi8vbWVyYWdvci5jb20vZmlsZXMvc3R5bGVzLy9hdmFfODAwXzgwMF93bS9mdW5ueS1zdGFuZG9mZi1fbWVyYWdvci1jb21fMzQ5LmpwZycsXHJcbiAgICAgICAgICAgIE1lc3NhZ2U6IHRleHQsXHJcbiAgICAgICAgICAgIGlkOiBpZFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBbbWVzc2FnZXNdID0gdXNlU3RhdGUoW1xyXG4gICAgICAgIGNyZWF0ZU1lc3NhZ2UoJ9CQ0LvQtdC60YHQsNC90LTRgCDQmNCy0LDQvdC+0LInLCBcItCf0YDQuNCy0LXRgiwg0LrQsNC6INGC0LLQvtC4INC00LXQu9CwP1wiLCAwKSxcclxuICAgICAgICBjcmVhdGVNZXNzYWdlKCfQmtGC0L4t0YLQvicsIFwi0J7Qu9C+0LvQvtC70L5cIiwgMSksXHJcbiAgICAgICAgY3JlYXRlTWVzc2FnZSgn0JrRgtC+LdGC0L4nLCBcItCe0LvQvtC70L7Qu9C+XCIsIDIpLFxyXG4gICAgICAgIGNyZWF0ZU1lc3NhZ2UoJ9Ca0YLQvi3RgtC+JywgXCLQntC70L7Qu9C+0LvQvlwiLCAzKSxcclxuICAgICAgICBjcmVhdGVNZXNzYWdlKCfQmtGC0L4t0YLQvicsIFwi0J7Qu9C+0LvQvtC70L5cIiwgNClcclxuICAgIF0pXHJcblxyXG4gICAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIGNvbnN0IHJlbmRlck1lc3NhZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT7QodC+0L7QsdGJ0LXQvdC40Y88L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICAgICAgPE1lc3NhZ2VMaXN0ID5cclxuICAgICAgICAgICAgICAgICAgICB7bWVzc2FnZXMubWFwKChtZXNzYWdlKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZXNzYWdlSXRlbSBrZXk9e21lc3NhZ2UuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmUoIWFjdGl2ZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lc3NhZ2VBdXRob3JJbWFnZSBzcmM9e21lc3NhZ2UuQXZhdGFyfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+e21lc3NhZ2UuQXV0aG9yfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57bWVzc2FnZS5NZXNzYWdlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9NZXNzYWdlSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvTWVzc2FnZUxpc3Q+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVuZGVyTWVzc2FnZSgpIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlcyIsImltcG9ydCBNZXNzYWdlcyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9NZXNzYWdlcy9NZXNzYWdlc1wiXHJcblxyXG5jb25zdCBtZXNzYWdlcyA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPE1lc3NhZ2VzIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lc3NhZ2VzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGVtb3Rpb24vc3R5bGVkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==