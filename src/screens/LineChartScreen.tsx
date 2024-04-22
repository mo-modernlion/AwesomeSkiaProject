import {Canvas, Fill, Path, Skia} from '@shopify/react-native-skia';
import {Pressable, Text, View, useWindowDimensions} from 'react-native';
import data from '../constants/data.json';
import {useNavigation} from '@react-navigation/native';
import {ChevronLeftIcon} from 'react-native-heroicons/solid';
import {useEffect, useState} from 'react';

const yearlyPriceArray = data.data.prices.year.prices.map(item =>
  Number(item[0]),
);
const monthlyPriceArray = data.data.prices.month.prices.map(item =>
  Number(item[0]),
);
const dailyPriceArray = data.data.prices.day.prices.map(item =>
  Number(item[0]),
);
const hourlyPriceArray = data.data.prices.hour.prices.map(item =>
  Number(item[0]),
);

export const LineChartScreen = () => {
  const navigation = useNavigation();
  const window = useWindowDimensions();
  const [state, setState] = useState(0);
  const canvasWidth = window.width - 32;
  const canvasHeight = canvasWidth / 1.6;
  const yearlyPath = getPath(yearlyPriceArray, canvasWidth, canvasHeight);
  const monthlyPath = getPath(monthlyPriceArray, canvasWidth, canvasHeight);
  const dailyPath = getPath(dailyPriceArray, canvasWidth, canvasHeight);
  const hourlyPath = getPath(hourlyPriceArray, canvasWidth, canvasHeight);
  const graphs = [hourlyPath, dailyPath, monthlyPath, yearlyPath];

  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'BTC/USDT',
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
        backgroundColor: '#141414',
        alignItems: 'center',
        paddingTop: 20,
        gap: 20,
      }}>
      <Canvas
        style={{
          width: canvasWidth,
          height: canvasHeight,
        }}>
        <Fill color="#2C2C2C" />
        <Path
          path={graphs[state]}
          style="stroke"
          strokeWidth={1}
          color="#FFCC33"
          strokeJoin="round"
        />
      </Canvas>
      <Text style={{color: '#F9F9F9'}}>
        {'skia 라이브러리를 이용한 chart 그리기'}
      </Text>
      <Text style={{color: '#F9F9F9'}}>
        {'usage: 아이템의 가격이나 토큰의 가격 변화'}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          flex: 1,
          width: '100%',
          paddingHorizontal: 16,
        }}>
        <Button
          onPress={() => {
            setState(0);
          }}
          label={'1H'}
        />
        <Button
          onPress={() => {
            setState(1);
          }}
          label={'1D'}
        />
        <Button
          onPress={() => {
            setState(2);
          }}
          label={'1M'}
        />
        <Button
          onPress={() => {
            setState(3);
          }}
          label={'1Y'}
        />
      </View>
    </View>
  );
};

const getPath = (data: number[], width: number, height: number) => {
  const minPrice = Math.floor(Math.min(...data));
  const maxPrice = Math.floor(Math.max(...data));

  const normalizedX = width / data.length;
  const normalizedY = height / (maxPrice - minPrice);

  const path = Skia.Path.Make();
  path.moveTo(0, (data[0] - minPrice) * normalizedY);
  for (let i = 1; i < data.length; i++) {
    path.lineTo(i * normalizedX, (data[i] - minPrice) * normalizedY);
  }
  return path;
};

const Button = ({onPress, label}: {onPress: () => void; label: string}) => {
  return (
    <Pressable
      style={{
        width: 60,
        height: 40,
        backgroundColor: '#FFCC33',
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onPress={onPress}>
      <Text style={{color: '#141414'}}>{label}</Text>
    </Pressable>
  );
};
