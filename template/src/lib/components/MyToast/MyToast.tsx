import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  LayoutAnimation,
  TouchableOpacity,
  DeviceEventEmitter,
} from 'react-native';
import {RootState} from '@store/allReducers';
import {actionsApp} from '@store/app_reducer';
import {deviceHeight} from '@lib/utils';
import {useSelector} from '@common';
import {dispatch} from '@common';
import {scale} from '@common';

export const EmitCode = {
  Toast: 'toast',
};

const MyToast = () => {
  const {
    toast: {isToast, msg},
  } = useSelector((state: RootState) => state.app);

  useEffect(() => {
    const toastListener = DeviceEventEmitter.addListener(
      EmitCode.Toast,
      doToast,
    );
    // animation
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    return () => {
      toastListener.remove();
    };
  }, [isToast]);

  const renderToast = (msg: string) => {
    if ((msg && !msg) || !isToast) {
      return null;
    }
    const onPress = () => dispatch(actionsApp.removeToast());
    return (
      <TouchableOpacity style={styles.textWrap} onPress={onPress}>
        <Text style={styles.text}>{msg}</Text>
      </TouchableOpacity>
    );
  };

  const doToast = (msg: string, duration = 2000) => {
    if (!isToast) {
      dispatch(actionsApp.addToast({msg: msg}));
      setTimeout(() => {
        dispatch(actionsApp.removeToast());
      }, duration);
    }
  };

  return <View style={styles.container}>{renderToast(msg)}</View>;
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: (deviceHeight - 20) / 10, // padding bottom
    left: (deviceHeight - 20) / 20,
    right: (deviceHeight - 20) / 20, // padding horizontal
    alignItems: 'center',
    zIndex: 9999,
  },
  textWrap: {
    backgroundColor: 'rgba(60,60,60,0.9)',
    padding: scale(10),
    paddingHorizontal: scale(20),
    borderRadius: scale(20),
    marginTop: scale(5),
  },
  text: {
    color: '#FFFFFF',
  },
});

export default MyToast;
