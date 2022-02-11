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
    box-shadow: -2px 2px 10px #111;
    padding: 1.5em;
    text-align: center;
    border-radius: .5em;
    height: fit-content;
    width: 14em;
`;
const ProfileImage = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default.a.img`
    width: 10em;
    height: 12em;
    border-radius: 4em;
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
    box-shadow: -2px 2px .35em #111;
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
    box-shadow: -2px 2px 10px #111;
    padding: 1em;
    width: 25em;
    margin: 1em 0 0 0;
    border-radius: .5em;
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
    width: 21em;
    grid-row: 2;
    grid-column: 1;
    h5 {
        grid-row: 1;
        grid-column: 2;
        margin-top: .45em;
        color: #ffe1dd;
    }
    box-shadow: 0 0 10px #111;
    padding: .5em;
    border-radius: .5em;
`;
const Item = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default.a.div`
    margin: .5em auto 0 auto;
    border-radius: .25em;
    display: grid;
    justify-content: center;
    grid-template-columns: 3em 1fr 1em;
    grid-template-rows: 3em 1fr;
    grid-gap: .5em;
    padding: .5em .5em 0 .5em;
    width: 20em;
    height: fit-content;
    transition: .5s;
    overflow-wrap: break-word;
    p {
        grid-row: 2;
        grid-column: 1/3;
    }
    :hover {
        background-color: #333;
        transition: .5s;
    }
`;
const ItemImage = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default.a.img`
    grid-row: 1;
    grid-column: 1;
    width: 2.5em;
    height: 2.5em;
    border-radius: 50%;
    margin: .2em 0 0 0;
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
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([createPost('Ололо, я дурачок', 0)]);

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
    width: 100%;
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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "C:\\Users\\vsamsonov\\Desktop\\SocialWeb\\src\\components\\Profile\\Profile.tsx";







