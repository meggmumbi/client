import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ScreenHeading from "../../Utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../Utilities/ScrollService";
import Animations from "../../Utilities/Animations";
import './Testimonial.css'
import shape from "../../../src/assets/Testimonial/shape-bg.png"
import lady from '../../../src/img/lady.png'
import mike from '../../../src/img/mike.png'
import daisy from '../../../src/img/daisy.jpg'
import man from '../../../src/img/man.png'
import profileImg from '../../../src/img/profile.jpg'

export default function Testimonial(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const options ={
      loop: true,
      marging: 0,
      nav: true,
      animateIn: "bounceInRight",
      animateOut: "bounceOutRight",
      dots: true,
      autoplay:true,
      smartSpeed:1000,
      responsive:{
        0:{
          items:1,
        },
        768:{
          items:1,
        },
       1000:{
          items:3,
        },
      }
    }

  return (
    <div>
      <ScreenHeading
        title={"Testimonial"}
        subHeading={"What my client say about me"}
      />
      <section className="testimonial-section" id={props.id || ""}>
        <div className="container">
          <div className="row">
            <OwlCarousel className="owl-carousel" id="testimonial-carousel" {...options}>

              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                        <i className="fa fa-quote-left"/>
                      I patronized Margaret and when she delivered, I honestly
                      fell in love with the project. She is very honest and
                      delivers ontime.
                      <i className="fa fa-quote-right"/>
                      
                    </p>
                    <ul className="stars list-unstyled">                          
                        <li>
                            <i className="fa fa-star"/>
                        </li>
                        <li>
                            <i className="fa fa-star"/>
                        </li>
                        <li>
                            <i className="fa fa-star"/>
                        </li>
                        <li>
                            <i className="fa fa-star-half-alt"/>
                        </li>
                        <li>
                            <i className="fa fa-star"/>
                        </li>
                      </ul>
                  </div>
                  
                  <div className="client-info">
                      <img src={profileImg} alt="No internet Connection"></img>                     
                      <h5>Daisy Dominic</h5>
                      <p>CEO </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                        <i className="fa fa-quote-left"/>
                        I am really impressed by the quality of services I received from Margaret. She was right on schedule, charged reasonable prices, professional and courteous in dealings, and delivered items well before time.
                      <i className="fa fa-quote-right"/>
                      
                    </p>
                    <ul className="stars list-unstyled">                          
                        <li>
                            <i className="fa fa-star"/>
                        </li>
                        <li>
                            <i className="fa fa-star"/>
                        </li>
                        <li>
                            <i className="fa fa-star"/>
                        </li>
                        <li>
                            <i className="fa fa-star-half-alt"/>
                        </li>
                        <li>
                            <i className="fa fa-star"/>
                        </li>
                      </ul>
                  </div>
                  <div className="client-info">
                      <img src={profileImg} alt="No internet Connection"></img>
                      <h5>Grace Wanjiru</h5>
                      <p>General Manager </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                        <i className="fa fa-quote-left"/>
                        We thank Margaret for the wonderful job in helping us develop our website. She was professional, excellent and hard working.
                      <i className="fa fa-quote-right"/>
                      
                    </p>                  
                    <ul className="stars list-unstyled">                          
                        <li>
                            <i className="fa fa-star"/>
                        </li>
                        <li>
                            <i className="fa fa-star"/>
                        </li>
                        <li>
                            <i className="fa fa-star"/>
                        </li>
                        <li>
                            <i className="fa fa-star-half-alt"/>
                        </li>
                        <li>
                            <i className="fa fa-star"/>
                        </li>
                      </ul>
                  </div>
                  <div className="client-info">
                      <img src={profileImg} alt="No internet Connection"></img>
                      <h5>John Jefree</h5>
                      <p>CEO </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                        <i className="fa fa-quote-left"/>
                        Margaret has delivered great results and has convinced me of the value of outsourcing.
                      <i className="fa fa-quote-right"/>
                      
                    </p>
                    <ul className="stars list-unstyled">                          
                        <li>
                            <i className="fa fa-star"/>
                        </li>
                        <li>
                            <i className="fa fa-star"/>
                        </li>
                        <li>
                            <i className="fa fa-star"/>
                        </li>
                        <li>
                            <i className="fa fa-star-half-alt"/>
                        </li>
                        <li>
                            <i className="fa fa-star"/>
                        </li>
                      </ul>
                  </div>
                  <div className="client-info">
                      <img src={profileImg} alt="No internet Connection"></img>
                      <h5>Jame Njenga</h5>
                      <p>ICT Manager </p>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      <div className="footer-image">
        <img src={shape} alt="Photo Not Responding"></img>
      </div>
    </div>
  );
}
