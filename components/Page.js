import Svg from "./Svg.js";

export default class Page {
  constructor(selector) {
    this.container = document.querySelector(selector);
    this.svg = new Svg();
  }

  addSection(id = "") {
    const section = document.createElement("section");
    section.id = id;
    this.container.appendChild(section);
    return section;
  }

  deleteSections() {
    this.sections = this.container.querySelectorAll("section");
    this.sections.forEach((section) => {
      this.container.removeChild(section);
    });
  }

  addGridContainer(parent) {
    const gridContainer = document.createElement("div");
    gridContainer.classList.add("grid-container");
    parent.appendChild(gridContainer);
    return gridContainer;
  }
}
