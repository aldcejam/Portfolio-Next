import { styled } from "@mui/material";

export const StyledProjectModal = styled("div")`
  position: absolute;
  width: 100vw;
  min-height: 100vh;
  background-color: ${(props) => props.theme.palette.background.default};
  outline: 0px;
  .project-details-open {
    height: 400px !important;
    margin-bottom: 70px !important;
  }
  .project-details {
    margin: 20px 0 40px;
    transition: height 0.3s;
    height: 0;
    overflow-y: auto;
    color: ${(props) => props.theme.palette.primary.contrastText};

    &__project-titles {
      h2 {
        font-size: 2rem;
        margin: 0;
      }
      h3 {
        font-size: 0.9rem;
        font-weight: 400;
        line-height: 20px;
        margin: 5px 0 20px;
        color: ${(props) => props.theme.palette.grey[100]};
      }
    }

    hr {
      border: ${(props) => props.theme.palette.grey[800]} 1px solid;
    }

    &__project-informations {
      display: grid;
      gap: 50px;
      grid-template-columns: 8fr 4fr;
      margin-top: 30px;
      ${(props) => props.theme.breakpoints.down("md")} {
        grid-template-columns: 12fr;
        gap: 20px;
      }
      h2 {
        margin: 0 0 15px 0;
        font-size: 1.3rem;
      }
      .project-informations__details {
        h3 {
          margin: 0 0 20px;
          font-weight: 400;
          span {
            font-weight: 700;
            font-size: 1rem;
          }
          .link {
            color: ${(props) => props.theme.palette.primary.main};
          }
        }
      }
    }
  }

  .header {
    display: flex;
    justify-content: space-between;
    margin-top: -40px;
    user-select: none;
    .project-details-toggle-button {
      width: 220px;
      button {
        font-size: 1rem;
        color: ${(props) => props.theme.palette.primary.main};
      }
    }
    .close-button {
      width: 40px;
      height: 40px;
      svg {
        font-size: 1.7rem;
      }
    }
  }

  .project-images {
    .splide {
      padding: 20px 0px;
      
      /* ======== arrow slide of Splide ======== */
      .splide__arrow {
        margin: 0 -50px;
        svg {
          fill: ${(props) => props.theme.palette.primary.main};
        }
      }

      .splide-img {
        overflow-y: auto;
        max-height: 75vh;
        padding: 15px;
        box-shadow: ${(props) => props.theme.shadows[1]};

        &::-webkit-scrollbar {
          width: 12px;
        }

        &::-webkit-scrollbar-track {
          background: transparent;
        }

        &::-webkit-scrollbar-thumb {
          background-color: ${(props) => props.theme.palette.text.secondary};
          border-radius: 4px;
        }
        div {
          display: flex;
          justify-content: center;
          .loading {
              position: absolute;
              top: 50%;
              z-index: -1;
              
              div {
                width: 15px;
                height: 15px;
                border-radius: 100px;
                border-color: ${({theme}) => theme.palette.primary.main};
                background-color: #fff;
                &+div{
                  margin-left: 8px;
                }
                &:nth-child(1){
                  animation: loading 1.4s ease infinite;
    
                }
                &:nth-child(2){
                  animation: loading 1.4s ease infinite;
                  animation-delay: 0.3s;
                }
                &:nth-child(3){
                  animation: loading 1.4s ease infinite;
                  animation-delay: 0.6s;
                }
                @keyframes loading {
                  0%{
                    margin-top: 0;
                  }
                  50%{
                    margin-top: -15px;
                  }
                  100%{
                    margin-top: 0;
                  }
                }
    
              }
            }
          
          img {
            width: 100%;
          }
        }
      }
    }
  }
`;
