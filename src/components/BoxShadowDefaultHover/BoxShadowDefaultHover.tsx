import { styled } from "@mui/material";

export const BoxShadowHoverDefault = styled("div")`
transition: all 0.3s linear;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  height: 100%;
  border-radius: 10000px;
  box-shadow: ${(props) => props.theme.shadows[3]};

  &:hover {
    box-shadow: ${(props) => props.theme.shadows[0]};
  }
  &:hover:before {
    transition: all 0.3s ease;
    content: "";
    position: absolute;
    box-shadow: ${(props) => props.theme.shadows[1]};
    width: 100%;
    height: 100%;
    border-radius: 99px;
    top: 0;
    left: 0;
  }
`;
