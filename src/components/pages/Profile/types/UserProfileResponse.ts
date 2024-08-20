export type UserProfileResponse = {
    profile: {
        user: {
            first_name: string;
            last_name: string;
            position: string;
            location: string;
            about_info: string;
            skills_desc: string;
            experience: string;
            education: string;
        };
    };
};
