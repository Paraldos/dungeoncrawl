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

  addDiv(className, parent) {
    const div = document.createElement("div");
    div.classList = className;
    if (parent) parent.appendChild(div);
    return div;
  }

  addFlexColumn(parent) {
    return this.addDiv("flex-column", parent);
  }
}
