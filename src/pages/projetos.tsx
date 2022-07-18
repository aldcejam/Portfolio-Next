import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import StructureForProject from '../components/StructureForProject/StructureForProject'
import { StyledPageProjetos } from '../stylesPages/Styled.PageProjetos'
import { InsertedProjects } from '../InsertedProjects/InsertedProjects'



const Projetos: NextPage = () => {



  /* ============ Category ============ */
  
  const categoriesRepeted: any = [];
  const categoriesNoRepeated = InsertedProjects.filter(element => {
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
              InsertedProjects.map((projeto) => {
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
