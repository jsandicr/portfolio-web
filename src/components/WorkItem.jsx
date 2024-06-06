import { useColorMode, Box, Text } from '@chakra-ui/react'
import { home_text } from "../../theme"

export const WorkItem = ({children, scrollDirection, isScrolling}) => {

    const { colorMode } = useColorMode()

    const colorText = () => {
        if(colorMode === 'light') return home_text.light
        else return home_text.dark
    }

    const scrollMoveDiv = () => {
        if(isScrolling == null) return 'normal'
        return scrollDirection === 'down' ? 'right' : 'left'
    }

    return(
        <Box
            display='flex' 
            flexDirection='column'
            borderStyle='none'
        >
            <div
                className={`my-atropos curved ${scrollMoveDiv()}`}
                style={{width: '25em', height: '15em', margin: '70px 0 50px', borderStyle: 'none'}}>
                    <img
                        src="/src/assets/images/lugares_increibles.png"
                        className={`paper`}
                        style={{width:'100%', height:'100%', objectFit:'cover', objectPosition: 'center' }}/>    
            </div>
            <Text
                margin='-80px -150px 0 0'
                fontSize='4xl'
                fontWeight='900'
                textAlign='center'
                color='transparent'
                as='h2'
                zIndex={2}
                style={{WebkitTextStroke: `2px ${colorText()}`}}
                >{children}</Text>
        </Box>
    )
}