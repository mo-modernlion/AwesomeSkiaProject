import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  Canvas,
  Image,
  SkImage,
  makeImageFromView,
} from '@shopify/react-native-skia';
import {PixelRatio, Pressable, StyleSheet, Text, View} from 'react-native';
import {useEffect, useRef, useState} from 'react';
import {ChevronLeftIcon} from 'react-native-heroicons/solid';
import {RootStackParamList} from '../navigations/types';

const pd = PixelRatio.get();

export const SnapShotViewScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const ref = useRef<View>(null);
  const [image, setImage] = useState<SkImage | null>(null);
  const onPress = async () => {
    const snapshot = await makeImageFromView(ref);
    setImage(snapshot);
  };

  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'SnapShotViewScreen',
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
      <Text style={{color: '#F9F9F9'}}>{'SnapShot을 만들 어떤 element'}</Text>
      <Text style={{color: '#F9F9F9'}}>
        {'usage: 공유 or 프로필 사진 설정 등'}
      </Text>
      <Pressable onPress={onPress}>
        <View
          ref={ref}
          collapsable={false}
          style={{
            backgroundColor: '#484848',
            width: 280,
            height: 280,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: '#F9F9F9'}}>
            This is a certificate of ownership for an item
          </Text>
        </View>
      </Pressable>
      {image && (
        <>
          <Text style={{color: '#F9F9F9'}}>
            {'skia 라이브러리로 만들어진 SnapShot'}
          </Text>
          <Canvas style={{width: 280, height: 280}}>
            <Image image={image} x={0} y={0} width={280} height={280} />
          </Canvas>
        </>
      )}
    </View>
  );
};
