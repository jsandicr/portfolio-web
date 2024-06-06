import { useEffect, useState } from 'react'
import { INITIAL_SCALE_MODEL } from '../const'

export const useScaleModel = () => {
    const [scale, setScale] = useState(INITIAL_SCALE_MODEL)

  function handleResize(){
    if(window.innerWidth < 600){
      setScale(INITIAL_SCALE_MODEL)
    }

    if(window.innerWidth < 800){
      setScale([0.8, 0.8, 0.8])
    }

    if(window.innerWidth >= 800){
      setScale([1, 1, 1])
    }
  }

  useEffect(() => {
    handleResize()
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize")
  }, [])

return scale
}