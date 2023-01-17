import { React, useState, useEffect } from "react";
import "../styles/app.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BasicInformation from "./basicInformation";
import Header from "./header";
import Footer from "./footer";
import SingleQuestionnaire from "./singleQuestionnaire";
import Questionnaire from "./questionnaire";
import Login from "./login";
import { getData } from "../api";
import { QuestionnaireContext } from "./questionnaireContext";
import Admin from "./admin";
import AnketList from "./anketList";
import Statistics from "./statistics";

let token = localStorage.getItem("token");

const App = () => {
  const [rows, setRows] = useState([]);
  const [currentResearch, setCurrentResearch] = useState([]);

  const getAnkets = async () => {
    try {
      let res = await getData(token);
      setRows(res.data);
      setCurrentResearch(res.data[res.data.length - 1]);
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
        value={{ currentResearch, setCurrentResearch, rows, setRows, token }}
      >
        <Header />
        <div className="app">
          <Routes>
            {token !== null ? (
              <Route
                exact
                path="/"
                element={<Questionnaire data={currentResearch} />}
              />
            ) : (
              <Route exact path="/" element={<BasicInformation />} />
            )}

            <Route path="/login" element={<Login />} />
            <Route path="/ankets" element={<AnketList />} />
            <Route exact path="/admin/research" element={<Admin />} />
            <Route exact path="/statistics" element={<Statistics />} />
            <Route
              path="/questionnaire/:id"
              element={<SingleQuestionnaire />}
            />
          </Routes>
        </div>
        <Footer />
      </QuestionnaireContext.Provider>
    </BrowserRouter>
  );
};

export default App;
