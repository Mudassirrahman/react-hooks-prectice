import React from "react";

function FoodDisplay({onKeyDown}) {
   
    
  return (
    <div className="row d-flex justify-content-center align-content-center text-center">
      <div className="col-6 mb-3 text-center">
        <input
          className="w-100"
          type="text"
          placeholder="Enter Food Item Here"
          onKeyDown={onKeyDown}
        />
      </div>
    </div>
  );
}

export default FoodDisplay;
