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
            <a target={"_blank"} rel="noopener" href={link}>
                <StyledCardContact>
                    <span>{icon}</span>
                    <h3>{title}</h3>
                    <p>{contact}</p>
                </StyledCardContact>
            </a>
    )
}

export default CardContact