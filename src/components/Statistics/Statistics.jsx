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
