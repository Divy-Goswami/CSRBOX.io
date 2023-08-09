import React, { useState } from "react";
import { useEffect } from "react";

const Steptopartus = () => {
  const [modal, setmodal] = useState(false);
  const [modal2, setmodal2] = useState(false);
  const [modal3, setmodal3] = useState(false);
  const [modal4, setmodal4] = useState(false);
  const [modal5, setmodal5] = useState(false);
  const MyModal = () =>{
  // useEffect(() => {
  // document.body.style.overflowY= "hidden";
  
  //   return () => {
  //     document.body.style.overflowY= "scroll"; 
  //    }
  // }, [ ])
  
    return(<>
                            <div className="modal-wrapper"></div>
                             <div className="modal-content">
                               <h1 className="headB">The school will register for the IBM SkillsBuild Hackathon. The school shares a suitable date for the next step
i.e. the masterclass with students from 6th-12th grade and signs an LOU with CSRBOX.<br></br><br></br>Last date for registration: 13th August</h1>
                               <button className="close-modal" onClick={()=> setmodal(false)}>CLOSE</button>
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
                             <div className="modal-content">
                               <h1 className="headB">CSRBOX members conduct masterclasses on topics like AI, Data Science, Cybersecurity, Design Thinking,
Digital Literacy, etc. As a part of which students will be oriented in depth about the IBM SkillsBuild Hackathonits process and benefits.<br></br><br></br>
The students will be felicitated with individual certificates for attending a masterclass and a lifetime free of
cost access to IBM SkillsBuild platform with 3000+ courses to learn.</h1>
                               <button className="close-modal" onClick={()=> setmodal2(false)}>CLOSE</button>
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
                             <div className="modal-content">
                               <h1 className="headB">The school will organize an Intra-School Hackathon in 2 categories - 6th-9th and 10th-12th. The students can
register in teams of 3-5 members each. The school can decide on the cap for no. of entries and organize the
competition internally.<br></br><br></br> The school shall communicate the winners to CSRBOX post their event and CSRBOX
experts shall felicitate the winners and the school with IBM SkillsBuild trophies and badges.<br></br><br></br>Last date for winner entries: 28th August</h1>
                               <button className="close-modal" onClick={()=> setmodal3(false)}>CLOSE</button>
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
                             <div className="modal-content">
                               <h1 className="headB">All the entries received from winners of the respective schools shall be screened by industry experts. The
shortlisted teams will be guided and invited to compete at the IBM SkillsBuild Hackathon and showcase their
project on the HACKATHON DAY</h1>
                   <button className="close-modal" onClick={()=> setmodal4(false)}>CLOSE</button>
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
                             <div className="modal-content">
                               <h1 className="headB">The shortlisted teams get an enthralling opportunity to showcase their projects at the HACKATHON DAY graced
by IBM leaders and industry experts. The industry experts shall judge the projects and declare the winners of
the Hackathon.<br></br><br></br> The schools get a chance to compete at a tech event promoting tech in education and interact
with the IBM Leaders, CSRBOX experts and other schools from various regions.</h1>
                               <button className="close-modal" onClick={()=> setmodal5(false)}>CLOSE</button>
                             </div>
                        
    </>)
  }
  
  return (
    <>
     <section id="howit" className="stepcon">
        <div className="work-container container">
          <h1 className="sub-heading text-center" id="head">Steps to Register</h1>
          <div className="row" id="childdiv">
                  <div className="col-12 col-lg-2  text-center work-container-subdiv">
                  <i class="fontawesome-style fas fa-laptop-code" id="logo"></i>
                <h2 className="sub-heading" id="childhead" >Register</h2>
                <div class="hidden"><h1 id="subcon">The school will register for the IBM SkillsBuild Hackathon. The school shares a suitable date for the next step
i.e. the masterclass with students from 6th-12th grade and signs an LOU with CSRBOX. </h1>
       </div>
       <button className="btn-modal1"
                  onClick={() => { setmodal(true) }}>
                  Read More
                </button>
                  </div>
                  <div className="col-12 col-lg-2  text-center work-container-subdiv">
                  <i class="fontawesome-style fas fa-laptop-code"></i>
                <h2 className="sub-heading" id="childhead">Masterclasses</h2>
                <div class="hidden"><h1 id="subcon">CSRBOX members conduct masterclasses on topics like AI, Data Science, Cybersecurity, Design Thinking,
Digital Literacy, etc. As a part of which students will be oriented in depth about the IBM SkillsBuild Hackathonits process and benefits.<br></br><br></br>
The students will be felicitated with individual certificates for attending a masterclass and a lifetime free of
cost access to IBM SkillsBuild platform with 3000+ courses to learn.</h1></div>
<button className="btn-modal1"
                  onClick={() => { setmodal2(true) }}>
                  Read More
                </button>
                  </div>
                  <div className="col-12 col-lg-2  text-center work-container-subdiv">
                  <i class="fontawesome-style fas fa-laptop-code"></i>
                <h2 className="sub-heading" id="childhead">Intra-school Hackathon</h2>
                <div class="hidden"><h1 id="subcon">The school will organize an Intra-School Hackathon in 2 categories - 6th-9th and 10th-12th. The students can
register in teams of 3-5 members each. The school can decide on the cap for no. of entries and organize the
competition internally.<br></br><br></br> The school shall communicate the winners to CSRBOX post their event and CSRBOX
experts shall felicitate the winners and the school with IBM SkillsBuild trophies and badges.</h1></div>
<button className="btn-modal1"
                  onClick={() => { setmodal3(true) }}>
                  Read More
                </button>
                  </div>
                  <div className="col-12 col-lg-2  text-center work-container-subdiv">
                  <i class="fontawesome-style fas fa-laptop-code"></i>
                <h2 className="sub-heading" id="childhead">Selection & Communication - (TOP 20 teams)</h2>
                <div class="hidden"><h1 id="subcon">All the entries received from winners of the respective schools shall be screened by industry experts. The
shortlisted teams will be guided and invited to compete at the IBM SkillsBuild Hackathon and showcase their
project on the HACKATHON DAY.</h1></div>
<button className="btn-modal1"
                  onClick={() => { setmodal4(true) }}>
                  Read More
                </button>
                  </div>
                  <div className="col-12 col-lg-2  text-center work-container-subdiv">
                  <i class="fontawesome-style fas fa-laptop-code"></i>
                <h2 className="sub-heading" id="childhead">Hackathon Day</h2>
                <div class="hidden"><h1 id="subcon">The shortlisted teams get an enthralling opportunity to showcase their projects at the HACKATHON DAY graced
by IBM leaders and industry experts. The industry experts shall judge the projects and declare the winners of
the Hackathon.<br></br><br></br> The schools get a chance to compete at a tech event promoting tech in education and interact
with the IBM Leaders, CSRBOX experts and other schools from various regions. </h1></div>
<button className="btn-modal1"
                  onClick={() => { setmodal5(true) }}>
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
       
      </section>
      <div className="remain">
        <div className="rechild">
          <div className="trophy">
          <h1 id="trologo">
      <i class="fas fa-trophy"></i>
              </h1>
          </div>
          <div className="trocon">
          <h1 className="sub-heading" id="head">
      Cumulative rewards and<br></br>
      prizes up to 1,00,000/-<br></br>   
      and a chance to build<br></br>
      upon your project.
      </h1>
          </div>
        </div>
      </div>
   </> 
    )
  }
  


export default Steptopartus;