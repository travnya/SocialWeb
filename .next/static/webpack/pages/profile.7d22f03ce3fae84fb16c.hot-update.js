webpackHotUpdate_N_E("pages/profile",{

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
/* harmony import */ var _AddPostForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AddPostForm */ "./src/components/Profile/Posts/AddPostForm.tsx");
/* harmony import */ var _Posts_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Posts.styles */ "./src/components/Profile/Posts/Posts.styles.ts");



var _jsxFileName = "C:\\Users\\vsamsonov\\Desktop\\SocialWeb\\src\\components\\Profile\\Posts\\Posts.tsx",
    _this = undefined,
    _s = $RefreshSig$();





var Posts = function Posts() {
  _s();

  var maxID = 0;

  var addPost = function addPost(text) {
    var newPost = createPost(text);
    var newArray = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(posts), [newPost]);
    setPost(newArray);
  };

  var createPost = function createPost(label) {
    return {
      Author: '?????????????????? ????????????????',
      Message: label,
      Avatar: 'https://d2zia2w5autnlg.cloudfront.net/46235/5ec33ee77313a-large',
      id: maxID++
    };
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([createPost('???????????????? 1'), createPost('???????????????? 2'), createPost('???????????????? 3')]),
      posts = _useState[0],
      setPost = _useState[1];

  var deletePost = function deletePost(id) {
    setPost(posts.filter(function (post) {
      return post.id !== id;
    }));
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_Posts_styles__WEBPACK_IMPORTED_MODULE_4__["PostWrapper"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_AddPostForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
      addPost: addPost
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }, _this), posts.map(function (userPost) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_Posts_styles__WEBPACK_IMPORTED_MODULE_4__["Item"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_Posts_styles__WEBPACK_IMPORTED_MODULE_4__["ItemImage"], {
          src: userPost.Avatar,
          alt: "\u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u044F \u043F\u0440\u043E\u0444\u0438\u043B\u044F"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h5", {
          children: userPost.Author
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
          children: userPost.Message
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_Posts_styles__WEBPACK_IMPORTED_MODULE_4__["DeleteButton"], {
          type: "button",
          className: "btn btn-outline-danger",
          title: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043F\u043E\u0441\u0442",
          onClick: function onClick() {
            return deletePost(userPost.id);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 21
        }, _this)]
      }, userPost.id, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }, _this);
    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
      onClick: function onClick() {
        return console.log(posts, maxID);
      },
      children: "\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 37,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZmlsZS9Qb3N0cy9Qb3N0cy50c3giXSwibmFtZXMiOlsiUG9zdHMiLCJtYXhJRCIsImFkZFBvc3QiLCJ0ZXh0IiwibmV3UG9zdCIsImNyZWF0ZVBvc3QiLCJuZXdBcnJheSIsInBvc3RzIiwic2V0UG9zdCIsImxhYmVsIiwiQXV0aG9yIiwiTWVzc2FnZSIsIkF2YXRhciIsImlkIiwidXNlU3RhdGUiLCJkZWxldGVQb3N0IiwiZmlsdGVyIiwicG9zdCIsIm1hcCIsInVzZXJQb3N0IiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBRWhCLE1BQUlDLEtBQUssR0FBRyxDQUFaOztBQUVBLE1BQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLElBQUQsRUFBa0I7QUFDOUIsUUFBTUMsT0FBTyxHQUFHQyxVQUFVLENBQUNGLElBQUQsQ0FBMUI7QUFDQSxRQUFNRyxRQUFRLDBHQUFPQyxLQUFQLElBQWNILE9BQWQsRUFBZDtBQUNBSSxXQUFPLENBQUNGLFFBQUQsQ0FBUDtBQUNILEdBSkQ7O0FBTUEsTUFBTUQsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0ksS0FBRCxFQUFvQjtBQUNuQyxXQUFPO0FBQ0hDLFlBQU0sRUFBRSxvQkFETDtBQUVIQyxhQUFPLEVBQUVGLEtBRk47QUFHSEcsWUFBTSxFQUFFLGlFQUhMO0FBSUhDLFFBQUUsRUFBRVosS0FBSztBQUpOLEtBQVA7QUFNSCxHQVBEOztBQVZnQixrQkFvQk9hLHNEQUFRLENBQUMsQ0FDNUJULFVBQVUsQ0FBQyxZQUFELENBRGtCLEVBRTVCQSxVQUFVLENBQUMsWUFBRCxDQUZrQixFQUc1QkEsVUFBVSxDQUFDLFlBQUQsQ0FIa0IsQ0FBRCxDQXBCZjtBQUFBLE1Bb0JYRSxLQXBCVztBQUFBLE1Bb0JKQyxPQXBCSTs7QUEyQmhCLE1BQU1PLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNGLEVBQUQsRUFBZ0I7QUFDL0JMLFdBQU8sQ0FBQ0QsS0FBSyxDQUFDUyxNQUFOLENBQWEsVUFBQ0MsSUFBRDtBQUFBLGFBQVVBLElBQUksQ0FBQ0osRUFBTCxLQUFZQSxFQUF0QjtBQUFBLEtBQWIsQ0FBRCxDQUFQO0FBQ0gsR0FGRDs7QUFJQSxzQkFDSSxxRUFBQyx5REFBRDtBQUFBLDRCQUNJLHFFQUFDLG9EQUFEO0FBQWEsYUFBTyxFQUFFWDtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosRUFFS0ssS0FBSyxDQUFDVyxHQUFOLENBQVUsVUFBQ0MsUUFBRDtBQUFBLDBCQUNQLHFFQUFDLGtEQUFEO0FBQUEsZ0NBQ0kscUVBQUMsdURBQUQ7QUFBVyxhQUFHLEVBQUVBLFFBQVEsQ0FBQ1AsTUFBekI7QUFBaUMsYUFBRyxFQUFDO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFFSTtBQUFBLG9CQUFLTyxRQUFRLENBQUNUO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSixlQUdJO0FBQUEsb0JBQUlTLFFBQVEsQ0FBQ1I7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhKLGVBSUkscUVBQUMsMERBQUQ7QUFDSSxjQUFJLEVBQUMsUUFEVDtBQUVJLG1CQUFTLEVBQUMsd0JBRmQ7QUFHSSxlQUFLLEVBQUMscUVBSFY7QUFJSSxpQkFBTyxFQUFFO0FBQUEsbUJBQU1JLFVBQVUsQ0FBQ0ksUUFBUSxDQUFDTixFQUFWLENBQWhCO0FBQUE7QUFKYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpKO0FBQUEsU0FBV00sUUFBUSxDQUFDTixFQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRE87QUFBQSxLQUFWLENBRkwsZUFjSTtBQUFRLGFBQU8sRUFBRTtBQUFBLGVBQU1PLE9BQU8sQ0FBQ0MsR0FBUixDQUFZZCxLQUFaLEVBQW1CTixLQUFuQixDQUFOO0FBQUEsT0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFkSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQWtCSCxDQWpERDs7R0FBTUQsSzs7S0FBQUEsSztBQW1EU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZS43ZDIyZjAzY2UzZmFlODRmYjE2Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFkZFBvc3RGb3JtIGZyb20gXCIuL0FkZFBvc3RGb3JtXCI7XHJcbmltcG9ydCB7IERlbGV0ZUJ1dHRvbiwgSXRlbSwgSXRlbUltYWdlLCBQb3N0V3JhcHBlciB9IGZyb20gXCIuL1Bvc3RzLnN0eWxlc1wiO1xyXG5cclxuY29uc3QgUG9zdHMgPSAoKSA9PiB7XHJcblxyXG4gICAgbGV0IG1heElEID0gMFxyXG4gICAgXHJcbiAgICBjb25zdCBhZGRQb3N0ID0gKHRleHQ6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5ld1Bvc3QgPSBjcmVhdGVQb3N0KHRleHQpXHJcbiAgICAgICAgY29uc3QgbmV3QXJyYXkgPSBbLi4ucG9zdHMsIG5ld1Bvc3RdXHJcbiAgICAgICAgc2V0UG9zdChuZXdBcnJheSlcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgY3JlYXRlUG9zdCA9IChsYWJlbCA6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIEF1dGhvcjogJ9CS0LvQsNC00LjRgdC70LDQsiDQodCw0LzRgdC+0L3QvtCyJyxcclxuICAgICAgICAgICAgTWVzc2FnZTogbGFiZWwsXHJcbiAgICAgICAgICAgIEF2YXRhcjogJ2h0dHBzOi8vZDJ6aWEydzVhdXRubGcuY2xvdWRmcm9udC5uZXQvNDYyMzUvNWVjMzNlZTc3MzEzYS1sYXJnZScsXHJcbiAgICAgICAgICAgIGlkOiBtYXhJRCsrXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBsZXQgW3Bvc3RzLCBzZXRQb3N0XSA9IHVzZVN0YXRlKFtcclxuICAgICAgICBjcmVhdGVQb3N0KCfQn9GA0L7QstC10YDQutCwIDEnKSxcclxuICAgICAgICBjcmVhdGVQb3N0KCfQn9GA0L7QstC10YDQutCwIDInKSxcclxuICAgICAgICBjcmVhdGVQb3N0KCfQn9GA0L7QstC10YDQutCwIDMnKVxyXG4gICAgXSlcclxuXHJcblxyXG4gICAgY29uc3QgZGVsZXRlUG9zdCA9IChpZDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgc2V0UG9zdChwb3N0cy5maWx0ZXIoKHBvc3QpID0+IHBvc3QuaWQgIT09IGlkKSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxQb3N0V3JhcHBlciA+XHJcbiAgICAgICAgICAgIDxBZGRQb3N0Rm9ybSBhZGRQb3N0PXthZGRQb3N0fS8+XHJcbiAgICAgICAgICAgIHtwb3N0cy5tYXAoKHVzZXJQb3N0KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8SXRlbSBrZXk9e3VzZXJQb3N0LmlkfT5cclxuICAgICAgICAgICAgICAgICAgICA8SXRlbUltYWdlIHNyYz17dXNlclBvc3QuQXZhdGFyfSBhbHQ9J9Ck0L7RgtC+0LPRgNCw0YTQuNGPINC/0YDQvtGE0LjQu9GPJy8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg1Pnt1c2VyUG9zdC5BdXRob3J9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICA8cD57dXNlclBvc3QuTWVzc2FnZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPERlbGV0ZUJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0nYnV0dG9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCLQo9C00LDQu9C40YLRjCDQv9C+0YHRglwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRlbGV0ZVBvc3QodXNlclBvc3QuaWQpfS8+XHJcbiAgICAgICAgICAgICAgICA8L0l0ZW0+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGNvbnNvbGUubG9nKHBvc3RzLCBtYXhJRCl9PtCf0YDQvtCy0LXRgNC60LA8L2J1dHRvbj5cclxuICAgICAgICA8L1Bvc3RXcmFwcGVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0cyJdLCJzb3VyY2VSb290IjoiIn0=