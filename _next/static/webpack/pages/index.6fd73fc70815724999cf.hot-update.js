webpackHotUpdate_N_E("pages/index",{

/***/ "./utils/validate.js":
/*!***************************!*\
  !*** ./utils/validate.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return validate; });\n/*\n Required fields:\n   name or short_name: string\n   description: string\n   lang: string\n   theme_color: string\n   orientation: string\n   start_url: string\n   icons: Array of Object\n */\n\n/*\n Optional:\n   dir: string\n   scope: string\n   display: string\n   background_color: string\n   related_applications: Array of Object\n   prefer_related_applications: boolean\n   categories: Array of strings\n   screenshots: Array of Object\n   shortcuts: Array of Object\n */\n// validate required fields\nvar validateName = function validateName(manifest, requiredErrors) {};\n\nvar validateDescription = function validateDescription(manifest, requiredErrors) {\n  if ('description' in manifest) {\n    if (typeof manifest['description'] !== 'string') {\n      requiredErrors.description = 'manifest description field type should be string';\n    }\n  } else {\n    requiredErrors.description = 'manifest description field is required';\n  }\n};\n\nvar validateLang = function validateLang(manifest, requiredErrors) {\n  if ('lang' in manifest) {\n    var manifestLang = manifest['lang'];\n\n    if (typeof manifestLang !== 'string') {\n      requiredErrors.lang = 'manifest lang field type should be string!';\n    } else {\n      if (!/^\\w*(-\\w*)*$/.test(manifest.lang)) {}\n    }\n  } else {\n    requiredErrors.lang = 'manifest lang field is required!';\n  }\n};\n\nvar validateThemeColor = function validateThemeColor(manifest, requiredErrors) {};\n\nvar validateOritation = function validateOritation(manifest, requiredErrors) {};\n\nvar validateStartUrl = function validateStartUrl(manifest, requiredErrors) {};\n\nvar validateIcons = function validateIcons(mainfest, requiredErrors) {};\n\nvar validateRequiredFields = function validateRequiredFields(manifest, errors) {\n  var requiredErrors = {};\n  validateName(manifest, requiredErrors);\n  validateDescription(manifest, requiredErrors);\n  validateLang(manifest, requiredErrors);\n  validateThemeColor(manifest, requiredErrors);\n  validateOritation(manifest, requiredErrors);\n  validateStartUrl(manifest, requiredErrors);\n  validateIcons(manifest, requiredErrors);\n}; // validate option fields\n\n\nvar validateDir = function validateDir(manifest, optionsErrors) {};\n\nvar validateScope = function validateScope(manifest, optionsErrors) {};\n\nvar validateDisplay = function validateDisplay(manifest, optionsErrors) {};\n\nvar validateBackgroundColor = function validateBackgroundColor(manifest, optionsErrors) {};\n\nvar validateRelatedApplications = function validateRelatedApplications(manifest, optionsErrors) {};\n\nvar validatePreferRelatedApplications = function validatePreferRelatedApplications(manifest, optionsErrors) {};\n\nvar validateCategories = function validateCategories(manifest, optionsErrors) {};\n\nvar validateScreenshots = function validateScreenshots(manifest, optionsErrors) {};\n\nvar validateShortcuts = function validateShortcuts(manifest, optionsErrors) {};\n\nvar validateOptionFields = function validateOptionFields(manifest) {\n  var optionsErrors = {};\n  validateDir(manifest, optionsErrors);\n  validateScope(manifest, optionsErrors);\n  validateDisplay(manifest, optionsErrors);\n  validateBackgroundColor(manifest, optionsErrors);\n  validateRelatedApplications(manifest, optionsErrors);\n  validatePreferRelatedApplications(manifest, optionsErrors);\n  validateCategories(manifest, optionsErrors);\n  validateScreenshots(manifest, optionsErrors);\n  validateShortcuts(manifest, optionsErrors);\n};\n\nfunction validate(oldManifest) {\n  validateRequiredFields(oldManifest);\n  validateOptionFields(oldManifest);\n  return 'success';\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvdmFsaWRhdGUuanM/ZjdkZiJdLCJuYW1lcyI6WyJ2YWxpZGF0ZU5hbWUiLCJtYW5pZmVzdCIsInJlcXVpcmVkRXJyb3JzIiwidmFsaWRhdGVEZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uIiwidmFsaWRhdGVMYW5nIiwibWFuaWZlc3RMYW5nIiwibGFuZyIsInRlc3QiLCJ2YWxpZGF0ZVRoZW1lQ29sb3IiLCJ2YWxpZGF0ZU9yaXRhdGlvbiIsInZhbGlkYXRlU3RhcnRVcmwiLCJ2YWxpZGF0ZUljb25zIiwibWFpbmZlc3QiLCJ2YWxpZGF0ZVJlcXVpcmVkRmllbGRzIiwiZXJyb3JzIiwidmFsaWRhdGVEaXIiLCJvcHRpb25zRXJyb3JzIiwidmFsaWRhdGVTY29wZSIsInZhbGlkYXRlRGlzcGxheSIsInZhbGlkYXRlQmFja2dyb3VuZENvbG9yIiwidmFsaWRhdGVSZWxhdGVkQXBwbGljYXRpb25zIiwidmFsaWRhdGVQcmVmZXJSZWxhdGVkQXBwbGljYXRpb25zIiwidmFsaWRhdGVDYXRlZ29yaWVzIiwidmFsaWRhdGVTY3JlZW5zaG90cyIsInZhbGlkYXRlU2hvcnRjdXRzIiwidmFsaWRhdGVPcHRpb25GaWVsZHMiLCJ2YWxpZGF0ZSIsIm9sZE1hbmlmZXN0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxRQUFELEVBQVdDLGNBQVgsRUFBOEIsQ0FDbEQsQ0FERDs7QUFHQSxJQUFNQyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQUNGLFFBQUQsRUFBV0MsY0FBWCxFQUE4QjtBQUN4RCxNQUFJLGlCQUFpQkQsUUFBckIsRUFBK0I7QUFDN0Is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LFFBQUQsRUFBV2dCLGFBQVgsRUFBNkIsQ0FFeEQsQ0FGRDs7QUFJQSxJQUFNUSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUN4QixRQUFELEVBQVdnQixhQUFYLEVBQTZCLENBRXRELENBRkQ7O0FBSUEsSUFBTVMsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixDQUFDekIsUUFBRCxFQUFjO0FBQ3pDLE1BQUlnQixhQUFhLEdBQUcsRUFBcEI7QUFDQUQsYUFBVyxDQUFDZixRQUFELEVBQVdnQixhQUFYLENBQVg7QUFDQUMsZUFBYSxDQUFDakIsUUFBRCxFQUFXZ0IsYUFBWCxDQUFiO0FBQ0FFLGlCQUFlLENBQUNsQixRQUFELEVBQVdnQixhQUFYLENBQWY7QUFDQUcseUJBQXVCLENBQUNuQixRQUFELEVBQVdnQixhQUFYLENBQXZCO0FBQ0FJLDZCQUEyQixDQUFDcEIsUUFBRCxFQUFXZ0IsYUFBWCxDQUEzQjtBQUNBSyxtQ0FBaUMsQ0FBQ3JCLFFBQUQsRUFBV2dCLGFBQVgsQ0FBakM7QUFDQU0sb0JBQWtCLENBQUN0QixRQUFELEVBQVdnQixhQUFYLENBQWxCO0FBQ0FPLHFCQUFtQixDQUFDdkIsUUFBRCxFQUFXZ0IsYUFBWCxDQUFuQjtBQUNBUSxtQkFBaUIsQ0FBQ3hCLFFBQUQsRUFBV2dCLGFBQVgsQ0FBakI7QUFDRCxDQVhEOztBQWFlLFNBQVNVLFFBQVQsQ0FBa0JDLFdBQWxCLEVBQStCO0FBQzVDZCx3QkFBc0IsQ0FBQ2MsV0FBRCxDQUF0QjtBQUNBRixzQkFBb0IsQ0FBQ0UsV0FBRCxDQUFwQjtBQUNBLFNBQU8sU0FBUDtBQUNEIiwiZmlsZSI6Ii4vdXRpbHMvdmFsaWRhdGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuIFJlcXVpcmVkIGZpZWxkczpcbiAgIG5hbWUgb3Igc2hvcnRfbmFtZTogc3RyaW5nXG4gICBkZXNjcmlwdGlvbjogc3RyaW5nXG4gICBsYW5nOiBzdHJpbmdcbiAgIHRoZW1lX2NvbG9yOiBzdHJpbmdcbiAgIG9yaWVudGF0aW9uOiBzdHJpbmdcbiAgIHN0YXJ0X3VybDogc3RyaW5nXG4gICBpY29uczogQXJyYXkgb2YgT2JqZWN0XG4gKi9cblxuLypcbiBPcHRpb25hbDpcbiAgIGRpcjogc3RyaW5nXG4gICBzY29wZTogc3RyaW5nXG4gICBkaXNwbGF5OiBzdHJpbmdcbiAgIGJhY2tncm91bmRfY29sb3I6IHN0cmluZ1xuICAgcmVsYXRlZF9hcHBsaWNhdGlvbnM6IEFycmF5IG9mIE9iamVjdFxuICAgcHJlZmVyX3JlbGF0ZWRfYXBwbGljYXRpb25zOiBib29sZWFuXG4gICBjYXRlZ29yaWVzOiBBcnJheSBvZiBzdHJpbmdzXG4gICBzY3JlZW5zaG90czogQXJyYXkgb2YgT2JqZWN0XG4gICBzaG9ydGN1dHM6IEFycmF5IG9mIE9iamVjdFxuICovXG5cbi8vIHZhbGlkYXRlIHJlcXVpcmVkIGZpZWxkc1xuY29uc3QgdmFsaWRhdGVOYW1lID0gKG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycykgPT4ge1xufVxuXG5jb25zdCB2YWxpZGF0ZURlc2NyaXB0aW9uID0gKG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycykgPT4ge1xuICBpZiAoJ2Rlc2NyaXB0aW9uJyBpbiBtYW5pZmVzdCkge1xuICAgIGlmKHR5cGVvZihtYW5pZmVzdFsnZGVzY3JpcHRpb24nXSkgIT09ICdzdHJpbmcnKSB7XG4gICAgICByZXF1aXJlZEVycm9ycy5kZXNjcmlwdGlvbiA9ICdtYW5pZmVzdCBkZXNjcmlwdGlvbiBmaWVsZCB0eXBlIHNob3VsZCBiZSBzdHJpbmcnO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXF1aXJlZEVycm9ycy5kZXNjcmlwdGlvbiA9ICdtYW5pZmVzdCBkZXNjcmlwdGlvbiBmaWVsZCBpcyByZXF1aXJlZCc7XG4gIH1cbn1cblxuY29uc3QgdmFsaWRhdGVMYW5nID0gKG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycykgPT4ge1xuICBpZignbGFuZycgaW4gbWFuaWZlc3QpIHtcbiAgICBjb25zdCBtYW5pZmVzdExhbmcgPSBtYW5pZmVzdFsnbGFuZyddO1xuICAgIGlmKHR5cGVvZihtYW5pZmVzdExhbmcpICE9PSAnc3RyaW5nJykge1xuICAgICAgcmVxdWlyZWRFcnJvcnMubGFuZyA9ICdtYW5pZmVzdCBsYW5nIGZpZWxkIHR5cGUgc2hvdWxkIGJlIHN0cmluZyEnXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmKCEvXlxcdyooLVxcdyopKiQvLnRlc3QobWFuaWZlc3QubGFuZykpIHtcbiAgICAgICAgXG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJlcXVpcmVkRXJyb3JzLmxhbmcgPSAnbWFuaWZlc3QgbGFuZyBmaWVsZCBpcyByZXF1aXJlZCEnXG4gIH1cbn1cblxuY29uc3QgdmFsaWRhdGVUaGVtZUNvbG9yID0gKG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycykgPT4ge1xufVxuXG5jb25zdCB2YWxpZGF0ZU9yaXRhdGlvbiA9IChtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpID0+IHtcbn1cblxuY29uc3QgdmFsaWRhdGVTdGFydFVybCA9IChtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpID0+IHtcbn1cblxuY29uc3QgdmFsaWRhdGVJY29ucyA9IChtYWluZmVzdCwgcmVxdWlyZWRFcnJvcnMpID0+IHtcbn1cblxuY29uc3QgdmFsaWRhdGVSZXF1aXJlZEZpZWxkcyA9IChtYW5pZmVzdCwgZXJyb3JzKSA9PiB7XG4gIGxldCByZXF1aXJlZEVycm9ycyA9IHt9O1xuICB2YWxpZGF0ZU5hbWUobWFuaWZlc3QsIHJlcXVpcmVkRXJyb3JzKTtcbiAgdmFsaWRhdGVEZXNjcmlwdGlvbihtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpO1xuICB2YWxpZGF0ZUxhbmcobWFuaWZlc3QsIHJlcXVpcmVkRXJyb3JzKTtcbiAgdmFsaWRhdGVUaGVtZUNvbG9yKG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycyk7XG4gIHZhbGlkYXRlT3JpdGF0aW9uKG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycyk7XG4gIHZhbGlkYXRlU3RhcnRVcmwobWFuaWZlc3QsIHJlcXVpcmVkRXJyb3JzKTtcbiAgdmFsaWRhdGVJY29ucyhtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpO1xufVxuXG4vLyB2YWxpZGF0ZSBvcHRpb24gZmllbGRzXG5cbmNvbnN0IHZhbGlkYXRlRGlyID0gKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKSA9PiB7XG5cbn1cblxuY29uc3QgdmFsaWRhdGVTY29wZSA9IChtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycykgPT4ge1xuXG59XG5cbmNvbnN0IHZhbGlkYXRlRGlzcGxheSA9IChtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycykgPT4ge1xuXG59XG5cbmNvbnN0IHZhbGlkYXRlQmFja2dyb3VuZENvbG9yID0gKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKSA9PiB7XG5cbn1cblxuY29uc3QgdmFsaWRhdGVSZWxhdGVkQXBwbGljYXRpb25zID0gKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKSA9PiB7XG5cbn1cblxuY29uc3QgdmFsaWRhdGVQcmVmZXJSZWxhdGVkQXBwbGljYXRpb25zID0gKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKSA9PiB7XG5cbn1cblxuY29uc3QgdmFsaWRhdGVDYXRlZ29yaWVzID0gKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKSA9PiB7XG5cbn1cblxuY29uc3QgdmFsaWRhdGVTY3JlZW5zaG90cyA9IChtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycykgPT4ge1xuXG59XG5cbmNvbnN0IHZhbGlkYXRlU2hvcnRjdXRzID0gKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKSA9PiB7XG5cbn1cblxuY29uc3QgdmFsaWRhdGVPcHRpb25GaWVsZHMgPSAobWFuaWZlc3QpID0+IHtcbiAgbGV0IG9wdGlvbnNFcnJvcnMgPSB7fTtcbiAgdmFsaWRhdGVEaXIobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpO1xuICB2YWxpZGF0ZVNjb3BlKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKTtcbiAgdmFsaWRhdGVEaXNwbGF5KG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKTtcbiAgdmFsaWRhdGVCYWNrZ3JvdW5kQ29sb3IobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpO1xuICB2YWxpZGF0ZVJlbGF0ZWRBcHBsaWNhdGlvbnMobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpO1xuICB2YWxpZGF0ZVByZWZlclJlbGF0ZWRBcHBsaWNhdGlvbnMobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpO1xuICB2YWxpZGF0ZUNhdGVnb3JpZXMobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpO1xuICB2YWxpZGF0ZVNjcmVlbnNob3RzKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKTtcbiAgdmFsaWRhdGVTaG9ydGN1dHMobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2YWxpZGF0ZShvbGRNYW5pZmVzdCkge1xuICB2YWxpZGF0ZVJlcXVpcmVkRmllbGRzKG9sZE1hbmlmZXN0KTtcbiAgdmFsaWRhdGVPcHRpb25GaWVsZHMob2xkTWFuaWZlc3QpO1xuICByZXR1cm4gJ3N1Y2Nlc3MnO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/validate.js\n");

/***/ })

})