import { styled } from "@mui/material";

export const StyledGlobal = styled('div')` 
    height: 100vh;
    background-color: ${(props) => props.theme.palette.background.default};
    
    .hover-in-shadow{
        &:hover{
            box-shadow: ${(props) => props.theme.shadows[0]};
    
        }
        &:hover:after{
            transition: all .3s ease;
        content: "";
        position: absolute;
        box-shadow: ${(props) => props.theme.shadows[1]};
        width: 100%;
        height: 100%;
        border-radius: 99px;
        top:0;
        left: 0;
        z-index:-1;
        }
    }
` 