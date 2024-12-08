import { describe, it, expect } from "vitest";
import {
    toggleRune,
    handleLockPath,
    handleUnlockPath,
    getLastEnabledRuneIndex,
} from "../runeUtils";
import { TalentPathData } from "../../../types/TalentCalculatorTypes";

const mockPath: TalentPathData = {
    pathId: "path1",
    pathName: "Mock Path",
    runes: [
        { runeId: "rune1", runeName: "abc", isUnlocked: true, enable: true },
        { runeId: "rune2", runeName: "abc", isUnlocked: true, enable: false },
        { runeId: "rune3", runeName: "abc", isUnlocked: false, enable: false },
    ],
};
const lockedMockPath: TalentPathData = {
    pathId: "path1",
    pathName: "Mock Path",
    runes: [
        { runeId: "rune1", runeName: "abc", isUnlocked: true, enable: true },
        { runeId: "rune2", runeName: "abc", isUnlocked: false, enable: false },
        { runeId: "rune3", runeName: "abc", isUnlocked: false, enable: false },
    ],
};

describe("toggleRune", () => {
    it("should enable a rune and unlock the next rune if there are still free points", () => {
        const result = toggleRune(mockPath, "rune2", true, false);
        expect(result.runes[1].enable).toBe(true); 
        expect(result.runes[2].isUnlocked).toBe(true);
    });

});

describe("handleLockPath", () => {
    it("should lock all runes except the last enabled one", () => {
        const result = handleLockPath(mockPath);
        expect(result.runes[0].isUnlocked).toBe(true); 
        expect(result.runes[1].isUnlocked).toBe(false); 
        expect(result.runes[2].isUnlocked).toBe(false); 
    });
});

describe("handleUnlockPath", () => {
    it("should unlock the next rune after the last enabled rune", () => {
        const result = handleUnlockPath(lockedMockPath);
        expect(result.runes[1].isUnlocked).toBe(true); 
    });
});

describe("getLastEnabledRuneIndex", () => {
    it("should return the index of the last enabled rune", () => {
        const result = getLastEnabledRuneIndex(mockPath.runes);
        expect(result).toBe(0);
    });
});
