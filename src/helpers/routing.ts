const TOKEN_KEY = 'shelf_auth_token';
const LOGIN_PAGE_URL = `https://login.${process.env.SHELF_DOMAIN}`;

export const setToken = (token: string) => localStorage.setItem(TOKEN_KEY, token);
export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const redirectToAuthWithReturn = () => {
  const successRedirectURL = `${window.location.origin}/login/`;

  window.location.href = LOGIN_PAGE_URL + successRedirectURL;
};

export const logout = () => {
  // TODO: implement logout
};
