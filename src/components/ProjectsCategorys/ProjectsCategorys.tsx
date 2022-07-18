import { BoxShadowHoverDefault } from "../BoxShadowDefaultHover/BoxShadowDefaultHover";
import { StyledRedirectButton } from "../Buttons/RedirectButton/Styled.RedirectButton";

interface IProjectsCategorys {

    category: Array<{
        categoryName: string
    }>

}

const ProjectsCategorys = ({ category }: IProjectsCategorys) => {
    return (
        <>
            {category.map((category) => {
                return (
                    <BoxShadowHoverDefault key={category.categoryName}>
                        <StyledRedirectButton>
                            {category.categoryName}
                        </StyledRedirectButton>
                    </BoxShadowHoverDefault>

                )
            })
            }

        </>
    )
}

export default ProjectsCategorys;