import React from "react";

function TodoItem({ todoitems, handleDelButton }) {
  return (
    <div className="m-auto">
      <div className="row mt-3">
        {todoitems.map((item, index) => (
          <div key={index} className="d-flex">
            <div className="col-5 mt-3">
              <h3 className=" fs-6">{item.name}</h3>
            </div>
            <div className="col-5 mt-3">
              <h3 className="fs-6">{item.date}</h3>
            </div>
            <div className="col-2 mt-3">
              <button
                onClick={() => {
                  handleDelButton(item.name);
                }}
                className="btn btn-danger"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoItem;
