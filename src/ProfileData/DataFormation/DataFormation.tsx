interface IFormation {
    id: number
    startYear: number
    endYear: number
    course: string
    descriotion: string
}

interface typesFormation extends Array<IFormation>{}

export const DataFormation: typesFormation = [
    {
        id: 1,
        startYear: 2019,
        endYear: 2022,
        course: "Informática No Instituto Federal Do Rio Grande Do Norte",
        descriotion: "Desenvolvimento geral em Front-end e Back-end"
    },
    {
        id: 2,
        startYear: 2022,
        endYear: 2022,
        course: "Ignite React Rocketseat",
        descriotion: "Aprofundamento em Front-End com React e suas relações com o Back-End. Construção completa de um site com e sem back-end"
    },
    {
        id: 3,
        startYear: 2021,
        endYear: 2021,
        course: "Front-End Básico(Html/Css/Js) DankiCode",
        descriotion: "Desenvolvimento web inicial para começar com o Front-End."
    },
]