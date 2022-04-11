import React from 'react';
import {View, TouchableOpacity, Platform,Text,Button,LogBox} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RNCamera,} from 'react-native-camera';
import Icon from 'react-native-vector-icons/Ionicons';
import {useCamera} from 'react-native-camera-hooks';
import RNFS from 'react-native-fs';
import {color} from '../../constants/colors';
import { styles } from './style';
import { fonts } from '../../constants/fonts';


const Camera = ({navigation}) => {
  LogBox.ignoreAllLogs(true)

  const [{cameraRef}, {takePicture}] = useCamera(null);

  const captureHandle = async () => {
    try {
      const data = await takePicture();
     // console.log(data.exif.DateTime);
      const filePath = data.uri;
     // console.log('Random', Math.random().toString(36).slice(2));
      const imageName = Math.random().toString(36).slice(2);
      const newFilePath =
        Platform.OS == 'android'
          ? RNFS.ExternalDirectoryPath + `/${imageName}.jpg`
          : RNFS.DocumentDirectoryPath + `/${imageName}.jpg`;
    
      RNFS.moveFile(filePath, newFilePath)
        .then(() => {
         // console.log('Image Moved', filePath, '--to--', newFilePath);
          navigation.goBack();
        })
        .catch(error => {
          console.log(error);
        });
     
    } catch (error) {
      console.log(error);
    }
  };
 



  return (
    <SafeAreaView style={styles.main}>
        <View
          style={styles.headView}>
             <View style={{justifyContent: 'center'}}>
          <TouchableOpacity onPress={() => {
              navigation.goBack();
          }}>
          <Icon name="ios-arrow-back-outline" style={styles.icon} color={color.white}/>

          </TouchableOpacity>
          </View>
        
           
         
        </View>
      <View style={styles.main}>

        <RNCamera
          ref={cameraRef}
          type={RNCamera.Constants.Type.front}
          style={styles.preview}
          notAuthorizedView={
            <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
              <Text style={{color:color.white,fontSize:18,fontFamily:fonts.interBold,marginBottom:10}}>Please Provide Camera Permission</Text>
             
              <Button title='Go Back' onPress={() => {
                navigation.goBack()
              }} />
            
            </View>
          }
        
          captureAudio={false}>
          <TouchableOpacity
            onPress={() => {
              captureHandle();
            }}>
            <Icon
              name="radio-button-on"
              size={80}
              color={color.white}
              style={styles.cameraButton}
            />
          </TouchableOpacity>
        </RNCamera>
      </View>
    </SafeAreaView>
  );
};



export default Camera;
