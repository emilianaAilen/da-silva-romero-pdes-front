export interface UserBasicData {
  email: string;
  password: string;
}

export interface CreateUserData extends UserBasicData {
  name: string;
}
