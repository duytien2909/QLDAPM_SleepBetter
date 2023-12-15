import { createSlice } from "@reduxjs/toolkit";
import { loginWithEmailPassword } from "./authentication.action";
import { UserCredential } from "firebase/auth";

export type AuthenticationState = {
  data: {
    user: UserCredential | null;
  };
  status: {
    error: any;
    code?: string;
  };
};

const initialState: AuthenticationState = {
  data: {
    user: null,
  },
  status: {
    error: null,
  },
};

const profileSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginWithEmailPassword.pending, (state) => ({
      ...state,
      status: {
        error: null,
        code: "INIT",
      },
    }));
    builder.addCase(loginWithEmailPassword.rejected, (state, action) => ({
      ...state,
      status: {
        error: null,
        code: "INIT",
      },
    }));
    builder.addCase(loginWithEmailPassword.fulfilled, (state, action) => {
      return {
        ...state,
        data: {
          ...state.data,
          user: action.payload,
        },
        status: {
          error: null,
          code: "INIT",
        },
      };
    });
  },
});

export default profileSlice.reducer;
