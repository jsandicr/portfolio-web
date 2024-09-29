import { Box, Grid, GridItem, Text } from "@chakra-ui/react"
import { useTranslation } from "react-i18next"

export const Technologies = ({work}) => {

    const { id } = work
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
            <Text fontSize='4xl' fontWeight='600' textAlign='center' as='h2'>
                Demo
            </Text>
            <Grid
                templateColumns={{base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)'}}
                gap={{base: '10px', md: '', lg: ''}}
                marginTop='10px'
            >
                <GridItem>
                    <Box display='flex'
                    justifyContent='center'
                    alignItems='center'
                    height={work.type == 2 ? {base: '50vh', lg: '70vh'} : ''}
                    width={work.type == 2 ? {base: '40vw', lg: '25vw'} : ''}
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