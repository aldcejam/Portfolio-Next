import { useState } from "react";
import { Link } from "next/link";
import MenuBurguer from "../../components/MenuBurguer/MenuBurguer";
import { StyledHeader, StyledLog } from "./Styled.Header";

const Header = () => {

    return (
        <Link href="/"> 
            <StyledHeader>
                <StyledLog>
                    W
                </StyledLog>
                <MenuBurguer />
            </StyledHeader>
        </Link>
    )
}

export default Header;