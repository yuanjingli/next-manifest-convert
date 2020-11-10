webpackHotUpdate_N_E("pages/index",{

/***/ "./utils/validate.js":
/*!***************************!*\
  !*** ./utils/validate.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return validate; });\n/*\n Required fields:\n   name or short_name: string\n   description: string\n   lang: string\n   theme_color: string\n   orientation: string\n   start_url: string\n   icons: Array of Object\n */\n\n/*\n Optional:\n   dir: string\n   scope: string\n   display: string\n   background_color: string\n   related_applications: Array of Object\n   prefer_related_applications: boolean\n   categories: Array of strings\n   screenshots: Array of Object\n   shortcuts: Array of Object\n */\n// validate required fields\nvar validateName = function validateName(manifest, requiredErrors) {\n  if ('name' in manifest) {\n    if (typeof manifest['name'] !== 'string') {\n      requiredErrors.name = 'manifest name field type should be string';\n    }\n  } else {\n    requiredErrors.name = 'manifest name field is required';\n  }\n};\n\nvar validateDescription = function validateDescription(manifest, requiredErrors) {\n  if ('description' in manifest) {\n    if (typeof manifest['description'] !== 'string') {\n      requiredErrors.description = 'manifest description field type should be string';\n    }\n  } else {\n    requiredErrors.description = 'manifest description field is required';\n  }\n};\n\nvar validateLang = function validateLang(manifest, requiredErrors) {\n  if ('lang' in manifest) {\n    var manifestLang = manifest['lang'];\n\n    if (typeof manifestLang !== 'string') {\n      requiredErrors.lang = 'manifest lang field type should be string!';\n    } else {\n      if (!/^\\w*(-\\w*)*$/.test(manifestLang)) {\n        requiredErrors.lang = 'manifest lang field type should be correct format!';\n      }\n    }\n  } else {\n    requiredErrors.lang = 'manifest lang field is required!';\n  }\n};\n\nvar validateThemeColor = function validateThemeColor(manifest, requiredErrors) {\n  if ('theme_color' in manifest) {\n    if (typeof manifest['theme_color'] !== 'string') {\n      requiredErrors.theme_color = 'manifest theme_color field type should be string';\n    }\n  } else {\n    requiredErrors.theme_color = 'manifest theme_color field is required';\n  }\n};\n\nvar validateOritation = function validateOritation(manifest, requiredErrors) {\n  var ENUM_ORIENTATION = ['any', 'natural', 'landscape', 'landscape-primary', 'landscape-secondary', 'portrait', 'portrait-primary', 'portrait-secondary'];\n\n  if ('orientation' in manifest) {\n    if (typeof manifest['orientation'] !== 'string') {\n      requiredErrors.orientation = 'manifest orientation field type should be string';\n    } else {\n      var orientation = manifest['orientation'];\n\n      if (!ENUM_ORIENTATION.includes(orientation)) {\n        requiredErrors.orientation = 'manifest orientation field value not correct';\n      }\n    }\n  } else {\n    requiredErrors.orientation = 'manifest orientation field is required';\n  }\n};\n\nvar validateStartUrl = function validateStartUrl(manifest, requiredErrors) {\n  if ('start_url' in manifest) {\n    if (typeof manifest['start_url'] !== 'string') {\n      requiredErrors.start_url = 'manifest start_url field type should be string';\n    }\n  } else {\n    requiredErrors.start_url = 'manifest start_url field is required';\n  }\n};\n\nvar validateIconObj = function validateIconObj(iconObj) {\n  var error = {}; // icons src validate\n\n  if ('src' in iconObj) {\n    if (typeof iconObj['src'] !== 'string') {\n      error.src = 'manifest icons field icon type should be string';\n    }\n  } else {\n    error.src = 'manifest icons field icon is required';\n  }\n};\n\nvar validateIcons = function validateIcons(manifest, requiredErrors) {\n  if ('icons' in manifest) {\n    var icons = manifest['icons'];\n\n    if (!Array.isArray(icons)) {\n      requiredErrors.icons = 'manifest icons field should be Array';\n    } else {\n      icons.forEach(function (icon) {});\n    }\n  } else {\n    requiredErrors.icons = 'manifest icons field is required';\n  }\n};\n\nvar validateRequiredFields = function validateRequiredFields(manifest, errors) {\n  var requiredErrors = {};\n  validateName(manifest, requiredErrors);\n  validateDescription(manifest, requiredErrors);\n  validateLang(manifest, requiredErrors);\n  validateThemeColor(manifest, requiredErrors);\n  validateOritation(manifest, requiredErrors);\n  validateStartUrl(manifest, requiredErrors);\n  validateIcons(manifest, requiredErrors);\n  return requiredErrors;\n}; // validate option fields\n\n\nvar validateDir = function validateDir(manifest, optionsErrors) {};\n\nvar validateScope = function validateScope(manifest, optionsErrors) {};\n\nvar validateDisplay = function validateDisplay(manifest, optionsErrors) {};\n\nvar validateBackgroundColor = function validateBackgroundColor(manifest, optionsErrors) {};\n\nvar validateRelatedApplications = function validateRelatedApplications(manifest, optionsErrors) {};\n\nvar validatePreferRelatedApplications = function validatePreferRelatedApplications(manifest, optionsErrors) {};\n\nvar validateCategories = function validateCategories(manifest, optionsErrors) {};\n\nvar validateScreenshots = function validateScreenshots(manifest, optionsErrors) {};\n\nvar validateShortcuts = function validateShortcuts(manifest, optionsErrors) {};\n\nvar validateOptionFields = function validateOptionFields(manifest) {\n  var optionsErrors = {};\n  validateDir(manifest, optionsErrors);\n  validateScope(manifest, optionsErrors);\n  validateDisplay(manifest, optionsErrors);\n  validateBackgroundColor(manifest, optionsErrors);\n  validateRelatedApplications(manifest, optionsErrors);\n  validatePreferRelatedApplications(manifest, optionsErrors);\n  validateCategories(manifest, optionsErrors);\n  validateScreenshots(manifest, optionsErrors);\n  validateShortcuts(manifest, optionsErrors);\n};\n\nfunction validate(oldManifest) {\n  validateRequiredFields(oldManifest);\n  validateOptionFields(oldManifest);\n  return 'success';\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvdmFsaWRhdGUuanM/ZjdkZiJdLCJuYW1lcyI6WyJ2YWxpZGF0ZU5hbWUiLCJtYW5pZmVzdCIsInJlcXVpcmVkRXJyb3JzIiwibmFtZSIsInZhbGlkYXRlRGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvbiIsInZhbGlkYXRlTGFuZyIsIm1hbmlmZXN0TGFuZyIsImxhbmciLCJ0ZXN0IiwidmFsaWRhdGVUaGVtZUNvbG9yIiwidGhlbWVfY29sb3IiLCJ2YWxpZGF0ZU9yaXRhdGlvbiIsIkVOVU1fT1JJRU5UQVRJT04iLCJvcmllbnRhdGlvbiIsImluY2x1ZGVzIiwidmFsaWRhdGVTdGFydFVybCIsInN0YXJ0X3VybCIsInZhbGlkYXRlSWNvbk9iaiIsImljb25PYmoiLCJlcnJvciIsInNyYyIsInZhbGlkYXRlSWNvbnMiLCJpY29ucyIsIkFycmF5IiwiaXNBcnJheSIsImZvckVhY2giLCJpY29uIiwidmFsaWRhdGVSZXF1aXJlZEZpZWxkcyIsImVycm9ycyIsInZhbGlkYXRlRGlyIiwib3B0aW9uc0Vycm9ycyIsInZhbGlkYXRlU2NvcGUiLCJ2YWxpZGF0ZURpc3BsYXkiLCJ2YWxpZGF0ZUJhY2tncm91bmRDb2xvciIsInZhbGlkYXRlUmVsYXRlZEFwcGxpY2F0aW9ucyIsInZhbGlkYXRlUHJlZmVyUmVsYXRlZEFwcGxpY2F0aW9ucyIsInZhbGlkYXRlQ2F0ZWdvcmllcyIsInZhbGlkYXRlU2NyZWVuc2hvdHMiLCJ2YWxpZGF0ZVNob3J0Y3V0cyIsInZhbGlkYXRlT3B0aW9uRmllbGRzIiwidmFsaWRhdGUiLCJvbGRNYW5pZmVzdCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EsSUFBTUEsWUFBWSxHQUFHLFNB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RUFBVzhCLGFBQVgsRUFBNkIsQ0FFeEQsQ0FGRDs7QUFJQSxJQUFNUSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUN0QyxRQUFELEVBQVc4QixhQUFYLEVBQTZCLENBRXRELENBRkQ7O0FBSUEsSUFBTVMsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixDQUFDdkMsUUFBRCxFQUFjO0FBQ3pDLE1BQUk4QixhQUFhLEdBQUcsRUFBcEI7QUFDQUQsYUFBVyxDQUFDN0IsUUFBRCxFQUFXOEIsYUFBWCxDQUFYO0FBQ0FDLGVBQWEsQ0FBQy9CLFFBQUQsRUFBVzhCLGFBQVgsQ0FBYjtBQUNBRSxpQkFBZSxDQUFDaEMsUUFBRCxFQUFXOEIsYUFBWCxDQUFmO0FBQ0FHLHlCQUF1QixDQUFDakMsUUFBRCxFQUFXOEIsYUFBWCxDQUF2QjtBQUNBSSw2QkFBMkIsQ0FBQ2xDLFFBQUQsRUFBVzhCLGFBQVgsQ0FBM0I7QUFDQUssbUNBQWlDLENBQUNuQyxRQUFELEVBQVc4QixhQUFYLENBQWpDO0FBQ0FNLG9CQUFrQixDQUFDcEMsUUFBRCxFQUFXOEIsYUFBWCxDQUFsQjtBQUNBTyxxQkFBbUIsQ0FBQ3JDLFFBQUQsRUFBVzhCLGFBQVgsQ0FBbkI7QUFDQVEsbUJBQWlCLENBQUN0QyxRQUFELEVBQVc4QixhQUFYLENBQWpCO0FBQ0QsQ0FYRDs7QUFhZSxTQUFTVSxRQUFULENBQWtCQyxXQUFsQixFQUErQjtBQUM1Q2Qsd0JBQXNCLENBQUNjLFdBQUQsQ0FBdEI7QUFDQUYsc0JBQW9CLENBQUNFLFdBQUQsQ0FBcEI7QUFDQSxTQUFPLFNBQVA7QUFDRCIsImZpbGUiOiIuL3V0aWxzL3ZhbGlkYXRlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiBSZXF1aXJlZCBmaWVsZHM6XG4gICBuYW1lIG9yIHNob3J0X25hbWU6IHN0cmluZ1xuICAgZGVzY3JpcHRpb246IHN0cmluZ1xuICAgbGFuZzogc3RyaW5nXG4gICB0aGVtZV9jb2xvcjogc3RyaW5nXG4gICBvcmllbnRhdGlvbjogc3RyaW5nXG4gICBzdGFydF91cmw6IHN0cmluZ1xuICAgaWNvbnM6IEFycmF5IG9mIE9iamVjdFxuICovXG5cbi8qXG4gT3B0aW9uYWw6XG4gICBkaXI6IHN0cmluZ1xuICAgc2NvcGU6IHN0cmluZ1xuICAgZGlzcGxheTogc3RyaW5nXG4gICBiYWNrZ3JvdW5kX2NvbG9yOiBzdHJpbmdcbiAgIHJlbGF0ZWRfYXBwbGljYXRpb25zOiBBcnJheSBvZiBPYmplY3RcbiAgIHByZWZlcl9yZWxhdGVkX2FwcGxpY2F0aW9uczogYm9vbGVhblxuICAgY2F0ZWdvcmllczogQXJyYXkgb2Ygc3RyaW5nc1xuICAgc2NyZWVuc2hvdHM6IEFycmF5IG9mIE9iamVjdFxuICAgc2hvcnRjdXRzOiBBcnJheSBvZiBPYmplY3RcbiAqL1xuXG4vLyB2YWxpZGF0ZSByZXF1aXJlZCBmaWVsZHNcbmNvbnN0IHZhbGlkYXRlTmFtZSA9IChtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpID0+IHtcbiAgaWYgKCduYW1lJyBpbiBtYW5pZmVzdCkge1xuICAgIGlmKHR5cGVvZihtYW5pZmVzdFsnbmFtZSddKSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHJlcXVpcmVkRXJyb3JzLm5hbWUgPSAnbWFuaWZlc3QgbmFtZSBmaWVsZCB0eXBlIHNob3VsZCBiZSBzdHJpbmcnO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXF1aXJlZEVycm9ycy5uYW1lID0gJ21hbmlmZXN0IG5hbWUgZmllbGQgaXMgcmVxdWlyZWQnO1xuICB9XG59XG5cbmNvbnN0IHZhbGlkYXRlRGVzY3JpcHRpb24gPSAobWFuaWZlc3QsIHJlcXVpcmVkRXJyb3JzKSA9PiB7XG4gIGlmICgnZGVzY3JpcHRpb24nIGluIG1hbmlmZXN0KSB7XG4gICAgaWYodHlwZW9mKG1hbmlmZXN0WydkZXNjcmlwdGlvbiddKSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHJlcXVpcmVkRXJyb3JzLmRlc2NyaXB0aW9uID0gJ21hbmlmZXN0IGRlc2NyaXB0aW9uIGZpZWxkIHR5cGUgc2hvdWxkIGJlIHN0cmluZyc7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJlcXVpcmVkRXJyb3JzLmRlc2NyaXB0aW9uID0gJ21hbmlmZXN0IGRlc2NyaXB0aW9uIGZpZWxkIGlzIHJlcXVpcmVkJztcbiAgfVxufVxuXG5jb25zdCB2YWxpZGF0ZUxhbmcgPSAobWFuaWZlc3QsIHJlcXVpcmVkRXJyb3JzKSA9PiB7XG4gIGlmKCdsYW5nJyBpbiBtYW5pZmVzdCkge1xuICAgIGNvbnN0IG1hbmlmZXN0TGFuZyA9IG1hbmlmZXN0WydsYW5nJ107XG4gICAgaWYodHlwZW9mKG1hbmlmZXN0TGFuZykgIT09ICdzdHJpbmcnKSB7XG4gICAgICByZXF1aXJlZEVycm9ycy5sYW5nID0gJ21hbmlmZXN0IGxhbmcgZmllbGQgdHlwZSBzaG91bGQgYmUgc3RyaW5nISc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmKCEvXlxcdyooLVxcdyopKiQvLnRlc3QobWFuaWZlc3RMYW5nKSkge1xuICAgICAgICByZXF1aXJlZEVycm9ycy5sYW5nID0gJ21hbmlmZXN0IGxhbmcgZmllbGQgdHlwZSBzaG91bGQgYmUgY29ycmVjdCBmb3JtYXQhJztcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmVxdWlyZWRFcnJvcnMubGFuZyA9ICdtYW5pZmVzdCBsYW5nIGZpZWxkIGlzIHJlcXVpcmVkISdcbiAgfVxufVxuXG5jb25zdCB2YWxpZGF0ZVRoZW1lQ29sb3IgPSAobWFuaWZlc3QsIHJlcXVpcmVkRXJyb3JzKSA9PiB7XG4gIGlmICgndGhlbWVfY29sb3InIGluIG1hbmlmZXN0KSB7XG4gICAgaWYodHlwZW9mKG1hbmlmZXN0Wyd0aGVtZV9jb2xvciddKSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHJlcXVpcmVkRXJyb3JzLnRoZW1lX2NvbG9yID0gJ21hbmlmZXN0IHRoZW1lX2NvbG9yIGZpZWxkIHR5cGUgc2hvdWxkIGJlIHN0cmluZyc7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJlcXVpcmVkRXJyb3JzLnRoZW1lX2NvbG9yID0gJ21hbmlmZXN0IHRoZW1lX2NvbG9yIGZpZWxkIGlzIHJlcXVpcmVkJztcbiAgfVxufVxuXG5jb25zdCB2YWxpZGF0ZU9yaXRhdGlvbiA9IChtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpID0+IHtcbiAgY29uc3QgRU5VTV9PUklFTlRBVElPTiA9IFtcbiAgICAnYW55JyxcbiAgICAnbmF0dXJhbCcsXG4gICAgJ2xhbmRzY2FwZScsXG4gICAgJ2xhbmRzY2FwZS1wcmltYXJ5JyxcbiAgICAnbGFuZHNjYXBlLXNlY29uZGFyeScsXG4gICAgJ3BvcnRyYWl0JyxcbiAgICAncG9ydHJhaXQtcHJpbWFyeScsXG4gICAgJ3BvcnRyYWl0LXNlY29uZGFyeSdcbiAgXTtcbiAgaWYgKCdvcmllbnRhdGlvbicgaW4gbWFuaWZlc3QpIHtcbiAgICBpZih0eXBlb2YobWFuaWZlc3RbJ29yaWVudGF0aW9uJ10pICE9PSAnc3RyaW5nJykge1xuICAgICAgcmVxdWlyZWRFcnJvcnMub3JpZW50YXRpb24gPSAnbWFuaWZlc3Qgb3JpZW50YXRpb24gZmllbGQgdHlwZSBzaG91bGQgYmUgc3RyaW5nJztcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgb3JpZW50YXRpb24gPSBtYW5pZmVzdFsnb3JpZW50YXRpb24nXTtcbiAgICAgIGlmKCFFTlVNX09SSUVOVEFUSU9OLmluY2x1ZGVzKG9yaWVudGF0aW9uKSkge1xuICAgICAgICByZXF1aXJlZEVycm9ycy5vcmllbnRhdGlvbiA9ICdtYW5pZmVzdCBvcmllbnRhdGlvbiBmaWVsZCB2YWx1ZSBub3QgY29ycmVjdCc7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJlcXVpcmVkRXJyb3JzLm9yaWVudGF0aW9uID0gJ21hbmlmZXN0IG9yaWVudGF0aW9uIGZpZWxkIGlzIHJlcXVpcmVkJztcbiAgfVxufVxuXG5jb25zdCB2YWxpZGF0ZVN0YXJ0VXJsID0gKG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycykgPT4ge1xuICBpZiAoJ3N0YXJ0X3VybCcgaW4gbWFuaWZlc3QpIHtcbiAgICBpZih0eXBlb2YobWFuaWZlc3RbJ3N0YXJ0X3VybCddKSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHJlcXVpcmVkRXJyb3JzLnN0YXJ0X3VybCA9ICdtYW5pZmVzdCBzdGFydF91cmwgZmllbGQgdHlwZSBzaG91bGQgYmUgc3RyaW5nJztcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmVxdWlyZWRFcnJvcnMuc3RhcnRfdXJsID0gJ21hbmlmZXN0IHN0YXJ0X3VybCBmaWVsZCBpcyByZXF1aXJlZCc7XG4gIH1cbn1cblxuY29uc3QgdmFsaWRhdGVJY29uT2JqID0gKGljb25PYmopID0+IHtcbiAgbGV0IGVycm9yID0ge307XG4gIC8vIGljb25zIHNyYyB2YWxpZGF0ZVxuICBpZiAoJ3NyYycgaW4gaWNvbk9iaikge1xuICAgIGlmKHR5cGVvZihpY29uT2JqWydzcmMnXSkgIT09ICdzdHJpbmcnKSB7XG4gICAgICBlcnJvci5zcmMgPSAnbWFuaWZlc3QgaWNvbnMgZmllbGQgaWNvbiB0eXBlIHNob3VsZCBiZSBzdHJpbmcnO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBlcnJvci5zcmMgPSAnbWFuaWZlc3QgaWNvbnMgZmllbGQgaWNvbiBpcyByZXF1aXJlZCc7XG4gIH1cbn1cblxuY29uc3QgdmFsaWRhdGVJY29ucyA9IChtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpID0+IHtcbiAgaWYoJ2ljb25zJyBpbiBtYW5pZmVzdCkge1xuICAgIGNvbnN0IGljb25zID0gbWFuaWZlc3RbJ2ljb25zJ107XG4gICAgaWYoIUFycmF5LmlzQXJyYXkoaWNvbnMpKSB7XG4gICAgICByZXF1aXJlZEVycm9ycy5pY29ucyA9ICdtYW5pZmVzdCBpY29ucyBmaWVsZCBzaG91bGQgYmUgQXJyYXknO1xuICAgIH0gZWxzZSB7XG4gICAgICBpY29ucy5mb3JFYWNoKChpY29uKSA9PiB7XG5cbiAgICAgIH0pXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJlcXVpcmVkRXJyb3JzLmljb25zID0gJ21hbmlmZXN0IGljb25zIGZpZWxkIGlzIHJlcXVpcmVkJztcbiAgfVxufVxuXG5jb25zdCB2YWxpZGF0ZVJlcXVpcmVkRmllbGRzID0gKG1hbmlmZXN0LCBlcnJvcnMpID0+IHtcbiAgbGV0IHJlcXVpcmVkRXJyb3JzID0ge307XG4gIHZhbGlkYXRlTmFtZShtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpO1xuICB2YWxpZGF0ZURlc2NyaXB0aW9uKG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycyk7XG4gIHZhbGlkYXRlTGFuZyhtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpO1xuICB2YWxpZGF0ZVRoZW1lQ29sb3IobWFuaWZlc3QsIHJlcXVpcmVkRXJyb3JzKTtcbiAgdmFsaWRhdGVPcml0YXRpb24obWFuaWZlc3QsIHJlcXVpcmVkRXJyb3JzKTtcbiAgdmFsaWRhdGVTdGFydFVybChtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpO1xuICB2YWxpZGF0ZUljb25zKG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycyk7XG4gIHJldHVybiByZXF1aXJlZEVycm9ycztcbn1cblxuLy8gdmFsaWRhdGUgb3B0aW9uIGZpZWxkc1xuXG5jb25zdCB2YWxpZGF0ZURpciA9IChtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycykgPT4ge1xuXG59XG5cbmNvbnN0IHZhbGlkYXRlU2NvcGUgPSAobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpID0+IHtcblxufVxuXG5jb25zdCB2YWxpZGF0ZURpc3BsYXkgPSAobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpID0+IHtcblxufVxuXG5jb25zdCB2YWxpZGF0ZUJhY2tncm91bmRDb2xvciA9IChtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycykgPT4ge1xuXG59XG5cbmNvbnN0IHZhbGlkYXRlUmVsYXRlZEFwcGxpY2F0aW9ucyA9IChtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycykgPT4ge1xuXG59XG5cbmNvbnN0IHZhbGlkYXRlUHJlZmVyUmVsYXRlZEFwcGxpY2F0aW9ucyA9IChtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycykgPT4ge1xuXG59XG5cbmNvbnN0IHZhbGlkYXRlQ2F0ZWdvcmllcyA9IChtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycykgPT4ge1xuXG59XG5cbmNvbnN0IHZhbGlkYXRlU2NyZWVuc2hvdHMgPSAobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpID0+IHtcblxufVxuXG5jb25zdCB2YWxpZGF0ZVNob3J0Y3V0cyA9IChtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycykgPT4ge1xuXG59XG5cbmNvbnN0IHZhbGlkYXRlT3B0aW9uRmllbGRzID0gKG1hbmlmZXN0KSA9PiB7XG4gIGxldCBvcHRpb25zRXJyb3JzID0ge307XG4gIHZhbGlkYXRlRGlyKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKTtcbiAgdmFsaWRhdGVTY29wZShtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycyk7XG4gIHZhbGlkYXRlRGlzcGxheShtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycyk7XG4gIHZhbGlkYXRlQmFja2dyb3VuZENvbG9yKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKTtcbiAgdmFsaWRhdGVSZWxhdGVkQXBwbGljYXRpb25zKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKTtcbiAgdmFsaWRhdGVQcmVmZXJSZWxhdGVkQXBwbGljYXRpb25zKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKTtcbiAgdmFsaWRhdGVDYXRlZ29yaWVzKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKTtcbiAgdmFsaWRhdGVTY3JlZW5zaG90cyhtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycyk7XG4gIHZhbGlkYXRlU2hvcnRjdXRzKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmFsaWRhdGUob2xkTWFuaWZlc3QpIHtcbiAgdmFsaWRhdGVSZXF1aXJlZEZpZWxkcyhvbGRNYW5pZmVzdCk7XG4gIHZhbGlkYXRlT3B0aW9uRmllbGRzKG9sZE1hbmlmZXN0KTtcbiAgcmV0dXJuICdzdWNjZXNzJztcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/validate.js\n");

/***/ })

})