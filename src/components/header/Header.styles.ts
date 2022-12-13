import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  mainTitleBar: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 50,
    backgroundColor: 'blue',
  },
  titleText: {
    flex: 6,
    textAlign: 'left',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    paddingTop: 10,
    paddingLeft: 10,
  },
  iconButtonView: {
    paddingTop: 10,
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-end',
    padding: 10,
    marginLeft: 50,
    height: '100%',
  },
});
