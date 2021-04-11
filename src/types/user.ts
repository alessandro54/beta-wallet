export type UserParams = {
  firstName:string;
  lastName: string;
  updatedAt?: string;
}

export type Session = {
  accessToken?: string;
  expires?: string;
  user: any;
}

export type User = {
  id: number;
  email: string;
  emailVerified?: string;
  firstName?: string;
  lastName?: string;
  role: string,
  createdAt: string,
  updateAt: string
}

