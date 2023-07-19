import { useFrame } from '@react-three/fiber'
import React, { useEffect, useMemo, useRef } from 'react'
import * as THREE from 'three'

const CustomObjects = () => {
    const verticesCount = 10 * 3;
    // It was here initially but shifted it inside useMemo hook for learning it and useMemo saves the value thatswhy.
    // const positions = new Float32Array(verticesCount * 3);
    // for (let i = 0; i < verticesCount * 3; i++) {
    //     positions[i] = (Math.random() - 0.5) * 3;
    // }

    const positions = useMemo(()=>{
        const positions = new Float32Array(verticesCount * 3);
        for (let i = 0; i < verticesCount * 3; i++) {
            positions[i] = (Math.random() - 0.5) * 3;
        }
        return positions;
    },[])

    const cubeRef = useRef();
    const geometryRef = useRef();
    const triangleRef = useRef();

    // useFrame((state, delta) => {
    //     cubeRef.current.rotation.y += delta;
    // });

    useEffect(()=>{
        geometryRef.current.computeVertexNormals();
    },[])

    // useFrame((state, delta)=>{
    //     triangleRef.current.rotation.y += delta;
    // })


    return (
        <mesh position-y={1} ref={triangleRef}>
            <bufferGeometry ref={geometryRef}>
                <bufferAttribute
                attach="attributes-position"
                count={ verticesCount }
                itemSize={ 3 }
                array={ positions }
                />
            </bufferGeometry>
            <meshStandardMaterial color={"red"} side={THREE.DoubleSide}/>
        </mesh>
    );
}

export default CustomObjects;


{/* <mesh ref={cubeRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={verticesCount}
                    itemSize={3}
                    array={positions}
                />
            </bufferGeometry>
        </mesh> */}