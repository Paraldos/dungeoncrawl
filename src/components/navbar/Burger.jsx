import "./burger.css";
import PropTypes from "prop-types";

const NavbarBurger = ({ onClickHandler }) => {
  NavbarBurger.propTypes = {
    onClickHandler: PropTypes.func.isRequired,
  };

  return (
    <div className="navbar__burger" onClick={onClickHandler}>
      <img src="/src/assets/burger.svg" />
    </div>
  );
};

export default NavbarBurger;
