import { styled } from "@mui/material";

interface IStyledStructureForProject {
  stylebyupdate: string;
}

export const StyledThumbProject = styled("article")<IStyledStructureForProject>(({ stylebyupdate, ...props }) => `
    position: relative;
    width: 100%;
    height: 225px;
    ${props.theme.breakpoints.down("md")}{
        height: 250px;
    }
    ${props.theme.breakpoints.down("sm")}{
        height: 350px;
    }
    
    padding: 15px 15px 5px;
    box-shadow: ${props.theme.shadows[3]};
    border-radius: 7px;
    cursor: pointer;
    transform: translateY(-20px);
    transition: 0.3s;
    
    ${stylebyupdate == "StyleForUpdate" ? "transform: translateY(20px);" : ""}

    
    
    &:hover .project-thumb{
        transform: translateY(-30px);
    }
    .project-thumb{
        position: relative;
        width: 100%;
        height: 80%;
        ${props.theme.breakpoints.down("md")}{
            height: 80%;
        }
        ${props.theme.breakpoints.down("sm")}{
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

`
);


