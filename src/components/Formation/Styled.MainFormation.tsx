import { styled } from "@mui/material";

export const StyledMainFormation = styled("div")`
  .vertical-line {
    position: absolute;
    height: 100%;
    width: 2px;
    background-color: ${({ theme }) => theme.palette.background.default};
    filter: brightness(1.7);
  }

  .icon-hat {
    position: absolute;
    z-index: 1;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    border: ${({ theme }) => theme.palette.grey[700]} 2px solid;
    background-color: ${({ theme }) => theme.palette.background.default};
    color: ${({ theme }) => theme.palette.primary.main};
  }
`;
