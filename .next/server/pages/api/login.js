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

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pg */ \"pg\");\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pg__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\ndotenv__WEBPACK_IMPORTED_MODULE_2___default().config();\n// const isProduction = process.env.NODE_ENV === \"production\";\nconst pool = new pg__WEBPACK_IMPORTED_MODULE_0__.Pool({\n    user: process.env.DB_USER,\n    host: process.env.DB_HOST,\n    database: process.env.DB_NAME,\n    password: process.env.DB_PASSWORD,\n    port: process.env.DB_PORT || 5432,\n    // ssl: isProduction\n    //   ? { rejectUnauthorized: true }\n    //   : { rejectUnauthorized: false },\n    ssl: {\n        rejectUnauthorized: false\n    }\n});\nconst SECRET_KEY = process.env.SECRET_KEY;\nasync function handler(req, res) {\n    console.log(\"Handler function called.\");\n    if (req.method === \"POST\") {\n        const { email, password } = req.body;\n        console.log(\"Email:\", email);\n        try {\n            const query = \"SELECT * FROM users WHERE email_address = $1\";\n            const result = await pool.query(query, [\n                email\n            ]);\n            console.log(\"Query result:\", result.rows);\n            if (result.rows.length > 0) {\n                const user = result.rows[0];\n                const passwordMatch = await bcrypt__WEBPACK_IMPORTED_MODULE_3___default().compare(password, user.password);\n                if (passwordMatch) {\n                    const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().sign({\n                        userId: user.id\n                    }, SECRET_KEY, {\n                        expiresIn: \"1h\"\n                    });\n                    res.status(200).json({\n                        token\n                    });\n                } else {\n                    res.status(401).json({\n                        error: \"Invalid credentials\"\n                    });\n                }\n            } else {\n                res.status(401).json({\n                    error: \"Invalid credentials\"\n                });\n            }\n        } catch (error) {\n            console.error(\"Error logging in:\", error);\n            res.status(500).json({\n                error: \"Internal Server Error\"\n            });\n        }\n    } else {\n        res.status(405).json({\n            error: \"Method Not Allowed\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2xvZ2luLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNLO0FBQ0g7QUFDQTtBQUU1QkUsb0RBQWE7QUFDYiw4REFBOEQ7QUFFOUQsTUFBTUcsT0FBTyxJQUFJTCxvQ0FBSUEsQ0FBQztJQUNwQk0sTUFBTUMsUUFBUUMsR0FBRyxDQUFDQyxPQUFPO0lBQ3pCQyxNQUFNSCxRQUFRQyxHQUFHLENBQUNHLE9BQU87SUFDekJDLFVBQVVMLFFBQVFDLEdBQUcsQ0FBQ0ssT0FBTztJQUM3QkMsVUFBVVAsUUFBUUMsR0FBRyxDQUFDTyxXQUFXO0lBQ2pDQyxNQUFNVCxRQUFRQyxHQUFHLENBQUNTLE9BQU8sSUFBSTtJQUM3QixvQkFBb0I7SUFDcEIsbUNBQW1DO0lBQ25DLHFDQUFxQztJQUNyQ0MsS0FBSztRQUFFQyxvQkFBb0I7SUFBTTtBQUNuQztBQUVBLE1BQU1DLGFBQWFiLFFBQVFDLEdBQUcsQ0FBQ1ksVUFBVTtBQUUxQixlQUFlQyxRQUFRQyxHQUFHLEVBQUVDLEdBQUc7SUFDNUNDLFFBQVFDLEdBQUcsQ0FBQztJQUNaLElBQUlILElBQUlJLE1BQU0sS0FBSyxRQUFRO1FBQ3pCLE1BQU0sRUFBRUMsS0FBSyxFQUFFYixRQUFRLEVBQUUsR0FBR1EsSUFBSU0sSUFBSTtRQUNwQ0osUUFBUUMsR0FBRyxDQUFDLFVBQVVFO1FBRXRCLElBQUk7WUFDRixNQUFNRSxRQUFRO1lBQ2QsTUFBTUMsU0FBUyxNQUFNekIsS0FBS3dCLEtBQUssQ0FBQ0EsT0FBTztnQkFBQ0Y7YUFBTTtZQUM5Q0gsUUFBUUMsR0FBRyxDQUFDLGlCQUFpQkssT0FBT0MsSUFBSTtZQUV4QyxJQUFJRCxPQUFPQyxJQUFJLENBQUNDLE1BQU0sR0FBRyxHQUFHO2dCQUMxQixNQUFNMUIsT0FBT3dCLE9BQU9DLElBQUksQ0FBQyxFQUFFO2dCQUMzQixNQUFNRSxnQkFBZ0IsTUFBTTlCLHFEQUFjLENBQUNXLFVBQVVSLEtBQUtRLFFBQVE7Z0JBRWxFLElBQUltQixlQUFlO29CQUNqQixNQUFNRSxRQUFRbEMsd0RBQVEsQ0FDcEI7d0JBQUVvQyxRQUFRL0IsS0FBS2dDLEVBQUU7b0JBQUMsR0FDbEJsQixZQUNBO3dCQUFFbUIsV0FBVztvQkFBSztvQkFHcEJoQixJQUFJaUIsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQzt3QkFBRU47b0JBQU07Z0JBQy9CLE9BQU87b0JBQ0xaLElBQUlpQixNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO3dCQUFFQyxPQUFPO29CQUFzQjtnQkFDdEQ7WUFDRixPQUFPO2dCQUNMbkIsSUFBSWlCLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7b0JBQUVDLE9BQU87Z0JBQXNCO1lBQ3REO1FBQ0YsRUFBRSxPQUFPQSxPQUFPO1lBQ2RsQixRQUFRa0IsS0FBSyxDQUFDLHFCQUFxQkE7WUFDbkNuQixJQUFJaUIsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUMsT0FBTztZQUF3QjtRQUN4RDtJQUNGLE9BQU87UUFDTG5CLElBQUlpQixNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLE9BQU87UUFBcUI7SUFDckQ7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wYWdlcy9hcGkvbG9naW4uanM/ZWVmYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQb29sIH0gZnJvbSBcInBnXCI7XG5pbXBvcnQgand0IGZyb20gXCJqc29ud2VidG9rZW5cIjtcbmltcG9ydCBkb3RlbnYgZnJvbSBcImRvdGVudlwiO1xuaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0XCI7XG5cbmRvdGVudi5jb25maWcoKTtcbi8vIGNvbnN0IGlzUHJvZHVjdGlvbiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIjtcblxuY29uc3QgcG9vbCA9IG5ldyBQb29sKHtcbiAgdXNlcjogcHJvY2Vzcy5lbnYuREJfVVNFUixcbiAgaG9zdDogcHJvY2Vzcy5lbnYuREJfSE9TVCxcbiAgZGF0YWJhc2U6IHByb2Nlc3MuZW52LkRCX05BTUUsXG4gIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5EQl9QQVNTV09SRCxcbiAgcG9ydDogcHJvY2Vzcy5lbnYuREJfUE9SVCB8fCA1NDMyLFxuICAvLyBzc2w6IGlzUHJvZHVjdGlvblxuICAvLyAgID8geyByZWplY3RVbmF1dGhvcml6ZWQ6IHRydWUgfVxuICAvLyAgIDogeyByZWplY3RVbmF1dGhvcml6ZWQ6IGZhbHNlIH0sXG4gIHNzbDogeyByZWplY3RVbmF1dGhvcml6ZWQ6IGZhbHNlIH1cbn0pO1xuXG5jb25zdCBTRUNSRVRfS0VZID0gcHJvY2Vzcy5lbnYuU0VDUkVUX0tFWTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBjb25zb2xlLmxvZyhcIkhhbmRsZXIgZnVuY3Rpb24gY2FsbGVkLlwiKTtcbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XG4gICAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQgfSA9IHJlcS5ib2R5O1xuICAgIGNvbnNvbGUubG9nKFwiRW1haWw6XCIsIGVtYWlsKTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBxdWVyeSA9IFwiU0VMRUNUICogRlJPTSB1c2VycyBXSEVSRSBlbWFpbF9hZGRyZXNzID0gJDFcIjtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHBvb2wucXVlcnkocXVlcnksIFtlbWFpbF0pO1xuICAgICAgY29uc29sZS5sb2coXCJRdWVyeSByZXN1bHQ6XCIsIHJlc3VsdC5yb3dzKTtcblxuICAgICAgaWYgKHJlc3VsdC5yb3dzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgdXNlciA9IHJlc3VsdC5yb3dzWzBdO1xuICAgICAgICBjb25zdCBwYXNzd29yZE1hdGNoID0gYXdhaXQgYmNyeXB0LmNvbXBhcmUocGFzc3dvcmQsIHVzZXIucGFzc3dvcmQpO1xuXG4gICAgICAgIGlmIChwYXNzd29yZE1hdGNoKSB7XG4gICAgICAgICAgY29uc3QgdG9rZW4gPSBqd3Quc2lnbihcbiAgICAgICAgICAgIHsgdXNlcklkOiB1c2VyLmlkIH0sXG4gICAgICAgICAgICBTRUNSRVRfS0VZLFxuICAgICAgICAgICAgeyBleHBpcmVzSW46ICcxaCcgfVxuICAgICAgICAgICk7XG5cbiAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHRva2VuIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlcy5zdGF0dXMoNDAxKS5qc29uKHsgZXJyb3I6IFwiSW52YWxpZCBjcmVkZW50aWFsc1wiIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXMuc3RhdHVzKDQwMSkuanNvbih7IGVycm9yOiBcIkludmFsaWQgY3JlZGVudGlhbHNcIiB9KTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGxvZ2dpbmcgaW46XCIsIGVycm9yKTtcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6IFwiSW50ZXJuYWwgU2VydmVyIEVycm9yXCIgfSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJlcy5zdGF0dXMoNDA1KS5qc29uKHsgZXJyb3I6IFwiTWV0aG9kIE5vdCBBbGxvd2VkXCIgfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJQb29sIiwiand0IiwiZG90ZW52IiwiYmNyeXB0IiwiY29uZmlnIiwicG9vbCIsInVzZXIiLCJwcm9jZXNzIiwiZW52IiwiREJfVVNFUiIsImhvc3QiLCJEQl9IT1NUIiwiZGF0YWJhc2UiLCJEQl9OQU1FIiwicGFzc3dvcmQiLCJEQl9QQVNTV09SRCIsInBvcnQiLCJEQl9QT1JUIiwic3NsIiwicmVqZWN0VW5hdXRob3JpemVkIiwiU0VDUkVUX0tFWSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwibWV0aG9kIiwiZW1haWwiLCJib2R5IiwicXVlcnkiLCJyZXN1bHQiLCJyb3dzIiwibGVuZ3RoIiwicGFzc3dvcmRNYXRjaCIsImNvbXBhcmUiLCJ0b2tlbiIsInNpZ24iLCJ1c2VySWQiLCJpZCIsImV4cGlyZXNJbiIsInN0YXR1cyIsImpzb24iLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/login.js\n");

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