import { useFrame, extend,useThree } from '@react-three/fiber';
import React, { useRef } from 'react'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import CustomObjects from './CustomObjects';

extend({OrbitControls})

const FirstProject = () => {
  const cubeRef = useRef();
  const anotherCubeRef = useRef();
  const {camera, gl} = useThree();

  useFrame((state, delta)=>{
    // cubeRef.current.rotation.y += delta
    // anotherCubeRef.current.rotation.y += delta
    // state.camera.position.x += delta;
    // state.camera.position.z += delta;
    // state.camera.position.y += delta;
    // const angle = state.clock.elapsedTime;
    // state.camera.position.x = Math.sin(angle) * 8;
    // state.camera.position.z = Math.cos(angle) * 8;
    // state.camera.lookAt(0,0,0);
  })

  return (
    <>
    <directionalLight position={[1,3,3]} intensity={1.5}/>
    <ambientLight intensity={1}/>
    <orbitControls args={[camera, gl.domElement]}/>
    <mesh ref={cubeRef}>
      <boxGeometry/>
      <meshStandardMaterial  color={"green"} />
    </mesh>
    <mesh position-x={2} ref={anotherCubeRef} >
      <boxGeometry/>
      <meshStandardMaterial  color={"red"}/>
    </mesh>
    <CustomObjects/>
    
    </>
  )
}

export default FirstProject