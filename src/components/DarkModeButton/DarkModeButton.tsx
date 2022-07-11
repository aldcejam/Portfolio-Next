import { useThemeContext } from "../../contexts/ThemeContext"
import { StyledDarkModeButton } from "./Styled.DarkModeButton"
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';



const DarkModeButton = () => {

    const {themeName,themeModifier} = useThemeContext()
    

    const toggleTheme = ()=>{
        themeModifier(themeName == 'light' ? 'dark' : 'light')
        localStorage.setItem('@ThemePortfolio', themeName == 'light'? 'dark' : 'light')
    }

    return (
        <StyledDarkModeButton className='hover-in-shadow' onClick={toggleTheme}>
            {themeName == 'light' ? <LightModeIcon className='icon-datkmode' /> : <DarkModeIcon className='icon-datkmode' />}
        </StyledDarkModeButton>
    )
}

export default DarkModeButton