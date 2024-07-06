import s from "./Options.module.css";

const Options = ({ updateFeedback, handleReset, totalFeedback }) => {
  return (
    <div className={s.container}>
      <button onClick={() => updateFeedback("good")} className={s.good}>
        Good
      </button>
      <button onClick={() => updateFeedback("neutral")} className={s.neutral}>
        Neutral
      </button>
      <button onClick={() => updateFeedback("bad")} className={s.bad}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button onClick={handleReset} className={s.reset}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
