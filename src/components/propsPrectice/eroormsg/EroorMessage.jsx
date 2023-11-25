import React from "react";

function EroorMessage({ fooditems }) {
//     let message = ""
//   if (fooditems.length === 0) {
//     message = "Eat Healthy Foods";
//   }
let message = "Eat Healthy Foods"
  return (
    <>
      {/* {fooditems.length === 0 ? <p className="text-center">{message}</p> : null} */}
      {fooditems.length === 0 && <p className="text-center">{message}</p>}
    </>
  );
}

export default EroorMessage;
