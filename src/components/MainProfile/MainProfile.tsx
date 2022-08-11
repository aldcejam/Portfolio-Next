import Image from "next/image";
import { StyledMainProfile } from "./Styled.MainProfile";

interface typesMainProfile{
    rounded: boolean

}

const MainProfile= ({rounded = false}:typesMainProfile)=>{
    return(
        <StyledMainProfile rounded={rounded.toString()}>
            <div>
                <Image src={'/profile-pic.png'} layout='fill' />
            </div>
        </StyledMainProfile>
    )
}

export default MainProfile;