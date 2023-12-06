import { styled } from "@mui/material";

export const StyledPageSobre = styled('div')` 
    .profile{
        display: flex;
        align-items: flex-start;
        gap: 30px;
        justify-content: center;
        ${props => props.theme.breakpoints.down('md')}{
            flex-wrap: wrap;
        }
        &__identifiers{
            flex-basis: 100;
            
            .identifiers--profile-pic{
                user-select: none;
                width: clamp(240px, 30vw, 340px);
                height: clamp(240px, 30vw, 340px);
            }
            .profile__social-midias{
                display: flex;
                justify-content: center;
                margin: auto;
                display: flex;
                gap: 10px;
                margin-top: 15px;
                height: 35px;
                div{
                    a{
                      
                        transition: all 0.2s linear !important;
                        &:hover button{
                            color: ${props => props.theme.palette.primary.main} !important;
                        }
                        button{
                            transition: all 0.2s linear !important;
                            padding-top: 2px;
                            color: ${props => props.theme.palette.secondary.contrastText};
                            
                        }
                    }
                }
                
            }
            
            
        }
        &__informations{
            .informations--text-about-professional{
                color: ${props => props.theme.palette.primary.contrastText};
                line-height: 22px;
                letter-spacing: 0.5px;
            }
            .informations__cv-and-contact{
                display: flex;
                gap: 20px;
                margin-top: 40px;
                
                button{
                    color: ${props => props.theme.palette.secondary.main};
                    font-weight: 500;
                    font-size: 1rem;
                    height: 40px;
                    padding: 0 20px;
                }
            }

        }

    }

    .skills-estudos{
        display: flex;
        justify-content: center;
        margin: 100px 0 50px;
        gap: 20px;
        div{
            padding: 13px 18px;
            border-radius: 100px;
            transition: 0.3s;
            cursor: pointer;
            color: ${({ theme }) => theme.palette.primary.contrastText};
            &.selected{
                color:  ${({ theme }) => theme.palette.primary.main};
                box-shadow:  ${({ theme }) => theme.shadows[3]};
            }
        }
    }
    .skills{
        display: flex;
        justify-content: center;

        .container{
            width: clamp(200px,70%,700px);
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 20px;
            margin-bottom: 20px;

            
            .skill{
                padding: 15px 20px;
                border-radius: 100px;
                box-shadow: ${({ theme }) => theme.shadows[1]};
                color: ${({ theme }) => theme.palette.secondary.contrastText};
                user-select: none;
            }
        }
    }
`
