import { styled } from "@mui/material";

export const StyledIndex = styled('div')` 
    position: relative;
    
    .presentation{
        margin-top: -28%;
        ${(props)=> props.theme.breakpoints.down('md')}{
            width: min(100%,300px);
        }
        ${(props) => props.theme.breakpoints.down('md')}{
            
            margin: 10% auto;
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
            margin: 5px 0;
            color: ${(props) => props.theme.palette.text.secondary};
            font-size: clamp(14px, 2vw, 20px);
            font-weight: 500;

        }
    }
    
`

export const PositionMainProfileRounded = styled('div')`
    width: clamp(240px, 30vw, 340px);
    margin: 6% 7% auto auto;

    ${(props) => props.theme.breakpoints.down('md')}{
            
            margin: 10% auto;
        }

`