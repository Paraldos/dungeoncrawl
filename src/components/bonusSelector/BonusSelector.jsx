import PropTypes from "prop-types";

const BonusSelector = ({ amountOfPoints }) => {
  BonusSelector.propTypes = {
    amountOfPoints: PropTypes.number.isRequired,
  };

  return (
    <select>
      <option></option>
      {Array.from({ length: amountOfPoints }, (_, i) => (
        <option key={i}>{i + 1}</option>
      ))}
    </select>
  );
};

export default BonusSelector;
