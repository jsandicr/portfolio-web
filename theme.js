import { extendTheme } from '@chakra-ui/react'

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({ config })

export const bg_color = {
  light: 'white',
  dark: '#242424'
}

export const active_link = {
  light: '#0B666A',
  dark: '#97FEED'
} 

export const home_text = {
  light: '#0B666A',
  dark: 'white'
} 

export const shadow_color = {
  light: 'white',
  dark: '#97FEED'
} 

export default theme