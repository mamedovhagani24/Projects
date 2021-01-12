(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');

    if (window.pageYOffset > 200) {
        header.classList.add('header__small');
    } else {
        header.classList.remove('header__small');
    }
});

const toggle = document.querySelector(".burger")
    .addEventListener("click", function (e) {
        const header__burger = document.querySelector('.header__menu')

        e.preventDefault();
        this.classList.toggle("active");
        header__burger.classList.toggle('active');

    });


const portfolio = document.querySelector('.portfolio')

portfolio.addEventListener('click', (e) => {
    const header__submenu = document.querySelector('.header__submenu')

    header__submenu.classList.toggle('active')
})

},{}],2:[function(require,module,exports){
"use strict";

const Firebase = require("../../scripts/firebase-api");

const db = new Firebase(firebase);

const cases = document.querySelector(".cases");

db.loadPosts()
  .then(renderPosts)
  .catch((err) => console.log(err));

document.querySelectorAll('.filters button').forEach((btn)=>{
  btn.addEventListener('click', tagSearch);
});


function renderPosts(posts) {
  clearContainer();

  posts.forEach((post) => {
    const item = returnHTMLPost(post);
    console.log(post)
    cases.innerHTML = cases.innerHTML + item;
  });
}

function clearContainer() {
  cases.innerHTML = '';
}

function tagSearch() {
  const tag = this.textContent;

  db.getPostsByTag(tag)
  .then(renderPosts)
  .catch((err) => console.log(err));
}

function returnHTMLPost(post) {
  return `<div class="cases__item">
  <div class="cases__item__img">
      <img class="img-inner" src="${post.imgURL}">
  </div>
  <div class="cases__item__info">
      <div class="text-content">
          <h3 class="title-h3">${post.title}</h3>
          <p class="description">${post.description}</p>
      </div>
      <div class="links">
          <div class="links__link">
              <a class="links__link__url" href="https://${post.link}">
                  <div class="link-img"></div><span>${post.link}</span>
              </a>
          </div>
          <button class="btn btn_secondary btn_large">view details</button>
      </div>
  </div>
</div>`;
}
},{"../../scripts/firebase-api":4}],3:[function(require,module,exports){
require("./components/header/header");
require('./components/portfolio/portfolio');

},{"./components/header/header":1,"./components/portfolio/portfolio":2}],4:[function(require,module,exports){
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnsSVyoVBqj_MLsjm27IN8rawZ7A6Y8eY",
  authDomain: "modusversus-project.firebaseapp.com",
  projectId: "modusversus-project",
  storageBucket: "modusversus-project.appspot.com",
  messagingSenderId: "295123108152",
  appId: "1:295123108152:web:5b08fb1d9576c1a5ecc1cd",
};

module.exports = class {
  _database;
  _firebase;
  _config = firebaseConfig;

  constructor(firebase) {
    this.posts = [];

    this.init(firebase);
  }

  init(firebase) {
    this._firebase = firebase.initializeApp(firebaseConfig);
    this._database = this._firebase.database();
  }

  loadPosts() {
    return this._database
      .ref("/portfolio")
      .limitToFirst(4)
      .get()
      .then(snap => Object.values(snap.val()));
  }

  getPostsByTag(tag) {
    return this._database
      .ref("/portfolio")
      .orderByChild("tags/"+tag)
      .equalTo(true)
      .limitToLast(4)
      .once("value")
      .then(snap => Object.values(snap.val()));
  }
};

},{}]},{},[3]);
