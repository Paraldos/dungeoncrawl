import PropTypes from "prop-types";
import "./pageHeadline.css";

const PageHeadline = ({ txt }) => {
  PageHeadline.propTypes = {
    txt: PropTypes.string.isRequired,
  };

  return (
    <div className="page-headline">
      <h2>{txt}</h2>
      <img className="page-headline__logo" src="/src/assets/d20-white.svg" />
    </div>
  );
};

export default PageHeadline;
