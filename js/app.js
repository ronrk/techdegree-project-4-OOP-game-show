/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
const logPhrase = (phrase) => console.log(`Phrase - phrase`, phrase.phrase);
let game;
const buttonStart = document.getElementById("btn__reset");
const keys = document.getElementsByClassName("key");
buttonStart.addEventListener("click", () => {
  game = new Game();
  game.resetGame();
  game.startGame();
  document.addEventListener("keydown", game.handleInteraction);
  for (let i = 0; i < keys.length; i++) {
    keys[i].addEventListener("click", game.handleInteraction);
  }
});

function randomG() {
  function randomN() {
    const num = Math.floor(Math.random() * 256);
    return num;
  }
  const rgbA1 = randomN();
  const rgbA2 = randomN();
  const rgbA3 = randomN();
  const rgbB1 = randomN();
  const rgbB2 = randomN();
  const rgbB3 = randomN();
  const gradient = `linear-gradient(to right, rgb(${rgbA1}, ${rgbA2}, ${rgbA3}),rgb(${rgbB1}, ${rgbB2}, ${rgbB3}))`;
  console.log(gradient);
  console.log(document.getElementById("overlay").style.backgroundImage);
  return gradient;
}
