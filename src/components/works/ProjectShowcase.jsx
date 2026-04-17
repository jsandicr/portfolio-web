import { useState, useRef } from 'react'
import { Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import './ProjectShowcase.css'

export const ProjectShowcase = ({ image, alt }) => {
    const [rotation, setRotation] = useState({ x: 0, y: 0 })
    const containerRef = useRef(null)

    const handleMouseMove = (e) => {
        if (!containerRef.current) return

        const rect = containerRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        const centerX = rect.width / 2
        const centerY = rect.height / 2

        const rotateX = ((y - centerY) / centerY) * -10
        const rotateY = ((x - centerX) / centerX) * 10

        setRotation({ x: rotateX, y: rotateY })
    }

    const handleMouseLeave = () => {
        setRotation({ x: 0, y: 0 })
    }

    const handleDragStart = (e) => {
        e.preventDefault()
    }

    return (
        <Box
            className="project-showcase"
            width={{ base: "100%", sm: '320px', md: '340px', lg: "340px" }}
            height={{ base: "200px", md: "240px" }}
            display="flex"
            justifyContent="center"
            alignItems="center"
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <motion.div
                className="project-image-wrapper"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{
                    transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                    transformStyle: 'preserve-3d'
                }}
            >
                <div className="glass-frame" />
                <div className="glow-effect" />
                <img
                    src={image}
                    alt={alt}
                    className="project-image"
                    draggable="false"
                    onDragStart={handleDragStart}
                />
            </motion.div>
        </Box>
    )
}