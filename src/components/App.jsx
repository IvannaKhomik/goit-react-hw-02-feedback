import { Component } from 'react';
import { Container } from './App.styled';

import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';
import { Section } from './Section';
import { Notification } from './Notificate';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  changeStatistics = event => {
    const { name } = event.currentTarget;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = values => {
    return values.reduce((prevValue, number) => prevValue + number, 0);
  };

  countPositiveFeedbackPercentage = total => {
    if (total > 0) {
      const { good } = this.state;
      return Math.round((good / total) * 100);
    }
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    const values = Object.values(this.state);
    const noFeedbacks = values.every(value => value === 0);
    const totalFeedbacks = this.countTotalFeedback(values);
    const totalPositivePercentage =
      this.countPositiveFeedbackPercentage(totalFeedbacks);

    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.changeStatistics}
          />
        </Section>

        <Section title="Statistics">
          {noFeedbacks ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedbacks}
              positivePercentage={totalPositivePercentage}
            />
          )}
        </Section>
      </Container>
    );
  }
}
