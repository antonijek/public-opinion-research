import { React, useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Loader from "../common/loader";
import { getData } from "../../api";

let token = localStorage.getItem("token");

const Questionnaire = ({ data, width }) => {
  const [lastResearch, setLastResearch] = useState("");

  const getAllQuestionnaires = async () => {
    const res = await getData(token);
    setLastResearch(res.data[res.data.length - 1]);
  };

  useEffect(() => {
    if (data) setLastResearch(data);
    else {
      getAllQuestionnaires();
    }
  }, [data]);

  return (
    <Box
      className="quest"
      sx={{
        pb: "10vh",
        textAlign: "center",
        backgroundColor: "#C5D6DD",
        width: { width },
        minHeight: "80vh",
      }}
    >
      {!lastResearch && <Loader />}
      <Typography
        sx={{
          fontSize: { xs: "5vw", sm: "3.5vw", md: "3vw" },
          textAlign: "center",
          pb: "3vw",
          pt: "2vw",
          fontWeight: "bold",
          color: "rgb(86, 88, 86)",
        }}
      >
        {lastResearch.title}
      </Typography>

      {lastResearch.questions
        ? lastResearch.questions.map((question, i) => (
            <div key={i}>
              <Box>
                <Typography
                  sx={{
                    fontSize: { xs: "4vw", sm: "3vw", md: "2.5vw" },
                    textAlign: "center",
                    fontWeight: "bold",
                    mb: "5vw",
                    mt: "5vw",
                    paddingInline: "5vw",
                    color: "rgb(86, 88, 86)",
                  }}
                >
                  {question.title}
                </Typography>
              </Box>

              {question.options.map((answer, n) => (
                <Box
                  key={n}
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    pl: "2vw",
                  }}
                >
                  <input type="radio" name="option" />
                  <Typography
                    sx={{
                      textAlign: "center",
                      ml: "0.5vw",
                      mt: "0.5vw",
                      fontSize: { xs: "3vw", sm: "2.5vw", md: "1.5vw" },
                      color: "rgb(86, 88, 86)",
                    }}
                  >
                    {answer.option}
                  </Typography>
                </Box>
              ))}
            </div>
          ))
        : null}

      <button className="submit-btn">Posalji</button>
    </Box>
  );
};

export default Questionnaire;
