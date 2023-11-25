import { useState } from "react";
import "../../App.css";
import EroorMessage from "./eroormsg/EroorMessage";
import FoodDisplay from "./foodDisplay/FoodDisplay";
import Fooditems from "./fooditems/FoodItems";

function FoodApp() {
  let [foodItems, setFoodItems] = useState([]);

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      let newFoodItem = e.target.value;
      e.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
    }
  };

  const itemToDelete = (delitem) => {
    const updatedItems = foodItems.filter((item) => item !== delitem);
  
  setFoodItems(updatedItems)
  }

  return (
    <div className="container">
      <h1 className="text-center mt-4 mb-4">Healthy Foods</h1>
      <FoodDisplay onKeyDown={onKeyDown} />
      <EroorMessage fooditems={foodItems} />
      <Fooditems fooditems={foodItems} itemToDelete={itemToDelete} />
    </div>
  );
}

export default FoodApp;




  // let btnValArr = useState("Food item enterd by user");
  // let btnVal = btnValArr[0];
  // let setBtnVal = btnValArr[1];