/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
  constructor(phrase) {
    this._phrase = phrase;
  }
  get phrase() {
    return this._phrase.toLowerCase();
  }
  //add the phrase to display by split the string to array and thand apllaying each item in the array to be a hiding letter
  addPhraseToDisplay() {
    const phraseArr = this.phrase.split("");

    phraseArr.forEach((letter, i) => {
      let li = document.createElement("li");
      li.classList = letter === " " ? "space" : "letter";
      li.classList.add("hide");
      li.textContent = letter;
      document.getElementById("phrase").firstElementChild.appendChild(li);
    });
  }
  //logic to see if the chosen letter is include in phrase
  checkLetter(letter) {
    if (this.phrase.includes(letter)) {
      return true;
    } else {
      return false;
    }
  }
  //method to show the correct letter on the letterbox
  showMatchedLetter(letter) {
    const phraseUl =
      document.getElementById("phrase").firstElementChild.children;
    for (let i = 0; i < phraseUl.length; i++) {
      if (phraseUl[i].textContent === letter) {
        phraseUl[i].classList.add("show");
        phraseUl[i].classList.remove("hide");
      }
    }
  }
}
