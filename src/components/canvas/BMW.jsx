import React from 'react'
import { Suspense } from 'react'
import {Canvas} from '@react-three/fiber';
import {OrbitControls,Preload,useGLTF} from '@react-three/drei';
import CanvasLoader from '../Loader'
import { AmbientLight } from 'three';

import { slideIn } from '../../utils/motion'

import { motion } from 'framer-motion'

const BMW = () => {
  const bmw = useGLTF('./bmw_m5_cs/scene.gltf')
  return (
    <mesh>
    <hemisphereLight intensity={2} groundColor="white"/>
  
    <primitive object={bmw.scene} scale={3}
   />
    </mesh>
  )
}

const BMWCanvas=()=>(
      <motion.div  variants={slideIn('right','tween',0.2,1)} 
      className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
  <Canvas shadows frameloop='demand' gl={{preserveDrawingBuffer: true}} camera={{position:[10,3,5], fov:45}} >
    <Suspense fallback={<CanvasLoader/>}>
      <OrbitControls enableZoom={false} 
       maxPolarAngle={Math.PI/2} minPolarAngle={Math.PI/2}></OrbitControls>
       <BMW/>
    </Suspense>
  </Canvas>
  </motion.div>
)

export default BMWCanvas