import { ProfileResponse } from '../types/ProfileResponse';
import { UserProfileResponse } from '../types/UserProfileResponse';
import { UserProfile } from './UserProfile';

type UserProfileSubcomponentProps = {
  role: string;
  response: ProfileResponse;
};

function isUserProfileResponse(
  response: ProfileResponse
): response is UserProfileResponse {
  return (response as UserProfileResponse).profile?.user !== undefined;
}

// function isAdminProfileResponse(response: ProfileResponse): response is AdminProfileResponse {
//   return (response as AdminProfileResponse).profile?.admin !== undefined;
// }

export const SpecificUserProfile: React.FC<UserProfileSubcomponentProps> = ({ role, response }) => {
  if (role === 'user' && isUserProfileResponse(response)) {
    return <UserProfile profileResponse={response} />;
  }
  // else if (role === 'admin' && isAdminProfileResponse(response)) {
  //   return <AdminProfileDetails profileResponse={response} />;
  // }
  else {
    return <div>Role not supported or response structure invalid</div>;
  }
};
