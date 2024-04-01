export default class Description {
  constructor(text) {
    this.left = document.querySelector(".left");
    this.description = document.createElement("p");
    this.description.classList.add("description");
    this.description.innerHTML = `${text}`;
    this.left.appendChild(this.description);
  }
}
