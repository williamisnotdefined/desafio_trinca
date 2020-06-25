import { setItem, getItem, removeItem } from './localStorage';

export const USER_TOKEN = 'user_token';
const USER_TOKEN_VALUE = 'fake_token_value';
export const USER_FAKE = 'user';
export const PASSWORD_FAKE = '123456';

export const removeUser = (): void => {
  removeItem(USER_TOKEN);
  removeItem(USER_FAKE);
};

export const isAuthenticated = (): boolean => {
  const tokenStorage = getItem(USER_TOKEN);

  if (tokenStorage) {
    if (tokenStorage === USER_TOKEN_VALUE) {
      return true;
    }
    // if token is not valid
    removeUser();
    return false;
  }

  return false;
};

export const getUser = (): string => getItem(USER_FAKE);

export const setUserSession = (userValue: string): void => {
  setItem(USER_TOKEN, USER_TOKEN_VALUE);
  setItem(USER_FAKE, userValue);
};
