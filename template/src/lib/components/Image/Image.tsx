import * as React from 'react';
import {useEffect, useState} from 'react';
import {Animated, View} from 'react-native';
import {enhance} from '@common';
import equals from 'react-fast-compare';
import FastImage, {Source} from 'react-native-fast-image';
import {ImageProps} from './Image.props';

const AnimatedFastImage = Animated.createAnimatedComponent(FastImage);
const BlockAnimated = Animated.createAnimatedComponent(View);

const Image = (props: ImageProps) => {
  const {style: styleOverride = {}, resizeMode = 'contain', source, containerStyle, tintColor, errorImageSource, defaultSource} = props;
  const [image, setImage] = useState<Source>(source);
  const [loadDone, setLoadDone] = useState(false);

  useEffect(() => {
    setImage(source);
  }, [source]);

  const style = React.useMemo(
    () => enhance([styleOverride]),
    [styleOverride],
  );

  const onLoadEnd = () => {
    setLoadDone(true);
  };

  const onError = () => {
    setImage(errorImageSource && errorImageSource || '');
  };
  return (
    <BlockAnimated style={containerStyle}>
      <AnimatedFastImage style={[style]}
                         onError={onError}
                         onLoadEnd={onLoadEnd}
                         tintColor={tintColor}
                         resizeMode={resizeMode} source={image} />
      {!loadDone && defaultSource && (
        <AnimatedFastImage style={[style, {position: 'absolute'}]} resizeMode={resizeMode} source={defaultSource} />
      )}
    </BlockAnimated>
  );
};
export default React.memo(Image, equals);
