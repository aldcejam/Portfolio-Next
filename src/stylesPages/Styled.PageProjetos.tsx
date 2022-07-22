import { styled } from "@mui/material";

interface IStyledPageProjetos{
    stylebyupdate: string
}

export const StyledPageProjetos = styled('div')<IStyledPageProjetos>(({ stylebyupdate, ...props }) =>`
    .title-page{
        text-align: center;
        h1{
            color: ${props.theme.palette.primary.main};
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
            color: ${props.theme.palette.primary.contrastText};

        }
    }
    .projects-by-categorys{
        
        .categorys{
            display: flex;
            transition: .5s;
            gap: 50vw;
            ${stylebyupdate == 'StyleForUpdate' ? 'gap: 10px;' : ''}
            justify-content: center;
            padding: 30px 0 40px;
            
            .category-button{
                button{
                    cursor: pointer;
                    transition: all 0.3s linear;
                    border: none;
                    background-color: transparent;
                    font-size: 1rem;
                    color: ${props.theme.palette.primary.contrastText};
                    padding: 10px 15px;
                    border-radius: 100px;
                    text-transform: capitalize;
                }
            }
            .category-button-active{
                button{
                    box-shadow: ${props.theme.shadows[3]};
                    color: ${props.theme.palette.primary.main};
                    
                }
            }
        }
        .projects{
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 30px;
            ${ props.theme.breakpoints.down('md')}{
                grid-template-columns: repeat(2, 1fr);
                
            }
            ${props.theme.breakpoints.down('sm')}{
                grid-template-columns: repeat(1, 1fr);
                
            }

        }
    }
`)