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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/portfolio.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/header/header.js":
/*!*****************************************!*\
  !*** ./src/components/header/header.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("window.addEventListener(\"scroll\", function () {\n  var header = document.querySelector(\".header\");\n\n  if (window.pageYOffset > 200 && !header.classList.contains(\"header-mobile_open\")) {\n    header.classList.add(\"header__small\");\n  } else {\n    header.classList.remove(\"header__small\");\n  }\n});\nvar toggle = document.querySelector(\".burger\").addEventListener(\"click\", function (e) {\n  var header = document.querySelector(\".header\");\n  e.preventDefault();\n  this.classList.toggle(\"active\");\n  header.classList.toggle(\"header-mobile_open\");\n});\nvar submenuBtns = document.querySelectorAll(\".submenu\");\nsubmenuBtns.forEach(function (el) {\n  el.addEventListener(\"click\", toggleSubmenu);\n});\n\nfunction toggleSubmenu(e) {\n  if (!e.target.classList.contains(\"nav__submenu\")) return;\n  this.classList.toggle(\"submenu_active\");\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmpzPzEyMGUiXSwibmFtZXMiOlsid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImhlYWRlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInBhZ2VZT2Zmc2V0IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJhZGQiLCJyZW1vdmUiLCJ0b2dnbGUiLCJlIiwicHJldmVudERlZmF1bHQiLCJzdWJtZW51QnRucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWwiLCJ0b2dnbGVTdWJtZW51IiwidGFyZ2V0Il0sIm1hcHBpbmdzIjoiQUFBQUEsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxZQUFNO0FBQ3RDLE1BQU1DLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLFNBQXZCLENBQWY7O0FBRUEsTUFDRUosTUFBTSxDQUFDSyxXQUFQLEdBQXFCLEdBQXJCLElBQ0EsQ0FBQ0gsTUFBTSxDQUFDSSxTQUFQLENBQWlCQyxRQUFqQixDQUEwQixvQkFBMUIsQ0FGSCxFQUdFO0FBQ0FMLFVBQU0sQ0FBQ0ksU0FBUCxDQUFpQkUsR0FBakIsQ0FBcUIsZUFBckI7QUFDRCxHQUxELE1BS087QUFDTE4sVUFBTSxDQUFDSSxTQUFQLENBQWlCRyxNQUFqQixDQUF3QixlQUF4QjtBQUNEO0FBQ0YsQ0FYRDtBQWFBLElBQU1DLE1BQU0sR0FBR1AsUUFBUSxDQUNwQkMsYUFEWSxDQUNFLFNBREYsRUFFWkgsZ0JBRlksQ0FFSyxPQUZMLEVBRWMsVUFBVVUsQ0FBVixFQUFhO0FBQ3RDLE1BQU1ULE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLFNBQXZCLENBQWY7QUFFQU8sR0FBQyxDQUFDQyxjQUFGO0FBQ0EsT0FBS04sU0FBTCxDQUFlSSxNQUFmLENBQXNCLFFBQXRCO0FBQ0FSLFFBQU0sQ0FBQ0ksU0FBUCxDQUFpQkksTUFBakIsQ0FBd0Isb0JBQXhCO0FBQ0QsQ0FSWSxDQUFmO0FBVUEsSUFBTUcsV0FBVyxHQUFHVixRQUFRLENBQUNXLGdCQUFULENBQTBCLFVBQTFCLENBQXBCO0FBRUFELFdBQVcsQ0FBQ0UsT0FBWixDQUFvQixVQUFDQyxFQUFELEVBQVE7QUFDMUJBLElBQUUsQ0FBQ2YsZ0JBQUgsQ0FBb0IsT0FBcEIsRUFBNkJnQixhQUE3QjtBQUNELENBRkQ7O0FBSUEsU0FBU0EsYUFBVCxDQUF1Qk4sQ0FBdkIsRUFBMEI7QUFDeEIsTUFBSSxDQUFDQSxDQUFDLENBQUNPLE1BQUYsQ0FBU1osU0FBVCxDQUFtQkMsUUFBbkIsQ0FBNEIsY0FBNUIsQ0FBTCxFQUFrRDtBQUVsRCxPQUFLRCxTQUFMLENBQWVJLE1BQWYsQ0FBc0IsZ0JBQXRCO0FBQ0QiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsid2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xyXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyXCIpO1xyXG5cclxuICBpZiAoXHJcbiAgICB3aW5kb3cucGFnZVlPZmZzZXQgPiAyMDAgJiZcclxuICAgICFoZWFkZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGVhZGVyLW1vYmlsZV9vcGVuXCIpXHJcbiAgKSB7XHJcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlcl9fc21hbGxcIik7XHJcbiAgfSBlbHNlIHtcclxuICAgIGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKFwiaGVhZGVyX19zbWFsbFwiKTtcclxuICB9XHJcbn0pO1xyXG5cclxuY29uc3QgdG9nZ2xlID0gZG9jdW1lbnRcclxuICAucXVlcnlTZWxlY3RvcihcIi5idXJnZXJcIilcclxuICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlclwiKTtcclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XHJcbiAgICBoZWFkZXIuY2xhc3NMaXN0LnRvZ2dsZShcImhlYWRlci1tb2JpbGVfb3BlblwiKTtcclxuICB9KTtcclxuXHJcbmNvbnN0IHN1Ym1lbnVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zdWJtZW51XCIpO1xyXG5cclxuc3VibWVudUJ0bnMuZm9yRWFjaCgoZWwpID0+IHtcclxuICBlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlU3VibWVudSk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gdG9nZ2xlU3VibWVudShlKSB7XHJcbiAgaWYgKCFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJuYXZfX3N1Ym1lbnVcIikpIHJldHVybjtcclxuXHJcbiAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKFwic3VibWVudV9hY3RpdmVcIik7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/header/header.js\n");

/***/ }),

