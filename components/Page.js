export default class Page {
  constructor(selector) {
    this.container = document.querySelector(selector);
  }

  addSection() {
    const section = document.createElement("section");
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
    div.classList.add(className);
    parent.appendChild(div);
    return div;
  }
}
