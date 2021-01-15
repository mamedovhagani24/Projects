"use strict";

const Firebase = require("../../scripts/firebase-api");

const db = new Firebase(firebase);

const cases = document.querySelector(".cases");


setTimeout(() => {
  const page = +getCurrentPaginationPage();
  
  if (page !== undefined){
    db.loadPosts(page)
      .then(renderPosts)
      .catch((err) => console.error(err));}
}, 1000);


document.querySelectorAll(".filters button").forEach((btn) => {
  btn.addEventListener("click", tagSearch);
});

async function getlength() {
  return await db.dataLength;
}

function renderPosts(posts) {
  clearContainer();

  posts.forEach((post) => {
    const item = returnHTMLPost(post);
    cases.innerHTML = cases.innerHTML + item;
  });
}

function clearContainer() {
  cases.innerHTML = "";
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

function returnHTMLPaginationLink(index) {
  return `<a href="#">
            <div class="pagination__item page-active">${i}</div>
          </a>`;
}

function getCurrentPaginationPage() {
  return returnObjectFromGETQuery(window.location.search)?.page;
}

function returnObjectFromGETQuery(query) {
  return query
    .replace("?", "")
    .split("&")
    .reduce((obj, str) => {
      const arr = str.split("=");
      obj[arr[0]] = arr[1];
      return obj;
    }, {});
}
