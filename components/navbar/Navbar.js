export default class Navbar {
  constructor() {
    this.navbar = document.querySelector("nav");
    this.startBtn = document.querySelector(".start");
    this.startBtn.addEventListener("click", () => this.onClickStart());
  }

  onClickStart() {
    window.scrollTo(0, 0);
  }
}
