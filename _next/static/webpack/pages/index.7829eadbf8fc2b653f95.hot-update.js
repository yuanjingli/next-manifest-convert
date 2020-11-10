webpackHotUpdate_N_E("pages/index",{

/***/ "./utils/validate.js":
/*!***************************!*\
  !*** ./utils/validate.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return validate; });\n/*\n Required fields:\n   name or short_name: string\n   description: string\n   lang: string\n   theme_color: string\n   orientation: string\n   start_url: string\n   icons: Array of Object\n */\n\n/*\n Optional:\n   dir: string\n   scope: string\n   display: string\n   background_color: string\n   related_applications: Array of Object\n   prefer_related_applications: boolean\n   categories: Array of strings\n   screenshots: Array of Object\n   shortcuts: Array of Object\n */\n// validate required fields\nvar validateName = function validateName(manifest, requiredErrors) {\n  if ('name' in manifest) {\n    if (typeof manifest['name'] !== 'string') {\n      requiredErrors.name = 'manifest name field type should be string';\n    }\n  } else {\n    requiredErrors.name = 'manifest name field is required';\n  }\n};\n\nvar validateDescription = function validateDescription(manifest, requiredErrors) {\n  if ('description' in manifest) {\n    if (typeof manifest['description'] !== 'string') {\n      requiredErrors.description = 'manifest description field type should be string';\n    }\n  } else {\n    requiredErrors.description = 'manifest description field is required';\n  }\n};\n\nvar validateLang = function validateLang(manifest, requiredErrors) {\n  if ('lang' in manifest) {\n    var manifestLang = manifest['lang'];\n\n    if (typeof manifestLang !== 'string') {\n      requiredErrors.lang = 'manifest lang field type should be string!';\n    } else {\n      if (!/^\\w*(-\\w*)*$/.test(manifestLang)) {\n        requiredErrors.lang = 'manifest lang field type should be correct format!';\n      }\n    }\n  } else {\n    requiredErrors.lang = 'manifest lang field is required!';\n  }\n};\n\nvar validateThemeColor = function validateThemeColor(manifest, requiredErrors) {\n  if ('theme_color' in manifest) {\n    if (typeof manifest['theme_color'] !== 'string') {\n      requiredErrors.theme_color = 'manifest theme_color field type should be string';\n    }\n  } else {\n    requiredErrors.theme_color = 'manifest theme_color field is required';\n  }\n};\n\nvar validateOritation = function validateOritation(manifest, requiredErrors) {\n  var ENUM_ORIENTATION = ['any', 'natural', 'landscape', 'landscape-primary', 'landscape-secondary', 'portrait', 'portrait-primary', 'portrait-secondary'];\n\n  if ('orientation' in manifest) {\n    if (typeof manifest['orientation'] !== 'string') {\n      requiredErrors.orientation = 'manifest orientation field type should be string';\n    } else {\n      var orientation = manifest['orientation'];\n\n      if (!ENUM_ORIENTATION.includes(orientation)) {\n        requiredErrors.orientation = 'manifest orientation field value not correct';\n      }\n    }\n  } else {\n    requiredErrors.orientation = 'manifest orientation field is required';\n  }\n};\n\nvar validateStartUrl = function validateStartUrl(manifest, requiredErrors) {\n  if ('start_url' in manifest) {\n    if (typeof manifest['start_url'] !== 'string') {\n      requiredErrors.start_url = 'manifest start_url field type should be string';\n    }\n  } else {\n    requiredErrors.start_url = 'manifest start_url field is required';\n  }\n};\n\nvar validateIconObj = function validateIconObj(iconObj) {\n  var error = {}; // icons src validate\n\n  if ('src' in iconObj) {\n    if (typeof iconObj['src'] !== 'string') {\n      error.src = 'manifest icons field icon type should be string';\n    }\n  } else {\n    error.src = 'manifest icons field icon is required';\n  } // icons size validate\n\n\n  if ('sizes' in iconObj) {\n    var sizes = iconObj['sizes'];\n\n    if (typeof sizes !== 'string') {\n      error.sizes = 'manifest icons field size type should be string';\n    } else {\n      if (!/^\\s*\\d+x\\d+(\\s+\\d+x\\d+)*\\s*$/.test(sizes)) {\n        error.sizes = 'manifest icons field sizes should be correct format!';\n      }\n    }\n  } else {\n    error.sizes = 'manifest icons field size is required!';\n  }\n\n  return error;\n};\n\nvar validateIcons = function validateIcons(manifest, requiredErrors) {\n  if ('icons' in manifest) {\n    var icons = manifest['icons'];\n\n    if (!Array.isArray(icons)) {\n      requiredErrors.icons = 'manifest icons field should be Array';\n    } else {\n      var iconErrors = [];\n      icons.forEach(function (icon) {\n        var error = validateIconObj(icon);\n        iconErrors.push(error);\n      });\n      requiredErrors.icons = iconErrors;\n    }\n  } else {\n    requiredErrors.icons = 'manifest icons field is required';\n  }\n};\n\nvar validateRequiredFields = function validateRequiredFields(manifest, errors) {\n  var requiredErrors = {};\n  validateName(manifest, requiredErrors);\n  validateDescription(manifest, requiredErrors);\n  validateLang(manifest, requiredErrors);\n  validateThemeColor(manifest, requiredErrors);\n  validateOritation(manifest, requiredErrors);\n  validateStartUrl(manifest, requiredErrors);\n  validateIcons(manifest, requiredErrors);\n  return requiredErrors;\n}; // validate option fields\n\n\nvar validateDir = function validateDir(manifest, optionsErrors) {\n  var ENUM_DIR = ['rtl', 'ltr', 'auto'];\n\n  if ('dir' in manifest) {\n    if (typeof manifest['dir'] !== 'string') {\n      optionsErrors.dir = 'manifest dir field type should be string';\n    } else {\n      var dir = manifest['dir'];\n\n      if (!ENUM_DIR.includes(dir)) {\n        optionsErrors.dir = 'manifest dir field value not correct';\n      }\n    }\n  } else {\n    optionsErrors.dir = 'manifest dir field is null';\n  }\n};\n\nvar validateScope = function validateScope(manifest, optionsErrors) {\n  if ('scope' in manifest) {\n    if (typeof manifest['scope'] !== 'string') {\n      optionsErrors.scope = 'manifest scope field type should be string';\n    }\n  } else {\n    optionsErrors.scope = 'manifest scope field is required';\n  }\n};\n\nvar validateDisplay = function validateDisplay(manifest, optionsErrors) {\n  var ENUM_DISPLAY = ['fullscreen', 'standalone', 'minimal-ui', 'browser'];\n\n  if ('display' in manifest) {\n    if (typeof manifest['display'] !== 'string') {\n      optionsErrors.display = 'manifest display field type should be string';\n    } else {\n      var display = manifest['display'];\n\n      if (!ENUM_DISPLAY.includes(display)) {\n        optionsErrors.display = 'manifest display field value not correct';\n      }\n    }\n  } else {\n    optionsErrors.display = 'manifest display field is required';\n  }\n};\n\nvar validateBackgroundColor = function validateBackgroundColor(manifest, optionsErrors) {\n  if ('background_color' in manifest) {\n    if (typeof manifest['background_color'] !== 'string') {\n      optionsErrors.background_color = 'manifest background_color field type should be string';\n    }\n  } else {\n    optionsErrors.background_color = 'manifest background_color field is required';\n  }\n};\n\nvar validateRelatedApplications = function validateRelatedApplications(manifest, optionsErrors) {// todo: related_applications fields\n};\n\nvar validatePreferRelatedApplications = function validatePreferRelatedApplications(manifest, optionsErrors) {// todo: prefer_related_applications fields\n};\n\nvar validateCategories = function validateCategories(manifest, optionsErrors) {\n  if ('categories' in manifest) {\n    var categories = manifest['categories'];\n\n    if (!Array.isArray(categories)) {\n      optionsErrors.categories = 'manifest categories field should be Array';\n    } else {\n      var categoriesErrors = [];\n      categories.forEach(function (category) {\n        if (typeof category !== 'string') {\n          categoriesErrors.push({\n            category: 'manifest categories field category should be String'\n          });\n        }\n      });\n      optionsErrors.categories = categoriesErrors;\n    }\n  } else {\n    optionsErrors.categories = 'manifest categories field is null';\n  }\n};\n\nvar validateScreenshots = function validateScreenshots(manifest, optionsErrors) {// todo: screenShots fields\n};\n\nvar validateShortcuts = function validateShortcuts(manifest, optionsErrors) {// todo: shortCuts fields\n};\n\nvar validateOptionFields = function validateOptionFields(manifest) {\n  var optionsErrors = {};\n  validateDir(manifest, optionsErrors);\n  validateScope(manifest, optionsErrors);\n  validateDisplay(manifest, optionsErrors);\n  validateBackgroundColor(manifest, optionsErrors);\n  validateRelatedApplications(manifest, optionsErrors);\n  validatePreferRelatedApplications(manifest, optionsErrors);\n  validateCategories(manifest, optionsErrors);\n  validateScreenshots(manifest, optionsErrors);\n  validateShortcuts(manifest, optionsErrors);\n  return optionsErrors;\n};\n\nfunction validate(oldManifest) {\n  return {\n    'requiredFields': validateRequiredFields(oldManifest),\n    'optionFields': validateOptionFields(oldManifest)\n  };\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvdmFsaWRhdGUuanM/ZjdkZiJdLCJuYW1lcyI6WyJ2YWxpZGF0ZU5hbWUiLCJtYW5pZmVzdCIsInJlcXVpcmVkRXJyb3JzIiwibmFtZSIsInZhbGlkYXRlRGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvbiIsInZhbGlkYXRlTGFuZyIsIm1hbmlmZXN0TGFuZyIsImxhbmciLCJ0ZXN0IiwidmFsaWRhdGVUaGVtZUNvbG9yIiwidGhlbWVfY29sb3IiLCJ2YWxpZGF0ZU9yaXRhdGlvbiIsIkVOVU1fT1JJRU5UQVRJT04iLCJvcmllbnRhdGlvbiIsImluY2x1ZGVzIiwidmFsaWRhdGVTdGFydFVybCIsInN0YXJ0X3VybCIsInZhbGlkYXRlSWNvbk9iaiIsImljb25PYmoiLCJlcnJvciIsInNyYyIsInNpemVzIiwidmFsaWRhdGVJY29ucyIsImljb25zIiwiQXJyYXkiLCJpc0FycmF5IiwiaWNvbkVycm9ycyIsImZvckVhY2giLCJpY29uIiwicHVzaCIsInZhbGlkYXRlUmVxdWlyZWRGaWVsZHMiLCJlcnJvcnMiLCJ2YWxpZGF0ZURpciIsIm9wdGlvbnNFcnJvcnMiLCJFTlVNX0RJUiIsImRpciIsInZhbGlkYXRlU2NvcGUiLCJzY29wZSIsInZhbGlkYXRlRGlzcGxheSIsIkVOVU1fRElTUExBWSIsImRpc3BsYXkiLCJ2YWxpZGF0ZUJhY2tncm91bmRDb2xvciIsImJhY2tncm91bmRfY29sb3IiLCJ2YWxpZGF0ZVJlbGF0ZWRBcHBsaWNhdGlvbnMiLCJ2YWxpZGF0ZVByZWZlclJlbGF0ZWRBcHBsaWNhdGlvbnMiLCJ2YWxpZGF0ZUNhdGVnb3JpZXMiLCJjYXRlZ29yaWVzIiwiY2F0ZWdvcmllc0Vycm9ycyIsImNhdGVnb3J5IiwidmFsaWRhdGVTY3JlZW5zaG90cyIsInZhbGlkYXRlU2hvcnRjdXRzIiwidmFsaWRhdGVPcHRpb25GaWVsZHMiLCJ2YWxpZGF0ZSIsIm9sZE1hbmlmZXN0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFB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M0MsUUFBRCxFQUFXaUMsYUFBWCxDQUEzQjtBQUNBVyxtQ0FBaUMsQ0FBQzVDLFFBQUQsRUFBV2lDLGFBQVgsQ0FBakM7QUFDQVksb0JBQWtCLENBQUM3QyxRQUFELEVBQVdpQyxhQUFYLENBQWxCO0FBQ0FnQixxQkFBbUIsQ0FBQ2pELFFBQUQsRUFBV2lDLGFBQVgsQ0FBbkI7QUFDQWlCLG1CQUFpQixDQUFDbEQsUUFBRCxFQUFXaUMsYUFBWCxDQUFqQjtBQUNBLFNBQU9BLGFBQVA7QUFDRCxDQVpEOztBQWNlLFNBQVNtQixRQUFULENBQWtCQyxXQUFsQixFQUErQjtBQUM1QyxTQUFPO0FBQ0wsc0JBQWtCdkIsc0JBQXNCLENBQUN1QixXQUFELENBRG5DO0FBRUwsb0JBQWdCRixvQkFBb0IsQ0FBQ0UsV0FBRDtBQUYvQixHQUFQO0FBSUQiLCJmaWxlIjoiLi91dGlscy92YWxpZGF0ZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gUmVxdWlyZWQgZmllbGRzOlxuICAgbmFtZSBvciBzaG9ydF9uYW1lOiBzdHJpbmdcbiAgIGRlc2NyaXB0aW9uOiBzdHJpbmdcbiAgIGxhbmc6IHN0cmluZ1xuICAgdGhlbWVfY29sb3I6IHN0cmluZ1xuICAgb3JpZW50YXRpb246IHN0cmluZ1xuICAgc3RhcnRfdXJsOiBzdHJpbmdcbiAgIGljb25zOiBBcnJheSBvZiBPYmplY3RcbiAqL1xuXG4vKlxuIE9wdGlvbmFsOlxuICAgZGlyOiBzdHJpbmdcbiAgIHNjb3BlOiBzdHJpbmdcbiAgIGRpc3BsYXk6IHN0cmluZ1xuICAgYmFja2dyb3VuZF9jb2xvcjogc3RyaW5nXG4gICByZWxhdGVkX2FwcGxpY2F0aW9uczogQXJyYXkgb2YgT2JqZWN0XG4gICBwcmVmZXJfcmVsYXRlZF9hcHBsaWNhdGlvbnM6IGJvb2xlYW5cbiAgIGNhdGVnb3JpZXM6IEFycmF5IG9mIHN0cmluZ3NcbiAgIHNjcmVlbnNob3RzOiBBcnJheSBvZiBPYmplY3RcbiAgIHNob3J0Y3V0czogQXJyYXkgb2YgT2JqZWN0XG4gKi9cblxuLy8gdmFsaWRhdGUgcmVxdWlyZWQgZmllbGRzXG5jb25zdCB2YWxpZGF0ZU5hbWUgPSAobWFuaWZlc3QsIHJlcXVpcmVkRXJyb3JzKSA9PiB7XG4gIGlmICgnbmFtZScgaW4gbWFuaWZlc3QpIHtcbiAgICBpZih0eXBlb2YobWFuaWZlc3RbJ25hbWUnXSkgIT09ICdzdHJpbmcnKSB7XG4gICAgICByZXF1aXJlZEVycm9ycy5uYW1lID0gJ21hbmlmZXN0IG5hbWUgZmllbGQgdHlwZSBzaG91bGQgYmUgc3RyaW5nJztcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmVxdWlyZWRFcnJvcnMubmFtZSA9ICdtYW5pZmVzdCBuYW1lIGZpZWxkIGlzIHJlcXVpcmVkJztcbiAgfVxufVxuXG5jb25zdCB2YWxpZGF0ZURlc2NyaXB0aW9uID0gKG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycykgPT4ge1xuICBpZiAoJ2Rlc2NyaXB0aW9uJyBpbiBtYW5pZmVzdCkge1xuICAgIGlmKHR5cGVvZihtYW5pZmVzdFsnZGVzY3JpcHRpb24nXSkgIT09ICdzdHJpbmcnKSB7XG4gICAgICByZXF1aXJlZEVycm9ycy5kZXNjcmlwdGlvbiA9ICdtYW5pZmVzdCBkZXNjcmlwdGlvbiBmaWVsZCB0eXBlIHNob3VsZCBiZSBzdHJpbmcnO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXF1aXJlZEVycm9ycy5kZXNjcmlwdGlvbiA9ICdtYW5pZmVzdCBkZXNjcmlwdGlvbiBmaWVsZCBpcyByZXF1aXJlZCc7XG4gIH1cbn1cblxuY29uc3QgdmFsaWRhdGVMYW5nID0gKG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycykgPT4ge1xuICBpZignbGFuZycgaW4gbWFuaWZlc3QpIHtcbiAgICBjb25zdCBtYW5pZmVzdExhbmcgPSBtYW5pZmVzdFsnbGFuZyddO1xuICAgIGlmKHR5cGVvZihtYW5pZmVzdExhbmcpICE9PSAnc3RyaW5nJykge1xuICAgICAgcmVxdWlyZWRFcnJvcnMubGFuZyA9ICdtYW5pZmVzdCBsYW5nIGZpZWxkIHR5cGUgc2hvdWxkIGJlIHN0cmluZyEnO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZighL15cXHcqKC1cXHcqKSokLy50ZXN0KG1hbmlmZXN0TGFuZykpIHtcbiAgICAgICAgcmVxdWlyZWRFcnJvcnMubGFuZyA9ICdtYW5pZmVzdCBsYW5nIGZpZWxkIHR5cGUgc2hvdWxkIGJlIGNvcnJlY3QgZm9ybWF0ISc7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJlcXVpcmVkRXJyb3JzLmxhbmcgPSAnbWFuaWZlc3QgbGFuZyBmaWVsZCBpcyByZXF1aXJlZCEnXG4gIH1cbn1cblxuY29uc3QgdmFsaWRhdGVUaGVtZUNvbG9yID0gKG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycykgPT4ge1xuICBpZiAoJ3RoZW1lX2NvbG9yJyBpbiBtYW5pZmVzdCkge1xuICAgIGlmKHR5cGVvZihtYW5pZmVzdFsndGhlbWVfY29sb3InXSkgIT09ICdzdHJpbmcnKSB7XG4gICAgICByZXF1aXJlZEVycm9ycy50aGVtZV9jb2xvciA9ICdtYW5pZmVzdCB0aGVtZV9jb2xvciBmaWVsZCB0eXBlIHNob3VsZCBiZSBzdHJpbmcnO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXF1aXJlZEVycm9ycy50aGVtZV9jb2xvciA9ICdtYW5pZmVzdCB0aGVtZV9jb2xvciBmaWVsZCBpcyByZXF1aXJlZCc7XG4gIH1cbn1cblxuY29uc3QgdmFsaWRhdGVPcml0YXRpb24gPSAobWFuaWZlc3QsIHJlcXVpcmVkRXJyb3JzKSA9PiB7XG4gIGNvbnN0IEVOVU1fT1JJRU5UQVRJT04gPSBbXG4gICAgJ2FueScsXG4gICAgJ25hdHVyYWwnLFxuICAgICdsYW5kc2NhcGUnLFxuICAgICdsYW5kc2NhcGUtcHJpbWFyeScsXG4gICAgJ2xhbmRzY2FwZS1zZWNvbmRhcnknLFxuICAgICdwb3J0cmFpdCcsXG4gICAgJ3BvcnRyYWl0LXByaW1hcnknLFxuICAgICdwb3J0cmFpdC1zZWNvbmRhcnknXG4gIF07XG4gIGlmICgnb3JpZW50YXRpb24nIGluIG1hbmlmZXN0KSB7XG4gICAgaWYodHlwZW9mKG1hbmlmZXN0WydvcmllbnRhdGlvbiddKSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHJlcXVpcmVkRXJyb3JzLm9yaWVudGF0aW9uID0gJ21hbmlmZXN0IG9yaWVudGF0aW9uIGZpZWxkIHR5cGUgc2hvdWxkIGJlIHN0cmluZyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG9yaWVudGF0aW9uID0gbWFuaWZlc3RbJ29yaWVudGF0aW9uJ107XG4gICAgICBpZighRU5VTV9PUklFTlRBVElPTi5pbmNsdWRlcyhvcmllbnRhdGlvbikpIHtcbiAgICAgICAgcmVxdWlyZWRFcnJvcnMub3JpZW50YXRpb24gPSAnbWFuaWZlc3Qgb3JpZW50YXRpb24gZmllbGQgdmFsdWUgbm90IGNvcnJlY3QnO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXF1aXJlZEVycm9ycy5vcmllbnRhdGlvbiA9ICdtYW5pZmVzdCBvcmllbnRhdGlvbiBmaWVsZCBpcyByZXF1aXJlZCc7XG4gIH1cbn1cblxuY29uc3QgdmFsaWRhdGVTdGFydFVybCA9IChtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpID0+IHtcbiAgaWYgKCdzdGFydF91cmwnIGluIG1hbmlmZXN0KSB7XG4gICAgaWYodHlwZW9mKG1hbmlmZXN0WydzdGFydF91cmwnXSkgIT09ICdzdHJpbmcnKSB7XG4gICAgICByZXF1aXJlZEVycm9ycy5zdGFydF91cmwgPSAnbWFuaWZlc3Qgc3RhcnRfdXJsIGZpZWxkIHR5cGUgc2hvdWxkIGJlIHN0cmluZyc7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJlcXVpcmVkRXJyb3JzLnN0YXJ0X3VybCA9ICdtYW5pZmVzdCBzdGFydF91cmwgZmllbGQgaXMgcmVxdWlyZWQnO1xuICB9XG59XG5cbmNvbnN0IHZhbGlkYXRlSWNvbk9iaiA9IChpY29uT2JqKSA9PiB7XG4gIGxldCBlcnJvciA9IHt9O1xuICAvLyBpY29ucyBzcmMgdmFsaWRhdGVcbiAgaWYgKCdzcmMnIGluIGljb25PYmopIHtcbiAgICBpZih0eXBlb2YoaWNvbk9ialsnc3JjJ10pICE9PSAnc3RyaW5nJykge1xuICAgICAgZXJyb3Iuc3JjID0gJ21hbmlmZXN0IGljb25zIGZpZWxkIGljb24gdHlwZSBzaG91bGQgYmUgc3RyaW5nJztcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZXJyb3Iuc3JjID0gJ21hbmlmZXN0IGljb25zIGZpZWxkIGljb24gaXMgcmVxdWlyZWQnO1xuICB9XG4gIC8vIGljb25zIHNpemUgdmFsaWRhdGVcbiAgaWYoJ3NpemVzJyBpbiBpY29uT2JqKSB7XG4gICAgY29uc3Qgc2l6ZXMgPSBpY29uT2JqWydzaXplcyddO1xuICAgIGlmKHR5cGVvZihzaXplcykgIT09ICdzdHJpbmcnKSB7XG4gICAgICBlcnJvci5zaXplcyA9ICdtYW5pZmVzdCBpY29ucyBmaWVsZCBzaXplIHR5cGUgc2hvdWxkIGJlIHN0cmluZyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmKCEvXlxccypcXGQreFxcZCsoXFxzK1xcZCt4XFxkKykqXFxzKiQvLnRlc3Qoc2l6ZXMpKSB7XG4gICAgICAgIGVycm9yLnNpemVzID0gJ21hbmlmZXN0IGljb25zIGZpZWxkIHNpemVzIHNob3VsZCBiZSBjb3JyZWN0IGZvcm1hdCEnO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBlcnJvci5zaXplcyA9ICdtYW5pZmVzdCBpY29ucyBmaWVsZCBzaXplIGlzIHJlcXVpcmVkISdcbiAgfVxuICByZXR1cm4gZXJyb3I7XG59XG5cbmNvbnN0IHZhbGlkYXRlSWNvbnMgPSAobWFuaWZlc3QsIHJlcXVpcmVkRXJyb3JzKSA9PiB7XG4gIGlmKCdpY29ucycgaW4gbWFuaWZlc3QpIHtcbiAgICBjb25zdCBpY29ucyA9IG1hbmlmZXN0WydpY29ucyddO1xuICAgIGlmKCFBcnJheS5pc0FycmF5KGljb25zKSkge1xuICAgICAgcmVxdWlyZWRFcnJvcnMuaWNvbnMgPSAnbWFuaWZlc3QgaWNvbnMgZmllbGQgc2hvdWxkIGJlIEFycmF5JztcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGljb25FcnJvcnMgPSBbXTtcbiAgICAgIGljb25zLmZvckVhY2goKGljb24pID0+IHtcbiAgICAgICAgY29uc3QgZXJyb3IgPSB2YWxpZGF0ZUljb25PYmooaWNvbik7XG4gICAgICAgIGljb25FcnJvcnMucHVzaChlcnJvcik7XG4gICAgICB9KVxuICAgICAgcmVxdWlyZWRFcnJvcnMuaWNvbnMgPSBpY29uRXJyb3JzO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXF1aXJlZEVycm9ycy5pY29ucyA9ICdtYW5pZmVzdCBpY29ucyBmaWVsZCBpcyByZXF1aXJlZCc7XG4gIH1cbn1cblxuY29uc3QgdmFsaWRhdGVSZXF1aXJlZEZpZWxkcyA9IChtYW5pZmVzdCwgZXJyb3JzKSA9PiB7XG4gIGxldCByZXF1aXJlZEVycm9ycyA9IHt9O1xuICB2YWxpZGF0ZU5hbWUobWFuaWZlc3QsIHJlcXVpcmVkRXJyb3JzKTtcbiAgdmFsaWRhdGVEZXNjcmlwdGlvbihtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpO1xuICB2YWxpZGF0ZUxhbmcobWFuaWZlc3QsIHJlcXVpcmVkRXJyb3JzKTtcbiAgdmFsaWRhdGVUaGVtZUNvbG9yKG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycyk7XG4gIHZhbGlkYXRlT3JpdGF0aW9uKG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycyk7XG4gIHZhbGlkYXRlU3RhcnRVcmwobWFuaWZlc3QsIHJlcXVpcmVkRXJyb3JzKTtcbiAgdmFsaWRhdGVJY29ucyhtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpO1xuICByZXR1cm4gcmVxdWlyZWRFcnJvcnM7XG59XG5cbi8vIHZhbGlkYXRlIG9wdGlvbiBmaWVsZHNcblxuY29uc3QgdmFsaWRhdGVEaXIgPSAobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpID0+IHtcbiAgY29uc3QgRU5VTV9ESVIgPSBbXG4gICAgJ3J0bCcsXG4gICAgJ2x0cicsXG4gICAgJ2F1dG8nXG4gIF07XG4gIGlmICgnZGlyJyBpbiBtYW5pZmVzdCkge1xuICAgIGlmKHR5cGVvZihtYW5pZmVzdFsnZGlyJ10pICE9PSAnc3RyaW5nJykge1xuICAgICAgb3B0aW9uc0Vycm9ycy5kaXIgPSAnbWFuaWZlc3QgZGlyIGZpZWxkIHR5cGUgc2hvdWxkIGJlIHN0cmluZyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGRpciA9IG1hbmlmZXN0WydkaXInXTtcbiAgICAgIGlmKCFFTlVNX0RJUi5pbmNsdWRlcyhkaXIpKSB7XG4gICAgICAgIG9wdGlvbnNFcnJvcnMuZGlyID0gJ21hbmlmZXN0IGRpciBmaWVsZCB2YWx1ZSBub3QgY29ycmVjdCc7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIG9wdGlvbnNFcnJvcnMuZGlyID0gJ21hbmlmZXN0IGRpciBmaWVsZCBpcyBudWxsJztcbiAgfVxufVxuXG5jb25zdCB2YWxpZGF0ZVNjb3BlID0gKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKSA9PiB7XG4gIGlmICgnc2NvcGUnIGluIG1hbmlmZXN0KSB7XG4gICAgaWYodHlwZW9mKG1hbmlmZXN0WydzY29wZSddKSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIG9wdGlvbnNFcnJvcnMuc2NvcGUgPSAnbWFuaWZlc3Qgc2NvcGUgZmllbGQgdHlwZSBzaG91bGQgYmUgc3RyaW5nJztcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgb3B0aW9uc0Vycm9ycy5zY29wZSA9ICdtYW5pZmVzdCBzY29wZSBmaWVsZCBpcyByZXF1aXJlZCc7XG4gIH1cbn1cblxuY29uc3QgdmFsaWRhdGVEaXNwbGF5ID0gKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKSA9PiB7XG4gIGNvbnN0IEVOVU1fRElTUExBWSA9IFtcbiAgICAnZnVsbHNjcmVlbicsXG4gICAgJ3N0YW5kYWxvbmUnLFxuICAgICdtaW5pbWFsLXVpJyxcbiAgICAnYnJvd3NlcidcbiAgXTtcbiAgaWYgKCdkaXNwbGF5JyBpbiBtYW5pZmVzdCkge1xuICAgIGlmKHR5cGVvZihtYW5pZmVzdFsnZGlzcGxheSddKSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIG9wdGlvbnNFcnJvcnMuZGlzcGxheSA9ICdtYW5pZmVzdCBkaXNwbGF5IGZpZWxkIHR5cGUgc2hvdWxkIGJlIHN0cmluZyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGRpc3BsYXkgPSBtYW5pZmVzdFsnZGlzcGxheSddO1xuICAgICAgaWYoIUVOVU1fRElTUExBWS5pbmNsdWRlcyhkaXNwbGF5KSkge1xuICAgICAgICBvcHRpb25zRXJyb3JzLmRpc3BsYXkgPSAnbWFuaWZlc3QgZGlzcGxheSBmaWVsZCB2YWx1ZSBub3QgY29ycmVjdCc7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIG9wdGlvbnNFcnJvcnMuZGlzcGxheSA9ICdtYW5pZmVzdCBkaXNwbGF5IGZpZWxkIGlzIHJlcXVpcmVkJztcbiAgfVxufVxuXG5jb25zdCB2YWxpZGF0ZUJhY2tncm91bmRDb2xvciA9IChtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycykgPT4ge1xuICBpZiAoJ2JhY2tncm91bmRfY29sb3InIGluIG1hbmlmZXN0KSB7XG4gICAgaWYodHlwZW9mKG1hbmlmZXN0WydiYWNrZ3JvdW5kX2NvbG9yJ10pICE9PSAnc3RyaW5nJykge1xuICAgICAgb3B0aW9uc0Vycm9ycy5iYWNrZ3JvdW5kX2NvbG9yID0gJ21hbmlmZXN0IGJhY2tncm91bmRfY29sb3IgZmllbGQgdHlwZSBzaG91bGQgYmUgc3RyaW5nJztcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgb3B0aW9uc0Vycm9ycy5iYWNrZ3JvdW5kX2NvbG9yID0gJ21hbmlmZXN0IGJhY2tncm91bmRfY29sb3IgZmllbGQgaXMgcmVxdWlyZWQnO1xuICB9XG59XG5cbmNvbnN0IHZhbGlkYXRlUmVsYXRlZEFwcGxpY2F0aW9ucyA9IChtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycykgPT4ge1xuICAvLyB0b2RvOiByZWxhdGVkX2FwcGxpY2F0aW9ucyBmaWVsZHNcbn1cblxuY29uc3QgdmFsaWRhdGVQcmVmZXJSZWxhdGVkQXBwbGljYXRpb25zID0gKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKSA9PiB7XG4gIC8vIHRvZG86IHByZWZlcl9yZWxhdGVkX2FwcGxpY2F0aW9ucyBmaWVsZHNcbn1cblxuY29uc3QgdmFsaWRhdGVDYXRlZ29yaWVzID0gKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKSA9PiB7XG4gIGlmKCdjYXRlZ29yaWVzJyBpbiBtYW5pZmVzdCkge1xuICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBtYW5pZmVzdFsnY2F0ZWdvcmllcyddO1xuICAgIGlmKCFBcnJheS5pc0FycmF5KGNhdGVnb3JpZXMpKSB7XG4gICAgICBvcHRpb25zRXJyb3JzLmNhdGVnb3JpZXMgPSAnbWFuaWZlc3QgY2F0ZWdvcmllcyBmaWVsZCBzaG91bGQgYmUgQXJyYXknO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgY2F0ZWdvcmllc0Vycm9ycyA9IFtdO1xuICAgICAgY2F0ZWdvcmllcy5mb3JFYWNoKChjYXRlZ29yeSkgPT4ge1xuICAgICAgICBpZih0eXBlb2YoY2F0ZWdvcnkpICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgIGNhdGVnb3JpZXNFcnJvcnMucHVzaCh7XG4gICAgICAgICAgICBjYXRlZ29yeTogJ21hbmlmZXN0IGNhdGVnb3JpZXMgZmllbGQgY2F0ZWdvcnkgc2hvdWxkIGJlIFN0cmluZydcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIG9wdGlvbnNFcnJvcnMuY2F0ZWdvcmllcyA9IGNhdGVnb3JpZXNFcnJvcnM7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIG9wdGlvbnNFcnJvcnMuY2F0ZWdvcmllcyA9ICdtYW5pZmVzdCBjYXRlZ29yaWVzIGZpZWxkIGlzIG51bGwnO1xuICB9XG59XG5cbmNvbnN0IHZhbGlkYXRlU2NyZWVuc2hvdHMgPSAobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpID0+IHtcbiAgLy8gdG9kbzogc2NyZWVuU2hvdHMgZmllbGRzXG59XG5cbmNvbnN0IHZhbGlkYXRlU2hvcnRjdXRzID0gKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKSA9PiB7XG4gIC8vIHRvZG86IHNob3J0Q3V0cyBmaWVsZHNcbn1cblxuY29uc3QgdmFsaWRhdGVPcHRpb25GaWVsZHMgPSAobWFuaWZlc3QpID0+IHtcbiAgbGV0IG9wdGlvbnNFcnJvcnMgPSB7fTtcbiAgdmFsaWRhdGVEaXIobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpO1xuICB2YWxpZGF0ZVNjb3BlKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKTtcbiAgdmFsaWRhdGVEaXNwbGF5KG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKTtcbiAgdmFsaWRhdGVCYWNrZ3JvdW5kQ29sb3IobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpO1xuICB2YWxpZGF0ZVJlbGF0ZWRBcHBsaWNhdGlvbnMobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpO1xuICB2YWxpZGF0ZVByZWZlclJlbGF0ZWRBcHBsaWNhdGlvbnMobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpO1xuICB2YWxpZGF0ZUNhdGVnb3JpZXMobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpO1xuICB2YWxpZGF0ZVNjcmVlbnNob3RzKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKTtcbiAgdmFsaWRhdGVTaG9ydGN1dHMobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpO1xuICByZXR1cm4gb3B0aW9uc0Vycm9ycztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmFsaWRhdGUob2xkTWFuaWZlc3QpIHtcbiAgcmV0dXJuIHtcbiAgICAncmVxdWlyZWRGaWVsZHMnOiB2YWxpZGF0ZVJlcXVpcmVkRmllbGRzKG9sZE1hbmlmZXN0KSxcbiAgICAnb3B0aW9uRmllbGRzJzogdmFsaWRhdGVPcHRpb25GaWVsZHMob2xkTWFuaWZlc3QpXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/validate.js\n");

/***/ })

})