const AccessToken = "accessToken";

export const storeToken = (token) => localStorage.setItem(AccessToken, token);

export const getToken = () => localStorage.getItem(AccessToken);

export const claerToken = () => localStorage.removeItem(AccessToken);
