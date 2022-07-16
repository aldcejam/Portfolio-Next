import { useState } from "react"
import PagesRedirectMenu from "../PagesRedirectModal/PagesRedirectModal"
import { StyledMenuBurguer } from "./Styled.MenuBurguer"

interface IMenuBurguer {
    menuisactive: boolean
    setmenuisative: any
}

const MenuBurguer = ({ menuisactive, setmenuisative }: IMenuBurguer) => {

    const [MenuBurguerIsActive, setMenuBurguerIsActive] = useState(false)

    const ToggleMenuBurguer = () => {
        menuisactive ? setmenuisative(false) : setmenuisative(true)
        MenuBurguerIsActive ? setMenuBurguerIsActive(false) : setMenuBurguerIsActive(true)

    }

    return (
        <>
            <StyledMenuBurguer className="hover-in-shadow" menuisactive={menuisactive.toString()} onClick={() => ToggleMenuBurguer()}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </StyledMenuBurguer>
            <PagesRedirectMenu menuBurguerIsActive={MenuBurguerIsActive}/>
        </>

    )
}

export default MenuBurguer;