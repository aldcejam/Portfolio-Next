import { styled } from "@mui/material";

export const StyledRedirectButton = styled('button')`

    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 999px;
    border: 0px solid;
    background-color: transparent;
    color: ${(props)=> props.theme.palette.primary.contrastText};
`