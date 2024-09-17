import { ProfileResponse } from "src/types";
import { UserProfileResponse } from "src/types";

export function isUserProfileResponse(response: ProfileResponse): response is UserProfileResponse {
    return response?.profile?.user !== undefined;
}

export function isCompanyProfileResponse(response: ProfileResponse): response is UserProfileResponse {
    return response?.profile?.company !== undefined;
}

export function isUserRole(response: ProfileResponse): response is UserProfileResponse {
    return isUserProfileResponse(response) && response.profile.user.role !== undefined;
}

export function isCompanyRole(response: ProfileResponse): response is UserProfileResponse {
    return isCompanyProfileResponse(response) && response.profile.company.role !== undefined;
}

export async function saveProfile(updateData: any, updateProfile: any, userId: string) {
    try {
        console.log('saving profile');
        const result = await updateProfile({
            id: userId, 
            update_type: updateData,
        });

        console.log('Profile saved successfully:', result);
    } catch (error) {
        console.error('Error saving profile:', error);
    }
};