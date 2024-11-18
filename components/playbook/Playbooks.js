import listOfPlaybooks from "./data/ListOfPlaybooks.js";
import Playbook from "./Playbook.js";

export default class playbooks {
  constructor() {
    listOfPlaybooks.forEach((playbook) => new Playbook(playbook));
  }
}
