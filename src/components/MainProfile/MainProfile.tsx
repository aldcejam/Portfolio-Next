import Image from "next/image";
import { StyledMainProfileRounded } from "./Styled.MainProfile";

const MainProfileRounded = ()=>{
    return(
        <StyledMainProfileRounded>
            <div>
                <Image src={'/profile-pic.png'} layout='fill' />
            </div>
        </StyledMainProfileRounded>
    )
}

export default MainProfileRounded;