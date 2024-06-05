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
exports.id = "pages/api/studySessionByDate";
exports.ids = ["pages/api/studySessionByDate"];
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

/***/ "(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2FstudySessionByDate&preferredRegion=&absolutePagePath=.%2Fsrc%2Fpages%2Fapi%2FstudySessionByDate.js&middlewareConfigBase64=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2FstudySessionByDate&preferredRegion=&absolutePagePath=.%2Fsrc%2Fpages%2Fapi%2FstudySessionByDate.js&middlewareConfigBase64=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   routeModule: () => (/* binding */ routeModule)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/pages-api/module.compiled */ \"(api)/./node_modules/next/dist/server/future/route-modules/pages-api/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(api)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"(api)/./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var _src_pages_api_studySessionByDate_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/pages/api/studySessionByDate.js */ \"(api)/./src/pages/api/studySessionByDate.js\");\n\n\n\n// Import the userland code.\n\n// Re-export the handler (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_src_pages_api_studySessionByDate_js__WEBPACK_IMPORTED_MODULE_3__, \"default\"));\n// Re-export config.\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_src_pages_api_studySessionByDate_js__WEBPACK_IMPORTED_MODULE_3__, \"config\");\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,\n        page: \"/api/studySessionByDate\",\n        pathname: \"/api/studySessionByDate\",\n        // The following aren't used in production.\n        bundlePath: \"\",\n        filename: \"\"\n    },\n    userland: _src_pages_api_studySessionByDate_js__WEBPACK_IMPORTED_MODULE_3__\n});\n\n//# sourceMappingURL=pages-api.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9pbmRleC5qcz9raW5kPVBBR0VTX0FQSSZwYWdlPSUyRmFwaSUyRnN0dWR5U2Vzc2lvbkJ5RGF0ZSZwcmVmZXJyZWRSZWdpb249JmFic29sdXRlUGFnZVBhdGg9LiUyRnNyYyUyRnBhZ2VzJTJGYXBpJTJGc3R1ZHlTZXNzaW9uQnlEYXRlLmpzJm1pZGRsZXdhcmVDb25maWdCYXNlNjQ9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNMO0FBQzFEO0FBQ2tFO0FBQ2xFO0FBQ0EsaUVBQWUsd0VBQUssQ0FBQyxpRUFBUSxZQUFZLEVBQUM7QUFDMUM7QUFDTyxlQUFlLHdFQUFLLENBQUMsaUVBQVE7QUFDcEM7QUFDTyx3QkFBd0IsZ0hBQW1CO0FBQ2xEO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLFlBQVk7QUFDWixDQUFDOztBQUVEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLz82NDhmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhZ2VzQVBJUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9wYWdlcy1hcGkvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgaG9pc3QgfSBmcm9tIFwibmV4dC9kaXN0L2J1aWxkL3RlbXBsYXRlcy9oZWxwZXJzXCI7XG4vLyBJbXBvcnQgdGhlIHVzZXJsYW5kIGNvZGUuXG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiLi9zcmMvcGFnZXMvYXBpL3N0dWR5U2Vzc2lvbkJ5RGF0ZS5qc1wiO1xuLy8gUmUtZXhwb3J0IHRoZSBoYW5kbGVyIChzaG91bGQgYmUgdGhlIGRlZmF1bHQgZXhwb3J0KS5cbmV4cG9ydCBkZWZhdWx0IGhvaXN0KHVzZXJsYW5kLCBcImRlZmF1bHRcIik7XG4vLyBSZS1leHBvcnQgY29uZmlnLlxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IGhvaXN0KHVzZXJsYW5kLCBcImNvbmZpZ1wiKTtcbi8vIENyZWF0ZSBhbmQgZXhwb3J0IHRoZSByb3V0ZSBtb2R1bGUgdGhhdCB3aWxsIGJlIGNvbnN1bWVkLlxuZXhwb3J0IGNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IFBhZ2VzQVBJUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLlBBR0VTX0FQSSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3N0dWR5U2Vzc2lvbkJ5RGF0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3N0dWR5U2Vzc2lvbkJ5RGF0ZVwiLFxuICAgICAgICAvLyBUaGUgZm9sbG93aW5nIGFyZW4ndCB1c2VkIGluIHByb2R1Y3Rpb24uXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcIlwiXG4gICAgfSxcbiAgICB1c2VybGFuZFxufSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhZ2VzLWFwaS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2FstudySessionByDate&preferredRegion=&absolutePagePath=.%2Fsrc%2Fpages%2Fapi%2FstudySessionByDate.js&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(api)/./src/pages/api/studySessionByDate.js":
/*!*********************************************!*\
  !*** ./src/pages/api/studySessionByDate.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pg */ \"pg\");\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pg__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\ndotenv__WEBPACK_IMPORTED_MODULE_2___default().config();\n// const isProduction = process.env.NODE_ENV === \"production\";\nconst pool = new pg__WEBPACK_IMPORTED_MODULE_0__.Pool({\n    user: process.env.DB_USER,\n    host: process.env.DB_HOST,\n    database: process.env.DB_NAME,\n    password: process.env.DB_PASSWORD,\n    port: process.env.DB_PORT || 5432,\n    // ssl: isProduction\n    //   ? { rejectUnauthorized: true }\n    //   : { rejectUnauthorized: false },\n    ssl: {\n        rejectUnauthorized: false\n    }\n});\nconst verifyToken = (token)=>{\n    if (!token) {\n        throw new Error(\"Token not provided\");\n    }\n    return jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().verify(token, process.env.SECRET_KEY);\n};\nasync function handler(req, res) {\n    if (req.method !== \"GET\") {\n        return res.status(405).json({\n            error: \"Method Not Allowed\"\n        });\n    }\n    try {\n        const token = req.headers.authorization?.split(\" \")[1];\n        const decoded = verifyToken(token);\n        const userId = decoded.userId;\n        const { date } = req.query;\n        const query = `\n      SELECT \n      topic, description, start_time, end_time,\n      EXTRACT(EPOCH FROM (end_time - start_time)) AS duration\n      FROM \n        study_session\n      WHERE \n        user_id = $1 AND DATE(start_time) = $2\n      ORDER BY \n        start_time`;\n        const result = await pool.query(query, [\n            userId,\n            date\n        ]);\n        return res.status(200).json(result.rows);\n    } catch (error) {\n        console.error(\"Error fetching study sessions:\", error);\n        if (error.name === \"JsonWebTokenError\") {\n            return res.status(401).json({\n                error: \"Invalid token\"\n            });\n        }\n        return res.status(500).json({\n            error: \"Internal Server Error\",\n            message: error.message\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3N0dWR5U2Vzc2lvbkJ5RGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTBCO0FBQ0s7QUFDSDtBQUU1QkUsb0RBQWE7QUFDYiw4REFBOEQ7QUFFOUQsTUFBTUUsT0FBTyxJQUFJSixvQ0FBSUEsQ0FBQztJQUNwQkssTUFBTUMsUUFBUUMsR0FBRyxDQUFDQyxPQUFPO0lBQ3pCQyxNQUFNSCxRQUFRQyxHQUFHLENBQUNHLE9BQU87SUFDekJDLFVBQVVMLFFBQVFDLEdBQUcsQ0FBQ0ssT0FBTztJQUM3QkMsVUFBVVAsUUFBUUMsR0FBRyxDQUFDTyxXQUFXO0lBQ2pDQyxNQUFNVCxRQUFRQyxHQUFHLENBQUNTLE9BQU8sSUFBSTtJQUM3QixvQkFBb0I7SUFDcEIsbUNBQW1DO0lBQ25DLHFDQUFxQztJQUNyQ0MsS0FBSztRQUFFQyxvQkFBb0I7SUFBTTtBQUNuQztBQUVBLE1BQU1DLGNBQWMsQ0FBQ0M7SUFDbkIsSUFBSSxDQUFDQSxPQUFPO1FBQ1YsTUFBTSxJQUFJQyxNQUFNO0lBQ2xCO0lBQ0EsT0FBT3BCLDBEQUFVLENBQUNtQixPQUFPZCxRQUFRQyxHQUFHLENBQUNnQixVQUFVO0FBQ2pEO0FBRWUsZUFBZUMsUUFBUUMsR0FBRyxFQUFFQyxHQUFHO0lBQzVDLElBQUlELElBQUlFLE1BQU0sS0FBSyxPQUFPO1FBQ3hCLE9BQU9ELElBQUlFLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUFxQjtJQUM1RDtJQUVBLElBQUk7UUFDRixNQUFNVixRQUFRSyxJQUFJTSxPQUFPLENBQUNDLGFBQWEsRUFBRUMsTUFBTSxJQUFJLENBQUMsRUFBRTtRQUN0RCxNQUFNQyxVQUFVZixZQUFZQztRQUM1QixNQUFNZSxTQUFTRCxRQUFRQyxNQUFNO1FBRTdCLE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUdYLElBQUlZLEtBQUs7UUFFMUIsTUFBTUEsUUFBUSxDQUFDOzs7Ozs7Ozs7a0JBU0QsQ0FBQztRQUVmLE1BQU1DLFNBQVMsTUFBTWxDLEtBQUtpQyxLQUFLLENBQUNBLE9BQU87WUFBQ0Y7WUFBUUM7U0FBSztRQUVyRCxPQUFPVixJQUFJRSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDUyxPQUFPQyxJQUFJO0lBQ3pDLEVBQUUsT0FBT1QsT0FBTztRQUNkVSxRQUFRVixLQUFLLENBQUMsa0NBQWtDQTtRQUNoRCxJQUFJQSxNQUFNVyxJQUFJLEtBQUsscUJBQXFCO1lBQ3RDLE9BQU9mLElBQUlFLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVDLE9BQU87WUFBZ0I7UUFDdkQ7UUFDQSxPQUFPSixJQUNKRSxNQUFNLENBQUMsS0FDUEMsSUFBSSxDQUFDO1lBQUVDLE9BQU87WUFBeUJZLFNBQVNaLE1BQU1ZLE9BQU87UUFBQztJQUNuRTtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2FwaS9zdHVkeVNlc3Npb25CeURhdGUuanM/OWRlMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQb29sIH0gZnJvbSBcInBnXCI7XG5pbXBvcnQgand0IGZyb20gXCJqc29ud2VidG9rZW5cIjtcbmltcG9ydCBkb3RlbnYgZnJvbSBcImRvdGVudlwiO1xuXG5kb3RlbnYuY29uZmlnKCk7XG4vLyBjb25zdCBpc1Byb2R1Y3Rpb24gPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCI7XG5cbmNvbnN0IHBvb2wgPSBuZXcgUG9vbCh7XG4gIHVzZXI6IHByb2Nlc3MuZW52LkRCX1VTRVIsXG4gIGhvc3Q6IHByb2Nlc3MuZW52LkRCX0hPU1QsXG4gIGRhdGFiYXNlOiBwcm9jZXNzLmVudi5EQl9OQU1FLFxuICBwYXNzd29yZDogcHJvY2Vzcy5lbnYuREJfUEFTU1dPUkQsXG4gIHBvcnQ6IHByb2Nlc3MuZW52LkRCX1BPUlQgfHwgNTQzMixcbiAgLy8gc3NsOiBpc1Byb2R1Y3Rpb25cbiAgLy8gICA/IHsgcmVqZWN0VW5hdXRob3JpemVkOiB0cnVlIH1cbiAgLy8gICA6IHsgcmVqZWN0VW5hdXRob3JpemVkOiBmYWxzZSB9LFxuICBzc2w6IHsgcmVqZWN0VW5hdXRob3JpemVkOiBmYWxzZSB9XG59KTtcblxuY29uc3QgdmVyaWZ5VG9rZW4gPSAodG9rZW4pID0+IHtcbiAgaWYgKCF0b2tlbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlRva2VuIG5vdCBwcm92aWRlZFwiKTtcbiAgfVxuICByZXR1cm4gand0LnZlcmlmeSh0b2tlbiwgcHJvY2Vzcy5lbnYuU0VDUkVUX0tFWSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGlmIChyZXEubWV0aG9kICE9PSBcIkdFVFwiKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA1KS5qc29uKHsgZXJyb3I6IFwiTWV0aG9kIE5vdCBBbGxvd2VkXCIgfSk7XG4gIH1cblxuICB0cnkge1xuICAgIGNvbnN0IHRva2VuID0gcmVxLmhlYWRlcnMuYXV0aG9yaXphdGlvbj8uc3BsaXQoXCIgXCIpWzFdO1xuICAgIGNvbnN0IGRlY29kZWQgPSB2ZXJpZnlUb2tlbih0b2tlbik7XG4gICAgY29uc3QgdXNlcklkID0gZGVjb2RlZC51c2VySWQ7XG5cbiAgICBjb25zdCB7IGRhdGUgfSA9IHJlcS5xdWVyeTtcblxuICAgIGNvbnN0IHF1ZXJ5ID0gYFxuICAgICAgU0VMRUNUIFxuICAgICAgdG9waWMsIGRlc2NyaXB0aW9uLCBzdGFydF90aW1lLCBlbmRfdGltZSxcbiAgICAgIEVYVFJBQ1QoRVBPQ0ggRlJPTSAoZW5kX3RpbWUgLSBzdGFydF90aW1lKSkgQVMgZHVyYXRpb25cbiAgICAgIEZST00gXG4gICAgICAgIHN0dWR5X3Nlc3Npb25cbiAgICAgIFdIRVJFIFxuICAgICAgICB1c2VyX2lkID0gJDEgQU5EIERBVEUoc3RhcnRfdGltZSkgPSAkMlxuICAgICAgT1JERVIgQlkgXG4gICAgICAgIHN0YXJ0X3RpbWVgO1xuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcG9vbC5xdWVyeShxdWVyeSwgW3VzZXJJZCwgZGF0ZV0pO1xuXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3VsdC5yb3dzKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgc3R1ZHkgc2Vzc2lvbnM6XCIsIGVycm9yKTtcbiAgICBpZiAoZXJyb3IubmFtZSA9PT0gXCJKc29uV2ViVG9rZW5FcnJvclwiKSB7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDEpLmpzb24oeyBlcnJvcjogXCJJbnZhbGlkIHRva2VuXCIgfSk7XG4gICAgfVxuICAgIHJldHVybiByZXNcbiAgICAgIC5zdGF0dXMoNTAwKVxuICAgICAgLmpzb24oeyBlcnJvcjogXCJJbnRlcm5hbCBTZXJ2ZXIgRXJyb3JcIiwgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB9KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlBvb2wiLCJqd3QiLCJkb3RlbnYiLCJjb25maWciLCJwb29sIiwidXNlciIsInByb2Nlc3MiLCJlbnYiLCJEQl9VU0VSIiwiaG9zdCIsIkRCX0hPU1QiLCJkYXRhYmFzZSIsIkRCX05BTUUiLCJwYXNzd29yZCIsIkRCX1BBU1NXT1JEIiwicG9ydCIsIkRCX1BPUlQiLCJzc2wiLCJyZWplY3RVbmF1dGhvcml6ZWQiLCJ2ZXJpZnlUb2tlbiIsInRva2VuIiwiRXJyb3IiLCJ2ZXJpZnkiLCJTRUNSRVRfS0VZIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsImhlYWRlcnMiLCJhdXRob3JpemF0aW9uIiwic3BsaXQiLCJkZWNvZGVkIiwidXNlcklkIiwiZGF0ZSIsInF1ZXJ5IiwicmVzdWx0Iiwicm93cyIsImNvbnNvbGUiLCJuYW1lIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/studySessionByDate.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2FstudySessionByDate&preferredRegion=&absolutePagePath=.%2Fsrc%2Fpages%2Fapi%2FstudySessionByDate.js&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();