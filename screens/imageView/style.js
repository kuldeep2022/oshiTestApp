import {StyleSheet} from 'react-native';
import {fonts} from '../../constants/fonts';
import {color} from '../../constants/colors';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  view: {
    flex: 1,
    backgroundColor: color.white,
  },

  headView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  icon: {fontSize: 20},
  headText: {fontSize: 18, color: color.black, fontFamily: fonts.interLight},
  imageView: {height: '100%', padding: 10},
  image: {
    height: '50%',
    width: '100%',
    borderRadius: 20,
  },
  dateTimeView:{flexDirection:'row',justifyContent:'space-between'},
  date:{color:color.black,fontFamily:fonts.interExtraBold},
  time:{color:color.black,textDecorationLine:'underline',fontFamily:fonts.interExtraBold}
});

export {styles};
