export interface IProjeto {
    title: string,
    description: string,
    projectCategory: string,
    data: string,
    client?: string,
    linkGIT?: string,
    linkSITE?: string,
    technologies: string,
    imageThumb: string,
    images: Array<string>
  }
  
export interface IProjetos extends Array<IProjeto> { }