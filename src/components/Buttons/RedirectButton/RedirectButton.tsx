
import Link from "next/link"
import { BoxShadowHoverDefault } from "../../BoxShadowDefaultHover/BoxShadowDefaultHover"
import { StyledRedirectButton } from "./Styled.RedirectButton"
/* 
interface IRedirectButton {
    textButton: string
    link: string

} */
type IRedirectButton = {
    textButton: string
    link: '/' | string
}

export const RedirectButton = ({ textButton, link }: IRedirectButton) => {
    return (
        <Link href={link}>
            <a>
                <BoxShadowHoverDefault>
                    <StyledRedirectButton>
                        {textButton}
                    </StyledRedirectButton>
                </BoxShadowHoverDefault>
            </a>
        </Link>
    )
}

