"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/popup/ServicePopup.js":
/*!**********************************************!*\
  !*** ./src/components/popup/ServicePopup.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar _this = undefined;\nvar ServicePopup = function(param) {\n    var data = param.data, open = param.open, close = param.close;\n    var _this1 = _this;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"dizme_tm_modalbox \".concat(open ? \"opened\" : \"\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"box_inner\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"close\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"#\",\n                        onClick: function() {\n                            return close();\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                            className: \"icon-cancel\"\n                        }, void 0, false, {\n                            fileName: \"/Users/barbaraapptcc/Desktop/portfolio_barbara_lizama/src/components/popup/ServicePopup.js\",\n                            lineNumber: 7,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/barbaraapptcc/Desktop/portfolio_barbara_lizama/src/components/popup/ServicePopup.js\",\n                        lineNumber: 6,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/barbaraapptcc/Desktop/portfolio_barbara_lizama/src/components/popup/ServicePopup.js\",\n                    lineNumber: 5,\n                    columnNumber: 9\n                }, _this),\n                data && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"description_wrap\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"service_popup_informations\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"image\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: \"img/thumbs/4-2.jpg\",\n                                        alt: \"image\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/barbaraapptcc/Desktop/portfolio_barbara_lizama/src/components/popup/ServicePopup.js\",\n                                        lineNumber: 14,\n                                        columnNumber: 17\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"main\",\n                                        \"data-img-url\": data && data.img,\n                                        style: {\n                                            backgroundImage: \"url(\".concat(data && data.img, \")\")\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"/Users/barbaraapptcc/Desktop/portfolio_barbara_lizama/src/components/popup/ServicePopup.js\",\n                                        lineNumber: 15,\n                                        columnNumber: 17\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/barbaraapptcc/Desktop/portfolio_barbara_lizama/src/components/popup/ServicePopup.js\",\n                                lineNumber: 13,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"main_title\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    children: data && data.title ? data.title : \"Title\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/barbaraapptcc/Desktop/portfolio_barbara_lizama/src/components/popup/ServicePopup.js\",\n                                    lineNumber: 22,\n                                    columnNumber: 17\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/barbaraapptcc/Desktop/portfolio_barbara_lizama/src/components/popup/ServicePopup.js\",\n                                lineNumber: 21,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"descriptions\",\n                                children: data && data.dec && data.dec.map(function(dec, i) {\n                                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: dec\n                                    }, i, false, {\n                                        fileName: \"/Users/barbaraapptcc/Desktop/portfolio_barbara_lizama/src/components/popup/ServicePopup.js\",\n                                        lineNumber: 27,\n                                        columnNumber: 44\n                                    }, _this1);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/Users/barbaraapptcc/Desktop/portfolio_barbara_lizama/src/components/popup/ServicePopup.js\",\n                                lineNumber: 24,\n                                columnNumber: 15\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/barbaraapptcc/Desktop/portfolio_barbara_lizama/src/components/popup/ServicePopup.js\",\n                        lineNumber: 12,\n                        columnNumber: 13\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/barbaraapptcc/Desktop/portfolio_barbara_lizama/src/components/popup/ServicePopup.js\",\n                    lineNumber: 11,\n                    columnNumber: 11\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/barbaraapptcc/Desktop/portfolio_barbara_lizama/src/components/popup/ServicePopup.js\",\n            lineNumber: 4,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/barbaraapptcc/Desktop/portfolio_barbara_lizama/src/components/popup/ServicePopup.js\",\n        lineNumber: 3,\n        columnNumber: 5\n    }, _this));\n};\n_c = ServicePopup;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ServicePopup);\nvar _c;\n$RefreshReg$(_c, \"ServicePopup\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9wb3B1cC9TZXJ2aWNlUG9wdXAuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxHQUFLLENBQUNBLFlBQVksR0FBRyxRQUFRLFFBQW1CLENBQUM7UUFBekJDLElBQUksU0FBSkEsSUFBSSxFQUFFQyxJQUFJLFNBQUpBLElBQUksRUFBRUMsS0FBSyxTQUFMQSxLQUFLOztJQUN2QyxNQUFNLDZFQUNIQyxDQUFHO1FBQUNDLFNBQVMsRUFBRyxDQUFrQixvQkFBdUIsT0FBckJILElBQUksR0FBRyxDQUFRLFVBQUcsQ0FBRTs4RkFDdERFLENBQUc7WUFBQ0MsU0FBUyxFQUFDLENBQVc7OzRGQUN2QkQsQ0FBRztvQkFBQ0MsU0FBUyxFQUFDLENBQU87MEdBQ25CQyxDQUFDO3dCQUFDQyxJQUFJLEVBQUMsQ0FBRzt3QkFBQ0MsT0FBTyxFQUFFLFFBQVE7NEJBQUZMLE1BQU0sQ0FBTkEsS0FBSzs7OEdBQzdCTSxDQUFDOzRCQUFDSixTQUFTLEVBQUMsQ0FBYTs7Ozs7Ozs7Ozs7Ozs7OztnQkFHN0JKLElBQUksZ0ZBQ0ZHLENBQUc7b0JBQUNDLFNBQVMsRUFBQyxDQUFrQjswR0FDOUJELENBQUc7d0JBQUNDLFNBQVMsRUFBQyxDQUE0Qjs7d0dBQ3hDRCxDQUFHO2dDQUFDQyxTQUFTLEVBQUMsQ0FBTzs7Z0hBQ25CSyxDQUFHO3dDQUFDQyxHQUFHLEVBQUMsQ0FBb0I7d0NBQUNDLEdBQUcsRUFBQyxDQUFPOzs7Ozs7Z0hBQ3hDUixDQUFHO3dDQUNGQyxTQUFTLEVBQUMsQ0FBTTt3Q0FDaEJRLENBQVksZUFBRVosSUFBSSxJQUFJQSxJQUFJLENBQUNTLEdBQUc7d0NBQzlCSSxLQUFLLEVBQUUsQ0FBQzs0Q0FBQ0MsZUFBZSxFQUFHLENBQUksTUFBbUIsTUFBQyxDQUFsQmQsSUFBSSxJQUFJQSxJQUFJLENBQUNTLEdBQUcsRUFBQyxDQUFDO3dDQUFFLENBQUM7Ozs7Ozs7Ozs7Ozt3R0FHekROLENBQUc7Z0NBQUNDLFNBQVMsRUFBQyxDQUFZO3NIQUN4QlcsQ0FBRTs4Q0FBRWYsSUFBSSxJQUFJQSxJQUFJLENBQUNnQixLQUFLLEdBQUdoQixJQUFJLENBQUNnQixLQUFLLEdBQUcsQ0FBTzs7Ozs7Ozs7Ozs7d0dBRS9DYixDQUFHO2dDQUFDQyxTQUFTLEVBQUMsQ0FBYzswQ0FDMUJKLElBQUksSUFDSEEsSUFBSSxDQUFDaUIsR0FBRyxJQUNSakIsSUFBSSxDQUFDaUIsR0FBRyxDQUFDQyxHQUFHLENBQUMsUUFBUSxDQUFQRCxHQUFHLEVBQUVULENBQUM7a0RBQUssTUFBTSwrREFBTFcsQ0FBQztrREFBVUYsR0FBRzt1Q0FBUFQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUXBELENBQUM7S0FsQ0tULFlBQVk7QUFtQ2xCLCtEQUFlQSxZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcG9wdXAvU2VydmljZVBvcHVwLmpzPzZhNTMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgU2VydmljZVBvcHVwID0gKHsgZGF0YSwgb3BlbiwgY2xvc2UgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17YGRpem1lX3RtX21vZGFsYm94ICR7b3BlbiA/IFwib3BlbmVkXCIgOiBcIlwifWB9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveF9pbm5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xvc2VcIj5cclxuICAgICAgICAgIDxhIGhyZWY9XCIjXCIgb25DbGljaz17KCkgPT4gY2xvc2UoKX0+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24tY2FuY2VsXCIgLz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7ZGF0YSAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uX3dyYXBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXJ2aWNlX3BvcHVwX2luZm9ybWF0aW9uc1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL3RodW1icy80LTIuanBnXCIgYWx0PVwiaW1hZ2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYWluXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1pbWctdXJsPXtkYXRhICYmIGRhdGEuaW1nfVxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtkYXRhICYmIGRhdGEuaW1nfSlgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbl90aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgPGgzPntkYXRhICYmIGRhdGEudGl0bGUgPyBkYXRhLnRpdGxlIDogXCJUaXRsZVwifTwvaDM+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgIHtkYXRhICYmXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEuZGVjICYmXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEuZGVjLm1hcCgoZGVjLCBpKSA9PiA8cCBrZXk9e2l9PntkZWN9PC9wPil9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBTZXJ2aWNlUG9wdXA7XHJcbiJdLCJuYW1lcyI6WyJTZXJ2aWNlUG9wdXAiLCJkYXRhIiwib3BlbiIsImNsb3NlIiwiZGl2IiwiY2xhc3NOYW1lIiwiYSIsImhyZWYiLCJvbkNsaWNrIiwiaSIsImltZyIsInNyYyIsImFsdCIsImRhdGEtaW1nLXVybCIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiaDMiLCJ0aXRsZSIsImRlYyIsIm1hcCIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/popup/ServicePopup.js\n");

/***/ })

});