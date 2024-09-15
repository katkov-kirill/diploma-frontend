import './App.css';

import { CircularProgress, Stack } from '@mui/material';
import {
  Help,
  NotFoundPlaceholder,
  OnBoarding,
  Profile,
  Report,
  SignIn,
  SignUp,
  Welcome,
} from './components/pages';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Box from '@mui/material/Box';
import { LanguageBar } from '@components/modules';
import { PrivateRoute } from '@components/modules/PrivateRoute';
import { PublicRoute } from '@components/modules/PublicRoute';
import React from 'react';
import { RootState } from './store/store';
import { loginSuccess } from './store/userSlice';
import { useGetCurrentUserQuery } from './services/userApi';

function App() {
  const { data: userData, isLoading } = useGetCurrentUserQuery();
  const user = useSelector((state: RootState) => state.user);
  const authToken = localStorage.getItem('authToken');
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (userData) {
      dispatch(loginSuccess({ token: authToken as string, user: userData }));
    }
  }, [userData]);

  if (isLoading)
    return (
      <Stack
        width="100%"
        height="100%"
        justifyContent="center"
        alignItems="center"
      >
        <CircularProgress />
      </Stack>
    );

  return (
    <Stack>
      <LanguageBar />
      <Box width="100%">
        <Routes>
          <Route
            path="welcome"
            element={
              <PublicRoute
                component={<Welcome />}
                isAuthenticated={user.isAuthenticated}
              />
            }
          />
          <Route
            path="sign-in"
            element={
              <PublicRoute
                component={<SignIn />}
                isAuthenticated={user.isAuthenticated}
              />
            }
          />
          <Route
            path="sign-up"
            element={
              <PublicRoute
                component={<SignUp />}
                isAuthenticated={user.isAuthenticated}
              />
            }
          />
          <Route
            path="on-boarding"
            element={
              <PrivateRoute
                component={<OnBoarding />}
                isAuthenticated={user.isAuthenticated}
              />
            }
          />
          <Route path="help" element={<Help />} />
          <Route
            path="report"
            element={
              <PublicRoute
                component={<Report />}
                isAuthenticated={user.isAuthenticated}
              />
            }
          />
          {/* <Route path="profile/:id" element={<Profile />} /> */}
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={<NotFoundPlaceholder />} />
        </Routes>
      </Box>
    </Stack>
  );
}

export default App;
