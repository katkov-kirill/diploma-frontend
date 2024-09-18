import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface UserState {
  isAuthenticated: boolean;
  token: string | null;
  user: {
    avatar_url: string | null;
    created_at: string;
    email: string;
    id: string;
    role_id: string;
    updated_at: string;
    user_profile_id: string;
  } | null;
}

const initialState: UserState = {
  isAuthenticated: false,
  token: null,
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginSuccess: (
      state,
      action: PayloadAction<{ token: string; user: any }>
    ) => {
      localStorage.setItem('authToken', action.payload.token);
      state.isAuthenticated = true;
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    logoutSuccess: (state) => {
      localStorage.removeItem('authToken');
      state.isAuthenticated = false;
      state.token = null;
      state.user = null;
    },
  },
});

export const { loginSuccess, logoutSuccess } = userSlice.actions;

export default userSlice.reducer;
