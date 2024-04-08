type User = {
  id: string;
  username: string;
};

export type LoginResponse = {
  accessToken: string;
  user: User;
};
