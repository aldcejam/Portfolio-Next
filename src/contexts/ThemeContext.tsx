import { ThemeProvider } from '@mui/material'
import { DarkTheme, LightTheme } from '../themes'
import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react";

interface ChildrenProps {
    children: ReactNode;
}
interface IThemeContext {
    themeName: 'light' | 'dark'
    themeModifier: (theme: any) => void
}
const ThemeContext = createContext<IThemeContext>({} as IThemeContext);


export const ThemeContextProvider = ({ children }: ChildrenProps) => {
    const [themeName, setThemeName] = useState<'light' | 'dark'>('dark')
    const themeModifier = (theme: any) => {
        setThemeName(theme)
    }

    const theme = useMemo(() => {
        if (themeName === 'light') {
            return LightTheme
        }

        return DarkTheme
    }, [themeName])
    return (
        <ThemeContext.Provider value={{ themeName, themeModifier }}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )

}


export const useThemeContext = () => {
    return useContext(ThemeContext)
}

