import { StyledStructureForProject } from "./Styled.StructureForProject";

interface IStructureForProject {
    projeto: {
        title: string,
        description: string,
        projectCategory: string,
        data: string,
        client: string,
        link: string,
        technologies: string,
        imageThumb: string,
        images: Array<String>
    }
}

const StructureForProject = ({projeto}: IStructureForProject) => {

    return (
        <StyledStructureForProject>
            {projeto.projectCategory}
        </StyledStructureForProject>
    )

}

export default StructureForProject;