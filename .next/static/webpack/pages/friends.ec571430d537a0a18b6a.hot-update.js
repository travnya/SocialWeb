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

  var createFriend = function createFriend(name, surname, photo, id) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRnJpZW5kcy9GcmllbmRzLnRzeCJdLCJuYW1lcyI6WyJGcmllbmRzIiwidXNlU3RhdGUiLCJOYW1lIiwiU3VybmFtZSIsIlBob3RvIiwiaWQiLCJmcmllbmRzIiwiY3JlYXRlRnJpZW5kIiwibmFtZSIsInN1cm5hbWUiLCJwaG90byIsInJlbmRlckZyaWVuZHMiLCJtYXAiLCJmcmllbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUFBOztBQUFBLGtCQUVBQyxzREFBUSxDQUFDLENBQ3ZCO0FBQ0lDLFFBQUksRUFBRSxXQURWO0FBRUlDLFdBQU8sRUFBRSxVQUZiO0FBR0lDLFNBQUssRUFBRSxtS0FIWDtBQUlJQyxNQUFFLEVBQUU7QUFKUixHQUR1QixFQU92QjtBQUNJSCxRQUFJLEVBQUUsV0FEVjtBQUVJQyxXQUFPLEVBQUUsUUFGYjtBQUdJQyxTQUFLLEVBQUUsbUtBSFg7QUFJSUMsTUFBRSxFQUFFO0FBSlIsR0FQdUIsRUFhdkI7QUFDSUgsUUFBSSxFQUFKQTtBQURKLEdBYnVCLENBQUQsQ0FGUjtBQUFBLE1BRVhJLE9BRlc7O0FBcUJsQixNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxJQUFELEVBQU9DLE9BQVAsRUFBZ0JDLEtBQWhCLEVBQXVCTCxFQUF2QixFQUE4QjtBQUMvQyxXQUNJO0FBQ0lILFVBQUksRUFBRU0sSUFEVjtBQUVJTCxhQUFPLEVBQUVNLE9BRmI7QUFHSUwsV0FBSyxFQUFFTSxLQUhYO0FBSUlMLFFBQUUsRUFBRUE7QUFKUixLQURKO0FBUUgsR0FURDs7QUFXQSxNQUFNTSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFDeEIsd0JBQ0k7QUFBQSw4QkFDSSxxRUFBQyxnREFBRDtBQUFBLCtCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBSUk7QUFBQSxrQkFDS0wsT0FBTyxDQUFDTSxHQUFSLENBQVksVUFBQ0MsTUFBRDtBQUFBLDhCQUNULHFFQUFDLGlFQUFEO0FBQUEsb0NBQ0k7QUFBSyxpQkFBRyxFQUFFQSxNQUFNLENBQUNUO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosZUFFSTtBQUFBLGtDQUFRUyxNQUFNLENBQUNYLElBQWYsY0FBdUJXLE1BQU0sQ0FBQ1YsT0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZKO0FBQUEsYUFBd0JVLE1BQU0sQ0FBQ1IsRUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEUztBQUFBLFNBQVo7QUFETCx1QkFKSjtBQUFBLG9CQURKO0FBZ0JILEdBakJEOztBQW1CQSxTQUFPTSxhQUFhLEVBQXBCO0FBQ0gsQ0FwREQ7O0dBQU1YLE87O0tBQUFBLE87QUFzRFNBLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2ZyaWVuZHMuZWM1NzE0MzBkNTM3YTBhMThiNmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgRnJpZW5kTGlzdFdyYXBwZXIgfSBmcm9tICcuL0ZyaWVuZHMuc3R5bGVzJ1xyXG5cclxuY29uc3QgRnJpZW5kcyA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbZnJpZW5kc10gPSB1c2VTdGF0ZShbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBOYW1lOiAn0JLQu9Cw0LTQuNGB0LvQsNCyJyxcclxuICAgICAgICAgICAgU3VybmFtZTogJ9Ch0LDQvNGB0L7QvdC+0LInLFxyXG4gICAgICAgICAgICBQaG90bzogJ2h0dHBzOi8vc3VuOS0yOC51c2VyYXBpLmNvbS9pbXBnLzF5X20yWVdDODVmaDR6ZGx5cTYwY3B6dEZmcGNGUG9nemZkS253L0RJeFJFWThCQ01NLmpwZz9zaXplPTgxMHgxMDgwJnF1YWxpdHk9OTYmc2lnbj1hNzE5M2NiOGIwZjI3NGE3ZTlhZDJiYTA4MDg1ZGI4YyZ0eXBlPWFsYnVtJyxcclxuICAgICAgICAgICAgaWQ6IDFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgTmFtZTogJ9CQ0LvQtdC60YHQsNC90LTRgCcsXHJcbiAgICAgICAgICAgIFN1cm5hbWU6ICfQmNCy0LDQvdC+0LInLFxyXG4gICAgICAgICAgICBQaG90bzogJ2h0dHBzOi8vc3VuOS0xMS51c2VyYXBpLmNvbS9pbXBnL0pNWDNBMXpWYW1NSTBsaHZvamFCLTBTSTYtbXJrSlhIaE5wUmNRLzl5aTBNc3dJNDY4LmpwZz9zaXplPTcyMHgxMjgwJnF1YWxpdHk9OTUmc2lnbj1lNzZjNTIyNGU5MDM5ZmYzYzAxZTZkMzljYjZmZmQ0MSZ0eXBlPWFsYnVtJyxcclxuICAgICAgICAgICAgaWQ6IDJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgTmFtZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICBdKVxyXG5cclxuICAgIGNvbnN0IGNyZWF0ZUZyaWVuZCA9IChuYW1lLCBzdXJuYW1lLCBwaG90bywgaWQpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBOYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICAgICAgU3VybmFtZTogc3VybmFtZSxcclxuICAgICAgICAgICAgICAgIFBob3RvOiBwaG90byxcclxuICAgICAgICAgICAgICAgIGlkOiBpZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlbmRlckZyaWVuZHMgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT7QlNGA0YPQt9GM0Y88L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICB7ZnJpZW5kcy5tYXAoKGZyaWVuZCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RnJpZW5kTGlzdFdyYXBwZXIga2V5PXtmcmllbmQuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2ZyaWVuZC5QaG90b30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT57YCR7ZnJpZW5kLk5hbWV9ICR7ZnJpZW5kLlN1cm5hbWV9YH08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZyaWVuZExpc3RXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiByZW5kZXJGcmllbmRzKClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRnJpZW5kcyJdLCJzb3VyY2VSb290IjoiIn0=