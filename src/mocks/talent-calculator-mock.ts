import { SkillTree } from "../types/TalentCalculatorTypes";

const talentCalculatorMock: SkillTree = {
    freePoints: 3,
    maxPoints: 6,
    talentPaths: [
      {
        pathName: "TALENT PATH 1",
        pathId: "1",
        runes: [
          { runeId: "stack", runeName: "stack-rune", enable: true, isUnlocked: true },
          { runeId: "food", runeName: "food-rune", enable: false, isUnlocked:true },
          { runeId: "cake", runeName: "cake-rune", enable: false, isUnlocked: false },
          { runeId: "crown", runeName: "crown-rune", enable: false,  isUnlocked: false  }
        ]
      },
      {
        pathName: "TALENT PATH 2",
        pathId: "2",
        runes: [
          { runeId: "boat", runeName: "boat-rune", enable: true,  isUnlocked: false },
          { runeId: "scuba", runeName: "scuba-rune", enable: true,  isUnlocked: true },
          { runeId: "lightning", runeName: "lightning-rune", enable: false, isUnlocked: true  },
          { runeId: "skull", runeName: "skull-rune", enable: false, isUnlocked: false  }
        ]
      }
    ]
}

//Mock to simulate fetching the data - 1 second delay
export const fetchSkillTree = async (): Promise<SkillTree> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(talentCalculatorMock);
      }, 1000); 
    });
  };