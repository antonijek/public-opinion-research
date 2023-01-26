import { React, useContext, useState, useEffect } from "react";
import { Box } from "@mui/material";
import OneCard from "./card";
import PieChart from "./pieChart";
import { QuestionnaireContext } from "../common/questionnaireContext";
import Loader from "../common/loader";

const Statistics = () => {
  const { currentResearch } = useContext(QuestionnaireContext);
  const [pieParts, setPieParts] = useState(
    currentResearch.questions[0].options.length
  );
  const [percents, setPercents] = useState([]);
  const [loader, setLoader] = useState(false);

  let cardDetails = [
    {
      img: "https://icons-for-free.com/iconfiles/png/512/lady+scarf+woman+icon-1320166736647016492.png",
      title: "Woman",
    },
    {
      img: "https://icons-for-free.com/iconfiles/png/512/businessman+man+officer+work+icon-1320086520635711032.png",
      title: "Man",
    },
    {
      img: "https://icons-for-free.com/iconfiles/png/512/boy+man+person+user+woman+icon-1320085967769585303.png",
      title: "Under 18",
    },
    {
      img: "https://icons-for-free.com/iconfiles/png/512/headset+male+man+support+user+young+icon-1320196267025138334.png",
      title: "Age 18-25",
    },
    {
      img: "https://icons-for-free.com/iconfiles/png/512/hipster+man+vintage+icon-1320166693479036884.png",
      title: "Age 25-35",
    },
    {
      img: "https://icons-for-free.com/iconfiles/png/512/lawyer+man+with+phone+person+telephone+conversation+icon-1320086654422975010.png",
      title: "Age 35-50",
    },
    {
      img: "https://icons-for-free.com/iconfiles/png/512/lady+user+woman+icon-1320166737958685846.png",
      title: "Over 50",
    },
  ];

  const getRandomNumbers = () => {
    let arr = [];
    let num = Math.floor(100 / pieParts);

    for (let i = 0; i < pieParts - 1; i++) {
      let randomNum = Math.floor(Math.random() * num);
      arr.push(randomNum);
    }
    let finalNUm = arr.reduce((sum, item) => sum + item, 0);

    arr.push(100 - finalNUm);
    setPercents(arr);
  };

  useEffect(() => {
    getRandomNumbers();
  }, [pieParts]);

  return (
    <Box sx={{ display: "flex", backgroundColor: "#c5d6dd" }}>
      <Box sx={{ padding: 1 }}>
        {cardDetails.map((card, i) => (
          <Box key={i} onClick={() => getRandomNumbers()}>
            <OneCard title={card.title} img={card.img} />
          </Box>
        ))}
      </Box>
      <Box sx={{ pt: 1, pr: 1 }}>
        <PieChart
          currentResearch={currentResearch}
          percents={percents}
          setPieParts={setPieParts}
        />
      </Box>
    </Box>
  );
};

export default Statistics;
