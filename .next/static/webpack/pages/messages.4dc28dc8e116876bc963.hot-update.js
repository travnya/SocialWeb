webpackHotUpdate_N_E("pages/messages",{

/***/ "./src/components/Messages/Messages.styles.ts":
/*!****************************************************!*\
  !*** ./src/components/Messages/Messages.styles.ts ***!
  \****************************************************/
/*! exports provided: MessageList, MessageItem, MessageAuthorImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageList", function() { return MessageList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageItem", function() { return MessageItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageAuthorImage", function() { return MessageAuthorImage; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");


function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width: 3em;\n    border-radius: 50%;\n    grid-row: 1/3;\n    grid-column: 1;\n    border: 1px solid white;\n    margin: 0 .25em .25em 0;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    display: grid;\n    grid-gap: .2em;\n    width: 100%;\n    height: 4em;\n    box-shadow: 0 0 10px #181818;\n    margin-bottom: .75em;\n    padding: .5em;\n    grid-template-rows: 1.5em 1fr;\n    grid-template-columns: 2em 1fr;\n    cursor: pointer;\n    border-radius: .5em;\n    h5 {\n        grid-row: 1;\n        grid-column: 2;\n        margin-left: 1.5em;\n        font-size: 1.1em;\n    }\n    p{\n        font-size: .95em;\n        grid-row: 2;\n        grid-column: 2;\n        margin-left: 2em;\n    }\n    :hover {\n        background-color: #444;\n        transition: 0.3s;\n    }\n    :last-child {\n        margin: 0;\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    overflow-y: scroll;\n    padding: 0;\n    height: 30em;\n    ::-webkit-scrollbar {\n        width: .5em;\n    }\n    ::-webkit-scrollbar-track {\n        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n    }\n    ::-webkit-scrollbar-thumb {\n        background-color: #444;\n        outline: 1px solid slategray;\n        border-radius: .5em;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var MessageList = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject());
var MessageItem = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject2());
var MessageAuthorImage = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].img(_templateObject3());

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTWVzc2FnZXMvTWVzc2FnZXMuc3R5bGVzLnRzIl0sIm5hbWVzIjpbIk1lc3NhZ2VMaXN0Iiwic3R5bGVkIiwiZGl2IiwiTWVzc2FnZUl0ZW0iLCJNZXNzYWdlQXV0aG9ySW1hZ2UiLCJpbWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sSUFBTUEsV0FBVyxHQUFHQyx1REFBTSxDQUFDQyxHQUFWLG1CQUFqQjtBQWlCQSxJQUFNQyxXQUFXLEdBQUdGLHVEQUFNLENBQUNDLEdBQVYsb0JBQWpCO0FBaUNBLElBQU1FLGtCQUFrQixHQUFHSCx1REFBTSxDQUFDSSxHQUFWLG9CQUF4QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9tZXNzYWdlcy40ZGMyOGRjOGUxMTY4NzZiYzk2My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTWVzc2FnZUxpc3QgPSBzdHlsZWQuZGl2YFxyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGhlaWdodDogMzBlbTtcclxuICAgIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgIHdpZHRoOiAuNWVtO1xyXG4gICAgfVxyXG4gICAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICB9XHJcbiAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0O1xyXG4gICAgICAgIG91dGxpbmU6IDFweCBzb2xpZCBzbGF0ZWdyYXk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogLjVlbTtcclxuICAgIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IE1lc3NhZ2VJdGVtID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLWdhcDogLjJlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0ZW07XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAjMTgxODE4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLjc1ZW07XHJcbiAgICBwYWRkaW5nOiAuNWVtO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxLjVlbSAxZnI7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJlbSAxZnI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuNWVtO1xyXG4gICAgaDUge1xyXG4gICAgICAgIGdyaWQtcm93OiAxO1xyXG4gICAgICAgIGdyaWQtY29sdW1uOiAyO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxLjVlbTtcclxuICAgICAgICBmb250LXNpemU6IDEuMWVtO1xyXG4gICAgfVxyXG4gICAgcHtcclxuICAgICAgICBmb250LXNpemU6IC45NWVtO1xyXG4gICAgICAgIGdyaWQtcm93OiAyO1xyXG4gICAgICAgIGdyaWQtY29sdW1uOiAyO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyZW07XHJcbiAgICB9XHJcbiAgICA6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0NDQ7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgIH1cclxuICAgIDpsYXN0LWNoaWxkIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBNZXNzYWdlQXV0aG9ySW1hZ2UgPSBzdHlsZWQuaW1nYFxyXG4gICAgd2lkdGg6IDNlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGdyaWQtcm93OiAxLzM7XHJcbiAgICBncmlkLWNvbHVtbjogMTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgbWFyZ2luOiAwIC4yNWVtIC4yNWVtIDA7XHJcbmAiXSwic291cmNlUm9vdCI6IiJ9