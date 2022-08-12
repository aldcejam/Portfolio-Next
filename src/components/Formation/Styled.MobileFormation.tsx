import { styled } from "@mui/material";

export const StyledMobileFormation = styled("div")`
  ${({ theme }) => theme.breakpoints.down("md")} {
    .vertical-line {
      left: 7px;
    }
    .cards {
      display: grid;
      justify-items: end;
      column-gap: 100px;
      .aux-card {
        display: none;
      }
      .cards__formation-card {
        width: 90%;
        position: relative;
        box-shadow: ${({ theme }) => theme.shadows[3]};
        color: ${({ theme }) => theme.palette.primary.contrastText};
        padding: 25px;
        margin-top: 30px;

        &::before {
          content: "";
          position: absolute;
          width: 45px;
          height: 2px;
          background-color: ${({ theme }) => theme.palette.background.default};
          filter: brightness(1.7);
          left: -45px;
          top: 40px;
        }

        .icon-hat {
          top: 20px;
          left: -13%;
          ${({ theme }) => theme.breakpoints.down("sm")} {
            left: -14%;
          }
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
