import { NextPage } from "next";
import MainProfile from "../components/MainProfile/MainProfile";
import PageTitle from "../components/PageTitle/PageTitle";
import { StyledPageSobre } from "../stylesPages/Styled.PageSobre";

import { SocialMidias } from "../ProfileData/SocialMidias/SocialMidias";
import TextoSobreMim from "../ProfileData/textoSobreMim/TextoSobreMim";

import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ComunButton from "../components/Buttons/ComunButton/ComunButton";
import { RedirectButton } from "../components/Buttons/RedirectButton/RedirectButton";
import Formation from "../components/Formation/Formation";
import { useState } from "react";
import { Skills } from "../ProfileData/Skills/Skills";


const Sobre: NextPage = () => {

    const [skillsSelected, setSkillsSelected] = useState<'skills' | 'estudos'>('skills')

    return (
        <StyledPageSobre>
            <PageTitle title="main info" subtitle="sobre mim" />
            <div className="profile">
                <div className="profile__identifiers">
                    <div className="identifiers--profile-pic">
                        <MainProfile rounded={false} />
                    </div>
                    <div className="profile__social-midias">
                        <div>
                            <a target={'_blank'} rel="noopener noreferrer" href={SocialMidias.linkGitHub}>
                                <ComunButton icon={<GitHubIcon />} />
                            </a>
                        </div>
                        <div>
                            <a target={'_blank'} rel="noopener noreferrer" href={SocialMidias.linkInstagram}>
                                <ComunButton icon={<InstagramIcon />} />
                            </a>
                        </div>
                        <div>
                            <a target={'_blank'} rel="noopener noreferrer" href={SocialMidias.linkLinkedin}>
                                <ComunButton icon={<LinkedInIcon />} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="profile__informations">
                    <div className="informations--text-about-professional">
                        <TextoSobreMim />
                    </div>
                    <div className="informations__cv-and-contact">
                        <div className="cv-and-contact--cv">
                            <a href="/curriculo-aldcejam.pdf">
                                <ComunButton textButton={'Currículo '} />
                            </a>
                        </div>
                        <div className="cv-and-contact--contact">
                            <RedirectButton link="/contato" textButton="contate-me" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="skills-estudos">
                <div
                    onClick={() => setSkillsSelected("skills")}
                    className={`${skillsSelected == 'skills' ? 'selected' : ''}`}
                >Skills</div>
                <div
                    onClick={() => setSkillsSelected("estudos")}
                    className={`${skillsSelected == 'estudos' ? 'selected' : ''}`}
                >Estudos</div>
            </div>

            {skillsSelected == "estudos" ?
                <Formation /> :
                <div className="skills">
                    <div className="container">
                        {Skills.map(skill => {
                            return (
                                <div key={skill} className="skill">
                                    {skill}
                                </div>
                            )
                        })}
                    </div>
                </div>

            }


        </StyledPageSobre>
    )
}

export default Sobre;