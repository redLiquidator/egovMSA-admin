"use strict";
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/pages/_app/index.tsx":
/*!**********************************!*\
  !*** ./src/pages/_app/index.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_git_egovframe_msa_edu_frontend_admin_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_git_egovframe_msa_edu_frontend_admin_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_git_egovframe_msa_edu_frontend_admin_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_git_egovframe_msa_edu_frontend_admin_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_git_egovframe_msa_edu_frontend_admin_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var C_Users_git_egovframe_msa_edu_frontend_admin_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! recoil */ "./node_modules/recoil/es/recoil.js");
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! notistack */ "./node_modules/notistack/dist/notistack.esm.js");
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../styles/theme */ "./src/styles/theme.ts");
/* harmony import */ var _components_App_App__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/App/App */ "./src/components/App/App.tsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _libs_i18n__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../libs/i18n */ "./src/libs/i18n.ts");
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next-i18next */ "./node_modules/next-i18next/dist/esm/index.js");
/* harmony import */ var _hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../hooks/useLocalStorage */ "./src/hooks/useLocalStorage.ts");
/* harmony import */ var _constants_env__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../constants/env */ "./src/constants/env.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../constants */ "./src/constants/index.ts");
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-cookie */ "./node_modules/react-cookie/es6/index.js");
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-datepicker/dist/react-datepicker.css */ "./node_modules/react-datepicker/dist/react-datepicker.css");
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_17__);
/* module decorator */ module = __webpack_require__.hmd(module);






var _jsxFileName = "C:\\Users\\\uC774\uC9C4\uC8FC\\git\\egovframe-msa-edu\\frontend\\admin\\src\\pages\\_app\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_git_egovframe_msa_edu_frontend_admin_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

















// axios 기본 설정 true->false 20240607
(axios__WEBPACK_IMPORTED_MODULE_11___default().defaults.headers.common)[_constants__WEBPACK_IMPORTED_MODULE_16__.CUSTOM_HEADER_SITE_ID_KEY] = _constants_env__WEBPACK_IMPORTED_MODULE_15__.SITE_ID;
(axios__WEBPACK_IMPORTED_MODULE_11___default().defaults.baseURL) = _constants__WEBPACK_IMPORTED_MODULE_16__.BASE_URL;
(axios__WEBPACK_IMPORTED_MODULE_11___default().defaults.withCredentials) = false;

