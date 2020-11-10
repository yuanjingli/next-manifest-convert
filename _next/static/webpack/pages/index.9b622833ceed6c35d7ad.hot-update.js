webpackHotUpdate_N_E("pages/index",{

/***/ "./utils/validate.js":
/*!***************************!*\
  !*** ./utils/validate.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return validate; });\n/*\n Required fields:\n   name or short_name: string\n   description: string\n   lang: string\n   theme_color: string\n   orientation: string\n   start_url: string\n   icons: Array of Object\n */\n\n/*\n Optional:\n   dir: string\n   scope: string\n   display: string\n   background_color: string\n   related_applications: Array of Object\n   prefer_related_applications: boolean\n   categories: Array of strings\n   screenshots: Array of Object\n   shortcuts: Array of Object\n */\n// validate required fields\nvar validateName = function validateName(manifest) {\n  if ('name' in manifest || 'short_name' in manifest) {} else {}\n};\n\nvar validateDescription = function validateDescription(manifest) {};\n\nvar validateLang = function validateLang(manifest) {};\n\nvar validateThemeColor = function validateThemeColor(manifest) {};\n\nvar validateOritation = function validateOritation(manifest) {};\n\nvar validateStartUrl = function validateStartUrl(manifest) {};\n\nvar validateIcons = function validateIcons(mainfest) {};\n\nvar validateRequiredFields = function validateRequiredFields(manifest) {\n  validateName(manifest);\n  validateDescription(manifest);\n  validateLang(manifest);\n  validateThemeColor(manifest);\n  validateOritation(manifest);\n  validateStartUrl(manifest);\n  validateIcons(manifest);\n}; // validate option fields\n\n\nvar validateDir = function validateDir(manifest) {};\n\nvar validateScope = function validateScope(manifest) {};\n\nvar validateDisplay = function validateDisplay(manifest) {};\n\nvar validateBackgroundColor = function validateBackgroundColor(manifest) {};\n\nvar validateRelatedApplications = function validateRelatedApplications(manifest) {};\n\nvar validatePreferRelatedApplications = function validatePreferRelatedApplications(manifest) {};\n\nvar validateCategories = function validateCategories(manifest) {};\n\nvar validateScreenshots = function validateScreenshots(manifest) {};\n\nvar validateShortcuts = function validateShortcuts(manifest) {};\n\nvar validateOptionFields = function validateOptionFields(manifest) {\n  validateDir(manifest);\n  validateScope(manifest);\n  validateDisplay(manifest);\n  validateBackgroundColor(manifest);\n  validateRelatedApplications(manifest);\n  validatePreferRelatedApplications(manifest);\n  validateCategories(manifest);\n  validateScreenshots(manifest);\n  validateShortcuts(manifest);\n};\n\nfunction validate(oldManifest) {\n  var errors = {};\n  validateRequiredFields(oldManifest, errors);\n  validateOptionFields(oldManifest);\n  return 'success';\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvdmFsaWRhdGUuanM/ZjdkZiJdLCJuYW1lcyI6WyJ2YWxpZGF0ZU5hbWUiLCJtYW5pZmVzdCIsInZhbGlkYXRlRGVzY3JpcHRpb24iLCJ2YWxpZGF0ZUxhbmciLCJ2YWxpZGF0ZVRoZW1lQ29sb3IiLCJ2YWxpZGF0ZU9yaXRhdGlvbiIsInZhbGlkYXRlU3RhcnRVcmwiLCJ2YWxpZGF0ZUljb25zIiwibWFpbmZlc3QiLCJ2YWxpZGF0ZVJlcXVpcmVkRmllbGRzIiwidmFsaWRhdGVEaXIiLCJ2YWxpZGF0ZVNjb3BlIiwidmFsaWRhdGVEaXNwbGF5IiwidmFsaWRhdGVCYWNrZ3JvdW5kQ29sb3IiLCJ2YWxpZGF0ZVJlbGF0ZWRBcHBsaWNhdGlvbnMiLCJ2YWxpZGF0ZVByZWZlclJlbGF0ZWRBcHBsaWNhdGlvbnMiLCJ2YWxpZGF0ZUNhdGVnb3JpZXMiLCJ2YWxpZGF0ZVNjcmVlbnNob3RzIiwidmFsaWRhdGVTaG9ydGN1dHMiLCJ2YWxpZGF0ZU9wdGlvbkZpZWxkcyIsInZhbGlkYXRlIiwib2xkTWFuaWZlc3QiLCJlcnJvcnMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLFFBQUQsRUFBYztBQUNqQyxNQUFJLFVBQVVBLFFBQVYsSUFBc0IsZ0JBQWdCQSxRQUExQyxFQUFvRCxDQUVuRCxDQUZELE1BRU8sQ0FFTjtBQUNGLENBTkQ7O0FBUUEsSUFBTUMsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFDRCxRQUFELEVBQWMsQ0FDekMsQ0FERDs7QUFHQSxJQUFNRSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDRixRQUFELEVBQWMsQ0FDbEMsQ0FERDs7QUFHQSxJQUFNRyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNILFFBQUQsRUFBYyxDQUN4QyxDQUREOztBQUdBLElBQU1JLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ0osUUFBRCxFQUFjLENBQ3ZDLENBREQ7O0FBR0EsSUFBTUssZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDTCxRQUFELEVBQWMsQ0FDdEMsQ0FERDs7QUFHQSxJQUFNTSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLFFBQUQsRUFBYyxDQUNuQyxDQUREOztBQUdBLElBQU1DLHNCQUFzQixHQUFHLFNBQXpCQSxzQkFBeUIsQ0FBQ1IsUUFBRCxFQUFjO0FBQzNDRCxjQUFZLENBQUNDLFFBQUQsQ0FBWjtBQUNBQyxxQkFBbUIsQ0FBQ0QsUUFBRCxDQUFuQjtBQUNBRSxjQUFZLENBQUNGLFFBQUQsQ0FBWjtBQUNBRyxvQkFBa0IsQ0FBQ0gsUUFBRCxDQUFsQjtBQUNBSSxtQkFBaUIsQ0FBQ0osUUFBRCxDQUFqQjtBQUNBSyxrQkFBZ0IsQ0FBQ0wsUUFBRCxDQUFoQjtBQUNBTSxlQUFhLENBQUNOLFFBQUQsQ0FBYjtBQUNELENBUkQsQyxDQVVBOzs7QUFFQSxJQUFNUyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDVCxRQUFELEVBQWMsQ0FFakMsQ0FGRDs7QUFJQSxJQUFNVSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNWLFFBQUQsRUFBYyxDQUVuQyxDQUZEOztBQUlBLElBQU1XLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ1gsUUFBRCxFQUFjLENBRXJDLENBRkQ7O0FBSUEsSUFBTVksdUJBQXVCLEdBQUcsU0FBMUJBLHVCQUEwQixDQUFDWixRQUFELEVBQWMsQ0FFN0MsQ0FGRDs7QUFJQSxJQUFNYSwyQkFBMkIsR0FBRyxTQUE5QkEsMkJBQThCLENBQUNiLFFBQUQsRUFBYyxDQUVqRCxDQUZEOztBQUlBLElBQU1jLGlDQUFpQyxHQUFHLFNBQXBDQSxpQ0FBb0MsQ0FBQ2QsUUFBRCxFQUFjLENBRXZELENBRkQ7O0FBSUEsSUFBTWUsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDZixRQUFELEVBQWMsQ0FFeEMsQ0FGRDs7QUFJQSxJQUFNZ0IsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFDaEIsUUFBRCxFQUFjLENBRXpDLENBRkQ7O0FBSUEsSUFBTWlCLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ2pCLFFBQUQsRUFBYyxDQUV2QyxDQUZEOztBQUlBLElBQU1rQixvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLENBQUNsQixRQUFELEVBQWM7QUFDekNTLGFBQVcsQ0FBQ1QsUUFBRCxDQUFYO0FBQ0FVLGVBQWEsQ0FBQ1YsUUFBRCxDQUFiO0FBQ0FXLGlCQUFlLENBQUNYLFFBQUQsQ0FBZjtBQUNBWSx5QkFBdUIsQ0FBQ1osUUFBRCxDQUF2QjtBQUNBYSw2QkFBMkIsQ0FBQ2IsUUFBRCxDQUEzQjtBQUNBYyxtQ0FBaUMsQ0FBQ2QsUUFBRCxDQUFqQztBQUNBZSxvQkFBa0IsQ0FBQ2YsUUFBRCxDQUFsQjtBQUNBZ0IscUJBQW1CLENBQUNoQixRQUFELENBQW5CO0FBQ0FpQixtQkFBaUIsQ0FBQ2pCLFFBQUQsQ0FBakI7QUFDRCxDQVZEOztBQWFlLFNBQVNtQixRQUFULENBQWtCQyxXQUFsQixFQUErQjtBQUM1QyxNQUFJQyxNQUFNLEdBQUcsRUFBYjtBQUNBYix3QkFBc0IsQ0FBQ1ksV0FBRCxFQUFjQyxNQUFkLENBQXRCO0FBQ0FILHNCQUFvQixDQUFDRSxXQUFELENBQXBCO0FBQ0EsU0FBTyxTQUFQO0FBQ0QiLCJmaWxlIjoiLi91dGlscy92YWxpZGF0ZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gUmVxdWlyZWQgZmllbGRzOlxuICAgbmFtZSBvciBzaG9ydF9uYW1lOiBzdHJpbmdcbiAgIGRlc2NyaXB0aW9uOiBzdHJpbmdcbiAgIGxhbmc6IHN0cmluZ1xuICAgdGhlbWVfY29sb3I6IHN0cmluZ1xuICAgb3JpZW50YXRpb246IHN0cmluZ1xuICAgc3RhcnRfdXJsOiBzdHJpbmdcbiAgIGljb25zOiBBcnJheSBvZiBPYmplY3RcbiAqL1xuXG4vKlxuIE9wdGlvbmFsOlxuICAgZGlyOiBzdHJpbmdcbiAgIHNjb3BlOiBzdHJpbmdcbiAgIGRpc3BsYXk6IHN0cmluZ1xuICAgYmFja2dyb3VuZF9jb2xvcjogc3RyaW5nXG4gICByZWxhdGVkX2FwcGxpY2F0aW9uczogQXJyYXkgb2YgT2JqZWN0XG4gICBwcmVmZXJfcmVsYXRlZF9hcHBsaWNhdGlvbnM6IGJvb2xlYW5cbiAgIGNhdGVnb3JpZXM6IEFycmF5IG9mIHN0cmluZ3NcbiAgIHNjcmVlbnNob3RzOiBBcnJheSBvZiBPYmplY3RcbiAgIHNob3J0Y3V0czogQXJyYXkgb2YgT2JqZWN0XG4gKi9cblxuLy8gdmFsaWRhdGUgcmVxdWlyZWQgZmllbGRzXG5jb25zdCB2YWxpZGF0ZU5hbWUgPSAobWFuaWZlc3QpID0+IHtcbiAgaWYgKCduYW1lJyBpbiBtYW5pZmVzdCB8fCAnc2hvcnRfbmFtZScgaW4gbWFuaWZlc3QpIHtcblxuICB9IGVsc2Uge1xuXG4gIH1cbn1cblxuY29uc3QgdmFsaWRhdGVEZXNjcmlwdGlvbiA9IChtYW5pZmVzdCkgPT4ge1xufVxuXG5jb25zdCB2YWxpZGF0ZUxhbmcgPSAobWFuaWZlc3QpID0+IHtcbn1cblxuY29uc3QgdmFsaWRhdGVUaGVtZUNvbG9yID0gKG1hbmlmZXN0KSA9PiB7XG59XG5cbmNvbnN0IHZhbGlkYXRlT3JpdGF0aW9uID0gKG1hbmlmZXN0KSA9PiB7XG59XG5cbmNvbnN0IHZhbGlkYXRlU3RhcnRVcmwgPSAobWFuaWZlc3QpID0+IHtcbn1cblxuY29uc3QgdmFsaWRhdGVJY29ucyA9IChtYWluZmVzdCkgPT4ge1xufVxuXG5jb25zdCB2YWxpZGF0ZVJlcXVpcmVkRmllbGRzID0gKG1hbmlmZXN0KSA9PiB7XG4gIHZhbGlkYXRlTmFtZShtYW5pZmVzdCk7XG4gIHZhbGlkYXRlRGVzY3JpcHRpb24obWFuaWZlc3QpO1xuICB2YWxpZGF0ZUxhbmcobWFuaWZlc3QpO1xuICB2YWxpZGF0ZVRoZW1lQ29sb3IobWFuaWZlc3QpO1xuICB2YWxpZGF0ZU9yaXRhdGlvbihtYW5pZmVzdCk7XG4gIHZhbGlkYXRlU3RhcnRVcmwobWFuaWZlc3QpO1xuICB2YWxpZGF0ZUljb25zKG1hbmlmZXN0KTtcbn1cblxuLy8gdmFsaWRhdGUgb3B0aW9uIGZpZWxkc1xuXG5jb25zdCB2YWxpZGF0ZURpciA9IChtYW5pZmVzdCkgPT4ge1xuXG59XG5cbmNvbnN0IHZhbGlkYXRlU2NvcGUgPSAobWFuaWZlc3QpID0+IHtcblxufVxuXG5jb25zdCB2YWxpZGF0ZURpc3BsYXkgPSAobWFuaWZlc3QpID0+IHtcblxufVxuXG5jb25zdCB2YWxpZGF0ZUJhY2tncm91bmRDb2xvciA9IChtYW5pZmVzdCkgPT4ge1xuXG59XG5cbmNvbnN0IHZhbGlkYXRlUmVsYXRlZEFwcGxpY2F0aW9ucyA9IChtYW5pZmVzdCkgPT4ge1xuXG59XG5cbmNvbnN0IHZhbGlkYXRlUHJlZmVyUmVsYXRlZEFwcGxpY2F0aW9ucyA9IChtYW5pZmVzdCkgPT4ge1xuXG59XG5cbmNvbnN0IHZhbGlkYXRlQ2F0ZWdvcmllcyA9IChtYW5pZmVzdCkgPT4ge1xuXG59XG5cbmNvbnN0IHZhbGlkYXRlU2NyZWVuc2hvdHMgPSAobWFuaWZlc3QpID0+IHtcblxufVxuXG5jb25zdCB2YWxpZGF0ZVNob3J0Y3V0cyA9IChtYW5pZmVzdCkgPT4ge1xuXG59XG5cbmNvbnN0IHZhbGlkYXRlT3B0aW9uRmllbGRzID0gKG1hbmlmZXN0KSA9PiB7XG4gIHZhbGlkYXRlRGlyKG1hbmlmZXN0KTtcbiAgdmFsaWRhdGVTY29wZShtYW5pZmVzdCk7XG4gIHZhbGlkYXRlRGlzcGxheShtYW5pZmVzdCk7XG4gIHZhbGlkYXRlQmFja2dyb3VuZENvbG9yKG1hbmlmZXN0KTtcbiAgdmFsaWRhdGVSZWxhdGVkQXBwbGljYXRpb25zKG1hbmlmZXN0KTtcbiAgdmFsaWRhdGVQcmVmZXJSZWxhdGVkQXBwbGljYXRpb25zKG1hbmlmZXN0KTtcbiAgdmFsaWRhdGVDYXRlZ29yaWVzKG1hbmlmZXN0KTtcbiAgdmFsaWRhdGVTY3JlZW5zaG90cyhtYW5pZmVzdCk7XG4gIHZhbGlkYXRlU2hvcnRjdXRzKG1hbmlmZXN0KTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2YWxpZGF0ZShvbGRNYW5pZmVzdCkge1xuICBsZXQgZXJyb3JzID0ge307XG4gIHZhbGlkYXRlUmVxdWlyZWRGaWVsZHMob2xkTWFuaWZlc3QsIGVycm9ycyk7XG4gIHZhbGlkYXRlT3B0aW9uRmllbGRzKG9sZE1hbmlmZXN0KTtcbiAgcmV0dXJuICdzdWNjZXNzJztcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/validate.js\n");

/***/ })

})