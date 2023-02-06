import React from "react";
import { Box, Card, Typography, CardMedia } from "@mui/material";
import "../../styles/card.css";

const OneCard = ({ title, img }) => {
  return (
    <Box>
      <Card
        className="card"
        sx={{
          display: "flex",
          p: 0,
        }}
      >
        <Box sx={{ display: "flex", width: "30%", pb: "2px" }}>
          <CardMedia
            component="img"
            sx={{ width: "100%", height: "100%" }}
            image={img}
            alt=""
          />
        </Box>
        <Box sx={{ width: "35%", textAlign: "center" }}>
          <Typography
            sx={{ fontSize: { xs: "4vw", sm: "2vw" }, color: "#519cae" }}
            component="div"
          >
            {title}
          </Typography>
        </Box>

        <Box sx={{ width: "30%", ml: 2 }}>
          <CardMedia
            component="img"
            sx={{ width: "100%" }}
            image={"../../../graficon.png"}
            alt="Diagram"
          />{" "}
        </Box>
      </Card>
    </Box>
  );
};

export default OneCard;
