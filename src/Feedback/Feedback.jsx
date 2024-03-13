const Feedback = ({ values, totalFeedback, positiveFeedbackRate }) => {
  return (
    <div>
      <ul>
        <li>Good: {values.good}</li>
        <li>Neutral: {values.neutral}</li>
        <li>Bad: {values.bad}</li>
        <li>Total: {totalFeedback}</li>
        <li>Positive: {positiveFeedbackRate}%</li>
      </ul>
    </div>
  );
};

export default Feedback;
