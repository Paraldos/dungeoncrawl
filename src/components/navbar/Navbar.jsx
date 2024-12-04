import "./navbar.css";
import { useState } from "react";

import ListOfPlaybooks from "../playbooks/data/ListOfPlaybooks.js";
import Utils from "../utils.js";

import NavbarBurger from "./Burger.jsx";
import NavbarLogo from "./Logo.jsx";
import Link from "./Link.jsx";

const Navbar = () => {
  const playbooksSubmenuList = [];
  const [isNavbarActive, setIsNavbarActive] = useState(false);

  ListOfPlaybooks.forEach((playbook) => {
    const playbookId = Utils.getId(playbook.title);
    playbooksSubmenuList.push({ id: playbookId, title: playbook.title });
  });

  const toggleNavbar = () => {
    setIsNavbarActive(!isNavbarActive);
  };

  return (
    <nav className={isNavbarActive ? "navbar-active" : ""}>
      <NavbarBurger onClickHandler={toggleNavbar} />
      <div className="navbar__content">
        <NavbarLogo />
        <div className="navbar__links">
          <Link title="Regeln" href="#" toggleNavbar={toggleNavbar} />
          <Link
            title="Beispiele"
            href="#examples"
            toggleNavbar={toggleNavbar}
          />
          <Link
            title="Playbooks"
            href="#playbooks"
            subMenuList={playbooksSubmenuList}
            toggleNavbar={toggleNavbar}
          />
          <Link
            title="Ausrüstung"
            href="#equipment"
            toggleNavbar={toggleNavbar}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
