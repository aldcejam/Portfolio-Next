import { styled } from "@mui/material";

export const StyledDesktopFormation = styled("div")`
  position: relative;
  

  ${({ theme }) => theme.breakpoints.up("md")} {
    .vertical-line {
      left: 0;
      right: 0;
      margin: auto;
    }

    .cards {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 100px;

      .cards__formation-card--left {
        text-align: end;
        &::before {
          right: -50px;
          top: 40px;
        }
        .icon-hat {
          color: ${({ theme }) => theme.palette.primary.main};
          right: -70px;
        }
      }

      .cards__formation-card--right {
        &::before {
          left: -50px;
          top: 40px;
        }
        .icon-hat {
          color: ${({ theme }) => theme.palette.primary.main};
          left: -70px;
        }
      }

      .cards__formation-card {
        position: relative;
        box-shadow: ${({ theme }) => theme.shadows[3]};
        color: ${({ theme }) => theme.palette.primary.contrastText};
        padding: 25px;

        &::before {
          content: "";
          position: absolute;
          width: 50px;
          height: 2px;
          background-color: ${({ theme }) => theme.palette.background.default};
          filter: brightness(1.7);
        }

        .icon-hat {
          top: 20px;
        }
        h2 {
          margin: 10px 0;
          font-weight: 500;
          font-size: 1.4rem;
          color: ${({ theme }) => theme.palette.secondary.contrastText};
        }
      }
    }
  }
`;
