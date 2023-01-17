import { React, useContext } from "react";
import AdminPanel from "./adminPanel";
import { Box } from "@mui/material";
import OneCard from "./card";
import PieChart from "./pieChart";
import { QuestionnaireContext } from "./questionnaireContext";

const Statistics = () => {
  const { rows, setRows, currentResearch, setCurrentResearch, token } =
    useContext(QuestionnaireContext);

  let details = {
    img1: "https://icons-for-free.com/iconfiles/png/512/lady+scarf+woman+icon-1320166736647016492.png",
    img2: "https://icons-for-free.com/iconfiles/png/512/businessman+man+officer+work+icon-1320086520635711032.png",
    img3: "https://icons-for-free.com/iconfiles/png/512/boy+man+person+user+woman+icon-1320085967769585303.png",
    img4: "https://icons-for-free.com/iconfiles/png/512/headset+male+man+support+user+young+icon-1320196267025138334.png",
    img5: "https://icons-for-free.com/iconfiles/png/512/hipster+man+vintage+icon-1320166693479036884.png",
    img6: "https://icons-for-free.com/iconfiles/png/512/lawyer+man+with+phone+person+telephone+conversation+icon-1320086654422975010.png",
    img7: "https://icons-for-free.com/iconfiles/png/512/lady+user+woman+icon-1320166737958685846.png",
  };
  let { img1, img2, img3, img4, img5, img6, img7 } = details;
  return (
    <Box sx={{ display: "flex" }}>
      <AdminPanel />
      <Box
        sx={{
          display: "flex",
          backgroundColor: "#c5d6dd",
        }}
      >
        <Box sx={{ padding: 1 }}>
          <OneCard title="Women" img={img1} />
          <OneCard title="Men" img={img2} />
          <OneCard title="Under 18" img={img3} />
          <OneCard title="Between 18 and 25" img={img4} />
          <OneCard title="Between 25 and 35" img={img5} />
          <OneCard title="Between 35 and 50" img={img6} />
          <OneCard title="Over 50" img={img7} />
        </Box>
        <Box
          sx={{
            pt: 1,
            pr: 1,
          }}
        >
          <PieChart currentResearch={currentResearch} />
        </Box>
      </Box>
    </Box>
  );
};

export default Statistics;
