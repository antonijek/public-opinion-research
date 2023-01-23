import { React, useState, useEffect } from "react";
import "../../styles/app.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BasicInformation from "../user/basicInformation";
import Header from "./header";
import Footer from "./footer";
import Questionnaire from "../user/questionnaire";
import Login from "../admin/login";
import Admin from "../admin/admin";
import AnketList from "../user/anketList";
import Statistics from "../admin/statistics";
import { getData } from "../../api";
import Profile from "../admin/profile";

let token = localStorage.getItem("token");

const App = () => {
  const [data, setData] = useState([]);
  const [lastResearch, setLastResearch] = useState([]);

  const getAllQuestionnaires = async () => {
    const res = await getData(token);
    setData(res.data);
    setLastResearch(res.data[res.data.length - 1]);
  };

  useEffect(() => {
    getAllQuestionnaires();
  }, []);

  return (
    <BrowserRouter>
      <Header />

      <div className="app">
        <Routes>
          {token !== null ? (
            <Route
              exact
              path="/"
              element={<Questionnaire data={lastResearch} />}
            />
          ) : (
            <Route exact path="/" element={<BasicInformation />} />
          )}

          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/ankets" element={<AnketList />} />
          <Route exact path="/admin/research" element={<Admin />} />
          <Route exact path="/statistics" element={<Statistics />} />
          <Route path="/admin/research/questionnaire/:id" element={<Admin />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
