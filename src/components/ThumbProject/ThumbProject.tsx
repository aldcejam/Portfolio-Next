import Image from "next/image";
import { useEffect, useState } from "react";
import { StyledThumbProject } from "./Styled.ThumbProject";
import ProjectsModal from "../../partils/ProjectsModal/ProjectsModal";
import { IProjeto } from "../../ProfileData/InsertedProjectsAndCategoty/TypesProjects/TypesProjects";

interface IStructureForProject {
    project: IProjeto
}

const StructureForProject = ({ project }: IStructureForProject) => {
    
    /* ===== styles ===== */
    const [StyleForUpdate, setStyleForUpdate] = useState('')

    useEffect(() => {
        setStyleForUpdate('StyleForUpdate');
    }, [project, []])


    /* ===== Modal ===== */
    const [projectModalIsOpen, setProjectModalIsOpen] = useState(false)

    const ToggleOpenProject = () => {
        projectModalIsOpen ? setProjectModalIsOpen(false) : setProjectModalIsOpen(true)
    }

    return (
        <>
            <StyledThumbProject onClick={() => ToggleOpenProject()} stylebyupdate={StyleForUpdate}>
                <div className="project-thumb">
                    <Image src={project.imageThumb} layout='fill' objectFit="cover" />
                </div>
                <p>ver projeto</p>
                <h3>{project.title}</h3>
            </StyledThumbProject>

            <ProjectsModal
                project={project}
                ToggleOpenProject={ToggleOpenProject}
                projectModalIsOpen={projectModalIsOpen}
            />



        </>
    )

}

export default StructureForProject;