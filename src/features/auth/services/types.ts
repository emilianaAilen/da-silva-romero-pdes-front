export enum UserRole {
  user = 'common',
  admin = 'user'
}

export interface UserBasicData {
  email: string;
  password: string;
}

export interface CreateUserData extends UserBasicData {
  username: string;
  roleType: UserRole;
}
