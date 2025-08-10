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
exports.id = "app/api/menu-item/route";
exports.ids = ["app/api/menu-item/route"];
exports.modules = {

/***/ "(rsc)/./app/api/menu-item/route.ts":
/*!************************************!*\
  !*** ./app/api/menu-item/route.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DELETE: () => (/* binding */ DELETE),\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST),\n/* harmony export */   PUT: () => (/* binding */ PUT)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/database */ \"(rsc)/./lib/database.ts\");\n/* harmony import */ var _models_MenuItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/models/MenuItem */ \"(rsc)/./models/MenuItem.ts\");\n\n\n\n// GET all menu items or single item by id\nasync function GET(req) {\n    await (0,_lib_database__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    const { searchParams } = new URL(req.url);\n    const id = searchParams.get('id');\n    if (id) {\n        const item = await _models_MenuItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findById(id);\n        if (!item) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Menu item not found'\n        }, {\n            status: 404\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(item);\n    }\n    const items = await _models_MenuItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"].find();\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(items);\n}\n// Create menu item\nasync function POST(req) {\n    await (0,_lib_database__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    const data = await req.json();\n    const item = await _models_MenuItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"].create(data);\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(item);\n}\n// Update menu item by id\nasync function PUT(req) {\n    await (0,_lib_database__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    const { searchParams } = new URL(req.url);\n    const id = searchParams.get('id');\n    if (!id) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        error: 'Missing id'\n    }, {\n        status: 400\n    });\n    const data = await req.json();\n    const item = await _models_MenuItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findByIdAndUpdate(id, data, {\n        new: true\n    });\n    if (!item) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        error: 'Menu item not found'\n    }, {\n        status: 404\n    });\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(item);\n}\n// Delete menu item by id\nasync function DELETE(req) {\n    await (0,_lib_database__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    const { searchParams } = new URL(req.url);\n    const id = searchParams.get('id');\n    if (!id) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        error: 'Missing id'\n    }, {\n        status: 400\n    });\n    const item = await _models_MenuItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findByIdAndDelete(id);\n    if (!item) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        error: 'Menu item not found'\n    }, {\n        status: 404\n    });\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        success: true\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL21lbnUtaXRlbS9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTJDO0FBQ0o7QUFDRTtBQUV6QywwQ0FBMEM7QUFDbkMsZUFBZUcsSUFBSUMsR0FBWTtJQUNsQyxNQUFNSCx5REFBU0E7SUFDZixNQUFNLEVBQUVJLFlBQVksRUFBRSxHQUFHLElBQUlDLElBQUlGLElBQUlHLEdBQUc7SUFDeEMsTUFBTUMsS0FBS0gsYUFBYUksR0FBRyxDQUFDO0lBQzVCLElBQUlELElBQUk7UUFDSixNQUFNRSxPQUFPLE1BQU1SLHdEQUFRQSxDQUFDUyxRQUFRLENBQUNIO1FBQ3JDLElBQUksQ0FBQ0UsTUFBTSxPQUFPVixxREFBWUEsQ0FBQ1ksSUFBSSxDQUFDO1lBQUVDLE9BQU87UUFBc0IsR0FBRztZQUFFQyxRQUFRO1FBQUk7UUFDcEYsT0FBT2QscURBQVlBLENBQUNZLElBQUksQ0FBQ0Y7SUFDN0I7SUFDQSxNQUFNSyxRQUFRLE1BQU1iLHdEQUFRQSxDQUFDYyxJQUFJO0lBQ2pDLE9BQU9oQixxREFBWUEsQ0FBQ1ksSUFBSSxDQUFDRztBQUM3QjtBQUVBLG1CQUFtQjtBQUNaLGVBQWVFLEtBQUtiLEdBQVk7SUFDbkMsTUFBTUgseURBQVNBO0lBQ2YsTUFBTWlCLE9BQU8sTUFBTWQsSUFBSVEsSUFBSTtJQUMzQixNQUFNRixPQUFPLE1BQU1SLHdEQUFRQSxDQUFDaUIsTUFBTSxDQUFDRDtJQUNuQyxPQUFPbEIscURBQVlBLENBQUNZLElBQUksQ0FBQ0Y7QUFDN0I7QUFFQSx5QkFBeUI7QUFDbEIsZUFBZVUsSUFBSWhCLEdBQVk7SUFDbEMsTUFBTUgseURBQVNBO0lBQ2YsTUFBTSxFQUFFSSxZQUFZLEVBQUUsR0FBRyxJQUFJQyxJQUFJRixJQUFJRyxHQUFHO0lBQ3hDLE1BQU1DLEtBQUtILGFBQWFJLEdBQUcsQ0FBQztJQUM1QixJQUFJLENBQUNELElBQUksT0FBT1IscURBQVlBLENBQUNZLElBQUksQ0FBQztRQUFFQyxPQUFPO0lBQWEsR0FBRztRQUFFQyxRQUFRO0lBQUk7SUFDekUsTUFBTUksT0FBTyxNQUFNZCxJQUFJUSxJQUFJO0lBQzNCLE1BQU1GLE9BQU8sTUFBTVIsd0RBQVFBLENBQUNtQixpQkFBaUIsQ0FBQ2IsSUFBSVUsTUFBTTtRQUFFSSxLQUFLO0lBQUs7SUFDcEUsSUFBSSxDQUFDWixNQUFNLE9BQU9WLHFEQUFZQSxDQUFDWSxJQUFJLENBQUM7UUFBRUMsT0FBTztJQUFzQixHQUFHO1FBQUVDLFFBQVE7SUFBSTtJQUNwRixPQUFPZCxxREFBWUEsQ0FBQ1ksSUFBSSxDQUFDRjtBQUM3QjtBQUVBLHlCQUF5QjtBQUNsQixlQUFlYSxPQUFPbkIsR0FBWTtJQUNyQyxNQUFNSCx5REFBU0E7SUFDZixNQUFNLEVBQUVJLFlBQVksRUFBRSxHQUFHLElBQUlDLElBQUlGLElBQUlHLEdBQUc7SUFDeEMsTUFBTUMsS0FBS0gsYUFBYUksR0FBRyxDQUFDO0lBQzVCLElBQUksQ0FBQ0QsSUFBSSxPQUFPUixxREFBWUEsQ0FBQ1ksSUFBSSxDQUFDO1FBQUVDLE9BQU87SUFBYSxHQUFHO1FBQUVDLFFBQVE7SUFBSTtJQUN6RSxNQUFNSixPQUFPLE1BQU1SLHdEQUFRQSxDQUFDc0IsaUJBQWlCLENBQUNoQjtJQUM5QyxJQUFJLENBQUNFLE1BQU0sT0FBT1YscURBQVlBLENBQUNZLElBQUksQ0FBQztRQUFFQyxPQUFPO0lBQXNCLEdBQUc7UUFBRUMsUUFBUTtJQUFJO0lBQ3BGLE9BQU9kLHFEQUFZQSxDQUFDWSxJQUFJLENBQUM7UUFBRWEsU0FBUztJQUFLO0FBQzdDIiwic291cmNlcyI6WyIvVXNlcnMvc2hpcm9ib3UvRG93bmxvYWRzL2phcGFuZXNlLWNhZmUgKDEpIDIvYXBwL2FwaS9tZW51LWl0ZW0vcm91dGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xuaW1wb3J0IGRiQ29ubmVjdCBmcm9tICdAL2xpYi9kYXRhYmFzZSc7XG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnQC9tb2RlbHMvTWVudUl0ZW0nO1xuXG4vLyBHRVQgYWxsIG1lbnUgaXRlbXMgb3Igc2luZ2xlIGl0ZW0gYnkgaWRcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQocmVxOiBSZXF1ZXN0KSB7XG4gICAgYXdhaXQgZGJDb25uZWN0KCk7XG4gICAgY29uc3QgeyBzZWFyY2hQYXJhbXMgfSA9IG5ldyBVUkwocmVxLnVybCk7XG4gICAgY29uc3QgaWQgPSBzZWFyY2hQYXJhbXMuZ2V0KCdpZCcpO1xuICAgIGlmIChpZCkge1xuICAgICAgICBjb25zdCBpdGVtID0gYXdhaXQgTWVudUl0ZW0uZmluZEJ5SWQoaWQpO1xuICAgICAgICBpZiAoIWl0ZW0pIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnTWVudSBpdGVtIG5vdCBmb3VuZCcgfSwgeyBzdGF0dXM6IDQwNCB9KTtcbiAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKGl0ZW0pO1xuICAgIH1cbiAgICBjb25zdCBpdGVtcyA9IGF3YWl0IE1lbnVJdGVtLmZpbmQoKTtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oaXRlbXMpO1xufVxuXG4vLyBDcmVhdGUgbWVudSBpdGVtXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXE6IFJlcXVlc3QpIHtcbiAgICBhd2FpdCBkYkNvbm5lY3QoKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVxLmpzb24oKTtcbiAgICBjb25zdCBpdGVtID0gYXdhaXQgTWVudUl0ZW0uY3JlYXRlKGRhdGEpO1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihpdGVtKTtcbn1cblxuLy8gVXBkYXRlIG1lbnUgaXRlbSBieSBpZFxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBVVChyZXE6IFJlcXVlc3QpIHtcbiAgICBhd2FpdCBkYkNvbm5lY3QoKTtcbiAgICBjb25zdCB7IHNlYXJjaFBhcmFtcyB9ID0gbmV3IFVSTChyZXEudXJsKTtcbiAgICBjb25zdCBpZCA9IHNlYXJjaFBhcmFtcy5nZXQoJ2lkJyk7XG4gICAgaWYgKCFpZCkgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdNaXNzaW5nIGlkJyB9LCB7IHN0YXR1czogNDAwIH0pO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXEuanNvbigpO1xuICAgIGNvbnN0IGl0ZW0gPSBhd2FpdCBNZW51SXRlbS5maW5kQnlJZEFuZFVwZGF0ZShpZCwgZGF0YSwgeyBuZXc6IHRydWUgfSk7XG4gICAgaWYgKCFpdGVtKSByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ01lbnUgaXRlbSBub3QgZm91bmQnIH0sIHsgc3RhdHVzOiA0MDQgfSk7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKGl0ZW0pO1xufVxuXG4vLyBEZWxldGUgbWVudSBpdGVtIGJ5IGlkXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gREVMRVRFKHJlcTogUmVxdWVzdCkge1xuICAgIGF3YWl0IGRiQ29ubmVjdCgpO1xuICAgIGNvbnN0IHsgc2VhcmNoUGFyYW1zIH0gPSBuZXcgVVJMKHJlcS51cmwpO1xuICAgIGNvbnN0IGlkID0gc2VhcmNoUGFyYW1zLmdldCgnaWQnKTtcbiAgICBpZiAoIWlkKSByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ01pc3NpbmcgaWQnIH0sIHsgc3RhdHVzOiA0MDAgfSk7XG4gICAgY29uc3QgaXRlbSA9IGF3YWl0IE1lbnVJdGVtLmZpbmRCeUlkQW5kRGVsZXRlKGlkKTtcbiAgICBpZiAoIWl0ZW0pIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnTWVudSBpdGVtIG5vdCBmb3VuZCcgfSwgeyBzdGF0dXM6IDQwNCB9KTtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBzdWNjZXNzOiB0cnVlIH0pO1xufVxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImRiQ29ubmVjdCIsIk1lbnVJdGVtIiwiR0VUIiwicmVxIiwic2VhcmNoUGFyYW1zIiwiVVJMIiwidXJsIiwiaWQiLCJnZXQiLCJpdGVtIiwiZmluZEJ5SWQiLCJqc29uIiwiZXJyb3IiLCJzdGF0dXMiLCJpdGVtcyIsImZpbmQiLCJQT1NUIiwiZGF0YSIsImNyZWF0ZSIsIlBVVCIsImZpbmRCeUlkQW5kVXBkYXRlIiwibmV3IiwiREVMRVRFIiwiZmluZEJ5SWRBbmREZWxldGUiLCJzdWNjZXNzIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/menu-item/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/database.ts":
