import {useNavigation} from '@react-navigation/native';
import {Pressable, Text, View, useWindowDimensions} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ChevronLeftIcon} from 'react-native-heroicons/solid';
import {
  Canvas,
  Circle,
  Fill,
  Group,
  Oval,
  Points,
  Rect,
  SkPoint,
  vec,
} from '@shopify/react-native-skia';
import {useEffect} from 'react';
import {RootStackParamList} from '../navigations/types';

export const BasicComponentScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const window = useWindowDimensions();
  const canvasWidth = window.width - 32;
  useEffect(() => {
    navigation.setOptions({
      headerTitle: '컴포넌트 소개',
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
      <Canvas
        style={{
          width: canvasWidth,
          height: 400,
        }}>
        <Fill color="#2C2C2C" />
        <ReactIcon center={{x: 100, y: 100}} />
        <StarIcon center={{x: 200, y: 200}} />
        <Rect x={20} y={200} width={60} height={60} color="white" />
      </Canvas>
      <Text style={{color: '#F9F9F9'}}>
        {'skia 라이브러리를 이용한 Polygon 그리기'}
      </Text>
    </View>
  );
};

const ReactIcon = ({center}: {center: SkPoint}) => {
  const ovalWidth = 160;
  const ovalHeight = 80;
  const rect = {
    x: center.x - ovalWidth / 2,
    y: center.y - ovalHeight / 2,
    width: ovalWidth,
    height: ovalHeight,
  };
  return (
    <Group color="lightBlue">
      <Circle c={center} r={10} />
      <Oval rect={rect} style="stroke" strokeWidth={5} />
      <Oval
        rect={rect}
        style="stroke"
        strokeWidth={5}
        transform={[{rotate: (Math.PI * 1) / 3}]}
        origin={center}
      />
      <Oval
        rect={rect}
        style="stroke"
        strokeWidth={5}
        transform={[{rotate: (Math.PI * 2) / 3}]}
        origin={center}
      />
      <Oval rect={rect} style="stroke" strokeWidth={5} />
    </Group>
  );
};

const StarIcon = ({center}: {center: SkPoint}) => {
  const points = [
    vec(128 + center.x, 0 + center.y),
    vec(168 + center.x, 80 + center.y),
    vec(256 + center.x, 93 + center.y),
    vec(192 + center.x, 155 + center.y),
    vec(207 + center.x, 244 + center.y),
    vec(128 + center.x, 202 + center.y),
    vec(49 + center.x, 244 + center.y),
    vec(64 + center.x, 155 + center.y),
    vec(0 + center.x, 93 + center.y),
    vec(88 + center.x, 80 + center.y),
    vec(128 + center.x, 0 + center.y),
  ];
  return (
    <Points
      points={points}
      mode="polygon"
      color="#FFCC33"
      style="stroke"
      strokeWidth={4}
      transform={[{scale: 0.7}]}
    />
  );
};
