import React, { useState } from 'react';
import dark from '../../../Styles/themes/dark';
import light from '../../../Styles/themes/light';
import Context from './context';

const ThemeChangeProvider: React.FC = ({ children }) => {
    const [theme, setTheme] = useState(light);
    const toggleChangeTheme = () => {
        setTheme(theme.title == 'light' ? dark : light);
    }
    return (
        <Context.Provider
            value={{
                theme: theme,
                setTheme: toggleChangeTheme,
            }}
        >
            {children}
        </Context.Provider>
    );
}

export default ThemeChangeProvider;