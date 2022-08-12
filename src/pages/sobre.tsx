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



const Sobre: NextPage = () => {
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
                            <RedirectButton link="/" textButton="contate-me" />
                        </div>
                    </div>
                </div>
            </div>
            
            <Formation/>


        </StyledPageSobre>
    )
}

export default Sobre;