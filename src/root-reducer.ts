import {Action, combineReducers} from 'redux';
import appStateReducer from './state/appState/reducer';
import {emptyState, State} from './state';
import {AppStateActionType} from './state/appState/action';

const AppReducer = combineReducers({
  appState: appStateReducer,
});

const RootReducer = (state: State, action: Action) => {
  if (action.type === AppStateActionType.Logout) {
    state = emptyState(state, action)
  }
  return AppReducer(state, action)
}

export default RootReducer;
