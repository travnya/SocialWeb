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
    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
      onClick: function onClick() {
        return console.log(posts);
      },
      children: "\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }, _this)]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZmlsZS9Qb3N0cy9Qb3N0cy50c3giXSwibmFtZXMiOlsiUG9zdHMiLCJ1c2VTdGF0ZSIsImlkIiwic2V0SWQiLCJjcmVhdGVQb3N0IiwibGFiZWwiLCJBdXRob3IiLCJNZXNzYWdlIiwiQXZhdGFyIiwicG9zdHMiLCJzZXRQb3N0IiwiYWRkUG9zdCIsInRleHQiLCJuZXdQb3N0IiwibmV3QXJyYXkiLCJkZWxldGVQb3N0IiwiZmlsdGVyIiwicG9zdCIsIm1hcCIsInVzZXJQb3N0IiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQUEsa0JBRUlDLHNEQUFRLENBQVMsQ0FBVCxDQUZaO0FBQUEsTUFFVEMsRUFGUztBQUFBLE1BRUxDLEtBRks7O0FBSWhCLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLEtBQUQsRUFBZ0JILEVBQWhCLEVBQStCO0FBQzlDLFdBQU87QUFDSEksWUFBTSxFQUFFLFNBREw7QUFFSEMsYUFBTyxFQUFFRixLQUZOO0FBR0hHLFlBQU0sRUFBRSxpRUFITDtBQUlITixRQUFFLEVBQUVBO0FBSkQsS0FBUDtBQU1ILEdBUEQ7O0FBSmdCLG1CQWFTRCxzREFBUSxDQUFDLENBQzlCRyxVQUFVLENBQUMsU0FBRCxFQUFZLENBQVosQ0FEb0IsQ0FBRCxDQWJqQjtBQUFBLE1BYVRLLEtBYlM7QUFBQSxNQWFGQyxPQWJFOztBQWlCaEIsTUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsSUFBRCxFQUFrQjtBQUM5QixRQUFNQyxPQUFPLEdBQUdULFVBQVUsQ0FBQ1EsSUFBRCxFQUFPVixFQUFFLEdBQUcsQ0FBWixDQUExQjtBQUNBLFFBQU1ZLFFBQVEsMEdBQU9MLEtBQVAsSUFBY0ksT0FBZCxFQUFkO0FBQ0FWLFNBQUssQ0FBQ0QsRUFBRSxHQUFHLENBQU4sQ0FBTDtBQUNBUSxXQUFPLENBQUNJLFFBQUQsQ0FBUDtBQUNILEdBTEQ7O0FBT0EsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ2IsRUFBRCxFQUFnQjtBQUMvQlEsV0FBTyxDQUFDRCxLQUFLLENBQUNPLE1BQU4sQ0FBYSxVQUFDQyxJQUFEO0FBQUEsYUFBVUEsSUFBSSxDQUFDZixFQUFMLEtBQVlBLEVBQXRCO0FBQUEsS0FBYixDQUFELENBQVA7QUFDSCxHQUZEOztBQUlBLHNCQUNJLHFFQUFDLHlEQUFEO0FBQUEsNEJBQ0kscUVBQUMsb0RBQUQ7QUFBYSxhQUFPLEVBQUVTO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixFQUVLRixLQUFLLENBQUNTLEdBQU4sQ0FBVSxVQUFDQyxRQUFEO0FBQUEsMEJBQ1AscUVBQUMsa0RBQUQ7QUFBQSxnQ0FDSSxxRUFBQyx1REFBRDtBQUFXLGFBQUcsRUFBRUEsUUFBUSxDQUFDWCxNQUF6QjtBQUFpQyxhQUFHLEVBQUM7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUVJO0FBQUEsb0JBQUtXLFFBQVEsQ0FBQ2I7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKLGVBR0k7QUFBQSxvQkFBSWEsUUFBUSxDQUFDWjtBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEosZUFJSSxxRUFBQywwREFBRDtBQUNJLGNBQUksRUFBQyxRQURUO0FBRUksbUJBQVMsRUFBQyx3QkFGZDtBQUdJLGVBQUssRUFBQyxxRUFIVjtBQUlJLGlCQUFPLEVBQUU7QUFBQSxtQkFBTVEsVUFBVSxDQUFDSSxRQUFRLENBQUNqQixFQUFWLENBQWhCO0FBQUE7QUFKYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpKO0FBQUEsU0FBV2lCLFFBQVEsQ0FBQ2pCLEVBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFETztBQUFBLEtBQVYsQ0FGTCxlQWNJO0FBQVEsYUFBTyxFQUFFO0FBQUEsZUFBTWtCLE9BQU8sQ0FBQ0MsR0FBUixDQUFZWixLQUFaLENBQU47QUFBQSxPQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBa0JILENBOUNEOztHQUFNVCxLOztLQUFBQSxLO0FBZ0RTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlLmE0ODA1NDQ4ODFlYzhkM2Q0ZWY1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBZGRQb3N0Rm9ybSBmcm9tIFwiLi9BZGRQb3N0Rm9ybVwiO1xyXG5pbXBvcnQgeyBEZWxldGVCdXR0b24sIEl0ZW0sIEl0ZW1JbWFnZSwgUG9zdFdyYXBwZXIgfSBmcm9tIFwiLi9Qb3N0cy5zdHlsZXNcIjtcclxuXHJcbmNvbnN0IFBvc3RzID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtpZCwgc2V0SWRdID0gdXNlU3RhdGU8bnVtYmVyPigwKVxyXG5cclxuICAgIGNvbnN0IGNyZWF0ZVBvc3QgPSAobGFiZWw6IHN0cmluZywgaWQ6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIEF1dGhvcjogJ0V4YW1wbGUnLFxyXG4gICAgICAgICAgICBNZXNzYWdlOiBsYWJlbCxcclxuICAgICAgICAgICAgQXZhdGFyOiAnaHR0cHM6Ly9kMnppYTJ3NWF1dG5sZy5jbG91ZGZyb250Lm5ldC80NjIzNS81ZWMzM2VlNzczMTNhLWxhcmdlJyxcclxuICAgICAgICAgICAgaWQ6IGlkXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFtwb3N0cywgc2V0UG9zdF0gPSB1c2VTdGF0ZShbXHJcbiAgICAgICAgY3JlYXRlUG9zdCgnZXhhbXBsZScsIDApXHJcbiAgICBdKVxyXG5cclxuICAgIGNvbnN0IGFkZFBvc3QgPSAodGV4dDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmV3UG9zdCA9IGNyZWF0ZVBvc3QodGV4dCwgaWQgKyAxKVxyXG4gICAgICAgIGNvbnN0IG5ld0FycmF5ID0gWy4uLnBvc3RzLCBuZXdQb3N0XVxyXG4gICAgICAgIHNldElkKGlkICsgMSlcclxuICAgICAgICBzZXRQb3N0KG5ld0FycmF5KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRlbGV0ZVBvc3QgPSAoaWQ6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIHNldFBvc3QocG9zdHMuZmlsdGVyKChwb3N0KSA9PiBwb3N0LmlkICE9PSBpZCkpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UG9zdFdyYXBwZXIgPlxyXG4gICAgICAgICAgICA8QWRkUG9zdEZvcm0gYWRkUG9zdD17YWRkUG9zdH0gLz5cclxuICAgICAgICAgICAge3Bvc3RzLm1hcCgodXNlclBvc3QpID0+IChcclxuICAgICAgICAgICAgICAgIDxJdGVtIGtleT17dXNlclBvc3QuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJdGVtSW1hZ2Ugc3JjPXt1c2VyUG9zdC5BdmF0YXJ9IGFsdD0n0KTQvtGC0L7Qs9GA0LDRhNC40Y8g0L/RgNC+0YTQuNC70Y8nIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg1Pnt1c2VyUG9zdC5BdXRob3J9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICA8cD57dXNlclBvc3QuTWVzc2FnZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPERlbGV0ZUJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdidXR0b24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cItCj0LTQsNC70LjRgtGMINC/0L7RgdGCXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZGVsZXRlUG9zdCh1c2VyUG9zdC5pZCl9IC8+XHJcbiAgICAgICAgICAgICAgICA8L0l0ZW0+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGNvbnNvbGUubG9nKHBvc3RzKX0+0J/RgNC+0LLQtdGA0LrQsDwvYnV0dG9uPlxyXG4gICAgICAgIDwvUG9zdFdyYXBwZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RzIl0sInNvdXJjZVJvb3QiOiIifQ==