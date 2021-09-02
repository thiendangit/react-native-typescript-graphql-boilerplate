import {StyleSheet} from 'react-native';
import {STYLES} from '@common/style';
import {Theme} from '@react-navigation/native';
import {scale} from '@common/scale';
import {deviceWidth} from '@lib/utils';
import {FontSizeDefault} from '@themes/fontSize';
import {SpacingDefault} from '@themes/spacing';

export const styles = (theme?: Theme) => {
  return StyleSheet.create({
    container: {
      ...STYLES.container,
      backgroundColor: theme?.colors?.background,
    },
    itemContainer: {
      height: scale(70),
      backgroundColor: theme?.colors.background,
      marginTop: scale(10),
      width: deviceWidth - scale(20),
      flexDirection: 'row',
      justifyContent: 'flex-start',
      marginHorizontal: scale(10),
      shadowColor: theme?.colors.text,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    header: {
      paddingVertical: scale(10),
      color: 'red',
      fontSize: FontSizeDefault.FONT_20,
    },
    footerContainer: {
      alignItems: 'center',
      height: scale(60),
    },
  });
};
