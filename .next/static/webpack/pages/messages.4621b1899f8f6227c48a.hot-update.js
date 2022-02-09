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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([{
    Author: 'Александр Иванов',
    Text: 'Привет! Как дела?'
  }, {
    Author: 'Владислав Самсонов',
    Text: 'Неплохо, учу фронтенд'
  }]),
      messages = _useState[0];

  var renderMessage = function renderMessage(messages) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_DetailMessages_styles__WEBPACK_IMPORTED_MODULE_2__["MainWrapper"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_DetailMessages_styles__WEBPACK_IMPORTED_MODULE_2__["Messages"], {
        children: messages.map(function (message) {
          /*#__PURE__*/
          Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_DetailMessages_styles__WEBPACK_IMPORTED_MODULE_2__["TableBody"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
              children: message.Author
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: message.Text
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 25
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }, _this);
  };

  return renderMessage(messages);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTWVzc2FnZXMvSGlkZGVuTWVudS9EZXRhaWxNZXNzYWdlcy50c3giXSwibmFtZXMiOlsiRGV0YWlsTWVzc2FnZXMiLCJ1c2VTdGF0ZSIsIkF1dGhvciIsIlRleHQiLCJtZXNzYWdlcyIsInJlbmRlck1lc3NhZ2UiLCJtYXAiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFBQTs7QUFBQSxrQkFFTkMsc0RBQVEsQ0FBQyxDQUN4QjtBQUNJQyxVQUFNLEVBQUUsa0JBRFo7QUFFSUMsUUFBSSxFQUFFO0FBRlYsR0FEd0IsRUFLeEI7QUFDSUQsVUFBTSxFQUFFLG9CQURaO0FBRUlDLFFBQUksRUFBRTtBQUZWLEdBTHdCLENBQUQsQ0FGRjtBQUFBLE1BRWxCQyxRQUZrQjs7QUFhekIsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDRCxRQUFELEVBQTZCO0FBQy9DLHdCQUNJLHFFQUFDLGtFQUFEO0FBQUEsNkJBQ0kscUVBQUMsK0RBQUQ7QUFBQSxrQkFDS0EsUUFBUSxDQUFDRSxHQUFULENBQWEsVUFBQ0MsT0FBRCxFQUFhO0FBQ3ZCO0FBQUEsK0VBQUMsZ0VBQUQ7QUFBQSxvQ0FDSTtBQUFBLHdCQUFLQSxPQUFPLENBQUNMO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQUVJO0FBQUEsd0JBQUlLLE9BQU8sQ0FBQ0o7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlILFNBTEE7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKO0FBWUgsR0FiRDs7QUFlQSxTQUFPRSxhQUFhLENBQUNELFFBQUQsQ0FBcEI7QUFDSCxDQTdCRDs7R0FBTUosYzs7S0FBQUEsYztBQStCU0EsNkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWVzc2FnZXMuNDYyMWIxODk5ZjhmNjIyN2M0OGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgTWFpbldyYXBwZXIsIFRhYmxlSGVhZGVyLCBUYWJsZUJvZHksIEJvdHRvbUJvcmRlciwgTWVzc2FnZXMgfSBmcm9tIFwiLi9EZXRhaWxNZXNzYWdlcy5zdHlsZXNcIlxyXG5cclxuY29uc3QgRGV0YWlsTWVzc2FnZXMgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW21lc3NhZ2VzXSA9IHVzZVN0YXRlKFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEF1dGhvcjogJ9CQ0LvQtdC60YHQsNC90LTRgCDQmNCy0LDQvdC+0LInLFxyXG4gICAgICAgICAgICBUZXh0OiAn0J/RgNC40LLQtdGCISDQmtCw0Log0LTQtdC70LA/J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBBdXRob3I6ICfQktC70LDQtNC40YHQu9Cw0LIg0KHQsNC80YHQvtC90L7QsicsXHJcbiAgICAgICAgICAgIFRleHQ6ICfQndC10L/Qu9C+0YXQviwg0YPRh9GDINGE0YDQvtC90YLQtdC90LQnXHJcbiAgICAgICAgfVxyXG4gICAgXSlcclxuXHJcbiAgICBjb25zdCByZW5kZXJNZXNzYWdlID0gKG1lc3NhZ2VzOiBBcnJheTxvYmplY3Q+KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPE1haW5XcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgPE1lc3NhZ2VzPlxyXG4gICAgICAgICAgICAgICAgICAgIHttZXNzYWdlcy5tYXAoKG1lc3NhZ2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT57bWVzc2FnZS5BdXRob3J9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnttZXNzYWdlLlRleHR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQm9keT5cclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvTWVzc2FnZXM+XHJcbiAgICAgICAgICAgIDwvTWFpbldyYXBwZXI+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihyZW5kZXJNZXNzYWdlKG1lc3NhZ2VzKSkgICAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERldGFpbE1lc3NhZ2VzIl0sInNvdXJjZVJvb3QiOiIifQ==