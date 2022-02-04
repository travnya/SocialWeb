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
/*! exports provided: ContentWrapper, ProfileImage, ProfileInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentWrapper", function() { return ContentWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileImage", function() { return ProfileImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileInfo", function() { return ProfileInfo; });
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled */ "@emotion/styled");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_0__);

const ContentWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default.a.div`
    grid-row: 1;
    grid-column: 3;
    p {
        text-align: center;
        margin: .5em 0 0 0;
    };
    display: table-column;
    box-shadow: -2px 2px 10px #181818;
    padding: 1.5em;
    text-align: center;
    border-radius: .5em;
`;
const ProfileImage = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default.a.img`
    width: 10em;
    height: 12em;
    border-radius: 2em;
    background-size: cover;
    background-position: center center;
    box-shadow: 2px 2px 10px rgb(49, 49, 49);
    object-fit: cover;
    box-shadow: 0 0 5px azure;
`;
const ProfileInfo = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default.a.div`
    margin: 2em .5em 0 .5em;
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
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Content_styles__WEBPACK_IMPORTED_MODULE_1__["ProfileInfo"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
          children: "\u0418\u043C\u044F:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 20
        }, undefined), " \u0412\u043B\u0430\u0434\u0438\u0441\u043B\u0430\u0432 \u0421\u0430\u043C\u0441\u043E\u043D\u043E\u0432"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
          children: "\u041F\u043E\u043B:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 20
        }, undefined), " \u041C\u0443\u0436\u0441\u043A\u043E\u0439"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
          children: "\u0412\u043E\u0437\u0440\u0430\u0441\u0442:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 20
        }, undefined), " 19 \u043B\u0435\u0442"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
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
    box-shadow: -2px 2px .35em #181818;
    width: 25em;
    h1 {
        font-size: 2em;
        text-align: center;
        margin-top: 1.5%;
    }
    height: fit-content;
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
      children: "\u0423 \u0432\u0430\u0441 \u043D\u0435\u0442 \u0434\u0440\u0443\u0437\u0435\u0439"
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

/***/ "./src/components/Profile/MusicShort/MusicShort.styles.ts":
/*!****************************************************************!*\
  !*** ./src/components/Profile/MusicShort/MusicShort.styles.ts ***!
  \****************************************************************/
/*! exports provided: MusicShortWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicShortWrapper", function() { return MusicShortWrapper; });
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled */ "@emotion/styled");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_0__);

const MusicShortWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default.a.div`
    box-shadow: -2px 2px 10px #181818;
    padding: 1em;
    width: 25em;
    margin: 1em 0 0 0;
    text-align: center;
    h1 {
        font-size: 2em;
        text-align: center;
        margin-top: 1.5%;
    }
`;

/***/ }),

/***/ "./src/components/Profile/MusicShort/MusicShort.tsx":
/*!**********************************************************!*\
  !*** ./src/components/Profile/MusicShort/MusicShort.tsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MusicShort_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MusicShort.styles */ "./src/components/Profile/MusicShort/MusicShort.styles.ts");

var _jsxFileName = "C:\\Users\\vsamsonov\\Desktop\\SocialWeb\\src\\components\\Profile\\MusicShort\\MusicShort.tsx";


const MusicShort = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_MusicShort_styles__WEBPACK_IMPORTED_MODULE_1__["MusicShortWrapper"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: "\u0412\u044B \u043F\u043E\u043A\u0430 \u0447\u0442\u043E \u043D\u0435 \u0434\u043E\u0431\u0430\u0432\u0438\u043B\u0438 \u043C\u0443\u0437\u044B\u043A\u0443"
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

/* harmony default export */ __webpack_exports__["default"] = (MusicShort);

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
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Posts_styles__WEBPACK_IMPORTED_MODULE_2__["AddButton"], {
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
/*! exports provided: PostWrapper, Item, ItemImage, PostInput, DeleteButton, AddButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostWrapper", function() { return PostWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemImage", function() { return ItemImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostInput", function() { return PostInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteButton", function() { return DeleteButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddButton", function() { return AddButton; });
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
    box-shadow: -2px 2px 10px #181818;
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
const AddButton = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default.a.button`
    background-color: #282828;
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
/*! exports provided: ProfileInformation, PostWrapper, ShortModules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileInformation", function() { return ProfileInformation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostWrapper", function() { return PostWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShortModules", function() { return ShortModules; });
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled */ "@emotion/styled");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_0__);

