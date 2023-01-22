import { React } from "react";
import { Box, Typography } from "@mui/material";

const Questionnaire = ({ data, width }) => {
  return (
    <Box
      sx={{
        textAlign: "center",
        backgroundColor: "#C5D6DD",
        width: { width },
        minHeight: "80vh",
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: "6vw", sm: "4vw" },
          textAlign: "center",
          pb: "3vw",
          pt: "2vw",
          fontWeight: "bold",
          color: "rgb(86, 88, 86)",
        }}
      >
        {data.title}
      </Typography>

      {data.questions
        ? data.questions.map((question, i) => (
            <div key={i}>
              <Box>
                <Typography
                  sx={{
                    fontSize: { xs: "5vw", sm: "3vw", lg: "3vw" },
                    textAlign: "center",
                    fontWeight: "bold",
                    mb: "3vw",
                    mt: "3vw",
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
                      fontSize: { xs: "4vw", sm: "2vw", lg: "1.5vw" },
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
