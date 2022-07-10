import { styled } from "@mui/material";

interface IStyledMenuBurguer {
    menuisactive: string
}

const StyledMenuBurguer = styled('div')<IStyledMenuBurguer>(({ menuisactive, ...props }) => `
    position: absolute;
    top: 100px;
    z-index: 999;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;
    border-radius: 99px;
    box-shadow: ${props.theme.shadows[3]};
    transition: all 0.3s ease;

    
    .line{
        background-color: ${props.theme.palette.primary.main};
        width: 25px;
        height: 3px;
        border-radius: 10px;
        transition: 0.5s;
    }
    .line:nth-of-type(1){
        transform: ${menuisactive == 'true' ? 'rotate(45deg)' : 'rotate(0)'};
        
    }
    .line:nth-of-type(2){
        transform: ${menuisactive == 'true' ? 'rotate(45deg)' : 'rotate(0)'};
        margin-top: ${menuisactive == 'true' ? '-4px' : '4px'};
    }
    .line:nth-of-type(3){
        margin-top: ${menuisactive == 'true' ? '-4px' : '4px'};
        transform: ${menuisactive == 'true' ? 'rotate(-45deg)' : 'rotate(0)'};
        
    }
    
    
`)

export default StyledMenuBurguer