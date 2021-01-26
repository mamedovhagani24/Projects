/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/carousel/carousel.js":
/*!*********************************************!*\
  !*** ./src/components/carousel/carousel.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_Slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../scripts/Slider */ \"./src/scripts/Slider.js\");\n\nvar carousel = document.getElementById(\"carousel\");\nvar sliderControls = document.querySelectorAll('.slider__btn');\nvar sliderBottomControls = document.querySelectorAll('.slider__control-item');\nvar slider = new _scripts_Slider__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  container: carousel,\n  slidesClass: \".carousel__slide\"\n});\nslider.init();\nsliderControls.forEach(function (btn) {\n  var btnName = btn.id.split('__')[1];\n  btn.addEventListener('click', function () {\n    slider[btnName]();\n    checkControlsDisabling(slider.activeSlide);\n    checkButtonsDisabling();\n  });\n});\ncheckButtonsDisabling();\nsliderBottomControls.forEach(function (el, i, arr) {\n  el.addEventListener('click', function (e) {\n    var index = +el.dataset.index;\n    slider.setSlide(index);\n    checkControlsDisabling(index);\n    checkButtonsDisabling();\n  });\n});\nslider.adaptive.onResize(function (e) {\n  slider.updateElementsInfo();\n  slider.setSlide(slider.activeSlide);\n});\n\nfunction checkControlsDisabling(i) {\n  sliderBottomControls.forEach(function (btn) {\n    return btn.classList.remove('slider__control-item_active');\n  });\n  sliderBottomControls[i].classList.add('slider__control-item_active');\n}\n\nfunction checkButtonsDisabling() {\n  sliderControls[0].disabled = slider.activeSlide === 0;\n  sliderControls[1].disabled = slider.activeSlide === slider.elements.length - 1;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYXJvdXNlbC9jYXJvdXNlbC5qcz82NGU5Il0sIm5hbWVzIjpbImNhcm91c2VsIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNsaWRlckNvbnRyb2xzIiwicXVlcnlTZWxlY3RvckFsbCIsInNsaWRlckJvdHRvbUNvbnRyb2xzIiwic2xpZGVyIiwiU2xpZGVyIiwiY29udGFpbmVyIiwic2xpZGVzQ2xhc3MiLCJpbml0IiwiZm9yRWFjaCIsImJ0biIsImJ0bk5hbWUiLCJpZCIsInNwbGl0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNoZWNrQ29udHJvbHNEaXNhYmxpbmciLCJhY3RpdmVTbGlkZSIsImNoZWNrQnV0dG9uc0Rpc2FibGluZyIsImVsIiwiaSIsImFyciIsImUiLCJpbmRleCIsImRhdGFzZXQiLCJzZXRTbGlkZSIsImFkYXB0aXZlIiwib25SZXNpemUiLCJ1cGRhdGVFbGVtZW50c0luZm8iLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJkaXNhYmxlZCIsImVsZW1lbnRzIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFFQSxJQUFNQSxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixVQUF4QixDQUFqQjtBQUVBLElBQU1DLGNBQWMsR0FBR0YsUUFBUSxDQUFDRyxnQkFBVCxDQUEwQixjQUExQixDQUF2QjtBQUNBLElBQU1DLG9CQUFvQixHQUFHSixRQUFRLENBQUNHLGdCQUFULENBQTBCLHVCQUExQixDQUE3QjtBQUVBLElBQU1FLE1BQU0sR0FBRyxJQUFJQyx1REFBSixDQUFXO0FBQ3hCQyxXQUFTLEVBQUVSLFFBRGE7QUFFeEJTLGFBQVcsRUFBRTtBQUZXLENBQVgsQ0FBZjtBQUtBSCxNQUFNLENBQUNJLElBQVA7QUFFQVAsY0FBYyxDQUFDUSxPQUFmLENBQXVCLFVBQUNDLEdBQUQsRUFBUztBQUM5QixNQUFNQyxPQUFPLEdBQUdELEdBQUcsQ0FBQ0UsRUFBSixDQUFPQyxLQUFQLENBQWEsSUFBYixFQUFtQixDQUFuQixDQUFoQjtBQUVBSCxLQUFHLENBQUNJLGdCQUFKLENBQXFCLE9BQXJCLEVBQThCLFlBQU07QUFDbENWLFVBQU0sQ0FBQ08sT0FBRCxDQUFOO0FBRUFJLDBCQUFzQixDQUFDWCxNQUFNLENBQUNZLFdBQVIsQ0FBdEI7QUFDQUMseUJBQXFCO0FBQ3RCLEdBTEQ7QUFNRCxDQVREO0FBVUFBLHFCQUFxQjtBQUVyQmQsb0JBQW9CLENBQUNNLE9BQXJCLENBQTZCLFVBQUNTLEVBQUQsRUFBS0MsQ0FBTCxFQUFRQyxHQUFSLEVBQWdCO0FBRTNDRixJQUFFLENBQUNKLGdCQUFILENBQW9CLE9BQXBCLEVBQTZCLFVBQUNPLENBQUQsRUFBTztBQUNsQyxRQUFNQyxLQUFLLEdBQUcsQ0FBQ0osRUFBRSxDQUFDSyxPQUFILENBQVdELEtBQTFCO0FBRUFsQixVQUFNLENBQUNvQixRQUFQLENBQWdCRixLQUFoQjtBQUVBUCwwQkFBc0IsQ0FBQ08sS0FBRCxDQUF0QjtBQUNBTCx5QkFBcUI7QUFDdEIsR0FQRDtBQVNELENBWEQ7QUFhQWIsTUFBTSxDQUFDcUIsUUFBUCxDQUFnQkMsUUFBaEIsQ0FBeUIsVUFBQ0wsQ0FBRCxFQUFPO0FBQzlCakIsUUFBTSxDQUFDdUIsa0JBQVA7QUFDQXZCLFFBQU0sQ0FBQ29CLFFBQVAsQ0FBZ0JwQixNQUFNLENBQUNZLFdBQXZCO0FBQ0QsQ0FIRDs7QUFLQSxTQUFTRCxzQkFBVCxDQUFnQ0ksQ0FBaEMsRUFBbUM7QUFDakNoQixzQkFBb0IsQ0FBQ00sT0FBckIsQ0FBNkIsVUFBQ0MsR0FBRDtBQUFBLFdBQVNBLEdBQUcsQ0FBQ2tCLFNBQUosQ0FBY0MsTUFBZCxDQUFxQiw2QkFBckIsQ0FBVDtBQUFBLEdBQTdCO0FBQ0ExQixzQkFBb0IsQ0FBQ2dCLENBQUQsQ0FBcEIsQ0FBd0JTLFNBQXhCLENBQWtDRSxHQUFsQyxDQUFzQyw2QkFBdEM7QUFDRDs7QUFFRCxTQUFTYixxQkFBVCxHQUFpQztBQUMvQmhCLGdCQUFjLENBQUMsQ0FBRCxDQUFkLENBQWtCOEIsUUFBbEIsR0FBNkIzQixNQUFNLENBQUNZLFdBQVAsS0FBdUIsQ0FBcEQ7QUFDQWYsZ0JBQWMsQ0FBQyxDQUFELENBQWQsQ0FBa0I4QixRQUFsQixHQUE2QjNCLE1BQU0sQ0FBQ1ksV0FBUCxLQUF1QlosTUFBTSxDQUFDNEIsUUFBUCxDQUFnQkMsTUFBaEIsR0FBeUIsQ0FBN0U7QUFDRCIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL2Nhcm91c2VsL2Nhcm91c2VsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNsaWRlciBmcm9tIFwiLi4vLi4vc2NyaXB0cy9TbGlkZXJcIjtcclxuXHJcbmNvbnN0IGNhcm91c2VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXJvdXNlbFwiKTtcclxuXHJcbmNvbnN0IHNsaWRlckNvbnRyb2xzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNsaWRlcl9fYnRuJyk7XHJcbmNvbnN0IHNsaWRlckJvdHRvbUNvbnRyb2xzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNsaWRlcl9fY29udHJvbC1pdGVtJyk7XHJcblxyXG5jb25zdCBzbGlkZXIgPSBuZXcgU2xpZGVyKHtcclxuICBjb250YWluZXI6IGNhcm91c2VsLFxyXG4gIHNsaWRlc0NsYXNzOiBcIi5jYXJvdXNlbF9fc2xpZGVcIlxyXG59KTtcclxuXHJcbnNsaWRlci5pbml0KCk7XHJcblxyXG5zbGlkZXJDb250cm9scy5mb3JFYWNoKChidG4pID0+IHtcclxuICBjb25zdCBidG5OYW1lID0gYnRuLmlkLnNwbGl0KCdfXycpWzFdO1xyXG5cclxuICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBzbGlkZXJbYnRuTmFtZV0oKTtcclxuXHJcbiAgICBjaGVja0NvbnRyb2xzRGlzYWJsaW5nKHNsaWRlci5hY3RpdmVTbGlkZSk7XHJcbiAgICBjaGVja0J1dHRvbnNEaXNhYmxpbmcoKTtcclxuICB9KTtcclxufSk7XHJcbmNoZWNrQnV0dG9uc0Rpc2FibGluZygpO1xyXG5cclxuc2xpZGVyQm90dG9tQ29udHJvbHMuZm9yRWFjaCgoZWwsIGksIGFycikgPT4ge1xyXG5cclxuICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBjb25zdCBpbmRleCA9ICtlbC5kYXRhc2V0LmluZGV4O1xyXG5cclxuICAgIHNsaWRlci5zZXRTbGlkZShpbmRleCk7XHJcblxyXG4gICAgY2hlY2tDb250cm9sc0Rpc2FibGluZyhpbmRleCk7XHJcbiAgICBjaGVja0J1dHRvbnNEaXNhYmxpbmcoKTtcclxuICB9KTtcclxuXHJcbn0pO1xyXG5cclxuc2xpZGVyLmFkYXB0aXZlLm9uUmVzaXplKChlKSA9PiB7XHJcbiAgc2xpZGVyLnVwZGF0ZUVsZW1lbnRzSW5mbygpO1xyXG4gIHNsaWRlci5zZXRTbGlkZShzbGlkZXIuYWN0aXZlU2xpZGUpO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGNoZWNrQ29udHJvbHNEaXNhYmxpbmcoaSkge1xyXG4gIHNsaWRlckJvdHRvbUNvbnRyb2xzLmZvckVhY2goKGJ0bikgPT4gYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ3NsaWRlcl9fY29udHJvbC1pdGVtX2FjdGl2ZScpKTtcclxuICBzbGlkZXJCb3R0b21Db250cm9sc1tpXS5jbGFzc0xpc3QuYWRkKCdzbGlkZXJfX2NvbnRyb2wtaXRlbV9hY3RpdmUnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tCdXR0b25zRGlzYWJsaW5nKCkge1xyXG4gIHNsaWRlckNvbnRyb2xzWzBdLmRpc2FibGVkID0gc2xpZGVyLmFjdGl2ZVNsaWRlID09PSAwO1xyXG4gIHNsaWRlckNvbnRyb2xzWzFdLmRpc2FibGVkID0gc2xpZGVyLmFjdGl2ZVNsaWRlID09PSBzbGlkZXIuZWxlbWVudHMubGVuZ3RoIC0gMTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/carousel/carousel.js\n");