/*!*************************!*\
  !*** ./lib/database.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dotenv */ \"(rsc)/./node_modules/dotenv/lib/main.js\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_1__);\n\n\ndotenv__WEBPACK_IMPORTED_MODULE_1___default().config({\n    path: '.env.local'\n});\nconst MONGODB_URI = process.env.MONGODB_URI || '';\nif (!MONGODB_URI) {\n    throw new Error('Please define the MONGODB_URI environment variable in .env.local');\n}\nlet cached = global.mongoose;\nif (!cached) {\n    cached = global.mongoose = {\n        conn: null,\n        promise: null\n    };\n}\nasync function dbConnect() {\n    cached ??= {\n        conn: null,\n        promise: null\n    };\n    if (cached.conn) {\n        return cached.conn;\n    }\n    if (!cached.promise) {\n        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, {\n            bufferCommands: false\n        }).then((mongoose)=>{\n            return mongoose;\n        });\n    }\n    cached.conn = await cached.promise;\n    return cached.conn;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvZGF0YWJhc2UudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBZ0M7QUFDSjtBQUM1QkMsb0RBQWEsQ0FBQztJQUFFRSxNQUFNO0FBQWE7QUFFbkMsTUFBTUMsY0FBY0MsUUFBUUMsR0FBRyxDQUFDRixXQUFXLElBQUk7QUFFL0MsSUFBSSxDQUFDQSxhQUFhO0lBQ2QsTUFBTSxJQUFJRyxNQUFNO0FBQ3BCO0FBWUEsSUFBSUMsU0FBU0MsT0FBT1QsUUFBUTtBQUM1QixJQUFJLENBQUNRLFFBQVE7SUFDVEEsU0FBU0MsT0FBT1QsUUFBUSxHQUFHO1FBQUVVLE1BQU07UUFBTUMsU0FBUztJQUFLO0FBQzNEO0FBRUEsZUFBZUM7SUFDWEosV0FBVztRQUFFRSxNQUFNO1FBQU1DLFNBQVM7SUFBSztJQUN2QyxJQUFJSCxPQUFPRSxJQUFJLEVBQUU7UUFDYixPQUFPRixPQUFPRSxJQUFJO0lBQ3RCO0lBQ0EsSUFBSSxDQUFDRixPQUFPRyxPQUFPLEVBQUU7UUFDakJILE9BQU9HLE9BQU8sR0FBR1gsdURBQWdCLENBQUNJLGFBQWE7WUFDM0NVLGdCQUFnQjtRQUNwQixHQUFHQyxJQUFJLENBQUMsQ0FBQ2Y7WUFDTCxPQUFPQTtRQUNYO0lBQ0o7SUFDQVEsT0FBT0UsSUFBSSxHQUFHLE1BQU1GLE9BQU9HLE9BQU87SUFDbEMsT0FBT0gsT0FBT0UsSUFBSTtBQUN0QjtBQUVBLGlFQUFlRSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyIvVXNlcnMvc2hpcm9ib3UvRG93bmxvYWRzL2phcGFuZXNlLWNhZmUgKDEpIDIvbGliL2RhdGFiYXNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5pbXBvcnQgZG90ZW52IGZyb20gJ2RvdGVudic7XG5kb3RlbnYuY29uZmlnKHsgcGF0aDogJy5lbnYubG9jYWwnIH0pO1xuXG5jb25zdCBNT05HT0RCX1VSSSA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJIHx8ICcnO1xuXG5pZiAoIU1PTkdPREJfVVJJKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdQbGVhc2UgZGVmaW5lIHRoZSBNT05HT0RCX1VSSSBlbnZpcm9ubWVudCB2YXJpYWJsZSBpbiAuZW52LmxvY2FsJyk7XG59XG5cbnR5cGUgTW9uZ29vc2VDYWNoZSA9IHtcbiAgICBjb25uOiB0eXBlb2YgbW9uZ29vc2UgfCBudWxsO1xuICAgIHByb21pc2U6IFByb21pc2U8dHlwZW9mIG1vbmdvb3NlPiB8IG51bGw7XG59O1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXZhclxuICAgIHZhciBtb25nb29zZTogTW9uZ29vc2VDYWNoZSB8IHVuZGVmaW5lZDtcbn1cblxubGV0IGNhY2hlZCA9IGdsb2JhbC5tb25nb29zZSBhcyBNb25nb29zZUNhY2hlIHwgdW5kZWZpbmVkO1xuaWYgKCFjYWNoZWQpIHtcbiAgICBjYWNoZWQgPSBnbG9iYWwubW9uZ29vc2UgPSB7IGNvbm46IG51bGwsIHByb21pc2U6IG51bGwgfTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZGJDb25uZWN0KCkge1xuICAgIGNhY2hlZCA/Pz0geyBjb25uOiBudWxsLCBwcm9taXNlOiBudWxsIH07XG4gICAgaWYgKGNhY2hlZC5jb25uKSB7XG4gICAgICAgIHJldHVybiBjYWNoZWQuY29ubjtcbiAgICB9XG4gICAgaWYgKCFjYWNoZWQucHJvbWlzZSkge1xuICAgICAgICBjYWNoZWQucHJvbWlzZSA9IG1vbmdvb3NlLmNvbm5lY3QoTU9OR09EQl9VUkksIHtcbiAgICAgICAgICAgIGJ1ZmZlckNvbW1hbmRzOiBmYWxzZSxcbiAgICAgICAgfSkudGhlbigobW9uZ29vc2UpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBtb25nb29zZTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNhY2hlZC5jb25uID0gYXdhaXQgY2FjaGVkLnByb21pc2U7XG4gICAgcmV0dXJuIGNhY2hlZC5jb25uO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkYkNvbm5lY3Q7XG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJkb3RlbnYiLCJjb25maWciLCJwYXRoIiwiTU9OR09EQl9VUkkiLCJwcm9jZXNzIiwiZW52IiwiRXJyb3IiLCJjYWNoZWQiLCJnbG9iYWwiLCJjb25uIiwicHJvbWlzZSIsImRiQ29ubmVjdCIsImNvbm5lY3QiLCJidWZmZXJDb21tYW5kcyIsInRoZW4iXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/database.ts\n");

