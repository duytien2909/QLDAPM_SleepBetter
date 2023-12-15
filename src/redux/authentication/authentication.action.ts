import {
  UserCredential,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { authentication } from "../../services/firebase/firebase-config";

export const loginWithEmailPassword = createAsyncThunk<UserCredential, any>(
  "bindingForm/firebaseLogin",
  async (payload: { email: string; password: string }, thunkAPI) => {
    try {
      const { email, password } = payload;
      const user = await signInWithEmailAndPassword(
        authentication,
        email,
        password
      );
      if (!user) return thunkAPI.rejectWithValue("User not exist");
      return user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
