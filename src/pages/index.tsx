import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import BackgroundGeometric from '../partils/BackgroundGeometric/BackgroundGeometric'
import { StyledIndex } from '../styles/Styled.index'

const Home: NextPage = () => {
  return (
    <>
      <BackgroundGeometric />
      <StyledIndex>
      </StyledIndex>
    </>
  )
}

export default Home
