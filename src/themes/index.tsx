import React, {createContext, useContext, useEffect, useState} from 'react'
import {Appearance, StatusBar} from 'react-native'
import {ThemeProvider} from '@emotion/react'

import darkTheme from './dark'
import lightTheme from './light'

type ColorScheme = 'light' | 'dark' | null | undefined

type AppearancePreferences = {
    colorScheme: ColorScheme
}

type ThemeContextType = {
    mode: ColorScheme
    setMode: (color: ColorScheme) => void
}

const defaultMode = Appearance.getColorScheme() || 'light';

const ThemeContext = createContext<ThemeContextType>({
    mode: defaultMode,
    setMode: mode => console.log(mode),
});

export const useAppTheme = () => useContext(ThemeContext);

const ManageThemeProvider: React.FC = ({children}) => {
    const [themeState, setThemeState] = useState<ColorScheme>(defaultMode);

    const setMode = (mode: ColorScheme) => {
        console.tron.log(`Changing theme to: ${mode}`);
        setThemeState(mode)
    };

    useEffect(() => {
        const listener = ({colorScheme}: AppearancePreferences) => {
            setThemeState(colorScheme)
        };

        Appearance.addChangeListener(listener);

        return () => Appearance.removeChangeListener(listener)
    }, []);

    return (
        <ThemeContext.Provider value={{mode: themeState, setMode}}>
            <ThemeProvider
                theme={themeState === 'dark' ? darkTheme.theme : lightTheme.theme}>
                <>
                    <StatusBar
                        backgroundColor={
                            themeState === 'dark'
                                ? darkTheme.theme.background
                                : lightTheme.theme.background
                        }
                        barStyle={themeState === 'dark' ? 'light-content' : 'dark-content'}
                    />
                    {children}
                </>
            </ThemeProvider>
        </ThemeContext.Provider>
    )
};

const ThemeManager: React.FC = ({children}) => (
    <ManageThemeProvider>{children}</ManageThemeProvider>
);

export default ThemeManager
