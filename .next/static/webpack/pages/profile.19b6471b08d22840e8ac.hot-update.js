webpackHotUpdate_N_E("pages/profile",{

/***/ "./src/components/Profile/Posts/Posts.styles.ts":
/*!******************************************************!*\
  !*** ./src/components/Profile/Posts/Posts.styles.ts ***!
  \******************************************************/
/*! exports provided: PostWrapper, Item, ItemImage, PostInput, DeleteButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostWrapper", function() { return PostWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemImage", function() { return ItemImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostInput", function() { return PostInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteButton", function() { return DeleteButton; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");


function _templateObject5() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    grid-row: 1/3;\n    grid-column: 3;\n    position: relative;\n    width: 100%;\n    right: 1em;\n    bottom: .2em;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width: 20em;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    grid-row: 1;\n    grid-column: 1;\n    width: 3em;\n    height: 3em;\n    border-radius: 50%;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    margin: .5em auto 0 auto;\n    box-shadow: 0 0 3px whitesmoke;\n    border-radius: 3px;\n    display: grid;\n    justify-content: center;\n    grid-template-columns: 3em 1ft 1em;\n    grid-template-rows: 3em 1fr;\n    grid-gap: .5em;\n    padding: .5em .5em 0 .5em;\n    width: 20em;\n    p {\n        grid-row: 2;\n        grid-column: 1/3;\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width: 23em;\n    grid-row: 2;\n    grid-column: 1;\n    h5 {\n        grid-row: 1;\n        grid-column: 2;\n        margin-top: .45em;\n        color: #ffe1dd;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var PostWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject());
var Item = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject2());
var ItemImage = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].img(_templateObject3());
var PostInput = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].input(_templateObject4());
var DeleteButton = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].button(_templateObject5());

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Profile/Posts/Posts.tsx":
/*!************************************************!*\
  !*** ./src/components/Profile/Posts/Posts.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Posts_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Posts.styles */ "./src/components/Profile/Posts/Posts.styles.ts");



var _jsxFileName = "C:\\Users\\vsamsonov\\Desktop\\SocialWeb\\src\\components\\Profile\\Posts\\Posts.tsx",
    _this = undefined,
    _s = $RefreshSig$();




var Posts = function Posts() {
  _s();

  var maxID = 0;

  var createPost = function createPost(label) {
    return {
      Author: 'Владислав Самсонов',
      Message: label,
      Avatar: 'https://d2zia2w5autnlg.cloudfront.net/46235/5ec33ee77313a-large',
      id: maxID++
    };
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([createPost('Проверка 1'), createPost('Проверка 2'), createPost('Проверка 3')]),
      posts = _useState[0],
      setPost = _useState[1];

  var addPost = function addPost(text) {
    var newPost = createPost(text);
    var newArray = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(posts), [newPost]);
    setPost(newArray);
  };

  var deletePost = function deletePost(id) {
    setPost(posts.filter(function (post) {
      return post.id !== id;
    }));
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_Posts_styles__WEBPACK_IMPORTED_MODULE_3__["PostWrapper"], {
    children: posts.map(function (userPost) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_Posts_styles__WEBPACK_IMPORTED_MODULE_3__["Item"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_Posts_styles__WEBPACK_IMPORTED_MODULE_3__["ItemImage"], {
          src: userPost.Avatar,
          alt: "\u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u044F \u043F\u0440\u043E\u0444\u0438\u043B\u044F"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h5", {
          children: userPost.Author
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 21
        }, _this)]
      }, userPost.id, true, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 9
  }, _this);
};

_s(Posts, "v9vuVgFdVYSxt90oZUJLCr/w8A8=");

_c = Posts;
/* harmony default export */ __webpack_exports__["default"] = (Posts);

var _c;

