const Feedback = ({ feedback, totalFeedback, positivFeedback }) => {
  return (
    <ul>
      <li>
        <p>Good: {feedback.good}</p>
      </li>
      <li>
        <p>Neutral: {feedback.neutral}</p>
      </li>
      <li>
        <p>Bad: {feedback.bad}</p>
      </li>
      <li>
        <p>Total: {totalFeedback}</p>
      </li>
      <li>
        <p>Positive: {positivFeedback}%</p>
      </li>
    </ul>
  );
};

export default Feedback;
