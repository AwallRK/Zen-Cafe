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
exports.id = "app/api/contact/route";
exports.ids = ["app/api/contact/route"];
exports.modules = {

/***/ "(rsc)/./app/api/contact/route.ts":
/*!**********************************!*\
  !*** ./app/api/contact/route.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DELETE: () => (/* binding */ DELETE),\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST),\n/* harmony export */   PUT: () => (/* binding */ PUT)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/database */ \"(rsc)/./lib/database.ts\");\n/* harmony import */ var _models_Contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/models/Contact */ \"(rsc)/./models/Contact.ts\");\n\n\n\n// GET all contacts or single contact by id\nasync function GET(req) {\n    await (0,_lib_database__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    const { searchParams } = new URL(req.url);\n    const id = searchParams.get('id');\n    if (id) {\n        const contact = await _models_Contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findById(id);\n        if (!contact) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Contact not found'\n        }, {\n            status: 404\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(contact);\n    }\n    const contacts = await _models_Contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"].find();\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(contacts);\n}\n// Create contact\nasync function POST(req) {\n    await (0,_lib_database__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    const data = await req.json();\n    const contact = await _models_Contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"].create(data);\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(contact);\n}\n// Update contact by id\nasync function PUT(req) {\n    await (0,_lib_database__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    const { searchParams } = new URL(req.url);\n    const id = searchParams.get('id');\n    if (!id) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        error: 'Missing id'\n    }, {\n        status: 400\n    });\n    const data = await req.json();\n    const contact = await _models_Contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findByIdAndUpdate(id, data, {\n        new: true\n    });\n    if (!contact) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        error: 'Contact not found'\n    }, {\n        status: 404\n    });\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(contact);\n}\n// Delete contact by id\nasync function DELETE(req) {\n    await (0,_lib_database__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    const { searchParams } = new URL(req.url);\n    const id = searchParams.get('id');\n    if (!id) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        error: 'Missing id'\n    }, {\n        status: 400\n    });\n    const contact = await _models_Contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findByIdAndDelete(id);\n    if (!contact) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        error: 'Contact not found'\n    }, {\n        status: 404\n    });\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        success: true\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2NvbnRhY3Qvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUEyQztBQUNKO0FBQ0E7QUFFdkMsMkNBQTJDO0FBQ3BDLGVBQWVHLElBQUlDLEdBQVk7SUFDbEMsTUFBTUgseURBQVNBO0lBQ2YsTUFBTSxFQUFFSSxZQUFZLEVBQUUsR0FBRyxJQUFJQyxJQUFJRixJQUFJRyxHQUFHO0lBQ3hDLE1BQU1DLEtBQUtILGFBQWFJLEdBQUcsQ0FBQztJQUM1QixJQUFJRCxJQUFJO1FBQ0osTUFBTUUsVUFBVSxNQUFNUix1REFBT0EsQ0FBQ1MsUUFBUSxDQUFDSDtRQUN2QyxJQUFJLENBQUNFLFNBQVMsT0FBT1YscURBQVlBLENBQUNZLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQW9CLEdBQUc7WUFBRUMsUUFBUTtRQUFJO1FBQ3JGLE9BQU9kLHFEQUFZQSxDQUFDWSxJQUFJLENBQUNGO0lBQzdCO0lBQ0EsTUFBTUssV0FBVyxNQUFNYix1REFBT0EsQ0FBQ2MsSUFBSTtJQUNuQyxPQUFPaEIscURBQVlBLENBQUNZLElBQUksQ0FBQ0c7QUFDN0I7QUFFQSxpQkFBaUI7QUFDVixlQUFlRSxLQUFLYixHQUFZO0lBQ25DLE1BQU1ILHlEQUFTQTtJQUNmLE1BQU1pQixPQUFPLE1BQU1kLElBQUlRLElBQUk7SUFDM0IsTUFBTUYsVUFBVSxNQUFNUix1REFBT0EsQ0FBQ2lCLE1BQU0sQ0FBQ0Q7SUFDckMsT0FBT2xCLHFEQUFZQSxDQUFDWSxJQUFJLENBQUNGO0FBQzdCO0FBRUEsdUJBQXVCO0FBQ2hCLGVBQWVVLElBQUloQixHQUFZO0lBQ2xDLE1BQU1ILHlEQUFTQTtJQUNmLE1BQU0sRUFBRUksWUFBWSxFQUFFLEdBQUcsSUFBSUMsSUFBSUYsSUFBSUcsR0FBRztJQUN4QyxNQUFNQyxLQUFLSCxhQUFhSSxHQUFHLENBQUM7SUFDNUIsSUFBSSxDQUFDRCxJQUFJLE9BQU9SLHFEQUFZQSxDQUFDWSxJQUFJLENBQUM7UUFBRUMsT0FBTztJQUFhLEdBQUc7UUFBRUMsUUFBUTtJQUFJO0lBQ3pFLE1BQU1JLE9BQU8sTUFBTWQsSUFBSVEsSUFBSTtJQUMzQixNQUFNRixVQUFVLE1BQU1SLHVEQUFPQSxDQUFDbUIsaUJBQWlCLENBQUNiLElBQUlVLE1BQU07UUFBRUksS0FBSztJQUFLO0lBQ3RFLElBQUksQ0FBQ1osU0FBUyxPQUFPVixxREFBWUEsQ0FBQ1ksSUFBSSxDQUFDO1FBQUVDLE9BQU87SUFBb0IsR0FBRztRQUFFQyxRQUFRO0lBQUk7SUFDckYsT0FBT2QscURBQVlBLENBQUNZLElBQUksQ0FBQ0Y7QUFDN0I7QUFFQSx1QkFBdUI7QUFDaEIsZUFBZWEsT0FBT25CLEdBQVk7SUFDckMsTUFBTUgseURBQVNBO0lBQ2YsTUFBTSxFQUFFSSxZQUFZLEVBQUUsR0FBRyxJQUFJQyxJQUFJRixJQUFJRyxHQUFHO0lBQ3hDLE1BQU1DLEtBQUtILGFBQWFJLEdBQUcsQ0FBQztJQUM1QixJQUFJLENBQUNELElBQUksT0FBT1IscURBQVlBLENBQUNZLElBQUksQ0FBQztRQUFFQyxPQUFPO0lBQWEsR0FBRztRQUFFQyxRQUFRO0lBQUk7SUFDekUsTUFBTUosVUFBVSxNQUFNUix1REFBT0EsQ0FBQ3NCLGlCQUFpQixDQUFDaEI7SUFDaEQsSUFBSSxDQUFDRSxTQUFTLE9BQU9WLHFEQUFZQSxDQUFDWSxJQUFJLENBQUM7UUFBRUMsT0FBTztJQUFvQixHQUFHO1FBQUVDLFFBQVE7SUFBSTtJQUNyRixPQUFPZCxxREFBWUEsQ0FBQ1ksSUFBSSxDQUFDO1FBQUVhLFNBQVM7SUFBSztBQUM3QyIsInNvdXJjZXMiOlsiL1VzZXJzL3NoaXJvYm91L0Rvd25sb2Fkcy9qYXBhbmVzZS1jYWZlICgxKSAyL2FwcC9hcGkvY29udGFjdC9yb3V0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcic7XG5pbXBvcnQgZGJDb25uZWN0IGZyb20gJ0AvbGliL2RhdGFiYXNlJztcbmltcG9ydCBDb250YWN0IGZyb20gJ0AvbW9kZWxzL0NvbnRhY3QnO1xuXG4vLyBHRVQgYWxsIGNvbnRhY3RzIG9yIHNpbmdsZSBjb250YWN0IGJ5IGlkXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKHJlcTogUmVxdWVzdCkge1xuICAgIGF3YWl0IGRiQ29ubmVjdCgpO1xuICAgIGNvbnN0IHsgc2VhcmNoUGFyYW1zIH0gPSBuZXcgVVJMKHJlcS51cmwpO1xuICAgIGNvbnN0IGlkID0gc2VhcmNoUGFyYW1zLmdldCgnaWQnKTtcbiAgICBpZiAoaWQpIHtcbiAgICAgICAgY29uc3QgY29udGFjdCA9IGF3YWl0IENvbnRhY3QuZmluZEJ5SWQoaWQpO1xuICAgICAgICBpZiAoIWNvbnRhY3QpIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnQ29udGFjdCBub3QgZm91bmQnIH0sIHsgc3RhdHVzOiA0MDQgfSk7XG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihjb250YWN0KTtcbiAgICB9XG4gICAgY29uc3QgY29udGFjdHMgPSBhd2FpdCBDb250YWN0LmZpbmQoKTtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oY29udGFjdHMpO1xufVxuXG4vLyBDcmVhdGUgY29udGFjdFxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxOiBSZXF1ZXN0KSB7XG4gICAgYXdhaXQgZGJDb25uZWN0KCk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcS5qc29uKCk7XG4gICAgY29uc3QgY29udGFjdCA9IGF3YWl0IENvbnRhY3QuY3JlYXRlKGRhdGEpO1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihjb250YWN0KTtcbn1cblxuLy8gVXBkYXRlIGNvbnRhY3QgYnkgaWRcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQVVQocmVxOiBSZXF1ZXN0KSB7XG4gICAgYXdhaXQgZGJDb25uZWN0KCk7XG4gICAgY29uc3QgeyBzZWFyY2hQYXJhbXMgfSA9IG5ldyBVUkwocmVxLnVybCk7XG4gICAgY29uc3QgaWQgPSBzZWFyY2hQYXJhbXMuZ2V0KCdpZCcpO1xuICAgIGlmICghaWQpIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnTWlzc2luZyBpZCcgfSwgeyBzdGF0dXM6IDQwMCB9KTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVxLmpzb24oKTtcbiAgICBjb25zdCBjb250YWN0ID0gYXdhaXQgQ29udGFjdC5maW5kQnlJZEFuZFVwZGF0ZShpZCwgZGF0YSwgeyBuZXc6IHRydWUgfSk7XG4gICAgaWYgKCFjb250YWN0KSByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ0NvbnRhY3Qgbm90IGZvdW5kJyB9LCB7IHN0YXR1czogNDA0IH0pO1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihjb250YWN0KTtcbn1cblxuLy8gRGVsZXRlIGNvbnRhY3QgYnkgaWRcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBERUxFVEUocmVxOiBSZXF1ZXN0KSB7XG4gICAgYXdhaXQgZGJDb25uZWN0KCk7XG4gICAgY29uc3QgeyBzZWFyY2hQYXJhbXMgfSA9IG5ldyBVUkwocmVxLnVybCk7XG4gICAgY29uc3QgaWQgPSBzZWFyY2hQYXJhbXMuZ2V0KCdpZCcpO1xuICAgIGlmICghaWQpIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnTWlzc2luZyBpZCcgfSwgeyBzdGF0dXM6IDQwMCB9KTtcbiAgICBjb25zdCBjb250YWN0ID0gYXdhaXQgQ29udGFjdC5maW5kQnlJZEFuZERlbGV0ZShpZCk7XG4gICAgaWYgKCFjb250YWN0KSByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ0NvbnRhY3Qgbm90IGZvdW5kJyB9LCB7IHN0YXR1czogNDA0IH0pO1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IHN1Y2Nlc3M6IHRydWUgfSk7XG59XG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiZGJDb25uZWN0IiwiQ29udGFjdCIsIkdFVCIsInJlcSIsInNlYXJjaFBhcmFtcyIsIlVSTCIsInVybCIsImlkIiwiZ2V0IiwiY29udGFjdCIsImZpbmRCeUlkIiwianNvbiIsImVycm9yIiwic3RhdHVzIiwiY29udGFjdHMiLCJmaW5kIiwiUE9TVCIsImRhdGEiLCJjcmVhdGUiLCJQVVQiLCJmaW5kQnlJZEFuZFVwZGF0ZSIsIm5ldyIsIkRFTEVURSIsImZpbmRCeUlkQW5kRGVsZXRlIiwic3VjY2VzcyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/contact/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/database.ts":
