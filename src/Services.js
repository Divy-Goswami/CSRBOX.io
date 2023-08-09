import React, { useState } from "react";
import serviceapi from "./API/serviceApi.js";
import { useEffect } from "react";

const Services = () => {
  const [serviceData, setServiceData] = useState(serviceapi);
  const [modal, setmodal] = useState(false);
  const [modal2, setmodal2] = useState(false);
  const [modal3, setmodal3] = useState(false);
  const [modal4, setmodal4] = useState(false);
  const [modal5, setmodal5] = useState(false);
  const MyModal = () =>{
    useEffect(() => {
      document.body.style.overflowY = "hidden"
     
    
      return () => {
        document.body.style.overflowY = "scroll"
      }
    }, [])
    
    return(<>
                            <div className="modal-wrapper"></div>
                             <div className="modal-content1">
                               <h1 className="headB">1.Devise a solution to reduce food wastage in urban areas and feed the hungry </h1><br></br>
                               <h2 className="contentB">
          Many low-income families in cities struggle to access an adequate amount of food due to which they need to skip meals or depend on low-quality food, while at the same time, a lot of food in edible condition is being wasted from households, restaurants, supermarkets, etc .<br></br><br></br>

          Propose a functional model aimed at mitigating the issue of limited food accessibility among economically disadvantaged households and the challenge of excessive food waste within urban settings.<br></br><br></br>

          The problem statement asks for a practical plan that helps the former families get enough food and on the other hand reduces the amount of food that goes to waste.<br></br><br></br>

          Solution Sample:<br></br>
          Olio - Share More, Waste Less<br></br>
          <a href="https://olioapp.com/en/">https://olioapp.com/en/</a><br></br><br></br>

          One of the focus areas of this project is to reduce wastage of food and help you declutter your homes and save the planet. At the same time also locate the near by needy homes where you can send your leftover food and help a person not sleep hungry.

                                </h2>
                               <button className="close-modal1" onClick={()=> setmodal(false)}>CLOSE</button>
                             </div>
                        
    </>)
  }
  const MyModal2 = () =>{
    useEffect(() => {
      document.body.style.overflowY = "hidden"
     
    
      return () => {
        document.body.style.overflowY = "scroll"
      }
    }, [])
    return(<>
                            <div className="modal-wrapper"></div>
                             <div className="modal-content1">
                               <h1 className="headB">2.Develop a tech-driven, affordable healthcare solution for remote villages’ accessibility. </h1>
                               <br></br><br></br>
                               <h2 className="contentB">
                               Imagine a small village located far away from big cities or towns. The people living there have a hard time getting medical help because there are no hospitals or doctors nearby. They may have to travel long distances to get the care they need, which can be expensive and time-consuming. Additionally, the village might not have the necessary medical facilities or technology to provide good healthcare services. The goal is to find a new way to improve healthcare accessibility and delivery for these communities.<br></br><br></br>

Devise an innovative solution to improve healthcare accessibility and delivery in remote villages, considering factors of infrastructure, technology and affordability<br></br><br></br>

Solution samples: Telemedicine<br></br><br></br>

A telemedicine system in a small health centre consists of a personal computer with customised medical software connected to a few medical diagnostic instruments.  Through this computer, digitised versions of patients' medical images and diagnostic details (such as X-ray images and blood test reports) are dispatched to specialist doctors through the satellite-based communication link. The patient and doctor eventually interact through video conferencing. The entire system is relatively user-friendly, and only a short period of training is needed for doctors.
</h2>
                               <button className="close-modal1" onClick={()=> setmodal2(false)}>CLOSE</button>
                             </div>
                        
    </>)
  }
  const MyModal3 = () =>{
    useEffect(() => {
      document.body.style.overflowY = "hidden"
     
    
      return () => {
        document.body.style.overflowY = "scroll"
      }
    }, [])
    return(<>
                            <div className="modal-wrapper"></div>
                             <div className="modal-content1">
                               <h1 className="headB">3.Create equitable solutions bridging the digital divide for student education.</h1><br></br><br></br>
                               <h2 className="contentB">
                               The problem we want to solve is that some students don't have the same access to technology and the internet, which creates an unfair situation where some students can't fully participate in their education. <br></br><br></br>

Design an inclusive solution that addresses the digital divide among students, focusing on providing equal access to technology and internet connectivity to ensure equitable educational opportunities for all.<br></br><br></br>

We need to find a solution that makes sure all students have equal opportunities to learn and succeed. All students should have access to technology and quality education.<br></br><br></br>

(If student A has access to a computer at home then she can research, learn through tech and enhance her learning. While B doesn’t have access to technology then her learning becomes stagnant and hinders her growth. 
We need to come up with a solution so that students have equal educational opportunities in terms of technology and internet access.)<br></br><br></br>

Solution samples:<br></br>
Using AI installing a virtual assistant learning bot that can be placed at the community learning centre for all the students to access and learn from.

                               </h2>
                               <button className="close-modal1" onClick={()=> setmodal3(false)}>CLOSE</button>
                             </div>
                        
    </>)
  }
  const MyModal4 = () =>{
    useEffect(() => {
      document.body.style.overflowY = "hidden"
     
    
      return () => {
        document.body.style.overflowY = "scroll"
      }
    }, [])
    return(<>
                            <div className="modal-wrapper"></div>
                             <div className="modal-content1">
                               <h1 className="headB">4.Innovate a rainwater collection system for sustainable household water supply. </h1><br></br><br></br>
                               <h2 className="contentB">
                               Imagine you live in an area where there is limited access to freshwater and the groundwater levels are decreasing. You want to find a solution to collect and store rainwater to use for various purposes like watering plants, washing clothes, or cleaning. Currently, you have to rely on getting water from a well or a water supply company. However, you want to reduce your dependence on these sources and utilize rainwater instead. <br></br><br></br>

Devise an equipment that facilitates rainwater harvesting and storage in order to reduce household dependence on freshwater and groundwater sources, for the procurement of water<br></br><br></br>

Solution Sample:<br></br>
A tech-based device that can collect rainwater and efficiently store it synched with another device that extract freshwater out of rainwater and makes it usable

                               </h2>
                               <button className="close-modal1" onClick={()=> setmodal4(false)}>CLOSE</button>
                             </div>
                        
    </>)
  }
  const MyModal5 = () =>{
     useEffect(() => {
      document.body.style.overflowY = "hidden"
     
    
      return () => {
        document.body.style.overflowY = "scroll"
      }
    }, [])
    return(<>
                            <div className="modal-wrapper"></div>
                             <div className="modal-content1">
                               <h1 className="headB">5.Devise a solution for the government to easilymitigate the potholes issues.</h1><br></br><br></br>
                               <h2 className="contentB">
                               Imagine you're a student living in a city where the roads have lots of potholes. Potholes are those annoying, bumpy holes in the road that can damage cars and cause accidents. The government wants to make it easier for people like you to report these potholes so they can fix them quickly.<br></br><br></br>

Devise a solution for the government to easily receive potholes complaints and enable them to monitor the status and take immediate actions.<br></br><br></br>
Solution sample:<br></br>
Design an application where citizens can register their complaints for the potholes issue in their area. When the officials address the complaint, they can view the past years working in that area and find the root cause to prevent the pothole from reappearing.

                               </h2>
                               <button className="close-modal1" onClick={()=> setmodal5(false)}>CLOSE</button>
                             </div>
                        
    </>)
  }
  return (
    <>
     <section id="howit" className="stepcon">
        <div className="work-container container">
          <h1 className="sub-heading text-center" id="head">Themes and Problem Statements</h1>
          <div className="row" id="childdiv">
                <>
                  <div className="col-12 col-lg-2  text-center work-container-subdiv">
                   <img src="./Images/p1.jpg"></img><br></br><br></br>
                   <h2 className="sub-heading" id="serviceh2">Food Accessibility and Waste Management</h2>
                   <button className="btn-modal"
                  onClick={() => { setmodal(true) }}>
                  Read More
                </button>
                  </div>
                  <div className="col-12 col-lg-2  text-center work-container-subdiv">
                  <img src="./Images/p2.jpg"></img><br></br><br></br>
                  <h2 className="sub-heading" id="serviceh2">Improve Healthcare Accessibility in remote villages:</h2>
                  <button className="btn-modal"
                  onClick={() => setmodal2(true)}>
                  Read More
                </button>
                  </div>
                  <div className="col-12 col-lg-2  text-center work-container-subdiv">
                  <img src="./Images/p3.jpg"></img><br></br><br></br>
                  <h2 className="sub-heading" id="serviceh2"> Digital divide in Education </h2>
                  <button className="btn-modal"
                  onClick={() => setmodal3(true)}>
                  Read More
                </button>
                  </div>
                  <div className="col-12 col-lg-2  text-center work-container-subdiv">
                  <img src="./Images/p4.jpg"></img><br></br><br></br>
                  <h2 className="sub-heading" id="serviceh2">Water conservation</h2>
                  <button className="btn-modal"
                  onClick={() => setmodal4(true)}>
                  Read More
                </button>
                  </div>
                  <div className="col-12 col-lg-2  text-center work-container-subdiv">
                  <img src="./Images/p5.jpg"></img><br></br><br></br>
                  <h2 className="sub-heading" id="serviceh2">Mitigating the potholes issue</h2>
                  <button className="btn-modal"
                  onClick={() => setmodal5(true)}>
                  Read More
                </button>
                  </div>
              {modal && <MyModal />}
              {modal2 && <MyModal2 />}
              {modal3 && <MyModal3 />}
              {modal4 && <MyModal4 />}
              {modal5 && <MyModal5 />}
                </>
          </div>
        </div>
      </section>
       {/* <section id="stepdiv">
        <div className="work-container container">
          <h1 className="sub-heading text-center" id="head">Themes and Problem Statements</h1>
          <div className="row" >
            <div className="col-12   text-center " id="subdiv">
              <div className="Boxes">
              <img src="./Images/p1.jpg"></img><br></br><br></br>
              <h2 className="sub-heading" id="serviceh2">Devise a solution to reduce food wastage in urban areas and feed the hungry</h2>
                <button className="btn-modal"
                  onClick={() => { setmodal(true) }}>
                  Read More
                </button>
              </div>
              <div className="Boxes">
              <img src="./Images/p2.jpg"></img><br></br><br></br>
              <h2 className="sub-heading" id="serviceh2">Develop a tech-driven, affordable healthcare solution for remote villages’ accessibility.</h2>
                <button className="btn-modal"
                  onClick={() => setmodal2(true)}>
                  Read More
                </button>
              </div>
              <div className="Boxes">
              <img src="./Images/p3.jpg"></img><br></br><br></br>
              <h2 className="sub-heading" id="serviceh2">Create equitable solutions bridging the digital divide for student education.
</h2>
                <button className="btn-modal"
                  onClick={() => setmodal3(true)}>
                  Read More
                </button>
              </div>
              <div className="Boxes">
              <img src="./Images/p4.jpg"></img><br></br><br></br>
              <h2 className="sub-heading" id="serviceh2">Innovate a rainwater collection system for sustainable household water supply.</h2>
                <button className="btn-modal"
                  onClick={() => setmodal4(true)}>
                  Read More
                </button>
              </div>
              <div className="Boxes">
              <img src="./Images/p5.jpg"></img><br></br><br></br>
              <h2 className="sub-heading" id="serviceh2">Devise a solution for the government to easilymitigate the potholes issues.</h2>
                <button className="btn-modal"
                  onClick={() => setmodal5(true)}>
                  Read More
                </button>
              </div>
              {modal && <MyModal />}
              {modal2 && <MyModal2 />}
              {modal3 && <MyModal3 />}
              {modal4 && <MyModal4 />}
              {modal5 && <MyModal5 />}
            </div>
          </div>
        </div>
      </section>           */}
    </>
  );
};

export default Services;

