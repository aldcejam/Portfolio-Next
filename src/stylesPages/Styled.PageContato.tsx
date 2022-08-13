import { styled } from "@mui/material";

export const StyledPageContato = styled('div')`

    .container{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
        margin-top: 50px;
        
        ${({theme}) => theme.breakpoints.down('sm')}{
            grid-template-columns: repeat(1, 1fr);
            
        }

    }

`