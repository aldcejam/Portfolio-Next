import { ReactNode } from "react";
import { BoxShadowHoverDefault } from "../../BoxShadowDefaultHover/BoxShadowDefaultHover"
import { StyledRedirectButton } from "../RedirectButton/Styled.RedirectButton"

interface ChildrenProps {
    children?: ReactNode;
}
interface IComunButton extends ChildrenProps{
    textButton: any
}

const ComunButton = ({ textButton }:IComunButton) => {
    return (
        <BoxShadowHoverDefault>
            <StyledRedirectButton>
                {textButton}
            </StyledRedirectButton>
        </BoxShadowHoverDefault>
    )
}

export default ComunButton