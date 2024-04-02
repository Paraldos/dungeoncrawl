export default class Attribute {
  constructor() {
    this.main = document.querySelector("main");
    this.attribute = document.createElement("section");
    this.attribute.classList.add("attribute");
    this.attribute.innerHTML = `
        <p>Stärke</p>
        <input type="text" />
        <p>Geschick</p>
        <input type="text" />
        <p>Zähigkeit</p>
        <input type="text" />
        <p>Charisma</p>
        <input type="text" />
        <p>Klugheit</p>
        <input type="text" />
        <p>Weisheit</p>
        <input type="text" />`;
    this.main.appendChild(this.attribute);
  }
}
