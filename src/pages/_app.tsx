import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeContextProvider } from '../contexts/ThemeContext'
import MenuBurguer from '../components/MenuBurguer/MenuBurguer'
import { useState } from 'react'
import { StyledGlobal } from '../styles/Styled.App'

function MyApp({ Component, pageProps }: AppProps) {

  const [menuisative, setmenuisative] = useState(false)

  return (
    <ThemeContextProvider>
      <StyledGlobal>
        <MenuBurguer menuisactive={menuisative} setmenuisative={setmenuisative} />
        <Component {...pageProps} />
      </StyledGlobal>
    </ThemeContextProvider>
  )
}

export default MyApp
