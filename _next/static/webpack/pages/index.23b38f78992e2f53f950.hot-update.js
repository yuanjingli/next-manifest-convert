webpackHotUpdate_N_E("pages/index",{

/***/ "./utils/validate.js":
/*!***************************!*\
  !*** ./utils/validate.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return validate; });\n/*\n Required fields:\n   name or short_name: string\n   description: string\n   lang: string\n   theme_color: string\n   orientation: string\n   start_url: string\n   icons: Array of Object\n */\n\n/*\n Optional:\n   dir: string\n   scope: string\n   display: string\n   background_color: string\n   related_applications: Array of Object\n   prefer_related_applications: boolean\n   categories: Array of strings\n   screenshots: Array of Object\n   shortcuts: Array of Object\n */\n// validate required fields\nvar validateName = function validateName(manifest, requiredErrors) {\n  if ('name' in manifest) {\n    if (typeof manifest['name'] !== 'string') {\n      requiredErrors.name = 'manifest name field type should be string';\n    }\n  } else {\n    requiredErrors.name = 'manifest name field is required';\n  }\n};\n\nvar validateDescription = function validateDescription(manifest, requiredErrors) {\n  if ('description' in manifest) {\n    if (typeof manifest['description'] !== 'string') {\n      requiredErrors.description = 'manifest description field type should be string';\n    }\n  } else {\n    requiredErrors.description = 'manifest description field is required';\n  }\n};\n\nvar validateLang = function validateLang(manifest, requiredErrors) {\n  if ('lang' in manifest) {\n    var manifestLang = manifest['lang'];\n\n    if (typeof manifestLang !== 'string') {\n      requiredErrors.lang = 'manifest lang field type should be string!';\n    } else {\n      if (!/^\\w*(-\\w*)*$/.test(manifestLang)) {\n        requiredErrors.lang = 'manifest lang field type should be correct format!';\n      }\n    }\n  } else {\n    requiredErrors.lang = 'manifest lang field is required!';\n  }\n};\n\nvar validateThemeColor = function validateThemeColor(manifest, requiredErrors) {\n  if ('theme_color' in manifest) {\n    if (typeof manifest['theme_color'] !== 'string') {\n      requiredErrors.theme_color = 'manifest theme_color field type should be string';\n    }\n  } else {\n    requiredErrors.theme_color = 'manifest theme_color field is required';\n  }\n};\n\nvar validateOritation = function validateOritation(manifest, requiredErrors) {\n  var ENUM_ORIENTATION = ['any', 'natural', 'landscape', 'landscape-primary', 'landscape-secondary', 'portrait', 'portrait-primary', 'portrait-secondary'];\n\n  if ('orientation' in manifest) {\n    if (typeof manifest['orientation'] !== 'string') {\n      requiredErrors.orientation = 'manifest orientation field type should be string';\n    } else {\n      var orientation = manifest['orientation'];\n\n      if (!ENUM_ORIENTATION.includes(orientation)) {\n        requiredErrors.orientation = 'manifest orientation field value not correct';\n      }\n    }\n  } else {\n    requiredErrors.orientation = 'manifest orientation field is required';\n  }\n};\n\nvar validateStartUrl = function validateStartUrl(manifest, requiredErrors) {\n  if ('start_url' in manifest) {\n    if (typeof manifest['start_url'] !== 'string') {\n      requiredErrors.start_url = 'manifest start_url field type should be string';\n    }\n  } else {\n    requiredErrors.start_url = 'manifest start_url field is required';\n  }\n};\n\nvar validateIconObj = function validateIconObj(iconObj) {\n  var error = {}; // icons src validate\n\n  if ('src' in iconObj) {\n    if (typeof iconObj['src'] !== 'string') {\n      error.src = 'manifest icons field icon type should be string';\n    }\n  } else {\n    error.src = 'manifest icons field icon is required';\n  } // icons size validate\n\n\n  if ('sizes' in iconObj) {\n    var sizes = iconObj['sizes'];\n\n    if (typeof sizes !== 'string') {\n      error.sizes = 'manifest icons field size type should be string';\n    } else {\n      if (!/^\\s*\\d+x\\d+(\\s+\\d+x\\d+)*\\s*$/.test(sizes)) {\n        error.sizes = 'manifest icons field sizes should be correct format!';\n      }\n    }\n  } else {\n    error.sizes = 'manifest icons field size is required!';\n  }\n\n  return error;\n};\n\nvar validateIcons = function validateIcons(manifest, requiredErrors) {\n  if ('icons' in manifest) {\n    var icons = manifest['icons'];\n\n    if (!Array.isArray(icons)) {\n      requiredErrors.icons = 'manifest icons field should be Array';\n    } else {\n      var iconErrors = [];\n      icons.forEach(function (icon) {\n        var error = validateIconObj(icon);\n        iconErrors.push(error);\n      });\n      requiredErrors.icons = iconErrors;\n    }\n  } else {\n    requiredErrors.icons = 'manifest icons field is required';\n  }\n};\n\nvar validateRequiredFields = function validateRequiredFields(manifest, errors) {\n  var requiredErrors = {};\n  validateName(manifest, requiredErrors);\n  validateDescription(manifest, requiredErrors);\n  validateLang(manifest, requiredErrors);\n  validateThemeColor(manifest, requiredErrors);\n  validateOritation(manifest, requiredErrors);\n  validateStartUrl(manifest, requiredErrors);\n  validateIcons(manifest, requiredErrors);\n  return requiredErrors;\n}; // validate option fields\n\n\nvar validateDir = function validateDir(manifest, optionsErrors) {\n  var ENUM_DIR = ['rtl', 'ltr', 'auto'];\n\n  if ('dir' in manifest) {\n    if (typeof manifest['dir'] !== 'string') {\n      optionsErrors.dir = 'manifest dir field type should be string';\n    } else {\n      var dir = manifest['dir'];\n\n      if (!ENUM_DIR.includes(dir)) {\n        optionsErrors.dir = 'manifest dir field value not correct';\n      }\n    }\n  } else {\n    optionsErrors.dir = 'manifest dir field is required';\n  }\n};\n\nvar validateScope = function validateScope(manifest, optionsErrors) {\n  if ('scope' in manifest) {\n    if (typeof manifest['scope'] !== 'string') {\n      optionsErrors.scope = 'manifest scope field type should be string';\n    }\n  } else {\n    optionsErrors.scope = 'manifest scope field is required';\n  }\n};\n\nvar validateDisplay = function validateDisplay(manifest, optionsErrors) {\n  var ENUM_DISPLAY = ['fullscreen', 'standalone', 'minimal-ui', 'browser'];\n\n  if ('display' in manifest) {\n    if (typeof manifest['display'] !== 'string') {\n      optionsErrors.display = 'manifest display field type should be string';\n    } else {\n      var display = manifest['display'];\n\n      if (!ENUM_DISPLAY.includes(display)) {\n        optionsErrors.display = 'manifest display field value not correct';\n      }\n    }\n  } else {\n    optionsErrors.display = 'manifest display field is required';\n  }\n};\n\nvar validateBackgroundColor = function validateBackgroundColor(manifest, optionsErrors) {\n  if ('background_color' in manifest) {\n    if (typeof manifest['background_color'] !== 'string') {\n      optionsErrors.background_color = 'manifest background_color field type should be string';\n    }\n  } else {\n    optionsErrors.background_color = 'manifest background_color field is required';\n  }\n};\n\nvar validateRelatedApplications = function validateRelatedApplications(manifest, optionsErrors) {// todo: related_applications fields\n};\n\nvar validatePreferRelatedApplications = function validatePreferRelatedApplications(manifest, optionsErrors) {// todo: prefer_related_applications fields\n};\n\nvar validateCategories = function validateCategories(manifest, optionsErrors) {\n  if ('categories' in manifest) {\n    var categories = manifest['categories'];\n\n    if (!Array.isArray(categories)) {\n      optionsErrors.categories = 'manifest categories field should be Array';\n    } else {\n      var categoriesErrors = [];\n      categories.forEach(function (category) {\n        if (typeof category !== 'string') {\n          categoriesErrors.push({\n            category: 'manifest categories field category should be String'\n          });\n        }\n      });\n      optionsErrors.categories = categoriesErrors;\n    }\n  } else {\n    optionsErrors.categories = 'manifest categories field is required';\n  }\n};\n\nvar validateScreenshots = function validateScreenshots(manifest, optionsErrors) {// todo: screenShots fields\n};\n\nvar validateShortcuts = function validateShortcuts(manifest, optionsErrors) {// todo: shortCuts fields\n};\n\nvar validateOptionFields = function validateOptionFields(manifest) {\n  var optionsErrors = {};\n  validateDir(manifest, optionsErrors);\n  validateScope(manifest, optionsErrors);\n  validateDisplay(manifest, optionsErrors);\n  validateBackgroundColor(manifest, optionsErrors);\n  validateRelatedApplications(manifest, optionsErrors);\n  validatePreferRelatedApplications(manifest, optionsErrors);\n  validateCategories(manifest, optionsErrors);\n  validateScreenshots(manifest, optionsErrors);\n  validateShortcuts(manifest, optionsErrors);\n  return optionsErrors;\n};\n\nfunction validate(oldManifest) {\n  validateRequiredFields(oldManifest);\n  validateOptionFields(oldManifest);\n  return 'success';\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvdmFsaWRhdGUuanM/ZjdkZiJdLCJuYW1lcyI6WyJ2YWxpZGF0ZU5hbWUiLCJtYW5pZmVzdCIsInJlcXVpcmVkRXJyb3JzIiwibmFtZSIsInZhbGlkYXRlRGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvbiIsInZhbGlkYXRlTGFuZyIsIm1hbmlmZXN0TGFuZyIsImxhbmciLCJ0ZXN0IiwidmFsaWRhdGVUaGVtZUNvbG9yIiwidGhlbWVfY29sb3IiLCJ2YWxpZGF0ZU9yaXRhdGlvbiIsIkVOVU1fT1JJRU5UQVRJT04iLCJvcmllbnRhdGlvbiIsImluY2x1ZGVzIiwidmFsaWRhdGVTdGFydFVybCIsInN0YXJ0X3VybCIsInZhbGlkYXRlSWNvbk9iaiIsImljb25PYmoiLCJlcnJvciIsInNyYyIsInNpemVzIiwidmFsaWRhdGVJY29ucyIsImljb25zIiwiQXJyYXkiLCJpc0FycmF5IiwiaWNvbkVycm9ycyIsImZvckVhY2giLCJpY29uIiwicHVzaCIsInZhbGlkYXRlUmVxdWlyZWRGaWVsZHMiLCJlcnJvcnMiLCJ2YWxpZGF0ZURpciIsIm9wdGlvbnNFcnJvcnMiLCJFTlVNX0RJUiIsImRpciIsInZhbGlkYXRlU2NvcGUiLCJzY29wZSIsInZhbGlkYXRlRGlzcGxheSIsIkVOVU1fRElTUExBWSIsImRpc3BsYXkiLCJ2YWxpZGF0ZUJhY2tncm91bmRDb2xvciIsImJhY2tncm91bmRfY29sb3IiLCJ2YWxpZGF0ZVJlbGF0ZWRBcHBsaWNhdGlvbnMiLCJ2YWxpZGF0ZVByZWZlclJlbGF0ZWRBcHBsaWNhdGlvbnMiLCJ2YWxpZGF0ZUNhdGVnb3JpZXMiLCJjYXRlZ29yaWVzIiwiY2F0ZWdvcmllc0Vycm9ycyIsImNhdGVnb3J5IiwidmFsaWRhdGVTY3JlZW5zaG90cyIsInZhbGlkYXRlU2hvcnRjdXRzIiwidmFsaWRhdGVPcHRpb25GaWVsZHMiLCJ2YWxpZGF0ZSIsIm9sZE1hbmlmZXN0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFB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M0MsUUFBRCxFQUFXaUMsYUFBWCxDQUEzQjtBQUNBVyxtQ0FBaUMsQ0FBQzVDLFFBQUQsRUFBV2lDLGFBQVgsQ0FBakM7QUFDQVksb0JBQWtCLENBQUM3QyxRQUFELEVBQVdpQyxhQUFYLENBQWxCO0FBQ0FnQixxQkFBbUIsQ0FBQ2pELFFBQUQsRUFBV2lDLGFBQVgsQ0FBbkI7QUFDQWlCLG1CQUFpQixDQUFDbEQsUUFBRCxFQUFXaUMsYUFBWCxDQUFqQjtBQUNBLFNBQU9BLGFBQVA7QUFDRCxDQVpEOztBQWNlLFNBQVNtQixRQUFULENBQWtCQyxXQUFsQixFQUErQjtBQUM1Q3ZCLHdCQUFzQixDQUFDdUIsV0FBRCxDQUF0QjtBQUNBRixzQkFBb0IsQ0FBQ0UsV0FBRCxDQUFwQjtBQUNBLFNBQU8sU0FBUDtBQUNEIiwiZmlsZSI6Ii4vdXRpbHMvdmFsaWRhdGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuIFJlcXVpcmVkIGZpZWxkczpcbiAgIG5hbWUgb3Igc2hvcnRfbmFtZTogc3RyaW5nXG4gICBkZXNjcmlwdGlvbjogc3RyaW5nXG4gICBsYW5nOiBzdHJpbmdcbiAgIHRoZW1lX2NvbG9yOiBzdHJpbmdcbiAgIG9yaWVudGF0aW9uOiBzdHJpbmdcbiAgIHN0YXJ0X3VybDogc3RyaW5nXG4gICBpY29uczogQXJyYXkgb2YgT2JqZWN0XG4gKi9cblxuLypcbiBPcHRpb25hbDpcbiAgIGRpcjogc3RyaW5nXG4gICBzY29wZTogc3RyaW5nXG4gICBkaXNwbGF5OiBzdHJpbmdcbiAgIGJhY2tncm91bmRfY29sb3I6IHN0cmluZ1xuICAgcmVsYXRlZF9hcHBsaWNhdGlvbnM6IEFycmF5IG9mIE9iamVjdFxuICAgcHJlZmVyX3JlbGF0ZWRfYXBwbGljYXRpb25zOiBib29sZWFuXG4gICBjYXRlZ29yaWVzOiBBcnJheSBvZiBzdHJpbmdzXG4gICBzY3JlZW5zaG90czogQXJyYXkgb2YgT2JqZWN0XG4gICBzaG9ydGN1dHM6IEFycmF5IG9mIE9iamVjdFxuICovXG5cbi8vIHZhbGlkYXRlIHJlcXVpcmVkIGZpZWxkc1xuY29uc3QgdmFsaWRhdGVOYW1lID0gKG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycykgPT4ge1xuICBpZiAoJ25hbWUnIGluIG1hbmlmZXN0KSB7XG4gICAgaWYodHlwZW9mKG1hbmlmZXN0WyduYW1lJ10pICE9PSAnc3RyaW5nJykge1xuICAgICAgcmVxdWlyZWRFcnJvcnMubmFtZSA9ICdtYW5pZmVzdCBuYW1lIGZpZWxkIHR5cGUgc2hvdWxkIGJlIHN0cmluZyc7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJlcXVpcmVkRXJyb3JzLm5hbWUgPSAnbWFuaWZlc3QgbmFtZSBmaWVsZCBpcyByZXF1aXJlZCc7XG4gIH1cbn1cblxuY29uc3QgdmFsaWRhdGVEZXNjcmlwdGlvbiA9IChtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpID0+IHtcbiAgaWYgKCdkZXNjcmlwdGlvbicgaW4gbWFuaWZlc3QpIHtcbiAgICBpZih0eXBlb2YobWFuaWZlc3RbJ2Rlc2NyaXB0aW9uJ10pICE9PSAnc3RyaW5nJykge1xuICAgICAgcmVxdWlyZWRFcnJvcnMuZGVzY3JpcHRpb24gPSAnbWFuaWZlc3QgZGVzY3JpcHRpb24gZmllbGQgdHlwZSBzaG91bGQgYmUgc3RyaW5nJztcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmVxdWlyZWRFcnJvcnMuZGVzY3JpcHRpb24gPSAnbWFuaWZlc3QgZGVzY3JpcHRpb24gZmllbGQgaXMgcmVxdWlyZWQnO1xuICB9XG59XG5cbmNvbnN0IHZhbGlkYXRlTGFuZyA9IChtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpID0+IHtcbiAgaWYoJ2xhbmcnIGluIG1hbmlmZXN0KSB7XG4gICAgY29uc3QgbWFuaWZlc3RMYW5nID0gbWFuaWZlc3RbJ2xhbmcnXTtcbiAgICBpZih0eXBlb2YobWFuaWZlc3RMYW5nKSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHJlcXVpcmVkRXJyb3JzLmxhbmcgPSAnbWFuaWZlc3QgbGFuZyBmaWVsZCB0eXBlIHNob3VsZCBiZSBzdHJpbmchJztcbiAgICB9IGVsc2Uge1xuICAgICAgaWYoIS9eXFx3KigtXFx3KikqJC8udGVzdChtYW5pZmVzdExhbmcpKSB7XG4gICAgICAgIHJlcXVpcmVkRXJyb3JzLmxhbmcgPSAnbWFuaWZlc3QgbGFuZyBmaWVsZCB0eXBlIHNob3VsZCBiZSBjb3JyZWN0IGZvcm1hdCEnO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXF1aXJlZEVycm9ycy5sYW5nID0gJ21hbmlmZXN0IGxhbmcgZmllbGQgaXMgcmVxdWlyZWQhJ1xuICB9XG59XG5cbmNvbnN0IHZhbGlkYXRlVGhlbWVDb2xvciA9IChtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpID0+IHtcbiAgaWYgKCd0aGVtZV9jb2xvcicgaW4gbWFuaWZlc3QpIHtcbiAgICBpZih0eXBlb2YobWFuaWZlc3RbJ3RoZW1lX2NvbG9yJ10pICE9PSAnc3RyaW5nJykge1xuICAgICAgcmVxdWlyZWRFcnJvcnMudGhlbWVfY29sb3IgPSAnbWFuaWZlc3QgdGhlbWVfY29sb3IgZmllbGQgdHlwZSBzaG91bGQgYmUgc3RyaW5nJztcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmVxdWlyZWRFcnJvcnMudGhlbWVfY29sb3IgPSAnbWFuaWZlc3QgdGhlbWVfY29sb3IgZmllbGQgaXMgcmVxdWlyZWQnO1xuICB9XG59XG5cbmNvbnN0IHZhbGlkYXRlT3JpdGF0aW9uID0gKG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycykgPT4ge1xuICBjb25zdCBFTlVNX09SSUVOVEFUSU9OID0gW1xuICAgICdhbnknLFxuICAgICduYXR1cmFsJyxcbiAgICAnbGFuZHNjYXBlJyxcbiAgICAnbGFuZHNjYXBlLXByaW1hcnknLFxuICAgICdsYW5kc2NhcGUtc2Vjb25kYXJ5JyxcbiAgICAncG9ydHJhaXQnLFxuICAgICdwb3J0cmFpdC1wcmltYXJ5JyxcbiAgICAncG9ydHJhaXQtc2Vjb25kYXJ5J1xuICBdO1xuICBpZiAoJ29yaWVudGF0aW9uJyBpbiBtYW5pZmVzdCkge1xuICAgIGlmKHR5cGVvZihtYW5pZmVzdFsnb3JpZW50YXRpb24nXSkgIT09ICdzdHJpbmcnKSB7XG4gICAgICByZXF1aXJlZEVycm9ycy5vcmllbnRhdGlvbiA9ICdtYW5pZmVzdCBvcmllbnRhdGlvbiBmaWVsZCB0eXBlIHNob3VsZCBiZSBzdHJpbmcnO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBvcmllbnRhdGlvbiA9IG1hbmlmZXN0WydvcmllbnRhdGlvbiddO1xuICAgICAgaWYoIUVOVU1fT1JJRU5UQVRJT04uaW5jbHVkZXMob3JpZW50YXRpb24pKSB7XG4gICAgICAgIHJlcXVpcmVkRXJyb3JzLm9yaWVudGF0aW9uID0gJ21hbmlmZXN0IG9yaWVudGF0aW9uIGZpZWxkIHZhbHVlIG5vdCBjb3JyZWN0JztcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmVxdWlyZWRFcnJvcnMub3JpZW50YXRpb24gPSAnbWFuaWZlc3Qgb3JpZW50YXRpb24gZmllbGQgaXMgcmVxdWlyZWQnO1xuICB9XG59XG5cbmNvbnN0IHZhbGlkYXRlU3RhcnRVcmwgPSAobWFuaWZlc3QsIHJlcXVpcmVkRXJyb3JzKSA9PiB7XG4gIGlmICgnc3RhcnRfdXJsJyBpbiBtYW5pZmVzdCkge1xuICAgIGlmKHR5cGVvZihtYW5pZmVzdFsnc3RhcnRfdXJsJ10pICE9PSAnc3RyaW5nJykge1xuICAgICAgcmVxdWlyZWRFcnJvcnMuc3RhcnRfdXJsID0gJ21hbmlmZXN0IHN0YXJ0X3VybCBmaWVsZCB0eXBlIHNob3VsZCBiZSBzdHJpbmcnO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXF1aXJlZEVycm9ycy5zdGFydF91cmwgPSAnbWFuaWZlc3Qgc3RhcnRfdXJsIGZpZWxkIGlzIHJlcXVpcmVkJztcbiAgfVxufVxuXG5jb25zdCB2YWxpZGF0ZUljb25PYmogPSAoaWNvbk9iaikgPT4ge1xuICBsZXQgZXJyb3IgPSB7fTtcbiAgLy8gaWNvbnMgc3JjIHZhbGlkYXRlXG4gIGlmICgnc3JjJyBpbiBpY29uT2JqKSB7XG4gICAgaWYodHlwZW9mKGljb25PYmpbJ3NyYyddKSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIGVycm9yLnNyYyA9ICdtYW5pZmVzdCBpY29ucyBmaWVsZCBpY29uIHR5cGUgc2hvdWxkIGJlIHN0cmluZyc7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGVycm9yLnNyYyA9ICdtYW5pZmVzdCBpY29ucyBmaWVsZCBpY29uIGlzIHJlcXVpcmVkJztcbiAgfVxuICAvLyBpY29ucyBzaXplIHZhbGlkYXRlXG4gIGlmKCdzaXplcycgaW4gaWNvbk9iaikge1xuICAgIGNvbnN0IHNpemVzID0gaWNvbk9ialsnc2l6ZXMnXTtcbiAgICBpZih0eXBlb2Yoc2l6ZXMpICE9PSAnc3RyaW5nJykge1xuICAgICAgZXJyb3Iuc2l6ZXMgPSAnbWFuaWZlc3QgaWNvbnMgZmllbGQgc2l6ZSB0eXBlIHNob3VsZCBiZSBzdHJpbmcnO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZighL15cXHMqXFxkK3hcXGQrKFxccytcXGQreFxcZCspKlxccyokLy50ZXN0KHNpemVzKSkge1xuICAgICAgICBlcnJvci5zaXplcyA9ICdtYW5pZmVzdCBpY29ucyBmaWVsZCBzaXplcyBzaG91bGQgYmUgY29ycmVjdCBmb3JtYXQhJztcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZXJyb3Iuc2l6ZXMgPSAnbWFuaWZlc3QgaWNvbnMgZmllbGQgc2l6ZSBpcyByZXF1aXJlZCEnXG4gIH1cbiAgcmV0dXJuIGVycm9yO1xufVxuXG5jb25zdCB2YWxpZGF0ZUljb25zID0gKG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycykgPT4ge1xuICBpZignaWNvbnMnIGluIG1hbmlmZXN0KSB7XG4gICAgY29uc3QgaWNvbnMgPSBtYW5pZmVzdFsnaWNvbnMnXTtcbiAgICBpZighQXJyYXkuaXNBcnJheShpY29ucykpIHtcbiAgICAgIHJlcXVpcmVkRXJyb3JzLmljb25zID0gJ21hbmlmZXN0IGljb25zIGZpZWxkIHNob3VsZCBiZSBBcnJheSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBpY29uRXJyb3JzID0gW107XG4gICAgICBpY29ucy5mb3JFYWNoKChpY29uKSA9PiB7XG4gICAgICAgIGNvbnN0IGVycm9yID0gdmFsaWRhdGVJY29uT2JqKGljb24pO1xuICAgICAgICBpY29uRXJyb3JzLnB1c2goZXJyb3IpO1xuICAgICAgfSlcbiAgICAgIHJlcXVpcmVkRXJyb3JzLmljb25zID0gaWNvbkVycm9ycztcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmVxdWlyZWRFcnJvcnMuaWNvbnMgPSAnbWFuaWZlc3QgaWNvbnMgZmllbGQgaXMgcmVxdWlyZWQnO1xuICB9XG59XG5cbmNvbnN0IHZhbGlkYXRlUmVxdWlyZWRGaWVsZHMgPSAobWFuaWZlc3QsIGVycm9ycykgPT4ge1xuICBsZXQgcmVxdWlyZWRFcnJvcnMgPSB7fTtcbiAgdmFsaWRhdGVOYW1lKG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycyk7XG4gIHZhbGlkYXRlRGVzY3JpcHRpb24obWFuaWZlc3QsIHJlcXVpcmVkRXJyb3JzKTtcbiAgdmFsaWRhdGVMYW5nKG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycyk7XG4gIHZhbGlkYXRlVGhlbWVDb2xvcihtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpO1xuICB2YWxpZGF0ZU9yaXRhdGlvbihtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpO1xuICB2YWxpZGF0ZVN0YXJ0VXJsKG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycyk7XG4gIHZhbGlkYXRlSWNvbnMobWFuaWZlc3QsIHJlcXVpcmVkRXJyb3JzKTtcbiAgcmV0dXJuIHJlcXVpcmVkRXJyb3JzO1xufVxuXG4vLyB2YWxpZGF0ZSBvcHRpb24gZmllbGRzXG5cbmNvbnN0IHZhbGlkYXRlRGlyID0gKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKSA9PiB7XG4gIGNvbnN0IEVOVU1fRElSID0gW1xuICAgICdydGwnLFxuICAgICdsdHInLFxuICAgICdhdXRvJ1xuICBdO1xuICBpZiAoJ2RpcicgaW4gbWFuaWZlc3QpIHtcbiAgICBpZih0eXBlb2YobWFuaWZlc3RbJ2RpciddKSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIG9wdGlvbnNFcnJvcnMuZGlyID0gJ21hbmlmZXN0IGRpciBmaWVsZCB0eXBlIHNob3VsZCBiZSBzdHJpbmcnO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBkaXIgPSBtYW5pZmVzdFsnZGlyJ107XG4gICAgICBpZighRU5VTV9ESVIuaW5jbHVkZXMoZGlyKSkge1xuICAgICAgICBvcHRpb25zRXJyb3JzLmRpciA9ICdtYW5pZmVzdCBkaXIgZmllbGQgdmFsdWUgbm90IGNvcnJlY3QnO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBvcHRpb25zRXJyb3JzLmRpciA9ICdtYW5pZmVzdCBkaXIgZmllbGQgaXMgcmVxdWlyZWQnO1xuICB9XG59XG5cbmNvbnN0IHZhbGlkYXRlU2NvcGUgPSAobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpID0+IHtcbiAgaWYgKCdzY29wZScgaW4gbWFuaWZlc3QpIHtcbiAgICBpZih0eXBlb2YobWFuaWZlc3RbJ3Njb3BlJ10pICE9PSAnc3RyaW5nJykge1xuICAgICAgb3B0aW9uc0Vycm9ycy5zY29wZSA9ICdtYW5pZmVzdCBzY29wZSBmaWVsZCB0eXBlIHNob3VsZCBiZSBzdHJpbmcnO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBvcHRpb25zRXJyb3JzLnNjb3BlID0gJ21hbmlmZXN0IHNjb3BlIGZpZWxkIGlzIHJlcXVpcmVkJztcbiAgfVxufVxuXG5jb25zdCB2YWxpZGF0ZURpc3BsYXkgPSAobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpID0+IHtcbiAgY29uc3QgRU5VTV9ESVNQTEFZID0gW1xuICAgICdmdWxsc2NyZWVuJyxcbiAgICAnc3RhbmRhbG9uZScsXG4gICAgJ21pbmltYWwtdWknLFxuICAgICdicm93c2VyJ1xuICBdO1xuICBpZiAoJ2Rpc3BsYXknIGluIG1hbmlmZXN0KSB7XG4gICAgaWYodHlwZW9mKG1hbmlmZXN0WydkaXNwbGF5J10pICE9PSAnc3RyaW5nJykge1xuICAgICAgb3B0aW9uc0Vycm9ycy5kaXNwbGF5ID0gJ21hbmlmZXN0IGRpc3BsYXkgZmllbGQgdHlwZSBzaG91bGQgYmUgc3RyaW5nJztcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZGlzcGxheSA9IG1hbmlmZXN0WydkaXNwbGF5J107XG4gICAgICBpZighRU5VTV9ESVNQTEFZLmluY2x1ZGVzKGRpc3BsYXkpKSB7XG4gICAgICAgIG9wdGlvbnNFcnJvcnMuZGlzcGxheSA9ICdtYW5pZmVzdCBkaXNwbGF5IGZpZWxkIHZhbHVlIG5vdCBjb3JyZWN0JztcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgb3B0aW9uc0Vycm9ycy5kaXNwbGF5ID0gJ21hbmlmZXN0IGRpc3BsYXkgZmllbGQgaXMgcmVxdWlyZWQnO1xuICB9XG59XG5cbmNvbnN0IHZhbGlkYXRlQmFja2dyb3VuZENvbG9yID0gKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKSA9PiB7XG4gIGlmICgnYmFja2dyb3VuZF9jb2xvcicgaW4gbWFuaWZlc3QpIHtcbiAgICBpZih0eXBlb2YobWFuaWZlc3RbJ2JhY2tncm91bmRfY29sb3InXSkgIT09ICdzdHJpbmcnKSB7XG4gICAgICBvcHRpb25zRXJyb3JzLmJhY2tncm91bmRfY29sb3IgPSAnbWFuaWZlc3QgYmFja2dyb3VuZF9jb2xvciBmaWVsZCB0eXBlIHNob3VsZCBiZSBzdHJpbmcnO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBvcHRpb25zRXJyb3JzLmJhY2tncm91bmRfY29sb3IgPSAnbWFuaWZlc3QgYmFja2dyb3VuZF9jb2xvciBmaWVsZCBpcyByZXF1aXJlZCc7XG4gIH1cbn1cblxuY29uc3QgdmFsaWRhdGVSZWxhdGVkQXBwbGljYXRpb25zID0gKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKSA9PiB7XG4gIC8vIHRvZG86IHJlbGF0ZWRfYXBwbGljYXRpb25zIGZpZWxkc1xufVxuXG5jb25zdCB2YWxpZGF0ZVByZWZlclJlbGF0ZWRBcHBsaWNhdGlvbnMgPSAobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpID0+IHtcbiAgLy8gdG9kbzogcHJlZmVyX3JlbGF0ZWRfYXBwbGljYXRpb25zIGZpZWxkc1xufVxuXG5jb25zdCB2YWxpZGF0ZUNhdGVnb3JpZXMgPSAobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpID0+IHtcbiAgaWYoJ2NhdGVnb3JpZXMnIGluIG1hbmlmZXN0KSB7XG4gICAgY29uc3QgY2F0ZWdvcmllcyA9IG1hbmlmZXN0WydjYXRlZ29yaWVzJ107XG4gICAgaWYoIUFycmF5LmlzQXJyYXkoY2F0ZWdvcmllcykpIHtcbiAgICAgIG9wdGlvbnNFcnJvcnMuY2F0ZWdvcmllcyA9ICdtYW5pZmVzdCBjYXRlZ29yaWVzIGZpZWxkIHNob3VsZCBiZSBBcnJheSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBjYXRlZ29yaWVzRXJyb3JzID0gW107XG4gICAgICBjYXRlZ29yaWVzLmZvckVhY2goKGNhdGVnb3J5KSA9PiB7XG4gICAgICAgIGlmKHR5cGVvZihjYXRlZ29yeSkgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgY2F0ZWdvcmllc0Vycm9ycy5wdXNoKHtcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnbWFuaWZlc3QgY2F0ZWdvcmllcyBmaWVsZCBjYXRlZ29yeSBzaG91bGQgYmUgU3RyaW5nJ1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgb3B0aW9uc0Vycm9ycy5jYXRlZ29yaWVzID0gY2F0ZWdvcmllc0Vycm9ycztcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgb3B0aW9uc0Vycm9ycy5jYXRlZ29yaWVzID0gJ21hbmlmZXN0IGNhdGVnb3JpZXMgZmllbGQgaXMgcmVxdWlyZWQnO1xuICB9XG59XG5cbmNvbnN0IHZhbGlkYXRlU2NyZWVuc2hvdHMgPSAobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpID0+IHtcbiAgLy8gdG9kbzogc2NyZWVuU2hvdHMgZmllbGRzXG59XG5cbmNvbnN0IHZhbGlkYXRlU2hvcnRjdXRzID0gKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKSA9PiB7XG4gIC8vIHRvZG86IHNob3J0Q3V0cyBmaWVsZHNcbn1cblxuY29uc3QgdmFsaWRhdGVPcHRpb25GaWVsZHMgPSAobWFuaWZlc3QpID0+IHtcbiAgbGV0IG9wdGlvbnNFcnJvcnMgPSB7fTtcbiAgdmFsaWRhdGVEaXIobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpO1xuICB2YWxpZGF0ZVNjb3BlKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKTtcbiAgdmFsaWRhdGVEaXNwbGF5KG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKTtcbiAgdmFsaWRhdGVCYWNrZ3JvdW5kQ29sb3IobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpO1xuICB2YWxpZGF0ZVJlbGF0ZWRBcHBsaWNhdGlvbnMobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpO1xuICB2YWxpZGF0ZVByZWZlclJlbGF0ZWRBcHBsaWNhdGlvbnMobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpO1xuICB2YWxpZGF0ZUNhdGVnb3JpZXMobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpO1xuICB2YWxpZGF0ZVNjcmVlbnNob3RzKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKTtcbiAgdmFsaWRhdGVTaG9ydGN1dHMobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpO1xuICByZXR1cm4gb3B0aW9uc0Vycm9ycztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmFsaWRhdGUob2xkTWFuaWZlc3QpIHtcbiAgdmFsaWRhdGVSZXF1aXJlZEZpZWxkcyhvbGRNYW5pZmVzdCk7XG4gIHZhbGlkYXRlT3B0aW9uRmllbGRzKG9sZE1hbmlmZXN0KTtcbiAgcmV0dXJuICdzdWNjZXNzJztcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/validate.js\n");

/***/ })

})