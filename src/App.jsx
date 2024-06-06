import { Header } from './components/Header'
import { useColorModeValue, Box } from '@chakra-ui/react'
import { bg_color } from '/theme'
import { About } from './pages/About'
import { Experience } from './pages/Experience'
import { Home } from './pages/Home'
import { Works } from './pages/Works'
import { LanguageChange } from './components/LanguageChange'

function App() {

  const bg = useColorModeValue(bg_color.light, bg_color.dark)
  
  return (
    <>
      <Box
        bg={bg}>
          <div style={{position: 'sticky', top: '0', display: 'flex', flexDirection: 'column', alignItems: 'end', width: '100%', zIndex: '200'}}>
            <Header />
            <LanguageChange />
          </div>
          <Box
            marginTop='-40vh'>
            <Home />
            <About />
            {/* <Works /> */}
            <Experience />
          </Box>
      </Box>
    </>
  )
}

export default App
