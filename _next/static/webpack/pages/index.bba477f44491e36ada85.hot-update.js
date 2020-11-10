webpackHotUpdate_N_E("pages/index",{

/***/ "./utils/validate.js":
/*!***************************!*\
  !*** ./utils/validate.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return validate; });\n/*\n Required fields:\n   name or short_name: string\n   description: string\n   lang: string\n   theme_color: string\n   orientation: string\n   start_url: string\n   icons: Array of Object\n */\n\n/*\n Optional:\n   dir: string\n   scope: string\n   display: string\n   background_color: string\n   related_applications: Array of Object\n   prefer_related_applications: boolean\n   categories: Array of strings\n   screenshots: Array of Object\n   shortcuts: Array of Object\n */\n// validate required fields\nvar validateName = function validateName(manifest, requiredErrors) {\n  if ('name' in manifest) {\n    if (typeof manifest['name'] !== 'string') {\n      requiredErrors.name = 'manifest name field type should be string';\n    }\n  } else {\n    requiredErrors.name = 'manifest name field is required';\n  }\n};\n\nvar validateDescription = function validateDescription(manifest, requiredErrors) {\n  if ('description' in manifest) {\n    if (typeof manifest['description'] !== 'string') {\n      requiredErrors.description = 'manifest description field type should be string';\n    }\n  } else {\n    requiredErrors.description = 'manifest description field is required';\n  }\n};\n\nvar validateLang = function validateLang(manifest, requiredErrors) {\n  if ('lang' in manifest) {\n    var manifestLang = manifest['lang'];\n\n    if (typeof manifestLang !== 'string') {\n      requiredErrors.lang = 'manifest lang field type should be string!';\n    } else {\n      if (!/^\\w*(-\\w*)*$/.test(manifestLang)) {\n        requiredErrors.lang = 'manifest lang field type should be correct format!';\n      }\n    }\n  } else {\n    requiredErrors.lang = 'manifest lang field is required!';\n  }\n};\n\nvar validateThemeColor = function validateThemeColor(manifest, requiredErrors) {\n  if ('theme_color' in manifest) {\n    if (typeof manifest['theme_color'] !== 'string') {\n      requiredErrors.theme_color = 'manifest theme_color field type should be string';\n    }\n  } else {\n    requiredErrors.theme_color = 'manifest theme_color field is required';\n  }\n};\n\nvar validateOritation = function validateOritation(manifest, requiredErrors) {\n  var ENUM_ORIENTATION = ['any', 'natural', 'landscape', 'landscape-primary', 'landscape-secondary', 'portrait', 'portrait-primary', 'portrait-secondary'];\n\n  if ('orientation' in manifest) {\n    if (typeof manifest['orientation'] !== 'string') {\n      requiredErrors.orientation = 'manifest orientation field type should be string';\n    } else {\n      var orientation = manifest['orientation'];\n\n      if (!ENUM_ORIENTATION.includes(orientation)) {\n        requiredErrors.orientation = 'manifest orientation field value not correct';\n      }\n    }\n  } else {\n    requiredErrors.orientation = 'manifest orientation field is required';\n  }\n};\n\nvar validateStartUrl = function validateStartUrl(manifest, requiredErrors) {\n  if ('start_url' in manifest) {\n    if (typeof manifest['start_url'] !== 'string') {\n      requiredErrors.start_url = 'manifest start_url field type should be string';\n    }\n  } else {\n    requiredErrors.start_url = 'manifest start_url field is required';\n  }\n};\n\nvar validateIconObj = function validateIconObj(iconObj) {\n  var error = {}; // icons src validate\n\n  if ('src' in iconObj) {\n    if (typeof iconObj['src'] !== 'string') {\n      error.src = 'manifest icons field icon type should be string';\n    }\n  } else {\n    error.src = 'manifest icons field icon is required';\n  } // icons size validate\n\n\n  if ('sizes' in iconObj) {\n    var sizes = iconObj['sizes'];\n\n    if (typeof sizes !== 'string') {\n      error.sizes = 'manifest icons field size type should be string';\n    } else {\n      if (!/^\\s*\\d+x\\d+(\\s+\\d+x\\d+)*\\s*$/.test(sizes)) {\n        error.sizes = 'manifest icons field sizes should be correct format!';\n      }\n    }\n  } else {\n    error.sizes = 'manifest icons field size is required!';\n  }\n\n  return error;\n};\n\nvar validateIcons = function validateIcons(manifest, requiredErrors) {\n  if ('icons' in manifest) {\n    var icons = manifest['icons'];\n\n    if (!Array.isArray(icons)) {\n      requiredErrors.icons = 'manifest icons field should be Array';\n    } else {\n      var iconErrors = {};\n      icons.forEach(function (icon) {\n        iconErrors = validateIconObj(icon);\n      });\n      requiredErrors.icons = iconErrors;\n    }\n  } else {\n    requiredErrors.icons = 'manifest icons field is required';\n  }\n};\n\nvar validateRequiredFields = function validateRequiredFields(manifest, errors) {\n  var requiredErrors = {};\n  validateName(manifest, requiredErrors);\n  validateDescription(manifest, requiredErrors);\n  validateLang(manifest, requiredErrors);\n  validateThemeColor(manifest, requiredErrors);\n  validateOritation(manifest, requiredErrors);\n  validateStartUrl(manifest, requiredErrors);\n  validateIcons(manifest, requiredErrors);\n  return requiredErrors;\n}; // validate option fields\n\n\nvar validateDir = function validateDir(manifest, optionsErrors) {\n  var ENUM_DIR = ['rtl', 'ltr', 'auto'];\n\n  if ('dir' in manifest) {\n    if (typeof manifest['dir'] !== 'string') {\n      optionsErrors.orientation = 'manifest orientation field type should be string';\n    } else {\n      var orientation = manifest['orientation'];\n\n      if (!ENUM_ORIENTATION.includes(orientation)) {\n        optionsErrors.orientation = 'manifest orientation field value not correct';\n      }\n    }\n  } else {\n    optionsErrors.orientation = 'manifest orientation field is required';\n  }\n};\n\nvar validateScope = function validateScope(manifest, optionsErrors) {};\n\nvar validateDisplay = function validateDisplay(manifest, optionsErrors) {};\n\nvar validateBackgroundColor = function validateBackgroundColor(manifest, optionsErrors) {};\n\nvar validateRelatedApplications = function validateRelatedApplications(manifest, optionsErrors) {};\n\nvar validatePreferRelatedApplications = function validatePreferRelatedApplications(manifest, optionsErrors) {};\n\nvar validateCategories = function validateCategories(manifest, optionsErrors) {};\n\nvar validateScreenshots = function validateScreenshots(manifest, optionsErrors) {};\n\nvar validateShortcuts = function validateShortcuts(manifest, optionsErrors) {};\n\nvar validateOptionFields = function validateOptionFields(manifest) {\n  var optionsErrors = {};\n  validateDir(manifest, optionsErrors);\n  validateScope(manifest, optionsErrors);\n  validateDisplay(manifest, optionsErrors);\n  validateBackgroundColor(manifest, optionsErrors);\n  validateRelatedApplications(manifest, optionsErrors);\n  validatePreferRelatedApplications(manifest, optionsErrors);\n  validateCategories(manifest, optionsErrors);\n  validateScreenshots(manifest, optionsErrors);\n  validateShortcuts(manifest, optionsErrors);\n};\n\nfunction validate(oldManifest) {\n  validateRequiredFields(oldManifest);\n  validateOptionFields(oldManifest);\n  return 'success';\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvdmFsaWRhdGUuanM/ZjdkZiJdLCJuYW1lcyI6WyJ2YWxpZGF0ZU5hbWUiLCJtYW5pZmVzdCIsInJlcXVpcmVkRXJyb3JzIiwibmFtZSIsInZhbGlkYXRlRGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvbiIsInZhbGlkYXRlTGFuZyIsIm1hbmlmZXN0TGFuZyIsImxhbmciLCJ0ZXN0IiwidmFsaWRhdGVUaGVtZUNvbG9yIiwidGhlbWVfY29sb3IiLCJ2YWxpZGF0ZU9yaXRhdGlvbiIsIkVOVU1fT1JJRU5UQVRJT04iLCJvcmllbnRhdGlvbiIsImluY2x1ZGVzIiwidmFsaWRhdGVTdGFydFVybCIsInN0YXJ0X3VybCIsInZhbGlkYXRlSWNvbk9iaiIsImljb25PYmoiLCJlcnJvciIsInNyYyIsInNpemVzIiwidmFsaWRhdGVJY29ucyIsImljb25zIiwiQXJyYXkiLCJpc0FycmF5IiwiaWNvbkVycm9ycyIsImZvckVhY2giLCJpY29uIiwidmFsaWRhdGVSZXF1aXJlZEZpZWxkcyIsImVycm9ycyIsInZhbGlkYXRlRGlyIiwib3B0aW9uc0Vycm9ycyIsIkVOVU1fRElSIiwidmFsaWRhdGVTY29wZSIsInZhbGlkYXRlRGlzcGxheSIsInZhbGlkYXRlQmFja2dyb3VuZENvbG9yIiwidmFsaWRhdGVSZWxhdGVkQXBwbGljYXRpb25zIiwidmFsaWRhdGVQcmVmZXJSZWxhdGVkQXBwbGljYXRpb25zIiwidmFsaWRhdGVDYXRlZ29yaWVzIiwidmFsaWRhdGVTY3JlZW5zaG90cyIsInZhbGlkYXRlU2hvcnRjdXRzIiwidmFsaWRhdGVPcHRpb25GaWVsZHMiLCJ2YWxpZGF0ZSIsIm9sZE1hbmlmZXN0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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LEVBQTZCLENBRXhELENBRkQ7O0FBSUEsSUFBTVMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDekMsUUFBRCxFQUFXZ0MsYUFBWCxFQUE2QixDQUV0RCxDQUZEOztBQUlBLElBQU1VLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsQ0FBQzFDLFFBQUQsRUFBYztBQUN6QyxNQUFJZ0MsYUFBYSxHQUFHLEVBQXBCO0FBQ0FELGFBQVcsQ0FBQy9CLFFBQUQsRUFBV2dDLGFBQVgsQ0FBWDtBQUNBRSxlQUFhLENBQUNsQyxRQUFELEVBQVdnQyxhQUFYLENBQWI7QUFDQUcsaUJBQWUsQ0FBQ25DLFFBQUQsRUFBV2dDLGFBQVgsQ0FBZjtBQUNBSSx5QkFBdUIsQ0FBQ3BDLFFBQUQsRUFBV2dDLGFBQVgsQ0FBdkI7QUFDQUssNkJBQTJCLENBQUNyQyxRQUFELEVBQVdnQyxhQUFYLENBQTNCO0FBQ0FNLG1DQUFpQyxDQUFDdEMsUUFBRCxFQUFXZ0MsYUFBWCxDQUFqQztBQUNBTyxvQkFBa0IsQ0FBQ3ZDLFFBQUQsRUFBV2dDLGFBQVgsQ0FBbEI7QUFDQVEscUJBQW1CLENBQUN4QyxRQUFELEVBQVdnQyxhQUFYLENBQW5CO0FBQ0FTLG1CQUFpQixDQUFDekMsUUFBRCxFQUFXZ0MsYUFBWCxDQUFqQjtBQUNELENBWEQ7O0FBYWUsU0FBU1csUUFBVCxDQUFrQkMsV0FBbEIsRUFBK0I7QUFDNUNmLHdCQUFzQixDQUFDZSxXQUFELENBQXRCO0FBQ0FGLHNCQUFvQixDQUFDRSxXQUFELENBQXBCO0FBQ0EsU0FBTyxTQUFQO0FBQ0QiLCJmaWxlIjoiLi91dGlscy92YWxpZGF0ZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gUmVxdWlyZWQgZmllbGRzOlxuICAgbmFtZSBvciBzaG9ydF9uYW1lOiBzdHJpbmdcbiAgIGRlc2NyaXB0aW9uOiBzdHJpbmdcbiAgIGxhbmc6IHN0cmluZ1xuICAgdGhlbWVfY29sb3I6IHN0cmluZ1xuICAgb3JpZW50YXRpb246IHN0cmluZ1xuICAgc3RhcnRfdXJsOiBzdHJpbmdcbiAgIGljb25zOiBBcnJheSBvZiBPYmplY3RcbiAqL1xuXG4vKlxuIE9wdGlvbmFsOlxuICAgZGlyOiBzdHJpbmdcbiAgIHNjb3BlOiBzdHJpbmdcbiAgIGRpc3BsYXk6IHN0cmluZ1xuICAgYmFja2dyb3VuZF9jb2xvcjogc3RyaW5nXG4gICByZWxhdGVkX2FwcGxpY2F0aW9uczogQXJyYXkgb2YgT2JqZWN0XG4gICBwcmVmZXJfcmVsYXRlZF9hcHBsaWNhdGlvbnM6IGJvb2xlYW5cbiAgIGNhdGVnb3JpZXM6IEFycmF5IG9mIHN0cmluZ3NcbiAgIHNjcmVlbnNob3RzOiBBcnJheSBvZiBPYmplY3RcbiAgIHNob3J0Y3V0czogQXJyYXkgb2YgT2JqZWN0XG4gKi9cblxuLy8gdmFsaWRhdGUgcmVxdWlyZWQgZmllbGRzXG5jb25zdCB2YWxpZGF0ZU5hbWUgPSAobWFuaWZlc3QsIHJlcXVpcmVkRXJyb3JzKSA9PiB7XG4gIGlmICgnbmFtZScgaW4gbWFuaWZlc3QpIHtcbiAgICBpZih0eXBlb2YobWFuaWZlc3RbJ25hbWUnXSkgIT09ICdzdHJpbmcnKSB7XG4gICAgICByZXF1aXJlZEVycm9ycy5uYW1lID0gJ21hbmlmZXN0IG5hbWUgZmllbGQgdHlwZSBzaG91bGQgYmUgc3RyaW5nJztcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmVxdWlyZWRFcnJvcnMubmFtZSA9ICdtYW5pZmVzdCBuYW1lIGZpZWxkIGlzIHJlcXVpcmVkJztcbiAgfVxufVxuXG5jb25zdCB2YWxpZGF0ZURlc2NyaXB0aW9uID0gKG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycykgPT4ge1xuICBpZiAoJ2Rlc2NyaXB0aW9uJyBpbiBtYW5pZmVzdCkge1xuICAgIGlmKHR5cGVvZihtYW5pZmVzdFsnZGVzY3JpcHRpb24nXSkgIT09ICdzdHJpbmcnKSB7XG4gICAgICByZXF1aXJlZEVycm9ycy5kZXNjcmlwdGlvbiA9ICdtYW5pZmVzdCBkZXNjcmlwdGlvbiBmaWVsZCB0eXBlIHNob3VsZCBiZSBzdHJpbmcnO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXF1aXJlZEVycm9ycy5kZXNjcmlwdGlvbiA9ICdtYW5pZmVzdCBkZXNjcmlwdGlvbiBmaWVsZCBpcyByZXF1aXJlZCc7XG4gIH1cbn1cblxuY29uc3QgdmFsaWRhdGVMYW5nID0gKG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycykgPT4ge1xuICBpZignbGFuZycgaW4gbWFuaWZlc3QpIHtcbiAgICBjb25zdCBtYW5pZmVzdExhbmcgPSBtYW5pZmVzdFsnbGFuZyddO1xuICAgIGlmKHR5cGVvZihtYW5pZmVzdExhbmcpICE9PSAnc3RyaW5nJykge1xuICAgICAgcmVxdWlyZWRFcnJvcnMubGFuZyA9ICdtYW5pZmVzdCBsYW5nIGZpZWxkIHR5cGUgc2hvdWxkIGJlIHN0cmluZyEnO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZighL15cXHcqKC1cXHcqKSokLy50ZXN0KG1hbmlmZXN0TGFuZykpIHtcbiAgICAgICAgcmVxdWlyZWRFcnJvcnMubGFuZyA9ICdtYW5pZmVzdCBsYW5nIGZpZWxkIHR5cGUgc2hvdWxkIGJlIGNvcnJlY3QgZm9ybWF0ISc7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJlcXVpcmVkRXJyb3JzLmxhbmcgPSAnbWFuaWZlc3QgbGFuZyBmaWVsZCBpcyByZXF1aXJlZCEnXG4gIH1cbn1cblxuY29uc3QgdmFsaWRhdGVUaGVtZUNvbG9yID0gKG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycykgPT4ge1xuICBpZiAoJ3RoZW1lX2NvbG9yJyBpbiBtYW5pZmVzdCkge1xuICAgIGlmKHR5cGVvZihtYW5pZmVzdFsndGhlbWVfY29sb3InXSkgIT09ICdzdHJpbmcnKSB7XG4gICAgICByZXF1aXJlZEVycm9ycy50aGVtZV9jb2xvciA9ICdtYW5pZmVzdCB0aGVtZV9jb2xvciBmaWVsZCB0eXBlIHNob3VsZCBiZSBzdHJpbmcnO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXF1aXJlZEVycm9ycy50aGVtZV9jb2xvciA9ICdtYW5pZmVzdCB0aGVtZV9jb2xvciBmaWVsZCBpcyByZXF1aXJlZCc7XG4gIH1cbn1cblxuY29uc3QgdmFsaWRhdGVPcml0YXRpb24gPSAobWFuaWZlc3QsIHJlcXVpcmVkRXJyb3JzKSA9PiB7XG4gIGNvbnN0IEVOVU1fT1JJRU5UQVRJT04gPSBbXG4gICAgJ2FueScsXG4gICAgJ25hdHVyYWwnLFxuICAgICdsYW5kc2NhcGUnLFxuICAgICdsYW5kc2NhcGUtcHJpbWFyeScsXG4gICAgJ2xhbmRzY2FwZS1zZWNvbmRhcnknLFxuICAgICdwb3J0cmFpdCcsXG4gICAgJ3BvcnRyYWl0LXByaW1hcnknLFxuICAgICdwb3J0cmFpdC1zZWNvbmRhcnknXG4gIF07XG4gIGlmICgnb3JpZW50YXRpb24nIGluIG1hbmlmZXN0KSB7XG4gICAgaWYodHlwZW9mKG1hbmlmZXN0WydvcmllbnRhdGlvbiddKSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHJlcXVpcmVkRXJyb3JzLm9yaWVudGF0aW9uID0gJ21hbmlmZXN0IG9yaWVudGF0aW9uIGZpZWxkIHR5cGUgc2hvdWxkIGJlIHN0cmluZyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG9yaWVudGF0aW9uID0gbWFuaWZlc3RbJ29yaWVudGF0aW9uJ107XG4gICAgICBpZighRU5VTV9PUklFTlRBVElPTi5pbmNsdWRlcyhvcmllbnRhdGlvbikpIHtcbiAgICAgICAgcmVxdWlyZWRFcnJvcnMub3JpZW50YXRpb24gPSAnbWFuaWZlc3Qgb3JpZW50YXRpb24gZmllbGQgdmFsdWUgbm90IGNvcnJlY3QnO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXF1aXJlZEVycm9ycy5vcmllbnRhdGlvbiA9ICdtYW5pZmVzdCBvcmllbnRhdGlvbiBmaWVsZCBpcyByZXF1aXJlZCc7XG4gIH1cbn1cblxuY29uc3QgdmFsaWRhdGVTdGFydFVybCA9IChtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpID0+IHtcbiAgaWYgKCdzdGFydF91cmwnIGluIG1hbmlmZXN0KSB7XG4gICAgaWYodHlwZW9mKG1hbmlmZXN0WydzdGFydF91cmwnXSkgIT09ICdzdHJpbmcnKSB7XG4gICAgICByZXF1aXJlZEVycm9ycy5zdGFydF91cmwgPSAnbWFuaWZlc3Qgc3RhcnRfdXJsIGZpZWxkIHR5cGUgc2hvdWxkIGJlIHN0cmluZyc7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJlcXVpcmVkRXJyb3JzLnN0YXJ0X3VybCA9ICdtYW5pZmVzdCBzdGFydF91cmwgZmllbGQgaXMgcmVxdWlyZWQnO1xuICB9XG59XG5cbmNvbnN0IHZhbGlkYXRlSWNvbk9iaiA9IChpY29uT2JqKSA9PiB7XG4gIGxldCBlcnJvciA9IHt9O1xuICAvLyBpY29ucyBzcmMgdmFsaWRhdGVcbiAgaWYgKCdzcmMnIGluIGljb25PYmopIHtcbiAgICBpZih0eXBlb2YoaWNvbk9ialsnc3JjJ10pICE9PSAnc3RyaW5nJykge1xuICAgICAgZXJyb3Iuc3JjID0gJ21hbmlmZXN0IGljb25zIGZpZWxkIGljb24gdHlwZSBzaG91bGQgYmUgc3RyaW5nJztcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZXJyb3Iuc3JjID0gJ21hbmlmZXN0IGljb25zIGZpZWxkIGljb24gaXMgcmVxdWlyZWQnO1xuICB9XG4gIC8vIGljb25zIHNpemUgdmFsaWRhdGVcbiAgaWYoJ3NpemVzJyBpbiBpY29uT2JqKSB7XG4gICAgY29uc3Qgc2l6ZXMgPSBpY29uT2JqWydzaXplcyddO1xuICAgIGlmKHR5cGVvZihzaXplcykgIT09ICdzdHJpbmcnKSB7XG4gICAgICBlcnJvci5zaXplcyA9ICdtYW5pZmVzdCBpY29ucyBmaWVsZCBzaXplIHR5cGUgc2hvdWxkIGJlIHN0cmluZyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmKCEvXlxccypcXGQreFxcZCsoXFxzK1xcZCt4XFxkKykqXFxzKiQvLnRlc3Qoc2l6ZXMpKSB7XG4gICAgICAgIGVycm9yLnNpemVzID0gJ21hbmlmZXN0IGljb25zIGZpZWxkIHNpemVzIHNob3VsZCBiZSBjb3JyZWN0IGZvcm1hdCEnO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBlcnJvci5zaXplcyA9ICdtYW5pZmVzdCBpY29ucyBmaWVsZCBzaXplIGlzIHJlcXVpcmVkISdcbiAgfVxuICByZXR1cm4gZXJyb3I7XG59XG5cbmNvbnN0IHZhbGlkYXRlSWNvbnMgPSAobWFuaWZlc3QsIHJlcXVpcmVkRXJyb3JzKSA9PiB7XG4gIGlmKCdpY29ucycgaW4gbWFuaWZlc3QpIHtcbiAgICBjb25zdCBpY29ucyA9IG1hbmlmZXN0WydpY29ucyddO1xuICAgIGlmKCFBcnJheS5pc0FycmF5KGljb25zKSkge1xuICAgICAgcmVxdWlyZWRFcnJvcnMuaWNvbnMgPSAnbWFuaWZlc3QgaWNvbnMgZmllbGQgc2hvdWxkIGJlIEFycmF5JztcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGljb25FcnJvcnMgPSB7fTtcbiAgICAgIGljb25zLmZvckVhY2goKGljb24pID0+IHtcbiAgICAgICAgaWNvbkVycm9ycyA9IHZhbGlkYXRlSWNvbk9iaihpY29uKTtcbiAgICAgIH0pXG4gICAgICByZXF1aXJlZEVycm9ycy5pY29ucyA9IGljb25FcnJvcnM7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJlcXVpcmVkRXJyb3JzLmljb25zID0gJ21hbmlmZXN0IGljb25zIGZpZWxkIGlzIHJlcXVpcmVkJztcbiAgfVxufVxuXG5jb25zdCB2YWxpZGF0ZVJlcXVpcmVkRmllbGRzID0gKG1hbmlmZXN0LCBlcnJvcnMpID0+IHtcbiAgbGV0IHJlcXVpcmVkRXJyb3JzID0ge307XG4gIHZhbGlkYXRlTmFtZShtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpO1xuICB2YWxpZGF0ZURlc2NyaXB0aW9uKG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycyk7XG4gIHZhbGlkYXRlTGFuZyhtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpO1xuICB2YWxpZGF0ZVRoZW1lQ29sb3IobWFuaWZlc3QsIHJlcXVpcmVkRXJyb3JzKTtcbiAgdmFsaWRhdGVPcml0YXRpb24obWFuaWZlc3QsIHJlcXVpcmVkRXJyb3JzKTtcbiAgdmFsaWRhdGVTdGFydFVybChtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpO1xuICB2YWxpZGF0ZUljb25zKG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycyk7XG4gIHJldHVybiByZXF1aXJlZEVycm9ycztcbn1cblxuLy8gdmFsaWRhdGUgb3B0aW9uIGZpZWxkc1xuXG5jb25zdCB2YWxpZGF0ZURpciA9IChtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycykgPT4ge1xuICBjb25zdCBFTlVNX0RJUiA9IFtcbiAgICAncnRsJyxcbiAgICAnbHRyJyxcbiAgICAnYXV0bydcbiAgXTtcbiAgaWYgKCdkaXInIGluIG1hbmlmZXN0KSB7XG4gICAgaWYodHlwZW9mKG1hbmlmZXN0WydkaXInXSkgIT09ICdzdHJpbmcnKSB7XG4gICAgICBvcHRpb25zRXJyb3JzLm9yaWVudGF0aW9uID0gJ21hbmlmZXN0IG9yaWVudGF0aW9uIGZpZWxkIHR5cGUgc2hvdWxkIGJlIHN0cmluZyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG9yaWVudGF0aW9uID0gbWFuaWZlc3RbJ29yaWVudGF0aW9uJ107XG4gICAgICBpZighRU5VTV9PUklFTlRBVElPTi5pbmNsdWRlcyhvcmllbnRhdGlvbikpIHtcbiAgICAgICAgb3B0aW9uc0Vycm9ycy5vcmllbnRhdGlvbiA9ICdtYW5pZmVzdCBvcmllbnRhdGlvbiBmaWVsZCB2YWx1ZSBub3QgY29ycmVjdCc7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIG9wdGlvbnNFcnJvcnMub3JpZW50YXRpb24gPSAnbWFuaWZlc3Qgb3JpZW50YXRpb24gZmllbGQgaXMgcmVxdWlyZWQnO1xuICB9XG59XG5cbmNvbnN0IHZhbGlkYXRlU2NvcGUgPSAobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpID0+IHtcblxufVxuXG5jb25zdCB2YWxpZGF0ZURpc3BsYXkgPSAobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpID0+IHtcblxufVxuXG5jb25zdCB2YWxpZGF0ZUJhY2tncm91bmRDb2xvciA9IChtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycykgPT4ge1xuXG59XG5cbmNvbnN0IHZhbGlkYXRlUmVsYXRlZEFwcGxpY2F0aW9ucyA9IChtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycykgPT4ge1xuXG59XG5cbmNvbnN0IHZhbGlkYXRlUHJlZmVyUmVsYXRlZEFwcGxpY2F0aW9ucyA9IChtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycykgPT4ge1xuXG59XG5cbmNvbnN0IHZhbGlkYXRlQ2F0ZWdvcmllcyA9IChtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycykgPT4ge1xuXG59XG5cbmNvbnN0IHZhbGlkYXRlU2NyZWVuc2hvdHMgPSAobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpID0+IHtcblxufVxuXG5jb25zdCB2YWxpZGF0ZVNob3J0Y3V0cyA9IChtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycykgPT4ge1xuXG59XG5cbmNvbnN0IHZhbGlkYXRlT3B0aW9uRmllbGRzID0gKG1hbmlmZXN0KSA9PiB7XG4gIGxldCBvcHRpb25zRXJyb3JzID0ge307XG4gIHZhbGlkYXRlRGlyKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKTtcbiAgdmFsaWRhdGVTY29wZShtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycyk7XG4gIHZhbGlkYXRlRGlzcGxheShtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycyk7XG4gIHZhbGlkYXRlQmFja2dyb3VuZENvbG9yKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKTtcbiAgdmFsaWRhdGVSZWxhdGVkQXBwbGljYXRpb25zKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKTtcbiAgdmFsaWRhdGVQcmVmZXJSZWxhdGVkQXBwbGljYXRpb25zKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKTtcbiAgdmFsaWRhdGVDYXRlZ29yaWVzKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKTtcbiAgdmFsaWRhdGVTY3JlZW5zaG90cyhtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycyk7XG4gIHZhbGlkYXRlU2hvcnRjdXRzKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmFsaWRhdGUob2xkTWFuaWZlc3QpIHtcbiAgdmFsaWRhdGVSZXF1aXJlZEZpZWxkcyhvbGRNYW5pZmVzdCk7XG4gIHZhbGlkYXRlT3B0aW9uRmllbGRzKG9sZE1hbmlmZXN0KTtcbiAgcmV0dXJuICdzdWNjZXNzJztcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/validate.js\n");

/***/ })

})