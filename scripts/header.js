export default class Header {
  constructor(name, left = true, type = "h1") {
    this.name = name;
    this.type = type;
    this.main = document.querySelector(left ? ".left" : ".right");
    this.initHeader();
  }

  initHeader() {
    this.header = document.createElement(this.type);
    this.header.innerHTML = `
        <i class="fa-solid fa-diamond"></i>
        ${this.name}
        <i class="fa-solid fa-diamond"></i>`;
    this.main.appendChild(this.header);
  }
}
