import StyledMenuBurguer from "./Styled.MenuBurguer"

interface IMenuBurguer{
    menuisactive:boolean
    setmenuisative: any
}

const MenuBurguer = ({menuisactive, setmenuisative}:IMenuBurguer) => {
    
    
    return (
        <StyledMenuBurguer className="hover-in-shadow" menuisactive={menuisactive.toString()} onClick={() => menuisactive ? setmenuisative(false) : setmenuisative(true)}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </StyledMenuBurguer>
        
    )
}

export default MenuBurguer;