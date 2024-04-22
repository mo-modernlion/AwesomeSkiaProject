import {useNavigation} from '@react-navigation/native';
import {Pressable, Text, View} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigations/types';
import {useEffect} from 'react';

export const HomeScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  useEffect(() => {
    navigation.setOptions({
      headerTitle: '홈',
    });
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 32,
        backgroundColor: '#141414',
      }}>
      <Text style={{color: '#F9F9F9', fontSize: 30}}>KONKRIT with Skia</Text>
      <Pressable
        onPress={() => {
          navigation.navigate('BasicComponentScreen');
        }}>
        <Text style={{color: '#F9F9F9'}}>Basic Component Screen</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          navigation.navigate('LineChartScreen');
        }}>
        <Text style={{color: '#F9F9F9'}}>Line Chart Screen</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          navigation.navigate('GifScreen');
        }}>
        <Text style={{color: '#F9F9F9'}}>Gif Screen</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          navigation.navigate('SnapShotViewScreen');
        }}>
        <Text style={{color: '#F9F9F9'}}>SnapShot View Screen</Text>
      </Pressable>
    </View>
  );
};
