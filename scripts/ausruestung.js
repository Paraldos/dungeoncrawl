export default class Ausruestung {
  constructor() {
    this.container = document.querySelector(".left");
    this.ausruestung = document.createElement("section");
    this.ausruestung.classList.add("ausruestung");
    this.ausruestung.innerHTML = `
        ${this.getGepaeck()}
        ${this.getItems()}
        ${this.getVorraete()}
      `;
    this.container.appendChild(this.ausruestung);
  }

  getGepaeck() {
    return `
      <div class="ausruestung__gepaeck">
        <p>Gepäck:</p>
        <input type="checkbox" name="load" />
        <p>Leicht (3)</p>
        <input type="checkbox" name="load" />
        <p>Mittel (6)</p>
        <input type="checkbox" name="load" />
        <p>Schwer (9)</p>
      </div>`;
  }

  getItems() {
    return `
      <div class="ausruestung__items">
        <div>
          <label for="items">Werkzeug</label>
          <label for="items">Bonus</label>
        </div>
        <div>
          <label for="items">Werkzeug</label>
          <label for="items">Bonus</label>
        </div>
        <div>
          <input type="text"/>
          <input type="text"/>
        </div>
        <div>
          <input type="text"/>
          <input type="text"/>
        </div>
        <div>
          <input type="text"/>
          <input type="text"/>
        </div>
        <div>
          <input type="text"/>
          <input type="text"/>
        </div>
      </div>`;
  }

  getVorraete() {
    return `
      <div class="ausruestung__vorraete">
        <p>Verbrauchte Vorräte</p>
        <div>
          <input type="checkbox" />
          <input type="checkbox" />
          <input type="checkbox" />
          <input type="checkbox" />
          <input type="checkbox" />
          <input type="checkbox" />
          <input type="checkbox" />
          <input type="checkbox" />
          <input type="checkbox" />
        </div>
      </div>`;
  }
}
