import { React } from "react";
import { Box, Divider, Avatar, TextField, Typography } from "@mui/material";

const Answer = ({ myForm, handleChange, num }) => {
  return (
    <div>
      <TextField
        label="Add answer"
        name={`answer${num}`}
        variant="standard"
        value={myForm.answer}
        onChange={(e) => handleChange(e)}
      />

      <br />
    </div>
  );
};

export default Answer;
