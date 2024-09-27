import { useColorMode, Box, Grid, GridItem, Heading, Text } from "@chakra-ui/react"
import { active_link } from '/theme'
import './About.css'
import { useTranslation } from "react-i18next"
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
                </GridItem>
            </Grid>
        </Box>
    )
}