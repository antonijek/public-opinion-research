import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Box, TextField, Button, Typography, Link } from "@mui/material";
import { checkEmail, helperPasswordNode } from "../../utils";
import "../../styles/profile.css";

const allowedCredentials = [
  { name: "Antonije", email: "antonijek@yahoo.com", pass: "Antonije1" },
  { name: "Milutin", email: "milutin@yahoo.com", pass: "Milutin1" },
];

const Login = ({ setToken1 }) => {
  const navigate = useNavigate();

  const [lockedData] = useState(allowedCredentials);
  const [logData, setLogData] = useState("");
  const [helperEmail, setHelperEmail] = useState(false);
  const [helperPass, setHelperPass] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    !e.value && setIsCorrect(false);
    setLogData({ ...logData, [name]: value });
  };

  const handlePassword = (e) => {
    handleChange(e);
  };

  const handleEmail = (e) => {
    handleChange(e);
    checkEmail(e.target.value) === false
      ? setHelperEmail(true)
      : setHelperEmail(false);
    if (e.target.value.length < 1) setHelperEmail(false);
  };

  const checkData = (e) => {
    e.preventDefault();

    if (!logData.email || !logData.pass || helperEmail || helperPass) {
      setIsCorrect(true);
    } else {
      localStorage.setItem("admin", "Antonije");
      setIsCorrect(false);
      setToken1(localStorage.getItem("admin"));
      navigate("/admin/research");
    }
    /* 
    if (
      lockedData.email === logData.email &&
      lockedData.pass === logData.pass
    ) {
      navigate("/admin/research");
    }
    if (lockedData.email !== logData.email) {
      setHelperEmail(true);
    }
    if (lockedData.pass !== logData.pass) {
      setHelperPass(true);
    } */
  };

  return (
    <Box sx={{ backgroundColor: "white", minHeight: "80vh" }}>
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
          Sign in
        </Typography>
        <TextField
          onChange={(e) => handleEmail(e)}
          sx={{ my: { xs: "5%", md: "6%" } }}
          fullWidth
          type="email"
          label="Email"
          variant="standard"
          required
          name="email"
          error={helperEmail}
          helperText={helperEmail ? "Invalid email." : null}
        />
        <br />
        <TextField
          onChange={(e) => handlePassword(e)}
          sx={{ mb: "5%" }}
          fullWidth
          type="password"
          label="Password"
          variant="standard"
          required
          name="pass"
          error={Boolean(helperPass)}
          helperText={helperPass && helperPasswordNode(helperPass)}
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
          onClick={(e) => checkData(e)}
        >
          Log in
        </Button>

        <Link
          href="#"
          underline="hover"
          sx={{ display: "flex", justifyContent: "center", color: "#519cae" }}
        >
          {"Forgot password?"}
        </Link>
      </Box>
    </Box>
  );
};

export default Login;
