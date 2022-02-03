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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      id = _useState[0],
      setId = _useState[1];

  var createPost = function createPost(label, id) {
    return {
      Author: 'Example',
      Message: label,
      Avatar: 'https://d2zia2w5autnlg.cloudfront.net/46235/5ec33ee77313a-large',
      id: id
    };
  };

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([createPost('example', 0)]),
      posts = _useState2[0],
      setPost = _useState2[1];

  var addPost = function addPost(text) {
    var newPost = createPost(text, id + 1);
    var newArray = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(posts), [newPost]);
    setId(id + 1);
    setPost(newArray);
  };

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
      lineNumber: 35,
      columnNumber: 13
    }, _this), posts.map(function (userPost) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_Posts_styles__WEBPACK_IMPORTED_MODULE_4__["Item"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_Posts_styles__WEBPACK_IMPORTED_MODULE_4__["ItemImage"], {
          src: userPost.Avatar,
          alt: "\u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u044F \u043F\u0440\u043E\u0444\u0438\u043B\u044F"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h5", {
          children: userPost.Author
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
          children: userPost.Message
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
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
          lineNumber: 41,
          columnNumber: 21
        }, _this)]
      }, userPost.id, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 9
  }, _this);
};

_s(Posts, "SG9wAhMEhWHJYlxe08VawxLTTQE=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZmlsZS9Qb3N0cy9Qb3N0cy50c3giXSwibmFtZXMiOlsiUG9zdHMiLCJ1c2VTdGF0ZSIsImlkIiwic2V0SWQiLCJjcmVhdGVQb3N0IiwibGFiZWwiLCJBdXRob3IiLCJNZXNzYWdlIiwiQXZhdGFyIiwicG9zdHMiLCJzZXRQb3N0IiwiYWRkUG9zdCIsInRleHQiLCJuZXdQb3N0IiwibmV3QXJyYXkiLCJkZWxldGVQb3N0IiwiZmlsdGVyIiwicG9zdCIsIm1hcCIsInVzZXJQb3N0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFBQSxrQkFFSUMsc0RBQVEsQ0FBUyxDQUFULENBRlo7QUFBQSxNQUVUQyxFQUZTO0FBQUEsTUFFTEMsS0FGSzs7QUFJaEIsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsS0FBRCxFQUFnQkgsRUFBaEIsRUFBK0I7QUFDOUMsV0FBTztBQUNISSxZQUFNLEVBQUUsU0FETDtBQUVIQyxhQUFPLEVBQUVGLEtBRk47QUFHSEcsWUFBTSxFQUFFLGlFQUhMO0FBSUhOLFFBQUUsRUFBRUE7QUFKRCxLQUFQO0FBTUgsR0FQRDs7QUFKZ0IsbUJBYVNELHNEQUFRLENBQUMsQ0FDOUJHLFVBQVUsQ0FBQyxTQUFELEVBQVksQ0FBWixDQURvQixDQUFELENBYmpCO0FBQUEsTUFhVEssS0FiUztBQUFBLE1BYUZDLE9BYkU7O0FBaUJoQixNQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxJQUFELEVBQWtCO0FBQzlCLFFBQU1DLE9BQU8sR0FBR1QsVUFBVSxDQUFDUSxJQUFELEVBQU9WLEVBQUUsR0FBRyxDQUFaLENBQTFCO0FBQ0EsUUFBTVksUUFBUSwwR0FBT0wsS0FBUCxJQUFjSSxPQUFkLEVBQWQ7QUFDQVYsU0FBSyxDQUFDRCxFQUFFLEdBQUcsQ0FBTixDQUFMO0FBQ0FRLFdBQU8sQ0FBQ0ksUUFBRCxDQUFQO0FBQ0gsR0FMRDs7QUFPQSxNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDYixFQUFELEVBQWdCO0FBQy9CUSxXQUFPLENBQUNELEtBQUssQ0FBQ08sTUFBTixDQUFhLFVBQUNDLElBQUQ7QUFBQSxhQUFVQSxJQUFJLENBQUNmLEVBQUwsS0FBWUEsRUFBdEI7QUFBQSxLQUFiLENBQUQsQ0FBUDtBQUNILEdBRkQ7O0FBSUEsc0JBQ0kscUVBQUMseURBQUQ7QUFBQSw0QkFDSSxxRUFBQyxvREFBRDtBQUFhLGFBQU8sRUFBRVM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLEVBRUtGLEtBQUssQ0FBQ1MsR0FBTixDQUFVLFVBQUNDLFFBQUQ7QUFBQSwwQkFDUCxxRUFBQyxrREFBRDtBQUFBLGdDQUNJLHFFQUFDLHVEQUFEO0FBQVcsYUFBRyxFQUFFQSxRQUFRLENBQUNYLE1BQXpCO0FBQWlDLGFBQUcsRUFBQztBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBRUk7QUFBQSxvQkFBS1csUUFBUSxDQUFDYjtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkosZUFHSTtBQUFBLG9CQUFJYSxRQUFRLENBQUNaO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFISixlQUlJLHFFQUFDLDBEQUFEO0FBQ0ksY0FBSSxFQUFDLFFBRFQ7QUFFSSxtQkFBUyxFQUFDLHdCQUZkO0FBR0ksZUFBSyxFQUFDLHFFQUhWO0FBSUksaUJBQU8sRUFBRTtBQUFBLG1CQUFNUSxVQUFVLENBQUNJLFFBQVEsQ0FBQ2pCLEVBQVYsQ0FBaEI7QUFBQTtBQUpiO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSko7QUFBQSxTQUFXaUIsUUFBUSxDQUFDakIsRUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURPO0FBQUEsS0FBVixDQUZMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBaUJILENBN0NEOztHQUFNRixLOztLQUFBQSxLO0FBK0NTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlLjE2MTUxOTNiZWM1ZDU2NzVhOWM1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBZGRQb3N0Rm9ybSBmcm9tIFwiLi9BZGRQb3N0Rm9ybVwiO1xyXG5pbXBvcnQgeyBEZWxldGVCdXR0b24sIEl0ZW0sIEl0ZW1JbWFnZSwgUG9zdFdyYXBwZXIgfSBmcm9tIFwiLi9Qb3N0cy5zdHlsZXNcIjtcclxuXHJcbmNvbnN0IFBvc3RzID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtpZCwgc2V0SWRdID0gdXNlU3RhdGU8bnVtYmVyPigwKVxyXG5cclxuICAgIGNvbnN0IGNyZWF0ZVBvc3QgPSAobGFiZWw6IHN0cmluZywgaWQ6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIEF1dGhvcjogJ0V4YW1wbGUnLFxyXG4gICAgICAgICAgICBNZXNzYWdlOiBsYWJlbCxcclxuICAgICAgICAgICAgQXZhdGFyOiAnaHR0cHM6Ly9kMnppYTJ3NWF1dG5sZy5jbG91ZGZyb250Lm5ldC80NjIzNS81ZWMzM2VlNzczMTNhLWxhcmdlJyxcclxuICAgICAgICAgICAgaWQ6IGlkXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFtwb3N0cywgc2V0UG9zdF0gPSB1c2VTdGF0ZShbXHJcbiAgICAgICAgY3JlYXRlUG9zdCgnZXhhbXBsZScsIDApXHJcbiAgICBdKVxyXG5cclxuICAgIGNvbnN0IGFkZFBvc3QgPSAodGV4dDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmV3UG9zdCA9IGNyZWF0ZVBvc3QodGV4dCwgaWQgKyAxKVxyXG4gICAgICAgIGNvbnN0IG5ld0FycmF5ID0gWy4uLnBvc3RzLCBuZXdQb3N0XVxyXG4gICAgICAgIHNldElkKGlkICsgMSlcclxuICAgICAgICBzZXRQb3N0KG5ld0FycmF5KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRlbGV0ZVBvc3QgPSAoaWQ6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIHNldFBvc3QocG9zdHMuZmlsdGVyKChwb3N0KSA9PiBwb3N0LmlkICE9PSBpZCkpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UG9zdFdyYXBwZXIgPlxyXG4gICAgICAgICAgICA8QWRkUG9zdEZvcm0gYWRkUG9zdD17YWRkUG9zdH0gLz5cclxuICAgICAgICAgICAge3Bvc3RzLm1hcCgodXNlclBvc3QpID0+IChcclxuICAgICAgICAgICAgICAgIDxJdGVtIGtleT17dXNlclBvc3QuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJdGVtSW1hZ2Ugc3JjPXt1c2VyUG9zdC5BdmF0YXJ9IGFsdD0n0KTQvtGC0L7Qs9GA0LDRhNC40Y8g0L/RgNC+0YTQuNC70Y8nIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg1Pnt1c2VyUG9zdC5BdXRob3J9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICA8cD57dXNlclBvc3QuTWVzc2FnZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPERlbGV0ZUJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdidXR0b24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cItCj0LTQsNC70LjRgtGMINC/0L7RgdGCXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZGVsZXRlUG9zdCh1c2VyUG9zdC5pZCl9IC8+XHJcbiAgICAgICAgICAgICAgICA8L0l0ZW0+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvUG9zdFdyYXBwZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RzIl0sInNvdXJjZVJvb3QiOiIifQ==