/***/ "./src/components/portfolio/portfolio.js":
/*!***********************************************!*\
  !*** ./src/components/portfolio/portfolio.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar Firebase = __webpack_require__(/*! ../../scripts/firebase-api */ \"./src/scripts/firebase-api.js\");\n\nvar db = new Firebase(firebase);\nvar postsContainer = document.querySelector(\".cases\");\nvar elementsData = {\n  activeTag: null,\n  // string\n  activePagination: null // number\n\n};\ndb.loadPosts().then(renderPosts)[\"catch\"](function (err) {\n  return console.error(err);\n});\ndocument.querySelectorAll(\".filters button\").forEach(function (btn) {\n  btn.addEventListener(\"click\", tagSearch);\n});\n\nfunction updateAllElements() {\n  updateTagsElements();\n  updatePaginationElements();\n}\n\nfunction updateTagsElements(tag) {\n  document.querySelectorAll(\".filters button\").forEach(function (btn) {\n    if (btn.getAttribute('data-name') === tag) {\n      btn.classList.add(\"selected\");\n    } else {\n      btn.classList.remove(\"selected\");\n    }\n  });\n}\n\nfunction updatePaginationElements() {// ... https://github.com/mamedovhagani24/Projects/issues/87\n}\n\nfunction tagSearch() {\n  elementsData.activeTag = this.getAttribute(\"data-name\");\n\n  if (elementsData.activeTag === \"all\") {\n    db.loadPosts().then(renderPosts)[\"catch\"](function (err) {\n      return console.log(err);\n    });\n  } else {\n    db.loadPostsByTag(elementsData.activeTag).then(renderPosts)[\"catch\"](function (err) {\n      return console.log(err);\n    });\n  }\n\n  updateTagsElements(elementsData.activeTag);\n}\n\nfunction renderPosts(allPostsData) {\n  var allPostsHTML = allPostsData.reduce(function (postsHTML, postObj) {\n    return postsHTML += returnHTMLPost(postObj);\n  }, \"\");\n  replacePostsIntoContainer(allPostsHTML); // updateAllElements();\n}\n\nfunction replacePostsIntoContainer(postsHTML) {\n  postsContainer.innerHTML = postsHTML;\n}\n\nfunction returnHTMLPost(post) {\n  return \"<div class=\\\"cases__item\\\">\\n  <div class=\\\"cases__item__img\\\">\\n      <img class=\\\"img-inner\\\" src=\\\"\".concat(post.imgURL, \"\\\">\\n  </div>\\n  <div class=\\\"cases__item__info\\\">\\n      <div class=\\\"text-content\\\">\\n          <h3 class=\\\"title-h3\\\">\").concat(post.id, \" \\u2022 \").concat(post.title, \"</h3>\\n          <p class=\\\"description\\\">\").concat(post.description, \"</p>\\n      </div>\\n      <div class=\\\"links\\\">\\n          <div class=\\\"links__link\\\">\\n              <a class=\\\"links__link__url\\\" href=\\\"https://\").concat(post.link, \"\\\">\\n                  <div class=\\\"link-img\\\"></div><span>\").concat(post.link, \"</span>\\n              </a>\\n          </div>\\n          <button class=\\\"btn btn_large\\\">view details</button>\\n      </div>\\n  </div>\\n</div>\");\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wb3J0Zm9saW8vcG9ydGZvbGlvLmpzPzAzZjQiXSwibmFtZXMiOlsiRmlyZWJhc2UiLCJyZXF1aXJlIiwiZGIiLCJmaXJlYmFzZSIsInBvc3RzQ29udGFpbmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZWxlbWVudHNEYXRhIiwiYWN0aXZlVGFnIiwiYWN0aXZlUGFnaW5hdGlvbiIsImxvYWRQb3N0cyIsInRoZW4iLCJyZW5kZXJQb3N0cyIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiYnRuIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRhZ1NlYXJjaCIsInVwZGF0ZUFsbEVsZW1lbnRzIiwidXBkYXRlVGFnc0VsZW1lbnRzIiwidXBkYXRlUGFnaW5hdGlvbkVsZW1lbnRzIiwidGFnIiwiZ2V0QXR0cmlidXRlIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwibG9nIiwibG9hZFBvc3RzQnlUYWciLCJhbGxQb3N0c0RhdGEiLCJhbGxQb3N0c0hUTUwiLCJyZWR1Y2UiLCJwb3N0c0hUTUwiLCJwb3N0T2JqIiwicmV0dXJuSFRNTFBvc3QiLCJyZXBsYWNlUG9zdHNJbnRvQ29udGFpbmVyIiwiaW5uZXJIVE1MIiwicG9zdCIsImltZ1VSTCIsImlkIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImxpbmsiXSwibWFwcGluZ3MiOiJBQUFhOztBQUViLElBQU1BLFFBQVEsR0FBR0MsbUJBQU8sQ0FBQyxpRUFBRCxDQUF4Qjs7QUFDQSxJQUFNQyxFQUFFLEdBQUcsSUFBSUYsUUFBSixDQUFhRyxRQUFiLENBQVg7QUFDQSxJQUFNQyxjQUFjLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixDQUF2QjtBQUVBLElBQU1DLFlBQVksR0FBRztBQUNuQkMsV0FBUyxFQUFFLElBRFE7QUFDRjtBQUNqQkMsa0JBQWdCLEVBQUUsSUFGQyxDQUVJOztBQUZKLENBQXJCO0FBS0FQLEVBQUUsQ0FBQ1EsU0FBSCxHQUNHQyxJQURILENBQ1FDLFdBRFIsV0FFUyxVQUFDQyxHQUFEO0FBQUEsU0FBU0MsT0FBTyxDQUFDQyxLQUFSLENBQWNGLEdBQWQsQ0FBVDtBQUFBLENBRlQ7QUFJQVIsUUFBUSxDQUFDVyxnQkFBVCxDQUEwQixpQkFBMUIsRUFBNkNDLE9BQTdDLENBQXFELFVBQUNDLEdBQUQsRUFBUztBQUM1REEsS0FBRyxDQUFDQyxnQkFBSixDQUFxQixPQUFyQixFQUE4QkMsU0FBOUI7QUFDRCxDQUZEOztBQUlBLFNBQVNDLGlCQUFULEdBQTZCO0FBQzNCQyxvQkFBa0I7QUFDbEJDLDBCQUF3QjtBQUN6Qjs7QUFFRCxTQUFTRCxrQkFBVCxDQUE0QkUsR0FBNUIsRUFBZ0M7QUFDOUJuQixVQUFRLENBQUNXLGdCQUFULENBQTBCLGlCQUExQixFQUE2Q0MsT0FBN0MsQ0FBcUQsVUFBQ0MsR0FBRCxFQUFTO0FBQzVELFFBQUlBLEdBQUcsQ0FBQ08sWUFBSixDQUFpQixXQUFqQixNQUFrQ0QsR0FBdEMsRUFBMkM7QUFDekNOLFNBQUcsQ0FBQ1EsU0FBSixDQUFjQyxHQUFkLENBQWtCLFVBQWxCO0FBQ0QsS0FGRCxNQUVPO0FBQ0xULFNBQUcsQ0FBQ1EsU0FBSixDQUFjRSxNQUFkLENBQXFCLFVBQXJCO0FBQ0Q7QUFDRixHQU5EO0FBT0Q7O0FBQ0QsU0FBU0wsd0JBQVQsR0FBbUMsQ0FDakM7QUFDRDs7QUFFRCxTQUFTSCxTQUFULEdBQXFCO0FBQ25CYixjQUFZLENBQUNDLFNBQWIsR0FBeUIsS0FBS2lCLFlBQUwsQ0FBa0IsV0FBbEIsQ0FBekI7O0FBRUEsTUFBSWxCLFlBQVksQ0FBQ0MsU0FBYixLQUEyQixLQUEvQixFQUFzQztBQUNwQ04sTUFBRSxDQUFDUSxTQUFILEdBQ0dDLElBREgsQ0FDUUMsV0FEUixXQUVTLFVBQUNDLEdBQUQ7QUFBQSxhQUFTQyxPQUFPLENBQUNlLEdBQVIsQ0FBWWhCLEdBQVosQ0FBVDtBQUFBLEtBRlQ7QUFHRCxHQUpELE1BSU87QUFDTFgsTUFBRSxDQUFDNEIsY0FBSCxDQUFrQnZCLFlBQVksQ0FBQ0MsU0FBL0IsRUFDR0csSUFESCxDQUNRQyxXQURSLFdBRVMsVUFBQ0MsR0FBRDtBQUFBLGFBQVNDLE9BQU8sQ0FBQ2UsR0FBUixDQUFZaEIsR0FBWixDQUFUO0FBQUEsS0FGVDtBQUdEOztBQUVEUyxvQkFBa0IsQ0FBQ2YsWUFBWSxDQUFDQyxTQUFkLENBQWxCO0FBQ0Q7O0FBRUQsU0FBU0ksV0FBVCxDQUFxQm1CLFlBQXJCLEVBQW1DO0FBQ2pDLE1BQU1DLFlBQVksR0FBR0QsWUFBWSxDQUFDRSxNQUFiLENBQ25CLFVBQUNDLFNBQUQsRUFBWUMsT0FBWjtBQUFBLFdBQXlCRCxTQUFTLElBQUlFLGNBQWMsQ0FBQ0QsT0FBRCxDQUFwRDtBQUFBLEdBRG1CLEVBRW5CLEVBRm1CLENBQXJCO0FBS0FFLDJCQUF5QixDQUFDTCxZQUFELENBQXpCLENBTmlDLENBT2pDO0FBQ0Q7O0FBRUQsU0FBU0sseUJBQVQsQ0FBbUNILFNBQW5DLEVBQThDO0FBQzVDOUIsZ0JBQWMsQ0FBQ2tDLFNBQWYsR0FBMkJKLFNBQTNCO0FBQ0Q7O0FBRUQsU0FBU0UsY0FBVCxDQUF3QkcsSUFBeEIsRUFBOEI7QUFDNUIseUhBRWtDQSxJQUFJLENBQUNDLE1BRnZDLHNJQU0rQkQsSUFBSSxDQUFDRSxFQU5wQyxxQkFNNENGLElBQUksQ0FBQ0csS0FOakQsdURBT2lDSCxJQUFJLENBQUNJLFdBUHRDLGdLQVd3REosSUFBSSxDQUFDSyxJQVg3RCx3RUFZb0RMLElBQUksQ0FBQ0ssSUFaekQ7QUFtQkQiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9wb3J0Zm9saW8vcG9ydGZvbGlvLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jb25zdCBGaXJlYmFzZSA9IHJlcXVpcmUoXCIuLi8uLi9zY3JpcHRzL2ZpcmViYXNlLWFwaVwiKTtcclxuY29uc3QgZGIgPSBuZXcgRmlyZWJhc2UoZmlyZWJhc2UpO1xyXG5jb25zdCBwb3N0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FzZXNcIik7XHJcblxyXG5jb25zdCBlbGVtZW50c0RhdGEgPSB7XHJcbiAgYWN0aXZlVGFnOiBudWxsLCAvLyBzdHJpbmdcclxuICBhY3RpdmVQYWdpbmF0aW9uOiBudWxsIC8vIG51bWJlclxyXG59XHJcblxyXG5kYi5sb2FkUG9zdHMoKVxyXG4gIC50aGVuKHJlbmRlclBvc3RzKVxyXG4gIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKGVycikpO1xyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5maWx0ZXJzIGJ1dHRvblwiKS5mb3JFYWNoKChidG4pID0+IHtcclxuICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRhZ1NlYXJjaCk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gdXBkYXRlQWxsRWxlbWVudHMoKSB7XHJcbiAgdXBkYXRlVGFnc0VsZW1lbnRzKCk7XHJcbiAgdXBkYXRlUGFnaW5hdGlvbkVsZW1lbnRzKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVRhZ3NFbGVtZW50cyh0YWcpe1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZmlsdGVycyBidXR0b25cIikuZm9yRWFjaCgoYnRuKSA9PiB7XHJcbiAgICBpZiAoYnRuLmdldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJykgPT09IHRhZykge1xyXG4gICAgICBidG4uY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5mdW5jdGlvbiB1cGRhdGVQYWdpbmF0aW9uRWxlbWVudHMoKXtcclxuICAvLyAuLi4gaHR0cHM6Ly9naXRodWIuY29tL21hbWVkb3ZoYWdhbmkyNC9Qcm9qZWN0cy9pc3N1ZXMvODdcclxufVxyXG5cclxuZnVuY3Rpb24gdGFnU2VhcmNoKCkge1xyXG4gIGVsZW1lbnRzRGF0YS5hY3RpdmVUYWcgPSB0aGlzLmdldEF0dHJpYnV0ZShcImRhdGEtbmFtZVwiKTtcclxuXHJcbiAgaWYgKGVsZW1lbnRzRGF0YS5hY3RpdmVUYWcgPT09IFwiYWxsXCIpIHtcclxuICAgIGRiLmxvYWRQb3N0cygpXHJcbiAgICAgIC50aGVuKHJlbmRlclBvc3RzKVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGRiLmxvYWRQb3N0c0J5VGFnKGVsZW1lbnRzRGF0YS5hY3RpdmVUYWcpXHJcbiAgICAgIC50aGVuKHJlbmRlclBvc3RzKVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVUYWdzRWxlbWVudHMoZWxlbWVudHNEYXRhLmFjdGl2ZVRhZyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlclBvc3RzKGFsbFBvc3RzRGF0YSkge1xyXG4gIGNvbnN0IGFsbFBvc3RzSFRNTCA9IGFsbFBvc3RzRGF0YS5yZWR1Y2UoXHJcbiAgICAocG9zdHNIVE1MLCBwb3N0T2JqKSA9PiAocG9zdHNIVE1MICs9IHJldHVybkhUTUxQb3N0KHBvc3RPYmopKSxcclxuICAgIFwiXCJcclxuICApO1xyXG5cclxuICByZXBsYWNlUG9zdHNJbnRvQ29udGFpbmVyKGFsbFBvc3RzSFRNTCk7XHJcbiAgLy8gdXBkYXRlQWxsRWxlbWVudHMoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVwbGFjZVBvc3RzSW50b0NvbnRhaW5lcihwb3N0c0hUTUwpIHtcclxuICBwb3N0c0NvbnRhaW5lci5pbm5lckhUTUwgPSBwb3N0c0hUTUw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJldHVybkhUTUxQb3N0KHBvc3QpIHtcclxuICByZXR1cm4gYDxkaXYgY2xhc3M9XCJjYXNlc19faXRlbVwiPlxyXG4gIDxkaXYgY2xhc3M9XCJjYXNlc19faXRlbV9faW1nXCI+XHJcbiAgICAgIDxpbWcgY2xhc3M9XCJpbWctaW5uZXJcIiBzcmM9XCIke3Bvc3QuaW1nVVJMfVwiPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJjYXNlc19faXRlbV9faW5mb1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jb250ZW50XCI+XHJcbiAgICAgICAgICA8aDMgY2xhc3M9XCJ0aXRsZS1oM1wiPiR7cG9zdC5pZH0g4oCiICR7cG9zdC50aXRsZX08L2gzPlxyXG4gICAgICAgICAgPHAgY2xhc3M9XCJkZXNjcmlwdGlvblwiPiR7cG9zdC5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibGlua3NcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaW5rc19fbGlua1wiPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzPVwibGlua3NfX2xpbmtfX3VybFwiIGhyZWY9XCJodHRwczovLyR7cG9zdC5saW5rfVwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGluay1pbWdcIj48L2Rpdj48c3Bhbj4ke3Bvc3QubGlua308L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bl9sYXJnZVwiPnZpZXcgZGV0YWlsczwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+YDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/portfolio/portfolio.js\n");

