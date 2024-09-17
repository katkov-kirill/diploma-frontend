import { Skill } from "./Skill";

export type SectionData = {
    title: any,
    content: string,
    isOwner: boolean,
    skills: Array<Skill> | null
};
