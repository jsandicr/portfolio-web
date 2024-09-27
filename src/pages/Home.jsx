import { useRef, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera  } from '@react-three/drei'
import { Scene } from "../components/Scene"
import { parallaxScaling1, parallaxScaling2 } from '../const.js'
import { useColorMode, Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { home_text } from '/theme'
import './Home.css'
import { useCurrentScrollHome } from '../hooks/useCurrentScrollHome'

export const Home = () => {

    const { colorMode } = useColorMode()

    const colorText = () => {
        if(colorMode === 'light') return home_text.light 
        return home_text.dark
    }

    const scrollBtn = () => {
        if(colorMode === 'light') return 'rgba(0, 0, 0, 0.7)' 
        return 'rgba(255, 255, 255, 0.7)'
    }

    const canvasRef = useRef(null)

    const textBehind = useRef(null)
    const textFront = useRef(null)
    const textBehindBlur = useRef(null)

    const currentScroll = useCurrentScrollHome(updateShowScrollLink, canvasRef)
    
    const [ showScrollLink, setShowScrollLink ] = useState(false)

    const [ parallax1, setParallax1 ] = useState(0)
    const [ fov, setFov ] = useState(35)

    function updateShowScrollLink (value){
        setShowScrollLink(value)
    }
    
    useEffect(()=>{
        setParallax1(1 + currentScroll * parallaxScaling1)
        setFov(parallaxScaling2 * (1 + currentScroll))
        if(currentScroll == 0) {
            setTimeout(() => {
                setShowScrollLink(true)
            }, 5000)
        }
        if(currentScroll > 0.0) setShowScrollLink(false)
    }, [currentScroll])

    return (
        <Box marginTop={{base: '-15vh', md: '', lg:''}} id="home" height='100vh' width='100%' display='flex' justifyContent='center' alignItems='center' position='relative'>
            <Box className="headline-container">
                <div id="text-behind" ref={textBehind} style={{color: colorText(), transform: `scale(${parallax1})` }}>JORGE SANDI<br />PORTFOLIO</div>
                <div id="text-behind-blur" ref={textBehindBlur} style={{ color: colorText(), transform: `scale(${parallax1})` }}>JORGE SANDI<br/>PORTFOLIO</div>
                <div id="text-front" ref={textFront} style={{WebkitTextStroke: `2px ${colorText()}`, transform: `scale(${parallax1})` }}>JORGE SANDI<br/>PORTFOLIO</div>
            </Box>
            <Box className="canvas-container" height='100vh' width='100%'>
                <Canvas ref={canvasRef} camera={{ position: [50, 50, 50], fov: 10 }}>
                    <PerspectiveCamera makeDefault position={[0, 10, 0]} fov={fov} />
                    <Scene />
                    <OrbitControls />
                </Canvas>
            </Box>
            <Box height='100%' position='absolute' bottom='0' width='100%' justifyContent='center' display='flex' alignItems='end' zIndex={10}>
                <Link to='/#about' style={{opacity: showScrollLink ? 1 : 0, transition: 'opacity 0.5s ease-out'}}>
                    <motion.div
                        animate={{
                            y: [0, 24, 0],
                        }}
                        transition={{
                            duration: 5.5,
                            repeat: Infinity,
                            repeatType: "loop",
                        }}
                        style={{width: '30%', height: '30%', marginBottom: '30px'}}
                    >
                        <Box width='35px' height='64px' border={`4px solid ${scrollBtn()}`} borderRadius='30px' display='flex' justifyContent='center'>
                            <motion.div
                                animate={{
                                    y: [0, 24, 0],
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    repeatType: "loop",
                                }}
                                style={{width: '30%', height: '30%', marginBottom: '10%', backgroundColor: scrollBtn(), borderRadius: '25px'}}
                                />
                        </Box>
                    </motion.div>
                </Link>
            </Box>
        </Box>
    )
}