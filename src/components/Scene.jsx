import { useRef } from 'react'
import { useLoader, useFrame } from '@react-three/fiber';
import { OBJLoader } from 'three/addons/loaders/OBJLoader';
import { Presentation } from './Presentation'

export const Scene = () => {

  const controlRef = useRef(null)

  useFrame(() => {
    const { current: group } = controlRef
    if (group) {
      group.rotation.z += 0.01;
    }
  })

  const obj = useLoader(OBJLoader, './image.obj')

  return (
    <>
        <ambientLight intensity={0.3} />
        <directionalLight
            color="black"
            position={[10, 10, 10]}
        />
        <pointLight color='#97FEED' intensity={10} distance={20} position={[2, 0, 0]}/>
        <pointLight color='#EE9322' intensity={10} distance={20} position={[-2, 0, 0]}/>
        <Presentation
            ref={controlRef}
            object={obj}
            position={[0, 0, 0]}
        />
    </>
  )
}