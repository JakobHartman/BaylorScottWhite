import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  avatar: {
    flex: 3,
    maxWidth: 100,
    maxHeight: 100,
    marginLeft: 150,
    marginBottom: 40,
    marginTop: 20,
  },
  nameBox: {
    flex: 0.5,
  },
  name: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  subText: {
    textAlign: 'center',
    fontSize: 16,
    color: 'grey',
  },
  text: {
    marginLeft: 5,
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 16,
    textAlign: 'left',
  },
  addressText: {
    marginLeft: 5,
    fontSize: 16,
    textAlign: 'left',
  },
  infoBlock: {
    flex: 2,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 25,
    textAlign: 'center',
    height: 10,
    maxHeight: 30,
    marginTop: 20,
  },
  buttonText: {
    marginTop: 5,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  touchableInfo: {
    display: 'flex',
    flexDirection: 'row',
  },
  infoText: {
    flex: 4,
  },
  infoIcon: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
