import page from "../Page.js";

export default class GroupSheet extends page {
  constructor() {
    super();
    const section = this.addSection("group-sheet");
    section.classList.add("rules");
    section.classList.add("no-counter");
    window.navbar.addNavbarItem("Gruppenbogen", "group-sheet");

    section.innerHTML += `<h2>Gruppenbogen ${this.svg.getD20()}</h2>`;
    const gridContainer = this.addDiv(
      "section__grid section__grid--3-colums",
      section
    );
    const columnLeft = this.addFlexColumn(gridContainer);
    const columnMiddle = this.addFlexColumn(gridContainer);
    const columnRight = this.addFlexColumn(gridContainer);
  }
}
