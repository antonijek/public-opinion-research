import React from "react";
import { Box, Divider, Avatar, TextField, Typography } from "@mui/material";

const Question = ({ myForm, handleChange }) => {
  return (
    <Box>
      <TextField
        label="Add question"
        name="question"
        variant="standard"
        value={myForm.questionn}
        onChange={(e) => handleChange(e)}
        sx={{ m: "10%" }}
      />

      <br />
    </Box>
  );
};

export default Question;
