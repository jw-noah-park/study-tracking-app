"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/login";
exports.ids = ["pages/api/login"];
exports.modules = {

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "next/dist/compiled/next-server/pages-api.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages-api.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages-api.runtime.dev.js");

/***/ }),

/***/ "pg":
/*!*********************!*\
  !*** external "pg" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("pg");

/***/ }),

/***/ "(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Flogin&preferredRegion=&absolutePagePath=.%2Fsrc%2Fpages%2Fapi%2Flogin.js&middlewareConfigBase64=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Flogin&preferredRegion=&absolutePagePath=.%2Fsrc%2Fpages%2Fapi%2Flogin.js&middlewareConfigBase64=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   routeModule: () => (/* binding */ routeModule)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/pages-api/module.compiled */ \"(api)/./node_modules/next/dist/server/future/route-modules/pages-api/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(api)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"(api)/./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var _src_pages_api_login_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/pages/api/login.js */ \"(api)/./src/pages/api/login.js\");\n\n\n\n// Import the userland code.\n\n// Re-export the handler (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_src_pages_api_login_js__WEBPACK_IMPORTED_MODULE_3__, \"default\"));\n// Re-export config.\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_src_pages_api_login_js__WEBPACK_IMPORTED_MODULE_3__, \"config\");\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,\n        page: \"/api/login\",\n        pathname: \"/api/login\",\n        // The following aren't used in production.\n        bundlePath: \"\",\n        filename: \"\"\n    },\n    userland: _src_pages_api_login_js__WEBPACK_IMPORTED_MODULE_3__\n});\n\n//# sourceMappingURL=pages-api.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9pbmRleC5qcz9raW5kPVBBR0VTX0FQSSZwYWdlPSUyRmFwaSUyRmxvZ2luJnByZWZlcnJlZFJlZ2lvbj0mYWJzb2x1dGVQYWdlUGF0aD0uJTJGc3JjJTJGcGFnZXMlMkZhcGklMkZsb2dpbi5qcyZtaWRkbGV3YXJlQ29uZmlnQmFzZTY0PWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDTDtBQUMxRDtBQUNxRDtBQUNyRDtBQUNBLGlFQUFlLHdFQUFLLENBQUMsb0RBQVEsWUFBWSxFQUFDO0FBQzFDO0FBQ08sZUFBZSx3RUFBSyxDQUFDLG9EQUFRO0FBQ3BDO0FBQ08sd0JBQXdCLGdIQUFtQjtBQUNsRDtBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxZQUFZO0FBQ1osQ0FBQzs7QUFFRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8/ZDgwMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYWdlc0FQSVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvcGFnZXMtYXBpL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IGhvaXN0IH0gZnJvbSBcIm5leHQvZGlzdC9idWlsZC90ZW1wbGF0ZXMvaGVscGVyc1wiO1xuLy8gSW1wb3J0IHRoZSB1c2VybGFuZCBjb2RlLlxuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi4vc3JjL3BhZ2VzL2FwaS9sb2dpbi5qc1wiO1xuLy8gUmUtZXhwb3J0IHRoZSBoYW5kbGVyIChzaG91bGQgYmUgdGhlIGRlZmF1bHQgZXhwb3J0KS5cbmV4cG9ydCBkZWZhdWx0IGhvaXN0KHVzZXJsYW5kLCBcImRlZmF1bHRcIik7XG4vLyBSZS1leHBvcnQgY29uZmlnLlxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IGhvaXN0KHVzZXJsYW5kLCBcImNvbmZpZ1wiKTtcbi8vIENyZWF0ZSBhbmQgZXhwb3J0IHRoZSByb3V0ZSBtb2R1bGUgdGhhdCB3aWxsIGJlIGNvbnN1bWVkLlxuZXhwb3J0IGNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IFBhZ2VzQVBJUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLlBBR0VTX0FQSSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2xvZ2luXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvbG9naW5cIixcbiAgICAgICAgLy8gVGhlIGZvbGxvd2luZyBhcmVuJ3QgdXNlZCBpbiBwcm9kdWN0aW9uLlxuICAgICAgICBidW5kbGVQYXRoOiBcIlwiLFxuICAgICAgICBmaWxlbmFtZTogXCJcIlxuICAgIH0sXG4gICAgdXNlcmxhbmRcbn0pO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYWdlcy1hcGkuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Flogin&preferredRegion=&absolutePagePath=.%2Fsrc%2Fpages%2Fapi%2Flogin.js&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(api)/./src/pages/api/login.js":
/*!********************************!*\
  !*** ./src/pages/api/login.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pg */ \"pg\");\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pg__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\ndotenv__WEBPACK_IMPORTED_MODULE_2___default().config();\nconst isProduction = \"development\" === \"production\";\nconst pool = new pg__WEBPACK_IMPORTED_MODULE_0__.Pool({\n    user: process.env.DB_USER,\n    host: process.env.DB_HOST,\n    database: process.env.DB_NAME,\n    password: process.env.DB_PASSWORD,\n    port: process.env.DB_PORT || 5432,\n    ssl: isProduction ? {\n        rejectUnauthorized: true\n    } : {\n        rejectUnauthorized: false\n    }\n});\nasync function handler(req, res) {\n    console.log(\"Handler function called.\");\n    if (req.method === \"POST\") {\n        const { email, password } = req.body;\n        console.log(\"Email:\", email);\n        try {\n            const query = \"SELECT * FROM users WHERE email_address = $1 AND password = $2\";\n            const result = await pool.query(query, [\n                email,\n                password\n            ]);\n            console.log(\"Query result:\", result.rows);\n            if (result.rows.length > 0) {\n                const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().sign({\n                    userId: result.rows[0].id\n                }, process.env.SECRET_KEY);\n                res.status(200).json({\n                    token\n                });\n            } else {\n                res.status(401).json({\n                    error: \"Invalid credentials\"\n                });\n            }\n        } catch (error) {\n            console.error(\"Error logging in:\", error);\n            res.status(500).json({\n                error: \"Internal Server Error\"\n            });\n        }\n    } else {\n        res.status(405).json({\n            error: \"Method Not Allowed\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2xvZ2luLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMEI7QUFDSztBQUNIO0FBRTVCRSxvREFBYTtBQUNiLE1BQU1FLGVBQWVDLGtCQUF5QjtBQUU5QyxNQUFNQyxPQUFPLElBQUlOLG9DQUFJQSxDQUFDO0lBQ3BCTyxNQUFNRixRQUFRRyxHQUFHLENBQUNDLE9BQU87SUFDekJDLE1BQU1MLFFBQVFHLEdBQUcsQ0FBQ0csT0FBTztJQUN6QkMsVUFBVVAsUUFBUUcsR0FBRyxDQUFDSyxPQUFPO0lBQzdCQyxVQUFVVCxRQUFRRyxHQUFHLENBQUNPLFdBQVc7SUFDakNDLE1BQU1YLFFBQVFHLEdBQUcsQ0FBQ1MsT0FBTyxJQUFJO0lBQzdCQyxLQUFLZCxlQUFlO1FBQUVlLG9CQUFvQjtJQUFLLElBQUk7UUFBRUEsb0JBQW9CO0lBQU07QUFDakY7QUFFZSxlQUFlQyxRQUFRQyxHQUFHLEVBQUVDLEdBQUc7SUFDNUNDLFFBQVFDLEdBQUcsQ0FBQztJQUNaLElBQUlILElBQUlJLE1BQU0sS0FBSyxRQUFRO1FBQ3pCLE1BQU0sRUFBRUMsS0FBSyxFQUFFWixRQUFRLEVBQUUsR0FBR08sSUFBSU0sSUFBSTtRQUNwQ0osUUFBUUMsR0FBRyxDQUFDLFVBQVVFO1FBRXRCLElBQUk7WUFDRixNQUFNRSxRQUNKO1lBQ0YsTUFBTUMsU0FBUyxNQUFNdkIsS0FBS3NCLEtBQUssQ0FBQ0EsT0FBTztnQkFBQ0Y7Z0JBQU9aO2FBQVM7WUFDeERTLFFBQVFDLEdBQUcsQ0FBQyxpQkFBaUJLLE9BQU9DLElBQUk7WUFFeEMsSUFBSUQsT0FBT0MsSUFBSSxDQUFDQyxNQUFNLEdBQUcsR0FBRztnQkFDMUIsTUFBTUMsUUFBUS9CLHdEQUFRLENBQ3BCO29CQUFFaUMsUUFBUUwsT0FBT0MsSUFBSSxDQUFDLEVBQUUsQ0FBQ0ssRUFBRTtnQkFBQyxHQUM1QjlCLFFBQVFHLEdBQUcsQ0FBQzRCLFVBQVU7Z0JBR3hCZCxJQUFJZSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO29CQUFFTjtnQkFBTTtZQUMvQixPQUFPO2dCQUNMVixJQUFJZSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO29CQUFFQyxPQUFPO2dCQUFzQjtZQUN0RDtRQUNGLEVBQUUsT0FBT0EsT0FBTztZQUNkaEIsUUFBUWdCLEtBQUssQ0FBQyxxQkFBcUJBO1lBQ25DakIsSUFBSWUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUMsT0FBTztZQUF3QjtRQUN4RDtJQUNGLE9BQU87UUFDTGpCLElBQUllLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUFxQjtJQUNyRDtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2FwaS9sb2dpbi5qcz9lZWZhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBvb2wgfSBmcm9tIFwicGdcIjtcbmltcG9ydCBqd3QgZnJvbSBcImpzb253ZWJ0b2tlblwiO1xuaW1wb3J0IGRvdGVudiBmcm9tICdkb3RlbnYnO1xuXG5kb3RlbnYuY29uZmlnKCk7XG5jb25zdCBpc1Byb2R1Y3Rpb24gPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nO1xuXG5jb25zdCBwb29sID0gbmV3IFBvb2woe1xuICB1c2VyOiBwcm9jZXNzLmVudi5EQl9VU0VSLFxuICBob3N0OiBwcm9jZXNzLmVudi5EQl9IT1NULFxuICBkYXRhYmFzZTogcHJvY2Vzcy5lbnYuREJfTkFNRSxcbiAgcGFzc3dvcmQ6IHByb2Nlc3MuZW52LkRCX1BBU1NXT1JELFxuICBwb3J0OiBwcm9jZXNzLmVudi5EQl9QT1JUIHx8IDU0MzIsXG4gIHNzbDogaXNQcm9kdWN0aW9uID8geyByZWplY3RVbmF1dGhvcml6ZWQ6IHRydWUgfSA6IHsgcmVqZWN0VW5hdXRob3JpemVkOiBmYWxzZSB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBjb25zb2xlLmxvZyhcIkhhbmRsZXIgZnVuY3Rpb24gY2FsbGVkLlwiKTsgXG4gIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xuICAgIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkIH0gPSByZXEuYm9keTtcbiAgICBjb25zb2xlLmxvZyhcIkVtYWlsOlwiLCBlbWFpbCk7IFxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHF1ZXJ5ID1cbiAgICAgICAgXCJTRUxFQ1QgKiBGUk9NIHVzZXJzIFdIRVJFIGVtYWlsX2FkZHJlc3MgPSAkMSBBTkQgcGFzc3dvcmQgPSAkMlwiO1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcG9vbC5xdWVyeShxdWVyeSwgW2VtYWlsLCBwYXNzd29yZF0pO1xuICAgICAgY29uc29sZS5sb2coXCJRdWVyeSByZXN1bHQ6XCIsIHJlc3VsdC5yb3dzKTsgXG5cbiAgICAgIGlmIChyZXN1bHQucm93cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IHRva2VuID0gand0LnNpZ24oXG4gICAgICAgICAgeyB1c2VySWQ6IHJlc3VsdC5yb3dzWzBdLmlkIH0sXG4gICAgICAgICAgcHJvY2Vzcy5lbnYuU0VDUkVUX0tFWSxcbiAgICAgICAgKTtcblxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHRva2VuIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzLnN0YXR1cyg0MDEpLmpzb24oeyBlcnJvcjogXCJJbnZhbGlkIGNyZWRlbnRpYWxzXCIgfSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBsb2dnaW5nIGluOlwiLCBlcnJvcik7XG4gICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiBcIkludGVybmFsIFNlcnZlciBFcnJvclwiIH0pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXMuc3RhdHVzKDQwNSkuanNvbih7IGVycm9yOiBcIk1ldGhvZCBOb3QgQWxsb3dlZFwiIH0pO1xuICB9XG59XG4iXSwibmFtZXMiOlsiUG9vbCIsImp3dCIsImRvdGVudiIsImNvbmZpZyIsImlzUHJvZHVjdGlvbiIsInByb2Nlc3MiLCJwb29sIiwidXNlciIsImVudiIsIkRCX1VTRVIiLCJob3N0IiwiREJfSE9TVCIsImRhdGFiYXNlIiwiREJfTkFNRSIsInBhc3N3b3JkIiwiREJfUEFTU1dPUkQiLCJwb3J0IiwiREJfUE9SVCIsInNzbCIsInJlamVjdFVuYXV0aG9yaXplZCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwibWV0aG9kIiwiZW1haWwiLCJib2R5IiwicXVlcnkiLCJyZXN1bHQiLCJyb3dzIiwibGVuZ3RoIiwidG9rZW4iLCJzaWduIiwidXNlcklkIiwiaWQiLCJTRUNSRVRfS0VZIiwic3RhdHVzIiwianNvbiIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/login.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Flogin&preferredRegion=&absolutePagePath=.%2Fsrc%2Fpages%2Fapi%2Flogin.js&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();