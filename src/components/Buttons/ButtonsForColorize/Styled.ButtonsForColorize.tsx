import { styled } from "@mui/material";

interface IStyledButtonsForColorize {
  displaysettingisactive: string
}

export const StyledButtonsForColorize = styled("div")<IStyledButtonsForColorize>(({ displaysettingisactive, ...props }) => `
  position: fixed;
  z-index: 500;
  display: flex;
  color: ${props.theme.palette.secondary.contrastText};
  right: ${displaysettingisactive == 'true' ? '10px' : '-165px'};
  top: 100px;
  transition: all 0.3s linear;

  .buttons{
    .setting-button {
      z-index: 997;
      width: 35px;
      height: 35px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      cursor: pointer;
      border-radius: 99px;
      box-shadow: ${props.theme.shadows[3]};
  
      & + .setting-button {
        margin-top: 10px;
      }
  
      .settings-icon,
      .icon-datkmode {
        font-size: 1.3rem;
      }
      .settings-icon {
        animation: fa-spin 2s infinite linear;
        @keyframes fa-spin {
          0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
          }
          100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
          }
        }
      }

  }
  }
`);

export const StyledMainColorTheme = styled("div")`
  margin-left: 15px;
  top: ${(props) => props.theme.spacing(1.1)};
  box-shadow: ${(props) => props.theme.shadows[3]};
  border-radius: 5px;
  width: 160px;
  height: 70px;
  padding: 10px;

  p {
    margin: 0;
    font-size: 0.9rem;
    font-weight: bold;
    user-select: none;
  }
  div {
    display: flex;
    margin-top: 5px;
    gap: 5px;
    .color{
      width: 25px;
      height: 25px;
      border-radius: 99px;
      background-color: #fff;
      cursor: pointer;
    }
    .color:hover{
      filter: brightness(0.8);
    }
    .color1 {
      background-color: #2eb1ed;
    }
    .color2 {
      background-color: #1fc586;
    }
    .color3 {
      background-color: #fb839e;
    }
    .color4 {
      background-color: #ec9412;
    }
    .color5 {
      background-color: #cc3a3b;
    }
  }
`;
