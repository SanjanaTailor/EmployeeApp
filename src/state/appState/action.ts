import {UserModel} from '../../model/UserModel';
import {getUserData} from './selector';
import * as Navigation from '../../RootNavigation';
import {UserDetailsModel} from '../../model/UserDetailsModel';

export enum AppStateActionType {
  LoginAttempt = 'LOGIN_ATTEMPT',
  LoginSuccess = 'LOGIN_SUCCESS',
  LoginFailed = 'LOGIN_FAILED',
  Logout = 'LOUGOUT',
  setUserDetails = 'SET_USER_DETAILS',
}

export function isLoading(loder: boolean) {
  return (dispatch: any) => {
    dispatch({
      type: AppStateActionType.LoginAttempt,
      data: loder,
    });
  };
}

export function loginSuccess(userData: UserModel) {
  return (dispatch: any) => {
    dispatch({
      type: AppStateActionType.LoginSuccess,
      data: userData,
    });
  };
}

export function loginFailed(error: Object) {
  return (dispatch: any) => {
    dispatch({
      type: AppStateActionType.LoginFailed,
      data: error,
    });
  };
}

export function setUserDetailsData(userDetails: UserDetailsModel) {
  return (dispatch: any) => {
    dispatch({
      type: AppStateActionType.setUserDetails,
      data: userDetails,
    });
  };
}

export function login(userName: string, password: string) {
  return (dispatch: any, getState: any) => {
    let userData = getUserData(getState());
    console.log(userData);
    if (userName === userData.username && password === userData.password) {
      dispatch(isLoading(true));
      dispatch(loginSuccess(userData));
      dispatch(Navigation.navigate('Dashboard', {}));
    } else {
      dispatch(isLoading(false));
      dispatch(loginFailed('Login failed'));
    }
  };
}

