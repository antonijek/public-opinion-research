import React from "react";
import AdminPanel from "./adminPanel";
import { Box } from "@mui/material";
import OneCard from "./card";

const Cards = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <AdminPanel />
      <Box sx={{ display: "flex" }}>
        <OneCard />
        <OneCard />
        <OneCard />
      </Box>
    </Box>
  );
};

export default Cards;
