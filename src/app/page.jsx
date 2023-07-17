"use client"
import Image from 'next/image'
import styles from './page.module.css'
import { useState } from 'react'
export default function Home() {
  const [slider, setSlider] = useState(false)
  
  function sliderFunction(){
    const sliderContainer = document.querySelector(".sliderContainer")
    const sliderSlide = document.querySelector(".sliderSlide")
    const cardContainer = document.querySelector(".card")
    if (sliderSlide) {
      if (slider === false) {
        sliderSlide.classList.add("sliderAnimationOn")
        sliderContainer.classList.add("sliderContainerOn")
        
        sliderContainer.classList.remove("sliderContainerOff")
        sliderSlide.classList.remove("sliderAnimationOff")
          setTimeout(() => {
            setSlider(true)
          }, 1000);
        }
        if (slider === true) {
          sliderSlide.classList.add("sliderAnimationOff")
          sliderContainer.classList.add("sliderContainerOff")
          cardContainer.classList.add("dissapear")
          sliderContainer.classList.remove("sliderContainerOn") 
        sliderSlide.classList.remove("sliderAnimationOn")
          setTimeout(() => {
            setSlider(false)
          }, 1000);
        }
              
    }

  }
  

  return (
    <main className={styles.main}>
<div className='sliderContainer' onClick={sliderFunction}>
  <div className='sliderSlide'></div>
</div>
{slider == true ? <div className='card appears'><div className="avatar"><img src="https://avatars.githubusercontent.com/u/99265348?s=400&u=e36f2c4fa919f849db0ec52889b550531efdb57a&v=4" alt="" /></div><div className="name">Ulises Ivo Rodriguez</div> <div className="job">Desarrollador Front-End</div><div className="contact"><p>Email: robdiaz247@gmail.com</p><p>Teléfono: +5492236500787</p><p>Ubicación: Mar del Plata</p></div></div> : <div>¡Activa el Slider!</div>}
    </main>
  )
}
