import { Component } from 'react';
import { Statistic } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    1: 1,
  };

  changeStateValue = key => {
    this.setState(prevState => ({
      ...prevState,
      [key]: prevState[key] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, item) => (acc += item), 0);
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;

    return this.countTotalFeedback() !== 0
      ? Math.ceil((Number(good) * 100) / Number(this.countTotalFeedback()))
      : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            changeState={this.changeStateValue}
          />
        </Section>

        <Section title="Statistic">
          {this.countTotalFeedback() ? (
            <ul>
              <Statistic
                good={good}
                neutral={neutral}
                bad={bad}
                total={this.countTotalFeedback}
                positivePercentage={this.countPositiveFeedbackPercentage}
              />
            </ul>
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </>
    );
  }
}
