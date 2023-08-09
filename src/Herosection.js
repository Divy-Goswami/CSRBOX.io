import React from 'react'

const Herosection = () => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide carousel-fade " data-bs-ride="false">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-label="Slide 7"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active "style={{height:"500px;"}}>
        <img src="./Images/1.jpg" className="heroimg1 d-block w-100" alt="..." height="900px"/>
        <div className="carousel-caption d-none d-md-block">
          <h1 style={{color:"#fff"}} className='heading'>IBM SkillsBuild Hackathon</h1>
        </div>
      </div>
      <div className="carousel-item" style={{height:"500px;"}}>
        <img src="./Images/3.jpg" className="heroimg2 d-block w-100 " alt="..."height="900px"/>
      </div>
      <div className="carousel-item"style={{height:"500px;"}}>
        <img src="./Images/3.jpg" className="heroimg2 d-block w-100 " alt="..."height="900px"/>
      </div>
      <div className="carousel-item" style={{height:"500px;"}}>
        <img src="./Images/4.jpg" className="heroimg2 d-block w-100 " alt="..."height="900px"/>
      </div>
      <div className="carousel-item" style={{height:"500px;"}}>
        <img src="./Images/5.jpg" className="heroimg2 d-block w-100 " alt="..."height="900px"/>
      </div>
      <div className="carousel-item" style={{height:"500px;"}}>
        <img src="./Images/6.jpg" className="heroimg2 d-block w-100 " alt="..."height="900px"/>
      </div>
      <div className="carousel-item" style={{height:"500px;"}}>
        <img src="./Images/7.jpg" className="heroimg2 d-block w-100 " alt="..."height="900px"/>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"  ></span>
      <span className="visually-hidden" style={{color:"black"}}>Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>

  )
}

export default Herosection