import { useEffect, useState } from "react";
import Description from "./components/description/Description";
import Options from "./components/options/Options";
import Feedback from "./components/feedback/Feedback";
import Notification from "./components/notification/Notification";
import "modern-normalize";

function App() {
  const [options, setOptions] = useState(() => {
    const savedData = JSON.parse(window.localStorage.getItem("feedback"));
    if (savedData) {
      return savedData;
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    window.localStorage.setItem("feedback", JSON.stringify(options));
  }, [options]);

  const updateFeedback = (feedbackType) => {
    setOptions((prev) => ({ ...prev, [feedbackType]: prev[feedbackType] + 1 }));
  };

  const handleReset = () => {
    setOptions({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = options.good + options.neutral + options.bad;

  const positiveFeedback = Math.round((options.good / totalFeedback) * 100);

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        handleReset={handleReset}
        totalFeedback={totalFeedback}
      />
      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback
          options={options}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      )}
    </>
  );
}

export default App;
