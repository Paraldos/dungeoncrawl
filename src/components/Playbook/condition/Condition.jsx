import "./condition.css";
import PropTypes from "prop-types";
import BonusSelector from "../../bonusSelector/BonusSelector";

const Condition = ({ title }) => {
  Condition.propTypes = {
    title: PropTypes.string.isRequired,
  };

  return (
    <div className="playbook__condition blackbox">
      <div>
        <BonusSelector amountOfPoints={10} />
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
