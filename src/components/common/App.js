import { React, useState, useEffect } from "react";
import "../../styles/app.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BasicInformation from "../user/basicInformation";
import Header from "./header";
import Footer from "./footer";
import SingleQuestionnaire from "./singleQuestionnaire";
import Questionnaire from "../user/questionnaire";
import Login from "../admin/login";
import { QuestionnaireContext } from "./questionnaireContext";
import Admin from "../admin/admin";
import AnketList from "../user/anketList";
import Statistics from "../admin/statistics";

let token = localStorage.getItem("token");

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Routes>
          {token !== null ? (
            <Route exact path="/" element={<Questionnaire />} />
          ) : (
            <Route exact path="/" element={<BasicInformation />} />
          )}
          <Route path="/login" element={<Login />} />
          <Route path="/ankets" element={<AnketList />} />
          <Route exact path="/admin/research" element={<Admin />} />
          <Route exact path="/statistics" element={<Statistics />} />
          <Route path="/questionnaire/:id" element={<SingleQuestionnaire />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
