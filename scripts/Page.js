import Svg from "./Svg.js";

export default class Page {
  constructor() {
    this.svg = new Svg();
  }

  addSection(id = "", countsAsPage = true) {
    const section = document.createElement("section");
    section.id = id;
    if (countsAsPage) section.classList.add("page");
    document.body.appendChild(section);
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
