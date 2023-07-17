"use client"
import Image from 'next/image'
import styles from './page.module.css'
import { useState } from 'react'
export default function Home() {
  /* Creación del useState que se utilizará para variar en el estado del Slider. */
  const [slider, setSlider] = useState(false)
  
  /* Función que se ejecutará al cliquear en el botón de Slider */
  function sliderFunction(){
    /* Aquí llamo a una variable para cada una de las etiquetas HTML con las que deseo trabajar. */
    const sliderContainer = document.querySelector(".sliderContainer")
    const sliderSlide = document.querySelector(".sliderSlide")
    const cardContainer = document.querySelector(".card")

    /* Si sliderSlide existe: */
    if (sliderSlide) {
      /* En caso de el useState slider ser false: */
      if (slider === false) {

        /* Añado las clases de las animaciones de activación */
        sliderSlide.classList.add("sliderAnimationOn")
        sliderContainer.classList.add("sliderContainerOn")
        /* Y remuevo las de desactivación */
        sliderContainer.classList.remove("sliderContainerOff")
        sliderSlide.classList.remove("sliderAnimationOff")
        /* Luego de unos milisegundos (1000) */  
        setTimeout(() => {
/* Seteo el useState como true en caso de ser false */
            setSlider(true)
          }, 1000);
        }
        /* En caso de el useState slider ser true: */
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
{/* Operador condicional utilizado para que se reproduzcan distintos contenidos en caso de que el useState slider sea false o true. */}
{slider == true ? <div className='card appears'><div className="avatar"><img src="https://avatars.githubusercontent.com/u/99265348?s=400&u=e36f2c4fa919f849db0ec52889b550531efdb57a&v=4" alt="" /></div><div className="name">Ulises Ivo Rodriguez</div> <div className="job">Desarrollador Front-End</div><div className="contact"><p>Email: robdiaz247@gmail.com</p><p>Teléfono: +5492236500787</p><p>Ubicación: Mar del Plata</p></div></div> : <div>¡Activa el Slider!</div>}
    </main>
  )
}
