import {StyleSheet} from 'react-native';
import {color} from '../../constants/colors';
import {fonts} from '../../constants/fonts';
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  mainView: {
    flex: 1,
    backgroundColor: color.white,
  },

  headView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginVertical: 10,
  },

  headText: {fontSize: 18, color: color.black, fontFamily: fonts.interLight},
  icon: {fontSize: 20},
  scrollContainerStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: color.white,
  },
  imageViewList: {width: '50%', padding: 5, backgroundColor: color.white},
  imageBackground: {
    height: 250,
    backgroundColor: color.brown,
    borderRadius: 20,
  },
  dateTimeView: {marginTop: '50%', alignItems: 'center'},
  dateTime: {color: color.white, fontFamily:fonts.interMedium},
});

export {styles};
