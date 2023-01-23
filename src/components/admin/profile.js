import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, TextField, Button, Typography, Link } from "@mui/material";
import { confirmPassword } from "../../utils";
import { checkPassword } from "../../utils";
import { postData } from "../../api";
import "../../styles/profile.css";
import { yellow } from "@mui/material/colors";

let token = localStorage.getItem("token");

const newPassRole = {
  uppercase: "Unos mora da sadrži najmanje jedno veliko slovo",
  lowercase: "Unos mora da sadrži najmanje jedno malo slovo",
  number: "Unos mora da sadrži najmanje jedan broj",
  len: "Unos mora da sadrži najmanje 8 karaktera",
};

const Profile = () => {
  const [logData, setLogData] = useState();
  const [helperoldPassword, setHelperOldPassword] = useState();
  const [helperNewPassword, setHelperNewPassword] = useState();
  const [helperConfirmPassword, setHelperConfirmPassword] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogData({ ...logData, [name]: value });
  };
  // Ispravka na newPassword ako se ukuca polse confirma
  const handleNewHelper = (e) => {
    const { value } = e.target;
    let copyObj = { ...newPassRole };
    if (/[A-Z]/.test(value) === false) {
      copyObj.uppercase = "Unos mora da sadrži najmanje jedno veliko slovo";
    } else {
      copyObj.uppercase = "";
    }
    if (/[a-z]/.test(value) === false) {
      copyObj.lowercase = "Unos mora da sadrži najmanje jedno malo slovo";
    } else {
      copyObj.lowercase = "";
    }
    if (/[0-9]/.test(value) === false) {
      copyObj.number = "Unos mora da sadrži najmanje jedan broj";
    } else {
      copyObj.number = "";
    }
    if (value.length < 8) {
      copyObj.len = "Unos mora da sadrži najmanje 8 karaktera";
    } else {
      copyObj.len = "";
    }
    if (
      !copyObj.uppercase &&
      !copyObj.lowercase &&
      !copyObj.number &&
      !copyObj.len
    ) {
      setHelperNewPassword("");
    } else {
      setHelperNewPassword(copyObj);
    }
    if (value.length < 1) setHelperNewPassword("");
    console.log(helperNewPassword);
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
      console.log("nije poslato");
    } else {
      console.log("poslato");
      //await postData(logData, token);
    }
  };

  const handleNewPassword = (e) => {
    handleChange(e);
    handleNewHelper(e);
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
    <Box>
      <Box
        noValidate
        component="form"
        sx={{
          width: { xs: "90%", sm: "60%", md: "30%" },
          mx: "auto",
          minHeight: { xs: "70vh", sm: "auto" },
          mt: { xs: "20%", md: "3%" },
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
          //sx={{ mb: "5%" }}
          fullWidth
          type="password"
          label="New password"
          variant="standard"
          required
          name="newPassword"
          error={Boolean(helperNewPassword)}
          helperText={
            helperNewPassword && (
              <span>
                <span
                  className={helperNewPassword.len ? "visible" : "invisible"}
                >
                  {helperNewPassword.len}
                </span>

                <span
                  className={
                    helperNewPassword.uppercase ? "visible" : "invisible"
                  }
                >
                  {helperNewPassword.uppercase}
                </span>

                <span
                  className={
                    helperNewPassword.lowercase ? "visible" : "invisible"
                  }
                >
                  {helperNewPassword.lowercase}
                </span>

                <span
                  className={helperNewPassword.number ? "visible" : "invisible"}
                >
                  {helperNewPassword.number}
                </span>
              </span>
            )
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
