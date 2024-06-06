import { useActiveLink } from '../hooks/useActiveLink'
import { useColorMode, Box, UnorderedList, ListItem, Button } from "@chakra-ui/react"
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { LinkHeader } from './LinkHeader'
import { routes } from '../const'
import { useTranslation } from "react-i18next";

export const Header = () => {

    const [ t ] = useTranslation("global")

    const { colorMode, toggleColorMode } = useColorMode()

    const [ activeLink ] = useActiveLink()

    return(
        <Box
            display='flex'
            justifyContent='space-between'
            p='30px'
            alignItems='center'
            bg='rgb(255, 255, 255, 0.1)'
            backdropFilter='blur(3px)'
            zIndex={100}
            fontWeight='500'
            width='100%'
        >
            <UnorderedList
                display='flex'
                gap={50}
                styleType='none'
                alignItems='center'
                justifyContent='flex-start'
                width='100%'
            >
                {routes.map(({name, href}, index)=>{
                    const nameToShow = () => {
                        if(index === 0) return t("header.home")
                        if(index === 1) return t("header.about")
                        if(index === 2) return t("header.works")
                        if(index === 3) return t("header.experience")
                    }
                    return(
                        <LinkHeader
                            marginRight={index === 0 ? 'auto' : undefined}
                            key={name}
                            name={nameToShow()}
                            href={href}
                            activeLink={activeLink}
                        />
                    )
                })}
                <ListItem>
                    <Button width='10vh' onClick={toggleColorMode}>
                        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                    </Button>
                </ListItem>
            </UnorderedList>
        </Box>
    )
}