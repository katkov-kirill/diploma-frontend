import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface UserState {
  isAuthenticated: boolean;
  token: string | null;
  user: any;
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
    logout: (state) => {
      localStorage.removeItem('authToken');
      state.isAuthenticated = false;
      state.token = null;
      state.user = null;
    },
  },
});

export const { loginSuccess, logout } = userSlice.actions;

export default userSlice.reducer;
