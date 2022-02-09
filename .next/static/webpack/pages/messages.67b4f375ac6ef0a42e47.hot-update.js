webpackHotUpdate_N_E("pages/messages",{

/***/ "./src/components/Messages/HiddenMenu/DetailMessages.styles.ts":
/*!*********************************************************************!*\
  !*** ./src/components/Messages/HiddenMenu/DetailMessages.styles.ts ***!
  \*********************************************************************/
/*! exports provided: MainWrapper, TableHeader, TableBody, BottomBorder, Messages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainWrapper", function() { return MainWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableHeader", function() { return TableHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableBody", function() { return TableBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomBorder", function() { return BottomBorder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Messages", function() { return Messages; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");


function _templateObject5() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    margin-top: 1em;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    border-bottom: .05em solid #444;\n    margin: 0 auto;\n    width: 65%;\n\n    :last-child {\n        \n    }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width: 100%;\n    height: 3em;\n    margin: .5em auto .5em auto;\n    p {\n        line-height: 220%;\n        margin-left: 2em;\n        width: inherit;\n    }\n    :first-child {\n        margin-top: 1em;\n    }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    background-color: #333;\n    box-shadow: 0 0 10px #181818;\n    height: 3em;\n    display: flex;\n    justify-content: center;\n    margin: auto auto;\n    border-radius: .25em;\n    h1 {\n        font-size: 2.5em;\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    display: inline-table;\n    width: 100%;\n    table {\n        width: inherit;\n    }\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var MainWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject());
var TableHeader = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject2());
var TableBody = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject3());
var BottomBorder = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject4());
var Messages = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject5());

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

/***/ "./src/components/Messages/HiddenMenu/DetailMessages.tsx":
/*!***************************************************************!*\
  !*** ./src/components/Messages/HiddenMenu/DetailMessages.tsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DetailMessages_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DetailMessages.styles */ "./src/components/Messages/HiddenMenu/DetailMessages.styles.ts");



var _jsxFileName = "C:\\Users\\vsamsonov\\Desktop\\SocialWeb\\src\\components\\Messages\\HiddenMenu\\DetailMessages.tsx",
    _this = undefined,
    _s = $RefreshSig$();




var DetailMessages = function DetailMessages() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([{
    Author: 'Александр Иванов',
    Text: 'Привет! Как дела?'
  }, {
    Author: 'Владислав Самсонов',
    Text: 'Неплохо, учу фронтенд'
  }]),
      messages = _useState[0];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: messages.map(function (message) {
      /*#__PURE__*/
      Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_DetailMessages_styles__WEBPACK_IMPORTED_MODULE_2__["TableBody"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          children: message.Author
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: message.Text
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }, _this);
    })
  }, void 0, false);
};

