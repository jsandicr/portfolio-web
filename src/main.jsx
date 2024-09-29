import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ChakraProvider, ColorModeScript, useColorMode } from '@chakra-ui/react'
import App from './App.jsx'
import './index.css'
import theme from '/theme'
import i18n from "i18next"
import { initReactI18next, I18nextProvider } from "react-i18next"
import global_en from '/src/translations/en/global.json'
import global_es from '/src/translations/es/global.json'
import WorksPage from './pages/WorksPage.jsx'
import { AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        global: global_en
      },
      es: {
        global: global_es
      }
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
})

const AppWrapper = () => {
  const { setColorMode } = useColorMode();

  useEffect(() => {
    // Forzar el modo claro al montar el componente
    setColorMode('light');
  }, [setColorMode]);

  return (
    <I18nextProvider i18n={i18n}>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" Component={App} />
          <Route path="/works/:id" Component={WorksPage} />
        </Routes>
      </AnimatePresence>
    </I18nextProvider>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <AppWrapper />
    </ChakraProvider>
  </BrowserRouter>
)
