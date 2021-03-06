import '../stylesPages/globals.css'
import type { AppProps } from 'next/app'
import { ThemeContextProvider } from '../contexts/ThemeContext'
import { Container, StyledGlobal } from '../stylesPages/Styled.App'
import Header from '../partils/header/Header'
import ButtonsForColorize from '../components/Buttons/ButtonsForColorize/ButtonsForColorize'



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
