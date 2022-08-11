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
                            <a target={'_blank'} href={SocialMidias.linkGitHub}><GitHubIcon /></a>
                        </div>
                        <div>
                            <a target={'_blank'} href={SocialMidias.linkInstagram}><InstagramIcon /></a>
                        </div>
                        <div>
                            <a target={'_blank'} href={SocialMidias.linkLinkedin}><LinkedInIcon /></a>
                        </div>
                    </div>
                </div>
                <div className="profile__informations">
                    <div className="informations--text-about-professional">
                        <TextoSobreMim />
                    </div>
                    <div className="informations__cv-and-contact">
                        <div className="cv-and-contact--cv">
                            <a href="">
                                <ComunButton textButton={'Currículo '}/>
                            </a>
                        </div>
                        <div className="contact">

                        </div>
                    </div>
                </div>
            </div>


        </StyledPageSobre>
    )
}

export default Sobre;