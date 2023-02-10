import axios from "axios";
import { React, useReducer, useState, useEffect } from "react";

const url = `http://universities.hipolabs.com/search?country=`;

const initialState = {
  name: "Antonije",
  lastName: "Knezevic",
  email: "antonijek@yaoo.com",
  age: 40,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "name":
      return { ...state, [action.name]: action.value };
    case "lastName":
      return { ...state, lastName: "Petrovic" };
    case "email":
      return { ...state, email: "petar@yahoo.com" };
    case "age":
      return { ...state, age: 50 };
    default:
      return initialState;
  }
};

const ReducerTest = () => {
  const [name, setName] = useState("");
  const [state, dispach] = useReducer(reducer, initialState);
  const [data, setData] = useState("");

  const handleInput = (e) => {
    console.log(e);
  };

  const showSomething = async () => {
    const res = await axios(url + name);
    setData(res.data);
    console.log(res.data);
  };

  useEffect(() => {
    let intervalId = setTimeout(showSomething, 1000);
    return () => clearTimeout(intervalId);
  }, [name]);

  return (
    <div>
      <p>{state.name}</p>
      <p>{state.lastName}</p>
      <p>{state.email}</p>
      <p>{state.age}</p>
      <input
        type="text"
        name="name"
        onChange={(e) =>
          dispach({ type: "name", name: e.target.name, value: e.target.value })
        }
      />
      <input
        type="text"
        name="lastName"
        onChange={(e) =>
          dispach({ type: "name", name: e.target.name, value: e.target.value })
        }
      />
      <input
        type="text"
        name="email"
        onChange={(e) =>
          dispach({ type: "name", name: e.target.name, value: e.target.value })
        }
      />
      <input
        type="text"
        name="age"
        onChange={(e) =>
          dispach({ type: "name", name: e.target.name, value: e.target.value })
        }
      />

      <button onClick={() => dispach({ type: "hhhhh" })}>IMe</button>

      <div
        style={{
          backgroundColor: "yellow",
          width: "500px",
          height: "200px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input type="text" onChange={(e) => setName(e.target.value)} />
      </div>
      <div style={{ textAlign: "center" }}>
        {data &&
          data.map((item, i) => <p key={i}> {` ${i + 1}.${item.name}`}</p>)}
      </div>
    </div>
  );
};

export default ReducerTest;
