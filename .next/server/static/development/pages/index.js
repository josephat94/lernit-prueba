module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ "firebase/auth");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/firebase */ "./lib/firebase.js");
/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mdbreact */ "mdbreact");
/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mdbreact__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/josephatreyes/Documents/GitHub/lernit-prueba/components/auth/auth.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





console.log("AIzaSyA1xyDAL6iWSjKcivagsPkvdGKRalEEdRU");
const AuthContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
const AuthProvider = props => {
  const {
    children
  } = props;
  const {
    0: currentUser,
    1: setCurrentUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    _lib_firebase__WEBPACK_IMPORTED_MODULE_3__["default"].auth().onAuthStateChanged(setCurrentUser);
  }, []);
  return __jsx(AuthContext.Provider, {
    value: {
      currentUser
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, children);
};

/***/ }),

/***/ "./components/auth/protected.js":
/*!**************************************!*\
  !*** ./components/auth/protected.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth */ "./components/auth/auth.js");
/* harmony import */ var _pages_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pages/login */ "./pages/login.js");
var _jsxFileName = "/Users/josephatreyes/Documents/GitHub/lernit-prueba/components/auth/protected.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const WithAuth = ({
  children
}) => {
  const {
    currentUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_auth__WEBPACK_IMPORTED_MODULE_1__["AuthContext"]);

  if (currentUser) {
    return __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 1
      }
    }, children);
  } else {
    return __jsx(_pages_login__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 12
      }
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (WithAuth);

/***/ }),

/***/ "./lib/firebase.js":
/*!*************************!*\
  !*** ./lib/firebase.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ "firebase/auth");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/database */ "firebase/database");
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_database__WEBPACK_IMPORTED_MODULE_2__);



let config = {
  apiKey: "AIzaSyA1xyDAL6iWSjKcivagsPkvdGKRalEEdRU",
  authDomain: "lernit-prueba.firebaseapp.com",
  databaseURL: "https://lernit-prueba.firebaseio.com",
  projectId: "lernit-prueba",
  storageBucket: "lernit-prueba.appspot.com",
  messagingSenderId: "80862301822",
  appId: "1:80862301822:web:26772e4c320c14d2e1522f",
  measurementId: "G-Q8Z7SEMNX5"
};
let app = !firebase_app__WEBPACK_IMPORTED_MODULE_0__["apps"].length ? firebase_app__WEBPACK_IMPORTED_MODULE_0__["initializeApp"](config) : firebase_app__WEBPACK_IMPORTED_MODULE_0__["app"]();
/* harmony default export */ __webpack_exports__["default"] = (app);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_auth_protected__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/auth/protected */ "./components/auth/protected.js");
/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/firebase */ "./lib/firebase.js");
/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mdbreact */ "mdbreact");
/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mdbreact__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/ri */ "react-icons/ri");
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_ri__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_auth_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/auth/auth */ "./components/auth/auth.js");
var _jsxFileName = "/Users/josephatreyes/Documents/GitHub/lernit-prueba/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const Home = props => {
  const {
    currentUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_components_auth_auth__WEBPACK_IMPORTED_MODULE_5__["AuthContext"]);
  const {
    0: counter,
    1: setCounter
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: loadSubscribers,
    1: setLoadSubscribers
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (currentUser) {
      const counterRef = _lib_firebase__WEBPACK_IMPORTED_MODULE_2__["default"].database().ref("/counters").child(String(currentUser.uid)).child("counter");
      counterRef.on("value", snapshot => {
        setCounter(snapshot.val());
      });
    }

    setLoadSubscribers(false);
    return () => {
      setLoadSubscribers(true);
    };
  }, [currentUser]);

  const increaseCounter = () => {
    const counterRef = _lib_firebase__WEBPACK_IMPORTED_MODULE_2__["default"].database().ref("/counters").child(String(currentUser.uid)).child("counter");
    counterRef.set(Number(counter + 1));
  };

  return __jsx(_components_auth_protected__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "d-flex flex-column  cover",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "gradient top-c",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }, __jsx("h1", {
    style: {
      fontSize: "40px",
      fontWeight: "500",
      color: "#ffffff"
    },
    className: "no-margin",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 21
    }
  }, counter), __jsx("h5", {
    style: {
      fontSize: "24px",
      color: "#ffffff"
    },
    className: "no-margin",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 21
    }
  }, "Contador"), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 1
    }
  }), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_3__["MDBBtn"], {
    onClick: increaseCounter,
    color: "#f5f5f5",
    style: {
      borderRadius: "15px",
      border: "none",
      margin: "0px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 21
    }
  }, __jsx(react_icons_ri__WEBPACK_IMPORTED_MODULE_4__["RiAddLine"], {
    style: {
      fontSize: "72px",
      color: "#423ed3"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 25
    }
  }))), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 23
    }
  })), __jsx("div", {
    style: {
      height: "200px",
      width: "100%"
    },
    className: "flex-c",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_3__["MDBBtn"], {
    style: {
      width: "90%",
      margin: '0px',
      maxWidth: "317px"
    },
    onClick: () => {
      _lib_firebase__WEBPACK_IMPORTED_MODULE_2__["default"].auth().signOut();
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }, "Cerrar Sesi\xF3n")));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hook-form */ "react-hook-form");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/firebase */ "./lib/firebase.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mdbreact */ "mdbreact");
/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mdbreact__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_auth_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/auth/auth */ "./components/auth/auth.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/Users/josephatreyes/Documents/GitHub/lernit-prueba/pages/login.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const InputStyle = {
  minWidth: "150px",
  border: ".5px solid #efefef",
  padding: " .5rem",
  width: "300px",
  height: "35px",
  fontSize: "15px",
  color: "black"
};
const flex = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100vh",
  flexDirection: "column"
};

