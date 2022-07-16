import { useState } from "react"
import PagesRedirectMenu from "../PagesRedirectModal/PagesRedirectModal"
import { StyledMenuBurguer } from "./Styled.MenuBurguer"

const MenuBurguer = () => {

    const [menuBurguerIsActive, setMenuBurguerIsActive] = useState(false)

    const ToggleMenuBurguer = () => {
        menuBurguerIsActive ? setMenuBurguerIsActive(false) : setMenuBurguerIsActive(true)

    }

    return (
        <>
            <StyledMenuBurguer className="hover-in-shadow" menuisactive={menuBurguerIsActive.toString()} onClick={() => ToggleMenuBurguer()}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </StyledMenuBurguer>
            <PagesRedirectMenu menuBurguerIsActive={menuBurguerIsActive} ToggleMenuBurguer={ToggleMenuBurguer}/>
        </>

    )
}

export default MenuBurguer;