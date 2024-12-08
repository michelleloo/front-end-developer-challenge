import { TalentPathData, RuneData } from "../../types/TalentCalculatorTypes";

  export const toggleRune = (
    path: TalentPathData,
    runeId: string,
    enable: boolean,
    endPoints: boolean
  ): TalentPathData => {
    const runeIndex = path.runes.findIndex((rune) => rune.runeId === runeId);
  
    if (runeIndex === -1 || !path.runes[runeIndex].isUnlocked) {
      return path; 
    }
  
    return {
      ...path,
      runes: path.runes.map((rune, idx) => {
        if (idx === runeIndex) {
          return {
            ...rune,
            enable,
            isUnlocked: enable || rune.isUnlocked
          };
        } else if (idx === runeIndex - 1) {
          return {
            ...rune,
            isUnlocked: !enable, 
          };
        } else if (idx === runeIndex + 1 && !endPoints) {
          return {
            ...rune,
            isUnlocked: enable, 
          };
        }
        return rune; 
      }),
    };
  };

  export const handleLockPath = (path: TalentPathData) =>{
    const lastEnabledIdx = getLastEnabledRuneIndex(path.runes);
    return {
      ...path,
      runes: path.runes.map((rune, idx) => {
        if (lastEnabledIdx != idx) {
          return {
            ...rune,
            isUnlocked: false,
          };
        }
        return rune;
      }),
    };
  }

  export const handleUnlockPath = (path: TalentPathData) =>{
    const lastEnableIdx = getLastEnabledRuneIndex(path.runes);
      if (lastEnableIdx != -1) {
        return {
          ...path,
          runes: path.runes.map((rune, idx) => {
            if (lastEnableIdx + 1 === idx) {
              return {
                ...rune,
                isUnlocked: true,
              };
            }
            return rune;
          }),
        };
    }
    return path
  }
  
  export const getLastEnabledRuneIndex = (runes: RuneData[]) => {
    for (let i = runes.length - 1; i >= 0; i--) {
      if (runes[i].enable) {
        return i;
      }
    }
    return -1; 
  };
  