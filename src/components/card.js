import React from "react";
import { Box, Card, CardContent, Typography, CardMedia } from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";

const OneCard = ({ title }) => {
  return (
    <Box sx={{ m: "1%" }}>
      <Card
        sx={{
          display: "flex",
          justifyContent: "space-between",
          minWidth: "300px",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              Women
            </Typography>
            <CardMedia
              component="img"
              sx={{ width: 50 }}
              image="https://icons-for-free.com/iconfiles/png/512/female+person+user+woman+young+icon-1320196266256009072.png"
              alt="Girl"
            />
          </CardContent>
          <Box
            sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
          ></Box>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 100, p: "2px" }}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxMskTYR1lnYH7Pb41TIlUvHZU4ta5FbBzhQ&usqp=CAU"
          alt="Girl"
        />
      </Card>
    </Box>
  );
};

export default OneCard;
