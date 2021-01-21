(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');

    if (window.pageYOffset > 200 && !header.classList.contains('header-mobile_open')) {
        header.classList.add('header__small');
    } else {
        header.classList.remove('header__small');
    }
});

const toggle = document.querySelector(".burger")
    .addEventListener("click", function (e) {
        const header = document.querySelector('.header');
        
        e.preventDefault();
        this.classList.toggle("active");
        header.classList.toggle('header-mobile_open');

        // if (header.classList.contains('header-mobile_open')){
        //     header.classList.remove('header-mobile_open')
        //     header.classList.add('header-mobile_closing');

        //     setTimeout(() => {
        //         header.classList.remove('header-mobile_closing');                
        //     }, 1000);
        // } else {
        //     header.classList.add('header-mobile_open');
        // }

    });


const submenuBtns = document.querySelectorAll('.submenu')

submenuBtns.forEach((el)=>{
    el.addEventListener('click', toggleSubmenu);
});


function toggleSubmenu(e) {
    if (!e.target.classList.contains('nav__submenu')) return;

    this.classList.toggle('submenu_active');
}


},{}],2:[function(require,module,exports){
"use strict";

const Firebase = require("../../scripts/firebase-api");
const db = new Firebase(firebase);
const postsContainer = document.querySelector(".cases");

const elementsData = {
  activeTag: null, // string
  activePagination: null // number
}


db.loadPosts()
  .then(renderPosts)
  .catch((err) => console.error(err));

document.querySelectorAll(".filters button").forEach((btn) => {
  btn.addEventListener("click", tagSearch);
});


function updateAllElements() {
  updateTagsElements();
  updatePaginationElements();
}

function updateTagsElements(){
  // ... https://github.com/mamedovhagani24/Projects/issues/76
}
function updatePaginationElements(){
  // ... https://github.com/mamedovhagani24/Projects/issues/87
}

function tagSearch() {
  const tag = this.textContent;

  if (tag === "all") {
    db.loadPosts()
      .then(renderPosts)
      .catch((err) => console.log(err));
  } else {
    db.loadPostsByTag(tag)
      .then(renderPosts)
      .catch((err) => console.log(err));
  }
}

function renderPosts(allPostsData) {
  const allPostsHTML = allPostsData.reduce(
    (postsHTML, postObj) => (postsHTML += returnHTMLPost(postObj)),
    ""
  );

  replacePostsIntoContainer(allPostsHTML);
  updateAllElements();
}

function replacePostsIntoContainer(postsHTML) {
  postsContainer.innerHTML = postsHTML;
}

function returnHTMLPost(post) {
  return `<div class="cases__item">
  <div class="cases__item__img">
      <img class="img-inner" src="${post.imgURL}">
  </div>
  <div class="cases__item__info">
      <div class="text-content">
          <h3 class="title-h3">${post.id} • ${post.title}</h3>
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
    this.init(firebase);
    this.length = null;
  
  }

  init(firebase) {
    this._firebase = firebase.initializeApp(firebaseConfig);
    this._database = this._firebase.database();

    this.setLength();
  }

  loadPosts(paginationIndex = 0) {
    return this._database
      .ref("/portfolio-2/")
      .orderByKey()
      .startAt(''+paginationIndex)
      .limitToFirst(4)
      .get()
      .then((snap) => Object.values(snap.val()));
  }

  loadPostsByTag(tag) {
    return this._database
      .ref("/portfolio-2/")
      .orderByChild("tags/" + tag)
      .equalTo(true)
      .limitToFirst(4)
      .once("value")
      .then((snap) => Object.values(snap.val()));
  }

  setLength() {
    this._database
      .ref("/portfolio-2/")
      .limitToLast(1)
      .get()
      .then((snap) => {
        this.length = +Object.keys(snap.val())[0] + 1;
      })
      .catch((err) => console.error(err));
  }
};

},{}]},{},[3]);
