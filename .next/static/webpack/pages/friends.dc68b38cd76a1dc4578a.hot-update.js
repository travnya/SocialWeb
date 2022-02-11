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

  var createFriend = function createFriend(name, surname, photo, id) {
    return {
      Name: name,
      Surname: surname,
      Photo: photo,
      id: id
    };
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([createFriend('Александр', 'Иванов', 'https://sun9-11.userapi.com/impg/JMX3A1zVamMI0lhvojaB-0SI6-mrkJXHhNpRcQ/9yi0MswI468.jpg?size=720x1280&quality=95&sign=e76c5224e9039ff3c01e6d39cb6ffd41&type=album', 1), createFriend('Кристина', 'Шапцова', 'https://sun9-65.userapi.com/impg/5QBNT1blNraX29KbYZfDQRL8yjoavs9dHEcAfw/w8oKoQW4Oe0.jpg?size=1620x2160&quality=96&sign=6bb340721e5e4bab773555048e24df69&type=album', 2), createFriend('Татьяна', 'Притыкина', 'https://sun9-63.userapi.com/impf/c855120/v855120759/15a77b/vmusPb0xBJQ.jpg?size=898x1080&quality=96&sign=d1a23680a08c92a9f213522c2e529370&type=album', 3)]),
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

_s(Friends, "Hi+uEZuO7hWL4oOehivVGYS/I7I=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRnJpZW5kcy9GcmllbmRzLnRzeCJdLCJuYW1lcyI6WyJGcmllbmRzIiwiY3JlYXRlRnJpZW5kIiwibmFtZSIsInN1cm5hbWUiLCJwaG90byIsImlkIiwiTmFtZSIsIlN1cm5hbWUiLCJQaG90byIsInVzZVN0YXRlIiwiZnJpZW5kcyIsInJlbmRlckZyaWVuZHMiLCJtYXAiLCJmcmllbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUFBOztBQUVsQixNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxJQUFELEVBQWVDLE9BQWYsRUFBZ0NDLEtBQWhDLEVBQStDQyxFQUEvQyxFQUE4RDtBQUMvRSxXQUNJO0FBQ0lDLFVBQUksRUFBRUosSUFEVjtBQUVJSyxhQUFPLEVBQUVKLE9BRmI7QUFHSUssV0FBSyxFQUFFSixLQUhYO0FBSUlDLFFBQUUsRUFBRUE7QUFKUixLQURKO0FBUUMsR0FUTDs7QUFGa0Isa0JBYUlJLHNEQUFRLENBQUMsQ0FDdkJSLFlBQVksQ0FBQyxXQUFELEVBQWMsUUFBZCxFQUF1QixtS0FBdkIsRUFBNEwsQ0FBNUwsQ0FEVyxFQUV2QkEsWUFBWSxDQUFDLFVBQUQsRUFBYSxTQUFiLEVBQXdCLG9LQUF4QixFQUE4TCxDQUE5TCxDQUZXLEVBR3ZCQSxZQUFZLENBQUMsU0FBRCxFQUFZLFdBQVosRUFBeUIsc0pBQXpCLEVBQWlMLENBQWpMLENBSFcsQ0FBRCxDQWJaO0FBQUEsTUFhUFMsT0FiTzs7QUFtQmQsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQ3hCLHdCQUNJO0FBQUEsOEJBQ0EscUVBQUMsZ0RBQUQ7QUFBQSwrQkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEQSxlQUlBO0FBQUEsa0JBQ0tELE9BQU8sQ0FBQ0UsR0FBUixDQUFZLFVBQUNDLE1BQUQ7QUFBQSw4QkFDVCxxRUFBQyxpRUFBRDtBQUFBLG9DQUNJO0FBQUssaUJBQUcsRUFBRUEsTUFBTSxDQUFDTDtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLGVBRUk7QUFBQSxrQ0FBUUssTUFBTSxDQUFDUCxJQUFmLGNBQXVCTyxNQUFNLENBQUNOLE9BQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGSjtBQUFBLGFBQXdCTSxNQUFNLENBQUNSLEVBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRFM7QUFBQSxTQUFaO0FBREwsdUJBSkE7QUFBQSxvQkFESjtBQWdCUCxHQWpCRzs7QUFtQkosU0FBT00sYUFBYSxFQUFwQjtBQUNILENBdkNEOztHQUFNWCxPOztLQUFBQSxPO0FBeUNTQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9mcmllbmRzLmRjNjhiMzhjZDc2YTFkYzQ1NzhhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEZyaWVuZExpc3RXcmFwcGVyIH0gZnJvbSAnLi9GcmllbmRzLnN0eWxlcydcclxuXHJcbmNvbnN0IEZyaWVuZHMgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgY3JlYXRlRnJpZW5kID0gKG5hbWU6IHN0cmluZywgc3VybmFtZTogc3RyaW5nLCBwaG90bzogc3RyaW5nLCBpZDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgTmFtZTogbmFtZSxcclxuICAgICAgICAgICAgICAgIFN1cm5hbWU6IHN1cm5hbWUsXHJcbiAgICAgICAgICAgICAgICBQaG90bzogcGhvdG8sXHJcbiAgICAgICAgICAgICAgICBpZDogaWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IFtmcmllbmRzXSA9IHVzZVN0YXRlKFtcclxuICAgICAgICAgICAgY3JlYXRlRnJpZW5kKCfQkNC70LXQutGB0LDQvdC00YAnLCAn0JjQstCw0L3QvtCyJywnaHR0cHM6Ly9zdW45LTExLnVzZXJhcGkuY29tL2ltcGcvSk1YM0ExelZhbU1JMGxodm9qYUItMFNJNi1tcmtKWEhoTnBSY1EvOXlpME1zd0k0NjguanBnP3NpemU9NzIweDEyODAmcXVhbGl0eT05NSZzaWduPWU3NmM1MjI0ZTkwMzlmZjNjMDFlNmQzOWNiNmZmZDQxJnR5cGU9YWxidW0nLCAxKSxcclxuICAgICAgICAgICAgY3JlYXRlRnJpZW5kKCfQmtGA0LjRgdGC0LjQvdCwJywgJ9Co0LDQv9GG0L7QstCwJywgJ2h0dHBzOi8vc3VuOS02NS51c2VyYXBpLmNvbS9pbXBnLzVRQk5UMWJsTnJhWDI5S2JZWmZEUVJMOHlqb2F2czlkSEVjQWZ3L3c4b0tvUVc0T2UwLmpwZz9zaXplPTE2MjB4MjE2MCZxdWFsaXR5PTk2JnNpZ249NmJiMzQwNzIxZTVlNGJhYjc3MzU1NTA0OGUyNGRmNjkmdHlwZT1hbGJ1bScsIDIpLFxyXG4gICAgICAgICAgICBjcmVhdGVGcmllbmQoJ9Ci0LDRgtGM0Y/QvdCwJywgJ9Cf0YDQuNGC0YvQutC40L3QsCcsICdodHRwczovL3N1bjktNjMudXNlcmFwaS5jb20vaW1wZi9jODU1MTIwL3Y4NTUxMjA3NTkvMTVhNzdiL3ZtdXNQYjB4QkpRLmpwZz9zaXplPTg5OHgxMDgwJnF1YWxpdHk9OTYmc2lnbj1kMWEyMzY4MGEwOGM5MmE5ZjIxMzUyMmMyZTUyOTM3MCZ0eXBlPWFsYnVtJywgMylcclxuICAgICAgICBdKVxyXG5cclxuICAgICAgICBjb25zdCByZW5kZXJGcmllbmRzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT7QlNGA0YPQt9GM0Y88L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICB7ZnJpZW5kcy5tYXAoKGZyaWVuZCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RnJpZW5kTGlzdFdyYXBwZXIga2V5PXtmcmllbmQuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2ZyaWVuZC5QaG90b30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT57YCR7ZnJpZW5kLk5hbWV9ICR7ZnJpZW5kLlN1cm5hbWV9YH08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZyaWVuZExpc3RXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiByZW5kZXJGcmllbmRzKClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRnJpZW5kcyJdLCJzb3VyY2VSb290IjoiIn0=