/***/ }),

/***/ "./src/components/header/header.js":
/*!*****************************************!*\
  !*** ./src/components/header/header.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("window.addEventListener(\"scroll\", function () {\n  var header = document.querySelector(\".header\");\n\n  if (window.pageYOffset > 200 && !header.classList.contains(\"header-mobile_open\")) {\n    header.classList.add(\"header__small\");\n  } else {\n    header.classList.remove(\"header__small\");\n  }\n});\nvar toggle = document.querySelector(\".burger\").addEventListener(\"click\", function (e) {\n  var header = document.querySelector(\".header\");\n  e.preventDefault();\n  this.classList.toggle(\"active\");\n  header.classList.toggle(\"header-mobile_open\");\n});\nvar submenuBtns = document.querySelectorAll(\".submenu\");\nsubmenuBtns.forEach(function (el) {\n  el.addEventListener(\"click\", toggleSubmenu);\n});\n\nfunction toggleSubmenu(e) {\n  if (!e.target.classList.contains(\"nav__submenu\")) return;\n  this.classList.toggle(\"submenu_active\");\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmpzPzEyMGUiXSwibmFtZXMiOlsid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImhlYWRlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInBhZ2VZT2Zmc2V0IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJhZGQiLCJyZW1vdmUiLCJ0b2dnbGUiLCJlIiwicHJldmVudERlZmF1bHQiLCJzdWJtZW51QnRucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWwiLCJ0b2dnbGVTdWJtZW51IiwidGFyZ2V0Il0sIm1hcHBpbmdzIjoiQUFBQUEsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxZQUFNO0FBQ3RDLE1BQU1DLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLFNBQXZCLENBQWY7O0FBRUEsTUFDRUosTUFBTSxDQUFDSyxXQUFQLEdBQXFCLEdBQXJCLElBQ0EsQ0FBQ0gsTUFBTSxDQUFDSSxTQUFQLENBQWlCQyxRQUFqQixDQUEwQixvQkFBMUIsQ0FGSCxFQUdFO0FBQ0FMLFVBQU0sQ0FBQ0ksU0FBUCxDQUFpQkUsR0FBakIsQ0FBcUIsZUFBckI7QUFDRCxHQUxELE1BS087QUFDTE4sVUFBTSxDQUFDSSxTQUFQLENBQWlCRyxNQUFqQixDQUF3QixlQUF4QjtBQUNEO0FBQ0YsQ0FYRDtBQWFBLElBQU1DLE1BQU0sR0FBR1AsUUFBUSxDQUNwQkMsYUFEWSxDQUNFLFNBREYsRUFFWkgsZ0JBRlksQ0FFSyxPQUZMLEVBRWMsVUFBVVUsQ0FBVixFQUFhO0FBQ3RDLE1BQU1ULE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLFNBQXZCLENBQWY7QUFFQU8sR0FBQyxDQUFDQyxjQUFGO0FBQ0EsT0FBS04sU0FBTCxDQUFlSSxNQUFmLENBQXNCLFFBQXRCO0FBQ0FSLFFBQU0sQ0FBQ0ksU0FBUCxDQUFpQkksTUFBakIsQ0FBd0Isb0JBQXhCO0FBQ0QsQ0FSWSxDQUFmO0FBVUEsSUFBTUcsV0FBVyxHQUFHVixRQUFRLENBQUNXLGdCQUFULENBQTBCLFVBQTFCLENBQXBCO0FBRUFELFdBQVcsQ0FBQ0UsT0FBWixDQUFvQixVQUFDQyxFQUFELEVBQVE7QUFDMUJBLElBQUUsQ0FBQ2YsZ0JBQUgsQ0FBb0IsT0FBcEIsRUFBNkJnQixhQUE3QjtBQUNELENBRkQ7O0FBSUEsU0FBU0EsYUFBVCxDQUF1Qk4sQ0FBdkIsRUFBMEI7QUFDeEIsTUFBSSxDQUFDQSxDQUFDLENBQUNPLE1BQUYsQ0FBU1osU0FBVCxDQUFtQkMsUUFBbkIsQ0FBNEIsY0FBNUIsQ0FBTCxFQUFrRDtBQUVsRCxPQUFLRCxTQUFMLENBQWVJLE1BQWYsQ0FBc0IsZ0JBQXRCO0FBQ0QiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsid2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xyXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyXCIpO1xyXG5cclxuICBpZiAoXHJcbiAgICB3aW5kb3cucGFnZVlPZmZzZXQgPiAyMDAgJiZcclxuICAgICFoZWFkZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGVhZGVyLW1vYmlsZV9vcGVuXCIpXHJcbiAgKSB7XHJcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlcl9fc21hbGxcIik7XHJcbiAgfSBlbHNlIHtcclxuICAgIGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKFwiaGVhZGVyX19zbWFsbFwiKTtcclxuICB9XHJcbn0pO1xyXG5cclxuY29uc3QgdG9nZ2xlID0gZG9jdW1lbnRcclxuICAucXVlcnlTZWxlY3RvcihcIi5idXJnZXJcIilcclxuICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlclwiKTtcclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XHJcbiAgICBoZWFkZXIuY2xhc3NMaXN0LnRvZ2dsZShcImhlYWRlci1tb2JpbGVfb3BlblwiKTtcclxuICB9KTtcclxuXHJcbmNvbnN0IHN1Ym1lbnVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zdWJtZW51XCIpO1xyXG5cclxuc3VibWVudUJ0bnMuZm9yRWFjaCgoZWwpID0+IHtcclxuICBlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlU3VibWVudSk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gdG9nZ2xlU3VibWVudShlKSB7XHJcbiAgaWYgKCFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJuYXZfX3N1Ym1lbnVcIikpIHJldHVybjtcclxuXHJcbiAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKFwic3VibWVudV9hY3RpdmVcIik7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/header/header.js\n");

/***/ }),

