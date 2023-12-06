import { NextPage } from "next"
import CardContact from "../components/CardContact/CardContact"
import PageTitle from "../components/PageTitle/PageTitle"
import { StyledPageContato } from "../stylesPages/Styled.PageContato";

import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import LinkedInIcon from '@mui/icons-material/LinkedIn';



const Contato: NextPage = () => {
    return (
        <StyledPageContato>
            <PageTitle title="contact" subtitle="Entrar em contato" />

            <div className="container">
                <CardContact
                    link="https://api.whatsapp.com/send?phone=5584987199251&text=ol%C3%A1"
                    icon={<CallIcon />}
                    title="Whatsapp"
                    contact="(84) 987199251"
                />
                <CardContact
                    link="mailto:aldcejam.pro@gmail.com?subject=Hello%20again"
                    icon={<EmailIcon />}
                    title="Email"
                    contact="aldcejam.pro@gmail.com"
                />
                <CardContact
                    link="https://www.linkedin.com/in/aldcejam/"
                    icon={<LinkedInIcon />}
                    title="linkedin"
                    contact="Aldcejam Junior"
                />
            </div>


        </StyledPageContato>
    )
}

export default Contato