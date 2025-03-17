import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import Hero from './sections/Hero';
import Sobre from './sections/Sobre';
import Precos from './sections/Precos';
import Contato from './sections/Contato';
import { GlobalStyles } from './styles/globals';
import Cabecalho from './sections/components/Cabecalho';

function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Cabecalho />
        <Hero />
        <Sobre />
        <Precos />
        <Contato />
      </ThemeProvider>
    </>
  )
}

export default App;
