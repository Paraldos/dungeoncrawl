export default class Condition {
  constructor() {}

  getCondition(titel) {
    return `
        <div class="playbook__condition">
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
