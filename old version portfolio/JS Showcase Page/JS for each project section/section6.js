// SECTION 6 INTERSECTION OBSERVER API

const observeh1s = document.querySelectorAll(".observer h1");

// DEFINE OPTIONS
const options = {
  root: null,
  threshold: 0.5,
  rootMargin: "0px",
};

// INTERSECTING FUNCTION
const bgColorChange = (entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.remove("filter");
    } else {
      e.target.classList.add("filter");
    }
  });
};

// CREATE INTERSECTION OBSERVER
const observer = new IntersectionObserver(bgColorChange, options);

// OBSERVE EVERY H1
observeh1s.forEach((h1) => observer.observe(h1));
