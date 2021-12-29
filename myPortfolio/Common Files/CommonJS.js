// SHARED JS CODE
"use strict";
console.log(
  "For best experience, please open in chrome and use desktop/tablet. Thank you!"
);

// ------ DARK MODE TOGGLE ------
const darkModeBTN = document.querySelector(".darkModeBTN");
const body = document.body;

// EVENTLISTENERS AND FUNCTIONS
darkModeBTN.addEventListener("click", () => {
  // CHANGE PAGE THEME COLOR
  body.classList.toggle("darkMode");
  // CHANGE DARK MODE BTN ICON
  darkModeBTN.classList.toggle("fa-sun");
});

// ------ SHRINK MENU BAR ------
const menuBars = document.querySelector(".fa-bars");
const nav = document.querySelector("nav");
const ul = document.querySelector("nav ul");
const hero = document.querySelector(".hero");

// EVENTLISTENERS AND FUNCTIONS
menuBars.addEventListener("click", () => {
  menuBars.classList.toggle("barsRotate");
  nav.classList.toggle("shrinkMenu");
  ul.classList.toggle("hideList");
  hero.classList.toggle("marginTop");
});

// ------ NAVBAR FIXED ON SCROLL ------
const navOptions = {
  root: null,
  threshold: 0.1,
  rootMargin: "0px",
};

const navObserver = new IntersectionObserver(function (entries) {
  entries.forEach((e) => {
    // ADD NAVBAR FIX
    if (!e.isIntersecting) {
      nav.classList.add("fixed");
      menuBars.classList.add("barsRotate");
      nav.classList.add("shrinkMenu");
      ul.classList.add("hideList");
      hero.classList.add("marginTop");
      // REMOVE NAVBAR FIX
    } else if (e.isIntersecting) {
      nav.classList.remove("fixed");
      menuBars.classList.remove("barsRotate");
      nav.classList.remove("shrinkMenu");
      ul.classList.remove("hideList");
      hero.classList.remove("marginTop");
    }
  });
}, navOptions);

navObserver.observe(hero);

// PAGE GUIDE

if (document.querySelector(".pageGuide")) {
  const pageGuide = document.querySelector(".pageGuide");

  pageGuide.addEventListener("click", () => {
    pageGuide.textContent = pageGuide.textContent.includes("See")
      ? "Hide Page Guide"
      : "See Page Guide";
  });
}

// ------ FOOTER COPY TO CLIPBOARD ------
// VARIABLES
const contacts = document.querySelectorAll("footer span");

// COPY TEXT FUNCTION
const copy = (e) => {
  const span = e.target.closest("span");
  navigator.clipboard.writeText(span.textContent);
};

// EVENT LISTENER
contacts.forEach((contact) => contact.addEventListener("click", copy));
