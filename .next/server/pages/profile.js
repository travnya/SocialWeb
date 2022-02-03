module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/profile/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/Profile/Content/Content.styles.ts":
/*!**********************************************************!*\
  !*** ./src/components/Profile/Content/Content.styles.ts ***!
  \**********************************************************/
/*! exports provided: ContentWrapper, ProfileImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentWrapper", function() { return ContentWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileImage", function() { return ProfileImage; });
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled */ "@emotion/styled");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_0__);

const ContentWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default.a.div`
    grid-row: 1;
    grid-column: 3;
    p {
        text-align: center;
        margin: .5em 0 0 0;
    };
`;
const ProfileImage = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default.a.img`
    width: 10em;
    height: 12em;
    border-radius: 2em;
    background-size: cover;
    background-position: center center;
    box-shadow: 2px 2px 10px rgb(49, 49, 49);
    object-fit: cover;
`;

/***/ }),

/***/ "./src/components/Profile/Content/Content.tsx":
/*!****************************************************!*\
  !*** ./src/components/Profile/Content/Content.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Content_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Content.styles */ "./src/components/Profile/Content/Content.styles.ts");

var _jsxFileName = "C:\\Users\\vsamsonov\\Desktop\\SocialWeb\\src\\components\\Profile\\Content\\Content.tsx";


const Content = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Content_styles__WEBPACK_IMPORTED_MODULE_1__["ContentWrapper"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Content_styles__WEBPACK_IMPORTED_MODULE_1__["ProfileImage"], {
      src: "https://sun9-28.userapi.com/impg/1y_m2YWC85fh4zdlyq60cpztFfpcFPogzfdKnw/DIxREY8BCMM.jpg?size=810x1080&quality=96&sign=a7193cb8b0f274a7e9ad2ba08085db8c&type=album",
      alt: "\u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u044F \u043F\u0440\u043E\u0444\u0438\u043B\u044F"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
        children: "\u0418\u043C\u044F:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 16
      }, undefined), " \u0412\u043B\u0430\u0434\u0438\u0441\u043B\u0430\u0432 \u0421\u0430\u043C\u0441\u043E\u043D\u043E\u0432"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
        children: "\u041F\u043E\u043B:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 16
      }, undefined), " \u041C\u0443\u0436\u0441\u043A\u043E\u0439"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
        children: "\u0412\u043E\u0437\u0440\u0430\u0441\u0442:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 16
      }, undefined), " 19 \u043B\u0435\u0442"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Content);

/***/ }),

/***/ "./src/components/Profile/FriendsShort/FriendsShort.styles.ts":
/*!********************************************************************!*\
  !*** ./src/components/Profile/FriendsShort/FriendsShort.styles.ts ***!
  \********************************************************************/
/*! exports provided: FriendsWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendsWrapper", function() { return FriendsWrapper; });
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled */ "@emotion/styled");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_0__);

const FriendsWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default.a.div`
    grid-row: 1;
    grid-column: 1;
    border-radius: .5em;
    box-shadow: 0 0 .35em azure;
    width: 30em;
    h1 {
        font-size: 2em;
        text-align: center;
        margin-top: 1em;
    }
`;

/***/ }),

/***/ "./src/components/Profile/FriendsShort/FriendsShort.tsx":
/*!**************************************************************!*\
  !*** ./src/components/Profile/FriendsShort/FriendsShort.tsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FriendsShort_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FriendsShort.styles */ "./src/components/Profile/FriendsShort/FriendsShort.styles.ts");

var _jsxFileName = "C:\\Users\\vsamsonov\\Desktop\\SocialWeb\\src\\components\\Profile\\FriendsShort\\FriendsShort.tsx";


const FriendsShort = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FriendsShort_styles__WEBPACK_IMPORTED_MODULE_1__["FriendsWrapper"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: "\u0423 \u0432\u0430\u0441 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442 \u0434\u0440\u0443\u0437\u0435\u0439"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (FriendsShort);

/***/ }),

/***/ "./src/components/Profile/Posts/AddPostForm.tsx":
/*!******************************************************!*\
  !*** ./src/components/Profile/Posts/AddPostForm.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Posts_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Posts.styles */ "./src/components/Profile/Posts/Posts.styles.ts");

var _jsxFileName = "C:\\Users\\vsamsonov\\Desktop\\SocialWeb\\src\\components\\Profile\\Posts\\AddPostForm.tsx";



