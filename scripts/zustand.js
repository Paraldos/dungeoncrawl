export default class Zustand {
  constructor() {
    this.container = document.querySelector(".left");
    this.zustand = document.createElement("section");
    this.zustand.classList.add("zustand");
    this.zustand.innerHTML = `
        <p>Level</p>
        <input type="text" class="input__value"/>

        <p>Treffer</p>
        <div>
          <input type="checkbox" />
          <input type="checkbox" />
          <input type="checkbox" />
        </div>

        <p>Erschöpfung</p>
        <div>
          <input type="checkbox" />
          <input type="checkbox" />
          <input type="checkbox" />
          <input type="checkbox" />
          <input type="checkbox" />
          <input type="checkbox" />
          <input type="checkbox" />
        </div>
      `;
    this.container.appendChild(this.zustand);
  }
}
