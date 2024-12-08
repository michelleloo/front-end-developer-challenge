import useTalentData from "../hooks/useTalentData";
import PointCounter from "./PointCounter";
import TalentPath from "./TalentPath";
import styles from "./TalentCalculator.module.css";
import LoadingSpinner from "./LoadingSpinner";

const TalentCalculator = () => {
  const { freePoints, maxPoints, talentPaths, unlockRune, loading, error } =
    useTalentData();

  return (
    <div className={styles.calculatorContainer}>
      {error && <div>Error</div>}
      <div className={styles.titleWrapper}>
        <h1 aria-label="TitanStar Legends - Rune Mastery Loadout Talent Calculator 9000">
          TitanStar Legends - Rune Mastery Loadout Talent Calculator 9000
        </h1>
      </div>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className={styles.talentWrapper}>
          <div className={styles.talentPaths}>
            {talentPaths?.map((talent) => (
              <TalentPath
                talentPath={talent}
                unlockRune={unlockRune}
                key={talent.pathId}
                aria-label={`Talent path: ${talent.pathName}`}
              />
            ))}
          </div>
          <PointCounter freePoints={freePoints} maxPoints={maxPoints} />
        </div>
      )}
    </div>
  );
};

export default TalentCalculator;
