import { styled } from "@mui/material";

export const ModalMenuBurguer = styled('div')`
    width: 100vw;
    height: 100vh;
    background-color: ${(props) => props.theme.palette.background.default};
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    div{
        div{
            &+div{
                margin-top: 15px;
            }
            button{
                font-size: 1.5rem;
                padding: 15px 40px;
            }
        }
        
    }
`
