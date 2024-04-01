export default class Description {
  constructor(text) {
    this.left = document.querySelector(".left");
    this.text = text;
    this.initDescription();
  }

  initDescription() {
    this.description = document.createElement("p");
    this.description.classList.add("description");
    this.description.innerHTML = `${this.text}`;
    this.left.appendChild(this.description);
  }
}
