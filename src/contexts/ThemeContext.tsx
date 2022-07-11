import { ThemeProvider } from '@mui/material'
import { DarkTheme, LightTheme } from '../themes'
import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react";

interface ChildrenProps {
    children: ReactNode;
}
export type TYMainColor = '#fb839e' | '#ec9412' | '#1fc586' | '#2eb1ed' | '#cc3a3b' | string



interface IThemeContext {
    themeName: 'light' | 'dark'
    themeModifier: (theme: any) => void
    MainColorModifier: (mainColorModified: TYMainColor) => void
}
const ThemeContext = createContext<IThemeContext>({} as IThemeContext);


export const ThemeContextProvider = ({ children }: ChildrenProps) => {
    const [themeName, setThemeName] = useState<'light' | 'dark'>('dark')
    const [mainColor, SetMainColor] = useState<TYMainColor>('#2eb1ed')


    /* ============== modifier Theme ============== */

    const themeModifier = (theme: any) => {
        setThemeName(theme)
    }
    const MainColorModifier = (mainColorModified: TYMainColor) => {
        SetMainColor(mainColorModified)
    }



    /* ============== ThemeProvider ============== */

    
    const theme = useMemo(() => {
        if (themeName === 'light') {
            return LightTheme(mainColor)
        }else{
            return DarkTheme(mainColor)
        }

    }, [themeName, mainColor])
    


    /* ============== Restore Themes ============== */
    useEffect(() => {
        const isThemeExist = localStorage.getItem('@ThemePortfolio')
        const defaultTheme = isThemeExist ? isThemeExist : 'light';
        themeModifier(defaultTheme)
        
        const isThemeMainColorExist = localStorage.getItem('@ThemePortfolioColorMain')
        const defaultThemeMainColor = isThemeMainColorExist ? isThemeMainColorExist : '#2eb1ed';
        SetMainColor(defaultThemeMainColor)
    }, [])

    return (
        <ThemeContext.Provider value={{ themeName, themeModifier, MainColorModifier }}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )

}


export const useThemeContext = () => {
    return useContext(ThemeContext)
}

