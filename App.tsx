import {
  Canvas,
  Circle,
  Group,
  LinearGradient,
  vec,
} from '@shopify/react-native-skia';
import React from 'react';
import {View} from 'react-native';

const width = 256;
const height = 256;

function App(): JSX.Element {
  const r = width / 6;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Canvas style={{width, height}}>
        <Circle cx={r} cy={r} r={r}>
          <LinearGradient
            start={vec(0, 0)}
            end={vec(2 * r, 2 * r)}
            colors={['#00ff87', '#60efff']}
          />
        </Circle>
        <Group>
          <LinearGradient
            start={vec(2 * r, 2 * r)}
            end={vec(4 * r, 4 * r)}
            colors={['#0061ff', '#60efff']}
          />
          <Circle cx={3 * r} cy={3 * r} r={r} />
        </Group>
      </Canvas>
    </View>
  );
}

export default App;
