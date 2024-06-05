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
exports.id = "pages/api/resetPassword";
exports.ids = ["pages/api/resetPassword"];
exports.modules = {

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

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

/***/ "(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2FresetPassword&preferredRegion=&absolutePagePath=.%2Fsrc%2Fpages%2Fapi%2FresetPassword.js&middlewareConfigBase64=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2FresetPassword&preferredRegion=&absolutePagePath=.%2Fsrc%2Fpages%2Fapi%2FresetPassword.js&middlewareConfigBase64=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   routeModule: () => (/* binding */ routeModule)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/pages-api/module.compiled */ \"(api)/./node_modules/next/dist/server/future/route-modules/pages-api/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(api)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"(api)/./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var _src_pages_api_resetPassword_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/pages/api/resetPassword.js */ \"(api)/./src/pages/api/resetPassword.js\");\n\n\n\n// Import the userland code.\n\n// Re-export the handler (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_src_pages_api_resetPassword_js__WEBPACK_IMPORTED_MODULE_3__, \"default\"));\n// Re-export config.\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_src_pages_api_resetPassword_js__WEBPACK_IMPORTED_MODULE_3__, \"config\");\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,\n        page: \"/api/resetPassword\",\n        pathname: \"/api/resetPassword\",\n        // The following aren't used in production.\n        bundlePath: \"\",\n        filename: \"\"\n    },\n    userland: _src_pages_api_resetPassword_js__WEBPACK_IMPORTED_MODULE_3__\n});\n\n//# sourceMappingURL=pages-api.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9pbmRleC5qcz9raW5kPVBBR0VTX0FQSSZwYWdlPSUyRmFwaSUyRnJlc2V0UGFzc3dvcmQmcHJlZmVycmVkUmVnaW9uPSZhYnNvbHV0ZVBhZ2VQYXRoPS4lMkZzcmMlMkZwYWdlcyUyRmFwaSUyRnJlc2V0UGFzc3dvcmQuanMmbWlkZGxld2FyZUNvbmZpZ0Jhc2U2ND1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ0w7QUFDMUQ7QUFDNkQ7QUFDN0Q7QUFDQSxpRUFBZSx3RUFBSyxDQUFDLDREQUFRLFlBQVksRUFBQztBQUMxQztBQUNPLGVBQWUsd0VBQUssQ0FBQyw0REFBUTtBQUNwQztBQUNPLHdCQUF3QixnSEFBbUI7QUFDbEQ7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsWUFBWTtBQUNaLENBQUM7O0FBRUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vP2M0ZTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGFnZXNBUElSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL3BhZ2VzLWFwaS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBob2lzdCB9IGZyb20gXCJuZXh0L2Rpc3QvYnVpbGQvdGVtcGxhdGVzL2hlbHBlcnNcIjtcbi8vIEltcG9ydCB0aGUgdXNlcmxhbmQgY29kZS5cbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIuL3NyYy9wYWdlcy9hcGkvcmVzZXRQYXNzd29yZC5qc1wiO1xuLy8gUmUtZXhwb3J0IHRoZSBoYW5kbGVyIChzaG91bGQgYmUgdGhlIGRlZmF1bHQgZXhwb3J0KS5cbmV4cG9ydCBkZWZhdWx0IGhvaXN0KHVzZXJsYW5kLCBcImRlZmF1bHRcIik7XG4vLyBSZS1leHBvcnQgY29uZmlnLlxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IGhvaXN0KHVzZXJsYW5kLCBcImNvbmZpZ1wiKTtcbi8vIENyZWF0ZSBhbmQgZXhwb3J0IHRoZSByb3V0ZSBtb2R1bGUgdGhhdCB3aWxsIGJlIGNvbnN1bWVkLlxuZXhwb3J0IGNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IFBhZ2VzQVBJUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLlBBR0VTX0FQSSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3Jlc2V0UGFzc3dvcmRcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9yZXNldFBhc3N3b3JkXCIsXG4gICAgICAgIC8vIFRoZSBmb2xsb3dpbmcgYXJlbid0IHVzZWQgaW4gcHJvZHVjdGlvbi5cbiAgICAgICAgYnVuZGxlUGF0aDogXCJcIixcbiAgICAgICAgZmlsZW5hbWU6IFwiXCJcbiAgICB9LFxuICAgIHVzZXJsYW5kXG59KTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFnZXMtYXBpLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2FresetPassword&preferredRegion=&absolutePagePath=.%2Fsrc%2Fpages%2Fapi%2FresetPassword.js&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(api)/./src/pages/api/resetPassword.js":
/*!****************************************!*\
  !*** ./src/pages/api/resetPassword.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pg */ \"pg\");\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pg__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\ndotenv__WEBPACK_IMPORTED_MODULE_2___default().config();\nconst isProduction = \"development\" === \"production\";\nconst pool = new pg__WEBPACK_IMPORTED_MODULE_0__.Pool({\n    user: process.env.DB_USER,\n    host: process.env.DB_HOST,\n    database: process.env.DB_NAME,\n    password: process.env.DB_PASSWORD,\n    port: process.env.DB_PORT || 5432,\n    ssl: isProduction ? {\n        rejectUnauthorized: true\n    } : {\n        rejectUnauthorized: false\n    }\n});\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        const { token, password } = req.body;\n        try {\n            const tokenQuery = \"SELECT user_id, expiry FROM password_reset_tokens WHERE token = $1 AND expiry > EXTRACT(EPOCH FROM NOW()) * 1000\";\n            const { rows } = await pool.query(tokenQuery, [\n                token\n            ]);\n            if (rows.length === 0) {\n                return res.status(400).json({\n                    message: \"Invalid or expired token.\"\n                });\n            }\n            const userId = rows[0].user_id;\n            const saltRounds = 10;\n            const hashedPassword = bcryptjs__WEBPACK_IMPORTED_MODULE_1___default().hashSync(password, saltRounds);\n            const updateQuery = \"UPDATE users SET password = $1 WHERE id = $2\";\n            await pool.query(updateQuery, [\n                hashedPassword,\n                userId\n            ]);\n            const deleteTokenQuery = \"DELETE FROM password_reset_tokens WHERE token = $1\";\n            await pool.query(deleteTokenQuery, [\n                token\n            ]);\n            res.status(200).json({\n                message: \"Password has been reset successfully.\"\n            });\n        } catch (error) {\n            console.error(\"Reset Password Error:\", error);\n            res.status(500).json({\n                message: \"Internal server error.\"\n            });\n        }\n    } else {\n        res.setHeader(\"Allow\", [\n            \"POST\"\n        ]);\n        res.status(405).end(\"Method Not Allowed\");\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3Jlc2V0UGFzc3dvcmQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUEwQjtBQUNJO0FBQ0Y7QUFFNUJFLG9EQUFhO0FBQ2IsTUFBTUUsZUFBZUMsa0JBQXlCO0FBRTlDLE1BQU1DLE9BQU8sSUFBSU4sb0NBQUlBLENBQUM7SUFDcEJPLE1BQU1GLFFBQVFHLEdBQUcsQ0FBQ0MsT0FBTztJQUN6QkMsTUFBTUwsUUFBUUcsR0FBRyxDQUFDRyxPQUFPO0lBQ3pCQyxVQUFVUCxRQUFRRyxHQUFHLENBQUNLLE9BQU87SUFDN0JDLFVBQVVULFFBQVFHLEdBQUcsQ0FBQ08sV0FBVztJQUNqQ0MsTUFBTVgsUUFBUUcsR0FBRyxDQUFDUyxPQUFPLElBQUk7SUFDN0JDLEtBQUtkLGVBQWU7UUFBRWUsb0JBQW9CO0lBQUssSUFBSTtRQUFFQSxvQkFBb0I7SUFBTTtBQUVqRjtBQUVlLGVBQWVDLFFBQVFDLEdBQUcsRUFBRUMsR0FBRztJQUM1QyxJQUFJRCxJQUFJRSxNQUFNLEtBQUssUUFBUTtRQUN6QixNQUFNLEVBQUVDLEtBQUssRUFBRVYsUUFBUSxFQUFFLEdBQUdPLElBQUlJLElBQUk7UUFDcEMsSUFBSTtZQUNGLE1BQU1DLGFBQ0o7WUFDRixNQUFNLEVBQUVDLElBQUksRUFBRSxHQUFHLE1BQU1yQixLQUFLc0IsS0FBSyxDQUFDRixZQUFZO2dCQUFDRjthQUFNO1lBRXJELElBQUlHLEtBQUtFLE1BQU0sS0FBSyxHQUFHO2dCQUNyQixPQUFPUCxJQUFJUSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO29CQUFFQyxTQUFTO2dCQUE0QjtZQUNyRTtZQUVBLE1BQU1DLFNBQVNOLElBQUksQ0FBQyxFQUFFLENBQUNPLE9BQU87WUFFOUIsTUFBTUMsYUFBYTtZQUNuQixNQUFNQyxpQkFBaUJuQyx3REFBZSxDQUFDYSxVQUFVcUI7WUFFakQsTUFBTUcsY0FBYztZQUNwQixNQUFNaEMsS0FBS3NCLEtBQUssQ0FBQ1UsYUFBYTtnQkFBQ0Y7Z0JBQWdCSDthQUFPO1lBRXRELE1BQU1NLG1CQUNKO1lBQ0YsTUFBTWpDLEtBQUtzQixLQUFLLENBQUNXLGtCQUFrQjtnQkFBQ2Y7YUFBTTtZQUUxQ0YsSUFDR1EsTUFBTSxDQUFDLEtBQ1BDLElBQUksQ0FBQztnQkFBRUMsU0FBUztZQUF3QztRQUM3RCxFQUFFLE9BQU9RLE9BQU87WUFDZEMsUUFBUUQsS0FBSyxDQUFDLHlCQUF5QkE7WUFDdkNsQixJQUFJUSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFFQyxTQUFTO1lBQXlCO1FBQzNEO0lBQ0YsT0FBTztRQUNMVixJQUFJb0IsU0FBUyxDQUFDLFNBQVM7WUFBQztTQUFPO1FBQy9CcEIsSUFBSVEsTUFBTSxDQUFDLEtBQUthLEdBQUcsQ0FBQztJQUN0QjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2FwaS9yZXNldFBhc3N3b3JkLmpzPzhjYjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUG9vbCB9IGZyb20gXCJwZ1wiO1xuaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0anNcIjtcbmltcG9ydCBkb3RlbnYgZnJvbSAnZG90ZW52JztcblxuZG90ZW52LmNvbmZpZygpO1xuY29uc3QgaXNQcm9kdWN0aW9uID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJztcblxuY29uc3QgcG9vbCA9IG5ldyBQb29sKHtcbiAgdXNlcjogcHJvY2Vzcy5lbnYuREJfVVNFUixcbiAgaG9zdDogcHJvY2Vzcy5lbnYuREJfSE9TVCxcbiAgZGF0YWJhc2U6IHByb2Nlc3MuZW52LkRCX05BTUUsXG4gIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5EQl9QQVNTV09SRCxcbiAgcG9ydDogcHJvY2Vzcy5lbnYuREJfUE9SVCB8fCA1NDMyLFxuICBzc2w6IGlzUHJvZHVjdGlvbiA/IHsgcmVqZWN0VW5hdXRob3JpemVkOiB0cnVlIH0gOiB7IHJlamVjdFVuYXV0aG9yaXplZDogZmFsc2UgfVxuICAvLyBzc2w6IHsgcmVqZWN0VW5hdXRob3JpemVkOiBmYWxzZSB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJQT1NUXCIpIHtcbiAgICBjb25zdCB7IHRva2VuLCBwYXNzd29yZCB9ID0gcmVxLmJvZHk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHRva2VuUXVlcnkgPVxuICAgICAgICBcIlNFTEVDVCB1c2VyX2lkLCBleHBpcnkgRlJPTSBwYXNzd29yZF9yZXNldF90b2tlbnMgV0hFUkUgdG9rZW4gPSAkMSBBTkQgZXhwaXJ5ID4gRVhUUkFDVChFUE9DSCBGUk9NIE5PVygpKSAqIDEwMDBcIjtcbiAgICAgIGNvbnN0IHsgcm93cyB9ID0gYXdhaXQgcG9vbC5xdWVyeSh0b2tlblF1ZXJ5LCBbdG9rZW5dKTtcblxuICAgICAgaWYgKHJvd3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IG1lc3NhZ2U6IFwiSW52YWxpZCBvciBleHBpcmVkIHRva2VuLlwiIH0pO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB1c2VySWQgPSByb3dzWzBdLnVzZXJfaWQ7XG5cbiAgICAgIGNvbnN0IHNhbHRSb3VuZHMgPSAxMDtcbiAgICAgIGNvbnN0IGhhc2hlZFBhc3N3b3JkID0gYmNyeXB0Lmhhc2hTeW5jKHBhc3N3b3JkLCBzYWx0Um91bmRzKTtcblxuICAgICAgY29uc3QgdXBkYXRlUXVlcnkgPSBcIlVQREFURSB1c2VycyBTRVQgcGFzc3dvcmQgPSAkMSBXSEVSRSBpZCA9ICQyXCI7XG4gICAgICBhd2FpdCBwb29sLnF1ZXJ5KHVwZGF0ZVF1ZXJ5LCBbaGFzaGVkUGFzc3dvcmQsIHVzZXJJZF0pO1xuXG4gICAgICBjb25zdCBkZWxldGVUb2tlblF1ZXJ5ID1cbiAgICAgICAgXCJERUxFVEUgRlJPTSBwYXNzd29yZF9yZXNldF90b2tlbnMgV0hFUkUgdG9rZW4gPSAkMVwiO1xuICAgICAgYXdhaXQgcG9vbC5xdWVyeShkZWxldGVUb2tlblF1ZXJ5LCBbdG9rZW5dKTtcblxuICAgICAgcmVzXG4gICAgICAgIC5zdGF0dXMoMjAwKVxuICAgICAgICAuanNvbih7IG1lc3NhZ2U6IFwiUGFzc3dvcmQgaGFzIGJlZW4gcmVzZXQgc3VjY2Vzc2Z1bGx5LlwiIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiUmVzZXQgUGFzc3dvcmQgRXJyb3I6XCIsIGVycm9yKTtcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogXCJJbnRlcm5hbCBzZXJ2ZXIgZXJyb3IuXCIgfSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJlcy5zZXRIZWFkZXIoXCJBbGxvd1wiLCBbXCJQT1NUXCJdKTtcbiAgICByZXMuc3RhdHVzKDQwNSkuZW5kKFwiTWV0aG9kIE5vdCBBbGxvd2VkXCIpO1xuICB9XG59XG4iXSwibmFtZXMiOlsiUG9vbCIsImJjcnlwdCIsImRvdGVudiIsImNvbmZpZyIsImlzUHJvZHVjdGlvbiIsInByb2Nlc3MiLCJwb29sIiwidXNlciIsImVudiIsIkRCX1VTRVIiLCJob3N0IiwiREJfSE9TVCIsImRhdGFiYXNlIiwiREJfTkFNRSIsInBhc3N3b3JkIiwiREJfUEFTU1dPUkQiLCJwb3J0IiwiREJfUE9SVCIsInNzbCIsInJlamVjdFVuYXV0aG9yaXplZCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJ0b2tlbiIsImJvZHkiLCJ0b2tlblF1ZXJ5Iiwicm93cyIsInF1ZXJ5IiwibGVuZ3RoIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJ1c2VySWQiLCJ1c2VyX2lkIiwic2FsdFJvdW5kcyIsImhhc2hlZFBhc3N3b3JkIiwiaGFzaFN5bmMiLCJ1cGRhdGVRdWVyeSIsImRlbGV0ZVRva2VuUXVlcnkiLCJlcnJvciIsImNvbnNvbGUiLCJzZXRIZWFkZXIiLCJlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/resetPassword.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2FresetPassword&preferredRegion=&absolutePagePath=.%2Fsrc%2Fpages%2Fapi%2FresetPassword.js&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();