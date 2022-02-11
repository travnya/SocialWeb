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

  return active === true ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_DetailMessages_DetailMessages__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTWVzc2FnZXMvTWVzc2FnZXMudHN4Il0sIm5hbWVzIjpbIk1lc3NhZ2VzIiwiY3JlYXRlTWVzc2FnZSIsImF1dGhvck5hbWUiLCJ0ZXh0IiwiaWQiLCJBdXRob3IiLCJBdmF0YXIiLCJNZXNzYWdlIiwidXNlU3RhdGUiLCJtZXNzYWdlcyIsImFjdGl2ZSIsInNldEFjdGl2ZSIsInJlbmRlck1lc3NhZ2UiLCJtYXAiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFFbkIsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxVQUFELEVBQXFCQyxJQUFyQixFQUFtQ0MsRUFBbkMsRUFBa0Q7QUFDcEUsV0FBTztBQUNIQyxZQUFNLEVBQUVILFVBREw7QUFFSEksWUFBTSxFQUFFLHNGQUZMO0FBR0hDLGFBQU8sRUFBRUosSUFITjtBQUlIQyxRQUFFLEVBQUVBO0FBSkQsS0FBUDtBQU1ILEdBUEQ7O0FBRm1CLGtCQVdBSSxzREFBUSxDQUFDLENBQ3hCUCxhQUFhLENBQUMsa0JBQUQsRUFBcUIsd0JBQXJCLEVBQStDLENBQS9DLENBRFcsRUFFeEJBLGFBQWEsQ0FBQyxRQUFELEVBQVcsU0FBWCxFQUFzQixDQUF0QixDQUZXLEVBR3hCQSxhQUFhLENBQUMsUUFBRCxFQUFXLFNBQVgsRUFBc0IsQ0FBdEIsQ0FIVyxFQUl4QkEsYUFBYSxDQUFDLFFBQUQsRUFBVyxTQUFYLEVBQXNCLENBQXRCLENBSlcsRUFLeEJBLGFBQWEsQ0FBQyxRQUFELEVBQVcsU0FBWCxFQUFzQixDQUF0QixDQUxXLENBQUQsQ0FYUjtBQUFBLE1BV1pRLFFBWFk7O0FBQUEsbUJBbUJTRCxzREFBUSxDQUFDLEtBQUQsQ0FuQmpCO0FBQUEsTUFtQlpFLE1BbkJZO0FBQUEsTUFtQkpDLFNBbkJJOztBQXFCbkIsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQ3hCLHdCQUNJO0FBQUEsOEJBQ0kscUVBQUMsZ0RBQUQ7QUFBQSwrQkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUlJLHFFQUFDLDREQUFEO0FBQUEsa0JBQ0tILFFBQVEsQ0FBQ0ksR0FBVCxDQUFhLFVBQUNDLE9BQUQ7QUFBQSw4QkFDVixxRUFBQyw0REFBRDtBQUNJLG1CQUFPLEVBQUU7QUFBQSxxQkFBTUgsU0FBUyxDQUFDLENBQUNELE1BQUYsQ0FBZjtBQUFBLGFBRGI7QUFBQSxvQ0FFSSxxRUFBQyxtRUFBRDtBQUFvQixpQkFBRyxFQUFFSSxPQUFPLENBQUNSO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkosZUFHSTtBQUFBLHdCQUFLUSxPQUFPLENBQUNUO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFISixlQUlJO0FBQUEsd0JBQUlTLE9BQU8sQ0FBQ1A7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpKO0FBQUEsYUFBa0JPLE9BQU8sQ0FBQ1YsRUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEVTtBQUFBLFNBQWI7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSko7QUFBQSxvQkFESjtBQWlCSCxHQWxCRDs7QUFvQkEsU0FBT00sTUFBTSxLQUFHLElBQVQsZ0JBQWdCLHFFQUFDLHNFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBaEIsR0FBb0NFLGFBQWEsRUFBeEQ7QUFDSCxDQTFDRDs7R0FBTVosUTs7S0FBQUEsUTtBQTRDU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWVzc2FnZXMuZjc2NWE1ZjQxMmQ1ZTM5YzJmMDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IERldGFpbE1lc3NhZ2VzIGZyb20gXCIuL0RldGFpbE1lc3NhZ2VzL0RldGFpbE1lc3NhZ2VzXCJcclxuaW1wb3J0IHsgTWVzc2FnZUF1dGhvckltYWdlLCBNZXNzYWdlSXRlbSwgTWVzc2FnZUxpc3QgfSBmcm9tIFwiLi9NZXNzYWdlcy5zdHlsZXNcIlxyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcblxyXG5jb25zdCBNZXNzYWdlcyA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBjcmVhdGVNZXNzYWdlID0gKGF1dGhvck5hbWU6IHN0cmluZywgdGV4dDogc3RyaW5nLCBpZDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgQXV0aG9yOiBhdXRob3JOYW1lLFxyXG4gICAgICAgICAgICBBdmF0YXI6ICdodHRwczovL21lcmFnb3IuY29tL2ZpbGVzL3N0eWxlcy8vYXZhXzgwMF84MDBfd20vZnVubnktc3RhbmRvZmYtX21lcmFnb3ItY29tXzM0OS5qcGcnLFxyXG4gICAgICAgICAgICBNZXNzYWdlOiB0ZXh0LFxyXG4gICAgICAgICAgICBpZDogaWRcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgW21lc3NhZ2VzXSA9IHVzZVN0YXRlKFtcclxuICAgICAgICBjcmVhdGVNZXNzYWdlKCfQkNC70LXQutGB0LDQvdC00YAg0JjQstCw0L3QvtCyJywgXCLQn9GA0LjQstC10YIsINC60LDQuiDRgtCy0L7QuCDQtNC10LvQsD9cIiwgMCksXHJcbiAgICAgICAgY3JlYXRlTWVzc2FnZSgn0JrRgtC+LdGC0L4nLCBcItCe0LvQvtC70L7Qu9C+XCIsIDEpLFxyXG4gICAgICAgIGNyZWF0ZU1lc3NhZ2UoJ9Ca0YLQvi3RgtC+JywgXCLQntC70L7Qu9C+0LvQvlwiLCAyKSxcclxuICAgICAgICBjcmVhdGVNZXNzYWdlKCfQmtGC0L4t0YLQvicsIFwi0J7Qu9C+0LvQvtC70L5cIiwgMyksXHJcbiAgICAgICAgY3JlYXRlTWVzc2FnZSgn0JrRgtC+LdGC0L4nLCBcItCe0LvQvtC70L7Qu9C+XCIsIDQpXHJcbiAgICBdKVxyXG5cclxuICAgIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICBjb25zdCByZW5kZXJNZXNzYWdlID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGl0bGU+0KHQvtC+0LHRidC10L3QuNGPPC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgICAgIDxNZXNzYWdlTGlzdCA+XHJcbiAgICAgICAgICAgICAgICAgICAge21lc3NhZ2VzLm1hcCgobWVzc2FnZSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVzc2FnZUl0ZW0ga2V5PXttZXNzYWdlLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlKCFhY3RpdmUpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZXNzYWdlQXV0aG9ySW1hZ2Ugc3JjPXttZXNzYWdlLkF2YXRhcn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PnttZXNzYWdlLkF1dGhvcn08L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e21lc3NhZ2UuTWVzc2FnZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVzc2FnZUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L01lc3NhZ2VMaXN0PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGFjdGl2ZT09PXRydWUgPyA8RGV0YWlsTWVzc2FnZXMvPiA6IHJlbmRlck1lc3NhZ2UoKSBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVzc2FnZXMiXSwic291cmNlUm9vdCI6IiJ9