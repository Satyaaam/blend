import React, { useReducer, useRef } from 'react'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls' 
import { extend, useFrame, useThree } from '@react-three/fiber'
import { BakeShadows, Float, Html, MeshReflectorMaterial, OrbitControls, PivotControls, RandomizedLight, TransformControls, softShadows } from '@react-three/drei';
import { CubeReflectionMapping } from 'three';
import { Text } from '@react-three/drei';
import '../App.css'
import { Perf } from 'r3f-perf';
import { useHelper } from '@react-three/drei';
import * as THREE from 'three';
import { AccumulativeShadows } from '@react-three/drei';

// softShadows({
//     frustum: 3.75,
//     size:0.005,
//     near: 9.5,
//     samples: 17,
//     rings: 11
// })


// extend({OrbitControls})

const DrieStudy = () => {
    // const cube = useRef();
    const directionalLight = useRef();

    // const {camera, gl} = useThree();
    const cubeRef = useRef();
    const sphereRef = useRef();
    useHelper(directionalLight, THREE.DirectionalLightHelper,2);
    // useFrame((state, delta)=>{
    //     cubeRef.current.rotation.y += delta;
    //     // sphereRef.current.rotation.y += delta;
    // })
    // useFrame((state, delta)=>{
    //     const angle = state.clock.elapsedTime;
    //     state.camera.position.x = Math.sin(angle)*8;
    //     state.camera.position.z = Math.cos(angle)*8;
    // })
  return (
    <>
    {/* <BakeShadows/>   */}
    {/* {thats why we add bakeshadow to static figure only} */}
    {/* <orbitControls args={[camera, gl.domElement]}/> */}
    <Perf position='top-left'/>
    <OrbitControls />
    {/* <AccumulativeShadows
        position={[0,-0.99,0]}></AccumulativeShadows> */}


        {/* <AccumulativeShadows
         position={[0,-0.99, 0]}
         scale={10}>


            <RandomizedLight
            castShadow={true}
            amout={8}
            radius={1}
            ambient={0.5}
            intensity={1}
            position={[1,2,3]}
            bias={0.001}/>
            
         </AccumulativeShadows> */}

         <AccumulativeShadows
            position={[0,-0.99, 0]}
            scale={14}
            color='#03C93F'
            opacity={0.8}
            frames={1000}
            temporal>
            <RandomizedLight
            castShadow
                amount={0}
                radius={1}
                ambient={0.5}
                intensity={1}
                position={[1,2,3]}
                bias={0.001}/>
         </AccumulativeShadows>

        



    <directionalLight
     position={[1,2,3]}
     castShadow 
     ref={directionalLight}
     intensity={1.5}
     shadow-mapSize={[1024 , 1024]}
     shadow-camera-top={5}
     shadow-camera-right={5}
     shadow-camera-bottom={-5}
     shadow-camera-left={-5}
     />

     
    <ambientLight intensity={1.5}/>


    <Text
        fontSize={1}
        position-y={3}
        color={"red"}>Hi, Welcome
        <meshNormalMaterial/></Text>

    {/* <PivotControls 
     anchor={[0,0,0]}
     depthTest={false}
     scale={3}> */}
        <mesh castShadow ref={cubeRef} position-x={-2} scale={2}>
            <boxGeometry />
            <meshNormalMaterial color={'gray'}/>
            <Html position={[1,1,0]} center wrapperClass='cubeLabel'
             occlude={[cubeRef, sphereRef]}>cube</Html>
        </mesh>
    {/* </PivotControls> */}

    
    <mesh castShadow ref={sphereRef} position-x={2}>
         <sphereGeometry/>
         <meshStandardMaterial color={"red"}/>
    </mesh>
    {/* <TransformControls object={sphereRef}/> */}
     {/* Adding position here is not a good practise */}
    


    {/* <Float 
        speed={5}
        floatIntensity={2}> */}
    {/* <PivotControls 
        anchor={[0,0,0]}
        depthTest={false}
        scale={2}> */}
        <mesh 
        //receiveShadow
        position-y={-1.3} 
        rotation-x={-Math.PI * 0.5} 
        scale={15}>
            <planeGeometry/>
            <MeshReflectorMaterial 
                resolution={512}
                blur={[1000, 1000]}
                mixBlur={1}
                mirror={0.5}
                color={"#454B1B"}/>
        </mesh>
    {/* </PivotControls> */}
    {/* </Float> */}

    

    
    </>
  )
}

export default DrieStudy