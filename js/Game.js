/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
  constructor() {
    this.missed = 0;
    this.phrases = [];
    this.activePhrase = null;
  }
  createPhrases() {
    this.phrases = [
      new Phrase("Life is like a box of chocolate"),
      new Phrase("There is no trying"),
      new Phrase("May the force be with you"),
      new Phrase("You have to see the matrix for yourself"),
      new Phrase("You talking to me"),
    ];
  }
  getRandomPhrase() {
    const randomNum = Math.floor(Math.random() * this.phrases.length);
    return this.phrases[randomNum];
  }
  startGame() {
    this.createPhrases();
    document.getElementById("overlay").style.display = "none";
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }
}
