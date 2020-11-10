webpackHotUpdate_N_E("pages/index",{

/***/ "./utils/validate.js":
/*!***************************!*\
  !*** ./utils/validate.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return validate; });\n/*\n Required fields:\n   name or short_name: string\n   description: string\n   lang: string\n   theme_color: string\n   orientation: string\n   start_url: string\n   icons: Array of Object\n */\n\n/*\n Optional:\n   dir: string\n   scope: string\n   display: string\n   background_color: string\n   related_applications: Array of Object\n   prefer_related_applications: boolean\n   categories: Array of strings\n   screenshots: Array of Object\n   shortcuts: Array of Object\n */\n// validate required fields\nvar validateName = function validateName(manifest, requiredErrors) {\n  if ('name' in manifest) {\n    if (typeof manifest['name'] !== 'string') {\n      requiredErrors.description = 'manifest name field type should be string';\n    }\n  } else {\n    requiredErrors.description = 'manifest name field is required';\n  }\n};\n\nvar validateDescription = function validateDescription(manifest, requiredErrors) {\n  if ('description' in manifest) {\n    if (typeof manifest['description'] !== 'string') {\n      requiredErrors.description = 'manifest description field type should be string';\n    }\n  } else {\n    requiredErrors.description = 'manifest description field is required';\n  }\n};\n\nvar validateLang = function validateLang(manifest, requiredErrors) {\n  if ('lang' in manifest) {\n    var manifestLang = manifest['lang'];\n\n    if (typeof manifestLang !== 'string') {\n      requiredErrors.lang = 'manifest lang field type should be string!';\n    } else {\n      if (!/^\\w*(-\\w*)*$/.test(manifestLang)) {\n        requiredErrors.lang = 'manifest lang field type should be correct format!';\n      }\n    }\n  } else {\n    requiredErrors.lang = 'manifest lang field is required!';\n  }\n};\n\nvar validateThemeColor = function validateThemeColor(manifest, requiredErrors) {\n  if ('theme_color' in manifest) {\n    if (typeof manifest['theme_color'] !== 'string') {\n      requiredErrors.description = 'manifest theme_color field type should be string';\n    }\n  } else {\n    requiredErrors.description = 'manifest theme_color field is required';\n  }\n};\n\nvar validateOritation = function validateOritation(manifest, requiredErrors) {\n  var ENUM_ORIENTATION = ['any', 'natural', 'landscape', 'landscape-primary', 'landscape-secondary', 'portrait', 'portrait-primary', 'portrait-secondary'];\n\n  if ('orientation' in manifest) {\n    if (typeof manifest['orientation'] !== 'string') {\n      requiredErrors.description = 'manifest orientation field type should be string';\n    } else {}\n  } else {\n    requiredErrors.description = 'manifest orientation field is required';\n  }\n};\n\nvar validateStartUrl = function validateStartUrl(manifest, requiredErrors) {};\n\nvar validateIcons = function validateIcons(mainfest, requiredErrors) {};\n\nvar validateRequiredFields = function validateRequiredFields(manifest, errors) {\n  var requiredErrors = {};\n  validateName(manifest, requiredErrors);\n  validateDescription(manifest, requiredErrors);\n  validateLang(manifest, requiredErrors);\n  validateThemeColor(manifest, requiredErrors);\n  validateOritation(manifest, requiredErrors);\n  validateStartUrl(manifest, requiredErrors);\n  validateIcons(manifest, requiredErrors);\n}; // validate option fields\n\n\nvar validateDir = function validateDir(manifest, optionsErrors) {};\n\nvar validateScope = function validateScope(manifest, optionsErrors) {};\n\nvar validateDisplay = function validateDisplay(manifest, optionsErrors) {};\n\nvar validateBackgroundColor = function validateBackgroundColor(manifest, optionsErrors) {};\n\nvar validateRelatedApplications = function validateRelatedApplications(manifest, optionsErrors) {};\n\nvar validatePreferRelatedApplications = function validatePreferRelatedApplications(manifest, optionsErrors) {};\n\nvar validateCategories = function validateCategories(manifest, optionsErrors) {};\n\nvar validateScreenshots = function validateScreenshots(manifest, optionsErrors) {};\n\nvar validateShortcuts = function validateShortcuts(manifest, optionsErrors) {};\n\nvar validateOptionFields = function validateOptionFields(manifest) {\n  var optionsErrors = {};\n  validateDir(manifest, optionsErrors);\n  validateScope(manifest, optionsErrors);\n  validateDisplay(manifest, optionsErrors);\n  validateBackgroundColor(manifest, optionsErrors);\n  validateRelatedApplications(manifest, optionsErrors);\n  validatePreferRelatedApplications(manifest, optionsErrors);\n  validateCategories(manifest, optionsErrors);\n  validateScreenshots(manifest, optionsErrors);\n  validateShortcuts(manifest, optionsErrors);\n};\n\nfunction validate(oldManifest) {\n  validateRequiredFields(oldManifest);\n  validateOptionFields(oldManifest);\n  return 'success';\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvdmFsaWRhdGUuanM/ZjdkZiJdLCJuYW1lcyI6WyJ2YWxpZGF0ZU5hbWUiLCJtYW5pZmVzdCIsInJlcXVpcmVkRXJyb3JzIiwiZGVzY3JpcHRpb24iLCJ2YWxpZGF0ZURlc2NyaXB0aW9uIiwidmFsaWRhdGVMYW5nIiwibWFuaWZlc3RMYW5nIiwibGFuZyIsInRlc3QiLCJ2YWxpZGF0ZVRoZW1lQ29sb3IiLCJ2YWxpZGF0ZU9yaXRhdGlvbiIsIkVOVU1fT1JJRU5UQVRJT04iLCJ2YWxpZGF0ZVN0YXJ0VXJsIiwidmFsaWRhdGVJY29ucyIsIm1haW5mZXN0IiwidmFsaWRhdGVSZXF1aXJlZEZpZWxkcyIsImVycm9ycyIsInZhbGlkYXRlRGlyIiwib3B0aW9uc0Vycm9ycyIsInZhbGlkYXRlU2NvcGUiLCJ2YWxpZGF0ZURpc3BsYXkiLCJ2YWxpZGF0ZUJhY2tncm91bmRDb2xvciIsInZhbGlkYXRlUmVsYXRlZEFwcGxpY2F0aW9ucyIsInZhbGlkYXRlUHJlZmVyUmVsYXRlZEFwcGxpY2F0aW9ucyIsInZhbGlkYXRlQ2F0ZWdvcmllcyIsInZhbGlkYXRlU2NyZWVuc2hvdHMiLCJ2YWxpZGF0ZVNob3J0Y3V0cyIsInZhbGlkYXRlT3B0aW9uRmllbGRzIiwidmFsaWRhdGUiLCJvbGRNYW5pZmVzdCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsUUFBRCxFQUFXQyxjQUFYLEVBQThCO0FBQ2pELE1BQUksVUFBVUQsUUFBZCxFQUF3QjtBQUN0QixRQUFHLE9BQU9BLFFBQVEsQ0FBQyxNQUFELENBQWYsS0FBNkIsUUFBaEMsRUFBMEM7QUFDeENDLG9CQUFj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RCxFQUFjO0FBQ3pDLE1BQUlpQixhQUFhLEdBQUcsRUFBcEI7QUFDQUQsYUFBVyxDQUFDaEIsUUFBRCxFQUFXaUIsYUFBWCxDQUFYO0FBQ0FDLGVBQWEsQ0FBQ2xCLFFBQUQsRUFBV2lCLGFBQVgsQ0FBYjtBQUNBRSxpQkFBZSxDQUFDbkIsUUFBRCxFQUFXaUIsYUFBWCxDQUFmO0FBQ0FHLHlCQUF1QixDQUFDcEIsUUFBRCxFQUFXaUIsYUFBWCxDQUF2QjtBQUNBSSw2QkFBMkIsQ0FBQ3JCLFFBQUQsRUFBV2lCLGFBQVgsQ0FBM0I7QUFDQUssbUNBQWlDLENBQUN0QixRQUFELEVBQVdpQixhQUFYLENBQWpDO0FBQ0FNLG9CQUFrQixDQUFDdkIsUUFBRCxFQUFXaUIsYUFBWCxDQUFsQjtBQUNBTyxxQkFBbUIsQ0FBQ3hCLFFBQUQsRUFBV2lCLGFBQVgsQ0FBbkI7QUFDQVEsbUJBQWlCLENBQUN6QixRQUFELEVBQVdpQixhQUFYLENBQWpCO0FBQ0QsQ0FYRDs7QUFhZSxTQUFTVSxRQUFULENBQWtCQyxXQUFsQixFQUErQjtBQUM1Q2Qsd0JBQXNCLENBQUNjLFdBQUQsQ0FBdEI7QUFDQUYsc0JBQW9CLENBQUNFLFdBQUQsQ0FBcEI7QUFDQSxTQUFPLFNBQVA7QUFDRCIsImZpbGUiOiIuL3V0aWxzL3ZhbGlkYXRlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiBSZXF1aXJlZCBmaWVsZHM6XG4gICBuYW1lIG9yIHNob3J0X25hbWU6IHN0cmluZ1xuICAgZGVzY3JpcHRpb246IHN0cmluZ1xuICAgbGFuZzogc3RyaW5nXG4gICB0aGVtZV9jb2xvcjogc3RyaW5nXG4gICBvcmllbnRhdGlvbjogc3RyaW5nXG4gICBzdGFydF91cmw6IHN0cmluZ1xuICAgaWNvbnM6IEFycmF5IG9mIE9iamVjdFxuICovXG5cbi8qXG4gT3B0aW9uYWw6XG4gICBkaXI6IHN0cmluZ1xuICAgc2NvcGU6IHN0cmluZ1xuICAgZGlzcGxheTogc3RyaW5nXG4gICBiYWNrZ3JvdW5kX2NvbG9yOiBzdHJpbmdcbiAgIHJlbGF0ZWRfYXBwbGljYXRpb25zOiBBcnJheSBvZiBPYmplY3RcbiAgIHByZWZlcl9yZWxhdGVkX2FwcGxpY2F0aW9uczogYm9vbGVhblxuICAgY2F0ZWdvcmllczogQXJyYXkgb2Ygc3RyaW5nc1xuICAgc2NyZWVuc2hvdHM6IEFycmF5IG9mIE9iamVjdFxuICAgc2hvcnRjdXRzOiBBcnJheSBvZiBPYmplY3RcbiAqL1xuXG4vLyB2YWxpZGF0ZSByZXF1aXJlZCBmaWVsZHNcbmNvbnN0IHZhbGlkYXRlTmFtZSA9IChtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpID0+IHtcbiAgaWYgKCduYW1lJyBpbiBtYW5pZmVzdCkge1xuICAgIGlmKHR5cGVvZihtYW5pZmVzdFsnbmFtZSddKSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHJlcXVpcmVkRXJyb3JzLmRlc2NyaXB0aW9uID0gJ21hbmlmZXN0IG5hbWUgZmllbGQgdHlwZSBzaG91bGQgYmUgc3RyaW5nJztcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmVxdWlyZWRFcnJvcnMuZGVzY3JpcHRpb24gPSAnbWFuaWZlc3QgbmFtZSBmaWVsZCBpcyByZXF1aXJlZCc7XG4gIH1cbn1cblxuY29uc3QgdmFsaWRhdGVEZXNjcmlwdGlvbiA9IChtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpID0+IHtcbiAgaWYgKCdkZXNjcmlwdGlvbicgaW4gbWFuaWZlc3QpIHtcbiAgICBpZih0eXBlb2YobWFuaWZlc3RbJ2Rlc2NyaXB0aW9uJ10pICE9PSAnc3RyaW5nJykge1xuICAgICAgcmVxdWlyZWRFcnJvcnMuZGVzY3JpcHRpb24gPSAnbWFuaWZlc3QgZGVzY3JpcHRpb24gZmllbGQgdHlwZSBzaG91bGQgYmUgc3RyaW5nJztcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmVxdWlyZWRFcnJvcnMuZGVzY3JpcHRpb24gPSAnbWFuaWZlc3QgZGVzY3JpcHRpb24gZmllbGQgaXMgcmVxdWlyZWQnO1xuICB9XG59XG5cbmNvbnN0IHZhbGlkYXRlTGFuZyA9IChtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpID0+IHtcbiAgaWYoJ2xhbmcnIGluIG1hbmlmZXN0KSB7XG4gICAgY29uc3QgbWFuaWZlc3RMYW5nID0gbWFuaWZlc3RbJ2xhbmcnXTtcbiAgICBpZih0eXBlb2YobWFuaWZlc3RMYW5nKSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHJlcXVpcmVkRXJyb3JzLmxhbmcgPSAnbWFuaWZlc3QgbGFuZyBmaWVsZCB0eXBlIHNob3VsZCBiZSBzdHJpbmchJztcbiAgICB9IGVsc2Uge1xuICAgICAgaWYoIS9eXFx3KigtXFx3KikqJC8udGVzdChtYW5pZmVzdExhbmcpKSB7XG4gICAgICAgIHJlcXVpcmVkRXJyb3JzLmxhbmcgPSAnbWFuaWZlc3QgbGFuZyBmaWVsZCB0eXBlIHNob3VsZCBiZSBjb3JyZWN0IGZvcm1hdCEnO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXF1aXJlZEVycm9ycy5sYW5nID0gJ21hbmlmZXN0IGxhbmcgZmllbGQgaXMgcmVxdWlyZWQhJ1xuICB9XG59XG5cbmNvbnN0IHZhbGlkYXRlVGhlbWVDb2xvciA9IChtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpID0+IHtcbiAgaWYgKCd0aGVtZV9jb2xvcicgaW4gbWFuaWZlc3QpIHtcbiAgICBpZih0eXBlb2YobWFuaWZlc3RbJ3RoZW1lX2NvbG9yJ10pICE9PSAnc3RyaW5nJykge1xuICAgICAgcmVxdWlyZWRFcnJvcnMuZGVzY3JpcHRpb24gPSAnbWFuaWZlc3QgdGhlbWVfY29sb3IgZmllbGQgdHlwZSBzaG91bGQgYmUgc3RyaW5nJztcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmVxdWlyZWRFcnJvcnMuZGVzY3JpcHRpb24gPSAnbWFuaWZlc3QgdGhlbWVfY29sb3IgZmllbGQgaXMgcmVxdWlyZWQnO1xuICB9XG59XG5cbmNvbnN0IHZhbGlkYXRlT3JpdGF0aW9uID0gKG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycykgPT4ge1xuICBjb25zdCBFTlVNX09SSUVOVEFUSU9OID0gW1xuICAgICdhbnknLFxuICAgICduYXR1cmFsJyxcbiAgICAnbGFuZHNjYXBlJyxcbiAgICAnbGFuZHNjYXBlLXByaW1hcnknLFxuICAgICdsYW5kc2NhcGUtc2Vjb25kYXJ5JyxcbiAgICAncG9ydHJhaXQnLFxuICAgICdwb3J0cmFpdC1wcmltYXJ5JyxcbiAgICAncG9ydHJhaXQtc2Vjb25kYXJ5J1xuICBdO1xuICBpZiAoJ29yaWVudGF0aW9uJyBpbiBtYW5pZmVzdCkge1xuICAgIGlmKHR5cGVvZihtYW5pZmVzdFsnb3JpZW50YXRpb24nXSkgIT09ICdzdHJpbmcnKSB7XG4gICAgICByZXF1aXJlZEVycm9ycy5kZXNjcmlwdGlvbiA9ICdtYW5pZmVzdCBvcmllbnRhdGlvbiBmaWVsZCB0eXBlIHNob3VsZCBiZSBzdHJpbmcnO1xuICAgIH0gZWxzZSB7XG4gICAgICBcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmVxdWlyZWRFcnJvcnMuZGVzY3JpcHRpb24gPSAnbWFuaWZlc3Qgb3JpZW50YXRpb24gZmllbGQgaXMgcmVxdWlyZWQnO1xuICB9XG59XG5cbmNvbnN0IHZhbGlkYXRlU3RhcnRVcmwgPSAobWFuaWZlc3QsIHJlcXVpcmVkRXJyb3JzKSA9PiB7XG59XG5cbmNvbnN0IHZhbGlkYXRlSWNvbnMgPSAobWFpbmZlc3QsIHJlcXVpcmVkRXJyb3JzKSA9PiB7XG59XG5cbmNvbnN0IHZhbGlkYXRlUmVxdWlyZWRGaWVsZHMgPSAobWFuaWZlc3QsIGVycm9ycykgPT4ge1xuICBsZXQgcmVxdWlyZWRFcnJvcnMgPSB7fTtcbiAgdmFsaWRhdGVOYW1lKG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycyk7XG4gIHZhbGlkYXRlRGVzY3JpcHRpb24obWFuaWZlc3QsIHJlcXVpcmVkRXJyb3JzKTtcbiAgdmFsaWRhdGVMYW5nKG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycyk7XG4gIHZhbGlkYXRlVGhlbWVDb2xvcihtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpO1xuICB2YWxpZGF0ZU9yaXRhdGlvbihtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpO1xuICB2YWxpZGF0ZVN0YXJ0VXJsKG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycyk7XG4gIHZhbGlkYXRlSWNvbnMobWFuaWZlc3QsIHJlcXVpcmVkRXJyb3JzKTtcbn1cblxuLy8gdmFsaWRhdGUgb3B0aW9uIGZpZWxkc1xuXG5jb25zdCB2YWxpZGF0ZURpciA9IChtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycykgPT4ge1xuXG59XG5cbmNvbnN0IHZhbGlkYXRlU2NvcGUgPSAobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpID0+IHtcblxufVxuXG5jb25zdCB2YWxpZGF0ZURpc3BsYXkgPSAobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpID0+IHtcblxufVxuXG5jb25zdCB2YWxpZGF0ZUJhY2tncm91bmRDb2xvciA9IChtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycykgPT4ge1xuXG59XG5cbmNvbnN0IHZhbGlkYXRlUmVsYXRlZEFwcGxpY2F0aW9ucyA9IChtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycykgPT4ge1xuXG59XG5cbmNvbnN0IHZhbGlkYXRlUHJlZmVyUmVsYXRlZEFwcGxpY2F0aW9ucyA9IChtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycykgPT4ge1xuXG59XG5cbmNvbnN0IHZhbGlkYXRlQ2F0ZWdvcmllcyA9IChtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycykgPT4ge1xuXG59XG5cbmNvbnN0IHZhbGlkYXRlU2NyZWVuc2hvdHMgPSAobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpID0+IHtcblxufVxuXG5jb25zdCB2YWxpZGF0ZVNob3J0Y3V0cyA9IChtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycykgPT4ge1xuXG59XG5cbmNvbnN0IHZhbGlkYXRlT3B0aW9uRmllbGRzID0gKG1hbmlmZXN0KSA9PiB7XG4gIGxldCBvcHRpb25zRXJyb3JzID0ge307XG4gIHZhbGlkYXRlRGlyKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKTtcbiAgdmFsaWRhdGVTY29wZShtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycyk7XG4gIHZhbGlkYXRlRGlzcGxheShtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycyk7XG4gIHZhbGlkYXRlQmFja2dyb3VuZENvbG9yKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKTtcbiAgdmFsaWRhdGVSZWxhdGVkQXBwbGljYXRpb25zKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKTtcbiAgdmFsaWRhdGVQcmVmZXJSZWxhdGVkQXBwbGljYXRpb25zKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKTtcbiAgdmFsaWRhdGVDYXRlZ29yaWVzKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKTtcbiAgdmFsaWRhdGVTY3JlZW5zaG90cyhtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycyk7XG4gIHZhbGlkYXRlU2hvcnRjdXRzKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmFsaWRhdGUob2xkTWFuaWZlc3QpIHtcbiAgdmFsaWRhdGVSZXF1aXJlZEZpZWxkcyhvbGRNYW5pZmVzdCk7XG4gIHZhbGlkYXRlT3B0aW9uRmllbGRzKG9sZE1hbmlmZXN0KTtcbiAgcmV0dXJuICdzdWNjZXNzJztcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/validate.js\n");

/***/ })

})