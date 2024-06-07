"use strict";
(() => {
var exports = {};
exports.id = "pages/api/v1/token";
exports.ids = ["pages/api/v1/token"];
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

/***/ "./src/pages/api/v1/token.ts":
/*!***********************************!*\
  !*** ./src/pages/api/v1/token.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../constants/env */ "./src/constants/env.ts");
/* harmony import */ var cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cookies */ "cookies");
/* harmony import */ var cookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cookies__WEBPACK_IMPORTED_MODULE_1__);


/**
 * refresh token 만료 시 쿠키 삭제
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((req, res) => {
  const cookies = new (cookies__WEBPACK_IMPORTED_MODULE_1___default())(req, res); // Delete the cookie by not setting a value

  cookies.set(_constants_env__WEBPACK_IMPORTED_MODULE_0__.REFRESH_TOKEN);
  res.status(200).json({
    message: 'success'
  });
});

/***/ }),

/***/ "cookies":
/*!**************************!*\
  !*** external "cookies" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("cookies");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/v1/token.ts"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL3YxL3Rva2VuLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sTUFBTUEsR0FBRyxPQUFUO0FBQ0EsTUFBTUMsSUFBSSxHQUFHQyxNQUFBLElBQW9CLENBQWpDO0FBQ0EsTUFBTUUsVUFBVSxHQUFHRix1QkFBQSxJQUEyQixDQUE5QztBQUVBLE1BQU1HLEVBQUUsR0FBR0gsT0FBTyxDQUFDQyxHQUFSLENBQVlFLEVBQVosSUFBa0IsWUFBN0I7QUFFQSxNQUFNQyxjQUFjLEdBQUdKLHVCQUF2QjtBQUVBLE1BQU1LLFVBQVUsR0FBR0wsT0FBTyxDQUFDQyxHQUFSLENBQVlJLFVBQVosSUFBMEIsZUFBN0M7QUFDQSxNQUFNQyxZQUFZLEdBQUdOLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSyxZQUFaLElBQTRCLFVBQWpEO0FBQ0EsTUFBTUMsYUFBYSxHQUFHUCxPQUFPLENBQUNDLEdBQVIsQ0FBWU0sYUFBWixJQUE2QixlQUFuRDtBQUNBLE1BQU1DLFlBQVksR0FBR1IsT0FBTyxDQUFDQyxHQUFSLENBQVlPLFlBQVosSUFBNEIsY0FBakQ7QUFFQSxNQUFNQyxPQUFPLEdBQUdULEdBQWhCOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1pQO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBQ0EsaUVBQWUsQ0FBQ1csR0FBRCxFQUFzQkMsR0FBdEIsS0FBK0M7QUFDNUQsUUFBTUMsT0FBTyxHQUFHLElBQUlILGdEQUFKLENBQVlDLEdBQVosRUFBaUJDLEdBQWpCLENBQWhCLENBRDRELENBRzVEOztBQUNBQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWVAseURBQVo7QUFFQUssRUFBQUEsR0FBRyxDQUFDRyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsSUFBQUEsT0FBTyxFQUFFO0FBQVgsR0FBckI7QUFDRCxDQVBEOzs7Ozs7Ozs7O0FDUEEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tc2EtdGVtcGxhdGUtYWRtaW4vLi9zcmMvY29uc3RhbnRzL2Vudi50cyIsIndlYnBhY2s6Ly9tc2EtdGVtcGxhdGUtYWRtaW4vLi9zcmMvcGFnZXMvYXBpL3YxL3Rva2VuLnRzIiwid2VicGFjazovL21zYS10ZW1wbGF0ZS1hZG1pbi9leHRlcm5hbCBcImNvb2tpZXNcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgREVWID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJ1xyXG5leHBvcnQgY29uc3QgUE9SVCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgJzMwMDAnXHJcbmV4cG9ydCBjb25zdCBQUk9YWV9IT1NUID0gcHJvY2Vzcy5lbnYuUFJPWFlfSE9TVCB8fCBgaHR0cDovL2xvY2FsaG9zdDoke1BPUlR9YFxyXG5cclxuZXhwb3J0IGNvbnN0IFRaID0gcHJvY2Vzcy5lbnYuVFogfHwgJ0FzaWEvU2VvdWwnXHJcblxyXG5leHBvcnQgY29uc3QgU0VSVkVSX0FQSV9VUkwgPSBwcm9jZXNzLmVudi5TRVJWRVJfQVBJX1VSTFxyXG5cclxuZXhwb3J0IGNvbnN0IENMQUlNX05BTUUgPSBwcm9jZXNzLmVudi5DTEFJTV9OQU1FIHx8ICdBdXRob3JpemF0aW9uJ1xyXG5leHBvcnQgY29uc3QgQVVUSF9VU0VSX0lEID0gcHJvY2Vzcy5lbnYuQVVUSF9VU0VSX0lEIHx8ICd0b2tlbi1pZCdcclxuZXhwb3J0IGNvbnN0IFJFRlJFU0hfVE9LRU4gPSBwcm9jZXNzLmVudi5SRUZSRVNIX1RPS0VOIHx8ICdyZWZyZXNoLXRva2VuJ1xyXG5leHBvcnQgY29uc3QgQUNDRVNTX1RPS0VOID0gcHJvY2Vzcy5lbnYuQUNDRVNTX1RPS0VOIHx8ICdhY2Nlc3MtdG9rZW4nXHJcblxyXG5leHBvcnQgY29uc3QgU0lURV9JRCA9IHByb2Nlc3MuZW52LlNJVEVfSURcclxuIiwiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnXHJcbmltcG9ydCB7IFJFRlJFU0hfVE9LRU4gfSBmcm9tICdAY29uc3RhbnRzL2VudidcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnY29va2llcydcclxuXHJcbi8qKlxyXG4gKiByZWZyZXNoIHRva2VuIOunjOujjCDsi5wg7L+g7YKkIOyCreygnFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSA9PiB7XHJcbiAgY29uc3QgY29va2llcyA9IG5ldyBDb29raWVzKHJlcSwgcmVzKVxyXG5cclxuICAvLyBEZWxldGUgdGhlIGNvb2tpZSBieSBub3Qgc2V0dGluZyBhIHZhbHVlXHJcbiAgY29va2llcy5zZXQoUkVGUkVTSF9UT0tFTilcclxuXHJcbiAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiAnc3VjY2VzcycgfSlcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb29raWVzXCIpOyJdLCJuYW1lcyI6WyJERVYiLCJQT1JUIiwicHJvY2VzcyIsImVudiIsIlBST1hZX0hPU1QiLCJUWiIsIlNFUlZFUl9BUElfVVJMIiwiQ0xBSU1fTkFNRSIsIkFVVEhfVVNFUl9JRCIsIlJFRlJFU0hfVE9LRU4iLCJBQ0NFU1NfVE9LRU4iLCJTSVRFX0lEIiwiQ29va2llcyIsInJlcSIsInJlcyIsImNvb2tpZXMiLCJzZXQiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=