/*!*************************!*\
  !*** ./lib/database.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dotenv */ \"(rsc)/./node_modules/dotenv/lib/main.js\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_1__);\n\n\ndotenv__WEBPACK_IMPORTED_MODULE_1___default().config({\n    path: '.env.local'\n});\nconst MONGODB_URI = process.env.MONGODB_URI || '';\nif (!MONGODB_URI) {\n    throw new Error('Please define the MONGODB_URI environment variable in .env.local');\n}\nlet cached = global.mongoose;\nif (!cached) {\n    cached = global.mongoose = {\n        conn: null,\n        promise: null\n    };\n}\nasync function dbConnect() {\n    cached ??= {\n        conn: null,\n        promise: null\n    };\n    if (cached.conn) {\n        return cached.conn;\n    }\n    if (!cached.promise) {\n        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, {\n            bufferCommands: false\n        }).then((mongoose)=>{\n            return mongoose;\n        });\n    }\n    cached.conn = await cached.promise;\n    return cached.conn;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvZGF0YWJhc2UudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBZ0M7QUFDSjtBQUM1QkMsb0RBQWEsQ0FBQztJQUFFRSxNQUFNO0FBQWE7QUFFbkMsTUFBTUMsY0FBY0MsUUFBUUMsR0FBRyxDQUFDRixXQUFXLElBQUk7QUFFL0MsSUFBSSxDQUFDQSxhQUFhO0lBQ2QsTUFBTSxJQUFJRyxNQUFNO0FBQ3BCO0FBWUEsSUFBSUMsU0FBU0MsT0FBT1QsUUFBUTtBQUM1QixJQUFJLENBQUNRLFFBQVE7SUFDVEEsU0FBU0MsT0FBT1QsUUFBUSxHQUFHO1FBQUVVLE1BQU07UUFBTUMsU0FBUztJQUFLO0FBQzNEO0FBRUEsZUFBZUM7SUFDWEosV0FBVztRQUFFRSxNQUFNO1FBQU1DLFNBQVM7SUFBSztJQUN2QyxJQUFJSCxPQUFPRSxJQUFJLEVBQUU7UUFDYixPQUFPRixPQUFPRSxJQUFJO0lBQ3RCO0lBQ0EsSUFBSSxDQUFDRixPQUFPRyxPQUFPLEVBQUU7UUFDakJILE9BQU9HLE9BQU8sR0FBR1gsdURBQWdCLENBQUNJLGFBQWE7WUFDM0NVLGdCQUFnQjtRQUNwQixHQUFHQyxJQUFJLENBQUMsQ0FBQ2Y7WUFDTCxPQUFPQTtRQUNYO0lBQ0o7SUFDQVEsT0FBT0UsSUFBSSxHQUFHLE1BQU1GLE9BQU9HLE9BQU87SUFDbEMsT0FBT0gsT0FBT0UsSUFBSTtBQUN0QjtBQUVBLGlFQUFlRSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyIvVXNlcnMvc2hpcm9ib3UvRG93bmxvYWRzL2phcGFuZXNlLWNhZmUgKDEpIDIvbGliL2RhdGFiYXNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5pbXBvcnQgZG90ZW52IGZyb20gJ2RvdGVudic7XG5kb3RlbnYuY29uZmlnKHsgcGF0aDogJy5lbnYubG9jYWwnIH0pO1xuXG5jb25zdCBNT05HT0RCX1VSSSA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJIHx8ICcnO1xuXG5pZiAoIU1PTkdPREJfVVJJKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdQbGVhc2UgZGVmaW5lIHRoZSBNT05HT0RCX1VSSSBlbnZpcm9ubWVudCB2YXJpYWJsZSBpbiAuZW52LmxvY2FsJyk7XG59XG5cbnR5cGUgTW9uZ29vc2VDYWNoZSA9IHtcbiAgICBjb25uOiB0eXBlb2YgbW9uZ29vc2UgfCBudWxsO1xuICAgIHByb21pc2U6IFByb21pc2U8dHlwZW9mIG1vbmdvb3NlPiB8IG51bGw7XG59O1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXZhclxuICAgIHZhciBtb25nb29zZTogTW9uZ29vc2VDYWNoZSB8IHVuZGVmaW5lZDtcbn1cblxubGV0IGNhY2hlZCA9IGdsb2JhbC5tb25nb29zZSBhcyBNb25nb29zZUNhY2hlIHwgdW5kZWZpbmVkO1xuaWYgKCFjYWNoZWQpIHtcbiAgICBjYWNoZWQgPSBnbG9iYWwubW9uZ29vc2UgPSB7IGNvbm46IG51bGwsIHByb21pc2U6IG51bGwgfTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZGJDb25uZWN0KCkge1xuICAgIGNhY2hlZCA/Pz0geyBjb25uOiBudWxsLCBwcm9taXNlOiBudWxsIH07XG4gICAgaWYgKGNhY2hlZC5jb25uKSB7XG4gICAgICAgIHJldHVybiBjYWNoZWQuY29ubjtcbiAgICB9XG4gICAgaWYgKCFjYWNoZWQucHJvbWlzZSkge1xuICAgICAgICBjYWNoZWQucHJvbWlzZSA9IG1vbmdvb3NlLmNvbm5lY3QoTU9OR09EQl9VUkksIHtcbiAgICAgICAgICAgIGJ1ZmZlckNvbW1hbmRzOiBmYWxzZSxcbiAgICAgICAgfSkudGhlbigobW9uZ29vc2UpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBtb25nb29zZTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNhY2hlZC5jb25uID0gYXdhaXQgY2FjaGVkLnByb21pc2U7XG4gICAgcmV0dXJuIGNhY2hlZC5jb25uO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkYkNvbm5lY3Q7XG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJkb3RlbnYiLCJjb25maWciLCJwYXRoIiwiTU9OR09EQl9VUkkiLCJwcm9jZXNzIiwiZW52IiwiRXJyb3IiLCJjYWNoZWQiLCJnbG9iYWwiLCJjb25uIiwicHJvbWlzZSIsImRiQ29ubmVjdCIsImNvbm5lY3QiLCJidWZmZXJDb21tYW5kcyIsInRoZW4iXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/database.ts\n");

