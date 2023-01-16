import { React, useContext } from "react";
import { QuestionnaireContext } from "./questionnaireContext";
import { Link } from "react-router-dom";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Avatar,
  Typography,
} from "@mui/material";
import StyleIcon from "@mui/icons-material/Style";
import DynamicFormIcon from "@mui/icons-material/DynamicForm";
import ScienceIcon from "@mui/icons-material/Science";
import ShowChartSharpIcon from "@mui/icons-material/ShowChartSharp";

const AdminPanel = () => {
  const { rows, currentResearch, setCurrentResearch, token } =
    useContext(QuestionnaireContext);

  const makeNewResearch = () => {
    setCurrentResearch(rows[rows.length - 1]);
    console.log("test");
  };
  console.log(currentResearch);
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        maxWidth: { sm: "35%", md: "20%", minWidth: "15vw" },
        bgcolor: "#d1e7dd",

        display: { xs: "none", sm: "block" },
      }}
    >
      <nav aria-label="main mailbox folders">
        <Divider sx={{ bgcolor: "white" }} />
        <List sx={{ mb: 4 }}>
          <Avatar
            sx={{
              mx: "auto",
              mt: "5%",
              width: { xs: "10vw", sm: "4vw" },
              height: { xs: "10vw", sm: "4vw" },
              color: "rgb(86, 88, 86);",
            }}
            src="/broken-image.jpg"
          />
          <Typography
            sx={{ textAlign: "center", mb: 4, mt: 2, color: "rgb(86, 88, 86)" }}
          >
            Admin
          </Typography>
          <Divider sx={{ bgcolor: "white" }} />
          <Link to="/cards">
            <ListItem disablePadding sx={{ mb: "5%" }}>
              <ListItemButton>
                <ListItemIcon>
                  <StyleIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Cards"
                  sx={{ color: "rgb(86, 88, 86)" }}
                />
              </ListItemButton>
            </ListItem>
          </Link>

          <ListItem disablePadding sx={{ mb: "5%", mt: "5%" }}>
            <ListItemButton>
              <ListItemIcon>
                <ScienceIcon />
              </ListItemIcon>
              <ListItemText
                primary="Research"
                sx={{ color: "rgb(86, 88, 86)" }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ mb: "10%" }}>
            <ListItemButton>
              <ListItemIcon>
                <ShowChartSharpIcon />
              </ListItemIcon>
              <ListItemText
                primary="Statistics"
                sx={{ color: "rgb(86, 88, 86)" }}
              />
            </ListItemButton>
          </ListItem>
          <Link to={`/questionnaire/${rows.length - 1}`}>
            <ListItem
              disablePadding
              sx={{ mt: "-5%" }}
              onClick={makeNewResearch}
            >
              <ListItemButton>
                <ListItemIcon>
                  <DynamicFormIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Make new research"
                  sx={{ color: "rgb(86, 88, 86)" }}
                />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
      </nav>
    </Box>
  );
};

export default AdminPanel;
