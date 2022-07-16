import type { NextPage } from 'next'
import Head from 'next/head'
import { StyledPageProjetos } from '../stylesPages/Styled.PageProjetos'


const Projetos: NextPage = () => {
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

      </ StyledPageProjetos>
    </>
  )
}

export default Projetos
