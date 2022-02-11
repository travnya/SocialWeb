webpackHotUpdate_N_E("pages/friends",{

/***/ "./src/components/Friends/Friends.tsx":
/*!********************************************!*\
  !*** ./src/components/Friends/Friends.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



var _jsxFileName = "C:\\Users\\vsamsonov\\Desktop\\SocialWeb\\src\\components\\Friends\\Friends.tsx",
    _this = undefined,
    _s = $RefreshSig$();




var Friends = function Friends() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([{
    Name: 'Владислав',
    Surname: 'Самсонов',
    Photo: 'https://sun9-28.userapi.com/impg/1y_m2YWC85fh4zdlyq60cpztFfpcFPogzfdKnw/DIxREY8BCMM.jpg?size=810x1080&quality=96&sign=a7193cb8b0f274a7e9ad2ba08085db8c&type=album',
    id: 1
  }, {
    Name: 'Александр',
    Surname: 'Иванов',
    Photo: 'https://meragor.com/files/styles//ava_800_800_wm/funny-standoff-_meragor-com_349.jpg',
    id: 2
  }]),
      firends = _useState[0],
      setFriend = _useState[1];

  var renderFriends = function renderFriends() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: firends.map(function (friend) {
        /*#__PURE__*/
        Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: friend.Photo
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            children: "".concat(friend.Name, " ").concat(friend.Surname)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 25
          }, _this)]
        }, void 0, true);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, _this);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "\u0414\u0440\u0443\u0437\u044C\u044F"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }, _this), renderFriends()]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 9
  }, _this);
};

_s(Friends, "0SBItGKAI0NdcgUQ7aqfcxVNtOI=");

_c = Friends;
/* harmony default export */ __webpack_exports__["default"] = (Friends);

var _c;

$RefreshReg$(_c, "Friends");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRnJpZW5kcy9GcmllbmRzLnRzeCJdLCJuYW1lcyI6WyJGcmllbmRzIiwidXNlU3RhdGUiLCJOYW1lIiwiU3VybmFtZSIsIlBob3RvIiwiaWQiLCJmaXJlbmRzIiwic2V0RnJpZW5kIiwicmVuZGVyRnJpZW5kcyIsIm1hcCIsImZyaWVuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUE7O0FBQUEsa0JBRVdDLHNEQUFRLENBQUMsQ0FDbEM7QUFDSUMsUUFBSSxFQUFFLFdBRFY7QUFFSUMsV0FBTyxFQUFFLFVBRmI7QUFHSUMsU0FBSyxFQUFFLG1LQUhYO0FBSUlDLE1BQUUsRUFBRTtBQUpSLEdBRGtDLEVBT2xDO0FBQ0lILFFBQUksRUFBRSxXQURWO0FBRUlDLFdBQU8sRUFBRSxRQUZiO0FBR0lDLFNBQUssRUFBRSxzRkFIWDtBQUlJQyxNQUFFLEVBQUU7QUFKUixHQVBrQyxDQUFELENBRm5CO0FBQUEsTUFFWEMsT0FGVztBQUFBLE1BRUZDLFNBRkU7O0FBaUJsQixNQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFDeEIsd0JBQ0k7QUFBQSxnQkFDS0YsT0FBTyxDQUFDRyxHQUFSLENBQVksVUFBQ0MsTUFBRCxFQUFZO0FBQ3JCO0FBQUE7QUFBQSxrQ0FDSTtBQUFLLGVBQUcsRUFBRUEsTUFBTSxDQUFDTjtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBRUk7QUFBQSxnQ0FBUU0sTUFBTSxDQUFDUixJQUFmLGNBQXVCUSxNQUFNLENBQUNQLE9BQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSjtBQUFBO0FBSUgsT0FMQTtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESjtBQVVILEdBWEQ7O0FBYUEsc0JBQ0k7QUFBQSwyQkFDSSxxRUFBQyxnREFBRDtBQUFBLDhCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosRUFFQ0ssYUFBYSxFQUZkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQVFILENBdENEOztHQUFNUixPOztLQUFBQSxPO0FBd0NTQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9mcmllbmRzLjBhNjI3ODMyMjk5N2QwYzdiYmQzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBGcmllbmRzID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtmaXJlbmRzLCBzZXRGcmllbmRdID0gdXNlU3RhdGUoW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgTmFtZTogJ9CS0LvQsNC00LjRgdC70LDQsicsXHJcbiAgICAgICAgICAgIFN1cm5hbWU6ICfQodCw0LzRgdC+0L3QvtCyJyxcclxuICAgICAgICAgICAgUGhvdG86ICdodHRwczovL3N1bjktMjgudXNlcmFwaS5jb20vaW1wZy8xeV9tMllXQzg1Zmg0emRseXE2MGNwenRGZnBjRlBvZ3pmZEtudy9ESXhSRVk4QkNNTS5qcGc/c2l6ZT04MTB4MTA4MCZxdWFsaXR5PTk2JnNpZ249YTcxOTNjYjhiMGYyNzRhN2U5YWQyYmEwODA4NWRiOGMmdHlwZT1hbGJ1bScsXHJcbiAgICAgICAgICAgIGlkOiAxXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIE5hbWU6ICfQkNC70LXQutGB0LDQvdC00YAnLFxyXG4gICAgICAgICAgICBTdXJuYW1lOiAn0JjQstCw0L3QvtCyJyxcclxuICAgICAgICAgICAgUGhvdG86ICdodHRwczovL21lcmFnb3IuY29tL2ZpbGVzL3N0eWxlcy8vYXZhXzgwMF84MDBfd20vZnVubnktc3RhbmRvZmYtX21lcmFnb3ItY29tXzM0OS5qcGcnLFxyXG4gICAgICAgICAgICBpZDogMlxyXG4gICAgICAgIH1cclxuICAgIF0pXHJcblxyXG4gICAgY29uc3QgcmVuZGVyRnJpZW5kcyA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge2ZpcmVuZHMubWFwKChmcmllbmQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZnJpZW5kLlBob3RvfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT57YCR7ZnJpZW5kLk5hbWV9ICR7ZnJpZW5kLlN1cm5hbWV9YH08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPtCU0YDRg9C30YzRjzwvdGl0bGU+XHJcbiAgICAgICAgICAgIHtyZW5kZXJGcmllbmRzKCl9XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRnJpZW5kcyJdLCJzb3VyY2VSb290IjoiIn0=