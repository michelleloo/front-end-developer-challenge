import { RuneData } from "../types/TalentCalculatorTypes";
import styles from "./Rune.module.css";

type RuneProps = {
  rune: RuneData;
  talentPath: string;
  unlockRune: (talentPathId: string, runeId: string, enable: boolean) => void;
};

const Rune = ({ rune, talentPath, unlockRune }: RuneProps) => {
  const handleRightClick = (e) => {
    e.preventDefault();
    if (rune.isUnlocked && rune.enable) {
      unlockRune(talentPath, rune.runeId, false);
    }
  };

  return (
    <div
      className={`${styles.runeFrame} ${
        rune.enable && rune.isUnlocked && styles.activeRune
      }`}
    >
      <button
        className={`${styles.runeSprite} ${styles[rune.runeName]} ${
          rune.enable && styles.runeActive
        }  ${!rune.enable && rune.isUnlocked && styles.runeUnlocked}`}
        disabled={!rune.isUnlocked}
        aria-label={`Activate ${rune.runeName}`}
        onClick={() => unlockRune(talentPath, rune.runeId, true)}
        onContextMenu={handleRightClick}
      ></button>
    </div>
  );
};
export default Rune;
