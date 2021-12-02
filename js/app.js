/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
const logPhrase = (phrase) => console.log(`Phrase - phrase`, phrase.phrase);
let game;
const buttonStart = document.getElementById("btn__reset");

buttonStart.addEventListener("click", () => {
  game = new Game();
  game.startGame();
  console.log(game);
});