const AddPostForm = props => {
  const {
    0: label,
    1: setLabel
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');

  const onLabelChange = event => {
    setLabel(event.target.value);
  };

  const onSubmit = event => {
    event.preventDefault();
    props.addPost(label);
    setLabel('');
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
    className: "d-flex",
    onSubmit: onSubmit,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Posts_styles__WEBPACK_IMPORTED_MODULE_2__["PostInput"], {
      className: "form-control me-sm-2",
      onChange: onLabelChange,
      type: "text",
      placeholder: "\u041A\u0430\u043A \u0432\u0430\u0448\u0438 \u0434\u0435\u043B\u0430?",
      value: label
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: "btn btn-secondary my-2 my-sm-0",
      type: "submit",
      onClick: onSubmit,
      children: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (AddPostForm);

/***/ }),

/***/ "./src/components/Profile/Posts/Posts.styles.ts":
/*!******************************************************!*\
  !*** ./src/components/Profile/Posts/Posts.styles.ts ***!
  \******************************************************/
/*! exports provided: PostWrapper, Item, ItemImage, PostInput, DeleteButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostWrapper", function() { return PostWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemImage", function() { return ItemImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostInput", function() { return PostInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteButton", function() { return DeleteButton; });
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled */ "@emotion/styled");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_0__);

const PostWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default.a.div`
    width: 23em;
    grid-row: 2;
    grid-column: 1;
    h5 {
        grid-row: 1;
        grid-column: 2;
        margin-top: .45em;
        color: #ffe1dd;
    }
`;
const Item = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default.a.div`
    margin: .5em auto 0 auto;
    box-shadow: 0 0 3px whitesmoke;
    border-radius: 3px;
    display: grid;
    justify-content: center;
    grid-template-columns: 3em 1fr 1em;
    grid-template-rows: 3em 1fr;
    grid-gap: .5em;
    padding: .5em .5em 0 .5em;
    width: 20em;
    p {
        grid-row: 2;
        grid-column: 1/3;
    }
`;
const ItemImage = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default.a.img`
    grid-row: 1;
    grid-column: 1;
    width: 3em;
    height: 3em;
    border-radius: 50%;
`;
const PostInput = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default.a.input`
    width: 20em;
`;
const DeleteButton = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default.a.button`
    grid-row: 1;
    grid-column: 3;
    position: relative;
    width: 100%;
    right: .4em;
    height: 1.6em;
    bottom: .2em;
`;

/***/ }),

/***/ "./src/components/Profile/Posts/Posts.tsx":
/*!************************************************!*\
  !*** ./src/components/Profile/Posts/Posts.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AddPostForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddPostForm */ "./src/components/Profile/Posts/AddPostForm.tsx");
/* harmony import */ var _Posts_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Posts.styles */ "./src/components/Profile/Posts/Posts.styles.ts");

var _jsxFileName = "C:\\Users\\vsamsonov\\Desktop\\SocialWeb\\src\\components\\Profile\\Posts\\Posts.tsx";




const Posts = () => {
  const {
    0: id,
    1: setId
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);

  const createPost = (label, id) => {
    return {
      Author: 'Владислав Самсонов',
      Message: label,
      Avatar: 'https://d2zia2w5autnlg.cloudfront.net/46235/5ec33ee77313a-large',
      id: id
    };
  };

  const {
    0: posts,
    1: setPost
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([createPost('Я тут новенький)', 0)]);

  const addPost = text => {
    if (text !== '') {
      const newPost = createPost(text, id + 1);
      const newArray = [...posts, newPost];
      setId(id + 1);
      setPost(newArray);
    }
  };

  const deletePost = id => {
    setPost(posts.filter(post => post.id !== id));
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Posts_styles__WEBPACK_IMPORTED_MODULE_3__["PostWrapper"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_AddPostForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
      addPost: addPost
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }, undefined), posts.map(userPost => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Posts_styles__WEBPACK_IMPORTED_MODULE_3__["Item"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Posts_styles__WEBPACK_IMPORTED_MODULE_3__["ItemImage"], {
        src: userPost.Avatar,
        alt: "\u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u044F \u043F\u0440\u043E\u0444\u0438\u043B\u044F"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 21
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
        children: userPost.Author
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 21
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: userPost.Message
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 21
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Posts_styles__WEBPACK_IMPORTED_MODULE_3__["DeleteButton"], {
        type: "button",
        className: "btn btn-outline-danger",
        title: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043F\u043E\u0441\u0442",
        onClick: () => deletePost(userPost.id)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 21
      }, undefined)]
    }, userPost.id, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }, undefined))]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Posts);

