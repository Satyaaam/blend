import { Float, MeshReflectorMaterial, OrbitControls } from '@react-three/drei'
import React from 'react'


const Shadow = () => {
    
  return (
    <>
    
    <OrbitControls/>
    <mesh position-x={-1}>
        <sphereGeometry/>
        <meshNormalMaterial/>
    </mesh>

    <mesh position-x={1}>
        <boxGeometry/>
        <meshNormalMaterial/>
    </mesh>
    <Float
        speed={5}
        floatIntensity={2}>
            <mesh position-y={-1} rotation-x={Math.PI * 0.5} scale={15}>
                <planeGeometry/>
                <MeshReflectorMaterial
                    resolution={512}
                    blur={[1000, 1000]}
                    mixBlur={1}
                    mirror={0.5}
                    color={"#ff0000"}/>
            </mesh>
        </Float>
    </>
  )
}

export default Shadow