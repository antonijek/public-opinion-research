import { React, useState } from "react";
import { Box, TextField, Button, Typography, Link } from "@mui/material";
import {
  confirmPassword,
  handlePasswordHelper,
  passwordRole,
  helperPasswordNode,
} from "../../utils";
import { postData } from "../../api";
import "../../styles/profile.css";

let token = localStorage.getItem("token");

const Profile = () => {
  const [logData, setLogData] = useState("");
  const [helperoldPassword, setHelperOldPassword] = useState();
  const [helperNewPassword, setHelperNewPassword] = useState();
  const [helperConfirmPassword, setHelperConfirmPassword] = useState();
  const [isCorrect, setIsCorrect] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    !e.value && setIsCorrect(false);
    setLogData({ ...logData, [name]: value });
  };

  const handleOldHelper = (e) => {
    const { value } = e.target;
    if (confirmPassword(value, "oldPass") === false)
      setHelperOldPassword("Pogresna lozinka");
    else {
      setHelperOldPassword("");
    }
    if (value.length < 1) setHelperOldPassword("");
  };

  const handleConfirmHelper = (e) => {
    const { value } = e.target;
    if (confirmPassword(value, logData.newPassword) === false)
      setHelperConfirmPassword("Ne pokklapaju se");
    else {
      setHelperConfirmPassword("");
    }
    if (value.length < 1) setHelperConfirmPassword("");
  };

  const submitData = async (e) => {
    e.preventDefault();

    if (
      !logData.oldPassword ||
      !logData.newPassword ||
      !logData.confirmPassword ||
      helperoldPassword ||
      helperNewPassword ||
      helperConfirmPassword
    ) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
      //await postData(logData, token);
    }
  };

  const handleNewPassword = (e) => {
    handleChange(e);
    handlePasswordHelper(e, passwordRole, setHelperNewPassword);
  };
  const handleOldPassword = (e) => {
    handleChange(e);
    handleOldHelper(e);
  };
  const handleConfirmPassword = (e) => {
    handleChange(e);
    handleConfirmHelper(e);
  };

  return (
    <Box
      sx={{
        backgroundColor: "white",
        minHeight: "80vh",
        pt: { xs: "20vw", sm: "5vw" },
      }}
    >
      <Box
        noValidate
        component="form"
        sx={{
          width: { xs: "90%", sm: "60%", md: "30%" },
          mx: "auto",
          minHeight: { xs: "70vh", sm: "auto" },

          boxShadow: { md: "20px 20px 50px #9E9E9E" },
          p: { xs: 2, md: 8 },
          backgroundColor: "white",
        }}
      >
        <Typography
          align="center"
          color="#519cae"
          variant="h4"
          gutterBottom
          component="div"
        >
          Change data
        </Typography>
        <TextField
          sx={{ my: { xs: "5%", md: "6%" } }}
          fullWidth
          type="password"
          label="Old password"
          variant="standard"
          required
          name="oldPassword"
          error={Boolean(helperoldPassword)}
          helperText={helperoldPassword ? helperoldPassword : null}
          onChange={(e) => handleOldPassword(e)}
        />
        <br />
        <TextField
          sx={{ mb: "5%" }}
          fullWidth
          type="password"
          label="New password"
          variant="standard"
          required
          name="newPassword"
          error={Boolean(helperNewPassword)}
          helperText={
            helperNewPassword && helperPasswordNode(helperNewPassword)
          }
          onChange={(e) => handleNewPassword(e)}
        />
        <br />
        <TextField
          sx={{ mb: "5%" }}
          fullWidth
          type="password"
          label="Confirm password"
          variant="standard"
          required
          name="confirmPassword"
          error={Boolean(helperConfirmPassword)}
          helperText={helperConfirmPassword ? helperConfirmPassword : null}
          onChange={(e) => handleConfirmPassword(e)}
        />
        <br />
        <Typography
          sx={{
            display: isCorrect ? "flex" : "none",
            justifyContent: "center",
            color: "#cb3464",
            fontSize: "1.5vw",
          }}
        >
          Popunite polja pravilno
        </Typography>
        <Button
          href={"/"}
          type="submit"
          variant="contained"
          sx={{ mt: "5%", mb: "3%", backgroundColor: "#519cae" }}
          fullWidth
          onClick={submitData}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default Profile;
