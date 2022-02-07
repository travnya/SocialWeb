webpackHotUpdate_N_E("pages/messages",{

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
/* harmony import */ var _Messages_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Messages.styles */ "./src/components/Messages/Messages.styles.ts");


var _jsxFileName = "C:\\Users\\vsamsonov\\Desktop\\SocialWeb\\src\\components\\Messages\\Messages.tsx",
    _this = undefined,
    _s2 = $RefreshSig$();




var Messages = function Messages() {
  _s2();

  var _s = $RefreshSig$();

  var createMessage = function createMessage(authorName, text, id) {
    return {
      Author: authorName,
      Avatar: 'https://meragor.com/files/styles//ava_800_800_wm/funny-standoff-_meragor-com_349.jpg',
      Message: text,
      id: id
    };
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([createMessage('Александр Иванов', "Привет, как твои дела?", 0), createMessage('Кто-то', "Привет, как твои дела?", 1), createMessage('Кто-то', "Привет, как твои дела?", 2), createMessage('Кто-то', "Привет, как твои дела?", 3), createMessage('Кто-то', "Привет, как твои дела?", 4)]),
      messages = _useState[0],
      setMessage = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      active = _useState2[0],
      setActive = _useState2[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Messages_styles__WEBPACK_IMPORTED_MODULE_2__["MessageList"], {
    children: messages.map(_s(function (message) {
      _s();

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Messages_styles__WEBPACK_IMPORTED_MODULE_2__["MessageItem"], {
        onClick: Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(!active),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Messages_styles__WEBPACK_IMPORTED_MODULE_2__["MessageAuthorImage"], {
          src: message.Avatar
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
          children: message.Author
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: message.Message
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 21
        }, _this)]
      }, message.id, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }, _this);
    }, "cnOVFnUX2Gzi34IGqYLLH2CoWzA="))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 9
  }, _this);
};

