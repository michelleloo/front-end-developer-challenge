import { RuneData } from "../types/TalentCalculatorTypes";
import styles from "./Rune.module.css";
import RuneConnector from "./RuneConnector";
type RuneProps = {
  rune: RuneData;
  talentPath: string;
  unlockRune: (
    talentPathId: string,
    runeId: string,
    parentId: string | null,
    enable: boolean
  ) => void;
};

const Rune = ({ rune, talentPath, unlockRune }: RuneProps) => {
  const handleRightClick = (e) => {
    e.preventDefault();
    if (rune.isUnlocked) {
      unlockRune(talentPath, rune.runeId, rune.parentId, false);
    }
  };
  return (
    <div>
      {rune.parentId != null && <RuneConnector enabled={rune.enable} />}
      <div className={` ${rune.children && styles.canDisable} `}>
        <div className={` ${rune.isUnlocked && styles.canEnable} `}>
          <button
            className={`${styles["rune-sprite"]} ${styles[rune.runeName]} ${
              rune.enable && styles.hasPoints
            }`}
            disabled={!rune.isUnlocked}
            aria-label={`Activate ${rune.runeName}`}
            onClick={() =>
              unlockRune(talentPath, rune.runeId, rune.parentId, true)
            }
            onContextMenu={handleRightClick}
            style={{
              backgroundPositionY: rune.enable ? "0px" : "-50px",
            }}
          ></button>
        </div>
      </div>
      {rune.children.length > 0 && (
        <div>
          {rune.children.map((child) => (
            <Rune
              key={child.runeId}
              rune={child}
              talentPath={talentPath}
              unlockRune={unlockRune}
            />
          ))}
        </div>
      )}
    </div>
  );
};
export default Rune;
