import React, {createContext, useContext, useEffect, useState} from 'react';
import {Appearance, StatusBar} from 'react-native';
import dark from './dark';
import light from './light';

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
  setMode: (mode) => console.log(mode),
});

export const useAppTheme = () => useContext(ThemeContext);

const ManageThemeProvider: React.FC = ({children}) => {
  const [themeState, setThemeState] = useState<ColorScheme>(defaultMode);

  const setMode = (mode: ColorScheme) => {
    console.tron.log(`Changing theme to: ${mode}`);
    setThemeState(mode);
  };

  useEffect(() => {
    const listener = ({colorScheme}: AppearancePreferences) => {
      setThemeState(colorScheme);
    };

    Appearance.addChangeListener(listener);

    return () => Appearance.removeChangeListener(listener);
  }, []);

  return (
    <ThemeContext.Provider value={{mode: themeState, setMode}}>
      <>
        <StatusBar
          backgroundColor={
            themeState === 'dark'
              ? dark.theme.reactNavigation.colors.background
              : light.theme.reactNavigation.colors.background
          }
          barStyle={themeState === 'dark' ? 'light-content' : 'dark-content'}
        />
        {children}
      </>
    </ThemeContext.Provider>
  );
};

const ThemeManager: React.FC = ({children}) => (
  <ManageThemeProvider>{children}</ManageThemeProvider>
);

export default ThemeManager;
