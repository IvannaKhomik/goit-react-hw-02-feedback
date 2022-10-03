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
    const feedbackType = event.target.name;
    this.setState(prevState => ({
      [feedbackType]: (prevState[feedbackType] += 1),
    }));
    // if (buttonName === 'good') {
    //   this.setState(prevState => ({
    //     good: prevState.good + 1,
    //   }));
    // }
    // if (buttonName === 'neutral') {
    //   this.setState(prevState => ({
    //     neutral: prevState.neutral + 1,
    //   }));
    // }
    // if (buttonName === 'bad') {
    //   this.setState(prevState => ({
    //     bad: prevState.bad + 1,
    //   }));
    // }
  };
  countTotalFeedback = () => {
    const values = Object.values(this.state);
    return values.reduce((prevValue, number) => prevValue + number, 0);
  };

  countPositiveFeedbackPercentage = total => {
    if (total > 0) {
      const totalPositive = this.state.good;
      return Math.round((totalPositive / total) * 100);
    }
    return;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    const values = Object.values(this.state);
    const noFeedbacks = values.every(value => value === 0);
    const totalFeedbacks = this.countTotalFeedback();
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
