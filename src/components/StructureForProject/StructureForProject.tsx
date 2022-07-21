import { Modal } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ProjectModal, StyledStructureForProject } from "./Styled.StructureForProject";
import CloseIcon from '@mui/icons-material/Close';

interface IStructureForProject {
    project: {
        title: string,
        description: string,
        projectCategory: string,
        data: string,
        client: string,
        link: string,
        technologies: string,
        imageThumb: string,
        images: Array<string>
    }
}

const StructureForProject = ({ project }: IStructureForProject) => {

    const [StyleForUpdate, setStyleForUpdate] = useState('')

    useEffect(() => {
        setStyleForUpdate('StyleForUpdate');
    }, [project, []])


    const [projectModalIsOpen, setProjectModalIsOpen] = useState(false)

    const ToggleOpenProject = ()=>{
        projectModalIsOpen ? setProjectModalIsOpen(false) : setProjectModalIsOpen(true)
    }

    return (
        <>
            <StyledStructureForProject onClick={() => ToggleOpenProject()} stylebyupdate={StyleForUpdate}>
                <div className="project-thumb">
                    <Image src={project.imageThumb} layout='fill' objectFit="cover" />
                </div>
                <p>ver projeto</p>
                <h3>{project.title}</h3>
            </StyledStructureForProject>
            <Modal
                open={projectModalIsOpen}
            >
                <ProjectModal>
                    <div className="close-button">
                        <CloseIcon/>
                    </div>
                </ProjectModal>
            </Modal>
            
        </>
    )

}

export default StructureForProject;