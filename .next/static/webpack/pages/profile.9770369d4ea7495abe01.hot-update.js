webpackHotUpdate_N_E("pages/profile",{

/***/ "./src/components/Profile/Posts/AddPostForm.tsx":
/*!******************************************************!*\
  !*** ./src/components/Profile/Posts/AddPostForm.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\Users\\vsamsonov\\Desktop\\SocialWeb\\src\\components\\Profile\\Posts\\AddPostForm.tsx",
    _this = undefined,
    _s = $RefreshSig$();



var AddPostForm = function AddPostForm(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      label = _useState[0],
      setLabel = _useState[1];

  var onLabelChange = function onLabelChange(event) {
    setLabel(event.target.value);
  };

  var onSubmit = function onSubmit(event) {
    event.preventDefault();
    props.addPost(label);
    setLabel('');
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
    className: "d-flex",
    onSubmit: onSubmit
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 9
  }, _this);
};

_s(AddPostForm, "aN9moGwwwdIpBS7DjkSrdwGFAWI=");

_c = AddPostForm;
/* harmony default export */ __webpack_exports__["default"] = (AddPostForm);

var _c;

$RefreshReg$(_c, "AddPostForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZmlsZS9Qb3N0cy9BZGRQb3N0Rm9ybS50c3giXSwibmFtZXMiOlsiQWRkUG9zdEZvcm0iLCJwcm9wcyIsInVzZVN0YXRlIiwibGFiZWwiLCJzZXRMYWJlbCIsIm9uTGFiZWxDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwib25TdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImFkZFBvc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLEtBQUQsRUFBZ0I7QUFBQTs7QUFBQSxrQkFDTkMsc0RBQVEsQ0FBQyxFQUFELENBREY7QUFBQSxNQUN6QkMsS0FEeUI7QUFBQSxNQUNsQkMsUUFEa0I7O0FBR2hDLE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsS0FBRCxFQUFnQjtBQUNsQ0YsWUFBUSxDQUFDRSxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsS0FBZCxDQUFSO0FBQ0gsR0FGRDs7QUFJQSxNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDSCxLQUFELEVBQWdCO0FBQzdCQSxTQUFLLENBQUNJLGNBQU47QUFDQVQsU0FBSyxDQUFDVSxPQUFOLENBQWNSLEtBQWQ7QUFDQUMsWUFBUSxDQUFDLEVBQUQsQ0FBUjtBQUNILEdBSkQ7O0FBTUEsc0JBQ0k7QUFDSSxhQUFTLEVBQUMsUUFEZDtBQUVJLFlBQVEsRUFBRUs7QUFGZDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFPSCxDQXBCRDs7R0FBTVQsVzs7S0FBQUEsVztBQXNCU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZS45NzcwMzY5ZDRlYTc0OTVhYmUwMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IEFkZFBvc3RGb3JtID0gKHByb3BzOiBhbnkpID0+IHtcclxuICAgIGNvbnN0IFtsYWJlbCwgc2V0TGFiZWxdID0gdXNlU3RhdGUoJycpXHJcblxyXG4gICAgY29uc3Qgb25MYWJlbENoYW5nZSA9IChldmVudDogYW55KSA9PiB7XHJcbiAgICAgICAgc2V0TGFiZWwoZXZlbnQudGFyZ2V0LnZhbHVlKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9uU3VibWl0ID0gKGV2ZW50OiBhbnkpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgcHJvcHMuYWRkUG9zdChsYWJlbClcclxuICAgICAgICBzZXRMYWJlbCgnJylcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGZvcm0gXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtZmxleFwiXHJcbiAgICAgICAgICAgIG9uU3VibWl0PXtvblN1Ym1pdH0+XHJcblxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRkUG9zdEZvcm0iXSwic291cmNlUm9vdCI6IiJ9