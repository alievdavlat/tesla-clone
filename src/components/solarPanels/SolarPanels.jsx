import React from 'react'
import Reveal from 'react-reveal'


function SolarPanels({className, name, text}) {

  
  return (
<section className={className}>
<Reveal effect="fadeInUp">
    <div className='hero-textArea'>
        <h3>{name}</h3>
        <p>{text}</p>
    </div>
</Reveal>

<Reveal effect="fadeInUp2">
    <div className="hero-buttons">
      <div className="btnMain">
        <a href="#" className='hero-btn'>
         Order Now
        </a>
        <a href="#" className='hero-btn'>
         Learn More
        </a>
      </div>
    </div>
</Reveal>

</section>


  )
}

export default SolarPanels
