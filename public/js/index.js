(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const Slider = require("./scripts/slider");


const header = require('./scripts/header.js');


module.export = header
},{"./scripts/header.js":2}],2:[function(require,module,exports){
'use strict'


window.addEventListener('scroll', () => {
    const header = document.querySelector('.header')

    if (window.pageYOffset > 200) {
        header.classList.add('header__small')
    } else {
        header.classList.remove('header__small')
    }
})




let toggle = document.querySelector(".burger");
toggleHandler(toggle)


function toggleHandler(toggle) {
    toggle.addEventListener("click", function (e) {
        e.preventDefault();

            if (this.classList.contains('active')) {
                this.classList.remove("active")
            } else {
                this.classList.add("active");
            }
     });
}
},{}]},{},[1]);
