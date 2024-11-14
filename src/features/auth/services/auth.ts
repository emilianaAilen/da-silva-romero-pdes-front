import { CreateUserData, UserBasicData } from "./types";
import { Dispatch, UnknownAction } from "@reduxjs/toolkit";

import { API } from "../../../api";
import { showSnackbar } from "../../common/slices/snackbarSlice";

const basicHeaders = {
  'Content-Type': 'application/json',
}

export const registerUser = async (userData: CreateUserData, dispatch: Dispatch<UnknownAction>) => {
  try {
    const response = await fetch(API.createUser, {
      method: 'POST',
      headers: basicHeaders,
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      dispatch(showSnackbar({ type: 'error', message: response.statusText }));
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    dispatch(showSnackbar({ type: 'success', message: 'User registered successfully' }));
    return data;
  } catch (error: any) {
    console.error(error);
    dispatch(showSnackbar({ type: 'error', message: 'Something went wrong' }));
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
    console.error(error);
    dispatch(showSnackbar({ type: 'error', message: 'Wrong credentials' }));
  }
}