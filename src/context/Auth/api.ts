import { Dispatch } from 'react';
// import history from '@services/history';
import * as toastify from '../../services/toastify';

import { setUserSession, USER_FAKE, PASSWORD_FAKE } from '../../helpers/auth';

import { Creators, AuthAction } from './actionsCreators';

function fakeAsyncLogin(user: string, password: string): Promise<boolean> {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      if (user === USER_FAKE && password === PASSWORD_FAKE) {
        resolve(true);
      }
      reject();
    }, 1000),
  );
}

export async function authenticateUser(
  dispatch: Dispatch<AuthAction>,
  user: string,
  password: string,
): Promise<void> {
  dispatch(Creators.handleAuth());

  try {
    const loggedIn = await fakeAsyncLogin(user, password);
    // there is no else to this conditions, failure will fall in catch (fake async)
    if (loggedIn) {
      setUserSession(user);
      dispatch(Creators.handleAuthSuccess());
      toastify.success('Welcome!');
      // history.push('/');
    }
  } catch (err) {
    dispatch(Creators.handleAuthFailure());
    toastify.error('Wrong credentials.', 3000);
  }
}
