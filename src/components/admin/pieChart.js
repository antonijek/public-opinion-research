import { React, useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { CircularProgress, Typography, Box, Button } from "@mui/material";
import Loader from "../common/loader";

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  responsive: true,

  plugins: {
    legend: {
      labels: {
        padding: 2,
        boxWidth: 15,
        boxHeight: 6,
      },
    },
  },
};

export const data = {
  labels: [],
  datasets: [
    {
      label: "",

      data: [],
      backgroundColor: [],
      borderColor: [],
      borderWidth: 1,
    },
  ],
};

let backgroundColor = [
  "rgba(255, 99, 132, 0.2)",
  "rgba(54, 162, 235, 0.2)",
  "rgba(255, 206, 86, 0.2)",
  "rgba(75, 192, 192, 0.2)",
  "rgba(153, 102, 255, 0.2)",
  "rgba(255, 159, 64, 0.2)",
  "rgba(155, 119, 164, 0.2)",
];
let borderColor = [
  "rgba(255, 99, 132, 1)",
  "rgba(54, 162, 235, 1)",
  "rgba(255, 206, 86, 1)",
  "rgba(75, 192, 192, 1)",
  "rgba(153, 102, 255, 1)",
  "rgba(255, 159, 64, 1)",
  "rgba(0, 119, 164, 1)",
];

const PieChart = ({ currentResearch, percents, setPieParts }) => {
  const [chart, setChart] = useState(data);
  const [loading, setLoading] = useState(false);
  const [num, setNum] = useState(0);

  const getStatisticData = () => {
    try {
      //setLoading(true);
      //const res = await getStatistic(token);
      //setResponse(res);
      //setLoading(false);
      setChart({
        ...chart,
        labels: currentResearch.questions
          ? currentResearch.questions[num].options.map((item) => item.option)
          : [],

        //labels: res.data.data.items_sold_by_category.map((item) => item.name),
        datasets: [
          {
            label: "# of Votes",
            data: percents,
            //data: res.data.data.items_sold_by_category.map(
            //(item) => item.total
            // ),
            backgroundColor: backgroundColor,
            borderColor: borderColor,
            borderWidth: 1,
          },
        ],
      });
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    getStatisticData();
    Legend.defaults.display = false;
  }, [percents]);

  return (
    <Box sx={{ backgroundColor: "white", minWidth: "50vw", borderRadius: 1 }}>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {loading && <Loader />}
        <Box sx={{ width: { xs: "80vw", sm: "40vw" }, marginBottom: "5vw" }}>
          <Typography
            variant="h4"
            style={{
              marginTop: "2%",
              textAlign: "center",
              color: "#519cae",
              padding: "2vw",
            }}
          >
            {currentResearch.title}
          </Typography>
          {loading ? (
            <CircularProgress sx={{ display: "flex", mx: "auto" }} />
          ) : null}
          <Pie data={chart} options={options} />
        </Box>
      </Box>
      <Box>
        {currentResearch.questions
          ? currentResearch.questions?.map((item, i) => (
              <Button
                fullWidth
                onClick={() => {
                  setNum(i);
                  setPieParts(currentResearch.questions[i].options.length);
                }}
                sx={{
                  height: "auto",
                  mb: 0.5,
                  fontSize: { xs: "2.5vw", sm: "1.5vw" },
                  backgroundColor: "#519cae",

                  ":hover": {
                    bgcolor: " #d1e7dd",
                    color: "#519cae",
                  },
                }}
                key={i}
                variant="contained"
              >
                {`${i + 1}. ${item.title}`}
              </Button>
            ))
          : null}
      </Box>
    </Box>
  );
};
export default PieChart;
