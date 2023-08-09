import React from "react";
import Navbar from "./navbar";
import HowItWorks from "./HowItWorks";
import Steptopartus from "./Steptopartus";
import Aboutus from "./Aboutus";
import Services from "./Services";
import Contact from "./Contact";
import Footer from "./Footer";
import HeadingTop from "./HeadingTop";
import Herosection from "./Herosection";
import Coutdownp from "./Coutdownp";
import FAQs from "./FAQs";
import Navbar1 from "./Navbar1";


const Home = () => {
  return (
    <>
      <HeadingTop/>
      <Navbar />
      <Navbar1 />
      <Herosection/>
      <Coutdownp/>
      <HowItWorks />
      <Services />
      <Steptopartus/>
      <FAQs/>
      {/* <Aboutus />
      <AboutCsrBox/> */}
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
