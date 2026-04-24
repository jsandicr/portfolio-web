import { useColorMode, Box, Text, UnorderedList, ListItem, useMediaQuery } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { active_link } from '/theme'
import { experience_list } from '../const'
import { useTranslation } from 'react-i18next'
import './Experience.css'

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    exit: { opacity: 0, y: -30, transition: { duration: 0.4, ease: "easeIn" } }
}

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
            <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                exit="exit"
                viewport={{ once: false, amount: 0.3 }}
            >
                <Text
                    fontSize='4xl'
                    fontWeight='600'
                    textAlign='center'
                    as='h2'
                >
                    {t("experience.title")}
                </Text>
            </motion.div>

            <Box
                className="experience-list-wrapper"
                padding='110px 50px'
                w='100%'
                position='relative'
                display='flex'
                justifyContent='center'
            >
                {isLargerThan768 && (
                    <Box
                        className="experience-line"
                        position='absolute'
                        top='31%'
                        left='0'
                        right='0'
                        h='1px'
                        bg={colorText()}
                        style={{borderRadius: '10px', transform: 'translateY(-50%)'}}
                        zIndex={0}
                    />
                )}
                <UnorderedList
                    className="experience-list"
                    display='flex'
                    flexDirection='row'
                    justifyContent='center'
                    alignItems='center'
                    gap='100px'
                    width='100%'
                    m='0'
                    p='0'
                    position='relative'
                >
                    {experience_list.map(({id})=>{
                        return(
                            <ListItem key={id}
                                className="experience-item"
                                display='flex'
                                flexDirection='column'
                                alignItems='center'
                                listStyleType='none'
                                w='100%'
                                position='relative'
                                zIndex={1}
                                >
                                <motion.div
                                    className="circle"
                                    whileHover={{ scale: 1.5, rotate: 40 }}
                                    whileTap={{
                                        scale: 2,
                                        rotate: -90
                                    }}
                                    onHoverStart={() => console.log('si')}
                                    style={{ backgroundColor: colorText(), width: '28px', height: '28px', borderRadius: '100px'}}
                                />
                                <motion.div
                                    variants={fadeInUp}
                                    initial="hidden"
                                    whileInView="visible"
                                    exit="exit"
                                    viewport={{ once: false, amount: 0.3 }}
                                    w='100%'
                                >
                                    <Box display='flex'
                                        className="experience-content"
                                        flexDirection='column'
                                        alignItems='center'
                                        textAlign='center'
                                        gap='15px'
                                        pt='10px'
                                        px='20px'
                                    >
                                        <Text> {t(`experience.${id}.date`)}</Text>
                                        <Text>{t(`experience.${id}.title`)}</Text>
                                        <Text
                                        >
                                            {t(`experience.${id}.description`)}
                                        </Text>
                                    </Box>
                                </motion.div>
                            </ListItem>
                        )
                    })}
                </UnorderedList>
            </Box>
        </Box>
    )
}