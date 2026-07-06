import React from 'react'
import { Element } from "react-scroll";
import bmiImage from '../../assets/bmi/bmi-img.png'
import BMIForm from '../bmi/BIMForm'

function BIM() {
  return (
    <Element name="bmi">
      <section
        className="mb-[50px] w-full bg-cover bg-center min-h-[600px] lg:min-h-[850px]"
        style={{ backgroundImage: `url(${bmiImage})` }}
      >
        <div className="mx-auto flex min-h-[600px] max-w-[1440px] items-center justify-center px-5 py-10 sm:px-8 md:px-12 lg:h-[850px] lg:justify-end lg:px-[112px] lg:py-[10px]">
          <BMIForm />
        </div>
      </section>
    </Element>
  )
}

export default BIM
