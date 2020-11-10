webpackHotUpdate_N_E("pages/index",{

/***/ "./utils/validate.js":
/*!***************************!*\
  !*** ./utils/validate.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return validate; });\n/*\n Required fields:\n   name or short_name: string\n   description: string\n   lang: string\n   theme_color: string\n   orientation: string\n   start_url: string\n   icons: Array of Object\n */\n\n/*\n Optional:\n   dir: string\n   scope: string\n   display: string\n   background_color: string\n   related_applications: Array of Object\n   prefer_related_applications: boolean\n   categories: Array of strings\n   screenshots: Array of Object\n   shortcuts: Array of Object\n */\n// validate required fields\nvar validateName = function validateName(manifest, requiredErrors) {\n  if ('name' in manifest) {\n    if (typeof manifest['name'] !== 'string') {\n      requiredErrors.name = 'manifest name field type should be string';\n    }\n  } else {\n    requiredErrors.name = 'manifest name field is required';\n  }\n};\n\nvar validateDescription = function validateDescription(manifest, requiredErrors) {\n  if ('description' in manifest) {\n    if (typeof manifest['description'] !== 'string') {\n      requiredErrors.description = 'manifest description field type should be string';\n    }\n  } else {\n    requiredErrors.description = 'manifest description field is required';\n  }\n};\n\nvar validateLang = function validateLang(manifest, requiredErrors) {\n  if ('lang' in manifest) {\n    var manifestLang = manifest['lang'];\n\n    if (typeof manifestLang !== 'string') {\n      requiredErrors.lang = 'manifest lang field type should be string!';\n    } else {\n      if (!/^\\w*(-\\w*)*$/.test(manifestLang)) {\n        requiredErrors.lang = 'manifest lang field type should be correct format!';\n      }\n    }\n  } else {\n    requiredErrors.lang = 'manifest lang field is required!';\n  }\n};\n\nvar validateThemeColor = function validateThemeColor(manifest, requiredErrors) {\n  if ('theme_color' in manifest) {\n    if (typeof manifest['theme_color'] !== 'string') {\n      requiredErrors.theme_color = 'manifest theme_color field type should be string';\n    }\n  } else {\n    requiredErrors.theme_color = 'manifest theme_color field is required';\n  }\n};\n\nvar validateOritation = function validateOritation(manifest, requiredErrors) {\n  var ENUM_ORIENTATION = ['any', 'natural', 'landscape', 'landscape-primary', 'landscape-secondary', 'portrait', 'portrait-primary', 'portrait-secondary'];\n\n  if ('orientation' in manifest) {\n    if (typeof manifest['orientation'] !== 'string') {\n      requiredErrors.orientation = 'manifest orientation field type should be string';\n    } else {\n      var orientation = manifest['orientation'];\n\n      if (!ENUM_ORIENTATION.includes(orientation)) {\n        requiredErrors.orientation = 'manifest orientation field value not correct';\n      }\n    }\n  } else {\n    requiredErrors.orientation = 'manifest orientation field is required';\n  }\n};\n\nvar validateStartUrl = function validateStartUrl(manifest, requiredErrors) {\n  if ('start_url' in manifest) {\n    if (typeof manifest['start_url'] !== 'string') {\n      requiredErrors.start_url = 'manifest start_url field type should be string';\n    }\n  } else {\n    requiredErrors.start_url = 'manifest start_url field is required';\n  }\n};\n\nvar validateIconObj = function validateIconObj(iconObj) {\n  var error = {}; // icons src validate\n\n  if ('src' in iconObj) {\n    if (typeof iconObj['src'] !== 'string') {\n      error.src = 'manifest icons field icon type should be string';\n    }\n  } else {\n    error.src = 'manifest icons field icon is required';\n  } // icons size validate\n\n\n  if ('sizes' in iconObj) {\n    var sizes = iconObj['sizes'];\n\n    if (typeof sizes !== 'string') {\n      error.sizes = 'manifest icons field size type should be string';\n    } else {\n      if (!/^\\s*\\d+x\\d+(\\s+\\d+x\\d+)*\\s*$/.test(sizes)) {\n        error.sizes = 'manifest icons field sizes should be correct format!';\n      }\n    }\n  } else {\n    error.sizes = 'manifest icons field size is required!';\n  }\n\n  return error;\n};\n\nvar validateIcons = function validateIcons(manifest, requiredErrors) {\n  if ('icons' in manifest) {\n    var icons = manifest['icons'];\n\n    if (!Array.isArray(icons)) {\n      requiredErrors.icons = 'manifest icons field should be Array';\n    } else {\n      var iconErrors = {};\n      icons.forEach(function (icon) {\n        iconErrors = validateIconObj(icon);\n      });\n      requiredErrors.icons = iconErrors;\n    }\n  } else {\n    requiredErrors.icons = 'manifest icons field is required';\n  }\n};\n\nvar validateRequiredFields = function validateRequiredFields(manifest, errors) {\n  var requiredErrors = {};\n  validateName(manifest, requiredErrors);\n  validateDescription(manifest, requiredErrors);\n  validateLang(manifest, requiredErrors);\n  validateThemeColor(manifest, requiredErrors);\n  validateOritation(manifest, requiredErrors);\n  validateStartUrl(manifest, requiredErrors);\n  validateIcons(manifest, requiredErrors);\n  return requiredErrors;\n}; // validate option fields\n\n\nvar validateDir = function validateDir(manifest, optionsErrors) {\n  var ENUM_DIR = ['rtl', 'ltr', 'auto'];\n\n  if ('dir' in manifest) {\n    if (typeof manifest['dir'] !== 'string') {\n      optionsErrors.dir = 'manifest dir field type should be string';\n    } else {\n      var dir = manifest['dir'];\n\n      if (!ENUM_DIR.includes(dir)) {\n        optionsErrors.dir = 'manifest dir field value not correct';\n      }\n    }\n  } else {\n    optionsErrors.dir = 'manifest dir field is required';\n  }\n};\n\nvar validateScope = function validateScope(manifest, optionsErrors) {\n  if ('scope' in manifest) {\n    if (typeof manifest['start_url'] !== 'string') {\n      requiredErrors.start_url = 'manifest start_url field type should be string';\n    }\n  } else {\n    requiredErrors.start_url = 'manifest start_url field is required';\n  }\n};\n\nvar validateDisplay = function validateDisplay(manifest, optionsErrors) {};\n\nvar validateBackgroundColor = function validateBackgroundColor(manifest, optionsErrors) {};\n\nvar validateRelatedApplications = function validateRelatedApplications(manifest, optionsErrors) {};\n\nvar validatePreferRelatedApplications = function validatePreferRelatedApplications(manifest, optionsErrors) {};\n\nvar validateCategories = function validateCategories(manifest, optionsErrors) {};\n\nvar validateScreenshots = function validateScreenshots(manifest, optionsErrors) {};\n\nvar validateShortcuts = function validateShortcuts(manifest, optionsErrors) {};\n\nvar validateOptionFields = function validateOptionFields(manifest) {\n  var optionsErrors = {};\n  validateDir(manifest, optionsErrors);\n  validateScope(manifest, optionsErrors);\n  validateDisplay(manifest, optionsErrors);\n  validateBackgroundColor(manifest, optionsErrors);\n  validateRelatedApplications(manifest, optionsErrors);\n  validatePreferRelatedApplications(manifest, optionsErrors);\n  validateCategories(manifest, optionsErrors);\n  validateScreenshots(manifest, optionsErrors);\n  validateShortcuts(manifest, optionsErrors);\n};\n\nfunction validate(oldManifest) {\n  validateRequiredFields(oldManifest);\n  validateOptionFields(oldManifest);\n  return 'success';\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvdmFsaWRhdGUuanM/ZjdkZiJdLCJuYW1lcyI6WyJ2YWxpZGF0ZU5hbWUiLCJtYW5pZmVzdCIsInJlcXVpcmVkRXJyb3JzIiwibmFtZSIsInZhbGlkYXRlRGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvbiIsInZhbGlkYXRlTGFuZyIsIm1hbmlmZXN0TGFuZyIsImxhbmciLCJ0ZXN0IiwidmFsaWRhdGVUaGVtZUNvbG9yIiwidGhlbWVfY29sb3IiLCJ2YWxpZGF0ZU9yaXRhdGlvbiIsIkVOVU1fT1JJRU5UQVRJT04iLCJvcmllbnRhdGlvbiIsImluY2x1ZGVzIiwidmFsaWRhdGVTdGFydFVybCIsInN0YXJ0X3VybCIsInZhbGlkYXRlSWNvbk9iaiIsImljb25PYmoiLCJlcnJvciIsInNyYyIsInNpemVzIiwidmFsaWRhdGVJY29ucyIsImljb25zIiwiQXJyYXkiLCJpc0FycmF5IiwiaWNvbkVycm9ycyIsImZvckVhY2giLCJpY29uIiwidmFsaWRhdGVSZXF1aXJlZEZpZWxkcyIsImVycm9ycyIsInZhbGlkYXRlRGlyIiwib3B0aW9uc0Vycm9ycyIsIkVOVU1fRElSIiwiZGlyIiwidmFsaWRhdGVTY29wZSIsInZhbGlkYXRlRGlzcGxheSIsInZhbGlkYXRlQmFja2dyb3VuZENvbG9yIiwidmFsaWRhdGVSZWxhdGVkQXBwbGljYXRpb25zIiwidmFsaWRhdGVQcmVmZXJSZWxhdGVkQXBwbGljYXRpb25zIiwidmFsaWRhdGVDYXRlZ29yaWVzIiwidmFsaWRhdGVTY3JlZW5zaG90cyIsInZhbGlkYXRlU2hvcnRjdXRzIiwidmFsaWRhdGVPcHRpb25GaWVsZHMiLCJ2YWxpZGF0ZSIsIm9sZE1hbmlmZXN0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiBSZXF1aXJlZCBmaWVsZHM6XG4gICBuYW1lIG9yIHNob3J0X25hbWU6IHN0cmluZ1xuICAgZGVzY3JpcHRpb246IHN0cmluZ1xuICAgbGFuZzogc3RyaW5nXG4gICB0aGVtZV9jb2xvcjogc3RyaW5nXG4gICBvcmllbnRhdGlvbjogc3RyaW5nXG4gICBzdGFydF91cmw6IHN0cmluZ1xuICAgaWNvbnM6IEFycmF5IG9mIE9iamVjdFxuICovXG5cbi8qXG4gT3B0aW9uYWw6XG4gICBkaXI6IHN0cmluZ1xuICAgc2NvcGU6IHN0cmluZ1xuICAgZGlzcGxheTogc3RyaW5nXG4gICBiYWNrZ3JvdW5kX2NvbG9yOiBzdHJpbmdcbiAgIHJlbGF0ZWRfYXBwbGljYXRpb25zOiBBcnJheSBvZiBPYmplY3RcbiAgIHByZWZlcl9yZWxhdGVkX2FwcGxpY2F0aW9uczogYm9vbGVhblxuICAgY2F0ZWdvcmllczogQXJyYXkgb2Ygc3RyaW5nc1xuICAgc2NyZWVuc2hvdHM6IEFycmF5IG9mIE9iamVjdFxuICAgc2hvcnRjdXRzOiBBcnJheSBvZiBPYmplY3RcbiAqL1xuXG4vLyB2YWxpZGF0ZSByZXF1aXJlZCBmaWVsZHNcbmNvbnN0IHZhbGlkYXRlTmFtZSA9IChtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpID0+IHtcbiAgaWYgKCduYW1lJyBpbiBtYW5pZmVzdCkge1xuICAgIGlmKHR5cGVvZihtYW5pZmVzdFsnbmFtZSddKSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHJlcXVpcmVkRXJyb3JzLm5hbWUgPSAnbWFuaWZlc3QgbmFtZSBmaWVsZCB0eXBlIHNob3VsZCBiZSBzdHJpbmcnO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXF1aXJlZEVycm9ycy5uYW1lID0gJ21hbmlmZXN0IG5hbWUgZmllbGQgaXMgcmVxdWlyZWQnO1xuICB9XG59XG5cbmNvbnN0IHZhbGlkYXRlRGVzY3JpcHRpb24gPSAobWFuaWZlc3QsIHJlcXVpcmVkRXJyb3JzKSA9PiB7XG4gIGlmICgnZGVzY3JpcHRpb24nIGluIG1hbmlmZXN0KSB7XG4gICAgaWYodHlwZW9mKG1hbmlmZXN0WydkZXNjcmlwdGlvbiddKSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHJlcXVpcmVkRXJyb3JzLmRlc2NyaXB0aW9uID0gJ21hbmlmZXN0IGRlc2NyaXB0aW9uIGZpZWxkIHR5cGUgc2hvdWxkIGJlIHN0cmluZyc7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJlcXVpcmVkRXJyb3JzLmRlc2NyaXB0aW9uID0gJ21hbmlmZXN0IGRlc2NyaXB0aW9uIGZpZWxkIGlzIHJlcXVpcmVkJztcbiAgfVxufVxuXG5jb25zdCB2YWxpZGF0ZUxhbmcgPSAobWFuaWZlc3QsIHJlcXVpcmVkRXJyb3JzKSA9PiB7XG4gIGlmKCdsYW5nJyBpbiBtYW5pZmVzdCkge1xuICAgIGNvbnN0IG1hbmlmZXN0TGFuZyA9IG1hbmlmZXN0WydsYW5nJ107XG4gICAgaWYodHlwZW9mKG1hbmlmZXN0TGFuZykgIT09ICdzdHJpbmcnKSB7XG4gICAgICByZXF1aXJlZEVycm9ycy5sYW5nID0gJ21hbmlmZXN0IGxhbmcgZmllbGQgdHlwZSBzaG91bGQgYmUgc3RyaW5nISc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmKCEvXlxcdyooLVxcdyopKiQvLnRlc3QobWFuaWZlc3RMYW5nKSkge1xuICAgICAgICByZXF1aXJlZEVycm9ycy5sYW5nID0gJ21hbmlmZXN0IGxhbmcgZmllbGQgdHlwZSBzaG91bGQgYmUgY29ycmVjdCBmb3JtYXQhJztcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmVxdWlyZWRFcnJvcnMubGFuZyA9ICdtYW5pZmVzdCBsYW5nIGZpZWxkIGlzIHJlcXVpcmVkISdcbiAgfVxufVxuXG5jb25zdCB2YWxpZGF0ZVRoZW1lQ29sb3IgPSAobWFuaWZlc3QsIHJlcXVpcmVkRXJyb3JzKSA9PiB7XG4gIGlmICgndGhlbWVfY29sb3InIGluIG1hbmlmZXN0KSB7XG4gICAgaWYodHlwZW9mKG1hbmlmZXN0Wyd0aGVtZV9jb2xvciddKSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHJlcXVpcmVkRXJyb3JzLnRoZW1lX2NvbG9yID0gJ21hbmlmZXN0IHRoZW1lX2NvbG9yIGZpZWxkIHR5cGUgc2hvdWxkIGJlIHN0cmluZyc7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJlcXVpcmVkRXJyb3JzLnRoZW1lX2NvbG9yID0gJ21hbmlmZXN0IHRoZW1lX2NvbG9yIGZpZWxkIGlzIHJlcXVpcmVkJztcbiAgfVxufVxuXG5jb25zdCB2YWxpZGF0ZU9yaXRhdGlvbiA9IChtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpID0+IHtcbiAgY29uc3QgRU5VTV9PUklFTlRBVElPTiA9IFtcbiAgICAnYW55JyxcbiAgICAnbmF0dXJhbCcsXG4gICAgJ2xhbmRzY2FwZScsXG4gICAgJ2xhbmRzY2FwZS1wcmltYXJ5JyxcbiAgICAnbGFuZHNjYXBlLXNlY29uZGFyeScsXG4gICAgJ3BvcnRyYWl0JyxcbiAgICAncG9ydHJhaXQtcHJpbWFyeScsXG4gICAgJ3BvcnRyYWl0LXNlY29uZGFyeSdcbiAgXTtcbiAgaWYgKCdvcmllbnRhdGlvbicgaW4gbWFuaWZlc3QpIHtcbiAgICBpZih0eXBlb2YobWFuaWZlc3RbJ29yaWVudGF0aW9uJ10pICE9PSAnc3RyaW5nJykge1xuICAgICAgcmVxdWlyZWRFcnJvcnMub3JpZW50YXRpb24gPSAnbWFuaWZlc3Qgb3JpZW50YXRpb24gZmllbGQgdHlwZSBzaG91bGQgYmUgc3RyaW5nJztcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgb3JpZW50YXRpb24gPSBtYW5pZmVzdFsnb3JpZW50YXRpb24nXTtcbiAgICAgIGlmKCFFTlVNX09SSUVOVEFUSU9OLmluY2x1ZGVzKG9yaWVudGF0aW9uKSkge1xuICAgICAgICByZXF1aXJlZEVycm9ycy5vcmllbnRhdGlvbiA9ICdtYW5pZmVzdCBvcmllbnRhdGlvbiBmaWVsZCB2YWx1ZSBub3QgY29ycmVjdCc7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJlcXVpcmVkRXJyb3JzLm9yaWVudGF0aW9uID0gJ21hbmlmZXN0IG9yaWVudGF0aW9uIGZpZWxkIGlzIHJlcXVpcmVkJztcbiAgfVxufVxuXG5jb25zdCB2YWxpZGF0ZVN0YXJ0VXJsID0gKG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycykgPT4ge1xuICBpZiAoJ3N0YXJ0X3VybCcgaW4gbWFuaWZlc3QpIHtcbiAgICBpZih0eXBlb2YobWFuaWZlc3RbJ3N0YXJ0X3VybCddKSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHJlcXVpcmVkRXJyb3JzLnN0YXJ0X3VybCA9ICdtYW5pZmVzdCBzdGFydF91cmwgZmllbGQgdHlwZSBzaG91bGQgYmUgc3RyaW5nJztcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmVxdWlyZWRFcnJvcnMuc3RhcnRfdXJsID0gJ21hbmlmZXN0IHN0YXJ0X3VybCBmaWVsZCBpcyByZXF1aXJlZCc7XG4gIH1cbn1cblxuY29uc3QgdmFsaWRhdGVJY29uT2JqID0gKGljb25PYmopID0+IHtcbiAgbGV0IGVycm9yID0ge307XG4gIC8vIGljb25zIHNyYyB2YWxpZGF0ZVxuICBpZiAoJ3NyYycgaW4gaWNvbk9iaikge1xuICAgIGlmKHR5cGVvZihpY29uT2JqWydzcmMnXSkgIT09ICdzdHJpbmcnKSB7XG4gICAgICBlcnJvci5zcmMgPSAnbWFuaWZlc3QgaWNvbnMgZmllbGQgaWNvbiB0eXBlIHNob3VsZCBiZSBzdHJpbmcnO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBlcnJvci5zcmMgPSAnbWFuaWZlc3QgaWNvbnMgZmllbGQgaWNvbiBpcyByZXF1aXJlZCc7XG4gIH1cbiAgLy8gaWNvbnMgc2l6ZSB2YWxpZGF0ZVxuICBpZignc2l6ZXMnIGluIGljb25PYmopIHtcbiAgICBjb25zdCBzaXplcyA9IGljb25PYmpbJ3NpemVzJ107XG4gICAgaWYodHlwZW9mKHNpemVzKSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIGVycm9yLnNpemVzID0gJ21hbmlmZXN0IGljb25zIGZpZWxkIHNpemUgdHlwZSBzaG91bGQgYmUgc3RyaW5nJztcbiAgICB9IGVsc2Uge1xuICAgICAgaWYoIS9eXFxzKlxcZCt4XFxkKyhcXHMrXFxkK3hcXGQrKSpcXHMqJC8udGVzdChzaXplcykpIHtcbiAgICAgICAgZXJyb3Iuc2l6ZXMgPSAnbWFuaWZlc3QgaWNvbnMgZmllbGQgc2l6ZXMgc2hvdWxkIGJlIGNvcnJlY3QgZm9ybWF0ISc7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGVycm9yLnNpemVzID0gJ21hbmlmZXN0IGljb25zIGZpZWxkIHNpemUgaXMgcmVxdWlyZWQhJ1xuICB9XG4gIHJldHVybiBlcnJvcjtcbn1cblxuY29uc3QgdmFsaWRhdGVJY29ucyA9IChtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpID0+IHtcbiAgaWYoJ2ljb25zJyBpbiBtYW5pZmVzdCkge1xuICAgIGNvbnN0IGljb25zID0gbWFuaWZlc3RbJ2ljb25zJ107XG4gICAgaWYoIUFycmF5LmlzQXJyYXkoaWNvbnMpKSB7XG4gICAgICByZXF1aXJlZEVycm9ycy5pY29ucyA9ICdtYW5pZmVzdCBpY29ucyBmaWVsZCBzaG91bGQgYmUgQXJyYXknO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgaWNvbkVycm9ycyA9IHt9O1xuICAgICAgaWNvbnMuZm9yRWFjaCgoaWNvbikgPT4ge1xuICAgICAgICBpY29uRXJyb3JzID0gdmFsaWRhdGVJY29uT2JqKGljb24pO1xuICAgICAgfSlcbiAgICAgIHJlcXVpcmVkRXJyb3JzLmljb25zID0gaWNvbkVycm9ycztcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmVxdWlyZWRFcnJvcnMuaWNvbnMgPSAnbWFuaWZlc3QgaWNvbnMgZmllbGQgaXMgcmVxdWlyZWQnO1xuICB9XG59XG5cbmNvbnN0IHZhbGlkYXRlUmVxdWlyZWRGaWVsZHMgPSAobWFuaWZlc3QsIGVycm9ycykgPT4ge1xuICBsZXQgcmVxdWlyZWRFcnJvcnMgPSB7fTtcbiAgdmFsaWRhdGVOYW1lKG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycyk7XG4gIHZhbGlkYXRlRGVzY3JpcHRpb24obWFuaWZlc3QsIHJlcXVpcmVkRXJyb3JzKTtcbiAgdmFsaWRhdGVMYW5nKG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycyk7XG4gIHZhbGlkYXRlVGhlbWVDb2xvcihtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpO1xuICB2YWxpZGF0ZU9yaXRhdGlvbihtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpO1xuICB2YWxpZGF0ZVN0YXJ0VXJsKG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycyk7XG4gIHZhbGlkYXRlSWNvbnMobWFuaWZlc3QsIHJlcXVpcmVkRXJyb3JzKTtcbiAgcmV0dXJuIHJlcXVpcmVkRXJyb3JzO1xufVxuXG4vLyB2YWxpZGF0ZSBvcHRpb24gZmllbGRzXG5cbmNvbnN0IHZhbGlkYXRlRGlyID0gKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKSA9PiB7XG4gIGNvbnN0IEVOVU1fRElSID0gW1xuICAgICdydGwnLFxuICAgICdsdHInLFxuICAgICdhdXRvJ1xuICBdO1xuICBpZiAoJ2RpcicgaW4gbWFuaWZlc3QpIHtcbiAgICBpZih0eXBlb2YobWFuaWZlc3RbJ2RpciddKSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIG9wdGlvbnNFcnJvcnMuZGlyID0gJ21hbmlmZXN0IGRpciBmaWVsZCB0eXBlIHNob3VsZCBiZSBzdHJpbmcnO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBkaXIgPSBtYW5pZmVzdFsnZGlyJ107XG4gICAgICBpZighRU5VTV9ESVIuaW5jbHVkZXMoZGlyKSkge1xuICAgICAgICBvcHRpb25zRXJyb3JzLmRpciA9ICdtYW5pZmVzdCBkaXIgZmllbGQgdmFsdWUgbm90IGNvcnJlY3QnO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBvcHRpb25zRXJyb3JzLmRpciA9ICdtYW5pZmVzdCBkaXIgZmllbGQgaXMgcmVxdWlyZWQnO1xuICB9XG59XG5cbmNvbnN0IHZhbGlkYXRlU2NvcGUgPSAobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpID0+IHtcbiAgaWYgKCdzY29wZScgaW4gbWFuaWZlc3QpIHtcbiAgICBpZih0eXBlb2YobWFuaWZlc3RbJ3N0YXJ0X3VybCddKSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHJlcXVpcmVkRXJyb3JzLnN0YXJ0X3VybCA9ICdtYW5pZmVzdCBzdGFydF91cmwgZmllbGQgdHlwZSBzaG91bGQgYmUgc3RyaW5nJztcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmVxdWlyZWRFcnJvcnMuc3RhcnRfdXJsID0gJ21hbmlmZXN0IHN0YXJ0X3VybCBmaWVsZCBpcyByZXF1aXJlZCc7XG4gIH1cbn1cblxuY29uc3QgdmFsaWRhdGVEaXNwbGF5ID0gKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKSA9PiB7XG5cbn1cblxuY29uc3QgdmFsaWRhdGVCYWNrZ3JvdW5kQ29sb3IgPSAobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpID0+IHtcblxufVxuXG5jb25zdCB2YWxpZGF0ZVJlbGF0ZWRBcHBsaWNhdGlvbnMgPSAobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpID0+IHtcblxufVxuXG5jb25zdCB2YWxpZGF0ZVByZWZlclJlbGF0ZWRBcHBsaWNhdGlvbnMgPSAobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpID0+IHtcblxufVxuXG5jb25zdCB2YWxpZGF0ZUNhdGVnb3JpZXMgPSAobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpID0+IHtcblxufVxuXG5jb25zdCB2YWxpZGF0ZVNjcmVlbnNob3RzID0gKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKSA9PiB7XG5cbn1cblxuY29uc3QgdmFsaWRhdGVTaG9ydGN1dHMgPSAobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpID0+IHtcblxufVxuXG5jb25zdCB2YWxpZGF0ZU9wdGlvbkZpZWxkcyA9IChtYW5pZmVzdCkgPT4ge1xuICBsZXQgb3B0aW9uc0Vycm9ycyA9IHt9O1xuICB2YWxpZGF0ZURpcihtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycyk7XG4gIHZhbGlkYXRlU2NvcGUobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpO1xuICB2YWxpZGF0ZURpc3BsYXkobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpO1xuICB2YWxpZGF0ZUJhY2tncm91bmRDb2xvcihtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycyk7XG4gIHZhbGlkYXRlUmVsYXRlZEFwcGxpY2F0aW9ucyhtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycyk7XG4gIHZhbGlkYXRlUHJlZmVyUmVsYXRlZEFwcGxpY2F0aW9ucyhtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycyk7XG4gIHZhbGlkYXRlQ2F0ZWdvcmllcyhtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycyk7XG4gIHZhbGlkYXRlU2NyZWVuc2hvdHMobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpO1xuICB2YWxpZGF0ZVNob3J0Y3V0cyhtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZhbGlkYXRlKG9sZE1hbmlmZXN0KSB7XG4gIHZhbGlkYXRlUmVxdWlyZWRGaWVsZHMob2xkTWFuaWZlc3QpO1xuICB2YWxpZGF0ZU9wdGlvbkZpZWxkcyhvbGRNYW5pZmVzdCk7XG4gIHJldHVybiAnc3VjY2Vzcyc7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/validate.js\n");

/***/ })

})