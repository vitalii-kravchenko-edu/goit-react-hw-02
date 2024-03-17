const Options = ({ updateFeedback, totalFeedback, handleResetFeedback }) => {
  return (
    <div>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
      {totalFeedback ? (
        <button onClick={() => handleResetFeedback()}>Reset</button>
      ) : (
        ""
      )}
    </div>
  );
};

export default Options;
