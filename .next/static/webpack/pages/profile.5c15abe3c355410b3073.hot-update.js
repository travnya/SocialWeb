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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([{
    Author: 'Владислав Самсонов',
    Message: 'Привет, я новенький!',
    Avatar: 'https://d2zia2w5autnlg.cloudfront.net/46235/5ec33ee77313a-large',
    id: maxID
  }]),
      posts = _useState[0],
      setPost = _useState[1];

  var createPost = function createPost(label) {
    return {
      Author: 'Example',
      Message: label,
      Avatar: 'https://d2zia2w5autnlg.cloudfront.net/46235/5ec33ee77313a-large',
      id: maxID++
    };
  };

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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_Posts_styles__WEBPACK_IMPORTED_MODULE_4__["PostWrapper"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_AddPostForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
      addPost: addPost
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
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
    lineNumber: 38,
    columnNumber: 9
  }, _this);
};

_s(Posts, "b4W30xVtBEvW2TcPaheGmuFKM/4=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZmlsZS9Qb3N0cy9Qb3N0cy50c3giXSwibmFtZXMiOlsiUG9zdHMiLCJtYXhJRCIsInVzZVN0YXRlIiwiQXV0aG9yIiwiTWVzc2FnZSIsIkF2YXRhciIsImlkIiwicG9zdHMiLCJzZXRQb3N0IiwiY3JlYXRlUG9zdCIsImxhYmVsIiwiYWRkUG9zdCIsInRleHQiLCJuZXdQb3N0IiwibmV3QXJyYXkiLCJkZWxldGVQb3N0IiwiZmlsdGVyIiwicG9zdCIsIm1hcCIsInVzZXJQb3N0IiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBRWhCLE1BQUlDLEtBQUssR0FBRyxDQUFaOztBQUZnQixrQkFJU0Msc0RBQVEsQ0FBQyxDQUM5QjtBQUNJQyxVQUFNLEVBQUUsb0JBRFo7QUFFSUMsV0FBTyxFQUFFLHNCQUZiO0FBR0lDLFVBQU0sRUFBRSxpRUFIWjtBQUlJQyxNQUFFLEVBQUVMO0FBSlIsR0FEOEIsQ0FBRCxDQUpqQjtBQUFBLE1BSVRNLEtBSlM7QUFBQSxNQUlGQyxPQUpFOztBQWFoQixNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxLQUFELEVBQVc7QUFDMUIsV0FBTztBQUNIUCxZQUFNLEVBQUUsU0FETDtBQUVIQyxhQUFPLEVBQUVNLEtBRk47QUFHSEwsWUFBTSxFQUFFLGlFQUhMO0FBSUhDLFFBQUUsRUFBRUwsS0FBSztBQUpOLEtBQVA7QUFNSCxHQVBEOztBQVNBLE1BQU1VLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLElBQUQsRUFBa0I7QUFDOUIsUUFBTUMsT0FBTyxHQUFHSixVQUFVLENBQUNHLElBQUQsQ0FBMUI7QUFDQSxRQUFNRSxRQUFRLDBHQUFPUCxLQUFQLElBQWNNLE9BQWQsRUFBZDtBQUNBTCxXQUFPLENBQUNNLFFBQUQsQ0FBUDtBQUNILEdBSkQ7O0FBTUEsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ1QsRUFBRCxFQUFnQjtBQUMvQkUsV0FBTyxDQUFDRCxLQUFLLENBQUNTLE1BQU4sQ0FBYSxVQUFDQyxJQUFEO0FBQUEsYUFBVUEsSUFBSSxDQUFDWCxFQUFMLEtBQVlBLEVBQXRCO0FBQUEsS0FBYixDQUFELENBQVA7QUFDSCxHQUZEOztBQUlBLHNCQUNJLHFFQUFDLHlEQUFEO0FBQUEsNEJBQ0kscUVBQUMsb0RBQUQ7QUFBYSxhQUFPLEVBQUVLO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixFQUVLSixLQUFLLENBQUNXLEdBQU4sQ0FBVSxVQUFDQyxRQUFEO0FBQUEsMEJBQ1AscUVBQUMsa0RBQUQ7QUFBQSxnQ0FDSSxxRUFBQyx1REFBRDtBQUFXLGFBQUcsRUFBRUEsUUFBUSxDQUFDZCxNQUF6QjtBQUFpQyxhQUFHLEVBQUM7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUVJO0FBQUEsb0JBQUtjLFFBQVEsQ0FBQ2hCO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSixlQUdJO0FBQUEsb0JBQUlnQixRQUFRLENBQUNmO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFISixlQUlJLHFFQUFDLDBEQUFEO0FBQ0ksY0FBSSxFQUFDLFFBRFQ7QUFFSSxtQkFBUyxFQUFDLHdCQUZkO0FBR0ksZUFBSyxFQUFDLHFFQUhWO0FBSUksaUJBQU8sRUFBRTtBQUFBLG1CQUFNVyxVQUFVLENBQUNJLFFBQVEsQ0FBQ2IsRUFBVixDQUFoQjtBQUFBO0FBSmI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKSjtBQUFBLFNBQVdhLFFBQVEsQ0FBQ2IsRUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURPO0FBQUEsS0FBVixDQUZMLGVBY0k7QUFBUSxhQUFPLEVBQUU7QUFBQSxlQUFNYyxPQUFPLENBQUNDLEdBQVIsQ0FBWWQsS0FBWixFQUFtQk4sS0FBbkIsQ0FBTjtBQUFBLE9BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBZEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFrQkgsQ0FsREQ7O0dBQU1ELEs7O0tBQUFBLEs7QUFvRFNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGUuNWMxNWFiZTNjMzU1NDEwYjMwNzMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBZGRQb3N0Rm9ybSBmcm9tIFwiLi9BZGRQb3N0Rm9ybVwiO1xyXG5pbXBvcnQgeyBEZWxldGVCdXR0b24sIEl0ZW0sIEl0ZW1JbWFnZSwgUG9zdFdyYXBwZXIgfSBmcm9tIFwiLi9Qb3N0cy5zdHlsZXNcIjtcclxuXHJcbmNvbnN0IFBvc3RzID0gKCkgPT4ge1xyXG5cclxuICAgIGxldCBtYXhJRCA9IDBcclxuICAgIFxyXG4gICAgY29uc3QgW3Bvc3RzLCBzZXRQb3N0XSA9IHVzZVN0YXRlKFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEF1dGhvcjogJ9CS0LvQsNC00LjRgdC70LDQsiDQodCw0LzRgdC+0L3QvtCyJyxcclxuICAgICAgICAgICAgTWVzc2FnZTogJ9Cf0YDQuNCy0LXRgiwg0Y8g0L3QvtCy0LXQvdGM0LrQuNC5IScsXHJcbiAgICAgICAgICAgIEF2YXRhcjogJ2h0dHBzOi8vZDJ6aWEydzVhdXRubGcuY2xvdWRmcm9udC5uZXQvNDYyMzUvNWVjMzNlZTc3MzEzYS1sYXJnZScsXHJcbiAgICAgICAgICAgIGlkOiBtYXhJRFxyXG4gICAgICAgIH1cclxuICAgIF0pXHJcblxyXG4gICAgY29uc3QgY3JlYXRlUG9zdCA9IChsYWJlbCkgPT4ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIEF1dGhvcjogJ0V4YW1wbGUnLFxyXG4gICAgICAgICAgICBNZXNzYWdlOiBsYWJlbCxcclxuICAgICAgICAgICAgQXZhdGFyOiAnaHR0cHM6Ly9kMnppYTJ3NWF1dG5sZy5jbG91ZGZyb250Lm5ldC80NjIzNS81ZWMzM2VlNzczMTNhLWxhcmdlJyxcclxuICAgICAgICAgICAgaWQ6IG1heElEKytcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYWRkUG9zdCA9ICh0ZXh0OiBzdHJpbmcpID0+IHtcclxuICAgICAgICBjb25zdCBuZXdQb3N0ID0gY3JlYXRlUG9zdCh0ZXh0KVxyXG4gICAgICAgIGNvbnN0IG5ld0FycmF5ID0gWy4uLnBvc3RzLCBuZXdQb3N0XVxyXG4gICAgICAgIHNldFBvc3QobmV3QXJyYXkpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGVsZXRlUG9zdCA9IChpZDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgc2V0UG9zdChwb3N0cy5maWx0ZXIoKHBvc3QpID0+IHBvc3QuaWQgIT09IGlkKSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxQb3N0V3JhcHBlciA+XHJcbiAgICAgICAgICAgIDxBZGRQb3N0Rm9ybSBhZGRQb3N0PXthZGRQb3N0fS8+XHJcbiAgICAgICAgICAgIHtwb3N0cy5tYXAoKHVzZXJQb3N0KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8SXRlbSBrZXk9e3VzZXJQb3N0LmlkfT5cclxuICAgICAgICAgICAgICAgICAgICA8SXRlbUltYWdlIHNyYz17dXNlclBvc3QuQXZhdGFyfSBhbHQ9J9Ck0L7RgtC+0LPRgNCw0YTQuNGPINC/0YDQvtGE0LjQu9GPJy8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg1Pnt1c2VyUG9zdC5BdXRob3J9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICA8cD57dXNlclBvc3QuTWVzc2FnZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPERlbGV0ZUJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0nYnV0dG9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCLQo9C00LDQu9C40YLRjCDQv9C+0YHRglwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRlbGV0ZVBvc3QodXNlclBvc3QuaWQpfS8+XHJcbiAgICAgICAgICAgICAgICA8L0l0ZW0+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGNvbnNvbGUubG9nKHBvc3RzLCBtYXhJRCl9PtCf0YDQvtCy0LXRgNC60LA8L2J1dHRvbj5cclxuICAgICAgICA8L1Bvc3RXcmFwcGVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0cyJdLCJzb3VyY2VSb290IjoiIn0=