import {StyleSheet} from 'react-native';
import {STYLES} from '@common';
import {Theme} from '@react-navigation/native';
import {scale} from '@common';

export const styles = (theme?: Theme) => {
  return StyleSheet.create({
    container: {
      ...STYLES.container,
      backgroundColor: theme?.colors?.background,
    },
    backButtonContainer: {
      ...StyleSheet.absoluteFillObject,
      left: scale(10),
      top: scale(10),
    },
    header: {
      backgroundColor: 'white',
      shadowColor: '#000000',
      paddingTop: 20,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    panelHeader: {
      alignItems: 'center',
    },
    panelHandle: {
      width: 40,
      height: 8,
      borderRadius: 4,
      backgroundColor: '#00000040',
      marginBottom: 10,
    },
  });
};
