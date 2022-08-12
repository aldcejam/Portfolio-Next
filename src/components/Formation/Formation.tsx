import { StyledDesktopFormation } from "./Styled.DesktopFormation"
import { DataFormation } from "../../ProfileData/DataFormation/DataFormation"
import SchoolIcon from '@mui/icons-material/School';
import { StyledMobileFormation } from "./Styled.MobileFormation";
import { StyledMainFormation } from "./Styled.MainFormation";

const Formation = () => {
    return (
        <StyledMainFormation>
            <StyledDesktopFormation>
                <StyledMobileFormation>

                    <div className="vertical-line"></div>
                    <div className="cards">
                        {
                            DataFormation.map(formation => {
                                if (formation.id % 2 != 0) {
                                    return (
                                        <>
                                            <article className="cards__formation-card cards__formation-card--left" key={formation.id}>
                                                <div className="formation-card__course-period">
                                                    <time dateTime={formation.startYear.toString()}>{formation.startYear}</time> -
                                                    <time dateTime={formation.endYear.toString()}> {formation.endYear}</time>
                                                </div>
                                                <h2>{formation.course}</h2>
                                                <p>{formation.descriotion}</p>
                                                <div className="icon-hat">
                                                    <SchoolIcon />
                                                </div>
                                            </article>
                                            <article className="aux-card" key={formation.id} />
                                            <article className="aux-card" key={formation.id} />
                                        </>

                                    )

                                }
                                else {
                                    return (
                                        <>
                                            <article className="cards__formation-card cards__formation-card--right" key={formation.id}>
                                                <div className="formation-card__course-period">
                                                    <time dateTime={formation.startYear.toString()}>{formation.startYear}</time> -
                                                    <time dateTime={formation.endYear.toString()}> {formation.endYear}</time>
                                                </div>
                                                <h2>{formation.course}</h2>
                                                <p>{formation.descriotion}</p>
                                                <div className="icon-hat">
                                                    <SchoolIcon />
                                                </div>
                                            </article>
                                            <article key={formation.id} />
                                            <article key={formation.id} />
                                        </>
                                    )
                                }
                            })
                        }
                    </div>
                </StyledMobileFormation>
            </StyledDesktopFormation>
        </StyledMainFormation>
    )
}

export default Formation