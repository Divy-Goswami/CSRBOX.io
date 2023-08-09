import React from 'react'

const HeadingTop = () => {
  return (
    <>
     <div className="Maindiv">
      <div className="childdiv">
        <div className="topdiv">
          <div className="right">
          <img 
          src="./Images/IBMLOGOT.png"
          width="350px"
          height="170px"
          id="imgl"
          
          ></img>
          </div>
          <div className="left">
            <div className='leftcontent'></div>
            <div id="headdiv"> <a class="navbar-brand" href="#" id='header'>
            IBM SkillsBuild Hackathon
            </a></div>
            <div id="paradiv"> 
            <a class="navbar-brand" href="#" id='headpara'>
            Future leaders innovating solutions for a better tomorrow!!
            </a>
            </div>
        
          </div>
         
        </div>
       
      </div>
     </div>

    </>
  )
}

export default HeadingTop