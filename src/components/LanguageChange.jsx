import { useTranslation } from "react-i18next"
import i18n from 'i18next';
import { useColorMode, Button } from "@chakra-ui/react"
import { active_link } from '/theme'

export const LanguageChange = () => {
    const { colorMode } = useColorMode()

    const colorLink = (language) => {
        if(i18n.language !== language){
            return undefined
        }
        if(colorMode === 'light') return active_link.light 
        return active_link.dark
    }

    const { i18n: translationI18n } = useTranslation("global");  // Renombra i18n desde useTranslation

    const keys = Object.keys(i18n.options.resources);

    return (
        <div style={{position: 'sticky', right: '0', width: '18vh', height: '20vh', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', padding: '10px 20px'}} >
            {
                keys.map((language) => {
                    const l = language[0].toUpperCase() + language.substring(1, keys.length);
                    return (
                        <Button
                            width= '10vh'
                            key={language}
                            onClick={() => translationI18n.changeLanguage(language)}
                            color={colorLink(language)}
                        >
                            {l}
                        </Button>
                    );
                })
            }
        </div>
    );
};