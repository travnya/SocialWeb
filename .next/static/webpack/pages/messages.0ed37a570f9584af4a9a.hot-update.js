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
    children: messages.map(function (message) {
      var _s = $RefreshSig$();

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Messages_styles__WEBPACK_IMPORTED_MODULE_2__["MessageItem"], {
        onClick: _s(function () {
          _s();

          Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(!active);
          console.log({
            active: active
          });
        }, "cnOVFnUX2Gzi34IGqYLLH2CoWzA="),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Messages_styles__WEBPACK_IMPORTED_MODULE_2__["MessageAuthorImage"], {
          src: message.Avatar
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
          children: message.Author
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: message.Message
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 21
        }, _this)]
      }, message.id, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }, _this);
    })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTWVzc2FnZXMvTWVzc2FnZXMudHN4Il0sIm5hbWVzIjpbIk1lc3NhZ2VzIiwiY3JlYXRlTWVzc2FnZSIsImF1dGhvck5hbWUiLCJ0ZXh0IiwiaWQiLCJBdXRob3IiLCJBdmF0YXIiLCJNZXNzYWdlIiwidXNlU3RhdGUiLCJtZXNzYWdlcyIsInNldE1lc3NhZ2UiLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJtYXAiLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUVuQixNQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLFVBQUQsRUFBcUJDLElBQXJCLEVBQW1DQyxFQUFuQyxFQUFrRDtBQUNwRSxXQUFPO0FBQ0hDLFlBQU0sRUFBRUgsVUFETDtBQUVISSxZQUFNLEVBQUUsc0ZBRkw7QUFHSEMsYUFBTyxFQUFFSixJQUhOO0FBSUhDLFFBQUUsRUFBRUE7QUFKRCxLQUFQO0FBTUgsR0FQRDs7QUFGbUIsa0JBV1lJLHNEQUFRLENBQUMsQ0FDcENQLGFBQWEsQ0FBQyxrQkFBRCxFQUFxQix3QkFBckIsRUFBK0MsQ0FBL0MsQ0FEdUIsRUFFcENBLGFBQWEsQ0FBQyxRQUFELEVBQVcsd0JBQVgsRUFBcUMsQ0FBckMsQ0FGdUIsRUFHcENBLGFBQWEsQ0FBQyxRQUFELEVBQVcsd0JBQVgsRUFBcUMsQ0FBckMsQ0FIdUIsRUFJcENBLGFBQWEsQ0FBQyxRQUFELEVBQVcsd0JBQVgsRUFBcUMsQ0FBckMsQ0FKdUIsRUFLcENBLGFBQWEsQ0FBQyxRQUFELEVBQVcsd0JBQVgsRUFBcUMsQ0FBckMsQ0FMdUIsQ0FBRCxDQVhwQjtBQUFBLE1BV1pRLFFBWFk7QUFBQSxNQVdGQyxVQVhFOztBQUFBLG1CQW1CU0Ysc0RBQVEsQ0FBQyxLQUFELENBbkJqQjtBQUFBLE1BbUJaRyxNQW5CWTtBQUFBLE1BbUJKQyxTQW5CSTs7QUFxQm5CLHNCQUNJLHFFQUFDLDREQUFEO0FBQUEsY0FDS0gsUUFBUSxDQUFDSSxHQUFULENBQWEsVUFBQ0MsT0FBRDtBQUFBOztBQUFBLDBCQUNWLHFFQUFDLDREQUFEO0FBQ0ksZUFBTyxLQUFFLFlBQU07QUFBQTs7QUFDWE4sZ0VBQVEsQ0FBQyxDQUFDRyxNQUFGLENBQVI7QUFDQUksaUJBQU8sQ0FBQ0MsR0FBUixDQUFZO0FBQUNMLGtCQUFNLEVBQU5BO0FBQUQsV0FBWjtBQUNILFNBSE0saUNBRFg7QUFBQSxnQ0FLSSxxRUFBQyxtRUFBRDtBQUFvQixhQUFHLEVBQUVHLE9BQU8sQ0FBQ1I7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMSixlQU1JO0FBQUEsb0JBQUtRLE9BQU8sQ0FBQ1Q7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU5KLGVBT0k7QUFBQSxvQkFBSVMsT0FBTyxDQUFDUDtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEo7QUFBQSxTQUFrQk8sT0FBTyxDQUFDVixFQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFU7QUFBQSxLQUFiO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBZUgsQ0FwQ0Q7O0lBQU1KLFE7O0tBQUFBLFE7QUFzQ1NBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL21lc3NhZ2VzLjBlZDM3YTU3MGY5NTg0YWY0YTlhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBEZXRhaWxNZXNzYWdlcyBmcm9tIFwiLi9IaWRkZW5NZW51L0RldGFpbE1lc3NhZ2VzXCJcclxuaW1wb3J0IHsgTWVzc2FnZUF1dGhvckltYWdlLCBNZXNzYWdlSXRlbSwgTWVzc2FnZUxpc3QgfSBmcm9tIFwiLi9NZXNzYWdlcy5zdHlsZXNcIlxyXG5cclxuY29uc3QgTWVzc2FnZXMgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgY3JlYXRlTWVzc2FnZSA9IChhdXRob3JOYW1lOiBzdHJpbmcsIHRleHQ6IHN0cmluZywgaWQ6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIEF1dGhvcjogYXV0aG9yTmFtZSxcclxuICAgICAgICAgICAgQXZhdGFyOiAnaHR0cHM6Ly9tZXJhZ29yLmNvbS9maWxlcy9zdHlsZXMvL2F2YV84MDBfODAwX3dtL2Z1bm55LXN0YW5kb2ZmLV9tZXJhZ29yLWNvbV8zNDkuanBnJyxcclxuICAgICAgICAgICAgTWVzc2FnZTogdGV4dCxcclxuICAgICAgICAgICAgaWQ6IGlkXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFttZXNzYWdlcywgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZShbXHJcbiAgICAgICAgY3JlYXRlTWVzc2FnZSgn0JDQu9C10LrRgdCw0L3QtNGAINCY0LLQsNC90L7QsicsIFwi0J/RgNC40LLQtdGCLCDQutCw0Log0YLQstC+0Lgg0LTQtdC70LA/XCIsIDApLFxyXG4gICAgICAgIGNyZWF0ZU1lc3NhZ2UoJ9Ca0YLQvi3RgtC+JywgXCLQn9GA0LjQstC10YIsINC60LDQuiDRgtCy0L7QuCDQtNC10LvQsD9cIiwgMSksXHJcbiAgICAgICAgY3JlYXRlTWVzc2FnZSgn0JrRgtC+LdGC0L4nLCBcItCf0YDQuNCy0LXRgiwg0LrQsNC6INGC0LLQvtC4INC00LXQu9CwP1wiLCAyKSxcclxuICAgICAgICBjcmVhdGVNZXNzYWdlKCfQmtGC0L4t0YLQvicsIFwi0J/RgNC40LLQtdGCLCDQutCw0Log0YLQstC+0Lgg0LTQtdC70LA/XCIsIDMpLFxyXG4gICAgICAgIGNyZWF0ZU1lc3NhZ2UoJ9Ca0YLQvi3RgtC+JywgXCLQn9GA0LjQstC10YIsINC60LDQuiDRgtCy0L7QuCDQtNC10LvQsD9cIiwgNClcclxuICAgIF0pXHJcblxyXG4gICAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPE1lc3NhZ2VMaXN0ID5cclxuICAgICAgICAgICAge21lc3NhZ2VzLm1hcCgobWVzc2FnZSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPE1lc3NhZ2VJdGVtIGtleT17bWVzc2FnZS5pZH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZVN0YXRlKCFhY3RpdmUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHthY3RpdmV9KVxyXG4gICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZXNzYWdlQXV0aG9ySW1hZ2Ugc3JjPXttZXNzYWdlLkF2YXRhcn0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNT57bWVzc2FnZS5BdXRob3J9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICA8cD57bWVzc2FnZS5NZXNzYWdlfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvTWVzc2FnZUl0ZW0+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvTWVzc2FnZUxpc3Q+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2VzIl0sInNvdXJjZVJvb3QiOiIifQ==