/***/ "./src/components/services/services-drag-n-drop.js":
/*!*********************************************************!*\
  !*** ./src/components/services/services-drag-n-drop.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function enableDragSort() {\n  var sortableLists = document.querySelectorAll(\".services__items-wrapper\");\n  sortableLists.forEach(function (list) {\n    enableDragList(list);\n  });\n}\n\nfunction enableDragList(list) {\n  list.querySelectorAll(\".services__item\").forEach(function (item) {\n    enableDragItem(item);\n  });\n}\n\nfunction enableDragItem(item) {\n  item.setAttribute(\"draggable\", true);\n  item.addEventListener('dragend', handleDrop);\n}\n\nfunction handleDrop(item) {\n  var selectedItem = item.target;\n  var list = selectedItem.parentNode;\n  var swapItem = document.elementFromPoint(item.clientX, item.clientY) === null ? selectedItem : document.elementFromPoint(item.clientX, item.clientY);\n\n  if (list === swapItem.parentNode) {\n    swapItem = swapItem !== selectedItem.nextSibling ? swapItem : swapItem.nextSibling;\n    list.insertBefore(selectedItem, swapItem);\n  }\n}\n\nenableDragSort();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zZXJ2aWNlcy9zZXJ2aWNlcy1kcmFnLW4tZHJvcC5qcz82ZmIyIl0sIm5hbWVzIjpbImVuYWJsZURyYWdTb3J0Iiwic29ydGFibGVMaXN0cyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJsaXN0IiwiZW5hYmxlRHJhZ0xpc3QiLCJpdGVtIiwiZW5hYmxlRHJhZ0l0ZW0iLCJzZXRBdHRyaWJ1dGUiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlRHJvcCIsInNlbGVjdGVkSXRlbSIsInRhcmdldCIsInBhcmVudE5vZGUiLCJzd2FwSXRlbSIsImVsZW1lbnRGcm9tUG9pbnQiLCJjbGllbnRYIiwiY2xpZW50WSIsIm5leHRTaWJsaW5nIiwiaW5zZXJ0QmVmb3JlIl0sIm1hcHBpbmdzIjoiQUFBQSxTQUFTQSxjQUFULEdBQTBCO0FBQ3hCLE1BQU1DLGFBQWEsR0FBR0MsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQiwwQkFBMUIsQ0FBdEI7QUFDQUYsZUFBYSxDQUFDRyxPQUFkLENBQXNCLFVBQUNDLElBQUQsRUFBVTtBQUM5QkMsa0JBQWMsQ0FBQ0QsSUFBRCxDQUFkO0FBQ0QsR0FGRDtBQUdEOztBQUVELFNBQVNDLGNBQVQsQ0FBd0JELElBQXhCLEVBQThCO0FBQzVCQSxNQUFJLENBQUNGLGdCQUFMLENBQXNCLGlCQUF0QixFQUF5Q0MsT0FBekMsQ0FBaUQsVUFBQ0csSUFBRCxFQUFVO0FBQ3pEQyxrQkFBYyxDQUFDRCxJQUFELENBQWQ7QUFDRCxHQUZEO0FBR0Q7O0FBRUQsU0FBU0MsY0FBVCxDQUF3QkQsSUFBeEIsRUFBOEI7QUFDNUJBLE1BQUksQ0FBQ0UsWUFBTCxDQUFrQixXQUFsQixFQUErQixJQUEvQjtBQUNBRixNQUFJLENBQUNHLGdCQUFMLENBQXNCLFNBQXRCLEVBQWlDQyxVQUFqQztBQUNEOztBQUVELFNBQVNBLFVBQVQsQ0FBb0JKLElBQXBCLEVBQTBCO0FBQ3hCLE1BQU1LLFlBQVksR0FBR0wsSUFBSSxDQUFDTSxNQUExQjtBQUNBLE1BQU1SLElBQUksR0FBR08sWUFBWSxDQUFDRSxVQUExQjtBQUVBLE1BQUlDLFFBQVEsR0FDVmIsUUFBUSxDQUFDYyxnQkFBVCxDQUEwQlQsSUFBSSxDQUFDVSxPQUEvQixFQUF3Q1YsSUFBSSxDQUFDVyxPQUE3QyxNQUEwRCxJQUExRCxHQUNJTixZQURKLEdBRUlWLFFBQVEsQ0FBQ2MsZ0JBQVQsQ0FBMEJULElBQUksQ0FBQ1UsT0FBL0IsRUFBd0NWLElBQUksQ0FBQ1csT0FBN0MsQ0FITjs7QUFLQSxNQUFJYixJQUFJLEtBQUtVLFFBQVEsQ0FBQ0QsVUFBdEIsRUFBa0M7QUFDaENDLFlBQVEsR0FDTkEsUUFBUSxLQUFLSCxZQUFZLENBQUNPLFdBQTFCLEdBQXdDSixRQUF4QyxHQUFtREEsUUFBUSxDQUFDSSxXQUQ5RDtBQUVBZCxRQUFJLENBQUNlLFlBQUwsQ0FBa0JSLFlBQWxCLEVBQWdDRyxRQUFoQztBQUNEO0FBQ0Y7O0FBRURmLGNBQWMiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zZXJ2aWNlcy9zZXJ2aWNlcy1kcmFnLW4tZHJvcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGVuYWJsZURyYWdTb3J0KCkge1xyXG4gIGNvbnN0IHNvcnRhYmxlTGlzdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNlcnZpY2VzX19pdGVtcy13cmFwcGVyXCIpO1xyXG4gIHNvcnRhYmxlTGlzdHMuZm9yRWFjaCgobGlzdCkgPT4ge1xyXG4gICAgZW5hYmxlRHJhZ0xpc3QobGlzdCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVuYWJsZURyYWdMaXN0KGxpc3QpIHtcclxuICBsaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2VydmljZXNfX2l0ZW1cIikuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgZW5hYmxlRHJhZ0l0ZW0oaXRlbSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVuYWJsZURyYWdJdGVtKGl0ZW0pIHtcclxuICBpdGVtLnNldEF0dHJpYnV0ZShcImRyYWdnYWJsZVwiLCB0cnVlKTtcclxuICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCBoYW5kbGVEcm9wKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlRHJvcChpdGVtKSB7XHJcbiAgY29uc3Qgc2VsZWN0ZWRJdGVtID0gaXRlbS50YXJnZXQ7XHJcbiAgY29uc3QgbGlzdCA9IHNlbGVjdGVkSXRlbS5wYXJlbnROb2RlO1xyXG5cclxuICBsZXQgc3dhcEl0ZW0gPVxyXG4gICAgZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludChpdGVtLmNsaWVudFgsIGl0ZW0uY2xpZW50WSkgPT09IG51bGxcclxuICAgICAgPyBzZWxlY3RlZEl0ZW1cclxuICAgICAgOiBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KGl0ZW0uY2xpZW50WCwgaXRlbS5jbGllbnRZKTtcclxuXHJcbiAgaWYgKGxpc3QgPT09IHN3YXBJdGVtLnBhcmVudE5vZGUpIHtcclxuICAgIHN3YXBJdGVtID1cclxuICAgICAgc3dhcEl0ZW0gIT09IHNlbGVjdGVkSXRlbS5uZXh0U2libGluZyA/IHN3YXBJdGVtIDogc3dhcEl0ZW0ubmV4dFNpYmxpbmc7XHJcbiAgICBsaXN0Lmluc2VydEJlZm9yZShzZWxlY3RlZEl0ZW0sIHN3YXBJdGVtKTtcclxuICB9XHJcbn1cclxuXHJcbmVuYWJsZURyYWdTb3J0KCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/services/services-drag-n-drop.js\n");

/***/ }),

