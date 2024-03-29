import { React } from "react";
import NewQuestionnaire from "../admin/newQuestionnaire";
import "../../styles/admin.css";
import Questionnaire from "../user/questionnaire";
import { Box } from "@mui/material";

const EditQuestionnaire = ({
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
}) => {
  return (
    <Box
      className="editQ"
      sx={{ width: "100%", display: { xs: "block", sm: "flex" } }}
    >
      <NewQuestionnaire
        data={currentResearch}
        addAnswer={addAnswer}
        addQuestion={addQuestion}
        removeAnswer={removeAnswer}
        removeQuestion={removeQuestion}
        submitData={submitData}
        changeAnswer={changeAnswer}
        changeQuestion={changeQuestion}
        handleChange={handleChange}
        loading={loading}
        width="100%"
      />
      <Questionnaire data={currentResearch} width="100%" />
    </Box>
  );
};

export default EditQuestionnaire;
