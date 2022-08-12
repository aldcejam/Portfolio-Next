import { styled } from "@mui/material";

interface IStyledMainProfile{
    rounded: string
}

export const StyledMainProfile = styled('div')<IStyledMainProfile>(({ rounded, ...props }) => `
    width: 100%;
    height: 100%;
    border-radius: ${rounded == 'true' ?  '1000px': '5px'};
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: ${props.theme.shadows[1]};
    cursor: auto;
    div{
        box-shadow: ${props.theme.shadows[3]};
        overflow: hidden;
        border-radius: ${rounded == 'true' ?  '1000px': '5px'};
        width: 90%;
        height: 90%;
        position: relative;
    }
`)