import { useState, useEffect } from "react"

export const useCurrentScrollWorks = (ref) => {

    const [ currentScroll, setCurrentScroll ] = useState(0)

    function updateScaleW() {
        const contentAtropos = ref.current.getBoundingClientRect()
        const startScrollPosition = window.scrollY + contentAtropos.top
        const endScrollPosition = window.scrollY + contentAtropos.bottom
    
        if (window.scrollY + window.innerHeight < startScrollPosition || window.scrollY > endScrollPosition) {
            return
        } 

        setCurrentScroll(currentScroll + (window.scrollY - currentScroll) * 0.8)
    }

    useEffect(() => {
        window.addEventListener('scroll', updateScaleW)

        return () => window.removeEventListener('scroll', updateScaleW)
    }, [])

    return currentScroll
}