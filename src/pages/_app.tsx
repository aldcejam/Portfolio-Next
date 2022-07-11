import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeContextProvider } from '../contexts/ThemeContext'
import { Container, StyledGlobal } from '../styles/Styled.App'
import Header from '../partils/header/Header'
import SettingsButtons from '../components/SettingsButtons/SettingsButtons'



function MyApp({ Component, pageProps }: AppProps) {



  return (
    <ThemeContextProvider>
      <StyledGlobal>
        <SettingsButtons />
        <Container>
          <Header />
          <Component {...pageProps} />
        </Container>
      </StyledGlobal>
    </ThemeContextProvider>
  )
}

export default MyApp
