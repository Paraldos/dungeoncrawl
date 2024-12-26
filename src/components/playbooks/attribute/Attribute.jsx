import PropTypes from "prop-types";
import BonusSelector from "../../bonusSelector/BonusSelector";

const Attribute = ({ attribute }) => {
  Attribute.propTypes = {
    attribute: PropTypes.object.isRequired,
  };

  return (
    <div className="playbook__attribute blackbox">
      <BonusSelector amountOfPoints={5} />
      <label>{attribute.name}</label>
    </div>
  );
};

export default Attribute;
