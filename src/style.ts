import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
    alignItems: 'center',
    margin: 10,
  },
  textInputView: {
    marginTop: 100,
    marginHorizontal: 40,
    height: 50,
    width: '90%',
    borderWidth: 1,
    color: 'black',
    fontSize: 20,
  },
  labelView: {
    marginTop: 20,
    color: 'black',
    textAlign: 'center',
  },
  error: {
    color: 'red',
  },
  textViewContainer: {
    textAlignVertical: 'center',
    fontSize: 20,
    color: '#000',
  },
  flatListContainer: {
    flex: 1,
    flexDirection: 'column',
    padding: 10,
  },
}) 