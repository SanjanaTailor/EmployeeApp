import {Action} from 'redux';
import {IAppState, defaultAppState} from './state/appState/state';

interface IState {
  appState: IAppState;
}

export default function createState() {
  return {
    appState: defaultAppState(),
  }
}

export function emptyState(state: State, action: Action) {
  return {
    appState: defaultAppState(),
  };
}
export type State = IState;
