import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {styles} from './style';
import Icon from 'react-native-vector-icons/Feather';
import RNFS from 'react-native-fs';
import {useIsFocused} from '@react-navigation/native';
import {color} from '../../constants/colors';

const Dashboard = ({navigation}) => {
  const [sort, setSort] = useState('des');
  const [count, setCount] = useState(0);
  const [listImage, setListImage] = useState([]);
  const [dateTime, setDateTime] = useState([]);
  const list = [];
  const listObect = [];
  const isFocused = useIsFocused();

  function tConvert(time) {
    time = time
      .toString()
      .match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

    if (time.length > 1) {
      time = time.slice(1);
      time[5] = +time[0] < 12 ? 'AM' : 'PM';
      time[0] = +time[0] % 12 || 12;
    }
    return time.join('');
  }

  function decSort() {
    return dateTime
      .sort((a, b) => {
        const dateA = new Date(`${a}`).valueOf();
        const dateB = new Date(`${b}`).valueOf();

        if (dateA > dateB) {
          return -1;
        }
        return 1;
      })
      .map((item, index) => {
        const Time = new Date(item);

        const temp = [...listImage].reverse();
        const img = temp[index];
        //console.log("Original Image", listImage,"Img Reverse",img)
        return (
          <View style={styles.imageViewList} key={index}>
            <TouchableOpacity
              onPress={() => {
                // console.log("IMG", img, "Date TIme", Time.toLocaleString());
                navigation.navigate('ImageView', {
                  imagePath: img,
                  date: Time.toLocaleDateString(),
                  time: tConvert(Time.toLocaleTimeString()),
                });
              }}>
              <ImageBackground
                source={{uri: `file://${img}`}}
                style={styles.imageBackground}
                borderRadius={20}
                imageStyle={{opacity: 0.6, borderRadius: 20}}
                key={index}>
                <View style={styles.dateTimeView}>
                  <Text style={styles.dateTime}>
                    {Time.toLocaleDateString()}
                  </Text>
                  <Text style={styles.dateTime}>
                    {tConvert(Time.toLocaleTimeString())}
                  </Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        );
      });
  }

  function aceSort() {
    return dateTime
      .sort((a, b) => {
        const dateA = new Date(`${a}`).valueOf();
        const dateB = new Date(`${b}`).valueOf();

        if (dateA > dateB) {
          return 1;
        }
        return -1;
      })
      .map((item, index) => {
        const Time = new Date(item);
        //console.log("Item", item,"Index",index);
        const img = listImage[index];
        // console.log("Original Image", listImage,"Img Reverse",img)
        return (
          <View style={styles.imageViewList} key={index}>
            <TouchableOpacity
              onPress={() => {
                //  console.log("IMG", img, "Date TIme", Time.toLocaleString());
                navigation.navigate('ImageView', {
                  imagePath: img,
                  date: Time.toLocaleDateString(),
                  time: tConvert(Time.toLocaleTimeString()),
                });
              }}>
              <ImageBackground
                source={{uri: `file://${img}`}}
                style={styles.imageBackground}
                borderRadius={20}
                imageStyle={{opacity: 0.6, borderRadius: 20}}
                key={index}>
                <View style={styles.dateTimeView}>
                  <Text style={styles.dateTime}>
                    {Time.toLocaleDateString()}
                  </Text>
                  <Text style={styles.dateTime}>
                    {tConvert(Time.toLocaleTimeString())}
                  </Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        );
      });
  }

  useEffect(() => {
    RNFS.readDir(RNFS.ExternalDirectoryPath).then(result => {
      result.filter(path => {
        list.push(path.path);
        listObect.push(path.mtime);
      }),
        setListImage(list);
      setDateTime(listObect);
    });
  }, [isFocused]);

  useEffect(() => {
    console.log('Inside UseEffect', count);
    if (count % 2 == 0) {
      setSort('des');
    } else {
      setSort('asc');
    }
  }, [count]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.mainView}>
        <View style={styles.headView}>
          <TouchableOpacity
            onPress={() => {
              setCount(count + 1);
            }}>
            <Text style={styles.headText}>sort</Text>
          </TouchableOpacity>
          <Text style={styles.headText}>Selfies</Text>
          <View style={{justifyContent: 'center'}}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Camera');
              }}>
              <Icon name="camera" style={styles.icon} color={color.black} />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView
          contentContainerStyle={styles.scrollContainerStyle}
          horizontal={false}>
          {sort == 'des' ? decSort() : aceSort()}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;
