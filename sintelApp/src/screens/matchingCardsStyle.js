import {StyleSheet} from 'react-native';
import {WHITE} from '../Constants/Colors';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 20,
  },
  imageStyle: {
    flex: 1,
    width: 100,
    height: 130,
    flexDirection: 'column',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: WHITE,
    borderWidth: 3,
  },
  flipText: {
    fontSize: 20,
    color: WHITE,
    fontWeight: 'bold',
  },
});
