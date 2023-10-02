// Keypress events
// Ce n'est pas l'event le plus répandu, mais ça reste un bon exercice.
const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

const ring = (key) => {
  let audio = new Audio();
  audio.src = key + ".mp3";
  audio.play();
};

document.addEventListener("keypress", (event) => {
  key.textContent = event.key;

  if (event.key === "j") {
    keypressContainer.style.backround = "violet";
  } else if (event.key === "h") {
    keypressContainer.style.background = "teal";
  } else {
    keypressContainer.style.background = "red";
  }
  if (event.key === "a") ring(event.key);
});
