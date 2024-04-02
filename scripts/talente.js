export default class Talente {
  constructor(arrayOfTalente, checked = false) {
    this.container = document.querySelector(".right");
    this.talente = document.createElement("section");
    this.talente.classList.add("talente");
    this.container.appendChild(this.talente);
    arrayOfTalente.forEach((talent) => {
      this.createTalent(talent.title, talent.cost, talent.description, checked);
    });
  }

  createTalent(title, cost, description, checked) {
    const talent = document.createElement("div");
    talent.classList.add("talente__talent");
    talent.innerHTML = `
        <input type="checkbox" name="talente__checkbox" ${
          checked ? "checked" : ""
        }/>
        <p><b>${title} ${cost ? "(" + cost + ")" : ""}</b>: ${description}</p>
    `;
    this.talente.appendChild(talent);
  }
}
