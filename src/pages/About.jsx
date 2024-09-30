import { useColorMode, Box, Grid, GridItem, Heading, Text, Icon } from "@chakra-ui/react"
import { active_link } from '/theme'
import './About.css'
import { useTranslation } from "react-i18next"
import { motion } from 'framer-motion'

export const About = () => {

    const [ t ] = useTranslation("global")
    const { colorMode } = useColorMode()

    const colorText = () => {
        if(colorMode === 'light') return active_link.light 
        return active_link.dark
    }

    return(
        <Box
            id="about"
            height='100vh'
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
        >
            <Grid
                templateColumns={{base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)'}}
                gap={{base: '60px',  md: 2, lg: '60px'}}
            >
                <GridItem
                    w='100%'
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                >
                    <Heading
                        fontSize='4xl'
                        fontWeight='600'
                        as='h1'
                        textAlign='center'
                    >
                        {t("about.title")}
                    </Heading>
                </GridItem>
                <GridItem
                    w='100%'
                    display='grid'
                    gap={3}
                    padding={{base: '40px', md: '', lg: ''}}
                >
                    <Box
                        fontWeight='600'
                        fontSize={{base: '3xl', md: '6xl', lg: '6xl'}}
                    >
                        {t("about.intro").substring(0, 16)}
                        <Box
                            display='flex'
                            alignItems='center'>
                            <Text color={colorText()}>{t("about.intro").substring(16)}</Text>
                            <hr
                                className="typing"
                                style={{width: '55px', height: '1px', backgroundColor: colorText(), rotate: '90deg', marginLeft: '-12px'}}/>
                        </Box>
                    </Box>
                    <hr
                        style={{width: '60px', height: '1px', backgroundColor: colorText()}}
                    />
                    <Text
                        fontWeight='300'
                        maxW='500px'
                    >
                        {t("about.description")}
                    </Text>
                    <Box display='flex' gap='20px'>
                        <a href='https://www.linkedin.com/in/jorge-sandi/' target="_blank" rel="noreferrer">
                            <Box display='flex' justifyContent='center' alignItems='center'>
                                <motion.div
                                    whileHover={{ scale: 0.9, rotate: 40, border: `1px solid ${colorText()}`, cursor: 'pointer' }}
                                    whileTap={{
                                        scale: 0.8,
                                        rotate: -90,
                                        borderRadius: "100%"
                                    }}
                                    style={{ borderRadius: '10px', position: 'absolute', height: '40px', width: '35px'}}
                                />
                                <Icon color={colorText()} viewBox='0 0 24 24' style={{ verticalAlign: 'middle' }} boxSize='20px'>
                                    <path fill="currentColor" d="M20.447 20.452h-3.578v-5.565c0-1.33-.025-3.048-1.848-3.048-1.848 0-2.129 1.442-2.129 2.929v5.684h-3.578V9h3.43v1.561h.049c.478-.9 1.646-1.848 3.384-1.848 3.617 0 4.28 2.379 4.28 5.463v5.276zM5.61 8.197c-1.139 0-2.056-.927-2.056-2.068 0-1.14.917-2.067 2.056-2.067 1.139 0 2.056.927 2.056 2.067 0 1.141-.917 2.068-2.056 2.068zm1.789 12.255H3.83V9h3.568v11.452zM21.99 0H2.01C.898 0 0 .898 0 2.01v19.98C0 23.102.898 24 2.01 24h19.98C23.102 24 24 23.102 24 21.99V2.01C24 .898 23.102 0 21.99 0z"/>
                                </Icon>
                            </Box>
                        </a>
                        <a href='https://github.com/jsandicr' target="_blank" rel="noreferrer">
                            <Box display='flex' justifyContent='center' alignItems='center'>
                                <motion.div
                                    whileHover={{ scale: 0.9, rotate: 40, border: `1px solid ${colorText()}`, cursor: 'pointer' }}
                                    whileTap={{
                                        scale: 0.8,
                                        rotate: -90,
                                        borderRadius: "100%"
                                    }}
                                    style={{ borderRadius: '10px', position: 'absolute', height: '40px', width: '35px'}}
                                />
                                <Icon color={colorText()} viewBox='0 0 24 24' style={{ verticalAlign: 'middle' }} boxSize='20px'>
                                    <path fill='currentColor' d='M12 .297c-6.627 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.388.6.111.82-.261.82-.577v-2.233c-3.338.726-4.038-1.61-4.038-1.61-.546-1.38-1.333-1.749-1.333-1.749-1.09-.745.083-.73.083-.73 1.204.084 1.838 1.238 1.838 1.238 1.068 1.832 2.8 1.301 3.48.994.108-.774.418-1.301.762-1.601-2.665-.303-5.466-1.333-5.466-5.93 0-1.313.469-2.386 1.238-3.23-.124-.303-.537-1.53.116-3.183 0 0 1.007-.322 3.301 1.229.958-.266 1.988-.399 3.006-.404 1.017.005 2.047.138 3.005.404 2.295-1.551 3.301-1.229 3.301-1.229.653 1.653.241 2.88.118 3.183.77.844 1.238 1.917 1.238 3.23 0 4.609-2.804 5.623-5.47 5.92.431.371.815 1.1.815 2.221v3.293c0 .319.219.693.825.577C20.565 22.1 24 17.603 24 12.297c0-6.627-5.373-12-12-12' />
                                </Icon>
                            </Box>
                        </a>
                    </Box>
                </GridItem>
            </Grid>
        </Box>
    )
}