import PropTypes from "prop-types";
import "./submenu.css";

const NavbarSubmenu = ({ subMenuList, toggleNavbar }) => {
  NavbarSubmenu.propTypes = {
    subMenuList: PropTypes.array.isRequired,
    toggleNavbar: PropTypes.func,
  };

  return (
    <ul className="navbar__submenu">
      {subMenuList.map((item) => {
        return (
          <li key={item.id}>
            <a href={`#${item.id}`} onClick={toggleNavbar}>
              {item.title}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default NavbarSubmenu;
