import PropTypes from "prop-types";
import "./talents.css";
import Talent from "./Talent";

const Talents = ({ listOfTalents }) => {
  Talents.propTypes = {
    listOfTalents: PropTypes.array.isRequired,
  };

  return (
    <ul className="talents__list">
      {listOfTalents.map((talent, index) => (
        <Talent key={index} talent={talent} />
      ))}
      {listOfTalents[listOfTalents.length - 1].stages.map((stage, index) => (
        <input className="talents__input" key={index} type="text"></input>
      ))}
    </ul>
  );
};

export default Talents;
