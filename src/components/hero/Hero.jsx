import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <>
      <div className="hero-section">
        <div className="container hero-container">
          <div className="row d-flex justify-content-between">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12 ps-0 order-lg-0 order-md-0 order-sm-1 order-1">
              <div className="hero-left-section">
                <h1 className="hero-heading">
                  Hi I'm a{" "}
                  <span className="hero-heading-spam d-block">
                    Software Developer
                  </span>
                </h1>
                <p>
                  I’m <span className=" fw-bold"> Mudassir Rehman</span>, a
                  developer dedicated to making the world a better place one
                  line of code at a time
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12 text-lg-end text-md-end text-sm-center text-center order-lg-1 order-md-1 order-sm-0 order-0">
              <img
                className="hero-img"
                src={process.env.PUBLIC_URL + "/IMG_20230607_150552.jpg"}
                alt="profile-pic"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
