import { styled } from "@mui/material";

export const StyledProjectModal = styled("div")`
  position: absolute;
  width: 100vw;
  min-height: 100vh;
  background-color: ${(props) => props.theme.palette.background.default};
  outline: 0px;
  .container {
    position: relative;
    margin: auto;
    color: ${(props) => props.theme.palette.primary.contrastText};

    .project-details-open {
      height: 400px !important;
      margin-bottom: 70px !important;
    }
    .project-details {
      margin: 20px 0 40px;
      transition: height 0.3s;
      height: 0;
      overflow-y: auto;

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

      .project-title {
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
      .grid {
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
        .project-title {
          p {
            color: ${(props) => props.theme.palette.grey[100]};
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
      /* ======== arrow slide of Splide ======== */
      .splide__arrows, .splide__arrows--ltr{
        color: #ee0404 !important;

        .splide__arrow--prev {
          svg {
            path {
              background: #ff1010;
            }
          }
        }
      }
      .splide {
        .splide-img {
          overflow-y: auto;
          height: 75vh;
          div {
            display: flex;
            img {
              width: 100%;
            }
          }
        }
      }
    }
  }
`;