_s2(Messages, "d7Y05hSivQrxjgofK01lpQpaeTU=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTWVzc2FnZXMvTWVzc2FnZXMudHN4Il0sIm5hbWVzIjpbIk1lc3NhZ2VzIiwiY3JlYXRlTWVzc2FnZSIsImF1dGhvck5hbWUiLCJ0ZXh0IiwiaWQiLCJBdXRob3IiLCJBdmF0YXIiLCJNZXNzYWdlIiwidXNlU3RhdGUiLCJtZXNzYWdlcyIsInNldE1lc3NhZ2UiLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJtYXAiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQUE7O0FBQUE7O0FBRW5CLE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsVUFBRCxFQUFxQkMsSUFBckIsRUFBbUNDLEVBQW5DLEVBQWtEO0FBQ3BFLFdBQU87QUFDSEMsWUFBTSxFQUFFSCxVQURMO0FBRUhJLFlBQU0sRUFBRSxzRkFGTDtBQUdIQyxhQUFPLEVBQUVKLElBSE47QUFJSEMsUUFBRSxFQUFFQTtBQUpELEtBQVA7QUFNSCxHQVBEOztBQUZtQixrQkFXWUksc0RBQVEsQ0FBQyxDQUNwQ1AsYUFBYSxDQUFDLGtCQUFELEVBQXFCLHdCQUFyQixFQUErQyxDQUEvQyxDQUR1QixFQUVwQ0EsYUFBYSxDQUFDLFFBQUQsRUFBVyx3QkFBWCxFQUFxQyxDQUFyQyxDQUZ1QixFQUdwQ0EsYUFBYSxDQUFDLFFBQUQsRUFBVyx3QkFBWCxFQUFxQyxDQUFyQyxDQUh1QixFQUlwQ0EsYUFBYSxDQUFDLFFBQUQsRUFBVyx3QkFBWCxFQUFxQyxDQUFyQyxDQUp1QixFQUtwQ0EsYUFBYSxDQUFDLFFBQUQsRUFBVyx3QkFBWCxFQUFxQyxDQUFyQyxDQUx1QixDQUFELENBWHBCO0FBQUEsTUFXWlEsUUFYWTtBQUFBLE1BV0ZDLFVBWEU7O0FBQUEsbUJBbUJTRixzREFBUSxDQUFDLEtBQUQsQ0FuQmpCO0FBQUEsTUFtQlpHLE1BbkJZO0FBQUEsTUFtQkpDLFNBbkJJOztBQXFCbkIsc0JBQ0kscUVBQUMsNERBQUQ7QUFBQSxjQUNLSCxRQUFRLENBQUNJLEdBQVQsSUFBYSxVQUFDQyxPQUFEO0FBQUE7O0FBQUEsMEJBQ1YscUVBQUMsNERBQUQ7QUFDSSxlQUFPLEVBQUVOLHNEQUFRLENBQUMsQ0FBQ0csTUFBRixDQURyQjtBQUFBLGdDQUVJLHFFQUFDLG1FQUFEO0FBQW9CLGFBQUcsRUFBRUcsT0FBTyxDQUFDUjtBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKLGVBR0k7QUFBQSxvQkFBS1EsT0FBTyxDQUFDVDtBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEosZUFJSTtBQUFBLG9CQUFJUyxPQUFPLENBQUNQO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKSjtBQUFBLFNBQWtCTyxPQUFPLENBQUNWLEVBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEVTtBQUFBLEtBQWI7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFZSCxDQWpDRDs7SUFBTUosUTs7S0FBQUEsUTtBQW1DU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWVzc2FnZXMuMTRmMDBjYmI4OTQ1ZmMwOGQ3MWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IERldGFpbE1lc3NhZ2VzIGZyb20gXCIuL0hpZGRlbk1lbnUvRGV0YWlsTWVzc2FnZXNcIlxyXG5pbXBvcnQgeyBNZXNzYWdlQXV0aG9ySW1hZ2UsIE1lc3NhZ2VJdGVtLCBNZXNzYWdlTGlzdCB9IGZyb20gXCIuL01lc3NhZ2VzLnN0eWxlc1wiXHJcblxyXG5jb25zdCBNZXNzYWdlcyA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBjcmVhdGVNZXNzYWdlID0gKGF1dGhvck5hbWU6IHN0cmluZywgdGV4dDogc3RyaW5nLCBpZDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgQXV0aG9yOiBhdXRob3JOYW1lLFxyXG4gICAgICAgICAgICBBdmF0YXI6ICdodHRwczovL21lcmFnb3IuY29tL2ZpbGVzL3N0eWxlcy8vYXZhXzgwMF84MDBfd20vZnVubnktc3RhbmRvZmYtX21lcmFnb3ItY29tXzM0OS5qcGcnLFxyXG4gICAgICAgICAgICBNZXNzYWdlOiB0ZXh0LFxyXG4gICAgICAgICAgICBpZDogaWRcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgW21lc3NhZ2VzLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKFtcclxuICAgICAgICBjcmVhdGVNZXNzYWdlKCfQkNC70LXQutGB0LDQvdC00YAg0JjQstCw0L3QvtCyJywgXCLQn9GA0LjQstC10YIsINC60LDQuiDRgtCy0L7QuCDQtNC10LvQsD9cIiwgMCksXHJcbiAgICAgICAgY3JlYXRlTWVzc2FnZSgn0JrRgtC+LdGC0L4nLCBcItCf0YDQuNCy0LXRgiwg0LrQsNC6INGC0LLQvtC4INC00LXQu9CwP1wiLCAxKSxcclxuICAgICAgICBjcmVhdGVNZXNzYWdlKCfQmtGC0L4t0YLQvicsIFwi0J/RgNC40LLQtdGCLCDQutCw0Log0YLQstC+0Lgg0LTQtdC70LA/XCIsIDIpLFxyXG4gICAgICAgIGNyZWF0ZU1lc3NhZ2UoJ9Ca0YLQvi3RgtC+JywgXCLQn9GA0LjQstC10YIsINC60LDQuiDRgtCy0L7QuCDQtNC10LvQsD9cIiwgMyksXHJcbiAgICAgICAgY3JlYXRlTWVzc2FnZSgn0JrRgtC+LdGC0L4nLCBcItCf0YDQuNCy0LXRgiwg0LrQsNC6INGC0LLQvtC4INC00LXQu9CwP1wiLCA0KVxyXG4gICAgXSlcclxuXHJcbiAgICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TWVzc2FnZUxpc3QgPlxyXG4gICAgICAgICAgICB7bWVzc2FnZXMubWFwKChtZXNzYWdlKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8TWVzc2FnZUl0ZW0ga2V5PXttZXNzYWdlLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3VzZVN0YXRlKCFhY3RpdmUpfT5cclxuICAgICAgICAgICAgICAgICAgICA8TWVzc2FnZUF1dGhvckltYWdlIHNyYz17bWVzc2FnZS5BdmF0YXJ9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8aDU+e21lc3NhZ2UuQXV0aG9yfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+e21lc3NhZ2UuTWVzc2FnZX08L3A+XHJcbiAgICAgICAgICAgICAgICA8L01lc3NhZ2VJdGVtPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L01lc3NhZ2VMaXN0PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlcyJdLCJzb3VyY2VSb290IjoiIn0=