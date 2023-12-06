import { useState } from "react";
import MenuBurguer from "../../components/MenuBurguer/MenuBurguer";
import { StyledHeader, StyledLog } from "./Styled.Header";
import Link from "next/link";

const Header = () => {

    return (
        <StyledHeader>
            <Link href="/">
                <StyledLog  style={{ cursor: "pointer" }}>
                    W
                </StyledLog>
            </Link>
            <MenuBurguer />
        </StyledHeader>
    )
}

export default Header;