/***/ "./src/img/Path.png":
/*!**************************!*\
  !*** ./src/img/Path.png ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/Path.png\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW1nL1BhdGgucG5nP2MzYzAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBZSxvRkFBdUIsaUJBQWlCIiwiZmlsZSI6Ii4vc3JjL2ltZy9QYXRoLnBuZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvUGF0aC5wbmdcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/img/Path.png\n");

/***/ }),

/***/ "./src/img/bigmask.png":
/*!*****************************!*\
  !*** ./src/img/bigmask.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/bigmask.png\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW1nL2JpZ21hc2sucG5nPzYwYTMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBZSxvRkFBdUIsb0JBQW9CIiwiZmlsZSI6Ii4vc3JjL2ltZy9iaWdtYXNrLnBuZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvYmlnbWFzay5wbmdcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/img/bigmask.png\n");

/***/ }),

/***/ "./src/img/diagram.svg":
/*!*****************************!*\
  !*** ./src/img/diagram.svg ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/diagram.svg\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW1nL2RpYWdyYW0uc3ZnPzU1YzEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBZSxvRkFBdUIsb0JBQW9CIiwiZmlsZSI6Ii4vc3JjL2ltZy9kaWFncmFtLnN2Zy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvZGlhZ3JhbS5zdmdcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/img/diagram.svg\n");

/***/ }),

