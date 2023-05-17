import React from 'react'
import Reveal from 'react-reveal'

function Hero() {
  return (
    <section className='hero'>
      <Reveal effect="fadeInUp">
        <div className='hero-textArea'>
            <h3>Modal 3</h3>
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
          <img src="/images/down-arrow.svg" alt="arrow icon" className='down-icon' />
        </div>
      </Reveal>
    </section>
  )
}

export default Hero
