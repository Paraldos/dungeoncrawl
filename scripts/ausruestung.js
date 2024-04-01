export default class Ausruestung {
  constructor() {
    this.left = document.querySelector(".left");
    this.initAusruestung();
  }

  initAusruestung() {
    this.ausruestung = document.createElement("section");
    this.ausruestung.classList.add("ausruestung");
    this.ausruestung.innerHTML = `
      <div class="gepaeck">
        <p>Gepäck</p>
        <div>
          <input type="radio" name="load" />
          <p>Leicht (3)</p>
          <input type="radio" name="load" />
          <p>Mittel (6)</p>
          <input type="radio" name="load" />
          <p>Schwer (12)</p>
        </div>
      </div>
      <div class="items">
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
      </div>
      <div class="vorraete">
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
      </div>`;
    this.left.appendChild(this.ausruestung);
  }
}
