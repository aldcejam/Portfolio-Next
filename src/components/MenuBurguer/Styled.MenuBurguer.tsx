import { styled } from "@mui/material";

interface IStyledMenuBurguer {
    menuisactive: string
}

export const StyledMenuBurguer = styled('div')<IStyledMenuBurguer>(({ menuisactive, ...props }) => `
    z-index: 999;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;
    border-radius: 99px;
    box-shadow: ${props.theme.shadows[3]};

    
    .line{
        background-color: ${props.theme.palette.primary.main};
        width: 20px;
        height: 3px;
        border-radius: 10px;
        transition: 0.5s;
    }
    .line:nth-of-type(1){
        transform: ${menuisactive == 'true' ? 'rotate(45deg)' : 'rotate(0)'};

        
    }
    .line:nth-of-type(2){
        transform: ${menuisactive == 'true' ? 'rotate(45deg)' : 'rotate(0)'};
        margin-top: ${menuisactive == 'true' ? '-3px' : '3px'};
    }
    .line:nth-of-type(3){
        margin-top: ${menuisactive == 'true' ? '-3px' : '3px'};
        transform: ${menuisactive == 'true' ? 'rotate(-45deg)' : 'rotate(0)'};
        
    }
    
`)

