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
}
