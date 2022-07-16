import type { NextPage } from 'next'
import Head from 'next/head'
import MainProfileRounded from '../components/MainProfile/MainProfile'
import { RedirectButton } from '../components/RedirectButton/RedirectButton'
import BackgroundGeometric from '../partils/BackgroundGeometric/BackgroundGeometric'
import { PositionMainProfileRounded, StyledIndex } from '../styles/Styled.index'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>HOME</title>
      </Head>
      <BackgroundGeometric />
      <StyledIndex>
        <PositionMainProfileRounded>
          <MainProfileRounded />
        </PositionMainProfileRounded>
        <div className='presentation'>
          <span>Olá</span>
          <h1>Me chamo Aldcejam</h1>
          <h2>e sou desenvolverdor Front-End</h2>
        </div>

        <div className='redirect-buttons'>
          <div className='button-redirect-sobremim'>
            <RedirectButton link='/' textButton='Mais sobre mim' />
          </div>
          <div className='button-redirect-projetos'>
            <RedirectButton link='/' textButton='Projetos' />
          </div>
        </div>

      </StyledIndex>
    </>
  )
}

export default Home
