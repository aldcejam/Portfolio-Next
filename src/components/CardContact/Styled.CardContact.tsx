import { styled } from "@mui/material";

export const StyledCardContact = styled('article')`

    display: grid;
    justify-content: center;
    justify-items: center;
    box-shadow: ${({theme})=> theme.shadows[3]};
    padding: 30px 20px;
    cursor: pointer;
    
    span{
        color: ${({theme}) => theme.palette.primary.main};
        svg{
            font-size: 1.7rem;
            
        }
        
        user-select: none;
    }
    h3{
        text-transform: capitalize;
        color: ${({theme}) => theme.palette.secondary.contrastText};
        margin: 10px 0 0px;
        font-size: 1.1rem;
        user-select: none;
    }
    p{
        color: ${({theme}) => theme.palette.primary.contrastText};
        margin-bottom: 0px;
        font-size: 0.9rem;
    }


`