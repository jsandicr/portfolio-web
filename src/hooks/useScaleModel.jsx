import { useEffect, useState } from 'react'
import { INITIAL_SCALE_MODEL } from '../const'

export const useScaleModel = () => {
    const [scale, setScale] = useState(INITIAL_SCALE_MODEL)

    function handleResize(){
        if(window.innerWidth < 600){
            setScale([0.8, 0.8, 0.8])
        }
        else if(window.innerWidth < 800){
            setScale([0.8, 0.8, 0.8])
        }
        else {
            setScale([1.3, 1.3, 1.3])
        }
    }

    useEffect(() => {
        handleResize()
        window.addEventListener("resize", handleResize)

        return () => window.removeEventListener("resize")
    }, [])

    return scale
}