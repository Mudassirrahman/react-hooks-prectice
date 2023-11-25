
import React, { useState } from "react";
import Display from "./Display";
import CalculatorButtons from "./CalculatorButtons";

function CalculMainApp() {
  let [calVal, setCalVal] = useState("");
  let onButtonClicked = (buttonText) => {
    if (buttonText === "c") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newCalDisplayVal = calVal + buttonText;
      setCalVal(newCalDisplayVal);
    }
  };
  let buttons = [
    "c",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className="m-auto text-center p-2 w-50">
      <h1 className="mt-4">CALCULATOR</h1>
      <Display calculDisplay={calVal} />
      <CalculatorButtons buttons={buttons} onButtonClicked={onButtonClicked} />
    </div>
  );
}

export default CalculMainApp;
