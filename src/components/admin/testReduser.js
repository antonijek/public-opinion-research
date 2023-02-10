import { React, useReducer, useState } from "react";

const initialValue = { name: "Marko", last: "Mirkovic", age: 40 };
const reducer = (state, action) => {
  switch (action.type) {
    case "changeName":
      return { ...state, [action.field]: action.value };

    default:
      return initialValue;
  }
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const TestReduser = () => {
  const [state, dispach] = useReducer(reducer, initialValue);
  /*   const [name, setname] = useState("mirko");
  const [last, setLast] = useState("mirkovic");
  const [age, setAge] = useState(50); */

  const changeName = (e) => {
    console.log(e.target.innerText);
  };

  const getValue = (e) => {
    dispach({
      type: "changeName",
      field: e.target.name,
      value: e.target.value,
    });
  };

  console.log(state);
  return (
    <div>
      <p>{state.name}</p>
      <p>{state.last}</p>
      <p>{state.age}</p>
      <button>{state.last}</button>
      <input
        type="text"
        name="firstName"
        placeholder="firstName"
        onChange={(e) => getValue(e)}
      />
      <input
        type="text"
        name="lastName"
        placeholder="lastName"
        onChange={(e) => getValue(e)}
      />
      <input
        type="number"
        name="age"
        placeholder="age"
        onChange={(e) => getValue(e)}
      />
      <input
        type="text"
        name="occuppation"
        placeholder="occupation"
        onChange={(e) => getValue(e)}
      />
      <input
        type="password"
        name="email"
        placeholder="email"
        onChange={(e) => getValue(e)}
      />
    </div>
  );
};

export default TestReduser;