/***/ }),

/***/ "./src/img/arrow-portfolio.png":
/*!*************************************!*\
  !*** ./src/img/arrow-portfolio.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/arrow-portfolio.png\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW1nL2Fycm93LXBvcnRmb2xpby5wbmc/MDdkOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFlLG9GQUF1Qiw0QkFBNEIiLCJmaWxlIjoiLi9zcmMvaW1nL2Fycm93LXBvcnRmb2xpby5wbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2Fycm93LXBvcnRmb2xpby5wbmdcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/img/arrow-portfolio.png\n");

/***/ }),

/***/ "./src/img/link-hover.png":
/*!********************************!*\
  !*** ./src/img/link-hover.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/link-hover.png\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW1nL2xpbmstaG92ZXIucG5nPzg5OWIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBZSxvRkFBdUIsdUJBQXVCIiwiZmlsZSI6Ii4vc3JjL2ltZy9saW5rLWhvdmVyLnBuZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvbGluay1ob3Zlci5wbmdcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/img/link-hover.png\n");

/***/ }),

/***/ "./src/img/link.png":
/*!**************************!*\
  !*** ./src/img/link.png ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/link.png\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW1nL2xpbmsucG5nPzI2ZDUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBZSxvRkFBdUIsaUJBQWlCIiwiZmlsZSI6Ii4vc3JjL2ltZy9saW5rLnBuZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvbGluay5wbmdcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/img/link.png\n");

/***/ }),

