import PropTypes from "prop-types";
import NavbarSubmenu from "./Submenu";
import "./link.css";

const Link = ({ title, href, subMenuList, toggleNavbar }) => {
  Link.propTypes = {
    title: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    subMenuList: PropTypes.array,
    toggleNavbar: PropTypes.func,
  };

  return (
    <div className="navbar__link">
      <a href={href} onClick={toggleNavbar}>
        {title}
      </a>
      {Array.isArray(subMenuList) && subMenuList.length > 0 && (
        <NavbarSubmenu subMenuList={subMenuList} toggleNavbar={toggleNavbar} />
      )}
    </div>
  );
};

export default Link;
