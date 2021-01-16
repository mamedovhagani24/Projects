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
