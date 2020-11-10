webpackHotUpdate_N_E("pages/index",{

/***/ "./utils/validate.js":
/*!***************************!*\
  !*** ./utils/validate.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return validate; });\n/*\n Required fields:\n   name or short_name: string\n   description: string\n   lang: string\n   theme_color: string\n   orientation: string\n   start_url: string\n   icons: Array of Object\n */\n\n/*\n Optional:\n   dir: string\n   scope: string\n   display: string\n   background_color: string\n   related_applications: Array of Object\n   prefer_related_applications: boolean\n   categories: Array of strings\n   screenshots: Array of Object\n   shortcuts: Array of Object\n */\n// validate required fields\nvar validateName = function validateName(manifest) {\n  if ('name' in manifest || 'short_name' in manifest) {} else {}\n};\n\nvar validateDescription = function validateDescription(manifest) {};\n\nvar validateLang = function validateLang(manifest) {};\n\nvar validateThemeColor = function validateThemeColor(manifest) {};\n\nvar validateOritation = function validateOritation(manifest) {};\n\nvar validateStartUrl = function validateStartUrl(manifest) {};\n\nvar validateIcons = function validateIcons(mainfest) {};\n\nvar validateRequiredFields = function validateRequiredFields(manifest, errors) {\n  validateName(manifest);\n  validateDescription(manifest);\n  validateLang(manifest);\n  validateThemeColor(manifest);\n  validateOritation(manifest);\n  validateStartUrl(manifest);\n  validateIcons(manifest);\n}; // validate option fields\n\n\nvar validateDir = function validateDir(manifest, errors) {};\n\nvar validateScope = function validateScope(manifest, errors) {};\n\nvar validateDisplay = function validateDisplay(manifest, errors) {};\n\nvar validateBackgroundColor = function validateBackgroundColor(manifest, errors) {};\n\nvar validateRelatedApplications = function validateRelatedApplications(manifest, errors) {};\n\nvar validatePreferRelatedApplications = function validatePreferRelatedApplications(manifest, errors) {};\n\nvar validateCategories = function validateCategories(manifest, errors) {};\n\nvar validateScreenshots = function validateScreenshots(manifest, errors) {};\n\nvar validateShortcuts = function validateShortcuts(manifest, errors) {};\n\nvar validateOptionFields = function validateOptionFields(manifest, errors) {\n  validateDir(manifest, errors);\n  validateScope(manifest, errors);\n  validateDisplay(manifest, errors);\n  validateBackgroundColor(manifest, errors);\n  validateRelatedApplications(manifest, errors);\n  validatePreferRelatedApplications(manifest, errors);\n  validateCategories(manifest, errors);\n  validateScreenshots(manifest, errors);\n  validateShortcuts(manifest, errors);\n};\n\nfunction validate(oldManifest) {\n  var errors = {};\n  validateRequiredFields(oldManifest, errors);\n  validateOptionFields(oldManifest, errors);\n  return 'success';\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvdmFsaWRhdGUuanM/ZjdkZiJdLCJuYW1lcyI6WyJ2YWxpZGF0ZU5hbWUiLCJtYW5pZmVzdCIsInZhbGlkYXRlRGVzY3JpcHRpb24iLCJ2YWxpZGF0ZUxhbmciLCJ2YWxpZGF0ZVRoZW1lQ29sb3IiLCJ2YWxpZGF0ZU9yaXRhdGlvbiIsInZhbGlkYXRlU3RhcnRVcmwiLCJ2YWxpZGF0ZUljb25zIiwibWFpbmZlc3QiLCJ2YWxpZGF0ZVJlcXVpcmVkRmllbGRzIiwiZXJyb3JzIiwidmFsaWRhdGVEaXIiLCJ2YWxpZGF0ZVNjb3BlIiwidmFsaWRhdGVEaXNwbGF5IiwidmFsaWRhdGVCYWNrZ3JvdW5kQ29sb3IiLCJ2YWxpZGF0ZVJlbGF0ZWRBcHBsaWNhdGlvbnMiLCJ2YWxpZGF0ZVByZWZlclJlbGF0ZWRBcHBsaWNhdGlvbnMiLCJ2YWxpZGF0ZUNhdGVnb3JpZXMiLCJ2YWxpZGF0ZVNjcmVlbnNob3RzIiwidmFsaWRhdGVTaG9ydGN1dHMiLCJ2YWxpZGF0ZU9wdGlvbkZpZWxkcyIsInZhbGlkYXRlIiwib2xkTWFuaWZlc3QiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLFFBQUQsRUFBYztBQUNqQyxNQUFJLFVBQVVBLFFBQVYsSUFBc0IsZ0JBQWdCQSxRQUExQyxFQUFvRCxDQUVuRCxDQUZELE1BRU8sQ0FFTjtBQUNGLENBTkQ7O0FBUUEsSUFBTUMsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFDRCxRQUFELEVBQWMsQ0FDekMsQ0FERDs7QUFHQSxJQUFNRSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDRixRQUFELEVBQWMsQ0FDbEMsQ0FE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RUFBY1osTUFBZCxDQUFwQjtBQUNBLFNBQU8sU0FBUDtBQUNEIiwiZmlsZSI6Ii4vdXRpbHMvdmFsaWRhdGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuIFJlcXVpcmVkIGZpZWxkczpcbiAgIG5hbWUgb3Igc2hvcnRfbmFtZTogc3RyaW5nXG4gICBkZXNjcmlwdGlvbjogc3RyaW5nXG4gICBsYW5nOiBzdHJpbmdcbiAgIHRoZW1lX2NvbG9yOiBzdHJpbmdcbiAgIG9yaWVudGF0aW9uOiBzdHJpbmdcbiAgIHN0YXJ0X3VybDogc3RyaW5nXG4gICBpY29uczogQXJyYXkgb2YgT2JqZWN0XG4gKi9cblxuLypcbiBPcHRpb25hbDpcbiAgIGRpcjogc3RyaW5nXG4gICBzY29wZTogc3RyaW5nXG4gICBkaXNwbGF5OiBzdHJpbmdcbiAgIGJhY2tncm91bmRfY29sb3I6IHN0cmluZ1xuICAgcmVsYXRlZF9hcHBsaWNhdGlvbnM6IEFycmF5IG9mIE9iamVjdFxuICAgcHJlZmVyX3JlbGF0ZWRfYXBwbGljYXRpb25zOiBib29sZWFuXG4gICBjYXRlZ29yaWVzOiBBcnJheSBvZiBzdHJpbmdzXG4gICBzY3JlZW5zaG90czogQXJyYXkgb2YgT2JqZWN0XG4gICBzaG9ydGN1dHM6IEFycmF5IG9mIE9iamVjdFxuICovXG5cbi8vIHZhbGlkYXRlIHJlcXVpcmVkIGZpZWxkc1xuY29uc3QgdmFsaWRhdGVOYW1lID0gKG1hbmlmZXN0KSA9PiB7XG4gIGlmICgnbmFtZScgaW4gbWFuaWZlc3QgfHwgJ3Nob3J0X25hbWUnIGluIG1hbmlmZXN0KSB7XG5cbiAgfSBlbHNlIHtcblxuICB9XG59XG5cbmNvbnN0IHZhbGlkYXRlRGVzY3JpcHRpb24gPSAobWFuaWZlc3QpID0+IHtcbn1cblxuY29uc3QgdmFsaWRhdGVMYW5nID0gKG1hbmlmZXN0KSA9PiB7XG59XG5cbmNvbnN0IHZhbGlkYXRlVGhlbWVDb2xvciA9IChtYW5pZmVzdCkgPT4ge1xufVxuXG5jb25zdCB2YWxpZGF0ZU9yaXRhdGlvbiA9IChtYW5pZmVzdCkgPT4ge1xufVxuXG5jb25zdCB2YWxpZGF0ZVN0YXJ0VXJsID0gKG1hbmlmZXN0KSA9PiB7XG59XG5cbmNvbnN0IHZhbGlkYXRlSWNvbnMgPSAobWFpbmZlc3QpID0+IHtcbn1cblxuY29uc3QgdmFsaWRhdGVSZXF1aXJlZEZpZWxkcyA9IChtYW5pZmVzdCwgZXJyb3JzKSA9PiB7XG4gIHZhbGlkYXRlTmFtZShtYW5pZmVzdCk7XG4gIHZhbGlkYXRlRGVzY3JpcHRpb24obWFuaWZlc3QpO1xuICB2YWxpZGF0ZUxhbmcobWFuaWZlc3QpO1xuICB2YWxpZGF0ZVRoZW1lQ29sb3IobWFuaWZlc3QpO1xuICB2YWxpZGF0ZU9yaXRhdGlvbihtYW5pZmVzdCk7XG4gIHZhbGlkYXRlU3RhcnRVcmwobWFuaWZlc3QpO1xuICB2YWxpZGF0ZUljb25zKG1hbmlmZXN0KTtcbn1cblxuLy8gdmFsaWRhdGUgb3B0aW9uIGZpZWxkc1xuXG5jb25zdCB2YWxpZGF0ZURpciA9IChtYW5pZmVzdCwgZXJyb3JzKSA9PiB7XG5cbn1cblxuY29uc3QgdmFsaWRhdGVTY29wZSA9IChtYW5pZmVzdCwgZXJyb3JzKSA9PiB7XG5cbn1cblxuY29uc3QgdmFsaWRhdGVEaXNwbGF5ID0gKG1hbmlmZXN0LCBlcnJvcnMpID0+IHtcblxufVxuXG5jb25zdCB2YWxpZGF0ZUJhY2tncm91bmRDb2xvciA9IChtYW5pZmVzdCwgZXJyb3JzKSA9PiB7XG5cbn1cblxuY29uc3QgdmFsaWRhdGVSZWxhdGVkQXBwbGljYXRpb25zID0gKG1hbmlmZXN0LCBlcnJvcnMpID0+IHtcblxufVxuXG5jb25zdCB2YWxpZGF0ZVByZWZlclJlbGF0ZWRBcHBsaWNhdGlvbnMgPSAobWFuaWZlc3QsIGVycm9ycykgPT4ge1xuXG59XG5cbmNvbnN0IHZhbGlkYXRlQ2F0ZWdvcmllcyA9IChtYW5pZmVzdCwgZXJyb3JzKSA9PiB7XG5cbn1cblxuY29uc3QgdmFsaWRhdGVTY3JlZW5zaG90cyA9IChtYW5pZmVzdCwgZXJyb3JzKSA9PiB7XG5cbn1cblxuY29uc3QgdmFsaWRhdGVTaG9ydGN1dHMgPSAobWFuaWZlc3QsIGVycm9ycykgPT4ge1xuXG59XG5cbmNvbnN0IHZhbGlkYXRlT3B0aW9uRmllbGRzID0gKG1hbmlmZXN0LCBlcnJvcnMpID0+IHtcbiAgdmFsaWRhdGVEaXIobWFuaWZlc3QsIGVycm9ycyk7XG4gIHZhbGlkYXRlU2NvcGUobWFuaWZlc3QsIGVycm9ycyk7XG4gIHZhbGlkYXRlRGlzcGxheShtYW5pZmVzdCwgZXJyb3JzKTtcbiAgdmFsaWRhdGVCYWNrZ3JvdW5kQ29sb3IobWFuaWZlc3QsIGVycm9ycyk7XG4gIHZhbGlkYXRlUmVsYXRlZEFwcGxpY2F0aW9ucyhtYW5pZmVzdCwgZXJyb3JzKTtcbiAgdmFsaWRhdGVQcmVmZXJSZWxhdGVkQXBwbGljYXRpb25zKG1hbmlmZXN0LCBlcnJvcnMpO1xuICB2YWxpZGF0ZUNhdGVnb3JpZXMobWFuaWZlc3QsIGVycm9ycyk7XG4gIHZhbGlkYXRlU2NyZWVuc2hvdHMobWFuaWZlc3QsIGVycm9ycyk7XG4gIHZhbGlkYXRlU2hvcnRjdXRzKG1hbmlmZXN0LCBlcnJvcnMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2YWxpZGF0ZShvbGRNYW5pZmVzdCkge1xuICBsZXQgZXJyb3JzID0ge307XG4gIHZhbGlkYXRlUmVxdWlyZWRGaWVsZHMob2xkTWFuaWZlc3QsIGVycm9ycyk7XG4gIHZhbGlkYXRlT3B0aW9uRmllbGRzKG9sZE1hbmlmZXN0LCBlcnJvcnMpO1xuICByZXR1cm4gJ3N1Y2Nlc3MnO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/validate.js\n");

/***/ })

})