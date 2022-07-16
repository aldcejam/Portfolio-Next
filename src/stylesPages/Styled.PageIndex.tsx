import { styled } from "@mui/material";

export const StyledPageIndex = styled('div')` 
    position: relative;

    .presentation{
        margin-bottom:0 ;
        margin-top: -28%;
        ${(props) => props.theme.breakpoints.down('md')}{
            width: min(100%,300px);
        }
        ${(props) => props.theme.breakpoints.down('md')}{
            
            margin: 40px auto 0;
        }
        span{
            text-transform: uppercasex;
            color: #bbbbbb;
        }
        h1{
            color: ${(props) => props.theme.palette.text.primary};
            font-size: clamp(30px, 3vw, 50px);
            margin: 12px 0 0 0px;
        }
        h2{
            margin: 5px 0 0 0;
            color: ${(props) => props.theme.palette.text.secondary};
            font-size: clamp(14px, 2vw, 20px);
            font-weight: 500;

        }
    }
    .redirect-buttons{
        margin: 10px auto;
        display: flex;
        gap: 20px;
        ${(props) => props.theme.breakpoints.down('md')}{
            justify-content: center;
         
        }
        button{
            color: ${(props) => props.theme.palette.primary.main};
            font-size: 0.9rem;

        }
        .button-redirect-sobremim{
            width: 140px;
            height: 50px;
            margin-top: 20px;
        }
        .button-redirect-projetos{
            width: 100px;
            height: 50px;
            margin-top: 20px;
        }
    }
`

export const PositionMainProfileRounded = styled('div')`
    width: clamp(240px, 30vw, 340px);
    margin: 6% 7% auto auto;
    cursor: pointer;

    ${(props) => props.theme.breakpoints.down('md')}{
            margin: 10% auto 0;
        }

`