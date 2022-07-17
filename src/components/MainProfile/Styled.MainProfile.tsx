import { styled } from "@mui/material";

export const StyledMainProfileRounded = styled('div')`
    width: clamp(270px, 30vw, 380px);
    height: clamp(270px, 30vw, 380px);
    border-radius: 1000px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: ${(props)=> props.theme.shadows[1]};
    cursor: auto;
    div{
        box-shadow: ${(props)=> props.theme.shadows[3]};
        overflow: hidden;
        border-radius: 1000px;
        width: clamp(240px, 28vw, 350px);
        height: clamp(240px, 28vw, 350px);
        position: relative;
    }
`