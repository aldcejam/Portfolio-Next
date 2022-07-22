import { Modal } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ProjectModal, StyledStructureForProject } from "./Styled.StructureForProject";
import CloseIcon from '@mui/icons-material/Close';
import ComunButton from "../Buttons/ComunButton/ComunButton";

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

    const ToggleOpenProject = () => {
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
                hideBackdrop
                sx={{ outline: 0 }}
                
            >
                <ProjectModal>
                    <div className="container">
                        <div className="project-details">
                            <h2>{project.title}</h2>
                            <h3>categoria - {project.projectCategory}</h3>
                            <hr />
                            <div className="grid">
                                <div className="about-project">
                                    <h2>Sobre o Projeto</h2>
                                    <p>{project.description}</p>
                                </div>
                                <div className="project-information">
                                    <h2>Informações do projeto</h2>
                                    <h3><span>Data -</span> {project.data}</h3>
                                    <h3><span>Ferramentas - </span>{project.description}</h3>
                                    <h3><span>acessar projeto no GitHub -</span><span className="link"> {project.link}</span></h3>
                                </div>
                            </div>
                        </div>
                        <div className="close-button" onClick={() => ToggleOpenProject()}>
                            <ComunButton textButton={<CloseIcon />} />
                        </div>
                    </div>
                </ProjectModal>
            </Modal>

        </>
    )

}

export default StructureForProject;