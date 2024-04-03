export default class Basics {
  constructor() {
    this.container = document.querySelector(".left");
    this.basics = document.createElement("section");
    this.basics.classList.add("basics");
    this.basics.innerHTML = `
        <div class="basics__name">
          <p>Name</p>
          <input type="text"></input>
        </div>
        <div class="basics__bottom">
          <p>Aspekte</p>
          <input type="text"></input>
          <input type="text"></input>
          <p>Nachteil</p>
          <input type="text"></input>
          <input type="text"></input>
        </div>
        `;
    this.container.appendChild(this.basics);
  }
}
