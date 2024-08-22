import { ProfileResponse } from '../types/ProfileResponse';
import { UserProfileResponse } from '../types/UserProfileResponse';
import { CompanyProfile } from './CompanyProfile';
import { UserProfile } from './UserProfile';

type UserProfileSubcomponentProps = {
  role: string;
  response: ProfileResponse;
};

function isUserProfileResponse(response: ProfileResponse): response is UserProfileResponse {
  return (response as UserProfileResponse).profile?.user !== undefined;
}

function isCompanyProfileResponse(response: ProfileResponse): response is UserProfileResponse {
  return (response as UserProfileResponse).profile?.company !== undefined;
}

function isUserRole(response: ProfileResponse): response is UserProfileResponse {
  return (response as UserProfileResponse).profile?.user.role !== undefined;
}

function isCompanyRole(response: ProfileResponse): response is UserProfileResponse {
  return (response as UserProfileResponse).profile?.company.role !== undefined;
}

export const SpecificUserProfile: React.FC<UserProfileSubcomponentProps> = ({ response }) => {
  if (isUserProfileResponse(response) && isUserRole(response)) {
    return <UserProfile profileResponse={response} />;
  }
  else if (isCompanyProfileResponse(response) && isCompanyRole(response)) {
    return <CompanyProfile profileResponse={response} />;
  }
};
