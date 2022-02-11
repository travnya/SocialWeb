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
    Photo: 'https://sun9-11.userapi.com/impg/JMX3A1zVamMI0lhvojaB-0SI6-mrkJXHhNpRcQ/9yi0MswI468.jpg?size=720x1280&quality=95&sign=e76c5224e9039ff3c01e6d39cb6ffd41&type=album',
    id: 2
  }, {
    Name: Name
  }]),
      friends = _useState[0];

  var createFriend = function createFriend() {
    return {
      Name: name,
      Surname: surname,
      Photo: photo,
      id: id
    };
  };

  var renderFriends = function renderFriends() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
          children: "\u0414\u0440\u0443\u0437\u044C\u044F"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: friends.map(function (friend) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Friends_styles__WEBPACK_IMPORTED_MODULE_3__["FriendListWrapper"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: friend.Photo
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
              children: "".concat(friend.Name, " ").concat(friend.Surname)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 29
            }, _this)]
          }, friend.id, true, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 25
          }, _this);
        })
      }, void 0, false)]
    }, void 0, true);
  };

  return renderFriends();
};

_s(Friends, "4VW530bW+1PRVEtG9i3f6CWsdHI=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRnJpZW5kcy9GcmllbmRzLnRzeCJdLCJuYW1lcyI6WyJGcmllbmRzIiwidXNlU3RhdGUiLCJOYW1lIiwiU3VybmFtZSIsIlBob3RvIiwiaWQiLCJmcmllbmRzIiwiY3JlYXRlRnJpZW5kIiwibmFtZSIsInN1cm5hbWUiLCJwaG90byIsInJlbmRlckZyaWVuZHMiLCJtYXAiLCJmcmllbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUFBOztBQUFBLGtCQUVBQyxzREFBUSxDQUFDLENBQ3ZCO0FBQ0lDLFFBQUksRUFBRSxXQURWO0FBRUlDLFdBQU8sRUFBRSxVQUZiO0FBR0lDLFNBQUssRUFBRSxtS0FIWDtBQUlJQyxNQUFFLEVBQUU7QUFKUixHQUR1QixFQU92QjtBQUNJSCxRQUFJLEVBQUUsV0FEVjtBQUVJQyxXQUFPLEVBQUUsUUFGYjtBQUdJQyxTQUFLLEVBQUUsbUtBSFg7QUFJSUMsTUFBRSxFQUFFO0FBSlIsR0FQdUIsRUFhdkI7QUFDSUgsUUFBSSxFQUFKQTtBQURKLEdBYnVCLENBQUQsQ0FGUjtBQUFBLE1BRVhJLE9BRlc7O0FBcUJsQixNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3ZCLFdBQ0k7QUFDSUwsVUFBSSxFQUFFTSxJQURWO0FBRUlMLGFBQU8sRUFBRU0sT0FGYjtBQUdJTCxXQUFLLEVBQUVNLEtBSFg7QUFJSUwsUUFBRSxFQUFFQTtBQUpSLEtBREo7QUFRSCxHQVREOztBQVdBLE1BQU1NLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUN4Qix3QkFDSTtBQUFBLDhCQUNJLHFFQUFDLGdEQUFEO0FBQUEsK0JBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFJSTtBQUFBLGtCQUNLTCxPQUFPLENBQUNNLEdBQVIsQ0FBWSxVQUFDQyxNQUFEO0FBQUEsOEJBQ1QscUVBQUMsaUVBQUQ7QUFBQSxvQ0FDSTtBQUFLLGlCQUFHLEVBQUVBLE1BQU0sQ0FBQ1Q7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQUVJO0FBQUEsa0NBQVFTLE1BQU0sQ0FBQ1gsSUFBZixjQUF1QlcsTUFBTSxDQUFDVixPQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRko7QUFBQSxhQUF3QlUsTUFBTSxDQUFDUixFQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURTO0FBQUEsU0FBWjtBQURMLHVCQUpKO0FBQUEsb0JBREo7QUFnQkgsR0FqQkQ7O0FBbUJBLFNBQU9NLGFBQWEsRUFBcEI7QUFDSCxDQXBERDs7R0FBTVgsTzs7S0FBQUEsTztBQXNEU0Esc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZnJpZW5kcy4xMzkxYzIzZTViZWFiYmU1OTk5Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBGcmllbmRMaXN0V3JhcHBlciB9IGZyb20gJy4vRnJpZW5kcy5zdHlsZXMnXHJcblxyXG5jb25zdCBGcmllbmRzID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtmcmllbmRzXSA9IHVzZVN0YXRlKFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIE5hbWU6ICfQktC70LDQtNC40YHQu9Cw0LInLFxyXG4gICAgICAgICAgICBTdXJuYW1lOiAn0KHQsNC80YHQvtC90L7QsicsXHJcbiAgICAgICAgICAgIFBob3RvOiAnaHR0cHM6Ly9zdW45LTI4LnVzZXJhcGkuY29tL2ltcGcvMXlfbTJZV0M4NWZoNHpkbHlxNjBjcHp0RmZwY0ZQb2d6ZmRLbncvREl4UkVZOEJDTU0uanBnP3NpemU9ODEweDEwODAmcXVhbGl0eT05NiZzaWduPWE3MTkzY2I4YjBmMjc0YTdlOWFkMmJhMDgwODVkYjhjJnR5cGU9YWxidW0nLFxyXG4gICAgICAgICAgICBpZDogMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBOYW1lOiAn0JDQu9C10LrRgdCw0L3QtNGAJyxcclxuICAgICAgICAgICAgU3VybmFtZTogJ9CY0LLQsNC90L7QsicsXHJcbiAgICAgICAgICAgIFBob3RvOiAnaHR0cHM6Ly9zdW45LTExLnVzZXJhcGkuY29tL2ltcGcvSk1YM0ExelZhbU1JMGxodm9qYUItMFNJNi1tcmtKWEhoTnBSY1EvOXlpME1zd0k0NjguanBnP3NpemU9NzIweDEyODAmcXVhbGl0eT05NSZzaWduPWU3NmM1MjI0ZTkwMzlmZjNjMDFlNmQzOWNiNmZmZDQxJnR5cGU9YWxidW0nLFxyXG4gICAgICAgICAgICBpZDogMlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBOYW1lXHJcbiAgICAgICAgfVxyXG5cclxuICAgIF0pXHJcblxyXG4gICAgY29uc3QgY3JlYXRlRnJpZW5kID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIE5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgICAgICBTdXJuYW1lOiBzdXJuYW1lLFxyXG4gICAgICAgICAgICAgICAgUGhvdG86IHBob3RvLFxyXG4gICAgICAgICAgICAgICAgaWQ6IGlkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVuZGVyRnJpZW5kcyA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRpdGxlPtCU0YDRg9C30YzRjzwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIHtmcmllbmRzLm1hcCgoZnJpZW5kKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGcmllbmRMaXN0V3JhcHBlciBrZXk9e2ZyaWVuZC5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZnJpZW5kLlBob3RvfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPntgJHtmcmllbmQuTmFtZX0gJHtmcmllbmQuU3VybmFtZX1gfTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRnJpZW5kTGlzdFdyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG5cclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIHJlbmRlckZyaWVuZHMoKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGcmllbmRzIl0sInNvdXJjZVJvb3QiOiIifQ==