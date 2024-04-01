export default class Basics {
  constructor() {
    this.left = document.querySelector(".left");
    this.basics = document.createElement("section");
    this.basics.classList.add("basics");
    this.basics.innerHTML = `
        <p>Name</p>
        <input type="text"></input>
        <p>Aspekte</p>
        <input type="text"></input>
        <div></div>
        <input type="text"></input>
        <div></div>
        <input type="text"></input>
        <div></div>
        <input type="text"></input>`;
    this.left.appendChild(this.basics);
  }
}
