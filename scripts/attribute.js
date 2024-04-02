export default class Attribute {
  constructor() {
    this.container = document.querySelector(".left");
    this.attribute = document.createElement("section");
    this.attribute.classList.add("attribute");
    this.attribute.innerHTML = `
      ${this.getAttribut("Stärke")}
      ${this.getAttribut("Geschick")}
      ${this.getAttribut("Zähigkeit")}
      ${this.getAttribut("Charisma")}
      ${this.getAttribut("Klugheit")}
      ${this.getAttribut("Weisheit")}
    `;
    this.container.appendChild(this.attribute);
  }

  getAttribut(title) {
    return `
      <div class="attribute">
        <p>${title}</p>
        <input type="text" class="text-center"/>
      </div>
    `;
  }
}
