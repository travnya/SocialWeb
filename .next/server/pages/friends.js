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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/friends/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/Friends/Friends.styles.ts":
/*!**************************************************!*\
  !*** ./src/components/Friends/Friends.styles.ts ***!
  \**************************************************/
/*! exports provided: FriendListWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendListWrapper", function() { return FriendListWrapper; });
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled */ "@emotion/styled");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_0__);

const FriendListWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default.a.div`
    width: 100%;
    height: 6em;
    margin-top: .8em;
    border-radius: .5em;
    box-shadow: 0 0 10px #111;
    padding: .85em;
    display: flex;
    transition: .2s;
    img {
        width: 4em;
        border-radius: 50%;
        object-fit: cover;
        cursor: pointer;
        transition: .5s;
        border: 0.1em solid azure;
        :hover {
            filter: blur(1px);
        }
    }
    h1 {
        margin: .15em 0 0 1em;
        height: fit-content;
        font-size: 2em;
        line-height: 150%;
        transition: .3s;
        cursor: pointer;
        :hover {
            color: #06D6B5;
        }
    }
    :first-of-type {
        margin: 0;
    }
    :hover {
        background-color: #444;
    }
`;

/***/ }),

/***/ "./src/components/Friends/Friends.tsx":
/*!********************************************!*\
  !*** ./src/components/Friends/Friends.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Friends_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Friends.styles */ "./src/components/Friends/Friends.styles.ts");


var _jsxFileName = "C:\\Users\\vsamsonov\\Desktop\\SocialWeb\\src\\components\\Friends\\Friends.tsx";




const Friends = () => {
  const createFriend = (name, surname, photo, id) => {
    return {
      Name: name,
      Surname: surname,
      Photo: photo,
      id: id
    };
  };

  const {
    0: friends
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([createFriend('Александр', 'Иванов', 'https://sun9-11.userapi.com/impg/JMX3A1zVamMI0lhvojaB-0SI6-mrkJXHhNpRcQ/9yi0MswI468.jpg?size=720x1280&quality=95&sign=e76c5224e9039ff3c01e6d39cb6ffd41&type=album', 1), createFriend('Кристина', 'Шапцова', 'https://sun9-65.userapi.com/impg/5QBNT1blNraX29KbYZfDQRL8yjoavs9dHEcAfw/w8oKoQW4Oe0.jpg?size=1620x2160&quality=96&sign=6bb340721e5e4bab773555048e24df69&type=album', 2), createFriend('Татьяна', 'Притыкина', 'https://sun9-63.userapi.com/impf/c855120/v855120759/15a77b/vmusPb0xBJQ.jpg?size=898x1080&quality=96&sign=d1a23680a08c92a9f213522c2e529370&type=album', 3), createFriend('Владислав', 'Самсонов', 'https://sun9-69.userapi.com/impf/c850428/v850428210/fe855/nyTezU6TZcs.jpg?size=960x1280&quality=96&sign=90c5608e48772f4293d655aee909b59d&type=album', 4)]);

  const renderFriends = () => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
          children: "\u0414\u0440\u0443\u0437\u044C\u044F"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 25
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 21
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: friends.map(friend => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Friends_styles__WEBPACK_IMPORTED_MODULE_3__["FriendListWrapper"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: friend.Photo
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 33
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            onClick: () => {
              return null;
            },
            children: `${friend.Name} ${friend.Surname}`
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 33
          }, undefined)]
        }, friend.id, true, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 29
        }, undefined))
      }, void 0, false)]
    }, void 0, true);
  };

  return renderFriends();
};

/* harmony default export */ __webpack_exports__["default"] = (Friends);

/***/ }),

/***/ "./src/pages/friends/index.tsx":
/*!*************************************!*\
  !*** ./src/pages/friends/index.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Friends_Friends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Friends/Friends */ "./src/components/Friends/Friends.tsx");

var _jsxFileName = "C:\\Users\\vsamsonov\\Desktop\\SocialWeb\\src\\pages\\friends\\index.tsx";


