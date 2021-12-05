/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
  constructor() {
    this.missed = 0;
    this.phrases = [];
    this.activePhrase = null;
    this.activeGame = true;
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
    let message = "";
    if (score) {
      message = "You won";
      document.getElementById("overlay").style.backgroundImage = randomG();
      document.querySelector(
        ".title"
      ).textContent = `"${this.activePhrase.phrase}"`;
    } else {
      message = `You Lost, Better luck next time`;
      document.getElementById("overlay").style.background = "red";
    }
    h1.textContent = message;
    this.activeGame = false;
  }
  //this method handle the logic of the game
  handleInteraction(e) {
    //check to see if e.key === false - e.target.textContent active
    if (game.activeGame) {
      if (!e.key) {
        //disabled the clicked key
        e.target.disabled = true;
        //check to see if the letter include in the phrrase
        if (game.activePhrase.checkLetter(e.target.textContent)) {
          //if true - add the class 'chosen' and invoke the showMatchedLetter method
          e.target.classList.add("chosen");
          game.activePhrase.showMatchedLetter(e.target.textContent);
        } else {
          //if false - add the class 'wrong' and invoke the removeLife method
          e.target.classList.add("wrong");
          game.removeLife();
        }

        //check if e.key === true - e.key active
      } else {
        for (let i = 0; i < keys.length; i++) {
          if (e.key === keys[i].textContent) {
            keys[i].disabled = true;
            if (game.activePhrase.checkLetter(e.key)) {
              keys[i].classList.add("chosen");
              game.activePhrase.showMatchedLetter(e.key);
            } else {
              keys[i].classList.add("wrong");
              game.removeLife();
            }
          }
        }
      }
      // cheack to see if the player use all his tries
      if (game.missed > 4) {
        //if true - invoke gameOver method with false value
        game.gameOver(false);
      } else {
        //if false- check if the players wins by invoke the checkForWin method
        if (game.checkForWin()) {
          //if checkForWin return true invoke the gameOVer method with true value
          game.gameOver(true);
        }
      }
    }
  }
  resetGame() {
    this.activeGame = true;
    //reset the missed chances back to 0
    this.missed = 0;
    //selecting the 'phrase' ul and set it for empty string
    const ul = document.getElementById("phrase").firstElementChild;
    ul.textContent = "";
    //loop over the keys and clear the classes
    for (let i = 0; i < keys.length; i++) {
      keys[i].disabled = false;
      keys[i].classList.remove("wrong");
      keys[i].classList.remove("chosen");
    }
    //loop over lives images and change to liveHeart
    let lives =
      document.getElementById("scoreboard").firstElementChild.children;
    for (let i = 0; i < lives.length; i++) {
      lives[i].innerHTML = `
        <li class="tries">
                <img
                  src="images/liveHeart.png"
                  alt="Heart Icon"
                  height="35"
                  width="30"
                />
              </li>
        `;
    }
  }
}