const ProfileInformation = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default.a.div`
    display: flex;
    width: 55em;
    justify-content: space-between;
    padding: 0 3em 0 3em;
`;
const PostWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default.a.div`
    display: flex;
    flex-direction: column;
    width: 22em;
    margin-top: 2em;
`;
const ShortModules = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default.a.div`
    display: flex;
    flex-direction: column;
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
/* harmony import */ var _MusicShort_MusicShort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MusicShort/MusicShort */ "./src/components/Profile/MusicShort/MusicShort.tsx");
/* harmony import */ var _Posts_Posts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Posts/Posts */ "./src/components/Profile/Posts/Posts.tsx");
/* harmony import */ var _Profile_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Profile.styles */ "./src/components/Profile/Profile.styles.ts");

var _jsxFileName = "C:\\Users\\vsamsonov\\Desktop\\SocialWeb\\src\\components\\Profile\\Profile.tsx";






const Profile = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Profile_styles__WEBPACK_IMPORTED_MODULE_5__["ProfileInformation"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Content_Content__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Profile_styles__WEBPACK_IMPORTED_MODULE_5__["ShortModules"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FriendsShort_FriendsShort__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_MusicShort_MusicShort__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Profile_styles__WEBPACK_IMPORTED_MODULE_5__["PostWrapper"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Posts_Posts__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUHJvZmlsZS9Db250ZW50L0NvbnRlbnQuc3R5bGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Byb2ZpbGUvQ29udGVudC9Db250ZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9maWxlL0ZyaWVuZHNTaG9ydC9GcmllbmRzU2hvcnQuc3R5bGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Byb2ZpbGUvRnJpZW5kc1Nob3J0L0ZyaWVuZHNTaG9ydC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUHJvZmlsZS9NdXNpY1Nob3J0L011c2ljU2hvcnQuc3R5bGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Byb2ZpbGUvTXVzaWNTaG9ydC9NdXNpY1Nob3J0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9maWxlL1Bvc3RzL0FkZFBvc3RGb3JtLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9maWxlL1Bvc3RzL1Bvc3RzLnN0eWxlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9maWxlL1Bvc3RzL1Bvc3RzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9maWxlL1Byb2ZpbGUuc3R5bGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Byb2ZpbGUvUHJvZmlsZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3Byb2ZpbGUvaW5kZXgudHN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcIkBlbW90aW9uL3N0eWxlZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiQ29udGVudFdyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJQcm9maWxlSW1hZ2UiLCJpbWciLCJQcm9maWxlSW5mbyIsIkNvbnRlbnQiLCJGcmllbmRzV3JhcHBlciIsIkZyaWVuZHNTaG9ydCIsIk11c2ljU2hvcnRXcmFwcGVyIiwiTXVzaWNTaG9ydCIsIkFkZFBvc3RGb3JtIiwicHJvcHMiLCJsYWJlbCIsInNldExhYmVsIiwidXNlU3RhdGUiLCJvbkxhYmVsQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJhZGRQb3N0IiwiUG9zdFdyYXBwZXIiLCJJdGVtIiwiSXRlbUltYWdlIiwiUG9zdElucHV0IiwiaW5wdXQiLCJEZWxldGVCdXR0b24iLCJidXR0b24iLCJBZGRCdXR0b24iLCJQb3N0cyIsImlkIiwic2V0SWQiLCJjcmVhdGVQb3N0IiwiQXV0aG9yIiwiTWVzc2FnZSIsIkF2YXRhciIsInBvc3RzIiwic2V0UG9zdCIsInRleHQiLCJuZXdQb3N0IiwibmV3QXJyYXkiLCJkZWxldGVQb3N0IiwiZmlsdGVyIiwicG9zdCIsIm1hcCIsInVzZXJQb3N0IiwiUHJvZmlsZUluZm9ybWF0aW9uIiwiU2hvcnRNb2R1bGVzIiwiUHJvZmlsZSIsInByb2ZpbGUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtR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c0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcGFnZXMvcHJvZmlsZS9pbmRleC50c3hcIik7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBDb250ZW50V3JhcHBlciA9IHN0eWxlZC5kaXYgYFxyXG4gICAgZ3JpZC1yb3c6IDE7XHJcbiAgICBncmlkLWNvbHVtbjogMztcclxuICAgIHAge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW46IC41ZW0gMCAwIDA7XHJcbiAgICB9O1xyXG4gICAgZGlzcGxheTogdGFibGUtY29sdW1uO1xyXG4gICAgYm94LXNoYWRvdzogLTJweCAycHggMTBweCAjMTgxODE4O1xyXG4gICAgcGFkZGluZzogMS41ZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuNWVtO1xyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgUHJvZmlsZUltYWdlID0gc3R5bGVkLmltZ2BcclxuICAgIHdpZHRoOiAxMGVtO1xyXG4gICAgaGVpZ2h0OiAxMmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMmVtO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggcmdiKDQ5LCA0OSwgNDkpO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4IGF6dXJlO1xyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgUHJvZmlsZUluZm8gPSBzdHlsZWQuZGl2IGBcclxuICAgIG1hcmdpbjogMmVtIC41ZW0gMCAuNWVtO1xyXG5gIiwiaW1wb3J0IHsgQ29udGVudFdyYXBwZXIsIFByb2ZpbGVJbWFnZSwgUHJvZmlsZUluZm8gfSBmcm9tIFwiLi9Db250ZW50LnN0eWxlc1wiXHJcblxyXG5jb25zdCBDb250ZW50ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGVudFdyYXBwZXI+XHJcbiAgICAgICAgICAgIDxQcm9maWxlSW1hZ2Ugc3JjPVwiaHR0cHM6Ly9zdW45LTI4LnVzZXJhcGkuY29tL2ltcGcvMXlfbTJZV0M4NWZoNHpkbHlxNjBjcHp0RmZwY0ZQb2d6ZmRLbncvREl4UkVZOEJDTU0uanBnP3NpemU9ODEweDEwODAmcXVhbGl0eT05NiZzaWduPWE3MTkzY2I4YjBmMjc0YTdlOWFkMmJhMDgwODVkYjhjJnR5cGU9YWxidW1cIiBhbHQ9J9Ck0L7RgtC+0LPRgNCw0YTQuNGPINC/0YDQvtGE0LjQu9GPJy8+XHJcbiAgICAgICAgICAgIDxQcm9maWxlSW5mbyA+XHJcbiAgICAgICAgICAgICAgICA8cD48Yj7QmNC80Y86PC9iPiDQktC70LDQtNC40YHQu9Cw0LIg0KHQsNC80YHQvtC90L7QsjwvcD5cclxuICAgICAgICAgICAgICAgIDxwPjxiPtCf0L7Quzo8L2I+INCc0YPQttGB0LrQvtC5PC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+PGI+0JLQvtC30YDQsNGB0YI6PC9iPiAxOSDQu9C10YI8L3A+XHJcbiAgICAgICAgICAgIDwvUHJvZmlsZUluZm8+XHJcbiAgICAgICAgPC9Db250ZW50V3JhcHBlcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGVudCIsImltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiXHJcblxyXG5leHBvcnQgY29uc3QgRnJpZW5kc1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgZ3JpZC1yb3c6IDE7XHJcbiAgICBncmlkLWNvbHVtbjogMTtcclxuICAgIGJvcmRlci1yYWRpdXM6IC41ZW07XHJcbiAgICBib3gtc2hhZG93OiAtMnB4IDJweCAuMzVlbSAjMTgxODE4O1xyXG4gICAgd2lkdGg6IDI1ZW07XHJcbiAgICBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEuNSU7XHJcbiAgICB9XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG5gXHJcbiIsImltcG9ydCB7IEZyaWVuZHNXcmFwcGVyIH0gZnJvbSBcIi4vRnJpZW5kc1Nob3J0LnN0eWxlc1wiXHJcblxyXG5jb25zdCBGcmllbmRzU2hvcnQgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxGcmllbmRzV3JhcHBlcj5cclxuICAgICAgICAgICAgPGgxPtCjINCy0LDRgSDQvdC10YIg0LTRgNGD0LfQtdC5PC9oMT5cclxuICAgICAgICA8L0ZyaWVuZHNXcmFwcGVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGcmllbmRzU2hvcnQiLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBNdXNpY1Nob3J0V3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgICBib3gtc2hhZG93OiAtMnB4IDJweCAxMHB4ICMxODE4MTg7XHJcbiAgICBwYWRkaW5nOiAxZW07XHJcbiAgICB3aWR0aDogMjVlbTtcclxuICAgIG1hcmdpbjogMWVtIDAgMCAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxLjUlO1xyXG4gICAgfVxyXG5gIiwiaW1wb3J0IHsgTXVzaWNTaG9ydFdyYXBwZXIgfSBmcm9tIFwiLi9NdXNpY1Nob3J0LnN0eWxlc1wiXHJcblxyXG5jb25zdCBNdXNpY1Nob3J0ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TXVzaWNTaG9ydFdyYXBwZXI+XHJcbiAgICAgICAgICAgIDxoMT7QktGLINC/0L7QutCwINGH0YLQviDQvdC1INC00L7QsdCw0LLQuNC70Lgg0LzRg9C30YvQutGDPC9oMT5cclxuICAgICAgICA8L011c2ljU2hvcnRXcmFwcGVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNdXNpY1Nob3J0XHJcblxyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBBZGRCdXR0b24sIFBvc3RJbnB1dCB9IGZyb20gXCIuL1Bvc3RzLnN0eWxlc1wiO1xyXG5cclxuY29uc3QgQWRkUG9zdEZvcm0gPSAocHJvcHM6IGFueSkgPT4ge1xyXG4gICAgY29uc3QgW2xhYmVsLCBzZXRMYWJlbF0gPSB1c2VTdGF0ZSgnJylcclxuXHJcbiAgICBjb25zdCBvbkxhYmVsQ2hhbmdlID0gKGV2ZW50OiBhbnkpID0+IHtcclxuICAgICAgICBzZXRMYWJlbChldmVudC50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb25TdWJtaXQgPSAoZXZlbnQ6IGFueSkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBwcm9wcy5hZGRQb3N0KGxhYmVsKVxyXG4gICAgICAgIHNldExhYmVsKCcnKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8Zm9ybSBcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1mbGV4XCJcclxuICAgICAgICAgICAgb25TdWJtaXQ9e29uU3VibWl0fT5cclxuICAgICAgICAgICAgPFBvc3RJbnB1dCBcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBtZS1zbS0yXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkxhYmVsQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0JrQsNC6INCy0LDRiNC4INC00LXQu9CwP1wiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17bGFiZWx9Lz5cclxuICAgICAgICAgICAgPEFkZEJ1dHRvbiBcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5IG15LTIgbXktc20tMFwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uU3VibWl0fT5cclxuICAgICAgICAgICAgICAgINCU0L7QsdCw0LLQuNGC0YxcclxuICAgICAgICAgICAgPC9BZGRCdXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZGRQb3N0Rm9ybSIsImltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiXHJcblxyXG5leHBvcnQgY29uc3QgUG9zdFdyYXBwZXIgPSBzdHlsZWQuZGl2IGBcclxuICAgIHdpZHRoOiAyM2VtO1xyXG4gICAgZ3JpZC1yb3c6IDI7XHJcbiAgICBncmlkLWNvbHVtbjogMTtcclxuICAgIGg1IHtcclxuICAgICAgICBncmlkLXJvdzogMTtcclxuICAgICAgICBncmlkLWNvbHVtbjogMjtcclxuICAgICAgICBtYXJnaW4tdG9wOiAuNDVlbTtcclxuICAgICAgICBjb2xvcjogI2ZmZTFkZDtcclxuICAgIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEl0ZW0gPSBzdHlsZWQuZGl2YFxyXG4gICAgbWFyZ2luOiAuNWVtIGF1dG8gMCBhdXRvO1xyXG4gICAgYm94LXNoYWRvdzogLTJweCAycHggMTBweCAjMTgxODE4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZW0gMWZyIDFlbTtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogM2VtIDFmcjtcclxuICAgIGdyaWQtZ2FwOiAuNWVtO1xyXG4gICAgcGFkZGluZzogLjVlbSAuNWVtIDAgLjVlbTtcclxuICAgIHdpZHRoOiAyMGVtO1xyXG4gICAgcCB7XHJcbiAgICAgICAgZ3JpZC1yb3c6IDI7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEvMztcclxuICAgIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEl0ZW1JbWFnZSA9IHN0eWxlZC5pbWcgYFxyXG4gICAgZ3JpZC1yb3c6IDE7XHJcbiAgICBncmlkLWNvbHVtbjogMTtcclxuICAgIHdpZHRoOiAzZW07XHJcbiAgICBoZWlnaHQ6IDNlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IFBvc3RJbnB1dCA9IHN0eWxlZC5pbnB1dCBgXHJcbiAgICB3aWR0aDogMjBlbTtcclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IERlbGV0ZUJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgICBncmlkLXJvdzogMTtcclxuICAgIGdyaWQtY29sdW1uOiAzO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICByaWdodDogLjRlbTtcclxuICAgIGhlaWdodDogMS42ZW07XHJcbiAgICBib3R0b206IC4yZW07XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBBZGRCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4MjgyODtcclxuYCIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFkZFBvc3RGb3JtIGZyb20gXCIuL0FkZFBvc3RGb3JtXCI7XHJcbmltcG9ydCB7IERlbGV0ZUJ1dHRvbiwgSXRlbSwgSXRlbUltYWdlLCBQb3N0V3JhcHBlciB9IGZyb20gXCIuL1Bvc3RzLnN0eWxlc1wiO1xyXG5cclxuY29uc3QgUG9zdHMgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW2lkLCBzZXRJZF0gPSB1c2VTdGF0ZTxudW1iZXI+KDApXHJcblxyXG4gICAgY29uc3QgY3JlYXRlUG9zdCA9IChsYWJlbDogc3RyaW5nLCBpZDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgQXV0aG9yOiAn0JLQu9Cw0LTQuNGB0LvQsNCyINCh0LDQvNGB0L7QvdC+0LInLFxyXG4gICAgICAgICAgICBNZXNzYWdlOiBsYWJlbCxcclxuICAgICAgICAgICAgQXZhdGFyOiAnaHR0cHM6Ly9kMnppYTJ3NWF1dG5sZy5jbG91ZGZyb250Lm5ldC80NjIzNS81ZWMzM2VlNzczMTNhLWxhcmdlJyxcclxuICAgICAgICAgICAgaWQ6IGlkXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFtwb3N0cywgc2V0UG9zdF0gPSB1c2VTdGF0ZShbXHJcbiAgICAgICAgY3JlYXRlUG9zdCgn0K8g0YLRg9GCINC90L7QstC10L3RjNC60LjQuSknLCAwKVxyXG4gICAgXSlcclxuXHJcbiAgICBjb25zdCBhZGRQb3N0ID0gKHRleHQ6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGlmICh0ZXh0ICE9PSAnJyl7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1Bvc3QgPSBjcmVhdGVQb3N0KHRleHQsIGlkICsgMSlcclxuICAgICAgICAgICAgY29uc3QgbmV3QXJyYXkgPSBbLi4ucG9zdHMsIG5ld1Bvc3RdXHJcbiAgICAgICAgICAgIHNldElkKGlkICsgMSlcclxuICAgICAgICAgICAgc2V0UG9zdChuZXdBcnJheSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGVsZXRlUG9zdCA9IChpZDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgc2V0UG9zdChwb3N0cy5maWx0ZXIoKHBvc3QpID0+IHBvc3QuaWQgIT09IGlkKSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxQb3N0V3JhcHBlciA+XHJcbiAgICAgICAgICAgIDxBZGRQb3N0Rm9ybSBhZGRQb3N0PXthZGRQb3N0fSAvPlxyXG4gICAgICAgICAgICB7cG9zdHMubWFwKCh1c2VyUG9zdCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPEl0ZW0ga2V5PXt1c2VyUG9zdC5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEl0ZW1JbWFnZSBzcmM9e3VzZXJQb3N0LkF2YXRhcn0gYWx0PSfQpNC+0YLQvtCz0YDQsNGE0LjRjyDQv9GA0L7RhNC40LvRjycgLz5cclxuICAgICAgICAgICAgICAgICAgICA8aDU+e3VzZXJQb3N0LkF1dGhvcn08L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPnt1c2VyUG9zdC5NZXNzYWdlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8RGVsZXRlQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J2J1dHRvbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLWRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwi0KPQtNCw0LvQuNGC0Ywg0L/QvtGB0YJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkZWxldGVQb3N0KHVzZXJQb3N0LmlkKX0gLz5cclxuICAgICAgICAgICAgICAgIDwvSXRlbT5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9Qb3N0V3JhcHBlcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdHMiLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9maWxlSW5mb3JtYXRpb24gPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiA1NWVtO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzogMCAzZW0gMCAzZW07XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBQb3N0V3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiAyMmVtO1xyXG4gICAgbWFyZ2luLXRvcDogMmVtO1xyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgU2hvcnRNb2R1bGVzID0gc3R5bGVkLmRpdiBgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuYCIsImltcG9ydCBDb250ZW50IGZyb20gXCIuL0NvbnRlbnQvQ29udGVudFwiXHJcbmltcG9ydCBGcmllbmRzU2hvcnQgZnJvbSBcIi4vRnJpZW5kc1Nob3J0L0ZyaWVuZHNTaG9ydFwiXHJcbmltcG9ydCBNdXNpY1Nob3J0IGZyb20gXCIuL011c2ljU2hvcnQvTXVzaWNTaG9ydFwiXHJcbmltcG9ydCBQb3N0cyBmcm9tIFwiLi9Qb3N0cy9Qb3N0c1wiXHJcbmltcG9ydCB7IFBvc3RXcmFwcGVyLCBQcm9maWxlSW5mb3JtYXRpb24sIFNob3J0TW9kdWxlcyB9IGZyb20gXCIuL1Byb2ZpbGUuc3R5bGVzXCJcclxuXHJcblxyXG5jb25zdCBQcm9maWxlID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8UHJvZmlsZUluZm9ybWF0aW9uPlxyXG4gICAgICAgICAgICAgICAgPENvbnRlbnQgLz5cclxuICAgICAgICAgICAgICAgIDxTaG9ydE1vZHVsZXMgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGcmllbmRzU2hvcnQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8TXVzaWNTaG9ydC8+XHJcbiAgICAgICAgICAgICAgICA8L1Nob3J0TW9kdWxlcz5cclxuICAgICAgICAgICAgPC9Qcm9maWxlSW5mb3JtYXRpb24+XHJcblxyXG4gICAgICAgICAgICA8UG9zdFdyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICA8UG9zdHMgLz5cclxuICAgICAgICAgICAgPC9Qb3N0V3JhcHBlcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZSIsImltcG9ydCBQcm9maWxlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1Byb2ZpbGUvUHJvZmlsZVwiXHJcblxyXG5jb25zdCBwcm9maWxlID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8UHJvZmlsZSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwcm9maWxlIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGVtb3Rpb24vc3R5bGVkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9