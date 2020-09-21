import {State} from '../../state';
import {IAppState} from './state';


export function getAppState(state: State): IAppState {
  return state.appState;
}

export function getIsLoading(state: State) {
  return getAppState(state).isLoading;
}

export function getUserData(state: State) {
  return getAppState(state).userData;
}

export function getUserDetails(state: State) {
  return getAppState(state).userDetails;
}

export function isLoggedIn(state: State) {
  return getAppState(state).isLoggedIn;
}

export function showError(state: State) {
  return getAppState(state).error;
}