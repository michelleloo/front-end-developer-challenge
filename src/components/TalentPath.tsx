import { TalentPathData } from "../types/TalentCalculatorTypes";
import Rune from "./Rune";
import RuneConnector from "./RuneConnector";
import styles from "./TalentPaths.module.css";
type TalentPathProps = {
  talentPath: TalentPathData;
  unlockRune: (talentPathId: string, runeId: string, enable: boolean) => void;
};
const TalentPath = ({ talentPath, unlockRune }: TalentPathProps) => {
  const { pathId, pathName, runes } = talentPath;

  return (
    <div className={styles.pathContainer}>
      <div className={styles.pathTitleContainer}>
        <h2>{pathName}</h2>
      </div>
      <div className={styles.pathTree}>
        {runes.map((x, idx) => {
          return (
            <div key={x.runeId} className={styles.runePathContainer}>
              {idx != 0 && <RuneConnector enabled={x.enable} />}
              <Rune
                rune={x}
                talentPath={talentPath.pathId}
                unlockRune={unlockRune}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default TalentPath;
