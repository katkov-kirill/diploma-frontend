export type UpdateResponse = {
    updated_information: {
        personal_information: {
            id: string,
            name?: string;
            location: string;
            skills_desc: string;
            experience: string;
            avatar_url: string;
            email: string;
        };
    };
};
