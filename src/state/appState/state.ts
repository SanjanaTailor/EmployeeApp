import {userData} from '../../json/UserData';
import {userDetails} from '../../json/UserDetails';
import {UserModel} from '../../model/UserModel';
let data = new UserModel(userData);

export interface IAppState {
  isLoggedIn: boolean;
  isLoading: boolean;
  userData: UserModel;
  error: string;
  userDetails: any[];
}

export function defaultAppState(): IAppState {
  return {
    isLoggedIn: false,
    isLoading: false,
    userData: data,
    error: '',
    userDetails: userDetails,
  };
}
