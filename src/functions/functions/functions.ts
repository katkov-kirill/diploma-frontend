import { ProfileResponse } from "src/types";
import { UserProfileResponse } from "src/types";

export function isUserProfileResponse(response: ProfileResponse): response is UserProfileResponse {
    return (response as UserProfileResponse).profile?.user !== undefined;
}

export function isCompanyProfileResponse(response: ProfileResponse): response is UserProfileResponse {
    return (response as UserProfileResponse).profile?.company !== undefined;
}

export function isUserRole(response: ProfileResponse): response is UserProfileResponse {
    return (response as UserProfileResponse).profile?.user.role !== undefined;
}

export function isCompanyRole(response: ProfileResponse): response is UserProfileResponse {
    return (response as UserProfileResponse).profile?.company.role !== undefined;
}