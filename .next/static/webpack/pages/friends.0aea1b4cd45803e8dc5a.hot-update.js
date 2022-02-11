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

  var renderFriends = function renderFriends() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
          children: "\u0414\u0440\u0443\u0437\u044C\u044F"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: friends.map(function (friend) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Friends_styles__WEBPACK_IMPORTED_MODULE_3__["FriendListWrapper"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: friend.Photo
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
              children: "".concat(friend.Name, " ").concat(friend.Surname)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 29
            }, _this)]
          }, friend.id, true, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 25
          }, _this);
        })
      }, void 0, false)]
    }, void 0, true);
  };

  return renderFriends();
};

_s(Friends, "btFpwxBaxqgL/9hk7Cvlec3vhJk=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRnJpZW5kcy9GcmllbmRzLnRzeCJdLCJuYW1lcyI6WyJGcmllbmRzIiwiY3JlYXRlRnJpZW5kIiwibmFtZSIsInN1cm5hbWUiLCJwaG90byIsImlkIiwiTmFtZSIsIlN1cm5hbWUiLCJQaG90byIsInVzZVN0YXRlIiwiZnJpZW5kcyIsInJlbmRlckZyaWVuZHMiLCJtYXAiLCJmcmllbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUFBOztBQUdsQixNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxJQUFELEVBQWVDLE9BQWYsRUFBZ0NDLEtBQWhDLEVBQStDQyxFQUEvQyxFQUE4RDtBQUMvRSxXQUNJO0FBQ0lDLFVBQUksRUFBRUosSUFEVjtBQUVJSyxhQUFPLEVBQUVKLE9BRmI7QUFHSUssV0FBSyxFQUFFSixLQUhYO0FBSUlDLFFBQUUsRUFBRUE7QUFKUixLQURKO0FBUUMsR0FUTDs7QUFIa0Isa0JBY0lJLHNEQUFRLENBQUMsQ0FDdkI7QUFDSUgsUUFBSSxFQUFFLFdBRFY7QUFFSUMsV0FBTyxFQUFFLFVBRmI7QUFHSUMsU0FBSyxFQUFFLG1LQUhYO0FBSUlILE1BQUUsRUFBRTtBQUpSLEdBRHVCLEVBT3ZCO0FBQ0lDLFFBQUksRUFBRSxXQURWO0FBRUlDLFdBQU8sRUFBRSxRQUZiO0FBR0lDLFNBQUssRUFBRSxtS0FIWDtBQUlJSCxNQUFFLEVBQUU7QUFKUixHQVB1QixFQWF2QjtBQUNJQyxRQUFJLEVBQUpBO0FBREosR0FidUIsQ0FBRCxDQWRaO0FBQUEsTUFjUEksT0FkTzs7QUFpQ2QsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQ3hCLHdCQUNJO0FBQUEsOEJBQ0EscUVBQUMsZ0RBQUQ7QUFBQSwrQkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEQSxlQUlBO0FBQUEsa0JBQ0tELE9BQU8sQ0FBQ0UsR0FBUixDQUFZLFVBQUNDLE1BQUQ7QUFBQSw4QkFDVCxxRUFBQyxpRUFBRDtBQUFBLG9DQUNJO0FBQUssaUJBQUcsRUFBRUEsTUFBTSxDQUFDTDtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLGVBRUk7QUFBQSxrQ0FBUUssTUFBTSxDQUFDUCxJQUFmLGNBQXVCTyxNQUFNLENBQUNOLE9BQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGSjtBQUFBLGFBQXdCTSxNQUFNLENBQUNSLEVBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRFM7QUFBQSxTQUFaO0FBREwsdUJBSkE7QUFBQSxvQkFESjtBQWdCUCxHQWpCRzs7QUFtQkosU0FBT00sYUFBYSxFQUFwQjtBQUNILENBckREOztHQUFNWCxPOztLQUFBQSxPO0FBdURTQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9mcmllbmRzLjBhZWExYjRjZDQ1ODAzZThkYzVhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEZyaWVuZExpc3RXcmFwcGVyIH0gZnJvbSAnLi9GcmllbmRzLnN0eWxlcydcclxuXHJcbmNvbnN0IEZyaWVuZHMgPSAoKSA9PiB7XHJcblxyXG4gICAgXHJcbiAgICBjb25zdCBjcmVhdGVGcmllbmQgPSAobmFtZTogc3RyaW5nLCBzdXJuYW1lOiBzdHJpbmcsIHBob3RvOiBzdHJpbmcsIGlkOiBudW1iZXIpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBOYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICAgICAgU3VybmFtZTogc3VybmFtZSxcclxuICAgICAgICAgICAgICAgIFBob3RvOiBwaG90byxcclxuICAgICAgICAgICAgICAgIGlkOiBpZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgW2ZyaWVuZHNdID0gdXNlU3RhdGUoW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBOYW1lOiAn0JLQu9Cw0LTQuNGB0LvQsNCyJyxcclxuICAgICAgICAgICAgICAgIFN1cm5hbWU6ICfQodCw0LzRgdC+0L3QvtCyJyxcclxuICAgICAgICAgICAgICAgIFBob3RvOiAnaHR0cHM6Ly9zdW45LTI4LnVzZXJhcGkuY29tL2ltcGcvMXlfbTJZV0M4NWZoNHpkbHlxNjBjcHp0RmZwY0ZQb2d6ZmRLbncvREl4UkVZOEJDTU0uanBnP3NpemU9ODEweDEwODAmcXVhbGl0eT05NiZzaWduPWE3MTkzY2I4YjBmMjc0YTdlOWFkMmJhMDgwODVkYjhjJnR5cGU9YWxidW0nLFxyXG4gICAgICAgICAgICAgICAgaWQ6IDFcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgTmFtZTogJ9CQ0LvQtdC60YHQsNC90LTRgCcsXHJcbiAgICAgICAgICAgICAgICBTdXJuYW1lOiAn0JjQstCw0L3QvtCyJyxcclxuICAgICAgICAgICAgICAgIFBob3RvOiAnaHR0cHM6Ly9zdW45LTExLnVzZXJhcGkuY29tL2ltcGcvSk1YM0ExelZhbU1JMGxodm9qYUItMFNJNi1tcmtKWEhoTnBSY1EvOXlpME1zd0k0NjguanBnP3NpemU9NzIweDEyODAmcXVhbGl0eT05NSZzaWduPWU3NmM1MjI0ZTkwMzlmZjNjMDFlNmQzOWNiNmZmZDQxJnR5cGU9YWxidW0nLFxyXG4gICAgICAgICAgICAgICAgaWQ6IDJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgTmFtZVxyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBdKVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHJlbmRlckZyaWVuZHMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRpdGxlPtCU0YDRg9C30YzRjzwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIHtmcmllbmRzLm1hcCgoZnJpZW5kKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGcmllbmRMaXN0V3JhcHBlciBrZXk9e2ZyaWVuZC5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZnJpZW5kLlBob3RvfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPntgJHtmcmllbmQuTmFtZX0gJHtmcmllbmQuU3VybmFtZX1gfTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRnJpZW5kTGlzdFdyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG5cclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIHJlbmRlckZyaWVuZHMoKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGcmllbmRzIl0sInNvdXJjZVJvb3QiOiIifQ==