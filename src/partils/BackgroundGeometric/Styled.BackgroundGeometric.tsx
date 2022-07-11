import { styled } from "@mui/material";

export const StyledBackgroundGeometric = styled('div')`

    .effect-1{
        position: absolute;
        bottom: 40px;
        right: 20vw;
        width: 30px;
        height: 30px;
        border: 4px solid #8a49ff;
        animation: spin 7s linear infinite;
        @keyframes spin {
            from{
                transform: rotate(0deg);
            }
            to{
                transform: rotate(365deg);
            }
        }
    }
    .effect-2{
        position: absolute;
        background-color: #fff;
        width: 200px;
        height: 200px;
        border: 10px solid ${(props)=> props.theme.palette.primary.main};
    }



`