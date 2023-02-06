import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";

const HideAdminPanel = ({ isOpen, setIsOpen }) => {
  return (
    <Box
      sx={{
        zIndex: 3,
        position: { xs: "relative" },
        left: isOpen ? { xs: "30vw", sm: "25vw" } : "0vw",
        height: { xs: "5vw", sm: "80vh" },
        width: { xs: "5vw", sm: "2vw" },
        backgroundColor: "black",
        display: { xs: "flex", md: "none" },
        alignItems: "center",
        justifyContent: "center",
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
