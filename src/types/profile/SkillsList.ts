import { Skill } from "./Skill";

export type SkillsList = {
    skillsId: Array<string>;
    cells: Array<Skill>;
    availableCells: number;
};
