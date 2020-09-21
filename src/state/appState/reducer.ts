import {Action} from '../../action-type';
import {IAppState, defaultAppState} from './state';
import {AppStateActionType} from './action';

const appStateReducer = (
  state: IAppState | undefined,
  action: Action,
): IAppState => {
  if (!state) {
    return defaultAppState();
  }

  if (action.type === AppStateActionType.LoginAttempt) {
    return {...state, isLoading: true, isLoggedIn: false};
  }

  if (action.type === AppStateActionType.LoginSuccess) {
    return {
      ...state,
      isLoading: false,
      isLoggedIn: true,
      userData: action.data,
      error: '',
    };
  }

  if (action.type === AppStateActionType.LoginFailed) {
    return {...state, isLoading: false, isLoggedIn: false, error: action.data};
  }

  if (action.type === AppStateActionType.Logout) {
    return {...state, isLoading: false, isLoggedIn: false};
  }

  if (action.type === AppStateActionType.setUserDetails) {
    return {...state, userDetails: action.data};
  }

  return state;
};

export default appStateReducer;
