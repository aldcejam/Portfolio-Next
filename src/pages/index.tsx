import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import MainProfileRounded from '../components/MainProfile/MainProfile'
import BackgroundGeometric from '../partils/BackgroundGeometric/BackgroundGeometric'
import { PositionMainProfileRounded, StyledIndex } from '../styles/Styled.index'

const Home: NextPage = () => {
  return (
    <>
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

      </StyledIndex>
    </>
  )
}

export default Home
