import { useTranslation } from "react-i18next";
import i18n from 'i18next';
import { useColorMode, Button, useMediaQuery } from "@chakra-ui/react";
import { active_link } from '/theme';

export const LanguageChange = () => {
    const { colorMode } = useColorMode();
    const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

    const colorLink = (language) => {
        if (i18n.language !== language) {
            return undefined;
        }
        return colorMode === 'light' ? active_link.light : active_link.dark;
    };

    const { i18n: translationI18n } = useTranslation("global");
    const keys = Object.keys(translationI18n.options.resources);

    if (!isLargerThan768) {
        return null;  // No renderizar en pantallas pequeñas
    }

    return (
        <div style={{
            position: 'absolute',
            top: '100px',
            right: '10px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px',
            padding: '10px 20px',
            zIndex: 300
            }}>
            {keys.map((language) => {
                const l = language.charAt(0).toUpperCase() + language.slice(1);
                return (
                    <Button
                        width='10vh'
                        key={language}
                        onClick={() => translationI18n.changeLanguage(language)}
                        color={colorLink(language)}
                    >
                        {l}
                    </Button>
                );
            })}
        </div>
    );
};
