import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  userList: {
    height: '100%',
  },
  name: { fontWeight: 'bold', flex: 1, fontSize: 16 },
  email: {
    flex: 1,
  },
  userCard: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    borderBottomColor: 'black',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    marginLeft: 10,
    height: 75,
    width: '90%',
    justifyContent: 'space-evenly',
    paddingTop: 10,
  },
  errorText: {
    color: 'red',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  value: {
    fontSize: 78,
    paddingHorizontal: 16,
    marginTop: 2,
    color: 'rgb(112, 76, 182)',
  },
  button: {
    backgroundColor: 'rgba(112, 76, 182, 0.1)',
    borderRadius: 2,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 4,
    margin: 2,
  },
  buttonText: {
    color: 'rgb(112, 76, 182)',
    fontSize: 32,
    textAlign: 'center',
  },
  textbox: {
    fontSize: 48,
    padding: 2,
    width: 64,
    textAlign: 'center',
    marginRight: 8,
    borderWidth: 1,
    justifyContent: 'center',
    color: 'rgb(112, 76, 182)',
  },
});
