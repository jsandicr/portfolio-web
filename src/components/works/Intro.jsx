import { Box, Grid, GridItem, Text } from "@chakra-ui/react"
import { useTranslation } from "react-i18next"

export const Intro = ({work}) => {
    const { id, model } = work
    const [ t ] = useTranslation("global")

    return(
            <Box
                height='100%'
                padding={{base: '50px 0', lg: '100px 0'}}
                width='100%'
                display='flex'
                flexDirection='column'
                gap='10px'
                justifyContent='center'
                alignItems='center'>
                <Text
                    fontSize='4xl'
                    fontWeight='600'
                    textAlign='center'
                    as='h2'
                >
                    {t(`works.${id}.title`)}
                </Text>
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
                            marginLeft='40px'
                        >
                            <iframe
                                src={model}
                                width="100%"
                                height="100%"
                                style={{ border: "none" }}
                            ></iframe>
                        </Box>
                    </GridItem>
                </Grid>
            </Box>
    )
}