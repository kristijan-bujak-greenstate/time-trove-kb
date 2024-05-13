export const endpoints = {
  tasks: '/tasks',
  login: '/auth/login',
  registration: '/auth/registration',
  singleTask: (id: string) => `/tasks/${id}`,
  auth: '/me',
  refreshToken: '/auth/refresh',
};
