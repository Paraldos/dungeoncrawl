import PropTypes from "prop-types";
import { useState } from "react";
import Checkbox from "../../checkbox/Checkbox";

const Talent = ({ talent }) => {
  Talent.propTypes = {
    talent: PropTypes.object.isRequired,
  };

  const [stages, setStages] = useState(talent.stages);

  const handleCheckboxClicked = (index) => {
    const newStages = [...stages];
    newStages[index] = !newStages[index];
    setStages(newStages);
  };

  return (
    <>
      {" "}
      <li key={talent.id}>
        {stages.map((stage, index) => (
          <Checkbox
            key={index}
            checked={stage}
            handleClick={() => handleCheckboxClicked(index)}
          />
        ))}
        <p>
          <strong>{talent.title}</strong>: {talent.description}
        </p>
      </li>
    </>
  );
};

export default Talent;
