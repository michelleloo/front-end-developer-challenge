import styles from "./PointCounter.module.css";

export type PointCounterProps = {
  freePoints: number;
  maxPoints: number;
};
const PointCounter = ({ freePoints, maxPoints }: PointCounterProps) => {
  return (
    <div className={styles.pointCounterContainer}>
      <div>
        <span className="counter-value">
          {freePoints}/{maxPoints}
        </span>
      </div>
      <p>Points Spent</p>
    </div>
  );
};
export default PointCounter;