/***/ "./src/img/jquery.png":
/*!****************************!*\
  !*** ./src/img/jquery.png ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/jquery.png\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW1nL2pxdWVyeS5wbmc/OWYzNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFlLG9GQUF1QixtQkFBbUIiLCJmaWxlIjoiLi9zcmMvaW1nL2pxdWVyeS5wbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2pxdWVyeS5wbmdcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/img/jquery.png\n");

/***/ }),

/***/ "./src/img/mask.png":
/*!**************************!*\
  !*** ./src/img/mask.png ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/mask.png\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW1nL21hc2sucG5nP2IyODkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBZSxvRkFBdUIsaUJBQWlCIiwiZmlsZSI6Ii4vc3JjL2ltZy9tYXNrLnBuZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvbWFzay5wbmdcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/img/mask.png\n");

/***/ }),

/***/ "./src/img/ruller.png":
/*!****************************!*\
  !*** ./src/img/ruller.png ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/ruller.png\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW1nL3J1bGxlci5wbmc/NDMwYyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFlLG9GQUF1QixtQkFBbUIiLCJmaWxlIjoiLi9zcmMvaW1nL3J1bGxlci5wbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL3J1bGxlci5wbmdcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/img/ruller.png\n");

/***/ }),

/***/ "./src/img/ruller_bottom.png":
/*!***********************************!*\
  !*** ./src/img/ruller_bottom.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/ruller_bottom.png\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW1nL3J1bGxlcl9ib3R0b20ucG5nP2FlODQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBZSxvRkFBdUIsMEJBQTBCIiwiZmlsZSI6Ii4vc3JjL2ltZy9ydWxsZXJfYm90dG9tLnBuZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvcnVsbGVyX2JvdHRvbS5wbmdcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/img/ruller_bottom.png\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _components_header_header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header/header.js */ \"./src/components/header/header.js\");\n/* harmony import */ var _components_header_header_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_header_header_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_carousel_carousel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/carousel/carousel.js */ \"./src/components/carousel/carousel.js\");\n/* harmony import */ var _components_services_services_drag_n_drop_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/services/services-drag-n-drop.js */ \"./src/components/services/services-drag-n-drop.js\");\n/* harmony import */ var _components_services_services_drag_n_drop_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_services_services_drag_n_drop_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _img_diagram_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/diagram.svg */ \"./src/img/diagram.svg\");\n/* harmony import */ var _img_jquery_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/jquery.png */ \"./src/img/jquery.png\");\n/* harmony import */ var _img_ruller_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/ruller.png */ \"./src/img/ruller.png\");\n/* harmony import */ var _img_ruller_bottom_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/ruller_bottom.png */ \"./src/img/ruller_bottom.png\");\n/* harmony import */ var _img_Path_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./img/Path.png */ \"./src/img/Path.png\");\n/* harmony import */ var _img_mask_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./img/mask.png */ \"./src/img/mask.png\");\n/* harmony import */ var _img_bigmask_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./img/bigmask.png */ \"./src/img/bigmask.png\");\n\n\n\n // import \"./components/slider/slider.js\";\n// import \"./components/about_us/about_us.js\";\n\n\n\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0NBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuL3N0eWxlLnNjc3NcIjtcclxuaW1wb3J0IFwiLi9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuanNcIjtcclxuaW1wb3J0IFwiLi9jb21wb25lbnRzL2Nhcm91c2VsL2Nhcm91c2VsLmpzXCI7XHJcbmltcG9ydCBcIi4vY29tcG9uZW50cy9zZXJ2aWNlcy9zZXJ2aWNlcy1kcmFnLW4tZHJvcC5qc1wiO1xyXG4vLyBpbXBvcnQgXCIuL2NvbXBvbmVudHMvc2xpZGVyL3NsaWRlci5qc1wiO1xyXG4vLyBpbXBvcnQgXCIuL2NvbXBvbmVudHMvYWJvdXRfdXMvYWJvdXRfdXMuanNcIjtcclxuXHJcbmltcG9ydCBcIi4vaW1nL2RpYWdyYW0uc3ZnXCI7XHJcbmltcG9ydCBcIi4vaW1nL2pxdWVyeS5wbmdcIjtcclxuaW1wb3J0IFwiLi9pbWcvcnVsbGVyLnBuZ1wiO1xyXG5pbXBvcnQgXCIuL2ltZy9ydWxsZXJfYm90dG9tLnBuZ1wiO1xyXG5pbXBvcnQgXCIuL2ltZy9QYXRoLnBuZ1wiO1xyXG5pbXBvcnQgXCIuL2ltZy9tYXNrLnBuZ1wiO1xyXG5pbXBvcnQgXCIuL2ltZy9iaWdtYXNrLnBuZ1wiO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/Slider.js":
