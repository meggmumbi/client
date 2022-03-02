import React, {useEffect} from 'react'
import ScreenHeading from '../../Utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../Utilities/ScrollService'
import Animations from '../../Utilities/Animations'
import './AboutMe.css'

export default function AboutMe(props) {
    let fadeInScreenHandler = (screen)=>{
        if(screen.fadeInScreen !== props.id) return;
        Animations.animations.fadeInScreen(props.id);
    };
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  const SCREEN_CONSTANTS ={
    description: " I am a self-driven IT expert who always applies technology in solving various IT problems. I have been able to develop, deploy and support different websites and portals to various clients. Working on different projects has helped me to adopt to changes quickly and made me a mature team player. Integrity, Respect, Honesty and Hard work is part of what I value the most. Strong professional with a BSC willing to be an asset for an organization.",
    
    highlights: {
      bullets:[
        "Full Stack web and mobile development",
        "Interactive Front End per the design",
        "Certified DevOps Engineer CI || CD",
        "Working with Docker and Kuburnetes",
        "Building REST API",
        "Highly proficient with c# and .Net Technologies",
        "Web services (SOAP, ODATA etc..)",
      ],
      heading: "Here are a Few Highlights:"
    }

  }

  const renderHighlight = ()=>{
    return(
      SCREEN_CONSTANTS.highlights.bullets.map((value, i)=>(
        <div className='highlight' key={i}>
          <div className='highlight-blob'> </div>    
             <span>{value}</span>
         
        </div>
      ))
    )
  }

  return (
    <div className='about-me-container screen-container react-fade-in' id={props.id || ""}>
        <div className='about-me-parent'>
            <ScreenHeading title={'About Me'} subHeading={"Why Choose Me?"}/>
            <div className='about-me-card'>
              <div className='about-me-profile'></div>
              <div className='about-me-details'>
                <span className='about-me-description'>{SCREEN_CONSTANTS.description}</span>
                <div className='about-me-highlights'>
                  <div className='highlight-heading'>
                    <span>{SCREEN_CONSTANTS.highlights.heading}</span>
                  </div>
                  {renderHighlight()}
                </div>
                <div className='about-me-options'>
                <button
                className="btn primary-btn"
                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
              >
                {" "}
                Hire Me{" "}
              </button>
                  <a href='Resume.pdf' download="Margaret Resume.pdf">
                    <button className='btn highlighted-btn'>Get Resume</button>
                  </a>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}
