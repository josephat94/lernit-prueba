webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/auth/auth.js":
/*!*********************************!*\
  !*** ./components/auth/auth.js ***!
  \*********************************/
/*! exports provided: AuthContext, AuthProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthContext", function() { return AuthContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthProvider", function() { return AuthProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/firebase */ "./lib/firebase.js");
var _this = undefined,
    _jsxFileName = "/Users/josephatreyes/Documents/GitHub/lernit-prueba/components/auth/auth.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var AuthContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
var AuthProvider = function AuthProvider(props) {
  var children = props.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      currentUser = _useState[0],
      setCurrentUser = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    _lib_firebase__WEBPACK_IMPORTED_MODULE_3__["default"].auth().onAuthStateChanged(setCurrentUser);
  }, []);
  return __jsx(AuthContext.Provider, {
    value: {
      currentUser: currentUser
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, children);
};

/***/ })

})
//# sourceMappingURL=index.js.6734231a092168a325ae.hot-update.js.map