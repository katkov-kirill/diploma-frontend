import { Navigate } from 'react-router-dom';

export const NotFoundPlaceholder = () => {
  return <Navigate to="/welcome" />;
};
