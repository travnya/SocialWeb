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

  return active == true ? renderMessage() : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_DetailMessages_DetailMessages__WEBPACK_IMPORTED_MODULE_2__["default"], {
    status: active
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 45
  }, _this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTWVzc2FnZXMvTWVzc2FnZXMudHN4Il0sIm5hbWVzIjpbIk1lc3NhZ2VzIiwiY3JlYXRlTWVzc2FnZSIsImF1dGhvck5hbWUiLCJ0ZXh0IiwiaWQiLCJBdXRob3IiLCJBdmF0YXIiLCJNZXNzYWdlIiwidXNlU3RhdGUiLCJtZXNzYWdlcyIsImFjdGl2ZSIsInNldEFjdGl2ZSIsInJlbmRlck1lc3NhZ2UiLCJtYXAiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFFbkIsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxVQUFELEVBQXFCQyxJQUFyQixFQUFtQ0MsRUFBbkMsRUFBa0Q7QUFDcEUsV0FBTztBQUNIQyxZQUFNLEVBQUVILFVBREw7QUFFSEksWUFBTSxFQUFFLHNGQUZMO0FBR0hDLGFBQU8sRUFBRUosSUFITjtBQUlIQyxRQUFFLEVBQUVBO0FBSkQsS0FBUDtBQU1ILEdBUEQ7O0FBRm1CLGtCQVdBSSxzREFBUSxDQUFDLENBQ3hCUCxhQUFhLENBQUMsa0JBQUQsRUFBcUIsd0JBQXJCLEVBQStDLENBQS9DLENBRFcsRUFFeEJBLGFBQWEsQ0FBQyxRQUFELEVBQVcsU0FBWCxFQUFzQixDQUF0QixDQUZXLEVBR3hCQSxhQUFhLENBQUMsUUFBRCxFQUFXLFNBQVgsRUFBc0IsQ0FBdEIsQ0FIVyxFQUl4QkEsYUFBYSxDQUFDLFFBQUQsRUFBVyxTQUFYLEVBQXNCLENBQXRCLENBSlcsRUFLeEJBLGFBQWEsQ0FBQyxRQUFELEVBQVcsU0FBWCxFQUFzQixDQUF0QixDQUxXLENBQUQsQ0FYUjtBQUFBLE1BV1pRLFFBWFk7O0FBQUEsbUJBbUJTRCxzREFBUSxDQUFDLEtBQUQsQ0FuQmpCO0FBQUEsTUFtQlpFLE1BbkJZO0FBQUEsTUFtQkpDLFNBbkJJOztBQXFCbkIsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQ3hCLHdCQUNJO0FBQUEsOEJBQ0kscUVBQUMsZ0RBQUQ7QUFBQSwrQkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUlJLHFFQUFDLDREQUFEO0FBQUEsa0JBQ0tILFFBQVEsQ0FBQ0ksR0FBVCxDQUFhLFVBQUNDLE9BQUQ7QUFBQSw4QkFDVixxRUFBQyw0REFBRDtBQUNJLG1CQUFPLEVBQUU7QUFBQSxxQkFBTUgsU0FBUyxDQUFDLENBQUNELE1BQUYsQ0FBZjtBQUFBLGFBRGI7QUFBQSxvQ0FFSSxxRUFBQyxtRUFBRDtBQUFvQixpQkFBRyxFQUFFSSxPQUFPLENBQUNSO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkosZUFHSTtBQUFBLHdCQUFLUSxPQUFPLENBQUNUO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFISixlQUlJO0FBQUEsd0JBQUlTLE9BQU8sQ0FBQ1A7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpKO0FBQUEsYUFBa0JPLE9BQU8sQ0FBQ1YsRUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEVTtBQUFBLFNBQWI7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSko7QUFBQSxvQkFESjtBQWlCSCxHQWxCRDs7QUFvQkEsU0FBT00sTUFBTSxJQUFFLElBQVIsR0FBZUUsYUFBYSxFQUE1QixnQkFBaUMscUVBQUMsc0VBQUQ7QUFBZ0IsVUFBTSxFQUFFRjtBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQXhDO0FBQ0gsQ0ExQ0Q7O0dBQU1WLFE7O0tBQUFBLFE7QUE0Q1NBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL21lc3NhZ2VzLjBkMzM3ODhjYjViYWRhN2NiZWY5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBEZXRhaWxNZXNzYWdlcyBmcm9tIFwiLi9EZXRhaWxNZXNzYWdlcy9EZXRhaWxNZXNzYWdlc1wiXHJcbmltcG9ydCB7IE1lc3NhZ2VBdXRob3JJbWFnZSwgTWVzc2FnZUl0ZW0sIE1lc3NhZ2VMaXN0IH0gZnJvbSBcIi4vTWVzc2FnZXMuc3R5bGVzXCJcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5cclxuY29uc3QgTWVzc2FnZXMgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgY3JlYXRlTWVzc2FnZSA9IChhdXRob3JOYW1lOiBzdHJpbmcsIHRleHQ6IHN0cmluZywgaWQ6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIEF1dGhvcjogYXV0aG9yTmFtZSxcclxuICAgICAgICAgICAgQXZhdGFyOiAnaHR0cHM6Ly9tZXJhZ29yLmNvbS9maWxlcy9zdHlsZXMvL2F2YV84MDBfODAwX3dtL2Z1bm55LXN0YW5kb2ZmLV9tZXJhZ29yLWNvbV8zNDkuanBnJyxcclxuICAgICAgICAgICAgTWVzc2FnZTogdGV4dCxcclxuICAgICAgICAgICAgaWQ6IGlkXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFttZXNzYWdlc10gPSB1c2VTdGF0ZShbXHJcbiAgICAgICAgY3JlYXRlTWVzc2FnZSgn0JDQu9C10LrRgdCw0L3QtNGAINCY0LLQsNC90L7QsicsIFwi0J/RgNC40LLQtdGCLCDQutCw0Log0YLQstC+0Lgg0LTQtdC70LA/XCIsIDApLFxyXG4gICAgICAgIGNyZWF0ZU1lc3NhZ2UoJ9Ca0YLQvi3RgtC+JywgXCLQntC70L7Qu9C+0LvQvlwiLCAxKSxcclxuICAgICAgICBjcmVhdGVNZXNzYWdlKCfQmtGC0L4t0YLQvicsIFwi0J7Qu9C+0LvQvtC70L5cIiwgMiksXHJcbiAgICAgICAgY3JlYXRlTWVzc2FnZSgn0JrRgtC+LdGC0L4nLCBcItCe0LvQvtC70L7Qu9C+XCIsIDMpLFxyXG4gICAgICAgIGNyZWF0ZU1lc3NhZ2UoJ9Ca0YLQvi3RgtC+JywgXCLQntC70L7Qu9C+0LvQvlwiLCA0KVxyXG4gICAgXSlcclxuXHJcbiAgICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgY29uc3QgcmVuZGVyTWVzc2FnZSA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRpdGxlPtCh0L7QvtCx0YnQtdC90LjRjzwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgICAgICA8TWVzc2FnZUxpc3QgPlxyXG4gICAgICAgICAgICAgICAgICAgIHttZXNzYWdlcy5tYXAoKG1lc3NhZ2UpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lc3NhZ2VJdGVtIGtleT17bWVzc2FnZS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZSghYWN0aXZlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVzc2FnZUF1dGhvckltYWdlIHNyYz17bWVzc2FnZS5BdmF0YXJ9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT57bWVzc2FnZS5BdXRob3J9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnttZXNzYWdlLk1lc3NhZ2V9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L01lc3NhZ2VJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9NZXNzYWdlTGlzdD5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBhY3RpdmU9PXRydWUgPyByZW5kZXJNZXNzYWdlKCkgOiA8RGV0YWlsTWVzc2FnZXMgc3RhdHVzPXthY3RpdmV9Lz5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVzc2FnZXMiXSwic291cmNlUm9vdCI6IiJ9