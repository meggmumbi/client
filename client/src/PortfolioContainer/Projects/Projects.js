import React from 'react'
import ScreenHeading from '../../Utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../Utilities/ScrollService';
import Animations from '../../Utilities/Animations';
import student from '../../../src/assets/Projects/sms.png';
import intellex from '../../../src/assets/Projects/intellex.png';
import Accreditation from '../../../src/assets/Projects/Accreditation.png';
import portfolio from '../../../src/assets/Projects/portfolio.png';
import dashboard from '../../../src/assets/Projects/student.png';
import defaultImg from '../../../src/assets/Projects/default.png';
import school from '../../../src/assets/Projects/School.png';
import './projects.css'


export default function Projects(props) {
    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return;
        Animations.animations.fadeInScreen(props.id);
      };
      const fadeInSubscription =
        ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

        const data = [
            {
                id:1,
                image: portfolio,
                title: 'Personal Portfolio Website',
                github:'https://github.com/meggmumbi/client',
                demo:'https://margaretportfolio.herokuapp.com/'
            },
            {
                id:2,
                image: intellex,
                title: 'Intellex Solutions',
                github:'',
                demo:'https://intellexsolutions.co.ke/'
            },
            {
                id:3,
                image: dashboard,
                title: 'Student Management Portal',
                github:'',
                demo:'https://online.kasneb.or.ke/'
            },
            
            {
                id:4,
                image: school,
                title: 'School Management Web Application',
                github:'https://github.com/meggmumbi/SchoolManagementSystem',
                demo:''
            },
            {
                id:5,
                image: defaultImg,
                title: 'Platform Service .Net Microservice Project  ',
                github:'https://github.com/meggmumbi/PlatformService',
                demo:''
            },
            {
                id:6,
                image: Accreditation,
                title: 'Accreditation Portal',
                github:'',
                demo:''
            }
        ];
  return (
    <div>
    <ScreenHeading
    title={"Projects"}
    subHeading={"My Recents Works"}
    />
    <div className="container portfolio_container screen-container" id={props.id || ""}>
      {
          data.map(({id, image, title, github, demo}) => {
              return (
                  <article key={id} className='portfolio_item'>                     
                          <div className='portfolio_item-image'>
                              <img src={image} alt={title}/>
                              </div>
                              <h3>{title}</h3>
                              <div className='portfolio_item-cta'>
                                  <a href={github} className='btn' target='_blank'>Github</a>
                                  <a href={demo} className='btn primary-btn' target='_blank'>Live Project</a>

                              </div>                       
                      
                  </article>
              )
          })
      }
    </div>
    </div>
  );
}
