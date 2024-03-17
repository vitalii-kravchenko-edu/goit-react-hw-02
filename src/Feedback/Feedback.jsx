const Feedback = ({ feedbackValues, totalFeedback, positiveFeedbackRate }) => {
  return (
    <div>
      <ul>
        <li>Good: {feedbackValues.good}</li>
        <li>Neutral: {feedbackValues.neutral}</li>
        <li>Bad: {feedbackValues.bad}</li>
        <li>Total: {totalFeedback}</li>
        <li>Positive: {positiveFeedbackRate}%</li>
      </ul>
    </div>
  );
};

export default Feedback;
