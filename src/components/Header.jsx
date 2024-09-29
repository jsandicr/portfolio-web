import { useActiveLink } from '../hooks/useActiveLink'
import { useColorMode, Box, UnorderedList, ListItem, Button, IconButton, Menu, MenuButton, MenuList, MenuItem, MenuGroup, useMediaQuery } from "@chakra-ui/react"
import { SunIcon, MoonIcon, HamburgerIcon } from '@chakra-ui/icons'
import { LinkHeader } from './LinkHeader'
import { routes } from '../const'
import { useTranslation } from "react-i18next";
import i18n from 'i18next';
import './Header.css'
import { Link } from 'react-router-dom'
import { active_link } from '/theme';

export const Header = () => {

    const [isLargerThan768] = useMediaQuery("(min-width: 768px)")

    const [t] = useTranslation("global")

    const { colorMode, toggleColorMode } = useColorMode()

    const [activeLink] = useActiveLink()

    const { i18n: translationI18n } = useTranslation("global");
    const keys = Object.keys(translationI18n.options.resources);

    const colorLink = (language) => {
        if (i18n.language !== language) {
            return undefined;
        }
        return colorMode === 'light' ? active_link.light : active_link.dark;
    };

    const colorLinkMenu = (href, active) => {
        if (activeLink !== href && active === true) {
            return undefined
        }
        if (colorMode === 'light') return active_link.light
        return active_link.dark
    }

    return (
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
            {!isLargerThan768 && (
                <Menu autoSelect={false} >
                    <MenuButton
                        as={IconButton}
                        aria-label='Options'
                        icon={<HamburgerIcon />}
                        variant='outline'
                    />
                    <MenuList>
                        {routes?.map(({ name, href }, index) => {
                            const nameToShow = () => {
                                if (index === 0) return t("header.home")
                                if (index === 1) return t("header.about")
                                if (index === 2) return t("header.works")
                                if (index === 3) return t("header.experience")
                            }
                            return (
                                <MenuItem
                                    color={() => colorLinkMenu(href, true)}
                                    key={name}
                                >
                                    <Link to={href} style={{width: '100%'}}>
                                        {nameToShow()}
                                    </Link>
                                </MenuItem>
                            )
                        })}
                        <MenuGroup title='Color mode'>
                            <MenuItem>
                                <Button width='10vh' onClick={toggleColorMode}>
                                    {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                                </Button>
                            </MenuItem>
                        </MenuGroup>
                        <MenuGroup title='Language'>
                            <Box display="flex" gap={2} marginLeft='10px'> {/* Lenguajes en línea con espacio entre ellos */}
                                {keys.map((language) => {
                                    const l = language.charAt(0).toUpperCase() + language.slice(1);
                                    return (
                                        <Button
                                            key={language}
                                            width='10vh'
                                            onClick={() => translationI18n.changeLanguage(language)}
                                            color={colorLink(language)}
                                        >
                                            {l}
                                        </Button>
                                    );
                                })}
                            </Box>
                        </MenuGroup>
                    </MenuList>
                </Menu>
            )}
            {isLargerThan768 && (
                <UnorderedList
                    display='flex'
                    gap={50}
                    styleType='none'
                    alignItems='center'
                    justifyContent={{ lg: 'flex-start' }}
                    width='100%'
                >
                    {routes.map(({ name, href }, index) => {
                        const nameToShow = () => {
                            if (index === 0) return t("header.home")
                            if (index === 1) return t("header.about")
                            if (index === 2) return t("header.works")
                            if (index === 3) return t("header.experience")
                        }
                        return (
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
            )}
        </Box>
    )
}
