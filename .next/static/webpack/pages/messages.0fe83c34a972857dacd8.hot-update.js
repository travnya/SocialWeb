webpackHotUpdate_N_E("pages/messages",{

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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    Author: 'Александр Иванов',
    Message: 'Привет! Как дела?'
  }),
      messages = _useState[0];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_DetailMessages_styles__WEBPACK_IMPORTED_MODULE_2__["MainWrapper"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
      children: messages.map(function (message) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_DetailMessages_styles__WEBPACK_IMPORTED_MODULE_2__["Messages"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_DetailMessages_styles__WEBPACK_IMPORTED_MODULE_2__["TableHeader"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
              children: "\u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440 \u0418\u0432\u0430\u043D\u043E\u0432"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 20,
              columnNumber: 25
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_DetailMessages_styles__WEBPACK_IMPORTED_MODULE_2__["TableBody"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: message
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 25
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_DetailMessages_styles__WEBPACK_IMPORTED_MODULE_2__["BottomBorder"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 25
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 17
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 9
  }, _this);
};

_s(DetailMessages, "T0Vozf+bY46aC7jWCjH1PrqNcUI=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTWVzc2FnZXMvSGlkZGVuTWVudS9EZXRhaWxNZXNzYWdlcy50c3giXSwibmFtZXMiOlsiRGV0YWlsTWVzc2FnZXMiLCJ1c2VTdGF0ZSIsIkF1dGhvciIsIk1lc3NhZ2UiLCJtZXNzYWdlcyIsIm1hcCIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUFBOztBQUFBLGtCQUVOQyxzREFBUSxDQUN2QjtBQUNJQyxVQUFNLEVBQUUsa0JBRFo7QUFFSUMsV0FBTyxFQUFFO0FBRmIsR0FEdUIsQ0FGRjtBQUFBLE1BRWxCQyxRQUZrQjs7QUFVekIsc0JBQ0kscUVBQUMsa0VBQUQ7QUFBQSwyQkFDSTtBQUFBLGdCQUNLQSxRQUFRLENBQUNDLEdBQVQsQ0FBYSxVQUFDQyxPQUFEO0FBQUEsNEJBQ2QscUVBQUMsK0RBQUQ7QUFBQSxrQ0FDSSxxRUFBQyxrRUFBRDtBQUFBLG1DQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUlJLHFFQUFDLGdFQUFEO0FBQUEsb0NBQ0k7QUFBQSx3QkFBSUE7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLGVBRUkscUVBQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURjO0FBQUEsT0FBYjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFpQkgsQ0EzQkQ7O0dBQU1OLGM7O0tBQUFBLGM7QUE2QlNBLDZFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL21lc3NhZ2VzLjBmZTgzYzM0YTk3Mjg1N2RhY2Q4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IE1haW5XcmFwcGVyLCBUYWJsZUhlYWRlciwgVGFibGVCb2R5LCBCb3R0b21Cb3JkZXIsIE1lc3NhZ2VzIH0gZnJvbSBcIi4vRGV0YWlsTWVzc2FnZXMuc3R5bGVzXCJcclxuXHJcbmNvbnN0IERldGFpbE1lc3NhZ2VzID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFttZXNzYWdlc10gPSB1c2VTdGF0ZShcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEF1dGhvcjogJ9CQ0LvQtdC60YHQsNC90LTRgCDQmNCy0LDQvdC+0LInLFxyXG4gICAgICAgICAgICBNZXNzYWdlOiAn0J/RgNC40LLQtdGCISDQmtCw0Log0LTQtdC70LA/J1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgKVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8TWFpbldyYXBwZXI+XHJcbiAgICAgICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgICAgIHttZXNzYWdlcy5tYXAoKG1lc3NhZ2UpID0+IChcclxuICAgICAgICAgICAgICAgIDxNZXNzYWdlcz5cclxuICAgICAgICAgICAgICAgICAgICA8VGFibGVIZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT7QkNC70LXQutGB0LDQvdC00YAg0JjQstCw0L3QvtCyPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8L1RhYmxlSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZUJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPnttZXNzYWdlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJvdHRvbUJvcmRlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGFibGVCb2R5PlxyXG4gICAgICAgICAgICAgICAgPC9NZXNzYWdlcz5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIDwvTWFpbldyYXBwZXI+XHJcbiAgICApICAgIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZXRhaWxNZXNzYWdlcyJdLCJzb3VyY2VSb290IjoiIn0=