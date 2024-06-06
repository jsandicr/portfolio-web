import { useState, useEffect } from "react"
import { ease } from '../const.js'

export const useCurrentScrollHome = (updateShowScrollLink, canvasRef) => {

    const [ currentScroll, setCurrentScroll ] = useState(0)

    function updateScale() {
        const canvas = canvasRef.current.getBoundingClientRect()
        const startScrollPosition = window.scrollY + canvas.top 
        const endScrollPosition = window.scrollY + canvas.bottom
    
        if (window.scrollY + window.innerHeight < startScrollPosition || window.scrollY > endScrollPosition) {
            return
        }

        setCurrentScroll(currentScroll + (window.scrollY - currentScroll) * ease)
    }

    useEffect(() => {
        window.addEventListener('scroll', updateScale)
        setTimeout(() => {
            updateShowScrollLink(true)
        }, 5000)

        return () => {
            window.removeEventListener('scroll', updateScale)
        }
    }, [])

    return currentScroll
}