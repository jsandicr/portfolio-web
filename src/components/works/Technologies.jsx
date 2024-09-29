import { Box, Grid, GridItem, Text, useColorMode } from "@chakra-ui/react"
import { useTranslation } from "react-i18next"
import { active_link } from "../../../theme"

export const Technologies = ({work}) => {

    const { id } = work
    const [ t ] = useTranslation("global")
    const { colorMode } = useColorMode()

    const colorText = () => {
        if(colorMode === 'light') return active_link.light 
        return active_link.dark
    }

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
                <Box display='flex' alignItems='center'>
                    <Text fontSize='4xl' fontWeight='600' textAlign='center' as='h2'>
                        Demo
                    </Text>
                    <hr
                        className="typing"
                        style={{width: '35px', height: '1px', backgroundColor: colorText(), rotate: '90deg', marginLeft: '-10px'}}/>
                </Box>
            <Grid
                templateColumns={{base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)'}}
                gap={{base: '10px', md: '', lg: ''}}
                marginTop='10px'
            >
                <GridItem
                    display='flex'
                    justifyContent='center'>
                    <Box display='flex'
                    justifyContent='center'
                    alignItems='center'
                    height={work.type == 2 ? {base: '50vh', lg: '60vh'} : {base: '35vh', lg: '40vh'}}
                    width={work.type == 2 ? {base: '40vw', lg: '25vw'} : {base: '100vw', lg: '45vw'}}
                    paddingLeft={{ base: '0px', md: '120px', lg: '150px'}}>
                        <img
                            src={work.demo}
                            alt="Demonstration Code"
                            style={{ width: '70%', height: '70%', borderRadius: '10px' }}
                        />
                    </Box>
                </GridItem>
                <GridItem>
                    <Box
                        display='flex'
                        justifyContent='center'
                        alignItems='center'
                        height='100%'
                        padding='30px'>
                        <Text
                            width={{base: '', lg: '50%'}}
                            fontWeight='300'>
                            {t(`works.${id}.codeDescription`)}
                        </Text>
                    </Box>
                </GridItem>
            </Grid>
        </Box>
    )
}