import { styled } from "@mui/material";

export const StyledPageSobre = styled('div')`
    .profile{
        display: flex;
        gap: 30px;
        &__identifiers{
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            
            .identifiers--profile-pic{
                width: clamp(240px, 30vw, 340px);
                height: clamp(240px, 30vw, 340px);
            }
            .profile__social-midias{
                display: flex;
                gap: 10px;
                margin-top: 15px;
                color: ${props => props.theme.palette.secondary.contrastText};
                
            }
            
            
        }
        &__informations{
            .informations--text-about-professional{
                color: ${props => props.theme.palette.primary.contrastText};
                line-height: 22px;
            }
            .informations__cv-and-contact{
                display: grid;
                grid-template-columns: repeat(4, 1fr) ;
                
                .cv-and-contact--cv{
                    height: 40px;
                    width: 120px;
                    div{
                        color: ${props => props.theme.palette.secondary.main};
                        font-weight: bold;
                        font-size: 1rem;
                    }
                }
            }

        }

    }

`