var MyApp = function MyApp(props) {
  _s();

  var Component = props.Component,
      pageProps = props.pageProps;
  /**
   * locales
   */

  var _useTranslation = (0,next_i18next__WEBPACK_IMPORTED_MODULE_13__.useTranslation)(),
      i18n = _useTranslation.i18n;

  var _useLocalStorage = (0,_hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_14__.useLocalStorage)('locale', i18n.language),
      _useLocalStorage2 = (0,C_Users_git_egovframe_msa_edu_frontend_admin_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__.default)(_useLocalStorage, 2),
      storedValue = _useLocalStorage2[0],
      setValue = _useLocalStorage2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    if (storedValue !== i18n.language) {
      i18n.changeLanguage(storedValue);
    }
  }, [i18n, storedValue]);
  /**
   * @TODO
   * 테마 선택시 사용 (언제??)
   */

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(_styles_theme__WEBPACK_IMPORTED_MODULE_9__.default),
      selectTheme = _useState[0],
      setSelectTheme = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    // Remove the server-side injected CSS.
    var jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(recoil__WEBPACK_IMPORTED_MODULE_7__.RecoilRoot, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_18__.ThemeProvider, {
      theme: selectTheme,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_6___default()), {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("link", {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("meta", {
          name: "viewport",
          content: "minimum-scale=1, initial-scale=1, width=device-width"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("link", {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_19__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(notistack__WEBPACK_IMPORTED_MODULE_8__.SnackbarProvider, {
        maxSnack: 3,
        iconVariant: {
          success: '✅ ',
          error: '✖ ',
          warning: '⚠ ',
          info: 'ℹ️ '
        },
        autoHideDuration: 2000,
        preventDuplicate: true,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_cookie__WEBPACK_IMPORTED_MODULE_20__.CookiesProvider, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_App_App__WEBPACK_IMPORTED_MODULE_10__.default, _objectSpread({
            component: Component
          }, pageProps), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 64,
    columnNumber: 5
  }, _this);
};

_s(MyApp, "pxG5i331obiO9lEYArTtNIQt6d8=", false, function () {
  return [next_i18next__WEBPACK_IMPORTED_MODULE_13__.useTranslation, _hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_14__.useLocalStorage];
});

_c = MyApp;

MyApp.getInitialProps = /*#__PURE__*/function () {
  var _ref = (0,C_Users_git_egovframe_msa_edu_frontend_admin_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_git_egovframe_msa_edu_frontend_admin_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(context) {
    var Component, ctx, router, pageProps, locale, componentInitialProps;
    return C_Users_git_egovframe_msa_edu_frontend_admin_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            Component = context.Component, ctx = context.ctx, router = context.router;
            pageProps = {};
            locale = router.locale;
            (axios__WEBPACK_IMPORTED_MODULE_11___default().defaults.headers.common)[_constants__WEBPACK_IMPORTED_MODULE_16__.CUSTOM_HEADER_SITE_ID_KEY] = _constants_env__WEBPACK_IMPORTED_MODULE_15__.SITE_ID;

            if (!Component.getInitialProps) {
              _context.next = 9;
              break;
            }

            _context.next = 7;
            return Component.getInitialProps(ctx);

          case 7:
            componentInitialProps = _context.sent;

            if (componentInitialProps) {
              pageProps = componentInitialProps;
            }

          case 9:
            __webpack_require__.g.__localeId__ = locale;
            pageProps.pathname = ctx.pathname;
            return _context.abrupt("return", {
              pageProps: pageProps
            });

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (_c2 = (0,next_i18next__WEBPACK_IMPORTED_MODULE_13__.appWithTranslation)(MyApp));

var _c, _c2;

$RefreshReg$(_c, "MyApp");
$RefreshReg$(_c2, "%default%");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4wZjcyZGQ5N2YxMGVlZjJjZTk0MC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQVFBO0FBQ0FVLHVFQUFBLENBQThCTSxrRUFBOUIsSUFBMkRGLG9EQUEzRDtBQUNBSixnRUFBQSxHQUF5QkssaURBQXpCO0FBQ0FMLHdFQUFBLEdBQWlDLEtBQWpDOztBQUVBLElBQU1hLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNDLEtBQUQsRUFBcUI7QUFBQTs7QUFBQSxNQUN6QkMsU0FEeUIsR0FDQUQsS0FEQSxDQUN6QkMsU0FEeUI7QUFBQSxNQUNkQyxTQURjLEdBQ0FGLEtBREEsQ0FDZEUsU0FEYztBQUdqQztBQUNGO0FBQ0E7O0FBTG1DLHdCQU1oQmQsNkRBQWMsRUFORTtBQUFBLE1BTXpCZSxJQU55QixtQkFNekJBLElBTnlCOztBQUFBLHlCQU9EZCx3RUFBZSxDQUFDLFFBQUQsRUFBV2MsSUFBSSxDQUFDQyxRQUFoQixDQVBkO0FBQUE7QUFBQSxNQU8xQkMsV0FQMEI7QUFBQSxNQU9iQyxRQVBhOztBQVFqQzdCLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUk0QixXQUFXLEtBQUtGLElBQUksQ0FBQ0MsUUFBekIsRUFBbUM7QUFDakNELE1BQUFBLElBQUksQ0FBQ0ksY0FBTCxDQUFvQkYsV0FBcEI7QUFDRDtBQUNGLEdBSlEsRUFJTixDQUFDRixJQUFELEVBQU9FLFdBQVAsQ0FKTSxDQUFUO0FBTUE7QUFDRjtBQUNBO0FBQ0E7O0FBakJtQyxrQkFrQkszQiwrQ0FBUSxDQUFRTSxrREFBUixDQWxCYjtBQUFBLE1Ba0IxQndCLFdBbEIwQjtBQUFBLE1Ba0JiQyxjQWxCYTs7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LGlFQUFrQixDQUFDWSxLQUFELENBQWpDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9fYXBwL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IE5leHRQYWdlQ29udGV4dCB9IGZyb20gJ25leHQnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHsgQXBwQ29udGV4dCwgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCdcclxuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lJ1xyXG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IHsgUmVjb2lsUm9vdCB9IGZyb20gJ3JlY29pbCdcclxuaW1wb3J0IHsgU25hY2tiYXJQcm92aWRlciB9IGZyb20gJ25vdGlzdGFjaydcclxuXHJcbmltcG9ydCB0aGVtZSBmcm9tICdAc3R5bGVzL3RoZW1lJ1xyXG5pbXBvcnQgZGFya1RoZW1lIGZyb20gJ0BzdHlsZXMvZGFya1RoZW1lJ1xyXG5pbXBvcnQgQXBwIGZyb20gJ0Bjb21wb25lbnRzL0FwcC9BcHAnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0ICdAbGlicy9pMThuJ1xyXG5pbXBvcnQgeyBhcHBXaXRoVHJhbnNsYXRpb24sIHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAnbmV4dC1pMThuZXh0J1xyXG5pbXBvcnQgeyB1c2VMb2NhbFN0b3JhZ2UgfSBmcm9tICdAaG9va3MvdXNlTG9jYWxTdG9yYWdlJ1xyXG5pbXBvcnQgeyBTSVRFX0lEIH0gZnJvbSAnQGNvbnN0YW50cy9lbnYnXHJcbmltcG9ydCB7IEJBU0VfVVJMLCBDVVNUT01fSEVBREVSX1NJVEVfSURfS0VZIH0gZnJvbSAnQGNvbnN0YW50cydcclxuaW1wb3J0IHsgQ29va2llc1Byb3ZpZGVyIH0gZnJvbSAncmVhY3QtY29va2llJ1xyXG5cclxuaW1wb3J0ICdyZWFjdC1kYXRlcGlja2VyL2Rpc3QvcmVhY3QtZGF0ZXBpY2tlci5jc3MnXHJcblxyXG5leHBvcnQgdHlwZSBQYWdlUHJvcHMgPSB7XHJcbiAgcGF0aG5hbWU/OiBzdHJpbmdcclxuICBxdWVyeT86IE5leHRQYWdlQ29udGV4dFsncXVlcnknXVxyXG4gIHJlcT86IE5leHRQYWdlQ29udGV4dFsncmVxJ11cclxufVxyXG5cclxuLy8gYXhpb3Mg6riw67O4IOyEpOyglSB0cnVlLT5mYWxzZSAyMDI0MDYwN1xyXG5heGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vbltDVVNUT01fSEVBREVSX1NJVEVfSURfS0VZXSA9IFNJVEVfSURcclxuYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9IEJBU0VfVVJMXHJcbmF4aW9zLmRlZmF1bHRzLndpdGhDcmVkZW50aWFscyA9IGZhbHNlXHJcblxyXG5jb25zdCBNeUFwcCA9IChwcm9wczogQXBwUHJvcHMpID0+IHtcclxuICBjb25zdCB7IENvbXBvbmVudCwgcGFnZVByb3BzIH0gPSBwcm9wc1xyXG5cclxuICAvKipcclxuICAgKiBsb2NhbGVzXHJcbiAgICovXHJcbiAgY29uc3QgeyBpMThuIH0gPSB1c2VUcmFuc2xhdGlvbigpXHJcbiAgY29uc3QgW3N0b3JlZFZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VMb2NhbFN0b3JhZ2UoJ2xvY2FsZScsIGkxOG4ubGFuZ3VhZ2UpXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChzdG9yZWRWYWx1ZSAhPT0gaTE4bi5sYW5ndWFnZSkge1xyXG4gICAgICBpMThuLmNoYW5nZUxhbmd1YWdlKHN0b3JlZFZhbHVlKVxyXG4gICAgfVxyXG4gIH0sIFtpMThuLCBzdG9yZWRWYWx1ZV0pXHJcblxyXG4gIC8qKlxyXG4gICAqIEBUT0RPXHJcbiAgICog7YWM66eIIOyEoO2DneyLnCDsgqzsmqkgKOyWuOygnD8/KVxyXG4gICAqL1xyXG4gIGNvbnN0IFtzZWxlY3RUaGVtZSwgc2V0U2VsZWN0VGhlbWVdID0gdXNlU3RhdGU8VGhlbWU+KHRoZW1lKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gUmVtb3ZlIHRoZSBzZXJ2ZXItc2lkZSBpbmplY3RlZCBDU1MuXHJcbiAgICBjb25zdCBqc3NTdHlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjanNzLXNlcnZlci1zaWRlJylcclxuICAgIGlmIChqc3NTdHlsZXMpIHtcclxuICAgICAganNzU3R5bGVzLnBhcmVudEVsZW1lbnQhLnJlbW92ZUNoaWxkKGpzc1N0eWxlcylcclxuICAgIH1cclxuICB9LCBbXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWNvaWxSb290PlxyXG4gICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17c2VsZWN0VGhlbWV9PlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS94LWljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCI+PC9saW5rPlxyXG4gICAgICAgICAgPG1ldGFcclxuICAgICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcclxuICAgICAgICAgICAgY29udGVudD1cIm1pbmltdW0tc2NhbGU9MSwgaW5pdGlhbC1zY2FsZT0xLCB3aWR0aD1kZXZpY2Utd2lkdGhcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxsaW5rXHJcbiAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9pY29uP2ZhbWlseT1NYXRlcmlhbCtJY29uc1wiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICB7LyogQ3NzQmFzZWxpbmUga2lja3N0YXJ0IGFuIGVsZWdhbnQsIGNvbnNpc3RlbnQsIGFuZCBzaW1wbGUgYmFzZWxpbmUgdG8gYnVpbGQgdXBvbi4gKi99XHJcbiAgICAgICAgPENzc0Jhc2VsaW5lIC8+XHJcblxyXG4gICAgICAgIDxTbmFja2JhclByb3ZpZGVyXHJcbiAgICAgICAgICBtYXhTbmFjaz17M31cclxuICAgICAgICAgIGljb25WYXJpYW50PXt7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6ICfinIUgJyxcclxuICAgICAgICAgICAgZXJyb3I6ICfinJYgJyxcclxuICAgICAgICAgICAgd2FybmluZzogJ+KaoCAnLFxyXG4gICAgICAgICAgICBpbmZvOiAn4oS577iPICcsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgYXV0b0hpZGVEdXJhdGlvbj17MjAwMH1cclxuICAgICAgICAgIHByZXZlbnREdXBsaWNhdGU9e3RydWV9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPENvb2tpZXNQcm92aWRlcj5cclxuICAgICAgICAgICAgPEFwcCBjb21wb25lbnQ9e0NvbXBvbmVudH0gey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICAgIDwvQ29va2llc1Byb3ZpZGVyPlxyXG4gICAgICAgIDwvU25hY2tiYXJQcm92aWRlcj5cclxuICAgICAgPC9UaGVtZVByb3ZpZGVyPlxyXG4gICAgPC9SZWNvaWxSb290PlxyXG4gIClcclxufVxyXG5cclxuTXlBcHAuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGNvbnRleHQ6IEFwcENvbnRleHQpID0+IHtcclxuICBjb25zdCB7IENvbXBvbmVudCwgY3R4LCByb3V0ZXIgfSA9IGNvbnRleHRcclxuICBsZXQgcGFnZVByb3BzOiBQYWdlUHJvcHMgPSB7fVxyXG4gIGNvbnN0IGxvY2FsZSA9IHJvdXRlci5sb2NhbGVcclxuXHJcbiAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bQ1VTVE9NX0hFQURFUl9TSVRFX0lEX0tFWV0gPSBTSVRFX0lEXHJcblxyXG4gIGlmIChDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKSB7XHJcbiAgICBjb25zdCBjb21wb25lbnRJbml0aWFsUHJvcHMgPSBhd2FpdCBDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKGN0eClcclxuICAgIGlmIChjb21wb25lbnRJbml0aWFsUHJvcHMpIHtcclxuICAgICAgcGFnZVByb3BzID0gY29tcG9uZW50SW5pdGlhbFByb3BzXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnbG9iYWwuX19sb2NhbGVJZF9fID0gbG9jYWxlXHJcbiAgcGFnZVByb3BzLnBhdGhuYW1lID0gY3R4LnBhdGhuYW1lXHJcblxyXG4gIHJldHVybiB7IHBhZ2VQcm9wcyB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFwcFdpdGhUcmFuc2xhdGlvbihNeUFwcClcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJIZWFkIiwiVGhlbWVQcm92aWRlciIsIkNzc0Jhc2VsaW5lIiwiUmVjb2lsUm9vdCIsIlNuYWNrYmFyUHJvdmlkZXIiLCJ0aGVtZSIsIkFwcCIsImF4aW9zIiwiYXBwV2l0aFRyYW5zbGF0aW9uIiwidXNlVHJhbnNsYXRpb24iLCJ1c2VMb2NhbFN0b3JhZ2UiLCJTSVRFX0lEIiwiQkFTRV9VUkwiLCJDVVNUT01fSEVBREVSX1NJVEVfSURfS0VZIiwiQ29va2llc1Byb3ZpZGVyIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiY29tbW9uIiwiYmFzZVVSTCIsIndpdGhDcmVkZW50aWFscyIsIk15QXBwIiwicHJvcHMiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJpMThuIiwibGFuZ3VhZ2UiLCJzdG9yZWRWYWx1ZSIsInNldFZhbHVlIiwiY2hhbmdlTGFuZ3VhZ2UiLCJzZWxlY3RUaGVtZSIsInNldFNlbGVjdFRoZW1lIiwianNzU3R5bGVzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicGFyZW50RWxlbWVudCIsInJlbW92ZUNoaWxkIiwic3VjY2VzcyIsImVycm9yIiwid2FybmluZyIsImluZm8iLCJnZXRJbml0aWFsUHJvcHMiLCJjb250ZXh0IiwiY3R4Iiwicm91dGVyIiwibG9jYWxlIiwiY29tcG9uZW50SW5pdGlhbFByb3BzIiwiZ2xvYmFsIiwiX19sb2NhbGVJZF9fIiwicGF0aG5hbWUiXSwic291cmNlUm9vdCI6IiJ9