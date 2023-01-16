import { React, useState, useContext } from "react";
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
        value={currentResearch.title || ""}
        label="Title"
        inputProps={{ style: { textAlign: "center" } }}
        onChange={(e) => handleChange(e)}
      />

      {currentResearch.questions
        ? currentResearch.questions.map((question, i) => (
            <div key={i}>
              <Box
                sx={{
                  mb: "5%",
                  mt: "5%",
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <TextField
                  sx={{ width: "80%" }}
                  variant="standard"
                  value={question.title}
                  onChange={(e) => changeQuestion(e, i)}
                  label="Your question"
                  inputProps={{
                    style: {
                      color: "white",
                      fontSize: "2.5vw",
                      textAlign: "center",
                    },
                  }}
                />
                <Box>
                  <button className="add" onClick={() => addQuestion(i)}>
                    +
                  </button>
                  <button className="remove" onClick={() => removeQuestion(i)}>
                    x
                  </button>
                </Box>
              </Box>

              <Box>
                <button className="add-first" onClick={() => addAnswer(i)}>
                  +
                </button>
                {question.options.map((answer, n) => (
                  <Box
                    key={n}
                    sx={{
                      display: "flex",
                      justifyContent: "space-around",
                      alignItems: "center",
                    }}
                  >
                    <TextField
                      sx={{ width: "50%" }}
                      variant="standard"
                      label="Your answer"
                      value={answer.option}
                      name={answer["option"]}
                      onChange={(e) => changeAnswer(e, i, n)}
                    />
                    <Box>
                      <button className="add" onClick={() => addAnswer(i, n)}>
                        +
                      </button>
                      <button
                        className="remove"
                        onClick={() => removeAnswer(i, n)}
                      >
                        x
                      </button>
                    </Box>
                  </Box>
                ))}
              </Box>
            </div>
          ))
        : null}
      <button className="submit-btn" onClick={submitData}>
        Posalji
      </button>
    </Box>
  );
};

export default NewQuestionnaire;
