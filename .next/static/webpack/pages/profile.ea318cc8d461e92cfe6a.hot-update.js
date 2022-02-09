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
      Author: 'Владислав Самсонов',
      Message: label,
      Avatar: 'https://d2zia2w5autnlg.cloudfront.net/46235/5ec33ee77313a-large',
      id: id
    };
  };

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([createPost('Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, dolore. Laboriosam architecto, qui dolores quasi veniam nesciunt omnis expedita culpa tenetur voluptatem inventore nisi corrupti quisquam consequuntur libero unde doloribus fugit minus eveniet nobis. Obcaecati, culpa. Perferendis hic numquam odio quod natus nemo inventore corporis id provident illo dolores omnis quisquam labore, adipisci iste voluptas at fuga quaerat vitae sit exercitationem pariatur modi? Iure, ullam. Dolores facilis nam voluptatum ipsum? Laboriosam voluptatem enim aperiam, rem numquam maxime magni, libero in suscipit quaerat impedit id harum saepe minus! Tempora illum repellendus adipisci quaerat vitae, excepturi dolor, libero quo aliquid, molestiae molestias.', 0)]),
      posts = _useState2[0],
      setPost = _useState2[1];

  var addPost = function addPost(text) {
    if (text !== '') {
      var newPost = createPost(text, id + 1);
      var newArray = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(posts), [newPost]);
      setId(id + 1);
      setPost(newArray);
    }
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
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 9
  }, _this);
};

