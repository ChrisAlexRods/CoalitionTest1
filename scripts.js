// Climb section functionality
let mountainButtons = document.querySelectorAll(".mountain-btn");
let mountainImages = document.querySelectorAll(".mountain-img");
let activeMountainIndex = 0;

function activateMountainButton(buttonIndex) {
  for (let i = 0; i < mountainButtons.length; i++) {
    mountainButtons[i].classList.remove("active");
  }
  mountainButtons[buttonIndex].classList.add("active");
}

function activateMountainImage(imageIndex) {
  for (let i = 0; i < mountainImages.length; i++) {
    mountainImages[i].classList.remove("active");
  }
  mountainImages[imageIndex].classList.add("active");
}

function switchMountain(event) {
  let target = event.target;
  if (!target.classList.contains("mountain-btn")) {
    return;
  }
  let mountainIndex = parseInt(target.getAttribute("data-mountain"));
  if (mountainIndex === activeMountainIndex) {
    return;
  }
  activateMountainButton(mountainIndex - 1);
  activateMountainImage(mountainIndex - 1);
  activeMountainIndex = mountainIndex;
}

for (let i = 0; i < mountainButtons.length; i++) {
  mountainButtons[i].addEventListener("click", switchMountain);
}
