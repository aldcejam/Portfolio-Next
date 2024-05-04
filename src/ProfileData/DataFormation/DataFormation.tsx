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
        startYear: 2022,
        endYear: 2022,
        course: "Bacharelado em Tecnologia da Informação (UFRN)",
        descriotion: "Aprofundamento em desenvolvimento mobile com React Native"
    },
    {
        id: 2,
        startYear: 2022,
        endYear: 2022,
        course: "Ignite NodeJS Rocketseat",
        descriotion: "Aprofundamento em Back-End com NodeJS"
    },
    {
        id: 3,
        startYear: 2022,
        endYear: 2022,
        course: "Ignite ReactJS Rocketseat",
        descriotion: "Aprofundamento em Front-End com React e suas relações com o Back-End. Construção completa de um site com e sem back-end"
    }, 
    {
        id: 4,
        startYear: 2021,
        endYear: 2021,
        course: "Front-End Básico(Html/Css/Js) DankiCode",
        descriotion: "Desenvolvimento web inicial para começar com o Front-End."
    },
    {
        id: 5,
        startYear: 2019,
        endYear: 2022,
        course: "Informática (IFRN)",
        descriotion: "Desenvolvimento geral em Front-end e Back-end"
    },
]