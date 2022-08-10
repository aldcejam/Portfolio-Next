import { Modal } from "@mui/material";
import { useState } from "react";

import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import { Container } from "../../stylesPages/Styled.App";
import ComunButton from "../../components/Buttons/ComunButton/ComunButton";

import { StyledProjectModal } from "./Styled.ProjectModal";
import { Splide, SplideSlide } from "@splidejs/react-splide";

interface TypesProjectsModal {
    project: {
        title: string,
        description: string,
        projectCategory: string,
        data: string,
        client?: string,
        link: string,
        technologies: string,
        imageThumb: string,
        images: Array<string>
    }
    projectModalIsOpen: boolean
    ToggleOpenProject: () => void
}

const ProjectsModal = ({ project, projectModalIsOpen, ToggleOpenProject }: TypesProjectsModal) => {
    /* ===== showDetails ===== */

    const [showDetails, setShowDetails] = useState(false)

    const ToggleShowDetails = () => {
        showDetails ? setShowDetails(false) : setShowDetails(true)
    }

    return (
        <Modal
            open={projectModalIsOpen}
            hideBackdrop
            sx={{ outline: 0 }}
        >
            <StyledProjectModal>
                <Container>
                    <div className={`project-details ${showDetails ? 'project-details-open' : ''}`}>
                        <div className="project-details__project-titles">
                            <h2>{project.title}</h2>
                            <h3>categoria - {project.projectCategory}</h3>
                        </div>
                        <hr />
                        <div className="project-details__project-informations">
                            <div className="project-informations__titles">
                                <h2>Sobre o Projeto</h2>
                                <p>{project.description}</p>
                            </div>
                            <div className="project-informations__details">
                                <h2>Informações do projeto</h2>
                                <h3><span>Data -</span> {project.data}</h3>
                                <h3><span>Ferramentas - </span>{project.technologies}</h3>
                                <h3><span>acessar projeto no GitHub -</span><a href={project.link} target="" className="link"> github/project</a></h3>
                            </div>
                        </div>
                    </div>
                    
                    <div className="header">
                        <div className="project-details-toggle-button" onClick={() => ToggleShowDetails()}>
                            <ComunButton
                                textButton={`Detalhes do projeto`}
                                icon={
                                    showDetails ? <RemoveIcon /> : <AddIcon />
                                }
                            />
                        </div>
                        <div className="close-button" onClick={() => ToggleOpenProject()}>
                            <ComunButton icon={<CloseIcon />} />
                        </div>
                    </div>

                    <div className="project-images">
                        <Splide
                            options={{
                                rewind: true,
                                arrows: true,
                                perPage: 1,
                                pagination: false,

                            }}
                            className='splide'
                        >
                            {project.images.map((image) => {
                                return (
                                    <SplideSlide key={image} className="splide-img">
                                        <div>
                                            <div className="loading">
                                                <div></div>
                                                <div></div>
                                                <div></div>
                                            </div>
                                            <img src={image} alt="" />
                                        </div>
                                    </SplideSlide>
                                )
                            })}
                        </Splide>
                    </div>
                </Container>
            </StyledProjectModal>
        </Modal>
    )
}

export default ProjectsModal