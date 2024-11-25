import page from "../Page.js";

export default class GroupSheet extends page {
  constructor() {
    super();

    const section = this.addSection("group-sheet");
    section.classList.add("group-sheet");
    window.navbar.addNavbarItem("Group Sheet", "group-sheet");
  }
}
