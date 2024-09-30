import { Box, Grid, GridItem, Text, useColorMode } from "@chakra-ui/react"
import { useTranslation } from "react-i18next"
import { active_link } from "../../../theme"
import Spline from "@splinetool/react-spline"

export const Intro = ({work}) => {
    const { id, model } = work
    const [ t ] = useTranslation("global")
    const { colorMode } = useColorMode()

    const colorText = () => {
        if(colorMode === 'light') return active_link.light 
        return active_link.dark
    }

    return(
            <Box
                id="intro"
                height='100%'
                padding={{base: '50px 0', lg: '100px 0'}}
                width='100%'
                display='flex'
                flexDirection='column'
                gap='10px'
                justifyContent='center'
                alignItems='center'>
                    <Box display='flex' alignItems='center'>    
                        <Text
                            fontSize='4xl'
                            fontWeight='600'
                            textAlign='center'
                            as='h2'
                            >
                            {t(`works.${id}.title`)}
                        </Text>
                        <hr
                            className="typing"
                            style={{width: '35px', height: '1px', backgroundColor: colorText(), rotate: '90deg', marginLeft: '-10px'}}/>
                    </Box>
                <Grid
                    templateColumns={{base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)'}}
                    gap={{base: '10px', md: '', lg: ''}}
                >
                    <GridItem
                        w='100%'
                        display='flex'
                        justifyContent='center'
                        alignItems='center'
                        >
                        <Box
                            padding='30px'
                            display='flex'
                            justifyContent='center'>
                            <Text
                                width={{base: '', lg: '50%'}}
                                fontWeight='300'>
                                    {t(`works.${id}.description`)}
                            </Text>
                        </Box>
                    </GridItem>
                    <GridItem
    w='100%'
    display='flex'
    justifyContent='center'
    alignItems='center'
>
    <Box
        width={{ base: "100%", sm: '500px', md: '600px', lg: "600px" }}
        height="400px"
        marginLeft={{base: '', lg: '40px'}}
    >
        {model ? (
            <>
                <Spline scene={model} style={{ width: '100%', height: '100%' }} />
            </>
        ) : (
            <Text>Cargando modelo...</Text>
        )}
    </Box>
</GridItem>

                </Grid>
            </Box>
    )
}