import { StyledPageTitle } from "./Styled.PageTitle"

interface typesPageTitle{
    title: string
    subtitle: string

}

const PageTitle = ({title, subtitle}:typesPageTitle) => {
    return (
        <StyledPageTitle>
            <h1>{title} <br /><span>de aldcejam</span></h1>
            <h2>{subtitle}</h2>
        </StyledPageTitle>
    )
}

export default PageTitle