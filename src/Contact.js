import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
 const [firstname, setFirstName] = useState("");
 const [lastname, setlastName] = useState("");
 const [phone, setPhone] = useState("");
 const [email, setEmail] = useState("");
 const [address, setAddress] = useState("");
const [message, setMessage] = useState("");


  // connect with firebase
  const submitData = async (event) => {
    event.preventDefault();
    console.log(firstname,lastname,phone,email,address,message);
    const data ={
      FirstName:firstname, 
      LastName:lastname,
      Phone:phone, 
      Email:email,
      Address:address,
      Message:message
    };

   axios.post("https://sheet.best/api/sheets/b41e89bd-766a-4a08-8ba4-6121ba376871",data).then((response)=>{
    console.log(response);
    setFirstName("");
    setlastName("");
    setPhone("");
    setEmail("");
    setAddress("");
    setMessage("");
   })
   
   
  };

    // if (firstName && lastName && phone && email && address && message) {
    //   const res = fetch(
    //     "https://ibmskillbuild-26f62-default-rtdb.firebaseio.com/ibmskillbuild.json",
    //     {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({
    //         firstName,
    //         lastName,
    //         phone,
    //         email,
    //         address,
    //         message,
    //       }),
    //     }
    //   );

    //   if (res) {
    //     setUserData({
    //       firstName: "",
    //       lastName: "",
    //       phone: "",
    //       email: "",
    //       address: "",
    //       message: "",
    //     });
    //     alert("Data Stored");
    //   } else {
    //     alert("plz fill the data");
    //   }
    // } else {
    //   alert("plz fill the data");
    // }


  return (
    <>
      <section className="contactus-section" >
        <div className="container ">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="contact-leftside col-12 col-lg-5">
                  <h1 className="main-heading fw-bold" id="contacth1">
                    Connect With  <br /> IBMSKILLBUILD.
                  </h1>
                  <br></br><br></br>
                  {/* <p className="main-hero-para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deserunt eaque alias similique.
                  </p> */}
                  <figure>
                    <img
                      src="./images/IBM_Cloud_Interconnect.jpg"
                      alt="contatUsImg"
                      className="img-fluid"
                    />
                  </figure>
                </div>

                {/* right side contact form  */}
                <div className="contact-rightside col-12 col-lg-7">
                  <form method="POST" onSubmit={submitData}>
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="firstName"
                          id=""
                          className="form-control"
                          placeholder="First Name"
                          onChange={(e)=>{setFirstName(e.target.value)}}
                          value={firstname}
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="lastName"
                          id=""
                          className="form-control"
                          placeholder="Last Name"
                          onChange={(e)=>{setlastName(e.target.value)}}
                          value={lastname}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="phone"
                          id=""
                          className="form-control"
                          placeholder="Phone Number "
                          onChange={(e)=>{setPhone(e.target.value)}}
                          value={phone}
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="email"
                          id=""
                          className="form-control"
                          placeholder="Email ID"
                          onChange={(e)=>{setEmail(e.target.value)}}
                          value={email}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 contact-input-feild">
                        <input
                          type="text"
                          name="address"
                          id=""
                          className="form-control"
                          placeholder="Add Address"
                          onChange={(e)=>{setAddress(e.target.value)}}
                          value={address}
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12 ">
                        <input
                          type="text"
                          name="message"
                          id=""
                          className="form-control"
                          placeholder="Enter Your Message"
                          onChange={(e)=>{setMessage(e.target.value)}}
                          value={message}
                        />
                      </div>
                    </div>
                    <div class="form-check form-checkbox-style">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label
                        class="form-check-label"
                        className="main-hero-para">
                        I agree that the IBMSKILLBUILD may contact me at the
                        email address or phone number above
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-style w-100"
                      >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
