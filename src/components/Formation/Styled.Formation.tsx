import { styled } from "@mui/material";

export const StyledFormation = styled("div")`
  position: relative;
  .vertical-line {
    height: 100%;
    width: 2px;
    background-color: ${({ theme }) => theme.palette.background.default};
    filter: brightness(1.7);
    left: 0;
    right: 0;
    margin: auto;
    position: absolute;
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
        position: absolute;
        z-index: 1;
        top: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 100px;
        border: ${({ theme }) => theme.palette.grey[700]} 2px solid;
        background-color: ${({ theme }) => theme.palette.background.default};
        width: 40px;
        height: 40px;
        color: ${({ theme }) => theme.palette.primary.main};
      }
      h2 {
        margin: 10px 0;
        font-weight: 500;
        font-size: 1.4rem;
        color: ${({ theme }) => theme.palette.secondary.contrastText};
      }
    }
  }
`;
