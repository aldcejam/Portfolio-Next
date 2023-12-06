import type { NextPage } from 'next'
import Head from 'next/head'
import MainProfile from '../components/MainProfile/MainProfile'
import { RedirectButton } from '../components/Buttons/RedirectButton/RedirectButton'
import BackgroundGeometric from '../partils/BackgroundGeometric/BackgroundGeometric'
import { PositionMainProfile, StyledPageIndex } from '../stylesPages/Styled.PageIndex'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>HOME</title>
      </Head>
      <BackgroundGeometric />
      <StyledPageIndex>
        <PositionMainProfile>
          <MainProfile rounded={true}/>
        </PositionMainProfile>
        <div className='presentation'>
          <span>Olá</span>
          <h1>Me chamo Aldcejam</h1>
          <h2>e sou desenvolverdor Full-Stack</h2>
        </div>

        <div className='redirect-buttons'>
          <div className='button-redirect-sobremim'>
            <RedirectButton link='/sobre' textButton='Mais sobre mim' />
          </div>
          <div className='button-redirect-projetos'>
            <RedirectButton link='/projetos' textButton='Projetos' />
          </div>
        </div>

      </StyledPageIndex>
    </>
  )
}

export default Home
