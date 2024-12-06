import { useEffect, useState } from "react";
import { TalentPathData } from "../types/TalentCalculatorTypes";
import { fetchSkillTree } from "../mocks/talent-calculator-mock";
import { enableRune, disableRune } from "./utils/runeUtils";
const useTalentData = () => {
  const [talentPaths, setTalentPaths] = useState<TalentPathData[]>();
  const [maxPoints, setMaxPoints] = useState<number>(0);
  const [freePoints, setFreePoints] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | string | null>(null);

  const unlockRune = (
    talentPathId: string,
    runeId: string,
    enable: boolean
  ) => {
    console.log(runeId);
    //Check if there are any points left
    const newPoints = enable ? freePoints - 1 : freePoints + 1;
    setFreePoints(newPoints);
    setTalentPaths((prevPaths) => {
      if (prevPaths) {
        const newPaths = prevPaths.map((path) => {
          if (path.pathId === talentPathId) {
            // Handle enabling or disabling the rune
            if (enable) {
              return enableRune(path, runeId, newPoints === 0);
            } else {
              return disableRune(path, runeId);
            }
          }
          // Disable `canEnable` for other paths when there are no points left
          if (newPoints === 0) {
            const updatedRunes = path.runes.map((rune) => ({
              ...rune,
              canEnable: false,
            }));
            return { ...path, runes: updatedRunes };
          }
          return path;
        });

        return newPaths;
      } else {
        return prevPaths;
      }
    });
  };

  useEffect(() => {
    const fetchTalentTree = async () => {
      try {
        setLoading(true);
        const data = await fetchSkillTree();
        if (data) {
          setTalentPaths(data.talentPaths);
          setFreePoints(data.freePoints);
          setMaxPoints(data.maxPoints);
        }
      } catch (e: unknown) {
        if (e instanceof Error) {
          setError(e.message);
        } else {
          setError("An unexpected error occurred");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchTalentTree();
  }, []);

  return {
    freePoints,
    maxPoints,
    talentPaths,
    unlockRune,
    loading,
    error,
  };
};

export default useTalentData;
