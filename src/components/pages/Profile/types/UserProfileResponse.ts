export type UserProfileResponse = {
    profile: {
        user: {
            role: 'user',
            first_name: string;
            last_name: string;
            position: string;
            location: string;
            about_info: string;
            skills_desc: string;
            experience: string;
            education: string;
        };
        company: {
            role: 'company',
            about_us: string;
            contact_email: string;
            contact_phone: string;
            contact_url: string;
            description: string;
            location: string;
            name: string;
        }
    };
};
