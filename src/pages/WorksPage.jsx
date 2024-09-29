import { Box, useColorModeValue } from '@chakra-ui/react'
import { Header } from '../components/Header'
import { LanguageChange } from '../components/LanguageChange'
import { bg_color } from '../../theme'
import transition from '../../transition'
import { Intro } from '../components/works/Intro'
import { Technologies } from '../components/works/Technologies'
import { ApiInfo } from '../components/works/ApiInfo'
import { works } from '../const'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const WorksPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const bg = useColorModeValue(bg_color.light, bg_color.dark)
    const [work, setWork ] = useState('')

    useEffect(()=>{
         // Scroll to top when the component mounts
         window.scrollTo(0, 0);
        const w = works.find(w => w.id == id)
        if(!w){
            navigate('/');
        }
        setWork(w)
    },[id, navigate])
    return(
        <Box
            bg={bg}>
            <div style={{ position: 'sticky', top: '0', display: 'flex', flexDirection: 'column', alignItems: 'end', width: '100%', zIndex: '200'}}>
                <Header />
                <LanguageChange />
            </div>
            <Box>
                <Intro work={work} />
                <Technologies work={work}/>
                <ApiInfo work={work}/>
            </Box>
        </Box>
    )
}

export default transition(WorksPage)