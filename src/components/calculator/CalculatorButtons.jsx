import React from "react";

function CalculatorButtons({ buttons, onButtonClicked }) {
  return (
    <>
      <div className="row m-auto">
        <div className="col-12 d-flex justify-content-around m-auto flex-wrap">
          {buttons.map((btn, index) => (
            <button
              key={index}
              onClick={() => {onButtonClicked(btn)} }
              className="btn btn-dark col-3  m-1"
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default CalculatorButtons;
