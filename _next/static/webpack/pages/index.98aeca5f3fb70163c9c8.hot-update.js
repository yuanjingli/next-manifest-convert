webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_convert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/convert */ \"./utils/convert.js\");\n/* harmony import */ var _utils_validate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/validate */ \"./utils/validate.js\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/utils.module.css */ \"./styles/utils.module.css\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/firegnu/kaiosDev/next-manifest-convert/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar validateFields = function validateFields(oldManifest) {\n  if (/^[\\],:{}\\s]*$/.test(oldManifest.value.replace(/\\\\[\"\\\\\\/bfnrtu]/g, '@').replace(/\"[^\"\\\\\\n\\r]*\"|true|false|null|-?\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d+)?/g, ']').replace(/(?:^|:|,)(?:\\s*\\[)+/g, ''))) {\n    var validateResults = Object(_utils_validate__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(JSON.parse(oldManifest.value));\n    var pretty = JSON.stringify(validateResults, undefined, 2);\n    document.getElementById('newmanifest').value = pretty;\n  } else {\n    document.getElementById('newmanifest').value = 'Your 2.5 Manifest format is incorrect! Please check and try again！';\n  }\n};\n\nvar convertFields = function convertFields(oldManifest) {\n  if (/^[\\],:{}\\s]*$/.test(oldManifest.value.replace(/\\\\[\"\\\\\\/bfnrtu]/g, '@').replace(/\"[^\"\\\\\\n\\r]*\"|true|false|null|-?\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d+)?/g, ']').replace(/(?:^|:|,)(?:\\s*\\[)+/g, ''))) {\n    var newManifest = Object(_utils_convert__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(JSON.parse(oldManifest.value));\n    var pretty = JSON.stringify(newManifest, undefined, 2);\n    document.getElementById('newmanifest').value = pretty;\n  } else {\n    document.getElementById('newmanifest').value = 'Your 2.5 Manifest format is incorrect! Please check and try again！';\n  }\n};\n\nvar convertManifest = function convertManifest(e) {\n  convertFields(document.getElementById('orimanifest'));\n};\n\nvar validateManifest = function validateManifest(e) {\n  validateFields(document.getElementById('orimanifest'));\n};\n\nfunction Home() {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 6\n    }\n  }, __jsx(\"h1\", {\n    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.headerTitle,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 8\n    }\n  }, \"Convert Manifest from KaiOS2.5.4 to KaiOS3.0\")), __jsx(\"div\", {\n    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.convertcontainer,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 6\n    }\n  }, __jsx(\"div\", {\n    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.converttextarea,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.prettyWrapper,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 9\n    }\n  }, __jsx(\"h3\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 11\n    }\n  }, \"2.5.4 Manifest\"), __jsx(\"div\", {\n    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.buttonPretty,\n    onClick: prettyManifest,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 11\n    }\n  }, \"Pretty\")), __jsx(\"textarea\", {\n    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.convertcontent,\n    id: \"orimanifest\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.buttonWrapper,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 8\n    }\n  }, __jsx(\"div\", {\n    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.buttonConvert,\n    onClick: convertManifest,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 11\n    }\n  }, \"CONVERT\"), __jsx(\"div\", {\n    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.buttonValidate,\n    onClick: validateManifest,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 12\n    }\n  }, \"VALIDATE\")), __jsx(\"div\", {\n    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.converttextarea,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 7\n    }\n  }, __jsx(\"h3\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 9\n    }\n  }, \"3.0 Manifest\"), __jsx(\"textarea\", {\n    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.convertcontent,\n    id: \"newmanifest\",\n    readOnly: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 9\n    }\n  }))));\n}\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJ2YWxpZGF0ZUZpZWxkcyIsIm9sZE1hbmlmZXN0IiwidGVzdCIsInZhbHVlIiwicmVwbGFjZSIsInZhbGlkYXRlUmVzdWx0cyIsInZhbGlkYXRlIiwiSlNPTiIsInBhcnNlIiwicHJldHR5Iiwic3RyaW5naWZ5IiwidW5kZWZpbmVkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNvbnZlcnRGaWVsZHMiLCJuZXdNYW5pZmVzdCIsImNvbnZlcnQiLCJjb252ZXJ0TWFuaWZlc3QiLCJlIiwidmFsaWRhdGVNYW5pZmVzdCIsIkhvbWUiLCJ1dGlsU3R5bGVzIiwiaGVhZGVyVGl0bGUiLCJjb252ZXJ0Y29udGFpbmVyIiwiY29udmVydHRleHRhcmVhIiwicHJldHR5V3JhcHBlciIsImJ1dHRvblByZXR0eSIsInByZXR0eU1hbmlmZXN0IiwiY29udmVydGNvbnRlbnQiLCJidXR0b25XcmFwcGVyIiwiYnV0dG9uQ29udmVydCIsImJ1dHRvblZhbGlkYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOztBQUVBLElBQU1BLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsV0FBRCxFQUFpQjtBQUN0QyxNQUFJLGdCQUFnQkMsSUFBaEIsQ0FBcUJELFdBQVcsQ0FBQ0UsS0FBWixDQUFrQkMsT0FBbEIsQ0FBMEIsa0JBQTFCLEVBQThDLEdBQTlDLEVBQ3pCQSxPQUR5QixDQUNqQixrRUFEaUIsRUFDbUQsR0FEbkQsRUFFekJBLE9BRnlCLENBRWpCLHNCQUZpQixFQUVPLEVBRlAsQ0FBckIsQ0FBSixFQUVzQztBQUNwQyxRQUFNQyxlQUFlLEdBQUdDLCtEQUFRLENBQUNDLElBQUksQ0FBQ0MsS0FBTCxDQUFXUCxXQUFXLENBQUNFLEtBQXZCLENBQUQsQ0FBaEM7QUFDQSxRQUFNTSxNQUFNLEdBQUdGLElBQUksQ0FBQ0csU0FBTCxDQUFlTCxlQUFm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LCtEQUFVLENBQUNVLGNBQTNCO0FBQTJDLFdBQU8sRUFBRVosZ0JBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkosQ0FYRixFQW1CQztBQUFLLGFBQVMsRUFBRUUsK0RBQVUsQ0FBQ0csZUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsRUFFRTtBQUFVLGFBQVMsRUFBRUgsK0RBQVUsQ0FBQ08sY0FBaEM7QUFBZ0QsTUFBRSxFQUFDLGFBQW5EO0FBQWlFLFlBQVEsTUFBekU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBbkJELENBSkQsQ0FERjtBQWdDRDs7S0FqQ1FSLEk7QUFtQ01BLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29udmVydCBmcm9tIFwiLi4vdXRpbHMvY29udmVydFwiO1xuaW1wb3J0IHZhbGlkYXRlIGZyb20gXCIuLi91dGlscy92YWxpZGF0ZVwiO1xuXG5pbXBvcnQgdXRpbFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvdXRpbHMubW9kdWxlLmNzcyc7XG5cbmNvbnN0IHZhbGlkYXRlRmllbGRzID0gKG9sZE1hbmlmZXN0KSA9PiB7XG4gIGlmICgvXltcXF0sOnt9XFxzXSokLy50ZXN0KG9sZE1hbmlmZXN0LnZhbHVlLnJlcGxhY2UoL1xcXFxbXCJcXFxcXFwvYmZucnR1XS9nLCAnQCcpLlxuICByZXBsYWNlKC9cIlteXCJcXFxcXFxuXFxyXSpcInx0cnVlfGZhbHNlfG51bGx8LT9cXGQrKD86XFwuXFxkKik/KD86W2VFXVsrXFwtXT9cXGQrKT8vZywgJ10nKS5cbiAgcmVwbGFjZSgvKD86Xnw6fCwpKD86XFxzKlxcWykrL2csICcnKSkpIHtcbiAgICBjb25zdCB2YWxpZGF0ZVJlc3VsdHMgPSB2YWxpZGF0ZShKU09OLnBhcnNlKG9sZE1hbmlmZXN0LnZhbHVlKSk7XG4gICAgY29uc3QgcHJldHR5ID0gSlNPTi5zdHJpbmdpZnkodmFsaWRhdGVSZXN1bHRzLCB1bmRlZmluZWQsIDIpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdtYW5pZmVzdCcpLnZhbHVlID0gcHJldHR5O1xuICB9IGVsc2Uge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdtYW5pZmVzdCcpLnZhbHVlID0gJ1lvdXIgMi41IE1hbmlmZXN0IGZvcm1hdCBpcyBpbmNvcnJlY3QhIFBsZWFzZSBjaGVjayBhbmQgdHJ5IGFnYWlu77yBJztcbiAgfVxufVxuXG5jb25zdCBjb252ZXJ0RmllbGRzID0gKG9sZE1hbmlmZXN0KSA9PiB7XG4gIGlmICgvXltcXF0sOnt9XFxzXSokLy50ZXN0KG9sZE1hbmlmZXN0LnZhbHVlLnJlcGxhY2UoL1xcXFxbXCJcXFxcXFwvYmZucnR1XS9nLCAnQCcpLlxuICByZXBsYWNlKC9cIlteXCJcXFxcXFxuXFxyXSpcInx0cnVlfGZhbHNlfG51bGx8LT9cXGQrKD86XFwuXFxkKik/KD86W2VFXVsrXFwtXT9cXGQrKT8vZywgJ10nKS5cbiAgcmVwbGFjZSgvKD86Xnw6fCwpKD86XFxzKlxcWykrL2csICcnKSkpIHtcbiAgICBjb25zdCBuZXdNYW5pZmVzdCA9IGNvbnZlcnQoSlNPTi5wYXJzZShvbGRNYW5pZmVzdC52YWx1ZSkpO1xuICAgIGNvbnN0IHByZXR0eSA9IEpTT04uc3RyaW5naWZ5KG5ld01hbmlmZXN0LCB1bmRlZmluZWQsIDIpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdtYW5pZmVzdCcpLnZhbHVlID0gcHJldHR5O1xuICB9ZWxzZXtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3bWFuaWZlc3QnKS52YWx1ZSA9ICdZb3VyIDIuNSBNYW5pZmVzdCBmb3JtYXQgaXMgaW5jb3JyZWN0ISBQbGVhc2UgY2hlY2sgYW5kIHRyeSBhZ2Fpbu+8gSc7XG4gIH1cbn1cblxuY29uc3QgY29udmVydE1hbmlmZXN0ID0gKGUpID0+ICB7XG4gIGNvbnZlcnRGaWVsZHMoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29yaW1hbmlmZXN0JykpO1xufVxuXG5jb25zdCB2YWxpZGF0ZU1hbmlmZXN0ID0gKGUpID0+IHtcbiAgdmFsaWRhdGVGaWVsZHMoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29yaW1hbmlmZXN0JykpO1xufVxuXG5mdW5jdGlvbiBIb21lKCkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgIDxkaXY+XG4gICAgICAgPGgxIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5oZWFkZXJUaXRsZX0+Q29udmVydCBNYW5pZmVzdCBmcm9tIEthaU9TMi41LjQgdG8gS2FpT1MzLjA8L2gxPlxuICAgICA8L2Rpdj5cbiAgICAgPGRpdiBjbGFzc05hbWU9e3V0aWxTdHlsZXMuY29udmVydGNvbnRhaW5lcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17dXRpbFN0eWxlcy5jb252ZXJ0dGV4dGFyZWF9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dXRpbFN0eWxlcy5wcmV0dHlXcmFwcGVyfT5cbiAgICAgICAgICA8aDM+Mi41LjQgTWFuaWZlc3Q8L2gzPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmJ1dHRvblByZXR0eX0gb25DbGljaz17cHJldHR5TWFuaWZlc3R9PlxuICAgICAgICAgICAgUHJldHR5XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmNvbnZlcnRjb250ZW50fSBpZD1cIm9yaW1hbmlmZXN0XCI+XG4gICAgICAgIDwvdGV4dGFyZWE+XG4gICAgICA8L2Rpdj5cbiAgICAgICA8ZGl2IGNsYXNzTmFtZT17dXRpbFN0eWxlcy5idXR0b25XcmFwcGVyfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dXRpbFN0eWxlcy5idXR0b25Db252ZXJ0fSBvbkNsaWNrPXtjb252ZXJ0TWFuaWZlc3R9PlxuICAgICAgICAgICAgQ09OVkVSVFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dXRpbFN0eWxlcy5idXR0b25WYWxpZGF0ZX0gb25DbGljaz17dmFsaWRhdGVNYW5pZmVzdH0+XG4gICAgICAgICAgICAgVkFMSURBVEVcbiAgICAgICAgICAgPC9kaXY+XG4gICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17dXRpbFN0eWxlcy5jb252ZXJ0dGV4dGFyZWF9PlxuICAgICAgICA8aDM+My4wIE1hbmlmZXN0PC9oMz5cbiAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5jb252ZXJ0Y29udGVudH0gaWQ9XCJuZXdtYW5pZmVzdFwiIHJlYWRPbmx5PlxuICAgICAgICA8L3RleHRhcmVhPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})