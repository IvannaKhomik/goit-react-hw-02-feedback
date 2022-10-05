import PropTypes from 'prop-types';
import { StatisticList, StatisticItem, ItemDesc } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <StatisticList>
        <StatisticItem>
          <ItemDesc>Good:</ItemDesc> {good}
        </StatisticItem>
        <StatisticItem>
          <ItemDesc>Neutral:</ItemDesc> {neutral}
        </StatisticItem>
        <StatisticItem>
          <ItemDesc>Bad:</ItemDesc> {bad}
        </StatisticItem>
        <StatisticItem>
          <ItemDesc>Total:</ItemDesc> {total}
        </StatisticItem>
        <StatisticItem>
          <ItemDesc>Positive feedback: </ItemDesc>
          {positivePercentage}
          &#37;
        </StatisticItem>
      </StatisticList>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
