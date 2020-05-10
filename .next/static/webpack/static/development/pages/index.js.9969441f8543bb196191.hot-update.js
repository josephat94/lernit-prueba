webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/react-hook-form.es.js");
/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/firebase */ "./lib/firebase.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mdbreact */ "./node_modules/mdbreact/dist/mdbreact.esm.js");
/* harmony import */ var _components_auth_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/auth/auth */ "./components/auth/auth.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");


var _this = undefined,
    _jsxFileName = "/Users/josephatreyes/Documents/GitHub/lernit-prueba/pages/login.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









var InputStyle = {
  minWidth: "150px",
  border: ".5px solid #efefef",
  padding: " .5rem",
  width: "300px",
  height: "35px",
  fontSize: "15px",
  color: "black"
};
var flex = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100vh",
  flexDirection: "column"
};

var validate = function validate(values) {
  var errors = {};

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

var Login = function Login(props) {
  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_2__["useForm"])(),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit,
      watch = _useForm.watch,
      errors = _useForm.errors;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      signUpMode = _useState[0],
      setSignUpMode = _useState[1];

  var formRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_components_auth_auth__WEBPACK_IMPORTED_MODULE_6__["AuthContext"]),
      currentUser = _useContext.currentUser;

  var notify = function notify(type) {
    react_toastify__WEBPACK_IMPORTED_MODULE_8__["toast"].error('Error message', {
      closeButton: false
    });
  };

  var submitForm = function submitForm(data) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function submitForm$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!signUpMode) {
              _context.next = 4;
              break;
            }

            _lib_firebase__WEBPACK_IMPORTED_MODULE_3__["default"].auth().createUserWithEmailAndPassword(data.email, data.password).then(function (user) {
              var id = user.user.uid;
              _lib_firebase__WEBPACK_IMPORTED_MODULE_3__["default"].database().ref("/counters/" + id).set({
                counter: 0
              });
            })["catch"](function (error) {
              console.log("ERROR");
              react_toastify__WEBPACK_IMPORTED_MODULE_8__["toast"].error(error.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
              });
            });
            _context.next = 13;
            break;

          case 4:
            _context.prev = 4;
            _context.next = 7;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_lib_firebase__WEBPACK_IMPORTED_MODULE_3__["default"].auth().signInWithEmailAndPassword(data.email, data.password));

          case 7:
            router.push("/");
            _context.next = 13;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](4);
            react_toastify__WEBPACK_IMPORTED_MODULE_8__["toast"].error(_context.t0.message, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined
            });

          case 13:
            setSignUpMode(false);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[4, 10]], Promise);
  };

  var formik = Object(formik__WEBPACK_IMPORTED_MODULE_7__["useFormik"])({
    initialValues: {
      email: '',
      password: ''
    },
    validate: validate,
    onSubmit: function onSubmit(values) {
      submitForm(values);
    }
  });

  var SignUp = function SignUp() {
    setSignUpMode(true);
    formik.handleSubmit();
  };

  return __jsx("div", {
    style: flex,
    __self: _this,
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
    __self: _this,
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
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 17
    }
  }, "We are ", __jsx("span", {
    style: {
      color: "#4239cd"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 28
    }
  }, "Lernit")), __jsx("p", {
    style: {
      marginTop: "0px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 17
    }
  }, "Mejora tu experiencia de aprendizaje")), __jsx("form", {
    autoComplete: "nope",
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
    __self: _this,
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
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 17
    }
  }), formik.errors.email ? __jsx("div", {
    className: "errors",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 40
    }
  }, formik.errors.email) : null, __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
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
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 17
    }
  }), formik.errors.password && __jsx("div", {
    className: "errors",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 44
    }
  }, formik.errors.password), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 17
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 17
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 17
    }
  }), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBBtn"], {
    style: {
      width: "317px",
      background: "#4B515D"
    },
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 17
    }
  }, "Iniciar Sesi\xF3n"), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_5__["MDBBtn"], {
    style: {
      width: "317px",
      marginTop: "40px",
      background: "#4B515D"
    },
    onClick: SignUp,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 17
    }
  }, "Crear Cuenta")));
};

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ })

})
//# sourceMappingURL=index.js.9969441f8543bb196191.hot-update.js.map