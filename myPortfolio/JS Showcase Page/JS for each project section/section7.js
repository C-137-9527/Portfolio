// SECTION 7 ANIMATION

const startAnimation = document.querySelector(".jsAnimation h1");
const blocksContainer = document.querySelector(".blocksContainer");

// ANIMATION FUNCTION
const blocks = () => {
  // FADE AWAY HEADING
  startAnimation.classList.add("fadeAway");

  for (let i = 0; i < 150; i++) {
    // CREATE BLOCKS
    blocksContainer.innerHTML += `<div class='block' style='--i: ${i}'></div>`;
  }
};

// EVENT LISTENER
startAnimation.addEventListener("click", blocks);
