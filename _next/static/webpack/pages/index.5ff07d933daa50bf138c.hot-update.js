webpackHotUpdate_N_E("pages/index",{

/***/ "./utils/validate.js":
/*!***************************!*\
  !*** ./utils/validate.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return validate; });\n/*\n Required fields:\n   name or short_name: string\n   description: string\n   lang: string\n   theme_color: string\n   orientation: string\n   start_url: string\n   icons: Array of Object\n */\n\n/*\n Optional:\n   dir: string\n   scope: string\n   display: string\n   background_color: string\n   related_applications: Array of Object\n   prefer_related_applications: boolean\n   categories: Array of strings\n   screenshots: Array of Object\n   shortcuts: Array of Object\n */\n// validate required fields\nvar validateName = function validateName(manifest, requiredErrors) {\n  if ('name' in manifest) {\n    if (typeof manifest['name'] !== 'string') {\n      requiredErrors.name = 'manifest name field type should be string';\n    }\n  } else {\n    requiredErrors.name = 'manifest name field is required';\n  }\n};\n\nvar validateDescription = function validateDescription(manifest, requiredErrors) {\n  if ('description' in manifest) {\n    if (typeof manifest['description'] !== 'string') {\n      requiredErrors.description = 'manifest description field type should be string';\n    }\n  } else {\n    requiredErrors.description = 'manifest description field is required';\n  }\n};\n\nvar validateLang = function validateLang(manifest, requiredErrors) {\n  if ('lang' in manifest) {\n    var manifestLang = manifest['lang'];\n\n    if (typeof manifestLang !== 'string') {\n      requiredErrors.lang = 'manifest lang field type should be string!';\n    } else {\n      if (!/^\\w*(-\\w*)*$/.test(manifestLang)) {\n        requiredErrors.lang = 'manifest lang field type should be correct format!';\n      }\n    }\n  } else {\n    requiredErrors.lang = 'manifest lang field is required!';\n  }\n};\n\nvar validateThemeColor = function validateThemeColor(manifest, requiredErrors) {\n  if ('theme_color' in manifest) {\n    if (typeof manifest['theme_color'] !== 'string') {\n      requiredErrors.theme_color = 'manifest theme_color field type should be string';\n    }\n  } else {\n    requiredErrors.theme_color = 'manifest theme_color field is required';\n  }\n};\n\nvar validateOritation = function validateOritation(manifest, requiredErrors) {\n  var ENUM_ORIENTATION = ['any', 'natural', 'landscape', 'landscape-primary', 'landscape-secondary', 'portrait', 'portrait-primary', 'portrait-secondary'];\n\n  if ('orientation' in manifest) {\n    if (typeof manifest['orientation'] !== 'string') {\n      requiredErrors.orientation = 'manifest orientation field type should be string';\n    } else {\n      var orientation = manifest['orientation'];\n\n      if (!ENUM_ORIENTATION.includes(orientation)) {\n        requiredErrors.orientation = 'manifest orientation field value not correct';\n      }\n    }\n  } else {\n    requiredErrors.orientation = 'manifest orientation field is required';\n  }\n};\n\nvar validateStartUrl = function validateStartUrl(manifest, requiredErrors) {\n  if ('start_url' in manifest) {\n    if (typeof manifest['start_url'] !== 'string') {\n      requiredErrors.start_url = 'manifest start_url field type should be string';\n    }\n  } else {\n    requiredErrors.start_url = 'manifest start_url field is required';\n  }\n};\n\nvar validateIconObj = function validateIconObj(iconObj) {\n  var error = {}; // icons src validate\n\n  if ('src' in iconObj) {\n    if (typeof iconObj['src'] !== 'string') {\n      error.src = 'manifest icons field icon type should be string';\n    }\n  } else {\n    error.src = 'manifest icons field icon is required';\n  } // icons size validate\n\n\n  if ('sizes' in iconObj) {\n    var sizes = iconObj['sizes'];\n\n    if (typeof sizes !== 'string') {\n      error.sizes = 'manifest icons field size type should be string';\n    } else {\n      if (!/^\\s*\\d+x\\d+(\\s+\\d+x\\d+)*\\s*$/.test(sizes)) {\n        error.sizes = 'manifest icons field sizes should be correct format!';\n      }\n    }\n  } else {\n    error.sizes = 'manifest icons field size is required!';\n  }\n\n  return error;\n};\n\nvar validateIcons = function validateIcons(manifest, requiredErrors) {\n  if ('icons' in manifest) {\n    var icons = manifest['icons'];\n\n    if (!Array.isArray(icons)) {\n      requiredErrors.icons = 'manifest icons field should be Array';\n    } else {\n      var iconErrors = [];\n      icons.forEach(function (icon) {\n        var error = validateIconObj(icon);\n\n        if (Object.keys(error).length > 0) {\n          iconErrors.push(error);\n        }\n      });\n\n      if (iconErrors.length > 0) {\n        requiredErrors.icons = iconErrors;\n      }\n    }\n  } else {\n    requiredErrors.icons = 'manifest icons field is required';\n  }\n};\n\nvar validateRequiredFields = function validateRequiredFields(manifest, errors) {\n  var requiredErrors = {};\n  validateName(manifest, requiredErrors);\n  validateDescription(manifest, requiredErrors);\n  validateLang(manifest, requiredErrors);\n  validateThemeColor(manifest, requiredErrors);\n  validateOritation(manifest, requiredErrors);\n  validateStartUrl(manifest, requiredErrors);\n  validateIcons(manifest, requiredErrors);\n  return requiredErrors;\n}; // validate option fields\n\n\nvar validateDir = function validateDir(manifest, optionsErrors) {\n  var ENUM_DIR = ['rtl', 'ltr', 'auto'];\n\n  if ('dir' in manifest) {\n    if (typeof manifest['dir'] !== 'string') {\n      optionsErrors.dir = 'manifest dir field type should be string';\n    } else {\n      var dir = manifest['dir'];\n\n      if (!ENUM_DIR.includes(dir)) {\n        optionsErrors.dir = 'manifest dir field value not correct';\n      }\n    }\n  } else {\n    optionsErrors.dir = 'manifest dir field is null';\n  }\n};\n\nvar validateScope = function validateScope(manifest, optionsErrors) {\n  if ('scope' in manifest) {\n    if (typeof manifest['scope'] !== 'string') {\n      optionsErrors.scope = 'manifest scope field type should be string';\n    }\n  } else {\n    optionsErrors.scope = 'manifest scope field is null';\n  }\n};\n\nvar validateDisplay = function validateDisplay(manifest, optionsErrors) {\n  var ENUM_DISPLAY = ['fullscreen', 'standalone', 'minimal-ui', 'browser'];\n\n  if ('display' in manifest) {\n    if (typeof manifest['display'] !== 'string') {\n      optionsErrors.display = 'manifest display field type should be string';\n    } else {\n      var display = manifest['display'];\n\n      if (!ENUM_DISPLAY.includes(display)) {\n        optionsErrors.display = 'manifest display field value not correct';\n      }\n    }\n  } else {\n    optionsErrors.display = 'manifest display field is null';\n  }\n};\n\nvar validateBackgroundColor = function validateBackgroundColor(manifest, optionsErrors) {\n  if ('background_color' in manifest) {\n    if (typeof manifest['background_color'] !== 'string') {\n      optionsErrors.background_color = 'manifest background_color field type should be string';\n    }\n  } else {\n    optionsErrors.background_color = 'manifest background_color field is null';\n  }\n};\n\nvar validateRelatedApplications = function validateRelatedApplications(manifest, optionsErrors) {// todo: related_applications fields\n};\n\nvar validatePreferRelatedApplications = function validatePreferRelatedApplications(manifest, optionsErrors) {// todo: prefer_related_applications fields\n};\n\nvar validateCategories = function validateCategories(manifest, optionsErrors) {\n  if ('categories' in manifest) {\n    var categories = manifest['categories'];\n\n    if (!Array.isArray(categories)) {\n      optionsErrors.categories = 'manifest categories field should be Array';\n    } else {\n      var categoriesErrors = [];\n      categories.forEach(function (category) {\n        if (typeof category !== 'string') {\n          categoriesErrors.push({\n            category: 'manifest categories field category should be String'\n          });\n        }\n      });\n\n      if (categoriesErrors.length > 0) {\n        optionsErrors.categories = categoriesErrors;\n      }\n    }\n  } else {\n    optionsErrors.categories = 'manifest categories field is null';\n  }\n};\n\nvar validateScreenshots = function validateScreenshots(manifest, optionsErrors) {// todo: screenShots fields\n};\n\nvar validateShortcuts = function validateShortcuts(manifest, optionsErrors) {// todo: shortCuts fields\n};\n\nvar validateOptionFields = function validateOptionFields(manifest) {\n  var optionsErrors = {};\n  validateDir(manifest, optionsErrors);\n  validateScope(manifest, optionsErrors);\n  validateDisplay(manifest, optionsErrors);\n  validateBackgroundColor(manifest, optionsErrors);\n  validateRelatedApplications(manifest, optionsErrors);\n  validatePreferRelatedApplications(manifest, optionsErrors);\n  validateCategories(manifest, optionsErrors);\n  validateScreenshots(manifest, optionsErrors);\n  validateShortcuts(manifest, optionsErrors);\n  return optionsErrors;\n};\n\nfunction validate(oldManifest) {\n  return {\n    'requiredFields': validateRequiredFields(oldManifest),\n    'optionFields': validateOptionFields(oldManifest)\n  };\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvdmFsaWRhdGUuanM/ZjdkZiJdLCJuYW1lcyI6WyJ2YWxpZGF0ZU5hbWUiLCJtYW5pZmVzdCIsInJlcXVpcmVkRXJyb3JzIiwibmFtZSIsInZhbGlkYXRlRGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvbiIsInZhbGlkYXRlTGFuZyIsIm1hbmlmZXN0TGFuZyIsImxhbmciLCJ0ZXN0IiwidmFsaWRhdGVUaGVtZUNvbG9yIiwidGhlbWVfY29sb3IiLCJ2YWxpZGF0ZU9yaXRhdGlvbiIsIkVOVU1fT1JJRU5UQVRJT04iLCJvcmllbnRhdGlvbiIsImluY2x1ZGVzIiwidmFsaWRhdGVTdGFydFVybCIsInN0YXJ0X3VybCIsInZhbGlkYXRlSWNvbk9iaiIsImljb25PYmoiLCJlcnJvciIsInNyYyIsInNpemVzIiwidmFsaWRhdGVJY29ucyIsImljb25zIiwiQXJyYXkiLCJpc0FycmF5IiwiaWNvbkVycm9ycyIsImZvckVhY2giLCJpY29uIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsInB1c2giLCJ2YWxpZGF0ZVJlcXVpcmVkRmllbGRzIiwiZXJyb3JzIiwidmFsaWRhdGVEaXIiLCJvcHRpb25zRXJyb3JzIiwiRU5VTV9ESVIiLCJkaXIiLCJ2YWxpZGF0ZVNjb3BlIiwic2NvcGUiLCJ2YWxpZGF0ZURpc3BsYXkiLCJFTlVNX0RJU1BMQVkiLCJkaXNwbGF5IiwidmFsaWRhdGVCYWNrZ3JvdW5kQ29sb3IiLCJiYWNrZ3JvdW5kX2NvbG9yIiwidmFsaWRhdGVSZWxhdGVkQXBwbGljYXRpb25zIiwidmFsaWRhdGVQcmVmZXJSZWxhdGVkQXBwbGljYXRpb25zIiwidmFsaWRhdGVDYXRlZ29yaWVzIiwiY2F0ZWdvcmllcyIsImNhdGVnb3JpZXNFcnJvcnMiLCJjYXRlZ29yeSIsInZhbGlkYXRlU2NyZWVuc2hvdHMiLCJ2YWxpZGF0ZVNob3J0Y3V0cyIsInZhbGlkYXRlT3B0aW9uRmllbGRzIiwidmFsaWRhdGUiLCJvbGRNYW5pZmVz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QWM7QUFDekMsTUFBSW9DLGFBQWEsR0FBRyxFQUFwQjtBQUNBRCxhQUFXLENBQUNuQyxRQUFELEVBQVdvQyxhQUFYLENBQVg7QUFDQUcsZUFBYSxDQUFDdkMsUUFBRCxFQUFXb0MsYUFBWCxDQUFiO0FBQ0FLLGlCQUFlLENBQUN6QyxRQUFELEVBQVdvQyxhQUFYLENBQWY7QUFDQVEseUJBQXVCLENBQUM1QyxRQUFELEVBQVdvQyxhQUFYLENBQXZCO0FBQ0FVLDZCQUEyQixDQUFDOUMsUUFBRCxFQUFXb0MsYUFBWCxDQUEzQjtBQUNBVyxtQ0FBaUMsQ0FBQy9DLFFBQUQsRUFBV29DLGFBQVgsQ0FBakM7QUFDQVksb0JBQWtCLENBQUNoRCxRQUFELEVBQVdvQyxhQUFYLENBQWxCO0FBQ0FnQixxQkFBbUIsQ0FBQ3BELFFBQUQsRUFBV29DLGFBQVgsQ0FBbkI7QUFDQWlCLG1CQUFpQixDQUFDckQsUUFBRCxFQUFXb0MsYUFBWCxDQUFqQjtBQUNBLFNBQU9BLGFBQVA7QUFDRCxDQVpEOztBQWNlLFNBQVNtQixRQUFULENBQWtCQyxXQUFsQixFQUErQjtBQUM1QyxTQUFPO0FBQ0wsc0JBQWtCdkIsc0JBQXNCLENBQUN1QixXQUFELENBRG5DO0FBRUwsb0JBQWdCRixvQkFBb0IsQ0FBQ0UsV0FBRDtBQUYvQixHQUFQO0FBSUQiLCJmaWxlIjoiLi91dGlscy92YWxpZGF0ZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gUmVxdWlyZWQgZmllbGRzOlxuICAgbmFtZSBvciBzaG9ydF9uYW1lOiBzdHJpbmdcbiAgIGRlc2NyaXB0aW9uOiBzdHJpbmdcbiAgIGxhbmc6IHN0cmluZ1xuICAgdGhlbWVfY29sb3I6IHN0cmluZ1xuICAgb3JpZW50YXRpb246IHN0cmluZ1xuICAgc3RhcnRfdXJsOiBzdHJpbmdcbiAgIGljb25zOiBBcnJheSBvZiBPYmplY3RcbiAqL1xuXG4vKlxuIE9wdGlvbmFsOlxuICAgZGlyOiBzdHJpbmdcbiAgIHNjb3BlOiBzdHJpbmdcbiAgIGRpc3BsYXk6IHN0cmluZ1xuICAgYmFja2dyb3VuZF9jb2xvcjogc3RyaW5nXG4gICByZWxhdGVkX2FwcGxpY2F0aW9uczogQXJyYXkgb2YgT2JqZWN0XG4gICBwcmVmZXJfcmVsYXRlZF9hcHBsaWNhdGlvbnM6IGJvb2xlYW5cbiAgIGNhdGVnb3JpZXM6IEFycmF5IG9mIHN0cmluZ3NcbiAgIHNjcmVlbnNob3RzOiBBcnJheSBvZiBPYmplY3RcbiAgIHNob3J0Y3V0czogQXJyYXkgb2YgT2JqZWN0XG4gKi9cblxuLy8gdmFsaWRhdGUgcmVxdWlyZWQgZmllbGRzXG5jb25zdCB2YWxpZGF0ZU5hbWUgPSAobWFuaWZlc3QsIHJlcXVpcmVkRXJyb3JzKSA9PiB7XG4gIGlmICgnbmFtZScgaW4gbWFuaWZlc3QpIHtcbiAgICBpZih0eXBlb2YobWFuaWZlc3RbJ25hbWUnXSkgIT09ICdzdHJpbmcnKSB7XG4gICAgICByZXF1aXJlZEVycm9ycy5uYW1lID0gJ21hbmlmZXN0IG5hbWUgZmllbGQgdHlwZSBzaG91bGQgYmUgc3RyaW5nJztcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmVxdWlyZWRFcnJvcnMubmFtZSA9ICdtYW5pZmVzdCBuYW1lIGZpZWxkIGlzIHJlcXVpcmVkJztcbiAgfVxufVxuXG5jb25zdCB2YWxpZGF0ZURlc2NyaXB0aW9uID0gKG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycykgPT4ge1xuICBpZiAoJ2Rlc2NyaXB0aW9uJyBpbiBtYW5pZmVzdCkge1xuICAgIGlmKHR5cGVvZihtYW5pZmVzdFsnZGVzY3JpcHRpb24nXSkgIT09ICdzdHJpbmcnKSB7XG4gICAgICByZXF1aXJlZEVycm9ycy5kZXNjcmlwdGlvbiA9ICdtYW5pZmVzdCBkZXNjcmlwdGlvbiBmaWVsZCB0eXBlIHNob3VsZCBiZSBzdHJpbmcnO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXF1aXJlZEVycm9ycy5kZXNjcmlwdGlvbiA9ICdtYW5pZmVzdCBkZXNjcmlwdGlvbiBmaWVsZCBpcyByZXF1aXJlZCc7XG4gIH1cbn1cblxuY29uc3QgdmFsaWRhdGVMYW5nID0gKG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycykgPT4ge1xuICBpZignbGFuZycgaW4gbWFuaWZlc3QpIHtcbiAgICBjb25zdCBtYW5pZmVzdExhbmcgPSBtYW5pZmVzdFsnbGFuZyddO1xuICAgIGlmKHR5cGVvZihtYW5pZmVzdExhbmcpICE9PSAnc3RyaW5nJykge1xuICAgICAgcmVxdWlyZWRFcnJvcnMubGFuZyA9ICdtYW5pZmVzdCBsYW5nIGZpZWxkIHR5cGUgc2hvdWxkIGJlIHN0cmluZyEnO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZighL15cXHcqKC1cXHcqKSokLy50ZXN0KG1hbmlmZXN0TGFuZykpIHtcbiAgICAgICAgcmVxdWlyZWRFcnJvcnMubGFuZyA9ICdtYW5pZmVzdCBsYW5nIGZpZWxkIHR5cGUgc2hvdWxkIGJlIGNvcnJlY3QgZm9ybWF0ISc7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJlcXVpcmVkRXJyb3JzLmxhbmcgPSAnbWFuaWZlc3QgbGFuZyBmaWVsZCBpcyByZXF1aXJlZCEnXG4gIH1cbn1cblxuY29uc3QgdmFsaWRhdGVUaGVtZUNvbG9yID0gKG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycykgPT4ge1xuICBpZiAoJ3RoZW1lX2NvbG9yJyBpbiBtYW5pZmVzdCkge1xuICAgIGlmKHR5cGVvZihtYW5pZmVzdFsndGhlbWVfY29sb3InXSkgIT09ICdzdHJpbmcnKSB7XG4gICAgICByZXF1aXJlZEVycm9ycy50aGVtZV9jb2xvciA9ICdtYW5pZmVzdCB0aGVtZV9jb2xvciBmaWVsZCB0eXBlIHNob3VsZCBiZSBzdHJpbmcnO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXF1aXJlZEVycm9ycy50aGVtZV9jb2xvciA9ICdtYW5pZmVzdCB0aGVtZV9jb2xvciBmaWVsZCBpcyByZXF1aXJlZCc7XG4gIH1cbn1cblxuY29uc3QgdmFsaWRhdGVPcml0YXRpb24gPSAobWFuaWZlc3QsIHJlcXVpcmVkRXJyb3JzKSA9PiB7XG4gIGNvbnN0IEVOVU1fT1JJRU5UQVRJT04gPSBbXG4gICAgJ2FueScsXG4gICAgJ25hdHVyYWwnLFxuICAgICdsYW5kc2NhcGUnLFxuICAgICdsYW5kc2NhcGUtcHJpbWFyeScsXG4gICAgJ2xhbmRzY2FwZS1zZWNvbmRhcnknLFxuICAgICdwb3J0cmFpdCcsXG4gICAgJ3BvcnRyYWl0LXByaW1hcnknLFxuICAgICdwb3J0cmFpdC1zZWNvbmRhcnknXG4gIF07XG4gIGlmICgnb3JpZW50YXRpb24nIGluIG1hbmlmZXN0KSB7XG4gICAgaWYodHlwZW9mKG1hbmlmZXN0WydvcmllbnRhdGlvbiddKSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHJlcXVpcmVkRXJyb3JzLm9yaWVudGF0aW9uID0gJ21hbmlmZXN0IG9yaWVudGF0aW9uIGZpZWxkIHR5cGUgc2hvdWxkIGJlIHN0cmluZyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG9yaWVudGF0aW9uID0gbWFuaWZlc3RbJ29yaWVudGF0aW9uJ107XG4gICAgICBpZighRU5VTV9PUklFTlRBVElPTi5pbmNsdWRlcyhvcmllbnRhdGlvbikpIHtcbiAgICAgICAgcmVxdWlyZWRFcnJvcnMub3JpZW50YXRpb24gPSAnbWFuaWZlc3Qgb3JpZW50YXRpb24gZmllbGQgdmFsdWUgbm90IGNvcnJlY3QnO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXF1aXJlZEVycm9ycy5vcmllbnRhdGlvbiA9ICdtYW5pZmVzdCBvcmllbnRhdGlvbiBmaWVsZCBpcyByZXF1aXJlZCc7XG4gIH1cbn1cblxuY29uc3QgdmFsaWRhdGVTdGFydFVybCA9IChtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpID0+IHtcbiAgaWYgKCdzdGFydF91cmwnIGluIG1hbmlmZXN0KSB7XG4gICAgaWYodHlwZW9mKG1hbmlmZXN0WydzdGFydF91cmwnXSkgIT09ICdzdHJpbmcnKSB7XG4gICAgICByZXF1aXJlZEVycm9ycy5zdGFydF91cmwgPSAnbWFuaWZlc3Qgc3RhcnRfdXJsIGZpZWxkIHR5cGUgc2hvdWxkIGJlIHN0cmluZyc7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJlcXVpcmVkRXJyb3JzLnN0YXJ0X3VybCA9ICdtYW5pZmVzdCBzdGFydF91cmwgZmllbGQgaXMgcmVxdWlyZWQnO1xuICB9XG59XG5cbmNvbnN0IHZhbGlkYXRlSWNvbk9iaiA9IChpY29uT2JqKSA9PiB7XG4gIGxldCBlcnJvciA9IHt9O1xuICAvLyBpY29ucyBzcmMgdmFsaWRhdGVcbiAgaWYgKCdzcmMnIGluIGljb25PYmopIHtcbiAgICBpZih0eXBlb2YoaWNvbk9ialsnc3JjJ10pICE9PSAnc3RyaW5nJykge1xuICAgICAgZXJyb3Iuc3JjID0gJ21hbmlmZXN0IGljb25zIGZpZWxkIGljb24gdHlwZSBzaG91bGQgYmUgc3RyaW5nJztcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZXJyb3Iuc3JjID0gJ21hbmlmZXN0IGljb25zIGZpZWxkIGljb24gaXMgcmVxdWlyZWQnO1xuICB9XG4gIC8vIGljb25zIHNpemUgdmFsaWRhdGVcbiAgaWYoJ3NpemVzJyBpbiBpY29uT2JqKSB7XG4gICAgY29uc3Qgc2l6ZXMgPSBpY29uT2JqWydzaXplcyddO1xuICAgIGlmKHR5cGVvZihzaXplcykgIT09ICdzdHJpbmcnKSB7XG4gICAgICBlcnJvci5zaXplcyA9ICdtYW5pZmVzdCBpY29ucyBmaWVsZCBzaXplIHR5cGUgc2hvdWxkIGJlIHN0cmluZyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmKCEvXlxccypcXGQreFxcZCsoXFxzK1xcZCt4XFxkKykqXFxzKiQvLnRlc3Qoc2l6ZXMpKSB7XG4gICAgICAgIGVycm9yLnNpemVzID0gJ21hbmlmZXN0IGljb25zIGZpZWxkIHNpemVzIHNob3VsZCBiZSBjb3JyZWN0IGZvcm1hdCEnO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBlcnJvci5zaXplcyA9ICdtYW5pZmVzdCBpY29ucyBmaWVsZCBzaXplIGlzIHJlcXVpcmVkISc7XG4gIH1cbiAgcmV0dXJuIGVycm9yO1xufVxuXG5jb25zdCB2YWxpZGF0ZUljb25zID0gKG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycykgPT4ge1xuICBpZignaWNvbnMnIGluIG1hbmlmZXN0KSB7XG4gICAgY29uc3QgaWNvbnMgPSBtYW5pZmVzdFsnaWNvbnMnXTtcbiAgICBpZighQXJyYXkuaXNBcnJheShpY29ucykpIHtcbiAgICAgIHJlcXVpcmVkRXJyb3JzLmljb25zID0gJ21hbmlmZXN0IGljb25zIGZpZWxkIHNob3VsZCBiZSBBcnJheSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBpY29uRXJyb3JzID0gW107XG4gICAgICBpY29ucy5mb3JFYWNoKChpY29uKSA9PiB7XG4gICAgICAgIGNvbnN0IGVycm9yID0gdmFsaWRhdGVJY29uT2JqKGljb24pO1xuICAgICAgICBpZihPYmplY3Qua2V5cyhlcnJvcikubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGljb25FcnJvcnMucHVzaChlcnJvcik7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICBpZihpY29uRXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmVxdWlyZWRFcnJvcnMuaWNvbnMgPSBpY29uRXJyb3JzO1xuICAgICAgfVxuXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJlcXVpcmVkRXJyb3JzLmljb25zID0gJ21hbmlmZXN0IGljb25zIGZpZWxkIGlzIHJlcXVpcmVkJztcbiAgfVxufVxuXG5jb25zdCB2YWxpZGF0ZVJlcXVpcmVkRmllbGRzID0gKG1hbmlmZXN0LCBlcnJvcnMpID0+IHtcbiAgbGV0IHJlcXVpcmVkRXJyb3JzID0ge307XG4gIHZhbGlkYXRlTmFtZShtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpO1xuICB2YWxpZGF0ZURlc2NyaXB0aW9uKG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycyk7XG4gIHZhbGlkYXRlTGFuZyhtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpO1xuICB2YWxpZGF0ZVRoZW1lQ29sb3IobWFuaWZlc3QsIHJlcXVpcmVkRXJyb3JzKTtcbiAgdmFsaWRhdGVPcml0YXRpb24obWFuaWZlc3QsIHJlcXVpcmVkRXJyb3JzKTtcbiAgdmFsaWRhdGVTdGFydFVybChtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpO1xuICB2YWxpZGF0ZUljb25zKG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycyk7XG4gIHJldHVybiByZXF1aXJlZEVycm9ycztcbn1cblxuLy8gdmFsaWRhdGUgb3B0aW9uIGZpZWxkc1xuXG5jb25zdCB2YWxpZGF0ZURpciA9IChtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycykgPT4ge1xuICBjb25zdCBFTlVNX0RJUiA9IFtcbiAgICAncnRsJyxcbiAgICAnbHRyJyxcbiAgICAnYXV0bydcbiAgXTtcbiAgaWYgKCdkaXInIGluIG1hbmlmZXN0KSB7XG4gICAgaWYodHlwZW9mKG1hbmlmZXN0WydkaXInXSkgIT09ICdzdHJpbmcnKSB7XG4gICAgICBvcHRpb25zRXJyb3JzLmRpciA9ICdtYW5pZmVzdCBkaXIgZmllbGQgdHlwZSBzaG91bGQgYmUgc3RyaW5nJztcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZGlyID0gbWFuaWZlc3RbJ2RpciddO1xuICAgICAgaWYoIUVOVU1fRElSLmluY2x1ZGVzKGRpcikpIHtcbiAgICAgICAgb3B0aW9uc0Vycm9ycy5kaXIgPSAnbWFuaWZlc3QgZGlyIGZpZWxkIHZhbHVlIG5vdCBjb3JyZWN0JztcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgb3B0aW9uc0Vycm9ycy5kaXIgPSAnbWFuaWZlc3QgZGlyIGZpZWxkIGlzIG51bGwnO1xuICB9XG59XG5cbmNvbnN0IHZhbGlkYXRlU2NvcGUgPSAobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpID0+IHtcbiAgaWYgKCdzY29wZScgaW4gbWFuaWZlc3QpIHtcbiAgICBpZih0eXBlb2YobWFuaWZlc3RbJ3Njb3BlJ10pICE9PSAnc3RyaW5nJykge1xuICAgICAgb3B0aW9uc0Vycm9ycy5zY29wZSA9ICdtYW5pZmVzdCBzY29wZSBmaWVsZCB0eXBlIHNob3VsZCBiZSBzdHJpbmcnO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBvcHRpb25zRXJyb3JzLnNjb3BlID0gJ21hbmlmZXN0IHNjb3BlIGZpZWxkIGlzIG51bGwnO1xuICB9XG59XG5cbmNvbnN0IHZhbGlkYXRlRGlzcGxheSA9IChtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycykgPT4ge1xuICBjb25zdCBFTlVNX0RJU1BMQVkgPSBbXG4gICAgJ2Z1bGxzY3JlZW4nLFxuICAgICdzdGFuZGFsb25lJyxcbiAgICAnbWluaW1hbC11aScsXG4gICAgJ2Jyb3dzZXInXG4gIF07XG4gIGlmICgnZGlzcGxheScgaW4gbWFuaWZlc3QpIHtcbiAgICBpZih0eXBlb2YobWFuaWZlc3RbJ2Rpc3BsYXknXSkgIT09ICdzdHJpbmcnKSB7XG4gICAgICBvcHRpb25zRXJyb3JzLmRpc3BsYXkgPSAnbWFuaWZlc3QgZGlzcGxheSBmaWVsZCB0eXBlIHNob3VsZCBiZSBzdHJpbmcnO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBkaXNwbGF5ID0gbWFuaWZlc3RbJ2Rpc3BsYXknXTtcbiAgICAgIGlmKCFFTlVNX0RJU1BMQVkuaW5jbHVkZXMoZGlzcGxheSkpIHtcbiAgICAgICAgb3B0aW9uc0Vycm9ycy5kaXNwbGF5ID0gJ21hbmlmZXN0IGRpc3BsYXkgZmllbGQgdmFsdWUgbm90IGNvcnJlY3QnO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBvcHRpb25zRXJyb3JzLmRpc3BsYXkgPSAnbWFuaWZlc3QgZGlzcGxheSBmaWVsZCBpcyBudWxsJztcbiAgfVxufVxuXG5jb25zdCB2YWxpZGF0ZUJhY2tncm91bmRDb2xvciA9IChtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycykgPT4ge1xuICBpZiAoJ2JhY2tncm91bmRfY29sb3InIGluIG1hbmlmZXN0KSB7XG4gICAgaWYodHlwZW9mKG1hbmlmZXN0WydiYWNrZ3JvdW5kX2NvbG9yJ10pICE9PSAnc3RyaW5nJykge1xuICAgICAgb3B0aW9uc0Vycm9ycy5iYWNrZ3JvdW5kX2NvbG9yID0gJ21hbmlmZXN0IGJhY2tncm91bmRfY29sb3IgZmllbGQgdHlwZSBzaG91bGQgYmUgc3RyaW5nJztcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgb3B0aW9uc0Vycm9ycy5iYWNrZ3JvdW5kX2NvbG9yID0gJ21hbmlmZXN0IGJhY2tncm91bmRfY29sb3IgZmllbGQgaXMgbnVsbCc7XG4gIH1cbn1cblxuY29uc3QgdmFsaWRhdGVSZWxhdGVkQXBwbGljYXRpb25zID0gKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKSA9PiB7XG4gIC8vIHRvZG86IHJlbGF0ZWRfYXBwbGljYXRpb25zIGZpZWxkc1xufVxuXG5jb25zdCB2YWxpZGF0ZVByZWZlclJlbGF0ZWRBcHBsaWNhdGlvbnMgPSAobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpID0+IHtcbiAgLy8gdG9kbzogcHJlZmVyX3JlbGF0ZWRfYXBwbGljYXRpb25zIGZpZWxkc1xufVxuXG5jb25zdCB2YWxpZGF0ZUNhdGVnb3JpZXMgPSAobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpID0+IHtcbiAgaWYoJ2NhdGVnb3JpZXMnIGluIG1hbmlmZXN0KSB7XG4gICAgY29uc3QgY2F0ZWdvcmllcyA9IG1hbmlmZXN0WydjYXRlZ29yaWVzJ107XG4gICAgaWYoIUFycmF5LmlzQXJyYXkoY2F0ZWdvcmllcykpIHtcbiAgICAgIG9wdGlvbnNFcnJvcnMuY2F0ZWdvcmllcyA9ICdtYW5pZmVzdCBjYXRlZ29yaWVzIGZpZWxkIHNob3VsZCBiZSBBcnJheSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBjYXRlZ29yaWVzRXJyb3JzID0gW107XG4gICAgICBjYXRlZ29yaWVzLmZvckVhY2goKGNhdGVnb3J5KSA9PiB7XG4gICAgICAgIGlmKHR5cGVvZihjYXRlZ29yeSkgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgY2F0ZWdvcmllc0Vycm9ycy5wdXNoKHtcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnbWFuaWZlc3QgY2F0ZWdvcmllcyBmaWVsZCBjYXRlZ29yeSBzaG91bGQgYmUgU3RyaW5nJ1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgaWYoY2F0ZWdvcmllc0Vycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgIG9wdGlvbnNFcnJvcnMuY2F0ZWdvcmllcyA9IGNhdGVnb3JpZXNFcnJvcnM7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIG9wdGlvbnNFcnJvcnMuY2F0ZWdvcmllcyA9ICdtYW5pZmVzdCBjYXRlZ29yaWVzIGZpZWxkIGlzIG51bGwnO1xuICB9XG59XG5cbmNvbnN0IHZhbGlkYXRlU2NyZWVuc2hvdHMgPSAobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpID0+IHtcbiAgLy8gdG9kbzogc2NyZWVuU2hvdHMgZmllbGRzXG59XG5cbmNvbnN0IHZhbGlkYXRlU2hvcnRjdXRzID0gKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKSA9PiB7XG4gIC8vIHRvZG86IHNob3J0Q3V0cyBmaWVsZHNcbn1cblxuY29uc3QgdmFsaWRhdGVPcHRpb25GaWVsZHMgPSAobWFuaWZlc3QpID0+IHtcbiAgbGV0IG9wdGlvbnNFcnJvcnMgPSB7fTtcbiAgdmFsaWRhdGVEaXIobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpO1xuICB2YWxpZGF0ZVNjb3BlKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKTtcbiAgdmFsaWRhdGVEaXNwbGF5KG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKTtcbiAgdmFsaWRhdGVCYWNrZ3JvdW5kQ29sb3IobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpO1xuICB2YWxpZGF0ZVJlbGF0ZWRBcHBsaWNhdGlvbnMobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpO1xuICB2YWxpZGF0ZVByZWZlclJlbGF0ZWRBcHBsaWNhdGlvbnMobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpO1xuICB2YWxpZGF0ZUNhdGVnb3JpZXMobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpO1xuICB2YWxpZGF0ZVNjcmVlbnNob3RzKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKTtcbiAgdmFsaWRhdGVTaG9ydGN1dHMobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpO1xuICByZXR1cm4gb3B0aW9uc0Vycm9ycztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmFsaWRhdGUob2xkTWFuaWZlc3QpIHtcbiAgcmV0dXJuIHtcbiAgICAncmVxdWlyZWRGaWVsZHMnOiB2YWxpZGF0ZVJlcXVpcmVkRmllbGRzKG9sZE1hbmlmZXN0KSxcbiAgICAnb3B0aW9uRmllbGRzJzogdmFsaWRhdGVPcHRpb25GaWVsZHMob2xkTWFuaWZlc3QpXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/validate.js\n");

/***/ })

})