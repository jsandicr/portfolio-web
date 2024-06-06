import { forwardRef } from 'react'
import { Euler } from 'three'
import { useScaleModel } from '../hooks/useScaleModel'

export const Presentation = forwardRef(({ object, position}, ref) => {

  const { scale } = useScaleModel()

  return (
    <group ref={ref}  dispose={null}>
        <mesh
            castShadow
            receiveShadow
            position={position}
            rotation={new Euler(-Math.PI / 2,  0, 0)}
        >
          <meshStandardMaterial color={0xffffff} roughness={0} metalness={0.5} envMapIntensity={10} />
        {object && <primitive scale={scale} object={object} />}
        </mesh>
    </group>
  )
})