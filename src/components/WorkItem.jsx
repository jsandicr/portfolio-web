import './WorkItem.css';
import { useColorMode, Box, Text, useMediaQuery } from '@chakra-ui/react';
import { home_text } from "../../theme";
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
export const WorkItem = ({children}) => {

    const {id, name, img} = children;
    const [isLargerThan768] = useMediaQuery("(min-width: 768px)");


    const { colorMode } = useColorMode();
    const navigate = useNavigate();

    const colorText = () => {
        if(colorMode === 'light') return home_text.light;
        else return home_text.dark;
    };

    const handleClick = () => {
        // Navegar a la nueva ruta después de un pequeño retraso
        setTimeout(() => {
            navigate(`/works/${id}`);
        }, 300); // Duración de la animación
    };

    return(
        <motion.div
        onClick={handleClick}
        style={{ cursor: 'pointer'}} 
        whileHover={{ scale: [null, 1.02, 1.02] }}
        transition={{ duration: 0.3 }}>
            <Box
                display='flex' 
                flexDirection='column'
                borderStyle='none'
                className='mainBox'
            >
                <Box
                    width={isLargerThan768 ? '25em' : '15em'}
                    height='15em'
                    margin='70px 0 50px'
                    >
                    <img
                        src={img}
                        style={{width:'100%', height:'100%', objectFit:'cover', objectPosition: 'center', borderRadius: 10 }}/>    
                </Box>
                <Text
                    margin='-80px -150px 0 0'
                    fontSize='4xl'
                    fontWeight='900'
                    textAlign='center'
                    color='transparent'
                    as='h2'
                    zIndex={2}
                    style={{WebkitTextStroke: `2px ${colorText()}`}}
                    >{name}</Text>
            </Box>
        </motion.div>
    );
};
