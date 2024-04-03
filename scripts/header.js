export default class Header {
  constructor(name, side = ".left", type = "h1") {
    this.main = document.querySelector(side);
    this.header = document.createElement(type);
    this.header.innerHTML = `
        <i class="fa-solid fa-diamond"></i>
          ${name}
        <i class="fa-solid fa-diamond"></i>`;
    this.main.appendChild(this.header);
  }
}
