import { React, useState } from "react";
import { Box, Typography } from "@mui/material";
import Loader from "./loader";

const Anket = ({ data }) => {
  const [loader, setLoader] = useState(false);

  return (
    <Box sx={{ textAlign: "center", backgroundColor: "red", minWidth: "40%" }}>
      <Typography
        sx={{
          fontSize: { xs: "6vw", sm: "4vw", lg: "3vw" },
          textAlign: "center",
          pb: "2vw",
          pt: "2vw",
          fontWeight: "bold",
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
                    fontSize: { xs: "5vw", sm: "3vw", lg: "2vw" },
                    textAlign: "center",
                    fontWeight: "bold",
                    mb: "2vw",
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
      {loader && <Loader />}
    </Box>
  );
};

export default Anket;
