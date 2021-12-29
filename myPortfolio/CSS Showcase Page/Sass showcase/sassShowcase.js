// -------------- SASS JS CODE --------------

// ------ SHRINK MENU BAR ------
// VARIABLES
const menuBars = document.querySelector(".fa-bars");
const nav = document.querySelector(".navigation");
const ul = document.querySelector("nav ul");

// EVENTLISTENERS AND FUNCTIONS
menuBars.addEventListener("click", () => {
  menuBars.classList.toggle("barsRotate");
  nav.classList.toggle("shrinkMenu");
  ul.classList.toggle("hideList");
});

// ------ NAVBAR FIXED ON SCROLL ------
// VARIABLES
const hero = document.querySelector(".hero");
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
      // REMOVE NAVBAR FIX
    } else if (e.isIntersecting) {
      nav.classList.remove("fixed");
    }
  });
}, navOptions);

navObserver.observe(hero);

// ------ FOOTER COPY TO CLIPBOARD ------
// VARIABLES
const contacts = document.querySelectorAll("footer span");

// COPY TEXT FUNCTION
const copy = (e) => {
  navigator.clipboard.writeText(e.target.textContent);
};

// EVENT LISTENER
contacts.forEach((contact) => contact.addEventListener("click", copy));

// ------------------ PEEKING CAT ------------------
// VAIRABLES
const body = document.body;
const cat = document.querySelector(".cat");
const intro = document.querySelector(".intro");

// HIDE CAT FUNCTION
const hideCat = (e) => {
  // GET MOUSE POSITION RELATIVE TO THE INTRO SECTION
  const mousePositionY = e.clientY;
  const introTop = intro.getBoundingClientRect().top;

  // ON SMALL SCREEN ONLY
  if (window.innerWidth < 768) {
    // MOUSE CLOSE TO TOP SIDE OF THE INTRO SECTION
    if (Math.abs(introTop - mousePositionY) < 100) {
      // HIDE CAT
      cat.classList.add("hideCat");
    } else {
      // SHOW CAT
      cat.classList.remove("hideCat");
    }
  }
};
// EVENT LISTENER
body.addEventListener("mousemove", hideCat);
