import SettingsIcon from '@mui/icons-material/Settings';
import { useThemeContext } from '../../contexts/ThemeContext';
import DarkModeButton from '../DarkModeButton/DarkModeButton';
import { StyledMainColorTheme, StyledSettingsButtons } from './Styled.SettingsButtons';
import { TYMainColor } from '../../contexts/ThemeContext';
import { useState } from 'react';

const SettingsButtons = () => {

    const { MainColorModifier } = useThemeContext();

    const SelectThemeMainColor = (mainColor: TYMainColor) => {
        MainColorModifier(mainColor)
        localStorage.setItem('@ThemePortfolioColorMain', mainColor)
    }


    const [displaySettingIsActive, SetDisplaySettingIsActive] = useState(false)

    const ToggleDisplaySettings = () => {
        displaySettingIsActive ? SetDisplaySettingIsActive(false) : SetDisplaySettingIsActive(true)
    }

    return (
        <StyledSettingsButtons displaysettingisactive={displaySettingIsActive.toString()}>
            <div className='buttons'>
                <div onClick={() => ToggleDisplaySettings()} className='hover-in-shadow setting-button'>
                    <SettingsIcon className='settings-icon' />
                </div>
                <div className='setting-button'>
                    <DarkModeButton />
                </div>
            </div>
            <StyledMainColorTheme>
                <p>Theme Colors</p>
                <div>
                    <div className='color1 color' onClick={() => SelectThemeMainColor('#2eb1ed')}></div>
                    <div className='color2 color' onClick={() => SelectThemeMainColor('#1fc586')}></div>
                    <div className='color3 color' onClick={() => SelectThemeMainColor('#fb839e')}></div>
                    <div className='color4 color' onClick={() => SelectThemeMainColor('#ec9412')}></div>
                    <div className='color5 color' onClick={() => SelectThemeMainColor('#cc3a3b')}></div>
                </div>
            </StyledMainColorTheme>
        </StyledSettingsButtons>
    )
}

export default SettingsButtons
