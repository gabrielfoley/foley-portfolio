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
import { inherits } from 'babel-core/lib/util'

// DO NOT USE THE IMAGES IN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'www.KrsnaFood.org ',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization',
    check1: <BsPatchCheckFill/>,
    check_1: <BsPatchCheckFill/>,
    infoAWS: 'AWS EC2',
    infoNGINX:'NGINX Reverse Proxy',
    infoELB:'ELB',
    infoReact: 'React',
    infoStripe: 'Stripe',
    infoYouTube: 'YouTube API',
    infoEmailJS: 'EmailJS',
    infoDocker:'Docker',
    infoMaterialUI: 'Material UI',
    infoBootstrap: "Bootstrap",
    infoCSS1: 'CSS',
    infoAxios: 'Axios',

  },
  {
    id: 2,
    image: IMG2,
    title: 'MERN Stack App',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/16580766-Orion-UI-kit-Charts-templates-infographics-in-Figma',
    check2: <BsPatchCheckFill/>,
    check_2: <BsPatchCheckFill/>,
    infoAWS: 'AWS EC2',
    infoNGINX:'NGINX Reverse Proxy',
    infoELB:'ELB',
    infoReact: 'React',
    infoStripe: 'Stripe',
    infoDocker:'Docker',
    infoExpressJS: 'ExpressJS',
    infoCSS2:'CSS',
    infoMongoDB:'MongoDB',
    infoMongoose:'Mongoose',
    infoRedux: 'Redux',
    infoNodeJS: 'NodeJS',
    infoJWT:'JWT',


  },
  {
    id: 3,
    image: IMG3,
    title: 'Vishnu Match-Game',
    github: 'https://github.com/gabrielfoley/magic-game',
    demo: 'http://magicgame.foley.systems',
    check3: <BsPatchCheckFill/>,
    infoAWS: 'AWS EC2',
    infoNGINX:'NGINX Reverse Proxy',
    infoELB:'ELB',
    infoReact: 'React',
    infoCSS3: 'CSS',
    infoDocker: 'Docker',
  },
  {
    id: 8,
    image: IMG8,
    title: 'www.BuildToday.link',
    github: 'https://github.com',
    demo: 'http://buildtoday.link/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'www.ShyamaDasi.com',
    github: 'https://github.com/gabrielfoley/land',
    demo: 'https://www.shyamadasi.com/'
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
            check_1,
            check2,
            check_2,
            check3,
            check4,
            check5,
            check6, 
            infoAWS, 
            infoReact,
            infoCSS1,
            infoCSS2,
            infoCSS3, 
            infoStripe, 
            infoEmailJS, 
            infoYouTube, 
            infoNGINX, 
            infoELB, 
            infoDocker, 
            infoExpressJS,
            infoMaterialUI,
            infoBootstrap,
            infoMongoDB,
            infoMongoose,
            infoRedux,
            infoNodeJS,
            infoJWT,
            infoAxios,
          }) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              
              <h3 className='title'>{title}</h3>
              
              <div className='checkInfo'>
              <h5>
              {/* ////////////// */}
                {check1}{check2}{check3}{check4}{check5}{check6}
              {/* ////////////// */}  

              {/* ////// AWS ///// */}
              <span className='spanRight'>{infoAWS} </span>
               {/* /////////////// */}

              {/* ///////////// */}
              <span className='spanLeft'>
                {check1}{check2}{check3}{check4}{check5}{check6}
              </span>  
              {/* ////////////// */} 

              {/* ///// ELB ///// */}
              <span className='spanRight'>{infoELB}  </span>
              {/* /////////////// */}

              {/* ///////////// */}
              <span className='spanLeft'>
                {check1}{check2}{check3}{check4}{check5}{check6}
                </span>
              {/* ////////////// */} 

              {/* /// DOCKER ///  */}
                <span className='spanRight'>{infoDocker}</span>
              {/* /////////////// */}
              </h5>

              {/* ////////////// */}
              <h5>{check1}{check2}{check3}{check4}{check5}{check6} 
              {/* ////////////// */}

              {/* /// NGINX /// */}
              <span className='spanRight'>{infoNGINX}</span>
              {/* ///////////// */}
              </h5>
            
          
              <div className='div'>

              {/* //////////// */}
              <h5>{check1}{check2}{check3}{check4}{check5}{check6}  
              {/* /////////////// */}

              {/* //REACT// */}
              <span className='spanRight'>{infoReact}</span>
              {/* ////////// */}


              {/* //////////////// */}
              <span className='spanLeft'>
                {check1}{check2}{check4}{check5}{check6} 
                </span>   
              {/* //////////////// */}

              {/* //  CSS1  // */}
              <span className='spanRight'>{infoCSS1}</span>
              {/* ////////////////// */}

              {/* //////////////// */}
              <span className='spanLeft'>
                {check_1} 
                </span>   
              {/* //////////////// */}

              {/* //CSS , EMAILJS // */}
                <span className='spanRight'>{infoCSS2}{infoEmailJS}</span>
              {/* ////////////////// */}

              {/* //////////////// */}
              <span className='spanLeft'>
                {check_2} 
                </span>   
              {/* //////////////// */}
              

              {/* ////////////////// */}
                <span className='spanLeft'>
              {check3}{check4}{check5}{check6} 
                  </span>
              {/* ////////////////// */}

              {/* //EXPRESS-JS// */}
                  <span className='spanRight'>{infoCSS3}{infoExpressJS}</span></h5>
              {/* ////////////// */}

              {/* ////////////// */}
              <h5>{check1}{check2}{check4}{check5}{check6} 
              {/* ////////////// */}

              {/* ////STRIPE//// */}
              <span className='spanRight'>{infoStripe} </span>
              {/* ////////////// */}

              {/* ////////////// */}
              <span className='spanLeft'>{check1}{check2}
              </span> 
              {/* ////////////// */}

              {/* //YOUTUBE-API// */}
              <span className='spanRight'>{infoYouTube}{infoMongoDB}</span>
              {/* ////////////// */}

              <span  >{<br/>}</span>

              {/* ////////////// */}
              <span>{check1}{check2}
              </span> 
              
              {/* ////////////// */}

              {/* //MATERIAL-UI// */}
              <span className='spanLeft' >{infoMaterialUI}{infoMongoose}</span>
              {/* ////////////// */}

              {/* ////////////// */}
              <span className='spanLeft'>{check1}{check2}
              </span> 
              {/* ////////////// */}

              {/* //BOOTSTRAP// */}
              <span className='spanRight'>{infoBootstrap}{infoRedux}</span>
               {/* ////////////// */}

               <span  >{<br/>}</span>

               {/* ////////////// */}
              <span>{check1}{check2}
              </span> 
              {/* ////////////// */}

              {/* //NODE-JS// */}
              <span className='spanRight'>{infoNodeJS}{infoAxios}</span>
               {/* ////////////// */}


               {/* ////////////// */}
              <span className='spanLeft'>{check2}
              </span> 
              {/* ////////////// */}

              {/* //JWT// */}
              <span className='spanRight'>{infoJWT}</span>
               {/* ////////////// */}

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