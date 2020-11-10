webpackHotUpdate_N_E("pages/index",{

/***/ "./utils/validate.js":
/*!***************************!*\
  !*** ./utils/validate.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return validate; });\n/*\n Required fields:\n   name or short_name: string\n   description: string\n   lang: string\n   theme_color: string\n   orientation: string\n   start_url: string\n   icons: Array of Object\n */\n\n/*\n Optional:\n   dir: string\n   scope: string\n   display: string\n   background_color: string\n   related_applications: Array of Object\n   prefer_related_applications: boolean\n   categories: Array of strings\n   screenshots: Array of Object\n   shortcuts: Array of Object\n */\n// validate required fields\nvar validateName = function validateName(manifest, requiredErrors) {\n  if ('name' in manifest) {\n    if (typeof manifest['name'] !== 'string') {\n      requiredErrors.name = 'manifest name field type should be string';\n    }\n  } else {\n    requiredErrors.name = 'manifest name field is required';\n  }\n};\n\nvar validateDescription = function validateDescription(manifest, requiredErrors) {\n  if ('description' in manifest) {\n    if (typeof manifest['description'] !== 'string') {\n      requiredErrors.description = 'manifest description field type should be string';\n    }\n  } else {\n    requiredErrors.description = 'manifest description field is required';\n  }\n};\n\nvar validateLang = function validateLang(manifest, requiredErrors) {\n  if ('lang' in manifest) {\n    var manifestLang = manifest['lang'];\n\n    if (typeof manifestLang !== 'string') {\n      requiredErrors.lang = 'manifest lang field type should be string!';\n    } else {\n      if (!/^\\w*(-\\w*)*$/.test(manifestLang)) {\n        requiredErrors.lang = 'manifest lang field type should be correct format!';\n      }\n    }\n  } else {\n    requiredErrors.lang = 'manifest lang field is required!';\n  }\n};\n\nvar validateThemeColor = function validateThemeColor(manifest, requiredErrors) {\n  if ('theme_color' in manifest) {\n    if (typeof manifest['theme_color'] !== 'string') {\n      requiredErrors.theme_color = 'manifest theme_color field type should be string';\n    }\n  } else {\n    requiredErrors.theme_color = 'manifest theme_color field is required';\n  }\n};\n\nvar validateOritation = function validateOritation(manifest, requiredErrors) {\n  var ENUM_ORIENTATION = ['any', 'natural', 'landscape', 'landscape-primary', 'landscape-secondary', 'portrait', 'portrait-primary', 'portrait-secondary'];\n\n  if ('orientation' in manifest) {\n    if (typeof manifest['orientation'] !== 'string') {\n      requiredErrors.orientation = 'manifest orientation field type should be string';\n    } else {\n      var orientation = manifest['orientation'];\n\n      if (!ENUM_ORIENTATION.includes(orientation)) {\n        requiredErrors.orientation = 'manifest orientation field value not correct';\n      }\n    }\n  } else {\n    requiredErrors.orientation = 'manifest orientation field is required';\n  }\n};\n\nvar validateStartUrl = function validateStartUrl(manifest, requiredErrors) {\n  if ('start_url' in manifest) {\n    if (typeof manifest['start_url'] !== 'string') {\n      requiredErrors.start_url = 'manifest start_url field type should be string';\n    }\n  } else {\n    requiredErrors.start_url = 'manifest start_url field is required';\n  }\n};\n\nvar validateIconObj = function validateIconObj(iconObj) {\n  if ('src' in iconObj) {}\n};\n\nvar validateIcons = function validateIcons(manifest, requiredErrors) {\n  if ('icons' in manifest) {\n    var icons = manifest['icons'];\n\n    if (!Array.isArray(icons)) {\n      requiredErrors.icons = 'manifest icons field should be Array';\n    } else {\n      icons.forEach(function (icon) {});\n    }\n  } else {\n    requiredErrors.icons = 'manifest icons field is required';\n  }\n};\n\nvar validateRequiredFields = function validateRequiredFields(manifest, errors) {\n  var requiredErrors = {};\n  validateName(manifest, requiredErrors);\n  validateDescription(manifest, requiredErrors);\n  validateLang(manifest, requiredErrors);\n  validateThemeColor(manifest, requiredErrors);\n  validateOritation(manifest, requiredErrors);\n  validateStartUrl(manifest, requiredErrors);\n  validateIcons(manifest, requiredErrors);\n  return requiredErrors;\n}; // validate option fields\n\n\nvar validateDir = function validateDir(manifest, optionsErrors) {};\n\nvar validateScope = function validateScope(manifest, optionsErrors) {};\n\nvar validateDisplay = function validateDisplay(manifest, optionsErrors) {};\n\nvar validateBackgroundColor = function validateBackgroundColor(manifest, optionsErrors) {};\n\nvar validateRelatedApplications = function validateRelatedApplications(manifest, optionsErrors) {};\n\nvar validatePreferRelatedApplications = function validatePreferRelatedApplications(manifest, optionsErrors) {};\n\nvar validateCategories = function validateCategories(manifest, optionsErrors) {};\n\nvar validateScreenshots = function validateScreenshots(manifest, optionsErrors) {};\n\nvar validateShortcuts = function validateShortcuts(manifest, optionsErrors) {};\n\nvar validateOptionFields = function validateOptionFields(manifest) {\n  var optionsErrors = {};\n  validateDir(manifest, optionsErrors);\n  validateScope(manifest, optionsErrors);\n  validateDisplay(manifest, optionsErrors);\n  validateBackgroundColor(manifest, optionsErrors);\n  validateRelatedApplications(manifest, optionsErrors);\n  validatePreferRelatedApplications(manifest, optionsErrors);\n  validateCategories(manifest, optionsErrors);\n  validateScreenshots(manifest, optionsErrors);\n  validateShortcuts(manifest, optionsErrors);\n};\n\nfunction validate(oldManifest) {\n  validateRequiredFields(oldManifest);\n  validateOptionFields(oldManifest);\n  return 'success';\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvdmFsaWRhdGUuanM/ZjdkZiJdLCJuYW1lcyI6WyJ2YWxpZGF0ZU5hbWUiLCJtYW5pZmVzdCIsInJlcXVpcmVkRXJyb3JzIiwibmFtZSIsInZhbGlkYXRlRGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvbiIsInZhbGlkYXRlTGFuZyIsIm1hbmlmZXN0TGFuZyIsImxhbmciLCJ0ZXN0IiwidmFsaWRhdGVUaGVtZUNvbG9yIiwidGhlbWVfY29sb3IiLCJ2YWxpZGF0ZU9yaXRhdGlvbiIsIkVOVU1fT1JJRU5UQVRJT04iLCJvcmllbnRhdGlvbiIsImluY2x1ZGVzIiwidmFsaWRhdGVTdGFydFVybCIsInN0YXJ0X3VybCIsInZhbGlkYXRlSWNvbk9iaiIsImljb25PYmoiLCJ2YWxpZGF0ZUljb25zIiwiaWNvbnMiLCJBcnJheSIsImlzQXJyYXkiLCJmb3JFYWNoIiwiaWNvbiIsInZhbGlkYXRlUmVxdWlyZWRGaWVsZHMiLCJlcnJvcnMiLCJ2YWxpZGF0ZURpciIsIm9wdGlvbnNFcnJvcnMiLCJ2YWxpZGF0ZVNjb3BlIiwidmFsaWRhdGVEaXNwbGF5IiwidmFsaWRhdGVCYWNrZ3JvdW5kQ29sb3IiLCJ2YWxpZGF0ZVJlbGF0ZWRBcHBsaWNhdGlvbnMiLCJ2YWxpZGF0ZVByZWZlclJlbGF0ZWRBcHBsaWNhdGlvbnMiLCJ2YWxpZGF0ZUNhdGVnb3JpZXMiLCJ2YWxpZGF0ZVNjcmVlbnNob3RzIiwidmFsaWRhdGVTaG9ydGN1dHMiLCJ2YWxpZGF0ZU9wdGlvbkZpZWxkcyIsInZhbGlkYXRlIiwib2xkTWFuaWZlc3QiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUND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Q0FELGFBQVcsQ0FBQzNCLFFBQUQsRUFBVzRCLGFBQVgsQ0FBWDtBQUNBQyxlQUFhLENBQUM3QixRQUFELEVBQVc0QixhQUFYLENBQWI7QUFDQUUsaUJBQWUsQ0FBQzlCLFFBQUQsRUFBVzRCLGFBQVgsQ0FBZjtBQUNBRyx5QkFBdUIsQ0FBQy9CLFFBQUQsRUFBVzRCLGFBQVgsQ0FBdkI7QUFDQUksNkJBQTJCLENBQUNoQyxRQUFELEVBQVc0QixhQUFYLENBQTNCO0FBQ0FLLG1DQUFpQyxDQUFDakMsUUFBRCxFQUFXNEIsYUFBWCxDQUFqQztBQUNBTSxvQkFBa0IsQ0FBQ2xDLFFBQUQsRUFBVzRCLGFBQVgsQ0FBbEI7QUFDQU8scUJBQW1CLENBQUNuQyxRQUFELEVBQVc0QixhQUFYLENBQW5CO0FBQ0FRLG1CQUFpQixDQUFDcEMsUUFBRCxFQUFXNEIsYUFBWCxDQUFqQjtBQUNELENBWEQ7O0FBYWUsU0FBU1UsUUFBVCxDQUFrQkMsV0FBbEIsRUFBK0I7QUFDNUNkLHdCQUFzQixDQUFDYyxXQUFELENBQXRCO0FBQ0FGLHNCQUFvQixDQUFDRSxXQUFELENBQXBCO0FBQ0EsU0FBTyxTQUFQO0FBQ0QiLCJmaWxlIjoiLi91dGlscy92YWxpZGF0ZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gUmVxdWlyZWQgZmllbGRzOlxuICAgbmFtZSBvciBzaG9ydF9uYW1lOiBzdHJpbmdcbiAgIGRlc2NyaXB0aW9uOiBzdHJpbmdcbiAgIGxhbmc6IHN0cmluZ1xuICAgdGhlbWVfY29sb3I6IHN0cmluZ1xuICAgb3JpZW50YXRpb246IHN0cmluZ1xuICAgc3RhcnRfdXJsOiBzdHJpbmdcbiAgIGljb25zOiBBcnJheSBvZiBPYmplY3RcbiAqL1xuXG4vKlxuIE9wdGlvbmFsOlxuICAgZGlyOiBzdHJpbmdcbiAgIHNjb3BlOiBzdHJpbmdcbiAgIGRpc3BsYXk6IHN0cmluZ1xuICAgYmFja2dyb3VuZF9jb2xvcjogc3RyaW5nXG4gICByZWxhdGVkX2FwcGxpY2F0aW9uczogQXJyYXkgb2YgT2JqZWN0XG4gICBwcmVmZXJfcmVsYXRlZF9hcHBsaWNhdGlvbnM6IGJvb2xlYW5cbiAgIGNhdGVnb3JpZXM6IEFycmF5IG9mIHN0cmluZ3NcbiAgIHNjcmVlbnNob3RzOiBBcnJheSBvZiBPYmplY3RcbiAgIHNob3J0Y3V0czogQXJyYXkgb2YgT2JqZWN0XG4gKi9cblxuLy8gdmFsaWRhdGUgcmVxdWlyZWQgZmllbGRzXG5jb25zdCB2YWxpZGF0ZU5hbWUgPSAobWFuaWZlc3QsIHJlcXVpcmVkRXJyb3JzKSA9PiB7XG4gIGlmICgnbmFtZScgaW4gbWFuaWZlc3QpIHtcbiAgICBpZih0eXBlb2YobWFuaWZlc3RbJ25hbWUnXSkgIT09ICdzdHJpbmcnKSB7XG4gICAgICByZXF1aXJlZEVycm9ycy5uYW1lID0gJ21hbmlmZXN0IG5hbWUgZmllbGQgdHlwZSBzaG91bGQgYmUgc3RyaW5nJztcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmVxdWlyZWRFcnJvcnMubmFtZSA9ICdtYW5pZmVzdCBuYW1lIGZpZWxkIGlzIHJlcXVpcmVkJztcbiAgfVxufVxuXG5jb25zdCB2YWxpZGF0ZURlc2NyaXB0aW9uID0gKG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycykgPT4ge1xuICBpZiAoJ2Rlc2NyaXB0aW9uJyBpbiBtYW5pZmVzdCkge1xuICAgIGlmKHR5cGVvZihtYW5pZmVzdFsnZGVzY3JpcHRpb24nXSkgIT09ICdzdHJpbmcnKSB7XG4gICAgICByZXF1aXJlZEVycm9ycy5kZXNjcmlwdGlvbiA9ICdtYW5pZmVzdCBkZXNjcmlwdGlvbiBmaWVsZCB0eXBlIHNob3VsZCBiZSBzdHJpbmcnO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXF1aXJlZEVycm9ycy5kZXNjcmlwdGlvbiA9ICdtYW5pZmVzdCBkZXNjcmlwdGlvbiBmaWVsZCBpcyByZXF1aXJlZCc7XG4gIH1cbn1cblxuY29uc3QgdmFsaWRhdGVMYW5nID0gKG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycykgPT4ge1xuICBpZignbGFuZycgaW4gbWFuaWZlc3QpIHtcbiAgICBjb25zdCBtYW5pZmVzdExhbmcgPSBtYW5pZmVzdFsnbGFuZyddO1xuICAgIGlmKHR5cGVvZihtYW5pZmVzdExhbmcpICE9PSAnc3RyaW5nJykge1xuICAgICAgcmVxdWlyZWRFcnJvcnMubGFuZyA9ICdtYW5pZmVzdCBsYW5nIGZpZWxkIHR5cGUgc2hvdWxkIGJlIHN0cmluZyEnO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZighL15cXHcqKC1cXHcqKSokLy50ZXN0KG1hbmlmZXN0TGFuZykpIHtcbiAgICAgICAgcmVxdWlyZWRFcnJvcnMubGFuZyA9ICdtYW5pZmVzdCBsYW5nIGZpZWxkIHR5cGUgc2hvdWxkIGJlIGNvcnJlY3QgZm9ybWF0ISc7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJlcXVpcmVkRXJyb3JzLmxhbmcgPSAnbWFuaWZlc3QgbGFuZyBmaWVsZCBpcyByZXF1aXJlZCEnXG4gIH1cbn1cblxuY29uc3QgdmFsaWRhdGVUaGVtZUNvbG9yID0gKG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycykgPT4ge1xuICBpZiAoJ3RoZW1lX2NvbG9yJyBpbiBtYW5pZmVzdCkge1xuICAgIGlmKHR5cGVvZihtYW5pZmVzdFsndGhlbWVfY29sb3InXSkgIT09ICdzdHJpbmcnKSB7XG4gICAgICByZXF1aXJlZEVycm9ycy50aGVtZV9jb2xvciA9ICdtYW5pZmVzdCB0aGVtZV9jb2xvciBmaWVsZCB0eXBlIHNob3VsZCBiZSBzdHJpbmcnO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXF1aXJlZEVycm9ycy50aGVtZV9jb2xvciA9ICdtYW5pZmVzdCB0aGVtZV9jb2xvciBmaWVsZCBpcyByZXF1aXJlZCc7XG4gIH1cbn1cblxuY29uc3QgdmFsaWRhdGVPcml0YXRpb24gPSAobWFuaWZlc3QsIHJlcXVpcmVkRXJyb3JzKSA9PiB7XG4gIGNvbnN0IEVOVU1fT1JJRU5UQVRJT04gPSBbXG4gICAgJ2FueScsXG4gICAgJ25hdHVyYWwnLFxuICAgICdsYW5kc2NhcGUnLFxuICAgICdsYW5kc2NhcGUtcHJpbWFyeScsXG4gICAgJ2xhbmRzY2FwZS1zZWNvbmRhcnknLFxuICAgICdwb3J0cmFpdCcsXG4gICAgJ3BvcnRyYWl0LXByaW1hcnknLFxuICAgICdwb3J0cmFpdC1zZWNvbmRhcnknXG4gIF07XG4gIGlmICgnb3JpZW50YXRpb24nIGluIG1hbmlmZXN0KSB7XG4gICAgaWYodHlwZW9mKG1hbmlmZXN0WydvcmllbnRhdGlvbiddKSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHJlcXVpcmVkRXJyb3JzLm9yaWVudGF0aW9uID0gJ21hbmlmZXN0IG9yaWVudGF0aW9uIGZpZWxkIHR5cGUgc2hvdWxkIGJlIHN0cmluZyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG9yaWVudGF0aW9uID0gbWFuaWZlc3RbJ29yaWVudGF0aW9uJ107XG4gICAgICBpZighRU5VTV9PUklFTlRBVElPTi5pbmNsdWRlcyhvcmllbnRhdGlvbikpIHtcbiAgICAgICAgcmVxdWlyZWRFcnJvcnMub3JpZW50YXRpb24gPSAnbWFuaWZlc3Qgb3JpZW50YXRpb24gZmllbGQgdmFsdWUgbm90IGNvcnJlY3QnO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXF1aXJlZEVycm9ycy5vcmllbnRhdGlvbiA9ICdtYW5pZmVzdCBvcmllbnRhdGlvbiBmaWVsZCBpcyByZXF1aXJlZCc7XG4gIH1cbn1cblxuY29uc3QgdmFsaWRhdGVTdGFydFVybCA9IChtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpID0+IHtcbiAgaWYgKCdzdGFydF91cmwnIGluIG1hbmlmZXN0KSB7XG4gICAgaWYodHlwZW9mKG1hbmlmZXN0WydzdGFydF91cmwnXSkgIT09ICdzdHJpbmcnKSB7XG4gICAgICByZXF1aXJlZEVycm9ycy5zdGFydF91cmwgPSAnbWFuaWZlc3Qgc3RhcnRfdXJsIGZpZWxkIHR5cGUgc2hvdWxkIGJlIHN0cmluZyc7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJlcXVpcmVkRXJyb3JzLnN0YXJ0X3VybCA9ICdtYW5pZmVzdCBzdGFydF91cmwgZmllbGQgaXMgcmVxdWlyZWQnO1xuICB9XG59XG5cbmNvbnN0IHZhbGlkYXRlSWNvbk9iaiA9IChpY29uT2JqKSA9PiB7XG4gIGlmKCdzcmMnIGluIGljb25PYmopIHtcbiAgICBcbiAgfVxufVxuXG5jb25zdCB2YWxpZGF0ZUljb25zID0gKG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycykgPT4ge1xuICBpZignaWNvbnMnIGluIG1hbmlmZXN0KSB7XG4gICAgY29uc3QgaWNvbnMgPSBtYW5pZmVzdFsnaWNvbnMnXTtcbiAgICBpZighQXJyYXkuaXNBcnJheShpY29ucykpIHtcbiAgICAgIHJlcXVpcmVkRXJyb3JzLmljb25zID0gJ21hbmlmZXN0IGljb25zIGZpZWxkIHNob3VsZCBiZSBBcnJheSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGljb25zLmZvckVhY2goKGljb24pID0+IHtcblxuICAgICAgfSlcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmVxdWlyZWRFcnJvcnMuaWNvbnMgPSAnbWFuaWZlc3QgaWNvbnMgZmllbGQgaXMgcmVxdWlyZWQnO1xuICB9XG59XG5cbmNvbnN0IHZhbGlkYXRlUmVxdWlyZWRGaWVsZHMgPSAobWFuaWZlc3QsIGVycm9ycykgPT4ge1xuICBsZXQgcmVxdWlyZWRFcnJvcnMgPSB7fTtcbiAgdmFsaWRhdGVOYW1lKG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycyk7XG4gIHZhbGlkYXRlRGVzY3JpcHRpb24obWFuaWZlc3QsIHJlcXVpcmVkRXJyb3JzKTtcbiAgdmFsaWRhdGVMYW5nKG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycyk7XG4gIHZhbGlkYXRlVGhlbWVDb2xvcihtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpO1xuICB2YWxpZGF0ZU9yaXRhdGlvbihtYW5pZmVzdCwgcmVxdWlyZWRFcnJvcnMpO1xuICB2YWxpZGF0ZVN0YXJ0VXJsKG1hbmlmZXN0LCByZXF1aXJlZEVycm9ycyk7XG4gIHZhbGlkYXRlSWNvbnMobWFuaWZlc3QsIHJlcXVpcmVkRXJyb3JzKTtcbiAgcmV0dXJuIHJlcXVpcmVkRXJyb3JzO1xufVxuXG4vLyB2YWxpZGF0ZSBvcHRpb24gZmllbGRzXG5cbmNvbnN0IHZhbGlkYXRlRGlyID0gKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKSA9PiB7XG5cbn1cblxuY29uc3QgdmFsaWRhdGVTY29wZSA9IChtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycykgPT4ge1xuXG59XG5cbmNvbnN0IHZhbGlkYXRlRGlzcGxheSA9IChtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycykgPT4ge1xuXG59XG5cbmNvbnN0IHZhbGlkYXRlQmFja2dyb3VuZENvbG9yID0gKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKSA9PiB7XG5cbn1cblxuY29uc3QgdmFsaWRhdGVSZWxhdGVkQXBwbGljYXRpb25zID0gKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKSA9PiB7XG5cbn1cblxuY29uc3QgdmFsaWRhdGVQcmVmZXJSZWxhdGVkQXBwbGljYXRpb25zID0gKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKSA9PiB7XG5cbn1cblxuY29uc3QgdmFsaWRhdGVDYXRlZ29yaWVzID0gKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKSA9PiB7XG5cbn1cblxuY29uc3QgdmFsaWRhdGVTY3JlZW5zaG90cyA9IChtYW5pZmVzdCwgb3B0aW9uc0Vycm9ycykgPT4ge1xuXG59XG5cbmNvbnN0IHZhbGlkYXRlU2hvcnRjdXRzID0gKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKSA9PiB7XG5cbn1cblxuY29uc3QgdmFsaWRhdGVPcHRpb25GaWVsZHMgPSAobWFuaWZlc3QpID0+IHtcbiAgbGV0IG9wdGlvbnNFcnJvcnMgPSB7fTtcbiAgdmFsaWRhdGVEaXIobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpO1xuICB2YWxpZGF0ZVNjb3BlKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKTtcbiAgdmFsaWRhdGVEaXNwbGF5KG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKTtcbiAgdmFsaWRhdGVCYWNrZ3JvdW5kQ29sb3IobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpO1xuICB2YWxpZGF0ZVJlbGF0ZWRBcHBsaWNhdGlvbnMobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpO1xuICB2YWxpZGF0ZVByZWZlclJlbGF0ZWRBcHBsaWNhdGlvbnMobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpO1xuICB2YWxpZGF0ZUNhdGVnb3JpZXMobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpO1xuICB2YWxpZGF0ZVNjcmVlbnNob3RzKG1hbmlmZXN0LCBvcHRpb25zRXJyb3JzKTtcbiAgdmFsaWRhdGVTaG9ydGN1dHMobWFuaWZlc3QsIG9wdGlvbnNFcnJvcnMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2YWxpZGF0ZShvbGRNYW5pZmVzdCkge1xuICB2YWxpZGF0ZVJlcXVpcmVkRmllbGRzKG9sZE1hbmlmZXN0KTtcbiAgdmFsaWRhdGVPcHRpb25GaWVsZHMob2xkTWFuaWZlc3QpO1xuICByZXR1cm4gJ3N1Y2Nlc3MnO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/validate.js\n");

/***/ })

})