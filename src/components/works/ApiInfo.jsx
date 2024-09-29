import { Box, Text, useColorMode, Icon, GridItem, Grid } from "@chakra-ui/react";
import { active_link } from '/theme';
import { useTranslation } from "react-i18next";
import { motion } from 'framer-motion'
import { useEffect, useState } from "react";

export const ApiInfo = ({work}) => {
    const { id } = work
    const [ t ] = useTranslation("global")
    const { colorMode } = useColorMode();
    const [ hasApi, setHasApi] = useState(false)

    const colorText = () => {
        return colorMode === 'light' ? active_link.light : active_link.dark;
    };

    const colorLink = () => {
        if(colorMode === 'light') return active_link.light 
        return active_link.dark
    }

    useEffect(()=>{
        setHasApi(t(`works.${id}.apiInfo`).length > 0)
    }, [])

    return (
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
                Code
            </Text>
            <Grid
                templateColumns={{base: 'repeat(1, 1fr)', md: hasApi ? 'repeat(2, 1fr)' : 'repeat(1, 1fr)'}}
                gap={{base: '10px', md: '', lg: ''}}
            >
                <GridItem>
                    <Box
                        display='flex'
                        flexDirection='column'
                        alignItems='center'
                        gap='20px'
                        padding='30px'
                    >
                        <Text
                            fontSize='4xl'
                            fontWeight='600'
                            as='h3'
                            color= {colorText()}>
                                {t(`typeCode.${work.type}`)}
                        </Text>
                        <Text
                            width={{base: '', lg: '50%'}}
                            fontWeight='300'>
                            {t(`works.${id}.codeDescription`)}
                            <Text display='flex'>
                                {t(`works.${id}.github`)}{' '}
                                <a href={work.codeLink} target="_blank" rel="noopener noreferrer" style={{display: 'flex', marginLeft: '5px'}}>
                                    Github
                                    <Box display='flex' justifyContent='center' alignItems='center' marginLeft='5px'>
                                        <motion.div
                                            whileHover={{ scale: 0.5, rotate: 40, border: `1px solid ${colorLink()}`, cursor: 'pointer' }}
                                            whileTap={{
                                                scale: 0.8,
                                                rotate: -90,
                                                borderRadius: "100%"
                                            }}
                                            style={{ borderRadius: '10px', position: 'absolute', height: '70px', width: '60px'}}
                                        />
                                        <Icon viewBox='0 0 24 24' style={{ verticalAlign: 'middle' }}>
                                            <path fill='currentColor' d='M12 .297c-6.627 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.388.6.111.82-.261.82-.577v-2.233c-3.338.726-4.038-1.61-4.038-1.61-.546-1.38-1.333-1.749-1.333-1.749-1.09-.745.083-.73.083-.73 1.204.084 1.838 1.238 1.838 1.238 1.068 1.832 2.8 1.301 3.48.994.108-.774.418-1.301.762-1.601-2.665-.303-5.466-1.333-5.466-5.93 0-1.313.469-2.386 1.238-3.23-.124-.303-.537-1.53.116-3.183 0 0 1.007-.322 3.301 1.229.958-.266 1.988-.399 3.006-.404 1.017.005 2.047.138 3.005.404 2.295-1.551 3.301-1.229 3.301-1.229.653 1.653.241 2.88.118 3.183.77.844 1.238 1.917 1.238 3.23 0 4.609-2.804 5.623-5.47 5.92.431.371.815 1.1.815 2.221v3.293c0 .319.219.693.825.577C20.565 22.1 24 17.603 24 12.297c0-6.627-5.373-12-12-12' />
                                        </Icon>
                                    </Box>
                                </a>.
                            </Text>
                        </Text>
                    </Box>
                </GridItem>
                {
                hasApi ?
                    <GridItem>
                    <Box
                        display='flex'
                        flexDirection='column'
                        alignItems='center'
                        gap='20px'
                        padding='30px'
                    >
                        <Text
                            fontSize='4xl'
                            fontWeight='600'
                            as='h3'
                            color= {colorText()}>
                            { t(`typeCode.${3}`)}
                        </Text>
                        <Text
                            fontWeight='300'
                            width={{base: '', lg: '50%'}}>
                            {t(`works.${id}.apiInfo`)}
                            <Text display='flex'>
                                {t(`works.${id}.github`)}
                                <a href={work.apiLink} target="_blank" rel="noopener noreferrer" style={{display: 'flex', marginLeft: '5px'}}>
                                    Github
                                    <Box display='flex' justifyContent='center' alignItems='center' marginLeft='5px'>
                                        <motion.div
                                            whileHover={{ scale: 0.5, rotate: 40, border: `1px solid ${colorLink()}`, cursor: 'pointer' }}
                                            whileTap={{
                                                scale: 0.8,
                                                rotate: -90,
                                                borderRadius: "100%"
                                            }}
                                            style={{ borderRadius: '10px', position: 'absolute', height: '70px', width: '60px'}}
                                        />
                                        <Icon viewBox='0 0 24 24' style={{ verticalAlign: 'middle' }}>
                                            <path fill='currentColor' d='M12 .297c-6.627 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.388.6.111.82-.261.82-.577v-2.233c-3.338.726-4.038-1.61-4.038-1.61-.546-1.38-1.333-1.749-1.333-1.749-1.09-.745.083-.73.083-.73 1.204.084 1.838 1.238 1.838 1.238 1.068 1.832 2.8 1.301 3.48.994.108-.774.418-1.301.762-1.601-2.665-.303-5.466-1.333-5.466-5.93 0-1.313.469-2.386 1.238-3.23-.124-.303-.537-1.53.116-3.183 0 0 1.007-.322 3.301 1.229.958-.266 1.988-.399 3.006-.404 1.017.005 2.047.138 3.005.404 2.295-1.551 3.301-1.229 3.301-1.229.653 1.653.241 2.88.118 3.183.77.844 1.238 1.917 1.238 3.23 0 4.609-2.804 5.623-5.47 5.92.431.371.815 1.1.815 2.221v3.293c0 .319.219.693.825.577C20.565 22.1 24 17.603 24 12.297c0-6.627-5.373-12-12-12' />
                                        </Icon>
                                    </Box>
                                </a>.
                            </Text>
                        </Text>
                    </Box>
                </GridItem>
                : <></>
            }
            </Grid>
        </Box>
    );
}
