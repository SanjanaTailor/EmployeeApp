import React, {Component} from 'react';
import {Alert, Button, SafeAreaView, ScrollView, Text} from 'react-native';
import {connect} from 'react-redux';
import TextInputComponent from '../components/TextInputComponent';
import {UserModel} from '../model/UserModel';
import {State} from '../state';
import {login} from '../state/appState/action';
import {
  getIsLoading,
  getUserData,
  isLoggedIn,
  showError,
} from '../state/appState/selector';
import {styles} from '../style';
import UtilityManager from '../UtilityManager';
import {ErrorType} from '../validation/errorMessages';
import * as Navigation from '../RootNavigation';

interface IProps {
  isLoading: boolean;
  userData: UserModel;
  isLoggedIn: boolean;
  error: string;
  loginAttempt: () => void;
  navigation: any;
}
interface IState {
  isValidUsername: boolean;
  isValidPassword: boolean;
  username: string;
  password: string;
  userData?: UserModel;
  error?: string;
  isDisabled: boolean;
}

class Login extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      username: '',
      password: '',
      error: '',
      isValidUsername: false,
      isValidPassword: false,
      isDisabled: true,
    };
    console.log("Login constructor called");
  }

  componentDidMount() {
    console.log("login componentDidMount called");
  }

  shouldComponentUpdate() {
    console.log("login should component update called");
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log("login getSnapshotBeforeUpdate called");
  }

  componentDidUpdate() {
    console.log("login componentDidUpdate called");
  }

  componentWillUnmount() {
    console.log("login component Will Unmount called");
  }

  componentDidCatch() {
    console.log("login componentDidcatch will called");
  }


  loginAttempt = () => {
    if (
      this.state.username === this.props.userData.username &&
      this.state.password === this.props.userData.password
    ) {
      Navigation.navigate('Dashboard', {});
    } else {
      Alert.alert('Please try again with correct username and password');
    }
  };

  render() {
    console.log("render method called of login");
    return (
      <SafeAreaView style={styles.flexContainer}>
        <ScrollView>
          <TextInputComponent
            label={'Username'}
            placeholder={'Enter Username'}
            onChangeText={(newUsername: string) => {
              this.setState({
                isValidUsername: UtilityManager.uiValidationInstance.validateEmail(
                  newUsername,
                ),
                username: newUsername,
              });
            }}
            value={this.state.username}
            error={this.state.isValidUsername ? null : ErrorType.userName}
          />

          <TextInputComponent
            label={'Password'}
            placeholder={'password'}
            secureTextEntry
            onChangeText={(newPassword: string) => {
              this.setState({
                isValidPassword: UtilityManager.uiValidationInstance.validatePassword(
                  newPassword,
                ),
                password: newPassword,
                isDisabled:
                  !this.state.isValidUsername && this.state.isValidPassword
                    ? true
                    : false,
              });
            }}
            value={this.state.password}
            error={this.state.isValidPassword ? null : ErrorType.password}
          />
          <Text style={styles.error}>{this.state.error} </Text>
          <Button
            onPress={() => this.loginAttempt()}
            title="Login"
            disabled={this.state.isDisabled}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state: State) => ({
  isLoading: getIsLoading(state),
  userData: getUserData(state),
  isLoggedIn: isLoggedIn(state),
  error: showError(state),
});

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
  loginAttempt: () => {
    dispatch(login(ownProps.username, ownProps.password));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
