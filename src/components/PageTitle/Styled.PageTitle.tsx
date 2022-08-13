import { styled } from "@mui/material";

export const StyledPageTitle = styled('div')`
        text-align: center;
        h1{
            color: ${(props) => props.theme.palette.primary.main};
            font-size: 1rem;
            line-height: 0px;
            text-transform: uppercase;
            font-weight: 300;
            span{
                font-size: 0.1px;
                line-height: 0px;
                opacity: 1;
            }
        }
        h2{
            margin-top: 10px;
            font-size: 1.8rem;
            text-transform: uppercase;
            color: ${(props) => props.theme.palette.secondary.contrastText};
        }
`