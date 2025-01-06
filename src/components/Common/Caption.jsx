
import PropTypes from "prop-types";

const Caption = ({ text }) => {
  // Function to capitalize only the first letter of the sentence
  const capitalizeSentence = (caption) => {
    return caption.charAt(0).toUpperCase() + caption.slice(1);
  };

  return <p className="caption">{capitalizeSentence(text)}</p>;
};
Caption.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Caption;

