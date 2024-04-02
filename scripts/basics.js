export default class Basics {
  constructor() {
    this.main = document.querySelector("main");
    this.basics = document.createElement("section");
    this.basics.classList.add("basics");
    this.basics.innerHTML = `
        <div class="basics__top">
          <label>Name</label>
          <label>Level</label>
          <input type="text"></input>
          <input type="text"></input>
        </div>
        <div class="basics__bottom">
          <label>Aspekte</label>
          <label></label>
          <input type="text"></input>
          <input type="text"></input>
          <input type="text"></input>
          <input type="text"></input>
        </div>
      `;
    this.main.appendChild(this.basics);
  }
}
