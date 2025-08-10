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
exports.id = "app/api/admin/route";
exports.ids = ["app/api/admin/route"];
exports.modules = {

/***/ "(rsc)/./app/api/admin/route.ts":
/*!********************************!*\
  !*** ./app/api/admin/route.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DELETE: () => (/* binding */ DELETE),\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST),\n/* harmony export */   PUT: () => (/* binding */ PUT)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/database */ \"(rsc)/./lib/database.ts\");\n/* harmony import */ var _models_Admin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/models/Admin */ \"(rsc)/./models/Admin.ts\");\n\n\n\n// GET all admins or single admin by id\nasync function GET(req) {\n    await (0,_lib_database__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    const { searchParams } = new URL(req.url);\n    const id = searchParams.get('id');\n    if (id) {\n        const admin = await _models_Admin__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findById(id);\n        if (!admin) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Admin not found'\n        }, {\n            status: 404\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(admin);\n    }\n    const admins = await _models_Admin__WEBPACK_IMPORTED_MODULE_2__[\"default\"].find();\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(admins);\n}\n// Login or create admin\nasync function POST(req) {\n    await (0,_lib_database__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    const data = await req.json();\n    // If login request\n    if (data.email && data.password && Object.keys(data).length === 2) {\n        const admin = await _models_Admin__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findOne({\n            email: data.email\n        });\n        if (!admin) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Invalid credentials'\n        }, {\n            status: 401\n        });\n        const valid = await __webpack_require__.e(/*! import() */ \"vendor-chunks/bcryptjs\").then(__webpack_require__.t.bind(__webpack_require__, /*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\", 23)).then((b)=>b.default.compare(data.password, admin.password));\n        if (!valid) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Invalid credentials'\n        }, {\n            status: 401\n        });\n        const { generateToken } = await Promise.all(/*! import() */[__webpack_require__.e(\"vendor-chunks/jose\"), __webpack_require__.e(\"_rsc_lib_auth_ts\")]).then(__webpack_require__.bind(__webpack_require__, /*! @/lib/auth */ \"(rsc)/./lib/auth.ts\"));\n        const token = await generateToken({\n            id: admin._id,\n            email: admin.email,\n            role: admin.role\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            token,\n            admin: {\n                id: admin._id,\n                email: admin.email,\n                role: admin.role,\n                name: admin.name\n            }\n        });\n    }\n    // Otherwise, create admin (requires name, email, password, role)\n    const admin = await _models_Admin__WEBPACK_IMPORTED_MODULE_2__[\"default\"].create(data);\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(admin);\n}\n// Update admin by id\nasync function PUT(req) {\n    await (0,_lib_database__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    const { searchParams } = new URL(req.url);\n    const id = searchParams.get('id');\n    if (!id) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        error: 'Missing id'\n    }, {\n        status: 400\n    });\n    const data = await req.json();\n    const admin = await _models_Admin__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findByIdAndUpdate(id, data, {\n        new: true\n    });\n    if (!admin) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        error: 'Admin not found'\n    }, {\n        status: 404\n    });\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(admin);\n}\n// Delete admin by id\nasync function DELETE(req) {\n    await (0,_lib_database__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    const { searchParams } = new URL(req.url);\n    const id = searchParams.get('id');\n    if (!id) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        error: 'Missing id'\n    }, {\n        status: 400\n    });\n    const admin = await _models_Admin__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findByIdAndDelete(id);\n    if (!admin) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        error: 'Admin not found'\n    }, {\n        status: 404\n    });\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        success: true\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUM3QixJQUFJVSxNQUFNO1FBQUVvQixLQUFLO0lBQUs7SUFDbEUsSUFBSSxDQUFDNUIsT0FBTyxPQUFPVixxREFBWUEsQ0FBQ1ksSUFBSSxDQUFDO1FBQUVDLE9BQU87SUFBa0IsR0FBRztRQUFFQyxRQUFRO0lBQUk7SUFDakYsT0FBT2QscURBQVlBLENBQUNZLElBQUksQ0FBQ0Y7QUFDN0I7QUFFQSxxQkFBcUI7QUFDZCxlQUFlNkIsT0FBT25DLEdBQVk7SUFDckMsTUFBTUgseURBQVNBO0lBQ2YsTUFBTSxFQUFFSSxZQUFZLEVBQUUsR0FBRyxJQUFJQyxJQUFJRixJQUFJRyxHQUFHO0lBQ3hDLE1BQU1DLEtBQUtILGFBQWFJLEdBQUcsQ0FBQztJQUM1QixJQUFJLENBQUNELElBQUksT0FBT1IscURBQVlBLENBQUNZLElBQUksQ0FBQztRQUFFQyxPQUFPO0lBQWEsR0FBRztRQUFFQyxRQUFRO0lBQUk7SUFDekUsTUFBTUosUUFBUSxNQUFNUixxREFBS0EsQ0FBQ3NDLGlCQUFpQixDQUFDaEM7SUFDNUMsSUFBSSxDQUFDRSxPQUFPLE9BQU9WLHFEQUFZQSxDQUFDWSxJQUFJLENBQUM7UUFBRUMsT0FBTztJQUFrQixHQUFHO1FBQUVDLFFBQVE7SUFBSTtJQUNqRixPQUFPZCxxREFBWUEsQ0FBQ1ksSUFBSSxDQUFDO1FBQUU2QixTQUFTO0lBQUs7QUFDN0MiLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGlyb2JvdS9Eb3dubG9hZHMvamFwYW5lc2UtY2FmZSAoMSkgMi9hcHAvYXBpL2FkbWluL3JvdXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJztcbmltcG9ydCBkYkNvbm5lY3QgZnJvbSAnQC9saWIvZGF0YWJhc2UnO1xuaW1wb3J0IEFkbWluIGZyb20gJ0AvbW9kZWxzL0FkbWluJztcblxuLy8gR0VUIGFsbCBhZG1pbnMgb3Igc2luZ2xlIGFkbWluIGJ5IGlkXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKHJlcTogUmVxdWVzdCkge1xuICAgIGF3YWl0IGRiQ29ubmVjdCgpO1xuICAgIGNvbnN0IHsgc2VhcmNoUGFyYW1zIH0gPSBuZXcgVVJMKHJlcS51cmwpO1xuICAgIGNvbnN0IGlkID0gc2VhcmNoUGFyYW1zLmdldCgnaWQnKTtcbiAgICBpZiAoaWQpIHtcbiAgICAgICAgY29uc3QgYWRtaW4gPSBhd2FpdCBBZG1pbi5maW5kQnlJZChpZCk7XG4gICAgICAgIGlmICghYWRtaW4pIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnQWRtaW4gbm90IGZvdW5kJyB9LCB7IHN0YXR1czogNDA0IH0pO1xuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oYWRtaW4pO1xuICAgIH1cbiAgICBjb25zdCBhZG1pbnMgPSBhd2FpdCBBZG1pbi5maW5kKCk7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKGFkbWlucyk7XG59XG5cbi8vIExvZ2luIG9yIGNyZWF0ZSBhZG1pblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxOiBSZXF1ZXN0KSB7XG4gICAgYXdhaXQgZGJDb25uZWN0KCk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcS5qc29uKCk7XG4gICAgLy8gSWYgbG9naW4gcmVxdWVzdFxuICAgIGlmIChkYXRhLmVtYWlsICYmIGRhdGEucGFzc3dvcmQgJiYgT2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIGNvbnN0IGFkbWluID0gYXdhaXQgQWRtaW4uZmluZE9uZSh7IGVtYWlsOiBkYXRhLmVtYWlsIH0pO1xuICAgICAgICBpZiAoIWFkbWluKSByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ0ludmFsaWQgY3JlZGVudGlhbHMnIH0sIHsgc3RhdHVzOiA0MDEgfSk7XG4gICAgICAgIGNvbnN0IHZhbGlkID0gYXdhaXQgaW1wb3J0KCdiY3J5cHRqcycpLnRoZW4oYiA9PiBiLmRlZmF1bHQuY29tcGFyZShkYXRhLnBhc3N3b3JkLCBhZG1pbi5wYXNzd29yZCkpO1xuICAgICAgICBpZiAoIXZhbGlkKSByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ0ludmFsaWQgY3JlZGVudGlhbHMnIH0sIHsgc3RhdHVzOiA0MDEgfSk7XG4gICAgICAgIGNvbnN0IHsgZ2VuZXJhdGVUb2tlbiB9ID0gYXdhaXQgaW1wb3J0KCdAL2xpYi9hdXRoJyk7XG4gICAgICAgIGNvbnN0IHRva2VuID0gYXdhaXQgZ2VuZXJhdGVUb2tlbih7IGlkOiBhZG1pbi5faWQsIGVtYWlsOiBhZG1pbi5lbWFpbCwgcm9sZTogYWRtaW4ucm9sZSB9KTtcbiAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgdG9rZW4sIGFkbWluOiB7IGlkOiBhZG1pbi5faWQsIGVtYWlsOiBhZG1pbi5lbWFpbCwgcm9sZTogYWRtaW4ucm9sZSwgbmFtZTogYWRtaW4ubmFtZSB9IH0pO1xuICAgIH1cbiAgICAvLyBPdGhlcndpc2UsIGNyZWF0ZSBhZG1pbiAocmVxdWlyZXMgbmFtZSwgZW1haWwsIHBhc3N3b3JkLCByb2xlKVxuICAgIGNvbnN0IGFkbWluID0gYXdhaXQgQWRtaW4uY3JlYXRlKGRhdGEpO1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihhZG1pbik7XG59XG5cbi8vIFVwZGF0ZSBhZG1pbiBieSBpZFxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBVVChyZXE6IFJlcXVlc3QpIHtcbiAgICBhd2FpdCBkYkNvbm5lY3QoKTtcbiAgICBjb25zdCB7IHNlYXJjaFBhcmFtcyB9ID0gbmV3IFVSTChyZXEudXJsKTtcbiAgICBjb25zdCBpZCA9IHNlYXJjaFBhcmFtcy5nZXQoJ2lkJyk7XG4gICAgaWYgKCFpZCkgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdNaXNzaW5nIGlkJyB9LCB7IHN0YXR1czogNDAwIH0pO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXEuanNvbigpO1xuICAgIGNvbnN0IGFkbWluID0gYXdhaXQgQWRtaW4uZmluZEJ5SWRBbmRVcGRhdGUoaWQsIGRhdGEsIHsgbmV3OiB0cnVlIH0pO1xuICAgIGlmICghYWRtaW4pIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnQWRtaW4gbm90IGZvdW5kJyB9LCB7IHN0YXR1czogNDA0IH0pO1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihhZG1pbik7XG59XG5cbi8vIERlbGV0ZSBhZG1pbiBieSBpZFxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIERFTEVURShyZXE6IFJlcXVlc3QpIHtcbiAgICBhd2FpdCBkYkNvbm5lY3QoKTtcbiAgICBjb25zdCB7IHNlYXJjaFBhcmFtcyB9ID0gbmV3IFVSTChyZXEudXJsKTtcbiAgICBjb25zdCBpZCA9IHNlYXJjaFBhcmFtcy5nZXQoJ2lkJyk7XG4gICAgaWYgKCFpZCkgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdNaXNzaW5nIGlkJyB9LCB7IHN0YXR1czogNDAwIH0pO1xuICAgIGNvbnN0IGFkbWluID0gYXdhaXQgQWRtaW4uZmluZEJ5SWRBbmREZWxldGUoaWQpO1xuICAgIGlmICghYWRtaW4pIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnQWRtaW4gbm90IGZvdW5kJyB9LCB7IHN0YXR1czogNDA0IH0pO1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IHN1Y2Nlc3M6IHRydWUgfSk7XG59XG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiZGJDb25uZWN0IiwiQWRtaW4iLCJHRVQiLCJyZXEiLCJzZWFyY2hQYXJhbXMiLCJVUkwiLCJ1cmwiLCJpZCIsImdldCIsImFkbWluIiwiZmluZEJ5SWQiLCJqc29uIiwiZXJyb3IiLCJzdGF0dXMiLCJhZG1pbnMiLCJmaW5kIiwiUE9TVCIsImRhdGEiLCJlbWFpbCIsInBhc3N3b3JkIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsImZpbmRPbmUiLCJ2YWxpZCIsInRoZW4iLCJiIiwiZGVmYXVsdCIsImNvbXBhcmUiLCJnZW5lcmF0ZVRva2VuIiwidG9rZW4iLCJfaWQiLCJyb2xlIiwibmFtZSIsImNyZWF0ZSIsIlBVVCIsImZpbmRCeUlkQW5kVXBkYXRlIiwibmV3IiwiREVMRVRFIiwiZmluZEJ5SWRBbmREZWxldGUiLCJzdWNjZXNzIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/admin/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/database.ts":