const validate = values => {
  const errors = {};

  if (!values.password) {
    errors.password = 'Requerido';
  } else if (values.password.length < 5) {
    errors.password = 'Debe ser de almenos 6 caracteres';
  }

  if (!values.email) {
    errors.email = 'Requerido';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Email invalido';
  }

  return errors;
};

const Login = props => {
  const {
    register,
    handleSubmit,
    watch,
    errors
  } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_1__["useForm"])();
  const {
    0: signUpMode,
    1: setSignUpMode
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const formRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const {
    currentUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_components_auth_auth__WEBPACK_IMPORTED_MODULE_5__["AuthContext"]);

  const notify = type => {
    react_toastify__WEBPACK_IMPORTED_MODULE_7__["toast"].error('Error message', {
      closeButton: false
    });
  };

  const submitForm = async data => {
    if (signUpMode) {
      _lib_firebase__WEBPACK_IMPORTED_MODULE_2__["default"].auth().createUserWithEmailAndPassword(data.email, data.password).then(user => {
        let id = user.user.uid;
        _lib_firebase__WEBPACK_IMPORTED_MODULE_2__["default"].database().ref("/counters/" + id).set({
          counter: 0
        });
      }).catch(error => {
        console.log("ERROR");
        react_toastify__WEBPACK_IMPORTED_MODULE_7__["toast"].error(error.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        });
      });
    } else {
      try {
        await _lib_firebase__WEBPACK_IMPORTED_MODULE_2__["default"].auth().signInWithEmailAndPassword(data.email, data.password);
        router.push("/");
      } catch (error) {
        react_toastify__WEBPACK_IMPORTED_MODULE_7__["toast"].error(error.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        });
      }
    }

    setSignUpMode(false);
  };

  const formik = Object(formik__WEBPACK_IMPORTED_MODULE_6__["useFormik"])({
    initialValues: {
      email: '',
      password: ''
    },
    validate,
    onSubmit: values => {
      submitForm(values);
    }
  });

  const SignUp = () => {
    setSignUpMode(true);
    formik.handleSubmit();
  };

  return __jsx("div", {
    style: flex,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 9
    }
  }, __jsx("div", {
    style: {
      textAlign: "left",
      width: "320px",
      marginBottom: "40px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 13
    }
  }, __jsx("h1", {
    style: {
      fontWeight: "500",
      color: "#4B515D",
      marginBottom: "5px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 17
    }
  }, "We are ", __jsx("span", {
    style: {
      color: "#4239cd"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 28
    }
  }, "Lernit")), __jsx("p", {
    style: {
      marginTop: "0px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 17
    }
  }, "Mejora tu experiencia de aprendizaje")), __jsx("form", {
    ref: formRef,
    style: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "100px"
    },
    onSubmit: formik.handleSubmit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 13
    }
  }, __jsx("input", {
    value: formik.values.email,
    onChange: formik.handleChange,
    style: InputStyle,
    placeholder: "correo electr\xF3nico",
    name: "email",
    ref: register(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 17
    }
  }), formik.errors.email ? __jsx("div", {
    className: "errors",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 40
    }
  }, formik.errors.email) : null, __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 17
    }
  }), __jsx("input", {
    value: formik.values.password,
    onChange: formik.handleChange,
    type: "password",
    style: InputStyle,
    placeholder: "contrase\xF1a",
    name: "password",
    ref: register({
      required: true
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 17
    }
  }), formik.errors.password && __jsx("div", {
    className: "errors",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 44
    }
  }, formik.errors.password), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 17
    }
  }), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 17
    }
  }), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 17
    }
  }), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_4__["MDBBtn"], {
    style: {
      width: "317px",
      background: "#4B515D"
    },
    type: "submit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 17
    }
  }, "Iniciar Sesi\xF3n"), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_4__["MDBBtn"], {
    style: {
      width: "317px",
      marginTop: "40px",
      background: "#4B515D"
    },
    onClick: SignUp,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 17
    }
  }, "Crear Cuenta")));
};

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/josephatreyes/Documents/GitHub/lernit-prueba/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/auth");

/***/ }),

/***/ "firebase/database":
/*!************************************!*\
  !*** external "firebase/database" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/database");

/***/ }),

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),

/***/ "mdbreact":
/*!***************************!*\
  !*** external "mdbreact" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mdbreact");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-hook-form":
/*!**********************************!*\
  !*** external "react-hook-form" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-hook-form");

/***/ }),

/***/ "react-icons/ri":
/*!*********************************!*\
  !*** external "react-icons/ri" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/ri");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map