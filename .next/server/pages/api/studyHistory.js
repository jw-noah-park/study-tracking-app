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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pg */ \"pg\");\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pg__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\ndotenv__WEBPACK_IMPORTED_MODULE_2___default().config();\nconst isProduction = \"development\" === \"production\";\nconst pool = new pg__WEBPACK_IMPORTED_MODULE_0__.Pool({\n    user: process.env.DB_USER,\n    host: process.env.DB_HOST,\n    database: process.env.DB_NAME,\n    password: process.env.DB_PASSWORD,\n    port: process.env.DB_PORT || 5432,\n    ssl: isProduction ? {\n        rejectUnauthorized: true\n    } : {\n        rejectUnauthorized: false\n    }\n});\nconst verifyToken = (token)=>{\n    if (!token) {\n        throw new Error(\"Token not provided\");\n    }\n    return jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().verify(token, process.env.SECRET_KEY);\n};\nasync function handler(req, res) {\n    if (req.method !== \"GET\") {\n        return res.status(405).json({\n            error: \"Method Not Allowed\"\n        });\n    }\n    try {\n        const token = req.headers.authorization?.split(\" \")[1];\n        const decoded = verifyToken(token);\n        const userId = decoded.userId;\n        const query = `\n      SELECT \n        date, SUM(total_duration) as total_duration\n      FROM \n        study_history\n      WHERE \n        user_id = $1\n      GROUP BY \n        date\n      ORDER BY \n        date DESC`;\n        const result = await pool.query(query, [\n            userId\n        ]);\n        console.log(\"History fetched:\", result.rows);\n        return res.status(200).json(result.rows);\n    } catch (error) {\n        console.error(\"Error fetching history:\", error);\n        if (error.name === \"JsonWebTokenError\") {\n            return res.status(401).json({\n                error: \"Invalid token\"\n            });\n        }\n        return res.status(500).json({\n            error: \"Internal Server Error\",\n            message: error.message\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3N0dWR5SGlzdG9yeS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTBCO0FBQ0s7QUFDSDtBQUU1QkUsb0RBQWE7QUFDYixNQUFNRSxlQUFlQyxrQkFBeUI7QUFFOUMsTUFBTUMsT0FBTyxJQUFJTixvQ0FBSUEsQ0FBQztJQUNwQk8sTUFBTUYsUUFBUUcsR0FBRyxDQUFDQyxPQUFPO0lBQ3pCQyxNQUFNTCxRQUFRRyxHQUFHLENBQUNHLE9BQU87SUFDekJDLFVBQVVQLFFBQVFHLEdBQUcsQ0FBQ0ssT0FBTztJQUM3QkMsVUFBVVQsUUFBUUcsR0FBRyxDQUFDTyxXQUFXO0lBQ2pDQyxNQUFNWCxRQUFRRyxHQUFHLENBQUNTLE9BQU8sSUFBSTtJQUM3QkMsS0FBS2QsZUFBZTtRQUFFZSxvQkFBb0I7SUFBSyxJQUFJO1FBQUVBLG9CQUFvQjtJQUFNO0FBRWpGO0FBRUEsTUFBTUMsY0FBYyxDQUFDQztJQUNuQixJQUFJLENBQUNBLE9BQU87UUFDVixNQUFNLElBQUlDLE1BQU07SUFDbEI7SUFDQSxPQUFPckIsMERBQVUsQ0FBQ29CLE9BQU9oQixRQUFRRyxHQUFHLENBQUNnQixVQUFVO0FBQ2pEO0FBRWUsZUFBZUMsUUFBUUMsR0FBRyxFQUFFQyxHQUFHO0lBQzVDLElBQUlELElBQUlFLE1BQU0sS0FBSyxPQUFPO1FBQ3hCLE9BQU9ELElBQUlFLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUFxQjtJQUM1RDtJQUVBLElBQUk7UUFDRixNQUFNVixRQUFRSyxJQUFJTSxPQUFPLENBQUNDLGFBQWEsRUFBRUMsTUFBTSxJQUFJLENBQUMsRUFBRTtRQUN0RCxNQUFNQyxVQUFVZixZQUFZQztRQUU1QixNQUFNZSxTQUFTRCxRQUFRQyxNQUFNO1FBRTdCLE1BQU1DLFFBQVEsQ0FBQzs7Ozs7Ozs7OztpQkFVRixDQUFDO1FBRWQsTUFBTUMsU0FBUyxNQUFNaEMsS0FBSytCLEtBQUssQ0FBQ0EsT0FBTztZQUFDRDtTQUFPO1FBRS9DRyxRQUFRQyxHQUFHLENBQUMsb0JBQW9CRixPQUFPRyxJQUFJO1FBRTNDLE9BQU9kLElBQUlFLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNRLE9BQU9HLElBQUk7SUFDekMsRUFBRSxPQUFPVixPQUFPO1FBQ2RRLFFBQVFSLEtBQUssQ0FBQywyQkFBMkJBO1FBQ3pDLElBQUlBLE1BQU1XLElBQUksS0FBSyxxQkFBcUI7WUFDdEMsT0FBT2YsSUFBSUUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUMsT0FBTztZQUFnQjtRQUN2RDtRQUNBLE9BQU9KLElBQ0pFLE1BQU0sQ0FBQyxLQUNQQyxJQUFJLENBQUM7WUFBRUMsT0FBTztZQUF5QlksU0FBU1osTUFBTVksT0FBTztRQUFDO0lBQ25FO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvYXBpL3N0dWR5SGlzdG9yeS5qcz9kOTRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBvb2wgfSBmcm9tIFwicGdcIjtcbmltcG9ydCBqd3QgZnJvbSBcImpzb253ZWJ0b2tlblwiO1xuaW1wb3J0IGRvdGVudiBmcm9tICdkb3RlbnYnO1xuXG5kb3RlbnYuY29uZmlnKCk7XG5jb25zdCBpc1Byb2R1Y3Rpb24gPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nO1xuXG5jb25zdCBwb29sID0gbmV3IFBvb2woe1xuICB1c2VyOiBwcm9jZXNzLmVudi5EQl9VU0VSLFxuICBob3N0OiBwcm9jZXNzLmVudi5EQl9IT1NULFxuICBkYXRhYmFzZTogcHJvY2Vzcy5lbnYuREJfTkFNRSxcbiAgcGFzc3dvcmQ6IHByb2Nlc3MuZW52LkRCX1BBU1NXT1JELFxuICBwb3J0OiBwcm9jZXNzLmVudi5EQl9QT1JUIHx8IDU0MzIsXG4gIHNzbDogaXNQcm9kdWN0aW9uID8geyByZWplY3RVbmF1dGhvcml6ZWQ6IHRydWUgfSA6IHsgcmVqZWN0VW5hdXRob3JpemVkOiBmYWxzZSB9XG4gIC8vIHNzbDogeyByZWplY3RVbmF1dGhvcml6ZWQ6IGZhbHNlIH1cbn0pO1xuXG5jb25zdCB2ZXJpZnlUb2tlbiA9ICh0b2tlbikgPT4ge1xuICBpZiAoIXRva2VuKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVG9rZW4gbm90IHByb3ZpZGVkXCIpO1xuICB9XG4gIHJldHVybiBqd3QudmVyaWZ5KHRva2VuLCBwcm9jZXNzLmVudi5TRUNSRVRfS0VZKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgaWYgKHJlcS5tZXRob2QgIT09IFwiR0VUXCIpIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBlcnJvcjogXCJNZXRob2QgTm90IEFsbG93ZWRcIiB9KTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3QgdG9rZW4gPSByZXEuaGVhZGVycy5hdXRob3JpemF0aW9uPy5zcGxpdChcIiBcIilbMV07XG4gICAgY29uc3QgZGVjb2RlZCA9IHZlcmlmeVRva2VuKHRva2VuKTtcblxuICAgIGNvbnN0IHVzZXJJZCA9IGRlY29kZWQudXNlcklkO1xuXG4gICAgY29uc3QgcXVlcnkgPSBgXG4gICAgICBTRUxFQ1QgXG4gICAgICAgIGRhdGUsIFNVTSh0b3RhbF9kdXJhdGlvbikgYXMgdG90YWxfZHVyYXRpb25cbiAgICAgIEZST00gXG4gICAgICAgIHN0dWR5X2hpc3RvcnlcbiAgICAgIFdIRVJFIFxuICAgICAgICB1c2VyX2lkID0gJDFcbiAgICAgIEdST1VQIEJZIFxuICAgICAgICBkYXRlXG4gICAgICBPUkRFUiBCWSBcbiAgICAgICAgZGF0ZSBERVNDYDtcblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHBvb2wucXVlcnkocXVlcnksIFt1c2VySWRdKTtcblxuICAgIGNvbnNvbGUubG9nKFwiSGlzdG9yeSBmZXRjaGVkOlwiLCByZXN1bHQucm93cyk7XG5cbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24ocmVzdWx0LnJvd3MpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBoaXN0b3J5OlwiLCBlcnJvcik7XG4gICAgaWYgKGVycm9yLm5hbWUgPT09IFwiSnNvbldlYlRva2VuRXJyb3JcIikge1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5qc29uKHsgZXJyb3I6IFwiSW52YWxpZCB0b2tlblwiIH0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzXG4gICAgICAuc3RhdHVzKDUwMClcbiAgICAgIC5qc29uKHsgZXJyb3I6IFwiSW50ZXJuYWwgU2VydmVyIEVycm9yXCIsIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJQb29sIiwiand0IiwiZG90ZW52IiwiY29uZmlnIiwiaXNQcm9kdWN0aW9uIiwicHJvY2VzcyIsInBvb2wiLCJ1c2VyIiwiZW52IiwiREJfVVNFUiIsImhvc3QiLCJEQl9IT1NUIiwiZGF0YWJhc2UiLCJEQl9OQU1FIiwicGFzc3dvcmQiLCJEQl9QQVNTV09SRCIsInBvcnQiLCJEQl9QT1JUIiwic3NsIiwicmVqZWN0VW5hdXRob3JpemVkIiwidmVyaWZ5VG9rZW4iLCJ0b2tlbiIsIkVycm9yIiwidmVyaWZ5IiwiU0VDUkVUX0tFWSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJoZWFkZXJzIiwiYXV0aG9yaXphdGlvbiIsInNwbGl0IiwiZGVjb2RlZCIsInVzZXJJZCIsInF1ZXJ5IiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsInJvd3MiLCJuYW1lIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/studyHistory.js\n");

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