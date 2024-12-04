import PropTypes from "prop-types";
import "./title.css";

const Title = ({ txt }) => {
  Title.propTypes = {
    txt: PropTypes.string.isRequired,
  };

  return (
    <div className="playbook__title blackbox">
      <h2>{txt}</h2>
      <p>Level</p>
      <input type="text"></input>
    </div>
  );
};

export default Title;