_s(DetailMessages, "RnJ67t1aWUL8u0JiKI8KC4sRfp8=");

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTWVzc2FnZXMvSGlkZGVuTWVudS9EZXRhaWxNZXNzYWdlcy5zdHlsZXMudHMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL01lc3NhZ2VzL0hpZGRlbk1lbnUvRGV0YWlsTWVzc2FnZXMudHN4Il0sIm5hbWVzIjpbIk1haW5XcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwiVGFibGVIZWFkZXIiLCJUYWJsZUJvZHkiLCJCb3R0b21Cb3JkZXIiLCJNZXNzYWdlcyIsIkRldGFpbE1lc3NhZ2VzIiwidXNlU3RhdGUiLCJBdXRob3IiLCJUZXh0IiwibWVzc2FnZXMiLCJtYXAiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQSxXQUFXLEdBQUdDLHVEQUFNLENBQUNDLEdBQVYsbUJBQWpCO0FBU0EsSUFBTUMsV0FBVyxHQUFHRix1REFBTSxDQUFDQyxHQUFWLG9CQUFqQjtBQWFBLElBQU1FLFNBQVMsR0FBR0gsdURBQU0sQ0FBQ0MsR0FBVixvQkFBZjtBQWNBLElBQU1HLFlBQVksR0FBR0osdURBQU0sQ0FBQ0MsR0FBVixvQkFBbEI7QUFVQSxJQUFNSSxRQUFRLEdBQUdMLHVEQUFNLENBQUNDLEdBQVYsb0JBQWQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRFA7QUFDQTs7QUFFQSxJQUFNSyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFBQTs7QUFBQSxrQkFFTkMsc0RBQVEsQ0FBQyxDQUN4QjtBQUNJQyxVQUFNLEVBQUUsa0JBRFo7QUFFSUMsUUFBSSxFQUFFO0FBRlYsR0FEd0IsRUFLeEI7QUFDSUQsVUFBTSxFQUFFLG9CQURaO0FBRUlDLFFBQUksRUFBRTtBQUZWLEdBTHdCLENBQUQsQ0FGRjtBQUFBLE1BRWxCQyxRQUZrQjs7QUFhekIsc0JBQ0k7QUFBQSxjQUNLQSxRQUFRLENBQUNDLEdBQVQsQ0FBYSxVQUFDQyxPQUFELEVBQWE7QUFDdkI7QUFBQSwyRUFBQyxnRUFBRDtBQUFBLGdDQUNJO0FBQUEsb0JBQUtBLE9BQU8sQ0FBQ0o7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBRUk7QUFBQSxvQkFBSUksT0FBTyxDQUFDSDtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUgsS0FMQTtBQURMLG1CQURKO0FBVUgsQ0F2QkQ7O0dBQU1ILGM7O0tBQUFBLGM7QUF5QlNBLDZFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL21lc3NhZ2VzLjY3YjRmMzc1YWM2ZWYwYTQyZTQ3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBNYWluV3JhcHBlciA9IHN0eWxlZC5kaXYgYFxyXG4gICAgZGlzcGxheTogaW5saW5lLXRhYmxlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0YWJsZSB7XHJcbiAgICAgICAgd2lkdGg6IGluaGVyaXQ7XHJcbiAgICB9XHJcblxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgVGFibGVIZWFkZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4ICMxODE4MTg7XHJcbiAgICBoZWlnaHQ6IDNlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogYXV0byBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjI1ZW07XHJcbiAgICBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyLjVlbTtcclxuICAgIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IFRhYmxlQm9keSA9IHN0eWxlZC5kaXYgYFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDNlbTtcclxuICAgIG1hcmdpbjogLjVlbSBhdXRvIC41ZW0gYXV0bztcclxuICAgIHAge1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMjAlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyZW07XHJcbiAgICAgICAgd2lkdGg6IGluaGVyaXQ7XHJcbiAgICB9XHJcbiAgICA6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDFlbTtcclxuICAgIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEJvdHRvbUJvcmRlciA9IHN0eWxlZC5kaXYgYFxyXG4gICAgYm9yZGVyLWJvdHRvbTogLjA1ZW0gc29saWQgIzQ0NDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgd2lkdGg6IDY1JTtcclxuXHJcbiAgICA6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBNZXNzYWdlcyA9IHN0eWxlZC5kaXYgYFxyXG4gICAgbWFyZ2luLXRvcDogMWVtO1xyXG5gIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBNYWluV3JhcHBlciwgVGFibGVIZWFkZXIsIFRhYmxlQm9keSwgQm90dG9tQm9yZGVyLCBNZXNzYWdlcyB9IGZyb20gXCIuL0RldGFpbE1lc3NhZ2VzLnN0eWxlc1wiXHJcblxyXG5jb25zdCBEZXRhaWxNZXNzYWdlcyA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbbWVzc2FnZXNdID0gdXNlU3RhdGUoW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQXV0aG9yOiAn0JDQu9C10LrRgdCw0L3QtNGAINCY0LLQsNC90L7QsicsXHJcbiAgICAgICAgICAgIFRleHQ6ICfQn9GA0LjQstC10YIhINCa0LDQuiDQtNC10LvQsD8nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEF1dGhvcjogJ9CS0LvQsNC00LjRgdC70LDQsiDQodCw0LzRgdC+0L3QvtCyJyxcclxuICAgICAgICAgICAgVGV4dDogJ9Cd0LXQv9C70L7RhdC+LCDRg9GH0YMg0YTRgNC+0L3RgtC10L3QtCdcclxuICAgICAgICB9XHJcbiAgICBdKVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7bWVzc2FnZXMubWFwKChtZXNzYWdlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICA8VGFibGVCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMT57bWVzc2FnZS5BdXRob3J9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8cD57bWVzc2FnZS5UZXh0fTwvcD5cclxuICAgICAgICAgICAgICAgIDwvVGFibGVCb2R5PlxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICA8Lz5cclxuICAgICkgICAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERldGFpbE1lc3NhZ2VzIl0sInNvdXJjZVJvb3QiOiIifQ==