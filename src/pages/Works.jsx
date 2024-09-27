import { useRef, useState, useEffect } from 'react'
import { Box, Text, useMediaQuery } from '@chakra-ui/react'
import { useCurrentScrollWorks } from '../hooks/useCurrentScrollWorks'
import { WorkItem } from '../components/WorkItem'
import { works } from '../const'
import { useTranslation } from 'react-i18next'
import './Works.css'

export const Works = () => {
    const [ t ] = useTranslation("global")
    const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

    const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY)
    const [isScrolling, setIsScrolling] = useState(false)

    const ref = useRef(null)
    
    const currentScroll = useCurrentScrollWorks(ref)

    useEffect(() => {
        const handleScrollDirection = () => {
            const currentScrollPos = window.scrollY
            setPrevScrollPos(currentScrollPos);

            clearTimeout(isScrolling);

            const timeoutId = setTimeout(() => {
                setIsScrolling(null);
            }, 250)

            setIsScrolling(timeoutId)
        }

        window.addEventListener('scroll', handleScrollDirection);

        return () => {
            window.removeEventListener('scroll', handleScrollDirection);
        }
    }, [prevScrollPos, isScrolling])

    return(
        <Box id='works' height={`${works.length * 130}vh`} width='100%'>
            <Box height='100vh' width='100%' display='flex' flexDirection='column' gap='10px' justifyContent='center' alignItems='center' position='sticky' top='0'>
                <Text
                    fontSize='4xl'
                    fontWeight='600'
                    textAlign='center'
                    as='h2'
                >
                    {t("works.title")}
                </Text>
                <Box
                    ref={ref}
                    className='scrollbar-works'
                    style={{
                        display: 'flex',
                        overflowX: 'auto',
                        overflowY: 'hidden',
                        width: '100%',
                        gap: '100px',
                    }}
                >
                    <Box
                    display= 'flex'
                    gap= '120px'
                    transform= {`translate(-${isLargerThan768 ? currentScroll * 1.5 : currentScroll * 0.3}px)`}
                    >    
                        <Box style={{width: '180vw', height: '100%', paddingLeft: '50vw'}}></Box>
                        {works.map((work)=>{
                            return (
                                <WorkItem key={work.id}>
                                    {work}
                                </WorkItem>
                            )
                        })}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}