export default class Ausruestung {
  constructor() {
    this.left = document.querySelector(".left");
    this.ausruestung = document.createElement("section");
    this.ausruestung.classList.add("ausruestung");
    this.left.appendChild(this.ausruestung);
    this.createGepaeck();
    this.createItems();
    this.createVorraete();
  }

  createGepaeck() {
    const gepaeck = document.createElement("div");
    gepaeck.classList.add("gepaeck");
    gepaeck.innerHTML = `
      <p>Gepäck</p>
      <div>
        <input type="radio" name="load" />
        <p>Leicht (3)</p>
        <input type="radio" name="load" />
        <p>Mittel (6)</p>
        <input type="radio" name="load" />
        <p>Schwer (9)</p>
      </div>
    `;
    this.ausruestung.appendChild(gepaeck);
  }

  createItems() {
    const items = document.createElement("div");
    items.classList.add("items");
    items.innerHTML = `
      <div>
        <label>Werkzeug</label>
        <label class="text-center">Bonus</label>
        <input type="text" />
        <input type="text" />
      </div>
      <div>
        <label>Werkzeug</label>
        <label class="text-center">Bonus</label>
        <input type="text" />
        <input type="text" />
      </div>
      <div>
        <input type="text" />
        <input type="text" />
      </div>
      <div>
        <input type="text" />
        <input type="text" />
      </div>
    `;
    this.ausruestung.appendChild(items);
  }

  createVorraete() {
    const vorraete = document.createElement("div");
    vorraete.classList.add("vorraete");
    vorraete.innerHTML = `
      <p>Verbrauchte Vorräte</p>
      <div class="load__vorratspunkte">
        <input type="checkbox" />
        <input type="checkbox" />
        <input type="checkbox" />
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
    `;
    this.ausruestung.appendChild(vorraete);
  }
}
