import { useEffect, useState } from "react";
import { TalentPathData } from "../types/TalentCalculatorTypes";
import { fetchSkillTree } from "../mocks/talent-calculator-mock";
import {
  toggleRune,
  handleLockPath,
  handleUnlockPath,
} from "./utils/runeUtils";

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
    // Check if there are any points left
    const newPoints = enable ? freePoints - 1 : freePoints + 1;
    if (newPoints <= maxPoints) {
      setTalentPaths((prevPaths) => {
        if (prevPaths) {
          const newPaths = prevPaths.map((path) => {
            // handle chosen path
            if (path.pathId === talentPathId) {
              return toggleRune(path, runeId, enable, newPoints === 0);
            }
            // Lock other paths if no points are left
            if (newPoints === 0) {
              return handleLockPath(path);
            }
            // Unlock other paths when points go from 0 to 1
            if (newPoints === 1) {
              return handleUnlockPath(path);
            }
            return path;
          });
          return newPaths;
        } else {
          return prevPaths;
        }
      });
      setFreePoints(newPoints);
    }
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
