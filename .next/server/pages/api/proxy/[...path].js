"use strict";
(() => {
var exports = {};
exports.id = "pages/api/proxy/[...path]";
exports.ids = ["pages/api/proxy/[...path]"];
exports.modules = {

/***/ "./src/constants/env.ts":
/*!******************************!*\
  !*** ./src/constants/env.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEV": () => (/* binding */ DEV),
/* harmony export */   "PORT": () => (/* binding */ PORT),
/* harmony export */   "PROXY_HOST": () => (/* binding */ PROXY_HOST),
/* harmony export */   "TZ": () => (/* binding */ TZ),
/* harmony export */   "SERVER_API_URL": () => (/* binding */ SERVER_API_URL),
/* harmony export */   "CLAIM_NAME": () => (/* binding */ CLAIM_NAME),
/* harmony export */   "AUTH_USER_ID": () => (/* binding */ AUTH_USER_ID),
/* harmony export */   "REFRESH_TOKEN": () => (/* binding */ REFRESH_TOKEN),
/* harmony export */   "ACCESS_TOKEN": () => (/* binding */ ACCESS_TOKEN),
/* harmony export */   "SITE_ID": () => (/* binding */ SITE_ID)
/* harmony export */ });
const DEV = true;
const PORT = "3000" || 0;
const PROXY_HOST = "http://localhost:3000" || 0;
const TZ = process.env.TZ || 'Asia/Seoul';
const SERVER_API_URL = "http://localhost:8000";
const CLAIM_NAME = process.env.CLAIM_NAME || 'Authorization';
const AUTH_USER_ID = process.env.AUTH_USER_ID || 'token-id';
const REFRESH_TOKEN = process.env.REFRESH_TOKEN || 'refresh-token';
const ACCESS_TOKEN = process.env.ACCESS_TOKEN || 'access-token';
const SITE_ID = "1";

/***/ }),

/***/ "./src/constants/index.ts":
/*!********************************!*\
  !*** ./src/constants/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DRAWER_WIDTH": () => (/* binding */ DRAWER_WIDTH),
/* harmony export */   "GRID_ROW_HEIGHT": () => (/* binding */ GRID_ROW_HEIGHT),
/* harmony export */   "GRID_PAGE_SIZE": () => (/* binding */ GRID_PAGE_SIZE),
/* harmony export */   "GRID_ROWS_PER_PAGE_OPTION": () => (/* binding */ GRID_ROWS_PER_PAGE_OPTION),
/* harmony export */   "DEFAULT_ERROR_MESSAGE": () => (/* binding */ DEFAULT_ERROR_MESSAGE),
/* harmony export */   "DEFAULT_APP_NAME": () => (/* binding */ DEFAULT_APP_NAME),
/* harmony export */   "EDITOR_LOAD_IMAGE_URL": () => (/* binding */ EDITOR_LOAD_IMAGE_URL),
/* harmony export */   "DEFAULT_ACCEPT_FILE_EXT": () => (/* binding */ DEFAULT_ACCEPT_FILE_EXT),
/* harmony export */   "BASE_URL": () => (/* binding */ BASE_URL),
/* harmony export */   "ADMIN_LOGO_PATH": () => (/* binding */ ADMIN_LOGO_PATH),
/* harmony export */   "ADMIN_LOGO_TEXT": () => (/* binding */ ADMIN_LOGO_TEXT),
/* harmony export */   "CUSTOM_HEADER_SITE_ID_KEY": () => (/* binding */ CUSTOM_HEADER_SITE_ID_KEY),
/* harmony export */   "ACCESS_LOG_TIMEOUT": () => (/* binding */ ACCESS_LOG_TIMEOUT),
/* harmony export */   "ACCESS_LOG_ID": () => (/* binding */ ACCESS_LOG_ID),
/* harmony export */   "PUBLIC_PAGES": () => (/* binding */ PUBLIC_PAGES)
/* harmony export */ });
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./env */ "./src/constants/env.ts");

const DRAWER_WIDTH = 220;
const GRID_ROW_HEIGHT = 40;
const GRID_PAGE_SIZE = 10;
const GRID_ROWS_PER_PAGE_OPTION = [10, 20, 50, 100];
const DEFAULT_ERROR_MESSAGE = 'Sorry.. Something Wrong...😱';
const DEFAULT_APP_NAME = 'MSA Admin Template';
const EDITOR_LOAD_IMAGE_URL = '/portal-service/api/v1/images/editor/'; // .htm, .html, .txt, .png/.jpg/etc, .pdf, .xlsx. .xls