/***/ }),

/***/ "(rsc)/./models/Contact.ts":
/*!***************************!*\
  !*** ./models/Contact.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst ContactSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    id: {\n        type: String,\n        required: false\n    },\n    firstName: {\n        type: String,\n        required: true\n    },\n    lastName: {\n        type: String,\n        required: true\n    },\n    email: {\n        type: String,\n        required: true\n    },\n    subject: {\n        type: String,\n        required: true\n    },\n    message: {\n        type: String,\n        required: true\n    }\n}, {\n    timestamps: true\n});\nconst ContactModel = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Contact || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('Contact', ContactSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactModel); // Contact form model schema\n // TODO: Implement Contact mongoose schema\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvQ29udGFjdC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNkQ7QUFhN0QsTUFBTUUsZ0JBQWlDLElBQUlELDRDQUFNQSxDQUM3QztJQUNJRSxJQUFJO1FBQUVDLE1BQU1DO1FBQVFDLFVBQVU7SUFBTTtJQUNwQ0MsV0FBVztRQUFFSCxNQUFNQztRQUFRQyxVQUFVO0lBQUs7SUFDMUNFLFVBQVU7UUFBRUosTUFBTUM7UUFBUUMsVUFBVTtJQUFLO0lBQ3pDRyxPQUFPO1FBQUVMLE1BQU1DO1FBQVFDLFVBQVU7SUFBSztJQUN0Q0ksU0FBUztRQUFFTixNQUFNQztRQUFRQyxVQUFVO0lBQUs7SUFDeENLLFNBQVM7UUFBRVAsTUFBTUM7UUFBUUMsVUFBVTtJQUFLO0FBQzVDLEdBQ0E7SUFBRU0sWUFBWTtBQUFLO0FBR3ZCLE1BQU1DLGVBQStCYix3REFBZSxDQUFDZSxPQUFPLElBQUlmLHFEQUFjLENBQVUsV0FBV0U7QUFFbkcsaUVBQWVXLFlBQVlBLEVBQUMsQ0FDNUIsNEJBQTRCO0NBQzVCLDBDQUEwQyIsInNvdXJjZXMiOlsiL1VzZXJzL3NoaXJvYm91L0Rvd25sb2Fkcy9qYXBhbmVzZS1jYWZlICgxKSAyL21vZGVscy9Db250YWN0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSwgeyBTY2hlbWEsIERvY3VtZW50LCBNb2RlbCB9IGZyb20gJ21vbmdvb3NlJztcblxuZXhwb3J0IGludGVyZmFjZSBDb250YWN0IGV4dGVuZHMgRG9jdW1lbnQge1xuICAgIGlkPzogc3RyaW5nO1xuICAgIGZpcnN0TmFtZTogc3RyaW5nO1xuICAgIGxhc3ROYW1lOiBzdHJpbmc7XG4gICAgZW1haWw6IHN0cmluZztcbiAgICBzdWJqZWN0OiBzdHJpbmc7XG4gICAgbWVzc2FnZTogc3RyaW5nO1xuICAgIGNyZWF0ZWRBdDogRGF0ZTtcbiAgICB1cGRhdGVkQXQ6IERhdGU7XG59XG5cbmNvbnN0IENvbnRhY3RTY2hlbWE6IFNjaGVtYTxDb250YWN0PiA9IG5ldyBTY2hlbWEoXG4gICAge1xuICAgICAgICBpZDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiBmYWxzZSB9LFxuICAgICAgICBmaXJzdE5hbWU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuICAgICAgICBsYXN0TmFtZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG4gICAgICAgIGVtYWlsOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcbiAgICAgICAgc3ViamVjdDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG4gICAgICAgIG1lc3NhZ2U6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuICAgIH0sXG4gICAgeyB0aW1lc3RhbXBzOiB0cnVlIH1cbik7XG5cbmNvbnN0IENvbnRhY3RNb2RlbDogTW9kZWw8Q29udGFjdD4gPSBtb25nb29zZS5tb2RlbHMuQ29udGFjdCB8fCBtb25nb29zZS5tb2RlbDxDb250YWN0PignQ29udGFjdCcsIENvbnRhY3RTY2hlbWEpO1xuXG5leHBvcnQgZGVmYXVsdCBDb250YWN0TW9kZWw7XG4vLyBDb250YWN0IGZvcm0gbW9kZWwgc2NoZW1hXG4vLyBUT0RPOiBJbXBsZW1lbnQgQ29udGFjdCBtb25nb29zZSBzY2hlbWFcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsIlNjaGVtYSIsIkNvbnRhY3RTY2hlbWEiLCJpZCIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZW1haWwiLCJzdWJqZWN0IiwibWVzc2FnZSIsInRpbWVzdGFtcHMiLCJDb250YWN0TW9kZWwiLCJtb2RlbHMiLCJDb250YWN0IiwibW9kZWwiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./models/Contact.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fcontact%2Froute&page=%2Fapi%2Fcontact%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcontact%2Froute.ts&appDir=%2FUsers%2Fshirobou%2FDownloads%2Fjapanese-cafe%20(1)%202%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fshirobou%2FDownloads%2Fjapanese-cafe%20(1)%202&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fcontact%2Froute&page=%2Fapi%2Fcontact%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcontact%2Froute.ts&appDir=%2FUsers%2Fshirobou%2FDownloads%2Fjapanese-cafe%20(1)%202%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fshirobou%2FDownloads%2Fjapanese-cafe%20(1)%202&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_shirobou_Downloads_japanese_cafe_1_2_app_api_contact_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/contact/route.ts */ \"(rsc)/./app/api/contact/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/contact/route\",\n        pathname: \"/api/contact\",\n        filename: \"route\",\n        bundlePath: \"app/api/contact/route\"\n    },\n    resolvedPagePath: \"/Users/shirobou/Downloads/japanese-cafe (1) 2/app/api/contact/route.ts\",\n    nextConfigOutput,\n    userland: _Users_shirobou_Downloads_japanese_cafe_1_2_app_api_contact_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZjb250YWN0JTJGcm91dGUmcGFnZT0lMkZhcGklMkZjb250YWN0JTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGY29udGFjdCUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRnNoaXJvYm91JTJGRG93bmxvYWRzJTJGamFwYW5lc2UtY2FmZSUyMCgxKSUyMDIlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRlVzZXJzJTJGc2hpcm9ib3UlMkZEb3dubG9hZHMlMkZqYXBhbmVzZS1jYWZlJTIwKDEpJTIwMiZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDc0I7QUFDbkc7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9Vc2Vycy9zaGlyb2JvdS9Eb3dubG9hZHMvamFwYW5lc2UtY2FmZSAoMSkgMi9hcHAvYXBpL2NvbnRhY3Qvcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2NvbnRhY3Qvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9jb250YWN0XCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9jb250YWN0L3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL3NoaXJvYm91L0Rvd25sb2Fkcy9qYXBhbmVzZS1jYWZlICgxKSAyL2FwcC9hcGkvY29udGFjdC9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fcontact%2Froute&page=%2Fapi%2Fcontact%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcontact%2Froute.ts&appDir=%2FUsers%2Fshirobou%2FDownloads%2Fjapanese-cafe%20(1)%202%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fshirobou%2FDownloads%2Fjapanese-cafe%20(1)%202&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/dotenv"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fcontact%2Froute&page=%2Fapi%2Fcontact%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcontact%2Froute.ts&appDir=%2FUsers%2Fshirobou%2FDownloads%2Fjapanese-cafe%20(1)%202%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fshirobou%2FDownloads%2Fjapanese-cafe%20(1)%202&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();