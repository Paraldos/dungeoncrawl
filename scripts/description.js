export default class Description {
  constructor(text) {
    this.container = document.querySelector(".left");
    this.description = document.createElement("p");
    this.description.classList.add("description");
    this.description.innerHTML = `${text}`;
    this.container.appendChild(this.description);
  }
}
