import React from "react";
import "./style.css";

export default function App() {
  var [gender,setGender]=React.useState(['Male','Female','Others'])

  var [selectedGender,setselectedGender]=React.useState('Male')
  const handleselectedGender =(e)=>{
    setselectedGender(e.target.value)
  }
  return (
    <div>
      <h1>Form handling(Radio button)!</h1>
      Gender:
      {
        gender.map((gender,index)=>{
            return(
              <>
              <input type="radio" name="gender"value={gender}
              onChange={handleselectedGender} checked={gender===selectedGender?true:false}/>{gender}
              </>
            )
        })
      } 
      <h3>Selected Gender : {selectedGender}</h3>
    </div>
  );
}
