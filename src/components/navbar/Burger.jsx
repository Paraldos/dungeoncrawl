import "./burger.css";
import PropTypes from "prop-types";

const NavbarBurger = ({ onClickHandler }) => {
  NavbarBurger.propTypes = {
    onClickHandler: PropTypes.func.isRequired,
  };

  return (
    <div className="navbar__burger" onClick={onClickHandler}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        fill="#fff"
        stroke="#fff"
        stroke-width=".16"
        viewBox="-4.32 -4.32 24.64 24.64"
      >
        <rect
          width="24.64"
          height="24.64"
          x="-4.32"
          y="-4.32"
          fill="#000"
          stroke="none"
          stroke-width="0"
          rx="12.32"
        />
        <path d="M2 3h12a1 1 0 0 1 0 2H2a1 1 0 1 1 0-2zm0 4h12a1 1 0 0 1 0 2H2a1 1 0 1 1 0-2zm0 4h12a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2z" />
      </svg>
    </div>
  );
};

export default NavbarBurger;
