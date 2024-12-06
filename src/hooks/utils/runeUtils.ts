import { TalentPathData, RuneData } from "../../types/TalentCalculatorTypes";

/**
 * enableRune
 * 
 * @param path - 
 * @param runeId - 
 * @param endPoints - 
 * @returns 
 */
export const enableRune = (path: TalentPathData, runeId: string, endPoints: boolean) => {
    const runeIndex = path.runes.findIndex((rune) => rune.runeId === runeId);
    if (runeIndex !== -1 && path.runes[runeIndex].isUnlocked) {
      return {
        ...path,
        runes: path.runes.map((rune, idx) => {
          if (idx === runeIndex) {
            return {
              ...rune,
              enable: true,
              isUnlocked: true,
            }; // Unlock current rune
          } else if (idx === runeIndex - 1) {
            return {
              ...rune,
              isUnlocked: false,
            }; // Disable previous rune
          } else if (idx === runeIndex + 1 && !endPoints) {
            return { ...rune, canEnable: true }; // Enable next rune if there are free points
          }
          return rune;
        }),
      };
    }
    return path;
  };
  
export const disableRune = (path: TalentPathData, runeId: string) => {
    const runeIndex = path.runes.findIndex((rune) => rune.runeId === runeId);
    if (runeIndex !== -1 && path.runes[runeIndex].isUnlocked) {
      return {
        ...path,
        runes: path.runes.map((rune, idx) => {
          if (idx === runeIndex) {
            return {
              ...rune,
              enable: false,
              isUnlocked: true
            }; // Disable current rune
          } else if (idx === runeIndex - 1) {
            return {
              ...rune,
              isUnlocked: true,
            }; // Allow disable of previous rune
          }
          else if (idx === runeIndex + 1 && !rune.enable) {
            return {
              ...rune,
              isUnlocked: false,
            }; // Disable previous rune
          }
          return rune;
        }),
      };
    }
    return path;
  };
 
  //Unlock the rune
  const unlockRune = (
    runes: RuneData[], 
    runeId: string, 
    parentId: string | null, 
    limit: boolean
  ): RuneData[] => {
    let runeUpdate = [];

  
    // Find the index of the rune to unlock
    for (const rune of runes) {
      if (rune.runeId === runeId) {
        unlockedRuneId = runeId;
      }
  
      if (unlockedRuneId && !limit && !nextRuneId && rune.parentId === runeId) {
        nextRuneId = rune.runeId; // Unlock the next rune in sequence
      }
    }
  
    // Update the runes based on unlocked/nextRuneId
    return runes.map((rune) => {
      if (rune.runeId === unlockedRuneId) {
        return { ...rune, enable: true, isUnlocked: true };
      } else if (rune.runeId === nextRuneId) {
        return { ...rune, enable: true, isUnlocked: true };
      }
      return rune;
    });
  };
  