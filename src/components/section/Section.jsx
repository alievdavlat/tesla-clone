import React from 'react'
import Reveal from 'react-reveal'


function Section({className, name}) {
  return (
<section className={className}>
<Reveal effect="fadeInUp">
    <div className='hero-textArea'>
        <h3>{name}</h3>
        <p>Order Online for <span className='touchless'>Touchless delivery </span></p>
    </div>
</Reveal>

<Reveal effect="fadeInUp2">
    <div className="hero-buttons">
      <div className="btnMain">
        <a href="#" className='hero-btn'>
          custom order
        </a>
        <a href="#" className='hero-btn'>
         existing inventory
        </a>
      </div>
    </div>
</Reveal>

</section>

  )
}

export default Section
