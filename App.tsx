import {Canvas, Circle, Group} from '@shopify/react-native-skia';
import React from 'react';
import {View} from 'react-native';

const width = 256;
const height = 256;

function App(): JSX.Element {
  const r = width / 6;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Canvas style={{width, height}}>
        <Group color="lightblue">
          <Circle cx={r} cy={r} r={r} />
          <Group style="stroke" strokeWidth={10}>
            <Circle cx={3 * r} cy={3 * r} r={r} />
          </Group>
        </Group>
      </Canvas>
    </View>
  );
}

export default App;
