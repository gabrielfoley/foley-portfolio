import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.png'
import IMG7 from '../../assets/portfolio7.png'
import IMG8 from '../../assets/portfolio8.png'
import {BsPatchCheckFill} from 'react-icons/bs'

// DO NOT USE THE IMAGES IN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'www.KrsnaFood.org ',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization',
    check1: <BsPatchCheckFill/>,
    infoAWS: 'AWS EC2',
    infoNGINX:'NGINX Reverse Proxy',
    infoELB:'ELB',
    infoReact: 'React',
    infoStripe: 'Stripe',
    infoYouTube: 'YouTube API',
    infoEmailJS: 'EmailJS',
    infoDocker:'Docker'

  },
  {
    id: 2,
    image: IMG2,
    title: 'E-Commerce - MERN Stack App',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/16580766-Orion-UI-kit-Charts-templates-infographics-in-Figma',
    check2: <BsPatchCheckFill/>,
    infoAWS: 'AWS EC2',
    infoNGINX:'NGINX Reverse Proxy',
    infoELB:'ELB',
    infoReact: 'React',
    infoStripe: 'Stripe',
    infoDocker:'Docker',
    infoExpressJS: 'ExpressJS',


  },
  {
    id: 3,
    image: IMG3,
    title: 'Vishnu Match-Card Game',
    github: 'https://github.com/gabrielfoley/magic-game',
    demo: 'http://magicgame.foley.systems',
    check3: <BsPatchCheckFill/>,
    infoAWS: 'AWS EC2',
    infoNGINX:'NGINX Reverse Proxy',
    infoELB:'ELB',
    infoReact: 'React',
    infoCSS: 'CSS',
    infoDocker: 'Docker',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Queen of Hearts Life Coaching: shyamadasi.com',
    github: 'https://github.com',
    demo: 'https://www.shyamadasi.com/'
  },
  {
    id: 8,
    image: IMG8,
    title: 'Single Real Estate Website',
    github: 'https://github.com/gabrielfoley/land',
    demo: 'http://buildtoday.link/'
  },
  {
    id: 6,
    image: IMG6,
    title: '45th Festival of The Chariots Website',
    github: 'https://github.com',
    demo: 'http://sfkrishna2011.foley.systems/'
  },
  {
    id: 7,
    image: IMG7,
    title: '45th Festival of The Chariots Website',
    github: 'https://github.com',
    demo: 'http://sfkrishna.foley.systems'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Lord Chaitanya Festival Website',
    github: 'https://github.com',
    demo: 'http://chaitanyafestival.foley.systems/'
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({
            id, 
            image, 
            title, 
            github, 
            demo, 
            check1,
            check2,
            check3,
            check4,
            check5,
            check6, 
            infoAWS, 
            infoReact,
            infoCSS, 
            infoStripe, 
            infoEmailJS, 
            infoYouTube, 
            infoNGINX, 
            infoELB, 
            infoDocker, 
            infoExpressJS}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              
              <h3 className='title'>{title}</h3>
              
              <div className='checkInfo'>
              <h5>{check1}{check2}{check3}{check4}{check5}{check6}  
              <span className='spanRight'>{infoAWS} </span>
              <span className='spanLeft'>
                {check1}{check2}{check3}{check4}{check5}{check6}
              </span>  
              <span className='spanRight'>{infoELB}  </span>
              <span className='spanLeft'>
                {check1}{check2}{check3}{check4}{check5}{check6}
                </span>    
                <span className='spanRight'>{infoDocker}</span>
              </h5>

              <h5>{check1}{check2}{check3}{check4}{check5}{check6} 
              
              <span className='spanRight'>{infoNGINX}</span>
              </h5>
            
          
              <div className='div'>
              <h5>{check1}{check2}{check3}{check4}{check5}{check6}  
              <span className='spanRight'>{infoReact}</span>
              <span className='spanLeft'>
                {check1}{check3}{check4}{check5}{check6} 
                </span>   
                <span className='spanRight'>{infoCSS}{infoEmailJS}</span>
                <span className='spanLeft'>
                  {check1}{check2}{check3}{check4}{check5}{check6} 
                  </span>
                  <span className='spanRight'>{infoExpressJS}</span></h5>

              <h5>{check1}{check2}{check3}{check4}{check5}{check6}  
              <span className='spanRight'>{infoStripe} </span>
              <span className='spanLeft'>{check1}
              </span> 
              <span className='spanRight'>{infoYouTube}</span>
              </h5>
              </div>
            
              </div>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
                <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio