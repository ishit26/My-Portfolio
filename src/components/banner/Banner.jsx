import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <section className='banner-container'>
        <div className='banner-content'>
            <h1>Crafting Digital Journeys That Sparks Creativity</h1>
            <p>
                Passionate Frontend Developer | Transforming Ideas into Seamless and Visually Stunning
                Web Solutions
            </p>
        </div>

        <div className='banner-img' id='Banner'>
            <div>
                <div className='tech-icon'>
                    <img src="/assets/react.png" alt="React Logo" />
                </div>
                    <img src="/assets/image.png" alt="Main Image" />
            </div>
            
            <div>
                <div className='tech-icon'>
                    <img src="/assets/html.png" alt="HTML Logo" />
                </div>

                <div className='tech-icon'>
                    <img src="/assets/css.png" alt="CSS Logo" />
                </div>

                <div className='tech-icon'>
                    <img src="/assets/js.png" alt="JS Logo" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner;