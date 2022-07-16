import { useState } from "react";
import MenuBurguer from "../../components/MenuBurguer/MenuBurguer";
import { StyledHeader, StyledLog } from "./Styled.Header";

const Header = () => {

    return (

        <StyledHeader>
            <StyledLog>
                W
            </StyledLog>
            <MenuBurguer  />
        </StyledHeader>
    )
}

export default Header;