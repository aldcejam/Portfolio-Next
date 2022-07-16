import { styled } from "@mui/material";

export const StyledPageProjetos = styled('div')`

    .title-page{
        text-align: center;
        h1{
            color: ${(props)=> props.theme.palette.primary.main};
            font-size: 1.4rem;
            line-height: 0px;
            span{
                font-size: 0.1px;
                line-height: 0px;
                opacity: 1;
            }
        }
        h2{
            font-size: 1.8rem;
            text-transform: uppercase;
            color: ${(props)=> props.theme.palette.primary.contrastText};

        }
    }
`