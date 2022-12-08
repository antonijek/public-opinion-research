import { React, useState } from "react";
import Occupation from "./occupation";
import Sex from "./sex";
import Age from "./age";
const BasicInformation = () => {
  const [age, setAge] = useState(false);
  const [sex, setSex] = useState(false);
  const [occupation, setOccupation] = useState(false);
  const [slider, setSlider] = useState("age");

  const changeAge = (e) => {
    setAge(e.target.value);
  };
  const changeSex = (e) => {
    setSex(e.target.value);
  };
  const changeOccupation = (e) => {
    setOccupation(e.target.value);
  };
  const changeSlider = (e, str) => {
    e.preventDefault();
    console.log("test");
    setSlider(str);
  };

  return (
    <div>
      {slider === "age" ? (
        <Age changeAge={changeAge} changeSlider={changeSlider} age={age} />
      ) : slider === "sex" ? (
        <Sex changeSex={changeSex} changeSlider={changeSlider} sex={sex} />
      ) : slider === "occupation" ? (
        <Occupation
          changeOccupation={changeOccupation}
          changeSlider={changeSlider}
          occupation={occupation}
          age={age}
          sex={sex}
        />
      ) : null}
    </div>
  );
};

export default BasicInformation;
