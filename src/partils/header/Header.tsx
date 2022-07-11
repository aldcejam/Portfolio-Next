import { useState } from "react";
import MenuBurguer from "../../components/MenuBurguer/MenuBurguer";
import { StyledHeader, StyledLog } from "./Styled.Header";

const Header = () => {

    const [menuisative, setmenuisative] = useState(false)

    return (

        <StyledHeader>
            <StyledLog>
                W
            </StyledLog>
            <MenuBurguer  menuisactive={menuisative} setmenuisative={setmenuisative} />
        </StyledHeader>
    )
}

export default Header;