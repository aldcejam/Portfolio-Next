import { Modal } from "@mui/material";
import { RedirectButton } from "../RedirectButton/RedirectButton";
import { ModalMenuBurguer } from "./Styled.PagesRedirectMenu";

interface IPagesRedirectMenu {
    menuBurguerIsActive: boolean
}

const PagesRedirectMenu = ({ menuBurguerIsActive }: IPagesRedirectMenu) => {
    return (
        <Modal
            sx={{ zIndex: 900}}
            open={menuBurguerIsActive}
            
        >
            <ModalMenuBurguer>
                <div>
                    <div>
                        <RedirectButton link="/" textButton="Home" />
                    </div>
                    <div>
                        <RedirectButton link="/" textButton="Projetos" />
                    </div>
                    <div>
                        <RedirectButton link="/" textButton="Sobre" />
                    </div>
                    <div>
                        <RedirectButton link="/" textButton="Contato" />
                    </div>
                </div>
            </ModalMenuBurguer>
        </Modal>
    )
}

export default PagesRedirectMenu;