type User = {
  id: string;
  username: string;
};

export type LoginResponse = {
  accessToken: string;
  refreshToken: string;
  user: User;
};
