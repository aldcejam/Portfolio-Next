import { Modal } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import { StyledProjectModal, StyledStructureForProject } from "./Styled.StructureForProject";
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ComunButton from "../Buttons/ComunButton/ComunButton";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Container } from "../../stylesPages/Styled.App";

interface IStructureForProject {
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
}

const StructureForProject = ({ project }: IStructureForProject) => {

    /* ===== styles ===== */
    const [StyleForUpdate, setStyleForUpdate] = useState('')

    useEffect(() => {
        setStyleForUpdate('StyleForUpdate');
    }, [project, []])


    /* ===== Modal ===== */
    const [StyledProjectModalIsOpen, setStyledProjectModalIsOpen] = useState(false)

    const ToggleOpenProject = () => {
        StyledProjectModalIsOpen ? setStyledProjectModalIsOpen(false) : setStyledProjectModalIsOpen(true)
    }

    /* ===== showDetails ===== */

    const [showDetails, setShowDetails] = useState(false)

    const ToggleShowDetails = () => {
        showDetails ? setShowDetails(false) : setShowDetails(true)
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
                open={StyledProjectModalIsOpen}
                hideBackdrop
                sx={{ outline: 0 }}

            >
                <StyledProjectModal>
                    <Container>
                        <div className="container">
                            <div className={`project-details ${showDetails ? 'project-details-open' : ''}`}>
                                <div className="project-title">
                                    <h2>{project.title}</h2>
                                    <h3>categoria - {project.projectCategory}</h3>
                                </div>
                                <hr />
                                <div className="grid">
                                    <div>
                                        <h2>Sobre o Projeto</h2>
                                        <p>{project.description}</p>
                                    </div>
                                    <div>
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
                                        icon={<AddIcon />}
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
                                                    <img src={image} alt="" />
                                                </div>
                                            </SplideSlide>
                                        )
                                    })}
                                </Splide>
                            </div>
                        </div>
                    </Container>
                </StyledProjectModal>
            </Modal>

        </>
    )

}

export default StructureForProject;