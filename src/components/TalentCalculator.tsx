import useTalentData from "../hooks/useTalentData";
import PointCounter from "./PointCounter";
import TalentPath from "./TalentPath";
import styles from "./TalentCalculator.module.css";

const TalentCalculator = () => {
  const { freePoints, maxPoints, talentPaths, unlockRune, loading, error } =
    useTalentData();
  return (
    <div className={styles.calculatorContainer}>
      <div className={styles.titleWrapper}>
        <h1>Rune Mastery Loadout Talent Calculator 9000</h1>
      </div>
      <div className={styles.talentWrapper}>
        <div className={styles.talentPaths}>
          {talentPaths?.map((talent) => (
            <TalentPath
              talentPath={talent}
              unlockRune={unlockRune}
              key={talent.pathId}
            />
          ))}
        </div>
        <PointCounter freePoints={freePoints} maxPoints={maxPoints} />
      </div>
    </div>
  );
};
export default TalentCalculator;
