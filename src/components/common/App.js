import { React, useState } from "react";
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
import Profile from "../admin/profile";
import Test from "../user/test";

let token = localStorage.getItem("token");

const App = () => {
  const [token1, setToken1] = useState("");
  console.log(token1);
  return (
    <BrowserRouter>
      <Header token1={token1} setToken1={setToken1} />

      <div className="app">
        <Routes>
          {token !== null ? (
            <Route exact path="/" element={<Questionnaire />} />
          ) : (
            <Route exact path="/" element={<BasicInformation />} />
          )}
          <Route path="/login" element={<Login setToken1={setToken1} />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/ankets" element={<AnketList />} />
          <Route
            exact
            path="/admin/research"
            element={<Admin token1={token1} />}
          />
          <Route exact path="/statistics" element={<Statistics />} />
          <Route
            path="/admin/research/questionnaire/:id"
            element={<Admin token1={token1} />}
          />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
