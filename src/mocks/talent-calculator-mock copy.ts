import { SkillTree } from "../types/TalentCalculatorTypes";

const talentCalculatorMock: SkillTree = {
  freePoints: 3,
  maxPoints: 5,
  talentPaths: [
    {
      pathName: "TALENT PATH 1",
      pathId: "1",
      rune: { 
          runeId: "stack",
          runeName: "stack-rune",
          enable: true,
          isUnlocked: true,
          parentId: null,
          children: [
            {
              runeId: "food",
              runeName: "food-rune",
              enable: false,
              isUnlocked: false,
              parentId: "stack",
              children: [
                {
                  runeId: "cake",
                  runeName: "cake-rune",
                  enable: false,
                  isUnlocked: false,
                  parentId: "food",
                  children: [
                    {
                      runeId: "crown",
                      runeName: "crown-rune",
                      enable: false,
                      isUnlocked: false,
                      parentId: "cake",
                      children: [],
                    },
                  ],
                },
              ],
            },
          ],
        
      },
    },
    {
      pathName: "TALENT PATH 2",
      pathId: "2",
      rune: 
        {
          runeId: "boat",
          runeName: "boat-rune",
          enable: true,
          isUnlocked: true,
          parentId: null,
          children: [
            {
              runeId: "scuba",
              runeName: "scuba-rune",
              enable: true,
              isUnlocked: true,
              parentId: "boat",
              children: [
                {
                  runeId: "lightning",
                  runeName: "lightning-rune",
                  enable: false,
                  isUnlocked: false,
                  parentId: "scuba",
                  children: [
                    {
                      runeId: "skull",
                      runeName: "skull-rune",
                      enable: false,
                      isUnlocked: false,
                      parentId: "lightning",
                      children: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
    },
  ],
};

export default talentCalculatorMock;


//Mock to simulate fetching the data
export const fetchSkillTree = async (): Promise<SkillTree> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(talentCalculatorMock);
      }, 1000); 
    });
  };