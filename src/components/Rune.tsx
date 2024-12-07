import { RuneData } from "../types/TalentCalculatorTypes";
import styles from "./Rune.module.css";

type RuneProps = {
  rune: RuneData;
  talentPath: string;
  unlockRune: (talentPathId: string, runeId: string, enable: boolean) => void;
};

const Rune = ({ rune, talentPath, unlockRune }: RuneProps) => {
  const handleRightClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (rune.enable && rune.isUnlocked) {
      unlockRune(talentPath, rune.runeId, false);
    }
  };
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (rune.isUnlocked && !rune.enable) {
      unlockRune(talentPath, rune.runeId, true);
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
        disabled={!rune.isUnlocked || rune.enable}
        aria-label={`Activate ${rune.runeName}`}
        onClick={handleClick}
        onContextMenu={handleRightClick}
      ></button>
    </div>
  );
};
export default Rune;
