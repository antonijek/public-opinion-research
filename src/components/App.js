import { React, useState, useEffect } from "react";
import "../styles/app.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BasicInformation from "./basicInformation";
import Header from "./header";
import Footer from "./footer";
import Admin from "./admin";
import Questionnaire from "./questionnaire";
import Login from "./login";
import { getData } from "../api";
import { QuestionnaireContext } from "./questionnaireContext";

let token = localStorage.getItem("token");

const App = () => {
  const [data, setData] = useState([]);
  const [rows, setRows] = useState([]);

  const getAnkets = async () => {
    try {
      let res = await getData(token);
      setData(res.data[res.data.length - 1]);
      setRows(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getAnkets();
  }, []);

  return (
    <BrowserRouter>
      <QuestionnaireContext.Provider
        value={{ data, setData, rows: rows, token }}
      >
        <Header />
        <div className="app">
          <Routes>
            {token !== null ? (
              <Route path="/" element={<Questionnaire />} />
            ) : (
              <Route exact path="/" element={<BasicInformation />} />
            )}

            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </div>
        <Footer />
      </QuestionnaireContext.Provider>
    </BrowserRouter>
  );
};

export default App;
