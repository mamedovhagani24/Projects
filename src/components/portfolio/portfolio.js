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
  if (tag === 'all') {
    db.loadPosts()
    .then(renderPosts)
    .catch((err) => console.log(err));
  
  } else {
    db.getPostsByTag(tag)
    .then(renderPosts)
    .catch((err) => console.log(err));
    
  }
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