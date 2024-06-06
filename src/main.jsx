import ReactDOM from 'react-dom/client'
import { BrowserRouter }  from 'react-router-dom'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import App from './App.jsx'
import './index.css'
import theme from '/theme'
import i18n from "i18next"
import { initReactI18next, I18nextProvider } from "react-i18next"
import global_en from '/src/translations/en/global.json'
import global_es from '/src/translations/es/global.json'

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

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ChakraProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </ChakraProvider>
  </BrowserRouter>
)
