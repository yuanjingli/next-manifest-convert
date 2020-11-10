webpackHotUpdate_N_E("pages/index",{

/***/ "./utils/validate.js":
/*!***************************!*\
  !*** ./utils/validate.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return validate; });\n/*\n Required fields:\n   name or short_name: string\n   description: string\n   lang: string\n   theme_color: string\n   orientation: string\n   start_url: string\n   icons: Array of Object\n */\n\n/*\n Optional:\n   dir: string\n   scope: string\n   display: string\n   background_color: string\n   related_applications: Array of Object\n   prefer_related_applications: boolean\n   categories: Array of strings\n   screenshots: Array of Object\n   shortcuts: Array of Object\n */\n// validate required fields\nvar validateName = function validateName(manifest) {\n  if ('name' in manifest || 'short_name' in manifest) {} else {}\n};\n\nvar validateDescription = function validateDescription(manifest) {};\n\nvar validateLang = function validateLang(manifest) {};\n\nvar validateThemeColor = function validateThemeColor(manifest) {};\n\nvar validateOritation = function validateOritation(manifest) {};\n\nvar validateStartUrl = function validateStartUrl(manifest) {};\n\nvar validateIcons = function validateIcons(mainfest) {};\n\nvar validateRequiredFields = function validateRequiredFields(manifest, errors) {\n  validateName(manifest);\n  validateDescription(manifest);\n  validateLang(manifest);\n  validateThemeColor(manifest);\n  validateOritation(manifest);\n  validateStartUrl(manifest);\n  validateIcons(manifest);\n}; // validate option fields\n\n\nvar validateDir = function validateDir(manifest) {};\n\nvar validateScope = function validateScope(manifest) {};\n\nvar validateDisplay = function validateDisplay(manifest) {};\n\nvar validateBackgroundColor = function validateBackgroundColor(manifest) {};\n\nvar validateRelatedApplications = function validateRelatedApplications(manifest) {};\n\nvar validatePreferRelatedApplications = function validatePreferRelatedApplications(manifest) {};\n\nvar validateCategories = function validateCategories(manifest) {};\n\nvar validateScreenshots = function validateScreenshots(manifest) {};\n\nvar validateShortcuts = function validateShortcuts(manifest) {};\n\nvar validateOptionFields = function validateOptionFields(manifest, errors) {\n  validateDir(manifest, errors);\n  validateScope(manifest);\n  validateDisplay(manifest);\n  validateBackgroundColor(manifest);\n  validateRelatedApplications(manifest);\n  validatePreferRelatedApplications(manifest);\n  validateCategories(manifest);\n  validateScreenshots(manifest);\n  validateShortcuts(manifest);\n};\n\nfunction validate(oldManifest) {\n  var errors = {};\n  validateRequiredFields(oldManifest, errors);\n  validateOptionFields(oldManifest, errors);\n  return 'success';\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvdmFsaWRhdGUuanM/ZjdkZiJdLCJuYW1lcyI6WyJ2YWxpZGF0ZU5hbWUiLCJtYW5pZmVzdCIsInZhbGlkYXRlRGVzY3JpcHRpb24iLCJ2YWxpZGF0ZUxhbmciLCJ2YWxpZGF0ZVRoZW1lQ29sb3IiLCJ2YWxpZGF0ZU9yaXRhdGlvbiIsInZhbGlkYXRlU3RhcnRVcmwiLCJ2YWxpZGF0ZUljb25zIiwibWFpbmZlc3QiLCJ2YWxpZGF0ZVJlcXVpcmVkRmllbGRzIiwiZXJyb3JzIiwidmFsaWRhdGVEaXIiLCJ2YWxpZGF0ZVNjb3BlIiwidmFsaWRhdGVEaXNwbGF5IiwidmFsaWRhdGVCYWNrZ3JvdW5kQ29sb3IiLCJ2YWxpZGF0ZVJlbGF0ZWRBcHBsaWNhdGlvbnMiLCJ2YWxpZGF0ZVByZWZlclJlbGF0ZWRBcHBsaWNhdGlvbnMiLCJ2YWxpZGF0ZUNhdGVnb3JpZXMiLCJ2YWxpZGF0ZVNjcmVlbnNob3RzIiwidmFsaWRhdGVTaG9ydGN1dHMiLCJ2YWxpZGF0ZU9wdGlvbkZpZWxkcyIsInZhbGlkYXRlIiwib2xkTWFuaWZlc3QiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLFFBQUQsRUFBYztBQUNqQyxNQUFJLFVBQVVBLFFBQVYsSUFBc0IsZ0JBQWdCQSxRQUExQyxFQUFvRCxDQUVuRCxDQUZELE1BRU8sQ0FFTjtBQUNGLENBTkQ7O0FBUUEsSUFBTUMsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFDRCxRQUFELEVBQWMsQ0FDekMsQ0FERDs7QUFHQSxJQUFNRSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDRixRQUFELEVBQWMsQ0FDbEMsQ0FERDs7QUFHQSxJQUFNRyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNILFFBQUQsRUFBYyxDQUN4QyxDQUREOztBQUdBLElBQU1JLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ0osUUFBRCxFQUFjLENBQ3ZDLENBREQ7O0FBR0EsSUFBTUssZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDTCxRQUFELEVBQWMsQ0FDdEMsQ0FERDs7QUFHQSxJQUFNTSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLFFBQUQsRUFBYyxDQUNuQyxDQUREOztBQUdBLElBQU1DLHNCQUFzQixHQUFHLFNBQXpCQSxzQkFBeUIsQ0FBQ1IsUUFBRCxFQUFXUyxNQUFYLEVBQXNCO0FBQ25EVixjQUFZLENBQUNDLFFBQUQsQ0FBWjtBQUNBQyxxQkFBbUIsQ0FBQ0QsUUFBRCxDQUFuQjtBQUNBRSxjQUFZLENBQUNGLFFBQUQsQ0FBWjtBQUNBRyxvQkFBa0IsQ0FBQ0gsUUFBRCxDQUFsQjtBQUNBSSxtQkFBaUIsQ0FBQ0osUUFBRCxDQUFqQjtBQUNBSyxrQkFBZ0IsQ0FBQ0wsUUFBRCxDQUFoQjtBQUNBTSxlQUFhLENBQUNOLFFBQUQsQ0FBYjtBQUNELENBUkQsQyxDQVVBOzs7QUFFQSxJQUFNVSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDVixRQUFELEVBQWMsQ0FFakMsQ0FGRDs7QUFJQSxJQUFNVyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNYLFFBQUQsRUFBYyxDQUVuQyxDQUZEOztBQUlBLElBQU1ZLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ1osUUFBRCxFQUFjLENBRXJDLENBRkQ7O0FBSUEsSUFBTWEsdUJBQXVCLEdBQUcsU0FBMUJBLHVCQUEwQixDQUFDYixRQUFELEVBQWMsQ0FFN0MsQ0FGRDs7QUFJQSxJQUFNYywyQkFBMkIsR0FBRyxTQUE5QkEsMkJBQThCLENBQUNkLFFBQUQsRUFBYyxDQUVqRCxDQUZEOztBQUlBLElBQU1lLGlDQUFpQyxHQUFHLFNBQXBDQSxpQ0FBb0MsQ0FBQ2YsUUFBRCxFQUFjLENBRXZELENBRkQ7O0FBSUEsSUFBTWdCLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ2hCLFFBQUQsRUFBYyxDQUV4QyxDQUZEOztBQUlBLElBQU1pQixtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQUNqQixRQUFELEVBQWMsQ0FFekMsQ0FGRDs7QUFJQSxJQUFNa0IsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDbEIsUUFBRCxFQUFjLENBRXZDLENBRkQ7O0FBSUEsSUFBTW1CLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsQ0FBQ25CLFFBQUQsRUFBV1MsTUFBWCxFQUFzQjtBQUNqREMsYUFBVyxDQUFDVixRQUFELEVBQVdTLE1BQVgsQ0FBWDtBQUNBRSxlQUFhLENBQUNYLFFBQUQsQ0FBYjtBQUNBWSxpQkFBZSxDQUFDWixRQUFELENBQWY7QUFDQWEseUJBQXVCLENBQUNiLFFBQUQsQ0FBdkI7QUFDQWMsNkJBQTJCLENBQUNkLFFBQUQsQ0FBM0I7QUFDQWUsbUNBQWlDLENBQUNmLFFBQUQsQ0FBakM7QUFDQWdCLG9CQUFrQixDQUFDaEIsUUFBRCxDQUFsQjtBQUNBaUIscUJBQW1CLENBQUNqQixRQUFELENBQW5CO0FBQ0FrQixtQkFBaUIsQ0FBQ2xCLFFBQUQsQ0FBakI7QUFDRCxDQVZEOztBQVllLFNBQVNvQixRQUFULENBQWtCQyxXQUFsQixFQUErQjtBQUM1QyxNQUFJWixNQUFNLEdBQUcsRUFBYjtBQUNBRCx3QkFBc0IsQ0FBQ2EsV0FBRCxFQUFjWixNQUFkLENBQXRCO0FBQ0FVLHNCQUFvQixDQUFDRSxXQUFELEVBQWNaLE1BQWQsQ0FBcEI7QUFDQSxTQUFPLFNBQVA7QUFDRCIsImZpbGUiOiIuL3V0aWxzL3ZhbGlkYXRlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiBSZXF1aXJlZCBmaWVsZHM6XG4gICBuYW1lIG9yIHNob3J0X25hbWU6IHN0cmluZ1xuICAgZGVzY3JpcHRpb246IHN0cmluZ1xuICAgbGFuZzogc3RyaW5nXG4gICB0aGVtZV9jb2xvcjogc3RyaW5nXG4gICBvcmllbnRhdGlvbjogc3RyaW5nXG4gICBzdGFydF91cmw6IHN0cmluZ1xuICAgaWNvbnM6IEFycmF5IG9mIE9iamVjdFxuICovXG5cbi8qXG4gT3B0aW9uYWw6XG4gICBkaXI6IHN0cmluZ1xuICAgc2NvcGU6IHN0cmluZ1xuICAgZGlzcGxheTogc3RyaW5nXG4gICBiYWNrZ3JvdW5kX2NvbG9yOiBzdHJpbmdcbiAgIHJlbGF0ZWRfYXBwbGljYXRpb25zOiBBcnJheSBvZiBPYmplY3RcbiAgIHByZWZlcl9yZWxhdGVkX2FwcGxpY2F0aW9uczogYm9vbGVhblxuICAgY2F0ZWdvcmllczogQXJyYXkgb2Ygc3RyaW5nc1xuICAgc2NyZWVuc2hvdHM6IEFycmF5IG9mIE9iamVjdFxuICAgc2hvcnRjdXRzOiBBcnJheSBvZiBPYmplY3RcbiAqL1xuXG4vLyB2YWxpZGF0ZSByZXF1aXJlZCBmaWVsZHNcbmNvbnN0IHZhbGlkYXRlTmFtZSA9IChtYW5pZmVzdCkgPT4ge1xuICBpZiAoJ25hbWUnIGluIG1hbmlmZXN0IHx8ICdzaG9ydF9uYW1lJyBpbiBtYW5pZmVzdCkge1xuXG4gIH0gZWxzZSB7XG5cbiAgfVxufVxuXG5jb25zdCB2YWxpZGF0ZURlc2NyaXB0aW9uID0gKG1hbmlmZXN0KSA9PiB7XG59XG5cbmNvbnN0IHZhbGlkYXRlTGFuZyA9IChtYW5pZmVzdCkgPT4ge1xufVxuXG5jb25zdCB2YWxpZGF0ZVRoZW1lQ29sb3IgPSAobWFuaWZlc3QpID0+IHtcbn1cblxuY29uc3QgdmFsaWRhdGVPcml0YXRpb24gPSAobWFuaWZlc3QpID0+IHtcbn1cblxuY29uc3QgdmFsaWRhdGVTdGFydFVybCA9IChtYW5pZmVzdCkgPT4ge1xufVxuXG5jb25zdCB2YWxpZGF0ZUljb25zID0gKG1haW5mZXN0KSA9PiB7XG59XG5cbmNvbnN0IHZhbGlkYXRlUmVxdWlyZWRGaWVsZHMgPSAobWFuaWZlc3QsIGVycm9ycykgPT4ge1xuICB2YWxpZGF0ZU5hbWUobWFuaWZlc3QpO1xuICB2YWxpZGF0ZURlc2NyaXB0aW9uKG1hbmlmZXN0KTtcbiAgdmFsaWRhdGVMYW5nKG1hbmlmZXN0KTtcbiAgdmFsaWRhdGVUaGVtZUNvbG9yKG1hbmlmZXN0KTtcbiAgdmFsaWRhdGVPcml0YXRpb24obWFuaWZlc3QpO1xuICB2YWxpZGF0ZVN0YXJ0VXJsKG1hbmlmZXN0KTtcbiAgdmFsaWRhdGVJY29ucyhtYW5pZmVzdCk7XG59XG5cbi8vIHZhbGlkYXRlIG9wdGlvbiBmaWVsZHNcblxuY29uc3QgdmFsaWRhdGVEaXIgPSAobWFuaWZlc3QpID0+IHtcblxufVxuXG5jb25zdCB2YWxpZGF0ZVNjb3BlID0gKG1hbmlmZXN0KSA9PiB7XG5cbn1cblxuY29uc3QgdmFsaWRhdGVEaXNwbGF5ID0gKG1hbmlmZXN0KSA9PiB7XG5cbn1cblxuY29uc3QgdmFsaWRhdGVCYWNrZ3JvdW5kQ29sb3IgPSAobWFuaWZlc3QpID0+IHtcblxufVxuXG5jb25zdCB2YWxpZGF0ZVJlbGF0ZWRBcHBsaWNhdGlvbnMgPSAobWFuaWZlc3QpID0+IHtcblxufVxuXG5jb25zdCB2YWxpZGF0ZVByZWZlclJlbGF0ZWRBcHBsaWNhdGlvbnMgPSAobWFuaWZlc3QpID0+IHtcblxufVxuXG5jb25zdCB2YWxpZGF0ZUNhdGVnb3JpZXMgPSAobWFuaWZlc3QpID0+IHtcblxufVxuXG5jb25zdCB2YWxpZGF0ZVNjcmVlbnNob3RzID0gKG1hbmlmZXN0KSA9PiB7XG5cbn1cblxuY29uc3QgdmFsaWRhdGVTaG9ydGN1dHMgPSAobWFuaWZlc3QpID0+IHtcblxufVxuXG5jb25zdCB2YWxpZGF0ZU9wdGlvbkZpZWxkcyA9IChtYW5pZmVzdCwgZXJyb3JzKSA9PiB7XG4gIHZhbGlkYXRlRGlyKG1hbmlmZXN0LCBlcnJvcnMpO1xuICB2YWxpZGF0ZVNjb3BlKG1hbmlmZXN0KTtcbiAgdmFsaWRhdGVEaXNwbGF5KG1hbmlmZXN0KTtcbiAgdmFsaWRhdGVCYWNrZ3JvdW5kQ29sb3IobWFuaWZlc3QpO1xuICB2YWxpZGF0ZVJlbGF0ZWRBcHBsaWNhdGlvbnMobWFuaWZlc3QpO1xuICB2YWxpZGF0ZVByZWZlclJlbGF0ZWRBcHBsaWNhdGlvbnMobWFuaWZlc3QpO1xuICB2YWxpZGF0ZUNhdGVnb3JpZXMobWFuaWZlc3QpO1xuICB2YWxpZGF0ZVNjcmVlbnNob3RzKG1hbmlmZXN0KTtcbiAgdmFsaWRhdGVTaG9ydGN1dHMobWFuaWZlc3QpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2YWxpZGF0ZShvbGRNYW5pZmVzdCkge1xuICBsZXQgZXJyb3JzID0ge307XG4gIHZhbGlkYXRlUmVxdWlyZWRGaWVsZHMob2xkTWFuaWZlc3QsIGVycm9ycyk7XG4gIHZhbGlkYXRlT3B0aW9uRmllbGRzKG9sZE1hbmlmZXN0LCBlcnJvcnMpO1xuICByZXR1cm4gJ3N1Y2Nlc3MnO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/validate.js\n");

/***/ })

})