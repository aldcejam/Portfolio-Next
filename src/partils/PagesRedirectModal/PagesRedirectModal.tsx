import { Modal } from "@mui/material";
import { RedirectButton } from "../../components/Buttons/RedirectButton/RedirectButton";
import { ModalMenuBurguer } from "./Styled.PagesRedirectMenu";

interface IPagesRedirectMenu {
    menuBurguerIsActive: boolean
    ToggleMenuBurguer: ()=> void
}

const PagesRedirectMenu = ({ menuBurguerIsActive,ToggleMenuBurguer }: IPagesRedirectMenu) => {
    
    return (
        <Modal
            sx={{ zIndex: 900}}
            open={menuBurguerIsActive}
            
            className='modal-bg'
            
        >
            <ModalMenuBurguer>
                <div>
                    <div onClick={ToggleMenuBurguer}>
                        <RedirectButton link="/" textButton="Home" />
                    </div>
                    <div onClick={ToggleMenuBurguer}>
                        <RedirectButton link="/projetos" textButton="Projetos" />
                    </div>
                    <div onClick={ToggleMenuBurguer}>
                        <RedirectButton link="/sobre" textButton="Sobre" />
                    </div>
                    <div onClick={ToggleMenuBurguer}>
                        <RedirectButton link="/contato" textButton="Contato" />
                    </div>
                </div>
            </ModalMenuBurguer>
        </Modal>
    )
}

export default PagesRedirectMenu;