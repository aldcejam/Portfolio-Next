import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import ComunButton from '../components/Buttons/ComunButton/ComunButton'
import StructureForProject from '../components/StructureForProject/StructureForProject'
import { StyledPageProjetos } from '../stylesPages/Styled.PageProjetos'




const Projetos: NextPage = () => {

  interface IProjeto {
    title: string,
    description: string,
    projectCategory: string,
    data: string,
    client: string,
    link: string,
    technologies: string,
    imageThumb: string,
    images: Array<String>
  }
  interface IProjetos extends Array<IProjeto> { }

  /* ============ coloque aqui seus projetos ============ */
  const projetos: IProjetos = [
    {
      title: 'LPS Construção',
      description: 'Este projeto foi desenvolvido na empresa WebSocorro, no qual trabalhei com a semântica html, otimização de imagens, organização de código e responsividade',
      projectCategory: 'LPS',
      data: '2022',
      client: 'Websocorro',
      link: 'https://project-web-construction.vercel.app/',
      technologies: 'ReactJs, NextJs, tailwind, sass',
      imageThumb: '/trumb/project-1.png',
      images: [
        '/large/project-1/1.png',
        '/large/project-1/2.png',
        '/large/project-1/3.png'
      ]
    },
    {
      title: 'LPS Pousada',
      description: 'Este projeto foi desenvolvido na empresa WebSocorro, no qual trabalhei com a semântica html, otimização de imagens, organização de código e responsividade',
      projectCategory: 'LPS',
      data: '2022',
      client: 'Websocorro',
      link: 'https://project-web-construction.vercel.app/',
      technologies: 'Html,css,js',
      imageThumb: '/trumb/project-2.png',
      images: [
        '/large/project-2/1.png',
        '/large/project-2/2.png',
        '/large/project-2/3.png'
      ]
    },
    {
      title: 'LPS Poussa',
      description: 'Este projeto foi desenvolvido na empresa WebSocorro, no qual trabalhei com a semântica html, otimização de imagens, organização de código e responsividade',
      projectCategory: 'next',
      data: '2022',
      client: 'Websocorro',
      link: 'https://project-web-construction.vercel.app/',
      technologies: 'Html,css,js',
      imageThumb: '/trumb/project-2.png',
      images: [
        '/large/project-2/1.png',
        '/large/project-2/2.png',
        '/large/project-2/3.png'
      ]
    },
  ]


  /* ============ Category ============ */

  const categoriesRepeted: any = [];
  const categoriesNoRepeated = projetos.filter(element => {
    const isDuplicate = categoriesRepeted.includes(element.projectCategory);

    if (!isDuplicate) {
      categoriesRepeted.push(element.projectCategory);

      return true;
    }

    return false;
  })
  const onlyCategories = categoriesNoRepeated.map((projeto) => {
    return (
      {
        category: projeto.projectCategory
      }
    )
  })
  onlyCategories.unshift({ category: 'todos' })

  const [categorysSelected, setcategorysSelected] = useState('todos')

  return (
    <>
      <Head>
        <title>Projetos</title>
      </Head>
      <StyledPageProjetos>
        <div className='title-page'>
          <h1>PortFolio <br /><span>de aldcejam</span></h1>
          <h2>Últimos trabalho</h2>
        </div>
        <div className='projects-by-categorys'>

          <div className='categorys'>
            {
              onlyCategories.map((category) => {
                return (
                  <div
                    key={category.category}
                    onClick={() => setcategorysSelected(category.category)}
                    className={`category-button ${categorysSelected == category.category ? 'category-button-active': ''}`}>
                    <button>
                      {category.category}
                    </button>
                  </div>
                )
              })
            }
          </div>

          <div className='projects'>
            {
              projetos.map((projeto) => {
                if (projeto.projectCategory == categorysSelected || 'todos' == categorysSelected) {
                  return (
                    <StructureForProject key={projeto.title} projeto={projeto} />
                  )

                }
              })
            }
          </div>
        </div>
      </StyledPageProjetos>
    </>
  )
}

export default Projetos
