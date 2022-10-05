import PropTypes from 'prop-types';
import { FeedbackItem } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map((option, idx) => (
        <FeedbackItem
          key={idx}
          onClick={onLeaveFeedback}
          name={option}
          type="button"
        >
          {option}
        </FeedbackItem>
      ))}
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
