"use strict";

/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */

/******/
(() => {
  // webpackBootstrap

  /******/
  "use strict";
  /******/

  var __webpack_modules__ = {
    /***/
    "./src/js/modules/navScroll.js":
    /*!*************************************!*\
      !*** ./src/js/modules/navScroll.js ***!
      \*************************************/

    /***/
    (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\r\n  const link = document.querySelectorAll('a');\r\n  const anchor = document.querySelector('.arrow-anchor');\r\n  const headerRow = document.querySelector('.header-row');\r\n  let scrollPos = 0;\r\n  window.addEventListener('scroll', function () {\r\n    let i = window.pageYOffset;\r\n    let e = window.innerHeight;\r\n    let documentScrollHeight = document.documentElement.scrollHeight;\r\n    if ((document.body.getBoundingClientRect()).top > scrollPos && i >= e - i || i + e == documentScrollHeight) {\r\n      anchor.classList.add('anchor-active');\r\n    } else {\r\n      anchor.classList.remove('anchor-active');\r\n    }\r\n    scrollPos = (document.body.getBoundingClientRect()).top;\r\n  });\r\n\r\n  function smoothScroll(targetSelector) {\r\n    const whereTo = document.querySelector(targetSelector);\r\n    let startPosition = window.pageYOffset;\r\n    let targetPosition = whereTo.offsetTop - 100;\r\n    let distance = targetPosition - startPosition;\r\n    let duration = 1000;\r\n    let start = null;\r\n    window.requestAnimationFrame(step);\r\n\r\n    function step(timestamp) {\r\n      if (!start) start = timestamp;\r\n      let progress = timestamp - start;\r\n      window.scrollTo(0, easing(progress, startPosition, distance, duration));\r\n      if (progress < duration) {\r\n        window.requestAnimationFrame(step);\r\n      }\r\n    }\r\n  }\r\n\r\n  function easing(t, b, c, d) {\r\n    return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;\r\n  }\r\n  link.forEach(item => {\r\n    item.addEventListener('click', function (e) {\r\n      e.preventDefault();\r\n      let targetPosition = item.getAttribute(`${'href'}`);\r\n      if (item.hasAttribute('data-link') ) {\r\n        if(!item.hasAttribute('data-noTitleChange')) {\r\n          document.querySelector('title').textContent = `BeautyWay - ${item.textContent}`;\r\n        } else {\r\n          document.querySelector('title').textContent = `BeautyWay – салон-парикмахерская`;\r\n        }\r\n      \r\n        smoothScroll(targetPosition);\r\n      }\r\n      if (item.hasAttribute('data-delay')) {\r\n        setTimeout(() => {\r\n          smoothScroll(targetPosition);\r\n        }, 0);\r\n      }\r\n    });\r\n  });\r\n}\n\n//# sourceURL=webpack://test-my-28.07.2022/./src/js/modules/navScroll.js?");
      /***/
    },

    /***/
    "./src/js/modules/s0_header.js":
    /*!*************************************!*\
      !*** ./src/js/modules/s0_header.js ***!
      \*************************************/

    /***/
    (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _script_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../script.js */ \"./src/js/script.js\");\n\r\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\r\n  const mobileWrapper = document.querySelector('.mobile-wrapper');\r\n  const header = document.querySelector('.header');\r\n  const mobileTopOffset = header.getBoundingClientRect().height;\r\n\r\n  function mobileOffset() {\r\n    mobileWrapper.style.marginTop = mobileTopOffset + 'px';\r\n  }\r\n  mobileOffset();\r\n  window.addEventListener('resize', () => {\r\n    mobileOffset();\r\n  });\r\n  const BurgerButon = document.querySelector('.header-burgerButon');\r\n  const mobileRow = document.querySelector('.mobile-row ');\r\n  BurgerButon.addEventListener('click', () => {\r\n    BurgerButon.classList.toggle('burger-active');\r\n    mobileRow.classList.toggle('mobile-show');\r\n    mobileWrapper.classList.toggle('mobile-background');\r\n    if (BurgerButon.classList.contains('burger-active')) {\r\n      document.body.classList.add('lock');\r\n    } else {\r\n      (0,_script_js__WEBPACK_IMPORTED_MODULE_0__.offsetPadding)();\r\n    }\r\n  });\r\n\r\n  function hideMibileMenu() {\r\n    mobileRow.classList.remove('mobile-show');\r\n    mobileWrapper.classList.remove('mobile-background');\r\n    BurgerButon.classList.remove('burger-active');\r\n  }\r\n  mobileRow.addEventListener('click', (e) => {\r\n    if (e.target == mobileRow) {\r\n      hideMibileMenu();\r\n      (0,_script_js__WEBPACK_IMPORTED_MODULE_0__.offsetPadding)();\r\n    }\r\n  });\r\n  const mobileItem = document.querySelectorAll('.mobile-item ');\r\n  mobileItem.forEach(item => {\r\n    item.addEventListener('click', () => {\r\n      setTimeout(() => {\r\n        hideMibileMenu();\r\n        (0,_script_js__WEBPACK_IMPORTED_MODULE_0__.offsetPadding)();\r\n      }, 1000);\r\n    });\r\n  });\r\n}\n\n//# sourceURL=webpack://test-my-28.07.2022/./src/js/modules/s0_header.js?");
      /***/
    },

    /***/
    "./src/js/modules/s1_section.js":
    /*!**************************************!*\
      !*** ./src/js/modules/s1_section.js ***!
      \**************************************/

    /***/
    (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _script_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../script.js */ \"./src/js/script.js\");\n\r\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\r\n  const modalWrapper = document.querySelector('.modal-wrapper ');\r\n  const showForm = document.querySelectorAll('.show-form ');\r\n  const modalCancelButton = document.querySelector('.modal-cancelButton');\r\n  const modalButton = document.querySelector('.modal-button ');\r\n  const modalTextarea = document.querySelector('.modal-textarea ');\r\n  const modalInput = document.querySelectorAll('.modal-input ');\r\n  showForm.forEach(item => {\r\n    item.addEventListener('click', () => {\r\n      modalWrapper.classList.add('showModalWindow');\r\n      if (item.hasAttribute('data-buttons7')) {\r\n        (0,_script_js__WEBPACK_IMPORTED_MODULE_0__.addOffsetPadding)(false);\r\n      } else {\r\n        (0,_script_js__WEBPACK_IMPORTED_MODULE_0__.addOffsetPadding)();\r\n      }\r\n    });\r\n  });\r\n  [modalCancelButton, modalButton, modalWrapper].forEach(item => {\r\n    item.addEventListener('click', (e) => {\r\n      if (e.target == modalWrapper || item == modalButton || item == modalCancelButton) {\r\n        modalWrapper.classList.remove('showModalWindow');\r\n        (0,_script_js__WEBPACK_IMPORTED_MODULE_0__.offsetPadding)();\r\n      }\r\n      if (item == modalButton) {\r\n        modalInput.forEach(item => {\r\n          item.value = '';\r\n        });\r\n        modalTextarea.value = '';\r\n      }\r\n    });\r\n  });\r\n}\n\n//# sourceURL=webpack://test-my-28.07.2022/./src/js/modules/s1_section.js?");
      /***/
    },

    /***/
    "./src/js/modules/s4_portfolio.js":
    /*!****************************************!*\
      !*** ./src/js/modules/s4_portfolio.js ***!
      \****************************************/

    /***/
    (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _script_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../script.js */ \"./src/js/script.js\");\n\r\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\r\n\r\n  const s4Item = document.querySelectorAll('.s4-item ');\r\n  const s4GalleryItem = document.querySelectorAll('.s4-gallery__item');\r\n  const s4Gallery = document.querySelector('.s4-gallery');\r\n  const s4ButtonPrev = document.querySelector('.s4-button__prev ');\r\n  const s4ButtonCancel = document.querySelector('.s4-button__cancel');\r\n  const s4ButtonNext = document.querySelector('.s4-button__next');\r\n  let SlideIndex = 1;\r\n  s4Item.forEach((item, i) => {\r\n    item.addEventListener('click', () => {\r\n      s4Gallery.classList.add('s4-gallery__show');\r\n      s4GalleryItem[i].classList.add('s4-show__galleryImage');\r\n      SlideIndex = i + 1;\r\n      (0,_script_js__WEBPACK_IMPORTED_MODULE_0__.addOffsetPadding)();\r\n    });\r\n  });\r\n\r\n  function plusSlides(n) {\r\n    showSlides(SlideIndex += n);\r\n  }\r\n\r\n  function showSlides(n) {\r\n    if (n > s4GalleryItem.length) {\r\n      SlideIndex = 1;\r\n    }\r\n    if (n < 1) {\r\n      SlideIndex = s4GalleryItem.length;\r\n    }\r\n    s4GalleryItem.forEach(item => {\r\n      item.classList.remove('s4-show__galleryImage');\r\n      s4GalleryItem[SlideIndex - 1].classList.add('s4-show__galleryImage');\r\n    });\r\n  }\r\n  s4ButtonNext.addEventListener('click', () => {\r\n    plusSlides(1);\r\n  });\r\n  s4ButtonPrev.addEventListener('click', () => {\r\n    plusSlides(-1);\r\n  });\r\n  [s4Gallery, s4ButtonCancel].forEach(item => {\r\n    item.addEventListener('click', (e) => {\r\n      if (e.target == s4Gallery || item == s4ButtonCancel) {\r\n        s4Gallery.classList.remove('s4-gallery__show');\r\n        s4GalleryItem.forEach(item => {\r\n          item.classList.remove('s4-show__galleryImage');\r\n          setTimeout(() => {\r\n            (0,_script_js__WEBPACK_IMPORTED_MODULE_0__.offsetPadding)();\r\n          }, 200);\r\n        });\r\n      }\r\n    });\r\n  });\r\n}\n\n//# sourceURL=webpack://test-my-28.07.2022/./src/js/modules/s4_portfolio.js?");
      /***/
    },

    /***/
    "./src/js/modules/s5_team.js":
    /*!***********************************!*\
      !*** ./src/js/modules/s5_team.js ***!
      \***********************************/

    /***/
    (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\r\n  const s5_accordTitle = document.querySelectorAll('.s5-accord__title');\r\n  const s5_rightImage = document.querySelectorAll('.s5-right__image');\r\n  s5_accordTitle.forEach((item, i) => {\r\n    s5_accordTitle[0].nextElementSibling.style.maxHeight = s5_accordTitle[0].nextElementSibling.scrollHeight + 'px';\r\n    s5_accordTitle[0].classList.add('accord-active');\r\n    s5_rightImage[0].classList.add('accord-active');\r\n    item.addEventListener('click', function () {\r\n      s5_accordTitle.forEach(item => {\r\n        item.nextElementSibling.style.maxHeight = 0 + 'px';\r\n        item.classList.remove('accord-active');\r\n      });\r\n      this.classList.toggle('accord-active');\r\n      if (this.classList.contains('accord-active')) {\r\n        this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 'px';\r\n      } else {\r\n        this.nextElementSibling.style.maxHeight = '0px';\r\n      }\r\n      s5_rightImage.forEach(item => {\r\n        item.classList.remove('accord-active');\r\n      });\r\n      s5_rightImage[i].classList.add('accord-active');\r\n    });\r\n  });\r\n}\n\n//# sourceURL=webpack://test-my-28.07.2022/./src/js/modules/s5_team.js?");
      /***/
    },

    /***/
    "./src/js/modules/s8_tabs-price.js":
    /*!*****************************************!*\
      !*** ./src/js/modules/s8_tabs-price.js ***!
      \*****************************************/

    /***/
    (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(triggerSelector, contentSelector, activeClass) {\r\n  triggerSelector = document.querySelectorAll('.s8-tab__title');\r\n  contentSelector = document.querySelectorAll('.s8-tab__column');\r\n\r\n  function ShowTab(i = 0) { \r\n    contentSelector.forEach(item => {\r\n      item.classList.remove(activeClass);\r\n    });\r\n    contentSelector[i].classList.add(activeClass);\r\n    triggerSelector.forEach(item => {\r\n      item.classList.remove(activeClass);\r\n    });\r\n    triggerSelector[i].classList.add(activeClass);\r\n  }\r\n  ShowTab();\r\n  triggerSelector.forEach((item, i) => {\r\n    item.addEventListener('click', () => {\r\n      ShowTab(i);\r\n    });\r\n  });\r\n}\n\n//# sourceURL=webpack://test-my-28.07.2022/./src/js/modules/s8_tabs-price.js?");
      /***/
    },

    /***/
    "./src/js/modules/s9_comments.js":
    /*!***************************************!*\
      !*** ./src/js/modules/s9_comments.js ***!
      \***************************************/

    /***/
    (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\r\n  const s9RequestRow = document.querySelector('.s9-request__row');\r\n  const s9ButtonItem = document.querySelectorAll('.s9-button__item');\r\n  let rowWidth = getComputedStyle(s9RequestRow).width;\r\n  let offset = (+rowWidth.replace(/\\D/g, ''));\r\n  s9ButtonItem.forEach((item, i) => {\r\n    let slideTo = i;\r\n    item.addEventListener('click', () => {\r\n      s9RequestRow.style.transform = `translate(-${offset * slideTo}px)`;\r\n      s9ButtonItem.forEach(item => {\r\n        item.classList.remove('s9-active');\r\n        s9ButtonItem[i].classList.add('s9-active');\r\n      });\r\n    });\r\n  });\r\n} //\n\n//# sourceURL=webpack://test-my-28.07.2022/./src/js/modules/s9_comments.js?");
      /***/
    },

    /***/
    "./src/js/script.js":
    /*!**************************!*\
      !*** ./src/js/script.js ***!
      \**************************/

    /***/
    (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addOffsetPadding\": () => (/* binding */ addOffsetPadding),\n/* harmony export */   \"offsetPadding\": () => (/* binding */ offsetPadding)\n/* harmony export */ });\n/* harmony import */ var _modules_navScroll_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/navScroll.js */ \"./src/js/modules/navScroll.js\");\n/* harmony import */ var _modules_s0_header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/s0_header.js */ \"./src/js/modules/s0_header.js\");\n/* harmony import */ var _modules_s1_section_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/s1_section.js */ \"./src/js/modules/s1_section.js\");\n/* harmony import */ var _modules_s4_portfolio_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/s4_portfolio.js */ \"./src/js/modules/s4_portfolio.js\");\n/* harmony import */ var _modules_s5_team_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/s5_team.js */ \"./src/js/modules/s5_team.js\");\n/* harmony import */ var _modules_s8_tabs_price_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/s8_tabs-price.js */ \"./src/js/modules/s8_tabs-price.js\");\n/* harmony import */ var _modules_s9_comments_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/s9_comments.js */ \"./src/js/modules/s9_comments.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n//компенсация сдвига\r\nlet marginOffset = window.innerWidth - document.body.clientWidth;\r\nfunction offsetPadding() {\r\n  setTimeout(() => {\r\n    document.body.style.marginRight = 0 + 'px';\r\n    document.body.classList.remove('lock');\r\n    //для якоря\r\n    document.querySelector('.arrow-anchor').style.display = '';\r\n  }, 300);\r\n}\r\nfunction addOffsetPadding(dataButtonS7 = true) {\r\n  if (dataButtonS7 == false) {\r\n    console.log(dataButtonS7);\r\n    document.body.style.marginRight = 0 + 'px';\r\n  } else {\r\n    document.body.style.marginRight = marginOffset + 'px';\r\n    //для якоря\r\n    document.querySelector('.arrow-anchor').style.display = 'none';\r\n    document.body.classList.add('lock');\r\n  }\r\n}\r\nwindow.addEventListener('DOMContentLoaded', () => {\r\n  //вызываем\r\n  (0,_modules_navScroll_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  (0,_modules_s0_header_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n  (0,_modules_s1_section_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n  (0,_modules_s4_portfolio_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n  (0,_modules_s5_team_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n  (0,_modules_s8_tabs_price_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])('.s8-tab__title', '.s8-tab__column', 's8-tab__active');\r\n  (0,_modules_s9_comments_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\n});\n\n//# sourceURL=webpack://test-my-28.07.2022/./src/js/script.js?");
      /***/
    }
    /******/

  };
  /************************************************************************/

  /******/
  // The module cache

  /******/

  var __webpack_module_cache__ = {};
  /******/

  /******/
  // The require function

  /******/

  function __webpack_require__(moduleId) {
    /******/
    // Check if module is in cache

    /******/
    var cachedModule = __webpack_module_cache__[moduleId];
    /******/

    if (cachedModule !== undefined) {
      /******/
      return cachedModule.exports;
      /******/
    }
    /******/
    // Create a new module (and put it into the cache)

    /******/


    var module = __webpack_module_cache__[moduleId] = {
      /******/
      // no module.id needed

      /******/
      // no module.loaded needed

      /******/
      exports: {}
      /******/

    };
    /******/

    /******/
    // Execute the module function

    /******/

    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    /******/

    /******/
    // Return the exports of the module

    /******/


    return module.exports;
    /******/
  }
  /******/

  /************************************************************************/

  /******/

  /* webpack/runtime/define property getters */

  /******/


  (() => {
    /******/
    // define getter functions for harmony exports

    /******/
    __webpack_require__.d = (exports, definition) => {
      /******/
      for (var key in definition) {
        /******/
        if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
          /******/
          Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key]
          });
          /******/
        }
        /******/

      }
      /******/

    };
    /******/

  })();
  /******/

  /******/

  /* webpack/runtime/hasOwnProperty shorthand */

  /******/


  (() => {
    /******/
    __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
    /******/

  })();
  /******/

  /******/

  /* webpack/runtime/make namespace object */

  /******/


  (() => {
    /******/
    // define __esModule on exports

    /******/
    __webpack_require__.r = exports => {
      /******/
      if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/
        Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module'
        });
        /******/
      }
      /******/


      Object.defineProperty(exports, '__esModule', {
        value: true
      });
      /******/
    };
    /******/

  })();
  /******/

  /************************************************************************/

  /******/

  /******/
  // startup

  /******/
  // Load entry module and return exports

  /******/
  // This entry module is referenced by other modules so it can't be inlined

  /******/


  var __webpack_exports__ = __webpack_require__("./src/js/script.js");
  /******/

  /******/

})();