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
exports.id = "pages/api/studyHistory";
exports.ids = ["pages/api/studyHistory"];
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

/***/ "(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2FstudyHistory&preferredRegion=&absolutePagePath=.%2Fsrc%2Fpages%2Fapi%2FstudyHistory.js&middlewareConfigBase64=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2FstudyHistory&preferredRegion=&absolutePagePath=.%2Fsrc%2Fpages%2Fapi%2FstudyHistory.js&middlewareConfigBase64=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   routeModule: () => (/* binding */ routeModule)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/pages-api/module.compiled */ \"(api)/./node_modules/next/dist/server/future/route-modules/pages-api/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(api)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"(api)/./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var _src_pages_api_studyHistory_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/pages/api/studyHistory.js */ \"(api)/./src/pages/api/studyHistory.js\");\n\n\n\n// Import the userland code.\n\n// Re-export the handler (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_src_pages_api_studyHistory_js__WEBPACK_IMPORTED_MODULE_3__, \"default\"));\n// Re-export config.\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_src_pages_api_studyHistory_js__WEBPACK_IMPORTED_MODULE_3__, \"config\");\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,\n        page: \"/api/studyHistory\",\n        pathname: \"/api/studyHistory\",\n        // The following aren't used in production.\n        bundlePath: \"\",\n        filename: \"\"\n    },\n    userland: _src_pages_api_studyHistory_js__WEBPACK_IMPORTED_MODULE_3__\n});\n\n//# sourceMappingURL=pages-api.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9pbmRleC5qcz9raW5kPVBBR0VTX0FQSSZwYWdlPSUyRmFwaSUyRnN0dWR5SGlzdG9yeSZwcmVmZXJyZWRSZWdpb249JmFic29sdXRlUGFnZVBhdGg9LiUyRnNyYyUyRnBhZ2VzJTJGYXBpJTJGc3R1ZHlIaXN0b3J5LmpzJm1pZGRsZXdhcmVDb25maWdCYXNlNjQ9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNMO0FBQzFEO0FBQzREO0FBQzVEO0FBQ0EsaUVBQWUsd0VBQUssQ0FBQywyREFBUSxZQUFZLEVBQUM7QUFDMUM7QUFDTyxlQUFlLHdFQUFLLENBQUMsMkRBQVE7QUFDcEM7QUFDTyx3QkFBd0IsZ0hBQW1CO0FBQ2xEO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLFlBQVk7QUFDWixDQUFDOztBQUVEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLz81ZjcwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhZ2VzQVBJUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9wYWdlcy1hcGkvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgaG9pc3QgfSBmcm9tIFwibmV4dC9kaXN0L2J1aWxkL3RlbXBsYXRlcy9oZWxwZXJzXCI7XG4vLyBJbXBvcnQgdGhlIHVzZXJsYW5kIGNvZGUuXG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiLi9zcmMvcGFnZXMvYXBpL3N0dWR5SGlzdG9yeS5qc1wiO1xuLy8gUmUtZXhwb3J0IHRoZSBoYW5kbGVyIChzaG91bGQgYmUgdGhlIGRlZmF1bHQgZXhwb3J0KS5cbmV4cG9ydCBkZWZhdWx0IGhvaXN0KHVzZXJsYW5kLCBcImRlZmF1bHRcIik7XG4vLyBSZS1leHBvcnQgY29uZmlnLlxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IGhvaXN0KHVzZXJsYW5kLCBcImNvbmZpZ1wiKTtcbi8vIENyZWF0ZSBhbmQgZXhwb3J0IHRoZSByb3V0ZSBtb2R1bGUgdGhhdCB3aWxsIGJlIGNvbnN1bWVkLlxuZXhwb3J0IGNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IFBhZ2VzQVBJUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLlBBR0VTX0FQSSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3N0dWR5SGlzdG9yeVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3N0dWR5SGlzdG9yeVwiLFxuICAgICAgICAvLyBUaGUgZm9sbG93aW5nIGFyZW4ndCB1c2VkIGluIHByb2R1Y3Rpb24uXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcIlwiXG4gICAgfSxcbiAgICB1c2VybGFuZFxufSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhZ2VzLWFwaS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2FstudyHistory&preferredRegion=&absolutePagePath=.%2Fsrc%2Fpages%2Fapi%2FstudyHistory.js&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(api)/./src/pages/api/studyHistory.js":
/*!***************************************!*\
  !*** ./src/pages/api/studyHistory.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pg */ \"pg\");\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pg__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\ndotenv__WEBPACK_IMPORTED_MODULE_2___default().config();\n// const isProduction = process.env.NODE_ENV === 'production';\nconst pool = new pg__WEBPACK_IMPORTED_MODULE_0__.Pool({\n    user: process.env.DB_USER,\n    host: process.env.DB_HOST,\n    database: process.env.DB_NAME,\n    password: process.env.DB_PASSWORD,\n    port: process.env.DB_PORT || 5432,\n    // ssl: isProduction ? { rejectUnauthorized: true } : { rejectUnauthorized: false }\n    ssl: {\n        rejectUnauthorized: false\n    }\n});\nconst verifyToken = (token)=>{\n    if (!token) {\n        throw new Error(\"Token not provided\");\n    }\n    return jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().verify(token, process.env.SECRET_KEY);\n};\nasync function handler(req, res) {\n    if (req.method !== \"GET\") {\n        return res.status(405).json({\n            error: \"Method Not Allowed\"\n        });\n    }\n    try {\n        const token = req.headers.authorization?.split(\" \")[1];\n        const decoded = verifyToken(token);\n        const userId = decoded.userId;\n        const query = `\n      SELECT \n        date, SUM(total_duration) as total_duration\n      FROM \n        study_history\n      WHERE \n        user_id = $1\n      GROUP BY \n        date\n      ORDER BY \n        date DESC`;\n        const result = await pool.query(query, [\n            userId\n        ]);\n        console.log(\"History fetched:\", result.rows);\n        return res.status(200).json(result.rows);\n    } catch (error) {\n        console.error(\"Error fetching history:\", error);\n        if (error.name === \"JsonWebTokenError\") {\n            return res.status(401).json({\n                error: \"Invalid token\"\n            });\n        }\n        return res.status(500).json({\n            error: \"Internal Server Error\",\n            message: error.message\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3N0dWR5SGlzdG9yeS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTBCO0FBQ0s7QUFDSDtBQUU1QkUsb0RBQWE7QUFDYiw4REFBOEQ7QUFFOUQsTUFBTUUsT0FBTyxJQUFJSixvQ0FBSUEsQ0FBQztJQUNwQkssTUFBTUMsUUFBUUMsR0FBRyxDQUFDQyxPQUFPO0lBQ3pCQyxNQUFNSCxRQUFRQyxHQUFHLENBQUNHLE9BQU87SUFDekJDLFVBQVVMLFFBQVFDLEdBQUcsQ0FBQ0ssT0FBTztJQUM3QkMsVUFBVVAsUUFBUUMsR0FBRyxDQUFDTyxXQUFXO0lBQ2pDQyxNQUFNVCxRQUFRQyxHQUFHLENBQUNTLE9BQU8sSUFBSTtJQUM3QixtRkFBbUY7SUFDbkZDLEtBQUs7UUFBRUMsb0JBQW9CO0lBQU07QUFDbkM7QUFFQSxNQUFNQyxjQUFjLENBQUNDO0lBQ25CLElBQUksQ0FBQ0EsT0FBTztRQUNWLE1BQU0sSUFBSUMsTUFBTTtJQUNsQjtJQUNBLE9BQU9wQiwwREFBVSxDQUFDbUIsT0FBT2QsUUFBUUMsR0FBRyxDQUFDZ0IsVUFBVTtBQUNqRDtBQUVlLGVBQWVDLFFBQVFDLEdBQUcsRUFBRUMsR0FBRztJQUM1QyxJQUFJRCxJQUFJRSxNQUFNLEtBQUssT0FBTztRQUN4QixPQUFPRCxJQUFJRSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLE9BQU87UUFBcUI7SUFDNUQ7SUFFQSxJQUFJO1FBQ0YsTUFBTVYsUUFBUUssSUFBSU0sT0FBTyxDQUFDQyxhQUFhLEVBQUVDLE1BQU0sSUFBSSxDQUFDLEVBQUU7UUFDdEQsTUFBTUMsVUFBVWYsWUFBWUM7UUFFNUIsTUFBTWUsU0FBU0QsUUFBUUMsTUFBTTtRQUU3QixNQUFNQyxRQUFRLENBQUM7Ozs7Ozs7Ozs7aUJBVUYsQ0FBQztRQUVkLE1BQU1DLFNBQVMsTUFBTWpDLEtBQUtnQyxLQUFLLENBQUNBLE9BQU87WUFBQ0Q7U0FBTztRQUUvQ0csUUFBUUMsR0FBRyxDQUFDLG9CQUFvQkYsT0FBT0csSUFBSTtRQUUzQyxPQUFPZCxJQUFJRSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDUSxPQUFPRyxJQUFJO0lBQ3pDLEVBQUUsT0FBT1YsT0FBTztRQUNkUSxRQUFRUixLQUFLLENBQUMsMkJBQTJCQTtRQUN6QyxJQUFJQSxNQUFNVyxJQUFJLEtBQUsscUJBQXFCO1lBQ3RDLE9BQU9mLElBQUlFLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVDLE9BQU87WUFBZ0I7UUFDdkQ7UUFDQSxPQUFPSixJQUNKRSxNQUFNLENBQUMsS0FDUEMsSUFBSSxDQUFDO1lBQUVDLE9BQU87WUFBeUJZLFNBQVNaLE1BQU1ZLE9BQU87UUFBQztJQUNuRTtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2FwaS9zdHVkeUhpc3RvcnkuanM/ZDk0YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQb29sIH0gZnJvbSBcInBnXCI7XG5pbXBvcnQgand0IGZyb20gXCJqc29ud2VidG9rZW5cIjtcbmltcG9ydCBkb3RlbnYgZnJvbSAnZG90ZW52JztcblxuZG90ZW52LmNvbmZpZygpO1xuLy8gY29uc3QgaXNQcm9kdWN0aW9uID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJztcblxuY29uc3QgcG9vbCA9IG5ldyBQb29sKHtcbiAgdXNlcjogcHJvY2Vzcy5lbnYuREJfVVNFUixcbiAgaG9zdDogcHJvY2Vzcy5lbnYuREJfSE9TVCxcbiAgZGF0YWJhc2U6IHByb2Nlc3MuZW52LkRCX05BTUUsXG4gIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5EQl9QQVNTV09SRCxcbiAgcG9ydDogcHJvY2Vzcy5lbnYuREJfUE9SVCB8fCA1NDMyLFxuICAvLyBzc2w6IGlzUHJvZHVjdGlvbiA/IHsgcmVqZWN0VW5hdXRob3JpemVkOiB0cnVlIH0gOiB7IHJlamVjdFVuYXV0aG9yaXplZDogZmFsc2UgfVxuICBzc2w6IHsgcmVqZWN0VW5hdXRob3JpemVkOiBmYWxzZSB9XG59KTtcblxuY29uc3QgdmVyaWZ5VG9rZW4gPSAodG9rZW4pID0+IHtcbiAgaWYgKCF0b2tlbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlRva2VuIG5vdCBwcm92aWRlZFwiKTtcbiAgfVxuICByZXR1cm4gand0LnZlcmlmeSh0b2tlbiwgcHJvY2Vzcy5lbnYuU0VDUkVUX0tFWSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGlmIChyZXEubWV0aG9kICE9PSBcIkdFVFwiKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA1KS5qc29uKHsgZXJyb3I6IFwiTWV0aG9kIE5vdCBBbGxvd2VkXCIgfSk7XG4gIH1cblxuICB0cnkge1xuICAgIGNvbnN0IHRva2VuID0gcmVxLmhlYWRlcnMuYXV0aG9yaXphdGlvbj8uc3BsaXQoXCIgXCIpWzFdO1xuICAgIGNvbnN0IGRlY29kZWQgPSB2ZXJpZnlUb2tlbih0b2tlbik7XG5cbiAgICBjb25zdCB1c2VySWQgPSBkZWNvZGVkLnVzZXJJZDtcblxuICAgIGNvbnN0IHF1ZXJ5ID0gYFxuICAgICAgU0VMRUNUIFxuICAgICAgICBkYXRlLCBTVU0odG90YWxfZHVyYXRpb24pIGFzIHRvdGFsX2R1cmF0aW9uXG4gICAgICBGUk9NIFxuICAgICAgICBzdHVkeV9oaXN0b3J5XG4gICAgICBXSEVSRSBcbiAgICAgICAgdXNlcl9pZCA9ICQxXG4gICAgICBHUk9VUCBCWSBcbiAgICAgICAgZGF0ZVxuICAgICAgT1JERVIgQlkgXG4gICAgICAgIGRhdGUgREVTQ2A7XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBwb29sLnF1ZXJ5KHF1ZXJ5LCBbdXNlcklkXSk7XG5cbiAgICBjb25zb2xlLmxvZyhcIkhpc3RvcnkgZmV0Y2hlZDpcIiwgcmVzdWx0LnJvd3MpO1xuXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3VsdC5yb3dzKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgaGlzdG9yeTpcIiwgZXJyb3IpO1xuICAgIGlmIChlcnJvci5uYW1lID09PSBcIkpzb25XZWJUb2tlbkVycm9yXCIpIHtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMSkuanNvbih7IGVycm9yOiBcIkludmFsaWQgdG9rZW5cIiB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc1xuICAgICAgLnN0YXR1cyg1MDApXG4gICAgICAuanNvbih7IGVycm9yOiBcIkludGVybmFsIFNlcnZlciBFcnJvclwiLCBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIH0pO1xuICB9XG59XG4iXSwibmFtZXMiOlsiUG9vbCIsImp3dCIsImRvdGVudiIsImNvbmZpZyIsInBvb2wiLCJ1c2VyIiwicHJvY2VzcyIsImVudiIsIkRCX1VTRVIiLCJob3N0IiwiREJfSE9TVCIsImRhdGFiYXNlIiwiREJfTkFNRSIsInBhc3N3b3JkIiwiREJfUEFTU1dPUkQiLCJwb3J0IiwiREJfUE9SVCIsInNzbCIsInJlamVjdFVuYXV0aG9yaXplZCIsInZlcmlmeVRva2VuIiwidG9rZW4iLCJFcnJvciIsInZlcmlmeSIsIlNFQ1JFVF9LRVkiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwic3RhdHVzIiwianNvbiIsImVycm9yIiwiaGVhZGVycyIsImF1dGhvcml6YXRpb24iLCJzcGxpdCIsImRlY29kZWQiLCJ1c2VySWQiLCJxdWVyeSIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJyb3dzIiwibmFtZSIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/studyHistory.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2FstudyHistory&preferredRegion=&absolutePagePath=.%2Fsrc%2Fpages%2Fapi%2FstudyHistory.js&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();