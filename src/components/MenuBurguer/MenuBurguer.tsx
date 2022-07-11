import { Modal } from "@mui/material"
import { useState } from "react"
import StyledMenuBurguer from "./Styled.MenuBurguer"

interface IMenuBurguer {
    menuisactive: boolean
    setmenuisative: any
}

const MenuBurguer = ({ menuisactive, setmenuisative }: IMenuBurguer) => {

    const [modalMenuBurguer, setmModalMenuBurguer] = useState(false)

    const ToggleMenuBurguer = ()=>{
        menuisactive ? setmenuisative(false) : setmenuisative(true)
        modalMenuBurguer ? setmModalMenuBurguer(false) : setmModalMenuBurguer(true)
        
    }

    return (
        <>
            <StyledMenuBurguer className="hover-in-shadow" menuisactive={menuisactive.toString()} onClick={() => ToggleMenuBurguer()}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </StyledMenuBurguer>
            <Modal
                sx={{zIndex:2}}
                open={modalMenuBurguer}
            >
                <div></div>
                
            </Modal>
        </>

    )
}

export default MenuBurguer;