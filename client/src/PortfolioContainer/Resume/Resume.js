import React, { useState } from "react";
import ScreenHeading from "../../Utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../Utilities/ScrollService";
import Animations from "../../Utilities/Animations";
import './Resume.css'

export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);  

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
            <span>{props.heading ? props.heading : ""}</span>
            {props.fromDate && props.toDate ? (
              <div className="heading-date">
                {props.fromDate + "_" + props.toDate}
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div className="resume-sub-heading">
            <span>{props.subHeading ? props.subHeading : ""}</span>
          </div>
          <div className="resume-heading-description">
            <span>{props.description ? props.description : ""}</span>
          </div>
        </div>    
    );
  };

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const programmingSkillsDetails = [
    { skill: ".Net", ratingPercentage: 85 },
    { skill: ".Net Core", ratingPercentage: 85 },
    { skill: "C# Programming Language", ratingPercentage: 89 },
    { skill: "Cloud (Azure)", ratingPercentage: 89 },
    { skill: "Xamarin Forms", ratingPercentage: 70 },
    { skill: "Core Java", ratingPercentage: 80 },
    { skill: "JavaScript", ratingPercentage: 85 },
    { skill: "React JS", ratingPercentage: 85 },
    { skill: "HTML", ratingPercentage: 80 },
    { skill: "CSS", ratingPercentage: 80 },
  ];

  const projectsDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2021", toDate: "2022" },
      description:
        "A Personal Portfolio website to showcase all my details and projects at one place.",
      subHeading: "Technologies Used: React JS, Bootstrap,Html,CSS",
      
    },
    {
      title: "Student Management Portal ",
      duration: { fromDate: "2021", toDate: "2021" },
      description:
        "Created real world student management portal for (KASNEB) Kenya Accountants and Secretaries National Examination Board.",
      subHeading:
        "Technologies Used:  ASP.Net ,c#, web services, Web technologies(Html5,css,javascript,bootstrap), REST API.",
    },
    {
      title: "Intellex Solutions Website ",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "Intellex Solutions Website.",
      subHeading:
        "Technologies Used: Wordpress.",
    },
    
  ];
  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Egerton University, Kenya"}
        subHeading={"Bachelor of Science Computer Science"}
        fromDate={"2015"}
        toDate={"2019"}
      />
      <ResumeHeading
        heading={"Chinese Language"}
        subHeading={"Confucius Institute. Egerton University"}
        fromDate={"2016"}
        toDate={"2019"}
      />
      <ResumeHeading
        heading={"High School "}
        subHeading={"Ruchu Girls High School"}
        fromDate={"2011"}
        toDate={"2014"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Dynasoft Business Solutions"}
          subHeading={"Mobile and Portal Developer"}
          fromDate={"2020"}
          toDate={"Present"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
          - Develop, design, test and maintain custom web applications.
          </span>              
          <br />
          <span className="resume-description-text">
            - Provide technical expertise in all aspects of solution design, application development,version control, integration and system upgrades.
          </span>  
          <br />
          <span className="resume-description-text">
            - Integrated the web app with backend services to create new student
            onboarding application with dynamic form content.{" "}
          </span>
          <br />
          <span className="resume-description-text">
            - I stretch my mental capacity to develope portals as per the given
            designs.
          </span>
          <br />
        </div>
      </div>
    </div>,
    /* Programming Skills */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Travelling"
        description="Apart from being a tech enthusiast and a code writer, i also like to travell because I love discovering new cities and places around the world. Travelling brings me the real adventure and thrill to venture into new places."
      />
      <ResumeHeading
        heading="Music"
        description="Listening to soothing music is something I can never compromise with, skimming through Spotify's pop songs charts is at times the best stress reliever that i can get my hands on."
      />
      <ResumeHeading
        heading="Language"
        description="I like learning new skills and recently I have been interested in exploring different languages as they help me explore new cultures around the world. I started learning Chinese Language in school and I have already cleared the beginner level."
      />
    </div>,
  ];

  const handleCarousal = (index)=>{
      let offsetHeight = 360;
      let newCarousalOffset ={
        style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
      };

      setCarousalOffSetStyle(newCarousalOffset);
      setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require (`../../assets/Resume/${bullet.logoSrc}`)}
          alt=""
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffSetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };


  
  return (
    <div className="resume-container screen-container" id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Deatails"} />
        <div className="resume-card">
            <div className="resume-bullets">
                <div className="bullet-container">
                    <div className="bullet-icons"></div>
                    <div className="bullets">{getBullets()}</div>
                </div>
            </div>
            <div className="resume-bullets-details">{getResumeScreens()}</div>

        </div>
      </div>
    </div>
  );
};
