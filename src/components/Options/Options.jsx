import styles from './Options.module.css';

const Options = ({ feedbackType, onResetBtn, totalFeedback }) => {
  return (
    <ul className={styles.optionsList}>
      <li>
        <button
          onClick={() => {
            feedbackType('good');
          }}
          type="button"
        >
          Good
        </button>
      </li>
      <li>
        <button
          onClick={() => {
            feedbackType('neutral');
          }}
          type="button"
        >
          Neutral
        </button>
      </li>
      <li>
        <button
          onClick={() => {
            feedbackType('bad');
          }}
          type="button"
        >
          Bad
        </button>
      </li>
      {totalFeedback > 0 && (
        <li>
          <button
            onClick={onResetBtn}
            type="button"
            className={styles.onResetBtn}
          >
            Reset
          </button>
        </li>
      )}
    </ul>
  );
};

export default Options;
