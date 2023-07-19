import React from 'react'
import {Canvas} from '@react-three/fiber'
import FirstProject from './components/FirstProject'
import CustomObjects from './components/CustomObjects'
import * as THREE from 'three'
import DrieStudy from './components/DrieStudy'

const App = () => {
  return (
    <Canvas camera={{position:[3,2,10]}}>
      <DrieStudy/>
    </Canvas>
  )
}

export default App

// Drie se Pehle
{/* <Canvas flat
    dpr={2}
    gl={{
      antialias:true,
      toneMapping:THREE.CineonToneMapping,
    }}
    camera={{
      fov:45,
      near:0.1,
      far:400,
      position:[3,2,10]
    }}>

      <FirstProject/>
      
    </Canvas> */}