import React from "react";
import hourly_recruitment from "../../images/hourly_recruitment.png";
import "./Signup.scss";
import { useState } from "react";

const Signup = () => {
  const [user, setUser] = useState({});

  const userObj = {
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    dob: "",
    city: "",
    country: "",
    password: "",
  };

  return (
    <div className="signup">
      <div className="container">
        <div className="left">
          <img
            className="image"
            src={hourly_recruitment}
            alt="hourly_recuitment"
          />
        </div>
        <div className="right">
          <div className="wrapper">
            <div className="title">
              <h1>Registration</h1>
              <span>Lorem ipsum dolor sit amet consectetur</span>
            </div>
            <div className="item">
              <label htmlFor="firstName">First Name</label>
              <div className="sub-items">
                <input
                  type="text"
                  placeholder="Enter First Name"
                  id="firstName"
                  value=""
                />
              </div>
            </div>
            <div className="item">
              <label htmlFor="lastName">Last Name</label>
              <div className="sub-items">
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  id="lastName"
                  value=""
                />
              </div>
            </div>
            <div className="item">
              <label htmlFor="email">Email</label>
              <div className="sub-items">
                <input
                  type="email"
                  placeholder="Enter Email"
                  id="email"
                  value=""
                />
              </div>
            </div>
            <div className="item">
              <label>Gender</label>
              <div className="sub-items">
                <div className="sub-item">
                  <input
                    type="radio"
                    name="gender"
                    id="female"
                    value="female"
                  />
                  <label htmlFor="female">Female</label>
                </div>
                <div className="sub-item">
                  <input type="radio" name="gender" id="male" value="male" />
                  <label htmlFor="male">Male</label>
                </div>
              </div>
            </div>
            <div className="item">
              <label htmlFor="dob">Date of Birth</label>
              <div className="sub-items">
                <input
                  type="text"
                  id="dob"
                  value=""
                  placeholder="Enter Date of Birth"
                />
              </div>
            </div>
            <div className="item">
              <label htmlFor="city">City</label>
              <div className="sub-items">
                <input
                  type="text"
                  id="city"
                  value=""
                  placeholder="Enter City"
                />
              </div>
            </div>
            <div className="item">
              <label htmlFor="country">Country</label>
              <div className="sub-items">
                <input
                  type="text"
                  id="country"
                  value=""
                  placeholder="Enter Country"
                />
              </div>
            </div>
            <div className="item">
              <label htmlFor="password">Password</label>
              <div className="sub-items">
                <input
                  type="password"
                  id="password"
                  value=""
                  placeholder="Enter Password"
                />
              </div>
            </div>
            <div className="register">
              <button>Register</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
