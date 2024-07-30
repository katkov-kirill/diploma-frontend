import { Navigation } from '@components/layout/Navigation';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div>
      <Navigation/>
      <Outlet/>
    </div>
  );
};

