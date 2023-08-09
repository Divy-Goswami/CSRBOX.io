import React, { useState } from "react";
import workapi from "./API/workApi.js";

const HowItWorks = () => {
  const [workData, setWorkData] = useState(workapi);
  console.log(workData);
  return (
    <>
      <section id="howits">
        <div className="work-container container">
          <h1 className="sub-heading text-center" id="head">What we provide</h1>
          <div className="row" id="childdiv">
            {workData.map((curElem) => {
              const { id, logo, title, info } = curElem;
              return (
                <>
                  <div className="col-12 col-lg-2  text-center work-container-subdiv" id="Box">
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
    </>
  );
};

export default HowItWorks;
