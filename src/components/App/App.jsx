import { useState } from 'react';
import FeedbackOptions from '../FeedbackOptions';
import Statistics from '../Statistics';
import SectionTitle from '../SectionTitle';
import Notification from '../Notification';
import { Container } from './App.styled';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleIncrement = options => {
    switch (options) {
      case 'good':
        setGood(good => good + 1);
        break;

      case 'neutral':
        setNeutral(neutral => neutral + 1);
        break;
      
      case 'bad':
        setBad(bad => bad + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const value = countTotalFeedback();
    return Math.round((good / value) * 100);    
  };

  const optionName = ['good', 'neutral', 'bad'];
  const value = countTotalFeedback();
  const percentage = countPositiveFeedbackPercentage();

  return (
      <Container>
        <SectionTitle title="Please leave feedback">
          <FeedbackOptions
            options={optionName}
            onLeaveFeedback={handleIncrement}
          />
        </SectionTitle>

        <SectionTitle title="Statistics">
           {value === 0 ? (
            <Notification message="No feedback given" />
          ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={value}
            positivePercentage={percentage}
              />
                )}
        </SectionTitle>
      </Container>
    );
};