import PropTypes from "prop-types";
import "./checkbox.css";

const Checkbox = ({ checked, handleClick }) => {
  Checkbox.propTypes = {
    checked: PropTypes.bool.isRequired,
    handleClick: PropTypes.func.isRequired,
  };

  return (
    <div
      className={`checkbox ${checked ? "checkbox--checked" : ""}`}
      onClick={handleClick}
    ></div>
  );
};

export default Checkbox;
