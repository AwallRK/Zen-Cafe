"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "_rsc_lib_auth_ts";
exports.ids = ["_rsc_lib_auth_ts"];
exports.modules = {

/***/ "(rsc)/./lib/auth.ts":
/*!*********************!*\
  !*** ./lib/auth.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateToken: () => (/* binding */ generateToken),\n/* harmony export */   verifyToken: () => (/* binding */ verifyToken)\n/* harmony export */ });\n/* harmony import */ var jose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jose */ \"(rsc)/./node_modules/jose/dist/webapi/jwt/sign.js\");\n/* harmony import */ var jose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jose */ \"(rsc)/./node_modules/jose/dist/webapi/jwt/verify.js\");\n\nconst secret = new TextEncoder().encode(process.env.JWT_SECRET || 'default-secret');\nconst JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '7d';\nasync function generateToken(payload) {\n    return await new jose__WEBPACK_IMPORTED_MODULE_0__.SignJWT(payload).setProtectedHeader({\n        alg: 'HS256'\n    }).setExpirationTime(JWT_EXPIRES_IN).sign(secret);\n}\nasync function verifyToken(token) {\n    try {\n        const { payload } = await (0,jose__WEBPACK_IMPORTED_MODULE_1__.jwtVerify)(token, secret);\n        return payload;\n    } catch (err) {\n        return null;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvYXV0aC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTBDO0FBRTFDLE1BQU1FLFNBQVMsSUFBSUMsY0FBY0MsTUFBTSxDQUFDQyxRQUFRQyxHQUFHLENBQUNDLFVBQVUsSUFBSTtBQUNsRSxNQUFNQyxpQkFBaUJILFFBQVFDLEdBQUcsQ0FBQ0UsY0FBYyxJQUFJO0FBSTlDLGVBQWVDLGNBQWNDLE9BQW1CO0lBQ25ELE9BQU8sTUFBTSxJQUFJVix5Q0FBT0EsQ0FBQ1UsU0FDcEJDLGtCQUFrQixDQUFDO1FBQUVDLEtBQUs7SUFBUSxHQUNsQ0MsaUJBQWlCLENBQUNMLGdCQUNsQk0sSUFBSSxDQUFDWjtBQUNkO0FBRU8sZUFBZWEsWUFBWUMsS0FBYTtJQUMzQyxJQUFJO1FBQ0EsTUFBTSxFQUFFTixPQUFPLEVBQUUsR0FBRyxNQUFNVCwrQ0FBU0EsQ0FBQ2UsT0FBT2Q7UUFDM0MsT0FBT1E7SUFDWCxFQUFFLE9BQU9PLEtBQUs7UUFDVixPQUFPO0lBQ1g7QUFDSiIsInNvdXJjZXMiOlsiL1VzZXJzL3NoaXJvYm91L0Rvd25sb2Fkcy9qYXBhbmVzZS1jYWZlICgxKSAyL2xpYi9hdXRoLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNpZ25KV1QsIGp3dFZlcmlmeSB9IGZyb20gJ2pvc2UnO1xuXG5jb25zdCBzZWNyZXQgPSBuZXcgVGV4dEVuY29kZXIoKS5lbmNvZGUocHJvY2Vzcy5lbnYuSldUX1NFQ1JFVCB8fCAnZGVmYXVsdC1zZWNyZXQnKTtcbmNvbnN0IEpXVF9FWFBJUkVTX0lOID0gcHJvY2Vzcy5lbnYuSldUX0VYUElSRVNfSU4gfHwgJzdkJztcblxuaW1wb3J0IHR5cGUgeyBKV1RQYXlsb2FkIH0gZnJvbSAnam9zZSc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZW5lcmF0ZVRva2VuKHBheWxvYWQ6IEpXVFBheWxvYWQpIHtcbiAgICByZXR1cm4gYXdhaXQgbmV3IFNpZ25KV1QocGF5bG9hZClcbiAgICAgICAgLnNldFByb3RlY3RlZEhlYWRlcih7IGFsZzogJ0hTMjU2JyB9KVxuICAgICAgICAuc2V0RXhwaXJhdGlvblRpbWUoSldUX0VYUElSRVNfSU4pXG4gICAgICAgIC5zaWduKHNlY3JldCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB2ZXJpZnlUb2tlbih0b2tlbjogc3RyaW5nKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBwYXlsb2FkIH0gPSBhd2FpdCBqd3RWZXJpZnkodG9rZW4sIHNlY3JldCk7XG4gICAgICAgIHJldHVybiBwYXlsb2FkO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG4iXSwibmFtZXMiOlsiU2lnbkpXVCIsImp3dFZlcmlmeSIsInNlY3JldCIsIlRleHRFbmNvZGVyIiwiZW5jb2RlIiwicHJvY2VzcyIsImVudiIsIkpXVF9TRUNSRVQiLCJKV1RfRVhQSVJFU19JTiIsImdlbmVyYXRlVG9rZW4iLCJwYXlsb2FkIiwic2V0UHJvdGVjdGVkSGVhZGVyIiwiYWxnIiwic2V0RXhwaXJhdGlvblRpbWUiLCJzaWduIiwidmVyaWZ5VG9rZW4iLCJ0b2tlbiIsImVyciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/auth.ts\n");

/***/ })

};
;