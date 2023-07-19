import React, { useReducer, useRef } from 'react'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls' 
import { extend, useFrame, useThree } from '@react-three/fiber'
import { Float, Html, MeshReflectorMaterial, OrbitControls, PivotControls, TransformControls } from '@react-three/drei';
import { CubeReflectionMapping } from 'three';
import { Text } from '@react-three/drei';
import '../App.css'

// extend({OrbitControls})

const DrieStudy = () => {
    // const cube = useRef();

    // const {camera, gl} = useThree();
    const cubeRef = useRef();
    const sphereRef = useRef();
    // useFrame((state, delta)=>{
    //     // cuberRef.current.rotation.y += delta;
    //     // sphereRef.current.rotation.y += delta;
    // })
    // useFrame((state, delta)=>{
    //     const angle = state.clock.elapsedTime;
    //     state.camera.position.x = Math.sin(angle)*8;
    //     state.camera.position.z = Math.cos(angle)*8;
    // })
  return (
    <>
    {/* <orbitControls args={[camera, gl.domElement]}/> */}
    <OrbitControls makeDefault/>
    <directionalLight/>
    <ambientLight intensity={1.5}/>


    <Text
        fontSize={1}
        position-y={3}
        color={"red"}>Hi, Welcome</Text>

    <PivotControls 
     anchor={[0,0,0]}
     depthTest={false}
     scale={3}>
        <mesh ref={cubeRef} position-x={-2} scale={2}>
            <boxGeometry />
            <meshStandardMaterial color={'gray'}/>
            <Html position={[1,1,0]} center wrapperClass='cubeLabel'
             occlude={[cubeRef, sphereRef]}>cube</Html>
        </mesh>
    </PivotControls>

    
    <mesh  ref={sphereRef} position-x={2}>
         <sphereGeometry/>
         <meshStandardMaterial color={"red"}/>
    </mesh>
    <TransformControls object={sphereRef}/>
     {/* Adding position here is not a good practise */}
    


    <Float 
        speed={5}
        floatIntensity={2}>
    <PivotControls 
        anchor={[0,0,0]}
        depthTest={false}
        scale={2}>
        <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={15}>
            <planeGeometry/>
            <MeshReflectorMaterial 
                resolution={512}
                blur={[1000, 1000]}
                mixBlur={1}
                mirror={0.5}
                color={"yellow"}/>
        </mesh>
    </PivotControls>
    </Float>

    

    
    </>
  )
}

export default DrieStudy