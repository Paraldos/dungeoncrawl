export default class Merkmal {
  constructor() {}

  getMerkmal(titel) {
    return `
        <div class="Charakterbogen__merkmal">
            <div>
                <input></input>
                <input></input>
            </div>
            <div>
                <label>${titel}</label>
                <label>Verbrauch</label>
            </div>
        </div>
    `;
  }
}
