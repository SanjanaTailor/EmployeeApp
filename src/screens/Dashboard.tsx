import React, {Component} from 'react';
import {FlatList, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {userDetails} from '../json/UserDetails';
import {UserDetailsModel} from '../model/UserDetailsModel';
import {State} from '../state';
import {setUserDetailsData} from '../state/appState/action';
import {getUserDetails} from '../state/appState/selector';
import {styles} from '../style';

interface IProps {
  userData: UserDetailsModel[];
  showUserDetails: (item: UserDetailsModel) => void;
}
interface IState {
  details: UserDetailsModel[];
}

class Dashboard extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      details: userDetails,
    };
  }

  componentDidMount() {
    console.log("Employee componentDidMount called");
  }

  shouldComponentUpdate() {
    console.log("Employee should component update called");
    return false;
  }

  getSnapshotBeforeUpdate() {
    console.log("Employee getSnapshotBeforeUpdate called");
  }

  componentDidUpdate() {
    console.log("employee componentDidUpdate called");
  }

  componentWillUnmount() {
    console.log("employee component Will Unmount called");
  }

  componentDidCatch() {
    console.log("Employee componentDidcatch will called");
  }

  render() {
    return (
      <FlatList<UserDetailsModel>
        data={this.state.details}
        keyExtractor={(item: UserDetailsModel) => item.id}
        ItemSeparatorComponent={this.ListViewItemSeparator}
        renderItem={({item}) => {
          return (
            <View style={styles.flatListContainer}>
              <Text style={styles.textViewContainer}>Id:{item.id}</Text>
              <Text style={styles.textViewContainer}>UserName:{item.name}</Text>
              <Text style={styles.textViewContainer}>Email:{item.email}</Text>
              <Text style={styles.textViewContainer}>Age:{item.age}</Text>
              <Text style={styles.textViewContainer}>Gender:{item.gender}</Text>
              <Text style={styles.textViewContainer}>
                PhoneNumber:{item.phoneNo}
              </Text>
            </View>
          );
        }}
      />
    );
  }

  ListViewItemSeparator = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#000',
        }}
      />
    );
  };
}

const mapStateToProps = (state: State) => ({
  userDetails: getUserDetails(state),
});

const mapDispatchToProps = (dispatch: any) => ({
  showUserDetails: (userData: UserDetailsModel) => {
    dispatch(setUserDetailsData(userData));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
