import React from "react";
import { Box, TextField } from "@mui/material";
import "../styles/new-anket.css";
import useNewQuestionnaire from "../hooks/useNewQuestionnaire";

const NewQuestionnaire = () => {
  const {
    currentResearch,
    addAnswer,
    addQuestion,
    removeAnswer,
    removeQuestion,
    submitData,
    changeAnswer,
    changeQuestion,
    handleChange,
  } = useNewQuestionnaire();

  return (
    <Box sx={{ textAlign: "center", width: "40vw" }}>
      <TextField
        sx={{ mb: "5%", mt: "3%", width: "50%", justifyContent: "center" }}
        variant="standard"
        name="title"
        value={currentResearch.title}
        label="Title"
        inputProps={{ style: { textAlign: "center" } }}
        onChange={(e) => handleChange(e)}
      />

      {currentResearch.questions.map((question, i) => (
        <div key={i}>
          <Box>
            <TextField
              sx={{ width: "50%" }}
              variant="standard"
              value={question.title}
              onChange={(e) => changeQuestion(e, i)}
              label="Your question"
            />
            <button className="add" onClick={() => addQuestion(i)}>
              +
            </button>
            <button className="remove" onClick={() => removeQuestion(i)}>
              x
            </button>
          </Box>

          {question.options.map((answer, n) => (
            <Box key={n}>
              <TextField
                sx={{ width: "50%" }}
                variant="standard"
                label="Your answer"
                value={answer.option}
                name={answer["option"]}
                onChange={(e) => changeAnswer(e, i, n)}
              />
              <button className="add" onClick={() => addAnswer(i, n)}>
                +
              </button>
              <button className="remove" onClick={() => removeAnswer(i, n)}>
                x
              </button>
            </Box>
          ))}
        </div>
      ))}
      <button className="submit-btn" onClick={submitData}>
        Posalji
      </button>
    </Box>
  );
};

export default NewQuestionnaire;
