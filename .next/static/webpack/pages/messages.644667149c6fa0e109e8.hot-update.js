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
/* harmony import */ var _HiddenMenu_DetailMessages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HiddenMenu/DetailMessages */ "./src/components/Messages/HiddenMenu/DetailMessages.tsx");
/* harmony import */ var _Messages_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Messages.styles */ "./src/components/Messages/Messages.styles.ts");


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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([createMessage('Александр Иванов', "Привет, как твои дела?", 0), createMessage('Кто-то', "Олололо", 1)]),
      messages = _useState[0],
      setMessage = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      active = _useState2[0],
      setActive = _useState2[1];

  if (active) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_HiddenMenu_DetailMessages__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 16
    }, _this);
  } else {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Messages_styles__WEBPACK_IMPORTED_MODULE_3__["MessageList"], {
      children: messages.map(function (message) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Messages_styles__WEBPACK_IMPORTED_MODULE_3__["MessageItem"], {
          onClick: function onClick() {
            return setActive(!active);
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Messages_styles__WEBPACK_IMPORTED_MODULE_3__["MessageAuthorImage"], {
            src: message.Avatar
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
            children: message.Author
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: message.Message
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 25
          }, _this)]
        }, message.id, true, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 21
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, _this);
  }
};

_s(Messages, "F4T1/TLH2G4GmGkfl85rGOBuRcE=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTWVzc2FnZXMvTWVzc2FnZXMudHN4Il0sIm5hbWVzIjpbIk1lc3NhZ2VzIiwiY3JlYXRlTWVzc2FnZSIsImF1dGhvck5hbWUiLCJ0ZXh0IiwiaWQiLCJBdXRob3IiLCJBdmF0YXIiLCJNZXNzYWdlIiwidXNlU3RhdGUiLCJtZXNzYWdlcyIsInNldE1lc3NhZ2UiLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJtYXAiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQUE7O0FBRW5CLE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsVUFBRCxFQUFxQkMsSUFBckIsRUFBbUNDLEVBQW5DLEVBQWtEO0FBQ3BFLFdBQU87QUFDSEMsWUFBTSxFQUFFSCxVQURMO0FBRUhJLFlBQU0sRUFBRSxzRkFGTDtBQUdIQyxhQUFPLEVBQUVKLElBSE47QUFJSEMsUUFBRSxFQUFFQTtBQUpELEtBQVA7QUFNSCxHQVBEOztBQUZtQixrQkFXWUksc0RBQVEsQ0FBQyxDQUNwQ1AsYUFBYSxDQUFDLGtCQUFELEVBQXFCLHdCQUFyQixFQUErQyxDQUEvQyxDQUR1QixFQUVwQ0EsYUFBYSxDQUFDLFFBQUQsRUFBVyxTQUFYLEVBQXNCLENBQXRCLENBRnVCLENBQUQsQ0FYcEI7QUFBQSxNQVdaUSxRQVhZO0FBQUEsTUFXRkMsVUFYRTs7QUFBQSxtQkFnQlNGLHNEQUFRLENBQUMsS0FBRCxDQWhCakI7QUFBQSxNQWdCWkcsTUFoQlk7QUFBQSxNQWdCSkMsU0FoQkk7O0FBa0JuQixNQUFJRCxNQUFKLEVBQVk7QUFDUix3QkFBTyxxRUFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVA7QUFDSCxHQUZELE1BR0s7QUFDRCx3QkFDSSxxRUFBQyw0REFBRDtBQUFBLGdCQUNLRixRQUFRLENBQUNJLEdBQVQsQ0FBYSxVQUFDQyxPQUFEO0FBQUEsNEJBQ1YscUVBQUMsNERBQUQ7QUFDSSxpQkFBTyxFQUFFO0FBQUEsbUJBQU1GLFNBQVMsQ0FBQyxDQUFDRCxNQUFGLENBQWY7QUFBQSxXQURiO0FBQUEsa0NBRUkscUVBQUMsbUVBQUQ7QUFBb0IsZUFBRyxFQUFFRyxPQUFPLENBQUNSO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkosZUFHSTtBQUFBLHNCQUFLUSxPQUFPLENBQUNUO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFISixlQUlJO0FBQUEsc0JBQUlTLE9BQU8sQ0FBQ1A7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpKO0FBQUEsV0FBa0JPLE9BQU8sQ0FBQ1YsRUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEVTtBQUFBLE9BQWI7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREo7QUFZSDtBQUNKLENBbkNEOztHQUFNSixROztLQUFBQSxRO0FBcUNTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9tZXNzYWdlcy42NDQ2NjcxNDljNmZhMGUxMDllOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgRGV0YWlsTWVzc2FnZXMgZnJvbSBcIi4vSGlkZGVuTWVudS9EZXRhaWxNZXNzYWdlc1wiXHJcbmltcG9ydCB7IE1lc3NhZ2VBdXRob3JJbWFnZSwgTWVzc2FnZUl0ZW0sIE1lc3NhZ2VMaXN0IH0gZnJvbSBcIi4vTWVzc2FnZXMuc3R5bGVzXCJcclxuXHJcbmNvbnN0IE1lc3NhZ2VzID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGNyZWF0ZU1lc3NhZ2UgPSAoYXV0aG9yTmFtZTogc3RyaW5nLCB0ZXh0OiBzdHJpbmcsIGlkOiBudW1iZXIpID0+IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBBdXRob3I6IGF1dGhvck5hbWUsXHJcbiAgICAgICAgICAgIEF2YXRhcjogJ2h0dHBzOi8vbWVyYWdvci5jb20vZmlsZXMvc3R5bGVzLy9hdmFfODAwXzgwMF93bS9mdW5ueS1zdGFuZG9mZi1fbWVyYWdvci1jb21fMzQ5LmpwZycsXHJcbiAgICAgICAgICAgIE1lc3NhZ2U6IHRleHQsXHJcbiAgICAgICAgICAgIGlkOiBpZFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBbbWVzc2FnZXMsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoW1xyXG4gICAgICAgIGNyZWF0ZU1lc3NhZ2UoJ9CQ0LvQtdC60YHQsNC90LTRgCDQmNCy0LDQvdC+0LInLCBcItCf0YDQuNCy0LXRgiwg0LrQsNC6INGC0LLQvtC4INC00LXQu9CwP1wiLCAwKSxcclxuICAgICAgICBjcmVhdGVNZXNzYWdlKCfQmtGC0L4t0YLQvicsIFwi0J7Qu9C+0LvQvtC70L5cIiwgMSlcclxuICAgIF0pXHJcblxyXG4gICAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIGlmIChhY3RpdmUpIHtcclxuICAgICAgICByZXR1cm4gPERldGFpbE1lc3NhZ2VzIC8+XHJcbiAgICB9IFxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPE1lc3NhZ2VMaXN0ID5cclxuICAgICAgICAgICAgICAgIHttZXNzYWdlcy5tYXAoKG1lc3NhZ2UpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8TWVzc2FnZUl0ZW0ga2V5PXttZXNzYWdlLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmUoIWFjdGl2ZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVzc2FnZUF1dGhvckltYWdlIHNyYz17bWVzc2FnZS5BdmF0YXJ9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1PnttZXNzYWdlLkF1dGhvcn08L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57bWVzc2FnZS5NZXNzYWdlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L01lc3NhZ2VJdGVtPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvTWVzc2FnZUxpc3Q+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlcyJdLCJzb3VyY2VSb290IjoiIn0=