/***/ }),

/***/ "(rsc)/./models/MenuItem.ts":
/*!****************************!*\
  !*** ./models/MenuItem.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MenuItemSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    id: {\n        type: String,\n        required: false,\n        unique: true\n    },\n    name: {\n        type: String,\n        required: true\n    },\n    description: {\n        type: String,\n        required: true\n    },\n    price: {\n        type: String,\n        required: true\n    },\n    category: {\n        type: String,\n        required: true\n    },\n    image: {\n        type: String,\n        required: true\n    },\n    ingredients: [\n        {\n            type: String\n        }\n    ],\n    preparationTime: {\n        type: String\n    },\n    isSignature: {\n        type: Boolean,\n        default: false\n    },\n    isOrganic: {\n        type: Boolean,\n        default: false\n    },\n    rating: {\n        type: Number\n    },\n    origin: {\n        type: String\n    }\n}, {\n    timestamps: true\n});\nconst MenuItemModel = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).MenuItem || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('MenuItem', MenuItemSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MenuItemModel); // Menu item model schema\n // TODO: Implement MenuItem mongoose schema\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvTWVudUl0ZW0udHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTZEO0FBbUI3RCxNQUFNRSxpQkFBbUMsSUFBSUQsNENBQU1BLENBQy9DO0lBQ0lFLElBQUk7UUFBRUMsTUFBTUM7UUFBUUMsVUFBVTtRQUFPQyxRQUFRO0lBQUs7SUFDbERDLE1BQU07UUFBRUosTUFBTUM7UUFBUUMsVUFBVTtJQUFLO0lBQ3JDRyxhQUFhO1FBQUVMLE1BQU1DO1FBQVFDLFVBQVU7SUFBSztJQUM1Q0ksT0FBTztRQUFFTixNQUFNQztRQUFRQyxVQUFVO0lBQUs7SUFDdENLLFVBQVU7UUFBRVAsTUFBTUM7UUFBUUMsVUFBVTtJQUFLO0lBQ3pDTSxPQUFPO1FBQUVSLE1BQU1DO1FBQVFDLFVBQVU7SUFBSztJQUN0Q08sYUFBYTtRQUFDO1lBQUVULE1BQU1DO1FBQU87S0FBRTtJQUMvQlMsaUJBQWlCO1FBQUVWLE1BQU1DO0lBQU87SUFDaENVLGFBQWE7UUFBRVgsTUFBTVk7UUFBU0MsU0FBUztJQUFNO0lBQzdDQyxXQUFXO1FBQUVkLE1BQU1ZO1FBQVNDLFNBQVM7SUFBTTtJQUMzQ0UsUUFBUTtRQUFFZixNQUFNZ0I7SUFBTztJQUN2QkMsUUFBUTtRQUFFakIsTUFBTUM7SUFBTztBQUMzQixHQUNBO0lBQUVpQixZQUFZO0FBQUs7QUFHdkIsTUFBTUMsZ0JBQWlDdkIsd0RBQWUsQ0FBQ3lCLFFBQVEsSUFBSXpCLHFEQUFjLENBQVcsWUFBWUU7QUFFeEcsaUVBQWVxQixhQUFhQSxFQUFDLENBQzdCLHlCQUF5QjtDQUN6QiwyQ0FBMkMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGlyb2JvdS9Eb3dubG9hZHMvamFwYW5lc2UtY2FmZSAoMSkgMi9tb2RlbHMvTWVudUl0ZW0udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlLCB7IFNjaGVtYSwgRG9jdW1lbnQsIE1vZGVsIH0gZnJvbSAnbW9uZ29vc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1lbnVJdGVtIGV4dGVuZHMgRG9jdW1lbnQge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gICAgcHJpY2U6IHN0cmluZztcbiAgICBjYXRlZ29yeTogc3RyaW5nO1xuICAgIGltYWdlOiBzdHJpbmc7XG4gICAgaW5ncmVkaWVudHM/OiBzdHJpbmdbXTtcbiAgICBwcmVwYXJhdGlvblRpbWU/OiBzdHJpbmc7XG4gICAgaXNTaWduYXR1cmU/OiBib29sZWFuO1xuICAgIGlzT3JnYW5pYz86IGJvb2xlYW47XG4gICAgcmF0aW5nPzogbnVtYmVyO1xuICAgIG9yaWdpbj86IHN0cmluZztcbiAgICBjcmVhdGVkQXQ6IERhdGU7XG4gICAgdXBkYXRlZEF0OiBEYXRlO1xufVxuXG5jb25zdCBNZW51SXRlbVNjaGVtYTogU2NoZW1hPE1lbnVJdGVtPiA9IG5ldyBTY2hlbWEoXG4gICAge1xuICAgICAgICBpZDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiBmYWxzZSwgdW5pcXVlOiB0cnVlIH0sXG4gICAgICAgIG5hbWU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuICAgICAgICBkZXNjcmlwdGlvbjogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG4gICAgICAgIHByaWNlOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcbiAgICAgICAgY2F0ZWdvcnk6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuICAgICAgICBpbWFnZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG4gICAgICAgIGluZ3JlZGllbnRzOiBbeyB0eXBlOiBTdHJpbmcgfV0sXG4gICAgICAgIHByZXBhcmF0aW9uVGltZTogeyB0eXBlOiBTdHJpbmcgfSxcbiAgICAgICAgaXNTaWduYXR1cmU6IHsgdHlwZTogQm9vbGVhbiwgZGVmYXVsdDogZmFsc2UgfSxcbiAgICAgICAgaXNPcmdhbmljOiB7IHR5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6IGZhbHNlIH0sXG4gICAgICAgIHJhdGluZzogeyB0eXBlOiBOdW1iZXIgfSxcbiAgICAgICAgb3JpZ2luOiB7IHR5cGU6IFN0cmluZyB9LFxuICAgIH0sXG4gICAgeyB0aW1lc3RhbXBzOiB0cnVlIH1cbik7XG5cbmNvbnN0IE1lbnVJdGVtTW9kZWw6IE1vZGVsPE1lbnVJdGVtPiA9IG1vbmdvb3NlLm1vZGVscy5NZW51SXRlbSB8fCBtb25nb29zZS5tb2RlbDxNZW51SXRlbT4oJ01lbnVJdGVtJywgTWVudUl0ZW1TY2hlbWEpO1xuXG5leHBvcnQgZGVmYXVsdCBNZW51SXRlbU1vZGVsO1xuLy8gTWVudSBpdGVtIG1vZGVsIHNjaGVtYVxuLy8gVE9ETzogSW1wbGVtZW50IE1lbnVJdGVtIG1vbmdvb3NlIHNjaGVtYVxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiU2NoZW1hIiwiTWVudUl0ZW1TY2hlbWEiLCJpZCIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsInVuaXF1ZSIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsInByaWNlIiwiY2F0ZWdvcnkiLCJpbWFnZSIsImluZ3JlZGllbnRzIiwicHJlcGFyYXRpb25UaW1lIiwiaXNTaWduYXR1cmUiLCJCb29sZWFuIiwiZGVmYXVsdCIsImlzT3JnYW5pYyIsInJhdGluZyIsIk51bWJlciIsIm9yaWdpbiIsInRpbWVzdGFtcHMiLCJNZW51SXRlbU1vZGVsIiwibW9kZWxzIiwiTWVudUl0ZW0iLCJtb2RlbCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./models/MenuItem.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fmenu-item%2Froute&page=%2Fapi%2Fmenu-item%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmenu-item%2Froute.ts&appDir=%2FUsers%2Fshirobou%2FDownloads%2Fjapanese-cafe%20(1)%202%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fshirobou%2FDownloads%2Fjapanese-cafe%20(1)%202&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fmenu-item%2Froute&page=%2Fapi%2Fmenu-item%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmenu-item%2Froute.ts&appDir=%2FUsers%2Fshirobou%2FDownloads%2Fjapanese-cafe%20(1)%202%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fshirobou%2FDownloads%2Fjapanese-cafe%20(1)%202&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_shirobou_Downloads_japanese_cafe_1_2_app_api_menu_item_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/menu-item/route.ts */ \"(rsc)/./app/api/menu-item/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/menu-item/route\",\n        pathname: \"/api/menu-item\",\n        filename: \"route\",\n        bundlePath: \"app/api/menu-item/route\"\n    },\n    resolvedPagePath: \"/Users/shirobou/Downloads/japanese-cafe (1) 2/app/api/menu-item/route.ts\",\n    nextConfigOutput,\n    userland: _Users_shirobou_Downloads_japanese_cafe_1_2_app_api_menu_item_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZtZW51LWl0ZW0lMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRm1lbnUtaXRlbSUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRm1lbnUtaXRlbSUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRnNoaXJvYm91JTJGRG93bmxvYWRzJTJGamFwYW5lc2UtY2FmZSUyMCgxKSUyMDIlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRlVzZXJzJTJGc2hpcm9ib3UlMkZEb3dubG9hZHMlMkZqYXBhbmVzZS1jYWZlJTIwKDEpJTIwMiZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDd0I7QUFDckc7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9Vc2Vycy9zaGlyb2JvdS9Eb3dubG9hZHMvamFwYW5lc2UtY2FmZSAoMSkgMi9hcHAvYXBpL21lbnUtaXRlbS9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvbWVudS1pdGVtL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvbWVudS1pdGVtXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9tZW51LWl0ZW0vcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvVXNlcnMvc2hpcm9ib3UvRG93bmxvYWRzL2phcGFuZXNlLWNhZmUgKDEpIDIvYXBwL2FwaS9tZW51LWl0ZW0vcm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fmenu-item%2Froute&page=%2Fapi%2Fmenu-item%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmenu-item%2Froute.ts&appDir=%2FUsers%2Fshirobou%2FDownloads%2Fjapanese-cafe%20(1)%202%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fshirobou%2FDownloads%2Fjapanese-cafe%20(1)%202&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/dotenv"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fmenu-item%2Froute&page=%2Fapi%2Fmenu-item%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmenu-item%2Froute.ts&appDir=%2FUsers%2Fshirobou%2FDownloads%2Fjapanese-cafe%20(1)%202%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fshirobou%2FDownloads%2Fjapanese-cafe%20(1)%202&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();