import React, {
  createContext,
  useCallback,
  useReducer,
  useContext,
} from 'react';

import * as AuthRequest from './api';

import { Creators, Actions, AuthAction } from './actionsCreators';

interface AuthContextState {
  name: string;
  password: string;
  loading: boolean;
  setUser(user: string): void;
  setPassword(pwd: string): void;
  authenticateUser(user: string, pwd: string): void;
}

interface AuthState {
  name: string;
  password: string;
  loading: boolean;
}

const INITIAL_STATE: AuthState = {
  name: '',
  password: '',
  loading: false,
};

const AuthContext = createContext<AuthContextState>({} as AuthContextState);

const reducer = (
  state: typeof INITIAL_STATE,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case Actions.SET_USER:
      return { ...state, name: action.payload };
    case Actions.SET_PASSWORD:
      return { ...state, password: action.payload };

    case Actions.HANDLE_AUTH:
      return { ...state, loading: true };
    case Actions.HANDLE_AUTH_SUCCESS:
      return { ...state, loading: false };
    case Actions.HANDLE_AUTH_FAILURE:
      return { ...INITIAL_STATE };

    default:
      return { ...state };
  }
};

const AuthProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const { name, password } = state;

  const setUser = useCallback((user) => dispatch(Creators.setUser(user)), []);
  const setPassword = useCallback(
    (pwd) => dispatch(Creators.setPassword(pwd)),
    [],
  );

  const authenticateUser = useCallback(
    () => AuthRequest.authenticateUser(dispatch, name, password),
    [dispatch, name, password],
  );

  return (
    <AuthContext.Provider
      value={{ ...state, setUser, setPassword, authenticateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextState {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
