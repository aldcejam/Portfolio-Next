import Link from "next/link"
import { StyledCardContact } from "./Styled.CardContact"

interface typesCardContact {
    link: string
    title: string
    contact: string
    icon: any
}

const CardContact = ({ title, contact, icon, link }: typesCardContact) => {
    return (
        <Link target={"_blank"}  href={link}>
            <StyledCardContact>
                <span>{icon}</span>
                <h3>{title}</h3>
                <p>{contact}</p>
            </StyledCardContact>
        </Link>
    )
}

export default CardContact