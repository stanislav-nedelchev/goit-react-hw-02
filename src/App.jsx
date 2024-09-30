import { useEffect, useState } from 'react';
import './App.css';
import Description from './components/Description/Description';
import Feedback from './components/Feedback/Feedback';
import Options from './components/Options/Options';
import Notification from './components/Notification/Notification';

function App() {
  const [feedback, setFeedback] = useState(() => {
    const stringifiedVal = localStorage.getItem('feedbackValue');
    const parsedVal = JSON.parse(stringifiedVal) ?? {
      good: 0,
      neutral: 0,
      bad: 0,
    };
    return parsedVal;
  });

  useEffect(() => {
    const stringifiedValue = JSON.stringify(feedback);
    localStorage.setItem('feedbackValue', stringifiedValue);
  }, [feedback]);

  const updateFeedback = feedbackType => {
    setFeedback({ ...feedback, [feedbackType]: feedback[feedbackType] + 1 });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const onResetBtn = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  return (
    <div className="bodyWrapper">
      <Description />
      <Options
        feedbackType={updateFeedback}
        onResetBtn={onResetBtn}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback feedback={feedback} totalFeedback={totalFeedback} />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;