$RefreshReg$(_c, "Posts");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZmlsZS9Qb3N0cy9Qb3N0cy5zdHlsZXMudHMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1Byb2ZpbGUvUG9zdHMvUG9zdHMudHN4Il0sIm5hbWVzIjpbIlBvc3RXcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwiSXRlbSIsIkl0ZW1JbWFnZSIsImltZyIsIlBvc3RJbnB1dCIsImlucHV0IiwiRGVsZXRlQnV0dG9uIiwiYnV0dG9uIiwiUG9zdHMiLCJtYXhJRCIsImNyZWF0ZVBvc3QiLCJsYWJlbCIsIkF1dGhvciIsIk1lc3NhZ2UiLCJBdmF0YXIiLCJpZCIsInVzZVN0YXRlIiwicG9zdHMiLCJzZXRQb3N0IiwiYWRkUG9zdCIsInRleHQiLCJuZXdQb3N0IiwibmV3QXJyYXkiLCJkZWxldGVQb3N0IiwiZmlsdGVyIiwicG9zdCIsIm1hcCIsInVzZXJQb3N0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQSxXQUFXLEdBQUdDLHVEQUFNLENBQUNDLEdBQVYsbUJBQWpCO0FBWUEsSUFBTUMsSUFBSSxHQUFHRix1REFBTSxDQUFDQyxHQUFWLG9CQUFWO0FBaUJBLElBQU1FLFNBQVMsR0FBR0gsdURBQU0sQ0FBQ0ksR0FBVixvQkFBZjtBQVFBLElBQU1DLFNBQVMsR0FBR0wsdURBQU0sQ0FBQ00sS0FBVixvQkFBZjtBQUlBLElBQU1DLFlBQVksR0FBR1AsdURBQU0sQ0FBQ1EsTUFBVixvQkFBbEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0NQO0FBQ0E7O0FBRUEsSUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUVoQixNQUFJQyxLQUFLLEdBQUcsQ0FBWjs7QUFFQSxNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxLQUFELEVBQW9CO0FBQ25DLFdBQU87QUFDSEMsWUFBTSxFQUFFLG9CQURMO0FBRUhDLGFBQU8sRUFBRUYsS0FGTjtBQUdIRyxZQUFNLEVBQUUsaUVBSEw7QUFJSEMsUUFBRSxFQUFFTixLQUFLO0FBSk4sS0FBUDtBQU1ILEdBUEQ7O0FBSmdCLGtCQWFTTyxzREFBUSxDQUFDLENBQzlCTixVQUFVLENBQUMsWUFBRCxDQURvQixFQUU5QkEsVUFBVSxDQUFDLFlBQUQsQ0FGb0IsRUFHOUJBLFVBQVUsQ0FBQyxZQUFELENBSG9CLENBQUQsQ0FiakI7QUFBQSxNQWFUTyxLQWJTO0FBQUEsTUFhRkMsT0FiRTs7QUFtQmhCLE1BQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLElBQUQsRUFBa0I7QUFDOUIsUUFBTUMsT0FBTyxHQUFHWCxVQUFVLENBQUNVLElBQUQsQ0FBMUI7QUFDQSxRQUFNRSxRQUFRLDBHQUFPTCxLQUFQLElBQWNJLE9BQWQsRUFBZDtBQUNBSCxXQUFPLENBQUNJLFFBQUQsQ0FBUDtBQUNILEdBSkQ7O0FBTUEsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ1IsRUFBRCxFQUFnQjtBQUMvQkcsV0FBTyxDQUFDRCxLQUFLLENBQUNPLE1BQU4sQ0FBYSxVQUFDQyxJQUFEO0FBQUEsYUFBVUEsSUFBSSxDQUFDVixFQUFMLEtBQVlBLEVBQXRCO0FBQUEsS0FBYixDQUFELENBQVA7QUFDSCxHQUZEOztBQUlBLHNCQUNJLHFFQUFDLHlEQUFEO0FBQUEsY0FDS0UsS0FBSyxDQUFDUyxHQUFOLENBQVUsVUFBQ0MsUUFBRDtBQUFBLDBCQUNQLHFFQUFDLGtEQUFEO0FBQUEsZ0NBQ0kscUVBQUMsdURBQUQ7QUFBVyxhQUFHLEVBQUVBLFFBQVEsQ0FBQ2IsTUFBekI7QUFBaUMsYUFBRyxFQUFDO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFFSTtBQUFBLG9CQUFLYSxRQUFRLENBQUNmO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSjtBQUFBLFNBQVdlLFFBQVEsQ0FBQ1osRUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURPO0FBQUEsS0FBVjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQVVILENBdkNEOztHQUFNUCxLOztLQUFBQSxLO0FBeUNTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlLjE5YjY0NzFiMDhkMjI4NDBlOGFjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIlxyXG5cclxuZXhwb3J0IGNvbnN0IFBvc3RXcmFwcGVyID0gc3R5bGVkLmRpdiBgXHJcbiAgICB3aWR0aDogMjNlbTtcclxuICAgIGdyaWQtcm93OiAyO1xyXG4gICAgZ3JpZC1jb2x1bW46IDE7XHJcbiAgICBoNSB7XHJcbiAgICAgICAgZ3JpZC1yb3c6IDE7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW46IDI7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLjQ1ZW07XHJcbiAgICAgICAgY29sb3I6ICNmZmUxZGQ7XHJcbiAgICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBJdGVtID0gc3R5bGVkLmRpdmBcclxuICAgIG1hcmdpbjogLjVlbSBhdXRvIDAgYXV0bztcclxuICAgIGJveC1zaGFkb3c6IDAgMCAzcHggd2hpdGVzbW9rZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2VtIDFmdCAxZW07XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDNlbSAxZnI7XHJcbiAgICBncmlkLWdhcDogLjVlbTtcclxuICAgIHBhZGRpbmc6IC41ZW0gLjVlbSAwIC41ZW07XHJcbiAgICB3aWR0aDogMjBlbTtcclxuICAgIHAge1xyXG4gICAgICAgIGdyaWQtcm93OiAyO1xyXG4gICAgICAgIGdyaWQtY29sdW1uOiAxLzM7XHJcbiAgICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBJdGVtSW1hZ2UgPSBzdHlsZWQuaW1nIGBcclxuICAgIGdyaWQtcm93OiAxO1xyXG4gICAgZ3JpZC1jb2x1bW46IDE7XHJcbiAgICB3aWR0aDogM2VtO1xyXG4gICAgaGVpZ2h0OiAzZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBQb3N0SW5wdXQgPSBzdHlsZWQuaW5wdXQgYFxyXG4gICAgd2lkdGg6IDIwZW07XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBEZWxldGVCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gICAgZ3JpZC1yb3c6IDEvMztcclxuICAgIGdyaWQtY29sdW1uOiAzO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICByaWdodDogMWVtO1xyXG4gICAgYm90dG9tOiAuMmVtO1xyXG5gIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSXRlbSwgSXRlbUltYWdlLCBQb3N0V3JhcHBlciB9IGZyb20gXCIuL1Bvc3RzLnN0eWxlc1wiO1xyXG5cclxuY29uc3QgUG9zdHMgPSAoKSA9PiB7XHJcblxyXG4gICAgbGV0IG1heElEID0gMFxyXG4gICAgXHJcbiAgICBjb25zdCBjcmVhdGVQb3N0ID0gKGxhYmVsIDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgQXV0aG9yOiAn0JLQu9Cw0LTQuNGB0LvQsNCyINCh0LDQvNGB0L7QvdC+0LInLFxyXG4gICAgICAgICAgICBNZXNzYWdlOiBsYWJlbCxcclxuICAgICAgICAgICAgQXZhdGFyOiAnaHR0cHM6Ly9kMnppYTJ3NWF1dG5sZy5jbG91ZGZyb250Lm5ldC80NjIzNS81ZWMzM2VlNzczMTNhLWxhcmdlJyxcclxuICAgICAgICAgICAgaWQ6IG1heElEKytcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgW3Bvc3RzLCBzZXRQb3N0XSA9IHVzZVN0YXRlKFtcclxuICAgICAgICBjcmVhdGVQb3N0KCfQn9GA0L7QstC10YDQutCwIDEnKSxcclxuICAgICAgICBjcmVhdGVQb3N0KCfQn9GA0L7QstC10YDQutCwIDInKSxcclxuICAgICAgICBjcmVhdGVQb3N0KCfQn9GA0L7QstC10YDQutCwIDMnKVxyXG4gICAgXSlcclxuXHJcbiAgICBjb25zdCBhZGRQb3N0ID0gKHRleHQ6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5ld1Bvc3QgPSBjcmVhdGVQb3N0KHRleHQpXHJcbiAgICAgICAgY29uc3QgbmV3QXJyYXkgPSBbLi4ucG9zdHMsIG5ld1Bvc3RdXHJcbiAgICAgICAgc2V0UG9zdChuZXdBcnJheSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkZWxldGVQb3N0ID0gKGlkOiBudW1iZXIpID0+IHtcclxuICAgICAgICBzZXRQb3N0KHBvc3RzLmZpbHRlcigocG9zdCkgPT4gcG9zdC5pZCAhPT0gaWQpKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFBvc3RXcmFwcGVyID5cclxuICAgICAgICAgICAge3Bvc3RzLm1hcCgodXNlclBvc3QpID0+IChcclxuICAgICAgICAgICAgICAgIDxJdGVtIGtleT17dXNlclBvc3QuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJdGVtSW1hZ2Ugc3JjPXt1c2VyUG9zdC5BdmF0YXJ9IGFsdD0n0KTQvtGC0L7Qs9GA0LDRhNC40Y8g0L/RgNC+0YTQuNC70Y8nLz5cclxuICAgICAgICAgICAgICAgICAgICA8aDU+e3VzZXJQb3N0LkF1dGhvcn08L2g1PlxyXG4gICAgICAgICAgICAgICAgPC9JdGVtPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L1Bvc3RXcmFwcGVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0cyJdLCJzb3VyY2VSb290IjoiIn0=