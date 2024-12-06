import { useEffect, useState } from "react";
import { TalentPathData } from "../types/TalentCalculatorTypes";
import { fetchSkillTree } from "../mocks/talent-calculator-mock";
import { enableRune, disableRune, unlockR } from "./utils/runeUtils";
const useTalentData = () => {
  const [talentPaths, setTalentPaths] = useState<TalentPathData[]>();
  const [maxPoints, setMaxPoints] = useState<number>(0);
  const [freePoints, setFreePoints] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | string | null>(null);

  const unlockRune = (
    talentPathId: string,
    runeId: string,
    parentId: string,
    enable: boolean //true: enable the rune, false: disable the rune
  ) => {
    setTalentPaths((prevPaths) => {
      if(prevPaths){
        const updatedPaths = prevPaths.map((path, idx) =>{
          if(path.pathId === talentPathId){
            const updatedRunes = path.rune.
          }
        })
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
