import s from "./Feedback.module.css";

const Feedback = ({ options, totalFeedback, positiveFeedback }) => {
  return (
    <div>
      <ul>
        <li>Good: {options.good}</li>
        <li>Neutral: {options.neutral}</li>
        <li>Bad: {options.bad}</li>
        <li>Total: {totalFeedback}</li>
        <li>Positive: {positiveFeedback}%</li>
      </ul>
    </div>
  );
};

export default Feedback;