const DEFAULT_ACCEPT_FILE_EXT = 'text/html, text/plain, image/*, .pdf, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel';
const BASE_URL = `${_env__WEBPACK_IMPORTED_MODULE_0__.PROXY_HOST}/server`;
const ADMIN_LOGO_PATH = '/images/adminLogo.png';
const ADMIN_LOGO_TEXT = 'MSA Admin';
const CUSTOM_HEADER_SITE_ID_KEY = 'X-Site-Id';
const ACCESS_LOG_TIMEOUT = 30 * 60 * 1000;
const ACCESS_LOG_ID = 'accessLogId';
const PUBLIC_PAGES = ['/404', '/', '/reload', '/_error'];

/***/ }),

/***/ "./src/pages/api/proxy/[...path].ts":
/*!******************************************!*\
  !*** ./src/pages/api/proxy/[...path].ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../constants */ "./src/constants/index.ts");
/* harmony import */ var _constants_env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants/env */ "./src/constants/env.ts");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cookies */ "cookies");
/* harmony import */ var cookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cookies__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! url */ "url");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_4__);





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {
  const pathname = url__WEBPACK_IMPORTED_MODULE_4___default().pathToFileURL(req.url).pathname;
  let isLogin = pathname === '/api/proxy/user-service/login';
  req.url = req.url.replace(/^\/api\/proxy/, '');

  if (pathname.indexOf('undefined') > -1) {
    res.status(500).json({
      message: _constants__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_ERROR_MESSAGE
    });
    res.end();
    return;
  }

  let headers = {
    'Content-Type': 'application/json'
  };
  headers[_constants__WEBPACK_IMPORTED_MODULE_0__.CUSTOM_HEADER_SITE_ID_KEY] = _constants_env__WEBPACK_IMPORTED_MODULE_1__.SITE_ID; //silent refresh

  if (pathname.indexOf('/refresh') > -1) {
    isLogin = true;
    const cookies = new (cookies__WEBPACK_IMPORTED_MODULE_3___default())(req, res);
    headers[_constants_env__WEBPACK_IMPORTED_MODULE_1__.CLAIM_NAME] = cookies.get(_constants_env__WEBPACK_IMPORTED_MODULE_1__.REFRESH_TOKEN);
    req.url = '/user-service/api/v1/users/token/refresh';

    if (!headers[_constants_env__WEBPACK_IMPORTED_MODULE_1__.CLAIM_NAME] || headers[_constants_env__WEBPACK_IMPORTED_MODULE_1__.CLAIM_NAME] === '') {
      console.warn(`can't refresh`);
      res.status(401).json({
        message: 'Invalid Credentials 🥺'
      });
      res.end();
      return;
    }
  } // server API 에 쿠키를 전달하지 않음.


  req.headers.cookie = '';
  req.headers[_constants__WEBPACK_IMPORTED_MODULE_0__.CUSTOM_HEADER_SITE_ID_KEY] = _constants_env__WEBPACK_IMPORTED_MODULE_1__.SITE_ID;
  console.info(`req.url : ${req.url}`);

  try {
    const result = await fetch(`${_constants_env__WEBPACK_IMPORTED_MODULE_1__.SERVER_API_URL}${req.url}`, {
      method: req.method,
      headers,
      body: req.body
    });

    if (result) {
      const refreshToken = result.headers.get(_constants_env__WEBPACK_IMPORTED_MODULE_1__.REFRESH_TOKEN);
      const accessToken = result.headers.get(_constants_env__WEBPACK_IMPORTED_MODULE_1__.ACCESS_TOKEN);
      const userId = result.headers.get(_constants_env__WEBPACK_IMPORTED_MODULE_1__.AUTH_USER_ID);
      const cookies = new (cookies__WEBPACK_IMPORTED_MODULE_3___default())(req, res);
      cookies.set(_constants_env__WEBPACK_IMPORTED_MODULE_1__.REFRESH_TOKEN, refreshToken, {
        httpOnly: true,
        sameSite: 'lax' //CSRF protection

      });

      if (accessToken) {
        let payload = {};
        payload[_constants_env__WEBPACK_IMPORTED_MODULE_1__.ACCESS_TOKEN] = accessToken;
        payload[_constants_env__WEBPACK_IMPORTED_MODULE_1__.AUTH_USER_ID] = userId;
        (axios__WEBPACK_IMPORTED_MODULE_2___default().defaults.headers.common)[_constants_env__WEBPACK_IMPORTED_MODULE_1__.CLAIM_NAME] = accessToken;
        (axios__WEBPACK_IMPORTED_MODULE_2___default().defaults.headers.common)[_constants_env__WEBPACK_IMPORTED_MODULE_1__.AUTH_USER_ID] = userId;
        res.status(200).json(payload);
      } else {
        res.status(401).json({
          message: 'Invalid Credentials 🥺'
        });
      }
    } else {
      res.status(401).json({
        message: 'Invalid Credentials 🥺'
      });
    }

    res.end();
  } catch (error) {
    res.status(500).json({
      message: _constants__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_ERROR_MESSAGE,
      error
    });
    res.end();
  }
});

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "cookies":
/*!**************************!*\
  !*** external "cookies" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("cookies");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/proxy/[...path].ts"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL3Byb3h5L1suLi5wYXRoXS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLE1BQU1BLEdBQUcsT0FBVDtBQUNBLE1BQU1DLElBQUksR0FBR0MsTUFBQSxJQUFvQixDQUFqQztBQUNBLE1BQU1FLFVBQVUsR0FBR0YsdUJBQUEsSUFBMkIsQ0FBOUM7QUFFQSxNQUFNRyxFQUFFLEdBQUdILE9BQU8sQ0FBQ0MsR0FBUixDQUFZRSxFQUFaLElBQWtCLFlBQTdCO0FBRUEsTUFBTUMsY0FBYyxHQUFHSix1QkFBdkI7QUFFQSxNQUFNSyxVQUFVLEdBQUdMLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSSxVQUFaLElBQTBCLGVBQTdDO0FBQ0EsTUFBTUMsWUFBWSxHQUFHTixPQUFPLENBQUNDLEdBQVIsQ0FBWUssWUFBWixJQUE0QixVQUFqRDtBQUNBLE1BQU1DLGFBQWEsR0FBR1AsT0FBTyxDQUFDQyxHQUFSLENBQVlNLGFBQVosSUFBNkIsZUFBbkQ7QUFDQSxNQUFNQyxZQUFZLEdBQUdSLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTyxZQUFaLElBQTRCLGNBQWpEO0FBRUEsTUFBTUMsT0FBTyxHQUFHVCxHQUFoQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiUDtBQUVPLE1BQU1VLFlBQVksR0FBRyxHQUFyQjtBQUVBLE1BQU1DLGVBQWUsR0FBRyxFQUF4QjtBQUVBLE1BQU1DLGNBQWMsR0FBRyxFQUF2QjtBQUVBLE1BQU1DLHlCQUF5QixHQUFHLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxFQUFULEVBQWEsR0FBYixDQUFsQztBQUVBLE1BQU1DLHFCQUFxQixHQUFHLDhCQUE5QjtBQUVBLE1BQU1DLGdCQUFnQixHQUFHLG9CQUF6QjtBQUVBLE1BQU1DLHFCQUFxQixHQUFHLHVDQUE5QixFQUVQOztBQUNPLE1BQU1DLHVCQUF1QixHQUNsQyxtSUFESztBQUdBLE1BQU1DLFFBQVEsR0FBSSxHQUFFaEIsNENBQVcsU0FBL0I7QUFFQSxNQUFNaUIsZUFBZSxHQUFHLHVCQUF4QjtBQUVBLE1BQU1DLGVBQWUsR0FBRyxXQUF4QjtBQUVBLE1BQU1DLHlCQUF5QixHQUFHLFdBQWxDO0FBRUEsTUFBTUMsa0JBQWtCLEdBQUcsS0FBSyxFQUFMLEdBQVUsSUFBckM7QUFFQSxNQUFNQyxhQUFhLEdBQUcsYUFBdEI7QUFFQSxNQUFNQyxZQUFZLEdBQUcsQ0FBQyxNQUFELEVBQVMsR0FBVCxFQUFjLFNBQWQsRUFBeUIsU0FBekIsQ0FBckI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQ1A7QUFDQTtBQVFBO0FBQ0E7QUFFQTtBQUVBLGlFQUFlLE9BQU9JLEdBQVAsRUFBNEJDLEdBQTVCLEtBQXFEO0FBQ2xFLFFBQU1DLFFBQVEsR0FBR0gsd0RBQUEsQ0FBa0JDLEdBQUcsQ0FBQ0QsR0FBdEIsRUFBMkJHLFFBQTVDO0FBQ0EsTUFBSUUsT0FBTyxHQUFHRixRQUFRLEtBQUssK0JBQTNCO0FBRUFGLEVBQUFBLEdBQUcsQ0FBQ0QsR0FBSixHQUFVQyxHQUFHLENBQUNELEdBQUosQ0FBUU0sT0FBUixDQUFnQixlQUFoQixFQUFpQyxFQUFqQyxDQUFWOztBQUVBLE1BQUlILFFBQVEsQ0FBQ0ksT0FBVCxDQUFpQixXQUFqQixJQUFnQyxDQUFDLENBQXJDLEVBQXdDO0FBQ3RDTCxJQUFBQSxHQUFHLENBQUNNLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxNQUFBQSxPQUFPLEVBQUV2Qiw2REFBcUJBO0FBQWhDLEtBQXJCO0FBQ0FlLElBQUFBLEdBQUcsQ0FBQ1MsR0FBSjtBQUNBO0FBQ0Q7O0FBRUQsTUFBSUMsT0FBTyxHQUFHO0FBQ1osb0JBQWdCO0FBREosR0FBZDtBQUdBQSxFQUFBQSxPQUFPLENBQUNsQixpRUFBRCxDQUFQLEdBQXFDWixtREFBckMsQ0Fma0UsQ0FpQmxFOztBQUNBLE1BQUlxQixRQUFRLENBQUNJLE9BQVQsQ0FBaUIsVUFBakIsSUFBK0IsQ0FBQyxDQUFwQyxFQUF1QztBQUNyQ0YsSUFBQUEsT0FBTyxHQUFHLElBQVY7QUFDQSxVQUFNUSxPQUFPLEdBQUcsSUFBSWQsZ0RBQUosQ0FBWUUsR0FBWixFQUFpQkMsR0FBakIsQ0FBaEI7QUFDQVUsSUFBQUEsT0FBTyxDQUFDbEMsc0RBQUQsQ0FBUCxHQUFzQm1DLE9BQU8sQ0FBQ0MsR0FBUixDQUFZbEMseURBQVosQ0FBdEI7QUFFQXFCLElBQUFBLEdBQUcsQ0FBQ0QsR0FBSixHQUFVLDBDQUFWOztBQUVBLFFBQUksQ0FBQ1ksT0FBTyxDQUFDbEMsc0RBQUQsQ0FBUixJQUF3QmtDLE9BQU8sQ0FBQ2xDLHNEQUFELENBQVAsS0FBd0IsRUFBcEQsRUFBd0Q7QUFDdERxQyxNQUFBQSxPQUFPLENBQUNDLElBQVIsQ0FBYyxlQUFkO0FBQ0FkLE1BQUFBLEdBQUcsQ0FBQ00sTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLFFBQUFBLE9BQU8sRUFBRTtBQUFYLE9BQXJCO0FBQ0FSLE1BQUFBLEdBQUcsQ0FBQ1MsR0FBSjtBQUNBO0FBQ0Q7QUFDRixHQS9CaUUsQ0FpQ2xFOzs7QUFDQVYsRUFBQUEsR0FBRyxDQUFDVyxPQUFKLENBQVlLLE1BQVosR0FBcUIsRUFBckI7QUFDQWhCLEVBQUFBLEdBQUcsQ0FBQ1csT0FBSixDQUFZbEIsaUVBQVosSUFBeUNaLG1EQUF6QztBQUNBaUMsRUFBQUEsT0FBTyxDQUFDRyxJQUFSLENBQWMsYUFBWWpCLEdBQUcsQ0FBQ0QsR0FBSSxFQUFsQzs7QUFFQSxNQUFJO0FBQ0YsVUFBTW1CLE1BQU0sR0FBRyxNQUFNQyxLQUFLLENBQUUsR0FBRTNDLDBEQUFlLEdBQUV3QixHQUFHLENBQUNELEdBQUksRUFBN0IsRUFBZ0M7QUFDeERxQixNQUFBQSxNQUFNLEVBQUVwQixHQUFHLENBQUNvQixNQUQ0QztBQUV4RFQsTUFBQUEsT0FGd0Q7QUFHeERVLE1BQUFBLElBQUksRUFBRXJCLEdBQUcsQ0FBQ3FCO0FBSDhDLEtBQWhDLENBQTFCOztBQU1BLFFBQUlILE1BQUosRUFBWTtBQUNWLFlBQU1JLFlBQVksR0FBR0osTUFBTSxDQUFDUCxPQUFQLENBQWVFLEdBQWYsQ0FBbUJsQyx5REFBbkIsQ0FBckI7QUFDQSxZQUFNNEMsV0FBVyxHQUFHTCxNQUFNLENBQUNQLE9BQVAsQ0FBZUUsR0FBZixDQUFtQmpDLHdEQUFuQixDQUFwQjtBQUNBLFlBQU00QyxNQUFNLEdBQUdOLE1BQU0sQ0FBQ1AsT0FBUCxDQUFlRSxHQUFmLENBQW1CbkMsd0RBQW5CLENBQWY7QUFDQSxZQUFNa0MsT0FBTyxHQUFHLElBQUlkLGdEQUFKLENBQVlFLEdBQVosRUFBaUJDLEdBQWpCLENBQWhCO0FBRUFXLE1BQUFBLE9BQU8sQ0FBQ2EsR0FBUixDQUFZOUMseURBQVosRUFBMkIyQyxZQUEzQixFQUF5QztBQUN2Q0ksUUFBQUEsUUFBUSxFQUFFLElBRDZCO0FBRXZDQyxRQUFBQSxRQUFRLEVBQUUsS0FGNkIsQ0FFdEI7O0FBRnNCLE9BQXpDOztBQUtBLFVBQUlKLFdBQUosRUFBaUI7QUFDZixZQUFJSyxPQUFPLEdBQUcsRUFBZDtBQUNBQSxRQUFBQSxPQUFPLENBQUNoRCx3REFBRCxDQUFQLEdBQXdCMkMsV0FBeEI7QUFDQUssUUFBQUEsT0FBTyxDQUFDbEQsd0RBQUQsQ0FBUCxHQUF3QjhDLE1BQXhCO0FBQ0EzQixRQUFBQSxzRUFBQSxDQUE4QnBCLHNEQUE5QixJQUE0QzhDLFdBQTVDO0FBQ0ExQixRQUFBQSxzRUFBQSxDQUE4Qm5CLHdEQUE5QixJQUE4QzhDLE1BQTlDO0FBRUF2QixRQUFBQSxHQUFHLENBQUNNLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQm9CLE9BQXJCO0FBQ0QsT0FSRCxNQVFPO0FBQ0wzQixRQUFBQSxHQUFHLENBQUNNLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxVQUFBQSxPQUFPLEVBQUU7QUFBWCxTQUFyQjtBQUNEO0FBQ0YsS0F0QkQsTUFzQk87QUFDTFIsTUFBQUEsR0FBRyxDQUFDTSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsUUFBQUEsT0FBTyxFQUFFO0FBQVgsT0FBckI7QUFDRDs7QUFDRFIsSUFBQUEsR0FBRyxDQUFDUyxHQUFKO0FBQ0QsR0FqQ0QsQ0FpQ0UsT0FBT3FCLEtBQVAsRUFBYztBQUNkOUIsSUFBQUEsR0FBRyxDQUFDTSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsTUFBQUEsT0FBTyxFQUFFdkIsNkRBQVg7QUFBa0M2QyxNQUFBQTtBQUFsQyxLQUFyQjtBQUNBOUIsSUFBQUEsR0FBRyxDQUFDUyxHQUFKO0FBQ0Q7QUFDRixDQTNFRDs7Ozs7Ozs7OztBQ2RBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL21zYS10ZW1wbGF0ZS1hZG1pbi8uL3NyYy9jb25zdGFudHMvZW52LnRzIiwid2VicGFjazovL21zYS10ZW1wbGF0ZS1hZG1pbi8uL3NyYy9jb25zdGFudHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbXNhLXRlbXBsYXRlLWFkbWluLy4vc3JjL3BhZ2VzL2FwaS9wcm94eS9bLi4ucGF0aF0udHMiLCJ3ZWJwYWNrOi8vbXNhLXRlbXBsYXRlLWFkbWluL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9tc2EtdGVtcGxhdGUtYWRtaW4vZXh0ZXJuYWwgXCJjb29raWVzXCIiLCJ3ZWJwYWNrOi8vbXNhLXRlbXBsYXRlLWFkbWluL2V4dGVybmFsIFwidXJsXCIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IERFViA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbidcclxuZXhwb3J0IGNvbnN0IFBPUlQgPSBwcm9jZXNzLmVudi5QT1JUIHx8ICczMDAwJ1xyXG5leHBvcnQgY29uc3QgUFJPWFlfSE9TVCA9IHByb2Nlc3MuZW52LlBST1hZX0hPU1QgfHwgYGh0dHA6Ly9sb2NhbGhvc3Q6JHtQT1JUfWBcclxuXHJcbmV4cG9ydCBjb25zdCBUWiA9IHByb2Nlc3MuZW52LlRaIHx8ICdBc2lhL1Nlb3VsJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFNFUlZFUl9BUElfVVJMID0gcHJvY2Vzcy5lbnYuU0VSVkVSX0FQSV9VUkxcclxuXHJcbmV4cG9ydCBjb25zdCBDTEFJTV9OQU1FID0gcHJvY2Vzcy5lbnYuQ0xBSU1fTkFNRSB8fCAnQXV0aG9yaXphdGlvbidcclxuZXhwb3J0IGNvbnN0IEFVVEhfVVNFUl9JRCA9IHByb2Nlc3MuZW52LkFVVEhfVVNFUl9JRCB8fCAndG9rZW4taWQnXHJcbmV4cG9ydCBjb25zdCBSRUZSRVNIX1RPS0VOID0gcHJvY2Vzcy5lbnYuUkVGUkVTSF9UT0tFTiB8fCAncmVmcmVzaC10b2tlbidcclxuZXhwb3J0IGNvbnN0IEFDQ0VTU19UT0tFTiA9IHByb2Nlc3MuZW52LkFDQ0VTU19UT0tFTiB8fCAnYWNjZXNzLXRva2VuJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFNJVEVfSUQgPSBwcm9jZXNzLmVudi5TSVRFX0lEXHJcbiIsImltcG9ydCB7IFBST1hZX0hPU1QgfSBmcm9tICcuL2VudidcclxuXHJcbmV4cG9ydCBjb25zdCBEUkFXRVJfV0lEVEggPSAyMjBcclxuXHJcbmV4cG9ydCBjb25zdCBHUklEX1JPV19IRUlHSFQgPSA0MFxyXG5cclxuZXhwb3J0IGNvbnN0IEdSSURfUEFHRV9TSVpFID0gMTBcclxuXHJcbmV4cG9ydCBjb25zdCBHUklEX1JPV1NfUEVSX1BBR0VfT1BUSU9OID0gWzEwLCAyMCwgNTAsIDEwMF1cclxuXHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX0VSUk9SX01FU1NBR0UgPSAnU29ycnkuLiBTb21ldGhpbmcgV3JvbmcuLi7wn5ixJ1xyXG5cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfQVBQX05BTUUgPSAnTVNBIEFkbWluIFRlbXBsYXRlJ1xyXG5cclxuZXhwb3J0IGNvbnN0IEVESVRPUl9MT0FEX0lNQUdFX1VSTCA9ICcvcG9ydGFsLXNlcnZpY2UvYXBpL3YxL2ltYWdlcy9lZGl0b3IvJ1xyXG5cclxuLy8gLmh0bSwgLmh0bWwsIC50eHQsIC5wbmcvLmpwZy9ldGMsIC5wZGYsIC54bHN4LiAueGxzXHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX0FDQ0VQVF9GSUxFX0VYVCA9XHJcbiAgJ3RleHQvaHRtbCwgdGV4dC9wbGFpbiwgaW1hZ2UvKiwgLnBkZiwgYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LnNwcmVhZHNoZWV0bWwuc2hlZXQsIGFwcGxpY2F0aW9uL3ZuZC5tcy1leGNlbCdcclxuXHJcbmV4cG9ydCBjb25zdCBCQVNFX1VSTCA9IGAke1BST1hZX0hPU1R9L3NlcnZlcmBcclxuXHJcbmV4cG9ydCBjb25zdCBBRE1JTl9MT0dPX1BBVEggPSAnL2ltYWdlcy9hZG1pbkxvZ28ucG5nJ1xyXG5cclxuZXhwb3J0IGNvbnN0IEFETUlOX0xPR09fVEVYVCA9ICdNU0EgQWRtaW4nXHJcblxyXG5leHBvcnQgY29uc3QgQ1VTVE9NX0hFQURFUl9TSVRFX0lEX0tFWSA9ICdYLVNpdGUtSWQnXHJcblxyXG5leHBvcnQgY29uc3QgQUNDRVNTX0xPR19USU1FT1VUID0gMzAgKiA2MCAqIDEwMDBcclxuXHJcbmV4cG9ydCBjb25zdCBBQ0NFU1NfTE9HX0lEID0gJ2FjY2Vzc0xvZ0lkJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFBVQkxJQ19QQUdFUyA9IFsnLzQwNCcsICcvJywgJy9yZWxvYWQnLCAnL19lcnJvciddXHJcbiIsImltcG9ydCB7IENVU1RPTV9IRUFERVJfU0lURV9JRF9LRVksIERFRkFVTFRfRVJST1JfTUVTU0FHRSB9IGZyb20gJ0Bjb25zdGFudHMnXHJcbmltcG9ydCB7XHJcbiAgQUNDRVNTX1RPS0VOLFxyXG4gIEFVVEhfVVNFUl9JRCxcclxuICBDTEFJTV9OQU1FLFxyXG4gIFJFRlJFU0hfVE9LRU4sXHJcbiAgU0VSVkVSX0FQSV9VUkwsXHJcbiAgU0lURV9JRCxcclxufSBmcm9tICdAY29uc3RhbnRzL2VudidcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICdjb29raWVzJ1xyXG5pbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCdcclxuaW1wb3J0IHVybCBmcm9tICd1cmwnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcclxuICBjb25zdCBwYXRobmFtZSA9IHVybC5wYXRoVG9GaWxlVVJMKHJlcS51cmwpLnBhdGhuYW1lXHJcbiAgbGV0IGlzTG9naW4gPSBwYXRobmFtZSA9PT0gJy9hcGkvcHJveHkvdXNlci1zZXJ2aWNlL2xvZ2luJ1xyXG5cclxuICByZXEudXJsID0gcmVxLnVybC5yZXBsYWNlKC9eXFwvYXBpXFwvcHJveHkvLCAnJylcclxuXHJcbiAgaWYgKHBhdGhuYW1lLmluZGV4T2YoJ3VuZGVmaW5lZCcpID4gLTEpIHtcclxuICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogREVGQVVMVF9FUlJPUl9NRVNTQUdFIH0pXHJcbiAgICByZXMuZW5kKClcclxuICAgIHJldHVyblxyXG4gIH1cclxuXHJcbiAgbGV0IGhlYWRlcnMgPSB7XHJcbiAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gIH1cclxuICBoZWFkZXJzW0NVU1RPTV9IRUFERVJfU0lURV9JRF9LRVldID0gU0lURV9JRFxyXG5cclxuICAvL3NpbGVudCByZWZyZXNoXHJcbiAgaWYgKHBhdGhuYW1lLmluZGV4T2YoJy9yZWZyZXNoJykgPiAtMSkge1xyXG4gICAgaXNMb2dpbiA9IHRydWVcclxuICAgIGNvbnN0IGNvb2tpZXMgPSBuZXcgQ29va2llcyhyZXEsIHJlcylcclxuICAgIGhlYWRlcnNbQ0xBSU1fTkFNRV0gPSBjb29raWVzLmdldChSRUZSRVNIX1RPS0VOKVxyXG5cclxuICAgIHJlcS51cmwgPSAnL3VzZXItc2VydmljZS9hcGkvdjEvdXNlcnMvdG9rZW4vcmVmcmVzaCdcclxuXHJcbiAgICBpZiAoIWhlYWRlcnNbQ0xBSU1fTkFNRV0gfHwgaGVhZGVyc1tDTEFJTV9OQU1FXSA9PT0gJycpIHtcclxuICAgICAgY29uc29sZS53YXJuKGBjYW4ndCByZWZyZXNoYClcclxuICAgICAgcmVzLnN0YXR1cyg0MDEpLmpzb24oeyBtZXNzYWdlOiAnSW52YWxpZCBDcmVkZW50aWFscyDwn6W6JyB9KVxyXG4gICAgICByZXMuZW5kKClcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBzZXJ2ZXIgQVBJIOyXkCDsv6DtgqTrpbwg7KCE64us7ZWY7KeAIOyViuydjC5cclxuICByZXEuaGVhZGVycy5jb29raWUgPSAnJ1xyXG4gIHJlcS5oZWFkZXJzW0NVU1RPTV9IRUFERVJfU0lURV9JRF9LRVldID0gU0lURV9JRFxyXG4gIGNvbnNvbGUuaW5mbyhgcmVxLnVybCA6ICR7cmVxLnVybH1gKVxyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2goYCR7U0VSVkVSX0FQSV9VUkx9JHtyZXEudXJsfWAsIHtcclxuICAgICAgbWV0aG9kOiByZXEubWV0aG9kLFxyXG4gICAgICBoZWFkZXJzLFxyXG4gICAgICBib2R5OiByZXEuYm9keSxcclxuICAgIH0pXHJcblxyXG4gICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICBjb25zdCByZWZyZXNoVG9rZW4gPSByZXN1bHQuaGVhZGVycy5nZXQoUkVGUkVTSF9UT0tFTilcclxuICAgICAgY29uc3QgYWNjZXNzVG9rZW4gPSByZXN1bHQuaGVhZGVycy5nZXQoQUNDRVNTX1RPS0VOKVxyXG4gICAgICBjb25zdCB1c2VySWQgPSByZXN1bHQuaGVhZGVycy5nZXQoQVVUSF9VU0VSX0lEKVxyXG4gICAgICBjb25zdCBjb29raWVzID0gbmV3IENvb2tpZXMocmVxLCByZXMpXHJcblxyXG4gICAgICBjb29raWVzLnNldChSRUZSRVNIX1RPS0VOLCByZWZyZXNoVG9rZW4sIHtcclxuICAgICAgICBodHRwT25seTogdHJ1ZSxcclxuICAgICAgICBzYW1lU2l0ZTogJ2xheCcsIC8vQ1NSRiBwcm90ZWN0aW9uXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICBpZiAoYWNjZXNzVG9rZW4pIHtcclxuICAgICAgICBsZXQgcGF5bG9hZCA9IHt9XHJcbiAgICAgICAgcGF5bG9hZFtBQ0NFU1NfVE9LRU5dID0gYWNjZXNzVG9rZW5cclxuICAgICAgICBwYXlsb2FkW0FVVEhfVVNFUl9JRF0gPSB1c2VySWRcclxuICAgICAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vbltDTEFJTV9OQU1FXSA9IGFjY2Vzc1Rva2VuXHJcbiAgICAgICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bQVVUSF9VU0VSX0lEXSA9IHVzZXJJZFxyXG5cclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihwYXlsb2FkKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNDAxKS5qc29uKHsgbWVzc2FnZTogJ0ludmFsaWQgQ3JlZGVudGlhbHMg8J+luicgfSlcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVzLnN0YXR1cyg0MDEpLmpzb24oeyBtZXNzYWdlOiAnSW52YWxpZCBDcmVkZW50aWFscyDwn6W6JyB9KVxyXG4gICAgfVxyXG4gICAgcmVzLmVuZCgpXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogREVGQVVMVF9FUlJPUl9NRVNTQUdFLCBlcnJvciB9KVxyXG4gICAgcmVzLmVuZCgpXHJcbiAgfVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvb2tpZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXJsXCIpOyJdLCJuYW1lcyI6WyJERVYiLCJQT1JUIiwicHJvY2VzcyIsImVudiIsIlBST1hZX0hPU1QiLCJUWiIsIlNFUlZFUl9BUElfVVJMIiwiQ0xBSU1fTkFNRSIsIkFVVEhfVVNFUl9JRCIsIlJFRlJFU0hfVE9LRU4iLCJBQ0NFU1NfVE9LRU4iLCJTSVRFX0lEIiwiRFJBV0VSX1dJRFRIIiwiR1JJRF9ST1dfSEVJR0hUIiwiR1JJRF9QQUdFX1NJWkUiLCJHUklEX1JPV1NfUEVSX1BBR0VfT1BUSU9OIiwiREVGQVVMVF9FUlJPUl9NRVNTQUdFIiwiREVGQVVMVF9BUFBfTkFNRSIsIkVESVRPUl9MT0FEX0lNQUdFX1VSTCIsIkRFRkFVTFRfQUNDRVBUX0ZJTEVfRVhUIiwiQkFTRV9VUkwiLCJBRE1JTl9MT0dPX1BBVEgiLCJBRE1JTl9MT0dPX1RFWFQiLCJDVVNUT01fSEVBREVSX1NJVEVfSURfS0VZIiwiQUNDRVNTX0xPR19USU1FT1VUIiwiQUNDRVNTX0xPR19JRCIsIlBVQkxJQ19QQUdFUyIsImF4aW9zIiwiQ29va2llcyIsInVybCIsInJlcSIsInJlcyIsInBhdGhuYW1lIiwicGF0aFRvRmlsZVVSTCIsImlzTG9naW4iLCJyZXBsYWNlIiwiaW5kZXhPZiIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwiZW5kIiwiaGVhZGVycyIsImNvb2tpZXMiLCJnZXQiLCJjb25zb2xlIiwid2FybiIsImNvb2tpZSIsImluZm8iLCJyZXN1bHQiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJyZWZyZXNoVG9rZW4iLCJhY2Nlc3NUb2tlbiIsInVzZXJJZCIsInNldCIsImh0dHBPbmx5Iiwic2FtZVNpdGUiLCJwYXlsb2FkIiwiZGVmYXVsdHMiLCJjb21tb24iLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=