/***/ }),

/***/ "./src/components/Profile/Profile.styles.ts":
/*!**************************************************!*\
  !*** ./src/components/Profile/Profile.styles.ts ***!
  \**************************************************/
/*! exports provided: ProfileInformation, PostWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileInformation", function() { return ProfileInformation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostWrapper", function() { return PostWrapper; });
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled */ "@emotion/styled");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_0__);

const ProfileInformation = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default.a.div`
    display: inline-flex;
    width: 100%;
    justify-content: space-between;
`;
const PostWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default.a.div`
    display: flex;
    flex-direction: column;
    width: 28em;
    margin-top: 2em;
    align-items: center;
`;

/***/ }),

/***/ "./src/components/Profile/Profile.tsx":
/*!********************************************!*\
  !*** ./src/components/Profile/Profile.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Content_Content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Content/Content */ "./src/components/Profile/Content/Content.tsx");
/* harmony import */ var _FriendsShort_FriendsShort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FriendsShort/FriendsShort */ "./src/components/Profile/FriendsShort/FriendsShort.tsx");
/* harmony import */ var _Posts_Posts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Posts/Posts */ "./src/components/Profile/Posts/Posts.tsx");
/* harmony import */ var _Profile_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Profile.styles */ "./src/components/Profile/Profile.styles.ts");

var _jsxFileName = "C:\\Users\\vsamsonov\\Desktop\\SocialWeb\\src\\components\\Profile\\Profile.tsx";





const Profile = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Profile_styles__WEBPACK_IMPORTED_MODULE_4__["ProfileInformation"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Content_Content__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FriendsShort_FriendsShort__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Profile_styles__WEBPACK_IMPORTED_MODULE_4__["PostWrapper"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Posts_Posts__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Profile);

/***/ }),

/***/ "./src/pages/profile/index.tsx":
/*!*************************************!*\
  !*** ./src/pages/profile/index.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Profile_Profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Profile/Profile */ "./src/components/Profile/Profile.tsx");

var _jsxFileName = "C:\\Users\\vsamsonov\\Desktop\\SocialWeb\\src\\pages\\profile\\index.tsx";


const profile = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Profile_Profile__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (profile);

/***/ }),

