import { useState } from "react";

import Description from "./Description/Description";
import Options from "./Options/Options";
import Notification from "./Notification/Notification";
import Feedback from "./Feedback/Feedback";

function App() {
  const [values, setValues] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = (feedbackType) => {
    setValues({ ...values, [feedbackType]: values[feedbackType] + 1 });
  };

  const totalFeedback = values.good + values.neutral + values.bad;

  const positiveFeedbackRate = Math.round(
    ((values.good + values.neutral) / totalFeedback) * 100
  );

  return (
    <>
      <Description
        title={"Sip Happens Café"}
        desc={
          "Please leave your feedback about our service by selecting one of the options below."
        }
      />
      <Options updateFeedback={updateFeedback} />
      <Notification message={"No feedback yet"} />
      {totalFeedback > 0 && (
        <Feedback
          values={values}
          totalFeedback={totalFeedback}
          positiveFeedbackRate={positiveFeedbackRate}
        />
      )}
    </>
  );
}

export default App;
