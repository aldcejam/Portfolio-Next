export interface IProjeto {
    title: string,
    description: string,
    projectCategory: string,
    data: string,
    client?: string,
    link: string,
    technologies: string,
    imageThumb: string,
    images: Array<string>
  }
  
export interface IProjetos extends Array<IProjeto> { }