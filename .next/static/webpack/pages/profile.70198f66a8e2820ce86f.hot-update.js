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

  var _addPost = function addPost(text) {
    var newPost = createPost(text);
    var newArray = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(posts), [newPost]);
    setPost(newArray);
  };

  var deletePost = function deletePost(id) {
    setPost(posts.filter(function (post) {
      return post.id !== id;
    }));
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_Posts_styles__WEBPACK_IMPORTED_MODULE_4__["PostWrapper"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_AddPostForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
      addPost: function addPost() {
        _addPost;
        createPost;
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }, _this), posts.map(function (userPost) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_Posts_styles__WEBPACK_IMPORTED_MODULE_4__["Item"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_Posts_styles__WEBPACK_IMPORTED_MODULE_4__["ItemImage"], {
          src: userPost.Avatar,
          alt: "\u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u044F \u043F\u0440\u043E\u0444\u0438\u043B\u044F"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h5", {
          children: userPost.Author
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
          children: userPost.Message
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
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
          lineNumber: 45,
          columnNumber: 21
        }, _this)]
      }, userPost.id, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }, _this);
    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
      onClick: function onClick() {
        return console.log(posts, maxID);
      },
      children: "\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 35,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZmlsZS9Qb3N0cy9Qb3N0cy50c3giXSwibmFtZXMiOlsiUG9zdHMiLCJtYXhJRCIsImNyZWF0ZVBvc3QiLCJsYWJlbCIsIkF1dGhvciIsIk1lc3NhZ2UiLCJBdmF0YXIiLCJpZCIsInVzZVN0YXRlIiwicG9zdHMiLCJzZXRQb3N0IiwiYWRkUG9zdCIsInRleHQiLCJuZXdQb3N0IiwibmV3QXJyYXkiLCJkZWxldGVQb3N0IiwiZmlsdGVyIiwicG9zdCIsIm1hcCIsInVzZXJQb3N0IiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBRWhCLE1BQUlDLEtBQUssR0FBRyxDQUFaOztBQUVBLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLEtBQUQsRUFBb0I7QUFDbkMsV0FBTztBQUNIQyxZQUFNLEVBQUUsb0JBREw7QUFFSEMsYUFBTyxFQUFFRixLQUZOO0FBR0hHLFlBQU0sRUFBRSxpRUFITDtBQUlIQyxRQUFFLEVBQUVOLEtBQUs7QUFKTixLQUFQO0FBTUgsR0FQRDs7QUFKZ0Isa0JBYVNPLHNEQUFRLENBQUMsQ0FDOUJOLFVBQVUsQ0FBQyxZQUFELENBRG9CLEVBRTlCQSxVQUFVLENBQUMsWUFBRCxDQUZvQixFQUc5QkEsVUFBVSxDQUFDLFlBQUQsQ0FIb0IsQ0FBRCxDQWJqQjtBQUFBLE1BYVRPLEtBYlM7QUFBQSxNQWFGQyxPQWJFOztBQW1CaEIsTUFBTUMsUUFBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsSUFBRCxFQUFrQjtBQUM5QixRQUFNQyxPQUFPLEdBQUdYLFVBQVUsQ0FBQ1UsSUFBRCxDQUExQjtBQUNBLFFBQU1FLFFBQVEsMEdBQU9MLEtBQVAsSUFBY0ksT0FBZCxFQUFkO0FBQ0FILFdBQU8sQ0FBQ0ksUUFBRCxDQUFQO0FBQ0gsR0FKRDs7QUFNQSxNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDUixFQUFELEVBQWdCO0FBQy9CRyxXQUFPLENBQUNELEtBQUssQ0FBQ08sTUFBTixDQUFhLFVBQUNDLElBQUQ7QUFBQSxhQUFVQSxJQUFJLENBQUNWLEVBQUwsS0FBWUEsRUFBdEI7QUFBQSxLQUFiLENBQUQsQ0FBUDtBQUNILEdBRkQ7O0FBSUEsc0JBQ0kscUVBQUMseURBQUQ7QUFBQSw0QkFDSSxxRUFBQyxvREFBRDtBQUFhLGFBQU8sRUFBRSxtQkFBTTtBQUN4QkksZ0JBQU87QUFDUFQsa0JBQVU7QUFDYjtBQUhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixFQUtLTyxLQUFLLENBQUNTLEdBQU4sQ0FBVSxVQUFDQyxRQUFEO0FBQUEsMEJBQ1AscUVBQUMsa0RBQUQ7QUFBQSxnQ0FDSSxxRUFBQyx1REFBRDtBQUFXLGFBQUcsRUFBRUEsUUFBUSxDQUFDYixNQUF6QjtBQUFpQyxhQUFHLEVBQUM7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUVJO0FBQUEsb0JBQUthLFFBQVEsQ0FBQ2Y7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKLGVBR0k7QUFBQSxvQkFBSWUsUUFBUSxDQUFDZDtBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEosZUFJSSxxRUFBQywwREFBRDtBQUNJLGNBQUksRUFBQyxRQURUO0FBRUksbUJBQVMsRUFBQyx3QkFGZDtBQUdJLGVBQUssRUFBQyxxRUFIVjtBQUlJLGlCQUFPLEVBQUU7QUFBQSxtQkFBTVUsVUFBVSxDQUFDSSxRQUFRLENBQUNaLEVBQVYsQ0FBaEI7QUFBQTtBQUpiO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSko7QUFBQSxTQUFXWSxRQUFRLENBQUNaLEVBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFETztBQUFBLEtBQVYsQ0FMTCxlQWlCSTtBQUFRLGFBQU8sRUFBRTtBQUFBLGVBQU1hLE9BQU8sQ0FBQ0MsR0FBUixDQUFZWixLQUFaLEVBQW1CUixLQUFuQixDQUFOO0FBQUEsT0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFqQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFxQkgsQ0FsREQ7O0dBQU1ELEs7O0tBQUFBLEs7QUFvRFNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGUuNzAxOThmNjZhOGUyODIwY2U4NmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBZGRQb3N0Rm9ybSBmcm9tIFwiLi9BZGRQb3N0Rm9ybVwiO1xyXG5pbXBvcnQgeyBEZWxldGVCdXR0b24sIEl0ZW0sIEl0ZW1JbWFnZSwgUG9zdFdyYXBwZXIgfSBmcm9tIFwiLi9Qb3N0cy5zdHlsZXNcIjtcclxuXHJcbmNvbnN0IFBvc3RzID0gKCkgPT4ge1xyXG5cclxuICAgIGxldCBtYXhJRCA9IDBcclxuICAgIFxyXG4gICAgY29uc3QgY3JlYXRlUG9zdCA9IChsYWJlbCA6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIEF1dGhvcjogJ9CS0LvQsNC00LjRgdC70LDQsiDQodCw0LzRgdC+0L3QvtCyJyxcclxuICAgICAgICAgICAgTWVzc2FnZTogbGFiZWwsXHJcbiAgICAgICAgICAgIEF2YXRhcjogJ2h0dHBzOi8vZDJ6aWEydzVhdXRubGcuY2xvdWRmcm9udC5uZXQvNDYyMzUvNWVjMzNlZTc3MzEzYS1sYXJnZScsXHJcbiAgICAgICAgICAgIGlkOiBtYXhJRCsrXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFtwb3N0cywgc2V0UG9zdF0gPSB1c2VTdGF0ZShbXHJcbiAgICAgICAgY3JlYXRlUG9zdCgn0J/RgNC+0LLQtdGA0LrQsCAxJyksXHJcbiAgICAgICAgY3JlYXRlUG9zdCgn0J/RgNC+0LLQtdGA0LrQsCAyJyksXHJcbiAgICAgICAgY3JlYXRlUG9zdCgn0J/RgNC+0LLQtdGA0LrQsCAzJylcclxuICAgIF0pXHJcblxyXG4gICAgY29uc3QgYWRkUG9zdCA9ICh0ZXh0OiBzdHJpbmcpID0+IHtcclxuICAgICAgICBjb25zdCBuZXdQb3N0ID0gY3JlYXRlUG9zdCh0ZXh0KVxyXG4gICAgICAgIGNvbnN0IG5ld0FycmF5ID0gWy4uLnBvc3RzLCBuZXdQb3N0XVxyXG4gICAgICAgIHNldFBvc3QobmV3QXJyYXkpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGVsZXRlUG9zdCA9IChpZDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgc2V0UG9zdChwb3N0cy5maWx0ZXIoKHBvc3QpID0+IHBvc3QuaWQgIT09IGlkKSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxQb3N0V3JhcHBlciA+XHJcbiAgICAgICAgICAgIDxBZGRQb3N0Rm9ybSBhZGRQb3N0PXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhZGRQb3N0XHJcbiAgICAgICAgICAgICAgICBjcmVhdGVQb3N0XHJcbiAgICAgICAgICAgIH19Lz5cclxuICAgICAgICAgICAge3Bvc3RzLm1hcCgodXNlclBvc3QpID0+IChcclxuICAgICAgICAgICAgICAgIDxJdGVtIGtleT17dXNlclBvc3QuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJdGVtSW1hZ2Ugc3JjPXt1c2VyUG9zdC5BdmF0YXJ9IGFsdD0n0KTQvtGC0L7Qs9GA0LDRhNC40Y8g0L/RgNC+0YTQuNC70Y8nLz5cclxuICAgICAgICAgICAgICAgICAgICA8aDU+e3VzZXJQb3N0LkF1dGhvcn08L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPnt1c2VyUG9zdC5NZXNzYWdlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8RGVsZXRlQnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdidXR0b24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cItCj0LTQsNC70LjRgtGMINC/0L7RgdGCXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZGVsZXRlUG9zdCh1c2VyUG9zdC5pZCl9Lz5cclxuICAgICAgICAgICAgICAgIDwvSXRlbT5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gY29uc29sZS5sb2cocG9zdHMsIG1heElEKX0+0J/RgNC+0LLQtdGA0LrQsDwvYnV0dG9uPlxyXG4gICAgICAgIDwvUG9zdFdyYXBwZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RzIl0sInNvdXJjZVJvb3QiOiIifQ==