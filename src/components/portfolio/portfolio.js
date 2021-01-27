"use strict";

const Firebase = require("../../scripts/firebase-api");
const db = new Firebase(firebase);
const postsContainer = document.querySelector(".cases");

const pageData = {
  activeTag: null, // string
  activePagination: null, // number
  elements: []
}

db.loadPosts()
  .then(prepareData)
  .catch((err) => console.error(err));

document.querySelectorAll(".filters button").forEach((btn) => {
  btn.addEventListener("click", tagSearch);
});

function updateAllElements() {
  updateTagsElements();
  updatePaginationElements();
}

function prepareData(postsArr) {
  let counter = 0;

  pageData.elements = postsArr.reduce((arr, curr)=>{
    arr[counter] = arr[counter] ?? [];

    if (arr[counter].length < 4) arr[counter].push(curr);
    else arr[++counter] = [curr];

    return arr;
  }, []);

  renderElementsByPagination();
}

function renderElementsByPagination() {
  const currentPage = pageData.activePagination ?? 0;

  renderPosts(pageData.elements[currentPage]);
}

function updateTagsElements(tag){
  document.querySelectorAll(".filters button").forEach((btn) => {
    if (btn.getAttribute('data-name') === tag) {
      btn.classList.add("selected");
    } else {
      btn.classList.remove("selected");
    }
  });
}
function updatePaginationElements(){
  // ... https://github.com/mamedovhagani24/Projects/issues/87
}

function tagSearch() {
  pageData.activeTag = this.getAttribute("data-name");

  if (pageData.activeTag === "all") {
    db.loadPosts()
      .then(prepareData)
      .catch((err) => console.log(err));
  } else {
    db.loadPostsByTag(pageData.activeTag)
      .then(prepareData)
      .catch((err) => console.log(err));
  }

  updateTagsElements(pageData.activeTag);
}

function renderPosts(allPostsData) {
  const allPostsHTML = allPostsData.reduce(
    (postsHTML, postObj) => (postsHTML += returnHTMLPost(postObj)),
    ""
  );

  replacePostsIntoContainer(allPostsHTML);
  // updateAllElements();
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
          <button class="btn btn_large">view details</button>
      </div>
  </div>
</div>`;
}
