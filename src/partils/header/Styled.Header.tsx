import { styled } from "@mui/material";

export const StyledHeader = styled('header')`

    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0 0;
`
export const StyledLog = styled('header')`
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 99px;
    border: 2px solid ${(props)=> props.theme.palette.primary.main};
    font-size: 1.5rem;
    font-weight: 600;
    color: ${(props)=> props.theme.palette.primary.main};
    padding-top: 2px;
    user-select: none;
` 
