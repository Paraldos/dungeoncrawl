import page from "../Page.js";
import listOfPlaybooks from "./data/ListOfPlaybooks.js";
import Playbook from "./Playbook/Playbook.js";

export default class playbooks extends page {
  constructor() {
    super();
    this.addPlaybookRules();
    listOfPlaybooks.forEach((playbook) => new Playbook(playbook));
  }

  addPlaybookRules() {
    const section = this.addSection("playbooks");
    section.classList.add("rules");
    window.navbar.addNavbarItem("Playbooks", "playbooks");

    section.innerHTML += `<h2>Playbooks ${this.svg.getPentagramm()}</h2>`;
    const gridContainer = this.addDiv("section__grid", section);
    const columnLeft = this.addFlexColumn(gridContainer);
    const columnRight = this.addFlexColumn(gridContainer);
    columnLeft.innerHTML = ``;
    columnRight.innerHTML = ``;
  }
}