/***/ "./src/portfolio.js":
/*!**************************!*\
  !*** ./src/portfolio.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _components_header_header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header/header.js */ \"./src/components/header/header.js\");\n/* harmony import */ var _components_header_header_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_header_header_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_portfolio_portfolio_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/portfolio/portfolio.js */ \"./src/components/portfolio/portfolio.js\");\n/* harmony import */ var _components_portfolio_portfolio_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_portfolio_portfolio_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _img_link_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/link.png */ \"./src/img/link.png\");\n/* harmony import */ var _img_link_hover_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/link-hover.png */ \"./src/img/link-hover.png\");\n/* harmony import */ var _img_arrow_portfolio_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/arrow-portfolio.png */ \"./src/img/arrow-portfolio.png\");\n\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcG9ydGZvbGlvLmpzPzQyMzEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQSIsImZpbGUiOiIuL3NyYy9wb3J0Zm9saW8uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XHJcbmltcG9ydCBcIi4vY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmpzXCI7XHJcbmltcG9ydCBcIi4vY29tcG9uZW50cy9wb3J0Zm9saW8vcG9ydGZvbGlvLmpzXCI7XHJcblxyXG5pbXBvcnQgJy4vaW1nL2xpbmsucG5nJztcclxuaW1wb3J0ICcuL2ltZy9saW5rLWhvdmVyLnBuZyc7XHJcbmltcG9ydCAnLi9pbWcvYXJyb3ctcG9ydGZvbGlvLnBuZyc7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/portfolio.js\n");

