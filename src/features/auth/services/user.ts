import { API } from "../../../api";
import { CreateUserData, UserBasicData } from "./types";


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

export const loginUser = async (userLogin: UserBasicData) =>{
 // Agregar AUTH login con auth2 o login mediante email de google
  try {
    const response = await fetch(API.loginUser,{
      method: 'POST',
      headers: basicHeaders,
      body: JSON.stringify(userLogin),
    })
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    const data = await response.json();
    console.log('User Logged successfully');
    return data;
  }
  catch(error){
    console.log('Login failed')
  }
}