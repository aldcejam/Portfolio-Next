import { StyledFormation } from "./Styled.Formation"
import { DataFormation } from "../../ProfileData/DataFormation/DataFormation"
import SchoolIcon from '@mui/icons-material/School';

const Formation = () => {
    return (
        <>
            <StyledFormation>
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
                                                <SchoolIcon/>
                                            </div>
                                        </article>
                                        <article key={formation.id} />
                                        <article key={formation.id} />
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
                                                <SchoolIcon/>
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
            </StyledFormation>
        </>
    )
}

export default Formation