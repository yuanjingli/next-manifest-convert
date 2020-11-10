webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_convert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/convert */ \"./utils/convert.js\");\n/* harmony import */ var _utils_validate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/validate */ \"./utils/validate.js\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/utils.module.css */ \"./styles/utils.module.css\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/firegnu/kaiosDev/next-manifest-convert/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar validateFields = function validateFields(oldManifest) {\n  if (/^[\\],:{}\\s]*$/.test(oldManifest.value.replace(/\\\\[\"\\\\\\/bfnrtu]/g, '@').replace(/\"[^\"\\\\\\n\\r]*\"|true|false|null|-?\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d+)?/g, ']').replace(/(?:^|:|,)(?:\\s*\\[)+/g, ''))) {\n    var validateResults = Object(_utils_validate__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(JSON.parse(oldManifest.value));\n    var pretty = JSON.stringify(validateResults, undefined, 2);\n    document.getElementById('newmanifest').value = pretty;\n  } else {\n    document.getElementById('newmanifest').value = 'Your 2.5 Manifest format is incorrect! Please check and try again！';\n  }\n};\n\nvar convertFields = function convertFields(oldManifest) {\n  if (/^[\\],:{}\\s]*$/.test(oldManifest.value.replace(/\\\\[\"\\\\\\/bfnrtu]/g, '@').replace(/\"[^\"\\\\\\n\\r]*\"|true|false|null|-?\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d+)?/g, ']').replace(/(?:^|:|,)(?:\\s*\\[)+/g, ''))) {\n    var newManifest = Object(_utils_convert__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(JSON.parse(oldManifest.value));\n    var pretty = JSON.stringify(newManifest, undefined, 2);\n    document.getElementById('newmanifest').value = pretty;\n  } else {\n    document.getElementById('newmanifest').value = 'Your 2.5 Manifest format is incorrect! Please check and try again！';\n  }\n};\n\nvar convertManifest = function convertManifest(e) {\n  convertFields(document.getElementById('orimanifest'));\n};\n\nvar validateManifest = function validateManifest(e) {\n  validateFields(document.getElementById('orimanifest'));\n};\n\nvar prettyManifest = function prettyManifest(e) {\n  var oriManifest = document.getElementById('orimanifest');\n\n  if (/^[\\],:{}\\s]*$/.test(oriManifest.value.replace(/\\\\[\"\\\\\\/bfnrtu]/g, '@').replace(/\"[^\"\\\\\\n\\r]*\"|true|false|null|-?\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d+)?/g, ']').replace(/(?:^|:|,)(?:\\s*\\[)+/g, ''))) {\n    var pretty = JSON.stringify(JSON.parse(oldManifest.value), undefined, 2);\n    document.getElementById('orimanifest').value = pretty;\n  } else {\n    document.getElementById('newmanifest').value = 'Your 2.5 Manifest format is incorrect! Please check and try again！';\n  }\n};\n\nfunction Home() {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 6\n    }\n  }, __jsx(\"h1\", {\n    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.headerTitle,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 8\n    }\n  }, \"Convert Manifest from KaiOS2.5.4 to KaiOS3.0\")), __jsx(\"div\", {\n    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.convertcontainer,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 6\n    }\n  }, __jsx(\"div\", {\n    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.converttextarea,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.prettyWrapper,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 9\n    }\n  }, __jsx(\"h3\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 11\n    }\n  }, \"2.5.4 Manifest\"), __jsx(\"div\", {\n    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.buttonPretty,\n    onClick: prettyManifest,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 11\n    }\n  }, \"Pretty\")), __jsx(\"textarea\", {\n    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.convertcontent,\n    id: \"orimanifest\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.buttonWrapper,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 8\n    }\n  }, __jsx(\"div\", {\n    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.buttonConvert,\n    onClick: convertManifest,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 11\n    }\n  }, \"CONVERT\"), __jsx(\"div\", {\n    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.buttonValidate,\n    onClick: validateManifest,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 12\n    }\n  }, \"VALIDATE\")), __jsx(\"div\", {\n    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.converttextarea,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 7\n    }\n  }, __jsx(\"h3\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 9\n    }\n  }, \"3.0 Manifest\"), __jsx(\"textarea\", {\n    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.convertcontent,\n    id: \"newmanifest\",\n    readOnly: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 9\n    }\n  }))));\n}\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJ2YWxpZGF0ZUZpZWxkcyIsIm9sZE1hbmlmZXN0IiwidGVzdCIsInZhbHVlIiwicmVwbGFjZSIsInZhbGlkYXRlUmVzdWx0cyIsInZhbGlkYXRlIiwiSlNPTiIsInBhcnNlIiwicHJldHR5Iiwic3RyaW5naWZ5IiwidW5kZWZpbmVkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNvbnZlcnRGaWVsZHMiLCJuZXdNYW5pZmVzdCIsImNvbnZlcnQiLCJjb252ZXJ0TWFuaWZlc3QiLCJlIiwidmFsaWRhdGVNYW5pZmVzdCIsInByZXR0eU1hbmlmZXN0Iiwib3JpTWFuaWZlc3QiLCJIb21lIiwidXRpbFN0eWxlcyIsImhlYWRlclRpdGxlIiwiY29udmVydGNvbnRhaW5lciIsImNvbnZlcnR0ZXh0YXJlYSIsInByZXR0eVdyYXBwZXIiLCJidXR0b25QcmV0dHkiLCJjb252ZXJ0Y29udGVudCIsImJ1dHRvbldyYXBwZXIiLCJidXR0b25Db252ZXJ0IiwiYnV0dG9uVmFsaWRhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxXQUFELEVBQWlCO0FBQ3RDLE1BQUksZ0JBQWdCQyxJQUFoQixDQUFxQkQsV0FBVyxDQUFDRSxLQUFaLENBQWtCQyxPQUFsQixDQUEwQixrQkFBMUIsRUFBOEMsR0FBOUMsRUFDekJBLE9BRHlCLENBQ2pCLGtFQURpQixFQUNtRCxHQURuRCxFQUV6QkEsT0FGeUIsQ0FFakIsc0JBRmlCLEVBRU8sRUFGUCxDQUFyQixDQUFKLEVBRXNDO0FBQ3BDLFFBQU1DLGVBQWUsR0FBR0MsK0RBQVEsQ0FBQ0MsSUFBSSxDQUFDQyxLQUFMLENBQVdQLFdBQVcsQ0FBQ0UsS0FBdkIsQ0FBRCxDQUFoQztBQUNBLFFBQU1NLE1BQU0sR0FBR0YsSUFBSSxDQUFDRyxT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QW5CRCxDQUpELENBREY7QUFnQ0Q7O0tBakNRUCxJO0FBbUNNQSxtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbnZlcnQgZnJvbSBcIi4uL3V0aWxzL2NvbnZlcnRcIjtcbmltcG9ydCB2YWxpZGF0ZSBmcm9tIFwiLi4vdXRpbHMvdmFsaWRhdGVcIjtcblxuaW1wb3J0IHV0aWxTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3V0aWxzLm1vZHVsZS5jc3MnO1xuXG5jb25zdCB2YWxpZGF0ZUZpZWxkcyA9IChvbGRNYW5pZmVzdCkgPT4ge1xuICBpZiAoL15bXFxdLDp7fVxcc10qJC8udGVzdChvbGRNYW5pZmVzdC52YWx1ZS5yZXBsYWNlKC9cXFxcW1wiXFxcXFxcL2JmbnJ0dV0vZywgJ0AnKS5cbiAgcmVwbGFjZSgvXCJbXlwiXFxcXFxcblxccl0qXCJ8dHJ1ZXxmYWxzZXxudWxsfC0/XFxkKyg/OlxcLlxcZCopPyg/OltlRV1bK1xcLV0/XFxkKyk/L2csICddJykuXG4gIHJlcGxhY2UoLyg/Ol58OnwsKSg/OlxccypcXFspKy9nLCAnJykpKSB7XG4gICAgY29uc3QgdmFsaWRhdGVSZXN1bHRzID0gdmFsaWRhdGUoSlNPTi5wYXJzZShvbGRNYW5pZmVzdC52YWx1ZSkpO1xuICAgIGNvbnN0IHByZXR0eSA9IEpTT04uc3RyaW5naWZ5KHZhbGlkYXRlUmVzdWx0cywgdW5kZWZpbmVkLCAyKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3bWFuaWZlc3QnKS52YWx1ZSA9IHByZXR0eTtcbiAgfSBlbHNlIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3bWFuaWZlc3QnKS52YWx1ZSA9ICdZb3VyIDIuNSBNYW5pZmVzdCBmb3JtYXQgaXMgaW5jb3JyZWN0ISBQbGVhc2UgY2hlY2sgYW5kIHRyeSBhZ2Fpbu+8gSc7XG4gIH1cbn1cblxuY29uc3QgY29udmVydEZpZWxkcyA9IChvbGRNYW5pZmVzdCkgPT4ge1xuICBpZiAoL15bXFxdLDp7fVxcc10qJC8udGVzdChvbGRNYW5pZmVzdC52YWx1ZS5yZXBsYWNlKC9cXFxcW1wiXFxcXFxcL2JmbnJ0dV0vZywgJ0AnKS5cbiAgcmVwbGFjZSgvXCJbXlwiXFxcXFxcblxccl0qXCJ8dHJ1ZXxmYWxzZXxudWxsfC0/XFxkKyg/OlxcLlxcZCopPyg/OltlRV1bK1xcLV0/XFxkKyk/L2csICddJykuXG4gIHJlcGxhY2UoLyg/Ol58OnwsKSg/OlxccypcXFspKy9nLCAnJykpKSB7XG4gICAgY29uc3QgbmV3TWFuaWZlc3QgPSBjb252ZXJ0KEpTT04ucGFyc2Uob2xkTWFuaWZlc3QudmFsdWUpKTtcbiAgICBjb25zdCBwcmV0dHkgPSBKU09OLnN0cmluZ2lmeShuZXdNYW5pZmVzdCwgdW5kZWZpbmVkLCAyKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3bWFuaWZlc3QnKS52YWx1ZSA9IHByZXR0eTtcbiAgfWVsc2V7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld21hbmlmZXN0JykudmFsdWUgPSAnWW91ciAyLjUgTWFuaWZlc3QgZm9ybWF0IGlzIGluY29ycmVjdCEgUGxlYXNlIGNoZWNrIGFuZCB0cnkgYWdhaW7vvIEnO1xuICB9XG59XG5cbmNvbnN0IGNvbnZlcnRNYW5pZmVzdCA9IChlKSA9PiAge1xuICBjb252ZXJ0RmllbGRzKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcmltYW5pZmVzdCcpKTtcbn1cblxuY29uc3QgdmFsaWRhdGVNYW5pZmVzdCA9IChlKSA9PiB7XG4gIHZhbGlkYXRlRmllbGRzKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcmltYW5pZmVzdCcpKTtcbn1cblxuY29uc3QgcHJldHR5TWFuaWZlc3QgPSAoZSkgPT4ge1xuICBjb25zdCBvcmlNYW5pZmVzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcmltYW5pZmVzdCcpO1xuICBpZiAoL15bXFxdLDp7fVxcc10qJC8udGVzdChvcmlNYW5pZmVzdC52YWx1ZS5yZXBsYWNlKC9cXFxcW1wiXFxcXFxcL2JmbnJ0dV0vZywgJ0AnKS5cbiAgcmVwbGFjZSgvXCJbXlwiXFxcXFxcblxccl0qXCJ8dHJ1ZXxmYWxzZXxudWxsfC0/XFxkKyg/OlxcLlxcZCopPyg/OltlRV1bK1xcLV0/XFxkKyk/L2csICddJykuXG4gIHJlcGxhY2UoLyg/Ol58OnwsKSg/OlxccypcXFspKy9nLCAnJykpKSB7XG4gICAgY29uc3QgcHJldHR5ID0gSlNPTi5zdHJpbmdpZnkoSlNPTi5wYXJzZShvbGRNYW5pZmVzdC52YWx1ZSksIHVuZGVmaW5lZCwgMik7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29yaW1hbmlmZXN0JykudmFsdWUgPSBwcmV0dHk7XG4gIH1lbHNle1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdtYW5pZmVzdCcpLnZhbHVlID0gJ1lvdXIgMi41IE1hbmlmZXN0IGZvcm1hdCBpcyBpbmNvcnJlY3QhIFBsZWFzZSBjaGVjayBhbmQgdHJ5IGFnYWlu77yBJztcbiAgfVxufVxuXG5mdW5jdGlvbiBIb21lKCkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgIDxkaXY+XG4gICAgICAgPGgxIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5oZWFkZXJUaXRsZX0+Q29udmVydCBNYW5pZmVzdCBmcm9tIEthaU9TMi41LjQgdG8gS2FpT1MzLjA8L2gxPlxuICAgICA8L2Rpdj5cbiAgICAgPGRpdiBjbGFzc05hbWU9e3V0aWxTdHlsZXMuY29udmVydGNvbnRhaW5lcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17dXRpbFN0eWxlcy5jb252ZXJ0dGV4dGFyZWF9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dXRpbFN0eWxlcy5wcmV0dHlXcmFwcGVyfT5cbiAgICAgICAgICA8aDM+Mi41LjQgTWFuaWZlc3Q8L2gzPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmJ1dHRvblByZXR0eX0gb25DbGljaz17cHJldHR5TWFuaWZlc3R9PlxuICAgICAgICAgICAgUHJldHR5XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmNvbnZlcnRjb250ZW50fSBpZD1cIm9yaW1hbmlmZXN0XCI+XG4gICAgICAgIDwvdGV4dGFyZWE+XG4gICAgICA8L2Rpdj5cbiAgICAgICA8ZGl2IGNsYXNzTmFtZT17dXRpbFN0eWxlcy5idXR0b25XcmFwcGVyfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dXRpbFN0eWxlcy5idXR0b25Db252ZXJ0fSBvbkNsaWNrPXtjb252ZXJ0TWFuaWZlc3R9PlxuICAgICAgICAgICAgQ09OVkVSVFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dXRpbFN0eWxlcy5idXR0b25WYWxpZGF0ZX0gb25DbGljaz17dmFsaWRhdGVNYW5pZmVzdH0+XG4gICAgICAgICAgICAgVkFMSURBVEVcbiAgICAgICAgICAgPC9kaXY+XG4gICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17dXRpbFN0eWxlcy5jb252ZXJ0dGV4dGFyZWF9PlxuICAgICAgICA8aDM+My4wIE1hbmlmZXN0PC9oMz5cbiAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5jb252ZXJ0Y29udGVudH0gaWQ9XCJuZXdtYW5pZmVzdFwiIHJlYWRPbmx5PlxuICAgICAgICA8L3RleHRhcmVhPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})