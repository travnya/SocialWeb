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
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_DetailMessages_styles__WEBPACK_IMPORTED_MODULE_2__["TableHeader"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          children: "\u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440 \u0418\u0432\u0430\u043D\u043E\u0432"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_DetailMessages_styles__WEBPACK_IMPORTED_MODULE_2__["Messages"], {
        children: messages.map(function (message) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_DetailMessages_styles__WEBPACK_IMPORTED_MODULE_2__["TableBody"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: message
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 25
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_DetailMessages_styles__WEBPACK_IMPORTED_MODULE_2__["BottomBorder"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 26,
              columnNumber: 25
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 21
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTWVzc2FnZXMvRGV0YWlsTWVzc2FnZXMvRGV0YWlsTWVzc2FnZXMudHN4Il0sIm5hbWVzIjpbIkRldGFpbE1lc3NhZ2VzIiwic3RhdHVzIiwidXNlU3RhdGUiLCJtZXNzYWdlcyIsIm1hcCIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsTUFBRCxFQUFxQjtBQUFBOztBQUFBLGtCQUVyQkMsc0RBQVEsQ0FBQyxDQUN4Qix3QkFEd0IsRUFFeEIsMkJBRndCLEVBR3hCLGtCQUh3QixFQUl4QixZQUp3QixDQUFELENBRmE7QUFBQSxNQUVqQ0MsUUFGaUM7O0FBU3hDLHNCQUNJLHFFQUFDLGtFQUFEO0FBQUEsNEJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBSUk7QUFBQSw4QkFDSSxxRUFBQyxrRUFBRDtBQUFBLCtCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBSUkscUVBQUMsK0RBQUQ7QUFBQSxrQkFDQ0EsUUFBUSxDQUFDQyxHQUFULENBQWEsVUFBQ0MsT0FBRDtBQUFBLDhCQUNWLHFFQUFDLGdFQUFEO0FBQUEsb0NBQ0k7QUFBQSx3QkFBSUE7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLGVBRUkscUVBQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRFU7QUFBQSxTQUFiO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBb0JILENBN0JEOztHQUFNTCxjOztLQUFBQSxjO0FBK0JTQSw2RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9tZXNzYWdlcy5hYjI5NzIyNDEzNDQzNjgzOGNiYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBNYWluV3JhcHBlciwgVGFibGVIZWFkZXIsIFRhYmxlQm9keSwgQm90dG9tQm9yZGVyLCBNZXNzYWdlcyB9IGZyb20gXCIuL0RldGFpbE1lc3NhZ2VzLnN0eWxlc1wiXHJcblxyXG5jb25zdCBEZXRhaWxNZXNzYWdlcyA9IChzdGF0dXM6IGJvb2xlYW4pID0+IHtcclxuXHJcbiAgICBjb25zdCBbbWVzc2FnZXNdID0gdXNlU3RhdGUoW1xyXG4gICAgICAgICfQn9GA0LjQstC10YIsINC60LDQuiDRgtCy0L7QuCDQtNC10LvQsD8nLFxyXG4gICAgICAgICfQlNCwINCy0YDQvtC00LUg0L3QtdC/0LvQvtGF0L4sINCwINGC0LLQvtC4PycsXHJcbiAgICAgICAgJ9CU0LAg0LLQvtGCINC00LXQu9Cw0Y4g0LHRjdC6JyxcclxuICAgICAgICAn0KHQvtGH0YPQstGB0YLQstGD0Y4nXHJcbiAgICBdKVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8TWFpbldyYXBwZXI+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgICAgIDxUYWJsZUhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8aDE+0JDQu9C10LrRgdCw0L3QtNGAINCY0LLQsNC90L7QsjwvaDE+XHJcbiAgICAgICAgICAgICAgICA8L1RhYmxlSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPE1lc3NhZ2VzPlxyXG4gICAgICAgICAgICAgICAge21lc3NhZ2VzLm1hcCgobWVzc2FnZSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZUJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPnttZXNzYWdlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJvdHRvbUJvcmRlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGFibGVCb2R5PlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L01lc3NhZ2VzPlxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIDwvTWFpbldyYXBwZXI+XHJcbiAgICApICAgIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZXRhaWxNZXNzYWdlcyJdLCJzb3VyY2VSb290IjoiIn0=