_s(Posts, "F3UFeYb90VtsoSRaKAe6SHqDcf4=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZmlsZS9Qb3N0cy9Qb3N0cy50c3giXSwibmFtZXMiOlsiUG9zdHMiLCJ1c2VTdGF0ZSIsImlkIiwic2V0SWQiLCJjcmVhdGVQb3N0IiwibGFiZWwiLCJBdXRob3IiLCJNZXNzYWdlIiwiQXZhdGFyIiwicG9zdHMiLCJzZXRQb3N0IiwiYWRkUG9zdCIsInRleHQiLCJuZXdQb3N0IiwibmV3QXJyYXkiLCJkZWxldGVQb3N0IiwiZmlsdGVyIiwicG9zdCIsIm1hcCIsInVzZXJQb3N0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFBQSxrQkFFSUMsc0RBQVEsQ0FBUyxDQUFULENBRlo7QUFBQSxNQUVUQyxFQUZTO0FBQUEsTUFFTEMsS0FGSzs7QUFJaEIsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsS0FBRCxFQUFnQkgsRUFBaEIsRUFBK0I7QUFDOUMsV0FBTztBQUNISSxZQUFNLEVBQUUsb0JBREw7QUFFSEMsYUFBTyxFQUFFRixLQUZOO0FBR0hHLFlBQU0sRUFBRSxpRUFITDtBQUlITixRQUFFLEVBQUVBO0FBSkQsS0FBUDtBQU1ILEdBUEQ7O0FBSmdCLG1CQWFTRCxzREFBUSxDQUFDLENBQzlCRyxVQUFVLENBQUMsdXZCQUFELEVBQTB2QixDQUExdkIsQ0FEb0IsQ0FBRCxDQWJqQjtBQUFBLE1BYVRLLEtBYlM7QUFBQSxNQWFGQyxPQWJFOztBQWtCaEIsTUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsSUFBRCxFQUFrQjtBQUM5QixRQUFJQSxJQUFJLEtBQUssRUFBYixFQUFnQjtBQUNaLFVBQU1DLE9BQU8sR0FBR1QsVUFBVSxDQUFDUSxJQUFELEVBQU9WLEVBQUUsR0FBRyxDQUFaLENBQTFCO0FBQ0EsVUFBTVksUUFBUSwwR0FBT0wsS0FBUCxJQUFjSSxPQUFkLEVBQWQ7QUFDQVYsV0FBSyxDQUFDRCxFQUFFLEdBQUcsQ0FBTixDQUFMO0FBQ0FRLGFBQU8sQ0FBQ0ksUUFBRCxDQUFQO0FBQ0g7QUFDSixHQVBEOztBQVNBLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNiLEVBQUQsRUFBZ0I7QUFDL0JRLFdBQU8sQ0FBQ0QsS0FBSyxDQUFDTyxNQUFOLENBQWEsVUFBQ0MsSUFBRDtBQUFBLGFBQVVBLElBQUksQ0FBQ2YsRUFBTCxLQUFZQSxFQUF0QjtBQUFBLEtBQWIsQ0FBRCxDQUFQO0FBQ0gsR0FGRDs7QUFJQSxzQkFDSSxxRUFBQyx5REFBRDtBQUFBLDRCQUNJLHFFQUFDLG9EQUFEO0FBQWEsYUFBTyxFQUFFUztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosRUFFS0YsS0FBSyxDQUFDUyxHQUFOLENBQVUsVUFBQ0MsUUFBRDtBQUFBLDBCQUNQLHFFQUFDLGtEQUFEO0FBQUEsZ0NBQ0kscUVBQUMsdURBQUQ7QUFBVyxhQUFHLEVBQUVBLFFBQVEsQ0FBQ1gsTUFBekI7QUFBaUMsYUFBRyxFQUFDO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFFSTtBQUFBLG9CQUFLVyxRQUFRLENBQUNiO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSixlQUdJO0FBQUEsb0JBQUlhLFFBQVEsQ0FBQ1o7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhKLGVBSUkscUVBQUMsMERBQUQ7QUFDSSxjQUFJLEVBQUMsUUFEVDtBQUVJLG1CQUFTLEVBQUMsd0JBRmQ7QUFHSSxlQUFLLEVBQUMscUVBSFY7QUFJSSxpQkFBTyxFQUFFO0FBQUEsbUJBQU1RLFVBQVUsQ0FBQ0ksUUFBUSxDQUFDakIsRUFBVixDQUFoQjtBQUFBO0FBSmI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKSjtBQUFBLFNBQVdpQixRQUFRLENBQUNqQixFQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRE87QUFBQSxLQUFWLENBRkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFpQkgsQ0FoREQ7O0dBQU1GLEs7O0tBQUFBLEs7QUFrRFNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGUuZWEzMThjYzhkNDYxZTkyY2ZlNmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFkZFBvc3RGb3JtIGZyb20gXCIuL0FkZFBvc3RGb3JtXCI7XHJcbmltcG9ydCB7IERlbGV0ZUJ1dHRvbiwgSXRlbSwgSXRlbUltYWdlLCBQb3N0V3JhcHBlciB9IGZyb20gXCIuL1Bvc3RzLnN0eWxlc1wiO1xyXG5cclxuY29uc3QgUG9zdHMgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW2lkLCBzZXRJZF0gPSB1c2VTdGF0ZTxudW1iZXI+KDApXHJcblxyXG4gICAgY29uc3QgY3JlYXRlUG9zdCA9IChsYWJlbDogc3RyaW5nLCBpZDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgQXV0aG9yOiAn0JLQu9Cw0LTQuNGB0LvQsNCyINCh0LDQvNGB0L7QvdC+0LInLFxyXG4gICAgICAgICAgICBNZXNzYWdlOiBsYWJlbCxcclxuICAgICAgICAgICAgQXZhdGFyOiAnaHR0cHM6Ly9kMnppYTJ3NWF1dG5sZy5jbG91ZGZyb250Lm5ldC80NjIzNS81ZWMzM2VlNzczMTNhLWxhcmdlJyxcclxuICAgICAgICAgICAgaWQ6IGlkXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFtwb3N0cywgc2V0UG9zdF0gPSB1c2VTdGF0ZShbXHJcbiAgICAgICAgY3JlYXRlUG9zdCgnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQ29uc2VxdWF0dXIsIGRvbG9yZS4gTGFib3Jpb3NhbSBhcmNoaXRlY3RvLCBxdWkgZG9sb3JlcyBxdWFzaSB2ZW5pYW0gbmVzY2l1bnQgb21uaXMgZXhwZWRpdGEgY3VscGEgdGVuZXR1ciB2b2x1cHRhdGVtIGludmVudG9yZSBuaXNpIGNvcnJ1cHRpIHF1aXNxdWFtIGNvbnNlcXV1bnR1ciBsaWJlcm8gdW5kZSBkb2xvcmlidXMgZnVnaXQgbWludXMgZXZlbmlldCBub2Jpcy4gT2JjYWVjYXRpLCBjdWxwYS4gUGVyZmVyZW5kaXMgaGljIG51bXF1YW0gb2RpbyBxdW9kIG5hdHVzIG5lbW8gaW52ZW50b3JlIGNvcnBvcmlzIGlkIHByb3ZpZGVudCBpbGxvIGRvbG9yZXMgb21uaXMgcXVpc3F1YW0gbGFib3JlLCBhZGlwaXNjaSBpc3RlIHZvbHVwdGFzIGF0IGZ1Z2EgcXVhZXJhdCB2aXRhZSBzaXQgZXhlcmNpdGF0aW9uZW0gcGFyaWF0dXIgbW9kaT8gSXVyZSwgdWxsYW0uIERvbG9yZXMgZmFjaWxpcyBuYW0gdm9sdXB0YXR1bSBpcHN1bT8gTGFib3Jpb3NhbSB2b2x1cHRhdGVtIGVuaW0gYXBlcmlhbSwgcmVtIG51bXF1YW0gbWF4aW1lIG1hZ25pLCBsaWJlcm8gaW4gc3VzY2lwaXQgcXVhZXJhdCBpbXBlZGl0IGlkIGhhcnVtIHNhZXBlIG1pbnVzISBUZW1wb3JhIGlsbHVtIHJlcGVsbGVuZHVzIGFkaXBpc2NpIHF1YWVyYXQgdml0YWUsIGV4Y2VwdHVyaSBkb2xvciwgbGliZXJvIHF1byBhbGlxdWlkLCBtb2xlc3RpYWUgbW9sZXN0aWFzLicsIDApXHJcbiAgICBdKVxyXG5cclxuXHJcbiAgICBjb25zdCBhZGRQb3N0ID0gKHRleHQ6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGlmICh0ZXh0ICE9PSAnJyl7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1Bvc3QgPSBjcmVhdGVQb3N0KHRleHQsIGlkICsgMSlcclxuICAgICAgICAgICAgY29uc3QgbmV3QXJyYXkgPSBbLi4ucG9zdHMsIG5ld1Bvc3RdXHJcbiAgICAgICAgICAgIHNldElkKGlkICsgMSlcclxuICAgICAgICAgICAgc2V0UG9zdChuZXdBcnJheSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGVsZXRlUG9zdCA9IChpZDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgc2V0UG9zdChwb3N0cy5maWx0ZXIoKHBvc3QpID0+IHBvc3QuaWQgIT09IGlkKSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxQb3N0V3JhcHBlciA+XHJcbiAgICAgICAgICAgIDxBZGRQb3N0Rm9ybSBhZGRQb3N0PXthZGRQb3N0fSAvPlxyXG4gICAgICAgICAgICB7cG9zdHMubWFwKCh1c2VyUG9zdCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPEl0ZW0ga2V5PXt1c2VyUG9zdC5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEl0ZW1JbWFnZSBzcmM9e3VzZXJQb3N0LkF2YXRhcn0gYWx0PSfQpNC+0YLQvtCz0YDQsNGE0LjRjyDQv9GA0L7RhNC40LvRjycgLz5cclxuICAgICAgICAgICAgICAgICAgICA8aDU+e3VzZXJQb3N0LkF1dGhvcn08L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPnt1c2VyUG9zdC5NZXNzYWdlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8RGVsZXRlQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J2J1dHRvbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLWRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwi0KPQtNCw0LvQuNGC0Ywg0L/QvtGB0YJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkZWxldGVQb3N0KHVzZXJQb3N0LmlkKX0gLz5cclxuICAgICAgICAgICAgICAgIDwvSXRlbT5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9Qb3N0V3JhcHBlcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdHMiXSwic291cmNlUm9vdCI6IiJ9