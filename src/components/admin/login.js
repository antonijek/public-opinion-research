import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, TextField, Button, Typography, Link } from "@mui/material";

const Login = () => {
  const navigate = useNavigate();

  const [lockedData] = useState({
    email: "antonijek@yahoo.com",
    pass: "123456",
  });
  const [logData, setLogData] = useState();
  const [helperEmail, setHelperEmail] = useState(false);
  const [helperPass, setHelperPass] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHelperEmail(false);
    setHelperPass(false);
    setLogData({ ...logData, [name]: value });
  };
  const checkData = (e) => {
    e.preventDefault();
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
    }
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
          Sign in
        </Typography>
        <TextField
          onChange={(e) => handleChange(e)}
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
          onChange={(e) => handleChange(e)}
          sx={{ mb: "5%" }}
          fullWidth
          type="password"
          label="Password"
          variant="standard"
          required
          name="pass"
          error={helperPass}
          helperText={helperPass ? "Invalid password." : null}
        />
        <br />

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
