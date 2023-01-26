import { React, useEffect } from "react";
import { Box } from "@mui/material";
import { QuestionnaireContext } from "../common/questionnaireContext";
import AdminPanel from "./adminPanel";
import Wraper from "./wraper";
import useAdmin from "../../hooks/useAdmin";

const Admin = () => {
  const {
    rows,
    setRows,
    setCurrentResearch,
    option,
    setOption,
    currentResearch,
    addAnswer,
    addQuestion,
    removeAnswer,
    removeQuestion,
    submitData,
    changeAnswer,
    changeQuestion,
    handleChange,
  } = useAdmin();

  useEffect(() => {
    window.onpopstate = (e) => {
      setOption(1);
    };
  }, []);

  return (
    <Box className="admin-page">
      <QuestionnaireContext.Provider
        value={{
          rows,
          setRows,
          currentResearch,
          setCurrentResearch,
          option,
          setOption,
          addAnswer,
          addQuestion,
          removeAnswer,
          removeQuestion,
          submitData,
          changeAnswer,
          changeQuestion,
          handleChange,
        }}
      >
        <AdminPanel />
        <Wraper />
      </QuestionnaireContext.Provider>
    </Box>
  );
};

export default Admin;
