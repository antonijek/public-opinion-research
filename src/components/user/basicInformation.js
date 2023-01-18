import { React, useState } from "react";
import Occupation from "./occupation";
import Sex from "./sex";
import Age from "./age";
import "../../styles/age.css";

const BasicInformation = () => {
  const [age, setAge] = useState(false);
  const [sex, setSex] = useState(false);
  const [occupation, setOccupation] = useState(false);
  const [slider, setSlider] = useState("age");
  const [style, setStyle] = useState("");

  const changeAge = (e) => {
    setAge(e.target.value);
  };
  const changeSex = (e) => {
    setSex(e.target.value);
  };
  const changeOccupation = (e) => {
    setOccupation(e.target.value);
  };
  const changeSlider = (str) => {
    console.log(str);
    setSlider(str);
    setStyle("age-comp");
  };
  const submitBasicInformation = (e) => {
    changeSlider("question");
  };

  return (
    <div className="container">
      {slider === "age" ? (
        <Age
          changeAge={changeAge}
          changeSlider={changeSlider}
          age={age}
          style={style}
        />
      ) : slider === "sex" ? (
        <Sex
          changeSex={changeSex}
          changeSlider={changeSlider}
          sex={sex}
          style={style}
        />
      ) : slider === "occupation" ? (
        <Occupation
          changeOccupation={changeOccupation}
          occupation={occupation}
          style={style}
          submitBasicInformation={submitBasicInformation}
        />
      ) : null}
    </div>
  );
};

export default BasicInformation;
