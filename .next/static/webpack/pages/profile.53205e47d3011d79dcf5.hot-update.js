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
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
          children: userPost.Message
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_Posts_styles__WEBPACK_IMPORTED_MODULE_3__["DeleteButton"], {
          type: "button",
          className: "btn btn-outline-danger",
          title: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043F\u043E\u0441\u0442",
          onClick: function onClick() {
            return deletePost(userPost.id);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZmlsZS9Qb3N0cy9Qb3N0cy50c3giXSwibmFtZXMiOlsiUG9zdHMiLCJtYXhJRCIsImNyZWF0ZVBvc3QiLCJsYWJlbCIsIkF1dGhvciIsIk1lc3NhZ2UiLCJBdmF0YXIiLCJpZCIsInVzZVN0YXRlIiwicG9zdHMiLCJzZXRQb3N0IiwiYWRkUG9zdCIsInRleHQiLCJuZXdQb3N0IiwibmV3QXJyYXkiLCJkZWxldGVQb3N0IiwiZmlsdGVyIiwicG9zdCIsIm1hcCIsInVzZXJQb3N0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFFaEIsTUFBSUMsS0FBSyxHQUFHLENBQVo7O0FBRUEsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsS0FBRCxFQUFvQjtBQUNuQyxXQUFPO0FBQ0hDLFlBQU0sRUFBRSxvQkFETDtBQUVIQyxhQUFPLEVBQUVGLEtBRk47QUFHSEcsWUFBTSxFQUFFLGlFQUhMO0FBSUhDLFFBQUUsRUFBRU4sS0FBSztBQUpOLEtBQVA7QUFNSCxHQVBEOztBQUpnQixrQkFhU08sc0RBQVEsQ0FBQyxDQUM5Qk4sVUFBVSxDQUFDLFlBQUQsQ0FEb0IsRUFFOUJBLFVBQVUsQ0FBQyxZQUFELENBRm9CLEVBRzlCQSxVQUFVLENBQUMsWUFBRCxDQUhvQixDQUFELENBYmpCO0FBQUEsTUFhVE8sS0FiUztBQUFBLE1BYUZDLE9BYkU7O0FBbUJoQixNQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxJQUFELEVBQWtCO0FBQzlCLFFBQU1DLE9BQU8sR0FBR1gsVUFBVSxDQUFDVSxJQUFELENBQTFCO0FBQ0EsUUFBTUUsUUFBUSwwR0FBT0wsS0FBUCxJQUFjSSxPQUFkLEVBQWQ7QUFDQUgsV0FBTyxDQUFDSSxRQUFELENBQVA7QUFDSCxHQUpEOztBQU1BLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNSLEVBQUQsRUFBZ0I7QUFDL0JHLFdBQU8sQ0FBQ0QsS0FBSyxDQUFDTyxNQUFOLENBQWEsVUFBQ0MsSUFBRDtBQUFBLGFBQVVBLElBQUksQ0FBQ1YsRUFBTCxLQUFZQSxFQUF0QjtBQUFBLEtBQWIsQ0FBRCxDQUFQO0FBQ0gsR0FGRDs7QUFJQSxzQkFDSSxxRUFBQyx5REFBRDtBQUFBLGNBQ0tFLEtBQUssQ0FBQ1MsR0FBTixDQUFVLFVBQUNDLFFBQUQ7QUFBQSwwQkFDUCxxRUFBQyxrREFBRDtBQUFBLGdDQUNJLHFFQUFDLHVEQUFEO0FBQVcsYUFBRyxFQUFFQSxRQUFRLENBQUNiLE1BQXpCO0FBQWlDLGFBQUcsRUFBQztBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBRUk7QUFBQSxvQkFBS2EsUUFBUSxDQUFDZjtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkosZUFHSTtBQUFBLG9CQUFJZSxRQUFRLENBQUNkO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFISixlQUlJLHFFQUFDLDBEQUFEO0FBQ0ksY0FBSSxFQUFDLFFBRFQ7QUFFSSxtQkFBUyxFQUFDLHdCQUZkO0FBR0ksZUFBSyxFQUFDLHFFQUhWO0FBSUksaUJBQU8sRUFBRTtBQUFBLG1CQUFNVSxVQUFVLENBQUNJLFFBQVEsQ0FBQ1osRUFBVixDQUFoQjtBQUFBO0FBSmI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKSjtBQUFBLFNBQVdZLFFBQVEsQ0FBQ1osRUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURPO0FBQUEsS0FBVjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQWdCSCxDQTdDRDs7R0FBTVAsSzs7S0FBQUEsSztBQStDU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZS41MzIwNWU0N2QzMDExZDc5ZGNmNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRGVsZXRlQnV0dG9uLCBJdGVtLCBJdGVtSW1hZ2UsIFBvc3RXcmFwcGVyIH0gZnJvbSBcIi4vUG9zdHMuc3R5bGVzXCI7XHJcblxyXG5jb25zdCBQb3N0cyA9ICgpID0+IHtcclxuXHJcbiAgICBsZXQgbWF4SUQgPSAwXHJcbiAgICBcclxuICAgIGNvbnN0IGNyZWF0ZVBvc3QgPSAobGFiZWwgOiBzdHJpbmcpID0+IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBBdXRob3I6ICfQktC70LDQtNC40YHQu9Cw0LIg0KHQsNC80YHQvtC90L7QsicsXHJcbiAgICAgICAgICAgIE1lc3NhZ2U6IGxhYmVsLFxyXG4gICAgICAgICAgICBBdmF0YXI6ICdodHRwczovL2QyemlhMnc1YXV0bmxnLmNsb3VkZnJvbnQubmV0LzQ2MjM1LzVlYzMzZWU3NzMxM2EtbGFyZ2UnLFxyXG4gICAgICAgICAgICBpZDogbWF4SUQrK1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBbcG9zdHMsIHNldFBvc3RdID0gdXNlU3RhdGUoW1xyXG4gICAgICAgIGNyZWF0ZVBvc3QoJ9Cf0YDQvtCy0LXRgNC60LAgMScpLFxyXG4gICAgICAgIGNyZWF0ZVBvc3QoJ9Cf0YDQvtCy0LXRgNC60LAgMicpLFxyXG4gICAgICAgIGNyZWF0ZVBvc3QoJ9Cf0YDQvtCy0LXRgNC60LAgMycpXHJcbiAgICBdKVxyXG5cclxuICAgIGNvbnN0IGFkZFBvc3QgPSAodGV4dDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmV3UG9zdCA9IGNyZWF0ZVBvc3QodGV4dClcclxuICAgICAgICBjb25zdCBuZXdBcnJheSA9IFsuLi5wb3N0cywgbmV3UG9zdF1cclxuICAgICAgICBzZXRQb3N0KG5ld0FycmF5KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRlbGV0ZVBvc3QgPSAoaWQ6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIHNldFBvc3QocG9zdHMuZmlsdGVyKChwb3N0KSA9PiBwb3N0LmlkICE9PSBpZCkpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UG9zdFdyYXBwZXIgPlxyXG4gICAgICAgICAgICB7cG9zdHMubWFwKCh1c2VyUG9zdCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPEl0ZW0ga2V5PXt1c2VyUG9zdC5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEl0ZW1JbWFnZSBzcmM9e3VzZXJQb3N0LkF2YXRhcn0gYWx0PSfQpNC+0YLQvtCz0YDQsNGE0LjRjyDQv9GA0L7RhNC40LvRjycvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNT57dXNlclBvc3QuQXV0aG9yfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+e3VzZXJQb3N0Lk1lc3NhZ2V9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEZWxldGVCdXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J2J1dHRvbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLWRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwi0KPQtNCw0LvQuNGC0Ywg0L/QvtGB0YJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkZWxldGVQb3N0KHVzZXJQb3N0LmlkKX0vPlxyXG4gICAgICAgICAgICAgICAgPC9JdGVtPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L1Bvc3RXcmFwcGVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0cyJdLCJzb3VyY2VSb290IjoiIn0=