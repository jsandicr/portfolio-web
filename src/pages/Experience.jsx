import { useColorMode, Box, Text, UnorderedList, ListItem } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { active_link } from '/theme'
import { experience_list } from '../const'
import { useTranslation } from 'react-i18next'

export const Experience = () => {

    const [ t ] = useTranslation("global")

    const {colorMode} = useColorMode()

    const colorText = () => {
        if(colorMode === 'light') return active_link.light 
        return active_link.dark
    }
    
    return(
        <Box
            id="experience"
            h='100vh'
            pt='110px'
            display='flex'
            flexDirection='column'
            alignItems='center'
        >
            <Text
                fontSize='4xl'
                fontWeight='600'
                textAlign='center'
                as='h2'
            >
                {t("experience.title")}
            </Text>
            <Box
                display='flex'
                padding='110px 50px'
                w='100%'
                justifyContent='center'
            >
                <hr
                    style={{height: '1px', width: '100%', backgroundColor: colorText(), borderRadius: '10px'}}
                />
                <UnorderedList
                    display='flex'
                    position='absolute'
                    justifyContent='space-around'
                    gap='100px'
                    width='100%'
                >
                    {experience_list.map(({id})=>{
                        return(
                            <ListItem key={id}
                                display='flex'
                                flexDirection='column'
                                alignItems='center'
                                mt='-15px'
                                >
                                <motion.div
                                    whileHover={{ scale: 1.5, rotate: 40 }}
                                    whileTap={{
                                        scale: 2,
                                        rotate: -90
                                    }}
                                    onHoverStart={() => console.log('si')}
                                    style={{ backgroundColor: colorText(), width: '28px', height: '28px', borderRadius: '100px'}}
                                /> 
                                <Box display='flex'
                                    flexDirection='column'
                                    alignItems='center'
                                    textAlign='center'
                                    gap='15px'
                                    pt='10px'
                                >
                                    <Text> {t(`experience.${id}.date`)}</Text>
                                    <Text>{t(`experience.${id}.title`)}</Text>
                                    <Text
                                        display={{base: 'none', md: 'inline'}}
                                        maxW='500px'
                                    >
                                        {t(`experience.${id}.description`)}
                                    </Text>
                                </Box>
                            </ListItem>
                        )
                    })}
                </UnorderedList>
            </Box>
        </Box>
    )
}