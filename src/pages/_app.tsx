import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeContextProvider } from '../contexts/ThemeContext'
import { Container, StyledGlobal } from '../styles/Styled.App'
import Header from '../partils/header/Header'
import ButtonsForColorize from '../components/ButtonsForColorize/ButtonsForColorize'



function MyApp({ Component, pageProps }: AppProps) {



  return (
    <ThemeContextProvider>
      <StyledGlobal>
        <ButtonsForColorize />
        <Container>
          <Header />
          <Component {...pageProps} />
        </Container>
      </StyledGlobal>
    </ThemeContextProvider>
  )
}

export default MyApp
