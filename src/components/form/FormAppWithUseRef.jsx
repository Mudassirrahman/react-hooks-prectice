import React, { useRef, useState } from "react";

function FormAppWithUseRef() {
  let firstNameValue = useRef();
  let lastNameValue = useRef();
  let [formVal, setFormVal] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    let fNameVal = firstNameValue.current.value;
    let lNameVal = lastNameValue.current.value;
    setFormVal(fNameVal + " " + lNameVal);

    firstNameValue.current.value = "";
    lastNameValue.current.value = "";
  };
  return (
    <div className="text-center">
      <form action="" onSubmit={handleFormSubmit}>
        <div className="mt-5 ms-5">
          <div className="mt-5">
            <input type="text" ref={firstNameValue} />
          </div>
          <div className="mt-5">
            <input type="text" ref={lastNameValue} />
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

export default FormAppWithUseRef;
