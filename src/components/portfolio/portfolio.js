"use strict";

const Firebase = require("../../scripts/firebase-api");
const db = new Firebase(firebase);
const postsContainer = document.querySelector(".cases");
const paginationContainer = document.querySelector(".pagination");

const pageData = {
  activeTag: "all", // string
  activePagination: 0, // number
  elements: [],
};

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

  pageData.elements = postsArr.reduce((arr, curr) => {
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

  document.querySelectorAll(".pagination a").forEach((link) => {
    link.addEventListener("click", handlePaginationChange);
  });
}

function updateTagsElements() {
  document.querySelectorAll(".filters button").forEach((btn) => {
    if (btn.getAttribute("data-name") === pageData.activeTag) {
      btn.classList.add("selected");
    } else {
      btn.classList.remove("selected");
    }
  });
}

function updatePaginationElements() {
  const allPaginationButtons = pageData.elements.reduce(
    (allButtons, currentButton, index) =>
      (allButtons += returnPaginationButton(index)),
    ""
  );

  replaceElementsIntoContainer(
    paginationContainer,
    returnPaginationArrowButtons("left") +
      allPaginationButtons +
      returnPaginationArrowButtons("right")
  );
}

function tagSearch() {
  pageData.activeTag = this.getAttribute("data-name");
  pageData.activePagination = 0;

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

function handlePaginationChange() {
  let dataPage = this.getAttribute("data-page");

  if (dataPage === 'left') dataPage = --pageData.activePagination;
  else if (dataPage === 'right') dataPage = ++pageData.activePagination;
  
  if (+dataPage < 0) pageData.activePagination = 0;
  else if (+dataPage >= pageData.elements.length) pageData.activePagination = pageData.elements.length-1;
  else pageData.activePagination = +dataPage;

  renderElementsByPagination();
}

function renderPosts(allPostsData) {
  const allPostsHTML = allPostsData.reduce(
    (postsHTML, postObj) => (postsHTML += returnHTMLPost(postObj)),
    ""
  );

  replaceElementsIntoContainer(postsContainer, allPostsHTML);
  updateAllElements();
}

function replaceElementsIntoContainer(container, html) {
  container.innerHTML = html;
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
          <button class="btn btn_large">view details</button>
      </div>
  </div>
</div>`;
}

function returnPaginationButton(page) {
  return `<a href="#" data-page="${page}">
            <div class="pagination__item ${page === pageData.activePagination ? "page-active" : ""}">${page + 1}</div>
          </a>`;
}

function returnPaginationArrowButtons(dir) {
  return `<a href="#" data-page="${dir}">
            <div class="pagination__item ${dir}-arrow">
                <i class="fa fa-chevron-${dir}"></i>
            </div>
          </a>`;
}
