import React from 'react'
import { useState,useRef } from 'react'
import { motion } from 'framer-motion'
import { styles } from '../style'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'
import BMWCanvas from './canvas/BMW'

const Footer = () => {
  
  return (
    <div >
          <BMWCanvas/>
    </div>
  )
}

export default SectionWrapper(Footer,"footer")