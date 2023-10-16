import { useState } from "react";
import MenuBurguer from "../../components/MenuBurguer/MenuBurguer";
import { StyledHeader, StyledLog } from "./Styled.Header";
import Link from "next/link";

const Header = () => {

    return (
        <Link href="/" style={{ cursor: "pointer" }}>
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