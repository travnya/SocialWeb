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
/* harmony import */ var _Friends_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Friends.styles */ "./src/components/Friends/Friends.styles.ts");



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
      friends = _useState[0];

  var renderFriends = function renderFriends() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
          children: "\u0414\u0440\u0443\u0437\u044C\u044F"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: friends.map(function (friend) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Friends_styles__WEBPACK_IMPORTED_MODULE_3__["FriendListWrapper"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: friend.Photo
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
              children: "".concat(friend.Name, " ").concat(friend.Surname)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 29
            }, _this)]
          }, friend.id, true, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 25
          }, _this);
        })
      }, void 0, false)]
    }, void 0, true);
  };

  return renderFriends();
};

_s(Friends, "tm2w2ueF0HnC60JeeKWZpRRqtJc=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRnJpZW5kcy9GcmllbmRzLnRzeCJdLCJuYW1lcyI6WyJGcmllbmRzIiwidXNlU3RhdGUiLCJOYW1lIiwiU3VybmFtZSIsIlBob3RvIiwiaWQiLCJmcmllbmRzIiwicmVuZGVyRnJpZW5kcyIsIm1hcCIsImZyaWVuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUE7O0FBQUEsa0JBRUFDLHNEQUFRLENBQUMsQ0FDdkI7QUFDSUMsUUFBSSxFQUFFLFdBRFY7QUFFSUMsV0FBTyxFQUFFLFVBRmI7QUFHSUMsU0FBSyxFQUFFLG1LQUhYO0FBSUlDLE1BQUUsRUFBRTtBQUpSLEdBRHVCLEVBUXZCO0FBQ0lILFFBQUksRUFBRSxXQURWO0FBRUlDLFdBQU8sRUFBRSxRQUZiO0FBR0lDLFNBQUssRUFBRSxzRkFIWDtBQUlJQyxNQUFFLEVBQUU7QUFKUixHQVJ1QixDQUFELENBRlI7QUFBQSxNQUVYQyxPQUZXOztBQW1CbEIsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQ3hCLHdCQUNJO0FBQUEsOEJBQ0kscUVBQUMsZ0RBQUQ7QUFBQSwrQkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUlJO0FBQUEsa0JBQ0tELE9BQU8sQ0FBQ0UsR0FBUixDQUFZLFVBQUNDLE1BQUQ7QUFBQSw4QkFDVCxxRUFBQyxpRUFBRDtBQUFBLG9DQUNJO0FBQUssaUJBQUcsRUFBRUEsTUFBTSxDQUFDTDtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLGVBRUk7QUFBQSxrQ0FBUUssTUFBTSxDQUFDUCxJQUFmLGNBQXVCTyxNQUFNLENBQUNOLE9BQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGSjtBQUFBLGFBQXdCTSxNQUFNLENBQUNKLEVBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRFM7QUFBQSxTQUFaO0FBREwsdUJBSko7QUFBQSxvQkFESjtBQWdCSCxHQWpCRDs7QUFtQkEsU0FBT0UsYUFBYSxFQUFwQjtBQUNILENBdkNEOztHQUFNUCxPOztLQUFBQSxPO0FBeUNTQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9mcmllbmRzLjRmM2ZhYTRmM2YyZjFkMWZiNzU4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEZyaWVuZExpc3RXcmFwcGVyIH0gZnJvbSAnLi9GcmllbmRzLnN0eWxlcydcclxuXHJcbmNvbnN0IEZyaWVuZHMgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW2ZyaWVuZHNdID0gdXNlU3RhdGUoW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgTmFtZTogJ9CS0LvQsNC00LjRgdC70LDQsicsXHJcbiAgICAgICAgICAgIFN1cm5hbWU6ICfQodCw0LzRgdC+0L3QvtCyJyxcclxuICAgICAgICAgICAgUGhvdG86ICdodHRwczovL3N1bjktMjgudXNlcmFwaS5jb20vaW1wZy8xeV9tMllXQzg1Zmg0emRseXE2MGNwenRGZnBjRlBvZ3pmZEtudy9ESXhSRVk4QkNNTS5qcGc/c2l6ZT04MTB4MTA4MCZxdWFsaXR5PTk2JnNpZ249YTcxOTNjYjhiMGYyNzRhN2U5YWQyYmEwODA4NWRiOGMmdHlwZT1hbGJ1bScsXHJcbiAgICAgICAgICAgIGlkOiAxXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBOYW1lOiAn0JDQu9C10LrRgdCw0L3QtNGAJyxcclxuICAgICAgICAgICAgU3VybmFtZTogJ9CY0LLQsNC90L7QsicsXHJcbiAgICAgICAgICAgIFBob3RvOiAnaHR0cHM6Ly9tZXJhZ29yLmNvbS9maWxlcy9zdHlsZXMvL2F2YV84MDBfODAwX3dtL2Z1bm55LXN0YW5kb2ZmLV9tZXJhZ29yLWNvbV8zNDkuanBnJyxcclxuICAgICAgICAgICAgaWQ6IDJcclxuICAgICAgICB9XHJcblxyXG4gICAgXSlcclxuXHJcbiAgICBjb25zdCByZW5kZXJGcmllbmRzID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGl0bGU+0JTRgNGD0LfRjNGPPC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAge2ZyaWVuZHMubWFwKChmcmllbmQpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZyaWVuZExpc3RXcmFwcGVyIGtleT17ZnJpZW5kLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtmcmllbmQuUGhvdG99IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+e2Ake2ZyaWVuZC5OYW1lfSAke2ZyaWVuZC5TdXJuYW1lfWB9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9GcmllbmRMaXN0V3JhcHBlcj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcblxyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gcmVuZGVyRnJpZW5kcygpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZyaWVuZHMiXSwic291cmNlUm9vdCI6IiJ9