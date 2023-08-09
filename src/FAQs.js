import React from 'react'

const FAQs = () => {
  return (
   
    <>
     <div class="row text-center d-f justify-content-center ">
             <div class="col-md-6 ">
              <h1 class="mb-3 display-6 mb-5" style={{color:"#fff", fontSize:"40px"}}>Frequently Asked Questions</h1>
              <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Who can apply?

                    </button>
                  </h2>
                  <div id="collapseOne" class="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                  <strong>School students from grade 6 to 12</strong>, from all geographies of India are welcome to apply.


                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Can I participate as an individual, or do I need to form a team?

                    </button>
                  </h2>
                  <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                    <strong>You can participate in a team of 3-5. </strong>Teams often bring diverse skills and perspectives.

                     </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Can I submit multiple projects for the Hackathon?

                    </button>
                  </h2>
                  <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                  <strong>Generally, participants can submit only one project per team</strong> to ensure fairness and equal opportunities for all.

                      </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingFour">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    Is there any registration fee to join the Hackathon?


                    </button>
                  </h2>
                  <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
             <strong>No, participation in the IBM SkillsBuild Hackathon is completely free of charge.</strong> It's open to anyone who meets the eligibility criteria.

                      </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingFive">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                    How are the projects evaluated, and what are the judging criteria?
                     </button>
                  </h2>
                  <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                 <strong>Projects are typically evaluated based on factors such as innovation, technical complexity, usability, scalability, and alignment with the given theme.</strong> A panel of judges, including experts from IBM and other relevant fields, will review the submissions.

                      </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingSix">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                    Are there any prizes for the winners of the Hackathon?
             </button>
                  </h2>
                  <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
            <strong>Yes, the Hackathon offers exciting prizes for the Final Hackathon Day winning teams,</strong>which include cash rewards, IBM resources and mentorship opportunities.
                      </div>
                  </div>
                </div>

              </div>
            </div>
        </div>
    </>
  )
}

export default FAQs