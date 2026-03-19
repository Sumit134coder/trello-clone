import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

// Helper to get initial state from cookie
const getInitialAuthState = () => {
  if (typeof window !== 'undefined') {
    const token = Cookies.get('authToken');
    return {
      isAuthenticated: !!token,
      token: token || null,
      user: null, // Depending on the payload, the backend can decode or provide user details
    };
  }
  return { isAuthenticated: false, token: null, user: null };
};

const initialState = getInitialAuthState();

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.token = action.payload.token;
      state.user = action.payload.user;
      Cookies.set('authToken', action.payload.token, { expires: 7 }); // expires in 7 days
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.token = null;
      state.user = null;
      Cookies.remove('authToken');
    },
    setUser: (state, action) => {
      state.user = action.payload;
    }
  },
});

export const { login, logout, setUser } = authSlice.actions;

export default authSlice.reducer;
