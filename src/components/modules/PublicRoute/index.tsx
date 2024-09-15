import { Navigate } from 'react-router-dom';
import React from 'react';

type Props = {
  isAuthenticated?: boolean;
  component: React.ReactNode;
};

export const PublicRoute: React.FC<Props> = ({
  isAuthenticated,
  component,
}) => {
  if (isAuthenticated) return <Navigate to="/on-boarding" />;

  return component;
};
