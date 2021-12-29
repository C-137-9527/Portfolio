// JS FOR HOME PAGE ONLY

// ------------------ PAGE LOADING EFFECT ------------------
const html = document.querySelector("html");
const pageLoading = document.querySelector(".pageLoading");
const navigation = document.querySelector("nav");
const heroSection = document.querySelector(".hero");
const introSection = document.querySelector(".intro");

setTimeout(() => {
  pageLoading.style.display = "none";
  html.style.overflow = "visible";
  navigation.classList.add("navigationFadIn");
  heroSection.classList.add("heroFadeIn");
  introSection.classList.add("introFadeIn");
}, 3000);

// ------------------ SMOOTH SCROLL ------------------
navigation.addEventListener("click", (e) => {
  if (e.target.tagName !== "LI") return;

  // GET SECTION NAME AND POSITION
  const section = document.getElementById(
    `${e.target.textContent.toLowerCase()}`
  );
  const sectionPosition = section.getBoundingClientRect();

  // ACCOUNT FOR NAVBAR HEIGHT
  const navHeight = navigation.getBoundingClientRect().height + 30;

  // SCROLL TO TARGET
  window.scrollTo({
    left: sectionPosition.left + window.pageXOffset - navHeight,
    top: sectionPosition.top + window.pageYOffset - navHeight,
    behavior: "smooth",
  });
});

// ------------------ HERO BTN BITCOIN ANIMATION ------------------
// VARIABLES
const heroButton = document.querySelector(".hero button");
const giftBTNContainer = document.querySelector(".giftBTNContainer");

let bitcoinArr = [];
let i = 0; // LOOP BITCOIN ARRAY

// BITCOIN DROP ANIMATION
const bitcoinDrop = () => {
  // CREATE BITCOIN ICON
  const bitcoin = document.createElement("i");
  bitcoin.classList.add("fab", "fa-bitcoin");
  giftBTNContainer.append(bitcoin);
  // GET BITCOINS
  const bitcoins = document.querySelectorAll(".fa-bitcoin");
  // ADD RANDOM ANIMATION (SMALL SCREEN)
  if (window.innerWidth < 768) {
    bitcoins[i].style.transform = `rotate(${
      Math.random() * 100 - 30
    }deg) scale(1) translate(${Math.random() * 70 - 35}vw, ${
      Math.random() * 50 - 25
    }vh)`;
  }
  // MEDIUM+ SCREEN
  if (window.innerWidth >= 768) {
    bitcoins[i].style.transform = `rotate(${
      Math.random() * 100 - 30
    }deg) scale(1) translate(${Math.random() * 60 - 30}vw, ${
      Math.random() * 60 - 30
    }vh)`;
  }
  bitcoins[i].classList.add("bitcoinOpacity");
  // EACH CLICK SELECT THE NEXT ELEMENT IN ARRAY
  i++;
};

// EVENT LISTENER
heroButton.addEventListener("click", bitcoinDrop);

// ------------------ PEEKING CAT ------------------
// VAIRABLES
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
