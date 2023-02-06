import { React, useState, useEffect } from "react";
import { Box } from "@mui/material";
import { QuestionnaireContext } from "../common/questionnaireContext";
import AdminPanel from "./adminPanel";
import Wraper from "./wraper";
import useAdmin from "../../hooks/useAdmin";
import HideAdminPanel from "./hideAdminPanel";

const Admin = ({ token1 }) => {
  const [isOpen, setIsOpen] = useState(true);

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
    loading,
    setLoading,
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
          loading,
          setLoading,
        }}
      >
        {isOpen && (
          <Box>
            <AdminPanel token1={token1} />
          </Box>
        )}

        <Box sx={{ zIndex: 1 }}>
          <HideAdminPanel isOpen={isOpen} setIsOpen={setIsOpen} />
        </Box>

        <Wraper />
      </QuestionnaireContext.Provider>
    </Box>
  );
};

export default Admin;