const friends = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Friends_Friends__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (friends);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRnJpZW5kcy9GcmllbmRzLnN0eWxlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9GcmllbmRzL0ZyaWVuZHMudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9mcmllbmRzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZW1vdGlvbi9zdHlsZWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkZyaWVuZExpc3RXcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwiRnJpZW5kcyIsImNyZWF0ZUZyaWVuZCIsIm5hbWUiLCJzdXJuYW1lIiwicGhvdG8iLCJpZCIsIk5hbWUiLCJTdXJuYW1lIiwiUGhvdG8iLCJmcmllbmRzIiwidXNlU3RhdGUiLCJyZW5kZXJGcmllbmRzIiwibWFwIiwiZnJpZW5kIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMs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IGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wYWdlcy9mcmllbmRzL2luZGV4LnRzeFwiKTtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZyaWVuZExpc3RXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA2ZW07XHJcbiAgICBtYXJnaW4tdG9wOiAuOGVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjVlbTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4ICMxMTE7XHJcbiAgICBwYWRkaW5nOiAuODVlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB0cmFuc2l0aW9uOiAuMnM7XHJcbiAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiA0ZW07XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB0cmFuc2l0aW9uOiAuNXM7XHJcbiAgICAgICAgYm9yZGVyOiAwLjFlbSBzb2xpZCBhenVyZTtcclxuICAgICAgICA6aG92ZXIge1xyXG4gICAgICAgICAgICBmaWx0ZXI6IGJsdXIoMXB4KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBoMSB7XHJcbiAgICAgICAgbWFyZ2luOiAuMTVlbSAwIDAgMWVtO1xyXG4gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE1MCU7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogLjNzO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICA6aG92ZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogIzA2RDZCNTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICA6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gICAgOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0O1xyXG4gICAgfVxyXG5gIiwiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBGcmllbmRMaXN0V3JhcHBlciB9IGZyb20gJy4vRnJpZW5kcy5zdHlsZXMnXHJcblxyXG5jb25zdCBGcmllbmRzID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGNyZWF0ZUZyaWVuZCA9IChuYW1lOiBzdHJpbmcsIHN1cm5hbWU6IHN0cmluZywgcGhvdG86IHN0cmluZywgaWQ6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIE5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgICAgICBTdXJuYW1lOiBzdXJuYW1lLFxyXG4gICAgICAgICAgICAgICAgUGhvdG86IHBob3RvLFxyXG4gICAgICAgICAgICAgICAgaWQ6IGlkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgW2ZyaWVuZHNdID0gdXNlU3RhdGUoW1xyXG4gICAgICAgICAgICBjcmVhdGVGcmllbmQoJ9CQ0LvQtdC60YHQsNC90LTRgCcsICfQmNCy0LDQvdC+0LInLCdodHRwczovL3N1bjktMTEudXNlcmFwaS5jb20vaW1wZy9KTVgzQTF6VmFtTUkwbGh2b2phQi0wU0k2LW1ya0pYSGhOcFJjUS85eWkwTXN3STQ2OC5qcGc/c2l6ZT03MjB4MTI4MCZxdWFsaXR5PTk1JnNpZ249ZTc2YzUyMjRlOTAzOWZmM2MwMWU2ZDM5Y2I2ZmZkNDEmdHlwZT1hbGJ1bScsIDEpLFxyXG4gICAgICAgICAgICBjcmVhdGVGcmllbmQoJ9Ca0YDQuNGB0YLQuNC90LAnLCAn0KjQsNC/0YbQvtCy0LAnLCAnaHR0cHM6Ly9zdW45LTY1LnVzZXJhcGkuY29tL2ltcGcvNVFCTlQxYmxOcmFYMjlLYllaZkRRUkw4eWpvYXZzOWRIRWNBZncvdzhvS29RVzRPZTAuanBnP3NpemU9MTYyMHgyMTYwJnF1YWxpdHk9OTYmc2lnbj02YmIzNDA3MjFlNWU0YmFiNzczNTU1MDQ4ZTI0ZGY2OSZ0eXBlPWFsYnVtJywgMiksXHJcbiAgICAgICAgICAgIGNyZWF0ZUZyaWVuZCgn0KLQsNGC0YzRj9C90LAnLCAn0J/RgNC40YLRi9C60LjQvdCwJywgJ2h0dHBzOi8vc3VuOS02My51c2VyYXBpLmNvbS9pbXBmL2M4NTUxMjAvdjg1NTEyMDc1OS8xNWE3N2Ivdm11c1BiMHhCSlEuanBnP3NpemU9ODk4eDEwODAmcXVhbGl0eT05NiZzaWduPWQxYTIzNjgwYTA4YzkyYTlmMjEzNTIyYzJlNTI5MzcwJnR5cGU9YWxidW0nLCAzKSxcclxuICAgICAgICAgICAgY3JlYXRlRnJpZW5kKCfQktC70LDQtNC40YHQu9Cw0LInLCAn0KHQsNC80YHQvtC90L7QsicsICdodHRwczovL3N1bjktNjkudXNlcmFwaS5jb20vaW1wZi9jODUwNDI4L3Y4NTA0MjgyMTAvZmU4NTUvbnlUZXpVNlRaY3MuanBnP3NpemU9OTYweDEyODAmcXVhbGl0eT05NiZzaWduPTkwYzU2MDhlNDg3NzJmNDI5M2Q2NTVhZWU5MDliNTlkJnR5cGU9YWxidW0nLCA0KVxyXG4gICAgICAgIF0pXHJcblxyXG4gICAgICAgIGNvbnN0IHJlbmRlckZyaWVuZHMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGl0bGU+0JTRgNGD0LfRjNGPPC90aXRsZT5cclxuICAgICAgICAgICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2ZyaWVuZHMubWFwKChmcmllbmQpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGcmllbmRMaXN0V3JhcHBlciBrZXk9e2ZyaWVuZC5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2ZyaWVuZC5QaG90b30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgb25DbGljaz17KCkgPT4ge3JldHVybiBudWxsfX0+e2Ake2ZyaWVuZC5OYW1lfSAke2ZyaWVuZC5TdXJuYW1lfWB9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRnJpZW5kTGlzdFdyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiByZW5kZXJGcmllbmRzKClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRnJpZW5kcyIsImltcG9ydCBGcmllbmRzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0ZyaWVuZHMvRnJpZW5kc1wiXHJcblxyXG5cclxuY29uc3QgZnJpZW5kcyA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZyaWVuZHMgLz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnJpZW5kcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBlbW90aW9uL3N0eWxlZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=