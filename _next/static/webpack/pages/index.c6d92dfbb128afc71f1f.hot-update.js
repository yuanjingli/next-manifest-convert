webpackHotUpdate_N_E("pages/index",{

/***/ "./utils/validate.js":
/*!***************************!*\
  !*** ./utils/validate.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return validate; });\n/*\n Required fields:\n   name or short_name: string\n   description: string\n   lang: string\n   theme_color: string\n   orientation: string\n   start_url: string\n   icons: Array of Object\n */\n\n/*\n Optional:\n   dir: string\n   scope: string\n   display: string\n   background_color: string\n   related_applications: Array of Object\n   prefer_related_applications: boolean\n   categories: Array of strings\n   screenshots: Array of Object\n   shortcuts: Array of Object\n */\n// validate required fields\nvar validateName = function validateName(manifest, requiredErrors) {\n  if ('name' in manifest) {\n    if (typeof manifest['name'] !== 'string') {\n      requiredErrors.name = 'manifest name field type should be string';\n    }\n  } else {\n    requiredErrors.name = 'manifest name field is required';\n  }\n};\n\nvar validateDescription = function validateDescription(manifest, requiredErrors) {\n  if ('description' in manifest) {\n    if (typeof manifest['description'] !== 'string') {\n      requiredErrors.description = 'manifest description field type should be string';\n    }\n  } else {\n    requiredErrors.description = 'manifest description field is required';\n  }\n};\n\nvar validateLang = function validateLang(manifest, requiredErrors) {\n  if ('lang' in manifest) {\n    var manifestLang = manifest['lang'];\n\n    if (typeof manifestLang !== 'string') {\n      requiredErrors.lang = 'manifest lang field type should be string!';\n    } else {\n      if (!/^\\w*(-\\w*)*$/.test(manifestLang)) {\n        requiredErrors.lang = 'manifest lang field type should be correct format!';\n      }\n    }\n  } else {\n    requiredErrors.lang = 'manifest lang field is required!';\n  }\n};\n\nvar validateThemeColor = function validateThemeColor(manifest, requiredErrors) {\n  if ('theme_color' in manifest) {\n    if (typeof manifest['theme_color'] !== 'string') {\n      requiredErrors.theme_color = 'manifest theme_color field type should be string';\n    }\n  } else {\n    requiredErrors.theme_color = 'manifest theme_color field is required';\n  }\n};\n\nvar validateOritation = function validateOritation(manifest, requiredErrors) {\n  var ENUM_ORIENTATION = ['any', 'natural', 'landscape', 'landscape-primary', 'landscape-secondary', 'portrait', 'portrait-primary', 'portrait-secondary'];\n\n  if ('orientation' in manifest) {\n    if (typeof manifest['orientation'] !== 'string') {\n      requiredErrors.orientation = 'manifest orientation field type should be string';\n    } else {\n      var orientation = manifest['orientation'];\n\n      if (!ENUM_ORIENTATION.includes(orientation)) {\n        requiredErrors.orientation = 'manifest orientation field value not correct';\n      }\n    }\n  } else {\n    requiredErrors.orientation = 'manifest orientation field is required';\n  }\n};\n\nvar validateStartUrl = function validateStartUrl(manifest, requiredErrors) {\n  if ('start_url' in manifest) {\n    if (typeof manifest['start_url'] !== 'string') {\n      requiredErrors.start_url = 'manifest start_url field type should be string';\n    }\n  } else {\n    requiredErrors.start_url = 'manifest start_url field is required';\n  }\n};\n\nvar validateIconObj = function validateIconObj(iconObj) {\n  var error = {}; // icons src validate\n\n  if ('src' in iconObj) {\n    if (typeof iconObj['src'] !== 'string') {\n      error.src = 'manifest icons field icon type should be string';\n    }\n  } else {\n    error.src = 'manifest icons field icon is required';\n  } // icons size validate\n\n\n  if ('sizes' in iconObj) {\n    var sizes = iconObj['sizes'];\n\n    if (typeof sizes !== 'string') {\n      error.sizes = 'manifest icons field size type should be string';\n    } else {\n      if (!/^\\s*\\d+x\\d+(\\s+\\d+x\\d+)*\\s*$/.test(sizes)) {\n        error.sizes = 'manifest icons field sizes should be correct format!';\n      }\n    }\n  } else {\n    error.sizes = 'manifest icons field size is required!';\n  }\n\n  return error;\n};\n\nvar validateIcons = function validateIcons(manifest, requiredErrors) {\n  if ('icons' in manifest) {\n    var _icons = manifest['icons'];\n\n    if (!Array.isArray(_icons)) {\n      requiredErrors.icons = 'manifest icons field should be Array';\n    } else {\n      var iconErrors = {};\n\n      _icons.forEach(function (icon) {\n        iconErrors = validateIconObj(icon);\n      });\n\n      requiredErrors.icons = iconErrors;\n    }\n  } else {\n    requiredErrors.icons = 'manifest icons field is required';\n  }\n};\n\nvar validateRequiredFields = function validateRequiredFields(manifest, errors) {\n  var requiredErrors = {};\n  validateName(manifest, requiredErrors);\n  validateDescription(manifest, requiredErrors);\n  validateLang(manifest, requiredErrors);\n  validateThemeColor(manifest, requiredErrors);\n  validateOritation(manifest, requiredErrors);\n  validateStartUrl(manifest, requiredErrors);\n  validateIcons(manifest, requiredErrors);\n  return requiredErrors;\n}; // validate option fields\n\n\nvar validateDir = function validateDir(manifest, optionsErrors) {\n  var ENUM_DIR = ['rtl', 'ltr', 'auto'];\n\n  if ('dir' in manifest) {\n    if (typeof manifest['dir'] !== 'string') {\n      optionsErrors.dir = 'manifest dir field type should be string';\n    } else {\n      var dir = manifest['dir'];\n\n      if (!ENUM_DIR.includes(dir)) {\n        optionsErrors.dir = 'manifest dir field value not correct';\n      }\n    }\n  } else {\n    optionsErrors.dir = 'manifest dir field is required';\n  }\n};\n\nvar validateScope = function validateScope(manifest, optionsErrors) {\n  if ('scope' in manifest) {\n    if (typeof manifest['scope'] !== 'string') {\n      optionsErrors.scope = 'manifest scope field type should be string';\n    }\n  } else {\n    optionsErrors.scope = 'manifest scope field is required';\n  }\n};\n\nvar validateDisplay = function validateDisplay(manifest, optionsErrors) {\n  var ENUM_DISPLAY = ['fullscreen', 'standalone', 'minimal-ui', 'browser'];\n\n  if ('display' in manifest) {\n    if (typeof manifest['display'] !== 'string') {\n      optionsErrors.display = 'manifest display field type should be string';\n    } else {\n      var display = manifest['display'];\n\n      if (!ENUM_DISPLAY.includes(display)) {\n        optionsErrors.display = 'manifest display field value not correct';\n      }\n    }\n  } else {\n    optionsErrors.display = 'manifest display field is required';\n  }\n};\n\nvar validateBackgroundColor = function validateBackgroundColor(manifest, optionsErrors) {\n  if ('background_color' in manifest) {\n    if (typeof manifest['background_color'] !== 'string') {\n      optionsErrors.background_color = 'manifest background_color field type should be string';\n    }\n  } else {\n    optionsErrors.background_color = 'manifest background_color field is required';\n  }\n};\n\nvar validateRelatedApplications = function validateRelatedApplications(manifest, optionsErrors) {// todo: related_applications fields\n};\n\nvar validatePreferRelatedApplications = function validatePreferRelatedApplications(manifest, optionsErrors) {// todo: prefer_related_applications fields\n};\n\nvar validateCategories = function validateCategories(manifest, optionsErrors) {\n  if ('categories' in manifest) {\n    var categories = manifest['categories'];\n\n    if (!Array.isArray(categories)) {\n      optionsErrors.categories = 'manifest categories field should be Array';\n    } else {\n      var iconErrors = {};\n      icons.forEach(function (icon) {\n        iconErrors = validateIconObj(icon);\n      });\n      requiredErrors.icons = iconErrors;\n    }\n  } else {\n    optionsErrors.categories = 'manifest categories field is required';\n  }\n};\n\nvar validateScreenshots = function validateScreenshots(manifest, optionsErrors) {};\n\nvar validateShortcuts = function validateShortcuts(manifest, optionsErrors) {};\n\nvar validateOptionFields = function validateOptionFields(manifest) {\n  var optionsErrors = {};\n  validateDir(manifest, optionsErrors);\n  validateScope(manifest, optionsErrors);\n  validateDisplay(manifest, optionsErrors);\n  validateBackgroundColor(manifest, optionsErrors);\n  validateRelatedApplications(manifest, optionsErrors);\n  validatePreferRelatedApplications(manifest, optionsErrors);\n  validateCategories(manifest, optionsErrors);\n  validateScreenshots(manifest, optionsErrors);\n  validateShortcuts(manifest, optionsErrors);\n};\n\nfunction validate(oldManifest) {\n  validateRequiredFields(oldManifest);\n  validateOptionFields(oldManifest);\n  return 'success';\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvdmFsaWRhdGUuanM/ZjdkZiJdLCJuYW1lcyI6WyJ2YWxpZGF0ZU5hbWUiLCJtYW5pZmVzdCIsInJlcXVpcmVkRXJyb3JzIiwibmFtZSIsInZhbGlkYXRlRGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvbiIsInZhbGlkYXRlTGFuZyIsIm1hbmlmZXN0TGFuZyIsImxhbmciLCJ0ZXN0IiwidmFsaWRhdGVUaGVtZUNvbG9yIiwidGhlbWVfY29sb3IiLCJ2YWxpZGF0ZU9yaXRhdGlvbiIsIkVOVU1fT1JJRU5UQVRJT04iLCJvcmllbnRhdGlvbiIsImluY2x1ZGVzIiwidmFsaWRhdGVTdGFydFVybCIsInN0YXJ0X3VybCIsInZhbGlkYXRlSWNvbk9iaiIsImljb25PYmoiLCJlcnJvciIsInNyYyIsInNpemVzIiwidmFsaWRhdGVJY29ucyIsImljb25zIiwiQXJyYXkiLCJpc0FycmF5IiwiaWNvbkVycm9ycyIsImZvckVhY2giLCJpY29uIiwidmFsaWRhdGVSZXF1aXJlZEZpZWxkcyIsImVycm9ycyIsInZhbGlkYXRlRGlyIiwib3B0aW9uc0Vycm9ycyIsIkVOVU1fRElSIiwiZGlyIiwidmFsaWRhdGVTY29wZSIsInNjb3BlIiwidmFsaWRhdGVEaXNwbGF5IiwiRU5VTV9ESVNQTEFZIiwiZGlzcGxheSIsInZhbGlkYXRlQmFja2dyb3VuZENvbG9yIiwiYmFja2dyb3VuZF9jb2xvciIsInZhbGlkYXRlUmVsYXRlZEFwcGxpY2F0aW9ucyIsInZhbGlkYXRlUHJlZmVyUmVsYXRlZEFwcGxpY2F0aW9ucyIsInZhbGlkYXRlQ2F0ZWdvcmllcyIsImNhdGVnb3JpZXMiLCJ2YWxpZGF0ZVNjcmVlbnNob3RzIiwidmFsaWRhdGVTaG9ydGN1dHMiLCJ2YWxpZGF0ZU9wdGlvbkZpZWxkcyIsInZhbGlkYXRlIiwib2xkTWFuaWZlc3QiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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ZSxtQkFBaUIsQ0FBQy9DLFFBQUQsRUFBV2dDLGFBQVgsQ0FBakI7QUFDRCxDQVhEOztBQWFlLFNBQVNpQixRQUFULENBQWtCQyxXQUFsQixFQUErQjtBQUM1Q3JCLHdCQUFzQixDQUFDcUIsV0FBRCxDQUF0QjtBQUNBRixzQkFBb0IsQ0FBQ0UsV0FBRCxDQUFwQjtBQUNBLFNBQU8sU0FBUDtBQUNEIiwiZmlsZSI6Ii4vdXRpbHMvdmFsaWRhdGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuIFJlcXVpcmVkIGZpZWxkczpcbiAgIG5hbWUgb3Igc2hvcnRfbmFtZTogc3RyaW5nXG4gICBkZXNjcmlwdGlvbjogc3RyaW5nXG4gICBsYW5nOiBzdHJpbmdcbiAgIHRoZW1lX2NvbG9yOiBzdHJpbmdcbiAgIG9yaWVudGF0aW9uOiBzdHJpbmdcbiAgIHN0YXJ0X3VybDogc3RyaW5nXG4gICBpY29uczogQXJyYXkgb2YgT2JqZWN0XG4gKi9cblxuLypcbiBPcHRpb25hbDpcbiAgIGRpcjogc3RyaW5nXG4gICBzY29wZTogc3RyaW5nXG4gICBkaXNwbGF5OiBzdHJpbmdcbiAgIGJhY2tncm91bmRfY29sb3I6IHN0cmluZ1xuICAgcmVsYXRlZF9hcHBsaWNhdGlvbnM6IEFycmF5IG9mIE9iamVjdFxuICAgcHJlZmVyX3JlbGF0ZWRfYXBwbGljYXRpb25zOiBib29sZWFuXG4gICBjYXRlZ29yaWVzOiBBcnJheSBvZiBzdHJpbmdzXG4gICBzY3JlZW5zaG90czogQXJyYXkgb2YgT2JqZWN0XG4gICBzaG9ydGN1dHM6IEFycmF5IG9mIE9iamVjdFxuICovXG5cbi8vIHZhbGlkYXRlIHJlcXVpcmVkIGZpZWxkc1xuY29uc3QgdmFsaWRhdGVOYW1lID0gKG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycykgPT4ge1xuICBpZiAoJ25hbWUnIGluIG1hbmlmZXN0KSB7XG4gICAgaWYodHlwZW9mKG1hbmlmZXN0WyduYW1lJ10pICE9PSAnc3RyaW5nJykge1xuICAgICAgcmVxdWlyZWRFcnJvcnMubmFtZSA9ICdtYW5pZmVzdCBuYW1lIGZpZWxkIHR5cGUgc2hvdWxkIGJlIHN0cmluZyc7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJlcXVpcmVkRXJyb3JzLm5hbWUgPSAnbWFuaWZlc3QgbmFtZSBmaWVsZCBpcyByZXF1aXJlZCc7XG4gIH1cbn1cblxuY29uc3QgdmFsaWRhdGVEZXNjcmlwdGlvbiA9IChtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpID0+IHtcbiAgaWYgKCdkZXNjcmlwdGlvbicgaW4gbWFuaWZlc3QpIHtcbiAgICBpZih0eXBlb2YobWFuaWZlc3RbJ2Rlc2NyaXB0aW9uJ10pICE9PSAnc3RyaW5nJykge1xuICAgICAgcmVxdWlyZWRFcnJvcnMuZGVzY3JpcHRpb24gPSAnbWFuaWZlc3QgZGVzY3JpcHRpb24gZmllbGQgdHlwZSBzaG91bGQgYmUgc3RyaW5nJztcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmVxdWlyZWRFcnJvcnMuZGVzY3JpcHRpb24gPSAnbWFuaWZlc3QgZGVzY3JpcHRpb24gZmllbGQgaXMgcmVxdWlyZWQnO1xuICB9XG59XG5cbmNvbnN0IHZhbGlkYXRlTGFuZyA9IChtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpID0+IHtcbiAgaWYoJ2xhbmcnIGluIG1hbmlmZXN0KSB7XG4gICAgY29uc3QgbWFuaWZlc3RMYW5nID0gbWFuaWZlc3RbJ2xhbmcnXTtcbiAgICBpZih0eXBlb2YobWFuaWZlc3RMYW5nKSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHJlcXVpcmVkRXJyb3JzLmxhbmcgPSAnbWFuaWZlc3QgbGFuZyBmaWVsZCB0eXBlIHNob3VsZCBiZSBzdHJpbmchJztcbiAgICB9IGVsc2Uge1xuICAgICAgaWYoIS9eXFx3KigtXFx3KikqJC8udGVzdChtYW5pZmVzdExhbmcpKSB7XG4gICAgICAgIHJlcXVpcmVkRXJyb3JzLmxhbmcgPSAnbWFuaWZlc3QgbGFuZyBmaWVsZCB0eXBlIHNob3VsZCBiZSBjb3JyZWN0IGZvcm1hdCEnO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXF1aXJlZEVycm9ycy5sYW5nID0gJ21hbmlmZXN0IGxhbmcgZmllbGQgaXMgcmVxdWlyZWQhJ1xuICB9XG59XG5cbmNvbnN0IHZhbGlkYXRlVGhlbWVDb2xvciA9IChtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpID0+IHtcbiAgaWYgKCd0aGVtZV9jb2xvcicgaW4gbWFuaWZlc3QpIHtcbiAgICBpZih0eXBlb2YobWFuaWZlc3RbJ3RoZW1lX2NvbG9yJ10pICE9PSAnc3RyaW5nJykge1xuICAgICAgcmVxdWlyZWRFcnJvcnMudGhlbWVfY29sb3IgPSAnbWFuaWZlc3QgdGhlbWVfY29sb3IgZmllbGQgdHlwZSBzaG91bGQgYmUgc3RyaW5nJztcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmVxdWlyZWRFcnJvcnMudGhlbWVfY29sb3IgPSAnbWFuaWZlc3QgdGhlbWVfY29sb3IgZmllbGQgaXMgcmVxdWlyZWQnO1xuICB9XG59XG5cbmNvbnN0IHZhbGlkYXRlT3JpdGF0aW9uID0gKG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycykgPT4ge1xuICBjb25zdCBFTlVNX09SSUVOVEFUSU9OID0gW1xuICAgICdhbnknLFxuICAgICduYXR1cmFsJyxcbiAgICAnbGFuZHNjYXBlJyxcbiAgICAnbGFuZHNjYXBlLXByaW1hcnknLFxuICAgICdsYW5kc2NhcGUtc2Vjb25kYXJ5JyxcbiAgICAncG9ydHJhaXQnLFxuICAgICdwb3J0cmFpdC1wcmltYXJ5JyxcbiAgICAncG9ydHJhaXQtc2Vjb25kYXJ5J1xuICBdO1xuICBpZiAoJ29yaWVudGF0aW9uJyBpbiBtYW5pZmVzdCkge1xuICAgIGlmKHR5cGVvZihtYW5pZmVzdFsnb3JpZW50YXRpb24nXSkgIT09ICdzdHJpbmcnKSB7XG4gICAgICByZXF1aXJlZEVycm9ycy5vcmllbnRhdGlvbiA9ICdtYW5pZmVzdCBvcmllbnRhdGlvbiBmaWVsZCB0eXBlIHNob3VsZCBiZSBzdHJpbmcnO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBvcmllbnRhdGlvbiA9IG1hbmlmZXN0WydvcmllbnRhdGlvbiddO1xuICAgICAgaWYoIUVOVU1fT1JJRU5UQVRJT04uaW5jbHVkZXMob3JpZW50YXRpb24pKSB7XG4gICAgICAgIHJlcXVpcmVkRXJyb3JzLm9yaWVudGF0aW9uID0gJ21hbmlmZXN0IG9yaWVudGF0aW9uIGZpZWxkIHZhbHVlIG5vdCBjb3JyZWN0JztcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmVxdWlyZWRFcnJvcnMub3JpZW50YXRpb24gPSAnbWFuaWZlc3Qgb3JpZW50YXRpb24gZmllbGQgaXMgcmVxdWlyZWQnO1xuICB9XG59XG5cbmNvbnN0IHZhbGlkYXRlU3RhcnRVcmwgPSAobWFuaWZlc3QsIHJlcXVpcmVkRXJyb3JzKSA9PiB7XG4gIGlmICgnc3RhcnRfdXJsJyBpbiBtYW5pZmVzdCkge1xuICAgIGlmKHR5cGVvZihtYW5pZmVzdFsnc3RhcnRfdXJsJ10pICE9PSAnc3RyaW5nJykge1xuICAgICAgcmVxdWlyZWRFcnJvcnMuc3RhcnRfdXJsID0gJ21hbmlmZXN0IHN0YXJ0X3VybCBmaWVsZCB0eXBlIHNob3VsZCBiZSBzdHJpbmcnO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXF1aXJlZEVycm9ycy5zdGFydF91cmwgPSAnbWFuaWZlc3Qgc3RhcnRfdXJsIGZpZWxkIGlzIHJlcXVpcmVkJztcbiAgfVxufVxuXG5jb25zdCB2YWxpZGF0ZUljb25PYmogPSAoaWNvbk9iaikgPT4ge1xuICBsZXQgZXJyb3IgPSB7fTtcbiAgLy8gaWNvbnMgc3JjIHZhbGlkYXRlXG4gIGlmICgnc3JjJyBpbiBpY29uT2JqKSB7XG4gICAgaWYodHlwZW9mKGljb25PYmpbJ3NyYyddKSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIGVycm9yLnNyYyA9ICdtYW5pZmVzdCBpY29ucyBmaWVsZCBpY29uIHR5cGUgc2hvdWxkIGJlIHN0cmluZyc7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGVycm9yLnNyYyA9ICdtYW5pZmVzdCBpY29ucyBmaWVsZCBpY29uIGlzIHJlcXVpcmVkJztcbiAgfVxuICAvLyBpY29ucyBzaXplIHZhbGlkYXRlXG4gIGlmKCdzaXplcycgaW4gaWNvbk9iaikge1xuICAgIGNvbnN0IHNpemVzID0gaWNvbk9ialsnc2l6ZXMnXTtcbiAgICBpZih0eXBlb2Yoc2l6ZXMpICE9PSAnc3RyaW5nJykge1xuICAgICAgZXJyb3Iuc2l6ZXMgPSAnbWFuaWZlc3QgaWNvbnMgZmllbGQgc2l6ZSB0eXBlIHNob3VsZCBiZSBzdHJpbmcnO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZighL15cXHMqXFxkK3hcXGQrKFxccytcXGQreFxcZCspKlxccyokLy50ZXN0KHNpemVzKSkge1xuICAgICAgICBlcnJvci5zaXplcyA9ICdtYW5pZmVzdCBpY29ucyBmaWVsZCBzaXplcyBzaG91bGQgYmUgY29ycmVjdCBmb3JtYXQhJztcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZXJyb3Iuc2l6ZXMgPSAnbWFuaWZlc3QgaWNvbnMgZmllbGQgc2l6ZSBpcyByZXF1aXJlZCEnXG4gIH1cbiAgcmV0dXJuIGVycm9yO1xufVxuXG5jb25zdCB2YWxpZGF0ZUljb25zID0gKG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycykgPT4ge1xuICBpZignaWNvbnMnIGluIG1hbmlmZXN0KSB7XG4gICAgY29uc3QgaWNvbnMgPSBtYW5pZmVzdFsnaWNvbnMnXTtcbiAgICBpZighQXJyYXkuaXNBcnJheShpY29ucykpIHtcbiAgICAgIHJlcXVpcmVkRXJyb3JzLmljb25zID0gJ21hbmlmZXN0IGljb25zIGZpZWxkIHNob3VsZCBiZSBBcnJheSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBpY29uRXJyb3JzID0ge307XG4gICAgICBpY29ucy5mb3JFYWNoKChpY29uKSA9PiB7XG4gICAgICAgIGljb25FcnJvcnMgPSB2YWxpZGF0ZUljb25PYmooaWNvbik7XG4gICAgICB9KVxuICAgICAgcmVxdWlyZWRFcnJvcnMuaWNvbnMgPSBpY29uRXJyb3JzO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXF1aXJlZEVycm9ycy5pY29ucyA9ICdtYW5pZmVzdCBpY29ucyBmaWVsZCBpcyByZXF1aXJlZCc7XG4gIH1cbn1cblxuY29uc3QgdmFsaWRhdGVSZXF1aXJlZEZpZWxkcyA9IChtYW5pZmVzdCwgZXJyb3JzKSA9PiB7XG4gIGxldCByZXF1aXJlZEVycm9ycyA9IHt9O1xuICB2YWxpZGF0ZU5hbWUobWFuaWZlc3QsIHJlcXVpcmVkRXJyb3JzKTtcbiAgdmFsaWRhdGVEZXNjcmlwdGlvbihtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpO1xuICB2YWxpZGF0ZUxhbmcobWFuaWZlc3QsIHJlcXVpcmVkRXJyb3JzKTtcbiAgdmFsaWRhdGVUaGVtZUNvbG9yKG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycyk7XG4gIHZhbGlkYXRlT3JpdGF0aW9uKG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycyk7XG4gIHZhbGlkYXRlU3RhcnRVcmwobWFuaWZlc3QsIHJlcXVpcmVkRXJyb3JzKTtcbiAgdmFsaWRhdGVJY29ucyhtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpO1xuICByZXR1cm4gcmVxdWlyZWRFcnJvcnM7XG59XG5cbi8vIHZhbGlkYXRlIG9wdGlvbiBmaWVsZHNcblxuY29uc3QgdmFsaWRhdGVEaXIgPSAobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpID0+IHtcbiAgY29uc3QgRU5VTV9ESVIgPSBbXG4gICAgJ3J0bCcsXG4gICAgJ2x0cicsXG4gICAgJ2F1dG8nXG4gIF07XG4gIGlmICgnZGlyJyBpbiBtYW5pZmVzdCkge1xuICAgIGlmKHR5cGVvZihtYW5pZmVzdFsnZGlyJ10pICE9PSAnc3RyaW5nJykge1xuICAgICAgb3B0aW9uc0Vycm9ycy5kaXIgPSAnbWFuaWZlc3QgZGlyIGZpZWxkIHR5cGUgc2hvdWxkIGJlIHN0cmluZyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGRpciA9IG1hbmlmZXN0WydkaXInXTtcbiAgICAgIGlmKCFFTlVNX0RJUi5pbmNsdWRlcyhkaXIpKSB7XG4gICAgICAgIG9wdGlvbnNFcnJvcnMuZGlyID0gJ21hbmlmZXN0IGRpciBmaWVsZCB2YWx1ZSBub3QgY29ycmVjdCc7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIG9wdGlvbnNFcnJvcnMuZGlyID0gJ21hbmlmZXN0IGRpciBmaWVsZCBpcyByZXF1aXJlZCc7XG4gIH1cbn1cblxuY29uc3QgdmFsaWRhdGVTY29wZSA9IChtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycykgPT4ge1xuICBpZiAoJ3Njb3BlJyBpbiBtYW5pZmVzdCkge1xuICAgIGlmKHR5cGVvZihtYW5pZmVzdFsnc2NvcGUnXSkgIT09ICdzdHJpbmcnKSB7XG4gICAgICBvcHRpb25zRXJyb3JzLnNjb3BlID0gJ21hbmlmZXN0IHNjb3BlIGZpZWxkIHR5cGUgc2hvdWxkIGJlIHN0cmluZyc7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIG9wdGlvbnNFcnJvcnMuc2NvcGUgPSAnbWFuaWZlc3Qgc2NvcGUgZmllbGQgaXMgcmVxdWlyZWQnO1xuICB9XG59XG5cbmNvbnN0IHZhbGlkYXRlRGlzcGxheSA9IChtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycykgPT4ge1xuICBjb25zdCBFTlVNX0RJU1BMQVkgPSBbXG4gICAgJ2Z1bGxzY3JlZW4nLFxuICAgICdzdGFuZGFsb25lJyxcbiAgICAnbWluaW1hbC11aScsXG4gICAgJ2Jyb3dzZXInXG4gIF07XG4gIGlmICgnZGlzcGxheScgaW4gbWFuaWZlc3QpIHtcbiAgICBpZih0eXBlb2YobWFuaWZlc3RbJ2Rpc3BsYXknXSkgIT09ICdzdHJpbmcnKSB7XG4gICAgICBvcHRpb25zRXJyb3JzLmRpc3BsYXkgPSAnbWFuaWZlc3QgZGlzcGxheSBmaWVsZCB0eXBlIHNob3VsZCBiZSBzdHJpbmcnO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBkaXNwbGF5ID0gbWFuaWZlc3RbJ2Rpc3BsYXknXTtcbiAgICAgIGlmKCFFTlVNX0RJU1BMQVkuaW5jbHVkZXMoZGlzcGxheSkpIHtcbiAgICAgICAgb3B0aW9uc0Vycm9ycy5kaXNwbGF5ID0gJ21hbmlmZXN0IGRpc3BsYXkgZmllbGQgdmFsdWUgbm90IGNvcnJlY3QnO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBvcHRpb25zRXJyb3JzLmRpc3BsYXkgPSAnbWFuaWZlc3QgZGlzcGxheSBmaWVsZCBpcyByZXF1aXJlZCc7XG4gIH1cbn1cblxuY29uc3QgdmFsaWRhdGVCYWNrZ3JvdW5kQ29sb3IgPSAobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpID0+IHtcbiAgaWYgKCdiYWNrZ3JvdW5kX2NvbG9yJyBpbiBtYW5pZmVzdCkge1xuICAgIGlmKHR5cGVvZihtYW5pZmVzdFsnYmFja2dyb3VuZF9jb2xvciddKSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIG9wdGlvbnNFcnJvcnMuYmFja2dyb3VuZF9jb2xvciA9ICdtYW5pZmVzdCBiYWNrZ3JvdW5kX2NvbG9yIGZpZWxkIHR5cGUgc2hvdWxkIGJlIHN0cmluZyc7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIG9wdGlvbnNFcnJvcnMuYmFja2dyb3VuZF9jb2xvciA9ICdtYW5pZmVzdCBiYWNrZ3JvdW5kX2NvbG9yIGZpZWxkIGlzIHJlcXVpcmVkJztcbiAgfVxufVxuXG5jb25zdCB2YWxpZGF0ZVJlbGF0ZWRBcHBsaWNhdGlvbnMgPSAobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpID0+IHtcbiAgLy8gdG9kbzogcmVsYXRlZF9hcHBsaWNhdGlvbnMgZmllbGRzXG59XG5cbmNvbnN0IHZhbGlkYXRlUHJlZmVyUmVsYXRlZEFwcGxpY2F0aW9ucyA9IChtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycykgPT4ge1xuICAvLyB0b2RvOiBwcmVmZXJfcmVsYXRlZF9hcHBsaWNhdGlvbnMgZmllbGRzXG59XG5cbmNvbnN0IHZhbGlkYXRlQ2F0ZWdvcmllcyA9IChtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycykgPT4ge1xuICBpZignY2F0ZWdvcmllcycgaW4gbWFuaWZlc3QpIHtcbiAgICBjb25zdCBjYXRlZ29yaWVzID0gbWFuaWZlc3RbJ2NhdGVnb3JpZXMnXTtcbiAgICBpZighQXJyYXkuaXNBcnJheShjYXRlZ29yaWVzKSkge1xuICAgICAgb3B0aW9uc0Vycm9ycy5jYXRlZ29yaWVzID0gJ21hbmlmZXN0IGNhdGVnb3JpZXMgZmllbGQgc2hvdWxkIGJlIEFycmF5JztcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGljb25FcnJvcnMgPSB7fTtcbiAgICAgIGljb25zLmZvckVhY2goKGljb24pID0+IHtcbiAgICAgICAgaWNvbkVycm9ycyA9IHZhbGlkYXRlSWNvbk9iaihpY29uKTtcbiAgICAgIH0pXG4gICAgICByZXF1aXJlZEVycm9ycy5pY29ucyA9IGljb25FcnJvcnM7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIG9wdGlvbnNFcnJvcnMuY2F0ZWdvcmllcyA9ICdtYW5pZmVzdCBjYXRlZ29yaWVzIGZpZWxkIGlzIHJlcXVpcmVkJztcbiAgfVxufVxuXG5jb25zdCB2YWxpZGF0ZVNjcmVlbnNob3RzID0gKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKSA9PiB7XG5cbn1cblxuY29uc3QgdmFsaWRhdGVTaG9ydGN1dHMgPSAobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpID0+IHtcblxufVxuXG5jb25zdCB2YWxpZGF0ZU9wdGlvbkZpZWxkcyA9IChtYW5pZmVzdCkgPT4ge1xuICBsZXQgb3B0aW9uc0Vycm9ycyA9IHt9O1xuICB2YWxpZGF0ZURpcihtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycyk7XG4gIHZhbGlkYXRlU2NvcGUobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpO1xuICB2YWxpZGF0ZURpc3BsYXkobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpO1xuICB2YWxpZGF0ZUJhY2tncm91bmRDb2xvcihtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycyk7XG4gIHZhbGlkYXRlUmVsYXRlZEFwcGxpY2F0aW9ucyhtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycyk7XG4gIHZhbGlkYXRlUHJlZmVyUmVsYXRlZEFwcGxpY2F0aW9ucyhtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycyk7XG4gIHZhbGlkYXRlQ2F0ZWdvcmllcyhtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycyk7XG4gIHZhbGlkYXRlU2NyZWVuc2hvdHMobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpO1xuICB2YWxpZGF0ZVNob3J0Y3V0cyhtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZhbGlkYXRlKG9sZE1hbmlmZXN0KSB7XG4gIHZhbGlkYXRlUmVxdWlyZWRGaWVsZHMob2xkTWFuaWZlc3QpO1xuICB2YWxpZGF0ZU9wdGlvbkZpZWxkcyhvbGRNYW5pZmVzdCk7XG4gIHJldHVybiAnc3VjY2Vzcyc7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/validate.js\n");

/***/ })

})