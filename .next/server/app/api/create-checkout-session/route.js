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
exports.id = "app/api/create-checkout-session/route";
exports.ids = ["app/api/create-checkout-session/route"];
exports.modules = {

/***/ "(rsc)/./app/api/create-checkout-session/route.ts":
/*!**************************************************!*\
  !*** ./app/api/create-checkout-session/route.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stripe */ \"(rsc)/./node_modules/stripe/esm/stripe.esm.node.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\n\n// Check for the Stripe secret key and throw an error if it's missing\nconst stripeSecretKey = process.env.STRIPE_SECRET_KEY;\nif (!stripeSecretKey) {\n    throw new Error(\"Missing environment variable: STRIPE_SECRET_KEY\");\n}\nconst stripe = new stripe__WEBPACK_IMPORTED_MODULE_0__[\"default\"](stripeSecretKey, {\n    // Use the latest STABLE Stripe API version\n    apiVersion: '2024-06-20',\n    typescript: true\n});\nasync function POST(req) {\n    try {\n        const body = await req.json();\n        const { cart, customer, orderType, deliveryFee } = body;\n        // --- Input Validation ---\n        if (!cart || !Array.isArray(cart) || cart.length === 0) {\n            return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n                error: 'Cart is invalid.'\n            }, {\n                status: 400\n            });\n        }\n        if (!customer || !customer.email) {\n            return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n                error: 'Customer details are missing.'\n            }, {\n                status: 400\n            });\n        }\n        if (orderType === 'delivery' && (deliveryFee === undefined || deliveryFee < 0)) {\n            return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n                error: 'Delivery fee is invalid.'\n            }, {\n                status: 400\n            });\n        }\n        // --- Line Item Creation ---\n        const line_items = cart.map((item)=>{\n            const unitAmount = typeof item.price === 'string' ? parseInt(item.price.replace(/[^\u0000-\\u007F]/g, ''), 10) : Number(item.price);\n            if (isNaN(unitAmount)) {\n                // Throw an error that will be caught by the catch block\n                throw new Error(`Invalid price for item: ${item.name}`);\n            }\n            return {\n                price_data: {\n                    currency: 'jpy',\n                    product_data: {\n                        name: item.name,\n                        ...item.image && typeof item.image === 'string' && item.image.startsWith('http') ? {\n                            images: [\n                                item.image\n                            ]\n                        } : {}\n                    },\n                    // CRITICAL: JPY is a zero-decimal currency. DO NOT multiply by 100.\n                    unit_amount: unitAmount\n                },\n                quantity: item.quantity\n            };\n        });\n        // Add delivery fee if applicable\n        if (orderType === 'delivery' && deliveryFee && deliveryFee > 0) {\n            line_items.push({\n                price_data: {\n                    currency: 'jpy',\n                    product_data: {\n                        name: 'Delivery Fee',\n                        images: []\n                    },\n                    // CRITICAL: JPY is a zero-decimal currency. DO NOT multiply by 100.\n                    unit_amount: deliveryFee\n                },\n                quantity: 1\n            });\n        }\n        // --- Checkout Session Creation ---\n        const success_url = `${\"http://localhost:3000\"}/?session_id={CHECKOUT_SESSION_ID}`;\n        const cancel_url = `${\"http://localhost:3000\"}/order`;\n        const session = await stripe.checkout.sessions.create({\n            payment_method_types: [\n                'card'\n            ],\n            line_items,\n            mode: 'payment',\n            customer_email: customer.email,\n            success_url: success_url,\n            cancel_url: cancel_url,\n            metadata: {\n                // Metadata values must be strings\n                firstName: customer.firstName,\n                lastName: customer.lastName,\n                phone: customer.phone,\n                orderType\n            }\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n            url: session.url\n        });\n    } catch (error) {\n        console.error('Stripe Error:', error);\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n            error: error.message\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2NyZWF0ZS1jaGVja291dC1zZXNzaW9uL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEyQjtBQUNlO0FBaUIxQyxxRUFBcUU7QUFDckUsTUFBTUUsa0JBQWtCQyxRQUFRQyxHQUFHLENBQUNDLGlCQUFpQjtBQUNyRCxJQUFJLENBQUNILGlCQUFpQjtJQUNsQixNQUFNLElBQUlJLE1BQU07QUFDcEI7QUFFQSxNQUFNQyxTQUFTLElBQUlQLDhDQUFNQSxDQUFDRSxpQkFBaUI7SUFDdkMsMkNBQTJDO0lBQzNDTSxZQUFZO0lBQ1pDLFlBQVk7QUFDaEI7QUFFTyxlQUFlQyxLQUFLQyxHQUFZO0lBQ25DLElBQUk7UUFDQSxNQUFNQyxPQUFPLE1BQU1ELElBQUlFLElBQUk7UUFDM0IsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFFBQVEsRUFBRUMsU0FBUyxFQUFFQyxXQUFXLEVBQUUsR0FBR0w7UUFRbkQsMkJBQTJCO1FBQzNCLElBQUksQ0FBQ0UsUUFBUSxDQUFDSSxNQUFNQyxPQUFPLENBQUNMLFNBQVNBLEtBQUtNLE1BQU0sS0FBSyxHQUFHO1lBQ3BELE9BQU9uQixxREFBWUEsQ0FBQ1ksSUFBSSxDQUFDO2dCQUFFUSxPQUFPO1lBQW1CLEdBQUc7Z0JBQUVDLFFBQVE7WUFBSTtRQUMxRTtRQUNBLElBQUksQ0FBQ1AsWUFBWSxDQUFDQSxTQUFTUSxLQUFLLEVBQUU7WUFDOUIsT0FBT3RCLHFEQUFZQSxDQUFDWSxJQUFJLENBQUM7Z0JBQUVRLE9BQU87WUFBZ0MsR0FBRztnQkFBRUMsUUFBUTtZQUFJO1FBQ3ZGO1FBQ0EsSUFBSU4sY0FBYyxjQUFlQyxDQUFBQSxnQkFBZ0JPLGFBQWFQLGNBQWMsSUFBSTtZQUM1RSxPQUFPaEIscURBQVlBLENBQUNZLElBQUksQ0FBQztnQkFBRVEsT0FBTztZQUEyQixHQUFHO2dCQUFFQyxRQUFRO1lBQUk7UUFDbEY7UUFFQSw2QkFBNkI7UUFDN0IsTUFBTUcsYUFBYVgsS0FBS1ksR0FBRyxDQUFDLENBQUNDO1lBQ3pCLE1BQU1DLGFBQWEsT0FBT0QsS0FBS0UsS0FBSyxLQUFLLFdBQ25DQyxTQUFTSCxLQUFLRSxLQUFLLENBQUNFLE9BQU8sQ0FBQyxnQkFBZ0IsS0FBSyxNQUNqREMsT0FBT0wsS0FBS0UsS0FBSztZQUV2QixJQUFJSSxNQUFNTCxhQUFhO2dCQUNuQix3REFBd0Q7Z0JBQ3hELE1BQU0sSUFBSXRCLE1BQU0sQ0FBQyx3QkFBd0IsRUFBRXFCLEtBQUtPLElBQUksRUFBRTtZQUMxRDtZQUVBLE9BQU87Z0JBQ0hDLFlBQVk7b0JBQ1JDLFVBQVU7b0JBQ1ZDLGNBQWM7d0JBQ1ZILE1BQU1QLEtBQUtPLElBQUk7d0JBQ2YsR0FBSVAsS0FBS1csS0FBSyxJQUFJLE9BQU9YLEtBQUtXLEtBQUssS0FBSyxZQUFZWCxLQUFLVyxLQUFLLENBQUNDLFVBQVUsQ0FBQyxVQUFVOzRCQUFFQyxRQUFRO2dDQUFDYixLQUFLVyxLQUFLOzZCQUFDO3dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNySDtvQkFDQSxvRUFBb0U7b0JBQ3BFRyxhQUFhYjtnQkFDakI7Z0JBQ0FjLFVBQVVmLEtBQUtlLFFBQVE7WUFDM0I7UUFDSjtRQUVBLGlDQUFpQztRQUNqQyxJQUFJMUIsY0FBYyxjQUFjQyxlQUFlQSxjQUFjLEdBQUc7WUFDNURRLFdBQVdrQixJQUFJLENBQUM7Z0JBQ1pSLFlBQVk7b0JBQ1JDLFVBQVU7b0JBQ1ZDLGNBQWM7d0JBQUVILE1BQU07d0JBQWdCTSxRQUFRLEVBQUU7b0JBQUM7b0JBQ2pELG9FQUFvRTtvQkFDcEVDLGFBQWF4QjtnQkFDakI7Z0JBQ0F5QixVQUFVO1lBQ2Q7UUFDSjtRQUVBLG9DQUFvQztRQUNwQyxNQUFNRSxjQUFjLEdBQUd6Qyx1QkFBZ0MsQ0FBQyxrQ0FBa0MsQ0FBQztRQUMzRixNQUFNMkMsYUFBYSxHQUFHM0MsdUJBQWdDLENBQUMsTUFBTSxDQUFDO1FBRTlELE1BQU00QyxVQUFVLE1BQU14QyxPQUFPeUMsUUFBUSxDQUFDQyxRQUFRLENBQUNDLE1BQU0sQ0FBQztZQUNsREMsc0JBQXNCO2dCQUFDO2FBQU87WUFDOUIxQjtZQUNBMkIsTUFBTTtZQUNOQyxnQkFBZ0J0QyxTQUFTUSxLQUFLO1lBQzlCcUIsYUFBYUE7WUFDYkUsWUFBWUE7WUFDWlEsVUFBVTtnQkFDTixrQ0FBa0M7Z0JBQ2xDQyxXQUFXeEMsU0FBU3dDLFNBQVM7Z0JBQzdCQyxVQUFVekMsU0FBU3lDLFFBQVE7Z0JBQzNCQyxPQUFPMUMsU0FBUzBDLEtBQUs7Z0JBQ3JCekM7WUFDSjtRQUNKO1FBRUEsT0FBT2YscURBQVlBLENBQUNZLElBQUksQ0FBQztZQUFFNkMsS0FBS1gsUUFBUVcsR0FBRztRQUFDO0lBRWhELEVBQUUsT0FBT3JDLE9BQVk7UUFDakJzQyxRQUFRdEMsS0FBSyxDQUFDLGlCQUFpQkE7UUFDL0IsT0FBT3BCLHFEQUFZQSxDQUFDWSxJQUFJLENBQUM7WUFBRVEsT0FBT0EsTUFBTXVDLE9BQU87UUFBQyxHQUFHO1lBQUV0QyxRQUFRO1FBQUk7SUFDckU7QUFDSiIsInNvdXJjZXMiOlsiL1VzZXJzL3NoaXJvYm91L0Rvd25sb2Fkcy9qYXBhbmVzZS1jYWZlICgxKSAyL2FwcC9hcGkvY3JlYXRlLWNoZWNrb3V0LXNlc3Npb24vcm91dGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0cmlwZSBmcm9tICdzdHJpcGUnXG5pbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcidcblxuLy8gRGVmaW5lIGludGVyZmFjZXMgZm9yIGJldHRlciB0eXBlIHNhZmV0eVxuaW50ZXJmYWNlIENhcnRJdGVtIHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgaW1hZ2U/OiBzdHJpbmc7XG4gICAgcHJpY2U6IHN0cmluZyB8IG51bWJlcjtcbiAgICBxdWFudGl0eTogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgQ3VzdG9tZXIge1xuICAgIGVtYWlsOiBzdHJpbmc7XG4gICAgZmlyc3ROYW1lOiBzdHJpbmc7XG4gICAgbGFzdE5hbWU6IHN0cmluZztcbiAgICBwaG9uZTogc3RyaW5nO1xufVxuXG4vLyBDaGVjayBmb3IgdGhlIFN0cmlwZSBzZWNyZXQga2V5IGFuZCB0aHJvdyBhbiBlcnJvciBpZiBpdCdzIG1pc3NpbmdcbmNvbnN0IHN0cmlwZVNlY3JldEtleSA9IHByb2Nlc3MuZW52LlNUUklQRV9TRUNSRVRfS0VZO1xuaWYgKCFzdHJpcGVTZWNyZXRLZXkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJNaXNzaW5nIGVudmlyb25tZW50IHZhcmlhYmxlOiBTVFJJUEVfU0VDUkVUX0tFWVwiKTtcbn1cblxuY29uc3Qgc3RyaXBlID0gbmV3IFN0cmlwZShzdHJpcGVTZWNyZXRLZXksIHtcbiAgICAvLyBVc2UgdGhlIGxhdGVzdCBTVEFCTEUgU3RyaXBlIEFQSSB2ZXJzaW9uXG4gICAgYXBpVmVyc2lvbjogJzIwMjQtMDYtMjAnLFxuICAgIHR5cGVzY3JpcHQ6IHRydWUsIC8vIFJlY29tbWVuZGVkIGZvciBUeXBlU2NyaXB0IHByb2plY3RzXG59KTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxOiBSZXF1ZXN0KSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgYm9keSA9IGF3YWl0IHJlcS5qc29uKCk7XG4gICAgICAgIGNvbnN0IHsgY2FydCwgY3VzdG9tZXIsIG9yZGVyVHlwZSwgZGVsaXZlcnlGZWUgfSA9IGJvZHkgYXMge1xuICAgICAgICAgICAgY2FydDogQ2FydEl0ZW1bXTtcbiAgICAgICAgICAgIGN1c3RvbWVyOiBDdXN0b21lcjtcbiAgICAgICAgICAgIG9yZGVyVHlwZTogJ2RlbGl2ZXJ5JyB8ICdwaWNrdXAnO1xuICAgICAgICAgICAgZGVsaXZlcnlGZWU/OiBudW1iZXI7XG4gICAgICAgICAgICB0YXg/OiBudW1iZXI7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gLS0tIElucHV0IFZhbGlkYXRpb24gLS0tXG4gICAgICAgIGlmICghY2FydCB8fCAhQXJyYXkuaXNBcnJheShjYXJ0KSB8fCBjYXJ0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdDYXJ0IGlzIGludmFsaWQuJyB9LCB7IHN0YXR1czogNDAwIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICghY3VzdG9tZXIgfHwgIWN1c3RvbWVyLmVtYWlsKSB7XG4gICAgICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ0N1c3RvbWVyIGRldGFpbHMgYXJlIG1pc3NpbmcuJyB9LCB7IHN0YXR1czogNDAwIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcmRlclR5cGUgPT09ICdkZWxpdmVyeScgJiYgKGRlbGl2ZXJ5RmVlID09PSB1bmRlZmluZWQgfHwgZGVsaXZlcnlGZWUgPCAwKSkge1xuICAgICAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdEZWxpdmVyeSBmZWUgaXMgaW52YWxpZC4nIH0sIHsgc3RhdHVzOiA0MDAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyAtLS0gTGluZSBJdGVtIENyZWF0aW9uIC0tLVxuICAgICAgICBjb25zdCBsaW5lX2l0ZW1zID0gY2FydC5tYXAoKGl0ZW06IENhcnRJdGVtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB1bml0QW1vdW50ID0gdHlwZW9mIGl0ZW0ucHJpY2UgPT09ICdzdHJpbmcnXG4gICAgICAgICAgICAgICAgPyBwYXJzZUludChpdGVtLnByaWNlLnJlcGxhY2UoL1teXHUwMDAwLVxcdTAwN0ZdL2csICcnKSwgMTApXG4gICAgICAgICAgICAgICAgOiBOdW1iZXIoaXRlbS5wcmljZSk7XG5cbiAgICAgICAgICAgIGlmIChpc05hTih1bml0QW1vdW50KSkge1xuICAgICAgICAgICAgICAgIC8vIFRocm93IGFuIGVycm9yIHRoYXQgd2lsbCBiZSBjYXVnaHQgYnkgdGhlIGNhdGNoIGJsb2NrXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHByaWNlIGZvciBpdGVtOiAke2l0ZW0ubmFtZX1gKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBwcmljZV9kYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbmN5OiAnanB5JyxcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF9kYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBpdGVtLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi4oaXRlbS5pbWFnZSAmJiB0eXBlb2YgaXRlbS5pbWFnZSA9PT0gJ3N0cmluZycgJiYgaXRlbS5pbWFnZS5zdGFydHNXaXRoKCdodHRwJykgPyB7IGltYWdlczogW2l0ZW0uaW1hZ2VdIH0gOiB7fSksXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIC8vIENSSVRJQ0FMOiBKUFkgaXMgYSB6ZXJvLWRlY2ltYWwgY3VycmVuY3kuIERPIE5PVCBtdWx0aXBseSBieSAxMDAuXG4gICAgICAgICAgICAgICAgICAgIHVuaXRfYW1vdW50OiB1bml0QW1vdW50LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcXVhbnRpdHk6IGl0ZW0ucXVhbnRpdHksXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBBZGQgZGVsaXZlcnkgZmVlIGlmIGFwcGxpY2FibGVcbiAgICAgICAgaWYgKG9yZGVyVHlwZSA9PT0gJ2RlbGl2ZXJ5JyAmJiBkZWxpdmVyeUZlZSAmJiBkZWxpdmVyeUZlZSA+IDApIHtcbiAgICAgICAgICAgIGxpbmVfaXRlbXMucHVzaCh7XG4gICAgICAgICAgICAgICAgcHJpY2VfZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW5jeTogJ2pweScsXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RfZGF0YTogeyBuYW1lOiAnRGVsaXZlcnkgRmVlJywgaW1hZ2VzOiBbXSB9LFxuICAgICAgICAgICAgICAgICAgICAvLyBDUklUSUNBTDogSlBZIGlzIGEgemVyby1kZWNpbWFsIGN1cnJlbmN5LiBETyBOT1QgbXVsdGlwbHkgYnkgMTAwLlxuICAgICAgICAgICAgICAgICAgICB1bml0X2Ftb3VudDogZGVsaXZlcnlGZWUsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBxdWFudGl0eTogMSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gLS0tIENoZWNrb3V0IFNlc3Npb24gQ3JlYXRpb24gLS0tXG4gICAgICAgIGNvbnN0IHN1Y2Nlc3NfdXJsID0gYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9VUkx9Lz9zZXNzaW9uX2lkPXtDSEVDS09VVF9TRVNTSU9OX0lEfWA7XG4gICAgICAgIGNvbnN0IGNhbmNlbF91cmwgPSBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQVNFX1VSTH0vb3JkZXJgO1xuXG4gICAgICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBzdHJpcGUuY2hlY2tvdXQuc2Vzc2lvbnMuY3JlYXRlKHtcbiAgICAgICAgICAgIHBheW1lbnRfbWV0aG9kX3R5cGVzOiBbJ2NhcmQnXSxcbiAgICAgICAgICAgIGxpbmVfaXRlbXMsXG4gICAgICAgICAgICBtb2RlOiAncGF5bWVudCcsXG4gICAgICAgICAgICBjdXN0b21lcl9lbWFpbDogY3VzdG9tZXIuZW1haWwsXG4gICAgICAgICAgICBzdWNjZXNzX3VybDogc3VjY2Vzc191cmwsXG4gICAgICAgICAgICBjYW5jZWxfdXJsOiBjYW5jZWxfdXJsLFxuICAgICAgICAgICAgbWV0YWRhdGE6IHtcbiAgICAgICAgICAgICAgICAvLyBNZXRhZGF0YSB2YWx1ZXMgbXVzdCBiZSBzdHJpbmdzXG4gICAgICAgICAgICAgICAgZmlyc3ROYW1lOiBjdXN0b21lci5maXJzdE5hbWUsXG4gICAgICAgICAgICAgICAgbGFzdE5hbWU6IGN1c3RvbWVyLmxhc3ROYW1lLFxuICAgICAgICAgICAgICAgIHBob25lOiBjdXN0b21lci5waG9uZSxcbiAgICAgICAgICAgICAgICBvcmRlclR5cGUsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyB1cmw6IHNlc3Npb24udXJsIH0pO1xuXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdTdHJpcGUgRXJyb3I6JywgZXJyb3IpO1xuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogZXJyb3IubWVzc2FnZSB9LCB7IHN0YXR1czogNTAwIH0pO1xuICAgIH1cbn0iXSwibmFtZXMiOlsiU3RyaXBlIiwiTmV4dFJlc3BvbnNlIiwic3RyaXBlU2VjcmV0S2V5IiwicHJvY2VzcyIsImVudiIsIlNUUklQRV9TRUNSRVRfS0VZIiwiRXJyb3IiLCJzdHJpcGUiLCJhcGlWZXJzaW9uIiwidHlwZXNjcmlwdCIsIlBPU1QiLCJyZXEiLCJib2R5IiwianNvbiIsImNhcnQiLCJjdXN0b21lciIsIm9yZGVyVHlwZSIsImRlbGl2ZXJ5RmVlIiwiQXJyYXkiLCJpc0FycmF5IiwibGVuZ3RoIiwiZXJyb3IiLCJzdGF0dXMiLCJlbWFpbCIsInVuZGVmaW5lZCIsImxpbmVfaXRlbXMiLCJtYXAiLCJpdGVtIiwidW5pdEFtb3VudCIsInByaWNlIiwicGFyc2VJbnQiLCJyZXBsYWNlIiwiTnVtYmVyIiwiaXNOYU4iLCJuYW1lIiwicHJpY2VfZGF0YSIsImN1cnJlbmN5IiwicHJvZHVjdF9kYXRhIiwiaW1hZ2UiLCJzdGFydHNXaXRoIiwiaW1hZ2VzIiwidW5pdF9hbW91bnQiLCJxdWFudGl0eSIsInB1c2giLCJzdWNjZXNzX3VybCIsIk5FWFRfUFVCTElDX0JBU0VfVVJMIiwiY2FuY2VsX3VybCIsInNlc3Npb24iLCJjaGVja291dCIsInNlc3Npb25zIiwiY3JlYXRlIiwicGF5bWVudF9tZXRob2RfdHlwZXMiLCJtb2RlIiwiY3VzdG9tZXJfZW1haWwiLCJtZXRhZGF0YSIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwicGhvbmUiLCJ1cmwiLCJjb25zb2xlIiwibWVzc2FnZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/create-checkout-session/route.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fcreate-checkout-session%2Froute&page=%2Fapi%2Fcreate-checkout-session%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcreate-checkout-session%2Froute.ts&appDir=%2FUsers%2Fshirobou%2FDownloads%2Fjapanese-cafe%20(1)%202%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fshirobou%2FDownloads%2Fjapanese-cafe%20(1)%202&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fcreate-checkout-session%2Froute&page=%2Fapi%2Fcreate-checkout-session%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcreate-checkout-session%2Froute.ts&appDir=%2FUsers%2Fshirobou%2FDownloads%2Fjapanese-cafe%20(1)%202%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fshirobou%2FDownloads%2Fjapanese-cafe%20(1)%202&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_shirobou_Downloads_japanese_cafe_1_2_app_api_create_checkout_session_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/create-checkout-session/route.ts */ \"(rsc)/./app/api/create-checkout-session/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/create-checkout-session/route\",\n        pathname: \"/api/create-checkout-session\",\n        filename: \"route\",\n        bundlePath: \"app/api/create-checkout-session/route\"\n    },\n    resolvedPagePath: \"/Users/shirobou/Downloads/japanese-cafe (1) 2/app/api/create-checkout-session/route.ts\",\n    nextConfigOutput,\n    userland: _Users_shirobou_Downloads_japanese_cafe_1_2_app_api_create_checkout_session_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZjcmVhdGUtY2hlY2tvdXQtc2Vzc2lvbiUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGY3JlYXRlLWNoZWNrb3V0LXNlc3Npb24lMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZjcmVhdGUtY2hlY2tvdXQtc2Vzc2lvbiUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRnNoaXJvYm91JTJGRG93bmxvYWRzJTJGamFwYW5lc2UtY2FmZSUyMCgxKSUyMDIlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRlVzZXJzJTJGc2hpcm9ib3UlMkZEb3dubG9hZHMlMkZqYXBhbmVzZS1jYWZlJTIwKDEpJTIwMiZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDc0M7QUFDbkg7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9Vc2Vycy9zaGlyb2JvdS9Eb3dubG9hZHMvamFwYW5lc2UtY2FmZSAoMSkgMi9hcHAvYXBpL2NyZWF0ZS1jaGVja291dC1zZXNzaW9uL3JvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9jcmVhdGUtY2hlY2tvdXQtc2Vzc2lvbi9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2NyZWF0ZS1jaGVja291dC1zZXNzaW9uXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9jcmVhdGUtY2hlY2tvdXQtc2Vzc2lvbi9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9Vc2Vycy9zaGlyb2JvdS9Eb3dubG9hZHMvamFwYW5lc2UtY2FmZSAoMSkgMi9hcHAvYXBpL2NyZWF0ZS1jaGVja291dC1zZXNzaW9uL3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fcreate-checkout-session%2Froute&page=%2Fapi%2Fcreate-checkout-session%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcreate-checkout-session%2Froute.ts&appDir=%2FUsers%2Fshirobou%2FDownloads%2Fjapanese-cafe%20(1)%202%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fshirobou%2FDownloads%2Fjapanese-cafe%20(1)%202&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("child_process");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("https");

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

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/stripe","vendor-chunks/math-intrinsics","vendor-chunks/es-errors","vendor-chunks/qs","vendor-chunks/call-bind-apply-helpers","vendor-chunks/get-proto","vendor-chunks/object-inspect","vendor-chunks/has-symbols","vendor-chunks/gopd","vendor-chunks/function-bind","vendor-chunks/side-channel","vendor-chunks/side-channel-weakmap","vendor-chunks/side-channel-map","vendor-chunks/side-channel-list","vendor-chunks/hasown","vendor-chunks/get-intrinsic","vendor-chunks/es-object-atoms","vendor-chunks/es-define-property","vendor-chunks/dunder-proto","vendor-chunks/call-bound"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fcreate-checkout-session%2Froute&page=%2Fapi%2Fcreate-checkout-session%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcreate-checkout-session%2Froute.ts&appDir=%2FUsers%2Fshirobou%2FDownloads%2Fjapanese-cafe%20(1)%202%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fshirobou%2FDownloads%2Fjapanese-cafe%20(1)%202&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();