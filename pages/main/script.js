"use strict";

import { pets as petsArray } from "../../pets.js";

// Кнопка "Make a friend"

const ourFriend = document.querySelector(".section-our");
const homeBtn = document.querySelector(".home-btn");

homeBtn.addEventListener("click", () => {
  ourFriend.scrollIntoView({
    block: "start",
    behavior: "smooth",
  });
});

// Кнопка "Get to know the rest"

const ourFriendsPage = document.querySelector(".our-btn");
ourFriendsPage.addEventListener("click", () => {
  location.href = "../pets/index.html";
});

// Меню-бургер

const burgerBtn = document.querySelector(".burger-menu");
const menu = document.querySelector(".nav");
const mask = document.querySelector(".mask");
const navMenuItem = document.querySelectorAll(".nav-menu-item");
const logo = document.querySelector(".logo2");

function openMenu() {
  burgerBtn.classList.toggle("rotate");
  menu.classList.toggle("closed");
  mask.classList.toggle("hidden");

  if (document.documentElement.scrollWidth <= 767) {
    document.querySelector("body").classList.toggle("block");
  }
}

burgerBtn.addEventListener("click", () => {
  openMenu();
});

mask.addEventListener("click", () => {
  openMenu();
});

logo.addEventListener("click", () => {
  openMenu();
});

navMenuItem.forEach((e) => e.addEventListener("click", openMenu));

// Слайдер

const preBtn = document.querySelector(".slider-btn-pre");
const nextBtn = document.querySelector(".slider-btn-next");
const pagBtnPre = document.querySelector(".pag-btn-pre");
const pagBtnNext = document.querySelector(".pag-btn-next");

const slider = document.querySelector(".slider");
const itemLeft = document.querySelector("#item-left");
const itemRight = document.querySelector("#item-right");
const itemActive = document.querySelector("#item-active");

function moveRight() {
  slider.classList.add("next-slide");
  nextBtn.removeEventListener("click", moveRight);
  preBtn.removeEventListener("click", moveLeft);
  pagBtnNext.removeEventListener("click", moveRight);
  pagBtnPre.removeEventListener("click", moveLeft);
}

function moveLeft() {
  slider.classList.add("pre-slide");
  preBtn.removeEventListener("click", moveLeft);
  nextBtn.removeEventListener("click", moveRight);
  pagBtnNext.removeEventListener("click", moveRight);
  pagBtnPre.removeEventListener("click", moveLeft);
}

function buildNewCard(obj1, obj2, obj3, side) {
  const card1 = document.createElement("div");
  card1.classList.add("card");
  card1.setAttribute("data-name", `${obj1.name}`);
  card1.innerHTML = `<img src=${obj1.img} data-name="${obj1.name}" alt="${obj1.name}">
                        <h4 class="name" data-name="${obj1.name}">${obj1.name}</h4>
                        <button class="card-btn" type="button" data-name="${obj1.name}">Learn more</button>`;

  const card2 = document.createElement("div");
  card2.classList.add("card");
  card2.setAttribute("data-name", `${obj2.name}`);
  card2.innerHTML = `<img src=${obj2.img} data-name="${obj2.name}" alt="${obj2.name}">
                        <h4 class="name" data-name="${obj2.name}">${obj2.name}</h4>
                        <button class="card-btn" type="button" data-name="${obj2.name}">Learn more</button>`;

  const card3 = document.createElement("div");
  card3.classList.add("card");
  card3.setAttribute("data-name", `${obj3.name}`);
  card3.innerHTML = `<img src=${obj3.img} data-name="${obj3.name}" alt="${obj3.name}">
                        <h4 class="name" data-name="${obj3.name}">${obj3.name}</h4>
                        <button class="card-btn" type="button" data-name="${obj3.name}">Learn more</button>`;

  side.innerHTML = "";
  side.appendChild(card1);
  side.appendChild(card2);
  side.appendChild(card3);
}

nextBtn.addEventListener("click", moveRight);
preBtn.addEventListener("click", moveLeft);
pagBtnNext.addEventListener("click", moveRight);
pagBtnPre.addEventListener("click", moveLeft);

function rand(value) {
  let res1 = Math.floor(Math.random() * value);
  let res2 = Math.floor(Math.random() * value);
  let res3 = Math.floor(Math.random() * value);

  if (res1 !== res2 && res1 !== res3 && res2 !== res3) {
    return [res1, res2, res3];
  } else {
    return rand(value);
  }
}

