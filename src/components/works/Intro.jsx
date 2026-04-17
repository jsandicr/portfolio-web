import { Box, Grid, GridItem, Text, useColorMode } from "@chakra-ui/react"
import { useTranslation } from "react-i18next"
import { active_link } from "../../../theme"
import { ProjectShowcase } from "./ProjectShowcase"
import { motion } from "framer-motion"

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    exit: { opacity: 0, y: -30, transition: { duration: 0.4, ease: "easeIn" } }
}

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 }
    },
    exit: {
        opacity: 0,
        transition: { staggerChildren: 0.1, staggerDirection: -1 }
    }
}

export const Intro = ({work}) => {
    const { id, img } = work
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
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        exit="exit"
                        viewport={{ once: false, amount: 0.3 }}
                    >
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
                    </motion.div>
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
                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            exit="exit"
                            viewport={{ once: false, amount: 0.3 }}
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
                        </motion.div>
                    </GridItem>
                    <GridItem
                        w='100%'
                        display='flex'
                        justifyContent='center'
                        alignItems='center'
                    >
                        <ProjectShowcase 
                            image={img} 
                            alt={work?.name || 'Project'} 
                        />
                    </GridItem>

                </Grid>
            </Box>
    )
}