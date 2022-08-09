import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import StructureForProject from '../components/ThumbProject/ThumbProject'
import { StyledPageProjetos } from '../stylesPages/Styled.PageProjetos'
import {onlyCategories} from '../InsertedProjectsAndCategoty/Category/AllProjectCategories'
import { InsertedProjects } from '../InsertedProjectsAndCategoty/Projects/InsertedProjects'

const Projetos: NextPage = () => {

  const [categorysSelected, setcategorysSelected] = useState('todos')

  const [StyleForUpdate, setStyleForUpdate] = useState('')

  useEffect(() => {
      setStyleForUpdate('StyleForUpdate');
  }, [[]])
  

  return (
    <>
      <Head>
        <title>Projetos</title>
      </Head>
      <StyledPageProjetos stylebyupdate={StyleForUpdate}>
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
              InsertedProjects.map((projeto) => {
                if (projeto.projectCategory == categorysSelected || 'todos' == categorysSelected) {
                  return (
                    <StructureForProject key={projeto.title} project={projeto} />
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
