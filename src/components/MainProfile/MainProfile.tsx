import Image from "next/image";
import { StyledMainProfileRounded } from "./Styled.MainProfile";

const MainProfileRounded = ()=>{
    return(
        <StyledMainProfileRounded>
            <div>
                <Image src={'/profile-pic.png'} layout='fill' width={300} height={300}/>
            </div>
        </StyledMainProfileRounded>
    )
}

export default MainProfileRounded;