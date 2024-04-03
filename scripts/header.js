export default class Header {
  constructor(name, type = "h2") {
    this.main = document.querySelector("main");
    this.header = document.createElement(type);
    this.header.innerHTML = `
        <i class="fa-solid fa-diamond"></i>
          ${name}
        <i class="fa-solid fa-diamond"></i>`;
    this.main.appendChild(this.header);
  }
}