/***/ }),

/***/ "./src/scripts/firebase-api.js":
/*!*************************************!*\
  !*** ./src/scripts/firebase-api.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var _temp;\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n// Your web app's Firebase configuration\nvar firebaseConfig = {\n  apiKey: \"AIzaSyCnsSVyoVBqj_MLsjm27IN8rawZ7A6Y8eY\",\n  authDomain: \"modusversus-project.firebaseapp.com\",\n  projectId: \"modusversus-project\",\n  storageBucket: \"modusversus-project.appspot.com\",\n  messagingSenderId: \"295123108152\",\n  appId: \"1:295123108152:web:5b08fb1d9576c1a5ecc1cd\"\n};\nmodule.exports = (_temp = /*#__PURE__*/function () {\n  function _temp(firebase) {\n    _classCallCheck(this, _temp);\n\n    _defineProperty(this, \"_database\", void 0);\n\n    _defineProperty(this, \"_firebase\", void 0);\n\n    _defineProperty(this, \"_config\", firebaseConfig);\n\n    this.init(firebase);\n    this.length = null;\n  }\n\n  _createClass(_temp, [{\n    key: \"init\",\n    value: function init(firebase) {\n      this._firebase = firebase.initializeApp(firebaseConfig);\n      this._database = this._firebase.database();\n      this.setLength();\n    }\n  }, {\n    key: \"loadPosts\",\n    value: function loadPosts() {\n      var paginationIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n      return this._database.ref(\"/portfolio-2/\").orderByKey().startAt('' + paginationIndex).limitToFirst(4).get().then(function (snap) {\n        return Object.values(snap.val());\n      });\n    }\n  }, {\n    key: \"loadPostsByTag\",\n    value: function loadPostsByTag(tag) {\n      return this._database.ref(\"/portfolio-2/\").orderByChild(\"tags/\" + tag).equalTo(true).limitToFirst(4).once(\"value\").then(function (snap) {\n        return Object.values(snap.val());\n      });\n    }\n  }, {\n    key: \"setLength\",\n    value: function setLength() {\n      var _this = this;\n\n      this._database.ref(\"/portfolio-2/\").limitToLast(1).get().then(function (snap) {\n        _this.length = +Object.keys(snap.val())[0] + 1;\n      })[\"catch\"](function (err) {\n        return console.error(err);\n      });\n    }\n  }]);\n\n  return _temp;\n}(), _temp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9maXJlYmFzZS1hcGkuanM/YjFkNiJdLCJuYW1lcyI6WyJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIm1vZHVsZSIsImV4cG9ydHMiLCJmaXJlYmFzZSIsImluaXQiLCJsZW5ndGgiLCJfZmlyZWJhc2UiLCJpbml0aWFsaXplQXBwIiwiX2RhdGFiYXNlIiwiZGF0YWJhc2UiLCJzZXRMZW5ndGgiLCJwYWdpbmF0aW9uSW5kZXgiLCJyZWYiLCJvcmRlckJ5S2V5Iiwic3RhcnRBdCIsImxpbWl0VG9GaXJzdCIsImdldCIsInRoZW4iLCJzbmFwIiwiT2JqZWN0IiwidmFsdWVzIiwidmFsIiwidGFnIiwib3JkZXJCeUNoaWxkIiwiZXF1YWxUbyIsIm9uY2UiLCJsaW1pdFRvTGFzdCIsImtleXMiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBLElBQU1BLGNBQWMsR0FBRztBQUNyQkMsUUFBTSxFQUFFLHlDQURhO0FBRXJCQyxZQUFVLEVBQUUscUNBRlM7QUFHckJDLFdBQVMsRUFBRSxxQkFIVTtBQUlyQkMsZUFBYSxFQUFFLGlDQUpNO0FBS3JCQyxtQkFBaUIsRUFBRSxjQUxFO0FBTXJCQyxPQUFLLEVBQUU7QUFOYyxDQUF2QjtBQVNBQyxNQUFNLENBQUNDLE9BQVA7QUFJRSxpQkFBWUMsUUFBWixFQUFzQjtBQUFBOztBQUFBOztBQUFBOztBQUFBLHFDQURaVCxjQUNZOztBQUNwQixTQUFLVSxJQUFMLENBQVVELFFBQVY7QUFDQSxTQUFLRSxNQUFMLEdBQWMsSUFBZDtBQUVEOztBQVJIO0FBQUE7QUFBQSx5QkFVT0YsUUFWUCxFQVVpQjtBQUNiLFdBQUtHLFNBQUwsR0FBaUJILFFBQVEsQ0FBQ0ksYUFBVCxDQUF1QmIsY0FBdkIsQ0FBakI7QUFDQSxXQUFLYyxTQUFMLEdBQWlCLEtBQUtGLFNBQUwsQ0FBZUcsUUFBZixFQUFqQjtBQUVBLFdBQUtDLFNBQUw7QUFDRDtBQWZIO0FBQUE7QUFBQSxnQ0FpQmlDO0FBQUEsVUFBckJDLGVBQXFCLHVFQUFILENBQUc7QUFDN0IsYUFBTyxLQUFLSCxTQUFMLENBQ0pJLEdBREksQ0FDQSxlQURBLEVBRUpDLFVBRkksR0FHSkMsT0FISSxDQUdJLEtBQUdILGVBSFAsRUFJSkksWUFKSSxDQUlTLENBSlQsRUFLSkMsR0FMSSxHQU1KQyxJQU5JLENBTUMsVUFBQ0MsSUFBRDtBQUFBLGVBQVVDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjRixJQUFJLENBQUNHLEdBQUwsRUFBZCxDQUFWO0FBQUEsT0FORCxDQUFQO0FBT0Q7QUF6Qkg7QUFBQTtBQUFBLG1DQTJCaUJDLEdBM0JqQixFQTJCc0I7QUFDbEIsYUFBTyxLQUFLZCxTQUFMLENBQ0pJLEdBREksQ0FDQSxlQURBLEVBRUpXLFlBRkksQ0FFUyxVQUFVRCxHQUZuQixFQUdKRSxPQUhJLENBR0ksSUFISixFQUlKVCxZQUpJLENBSVMsQ0FKVCxFQUtKVSxJQUxJLENBS0MsT0FMRCxFQU1KUixJQU5JLENBTUMsVUFBQ0MsSUFBRDtBQUFBLGVBQVVDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjRixJQUFJLENBQUNHLEdBQUwsRUFBZCxDQUFWO0FBQUEsT0FORCxDQUFQO0FBT0Q7QUFuQ0g7QUFBQTtBQUFBLGdDQXFDYztBQUFBOztBQUNWLFdBQUtiLFNBQUwsQ0FDR0ksR0FESCxDQUNPLGVBRFAsRUFFR2MsV0FGSCxDQUVlLENBRmYsRUFHR1YsR0FISCxHQUlHQyxJQUpILENBSVEsVUFBQ0MsSUFBRCxFQUFVO0FBQ2QsYUFBSSxDQUFDYixNQUFMLEdBQWMsQ0FBQ2MsTUFBTSxDQUFDUSxJQUFQLENBQVlULElBQUksQ0FBQ0csR0FBTCxFQUFaLEVBQXdCLENBQXhCLENBQUQsR0FBOEIsQ0FBNUM7QUFDRCxPQU5ILFdBT1MsVUFBQ08sR0FBRDtBQUFBLGVBQVNDLE9BQU8sQ0FBQ0MsS0FBUixDQUFjRixHQUFkLENBQVQ7QUFBQSxPQVBUO0FBUUQ7QUE5Q0g7O0FBQUE7QUFBQSIsImZpbGUiOiIuL3NyYy9zY3JpcHRzL2ZpcmViYXNlLWFwaS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFlvdXIgd2ViIGFwcCdzIEZpcmViYXNlIGNvbmZpZ3VyYXRpb25cclxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XHJcbiAgYXBpS2V5OiBcIkFJemFTeUNuc1NWeW9WQnFqX01Mc2ptMjdJTjhyYXdaN0E2WThlWVwiLFxyXG4gIGF1dGhEb21haW46IFwibW9kdXN2ZXJzdXMtcHJvamVjdC5maXJlYmFzZWFwcC5jb21cIixcclxuICBwcm9qZWN0SWQ6IFwibW9kdXN2ZXJzdXMtcHJvamVjdFwiLFxyXG4gIHN0b3JhZ2VCdWNrZXQ6IFwibW9kdXN2ZXJzdXMtcHJvamVjdC5hcHBzcG90LmNvbVwiLFxyXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjI5NTEyMzEwODE1MlwiLFxyXG4gIGFwcElkOiBcIjE6Mjk1MTIzMTA4MTUyOndlYjo1YjA4ZmIxZDk1NzZjMWE1ZWNjMWNkXCIsXHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIHtcclxuICBfZGF0YWJhc2U7XHJcbiAgX2ZpcmViYXNlO1xyXG4gIF9jb25maWcgPSBmaXJlYmFzZUNvbmZpZztcclxuICBjb25zdHJ1Y3RvcihmaXJlYmFzZSkge1xyXG4gICAgdGhpcy5pbml0KGZpcmViYXNlKTtcclxuICAgIHRoaXMubGVuZ3RoID0gbnVsbDtcclxuICBcclxuICB9XHJcblxyXG4gIGluaXQoZmlyZWJhc2UpIHtcclxuICAgIHRoaXMuX2ZpcmViYXNlID0gZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XHJcbiAgICB0aGlzLl9kYXRhYmFzZSA9IHRoaXMuX2ZpcmViYXNlLmRhdGFiYXNlKCk7XHJcblxyXG4gICAgdGhpcy5zZXRMZW5ndGgoKTtcclxuICB9XHJcblxyXG4gIGxvYWRQb3N0cyhwYWdpbmF0aW9uSW5kZXggPSAwKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGF0YWJhc2VcclxuICAgICAgLnJlZihcIi9wb3J0Zm9saW8tMi9cIilcclxuICAgICAgLm9yZGVyQnlLZXkoKVxyXG4gICAgICAuc3RhcnRBdCgnJytwYWdpbmF0aW9uSW5kZXgpXHJcbiAgICAgIC5saW1pdFRvRmlyc3QoNClcclxuICAgICAgLmdldCgpXHJcbiAgICAgIC50aGVuKChzbmFwKSA9PiBPYmplY3QudmFsdWVzKHNuYXAudmFsKCkpKTtcclxuICB9XHJcblxyXG4gIGxvYWRQb3N0c0J5VGFnKHRhZykge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RhdGFiYXNlXHJcbiAgICAgIC5yZWYoXCIvcG9ydGZvbGlvLTIvXCIpXHJcbiAgICAgIC5vcmRlckJ5Q2hpbGQoXCJ0YWdzL1wiICsgdGFnKVxyXG4gICAgICAuZXF1YWxUbyh0cnVlKVxyXG4gICAgICAubGltaXRUb0ZpcnN0KDQpXHJcbiAgICAgIC5vbmNlKFwidmFsdWVcIilcclxuICAgICAgLnRoZW4oKHNuYXApID0+IE9iamVjdC52YWx1ZXMoc25hcC52YWwoKSkpO1xyXG4gIH1cclxuXHJcbiAgc2V0TGVuZ3RoKCkge1xyXG4gICAgdGhpcy5fZGF0YWJhc2VcclxuICAgICAgLnJlZihcIi9wb3J0Zm9saW8tMi9cIilcclxuICAgICAgLmxpbWl0VG9MYXN0KDEpXHJcbiAgICAgIC5nZXQoKVxyXG4gICAgICAudGhlbigoc25hcCkgPT4ge1xyXG4gICAgICAgIHRoaXMubGVuZ3RoID0gK09iamVjdC5rZXlzKHNuYXAudmFsKCkpWzBdICsgMTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XHJcbiAgfVxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/firebase-api.js\n");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQSIsImZpbGUiOiJqcy9wb3J0Zm9saW8tYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcG9ydGZvbGlvLmpzXCIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==