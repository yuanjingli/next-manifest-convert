webpackHotUpdate_N_E("pages/index",{

/***/ "./utils/validate.js":
/*!***************************!*\
  !*** ./utils/validate.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return validate; });\n/*\n Required fields:\n   name or short_name: string\n   description: string\n   lang: string\n   theme_color: string\n   orientation: string\n   start_url: string\n   icons: Array of Object\n */\n\n/*\n Optional:\n   dir: string\n   scope: string\n   display: string\n   background_color: string\n   related_applications: Array of Object\n   prefer_related_applications: boolean\n   categories: Array of strings\n   screenshots: Array of Object\n   shortcuts: Array of Object\n */\n// validate required fields\nvar validateName = function validateName(manifest, requiredErrors) {\n  if ('name' in manifest) {\n    if (typeof manifest['name'] !== 'string') {\n      requiredErrors.description = 'manifest name field type should be string';\n    }\n  } else {\n    requiredErrors.description = 'manifest name field is required';\n  }\n};\n\nvar validateDescription = function validateDescription(manifest, requiredErrors) {\n  if ('description' in manifest) {\n    if (typeof manifest['description'] !== 'string') {\n      requiredErrors.description = 'manifest description field type should be string';\n    }\n  } else {\n    requiredErrors.description = 'manifest description field is required';\n  }\n};\n\nvar validateLang = function validateLang(manifest, requiredErrors) {\n  if ('lang' in manifest) {\n    var manifestLang = manifest['lang'];\n\n    if (typeof manifestLang !== 'string') {\n      requiredErrors.lang = 'manifest lang field type should be string!';\n    } else {\n      if (!/^\\w*(-\\w*)*$/.test(manifestLang)) {\n        requiredErrors.lang = 'manifest lang field type should be correct format!';\n      }\n    }\n  } else {\n    requiredErrors.lang = 'manifest lang field is required!';\n  }\n};\n\nvar validateThemeColor = function validateThemeColor(manifest, requiredErrors) {\n  if ('theme_color' in manifest) {\n    if (typeof manifest['theme_color'] !== 'string') {\n      requiredErrors.description = 'manifest theme_color field type should be string';\n    }\n  } else {\n    requiredErrors.description = 'manifest theme_color field is required';\n  }\n};\n\nvar validateOritation = function validateOritation(manifest, requiredErrors) {\n  var ENUM_ORIENTATION = ['any', 'natural', 'landscape', 'landscape-primary', 'landscape-secondary', 'portrait', 'portrait-primary', 'portrait-secondary'];\n\n  if ('orientation' in manifest) {\n    if (typeof manifest['orientation'] !== 'string') {\n      requiredErrors.description = 'manifest orientation field type should be string';\n    } else {\n      var orientation = manifest['orientation'];\n\n      if (!ENUM_ORIENTATION.includes(orientation)) {\n        requiredErrors.description = 'manifest orientation field value not correct';\n      }\n    }\n  } else {\n    requiredErrors.description = 'manifest orientation field is required';\n  }\n};\n\nvar validateStartUrl = function validateStartUrl(manifest, requiredErrors) {\n  if ('start_url' in manifest) {\n    if (typeof manifest['start_url'] !== 'string') {\n      requiredErrors.description = 'manifest name field type should be string';\n    }\n  } else {\n    requiredErrors.description = 'manifest name field is required';\n  }\n};\n\nvar validateIcons = function validateIcons(mainfest, requiredErrors) {};\n\nvar validateRequiredFields = function validateRequiredFields(manifest, errors) {\n  var requiredErrors = {};\n  validateName(manifest, requiredErrors);\n  validateDescription(manifest, requiredErrors);\n  validateLang(manifest, requiredErrors);\n  validateThemeColor(manifest, requiredErrors);\n  validateOritation(manifest, requiredErrors);\n  validateStartUrl(manifest, requiredErrors);\n  validateIcons(manifest, requiredErrors);\n}; // validate option fields\n\n\nvar validateDir = function validateDir(manifest, optionsErrors) {};\n\nvar validateScope = function validateScope(manifest, optionsErrors) {};\n\nvar validateDisplay = function validateDisplay(manifest, optionsErrors) {};\n\nvar validateBackgroundColor = function validateBackgroundColor(manifest, optionsErrors) {};\n\nvar validateRelatedApplications = function validateRelatedApplications(manifest, optionsErrors) {};\n\nvar validatePreferRelatedApplications = function validatePreferRelatedApplications(manifest, optionsErrors) {};\n\nvar validateCategories = function validateCategories(manifest, optionsErrors) {};\n\nvar validateScreenshots = function validateScreenshots(manifest, optionsErrors) {};\n\nvar validateShortcuts = function validateShortcuts(manifest, optionsErrors) {};\n\nvar validateOptionFields = function validateOptionFields(manifest) {\n  var optionsErrors = {};\n  validateDir(manifest, optionsErrors);\n  validateScope(manifest, optionsErrors);\n  validateDisplay(manifest, optionsErrors);\n  validateBackgroundColor(manifest, optionsErrors);\n  validateRelatedApplications(manifest, optionsErrors);\n  validatePreferRelatedApplications(manifest, optionsErrors);\n  validateCategories(manifest, optionsErrors);\n  validateScreenshots(manifest, optionsErrors);\n  validateShortcuts(manifest, optionsErrors);\n};\n\nfunction validate(oldManifest) {\n  validateRequiredFields(oldManifest);\n  validateOptionFields(oldManifest);\n  return 'success';\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvdmFsaWRhdGUuanM/ZjdkZiJdLCJuYW1lcyI6WyJ2YWxpZGF0ZU5hbWUiLCJtYW5pZmVzdCIsInJlcXVpcmVkRXJyb3JzIiwiZGVzY3JpcHRpb24iLCJ2YWxpZGF0ZURlc2NyaXB0aW9uIiwidmFsaWRhdGVMYW5nIiwibWFuaWZlc3RMYW5nIiwibGFuZyIsInRlc3QiLCJ2YWxpZGF0ZVRoZW1lQ29sb3IiLCJ2YWxpZGF0ZU9yaXRhdGlvbiIsIkVOVU1fT1JJRU5UQVRJT04iLCJvcmllbnRhdGlvbiIsImluY2x1ZGVzIiwidmFsaWRhdGVTdGFydFVybCIsInZhbGlkYXRlSWNvbnMiLCJtYWluZmVzdCIsInZhbGlkYXRlUmVxdWlyZWRGaWVsZHMiLCJlcnJvcnMiLCJ2YWxpZGF0ZURpciIsIm9wdGlvbnNFcnJvcnMiLCJ2YWxpZGF0ZVNjb3BlIiwidmFsaWRhdGVEaXNwbGF5IiwidmFsaWRhdGVCYWNrZ3JvdW5kQ29sb3IiLCJ2YWxpZGF0ZVJlbGF0ZWRBcHBsaWNhdGlvbnMiLCJ2YWxpZGF0ZVByZWZlclJlbGF0ZWRBcHBsaWNhdGlvbnMiLCJ2YWxpZGF0ZUNhdGVnb3JpZXMiLCJ2YWxpZGF0ZVNjcmVlbnNob3RzIiwidmFsaWRhdGVTaG9ydGN1dHMiLCJ2YWxpZGF0ZU9wdGlvbkZpZWxkcyIsInZhbGlkYXRlIiwib2xkTWFuaWZlc3QiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLFFBQUQsRUFBV0MsY0FBWCxFQUE4QjtBQUNqRCxNQUFJLFVBQVVELFFBQWQsRUFBd0I7QUFDdEIsUUFBRyxPQUFPQSxRQUFRLENBQUMsTUFBRCxDQUFmLEtBQTZC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aWxlIjoiLi91dGlscy92YWxpZGF0ZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gUmVxdWlyZWQgZmllbGRzOlxuICAgbmFtZSBvciBzaG9ydF9uYW1lOiBzdHJpbmdcbiAgIGRlc2NyaXB0aW9uOiBzdHJpbmdcbiAgIGxhbmc6IHN0cmluZ1xuICAgdGhlbWVfY29sb3I6IHN0cmluZ1xuICAgb3JpZW50YXRpb246IHN0cmluZ1xuICAgc3RhcnRfdXJsOiBzdHJpbmdcbiAgIGljb25zOiBBcnJheSBvZiBPYmplY3RcbiAqL1xuXG4vKlxuIE9wdGlvbmFsOlxuICAgZGlyOiBzdHJpbmdcbiAgIHNjb3BlOiBzdHJpbmdcbiAgIGRpc3BsYXk6IHN0cmluZ1xuICAgYmFja2dyb3VuZF9jb2xvcjogc3RyaW5nXG4gICByZWxhdGVkX2FwcGxpY2F0aW9uczogQXJyYXkgb2YgT2JqZWN0XG4gICBwcmVmZXJfcmVsYXRlZF9hcHBsaWNhdGlvbnM6IGJvb2xlYW5cbiAgIGNhdGVnb3JpZXM6IEFycmF5IG9mIHN0cmluZ3NcbiAgIHNjcmVlbnNob3RzOiBBcnJheSBvZiBPYmplY3RcbiAgIHNob3J0Y3V0czogQXJyYXkgb2YgT2JqZWN0XG4gKi9cblxuLy8gdmFsaWRhdGUgcmVxdWlyZWQgZmllbGRzXG5jb25zdCB2YWxpZGF0ZU5hbWUgPSAobWFuaWZlc3QsIHJlcXVpcmVkRXJyb3JzKSA9PiB7XG4gIGlmICgnbmFtZScgaW4gbWFuaWZlc3QpIHtcbiAgICBpZih0eXBlb2YobWFuaWZlc3RbJ25hbWUnXSkgIT09ICdzdHJpbmcnKSB7XG4gICAgICByZXF1aXJlZEVycm9ycy5kZXNjcmlwdGlvbiA9ICdtYW5pZmVzdCBuYW1lIGZpZWxkIHR5cGUgc2hvdWxkIGJlIHN0cmluZyc7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJlcXVpcmVkRXJyb3JzLmRlc2NyaXB0aW9uID0gJ21hbmlmZXN0IG5hbWUgZmllbGQgaXMgcmVxdWlyZWQnO1xuICB9XG59XG5cbmNvbnN0IHZhbGlkYXRlRGVzY3JpcHRpb24gPSAobWFuaWZlc3QsIHJlcXVpcmVkRXJyb3JzKSA9PiB7XG4gIGlmICgnZGVzY3JpcHRpb24nIGluIG1hbmlmZXN0KSB7XG4gICAgaWYodHlwZW9mKG1hbmlmZXN0WydkZXNjcmlwdGlvbiddKSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHJlcXVpcmVkRXJyb3JzLmRlc2NyaXB0aW9uID0gJ21hbmlmZXN0IGRlc2NyaXB0aW9uIGZpZWxkIHR5cGUgc2hvdWxkIGJlIHN0cmluZyc7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJlcXVpcmVkRXJyb3JzLmRlc2NyaXB0aW9uID0gJ21hbmlmZXN0IGRlc2NyaXB0aW9uIGZpZWxkIGlzIHJlcXVpcmVkJztcbiAgfVxufVxuXG5jb25zdCB2YWxpZGF0ZUxhbmcgPSAobWFuaWZlc3QsIHJlcXVpcmVkRXJyb3JzKSA9PiB7XG4gIGlmKCdsYW5nJyBpbiBtYW5pZmVzdCkge1xuICAgIGNvbnN0IG1hbmlmZXN0TGFuZyA9IG1hbmlmZXN0WydsYW5nJ107XG4gICAgaWYodHlwZW9mKG1hbmlmZXN0TGFuZykgIT09ICdzdHJpbmcnKSB7XG4gICAgICByZXF1aXJlZEVycm9ycy5sYW5nID0gJ21hbmlmZXN0IGxhbmcgZmllbGQgdHlwZSBzaG91bGQgYmUgc3RyaW5nISc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmKCEvXlxcdyooLVxcdyopKiQvLnRlc3QobWFuaWZlc3RMYW5nKSkge1xuICAgICAgICByZXF1aXJlZEVycm9ycy5sYW5nID0gJ21hbmlmZXN0IGxhbmcgZmllbGQgdHlwZSBzaG91bGQgYmUgY29ycmVjdCBmb3JtYXQhJztcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmVxdWlyZWRFcnJvcnMubGFuZyA9ICdtYW5pZmVzdCBsYW5nIGZpZWxkIGlzIHJlcXVpcmVkISdcbiAgfVxufVxuXG5jb25zdCB2YWxpZGF0ZVRoZW1lQ29sb3IgPSAobWFuaWZlc3QsIHJlcXVpcmVkRXJyb3JzKSA9PiB7XG4gIGlmICgndGhlbWVfY29sb3InIGluIG1hbmlmZXN0KSB7XG4gICAgaWYodHlwZW9mKG1hbmlmZXN0Wyd0aGVtZV9jb2xvciddKSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHJlcXVpcmVkRXJyb3JzLmRlc2NyaXB0aW9uID0gJ21hbmlmZXN0IHRoZW1lX2NvbG9yIGZpZWxkIHR5cGUgc2hvdWxkIGJlIHN0cmluZyc7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJlcXVpcmVkRXJyb3JzLmRlc2NyaXB0aW9uID0gJ21hbmlmZXN0IHRoZW1lX2NvbG9yIGZpZWxkIGlzIHJlcXVpcmVkJztcbiAgfVxufVxuXG5jb25zdCB2YWxpZGF0ZU9yaXRhdGlvbiA9IChtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpID0+IHtcbiAgY29uc3QgRU5VTV9PUklFTlRBVElPTiA9IFtcbiAgICAnYW55JyxcbiAgICAnbmF0dXJhbCcsXG4gICAgJ2xhbmRzY2FwZScsXG4gICAgJ2xhbmRzY2FwZS1wcmltYXJ5JyxcbiAgICAnbGFuZHNjYXBlLXNlY29uZGFyeScsXG4gICAgJ3BvcnRyYWl0JyxcbiAgICAncG9ydHJhaXQtcHJpbWFyeScsXG4gICAgJ3BvcnRyYWl0LXNlY29uZGFyeSdcbiAgXTtcbiAgaWYgKCdvcmllbnRhdGlvbicgaW4gbWFuaWZlc3QpIHtcbiAgICBpZih0eXBlb2YobWFuaWZlc3RbJ29yaWVudGF0aW9uJ10pICE9PSAnc3RyaW5nJykge1xuICAgICAgcmVxdWlyZWRFcnJvcnMuZGVzY3JpcHRpb24gPSAnbWFuaWZlc3Qgb3JpZW50YXRpb24gZmllbGQgdHlwZSBzaG91bGQgYmUgc3RyaW5nJztcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgb3JpZW50YXRpb24gPSBtYW5pZmVzdFsnb3JpZW50YXRpb24nXTtcbiAgICAgIGlmKCFFTlVNX09SSUVOVEFUSU9OLmluY2x1ZGVzKG9yaWVudGF0aW9uKSkge1xuICAgICAgICByZXF1aXJlZEVycm9ycy5kZXNjcmlwdGlvbiA9ICdtYW5pZmVzdCBvcmllbnRhdGlvbiBmaWVsZCB2YWx1ZSBub3QgY29ycmVjdCc7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJlcXVpcmVkRXJyb3JzLmRlc2NyaXB0aW9uID0gJ21hbmlmZXN0IG9yaWVudGF0aW9uIGZpZWxkIGlzIHJlcXVpcmVkJztcbiAgfVxufVxuXG5jb25zdCB2YWxpZGF0ZVN0YXJ0VXJsID0gKG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycykgPT4ge1xuICBpZiAoJ3N0YXJ0X3VybCcgaW4gbWFuaWZlc3QpIHtcbiAgICBpZih0eXBlb2YobWFuaWZlc3RbJ3N0YXJ0X3VybCddKSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHJlcXVpcmVkRXJyb3JzLmRlc2NyaXB0aW9uID0gJ21hbmlmZXN0IG5hbWUgZmllbGQgdHlwZSBzaG91bGQgYmUgc3RyaW5nJztcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmVxdWlyZWRFcnJvcnMuZGVzY3JpcHRpb24gPSAnbWFuaWZlc3QgbmFtZSBmaWVsZCBpcyByZXF1aXJlZCc7XG4gIH1cbn1cblxuY29uc3QgdmFsaWRhdGVJY29ucyA9IChtYWluZmVzdCwgcmVxdWlyZWRFcnJvcnMpID0+IHtcbn1cblxuY29uc3QgdmFsaWRhdGVSZXF1aXJlZEZpZWxkcyA9IChtYW5pZmVzdCwgZXJyb3JzKSA9PiB7XG4gIGxldCByZXF1aXJlZEVycm9ycyA9IHt9O1xuICB2YWxpZGF0ZU5hbWUobWFuaWZlc3QsIHJlcXVpcmVkRXJyb3JzKTtcbiAgdmFsaWRhdGVEZXNjcmlwdGlvbihtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpO1xuICB2YWxpZGF0ZUxhbmcobWFuaWZlc3QsIHJlcXVpcmVkRXJyb3JzKTtcbiAgdmFsaWRhdGVUaGVtZUNvbG9yKG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycyk7XG4gIHZhbGlkYXRlT3JpdGF0aW9uKG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycyk7XG4gIHZhbGlkYXRlU3RhcnRVcmwobWFuaWZlc3QsIHJlcXVpcmVkRXJyb3JzKTtcbiAgdmFsaWRhdGVJY29ucyhtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpO1xufVxuXG4vLyB2YWxpZGF0ZSBvcHRpb24gZmllbGRzXG5cbmNvbnN0IHZhbGlkYXRlRGlyID0gKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKSA9PiB7XG5cbn1cblxuY29uc3QgdmFsaWRhdGVTY29wZSA9IChtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycykgPT4ge1xuXG59XG5cbmNvbnN0IHZhbGlkYXRlRGlzcGxheSA9IChtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycykgPT4ge1xuXG59XG5cbmNvbnN0IHZhbGlkYXRlQmFja2dyb3VuZENvbG9yID0gKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKSA9PiB7XG5cbn1cblxuY29uc3QgdmFsaWRhdGVSZWxhdGVkQXBwbGljYXRpb25zID0gKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKSA9PiB7XG5cbn1cblxuY29uc3QgdmFsaWRhdGVQcmVmZXJSZWxhdGVkQXBwbGljYXRpb25zID0gKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKSA9PiB7XG5cbn1cblxuY29uc3QgdmFsaWRhdGVDYXRlZ29yaWVzID0gKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKSA9PiB7XG5cbn1cblxuY29uc3QgdmFsaWRhdGVTY3JlZW5zaG90cyA9IChtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycykgPT4ge1xuXG59XG5cbmNvbnN0IHZhbGlkYXRlU2hvcnRjdXRzID0gKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKSA9PiB7XG5cbn1cblxuY29uc3QgdmFsaWRhdGVPcHRpb25GaWVsZHMgPSAobWFuaWZlc3QpID0+IHtcbiAgbGV0IG9wdGlvbnNFcnJvcnMgPSB7fTtcbiAgdmFsaWRhdGVEaXIobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpO1xuICB2YWxpZGF0ZVNjb3BlKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKTtcbiAgdmFsaWRhdGVEaXNwbGF5KG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKTtcbiAgdmFsaWRhdGVCYWNrZ3JvdW5kQ29sb3IobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpO1xuICB2YWxpZGF0ZVJlbGF0ZWRBcHBsaWNhdGlvbnMobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpO1xuICB2YWxpZGF0ZVByZWZlclJlbGF0ZWRBcHBsaWNhdGlvbnMobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpO1xuICB2YWxpZGF0ZUNhdGVnb3JpZXMobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpO1xuICB2YWxpZGF0ZVNjcmVlbnNob3RzKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKTtcbiAgdmFsaWRhdGVTaG9ydGN1dHMobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2YWxpZGF0ZShvbGRNYW5pZmVzdCkge1xuICB2YWxpZGF0ZVJlcXVpcmVkRmllbGRzKG9sZE1hbmlmZXN0KTtcbiAgdmFsaWRhdGVPcHRpb25GaWVsZHMob2xkTWFuaWZlc3QpO1xuICByZXR1cm4gJ3N1Y2Nlc3MnO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/validate.js\n");

/***/ })

})