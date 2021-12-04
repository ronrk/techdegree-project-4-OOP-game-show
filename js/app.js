/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
const logPhrase = (phrase) => console.log(`Phrase - phrase`, phrase.phrase);
let game;
const buttonStart = document.getElementById("btn__reset");
const keys = document.getElementsByClassName("key");

buttonStart.addEventListener("click", () => {
  const li = document.getElementById("phrase").getElementsByTagName("li");
  console.log(li);
  for (let i = 0; i < li.length; i++) {
    li[i].classList.remove("show");
    li[i].remove();
  }
  for (let i = 0; i < keys.length; i++) {
    keys[i].classList.remove("wrong");
    keys[i].classList.remove("chosen");
  }
  game = new Game();
  game.startGame();
  for (let i = 0; i < keys.length; i++) {
    keys[i].addEventListener("click", game.handleInteraction);
  }
});
