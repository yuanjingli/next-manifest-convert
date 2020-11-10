webpackHotUpdate_N_E("pages/index",{

/***/ "./utils/validate.js":
/*!***************************!*\
  !*** ./utils/validate.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return validate; });\n/*\n Required fields:\n   name or short_name: string\n   description: string\n   lang: string\n   theme_color: string\n   orientation: string\n   start_url: string\n   icons: Array of Object\n */\n\n/*\n Optional:\n   dir: string\n   scope: string\n   display: string\n   background_color: string\n   related_applications: Array of Object\n   prefer_related_applications: boolean\n   categories: Array of strings\n   screenshots: Array of Object\n   shortcuts: Array of Object\n */\n// validate required fields\nvar validateName = function validateName(manifest, requiredErrors) {\n  if ('name' in manifest) {\n    if (typeof manifest['name'] !== 'string') {\n      requiredErrors.name = 'manifest name field type should be string';\n    }\n  } else {\n    requiredErrors.name = 'manifest name field is required';\n  }\n};\n\nvar validateDescription = function validateDescription(manifest, requiredErrors) {\n  if ('description' in manifest) {\n    if (typeof manifest['description'] !== 'string') {\n      requiredErrors.description = 'manifest description field type should be string';\n    }\n  } else {\n    requiredErrors.description = 'manifest description field is required';\n  }\n};\n\nvar validateLang = function validateLang(manifest, requiredErrors) {\n  if ('lang' in manifest) {\n    var manifestLang = manifest['lang'];\n\n    if (typeof manifestLang !== 'string') {\n      requiredErrors.lang = 'manifest lang field type should be string!';\n    } else {\n      if (!/^\\w*(-\\w*)*$/.test(manifestLang)) {\n        requiredErrors.lang = 'manifest lang field type should be correct format!';\n      }\n    }\n  } else {\n    requiredErrors.lang = 'manifest lang field is required!';\n  }\n};\n\nvar validateThemeColor = function validateThemeColor(manifest, requiredErrors) {\n  if ('theme_color' in manifest) {\n    if (typeof manifest['theme_color'] !== 'string') {\n      requiredErrors.theme_color = 'manifest theme_color field type should be string';\n    }\n  } else {\n    requiredErrors.theme_color = 'manifest theme_color field is required';\n  }\n};\n\nvar validateOritation = function validateOritation(manifest, requiredErrors) {\n  var ENUM_ORIENTATION = ['any', 'natural', 'landscape', 'landscape-primary', 'landscape-secondary', 'portrait', 'portrait-primary', 'portrait-secondary'];\n\n  if ('orientation' in manifest) {\n    if (typeof manifest['orientation'] !== 'string') {\n      requiredErrors.orientation = 'manifest orientation field type should be string';\n    } else {\n      var orientation = manifest['orientation'];\n\n      if (!ENUM_ORIENTATION.includes(orientation)) {\n        requiredErrors.orientation = 'manifest orientation field value not correct';\n      }\n    }\n  } else {\n    requiredErrors.orientation = 'manifest orientation field is required';\n  }\n};\n\nvar validateStartUrl = function validateStartUrl(manifest, requiredErrors) {\n  if ('start_url' in manifest) {\n    if (typeof manifest['start_url'] !== 'string') {\n      requiredErrors.start_url = 'manifest start_url field type should be string';\n    }\n  } else {\n    requiredErrors.start_url = 'manifest start_url field is required';\n  }\n};\n\nvar validateIconObj = function validateIconObj(iconObj) {\n  var error = {}; // icons src validate\n\n  if ('src' in iconObj) {\n    if (typeof iconObj['src'] !== 'string') {\n      error.src = 'manifest icons field icon type should be string';\n    }\n  } else {\n    error.src = 'manifest icons field icon is required';\n  } // icons size validate\n\n\n  if ('sizes' in iconObj) {\n    var sizes = iconObj['sizes'];\n\n    if (typeof sizes !== 'string') {\n      error.sizes = 'manifest icons field size type should be string';\n    } else {\n      if (!/^\\s*\\d+x\\d+(\\s+\\d+x\\d+)*\\s*$/.test(sizes)) {\n        error.sizes = 'manifest icons field sizes should be correct format!';\n      }\n    }\n  } else {\n    error.sizes = 'manifest icons field size is required!';\n  }\n\n  return error;\n};\n\nvar validateIcons = function validateIcons(manifest, requiredErrors) {\n  if ('icons' in manifest) {\n    var icons = manifest['icons'];\n\n    if (!Array.isArray(icons)) {\n      requiredErrors.icons = 'manifest icons field should be Array';\n    } else {\n      var iconErrors = [];\n      icons.forEach(function (icon) {\n        var error = validateIconObj(icon);\n\n        if (Object.keys(error).length > 0) {\n          iconErrors.push(error);\n        }\n      });\n\n      if (iconErrors.length > 0) {}\n\n      requiredErrors.icons = iconErrors;\n    }\n  } else {\n    requiredErrors.icons = 'manifest icons field is required';\n  }\n};\n\nvar validateRequiredFields = function validateRequiredFields(manifest, errors) {\n  var requiredErrors = {};\n  validateName(manifest, requiredErrors);\n  validateDescription(manifest, requiredErrors);\n  validateLang(manifest, requiredErrors);\n  validateThemeColor(manifest, requiredErrors);\n  validateOritation(manifest, requiredErrors);\n  validateStartUrl(manifest, requiredErrors);\n  validateIcons(manifest, requiredErrors);\n  return requiredErrors;\n}; // validate option fields\n\n\nvar validateDir = function validateDir(manifest, optionsErrors) {\n  var ENUM_DIR = ['rtl', 'ltr', 'auto'];\n\n  if ('dir' in manifest) {\n    if (typeof manifest['dir'] !== 'string') {\n      optionsErrors.dir = 'manifest dir field type should be string';\n    } else {\n      var dir = manifest['dir'];\n\n      if (!ENUM_DIR.includes(dir)) {\n        optionsErrors.dir = 'manifest dir field value not correct';\n      }\n    }\n  } else {\n    optionsErrors.dir = 'manifest dir field is null';\n  }\n};\n\nvar validateScope = function validateScope(manifest, optionsErrors) {\n  if ('scope' in manifest) {\n    if (typeof manifest['scope'] !== 'string') {\n      optionsErrors.scope = 'manifest scope field type should be string';\n    }\n  } else {\n    optionsErrors.scope = 'manifest scope field is null';\n  }\n};\n\nvar validateDisplay = function validateDisplay(manifest, optionsErrors) {\n  var ENUM_DISPLAY = ['fullscreen', 'standalone', 'minimal-ui', 'browser'];\n\n  if ('display' in manifest) {\n    if (typeof manifest['display'] !== 'string') {\n      optionsErrors.display = 'manifest display field type should be string';\n    } else {\n      var display = manifest['display'];\n\n      if (!ENUM_DISPLAY.includes(display)) {\n        optionsErrors.display = 'manifest display field value not correct';\n      }\n    }\n  } else {\n    optionsErrors.display = 'manifest display field is null';\n  }\n};\n\nvar validateBackgroundColor = function validateBackgroundColor(manifest, optionsErrors) {\n  if ('background_color' in manifest) {\n    if (typeof manifest['background_color'] !== 'string') {\n      optionsErrors.background_color = 'manifest background_color field type should be string';\n    }\n  } else {\n    optionsErrors.background_color = 'manifest background_color field is null';\n  }\n};\n\nvar validateRelatedApplications = function validateRelatedApplications(manifest, optionsErrors) {// todo: related_applications fields\n};\n\nvar validatePreferRelatedApplications = function validatePreferRelatedApplications(manifest, optionsErrors) {// todo: prefer_related_applications fields\n};\n\nvar validateCategories = function validateCategories(manifest, optionsErrors) {\n  if ('categories' in manifest) {\n    var categories = manifest['categories'];\n\n    if (!Array.isArray(categories)) {\n      optionsErrors.categories = 'manifest categories field should be Array';\n    } else {\n      var categoriesErrors = [];\n      categories.forEach(function (category) {\n        if (typeof category !== 'string') {\n          categoriesErrors.push({\n            category: 'manifest categories field category should be String'\n          });\n        }\n      });\n\n      if (categoriesErrors.length > 0) {\n        optionsErrors.categories = categoriesErrors;\n      }\n    }\n  } else {\n    optionsErrors.categories = 'manifest categories field is null';\n  }\n};\n\nvar validateScreenshots = function validateScreenshots(manifest, optionsErrors) {// todo: screenShots fields\n};\n\nvar validateShortcuts = function validateShortcuts(manifest, optionsErrors) {// todo: shortCuts fields\n};\n\nvar validateOptionFields = function validateOptionFields(manifest) {\n  var optionsErrors = {};\n  validateDir(manifest, optionsErrors);\n  validateScope(manifest, optionsErrors);\n  validateDisplay(manifest, optionsErrors);\n  validateBackgroundColor(manifest, optionsErrors);\n  validateRelatedApplications(manifest, optionsErrors);\n  validatePreferRelatedApplications(manifest, optionsErrors);\n  validateCategories(manifest, optionsErrors);\n  validateScreenshots(manifest, optionsErrors);\n  validateShortcuts(manifest, optionsErrors);\n  return optionsErrors;\n};\n\nfunction validate(oldManifest) {\n  return {\n    'requiredFields': validateRequiredFields(oldManifest),\n    'optionFields': validateOptionFields(oldManifest)\n  };\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvdmFsaWRhdGUuanM/ZjdkZiJdLCJuYW1lcyI6WyJ2YWxpZGF0ZU5hbWUiLCJtYW5pZmVzdCIsInJlcXVpcmVkRXJyb3JzIiwibmFtZSIsInZhbGlkYXRlRGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvbiIsInZhbGlkYXRlTGFuZyIsIm1hbmlmZXN0TGFuZyIsImxhbmciLCJ0ZXN0IiwidmFsaWRhdGVUaGVtZUNvbG9yIiwidGhlbWVfY29sb3IiLCJ2YWxpZGF0ZU9yaXRhdGlvbiIsIkVOVU1fT1JJRU5UQVRJT04iLCJvcmllbnRhdGlvbiIsImluY2x1ZGVzIiwidmFsaWRhdGVTdGFydFVybCIsInN0YXJ0X3VybCIsInZhbGlkYXRlSWNvbk9iaiIsImljb25PYmoiLCJlcnJvciIsInNyYyIsInNpemVzIiwidmFsaWRhdGVJY29ucyIsImljb25zIiwiQXJyYXkiLCJpc0FycmF5IiwiaWNvbkVycm9ycyIsImZvckVhY2giLCJpY29uIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsInB1c2giLCJ2YWxpZGF0ZVJlcXVpcmVkRmllbGRzIiwiZXJyb3JzIiwidmFsaWRhdGVEaXIiLCJvcHRpb25zRXJyb3JzIiwiRU5VTV9ESVIiLCJkaXIiLCJ2YWxpZGF0ZVNjb3BlIiwic2NvcGUiLCJ2YWxpZGF0ZURpc3BsYXkiLCJFTlVNX0RJU1BMQVkiLCJkaXNwbGF5IiwidmFsaWRhdGVCYWNrZ3JvdW5kQ29sb3IiLCJiYWNrZ3JvdW5kX2NvbG9yIiwidmFsaWRhdGVSZWxhdGVkQXBwbGljYXRpb25zIiwidmFsaWRhdGVQcmVmZXJSZWxhdGVkQXBwbGljYXRpb25zIiwidmFsaWRhdGVDYXRlZ29yaWVzIiwiY2F0ZWdvcmllcyIsImNhdGVnb3JpZXNFcnJvcnMiLCJjYXRlZ29yeSIsInZhbGlkYXRlU2NyZWVuc2hvdHMiLCJ2YWxpZGF0ZVNob3J0Y3V0cyIsInZhbGlkYXRlT3B0aW9uRmllbGRzIiwidmFsaWRhdGUiLCJvbGRNYW5pZmVz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QUFjO0FBQ3pDLE1BQUlvQyxhQUFhLEdBQUcsRUFBcEI7QUFDQUQsYUFBVyxDQUFDbkMsUUFBRCxFQUFXb0MsYUFBWCxDQUFYO0FBQ0FHLGVBQWEsQ0FBQ3ZDLFFBQUQsRUFBV29DLGFBQVgsQ0FBYjtBQUNBSyxpQkFBZSxDQUFDekMsUUFBRCxFQUFXb0MsYUFBWCxDQUFmO0FBQ0FRLHlCQUF1QixDQUFDNUMsUUFBRCxFQUFXb0MsYUFBWCxDQUF2QjtBQUNBVSw2QkFBMkIsQ0FBQzlDLFFBQUQsRUFBV29DLGFBQVgsQ0FBM0I7QUFDQVcsbUNBQWlDLENBQUMvQyxRQUFELEVBQVdvQyxhQUFYLENBQWpDO0FBQ0FZLG9CQUFrQixDQUFDaEQsUUFBRCxFQUFXb0MsYUFBWCxDQUFsQjtBQUNBZ0IscUJBQW1CLENBQUNwRCxRQUFELEVBQVdvQyxhQUFYLENBQW5CO0FBQ0FpQixtQkFBaUIsQ0FBQ3JELFFBQUQsRUFBV29DLGFBQVgsQ0FBakI7QUFDQSxTQUFPQSxhQUFQO0FBQ0QsQ0FaRDs7QUFjZSxTQUFTbUIsUUFBVCxDQUFrQkMsV0FBbEIsRUFBK0I7QUFDNUMsU0FBTztBQUNMLHNCQUFrQnZCLHNCQUFzQixDQUFDdUIsV0FBRCxDQURuQztBQUVMLG9CQUFnQkYsb0JBQW9CLENBQUNFLFdBQUQ7QUFGL0IsR0FBUDtBQUlEIiwiZmlsZSI6Ii4vdXRpbHMvdmFsaWRhdGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuIFJlcXVpcmVkIGZpZWxkczpcbiAgIG5hbWUgb3Igc2hvcnRfbmFtZTogc3RyaW5nXG4gICBkZXNjcmlwdGlvbjogc3RyaW5nXG4gICBsYW5nOiBzdHJpbmdcbiAgIHRoZW1lX2NvbG9yOiBzdHJpbmdcbiAgIG9yaWVudGF0aW9uOiBzdHJpbmdcbiAgIHN0YXJ0X3VybDogc3RyaW5nXG4gICBpY29uczogQXJyYXkgb2YgT2JqZWN0XG4gKi9cblxuLypcbiBPcHRpb25hbDpcbiAgIGRpcjogc3RyaW5nXG4gICBzY29wZTogc3RyaW5nXG4gICBkaXNwbGF5OiBzdHJpbmdcbiAgIGJhY2tncm91bmRfY29sb3I6IHN0cmluZ1xuICAgcmVsYXRlZF9hcHBsaWNhdGlvbnM6IEFycmF5IG9mIE9iamVjdFxuICAgcHJlZmVyX3JlbGF0ZWRfYXBwbGljYXRpb25zOiBib29sZWFuXG4gICBjYXRlZ29yaWVzOiBBcnJheSBvZiBzdHJpbmdzXG4gICBzY3JlZW5zaG90czogQXJyYXkgb2YgT2JqZWN0XG4gICBzaG9ydGN1dHM6IEFycmF5IG9mIE9iamVjdFxuICovXG5cbi8vIHZhbGlkYXRlIHJlcXVpcmVkIGZpZWxkc1xuY29uc3QgdmFsaWRhdGVOYW1lID0gKG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycykgPT4ge1xuICBpZiAoJ25hbWUnIGluIG1hbmlmZXN0KSB7XG4gICAgaWYodHlwZW9mKG1hbmlmZXN0WyduYW1lJ10pICE9PSAnc3RyaW5nJykge1xuICAgICAgcmVxdWlyZWRFcnJvcnMubmFtZSA9ICdtYW5pZmVzdCBuYW1lIGZpZWxkIHR5cGUgc2hvdWxkIGJlIHN0cmluZyc7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJlcXVpcmVkRXJyb3JzLm5hbWUgPSAnbWFuaWZlc3QgbmFtZSBmaWVsZCBpcyByZXF1aXJlZCc7XG4gIH1cbn1cblxuY29uc3QgdmFsaWRhdGVEZXNjcmlwdGlvbiA9IChtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpID0+IHtcbiAgaWYgKCdkZXNjcmlwdGlvbicgaW4gbWFuaWZlc3QpIHtcbiAgICBpZih0eXBlb2YobWFuaWZlc3RbJ2Rlc2NyaXB0aW9uJ10pICE9PSAnc3RyaW5nJykge1xuICAgICAgcmVxdWlyZWRFcnJvcnMuZGVzY3JpcHRpb24gPSAnbWFuaWZlc3QgZGVzY3JpcHRpb24gZmllbGQgdHlwZSBzaG91bGQgYmUgc3RyaW5nJztcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmVxdWlyZWRFcnJvcnMuZGVzY3JpcHRpb24gPSAnbWFuaWZlc3QgZGVzY3JpcHRpb24gZmllbGQgaXMgcmVxdWlyZWQnO1xuICB9XG59XG5cbmNvbnN0IHZhbGlkYXRlTGFuZyA9IChtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpID0+IHtcbiAgaWYoJ2xhbmcnIGluIG1hbmlmZXN0KSB7XG4gICAgY29uc3QgbWFuaWZlc3RMYW5nID0gbWFuaWZlc3RbJ2xhbmcnXTtcbiAgICBpZih0eXBlb2YobWFuaWZlc3RMYW5nKSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHJlcXVpcmVkRXJyb3JzLmxhbmcgPSAnbWFuaWZlc3QgbGFuZyBmaWVsZCB0eXBlIHNob3VsZCBiZSBzdHJpbmchJztcbiAgICB9IGVsc2Uge1xuICAgICAgaWYoIS9eXFx3KigtXFx3KikqJC8udGVzdChtYW5pZmVzdExhbmcpKSB7XG4gICAgICAgIHJlcXVpcmVkRXJyb3JzLmxhbmcgPSAnbWFuaWZlc3QgbGFuZyBmaWVsZCB0eXBlIHNob3VsZCBiZSBjb3JyZWN0IGZvcm1hdCEnO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXF1aXJlZEVycm9ycy5sYW5nID0gJ21hbmlmZXN0IGxhbmcgZmllbGQgaXMgcmVxdWlyZWQhJ1xuICB9XG59XG5cbmNvbnN0IHZhbGlkYXRlVGhlbWVDb2xvciA9IChtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpID0+IHtcbiAgaWYgKCd0aGVtZV9jb2xvcicgaW4gbWFuaWZlc3QpIHtcbiAgICBpZih0eXBlb2YobWFuaWZlc3RbJ3RoZW1lX2NvbG9yJ10pICE9PSAnc3RyaW5nJykge1xuICAgICAgcmVxdWlyZWRFcnJvcnMudGhlbWVfY29sb3IgPSAnbWFuaWZlc3QgdGhlbWVfY29sb3IgZmllbGQgdHlwZSBzaG91bGQgYmUgc3RyaW5nJztcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmVxdWlyZWRFcnJvcnMudGhlbWVfY29sb3IgPSAnbWFuaWZlc3QgdGhlbWVfY29sb3IgZmllbGQgaXMgcmVxdWlyZWQnO1xuICB9XG59XG5cbmNvbnN0IHZhbGlkYXRlT3JpdGF0aW9uID0gKG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycykgPT4ge1xuICBjb25zdCBFTlVNX09SSUVOVEFUSU9OID0gW1xuICAgICdhbnknLFxuICAgICduYXR1cmFsJyxcbiAgICAnbGFuZHNjYXBlJyxcbiAgICAnbGFuZHNjYXBlLXByaW1hcnknLFxuICAgICdsYW5kc2NhcGUtc2Vjb25kYXJ5JyxcbiAgICAncG9ydHJhaXQnLFxuICAgICdwb3J0cmFpdC1wcmltYXJ5JyxcbiAgICAncG9ydHJhaXQtc2Vjb25kYXJ5J1xuICBdO1xuICBpZiAoJ29yaWVudGF0aW9uJyBpbiBtYW5pZmVzdCkge1xuICAgIGlmKHR5cGVvZihtYW5pZmVzdFsnb3JpZW50YXRpb24nXSkgIT09ICdzdHJpbmcnKSB7XG4gICAgICByZXF1aXJlZEVycm9ycy5vcmllbnRhdGlvbiA9ICdtYW5pZmVzdCBvcmllbnRhdGlvbiBmaWVsZCB0eXBlIHNob3VsZCBiZSBzdHJpbmcnO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBvcmllbnRhdGlvbiA9IG1hbmlmZXN0WydvcmllbnRhdGlvbiddO1xuICAgICAgaWYoIUVOVU1fT1JJRU5UQVRJT04uaW5jbHVkZXMob3JpZW50YXRpb24pKSB7XG4gICAgICAgIHJlcXVpcmVkRXJyb3JzLm9yaWVudGF0aW9uID0gJ21hbmlmZXN0IG9yaWVudGF0aW9uIGZpZWxkIHZhbHVlIG5vdCBjb3JyZWN0JztcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmVxdWlyZWRFcnJvcnMub3JpZW50YXRpb24gPSAnbWFuaWZlc3Qgb3JpZW50YXRpb24gZmllbGQgaXMgcmVxdWlyZWQnO1xuICB9XG59XG5cbmNvbnN0IHZhbGlkYXRlU3RhcnRVcmwgPSAobWFuaWZlc3QsIHJlcXVpcmVkRXJyb3JzKSA9PiB7XG4gIGlmICgnc3RhcnRfdXJsJyBpbiBtYW5pZmVzdCkge1xuICAgIGlmKHR5cGVvZihtYW5pZmVzdFsnc3RhcnRfdXJsJ10pICE9PSAnc3RyaW5nJykge1xuICAgICAgcmVxdWlyZWRFcnJvcnMuc3RhcnRfdXJsID0gJ21hbmlmZXN0IHN0YXJ0X3VybCBmaWVsZCB0eXBlIHNob3VsZCBiZSBzdHJpbmcnO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXF1aXJlZEVycm9ycy5zdGFydF91cmwgPSAnbWFuaWZlc3Qgc3RhcnRfdXJsIGZpZWxkIGlzIHJlcXVpcmVkJztcbiAgfVxufVxuXG5jb25zdCB2YWxpZGF0ZUljb25PYmogPSAoaWNvbk9iaikgPT4ge1xuICBsZXQgZXJyb3IgPSB7fTtcbiAgLy8gaWNvbnMgc3JjIHZhbGlkYXRlXG4gIGlmICgnc3JjJyBpbiBpY29uT2JqKSB7XG4gICAgaWYodHlwZW9mKGljb25PYmpbJ3NyYyddKSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIGVycm9yLnNyYyA9ICdtYW5pZmVzdCBpY29ucyBmaWVsZCBpY29uIHR5cGUgc2hvdWxkIGJlIHN0cmluZyc7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGVycm9yLnNyYyA9ICdtYW5pZmVzdCBpY29ucyBmaWVsZCBpY29uIGlzIHJlcXVpcmVkJztcbiAgfVxuICAvLyBpY29ucyBzaXplIHZhbGlkYXRlXG4gIGlmKCdzaXplcycgaW4gaWNvbk9iaikge1xuICAgIGNvbnN0IHNpemVzID0gaWNvbk9ialsnc2l6ZXMnXTtcbiAgICBpZih0eXBlb2Yoc2l6ZXMpICE9PSAnc3RyaW5nJykge1xuICAgICAgZXJyb3Iuc2l6ZXMgPSAnbWFuaWZlc3QgaWNvbnMgZmllbGQgc2l6ZSB0eXBlIHNob3VsZCBiZSBzdHJpbmcnO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZighL15cXHMqXFxkK3hcXGQrKFxccytcXGQreFxcZCspKlxccyokLy50ZXN0KHNpemVzKSkge1xuICAgICAgICBlcnJvci5zaXplcyA9ICdtYW5pZmVzdCBpY29ucyBmaWVsZCBzaXplcyBzaG91bGQgYmUgY29ycmVjdCBmb3JtYXQhJztcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZXJyb3Iuc2l6ZXMgPSAnbWFuaWZlc3QgaWNvbnMgZmllbGQgc2l6ZSBpcyByZXF1aXJlZCEnO1xuICB9XG4gIHJldHVybiBlcnJvcjtcbn1cblxuY29uc3QgdmFsaWRhdGVJY29ucyA9IChtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpID0+IHtcbiAgaWYoJ2ljb25zJyBpbiBtYW5pZmVzdCkge1xuICAgIGNvbnN0IGljb25zID0gbWFuaWZlc3RbJ2ljb25zJ107XG4gICAgaWYoIUFycmF5LmlzQXJyYXkoaWNvbnMpKSB7XG4gICAgICByZXF1aXJlZEVycm9ycy5pY29ucyA9ICdtYW5pZmVzdCBpY29ucyBmaWVsZCBzaG91bGQgYmUgQXJyYXknO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgaWNvbkVycm9ycyA9IFtdO1xuICAgICAgaWNvbnMuZm9yRWFjaCgoaWNvbikgPT4ge1xuICAgICAgICBjb25zdCBlcnJvciA9IHZhbGlkYXRlSWNvbk9iaihpY29uKTtcbiAgICAgICAgaWYoT2JqZWN0LmtleXMoZXJyb3IpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpY29uRXJyb3JzLnB1c2goZXJyb3IpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgaWYoaWNvbkVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgIFxuICAgICAgfVxuICAgICAgcmVxdWlyZWRFcnJvcnMuaWNvbnMgPSBpY29uRXJyb3JzO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXF1aXJlZEVycm9ycy5pY29ucyA9ICdtYW5pZmVzdCBpY29ucyBmaWVsZCBpcyByZXF1aXJlZCc7XG4gIH1cbn1cblxuY29uc3QgdmFsaWRhdGVSZXF1aXJlZEZpZWxkcyA9IChtYW5pZmVzdCwgZXJyb3JzKSA9PiB7XG4gIGxldCByZXF1aXJlZEVycm9ycyA9IHt9O1xuICB2YWxpZGF0ZU5hbWUobWFuaWZlc3QsIHJlcXVpcmVkRXJyb3JzKTtcbiAgdmFsaWRhdGVEZXNjcmlwdGlvbihtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpO1xuICB2YWxpZGF0ZUxhbmcobWFuaWZlc3QsIHJlcXVpcmVkRXJyb3JzKTtcbiAgdmFsaWRhdGVUaGVtZUNvbG9yKG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycyk7XG4gIHZhbGlkYXRlT3JpdGF0aW9uKG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycyk7XG4gIHZhbGlkYXRlU3RhcnRVcmwobWFuaWZlc3QsIHJlcXVpcmVkRXJyb3JzKTtcbiAgdmFsaWRhdGVJY29ucyhtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpO1xuICByZXR1cm4gcmVxdWlyZWRFcnJvcnM7XG59XG5cbi8vIHZhbGlkYXRlIG9wdGlvbiBmaWVsZHNcblxuY29uc3QgdmFsaWRhdGVEaXIgPSAobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpID0+IHtcbiAgY29uc3QgRU5VTV9ESVIgPSBbXG4gICAgJ3J0bCcsXG4gICAgJ2x0cicsXG4gICAgJ2F1dG8nXG4gIF07XG4gIGlmICgnZGlyJyBpbiBtYW5pZmVzdCkge1xuICAgIGlmKHR5cGVvZihtYW5pZmVzdFsnZGlyJ10pICE9PSAnc3RyaW5nJykge1xuICAgICAgb3B0aW9uc0Vycm9ycy5kaXIgPSAnbWFuaWZlc3QgZGlyIGZpZWxkIHR5cGUgc2hvdWxkIGJlIHN0cmluZyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGRpciA9IG1hbmlmZXN0WydkaXInXTtcbiAgICAgIGlmKCFFTlVNX0RJUi5pbmNsdWRlcyhkaXIpKSB7XG4gICAgICAgIG9wdGlvbnNFcnJvcnMuZGlyID0gJ21hbmlmZXN0IGRpciBmaWVsZCB2YWx1ZSBub3QgY29ycmVjdCc7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIG9wdGlvbnNFcnJvcnMuZGlyID0gJ21hbmlmZXN0IGRpciBmaWVsZCBpcyBudWxsJztcbiAgfVxufVxuXG5jb25zdCB2YWxpZGF0ZVNjb3BlID0gKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKSA9PiB7XG4gIGlmICgnc2NvcGUnIGluIG1hbmlmZXN0KSB7XG4gICAgaWYodHlwZW9mKG1hbmlmZXN0WydzY29wZSddKSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIG9wdGlvbnNFcnJvcnMuc2NvcGUgPSAnbWFuaWZlc3Qgc2NvcGUgZmllbGQgdHlwZSBzaG91bGQgYmUgc3RyaW5nJztcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgb3B0aW9uc0Vycm9ycy5zY29wZSA9ICdtYW5pZmVzdCBzY29wZSBmaWVsZCBpcyBudWxsJztcbiAgfVxufVxuXG5jb25zdCB2YWxpZGF0ZURpc3BsYXkgPSAobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpID0+IHtcbiAgY29uc3QgRU5VTV9ESVNQTEFZID0gW1xuICAgICdmdWxsc2NyZWVuJyxcbiAgICAnc3RhbmRhbG9uZScsXG4gICAgJ21pbmltYWwtdWknLFxuICAgICdicm93c2VyJ1xuICBdO1xuICBpZiAoJ2Rpc3BsYXknIGluIG1hbmlmZXN0KSB7XG4gICAgaWYodHlwZW9mKG1hbmlmZXN0WydkaXNwbGF5J10pICE9PSAnc3RyaW5nJykge1xuICAgICAgb3B0aW9uc0Vycm9ycy5kaXNwbGF5ID0gJ21hbmlmZXN0IGRpc3BsYXkgZmllbGQgdHlwZSBzaG91bGQgYmUgc3RyaW5nJztcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZGlzcGxheSA9IG1hbmlmZXN0WydkaXNwbGF5J107XG4gICAgICBpZighRU5VTV9ESVNQTEFZLmluY2x1ZGVzKGRpc3BsYXkpKSB7XG4gICAgICAgIG9wdGlvbnNFcnJvcnMuZGlzcGxheSA9ICdtYW5pZmVzdCBkaXNwbGF5IGZpZWxkIHZhbHVlIG5vdCBjb3JyZWN0JztcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgb3B0aW9uc0Vycm9ycy5kaXNwbGF5ID0gJ21hbmlmZXN0IGRpc3BsYXkgZmllbGQgaXMgbnVsbCc7XG4gIH1cbn1cblxuY29uc3QgdmFsaWRhdGVCYWNrZ3JvdW5kQ29sb3IgPSAobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpID0+IHtcbiAgaWYgKCdiYWNrZ3JvdW5kX2NvbG9yJyBpbiBtYW5pZmVzdCkge1xuICAgIGlmKHR5cGVvZihtYW5pZmVzdFsnYmFja2dyb3VuZF9jb2xvciddKSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIG9wdGlvbnNFcnJvcnMuYmFja2dyb3VuZF9jb2xvciA9ICdtYW5pZmVzdCBiYWNrZ3JvdW5kX2NvbG9yIGZpZWxkIHR5cGUgc2hvdWxkIGJlIHN0cmluZyc7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIG9wdGlvbnNFcnJvcnMuYmFja2dyb3VuZF9jb2xvciA9ICdtYW5pZmVzdCBiYWNrZ3JvdW5kX2NvbG9yIGZpZWxkIGlzIG51bGwnO1xuICB9XG59XG5cbmNvbnN0IHZhbGlkYXRlUmVsYXRlZEFwcGxpY2F0aW9ucyA9IChtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycykgPT4ge1xuICAvLyB0b2RvOiByZWxhdGVkX2FwcGxpY2F0aW9ucyBmaWVsZHNcbn1cblxuY29uc3QgdmFsaWRhdGVQcmVmZXJSZWxhdGVkQXBwbGljYXRpb25zID0gKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKSA9PiB7XG4gIC8vIHRvZG86IHByZWZlcl9yZWxhdGVkX2FwcGxpY2F0aW9ucyBmaWVsZHNcbn1cblxuY29uc3QgdmFsaWRhdGVDYXRlZ29yaWVzID0gKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKSA9PiB7XG4gIGlmKCdjYXRlZ29yaWVzJyBpbiBtYW5pZmVzdCkge1xuICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBtYW5pZmVzdFsnY2F0ZWdvcmllcyddO1xuICAgIGlmKCFBcnJheS5pc0FycmF5KGNhdGVnb3JpZXMpKSB7XG4gICAgICBvcHRpb25zRXJyb3JzLmNhdGVnb3JpZXMgPSAnbWFuaWZlc3QgY2F0ZWdvcmllcyBmaWVsZCBzaG91bGQgYmUgQXJyYXknO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgY2F0ZWdvcmllc0Vycm9ycyA9IFtdO1xuICAgICAgY2F0ZWdvcmllcy5mb3JFYWNoKChjYXRlZ29yeSkgPT4ge1xuICAgICAgICBpZih0eXBlb2YoY2F0ZWdvcnkpICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgIGNhdGVnb3JpZXNFcnJvcnMucHVzaCh7XG4gICAgICAgICAgICBjYXRlZ29yeTogJ21hbmlmZXN0IGNhdGVnb3JpZXMgZmllbGQgY2F0ZWdvcnkgc2hvdWxkIGJlIFN0cmluZydcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIGlmKGNhdGVnb3JpZXNFcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICBvcHRpb25zRXJyb3JzLmNhdGVnb3JpZXMgPSBjYXRlZ29yaWVzRXJyb3JzO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBvcHRpb25zRXJyb3JzLmNhdGVnb3JpZXMgPSAnbWFuaWZlc3QgY2F0ZWdvcmllcyBmaWVsZCBpcyBudWxsJztcbiAgfVxufVxuXG5jb25zdCB2YWxpZGF0ZVNjcmVlbnNob3RzID0gKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKSA9PiB7XG4gIC8vIHRvZG86IHNjcmVlblNob3RzIGZpZWxkc1xufVxuXG5jb25zdCB2YWxpZGF0ZVNob3J0Y3V0cyA9IChtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycykgPT4ge1xuICAvLyB0b2RvOiBzaG9ydEN1dHMgZmllbGRzXG59XG5cbmNvbnN0IHZhbGlkYXRlT3B0aW9uRmllbGRzID0gKG1hbmlmZXN0KSA9PiB7XG4gIGxldCBvcHRpb25zRXJyb3JzID0ge307XG4gIHZhbGlkYXRlRGlyKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKTtcbiAgdmFsaWRhdGVTY29wZShtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycyk7XG4gIHZhbGlkYXRlRGlzcGxheShtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycyk7XG4gIHZhbGlkYXRlQmFja2dyb3VuZENvbG9yKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKTtcbiAgdmFsaWRhdGVSZWxhdGVkQXBwbGljYXRpb25zKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKTtcbiAgdmFsaWRhdGVQcmVmZXJSZWxhdGVkQXBwbGljYXRpb25zKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKTtcbiAgdmFsaWRhdGVDYXRlZ29yaWVzKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKTtcbiAgdmFsaWRhdGVTY3JlZW5zaG90cyhtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycyk7XG4gIHZhbGlkYXRlU2hvcnRjdXRzKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKTtcbiAgcmV0dXJuIG9wdGlvbnNFcnJvcnM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZhbGlkYXRlKG9sZE1hbmlmZXN0KSB7XG4gIHJldHVybiB7XG4gICAgJ3JlcXVpcmVkRmllbGRzJzogdmFsaWRhdGVSZXF1aXJlZEZpZWxkcyhvbGRNYW5pZmVzdCksXG4gICAgJ29wdGlvbkZpZWxkcyc6IHZhbGlkYXRlT3B0aW9uRmllbGRzKG9sZE1hbmlmZXN0KVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/validate.js\n");

/***/ })

})