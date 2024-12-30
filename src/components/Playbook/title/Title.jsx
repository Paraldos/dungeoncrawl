import PropTypes from "prop-types";
import "./title.css";
import BonusSelector from "../../bonusSelector/BonusSelector";

const Title = ({ txt }) => {
  Title.propTypes = {
    txt: PropTypes.string.isRequired,
  };

  return (
    <div className="playbook__title blackbox">
      <h2>{txt}</h2>
      <p>Level</p>
      <BonusSelector amountOfPoints={12} />
    </div>
  );
};

export default Title;
