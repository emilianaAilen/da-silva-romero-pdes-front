import { API } from "../../../api";
import { CreateUserData } from "./types";

export const registerUser = async (userData: CreateUserData) => {
  try {
    const response = await fetch(API.createUser, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
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