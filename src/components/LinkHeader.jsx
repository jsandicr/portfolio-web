import { ListItem, Text, Box, useColorMode } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { active_link } from '/theme'
import { motion } from 'framer-motion'

export const LinkHeader = ({marginRight, name, href, activeLink}) => {

    const { colorMode } = useColorMode()

    const colorLink = (href, active) => {
        if(activeLink !== href && active === true){
            return undefined
        }
        if(colorMode === 'light') return active_link.light 
        return active_link.dark
    }

    return(
        <ListItem style={{marginRight: `${marginRight}`}}>
            <Link to={href}>
                <Box display='flex' justifyContent='center' alignItems='center'>
                    <motion.div
                        whileHover={{ scale: 1.2, rotate: 40, border: `1px solid ${colorLink(href)}`, cursor: 'pointer' }}
                        whileTap={{
                            scale: 0.8,
                            rotate: -90,
                            borderRadius: "100%"
                        }}
                        style={{ borderRadius: '10px', position: 'absolute', height: '70px', width: '60px'}}
                    />
                    <Text fontWeight={colorMode === 'light' ? 'bold' : undefined} color={()=>colorLink(href, true)} _hover={{textDecor: 'underline'}}>{name}</Text>
                </Box>
            </Link>
        </ListItem>
    )
}