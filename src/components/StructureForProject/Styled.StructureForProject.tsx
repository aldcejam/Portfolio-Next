import { styled } from "@mui/material";

interface IStyledStructureForProject {
    stylebyupdate: string
    
}

export const StyledStructureForProject = styled('article')<IStyledStructureForProject>(({ stylebyupdate, ...props }) => `
    position: relative;
    width: 100%;
    height: 225px;
    ${props.theme.breakpoints.down('md')}{
        height: 250px;
    }
    ${props.theme.breakpoints.down('sm')}{
        height: 350px;
    }
    
    padding: 15px 15px 5px;
    box-shadow: ${props.theme.shadows[3]};
    border-radius: 7px;
    cursor: pointer;
    transform: translateY(-20px);
    transition: 0.3s;
    
    ${stylebyupdate == 'StyleForUpdate' ? 'transform: translateY(20px);' : ''}

    
    
    &:hover .project-thumb{
        transform: translateY(-30px);
    }
    .project-thumb{
        position: relative;
        width: 100%;
        height: 80%;
        ${props.theme.breakpoints.down('md')}{
            height: 80%;
        }
        ${props.theme.breakpoints.down('sm')}{
            height: 85%;
        }
        transition: 0.3s;
        overflow: hidden;
        border-radius: 7px;
        z-index: 2;
    }
    &:hover p{
        transform: translateY(5px);
        color: ${props.theme.palette.primary.main};
        

    }
    p{
        color: transparent;
        transition: 0.3s;
        position: absolute;
        bottom: 37px;
        font-weight: 600;
        text-transform: capitalize;
    }
    h3{
        color: ${props.theme.palette.primary.contrastText};
        font-size: 0.9rem;
        font-weight: 400;
    
    }

`)

export const ProjectModal = styled('div')`
    position: absolute;
    width: 100vw;
    min-height: 100vh;
    background-color: ${(props) => props.theme.palette.background.default};
    outline: 0px;
    .container{
        position: relative;
        width: 85vw;
        margin: 20px auto;
        color: ${(props) => props.theme.palette.primary.contrastText};
        .project-details{
            

            h2{
                font-size: 2rem;
                margin: 0;
            }
            h3{
                font-size: 0.9rem;
                font-weight: 400;
                line-height: 20px;
                margin: 5px 0 20px;
                color: ${props => props.theme.palette.grey[100]};
            }
            hr{
                border: ${props => props.theme.palette.grey[800]}  1px solid;
            }
            .grid{
                display: grid;
                grid-template-columns: 8fr 4fr;
                margin-top: 30px;
                ${props => props.theme.breakpoints.down('md')}{
                    grid-template-columns: 12fr;

                }
                h2{
                    margin-bottom: 15px;
                    font-size: 1.3rem;
                }
                h3{
                    margin: 0 0 20px;
                    span{
                        font-weight: 700;
                        font-size: 1rem;
                    }
                    .link{
                        color: ${props => props.theme.palette.primary.main};
                    }
                }
                p{
                    margin-bottom: 15px;
                    color: ${props => props.theme.palette.grey[100]};
                }
            }
        }
        
        .close-button{
            position: absolute;
            right: 0;
            top: 0px;
            width: 40px;
            height: 40px;
            border-radius: 1000px;
            svg{
                font-size: 1.7rem;
            }
        }
    }
`