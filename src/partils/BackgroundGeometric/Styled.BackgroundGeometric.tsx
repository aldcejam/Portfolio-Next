import { styled } from "@mui/material";

export const StyledBackgroundGeometric = styled("div")`
  .effect-1 {
    position: absolute;
    bottom: 40px;
    right: 20vw;
    width: 30px;
    height: 30px;
    border: 4px solid #8a49ff;
    animation: spin 7s linear infinite;
    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(365deg);
      }
    }
  }
  .effect-2 {
    position: absolute;
    top: -120px;
    right: 30vw;
    width: 180px;
    height: 180px;
    border: 25px solid ${(props) => props.theme.palette.primary.main};
    border-radius: 999999px;

    animation: leftBounce 3s ease-in-out infinite;

    @keyframes leftBounce {
      0%,
      100% {
        transform: translateX(0);
      }

      50% {
        transform: translateX(25px);
      }
    }
  }
  .effect-3 {
    position: absolute;
    left: 3%;
    bottom: 20%;
    width: 40px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    animation: topBounce 3s ease-in-out infinite;
    div {
      height: 3px;
      width: 3px;
      background-color: #ff9c07;
      margin: 0 3px 8px;
    }

    @keyframes topBounce {
      0%,
      100% {
        transform: translateY(0);
      }

      50% {
        transform: translateY(25px);
      }
    }
  }

  .effect-4 {
    position: absolute;
    border-top: 30px solid transparent;
    border-left: 30px solid #06d79c;
    left: 25%;
    top: 30%;
    animation: spin2 15s linear infinite;
    @keyframes spin2 {
      0% {
        transform: rotate(0deg);
      }

      100% {
        transform: rotate(360deg);
      }
    }
  }
  .effect-4:before {
    content: "";
    border-top: 30px solid transparent;
    border-left: 30px solid #06d79c;
    position: absolute;
    opacity: 0.5;
    left: -35px;
    top: -25px;
  }

  .effect-5 {
    position: absolute;
    height: 50px;
    width: 50px;
    right: 29%;
    top: 40%;
    display: flex;
    justify-content: space-between;
    border-radius: 50%;
    overflow: hidden;
    animation: spin 10s linear infinite;
    div {
      width: 1px;
      background-color: #4dd0e1;
    }
  }
`;
