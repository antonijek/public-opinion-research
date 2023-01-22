import React from "react";
import { Box, Card, CardContent, Typography, CardMedia } from "@mui/material";

const OneCard = ({ title, img }) => {
  return (
    <Box sx={{ mb: "1%", minWidth: "30vw" }}>
      <Card
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              {title}
            </Typography>
            <CardMedia component="img" sx={{ width: 50 }} image={img} alt="" />
          </CardContent>
          <Box
            sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
          ></Box>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 100, p: "2px" }}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxMskTYR1lnYH7Pb41TIlUvHZU4ta5FbBzhQ&usqp=CAU"
          alt="Diagram"
        />
      </Card>
    </Box>
  );
};

export default OneCard;
