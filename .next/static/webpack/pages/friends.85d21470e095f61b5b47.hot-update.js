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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([createFriend('Владислав', 'Самсонов', 'https://sun9-69.userapi.com/impf/c850428/v850428210/fe855/nyTezU6TZcs.jpg?size=960x1280&quality=96&sign=90c5608e48772f4293d655aee909b59d&type=album', 4)]),
      friends = _useState[0];

  var renderFriends = function renderFriends() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
          children: "\u0414\u0440\u0443\u0437\u044C\u044F"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 25
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 21
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: friends.map(function (friend) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Friends_styles__WEBPACK_IMPORTED_MODULE_3__["FriendListWrapper"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: friend.Photo
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 33
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
              onClick: function onClick() {
                return null;
              },
              children: "".concat(friend.Name, " ").concat(friend.Surname)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 33
            }, _this)]
          }, friend.id, true, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 29
          }, _this);
        })
      }, void 0, false)]
    }, void 0, true);
  };

  return renderFriends();
};

_s(Friends, "6WhNe2izWiEiI66/Htqa2FHrLKk=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRnJpZW5kcy9GcmllbmRzLnRzeCJdLCJuYW1lcyI6WyJGcmllbmRzIiwiY3JlYXRlRnJpZW5kIiwibmFtZSIsInN1cm5hbWUiLCJwaG90byIsImlkIiwiTmFtZSIsIlN1cm5hbWUiLCJQaG90byIsInVzZVN0YXRlIiwiZnJpZW5kcyIsInJlbmRlckZyaWVuZHMiLCJtYXAiLCJmcmllbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUFBOztBQUVsQixNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxJQUFELEVBQWVDLE9BQWYsRUFBZ0NDLEtBQWhDLEVBQStDQyxFQUEvQyxFQUE4RDtBQUMvRSxXQUNJO0FBQ0lDLFVBQUksRUFBRUosSUFEVjtBQUVJSyxhQUFPLEVBQUVKLE9BRmI7QUFHSUssV0FBSyxFQUFFSixLQUhYO0FBSUlDLFFBQUUsRUFBRUE7QUFKUixLQURKO0FBUUgsR0FURDs7QUFGa0Isa0JBWVFJLHNEQUFRLENBQUMsQ0FDM0JSLFlBQVksQ0FBQyxXQUFELEVBQWMsVUFBZCxFQUEwQixxSkFBMUIsRUFBaUwsQ0FBakwsQ0FEZSxDQUFELENBWmhCO0FBQUEsTUFZSFMsT0FaRzs7QUFnQmQsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQ3hCLHdCQUNJO0FBQUEsOEJBQ0kscUVBQUMsZ0RBQUQ7QUFBQSwrQkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUlJO0FBQUEsa0JBQ0tELE9BQU8sQ0FBQ0UsR0FBUixDQUFZLFVBQUNDLE1BQUQ7QUFBQSw4QkFDVCxxRUFBQyxpRUFBRDtBQUFBLG9DQUNJO0FBQUssaUJBQUcsRUFBRUEsTUFBTSxDQUFDTDtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLGVBRUk7QUFBSSxxQkFBTyxFQUFFLG1CQUFNO0FBQUMsdUJBQU8sSUFBUDtBQUFZLGVBQWhDO0FBQUEsa0NBQXNDSyxNQUFNLENBQUNQLElBQTdDLGNBQXFETyxNQUFNLENBQUNOLE9BQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGSjtBQUFBLGFBQXdCTSxNQUFNLENBQUNSLEVBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRFM7QUFBQSxTQUFaO0FBREwsdUJBSko7QUFBQSxvQkFESjtBQWVILEdBaEJEOztBQWtCSixTQUFPTSxhQUFhLEVBQXBCO0FBQ0gsQ0FuQ0Q7O0dBQU1YLE87O0tBQUFBLE87QUFxQ1NBLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2ZyaWVuZHMuODVkMjE0NzBlMDk1ZjYxYjViNDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgRnJpZW5kTGlzdFdyYXBwZXIgfSBmcm9tICcuL0ZyaWVuZHMuc3R5bGVzJ1xyXG5cclxuY29uc3QgRnJpZW5kcyA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBjcmVhdGVGcmllbmQgPSAobmFtZTogc3RyaW5nLCBzdXJuYW1lOiBzdHJpbmcsIHBob3RvOiBzdHJpbmcsIGlkOiBudW1iZXIpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBOYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICAgICAgU3VybmFtZTogc3VybmFtZSxcclxuICAgICAgICAgICAgICAgIFBob3RvOiBwaG90byxcclxuICAgICAgICAgICAgICAgIGlkOiBpZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgICAgICAgICBjb25zdCBbZnJpZW5kc10gPSB1c2VTdGF0ZShbXHJcbiAgICAgICAgICAgIGNyZWF0ZUZyaWVuZCgn0JLQu9Cw0LTQuNGB0LvQsNCyJywgJ9Ch0LDQvNGB0L7QvdC+0LInLCAnaHR0cHM6Ly9zdW45LTY5LnVzZXJhcGkuY29tL2ltcGYvYzg1MDQyOC92ODUwNDI4MjEwL2ZlODU1L255VGV6VTZUWmNzLmpwZz9zaXplPTk2MHgxMjgwJnF1YWxpdHk9OTYmc2lnbj05MGM1NjA4ZTQ4NzcyZjQyOTNkNjU1YWVlOTA5YjU5ZCZ0eXBlPWFsYnVtJywgNClcclxuICAgICAgICAgICAgXSlcclxuXHJcbiAgICAgICAgY29uc3QgcmVuZGVyRnJpZW5kcyA9ICgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aXRsZT7QlNGA0YPQt9GM0Y88L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZnJpZW5kcy5tYXAoKGZyaWVuZCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZyaWVuZExpc3RXcmFwcGVyIGtleT17ZnJpZW5kLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZnJpZW5kLlBob3RvfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBvbkNsaWNrPXsoKSA9PiB7cmV0dXJuIG51bGx9fT57YCR7ZnJpZW5kLk5hbWV9ICR7ZnJpZW5kLlN1cm5hbWV9YH08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GcmllbmRMaXN0V3JhcHBlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIHJlbmRlckZyaWVuZHMoKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGcmllbmRzIl0sInNvdXJjZVJvb3QiOiIifQ==