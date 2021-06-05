import { DefaultTheme } from '@react-navigation/native';

const light = {
  theme: {
    reactNavigation: {
      ...DefaultTheme,
      // Extend React Navigation theme colors here
      colors: {
        ...DefaultTheme.colors,
        background: 'white',
        primary: '#614ae0',
        secondary: '#9080e9',
        border: '#bdbdbd',
        backgroundAlt: '#eaeaeb',
        borderAlt: '#bdbdbd',
        text: '#171717',
      },
    },
  },
};

export default light;
