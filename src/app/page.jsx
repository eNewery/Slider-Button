"use client"
import Image from 'next/image'
import styles from './page.module.css'
import { useState } from 'react'
export default function Home() {
  const [slider, setSlider] = useState(false)
  const sliderContainer = document.querySelector(".sliderContainer")
  const sliderSlide = document.querySelector(".sliderSlide")
  
  function sliderFunction(){
if (slider === false) {
  sliderSlide.classList.add("sliderAnimationOn")
sliderSlide.classList.remove("sliderAnimationOff")
  setTimeout(() => {
    setSlider(true)
  }, 1000);
}
if (slider === true) {
  sliderSlide.classList.add("sliderAnimationOff")
sliderSlide.classList.remove("sliderAnimationOn")
  setTimeout(() => {
    setSlider(false)
  }, 1000);
}
  }
  

  return (
    <main className={styles.main}>
<div className='sliderContainer' onClick={sliderFunction}>
  <div className='sliderSlide'></div>
</div>
    </main>
  )
}
