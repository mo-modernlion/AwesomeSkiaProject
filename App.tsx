import {Canvas, Circle, Paint, vec} from '@shopify/react-native-skia';
import React from 'react';
import {View} from 'react-native';

const width = 256;
const height = 256;

function App(): JSX.Element {
  const strokeWidth = 10;
  const c = vec(width / 2, height / 2);
  const r = (width - strokeWidth) / 2;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Canvas style={{width, height}}>
        <Circle c={c} r={r} color="red">
          <Paint color="lightblue" />
          <Paint color="#adbce6" style="stroke" strokeWidth={strokeWidth} />
          <Paint color="#ade6d8" style="stroke" strokeWidth={strokeWidth / 2} />
        </Circle>
      </Canvas>
    </View>
  );
}

export default App;
