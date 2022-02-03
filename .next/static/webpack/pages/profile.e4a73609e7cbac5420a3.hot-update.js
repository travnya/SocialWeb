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
    maxID++;
    console.log(maxID);
    return {
      Author: 'Example',
      Message: label,
      Avatar: 'https://d2zia2w5autnlg.cloudfront.net/46235/5ec33ee77313a-large',
      id: maxID++
    };
  };

  var init = createPost('example');

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([init]),
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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_Posts_styles__WEBPACK_IMPORTED_MODULE_4__["PostWrapper"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_AddPostForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
      addPost: addPost
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
          lineNumber: 39,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h5", {
          children: userPost.Author
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
          children: userPost.Message
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
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
          lineNumber: 42,
          columnNumber: 21
        }, _this)]
      }, userPost.id, true, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }, _this);
    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
      onClick: function onClick() {
        return console.log(posts, maxID);
      },
      children: "\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 9
  }, _this);
};

_s(Posts, "+ytJLYysXtuO+OvjMnKC1IStZcc=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZmlsZS9Qb3N0cy9Qb3N0cy50c3giXSwibmFtZXMiOlsiUG9zdHMiLCJtYXhJRCIsImNyZWF0ZVBvc3QiLCJsYWJlbCIsImNvbnNvbGUiLCJsb2ciLCJBdXRob3IiLCJNZXNzYWdlIiwiQXZhdGFyIiwiaWQiLCJpbml0IiwidXNlU3RhdGUiLCJwb3N0cyIsInNldFBvc3QiLCJhZGRQb3N0IiwidGV4dCIsIm5ld1Bvc3QiLCJuZXdBcnJheSIsImRlbGV0ZVBvc3QiLCJmaWx0ZXIiLCJwb3N0IiwibWFwIiwidXNlclBvc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUVoQixNQUFJQyxLQUFLLEdBQUcsQ0FBWjs7QUFFQSxNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxLQUFELEVBQW1CO0FBQ2xDRixTQUFLO0FBQ0xHLFdBQU8sQ0FBQ0MsR0FBUixDQUFZSixLQUFaO0FBQ0EsV0FBTztBQUNISyxZQUFNLEVBQUUsU0FETDtBQUVIQyxhQUFPLEVBQUVKLEtBRk47QUFHSEssWUFBTSxFQUFFLGlFQUhMO0FBSUhDLFFBQUUsRUFBRVIsS0FBSztBQUpOLEtBQVA7QUFNSCxHQVREOztBQVVBLE1BQU1TLElBQUksR0FBR1IsVUFBVSxDQUFDLFNBQUQsQ0FBdkI7O0FBZGdCLGtCQWVTUyxzREFBUSxDQUFDLENBQzlCRCxJQUQ4QixDQUFELENBZmpCO0FBQUEsTUFlVEUsS0FmUztBQUFBLE1BZUZDLE9BZkU7O0FBbUJoQixNQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxJQUFELEVBQWtCO0FBQzlCLFFBQU1DLE9BQU8sR0FBR2QsVUFBVSxDQUFDYSxJQUFELENBQTFCO0FBQ0EsUUFBTUUsUUFBUSwwR0FBT0wsS0FBUCxJQUFjSSxPQUFkLEVBQWQ7QUFDQUgsV0FBTyxDQUFDSSxRQUFELENBQVA7QUFDSCxHQUpEOztBQU1BLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNULEVBQUQsRUFBZ0I7QUFDL0JJLFdBQU8sQ0FBQ0QsS0FBSyxDQUFDTyxNQUFOLENBQWEsVUFBQ0MsSUFBRDtBQUFBLGFBQVVBLElBQUksQ0FBQ1gsRUFBTCxLQUFZQSxFQUF0QjtBQUFBLEtBQWIsQ0FBRCxDQUFQO0FBQ0gsR0FGRDs7QUFJQSxzQkFDSSxxRUFBQyx5REFBRDtBQUFBLDRCQUNJLHFFQUFDLG9EQUFEO0FBQWEsYUFBTyxFQUFFSztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosRUFFS0YsS0FBSyxDQUFDUyxHQUFOLENBQVUsVUFBQ0MsUUFBRDtBQUFBLDBCQUNQLHFFQUFDLGtEQUFEO0FBQUEsZ0NBQ0kscUVBQUMsdURBQUQ7QUFBVyxhQUFHLEVBQUVBLFFBQVEsQ0FBQ2QsTUFBekI7QUFBaUMsYUFBRyxFQUFDO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFFSTtBQUFBLG9CQUFLYyxRQUFRLENBQUNoQjtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkosZUFHSTtBQUFBLG9CQUFJZ0IsUUFBUSxDQUFDZjtBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEosZUFJSSxxRUFBQywwREFBRDtBQUNJLGNBQUksRUFBQyxRQURUO0FBRUksbUJBQVMsRUFBQyx3QkFGZDtBQUdJLGVBQUssRUFBQyxxRUFIVjtBQUlJLGlCQUFPLEVBQUU7QUFBQSxtQkFBTVcsVUFBVSxDQUFDSSxRQUFRLENBQUNiLEVBQVYsQ0FBaEI7QUFBQTtBQUpiO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSko7QUFBQSxTQUFXYSxRQUFRLENBQUNiLEVBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFETztBQUFBLEtBQVYsQ0FGTCxlQWNJO0FBQVEsYUFBTyxFQUFFO0FBQUEsZUFBTUwsT0FBTyxDQUFDQyxHQUFSLENBQVlPLEtBQVosRUFBbUJYLEtBQW5CLENBQU47QUFBQSxPQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBa0JILENBL0NEOztHQUFNRCxLOztLQUFBQSxLO0FBaURTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlLmU0YTczNjA5ZTdjYmFjNTQyMGEzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQWRkUG9zdEZvcm0gZnJvbSBcIi4vQWRkUG9zdEZvcm1cIjtcclxuaW1wb3J0IHsgRGVsZXRlQnV0dG9uLCBJdGVtLCBJdGVtSW1hZ2UsIFBvc3RXcmFwcGVyIH0gZnJvbSBcIi4vUG9zdHMuc3R5bGVzXCI7XHJcblxyXG5jb25zdCBQb3N0cyA9ICgpID0+IHtcclxuXHJcbiAgICBsZXQgbWF4SUQgPSAwXHJcbiAgICBcclxuICAgIGNvbnN0IGNyZWF0ZVBvc3QgPSAobGFiZWw6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIG1heElEKys7XHJcbiAgICAgICAgY29uc29sZS5sb2cobWF4SUQpXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgQXV0aG9yOiAnRXhhbXBsZScsXHJcbiAgICAgICAgICAgIE1lc3NhZ2U6IGxhYmVsLFxyXG4gICAgICAgICAgICBBdmF0YXI6ICdodHRwczovL2QyemlhMnc1YXV0bmxnLmNsb3VkZnJvbnQubmV0LzQ2MjM1LzVlYzMzZWU3NzMxM2EtbGFyZ2UnLFxyXG4gICAgICAgICAgICBpZDogbWF4SUQrK1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IGluaXQgPSBjcmVhdGVQb3N0KCdleGFtcGxlJylcclxuICAgIGNvbnN0IFtwb3N0cywgc2V0UG9zdF0gPSB1c2VTdGF0ZShbXHJcbiAgICAgICAgaW5pdFxyXG4gICAgXSlcclxuXHJcbiAgICBjb25zdCBhZGRQb3N0ID0gKHRleHQ6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5ld1Bvc3QgPSBjcmVhdGVQb3N0KHRleHQpXHJcbiAgICAgICAgY29uc3QgbmV3QXJyYXkgPSBbLi4ucG9zdHMsIG5ld1Bvc3RdXHJcbiAgICAgICAgc2V0UG9zdChuZXdBcnJheSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkZWxldGVQb3N0ID0gKGlkOiBudW1iZXIpID0+IHtcclxuICAgICAgICBzZXRQb3N0KHBvc3RzLmZpbHRlcigocG9zdCkgPT4gcG9zdC5pZCAhPT0gaWQpKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFBvc3RXcmFwcGVyID5cclxuICAgICAgICAgICAgPEFkZFBvc3RGb3JtIGFkZFBvc3Q9e2FkZFBvc3R9Lz5cclxuICAgICAgICAgICAge3Bvc3RzLm1hcCgodXNlclBvc3QpID0+IChcclxuICAgICAgICAgICAgICAgIDxJdGVtIGtleT17dXNlclBvc3QuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJdGVtSW1hZ2Ugc3JjPXt1c2VyUG9zdC5BdmF0YXJ9IGFsdD0n0KTQvtGC0L7Qs9GA0LDRhNC40Y8g0L/RgNC+0YTQuNC70Y8nLz5cclxuICAgICAgICAgICAgICAgICAgICA8aDU+e3VzZXJQb3N0LkF1dGhvcn08L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPnt1c2VyUG9zdC5NZXNzYWdlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8RGVsZXRlQnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdidXR0b24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cItCj0LTQsNC70LjRgtGMINC/0L7RgdGCXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZGVsZXRlUG9zdCh1c2VyUG9zdC5pZCl9Lz5cclxuICAgICAgICAgICAgICAgIDwvSXRlbT5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gY29uc29sZS5sb2cocG9zdHMsIG1heElEKX0+0J/RgNC+0LLQtdGA0LrQsDwvYnV0dG9uPlxyXG4gICAgICAgIDwvUG9zdFdyYXBwZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RzIl0sInNvdXJjZVJvb3QiOiIifQ==