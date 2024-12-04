import "./condition.css";
import PropTypes from "prop-types";

const Condition = ({ title }) => {
  Condition.propTypes = {
    title: PropTypes.string.isRequired,
  };

  return (
    <div className="playbook__condition blackbox">
      <div>
        <input type="text"></input>
        <input type="text"></input>
      </div>
      <div>
        <label>{title}</label>
        <label>Verbrauch</label>
      </div>
    </div>
  );
};

export default Condition;
