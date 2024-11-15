import Navbar from "./components/navbar/Navbar.js";
import Regeln from "./components/rules/Rules.js";
import playbook from "./components/playbook/Playbook.js";
import "./styles.css";

document.addEventListener("DOMContentLoaded", () => {
  new Navbar();
  new Regeln();
  new playbook();
});
