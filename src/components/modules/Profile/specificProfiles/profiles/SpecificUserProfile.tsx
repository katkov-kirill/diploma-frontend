import {
  isCompanyProfileResponse,
  isCompanyRole,
  isUserProfileResponse,
  isUserRole,
} from 'src/functions';
import { ProfileResponse } from 'src/types';
import { CompanyProfile } from './CompanyProfile';
import { UserProfile } from './UserProfile';

type UserProfileSubcomponentProps = {
  role: string;
  response: ProfileResponse;
  isOwner: boolean;
};

export const SpecificUserProfile: React.FC<UserProfileSubcomponentProps> = ({
  response,
  isOwner,
}) => {
  if (isUserProfileResponse(response) && isUserRole(response)) {
    return <UserProfile profileResponse={response} isOwner={isOwner} />;
  } else if (isCompanyProfileResponse(response) && isCompanyRole(response)) {
    return <CompanyProfile profileResponse={response} isOwner={isOwner} />;
  }
};
