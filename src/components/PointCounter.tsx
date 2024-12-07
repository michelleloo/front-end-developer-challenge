import styles from "./PointCounter.module.css";

export type PointCounterProps = {
  freePoints: number;
  maxPoints: number;
};
const PointCounter = ({ freePoints, maxPoints }: PointCounterProps) => {
  return (
    <div className={styles.pointCounterContainer}>
      <div>
        <span
          className={styles.pointCounterText}
          aria-label={`Points spent: ${freePoints} out of ${maxPoints}`}
        >
          {freePoints}/{maxPoints}
        </span>
      </div>
      <span className={styles.pointSpentLabel}>Points Spent</span>
    </div>
  );
};
export default PointCounter;
