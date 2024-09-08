import { Skill } from "./Skill";

export type UserProfileResponse = {
    profile: {
        user: {
            role: 'Employee',
            first_name: string;
            last_name: string;
            position: string;
            location: string;
            about_info: string;
            skills_desc: string;
            experience: string;
            education: string;
            skills: Array<Skill> | null;
        };
        company: {
            role: 'Employer',
            about_info: string;
            contact_email: string;
            contact_phone: string;
            contact_url: string;
            description: string;
            location: string;
            name: string;
        }
    };
};
