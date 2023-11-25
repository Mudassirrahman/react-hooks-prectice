import React, { useState } from "react";

function FormAppWithUseState() {
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [formVal, setFormVal] = useState("");

  const handleFirstNameVal = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastNameVal = (e) => {
    setLastName(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    let inpVal = firstName + " " + lastName;
    setFormVal(inpVal);
    setFirstName("")
    setLastName("")
  };

  return (
    <div className="text-center">
      <form action="" onSubmit={handleFormSubmit}>
        <div className="mt-5 ms-5">
          <div className="mt-5">
            <input
              type="text"
              onChange={handleFirstNameVal}
              value={firstName}
            />
          </div>
          <div className="mt-5">
            <input type="text" onChange={handleLastNameVal} value={lastName} />
          </div>
          <div className="text-center">
            <button className="btn btn-primary mt-3">Signin</button>
          </div>
        </div>
      </form>
      <p>{formVal}</p>
    </div>
  );
}

export default FormAppWithUseState;
