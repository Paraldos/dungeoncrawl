import "./conditions.css";
import PropTypes from "prop-types";
import Condition from "../condition/Condition";

const Conditions = ({ listOfConditions }) => {
  Conditions.propTypes = {
    listOfConditions: PropTypes.array.isRequired,
  };

  return (
    <div className="playbook__conditions">
      {listOfConditions.map((condition) => (
        <Condition key={condition} title={condition} />
      ))}
    </div>
  );
};

export default Conditions;
