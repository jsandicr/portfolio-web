import ReactDOM from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { ChakraProvider, ColorModeScript, useColorMode, useColorModeValue } from '@chakra-ui/react'
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
import { bg_color } from '../theme.js'

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

  const { colorMode } = useColorMode();
  const bg = useColorModeValue(bg_color.light, bg_color.dark)


  useEffect(() => {
    // Cambiar el color de fondo del elemento html basado en el modo de color
    const htmlElement = document.documentElement;
      htmlElement.style.backgroundColor = bg

    // Limpiar el efecto cuando el componente se desmonte
    return () => {
      htmlElement.style.backgroundColor = ''; // Restablecer al valor por defecto
    };
  }, [bg]);

  useEffect(() => {
    let startX = 0;
    let startY = 0;

    const preventHorizontalScroll = (e) => {
        if (e.touches && e.touches.length === 1) {
            const touch = e.touches[0];
            const deltaX = touch.clientX - startX;
            const deltaY = touch.clientY - startY;

            // Permitir scroll vertical (deltaY), pero prevenir el horizontal (deltaX)
            if (Math.abs(deltaX) > Math.abs(deltaY)) {
                e.preventDefault(); // Solo prevenimos si el desplazamiento es principalmente horizontal
            }
        }
    };

    const handleTouchStart = (e) => {
        if (e.touches && e.touches.length === 1) {
            const touch = e.touches[0];
            startX = touch.clientX;
            startY = touch.clientY;
        }
    };

    // Solo prevenir el scroll horizontal de los eventos de teclado
    const preventHorizontalScrollRows = (e) => {
        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
            e.preventDefault();
        }
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', preventHorizontalScroll, { passive: false });
    window.addEventListener('wheel', preventHorizontalScrollRows, { passive: false });

    return () => {
        window.removeEventListener('touchstart', handleTouchStart);
        window.removeEventListener('touchmove', preventHorizontalScroll);
        window.removeEventListener('wheel', preventHorizontalScrollRows);
    };
}, []);


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
          <Route path="*" element={<Navigate to="/" />} />
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
