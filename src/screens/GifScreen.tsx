import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Canvas, Image, useAnimatedImageValue} from '@shopify/react-native-skia';
import {Pressable, Text, View} from 'react-native';
import {useEffect} from 'react';
import {ChevronLeftIcon} from 'react-native-heroicons/solid';
import {RootStackParamList} from '../navigations/types';
import {useSharedValue} from 'react-native-reanimated';

export const GifScreen = () => {
  const isPaused = useSharedValue(false);
  const cat = useAnimatedImageValue(
    require('../assets/cat-space.gif'),
    isPaused,
  );
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'GifScreen',
      headerLeft: () => (
        <Pressable onPress={() => navigation.goBack()}>
          <View style={{alignItems: 'center', flexDirection: 'row'}}>
            <ChevronLeftIcon width={24} height={24} fill={'#F9F9F9'} />
            <Text style={{color: '#F9F9F9'}}>{'Back'}</Text>
          </View>
        </Pressable>
      ),
    });
  }, []);
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#141414',
        paddingBottom: 32,
        paddingTop: 20,
        gap: 20,
      }}>
      <Pressable onPress={() => (isPaused.value = !isPaused.value)}>
        <Canvas
          style={{
            width: 320,
            height: 180,
          }}>
          <Image
            image={cat}
            x={0}
            y={0}
            width={320}
            height={180}
            fit="contain"
          />
        </Canvas>
      </Pressable>
      <Text style={{color: '#F9F9F9'}}>
        {'skia 라이브러리를 이용한 gif 핸들링'}
      </Text>
      <Text style={{color: '#F9F9F9'}}>
        {'usage: 아이템 디테일이나 gif가 들어가는 곳'}
      </Text>
    </View>
  );
};
