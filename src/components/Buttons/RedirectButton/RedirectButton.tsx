
import Link from "next/link"
import { BoxShadowHoverDefault } from "../../BoxShadowDefaultHover/BoxShadowDefaultHover"
import { StyledRedirectButton } from "./Styled.RedirectButton"

type typesRedirectButton = {
    textButton: string
    link: string
}

export const RedirectButton = ({ textButton, link }: typesRedirectButton) => {
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

