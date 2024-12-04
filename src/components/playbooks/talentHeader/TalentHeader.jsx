import PropTypes from "prop-types";
import "./talentHeader.css";

const TalentHeader = ({ title, description }) => {
  TalentHeader.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  };

  return (
    <div className="talents__header blackbox">
      <h3>{title}</h3>
      <label>{description}</label>
    </div>
  );
};

export default TalentHeader;