slider.addEventListener("animationstart", (animationEvent) => {
  let changeItem;
  if (animationEvent) {
    if (animationEvent.animationName === "move-left") {
      changeItem = itemLeft;
    } else {
      changeItem = itemRight;
    }
    let currentPetsName = [...itemActive.getElementsByClassName("name")];
    currentPetsName = currentPetsName.map((elem) => elem.dataset.name);

    let namePets = petsArray.map((elem) => elem.name);
    let generatePetsName = new Set(currentPetsName);
    generatePetsName = namePets.filter((elem) => !generatePetsName.has(elem));

    let inedexGenerate = rand(5);

    let objForCard1, objForCard2, objForCard3;

    objForCard1 = petsArray.filter(
      (elem) => elem.name === generatePetsName[inedexGenerate[0]]
    );
    objForCard2 = petsArray.filter(
      (elem) => elem.name === generatePetsName[inedexGenerate[1]]
    );
    objForCard3 = petsArray.filter(
      (elem) => elem.name === generatePetsName[inedexGenerate[2]]
    );

    objForCard1 = objForCard1[0];
    objForCard2 = objForCard2[0];
    objForCard3 = objForCard3[0];

    buildNewCard(objForCard1, objForCard2, objForCard3, changeItem);
  }
});

slider.addEventListener("animationend", (animationEvent) => {
  let itemChanged;

  if (animationEvent.animationName === "move-left") {
    slider.classList.remove("pre-slide");

    itemChanged = itemLeft;

    itemActive.innerHTML = itemLeft.innerHTML;
  } else {
    slider.classList.remove("next-slide");

    itemChanged = itemRight;

    itemActive.innerHTML = itemRight.innerHTML;
  }

  nextBtn.addEventListener("click", moveRight);
  preBtn.addEventListener("click", moveLeft);
  pagBtnNext.addEventListener("click", moveRight);
  pagBtnPre.addEventListener("click", moveLeft);
});

// Попап

const popupBg = document.querySelector(".popup-bg");
const popupWrapper = document.querySelector(".popup-wrapper");
const closeBtn = document.querySelector(".close-btn");
const card = document.querySelectorAll(".card");
const popup = document.querySelector(".popup");
let foundPet;

closeBtn.addEventListener("click", () => {
  popupBg.classList.remove("show-popup");
  document.querySelector("body").classList.remove("block");
});

popupBg.addEventListener("click", (event) => {
  if (event.target === popupBg || event.target === popupWrapper) {
    popupBg.classList.remove("show-popup");

    document.querySelector("body").classList.remove("block");
  }
});

slider.addEventListener("click", (event) => {
  if (
    event.target.classList.contains("card") ||
    event.target.classList.contains("card-btn") ||
    event.target.tagName === "IMG" ||
    event.target.classList.contains("name")
  ) {
    popupBg.classList.add("show-popup");

    document.querySelector("body").classList.add("block");

    searchPet(event.target.dataset.name);
    createPopup(foundPet);
  }
});

popup.addEventListener("mouseenter", () => {
  closeBtn.style.backgroundColor = "transparent";
  closeBtn.style.border = "2px solid #FDDCC4";
});

popup.addEventListener("mouseleave", () => {
  closeBtn.style.backgroundColor = "#FDDCC4";
  closeBtn.style.border = "transparent";
});

function searchPet(name) {
  let pet = petsArray.filter((elem) => elem.name === name);
  foundPet = pet[0];
}

function createPopup(obj) {
  popup.childNodes[1].style.backgroundImage = `url(${obj.img})`;
  popup.childNodes[3].innerHTML = `<h3 class="popup-title">${obj.name}</h3>
    <h4 class="popup-subtitle">${obj.type} - ${obj.breed}</h4>
    <div class="popup-text">`;
  document.querySelector(".popup-text").innerHTML = `<p>${obj.description}</p>
    <li><span class="bold-text">Age:</span> <span>${obj.age}</span></li>
    <li><span class="bold-text">Inoculations:</span> <span>${obj.inoculations}</span></li>
    <li><span class="bold-text">Diseases:</span> <span>${obj.diseases}</span></li>
    <li><span class="bold-text">Parasites:</span> <span>${obj.parasites}</span></li>`;
}
