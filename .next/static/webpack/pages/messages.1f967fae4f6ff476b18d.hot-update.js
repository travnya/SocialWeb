webpackHotUpdate_N_E("pages/messages",{

/***/ "./src/components/Messages/DetailMessages/DetailMessages.tsx":
/*!*******************************************************************!*\
  !*** ./src/components/Messages/DetailMessages/DetailMessages.tsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DetailMessages_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DetailMessages.styles */ "./src/components/Messages/DetailMessages/DetailMessages.styles.ts");


var _jsxFileName = "C:\\Users\\vsamsonov\\Desktop\\SocialWeb\\src\\components\\Messages\\DetailMessages\\DetailMessages.tsx",
    _this = undefined,
    _s = $RefreshSig$();




var DetailMessages = function DetailMessages(status) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(['Привет, как твои дела?', 'Да вроде неплохо, а твои?', 'Да вот делаю бэк', 'Сочувствую']),
      messages = _useState[0];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_DetailMessages_styles__WEBPACK_IMPORTED_MODULE_2__["MainWrapper"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: "btn btn-dark",
      onClick: setActive(false)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_DetailMessages_styles__WEBPACK_IMPORTED_MODULE_2__["TableHeader"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          children: "\u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440 \u0418\u0432\u0430\u043D\u043E\u0432"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_DetailMessages_styles__WEBPACK_IMPORTED_MODULE_2__["Messages"], {
        children: messages.map(function (message) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_DetailMessages_styles__WEBPACK_IMPORTED_MODULE_2__["TableBody"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: message
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 25
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_DetailMessages_styles__WEBPACK_IMPORTED_MODULE_2__["BottomBorder"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 25
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 21
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 9
  }, _this);
};

_s(DetailMessages, "xr6YZhJ9H2eceI5Q40T+BnKG06c=");

_c = DetailMessages;
/* harmony default export */ __webpack_exports__["default"] = (DetailMessages);

var _c;

$RefreshReg$(_c, "DetailMessages");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Messages/Messages.tsx":
/*!**********************************************!*\
  !*** ./src/components/Messages/Messages.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DetailMessages_DetailMessages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DetailMessages/DetailMessages */ "./src/components/Messages/DetailMessages/DetailMessages.tsx");
/* harmony import */ var _Messages_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Messages.styles */ "./src/components/Messages/Messages.styles.ts");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);



var _jsxFileName = "C:\\Users\\vsamsonov\\Desktop\\SocialWeb\\src\\components\\Messages\\Messages.tsx",
    _this = undefined,
    _s = $RefreshSig$();






var Messages = function Messages() {
  _s();

  var createMessage = function createMessage(authorName, text, id) {
    return {
      Author: authorName,
      Avatar: 'https://meragor.com/files/styles//ava_800_800_wm/funny-standoff-_meragor-com_349.jpg',
      Message: text,
      id: id
    };
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([createMessage('Александр Иванов', "Привет, как твои дела?", 0), createMessage('Кто-то', "Олололо", 1), createMessage('Кто-то', "Олололо", 2), createMessage('Кто-то', "Олололо", 3), createMessage('Кто-то', "Олололо", 4)]),
      messages = _useState[0];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      active = _useState2[0],
      setActive = _useState2[1];

  var renderMessage = function renderMessage() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
          children: "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Messages_styles__WEBPACK_IMPORTED_MODULE_3__["MessageList"], {
        children: messages.map(function (message) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Messages_styles__WEBPACK_IMPORTED_MODULE_3__["MessageItem"], {
            onClick: function onClick() {
              return setActive(!active);
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Messages_styles__WEBPACK_IMPORTED_MODULE_3__["MessageAuthorImage"], {
              src: message.Avatar
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
              children: message.Author
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: message.Message
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 29
            }, _this)]
          }, message.id, true, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 25
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }, _this)]
    }, void 0, true);
  };

  return active === true ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_DetailMessages_DetailMessages__WEBPACK_IMPORTED_MODULE_2__["default"], {
    props: active
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 28
  }, _this) : renderMessage();
};

