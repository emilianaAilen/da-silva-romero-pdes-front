export enum UserRole {
  user = 'common',
  admin = 'admin'
}

export interface UserBasicData {
  email: string;
  password: string;
}

export interface CreateUserData extends UserBasicData {
  username: string;
  roleType: UserRole;
}
