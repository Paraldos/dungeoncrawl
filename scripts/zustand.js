export default class Zustand {
  constructor() {
    this.container = document.querySelector(".left");
    this.zustand = document.createElement("section");
    this.zustand.classList.add("zustand");
    this.zustand.innerHTML = `
        <label></label>
        <label>Max</label>
        <label>Verbrauch</label>
        <p>Treffer</p>
        <input type="text" />
        <div>
          <input type="checkbox" />
          <input type="checkbox" />
          <input type="checkbox" />
        </div>
        <p>Erschöpfung</p>
        <input type="text" />
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
