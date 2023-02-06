import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";

const HideAdminPanel = ({ isOpen, setIsOpen }) => {
  return (
    <Box
      sx={{
        position: { xs: "relative" },
        left: isOpen
          ? { xs: "35vw", sm: "25vw", md: "20vw", lg: "15vw" }
          : "0vw",
        height: "100%",
        width: "15px",
        backgroundColor: "#193932",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        display: { xs: "flex", md: "none" },
      }}
    >
      {isOpen ? (
        <Button sx={{ color: "white" }}>
          <KeyboardDoubleArrowLeftIcon onClick={() => setIsOpen(!isOpen)} />
        </Button>
      ) : (
        <Button sx={{ color: "white" }}>
          <KeyboardDoubleArrowRightIcon onClick={() => setIsOpen(!isOpen)} />
        </Button>
      )}
    </Box>
  );
};

export default HideAdminPanel;
