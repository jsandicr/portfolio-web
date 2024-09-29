import { useColorMode, Box, Text, UnorderedList, ListItem, useMediaQuery } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { active_link } from '/theme'
import { experience_list } from '../const'
import { useTranslation } from 'react-i18next'

export const Experience = () => {

    const [ t ] = useTranslation("global")
    const [isLargerThan768] = useMediaQuery("(min-width: 768px)")

    const {colorMode} = useColorMode()

    const colorText = () => {
        if(colorMode === 'light') return active_link.light 
        return active_link.dark
    }
    
    return(
        <Box
            id="experience"
            h={{base: '', lg: '100vh'}}
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
                padding='110px 50px'
                w='100%'
            >
                {
                    isLargerThan768 ? (
                        <hr
                            style={{height: '1px', width: '100%', backgroundColor: colorText(), borderRadius: '10px'}}
                        />
                    ) : (
                        <></>
                    )
                }
                <UnorderedList
                    display='flex'
                    flexDirection={{base: "column", md: 'row', lg: 'row'}}
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