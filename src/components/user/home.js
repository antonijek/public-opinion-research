import { React, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ token }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/anket");
    } else {
      navigate("/basic-information");
    }
  }, []);

  return <div></div>;
};

export default Home;
