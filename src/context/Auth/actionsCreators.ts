export enum Actions {
  SET_USER = '@Auth/SET_USER',
  SET_PASSWORD = '@Auth/SET_PASSWORD',

  HANDLE_AUTH = '@Auth/HANDLE_AUTH',
  HANDLE_AUTH_SUCCESS = '@Auth/HANDLE_AUTH_SUCCESS',
  HANDLE_AUTH_FAILURE = '@Auth/HANDLE_AUTH_FAILURE',
}

export type AuthAction =
  | { type: Actions.SET_USER | Actions.SET_PASSWORD; payload: string }
  | {
      type:
        | Actions.HANDLE_AUTH
        | Actions.HANDLE_AUTH_SUCCESS
        | Actions.HANDLE_AUTH_FAILURE;
    };

export const Creators = {
  setUser: (user: string): AuthAction => ({
    type: Actions.SET_USER,
    payload: user,
  }),
  setPassword: (pwd: string): AuthAction => ({
    type: Actions.SET_PASSWORD,
    payload: pwd,
  }),

  handleAuth: (): AuthAction => ({ type: Actions.HANDLE_AUTH }),
  handleAuthSuccess: (): AuthAction => ({ type: Actions.HANDLE_AUTH_SUCCESS }),
  handleAuthFailure: (): AuthAction => ({ type: Actions.HANDLE_AUTH_FAILURE }),
};
