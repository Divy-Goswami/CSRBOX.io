import React, { useState } from "react";
import howToUseApp from "./API/howToUse.js";
import aboutibm from "./API/aboutibm.js";

const Aboutus = () => {
  const [aboutData, setAboutData] = useState(howToUseApp);
  const [aboutIbm, setWorkData] = useState(aboutibm);

  return (
    <>
      <section className="common-section our-services our-services-rightside" id="abhero">
        <div className="container" id="aboutsec">
          <div className="row">
                 <div className="parentDiv">
      <div className="childDiv" id="textcon">
        <div className="abcon">
      <h1 className="sub-heading" id="head">
                About IBM SkillsBuild:
              </h1>
              <p className="main-hero-para" id="abpara">IBM SkillsBuild or IBM’s emerging Technology Initiative is a zero cost program for students aligned
                with New Education Policy and Digital India Mission. This initiative aims to build Digital Skills,
                Workplace Skills and Life Skills in students and provide them with opportunities to upskill
                themselves while gaining unique digital badges and certifications.</p>
                </div>
        <div className="abimg">
        <img
          src="./Images/IBMLOGOT.png"
        />
        </div>

        </div>
        </div>
        </div>
    
 
    </div>
    </section>
                <br></br><br></br><br></br>
               
              <section id="howit" className="abhowit">
                <div className="work-container container">
                  <h1 className="sub-heading text-center" id="head">Benefits of the Program:</h1>
                  <div className="row" id="childdiv">
                    {aboutIbm.map((curElem) => {
                      const { id, logo, title, info } = curElem;
                      return (
                        <>
                          <div className="col-12 col-lg-5  text-center work-container-subdiv">
                            <i class={`fontawesome-style ${logo}`}></i>
                            <h2 className="sub-heading" id="childhead">{title}</h2>
                            <p className="main-hero-para w-100" id="para">{info}</p>
                          </div>

                        </>
                      );
                    })}
                  </div>
                  
                </div>
              </section>
              <div className="maphdiv">
              <h1 className="maphead">
                 IBMSKILLBUILD'S Presence in 17+ States 50+ Districts
              </h1></div>
      <div class="parent">
    <div class="image-container">
      <img src="./Images/Map.jpg" alt="Your Image"  id="mapimg"/>
    </div>
    <div class="content-container">
      <div>
        <h2 className="numh2">3,00,000+</h2>
        <p className="paracon">Students Enagaged on <br></br>the Platform </p>
      </div>
      <div>
        <h2 className="numh2">2,50,000+</h2>
        <p className="paracon">Students Attended<br></br> Masterclasses<br></br> on Emerging Tech </p>
      </div>
      <div>
        <h2 className="numh2">200+</h2>
        <p className="paracon">School & Academic <br></br>Partnerships across <br></br>50 Districts </p>
      </div>
      <div>
        <h2 className="numh2">13,00,000</h2>
        <p className="paracon">Coures Completed by <br></br>Learners</p>
      </div>
    </div>
  </div>
            
           
        
    
    
    </>
  );
};

export default Aboutus;