/***/ "@emotion/styled":
/*!**********************************!*\
  !*** external "@emotion/styled" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@emotion/styled");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUHJvZmlsZS9Db250ZW50L0NvbnRlbnQuc3R5bGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Byb2ZpbGUvQ29udGVudC9Db250ZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9maWxlL0ZyaWVuZHNTaG9ydC9GcmllbmRzU2hvcnQuc3R5bGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Byb2ZpbGUvRnJpZW5kc1Nob3J0L0ZyaWVuZHNTaG9ydC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUHJvZmlsZS9Qb3N0cy9BZGRQb3N0Rm9ybS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUHJvZmlsZS9Qb3N0cy9Qb3N0cy5zdHlsZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUHJvZmlsZS9Qb3N0cy9Qb3N0cy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUHJvZmlsZS9Qcm9maWxlLnN0eWxlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9maWxlL1Byb2ZpbGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9wcm9maWxlL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZW1vdGlvbi9zdHlsZWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkNvbnRlbnRXcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwiUHJvZmlsZUltYWdlIiwiaW1nIiwiQ29udGVudCIsIkZyaWVuZHNXcmFwcGVyIiwiRnJpZW5kc1Nob3J0IiwiQWRkUG9zdEZvcm0iLCJwcm9wcyIsImxhYmVsIiwic2V0TGFiZWwiLCJ1c2VTdGF0ZSIsIm9uTGFiZWxDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwib25TdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImFkZFBvc3QiLCJQb3N0V3JhcHBlciIsIkl0ZW0iLCJJdGVtSW1hZ2UiLCJQb3N0SW5wdXQiLCJpbnB1dCIsIkRlbGV0ZUJ1dHRvbiIsImJ1dHRvbiIsIlBvc3RzIiwiaWQiLCJzZXRJZCIsImNyZWF0ZVBvc3QiLCJBdXRob3IiLCJNZXNzYWdlIiwiQXZhdGFyIiwicG9zdHMiLCJzZXRQb3N0IiwidGV4dCIsIm5ld1Bvc3QiLCJuZXdBcnJheSIsImRlbGV0ZVBvc3QiLCJmaWx0ZXIiLCJwb3N0IiwibWFwIiwidXNlclBvc3QiLCJQcm9maWxlSW5mb3JtYXRpb24iLCJQcm9maWxlIiwicHJvZmlsZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7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Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcGFnZXMvcHJvZmlsZS9pbmRleC50c3hcIik7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBDb250ZW50V3JhcHBlciA9IHN0eWxlZC5kaXYgYFxyXG4gICAgZ3JpZC1yb3c6IDE7XHJcbiAgICBncmlkLWNvbHVtbjogMztcclxuICAgIHAge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW46IC41ZW0gMCAwIDA7XHJcbiAgICB9O1xyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgUHJvZmlsZUltYWdlID0gc3R5bGVkLmltZ2BcclxuICAgIHdpZHRoOiAxMGVtO1xyXG4gICAgaGVpZ2h0OiAxMmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMmVtO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggcmdiKDQ5LCA0OSwgNDkpO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbmAiLCJpbXBvcnQgeyBDb250ZW50V3JhcHBlciwgUHJvZmlsZUltYWdlIH0gZnJvbSBcIi4vQ29udGVudC5zdHlsZXNcIlxyXG5cclxuY29uc3QgQ29udGVudCA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbnRlbnRXcmFwcGVyPlxyXG4gICAgICAgICAgICA8UHJvZmlsZUltYWdlIHNyYz1cImh0dHBzOi8vc3VuOS0yOC51c2VyYXBpLmNvbS9pbXBnLzF5X20yWVdDODVmaDR6ZGx5cTYwY3B6dEZmcGNGUG9nemZkS253L0RJeFJFWThCQ01NLmpwZz9zaXplPTgxMHgxMDgwJnF1YWxpdHk9OTYmc2lnbj1hNzE5M2NiOGIwZjI3NGE3ZTlhZDJiYTA4MDg1ZGI4YyZ0eXBlPWFsYnVtXCIgYWx0PSfQpNC+0YLQvtCz0YDQsNGE0LjRjyDQv9GA0L7RhNC40LvRjycvPlxyXG4gICAgICAgICAgICA8cD48Yj7QmNC80Y86PC9iPiDQktC70LDQtNC40YHQu9Cw0LIg0KHQsNC80YHQvtC90L7QsjwvcD5cclxuICAgICAgICAgICAgPHA+PGI+0J/QvtC7OjwvYj4g0JzRg9C20YHQutC+0Lk8L3A+XHJcbiAgICAgICAgICAgIDxwPjxiPtCS0L7Qt9GA0LDRgdGCOjwvYj4gMTkg0LvQtdGCPC9wPlxyXG4gICAgICAgIDwvQ29udGVudFdyYXBwZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRlbnQiLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIlxyXG5cclxuZXhwb3J0IGNvbnN0IEZyaWVuZHNXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICAgIGdyaWQtcm93OiAxO1xyXG4gICAgZ3JpZC1jb2x1bW46IDE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuNWVtO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIC4zNWVtIGF6dXJlO1xyXG4gICAgd2lkdGg6IDMwZW07XHJcbiAgICBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDFlbTtcclxuICAgIH1cclxuYFxyXG4iLCJpbXBvcnQgeyBGcmllbmRzV3JhcHBlciB9IGZyb20gXCIuL0ZyaWVuZHNTaG9ydC5zdHlsZXNcIlxyXG5cclxuY29uc3QgRnJpZW5kc1Nob3J0ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8RnJpZW5kc1dyYXBwZXI+XHJcbiAgICAgICAgICAgIDxoMT7QoyDQstCw0YEg0L/QvtC60LAg0L3QtdGCINC00YDRg9C30LXQuTwvaDE+XHJcbiAgICAgICAgPC9GcmllbmRzV3JhcHBlcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRnJpZW5kc1Nob3J0IiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgUG9zdElucHV0IH0gZnJvbSBcIi4vUG9zdHMuc3R5bGVzXCI7XHJcblxyXG5jb25zdCBBZGRQb3N0Rm9ybSA9IChwcm9wczogYW55KSA9PiB7XHJcbiAgICBjb25zdCBbbGFiZWwsIHNldExhYmVsXSA9IHVzZVN0YXRlKCcnKVxyXG5cclxuICAgIGNvbnN0IG9uTGFiZWxDaGFuZ2UgPSAoZXZlbnQ6IGFueSkgPT4ge1xyXG4gICAgICAgIHNldExhYmVsKGV2ZW50LnRhcmdldC52YWx1ZSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvblN1Ym1pdCA9IChldmVudDogYW55KSA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIHByb3BzLmFkZFBvc3QobGFiZWwpXHJcbiAgICAgICAgc2V0TGFiZWwoJycpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxmb3JtIFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJkLWZsZXhcIlxyXG4gICAgICAgICAgICBvblN1Ym1pdD17b25TdWJtaXR9PlxyXG4gICAgICAgICAgICA8UG9zdElucHV0IFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIG1lLXNtLTJcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uTGFiZWxDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQmtCw0Log0LLQsNGI0Lgg0LTQtdC70LA/XCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtsYWJlbH0vPlxyXG4gICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnkgbXktMiBteS1zbS0wXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17b25TdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAg0JTQvtCx0LDQstC40YLRjFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkZFBvc3RGb3JtIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCJcclxuXHJcbmV4cG9ydCBjb25zdCBQb3N0V3JhcHBlciA9IHN0eWxlZC5kaXYgYFxyXG4gICAgd2lkdGg6IDIzZW07XHJcbiAgICBncmlkLXJvdzogMjtcclxuICAgIGdyaWQtY29sdW1uOiAxO1xyXG4gICAgaDUge1xyXG4gICAgICAgIGdyaWQtcm93OiAxO1xyXG4gICAgICAgIGdyaWQtY29sdW1uOiAyO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC40NWVtO1xyXG4gICAgICAgIGNvbG9yOiAjZmZlMWRkO1xyXG4gICAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgSXRlbSA9IHN0eWxlZC5kaXZgXHJcbiAgICBtYXJnaW46IC41ZW0gYXV0byAwIGF1dG87XHJcbiAgICBib3gtc2hhZG93OiAwIDAgM3B4IHdoaXRlc21va2U7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNlbSAxZnIgMWVtO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzZW0gMWZyO1xyXG4gICAgZ3JpZC1nYXA6IC41ZW07XHJcbiAgICBwYWRkaW5nOiAuNWVtIC41ZW0gMCAuNWVtO1xyXG4gICAgd2lkdGg6IDIwZW07XHJcbiAgICBwIHtcclxuICAgICAgICBncmlkLXJvdzogMjtcclxuICAgICAgICBncmlkLWNvbHVtbjogMS8zO1xyXG4gICAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgSXRlbUltYWdlID0gc3R5bGVkLmltZyBgXHJcbiAgICBncmlkLXJvdzogMTtcclxuICAgIGdyaWQtY29sdW1uOiAxO1xyXG4gICAgd2lkdGg6IDNlbTtcclxuICAgIGhlaWdodDogM2VtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgUG9zdElucHV0ID0gc3R5bGVkLmlucHV0IGBcclxuICAgIHdpZHRoOiAyMGVtO1xyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgRGVsZXRlQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICAgIGdyaWQtcm93OiAxO1xyXG4gICAgZ3JpZC1jb2x1bW46IDM7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHJpZ2h0OiAuNGVtO1xyXG4gICAgaGVpZ2h0OiAxLjZlbTtcclxuICAgIGJvdHRvbTogLjJlbTtcclxuYCIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFkZFBvc3RGb3JtIGZyb20gXCIuL0FkZFBvc3RGb3JtXCI7XHJcbmltcG9ydCB7IERlbGV0ZUJ1dHRvbiwgSXRlbSwgSXRlbUltYWdlLCBQb3N0V3JhcHBlciB9IGZyb20gXCIuL1Bvc3RzLnN0eWxlc1wiO1xyXG5cclxuY29uc3QgUG9zdHMgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW2lkLCBzZXRJZF0gPSB1c2VTdGF0ZTxudW1iZXI+KDApXHJcblxyXG4gICAgY29uc3QgY3JlYXRlUG9zdCA9IChsYWJlbDogc3RyaW5nLCBpZDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgQXV0aG9yOiAn0JLQu9Cw0LTQuNGB0LvQsNCyINCh0LDQvNGB0L7QvdC+0LInLFxyXG4gICAgICAgICAgICBNZXNzYWdlOiBsYWJlbCxcclxuICAgICAgICAgICAgQXZhdGFyOiAnaHR0cHM6Ly9kMnppYTJ3NWF1dG5sZy5jbG91ZGZyb250Lm5ldC80NjIzNS81ZWMzM2VlNzczMTNhLWxhcmdlJyxcclxuICAgICAgICAgICAgaWQ6IGlkXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFtwb3N0cywgc2V0UG9zdF0gPSB1c2VTdGF0ZShbXHJcbiAgICAgICAgY3JlYXRlUG9zdCgn0K8g0YLRg9GCINC90L7QstC10L3RjNC60LjQuSknLCAwKVxyXG4gICAgXSlcclxuXHJcbiAgICBjb25zdCBhZGRQb3N0ID0gKHRleHQ6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGlmICh0ZXh0ICE9PSAnJyl7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1Bvc3QgPSBjcmVhdGVQb3N0KHRleHQsIGlkICsgMSlcclxuICAgICAgICAgICAgY29uc3QgbmV3QXJyYXkgPSBbLi4ucG9zdHMsIG5ld1Bvc3RdXHJcbiAgICAgICAgICAgIHNldElkKGlkICsgMSlcclxuICAgICAgICAgICAgc2V0UG9zdChuZXdBcnJheSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGVsZXRlUG9zdCA9IChpZDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgc2V0UG9zdChwb3N0cy5maWx0ZXIoKHBvc3QpID0+IHBvc3QuaWQgIT09IGlkKSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxQb3N0V3JhcHBlciA+XHJcbiAgICAgICAgICAgIDxBZGRQb3N0Rm9ybSBhZGRQb3N0PXthZGRQb3N0fSAvPlxyXG4gICAgICAgICAgICB7cG9zdHMubWFwKCh1c2VyUG9zdCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPEl0ZW0ga2V5PXt1c2VyUG9zdC5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEl0ZW1JbWFnZSBzcmM9e3VzZXJQb3N0LkF2YXRhcn0gYWx0PSfQpNC+0YLQvtCz0YDQsNGE0LjRjyDQv9GA0L7RhNC40LvRjycgLz5cclxuICAgICAgICAgICAgICAgICAgICA8aDU+e3VzZXJQb3N0LkF1dGhvcn08L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPnt1c2VyUG9zdC5NZXNzYWdlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8RGVsZXRlQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J2J1dHRvbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLWRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwi0KPQtNCw0LvQuNGC0Ywg0L/QvtGB0YJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkZWxldGVQb3N0KHVzZXJQb3N0LmlkKX0gLz5cclxuICAgICAgICAgICAgICAgIDwvSXRlbT5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9Qb3N0V3JhcHBlcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdHMiLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9maWxlSW5mb3JtYXRpb24gPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IFBvc3RXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDI4ZW07XHJcbiAgICBtYXJnaW4tdG9wOiAyZW07XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gIiwiaW1wb3J0IENvbnRlbnQgZnJvbSBcIi4vQ29udGVudC9Db250ZW50XCJcclxuaW1wb3J0IEZyaWVuZHNTaG9ydCBmcm9tIFwiLi9GcmllbmRzU2hvcnQvRnJpZW5kc1Nob3J0XCJcclxuaW1wb3J0IFBvc3RzIGZyb20gXCIuL1Bvc3RzL1Bvc3RzXCJcclxuaW1wb3J0IHsgUG9zdFdyYXBwZXIsIFByb2ZpbGVJbmZvcm1hdGlvbiwgUHJvZmlsZVdyYXBwZXIgfSBmcm9tIFwiLi9Qcm9maWxlLnN0eWxlc1wiXHJcblxyXG5cclxuY29uc3QgUHJvZmlsZSA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPFByb2ZpbGVJbmZvcm1hdGlvbj5cclxuICAgICAgICAgICAgICAgIDxDb250ZW50IC8+XHJcbiAgICAgICAgICAgICAgICA8RnJpZW5kc1Nob3J0IC8+XHJcbiAgICAgICAgICAgIDwvUHJvZmlsZUluZm9ybWF0aW9uPlxyXG5cclxuICAgICAgICAgICAgPFBvc3RXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgPFBvc3RzIC8+XHJcbiAgICAgICAgICAgIDwvUG9zdFdyYXBwZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGUiLCJpbXBvcnQgUHJvZmlsZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Qcm9maWxlL1Byb2ZpbGVcIlxyXG5cclxuY29uc3QgcHJvZmlsZSA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPFByb2ZpbGUgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJvZmlsZSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBlbW90aW9uL3N0eWxlZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==