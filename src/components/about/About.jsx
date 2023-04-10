import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import AWS from '../../assets/aws-certified-cloud-practitioner.png'

const About = () => {
  return (
    <section id='about'>
     {/*<h5>About Me</h5>*/}
      <h2>Gabriel Foley</h2> 
      

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>

              <a href="https://www.credly.com/badges/6697f2c7-91f5-4df3-b6db-c75e792eaa18/public_url">
              <img src={AWS} alt="About" />
</a>
              
              {/* <small>10+ Years Working</small> */}
            </article>

            <article className='about__card' >
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>20+ Worldwide</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>

          <p>
          Enthusiastic and motivated Solutions Architect with many years of 
          experience in cloud and over 20 years experience in IT. Always eager 
          to learn and contribute to team success with hard work and collaboration. 
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About