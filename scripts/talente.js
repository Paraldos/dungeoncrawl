export default class Talente {
  constructor(arrayOfTalente) {
    this.container = document.querySelector(".right");
    this.talente = document.createElement("section");
    this.talente.classList.add("talente");
    this.container.appendChild(this.talente);
    arrayOfTalente.forEach((talent) => {
      this.createTalent(talent);
    });
  }

  createTalent(talent) {
    const element = document.createElement("div");
    element.classList.add("talente__talent");
    element.innerHTML = `
        <input type="checkbox" name="talente__checkbox" ${
          talent.starttalent ? "checked" : ""
        }/>
        <p><b>${talent.title} ${
      talent.cost ? "(" + talent.cost + ")" : ""
    }</b>: ${talent.description}</p>
    `;
    this.talente.appendChild(element);
  }
}
