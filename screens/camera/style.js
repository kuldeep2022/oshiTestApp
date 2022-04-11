import {StyleSheet} from 'react-native';
import { color } from '../../constants/colors';
const styles = StyleSheet.create({
    main: {
      flex: 1,
      backgroundColor:color.black
    },
    preview: {
      height:'90%',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    cameraButton:{marginBottom: '10%'},
    icon: {fontSize: 20},
    headView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        marginVertical: 20,
        backgroundColor:color.black,
        
      },
  });

  export {styles}