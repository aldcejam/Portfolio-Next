import { ReactNode } from "react";
import { BoxShadowHoverDefault } from "../../BoxShadowDefaultHover/BoxShadowDefaultHover"
import { StyledRedirectButton } from "../RedirectButton/Styled.RedirectButton"
import { StyledComunButton } from "./Styled.ComunButton";

interface ChildrenProps {
    children?: ReactNode;
}
interface IComunButton extends ChildrenProps {
    textButton?: any
    icon?: any

}

const ComunButton = ({ textButton, icon }: IComunButton) => {
    return (
        <BoxShadowHoverDefault>
            <StyledRedirectButton>
                <StyledComunButton className="content-comun-button">
                    {
                        textButton ? <span>{textButton}</span> : null
                    } 
                    {
                        icon ? <span className="icon">{icon}</span> : null
                    } 
                </StyledComunButton>
            </StyledRedirectButton>
        </BoxShadowHoverDefault>
    )
}

export default ComunButton