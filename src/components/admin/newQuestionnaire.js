import { React } from "react";
import { Box, TextField } from "@mui/material";
import "../../styles/new-anket.css";

const NewQuestionnaire = ({
  data,
  width,
  addAnswer,
  addQuestion,
  removeAnswer,
  removeQuestion,
  submitData,
  changeAnswer,
  changeQuestion,
  handleChange,
}) => {
  return (
    <Box sx={{ textAlign: "center", width: { width } }}>
      <TextField
        sx={{
          mb: "5%",
          mt: "3%",
          width: "50%",
          justifyContent: "center",
        }}
        variant="standard"
        name="title"
        value={data.title || ""}
        label="Title"
        inputProps={{
          style: { textAlign: "center", fontSize: "2.5vw", color: "#519cae" },
        }}
        onChange={(e) => handleChange(e)}
      />

      {data.questions
        ? data.questions.map((question, i) => (
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
                  label="Question"
                  inputProps={{
                    style: {
                      color: "#519cae",
                      fontSize: "2vw",
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
                      justifyContent: "space-evenly",
                      alignItems: "center",
                    }}
                  >
                    <TextField
                      sx={{ width: "50%" }}
                      variant="standard"
                      label="Answer"
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
