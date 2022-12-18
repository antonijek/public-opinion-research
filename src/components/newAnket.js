import React from "react";
import { Box, TextField } from "@mui/material";
import axios from "axios";
import "../styles/new-anket.css";

const NewAnket = ({ data, setData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const changeQuestion = (e, num) => {
    let copy = { ...data };
    copy.questions[num].title = e.target.value;
    setData(copy);
  };
  const changeAnswer = (e, num, num1) => {
    let copy = { ...data };
    copy.questions[num].options[num1].option = e.target.value;
    setData(copy);
  };
  const submitData = async () => {
    try {
      let copy = { ...data };
      copy.id = copy.length - 1;
      let res = await axios.post("http://localhost:8000/research", copy);
    } catch (err) {
      console.log(err);
    }
  };
  const removeAnswer = (question, answer) => {
    let copy = { ...data };
    let a = copy.questions[question].options;
    if (a.length > 1) {
      let x = a.filter((item) => item !== a[answer]);
      copy.questions[question].options = x;
    }
    setData(copy);
  };

  const removeQuestion = (question) => {
    let copy = { ...data };

    if (copy.questions.length > 1) {
      let filteredOptions = copy.questions.filter(
        (item) => item !== copy.questions[question]
      );
      copy.questions = filteredOptions;
    }

    setData(copy);
  };

  const addAnswer = (question, answer) => {
    let copy = { ...data };
    let x = copy.questions[question].options;
    let spreadAnswer = x
      .slice(0, answer)
      .concat({ option: "" })
      .concat(x.slice(answer));
    copy.questions[question].options = spreadAnswer;

    setData(copy);
  };

  const addQuestion = (num) => {
    let newAnswer = { title: "", options: [{ option: "" }] };
    let copy = { ...data };
    let spreadArr = copy.questions
      .slice(0, num)
      .concat(newAnswer)
      .concat(copy.questions.slice(num));
    copy.questions = spreadArr;

    setData(copy);
  };

  return (
    <Box sx={{ textAlign: "center", width: "100%" }}>
      <TextField
        sx={{ mb: "5%", mt: "3%", width: "50%", justifyContent: "center" }}
        variant="standard"
        name="title"
        value={data.title}
        label="Title"
        inputProps={{ style: { textAlign: "center" } }}
        onChange={(e) => handleChange(e)}
      />

      {data.questions.map((question, i) => (
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

export default NewAnket;
