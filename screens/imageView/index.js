import React from 'react';
import {Text, View, TouchableOpacity,Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import {color} from '../../constants/colors';

const ImageView = ({navigation,route}) => {

    const{imagePath,date,time} = route.params;

   // console.log("Image PAth",imagePath," date",date,' time',time);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.view}>
        <View
          style={styles.headView}>
             <View style={{justifyContent: 'center'}}>
          <TouchableOpacity onPress={() => {
              navigation.goBack();
          }}>
          <Icon name="ios-arrow-back-outline" style={styles.icon} color={color.black}/>

          </TouchableOpacity>
          </View>
          <Text style={styles.headText}>Selfie</Text>
          
           
              <Icon name="ios-arrow-back-outline" style={styles.icon} color={color.white} />
           
         
        </View>
        <View style={styles.imageView}>

        <Image
    source={{uri: `file://${imagePath}`}}
    resizeMode="stretch"
    
    style={styles.image}
    
  />
  <View style={styles.dateTimeView}>
      <Text style={styles.date}>
          {date}
      </Text>
      <Text style={styles.time}>
          {time}
      </Text>
  </View>

        </View>
      </View>
    </SafeAreaView>
  );
};

export default ImageView;
