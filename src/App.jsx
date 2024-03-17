import { useState, useEffect } from "react";

import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";
import Feedback from "./components/Feedback/Feedback";

const InitialFeedbackValues = { good: 0, neutral: 0, bad: 0 };

function App() {
  const [feedbackValues, setFeedbackValues] = useState(() => {
    const stringifiedFeedbackValues = localStorage.getItem("feedbackValuesLS");
    return JSON.parse(stringifiedFeedbackValues) ?? InitialFeedbackValues;
  });

  const updateFeedback = (feedbackType) => {
    setFeedbackValues({
      ...feedbackValues,
      [feedbackType]: feedbackValues[feedbackType] + 1,
    });
  };

  // const totalFeedback = values.good + values.neutral + values.bad;
  const totalFeedback = Object.values(feedbackValues).reduce(
    (acc, current) => acc + current,
    0
  );

  const positiveFeedbackRate = Math.round(
    ((feedbackValues.good + feedbackValues.neutral) / totalFeedback) * 100
  );

  const handleResetFeedback = () => {
    setFeedbackValues(InitialFeedbackValues);
  };

  useEffect(() => {
    localStorage.setItem("feedbackValuesLS", JSON.stringify(feedbackValues));
  }, [feedbackValues]);

  return (
    <>
      <Description
        title={"Sip Happens Café"}
        desc={
          "Please leave your feedback about our service by selecting one of the options below."
        }
      />
      <Options
        updateFeedback={updateFeedback}
        handleResetFeedback={handleResetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback === 0 && <Notification message={"No feedback yet"} />}
      {totalFeedback !== 0 && (
        <Feedback
          feedbackValues={feedbackValues}
          totalFeedback={totalFeedback}
          positiveFeedbackRate={positiveFeedbackRate}
        />
      )}
    </>
  );
}

export default App;