/*!*************************!*\
  !*** ./lib/database.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dotenv */ \"(rsc)/./node_modules/dotenv/lib/main.js\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_1__);\n\n\ndotenv__WEBPACK_IMPORTED_MODULE_1___default().config({\n    path: '.env.local'\n});\nconst MONGODB_URI = process.env.MONGODB_URI || '';\nif (!MONGODB_URI) {\n    throw new Error('Please define the MONGODB_URI environment variable in .env.local');\n}\nlet cached = global.mongoose;\nif (!cached) {\n    cached = global.mongoose = {\n        conn: null,\n        promise: null\n    };\n}\nasync function dbConnect() {\n    cached ??= {\n        conn: null,\n        promise: null\n    };\n    if (cached.conn) {\n        return cached.conn;\n    }\n    if (!cached.promise) {\n        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, {\n            bufferCommands: false\n        }).then((mongoose)=>{\n            return mongoose;\n        });\n    }\n    cached.conn = await cached.promise;\n    return cached.conn;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvZGF0YWJhc2UudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBZ0M7QUFDSjtBQUM1QkMsb0RBQWEsQ0FBQztJQUFFRSxNQUFNO0FBQWE7QUFFbkMsTUFBTUMsY0FBY0MsUUFBUUMsR0FBRyxDQUFDRixXQUFXLElBQUk7QUFFL0MsSUFBSSxDQUFDQSxhQUFhO0lBQ2QsTUFBTSxJQUFJRyxNQUFNO0FBQ3BCO0FBWUEsSUFBSUMsU0FBU0MsT0FBT1QsUUFBUTtBQUM1QixJQUFJLENBQUNRLFFBQVE7SUFDVEEsU0FBU0MsT0FBT1QsUUFBUSxHQUFHO1FBQUVVLE1BQU07UUFBTUMsU0FBUztJQUFLO0FBQzNEO0FBRUEsZUFBZUM7SUFDWEosV0FBVztRQUFFRSxNQUFNO1FBQU1DLFNBQVM7SUFBSztJQUN2QyxJQUFJSCxPQUFPRSxJQUFJLEVBQUU7UUFDYixPQUFPRixPQUFPRSxJQUFJO0lBQ3RCO0lBQ0EsSUFBSSxDQUFDRixPQUFPRyxPQUFPLEVBQUU7UUFDakJILE9BQU9HLE9BQU8sR0FBR1gsdURBQWdCLENBQUNJLGFBQWE7WUFDM0NVLGdCQUFnQjtRQUNwQixHQUFHQyxJQUFJLENBQUMsQ0FBQ2Y7WUFDTCxPQUFPQTtRQUNYO0lBQ0o7SUFDQVEsT0FBT0UsSUFBSSxHQUFHLE1BQU1GLE9BQU9HLE9BQU87SUFDbEMsT0FBT0gsT0FBT0UsSUFBSTtBQUN0QjtBQUVBLGlFQUFlRSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyIvVXNlcnMvc2hpcm9ib3UvRG93bmxvYWRzL2phcGFuZXNlLWNhZmUgKDEpIDIvbGliL2RhdGFiYXNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5pbXBvcnQgZG90ZW52IGZyb20gJ2RvdGVudic7XG5kb3RlbnYuY29uZmlnKHsgcGF0aDogJy5lbnYubG9jYWwnIH0pO1xuXG5jb25zdCBNT05HT0RCX1VSSSA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJIHx8ICcnO1xuXG5pZiAoIU1PTkdPREJfVVJJKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdQbGVhc2UgZGVmaW5lIHRoZSBNT05HT0RCX1VSSSBlbnZpcm9ubWVudCB2YXJpYWJsZSBpbiAuZW52LmxvY2FsJyk7XG59XG5cbnR5cGUgTW9uZ29vc2VDYWNoZSA9IHtcbiAgICBjb25uOiB0eXBlb2YgbW9uZ29vc2UgfCBudWxsO1xuICAgIHByb21pc2U6IFByb21pc2U8dHlwZW9mIG1vbmdvb3NlPiB8IG51bGw7XG59O1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXZhclxuICAgIHZhciBtb25nb29zZTogTW9uZ29vc2VDYWNoZSB8IHVuZGVmaW5lZDtcbn1cblxubGV0IGNhY2hlZCA9IGdsb2JhbC5tb25nb29zZSBhcyBNb25nb29zZUNhY2hlIHwgdW5kZWZpbmVkO1xuaWYgKCFjYWNoZWQpIHtcbiAgICBjYWNoZWQgPSBnbG9iYWwubW9uZ29vc2UgPSB7IGNvbm46IG51bGwsIHByb21pc2U6IG51bGwgfTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZGJDb25uZWN0KCkge1xuICAgIGNhY2hlZCA/Pz0geyBjb25uOiBudWxsLCBwcm9taXNlOiBudWxsIH07XG4gICAgaWYgKGNhY2hlZC5jb25uKSB7XG4gICAgICAgIHJldHVybiBjYWNoZWQuY29ubjtcbiAgICB9XG4gICAgaWYgKCFjYWNoZWQucHJvbWlzZSkge1xuICAgICAgICBjYWNoZWQucHJvbWlzZSA9IG1vbmdvb3NlLmNvbm5lY3QoTU9OR09EQl9VUkksIHtcbiAgICAgICAgICAgIGJ1ZmZlckNvbW1hbmRzOiBmYWxzZSxcbiAgICAgICAgfSkudGhlbigobW9uZ29vc2UpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBtb25nb29zZTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNhY2hlZC5jb25uID0gYXdhaXQgY2FjaGVkLnByb21pc2U7XG4gICAgcmV0dXJuIGNhY2hlZC5jb25uO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkYkNvbm5lY3Q7XG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJkb3RlbnYiLCJjb25maWciLCJwYXRoIiwiTU9OR09EQl9VUkkiLCJwcm9jZXNzIiwiZW52IiwiRXJyb3IiLCJjYWNoZWQiLCJnbG9iYWwiLCJjb25uIiwicHJvbWlzZSIsImRiQ29ubmVjdCIsImNvbm5lY3QiLCJidWZmZXJDb21tYW5kcyIsInRoZW4iXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/database.ts\n");

