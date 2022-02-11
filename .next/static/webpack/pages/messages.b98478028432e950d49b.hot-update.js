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
      onClick: function onClick() {
        return status(false);
      }
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
          lineNumber: 23,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_DetailMessages_styles__WEBPACK_IMPORTED_MODULE_2__["Messages"], {
        children: messages.map(function (message) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_DetailMessages_styles__WEBPACK_IMPORTED_MODULE_2__["TableBody"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: message
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 25
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_DetailMessages_styles__WEBPACK_IMPORTED_MODULE_2__["BottomBorder"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 25
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 21
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
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
    status: setActive(false)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTWVzc2FnZXMvRGV0YWlsTWVzc2FnZXMvRGV0YWlsTWVzc2FnZXMudHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9NZXNzYWdlcy9NZXNzYWdlcy50c3giXSwibmFtZXMiOlsiRGV0YWlsTWVzc2FnZXMiLCJzdGF0dXMiLCJ1c2VTdGF0ZSIsIm1lc3NhZ2VzIiwibWFwIiwibWVzc2FnZSIsIk1lc3NhZ2VzIiwiY3JlYXRlTWVzc2FnZSIsImF1dGhvck5hbWUiLCJ0ZXh0IiwiaWQiLCJBdXRob3IiLCJBdmF0YXIiLCJNZXNzYWdlIiwiYWN0aXZlIiwic2V0QWN0aXZlIiwicmVuZGVyTWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7O0FBRUEsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxNQUFELEVBQWlCO0FBQUE7O0FBQUEsa0JBRWpCQyxzREFBUSxDQUFDLENBQ3hCLHdCQUR3QixFQUV4QiwyQkFGd0IsRUFHeEIsa0JBSHdCLEVBSXhCLFlBSndCLENBQUQsQ0FGUztBQUFBLE1BRTdCQyxRQUY2Qjs7QUFTcEMsc0JBQ0kscUVBQUMsa0VBQUQ7QUFBQSw0QkFDSTtBQUNJLGVBQVMsRUFBQyxjQURkO0FBRUksYUFBTyxFQUFFO0FBQUEsZUFBTUYsTUFBTSxDQUFDLEtBQUQsQ0FBWjtBQUFBO0FBRmI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBTUk7QUFBQSw4QkFDSSxxRUFBQyxrRUFBRDtBQUFBLCtCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBSUkscUVBQUMsK0RBQUQ7QUFBQSxrQkFDQ0UsUUFBUSxDQUFDQyxHQUFULENBQWEsVUFBQ0MsT0FBRDtBQUFBLDhCQUNWLHFFQUFDLGdFQUFEO0FBQUEsb0NBQ0k7QUFBQSx3QkFBSUE7QUFB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MmU5NTBkNDliLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IGdldEhlYXBTdGF0aXN0aWNzIH0gZnJvbSBcInY4XCJcclxuaW1wb3J0IHsgTWFpbldyYXBwZXIsIFRhYmxlSGVhZGVyLCBUYWJsZUJvZHksIEJvdHRvbUJvcmRlciwgTWVzc2FnZXMgfSBmcm9tIFwiLi9EZXRhaWxNZXNzYWdlcy5zdHlsZXNcIlxyXG5cclxuY29uc3QgRGV0YWlsTWVzc2FnZXMgPSAoc3RhdHVzOiBhbnkpID0+IHtcclxuXHJcbiAgICBjb25zdCBbbWVzc2FnZXNdID0gdXNlU3RhdGUoW1xyXG4gICAgICAgICfQn9GA0LjQstC10YIsINC60LDQuiDRgtCy0L7QuCDQtNC10LvQsD8nLFxyXG4gICAgICAgICfQlNCwINCy0YDQvtC00LUg0L3QtdC/0LvQvtGF0L4sINCwINGC0LLQvtC4PycsXHJcbiAgICAgICAgJ9CU0LAg0LLQvtGCINC00LXQu9Cw0Y4g0LHRjdC6JyxcclxuICAgICAgICAn0KHQvtGH0YPQstGB0YLQstGD0Y4nXHJcbiAgICBdKVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8TWFpbldyYXBwZXI+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tZGFya1wiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzdGF0dXMoZmFsc2UpfT5cclxuXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8dGFibGU+XHJcbiAgICAgICAgICAgICAgICA8VGFibGVIZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxPtCQ0LvQtdC60YHQsNC90LTRgCDQmNCy0LDQvdC+0LI8L2gxPlxyXG4gICAgICAgICAgICAgICAgPC9UYWJsZUhlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxNZXNzYWdlcz5cclxuICAgICAgICAgICAgICAgIHttZXNzYWdlcy5tYXAoKG1lc3NhZ2UpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8VGFibGVCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57bWVzc2FnZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3R0b21Cb3JkZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQm9keT5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9NZXNzYWdlcz5cclxuICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICA8L01haW5XcmFwcGVyPlxyXG4gICAgKSAgICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGV0YWlsTWVzc2FnZXMiLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBEZXRhaWxNZXNzYWdlcyBmcm9tIFwiLi9EZXRhaWxNZXNzYWdlcy9EZXRhaWxNZXNzYWdlc1wiXHJcbmltcG9ydCB7IE1lc3NhZ2VBdXRob3JJbWFnZSwgTWVzc2FnZUl0ZW0sIE1lc3NhZ2VMaXN0IH0gZnJvbSBcIi4vTWVzc2FnZXMuc3R5bGVzXCJcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5cclxuY29uc3QgTWVzc2FnZXMgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgY3JlYXRlTWVzc2FnZSA9IChhdXRob3JOYW1lOiBzdHJpbmcsIHRleHQ6IHN0cmluZywgaWQ6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIEF1dGhvcjogYXV0aG9yTmFtZSxcclxuICAgICAgICAgICAgQXZhdGFyOiAnaHR0cHM6Ly9tZXJhZ29yLmNvbS9maWxlcy9zdHlsZXMvL2F2YV84MDBfODAwX3dtL2Z1bm55LXN0YW5kb2ZmLV9tZXJhZ29yLWNvbV8zNDkuanBnJyxcclxuICAgICAgICAgICAgTWVzc2FnZTogdGV4dCxcclxuICAgICAgICAgICAgaWQ6IGlkXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFttZXNzYWdlc10gPSB1c2VTdGF0ZShbXHJcbiAgICAgICAgY3JlYXRlTWVzc2FnZSgn0JDQu9C10LrRgdCw0L3QtNGAINCY0LLQsNC90L7QsicsIFwi0J/RgNC40LLQtdGCLCDQutCw0Log0YLQstC+0Lgg0LTQtdC70LA/XCIsIDApLFxyXG4gICAgICAgIGNyZWF0ZU1lc3NhZ2UoJ9Ca0YLQvi3RgtC+JywgXCLQntC70L7Qu9C+0LvQvlwiLCAxKSxcclxuICAgICAgICBjcmVhdGVNZXNzYWdlKCfQmtGC0L4t0YLQvicsIFwi0J7Qu9C+0LvQvtC70L5cIiwgMiksXHJcbiAgICAgICAgY3JlYXRlTWVzc2FnZSgn0JrRgtC+LdGC0L4nLCBcItCe0LvQvtC70L7Qu9C+XCIsIDMpLFxyXG4gICAgICAgIGNyZWF0ZU1lc3NhZ2UoJ9Ca0YLQvi3RgtC+JywgXCLQntC70L7Qu9C+0LvQvlwiLCA0KVxyXG4gICAgXSlcclxuXHJcbiAgICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgY29uc3QgcmVuZGVyTWVzc2FnZSA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRpdGxlPtCh0L7QvtCx0YnQtdC90LjRjzwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgICAgICA8TWVzc2FnZUxpc3QgPlxyXG4gICAgICAgICAgICAgICAgICAgIHttZXNzYWdlcy5tYXAoKG1lc3NhZ2UpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lc3NhZ2VJdGVtIGtleT17bWVzc2FnZS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZSghYWN0aXZlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVzc2FnZUF1dGhvckltYWdlIHNyYz17bWVzc2FnZS5BdmF0YXJ9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT57bWVzc2FnZS5BdXRob3J9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnttZXNzYWdlLk1lc3NhZ2V9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L01lc3NhZ2VJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9NZXNzYWdlTGlzdD5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBhY3RpdmU9PT10cnVlID8gPERldGFpbE1lc3NhZ2VzIHN0YXR1cz17c2V0QWN0aXZlKGZhbHNlKX0vPiA6IHJlbmRlck1lc3NhZ2UoKSBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVzc2FnZXMiXSwic291cmNlUm9vdCI6IiJ9