const Profile = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "\u041F\u0440\u043E\u0444\u0438\u043B\u044C"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Profile_styles__WEBPACK_IMPORTED_MODULE_5__["ProfileInformation"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Content_Content__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Profile_styles__WEBPACK_IMPORTED_MODULE_5__["ShortModules"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FriendsShort_FriendsShort__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_MusicShort_MusicShort__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Profile_styles__WEBPACK_IMPORTED_MODULE_5__["PostWrapper"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Posts_Posts__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
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

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUHJvZmlsZS9Db250ZW50L0NvbnRlbnQuc3R5bGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Byb2ZpbGUvQ29udGVudC9Db250ZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9maWxlL0ZyaWVuZHNTaG9ydC9GcmllbmRzU2hvcnQuc3R5bGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Byb2ZpbGUvRnJpZW5kc1Nob3J0L0ZyaWVuZHNTaG9ydC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUHJvZmlsZS9NdXNpY1Nob3J0L011c2ljU2hvcnQuc3R5bGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Byb2ZpbGUvTXVzaWNTaG9ydC9NdXNpY1Nob3J0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9maWxlL1Bvc3RzL0FkZFBvc3RGb3JtLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9maWxlL1Bvc3RzL1Bvc3RzLnN0eWxlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9maWxlL1Bvc3RzL1Bvc3RzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9maWxlL1Byb2ZpbGUuc3R5bGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Byb2ZpbGUvUHJvZmlsZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3Byb2ZpbGUvaW5kZXgudHN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcIkBlbW90aW9uL3N0eWxlZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiQ29udGVudFdyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJQcm9maWxlSW1hZ2UiLCJpbWciLCJQcm9maWxlSW5mbyIsIkNvbnRlbnQiLCJGcmllbmRzV3JhcHBlciIsIkZyaWVuZHNTaG9ydCIsIk11c2ljU2hvcnRXcmFwcGVyIiwiTXVzaWNTaG9ydCIsIkFkZFBvc3RGb3JtIiwicHJvcHMiLCJsYWJlbCIsInNldExhYmVsIiwidXNlU3RhdGUiLCJvbkxhYmVsQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJhZGRQb3N0IiwiUG9zdFdyYXBwZXIiLCJJdGVtIiwiSXRlbUltYWdlIiwiUG9zdElucHV0IiwiaW5wdXQiLCJEZWxldGVCdXR0b24iLCJidXR0b24iLCJBZGRCdXR0b24iLCJQb3N0cyIsImlkIiwic2V0SWQiLCJjcmVhdGVQb3N0IiwiQXV0aG9yIiwiTWVzc2FnZSIsIkF2YXRhciIsInBvc3RzIiwic2V0UG9zdCIsInRleHQiLCJuZXdQb3N0IiwibmV3QXJyYXkiLCJkZWxldGVQb3N0IiwiZmlsdGVyIiwicG9zdCIsIm1hcCIsInVzZXJQb3N0IiwiUHJvZmlsZUluZm9ybWF0aW9uIiwiU2hvcnRNb2R1bGVzIiwiUHJvZmlsZSIsInByb2ZpbGUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNB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LDJCQUNJLHFFQUFDLG1FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFLSCxDQU5EOztBQVFlQSxzRUFBZixFOzs7Ozs7Ozs7OztBQ1ZBLDRDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL3Byb2ZpbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wYWdlcy9wcm9maWxlL2luZGV4LnRzeFwiKTtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRlbnRXcmFwcGVyID0gc3R5bGVkLmRpdiBgXHJcbiAgICBncmlkLXJvdzogMTtcclxuICAgIGdyaWQtY29sdW1uOiAzO1xyXG4gICAgcCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbjogLjVlbSAwIDAgMDtcclxuICAgIH07XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jb2x1bW47XHJcbiAgICBib3gtc2hhZG93OiAtMnB4IDJweCAxMHB4ICMxMTE7XHJcbiAgICBwYWRkaW5nOiAxLjVlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IC41ZW07XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgd2lkdGg6IDE0ZW07XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9maWxlSW1hZ2UgPSBzdHlsZWQuaW1nYFxyXG4gICAgd2lkdGg6IDEwZW07XHJcbiAgICBoZWlnaHQ6IDEyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA0ZW07XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICAgIGJveC1zaGFkb3c6IDJweCAycHggMTBweCByZ2IoNDksIDQ5LCA0OSk7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggYXp1cmU7XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9maWxlSW5mbyA9IHN0eWxlZC5kaXYgYFxyXG4gICAgbWFyZ2luOiAyZW0gLjVlbSAwIC41ZW07XHJcbmAiLCJpbXBvcnQgeyBDb250ZW50V3JhcHBlciwgUHJvZmlsZUltYWdlLCBQcm9maWxlSW5mbyB9IGZyb20gXCIuL0NvbnRlbnQuc3R5bGVzXCJcclxuXHJcbmNvbnN0IENvbnRlbnQgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb250ZW50V3JhcHBlcj5cclxuICAgICAgICAgICAgPFByb2ZpbGVJbWFnZSBzcmM9XCJodHRwczovL3N1bjktMjgudXNlcmFwaS5jb20vaW1wZy8xeV9tMllXQzg1Zmg0emRseXE2MGNwenRGZnBjRlBvZ3pmZEtudy9ESXhSRVk4QkNNTS5qcGc/c2l6ZT04MTB4MTA4MCZxdWFsaXR5PTk2JnNpZ249YTcxOTNjYjhiMGYyNzRhN2U5YWQyYmEwODA4NWRiOGMmdHlwZT1hbGJ1bVwiIGFsdD0n0KTQvtGC0L7Qs9GA0LDRhNC40Y8g0L/RgNC+0YTQuNC70Y8nLz5cclxuICAgICAgICAgICAgPFByb2ZpbGVJbmZvID5cclxuICAgICAgICAgICAgICAgIDxwPjxiPtCY0LzRjzo8L2I+INCS0LvQsNC00LjRgdC70LDQsiDQodCw0LzRgdC+0L3QvtCyPC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+PGI+0J/QvtC7OjwvYj4g0JzRg9C20YHQutC+0Lk8L3A+XHJcbiAgICAgICAgICAgICAgICA8cD48Yj7QktC+0LfRgNCw0YHRgjo8L2I+IDE5INC70LXRgjwvcD5cclxuICAgICAgICAgICAgPC9Qcm9maWxlSW5mbz5cclxuICAgICAgICA8L0NvbnRlbnRXcmFwcGVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250ZW50IiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCJcclxuXHJcbmV4cG9ydCBjb25zdCBGcmllbmRzV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgICBncmlkLXJvdzogMTtcclxuICAgIGdyaWQtY29sdW1uOiAxO1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjVlbTtcclxuICAgIGJveC1zaGFkb3c6IC0ycHggMnB4IC4zNWVtICMxMTE7XHJcbiAgICB3aWR0aDogMjVlbTtcclxuICAgIGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDJlbTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMS41JTtcclxuICAgIH1cclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbmBcclxuIiwiaW1wb3J0IHsgRnJpZW5kc1dyYXBwZXIgfSBmcm9tIFwiLi9GcmllbmRzU2hvcnQuc3R5bGVzXCJcclxuXHJcbmNvbnN0IEZyaWVuZHNTaG9ydCA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZyaWVuZHNXcmFwcGVyPlxyXG4gICAgICAgICAgICA8aDE+0KMg0LLQsNGBINC90LXRgiDQtNGA0YPQt9C10Lk8L2gxPlxyXG4gICAgICAgIDwvRnJpZW5kc1dyYXBwZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZyaWVuZHNTaG9ydCIsImltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IE11c2ljU2hvcnRXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICAgIGJveC1zaGFkb3c6IC0ycHggMnB4IDEwcHggIzExMTtcclxuICAgIHBhZGRpbmc6IDFlbTtcclxuICAgIHdpZHRoOiAyNWVtO1xyXG4gICAgbWFyZ2luOiAxZW0gMCAwIDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuNWVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxLjUlO1xyXG4gICAgfVxyXG5gIiwiaW1wb3J0IHsgTXVzaWNTaG9ydFdyYXBwZXIgfSBmcm9tIFwiLi9NdXNpY1Nob3J0LnN0eWxlc1wiXHJcblxyXG5jb25zdCBNdXNpY1Nob3J0ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TXVzaWNTaG9ydFdyYXBwZXI+XHJcbiAgICAgICAgICAgIDxoMT7QktGLINC/0L7QutCwINGH0YLQviDQvdC1INC00L7QsdCw0LLQuNC70Lgg0LzRg9C30YvQutGDPC9oMT5cclxuICAgICAgICA8L011c2ljU2hvcnRXcmFwcGVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNdXNpY1Nob3J0XHJcblxyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBBZGRCdXR0b24sIFBvc3RJbnB1dCB9IGZyb20gXCIuL1Bvc3RzLnN0eWxlc1wiO1xyXG5cclxuY29uc3QgQWRkUG9zdEZvcm0gPSAocHJvcHM6IGFueSkgPT4ge1xyXG4gICAgY29uc3QgW2xhYmVsLCBzZXRMYWJlbF0gPSB1c2VTdGF0ZSgnJylcclxuXHJcbiAgICBjb25zdCBvbkxhYmVsQ2hhbmdlID0gKGV2ZW50OiBhbnkpID0+IHtcclxuICAgICAgICBzZXRMYWJlbChldmVudC50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb25TdWJtaXQgPSAoZXZlbnQ6IGFueSkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBwcm9wcy5hZGRQb3N0KGxhYmVsKVxyXG4gICAgICAgIHNldExhYmVsKCcnKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8Zm9ybSBcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1mbGV4XCJcclxuICAgICAgICAgICAgb25TdWJtaXQ9e29uU3VibWl0fT5cclxuICAgICAgICAgICAgPFBvc3RJbnB1dCBcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBtZS1zbS0yXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkxhYmVsQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0JrQsNC6INCy0LDRiNC4INC00LXQu9CwP1wiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17bGFiZWx9Lz5cclxuICAgICAgICAgICAgPEFkZEJ1dHRvbiBcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5IG15LTIgbXktc20tMFwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uU3VibWl0fT5cclxuICAgICAgICAgICAgICAgINCU0L7QsdCw0LLQuNGC0YxcclxuICAgICAgICAgICAgPC9BZGRCdXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZGRQb3N0Rm9ybSIsImltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiXHJcblxyXG5leHBvcnQgY29uc3QgUG9zdFdyYXBwZXIgPSBzdHlsZWQuZGl2IGBcclxuICAgIHdpZHRoOiAyMWVtO1xyXG4gICAgZ3JpZC1yb3c6IDI7XHJcbiAgICBncmlkLWNvbHVtbjogMTtcclxuICAgIGg1IHtcclxuICAgICAgICBncmlkLXJvdzogMTtcclxuICAgICAgICBncmlkLWNvbHVtbjogMjtcclxuICAgICAgICBtYXJnaW4tdG9wOiAuNDVlbTtcclxuICAgICAgICBjb2xvcjogI2ZmZTFkZDtcclxuICAgIH1cclxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4ICMxMTE7XHJcbiAgICBwYWRkaW5nOiAuNWVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjVlbTtcclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEl0ZW0gPSBzdHlsZWQuZGl2YFxyXG4gICAgbWFyZ2luOiAuNWVtIGF1dG8gMCBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjI1ZW07XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNlbSAxZnIgMWVtO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzZW0gMWZyO1xyXG4gICAgZ3JpZC1nYXA6IC41ZW07XHJcbiAgICBwYWRkaW5nOiAuNWVtIC41ZW0gMCAuNWVtO1xyXG4gICAgd2lkdGg6IDIwZW07XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgdHJhbnNpdGlvbjogLjVzO1xyXG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxuICAgIHAge1xyXG4gICAgICAgIGdyaWQtcm93OiAyO1xyXG4gICAgICAgIGdyaWQtY29sdW1uOiAxLzM7XHJcbiAgICB9XHJcbiAgICA6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogLjVzO1xyXG4gICAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgSXRlbUltYWdlID0gc3R5bGVkLmltZyBgXHJcbiAgICBncmlkLXJvdzogMTtcclxuICAgIGdyaWQtY29sdW1uOiAxO1xyXG4gICAgd2lkdGg6IDIuNWVtO1xyXG4gICAgaGVpZ2h0OiAyLjVlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG1hcmdpbjogLjJlbSAwIDAgMDtcclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IFBvc3RJbnB1dCA9IHN0eWxlZC5pbnB1dCBgXHJcbiAgICB3aWR0aDogMjBlbTtcclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IERlbGV0ZUJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgICBncmlkLXJvdzogMTtcclxuICAgIGdyaWQtY29sdW1uOiAzO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICByaWdodDogLjRlbTtcclxuICAgIGhlaWdodDogMS42ZW07XHJcbiAgICBib3R0b206IC4yZW07XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBBZGRCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4MjgyODtcclxuYCIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFkZFBvc3RGb3JtIGZyb20gXCIuL0FkZFBvc3RGb3JtXCI7XHJcbmltcG9ydCB7IERlbGV0ZUJ1dHRvbiwgSXRlbSwgSXRlbUltYWdlLCBQb3N0V3JhcHBlciB9IGZyb20gXCIuL1Bvc3RzLnN0eWxlc1wiO1xyXG5cclxuY29uc3QgUG9zdHMgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW2lkLCBzZXRJZF0gPSB1c2VTdGF0ZTxudW1iZXI+KDApXHJcblxyXG4gICAgY29uc3QgY3JlYXRlUG9zdCA9IChsYWJlbDogc3RyaW5nLCBpZDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgQXV0aG9yOiAn0JLQu9Cw0LTQuNGB0LvQsNCyINCh0LDQvNGB0L7QvdC+0LInLFxyXG4gICAgICAgICAgICBNZXNzYWdlOiBsYWJlbCxcclxuICAgICAgICAgICAgQXZhdGFyOiAnaHR0cHM6Ly9kMnppYTJ3NWF1dG5sZy5jbG91ZGZyb250Lm5ldC80NjIzNS81ZWMzM2VlNzczMTNhLWxhcmdlJyxcclxuICAgICAgICAgICAgaWQ6IGlkXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFtwb3N0cywgc2V0UG9zdF0gPSB1c2VTdGF0ZShbXHJcbiAgICAgICAgY3JlYXRlUG9zdCgn0J7Qu9C+0LvQviwg0Y8g0LTRg9GA0LDRh9C+0LonLCAwKVxyXG4gICAgXSlcclxuXHJcbiAgICBjb25zdCBhZGRQb3N0ID0gKHRleHQ6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGlmICh0ZXh0ICE9PSAnJyl7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1Bvc3QgPSBjcmVhdGVQb3N0KHRleHQsIGlkICsgMSlcclxuICAgICAgICAgICAgY29uc3QgbmV3QXJyYXkgPSBbLi4ucG9zdHMsIG5ld1Bvc3RdXHJcbiAgICAgICAgICAgIHNldElkKGlkICsgMSlcclxuICAgICAgICAgICAgc2V0UG9zdChuZXdBcnJheSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGVsZXRlUG9zdCA9IChpZDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgc2V0UG9zdChwb3N0cy5maWx0ZXIoKHBvc3QpID0+IHBvc3QuaWQgIT09IGlkKSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxQb3N0V3JhcHBlciA+XHJcbiAgICAgICAgICAgIDxBZGRQb3N0Rm9ybSBhZGRQb3N0PXthZGRQb3N0fSAvPlxyXG4gICAgICAgICAgICB7cG9zdHMubWFwKCh1c2VyUG9zdCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPEl0ZW0ga2V5PXt1c2VyUG9zdC5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEl0ZW1JbWFnZSBzcmM9e3VzZXJQb3N0LkF2YXRhcn0gYWx0PSfQpNC+0YLQvtCz0YDQsNGE0LjRjyDQv9GA0L7RhNC40LvRjycgLz5cclxuICAgICAgICAgICAgICAgICAgICA8aDU+e3VzZXJQb3N0LkF1dGhvcn08L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPnt1c2VyUG9zdC5NZXNzYWdlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8RGVsZXRlQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J2J1dHRvbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLWRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwi0KPQtNCw0LvQuNGC0Ywg0L/QvtGB0YJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkZWxldGVQb3N0KHVzZXJQb3N0LmlkKX0gLz5cclxuICAgICAgICAgICAgICAgIDwvSXRlbT5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9Qb3N0V3JhcHBlcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdHMiLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9maWxlSW5mb3JtYXRpb24gPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzogMCAzZW0gMCAzZW07XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBQb3N0V3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiAyMmVtO1xyXG4gICAgbWFyZ2luLXRvcDogMmVtO1xyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgU2hvcnRNb2R1bGVzID0gc3R5bGVkLmRpdiBgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuYCIsImltcG9ydCBDb250ZW50IGZyb20gXCIuL0NvbnRlbnQvQ29udGVudFwiXHJcbmltcG9ydCBGcmllbmRzU2hvcnQgZnJvbSBcIi4vRnJpZW5kc1Nob3J0L0ZyaWVuZHNTaG9ydFwiXHJcbmltcG9ydCBNdXNpY1Nob3J0IGZyb20gXCIuL011c2ljU2hvcnQvTXVzaWNTaG9ydFwiXHJcbmltcG9ydCBQb3N0cyBmcm9tIFwiLi9Qb3N0cy9Qb3N0c1wiXHJcbmltcG9ydCB7IFBvc3RXcmFwcGVyLCBQcm9maWxlSW5mb3JtYXRpb24sIFNob3J0TW9kdWxlcyB9IGZyb20gXCIuL1Byb2ZpbGUuc3R5bGVzXCJcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiXHJcblxyXG5cclxuY29uc3QgUHJvZmlsZSA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+0J/RgNC+0YTQuNC70Yw8L3RpdGxlPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxQcm9maWxlSW5mb3JtYXRpb24+XHJcbiAgICAgICAgICAgICAgICA8Q29udGVudCAvPlxyXG4gICAgICAgICAgICAgICAgPFNob3J0TW9kdWxlcyA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZyaWVuZHNTaG9ydCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNdXNpY1Nob3J0Lz5cclxuICAgICAgICAgICAgICAgICAgICA8UG9zdFdyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQb3N0cyAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUG9zdFdyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICA8L1Nob3J0TW9kdWxlcz5cclxuICAgICAgICAgICAgPC9Qcm9maWxlSW5mb3JtYXRpb24+XHJcblxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlIiwiaW1wb3J0IFByb2ZpbGUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUHJvZmlsZS9Qcm9maWxlXCJcclxuXHJcbmNvbnN0IHByb2ZpbGUgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxQcm9maWxlIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHByb2ZpbGUiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZW1vdGlvbi9zdHlsZWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9