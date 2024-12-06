export type SkillTree = {
    freePoints: number;
    maxPoints: number;
    talentPaths: TalentPathData[];
}
export type TalentPathData = {
    pathId: string;
    pathName: string;
    runes: RuneData[];
}
export type RuneData = {
    runeId: string;
    runeName: string;
    enable: boolean;
    isUnlocked: boolean;
}