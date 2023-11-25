import React from "react";
import "./skills.css";

function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "Bootstrap",
    "Javascript",
    "ReactJs",
    "NextJs",
    "NodeJs",
    "NestJs",
  ];
  return (
    <div>
      <div>
        <h1 className="text-center mt-5 skills-heading">Skills</h1>
      </div>
      <div className="container mt-2 mb-5">
        <div className="row d-flex justify-content-between">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12 order-lg-0 order-md-0 order-sm-1 order-1 p-0 mt-5 mb-5">
            <div className="skills-left">
              <h2 className="skills-text">
                I have a vast experience in the following web technologies:
              </h2>
              <div className="d-flex justify-content-around flex-wrap skills-names">
                {skills.map((skill) => (
                  <div className="col-3">{skill}</div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12 order-lg-1 order-md-1 order-sm-0 order-0 p-0 text-center">
            <img
              className="mt-5 mb-5 rounded-2"
              src={process.env.PUBLIC_URL + "/Skills.png"}
              alt=""
              width="100%"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