/*!*******************************!*\
  !*** ./src/scripts/Slider.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Slider; });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Slider = /*#__PURE__*/function () {\n  function Slider(data) {\n    var _this = this;\n\n    _classCallCheck(this, Slider);\n\n    this.sliderDom = new sliderDOM(data);\n    this.adaptive = new sliderAdaptive({\n      onResizeCallback: function onResizeCallback() {\n        _this.updateElementsInfo();\n\n        _this.setSlide(_this.activeSlide);\n      }\n    });\n    this.elements = {};\n    this.activeSlide = 0;\n  }\n\n  _createClass(Slider, [{\n    key: \"init\",\n    value: function init() {\n      this.sliderDom.init();\n      this.adaptive.init();\n      this.updateElementsInfo();\n    }\n  }, {\n    key: \"updateElementsInfo\",\n    value: function updateElementsInfo() {\n      this.elements = this.sliderDom.getInfoFromElements();\n    }\n  }, {\n    key: \"next\",\n    value: function next() {\n      this.setSlide(++this.activeSlide);\n    }\n  }, {\n    key: \"prev\",\n    value: function prev() {\n      this.setSlide(--this.activeSlide);\n    }\n  }, {\n    key: \"setSlide\",\n    value: function setSlide(index) {\n      index = index < 0 ? 0 : index >= this.elements.length ? this.elements.length - 1 : index;\n      var shift = this.elements[index].position;\n      this.activeSlide = index;\n      this.sliderDom.moveElements(-shift);\n    }\n  }]);\n\n  return Slider;\n}();\n\n\n\nvar sliderDOM = /*#__PURE__*/function () {\n  function sliderDOM(_ref) {\n    var container = _ref.container,\n        slidesClass = _ref.slidesClass;\n\n    _classCallCheck(this, sliderDOM);\n\n    this.container = container;\n    this.slidesClass = slidesClass;\n    this.elements = [];\n  }\n\n  _createClass(sliderDOM, [{\n    key: \"init\",\n    value: function init() {\n      this.elements = this.container.querySelectorAll(this.slidesClass);\n    }\n  }, {\n    key: \"getInfoFromElements\",\n    value: function getInfoFromElements() {\n      return _toConsumableArray(this.elements).map(function (el) {\n        return {\n          position: el.offsetLeft\n        };\n      });\n    }\n  }, {\n    key: \"moveElements\",\n    value: function moveElements(positionX) {\n      this.container.style.transform = \"translateX(\".concat(positionX, \"px)\");\n    }\n  }]);\n\n  return sliderDOM;\n}();\n\nvar sliderAdaptive = /*#__PURE__*/function () {\n  function sliderAdaptive(_ref2) {\n    var onResizeCallback = _ref2.onResizeCallback;\n\n    _classCallCheck(this, sliderAdaptive);\n\n    this.callbacks = [];\n    this.windowResizedWidth = 0;\n    this.onResizeCallback = onResizeCallback;\n  }\n\n  _createClass(sliderAdaptive, [{\n    key: \"init\",\n    value: function init() {\n      window.addEventListener(\"resize\", this.initResize.bind(this));\n    }\n  }, {\n    key: \"initResize\",\n    value: function initResize(event) {\n      this.onResizeCallback();\n      this.callbacks.forEach(function (callback) {\n        return callback(event);\n      });\n    }\n  }, {\n    key: \"onResize\",\n    value: function onResize(callback) {\n      this.callbacks.push(callback);\n    }\n  }]);\n\n  return sliderAdaptive;\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9TbGlkZXIuanM/ZThiNiJdLCJuYW1lcyI6WyJTbGlkZXIiLCJkYXRhIiwic2xpZGVyRG9tIiwic2xpZGVyRE9NIiwiYWRhcHRpdmUiLCJzbGlkZXJBZGFwdGl2ZSIsIm9uUmVzaXplQ2FsbGJhY2siLCJ1cGRhdGVFbGVtZW50c0luZm8iLCJzZXRTbGlkZSIsImFjdGl2ZVNsaWRlIiwiZWxlbWVudHMiLCJpbml0IiwiZ2V0SW5mb0Zyb21FbGVtZW50cyIsImluZGV4IiwibGVuZ3RoIiwic2hpZnQiLCJwb3NpdGlvbiIsIm1vdmVFbGVtZW50cyIsImNvbnRhaW5lciIsInNsaWRlc0NsYXNzIiwicXVlcnlTZWxlY3RvckFsbCIsIm1hcCIsImVsIiwib2Zmc2V0TGVmdCIsInBvc2l0aW9uWCIsInN0eWxlIiwidHJhbnNmb3JtIiwiY2FsbGJhY2tzIiwid2luZG93UmVzaXplZFdpZHRoIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImluaXRSZXNpemUiLCJiaW5kIiwiZXZlbnQiLCJmb3JFYWNoIiwiY2FsbGJhY2siLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFxQkEsTTtBQUNuQixrQkFBWUMsSUFBWixFQUFrQjtBQUFBOztBQUFBOztBQUNoQixTQUFLQyxTQUFMLEdBQWlCLElBQUlDLFNBQUosQ0FBY0YsSUFBZCxDQUFqQjtBQUNBLFNBQUtHLFFBQUwsR0FBZ0IsSUFBSUMsY0FBSixDQUFtQjtBQUNqQ0Msc0JBQWdCLEVBQUUsNEJBQU07QUFDdEIsYUFBSSxDQUFDQyxrQkFBTDs7QUFDQSxhQUFJLENBQUNDLFFBQUwsQ0FBYyxLQUFJLENBQUNDLFdBQW5CO0FBQ0Q7QUFKZ0MsS0FBbkIsQ0FBaEI7QUFPQSxTQUFLQyxRQUFMLEdBQWdCLEVBQWhCO0FBQ0EsU0FBS0QsV0FBTCxHQUFtQixDQUFuQjtBQUNEOzs7OzJCQUVNO0FBQ0wsV0FBS1AsU0FBTCxDQUFlUyxJQUFmO0FBQ0EsV0FBS1AsUUFBTCxDQUFjTyxJQUFkO0FBRUEsV0FBS0osa0JBQUw7QUFDRDs7O3lDQUVvQjtBQUNuQixXQUFLRyxRQUFMLEdBQWdCLEtBQUtSLFNBQUwsQ0FBZVUsbUJBQWYsRUFBaEI7QUFDRDs7OzJCQUVNO0FBQ0wsV0FBS0osUUFBTCxDQUFjLEVBQUUsS0FBS0MsV0FBckI7QUFDRDs7OzJCQUVNO0FBQ0wsV0FBS0QsUUFBTCxDQUFjLEVBQUUsS0FBS0MsV0FBckI7QUFDRDs7OzZCQUVRSSxLLEVBQU87QUFDZEEsV0FBSyxHQUNIQSxLQUFLLEdBQUcsQ0FBUixHQUNBLENBREEsR0FFQUEsS0FBSyxJQUFJLEtBQUtILFFBQUwsQ0FBY0ksTUFBdkIsR0FDQSxLQUFLSixRQUFMLENBQWNJLE1BQWQsR0FBdUIsQ0FEdkIsR0FFQUQsS0FMRjtBQU9BLFVBQU1FLEtBQUssR0FBRyxLQUFLTCxRQUFMLENBQWNHLEtBQWQsRUFBcUJHLFFBQW5DO0FBRUEsV0FBS1AsV0FBTCxHQUFtQkksS0FBbkI7QUFDQSxXQUFLWCxTQUFMLENBQWVlLFlBQWYsQ0FBNEIsQ0FBQ0YsS0FBN0I7QUFDRDs7Ozs7Ozs7SUFHR1osUztBQUNKLDJCQUdHO0FBQUEsUUFGRGUsU0FFQyxRQUZEQSxTQUVDO0FBQUEsUUFEREMsV0FDQyxRQUREQSxXQUNDOztBQUFBOztBQUNELFNBQUtELFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsU0FBS0MsV0FBTCxHQUFtQkEsV0FBbkI7QUFFQSxTQUFLVCxRQUFMLEdBQWdCLEVBQWhCO0FBQ0Q7Ozs7MkJBR007QUFDTCxXQUFLQSxRQUFMLEdBQWdCLEtBQUtRLFNBQUwsQ0FBZUUsZ0JBQWYsQ0FBZ0MsS0FBS0QsV0FBckMsQ0FBaEI7QUFDRDs7OzBDQUVxQjtBQUNwQixhQUFPLG1CQUFJLEtBQUtULFFBQVQsRUFBbUJXLEdBQW5CLENBQXVCLFVBQUNDLEVBQUQsRUFBUTtBQUNwQyxlQUFPO0FBQ0xOLGtCQUFRLEVBQUVNLEVBQUUsQ0FBQ0M7QUFEUixTQUFQO0FBR0QsT0FKTSxDQUFQO0FBS0Q7OztpQ0FFWUMsUyxFQUFXO0FBQ3RCLFdBQUtOLFNBQUwsQ0FBZU8sS0FBZixDQUFxQkMsU0FBckIsd0JBQStDRixTQUEvQztBQUNEOzs7Ozs7SUFJR25CLGM7QUFDSixpQ0FFRztBQUFBLFFBRERDLGdCQUNDLFNBRERBLGdCQUNDOztBQUFBOztBQUNELFNBQUtxQixTQUFMLEdBQWlCLEVBQWpCO0FBQ0EsU0FBS0Msa0JBQUwsR0FBMEIsQ0FBMUI7QUFDQSxTQUFLdEIsZ0JBQUwsR0FBd0JBLGdCQUF4QjtBQUNEOzs7OzJCQUVNO0FBQ0x1QixZQUFNLENBQUNDLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLEtBQUtDLFVBQUwsQ0FBZ0JDLElBQWhCLENBQXFCLElBQXJCLENBQWxDO0FBQ0Q7OzsrQkFFVUMsSyxFQUFPO0FBQ2hCLFdBQUszQixnQkFBTDtBQUNBLFdBQUtxQixTQUFMLENBQWVPLE9BQWYsQ0FBdUIsVUFBQ0MsUUFBRDtBQUFBLGVBQWNBLFFBQVEsQ0FBQ0YsS0FBRCxDQUF0QjtBQUFBLE9BQXZCO0FBQ0Q7Ozs2QkFFUUUsUSxFQUFVO0FBQ2pCLFdBQUtSLFNBQUwsQ0FBZVMsSUFBZixDQUFvQkQsUUFBcEI7QUFDRCIsImZpbGUiOiIuL3NyYy9zY3JpcHRzL1NsaWRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsaWRlciB7XHJcbiAgY29uc3RydWN0b3IoZGF0YSkge1xyXG4gICAgdGhpcy5zbGlkZXJEb20gPSBuZXcgc2xpZGVyRE9NKGRhdGEpO1xyXG4gICAgdGhpcy5hZGFwdGl2ZSA9IG5ldyBzbGlkZXJBZGFwdGl2ZSh7XHJcbiAgICAgIG9uUmVzaXplQ2FsbGJhY2s6ICgpID0+IHtcclxuICAgICAgICB0aGlzLnVwZGF0ZUVsZW1lbnRzSW5mbygpO1xyXG4gICAgICAgIHRoaXMuc2V0U2xpZGUodGhpcy5hY3RpdmVTbGlkZSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZWxlbWVudHMgPSB7fTtcclxuICAgIHRoaXMuYWN0aXZlU2xpZGUgPSAwO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIHRoaXMuc2xpZGVyRG9tLmluaXQoKTtcclxuICAgIHRoaXMuYWRhcHRpdmUuaW5pdCgpO1xyXG5cclxuICAgIHRoaXMudXBkYXRlRWxlbWVudHNJbmZvKCk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVFbGVtZW50c0luZm8oKSB7XHJcbiAgICB0aGlzLmVsZW1lbnRzID0gdGhpcy5zbGlkZXJEb20uZ2V0SW5mb0Zyb21FbGVtZW50cygpO1xyXG4gIH1cclxuXHJcbiAgbmV4dCgpIHtcclxuICAgIHRoaXMuc2V0U2xpZGUoKyt0aGlzLmFjdGl2ZVNsaWRlKTtcclxuICB9XHJcblxyXG4gIHByZXYoKSB7XHJcbiAgICB0aGlzLnNldFNsaWRlKC0tdGhpcy5hY3RpdmVTbGlkZSk7XHJcbiAgfVxyXG5cclxuICBzZXRTbGlkZShpbmRleCkge1xyXG4gICAgaW5kZXggPVxyXG4gICAgICBpbmRleCA8IDAgP1xyXG4gICAgICAwIDpcclxuICAgICAgaW5kZXggPj0gdGhpcy5lbGVtZW50cy5sZW5ndGggP1xyXG4gICAgICB0aGlzLmVsZW1lbnRzLmxlbmd0aCAtIDEgOlxyXG4gICAgICBpbmRleDtcclxuXHJcbiAgICBjb25zdCBzaGlmdCA9IHRoaXMuZWxlbWVudHNbaW5kZXhdLnBvc2l0aW9uO1xyXG5cclxuICAgIHRoaXMuYWN0aXZlU2xpZGUgPSBpbmRleDtcclxuICAgIHRoaXMuc2xpZGVyRG9tLm1vdmVFbGVtZW50cygtc2hpZnQpO1xyXG4gIH1cclxufVxyXG5cclxuY2xhc3Mgc2xpZGVyRE9NIHtcclxuICBjb25zdHJ1Y3Rvcih7XHJcbiAgICBjb250YWluZXIsXHJcbiAgICBzbGlkZXNDbGFzc1xyXG4gIH0pIHtcclxuICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xyXG4gICAgdGhpcy5zbGlkZXNDbGFzcyA9IHNsaWRlc0NsYXNzO1xyXG5cclxuICAgIHRoaXMuZWxlbWVudHMgPSBbXTtcclxuICB9XHJcblxyXG5cclxuICBpbml0KCkge1xyXG4gICAgdGhpcy5lbGVtZW50cyA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5zbGlkZXNDbGFzcyk7XHJcbiAgfVxyXG5cclxuICBnZXRJbmZvRnJvbUVsZW1lbnRzKCkge1xyXG4gICAgcmV0dXJuIFsuLi50aGlzLmVsZW1lbnRzXS5tYXAoKGVsKSA9PiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgcG9zaXRpb246IGVsLm9mZnNldExlZnRcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbW92ZUVsZW1lbnRzKHBvc2l0aW9uWCkge1xyXG4gICAgdGhpcy5jb250YWluZXIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHtwb3NpdGlvblh9cHgpYDtcclxuICB9XHJcbn1cclxuXHJcblxyXG5jbGFzcyBzbGlkZXJBZGFwdGl2ZSB7XHJcbiAgY29uc3RydWN0b3Ioe1xyXG4gICAgb25SZXNpemVDYWxsYmFja1xyXG4gIH0pIHtcclxuICAgIHRoaXMuY2FsbGJhY2tzID0gW107XHJcbiAgICB0aGlzLndpbmRvd1Jlc2l6ZWRXaWR0aCA9IDA7XHJcbiAgICB0aGlzLm9uUmVzaXplQ2FsbGJhY2sgPSBvblJlc2l6ZUNhbGxiYWNrO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMuaW5pdFJlc2l6ZS5iaW5kKHRoaXMpKTtcclxuICB9XHJcblxyXG4gIGluaXRSZXNpemUoZXZlbnQpIHtcclxuICAgIHRoaXMub25SZXNpemVDYWxsYmFjaygpO1xyXG4gICAgdGhpcy5jYWxsYmFja3MuZm9yRWFjaCgoY2FsbGJhY2spID0+IGNhbGxiYWNrKGV2ZW50KSk7XHJcbiAgfVxyXG5cclxuICBvblJlc2l6ZShjYWxsYmFjaykge1xyXG4gICAgdGhpcy5jYWxsYmFja3MucHVzaChjYWxsYmFjayk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/Slider.js\n");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuc2Nzcz9iNGU1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEiLCJmaWxlIjoiLi9zcmMvc3R5bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/style.scss\n");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQSIsImZpbGUiOiJqcy9pbmRleC1idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=