_s(Messages, "7f+2PgWjOi1SzzNTFI3IQvUMrSw=");

_c = Messages;
/* harmony default export */ __webpack_exports__["default"] = (Messages);

var _c;

$RefreshReg$(_c, "Messages");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTWVzc2FnZXMvRGV0YWlsTWVzc2FnZXMvRGV0YWlsTWVzc2FnZXMudHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9NZXNzYWdlcy9NZXNzYWdlcy50c3giXSwibmFtZXMiOlsiRGV0YWlsTWVzc2FnZXMiLCJzdGF0dXMiLCJ1c2VTdGF0ZSIsIm1lc3NhZ2VzIiwic2V0QWN0aXZlIiwibWFwIiwibWVzc2FnZSIsIk1lc3NhZ2VzIiwiY3JlYXRlTWVzc2FnZSIsImF1dGhvck5hbWUiLCJ0ZXh0IiwiaWQiLCJBdXRob3IiLCJBdmF0YXIiLCJNZXNzYWdlIiwiYWN0aXZlIiwicmVuZGVyTWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7O0FBRUEsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxNQUFELEVBQWlCO0FBQUE7O0FBQUEsa0JBRWpCQyxzREFBUSxDQUFDLENBQ3hCLHdCQUR3QixFQUV4QiwyQkFGd0IsRUFHeEIsa0JBSHdCLEVBSXhCLFlBSndCLENBQUQsQ0FGUztBQUFBLE1BRTdCQyxRQUY2Qjs7QUFTcEMsc0JBQ0kscUVBQUMsa0VBQUQ7QUFBQSw0QkFDSTtBQUNJLGVBQVMsRUFBQyxjQURkO0FBRUksYUFBTyxFQUFFQyxTQUFTLENBQUMsS0FBRDtBQUZ0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFLSTtBQUFBLDhCQUNJLHFFQUFDLGtFQUFEO0FBQUEsK0JBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFJSSxxRUFBQywrREFBRDtBQUFBLGtCQUNDRCxRQUFRLENBQUNFLEdBQVQsQ0FBYSxVQUFDQyxPQUFEO0FBQUEsOEJBQ1YscUVBQUMsZ0VBQUQ7QUFBQSxvQ0FDSTtBQUFBLHdCQUFJQTtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosZUFFSSxxRUFBQyxtRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEVTtBQUFBLFNBQWI7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFxQkgsQ0E5QkQ7O0dBQU1OLGM7O0tBQUFBLGM7QUFnQ1NBLDZFQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNTyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQUE7O0FBRW5CLE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsVUFBRCxFQUFxQkMsSUFBckIsRUFBbUNDLEVBQW5DLEVBQWtEO0FBQ3BFLFdBQU87QUFDSEMsWUFBTSxFQUFFSCxVQURMO0FBRUhJLFlBQU0sRUFBRSxzRkFGTDtBQUdIQyxhQUFPLEVBQUVKLElBSE47QUFJSEMsUUFBRSxFQUFFQTtBQUpELEtBQVA7QUFNSCxHQVBEOztBQUZtQixrQkFXQVQsc0RBQVEsQ0FBQyxDQUN4Qk0sYUFBYSxDQUFDLGtCQUFELEVBQXFCLHdCQUFyQixFQUErQyxDQUEvQyxDQURXLEVBRXhCQSxhQUFhLENBQUMsUUFBRCxFQUFXLFNBQVgsRUFBc0IsQ0FBdEIsQ0FGVyxFQUd4QkEsYUFBYSxDQUFDLFFBQUQsRUFBVyxTQUFYLEVBQXNCLENBQXRCLENBSFcsRUFJeEJBLGFBQWEsQ0FBQyxRQUFELEVBQVcsU0FBWCxFQUFzQixDQUF0QixDQUpXLEVBS3hCQSxhQUFhLENBQUMsUUFBRCxFQUFXLFNBQVgsRUFBc0IsQ0FBdEIsQ0FMVyxDQUFELENBWFI7QUFBQSxNQVdaTCxRQVhZOztBQUFBLG1CQW1CU0Qsc0RBQVEsQ0FBQyxLQUFELENBbkJqQjtBQUFBLE1BbUJaYSxNQW5CWTtBQUFBLE1BbUJKWCxTQW5CSTs7QUFxQm5CLE1BQU1ZLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUN4Qix3QkFDSTtBQUFBLDhCQUNJLHFFQUFDLGdEQUFEO0FBQUEsK0JBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFJSSxxRUFBQyw0REFBRDtBQUFBLGtCQUNLYixRQUFRLENBQUNFLEdBQVQsQ0FBYSxVQUFDQyxPQUFEO0FBQUEsOEJBQ1YscUVBQUMsNERBQUQ7QUFDSSxtQkFBTyxFQUFFO0FBQUEscUJBQU1GLFNBQVMsQ0FBQyxDQUFDVyxNQUFGLENBQWY7QUFBQSxhQURiO0FBQUEsb0NBRUkscUVBQUMsbUVBQUQ7QUFBb0IsaUJBQUcsRUFBRVQsT0FBTyxDQUFDTztBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZKLGVBR0k7QUFBQSx3QkFBS1AsT0FBTyxDQUFDTTtBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSEosZUFJSTtBQUFBLHdCQUFJTixPQUFPLENBQUNRO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKSjtBQUFBLGFBQWtCUixPQUFPLENBQUNLLEVBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRFU7QUFBQSxTQUFiO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpKO0FBQUEsb0JBREo7QUFpQkgsR0FsQkQ7O0FBb0JBLFNBQU9JLE1BQU0sS0FBRyxJQUFULGdCQUFnQixxRUFBQyxzRUFBRDtBQUFnQixTQUFLLEVBQUVBO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBaEIsR0FBbURDLGFBQWEsRUFBdkU7QUFDSCxDQTFDRDs7R0FBTVQsUTs7S0FBQUEsUTtBQTRDU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWVzc2FnZXMuMWY5NjdmYWU0ZjZmZjQ3NmIxOGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgZ2V0SGVhcFN0YXRpc3RpY3MgfSBmcm9tIFwidjhcIlxyXG5pbXBvcnQgeyBNYWluV3JhcHBlciwgVGFibGVIZWFkZXIsIFRhYmxlQm9keSwgQm90dG9tQm9yZGVyLCBNZXNzYWdlcyB9IGZyb20gXCIuL0RldGFpbE1lc3NhZ2VzLnN0eWxlc1wiXHJcblxyXG5jb25zdCBEZXRhaWxNZXNzYWdlcyA9IChzdGF0dXM6IGFueSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFttZXNzYWdlc10gPSB1c2VTdGF0ZShbXHJcbiAgICAgICAgJ9Cf0YDQuNCy0LXRgiwg0LrQsNC6INGC0LLQvtC4INC00LXQu9CwPycsXHJcbiAgICAgICAgJ9CU0LAg0LLRgNC+0LTQtSDQvdC10L/Qu9C+0YXQviwg0LAg0YLQstC+0Lg/JyxcclxuICAgICAgICAn0JTQsCDQstC+0YIg0LTQtdC70LDRjiDQsdGN0LonLFxyXG4gICAgICAgICfQodC+0YfRg9Cy0YHRgtCy0YPRjidcclxuICAgIF0pXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxNYWluV3JhcHBlcj5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYXJrXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3NldEFjdGl2ZShmYWxzZSl9PlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgICAgICAgICAgPFRhYmxlSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMT7QkNC70LXQutGB0LDQvdC00YAg0JjQstCw0L3QvtCyPC9oMT5cclxuICAgICAgICAgICAgICAgIDwvVGFibGVIZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8TWVzc2FnZXM+XHJcbiAgICAgICAgICAgICAgICB7bWVzc2FnZXMubWFwKChtZXNzYWdlKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e21lc3NhZ2V9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm90dG9tQm9yZGVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUJvZHk+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvTWVzc2FnZXM+XHJcbiAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgPC9NYWluV3JhcHBlcj5cclxuICAgICkgICAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERldGFpbE1lc3NhZ2VzIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgRGV0YWlsTWVzc2FnZXMgZnJvbSBcIi4vRGV0YWlsTWVzc2FnZXMvRGV0YWlsTWVzc2FnZXNcIlxyXG5pbXBvcnQgeyBNZXNzYWdlQXV0aG9ySW1hZ2UsIE1lc3NhZ2VJdGVtLCBNZXNzYWdlTGlzdCB9IGZyb20gXCIuL01lc3NhZ2VzLnN0eWxlc1wiXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuXHJcbmNvbnN0IE1lc3NhZ2VzID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGNyZWF0ZU1lc3NhZ2UgPSAoYXV0aG9yTmFtZTogc3RyaW5nLCB0ZXh0OiBzdHJpbmcsIGlkOiBudW1iZXIpID0+IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBBdXRob3I6IGF1dGhvck5hbWUsXHJcbiAgICAgICAgICAgIEF2YXRhcjogJ2h0dHBzOi8vbWVyYWdvci5jb20vZmlsZXMvc3R5bGVzLy9hdmFfODAwXzgwMF93bS9mdW5ueS1zdGFuZG9mZi1fbWVyYWdvci1jb21fMzQ5LmpwZycsXHJcbiAgICAgICAgICAgIE1lc3NhZ2U6IHRleHQsXHJcbiAgICAgICAgICAgIGlkOiBpZFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBbbWVzc2FnZXNdID0gdXNlU3RhdGUoW1xyXG4gICAgICAgIGNyZWF0ZU1lc3NhZ2UoJ9CQ0LvQtdC60YHQsNC90LTRgCDQmNCy0LDQvdC+0LInLCBcItCf0YDQuNCy0LXRgiwg0LrQsNC6INGC0LLQvtC4INC00LXQu9CwP1wiLCAwKSxcclxuICAgICAgICBjcmVhdGVNZXNzYWdlKCfQmtGC0L4t0YLQvicsIFwi0J7Qu9C+0LvQvtC70L5cIiwgMSksXHJcbiAgICAgICAgY3JlYXRlTWVzc2FnZSgn0JrRgtC+LdGC0L4nLCBcItCe0LvQvtC70L7Qu9C+XCIsIDIpLFxyXG4gICAgICAgIGNyZWF0ZU1lc3NhZ2UoJ9Ca0YLQvi3RgtC+JywgXCLQntC70L7Qu9C+0LvQvlwiLCAzKSxcclxuICAgICAgICBjcmVhdGVNZXNzYWdlKCfQmtGC0L4t0YLQvicsIFwi0J7Qu9C+0LvQvtC70L5cIiwgNClcclxuICAgIF0pXHJcblxyXG4gICAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIGNvbnN0IHJlbmRlck1lc3NhZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT7QodC+0L7QsdGJ0LXQvdC40Y88L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICAgICAgPE1lc3NhZ2VMaXN0ID5cclxuICAgICAgICAgICAgICAgICAgICB7bWVzc2FnZXMubWFwKChtZXNzYWdlKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZXNzYWdlSXRlbSBrZXk9e21lc3NhZ2UuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmUoIWFjdGl2ZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lc3NhZ2VBdXRob3JJbWFnZSBzcmM9e21lc3NhZ2UuQXZhdGFyfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+e21lc3NhZ2UuQXV0aG9yfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57bWVzc2FnZS5NZXNzYWdlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9NZXNzYWdlSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvTWVzc2FnZUxpc3Q+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYWN0aXZlPT09dHJ1ZSA/IDxEZXRhaWxNZXNzYWdlcyBwcm9wcz17YWN0aXZlfS8+IDogcmVuZGVyTWVzc2FnZSgpIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlcyJdLCJzb3VyY2VSb290IjoiIn0=