/***/ }),

/***/ "(rsc)/./models/Admin.ts":
/*!*************************!*\
  !*** ./models/Admin.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst AdminSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    id: {\n        type: String,\n        required: false\n    },\n    name: {\n        type: String,\n        required: true\n    },\n    email: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    password: {\n        type: String,\n        required: true\n    },\n    role: {\n        type: String,\n        default: 'admin'\n    }\n}, {\n    timestamps: true\n});\nconst AdminModel = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Admin || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('Admin', AdminSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdminModel);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvQWRtaW4udHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTZEO0FBWTdELE1BQU1FLGNBQTZCLElBQUlELDRDQUFNQSxDQUN6QztJQUNJRSxJQUFJO1FBQUVDLE1BQU1DO1FBQVFDLFVBQVU7SUFBTTtJQUNwQ0MsTUFBTTtRQUFFSCxNQUFNQztRQUFRQyxVQUFVO0lBQUs7SUFDckNFLE9BQU87UUFBRUosTUFBTUM7UUFBUUMsVUFBVTtRQUFNRyxRQUFRO0lBQUs7SUFDcERDLFVBQVU7UUFBRU4sTUFBTUM7UUFBUUMsVUFBVTtJQUFLO0lBQ3pDSyxNQUFNO1FBQUVQLE1BQU1DO1FBQVFPLFNBQVM7SUFBUTtBQUMzQyxHQUNBO0lBQUVDLFlBQVk7QUFBSztBQUd2QixNQUFNQyxhQUEyQmQsd0RBQWUsQ0FBQ2dCLEtBQUssSUFBSWhCLHFEQUFjLENBQVEsU0FBU0U7QUFFekYsaUVBQWVZLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGlyb2JvdS9Eb3dubG9hZHMvamFwYW5lc2UtY2FmZSAoMSkgMi9tb2RlbHMvQWRtaW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlLCB7IFNjaGVtYSwgRG9jdW1lbnQsIE1vZGVsIH0gZnJvbSAnbW9uZ29vc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFkbWluIGV4dGVuZHMgRG9jdW1lbnQge1xuICAgIGlkPzogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBlbWFpbDogc3RyaW5nO1xuICAgIHBhc3N3b3JkOiBzdHJpbmc7XG4gICAgcm9sZTogc3RyaW5nO1xuICAgIGNyZWF0ZWRBdDogRGF0ZTtcbiAgICB1cGRhdGVkQXQ6IERhdGU7XG59XG5cbmNvbnN0IEFkbWluU2NoZW1hOiBTY2hlbWE8QWRtaW4+ID0gbmV3IFNjaGVtYShcbiAgICB7XG4gICAgICAgIGlkOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IGZhbHNlIH0sXG4gICAgICAgIG5hbWU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuICAgICAgICBlbWFpbDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlLCB1bmlxdWU6IHRydWUgfSxcbiAgICAgICAgcGFzc3dvcmQ6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuICAgICAgICByb2xlOiB7IHR5cGU6IFN0cmluZywgZGVmYXVsdDogJ2FkbWluJyB9LFxuICAgIH0sXG4gICAgeyB0aW1lc3RhbXBzOiB0cnVlIH1cbik7XG5cbmNvbnN0IEFkbWluTW9kZWw6IE1vZGVsPEFkbWluPiA9IG1vbmdvb3NlLm1vZGVscy5BZG1pbiB8fCBtb25nb29zZS5tb2RlbDxBZG1pbj4oJ0FkbWluJywgQWRtaW5TY2hlbWEpO1xuXG5leHBvcnQgZGVmYXVsdCBBZG1pbk1vZGVsO1xuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiU2NoZW1hIiwiQWRtaW5TY2hlbWEiLCJpZCIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsIm5hbWUiLCJlbWFpbCIsInVuaXF1ZSIsInBhc3N3b3JkIiwicm9sZSIsImRlZmF1bHQiLCJ0aW1lc3RhbXBzIiwiQWRtaW5Nb2RlbCIsIm1vZGVscyIsIkFkbWluIiwibW9kZWwiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./models/Admin.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fadmin%2Froute&page=%2Fapi%2Fadmin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Froute.ts&appDir=%2FUsers%2Fshirobou%2FDownloads%2Fjapanese-cafe%20(1)%202%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fshirobou%2FDownloads%2Fjapanese-cafe%20(1)%202&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fadmin%2Froute&page=%2Fapi%2Fadmin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Froute.ts&appDir=%2FUsers%2Fshirobou%2FDownloads%2Fjapanese-cafe%20(1)%202%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fshirobou%2FDownloads%2Fjapanese-cafe%20(1)%202&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_shirobou_Downloads_japanese_cafe_1_2_app_api_admin_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/admin/route.ts */ \"(rsc)/./app/api/admin/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/admin/route\",\n        pathname: \"/api/admin\",\n        filename: \"route\",\n        bundlePath: \"app/api/admin/route\"\n    },\n    resolvedPagePath: \"/Users/shirobou/Downloads/japanese-cafe (1) 2/app/api/admin/route.ts\",\n    nextConfigOutput,\n    userland: _Users_shirobou_Downloads_japanese_cafe_1_2_app_api_admin_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZhZG1pbiUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGYWRtaW4lMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZhZG1pbiUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRnNoaXJvYm91JTJGRG93bmxvYWRzJTJGamFwYW5lc2UtY2FmZSUyMCgxKSUyMDIlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRlVzZXJzJTJGc2hpcm9ib3UlMkZEb3dubG9hZHMlMkZqYXBhbmVzZS1jYWZlJTIwKDEpJTIwMiZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDb0I7QUFDakc7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9Vc2Vycy9zaGlyb2JvdS9Eb3dubG9hZHMvamFwYW5lc2UtY2FmZSAoMSkgMi9hcHAvYXBpL2FkbWluL3JvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9hZG1pbi9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2FkbWluXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9hZG1pbi9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9Vc2Vycy9zaGlyb2JvdS9Eb3dubG9hZHMvamFwYW5lc2UtY2FmZSAoMSkgMi9hcHAvYXBpL2FkbWluL3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fadmin%2Froute&page=%2Fapi%2Fadmin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Froute.ts&appDir=%2FUsers%2Fshirobou%2FDownloads%2Fjapanese-cafe%20(1)%202%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fshirobou%2FDownloads%2Fjapanese-cafe%20(1)%202&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/dotenv"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fadmin%2Froute&page=%2Fapi%2Fadmin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Froute.ts&appDir=%2FUsers%2Fshirobou%2FDownloads%2Fjapanese-cafe%20(1)%202%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fshirobou%2FDownloads%2Fjapanese-cafe%20(1)%202&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();