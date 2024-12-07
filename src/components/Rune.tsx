import { RuneData } from "../types/TalentCalculatorTypes";
import { useState } from "react";
import styles from "./Rune.module.css";

type RuneProps = {
  rune: RuneData;
  talentPath: string;
  unlockRune: (talentPathId: string, runeId: string, enable: boolean) => void;
};

const Rune = ({ rune, talentPath, unlockRune }: RuneProps) => {
  const [longTouch, setLongTouch] = useState(false);
  const [touchTimeout, setTouchTimeout] = useState<NodeJS.Timeout | null>(null);
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

  const handleTouchStart = (e: React.TouchEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const timeoutId = setTimeout(() => {
      setLongTouch(true);
      if (rune.enable && rune.isUnlocked) {
        unlockRune(talentPath, rune.runeId, false);
      }
    }, 500);
    setTouchTimeout(timeoutId);
  };

  const handleTouchEnd = () => {
    if (touchTimeout) {
      clearTimeout(touchTimeout);
    }

    if (!longTouch) {
      if (rune.isUnlocked && !rune.enable) {
        unlockRune(talentPath, rune.runeId, true);
      }
    }

    setLongTouch(false);
  };

  const handleTouchCancel = () => {
    if (touchTimeout) {
      clearTimeout(touchTimeout);
    }
    setLongTouch(false);
  };

  return (
    <div
      className={`${styles.runeFrame} ${
        rune.enable ? styles.runeFrameActive : styles.runeFrameUnenabled
      }`}
    >
      <button
        className={`${styles.runeSprite} ${styles[rune.runeName]} ${
          rune.enable && styles.runeActive
        }  ${!rune.enable && rune.isUnlocked && styles.runeUnlocked}`}
        aria-label={`Activate ${rune.runeName}`}
        onClick={handleClick}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onContextMenu={handleRightClick}
        onTouchCancel={handleTouchCancel}
      ></button>
    </div>
  );
};
export default Rune;
