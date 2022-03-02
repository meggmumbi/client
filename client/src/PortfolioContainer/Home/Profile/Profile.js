import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../Utilities/ScrollService";
import "./Profile.css";

export default function 
() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
            <a href="https://www.linkedin.com/in/margaret-gichuhi-605bb5178/">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="#">
              <i className="fa fa-google-plus-square"></i>
            </a>
            <a href="#">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fa fa-fa-youtube-square"></i>
            </a>
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Margaret</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                 loop={Infinity} 
                 steps={[
                    "Software Engineer 👩‍💻", 
                    1000,
                    "Full Stack Developer 💻", 
                    1000,
                    "C#/.NET Daveloper 😎", 
                    1000,
                    "Cloud Expert 🌐", 
                    1000,
                    "Enthusiastic Dev 🔴", 
                    1000,
            
            ]} />
              </h1>
              <span className="profile-role-tagline">
                  knack of building applications with front and back end operations 
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn"
             onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
              Hire Me </button>
            <a href='Resume.pdf' download='Margaret Resume.pdf'>
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background">

          </div>

        </div>
      </div>
    </div>
  );
}
