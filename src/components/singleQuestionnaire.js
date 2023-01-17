import { React, useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import NewQuestionnaire from "./newQuestionnaire";
import "../styles/admin.css";
import Questionnaire from "./questionnaire";
import { Box } from "@mui/material";
import AdminPanel from "./adminPanel";
import { QuestionnaireContext } from "./questionnaireContext";
import { getOne } from "../api";

let token = localStorage.getItem("token");

const SingleQuestionnaire = () => {
  const { id } = useParams();
  const { rows, currentResearch, setCurrentResearch } =
    useContext(QuestionnaireContext);

  const getOneQuestionnaire = async () => {
    const res = await getOne(id, token);
    setTimeout(() => setCurrentResearch(res.data), 100);

    console.log(res.data);
  };

  useEffect(() => {
    getOneQuestionnaire();
  }, []);

  return (
    <Box className="admin-page">
      <AdminPanel />

      <Box className="wraper">
        <NewQuestionnaire />
        <Questionnaire width="40vw" data={currentResearch} />
      </Box>
    </Box>
  );
};

export default SingleQuestionnaire;
