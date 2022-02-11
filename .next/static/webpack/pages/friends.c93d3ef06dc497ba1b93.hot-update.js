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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([createFriend('Александр', 'Иванов', 'https://sun9-11.userapi.com/impg/JMX3A1zVamMI0lhvojaB-0SI6-mrkJXHhNpRcQ/9yi0MswI468.jpg?size=720x1280&quality=95&sign=e76c5224e9039ff3c01e6d39cb6ffd41&type=album', 1), createFriend('Кристина', 'Шапцова', 'https://sun9-65.userapi.com/impg/5QBNT1blNraX29KbYZfDQRL8yjoavs9dHEcAfw/w8oKoQW4Oe0.jpg?size=1620x2160&quality=96&sign=6bb340721e5e4bab773555048e24df69&type=album', 2)]),
      friends = _useState[0];

  var renderFriends = function renderFriends() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
          children: "\u0414\u0440\u0443\u0437\u044C\u044F"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: friends.map(function (friend) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Friends_styles__WEBPACK_IMPORTED_MODULE_3__["FriendListWrapper"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: friend.Photo
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
              children: "".concat(friend.Name, " ").concat(friend.Surname)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 29
            }, _this)]
          }, friend.id, true, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 25
          }, _this);
        })
      }, void 0, false)]
    }, void 0, true);
  };

  return renderFriends();
};

_s(Friends, "PCmra7s3Z1iAY5s/0IIDR8voV5o=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRnJpZW5kcy9GcmllbmRzLnRzeCJdLCJuYW1lcyI6WyJGcmllbmRzIiwiY3JlYXRlRnJpZW5kIiwibmFtZSIsInN1cm5hbWUiLCJwaG90byIsImlkIiwiTmFtZSIsIlN1cm5hbWUiLCJQaG90byIsInVzZVN0YXRlIiwiZnJpZW5kcyIsInJlbmRlckZyaWVuZHMiLCJtYXAiLCJmcmllbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUFBOztBQUVsQixNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxJQUFELEVBQWVDLE9BQWYsRUFBZ0NDLEtBQWhDLEVBQStDQyxFQUEvQyxFQUE4RDtBQUMvRSxXQUNJO0FBQ0lDLFVBQUksRUFBRUosSUFEVjtBQUVJSyxhQUFPLEVBQUVKLE9BRmI7QUFHSUssV0FBSyxFQUFFSixLQUhYO0FBSUlDLFFBQUUsRUFBRUE7QUFKUixLQURKO0FBUUMsR0FUTDs7QUFGa0Isa0JBYUlJLHNEQUFRLENBQUMsQ0FDdkJSLFlBQVksQ0FBQyxXQUFELEVBQWMsUUFBZCxFQUF1QixtS0FBdkIsRUFBNEwsQ0FBNUwsQ0FEVyxFQUV2QkEsWUFBWSxDQUFDLFVBQUQsRUFBYSxTQUFiLEVBQXdCLG9LQUF4QixFQUE4TCxDQUE5TCxDQUZXLENBQUQsQ0FiWjtBQUFBLE1BYVBTLE9BYk87O0FBa0JkLE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUN4Qix3QkFDSTtBQUFBLDhCQUNBLHFFQUFDLGdEQUFEO0FBQUEsK0JBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREEsZUFJQTtBQUFBLGtCQUNLRCxPQUFPLENBQUNFLEdBQVIsQ0FBWSxVQUFDQyxNQUFEO0FBQUEsOEJBQ1QscUVBQUMsaUVBQUQ7QUFBQSxvQ0FDSTtBQUFLLGlCQUFHLEVBQUVBLE1BQU0sQ0FBQ0w7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQUVJO0FBQUEsa0NBQVFLLE1BQU0sQ0FBQ1AsSUFBZixjQUF1Qk8sTUFBTSxDQUFDTixPQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRko7QUFBQSxhQUF3Qk0sTUFBTSxDQUFDUixFQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURTO0FBQUEsU0FBWjtBQURMLHVCQUpBO0FBQUEsb0JBREo7QUFnQlAsR0FqQkc7O0FBbUJKLFNBQU9NLGFBQWEsRUFBcEI7QUFDSCxDQXRDRDs7R0FBTVgsTzs7S0FBQUEsTztBQXdDU0Esc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZnJpZW5kcy5jOTNkM2VmMDZkYzQ5N2JhMWI5My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBGcmllbmRMaXN0V3JhcHBlciB9IGZyb20gJy4vRnJpZW5kcy5zdHlsZXMnXHJcblxyXG5jb25zdCBGcmllbmRzID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGNyZWF0ZUZyaWVuZCA9IChuYW1lOiBzdHJpbmcsIHN1cm5hbWU6IHN0cmluZywgcGhvdG86IHN0cmluZywgaWQ6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIE5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgICAgICBTdXJuYW1lOiBzdXJuYW1lLFxyXG4gICAgICAgICAgICAgICAgUGhvdG86IHBob3RvLFxyXG4gICAgICAgICAgICAgICAgaWQ6IGlkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBbZnJpZW5kc10gPSB1c2VTdGF0ZShbXHJcbiAgICAgICAgICAgIGNyZWF0ZUZyaWVuZCgn0JDQu9C10LrRgdCw0L3QtNGAJywgJ9CY0LLQsNC90L7QsicsJ2h0dHBzOi8vc3VuOS0xMS51c2VyYXBpLmNvbS9pbXBnL0pNWDNBMXpWYW1NSTBsaHZvamFCLTBTSTYtbXJrSlhIaE5wUmNRLzl5aTBNc3dJNDY4LmpwZz9zaXplPTcyMHgxMjgwJnF1YWxpdHk9OTUmc2lnbj1lNzZjNTIyNGU5MDM5ZmYzYzAxZTZkMzljYjZmZmQ0MSZ0eXBlPWFsYnVtJywgMSksXHJcbiAgICAgICAgICAgIGNyZWF0ZUZyaWVuZCgn0JrRgNC40YHRgtC40L3QsCcsICfQqNCw0L/RhtC+0LLQsCcsICdodHRwczovL3N1bjktNjUudXNlcmFwaS5jb20vaW1wZy81UUJOVDFibE5yYVgyOUtiWVpmRFFSTDh5am9hdnM5ZEhFY0Fmdy93OG9Lb1FXNE9lMC5qcGc/c2l6ZT0xNjIweDIxNjAmcXVhbGl0eT05NiZzaWduPTZiYjM0MDcyMWU1ZTRiYWI3NzM1NTUwNDhlMjRkZjY5JnR5cGU9YWxidW0nLCAyKVxyXG4gICAgICAgIF0pXHJcblxyXG4gICAgICAgIGNvbnN0IHJlbmRlckZyaWVuZHMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRpdGxlPtCU0YDRg9C30YzRjzwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIHtmcmllbmRzLm1hcCgoZnJpZW5kKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGcmllbmRMaXN0V3JhcHBlciBrZXk9e2ZyaWVuZC5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZnJpZW5kLlBob3RvfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPntgJHtmcmllbmQuTmFtZX0gJHtmcmllbmQuU3VybmFtZX1gfTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRnJpZW5kTGlzdFdyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG5cclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIHJlbmRlckZyaWVuZHMoKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGcmllbmRzIl0sInNvdXJjZVJvb3QiOiIifQ==