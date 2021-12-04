/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
  constructor() {
    this.missed = 0;
    this.phrases = [];
    this.activePhrase = null;
  }
  //method to create 5 phrases classes
  createPhrases() {
    this.phrases = [
      new Phrase("Life is like a box of chocolate"),
      new Phrase("There is no trying"),
      new Phrase("May the force be with you"),
      new Phrase("You have to see the matrix for yourself"),
      new Phrase("You talking to me"),
    ];
  }
  //method returned random phrase
  getRandomPhrase() {
    const randomNum = Math.floor(Math.random() * this.phrases.length);
    return this.phrases[randomNum];
  }
  //start game method, hiding the "overlay" elemend and invoke the getRandomPhrase and addPhraseToDisplay;
  startGame() {
    this.createPhrases();
    document.getElementById("overlay").style.display = "none";
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }
  //check for win
  checkForWin() {
    const phraseLetters = document.getElementsByClassName("hide letter");
    if (phraseLetters.length === 0) {
      return true;
    } else {
      return false;
    }
  }
  //method to replace life image by no life
  removeLife() {
    let lives =
      document.getElementById("scoreboard").firstElementChild.children;
    lives[this.missed].innerHTML = `
    <li class="tries">
            <img
              src="images/lostHeart.png"
              alt="Heart Icon"
              height="35"
              width="30"
            />
          </li>
    `;
    this.missed++;
  }

  //method to display winning or losing message
  gameOver(score) {
    const h1 = document.getElementById("game-over-message");
    document.getElementById("overlay").style.display = "";
    const message = score ? "You won" : "You Lost";
    h1.textContent = message;
  }
  //this method handle the logic of the game
  handleInteraction(e) {
    e.target.disabled = true;
    if (game.activePhrase.checkLetter(e.target.textContent)) {
      e.target.classList.add("chosen");
      game.activePhrase.showMatchedLetter(e.target.textContent);
    } else {
      e.target.classList.add("wrong");
      game.removeLife();
    }
    if (game.missed > 4) {
      game.gameOver(false);
    } else {
      if (game.checkForWin()) {
        game.gameOver(true);
      }
    }
  }
}
