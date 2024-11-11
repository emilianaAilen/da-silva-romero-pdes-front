import { CreateUserData, UserBasicData } from "./types";
import { Dispatch, UnknownAction } from "@reduxjs/toolkit";

import { API } from "../../../api";
import { showSnackbar } from "../../common/slices/snackbarSlice";

const basicHeaders = {
  'Content-Type': 'application/json',
}

export const registerUser = async (userData: CreateUserData) => {
  try {
    const response = await fetch(API.createUser, {
      method: 'POST',
      headers: basicHeaders,
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    console.log('User registered successfully');
    return data;
  } catch (error) {
    console.error('Registration failed');
  }
};

export const loginUser = async (userLogin: UserBasicData, dispatch: Dispatch<UnknownAction>) => {
  try {
    const response = await fetch(API.loginUser, {
      method: 'POST',
      headers: basicHeaders,
      body: JSON.stringify(userLogin),
      credentials: 'include'
    })
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    const data = await response.json();
    dispatch(showSnackbar({ type: 'success', message: 'User Logged successfully' }));
    return data;
  }
  catch (error: any) {
    dispatch(showSnackbar({ type: 'error', message: error?.message }));
  }
}