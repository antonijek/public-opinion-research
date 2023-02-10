import { React, useState, useReducer } from "react";
import Occupation from "./occupation";
import Sex from "./sex";
import Age from "./age";
import "../../styles/basic-information.css";
import "../../styles/age.css";
import { style } from "@mui/system";

const initialInfo = {
  age: false,
  sex: false,
  occupation: false,
  slider: "age",
  style: "",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "age":
      return { ...state, age: action.age };
    case "sex":
      return { ...state, sex: action.sex };
    case "occupation":
      return { ...state, occupation: action.occupation };
    case "slider":
      return { ...state, slider: action.slider };
    case "style":
      return { ...state, style: action.style };
    default:
      return initialInfo;
  }
};

const BasicInformation = ({ setToken }) => {
  const [state, dispach] = useReducer(reducer, initialInfo);

  const changeAge = (e) => {
    dispach({ type: "age", age: e.target.value });
  };
  const changeSex = (e) => {
    dispach({ type: "sex", sex: e.target.value });
  };
  const changeOccupation = (e) => {
    dispach({ type: "occupation", occupation: e.target.value });
  };
  const changeSlider = (str) => {
    dispach({ type: "slider", slider: str });
    dispach({ type: "style", style: "age-comp" });
  };
  const submitBasicInformation = (e) => {
    changeSlider("question");
  };

  return (
    <div className="container">
      {state.slider === "age" ? (
        <Age
          changeAge={changeAge}
          changeSlider={changeSlider}
          age={state.age}
          style={state.style}
        />
      ) : state.slider === "sex" ? (
        <Sex
          changeSex={changeSex}
          changeSlider={changeSlider}
          sex={state.sex}
          style={state.style}
        />
      ) : state.slider === "occupation" ? (
        <Occupation
          changeOccupation={changeOccupation}
          occupation={state.occupation}
          style={state.style}
          submitBasicInformation={submitBasicInformation}
          setToken={setToken}
        />
      ) : null}
    </div>
  );
};

export default BasicInformation;
