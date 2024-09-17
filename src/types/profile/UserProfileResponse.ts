import { Skill } from "./Skill";

export type UserProfileResponse = {
    profile: {
        user: {
            role: string,
            name: string;
            position: string;
            location: string;
            about_info: string;
            skills_desc: string;
            education: string;
        };
        company: {
            role: string,
            about_info: string;
            contact_email: string;
            contact_phone: string;
            contact_url: string;
            description: string;
            location: string;
            name: string;
        };
        skills: Array<Skill> | null;
    };
};
