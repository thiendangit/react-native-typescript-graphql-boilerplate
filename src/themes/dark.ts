import {DarkTheme} from '@react-navigation/native'

const dark = {
    theme: {
        reactNavigation: {
            ...DarkTheme,
            // Extend React Navigation theme colors here
            colors: {
                ...DarkTheme.colors,
                primary: '#614ae0',
                background: 'black',
                secondary: '#9080e9',
                border: '#575c66',
                backgroundAlt: '#575c66',
                borderAlt: '#2E3440',
                text: '#ECEFF4',
            },
        },
    },
};

export default dark
