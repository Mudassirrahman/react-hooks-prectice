import React from "react";

function Fooditems({ fooditems , itemToDelete }) {

  return (
    <>
      <ul className="list-group w-50 m-auto">
        {fooditems.map((item) => (
          <li key={item} className="list-group-item">
            {item}{" "}
            <button
              className="btn btn-success float-end"
              onClick={() => itemToDelete(item)}
            >
              del
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Fooditems;
