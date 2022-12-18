import { React, useState, useEffect } from "react";
import "../styles/app.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BasicInformation from "./basicInformation";
import Header from "./header";
import Footer from "./footer";
import Admin from "./admin";
import Anket from "./anket";
import { getData } from "../api";

const App = () => {
  const [data, setData] = useState([]);
  const [rows, setRows] = useState([]);

  const getAnkets = async () => {
    try {
      let res = await getData();
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
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route exact path="/" element={<BasicInformation />} />
          <Route
            path="/admin"
            element={<Admin data={data} setData={setData} rows={rows} />}
          />
          <Route path="/anket" element={<Anket data={data} />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
